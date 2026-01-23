use std::time::{SystemTime, UNIX_EPOCH};

use axum::{
    Json,
    extract::{Path, State},
    http::StatusCode,
};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use crate::multisig::public_keys_from_hex;
use crate::state::AppState;
use crate::storage::{AssetInfo, MultisigAccountInfo, ProposalStatus, TransactionProposal};

// ============================================================================
// Request/Response Types
// ============================================================================

#[derive(Deserialize)]
pub struct CreateMultisigRequest {
    pub threshold: u32,
    /// Commitment hashes (32 bytes hex, from evmPkToCommitment)
    pub public_keys: Vec<String>,
    /// Original uncompressed public keys (65 bytes hex, starting with 04)
    /// These are needed for VM execution to verify signatures
    pub original_public_keys: Vec<String>,
}

#[derive(Serialize)]
pub struct CreateMultisigResponse {
    pub account_id: String,
    pub block_number: u32,
}

#[derive(Serialize)]
pub struct GetAccountResponse {
    pub account_id: String,
    pub approvers: Vec<String>,
    pub threshold: u32,
    pub created_at: u64,
    /// Original uncompressed public keys (65 bytes hex) for matching with user wallets
    pub original_public_keys: Vec<String>,
}

#[derive(Serialize)]
pub struct ListAccountsResponse {
    pub accounts: Vec<GetAccountResponse>,
}

#[derive(Serialize)]
pub struct GetNotesResponse {
    pub notes: Vec<NoteInfo>,
}

#[derive(Serialize)]
pub struct NoteInfo {
    pub note_id: String,
    pub assets: Vec<AssetInfo>,
    pub sender: Option<String>,
    pub note_type: String,
}

/// Request to create a consume notes proposal (for multisig)
#[derive(Deserialize)]
pub struct CreateConsumeProposalRequest {
    pub description: String,
    pub note_ids: Vec<String>,
}

/// Request to create a send transaction proposal
#[derive(Deserialize)]
pub struct CreateSendProposalRequest {
    pub description: String,
    pub recipient_id: String,
    pub faucet_id: String,
    pub amount: u64,
}

/// A single recipient in a batch payout
#[derive(Deserialize, Clone)]
pub struct BatchPayoutRecipient {
    pub recipient_id: String,
    pub faucet_id: String,
    pub amount: u64,
}

/// Request to create a batch payout proposal (multiple recipients in one transaction)
#[derive(Deserialize)]
pub struct CreateBatchSendProposalRequest {
    pub description: String,
    pub recipients: Vec<BatchPayoutRecipient>,
}

#[derive(Serialize)]
pub struct ProposeTransactionResponse {
    pub proposal_id: String,
    pub summary_commitment: String,
    pub status: String,
}

#[derive(Deserialize)]
pub struct SubmitSignatureRequest {
    pub approver_index: usize,
    pub approver_public_key: String,
    /// Signature as hex string (serialized format with auth scheme prefix)
    /// This is the output of fromHexSig() from miden-para
    pub signature_hex: String,
}

#[derive(Serialize)]
pub struct SubmitSignatureResponse {
    pub success: bool,
    pub signatures_count: usize,
    pub threshold: u32,
    pub ready_to_execute: bool,
}

#[derive(Serialize)]
pub struct GetProposalResponse {
    pub proposal_id: String,
    pub account_id: String,
    pub description: String,
    pub summary_commitment: String,
    /// The transaction summary bytes (hex-encoded) that need to be signed
    pub summary_bytes_hex: String,
    pub status: String,
    pub note_ids: Vec<String>,
    pub signatures: Vec<SignatureInfo>,
    pub threshold: u32,
    pub created_at: u64,
}

#[derive(Serialize)]
pub struct SignatureInfo {
    pub approver_index: usize,
    pub signed: bool,
}

#[derive(Serialize)]
pub struct ListProposalsResponse {
    pub proposals: Vec<ProposalSummary>,
}

#[derive(Serialize)]
pub struct ProposalSummary {
    pub proposal_id: String,
    pub description: String,
    pub status: String,
    pub signatures_count: usize,
    pub threshold: u32,
    pub created_at: u64,
}

#[derive(Serialize)]
pub struct ExecuteTransactionResponse {
    pub success: bool,
    pub transaction_id: Option<String>,
    pub error: Option<String>,
}

