// API client for communicating with qash-server (TypeScript backend)
// qash-server acts as a gateway to the Rust Miden server

// Default to qash-server port (4001) or use VITE_API_URL for development
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:4001";

// For testing, you can use a default company ID (update this with your actual company ID)
const DEFAULT_COMPANY_ID = 1;

// ============================================================================
// Types matching qash-server API (camelCase)
// ============================================================================

export interface CreateMultisigRequest {
  publicKeys: string[];  // Commitment hashes (32 bytes hex)
  threshold: number;
  companyId: number;
}

export interface CreateMultisigResponse {
  id: number;
  uuid: string;
  accountId: string;
  publicKeys: string[];
  threshold: number;
  companyId: number;
  createdAt: string;
  updatedAt: string;
}

export interface ServerAccount {
  id: number;
  uuid: string;
  accountId: string;
  publicKeys: string[];
  threshold: number;
  companyId: number;
  createdAt: string;
  updatedAt: string;
}

export interface AssetInfo {
  faucetId: string;
  amount: number;
}

export interface NoteInfo {
  noteId: string;
  assets: AssetInfo[];
  sender: string | null;
  noteType: string;
}

export interface GetNotesResponse {
  notes: NoteInfo[];
}

export interface CreateConsumeProposalRequest {
  accountId: string;
  description: string;
  noteIds: string[];
}

export interface CreateSendProposalRequest {
  accountId: string;
  description: string;
  recipientId: string;
  faucetId: string;
  amount: number;
}

export interface ProposeTransactionResponse {
  id: number;
  uuid: string;
  accountId: string;
  description: string;
  proposalType: "CONSUME" | "SEND";
  summaryCommitment: string;
  summaryBytesHex: string;
  requestBytesHex: string;
  status: "PENDING" | "READY" | "EXECUTED" | "FAILED";
  signaturesCount: number;
  threshold: number;
  createdAt: string;
  updatedAt: string;
}

export interface SignatureInfo {
  id: number;
  uuid: string;
  proposalId: number;
  approverIndex: number;
  approverPublicKey: string;
  signatureHex: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProposalDetail {
  id: number;
  uuid: string;
  accountId: string;
  description: string;
  proposalType: "CONSUME" | "SEND";
  summaryCommitment: string;
  summaryBytesHex: string;
  requestBytesHex: string;
  noteIds: string[];
  recipientId?: string;
  faucetId?: string;
  amount?: string;
  status: "PENDING" | "READY" | "EXECUTED" | "FAILED";
  transactionId?: string;
  signatures: SignatureInfo[];
  threshold: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProposalSummary {
  id: number;
  uuid: string;
  description: string;
  status: "PENDING" | "READY" | "EXECUTED" | "FAILED";
  signaturesCount: number;
  threshold: number;
  createdAt: string;
}

export interface SubmitSignatureRequest {
  approverIndex: number;
  approverPublicKey: string;
  signatureHex: string;
}

export interface SubmitSignatureResponse {
  id: number;
  uuid: string;
  proposalId: number;
  approverIndex: number;
  approverPublicKey: string;
  signatureHex: string;
  createdAt: string;
  updatedAt: string;
}

export interface ExecuteTransactionResponse {
  success: boolean;
  transactionId: string | null;
  error: string | null;
}

export interface HealthResponse {
  status: string;
  syncHeight?: number;
}

export interface AccountBalanceInfo {
  faucetId: string;
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
      // Add Bearer token if available (for production with authentication)
      // "Authorization": `Bearer ${getAuthToken()}`,
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
// API Methods - Updated for qash-server endpoints
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
    _originalPublicKeys: string[] // Not used in qash-server API
  ): Promise<CreateMultisigResponse> {
    return fetchApi<CreateMultisigResponse>("/multisig/accounts", {
      method: "POST",
      body: JSON.stringify({
        publicKeys: commitments,
        threshold,
        companyId: DEFAULT_COMPANY_ID, // TODO: Get from user context
      } as CreateMultisigRequest),
    });
  },

  async listAccounts(): Promise<ServerAccount[]> {
    // qash-server requires company ID to list accounts
    return fetchApi<ServerAccount[]>(`/multisig/companies/${DEFAULT_COMPANY_ID}/accounts`);
  },

  async getAccount(accountId: string): Promise<ServerAccount> {
    return fetchApi<ServerAccount>(`/multisig/accounts/${accountId}`);
  },

  async getConsumableNotes(accountId: string): Promise<NoteInfo[]> {
    const response = await fetchApi<GetNotesResponse>(
      `/multisig/accounts/${accountId}/notes`
    );
    return response.notes;
  },

  async getAccountBalances(accountId: string): Promise<AccountBalanceInfo[]> {
    const response = await fetchApi<GetBalancesResponse>(
      `/multisig/accounts/${accountId}/balances`
    );
    return response.balances;
  },

  // Create consume proposal (multisig - requires signing before execution)
  async createConsumeProposal(
    accountId: string,
    description: string,
    noteIds: string[]
  ): Promise<ProposeTransactionResponse> {
    return fetchApi<ProposeTransactionResponse>(`/multisig/proposals/consume`, {
      method: "POST",
      body: JSON.stringify({
        accountId,
        description,
        noteIds,
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
      `/multisig/proposals/send`,
      {
        method: "POST",
        body: JSON.stringify({
          accountId,
          description,
          recipientId,
          faucetId,
          amount,
        } as CreateSendProposalRequest),
      }
    );
  },

  async listProposals(accountId: string): Promise<ProposalSummary[]> {
    return fetchApi<ProposalSummary[]>(
      `/multisig/accounts/${accountId}/proposals`
    );
  },

  async getProposal(proposalId: string): Promise<ProposalDetail> {
    return fetchApi<ProposalDetail>(`/multisig/proposals/${proposalId}`);
  },

  async submitSignature(
    proposalId: string,
    approverIndex: number,
    approverPublicKey: string,
    signatureHex: string
  ): Promise<SubmitSignatureResponse> {
    return fetchApi<SubmitSignatureResponse>(`/multisig/proposals/${proposalId}/signatures`, {
      method: "POST",
      body: JSON.stringify({
        approverIndex,
        approverPublicKey,
        signatureHex,
      } as SubmitSignatureRequest),
    });
  },

  async executeTransaction(
    proposalId: string
  ): Promise<ExecuteTransactionResponse> {
    return fetchApi<ExecuteTransactionResponse>(
      `/multisig/proposals/${proposalId}/execute`,
      {
        method: "POST",
      }
    );
  },

  // Test/Development endpoints
  async createTestCompany(): Promise<{ message: string; company: { id: number; companyName: string } }> {
    return fetchApi(`/multisig/test/create-company`, {
      method: "POST",
    });
  },
};

export { ApiError };
