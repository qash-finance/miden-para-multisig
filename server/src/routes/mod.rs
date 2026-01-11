use axum::{
    Router,
    routing::{get, post},
};

use crate::handlers::{health, multisig};
use crate::state::AppState;

pub fn create_routes() -> Router<AppState> {
    Router::new()
        // Health endpoints
        .route("/", get(health::root))
        .route("/health", get(health::health_check))

        // Multisig account endpoints
        .route("/multisig", get(multisig::list_accounts))
        .route("/multisig", post(multisig::create_multisig))
        .route("/multisig/{account_id}", get(multisig::get_account))
        .route("/multisig/{account_id}/notes", get(multisig::get_consumable_notes))
        .route("/multisig/{account_id}/balances", get(multisig::get_account_balances))

        // Transaction proposal endpoints (account-scoped) - both require multisig signing
        .route("/multisig/{account_id}/consume", post(multisig::create_consume_proposal))
        .route("/multisig/{account_id}/send", post(multisig::create_send_proposal))

        // Proposal endpoints (account-scoped)
        .route("/multisig/{account_id}/proposals", get(multisig::list_proposals))

        // Proposal endpoints (by proposal ID)
        .route("/proposals/{proposal_id}", get(multisig::get_proposal))
        .route("/proposals/{proposal_id}/sign", post(multisig::submit_signature))
        .route("/proposals/{proposal_id}/execute", post(multisig::execute_transaction))
}