#[derive(Serialize)]
pub struct AccountBalanceInfo {
    pub faucet_id: String,
    pub amount: u64,
}

#[derive(Serialize)]
pub struct GetBalancesResponse {
    pub balances: Vec<AccountBalanceInfo>,
}

// ============================================================================
// Handlers
// ============================================================================

/// POST /multisig - Create a new multisig account
pub async fn create_multisig(
    State(state): State<AppState>,
    Json(payload): Json<CreateMultisigRequest>,
) -> Result<Json<CreateMultisigResponse>, StatusCode> {
    // Parse original public keys (65 bytes uncompressed) and compute commitments server-side
    // This ensures the commitment is computed the same way as the Miden VM expects
    let approvers = public_keys_from_hex(&payload.original_public_keys).map_err(|e| {
        tracing::error!("Failed to parse public keys: {}", e);
        StatusCode::BAD_REQUEST
    })?;

    // Convert commitments to hex strings for storage
    let approver_commitment_strings: Vec<String> = approvers.iter().map(|c| c.to_string()).collect();

    // Create the multisig account via the client command
    let account_id = state
        .client
        .create_multisig_account(approvers, payload.threshold)
        .await
        .map_err(|e| {
            tracing::error!("Failed to create multisig account: {}", e);
            StatusCode::INTERNAL_SERVER_ERROR
        })?;

    // Store account info
    let now = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap()
        .as_secs();

    state
        .storage
        .add_account(MultisigAccountInfo {
            account_id: account_id.clone(),
            // Store server-computed commitments (not frontend-provided public_keys)
            approvers: approver_commitment_strings,
            original_public_keys: payload.original_public_keys.clone(),
            threshold: payload.threshold,
            created_at: now,
        })
        .await;

    let block_number = state
        .client
        .get_sync_height()
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

    Ok(Json(CreateMultisigResponse {
        account_id,
        block_number,
    }))
}

/// GET /multisig/:account_id - Get a specific multisig account
pub async fn get_account(
    State(state): State<AppState>,
    Path(account_id): Path<String>,
) -> Result<Json<GetAccountResponse>, StatusCode> {
    let account = state
        .storage
        .get_account(&account_id)
        .await
        .ok_or(StatusCode::NOT_FOUND)?;

    Ok(Json(GetAccountResponse {
        account_id: account.account_id,
        approvers: account.approvers,
        threshold: account.threshold,
        created_at: account.created_at,
        original_public_keys: account.original_public_keys,
    }))
}

/// GET /multisig - List all multisig accounts
pub async fn list_accounts(State(state): State<AppState>) -> Json<ListAccountsResponse> {
    let accounts = state.storage.list_accounts().await;

    let accounts: Vec<GetAccountResponse> = accounts
        .into_iter()
        .map(|a| GetAccountResponse {
            account_id: a.account_id,
            approvers: a.approvers,
            threshold: a.threshold,
            created_at: a.created_at,
            original_public_keys: a.original_public_keys,
        })
        .collect();

    Json(ListAccountsResponse { accounts })
}

/// GET /multisig/:account_id/notes - Get consumable notes for an account
pub async fn get_consumable_notes(
    State(state): State<AppState>,
    Path(account_id): Path<String>,
) -> Result<Json<GetNotesResponse>, StatusCode> {
    // Note: sync_state is called inside get_consumable_notes implementation
    let notes = state
        .client
        .get_consumable_notes(account_id)
        .await
        .map_err(|e| {
            tracing::error!("Failed to get consumable notes: {}", e);
            StatusCode::INTERNAL_SERVER_ERROR
        })?;

    let notes: Vec<NoteInfo> = notes
        .into_iter()
        .map(|n| NoteInfo {
            note_id: n.note_id,
            assets: n.assets,
            sender: n.sender,
            note_type: n.note_type,
        })
        .collect();

    Ok(Json(GetNotesResponse { notes }))
}

