export const MintAndConsumeStage = {
  CreatingFaucet: "CreatingFaucet",
  CreatedFaucet: "CreatedFaucet",
  MintingTokens: "MintingTokens",
  MintedTokens: "MintedTokens",
  ConsumingTokens: "ConsumingTokens",
  ConsumedTokens: "ConsumedTokens",
} as const;

export type MintAndConsumeStage = typeof MintAndConsumeStage[keyof typeof MintAndConsumeStage];

export interface MintAndConsumeProgress {
  stage: MintAndConsumeStage;
  faucetId?: string;
  mintTxHash?: string;
  consumeTxHash?: string;
}

// Multisig Types - Local UI state for signer names
export interface MultisigSigner {
  index: number;
  publicKey: string;
  name?: string;
}

// Multisig wallet - combines server data with local UI metadata
export interface MultisigWallet {
  // From server
  accountId: string;
  approvers: string[]; // Commitment hashes from server
  threshold: number;
  createdAt: number;
  originalPublicKeys: string[]; // Original uncompressed public keys (65 bytes hex)
  // Local UI metadata
  name: string;
  signers: MultisigSigner[]; // Local names for approvers
}

// Proposal from server
export interface MultisigProposal {
  proposalId: string;
  accountId: string;
  description: string;
  summaryCommitment: string;
  /** The transaction summary bytes (hex-encoded) that need to be signed */
  summaryBytesHex: string;
  status: ProposalStatus;
  noteIds: string[];
  signatures: ProposalSignature[];
  threshold: number;
  createdAt: number;
}

export interface ProposalSignature {
  approverIndex: number;
  signed: boolean;
}

export const ProposalStatus = {
  Pending: "Pending",
  Ready: "Ready",
  Executed: "Executed",
  Failed: "Failed",
} as const;

export type ProposalStatus = typeof ProposalStatus[keyof typeof ProposalStatus];

// Consumable note from server
export interface ConsumableNote {
  noteId: string;
  assets: NoteAsset[];
  sender: string | null;
  noteType: string;
}

export interface NoteAsset {
  faucetId: string;
  amount: number;
}

// Account balance/asset
export interface AccountBalance {
  faucetId: string;
  amount: number;
}

// Legacy types for backward compatibility (will be removed)
export interface MultisigTransaction {
  id: string;
  multisigWalletId: string;
  toAddress: string;
  amount: string;
  faucetId: string;
  status: MultisigTransactionStatus;
  signatures: MultisigSignatureOld[];
  requiredSignatures: number;
  createdAt: number;
  txHash?: string;
}

export interface MultisigSignatureOld {
  signerId: string;
  signerAddress: string;
  signature: string;
  signedAt: number;
}

export const MultisigTransactionStatus = {
  Pending: "pending",
  ReadyToExecute: "ready",
  Executed: "executed",
  Failed: "failed",
} as const;

export type MultisigTransactionStatus = typeof MultisigTransactionStatus[keyof typeof MultisigTransactionStatus];

export const CreateMultisigStage = {
  InputDetails: "InputDetails",
  AddingSigners: "AddingSigners",
  CreatingAccount: "CreatingAccount",
  Created: "Created",
} as const;

export type CreateMultisigStage = typeof CreateMultisigStage[keyof typeof CreateMultisigStage];

export const MultisigTxStage = {
  CreatingProposal: "CreatingProposal",
  WaitingForSignatures: "WaitingForSignatures",
  Signing: "Signing",
  Executing: "Executing",
  Completed: "Completed",
} as const;

export type MultisigTxStage = typeof MultisigTxStage[keyof typeof MultisigTxStage];
