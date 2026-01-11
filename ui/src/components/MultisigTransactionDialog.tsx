import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Loader2,
  CheckCircle2,
  Clock,
  Send,
  PenTool,
  AlertCircle,
  RefreshCw,
  FileText,
  Inbox,
  Download,
} from "lucide-react";
import type {
  MultisigWallet,
  MultisigProposal,
  ConsumableNote,
  ProposalStatus,
  AccountBalance,
} from "../lib/types";

interface MultisigTransactionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  wallet: MultisigWallet;
  proposals: MultisigProposal[];
  consumableNotes: ConsumableNote[];
  balances: AccountBalance[];
  currentUserPublicKey?: string;
  onCreateConsumeProposal: (description: string, noteIds: string[]) => Promise<void>;
  onCreateSendProposal: (
    description: string,
    recipientId: string,
    faucetId: string,
    amount: number
  ) => Promise<void>;
  onSign: (proposal: MultisigProposal, approverIndex: number) => Promise<void>;
  onExecute: (proposal: MultisigProposal) => Promise<void>;
  onRefresh: () => Promise<void>;
  canSign: (proposal: MultisigProposal, userPublicKey: string) => Promise<{ canSign: boolean; approverIndex: number }>;
}

// Cache type for signing ability
type SigningAbility = Record<string, { canSign: boolean; approverIndex: number }>;

type TabType = "proposals" | "notes" | "send";