/// POST /multisig/:account_id/consume - Create a consume notes proposal (for multisig)
pub async fn create_consume_proposal(
    State(state): State<AppState>,
    Path(account_id): Path<String>,
    Json(payload): Json<CreateConsumeProposalRequest>,
) -> Result<Json<ProposeTransactionResponse>, StatusCode> {
    // Verify account exists in our storage
    let _account = state
        .storage
        .get_account(&account_id)
        .await
        .ok_or(StatusCode::NOT_FOUND)?;

    // Create the consume proposal via client
    let result = state
        .client
        .create_consume_proposal(account_id.clone(), payload.note_ids.clone())
        .await
        .map_err(|e| {
            tracing::error!("Failed to create consume proposal: {}", e);
            StatusCode::INTERNAL_SERVER_ERROR
        })?;

    // Generate proposal ID and store
    let proposal_id = Uuid::new_v4().to_string();
    let now = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap()
        .as_secs();

    let proposal = TransactionProposal {
        proposal_id: proposal_id.clone(),
        account_id: account_id.clone(),
        description: payload.description,
        summary_commitment: result.summary_commitment.clone(),
        summary_bytes: result.summary_bytes,
        request_bytes: result.request_bytes,
        signatures: std::collections::HashMap::new(),
        status: ProposalStatus::Pending,
        created_at: now,
        note_ids: payload.note_ids, // Store note IDs for consume proposals
    };

    state.storage.create_proposal(proposal).await;

    Ok(Json(ProposeTransactionResponse {
        proposal_id,
        summary_commitment: result.summary_commitment,
        status: "pending".to_string(),
    }))
}

/// POST /multisig/:account_id/send - Create a send transaction proposal (for multisig)
pub async fn create_send_proposal(
    State(state): State<AppState>,
    Path(account_id): Path<String>,
    Json(payload): Json<CreateSendProposalRequest>,
) -> Result<Json<ProposeTransactionResponse>, StatusCode> {
    // Verify account exists
    let _account = state
        .storage
        .get_account(&account_id)
        .await
        .ok_or(StatusCode::NOT_FOUND)?;

    // Create the send proposal via client
    let result = state
        .client
        .create_send_proposal(
            account_id.clone(),
            payload.recipient_id,
            payload.faucet_id,
            payload.amount,
        )
        .await
        .map_err(|e| {
            tracing::error!("Failed to create send proposal: {}", e);
            StatusCode::INTERNAL_SERVER_ERROR
        })?;

    // Generate proposal ID and store
    let proposal_id = Uuid::new_v4().to_string();
    let now = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap()
        .as_secs();

    let proposal = TransactionProposal {
        proposal_id: proposal_id.clone(),
        account_id: account_id.clone(),
        description: payload.description,
        summary_commitment: result.summary_commitment.clone(),
        summary_bytes: result.summary_bytes,
        request_bytes: result.request_bytes,
        signatures: std::collections::HashMap::new(),
        status: ProposalStatus::Pending,
        created_at: now,
        note_ids: vec![], // Send proposals don't consume specific notes
    };

    state.storage.create_proposal(proposal).await;

    Ok(Json(ProposeTransactionResponse {
        proposal_id,
        summary_commitment: result.summary_commitment,
        status: "pending".to_string(),
    }))
}

/// POST /multisig/:account_id/batch-send - Create a batch payout proposal (multiple recipients)
pub async fn create_batch_send_proposal(
    State(state): State<AppState>,
    Path(account_id): Path<String>,
    Json(payload): Json<CreateBatchSendProposalRequest>,
) -> Result<Json<ProposeTransactionResponse>, StatusCode> {
    // Verify account exists
    let _account = state
        .storage
        .get_account(&account_id)
        .await
        .ok_or(StatusCode::NOT_FOUND)?;

    // Validate we have at least one recipient
    if payload.recipients.is_empty() {
        tracing::error!("Batch send proposal has no recipients");
        return Err(StatusCode::BAD_REQUEST);
    }

    // Create the batch send proposal via client
    let result = state
        .client
        .create_batch_send_proposal(
            account_id.clone(),
            payload.recipients,
        )
        .await
        .map_err(|e| {
            tracing::error!("Failed to create batch send proposal: {}", e);
            StatusCode::INTERNAL_SERVER_ERROR
        })?;

    // Generate proposal ID and store
    let proposal_id = Uuid::new_v4().to_string();
    let now = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap()
        .as_secs();

    let proposal = TransactionProposal {
        proposal_id: proposal_id.clone(),
        account_id: account_id.clone(),
        description: payload.description,
        summary_commitment: result.summary_commitment.clone(),
        summary_bytes: result.summary_bytes,
        request_bytes: result.request_bytes,
        signatures: std::collections::HashMap::new(),
        status: ProposalStatus::Pending,
        created_at: now,
        note_ids: vec![], // Batch send proposals don't consume specific notes
    };

    state.storage.create_proposal(proposal).await;

    Ok(Json(ProposeTransactionResponse {
        proposal_id,
        summary_commitment: result.summary_commitment,
        status: "pending".to_string(),
    }))
}

