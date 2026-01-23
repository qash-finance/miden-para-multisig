// API client for communicating with the multisig server

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:3001";

// ============================================================================
// Types matching server API
// ============================================================================

export interface CreateMultisigRequest {
  threshold: number;
  /** Commitment hashes (32 bytes hex, from evmPkToCommitment) */
  public_keys: string[];
  /** Original uncompressed public keys (65 bytes hex, starting with 04) */
  original_public_keys: string[];
}

export interface CreateMultisigResponse {
  account_id: string;
  block_number: number;
}

export interface ServerAccount {
  account_id: string;
  approvers: string[];
  threshold: number;
  created_at: number;
  /** Original uncompressed public keys (65 bytes hex) for matching with user wallets */
  original_public_keys: string[];
}

export interface ListAccountsResponse {
  accounts: ServerAccount[];
}

export interface AssetInfo {
  faucet_id: string;
  amount: number;
}

export interface NoteInfo {
  note_id: string;
  assets: AssetInfo[];
  sender: string | null;
  note_type: string;
}

export interface GetNotesResponse {
  notes: NoteInfo[];
}

// Create consume proposal request/response (multisig - requires signing)
export interface CreateConsumeProposalRequest {
  description: string;
  note_ids: string[];
}

// Create send proposal request/response
export interface CreateSendProposalRequest {
  description: string;
  recipient_id: string;
  faucet_id: string;
  amount: number;
}

// Batch payout types
export interface BatchPayoutRecipient {
  recipient_id: string;
  faucet_id: string;
  amount: number;
}

export interface CreateBatchSendProposalRequest {
  description: string;
  recipients: BatchPayoutRecipient[];
}

export interface ProposeTransactionResponse {
  proposal_id: string;
  summary_commitment: string;
  status: string;
}

export interface SignatureInfo {
  approver_index: number;
  signed: boolean;
}

export interface ProposalDetail {
  proposal_id: string;
  account_id: string;
  description: string;
  summary_commitment: string;
  /** The transaction summary bytes (hex-encoded) that need to be signed */
  summary_bytes_hex: string;
  status: string;
  note_ids: string[];
  signatures: SignatureInfo[];
  threshold: number;
  created_at: number;
}

export interface ProposalSummary {
  proposal_id: string;
  description: string;
  status: string;
  signatures_count: number;
  threshold: number;
  created_at: number;
}

export interface ListProposalsResponse {
  proposals: ProposalSummary[];
}

export interface SubmitSignatureRequest {
  approver_index: number;
  approver_public_key: string;
  /** Hex-encoded serialized signature (from fromHexSig) */
  signature_hex: string;
}

export interface SubmitSignatureResponse {
  success: boolean;
  signatures_count: number;
  threshold: number;
  ready_to_execute: boolean;
}

export interface ExecuteTransactionResponse {
  success: boolean;
  transaction_id: string | null;
  error: string | null;
}

export interface HealthResponse {
  status: string;
  sync_height: number;
}

export interface AccountBalanceInfo {
  faucet_id: string;
  amount: number;
}

export interface GetBalancesResponse {
  balances: AccountBalanceInfo[];
}

// ============================================================================
// API Client
// ============================================================================

class ApiError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  console.log(`[API] ${options?.method || "GET"} ${url}`, options?.body);

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const text = await response.text();
    console.error(`[API] Error ${response.status}:`, text);
    throw new ApiError(response.status, text || response.statusText);
  }

  const data = await response.json();
  console.log(`[API] Response:`, data);
  return data;
}

// ============================================================================
// API Methods
// ============================================================================

export const api = {
  // Health check
  async health(): Promise<HealthResponse> {
    return fetchApi<HealthResponse>("/health");
  },

  // Account methods
  async createMultisig(
    threshold: number,
    commitments: string[],
    originalPublicKeys: string[]
  ): Promise<CreateMultisigResponse> {
    return fetchApi<CreateMultisigResponse>("/multisig", {
      method: "POST",
      body: JSON.stringify({
        threshold,
        public_keys: commitments,
        original_public_keys: originalPublicKeys,
      } as CreateMultisigRequest),
    });
  },

  async listAccounts(): Promise<ServerAccount[]> {
    const response = await fetchApi<ListAccountsResponse>("/multisig");
    return response.accounts;
  },

  async getAccount(accountId: string): Promise<ServerAccount> {
    return fetchApi<ServerAccount>(`/multisig/${accountId}`);
  },

  async getConsumableNotes(accountId: string): Promise<NoteInfo[]> {
    const response = await fetchApi<GetNotesResponse>(
      `/multisig/${accountId}/notes`
    );
    return response.notes;
  },

  async getAccountBalances(accountId: string): Promise<AccountBalanceInfo[]> {
    const response = await fetchApi<GetBalancesResponse>(
      `/multisig/${accountId}/balances`
    );
    return response.balances;
  },

  // Create consume proposal (multisig - requires signing before execution)
  async createConsumeProposal(
    accountId: string,
    description: string,
    noteIds: string[]
  ): Promise<ProposeTransactionResponse> {
    return fetchApi<ProposeTransactionResponse>(`/multisig/${accountId}/consume`, {
      method: "POST",
      body: JSON.stringify({
        description,
        note_ids: noteIds,
      } as CreateConsumeProposalRequest),
    });
  },

  // Create send proposal (multisig transaction)
  async createSendProposal(
    accountId: string,
    description: string,
    recipientId: string,
    faucetId: string,
    amount: number
  ): Promise<ProposeTransactionResponse> {
    return fetchApi<ProposeTransactionResponse>(
      `/multisig/${accountId}/send`,
      {
        method: "POST",
        body: JSON.stringify({
          description,
          recipient_id: recipientId,
          faucet_id: faucetId,
          amount,
        } as CreateSendProposalRequest),
      }
    );
  },

  // Create batch send proposal (multiple recipients in one transaction)
  async createBatchSendProposal(
    accountId: string,
    description: string,
    recipients: BatchPayoutRecipient[]
  ): Promise<ProposeTransactionResponse> {
    return fetchApi<ProposeTransactionResponse>(
      `/multisig/${accountId}/batch-send`,
      {
        method: "POST",
        body: JSON.stringify({
          description,
          recipients,
        } as CreateBatchSendProposalRequest),
      }
    );
  },

  async listProposals(accountId: string): Promise<ProposalSummary[]> {
    const response = await fetchApi<ListProposalsResponse>(
      `/multisig/${accountId}/proposals`
    );
    return response.proposals;
  },

  async getProposal(proposalId: string): Promise<ProposalDetail> {
    return fetchApi<ProposalDetail>(`/proposals/${proposalId}`);
  },

  async submitSignature(
    proposalId: string,
    approverIndex: number,
    approverPublicKey: string,
    signatureHex: string
  ): Promise<SubmitSignatureResponse> {
    return fetchApi<SubmitSignatureResponse>(`/proposals/${proposalId}/sign`, {
      method: "POST",
      body: JSON.stringify({
        approver_index: approverIndex,
        approver_public_key: approverPublicKey,
        signature_hex: signatureHex,
      } as SubmitSignatureRequest),
    });
  },

  async executeTransaction(
    proposalId: string
  ): Promise<ExecuteTransactionResponse> {
    return fetchApi<ExecuteTransactionResponse>(
      `/proposals/${proposalId}/execute`,
      {
        method: "POST",
      }
    );
  },
};

export { ApiError };
