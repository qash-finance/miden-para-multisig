import { useState, useCallback, useEffect } from "react";
import { api } from "../lib/api";
import { evmPkToCommitment } from "../lib/utils";
import type {
  MultisigWallet,
  MultisigSigner,
  MultisigProposal,
  ConsumableNote,
  ProposalStatus,
  AccountBalance,
} from "../lib/types";

// Local storage key for wallet metadata (names)
const STORAGE_KEY_WALLET_METADATA = "miden_multisig_wallet_metadata";

interface WalletMetadata {
  accountId: string;
  name: string;
  signerNames: Record<number, string>; // index -> name
}

export function useMultisig() {
  const [wallets, setWallets] = useState<MultisigWallet[]>([]);
  const [proposals, setProposals] = useState<
    Record<string, MultisigProposal[]>
  >({});
  const [consumableNotes, setConsumableNotes] = useState<
    Record<string, ConsumableNote[]>
  >({});
  const [balances, setBalances] = useState<Record<string, AccountBalance[]>>(
    {}
  );
  const [selectedWallet, setSelectedWallet] = useState<MultisigWallet | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load wallet metadata from localStorage
  const loadWalletMetadata = useCallback((): WalletMetadata[] => {
    const stored = localStorage.getItem(STORAGE_KEY_WALLET_METADATA);
    return stored ? JSON.parse(stored) : [];
  }, []);

  // Save wallet metadata to localStorage
  const saveWalletMetadata = useCallback((metadata: WalletMetadata[]) => {
    localStorage.setItem(STORAGE_KEY_WALLET_METADATA, JSON.stringify(metadata));
  }, []);

  // Merge server accounts with local metadata
  const mergeWithMetadata = useCallback(
    (
      serverAccounts: Awaited<ReturnType<typeof api.listAccounts>>
    ): MultisigWallet[] => {
      const metadata = loadWalletMetadata();

      return serverAccounts.map((account) => {
        const meta = metadata.find((m) => m.accountId === account.account_id);
        const signers: MultisigSigner[] = account.original_public_keys.map(
          (pk, index) => ({
            index,
            publicKey: pk,
            name: meta?.signerNames[index],
          })
        );

        return {
          accountId: account.account_id,
          approvers: account.approvers,
          threshold: account.threshold,
          createdAt: account.created_at,
          originalPublicKeys: account.original_public_keys,
          name: meta?.name || `Multisig ${account.account_id.slice(0, 8)}...`,
          signers,
        };
      });
    },
    [loadWalletMetadata]
  );

  // Fetch all wallets from server
  const fetchWallets = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const serverAccounts = await api.listAccounts();
      const merged = mergeWithMetadata(serverAccounts);
      setWallets(merged);
      return merged;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to fetch wallets";
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [mergeWithMetadata]);

  // Fetch proposals for an account
  const fetchProposals = useCallback(
    async (accountId: string): Promise<MultisigProposal[]> => {
      try {
        const serverProposals = await api.listProposals(accountId);

        // Fetch full details for each proposal to get signature info
        const detailedProposals = await Promise.all(
          serverProposals.map(async (p) => {
            const detail = await api.getProposal(p.proposal_id);
            return {
              proposalId: detail.proposal_id,
              accountId: detail.account_id,
              description: detail.description,
              summaryCommitment: detail.summary_commitment,
              summaryBytesHex: detail.summary_bytes_hex,
              status: detail.status as ProposalStatus,
              noteIds: detail.note_ids,
              signatures: detail.signatures.map((s) => ({
                approverIndex: s.approver_index,
                signed: s.signed,
              })),
              threshold: detail.threshold,
              createdAt: detail.created_at,
            } as MultisigProposal;
          })
        );

        setProposals((prev) => ({ ...prev, [accountId]: detailedProposals }));
        return detailedProposals;
      } catch (err) {
        console.error("Failed to fetch proposals:", err);
        throw err;
      }
    },
    []
  );

  // Fetch consumable notes for an account
  const fetchConsumableNotes = useCallback(
    async (accountId: string): Promise<ConsumableNote[]> => {
      try {
        const notes = await api.getConsumableNotes(accountId);
        const mapped: ConsumableNote[] = notes.map((n) => ({
          noteId: n.note_id,
          assets: n.assets.map((a) => ({
            faucetId: a.faucet_id,
            amount: a.amount,
          })),
          sender: n.sender,
          noteType: n.note_type,
        }));

        setConsumableNotes((prev) => ({ ...prev, [accountId]: mapped }));
        return mapped;
      } catch (err) {
        console.error("Failed to fetch consumable notes:", err);
        throw err;
      }
    },
    []
  );

  // Fetch balances for an account
  const fetchBalances = useCallback(
    async (accountId: string): Promise<AccountBalance[]> => {
      try {
        const serverBalances = await api.getAccountBalances(accountId);
        const mapped: AccountBalance[] = serverBalances.map((b) => ({
          faucetId: b.faucet_id,
          amount: b.amount,
        }));

        setBalances((prev) => ({ ...prev, [accountId]: mapped }));
        return mapped;
      } catch (err) {
        console.error("Failed to fetch balances:", err);
        throw err;
      }
    },
    []
  );

  // Create a new multisig wallet
  const createMultisigWallet = useCallback(
    async (
      name: string,
      threshold: number,
      signers: Array<{ publicKey: string; name?: string }>
    ): Promise<MultisigWallet> => {
      setIsLoading(true);
      setError(null);

      try {
        // Convert EVM public keys to Miden commitments
        const commitments = await Promise.all(
          signers.map((s) => evmPkToCommitment(s.publicKey))
        );
        console.log("signers", signers, "commitment", commitments);
        // Keep original public keys for VM execution (needed to verify signatures)
        const originalPublicKeys = signers.map((s) => s.publicKey);
        const response = await api.createMultisig(
          threshold,
          originalPublicKeys,
          originalPublicKeys
        );

        // Save local metadata
        const metadata = loadWalletMetadata();
        const signerNames: Record<number, string> = {};
        signers.forEach((s, i) => {
          if (s.name) signerNames[i] = s.name;
        });

        metadata.push({
          accountId: response.account_id,
          name,
          signerNames,
        });
        saveWalletMetadata(metadata);

        // Refresh wallets list
        const updated = await fetchWallets();
        const newWallet = updated.find(
          (w) => w.accountId === response.account_id
        );

        if (!newWallet) {
          throw new Error("Failed to find newly created wallet");
        }

        return newWallet;
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to create multisig";
        setError(message);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [fetchWallets, loadWalletMetadata, saveWalletMetadata]
  );

  // Create a consume notes proposal (for multisig - requires signing)
  // Returns full response with summary_commitment for immediate signing
  const createConsumeProposal = useCallback(
    async (
      accountId: string,
      description: string,
      noteIds: string[]
    ): Promise<{ proposalId: string; summaryCommitment: string }> => {
      try {
        const response = await api.createConsumeProposal(
          accountId,
          description,
          noteIds
        );

        // Refresh proposals and notes
        await Promise.all([
          fetchProposals(accountId),
          fetchConsumableNotes(accountId),
        ]);

        return {
          proposalId: response.proposal_id,
          summaryCommitment: response.summary_commitment,
        };
      } catch (err) {
        const message =
          err instanceof Error
            ? err.message
            : "Failed to create consume proposal";
        setError(message);
        throw err;
      }
    },
    [fetchProposals, fetchConsumableNotes]
  );

  // Create a send transaction proposal (for multisig)
  // Returns full response with summary_commitment for immediate signing
  const createSendProposal = useCallback(
    async (
      accountId: string,
      description: string,
      recipientId: string,
      faucetId: string,
      amount: number
    ): Promise<{ proposalId: string; summaryCommitment: string }> => {
      try {
        const response = await api.createSendProposal(
          accountId,
          description,
          recipientId,
          faucetId,
          amount
        );

        // Refresh proposals
        await fetchProposals(accountId);

        return {
          proposalId: response.proposal_id,
          summaryCommitment: response.summary_commitment,
        };
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to create send proposal";
        setError(message);
        throw err;
      }
    },
    [fetchProposals]
  );

  // Create a batch send proposal (multiple recipients in one transaction)
  // Returns full response with summary_commitment for immediate signing
  const createBatchSendProposal = useCallback(
    async (
      accountId: string,
      description: string,
      recipients: Array<{ recipientId: string; faucetId: string; amount: number }>
    ): Promise<{ proposalId: string; summaryCommitment: string }> => {
      try {
        const response = await api.createBatchSendProposal(
          accountId,
          description,
          recipients.map((r) => ({
            recipient_id: r.recipientId,
            faucet_id: r.faucetId,
            amount: r.amount,
          }))
        );

        // Refresh proposals
        await fetchProposals(accountId);

        return {
          proposalId: response.proposal_id,
          summaryCommitment: response.summary_commitment,
        };
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to create batch send proposal";
        setError(message);
        throw err;
      }
    },
    [fetchProposals]
  );

  // Submit a signature for a proposal
  const submitSignature = useCallback(
    async (
      proposalId: string,
      approverIndex: number,
      approverPublicKey: string,
      signatureHex: string
    ): Promise<{
      signaturesCount: number;
      threshold: number;
      readyToExecute: boolean;
    }> => {
      try {
        const response = await api.submitSignature(
          proposalId,
          approverIndex,
          approverPublicKey,
          signatureHex
        );

        // Refresh the proposal's account proposals
        const proposal = await api.getProposal(proposalId);
        await fetchProposals(proposal.account_id);

        return {
          signaturesCount: response.signatures_count,
          threshold: response.threshold,
          readyToExecute: response.ready_to_execute,
        };
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to submit signature";
        setError(message);
        throw err;
      }
    },
    [fetchProposals]
  );

  // Execute a transaction
  const executeTransaction = useCallback(
    async (
      proposalId: string
    ): Promise<{
      success: boolean;
      transactionId?: string;
      error?: string;
    }> => {
      try {
        const response = await api.executeTransaction(proposalId);

        // Refresh the proposal's account proposals
        const proposal = await api.getProposal(proposalId);
        await fetchProposals(proposal.account_id);

        return {
          success: response.success,
          transactionId: response.transaction_id || undefined,
          error: response.error || undefined,
        };
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to execute transaction";
        setError(message);
        throw err;
      }
    },
    [fetchProposals]
  );

  // Get proposals for a specific wallet
  const getWalletProposals = useCallback(
    (accountId: string): MultisigProposal[] => {
      return proposals[accountId] || [];
    },
    [proposals]
  );

  // Get consumable notes for a specific wallet
  const getWalletNotes = useCallback(
    (accountId: string): ConsumableNote[] => {
      return consumableNotes[accountId] || [];
    },
    [consumableNotes]
  );

  // Get balances for a specific wallet
  const getWalletBalances = useCallback(
    (accountId: string): AccountBalance[] => {
      return balances[accountId] || [];
    },
    [balances]
  );

  // Check if a user can sign a proposal
  // Compares user's public key directly against originalPublicKeys (no commitment conversion needed)
  const canSign = useCallback(
    (
      proposal: MultisigProposal,
      userPublicKey: string
    ): { canSign: boolean; approverIndex: number } => {
      const wallet = wallets.find((w) => w.accountId === proposal.accountId);
      if (!wallet) return { canSign: false, approverIndex: -1 };

      // Normalize the user's public key for comparison
      const normalizedUserKey = userPublicKey.toLowerCase().replace(/^0x/, "");

      // Find the approver index by comparing original public keys directly
      const approverIndex = wallet.originalPublicKeys.findIndex(
        (pk) => pk.toLowerCase().replace(/^0x/, "") === normalizedUserKey
      );

      if (approverIndex === -1) return { canSign: false, approverIndex: -1 };

      // Check if not already signed
      const alreadySigned = proposal.signatures.some(
        (s) => s.approverIndex === approverIndex && s.signed
      );

      // Check if proposal is still pending
      const isPending = proposal.status === "Pending";

      return { canSign: isPending && !alreadySigned, approverIndex };
    },
    [wallets]
  );

  // Update wallet metadata (name, signer names)
  const updateWalletMetadata = useCallback(
    (
      accountId: string,
      name?: string,
      signerNames?: Record<number, string>
    ) => {
      const metadata = loadWalletMetadata();
      const existing = metadata.find((m) => m.accountId === accountId);

      if (existing) {
        if (name) existing.name = name;
        if (signerNames)
          existing.signerNames = { ...existing.signerNames, ...signerNames };
      } else {
        metadata.push({
          accountId,
          name: name || `Multisig ${accountId.slice(0, 8)}...`,
          signerNames: signerNames || {},
        });
      }

      saveWalletMetadata(metadata);

      // Update local state
      setWallets((prev) =>
        prev.map((w) => {
          if (w.accountId !== accountId) return w;
          return {
            ...w,
            name: name || w.name,
            signers: w.signers.map((s) => ({
              ...s,
              name: signerNames?.[s.index] ?? s.name,
            })),
          };
        })
      );
    },
    [loadWalletMetadata, saveWalletMetadata]
  );

  // Delete wallet metadata (local only - server account remains)
  const deleteWalletMetadata = useCallback(
    (accountId: string) => {
      const metadata = loadWalletMetadata();
      const filtered = metadata.filter((m) => m.accountId !== accountId);
      saveWalletMetadata(filtered);

      // Remove from local state
      setWallets((prev) => prev.filter((w) => w.accountId !== accountId));
      setProposals((prev) => {
        const { [accountId]: _, ...rest } = prev;
        return rest;
      });
      setConsumableNotes((prev) => {
        const { [accountId]: _, ...rest } = prev;
        return rest;
      });

      if (selectedWallet?.accountId === accountId) {
        setSelectedWallet(null);
      }
    },
    [loadWalletMetadata, saveWalletMetadata, selectedWallet]
  );

  // Initial fetch
  useEffect(() => {
    fetchWallets().catch(console.error);
  }, [fetchWallets]);

  return {
    // State
    wallets,
    proposals,
    consumableNotes,
    balances,
    selectedWallet,
    isLoading,
    error,

    // Actions
    setSelectedWallet,
    fetchWallets,
    fetchProposals,
    fetchConsumableNotes,
    fetchBalances,
    createMultisigWallet,
    createConsumeProposal,
    createSendProposal,
    createBatchSendProposal,
    submitSignature,
    executeTransaction,

    // Helpers
    getWalletProposals,
    getWalletNotes,
    getWalletBalances,
    canSign,
    updateWalletMetadata,
    deleteWalletMetadata,
  };
}