/// GET /multisig/:account_id/proposals - List all proposals for an account
pub async fn list_proposals(
    State(state): State<AppState>,
    Path(account_id): Path<String>,
) -> Result<Json<ListProposalsResponse>, StatusCode> {
    // Verify account exists
    let account = state
        .storage
        .get_account(&account_id)
        .await
        .ok_or(StatusCode::NOT_FOUND)?;

    let proposals = state.storage.get_account_proposals(&account_id).await;

    let proposals: Vec<ProposalSummary> = proposals
        .into_iter()
        .map(|p| ProposalSummary {
            proposal_id: p.proposal_id,
            description: p.description,
            status: format!("{:?}", p.status),
            signatures_count: p.signatures.len(),
            threshold: account.threshold,
            created_at: p.created_at,
        })
        .collect();

    Ok(Json(ListProposalsResponse { proposals }))
}

/// GET /proposals/:proposal_id - Get a specific proposal
pub async fn get_proposal(
    State(state): State<AppState>,
    Path(proposal_id): Path<String>,
) -> Result<Json<GetProposalResponse>, StatusCode> {
    let proposal = state
        .storage
        .get_proposal(&proposal_id)
        .await
        .ok_or(StatusCode::NOT_FOUND)?;

    let account = state
        .storage
        .get_account(&proposal.account_id)
        .await
        .ok_or(StatusCode::NOT_FOUND)?;

    // Build signature info for each approver
    let signatures: Vec<SignatureInfo> = (0..account.approvers.len())
        .map(|i| SignatureInfo {
            approver_index: i,
            signed: proposal.signatures.contains_key(&i),
        })
        .collect();

    // Convert summary_bytes to hex string for frontend
    let summary_bytes_hex = hex::encode(&proposal.summary_bytes);

    Ok(Json(GetProposalResponse {
        proposal_id: proposal.proposal_id,
        account_id: proposal.account_id,
        description: proposal.description,
        summary_commitment: proposal.summary_commitment,
        summary_bytes_hex,
        status: format!("{:?}", proposal.status),
        note_ids: proposal.note_ids,
        signatures,
        threshold: account.threshold,
        created_at: proposal.created_at,
    }))
}

/// POST /proposals/:proposal_id/sign - Submit a signature for a proposal
pub async fn submit_signature(
    State(state): State<AppState>,
    Path(proposal_id): Path<String>,
    Json(payload): Json<SubmitSignatureRequest>,
) -> Result<Json<SubmitSignatureResponse>, StatusCode> {
    // Get proposal
    let proposal = state
        .storage
        .get_proposal(&proposal_id)
        .await
        .ok_or(StatusCode::NOT_FOUND)?;

    // Get account to verify approver index and get threshold
    let account = state
        .storage
        .get_account(&proposal.account_id)
        .await
        .ok_or(StatusCode::NOT_FOUND)?;

    // Verify approver index is valid
    if payload.approver_index >= account.original_public_keys.len() {
        return Err(StatusCode::BAD_REQUEST);
    }

    // Verify the public key matches the approver at this index
    // Compare using original public keys (raw uncompressed format)
    let expected_key = &account.original_public_keys[payload.approver_index];
    if !keys_match(expected_key, &payload.approver_public_key) {
        tracing::error!(
            "Public key mismatch for approver {}: expected {}, got {}",
            payload.approver_index,
            expected_key,
            payload.approver_public_key
        );
        return Err(StatusCode::BAD_REQUEST);
    }

    // Store the signature as hex string (serialized format from frontend)
    state
        .storage
        .add_signature(&proposal_id, payload.approver_index, payload.signature_hex)
        .await
        .map_err(|e| {
            tracing::error!("Failed to add signature: {}", e);
            StatusCode::BAD_REQUEST
        })?;

    // Check if we have enough signatures
    let ready = state
        .storage
        .check_threshold(&proposal_id)
        .await
        .unwrap_or(false);

    // Update status if ready
    if ready {
        let _ = state
            .storage
            .update_proposal_status(&proposal_id, ProposalStatus::Ready)
            .await;
    }

    // Get updated proposal for signature count
    let updated_proposal = state.storage.get_proposal(&proposal_id).await.unwrap();

    Ok(Json(SubmitSignatureResponse {
        success: true,
        signatures_count: updated_proposal.signatures.len(),
        threshold: account.threshold,
        ready_to_execute: ready,
    }))
}