export function MultisigTransactionDialog({
  isOpen,
  onClose,
  wallet,
  proposals,
  consumableNotes,
  balances,
  currentUserPublicKey,
  onCreateConsumeProposal,
  onCreateSendProposal,
  onSign,
  onExecute,
  onRefresh,
  canSign,
}: MultisigTransactionDialogProps) {
  const [activeTab, setActiveTab] = useState<TabType>("proposals");

  // Send proposal form state
  const [description, setDescription] = useState("");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedFaucet, setSelectedFaucet] = useState("");

  // Notes selection for consume
  const [selectedNotes, setSelectedNotes] = useState<string[]>([]);
  const [consumeDescription, setConsumeDescription] = useState("");

  // Loading states
  const [isLoading, setIsLoading] = useState(false);
  const [isConsuming, setIsConsuming] = useState(false);
  const [signingProposalId, setSigningProposalId] = useState<string | null>(null);
  const [executingProposalId, setExecutingProposalId] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cache for signing abilities (computed async)
  const [signingAbilities, setSigningAbilities] = useState<SigningAbility>({});

  // Compute signing abilities when proposals or public key change
  useEffect(() => {
    if (!currentUserPublicKey || proposals.length === 0) {
      setSigningAbilities({});
      return;
    }

    const abilities: SigningAbility = {};
    for (const proposal of proposals) {
      const result = canSign(proposal, currentUserPublicKey);
      abilities[proposal.proposalId] = result;
    }
    setSigningAbilities(abilities);
  }, [proposals, currentUserPublicKey, canSign]);

  // Helper to get signing ability from cache
  const getSigningAbility = (proposalId: string) => {
    return signingAbilities[proposalId] || { canSign: false, approverIndex: -1 };
  };

  // Filter proposals by status
  const pendingProposals = proposals.filter(
    (p) => p.status === "Pending" || p.status === "Ready"
  );

  const executedProposals = proposals.filter(
    (p) => p.status === "Executed" || p.status === "Failed"
  );

  // Get unique faucets from consumable notes for display
  const availableFaucets = Array.from(
    new Set(consumableNotes.flatMap((n) => n.assets.map((a) => a.faucetId)))
  );

  // Calculate total available for a faucet from consumable notes
  const getAvailableAmount = (faucetId: string): number => {
    return consumableNotes.reduce((sum, note) => {
      const asset = note.assets.find((a) => a.faucetId === faucetId);
      return sum + (asset?.amount || 0);
    }, 0);
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await onRefresh();
    } finally {
      setIsRefreshing(false);
    }
  };

  // Create consume proposal (requires multisig signing)
  const handleCreateConsumeProposal = async () => {
    if (selectedNotes.length === 0) {
      setError("Please select at least one note to consume");
      return;
    }

    if (!consumeDescription.trim()) {
      setError("Please enter a description for this consume proposal");
      return;
    }

    setError(null);
    setIsConsuming(true);
    try {
      await onCreateConsumeProposal(consumeDescription, selectedNotes);
      setSelectedNotes([]);
      setConsumeDescription("");
      // Switch to proposals tab to see the new proposal
      setActiveTab("proposals");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create consume proposal");
    } finally {
      setIsConsuming(false);
    }
  };

  // Create send proposal
  const handleCreateSendProposal = async () => {
    setError(null);

    if (!description.trim()) {
      setError("Please enter a description");
      return;
    }

    if (!recipient.trim()) {
      setError("Please enter a recipient address");
      return;
    }

    if (!selectedFaucet) {
      setError("Please select or enter a faucet ID");
      return;
    }

    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum <= 0) {
      setError("Please enter a valid amount");
      return;
    }

    setIsLoading(true);
    try {
      await onCreateSendProposal(description, recipient, selectedFaucet, amountNum);
      // Reset form
      setDescription("");
      setRecipient("");
      setAmount("");
      setSelectedFaucet("");
      setActiveTab("proposals");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create proposal");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSign = async (proposal: MultisigProposal) => {
    if (!currentUserPublicKey) return;

    const { canSign: canSignResult, approverIndex } = getSigningAbility(proposal.proposalId);
    if (!canSignResult) return;

    setSigningProposalId(proposal.proposalId);
    setError(null);
    try {
      await onSign(proposal, approverIndex);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to sign");
    } finally {
      setSigningProposalId(null);
    }
  };

  const handleExecute = async (proposal: MultisigProposal) => {
    setExecutingProposalId(proposal.proposalId);
    setError(null);
    try {
      await onExecute(proposal);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to execute");
    } finally {
      setExecutingProposalId(null);
    }
  };

  const toggleNoteSelection = (noteId: string) => {
    setSelectedNotes((prev) =>
      prev.includes(noteId)
        ? prev.filter((id) => id !== noteId)
        : [...prev, noteId]
    );
  };

  const selectAllNotes = () => {
    if (selectedNotes.length === consumableNotes.length) {
      setSelectedNotes([]);
    } else {
      setSelectedNotes(consumableNotes.map((n) => n.noteId));
    }
  };

  const handleClose = () => {
    setDescription("");
    setRecipient("");
    setAmount("");
    setSelectedNotes([]);
    setSelectedFaucet("");
    setConsumeDescription("");
    setError(null);
    setActiveTab("proposals");
    onClose();
  };

  // Refresh data when dialog opens
  useEffect(() => {
    if (isOpen) {
      handleRefresh();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const getStatusBadge = (status: ProposalStatus, sigCount: number, threshold: number) => {
    if (status === "Ready") {
      return (
        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" />
          Ready to Execute
        </span>
      );
    }
    if (status === "Executed") {
      return (
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" />
          Executed
        </span>
      );
    }
    if (status === "Failed") {
      return (
        <span className="text-xs bg-red-100 text-red-800 px-2 py-1 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          Failed
        </span>
      );
    }
    return (
      <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 flex items-center gap-1">
        <Clock className="w-3 h-3" />
        {sigCount}/{threshold} signed
      </span>
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleClose}
    >
      <div
        className="bg-white p-6 max-w-3xl w-full m-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-[#FF5500]">
              {wallet.name}
            </h2>
            <p className="text-xs text-gray-500 font-mono mt-1">
              {wallet.accountId}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono bg-gray-100 px-2 py-1">
              {wallet.threshold} of {wallet.signers.length} required
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRefresh}
              disabled={isRefreshing}
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
            </Button>
          </div>
        </div>

        {/* Balances */}
        {balances.length > 0 && (
          <div className="bg-green-50 border border-green-200 p-3 mb-4">
            <p className="text-xs text-green-700 font-medium mb-2">Account Balances</p>
            <div className="flex flex-wrap gap-2">
              {balances.map((balance, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-green-200 px-3 py-1"
                  title={balance.faucetId}
                >
                  <span className="font-mono text-sm font-medium text-green-800">
                    {balance.amount.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-500 ml-2 truncate max-w-[120px] inline-block align-middle">
                    {balance.faucetId.slice(0, 12)}...
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-4 border-b pb-2">
          <Button
            variant={activeTab === "proposals" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("proposals")}
          >
            <Clock className="w-4 h-4" />
            Proposals ({pendingProposals.length})
          </Button>
          <Button
            variant={activeTab === "notes" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("notes")}
          >
            <Inbox className="w-4 h-4" />
            Notes ({consumableNotes.length})
          </Button>
          <Button
            variant={activeTab === "send" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("send")}
          >
            <Send className="w-4 h-4" />
            Send
          </Button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 p-4 mb-4">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        {/* Proposals Tab */}
        {activeTab === "proposals" && (
          <div className="space-y-3">
            {pendingProposals.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>No pending proposals</p>
                <Button
                  variant="link"
                  onClick={() => setActiveTab("send")}
                  className="mt-2"
                >
                  Create a send proposal
                </Button>
              </div>
            ) : (
              pendingProposals.map((proposal) => {
                const sigCount = proposal.signatures.filter((s) => s.signed).length;
                const userCanSign = getSigningAbility(proposal.proposalId);

                return (
                  <div
                    key={proposal.proposalId}
                    className="border border-gray-200 p-4 space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium">{proposal.description}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Created: {new Date(proposal.createdAt * 1000).toLocaleString()}
                        </p>
                      </div>
                      {getStatusBadge(proposal.status, sigCount, proposal.threshold)}
                    </div>

                    {/* Signatures */}
                    <div className="bg-gray-50 p-2">
                      <p className="text-xs font-medium text-gray-600 mb-2">
                        Signatures ({sigCount}/{proposal.threshold}):
                      </p>
                      <div className="grid grid-cols-2 gap-1">
                        {wallet.signers.map((signer) => {
                          const sig = proposal.signatures.find(
                            (s) => s.approverIndex === signer.index
                          );
                          return (
                            <div
                              key={signer.index}
                              className="flex items-center justify-between text-xs p-1"
                            >
                              <span className="truncate max-w-[150px]">
                                {signer.name || `Signer ${signer.index + 1}`}
                              </span>
                              {sig?.signed ? (
                                <span className="text-green-600 flex items-center gap-1">
                                  <CheckCircle2 className="w-3 h-3" />
                                  Signed
                                </span>
                              ) : (
                                <span className="text-gray-400 flex items-center gap-1">
                                  <AlertCircle className="w-3 h-3" />
                                  Pending
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      {userCanSign.canSign && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleSign(proposal)}
                          disabled={signingProposalId === proposal.proposalId}
                        >
                          {signingProposalId === proposal.proposalId ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Signing...
                            </>
                          ) : (
                            <>
                              <PenTool className="w-4 h-4" />
                              Sign
                            </>
                          )}
                        </Button>
                      )}

                      {proposal.status === "Ready" && (
                        <Button
                          size="sm"
                          onClick={() => handleExecute(proposal)}
                          disabled={executingProposalId === proposal.proposalId}
                        >
                          {executingProposalId === proposal.proposalId ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Executing...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Execute
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })
            )}

            {/* Show executed proposals if any */}
            {executedProposals.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Completed ({executedProposals.length})
                </h3>
                <div className="space-y-2">
                  {executedProposals.slice(0, 5).map((proposal) => (
                    <div
                      key={proposal.proposalId}
                      className="border border-gray-100 p-3 opacity-60"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-sm">{proposal.description}</p>
                        {getStatusBadge(proposal.status, 0, 0)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Consumable Notes Tab */}
        {activeTab === "notes" && (
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 p-3">
              <p className="text-sm text-blue-800">
                <strong>Consume Notes:</strong> Select notes and create a proposal to add their assets to your wallet vault. This requires {wallet.threshold} of {wallet.signers.length} signatures before execution.
              </p>
            </div>

            {consumableNotes.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Inbox className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>No consumable notes</p>
                <p className="text-xs mt-1">
                  Notes sent to this account will appear here
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={selectAllNotes}
                  >
                    {selectedNotes.length === consumableNotes.length ? "Deselect All" : "Select All"}
                  </Button>
                  <span className="text-sm text-gray-500">
                    {selectedNotes.length} selected
                  </span>
                </div>

                <div className="space-y-2 max-h-64 overflow-y-auto border p-2">
                  {consumableNotes.map((note) => (
                    <label
                      key={note.noteId}
                      className={`flex items-start gap-3 p-3 cursor-pointer hover:bg-gray-50 border ${
                        selectedNotes.includes(note.noteId) ? "bg-orange-50 border-orange-300" : "border-gray-200"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedNotes.includes(note.noteId)}
                        onChange={() => toggleNoteSelection(note.noteId)}
                        className="mt-1"
                        disabled={isConsuming}
                      />
                      <div className="flex-1">
                        <p className="text-xs font-mono text-gray-600 truncate">
                          {note.noteId}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Type: {note.noteType}
                          {note.sender && ` | From: ${note.sender.slice(0, 16)}...`}
                        </p>
                        <div className="mt-2 space-y-1">
                          {note.assets.map((asset, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between bg-gray-100 p-1.5 text-xs"
                            >
                              <span className="font-mono truncate max-w-[180px]">
                                {asset.faucetId.slice(0, 16)}...
                              </span>
                              <span className="font-bold">{asset.amount}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                <div>
                  <label className="text-sm font-medium block mb-1">
                    Description *
                  </label>
                  <Input
                    value={consumeDescription}
                    onChange={(e) => setConsumeDescription(e.target.value)}
                    placeholder="Why are you consuming these notes?"
                    disabled={isConsuming}
                  />
                </div>

                <Button
                  onClick={handleCreateConsumeProposal}
                  className="w-full"
                  disabled={isConsuming || selectedNotes.length === 0 || !consumeDescription.trim()}
                >
                  {isConsuming ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Creating Proposal...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Create Consume Proposal ({selectedNotes.length} Note{selectedNotes.length !== 1 ? "s" : ""})
                    </>
                  )}
                </Button>
              </>
            )}
          </div>
        )}

        {/* Send Proposal Tab */}
        {activeTab === "send" && (
          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 p-3">
              <p className="text-sm text-yellow-800">
                <strong>Create Send Proposal:</strong> This will create a transaction proposal that requires {wallet.threshold} of {wallet.signers.length} signatures before execution.
              </p>
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">
                Description *
              </label>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What is this transaction for?"
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">
                Recipient Address *
              </label>
              <Input
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="Miden account address..."
                disabled={isLoading}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium block mb-1">
                  Amount *
                </label>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0"
                  disabled={isLoading}
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">
                  Faucet ID *
                </label>
                {availableFaucets.length > 0 ? (
                  <select
                    className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm"
                    value={selectedFaucet}
                    onChange={(e) => setSelectedFaucet(e.target.value)}
                    disabled={isLoading}
                  >
                    <option value="">Select faucet</option>
                    {availableFaucets.map((faucetId) => (
                      <option key={faucetId} value={faucetId}>
                        {faucetId.slice(0, 16)}... ({getAvailableAmount(faucetId)} available)
                      </option>
                    ))}
                  </select>
                ) : (
                  <Input
                    value={selectedFaucet}
                    onChange={(e) => setSelectedFaucet(e.target.value)}
                    placeholder="Enter faucet ID"
                    disabled={isLoading}
                  />
                )}
              </div>
            </div>

            <Button
              onClick={handleCreateSendProposal}
              className="w-full"
              disabled={isLoading || !description.trim() || !recipient.trim() || !selectedFaucet || !amount}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Creating Proposal...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Create Send Proposal
                </>
              )}
            </Button>
          </div>
        )}

        <div className="mt-4 pt-4 border-t">
          <Button onClick={handleClose} variant="outline" className="w-full">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