/// POST /proposals/:proposal_id/execute - Execute a proposal that has enough signatures
pub async fn execute_transaction(
    State(state): State<AppState>,
    Path(proposal_id): Path<String>,
) -> Result<Json<ExecuteTransactionResponse>, StatusCode> {
    // Get proposal
    let proposal = state
        .storage
        .get_proposal(&proposal_id)
        .await
        .ok_or(StatusCode::NOT_FOUND)?;

    // Check if proposal is ready
    if proposal.status != ProposalStatus::Ready && proposal.status != ProposalStatus::Pending {
        return Ok(Json(ExecuteTransactionResponse {
            success: false,
            transaction_id: None,
            error: Some(format!(
                "Proposal is not ready for execution: {:?}",
                proposal.status
            )),
        }));
    }

    // Get account to check threshold
    let account = state
        .storage
        .get_account(&proposal.account_id)
        .await
        .ok_or(StatusCode::NOT_FOUND)?;

    // Check threshold
    let has_enough = state
        .storage
        .check_threshold(&proposal_id)
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

    if !has_enough {
        return Ok(Json(ExecuteTransactionResponse {
            success: false,
            transaction_id: None,
            error: Some("Not enough signatures".to_string()),
        }));
    }

    // Convert signatures from storage format to execution format
    // Storage has HashMap<usize, String> (hex), we need Vec<Option<String>>
    let num_approvers = account.approvers.len();
    let signatures_hex: Vec<Option<String>> = (0..num_approvers)
        .map(|i| proposal.signatures.get(&i).cloned())
        .collect();

    // Get the original public keys (needed for advice map - VM needs full keys to verify signatures)
    // Note: account.approvers contains commitments, account.original_public_keys contains the raw keys
    let public_keys_hex = account.original_public_keys.clone();

    // Execute the multisig transaction
    match state
        .client
        .execute_multisig_transaction(
            proposal.account_id.clone(),
            proposal.request_bytes.clone(),
            proposal.summary_bytes.clone(),
            signatures_hex,
            public_keys_hex,
        )
        .await
    {
        Ok(tx_id) => {
            // Mark as executed
            let _ = state
                .storage
                .update_proposal_status(&proposal_id, ProposalStatus::Executed)
                .await;

            Ok(Json(ExecuteTransactionResponse {
                success: true,
                transaction_id: Some(tx_id),
                error: None,
            }))
        }
        Err(e) => {
            tracing::error!("Failed to execute multisig transaction: {}", e);
            Ok(Json(ExecuteTransactionResponse {
                success: false,
                transaction_id: None,
                error: Some(e),
            }))
        }
    }
}

/// GET /multisig/:account_id/balances - Get account balances (assets)
pub async fn get_account_balances(
    State(state): State<AppState>,
    Path(account_id): Path<String>,
) -> Result<Json<GetBalancesResponse>, StatusCode> {
    let balances = state
        .client
        .get_account_balances(account_id)
        .await
        .map_err(|e| {
            tracing::error!("Failed to get account balances: {}", e);
            StatusCode::INTERNAL_SERVER_ERROR
        })?;

    let balances: Vec<AccountBalanceInfo> = balances
        .into_iter()
        .map(|b| AccountBalanceInfo {
            faucet_id: b.faucet_id,
            amount: b.amount,
        })
        .collect();

    Ok(Json(GetBalancesResponse { balances }))
}

// ============================================================================
// Helper Functions
// ============================================================================

/// Check if two public keys match (normalizing format)
fn keys_match(key1: &str, key2: &str) -> bool {
    let normalize = |k: &str| k.to_lowercase().trim_start_matches("0x").to_string();
    normalize(key1) == normalize(key2)
}
