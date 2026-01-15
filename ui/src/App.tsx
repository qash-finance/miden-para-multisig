import { Button } from "./components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { Wallet, Coins, Send, Eye, Users, Plus, RefreshCw } from "lucide-react";
import {
  useAccount,
  useLogout,
  useModal,
  useWallet,
  useClient,
  useSignMessage,
} from "@getpara/react-sdk";
import "@getpara/react-sdk/styles.css";
import { useMiden } from "./hooks/use-miden";
import { useMultisig } from "./hooks/use-multisig";
import { createFaucetMintAndConsume } from "./lib/mint";
import {
  MintConsumeDialog,
  type MintAndConsumeProgress,
} from "./components/MintConsumeDialog";
import { SendDialog } from "./components/SendDialog";
import { CreateMultisigDialog } from "./components/CreateMultisigDialog";
import { MultisigTransactionDialog } from "./components/MultisigTransactionDialog";
import { MultisigWalletCard } from "./components/MultisigWalletCard";
import { MultisigBalanceDialog } from "./components/MultisigBalanceDialog";
import { getBalance } from "./lib/getBalance";
import { send } from "./lib/send";
import { fromHexSig, bytesToHex, hexToBytes } from "./lib/utils";
import { keccak_256 } from "@noble/hashes/sha3.js";
import { api } from "./lib/api";
import { useState, useEffect } from "react";
import type { MultisigWallet, MultisigProposal } from "./lib/types";

function App() {
  const { isConnected } = useAccount();
  const { data: wallet } = useWallet();
  const { openModal } = useModal();
  const { logoutAsync } = useLogout();
  const paraClient = useClient();
  const { client, accountId: address } = useMiden();
  const {
    wallets: multisigWallets,
    isLoading: isMultisigLoading,
    error: multisigError,
    fetchWallets,
    fetchProposals,
    fetchConsumableNotes,
    fetchBalances,
    createMultisigWallet,
    createConsumeProposal,
    createSendProposal,
    submitSignature,
    executeTransaction,
    getWalletProposals,
    getWalletNotes,
    getWalletBalances,
    canSign,
    deleteWalletMetadata,
  } = useMultisig();

  // Filter wallets to only show ones where the current user is a signer
  const userMultisigWallets = wallet?.publicKey
    ? multisigWallets.filter((msWallet) => {
        const normalizedUserKey = wallet.publicKey.toLowerCase().replace(/^0x/, "");
        return msWallet.originalPublicKeys.some(
          (pk) => pk.toLowerCase().replace(/^0x/, "") === normalizedUserKey
        );
      })
    : [];

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [progress, setProgress] = useState<MintAndConsumeProgress | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [balances, setBalances] = useState<Array<{
    assetId: string;
    balance: string;
  }> | null>(null);
  const [isBalanceDialogOpen, setIsBalanceDialogOpen] = useState(false);
  const [isSendDialogOpen, setIsSendDialogOpen] = useState(false);

  // Multisig state
  const [isCreateMultisigOpen, setIsCreateMultisigOpen] = useState(false);
  const [selectedMultisigWallet, setSelectedMultisigWallet] =
    useState<MultisigWallet | null>(null);
  const [isMultisigTxDialogOpen, setIsMultisigTxDialogOpen] = useState(false);
  const [refreshingWalletId, setRefreshingWalletId] = useState<string | null>(null);

  // Multisig balance dialog state
  const [isMultisigBalanceDialogOpen, setIsMultisigBalanceDialogOpen] = useState(false);
  const [balanceDialogWallet, setBalanceDialogWallet] = useState<MultisigWallet | null>(null);
  const [isLoadingMultisigBalances, setIsLoadingMultisigBalances] = useState(false);
  const [multisigBalanceError, setMultisigBalanceError] = useState<string | null>(null);

  const { signMessageAsync } = useSignMessage();

  const onConnect = async () => {
    console.log("isConnected", isConnected);
    if (isConnected) {
      await logoutAsync();
    }
    openModal();
  };

  useEffect(() => {
    if (!address) return;

    const fetchBalances = async () => {
      try {
        const fetchedBalances = await getBalance(address);
        setBalances(fetchedBalances);
      } catch (err) {
        console.error("Failed to fetch balances:", err);
      }
    };

    fetchBalances();
    const interval = setInterval(fetchBalances, 5000);

    return () => clearInterval(interval);
  }, [address]);

  const handleMintConsume = async () => {
    if (!client || !address) {
      setError("Client or address not available");
      return;
    }

    setIsDialogOpen(true);
    setError(null);
    setProgress(null);

    try {
      await createFaucetMintAndConsume(client, address, setProgress);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  const handleViewBalances = async () => {
    if (!address) return;
    setIsBalanceDialogOpen(true);
  };

  const handleSendClick = async () => {
    if (!address) return;
    setIsSendDialogOpen(true);
  };

  const handleSendSubmit = async (
    toAddress: string,
    amount: string,
    faucetId: string
  ) => {
    if (!client || !address) throw new Error("Client or address not available");
    const result = await send(
      client,
      address,
      toAddress,
      faucetId,
      BigInt(amount)
    );
    return result;
  };

  // Multisig handlers
  const handleCreateMultisig = async (
    name: string,
    threshold: number,
    signers: Array<{ publicKey: string; name?: string }>
  ) => {
    await createMultisigWallet(name, threshold, signers);
  };

  const handleSelectMultisigWallet = async (msWallet: MultisigWallet) => {
    setSelectedMultisigWallet(msWallet);
    // Fetch proposals, notes, and balances for this wallet
    await Promise.all([
      fetchProposals(msWallet.accountId),
      fetchConsumableNotes(msWallet.accountId),
      fetchBalances(msWallet.accountId),
    ]);
    setIsMultisigTxDialogOpen(true);
  };

  const handleRefreshWallet = async (accountId: string) => {
    setRefreshingWalletId(accountId);
    try {
      await Promise.all([
        fetchProposals(accountId),
        fetchConsumableNotes(accountId),
        fetchBalances(accountId),
      ]);
    } finally {
      setRefreshingWalletId(null);
    }
  };

  const handleViewMultisigBalances = async (msWallet: MultisigWallet) => {
    setBalanceDialogWallet(msWallet);
    setIsMultisigBalanceDialogOpen(true);
    setMultisigBalanceError(null);
    setIsLoadingMultisigBalances(true);
    try {
      await fetchBalances(msWallet.accountId);
    } catch (err) {
      setMultisigBalanceError(err instanceof Error ? err.message : "Failed to fetch balances");
    } finally {
      setIsLoadingMultisigBalances(false);
    }
  };

  const handleRefreshMultisigBalances = async () => {
    if (!balanceDialogWallet) return;
    setMultisigBalanceError(null);
    setIsLoadingMultisigBalances(true);
    try {
      await fetchBalances(balanceDialogWallet.accountId);
    } catch (err) {
      setMultisigBalanceError(err instanceof Error ? err.message : "Failed to fetch balances");
    } finally {
      setIsLoadingMultisigBalances(false);
    }
  };

  // Helper: Generate signature for a summary commitment
  const generateSignature = async (summaryCommitment: string) => {
    if (!wallet?.publicKey || !paraClient) {
      return null;
    }

    try {
      // Remove 0x prefix if present, then convert to bytes and hash with keccak256
      const commitmentHex = summaryCommitment.replace(/^0x/, "");
      const commitmentBytes = hexToBytes(commitmentHex);
      const hashedMessage = keccak_256(commitmentBytes);

      // Convert keccak hash to base64 for Para SDK
      const messageBase64 = btoa(String.fromCharCode(...hashedMessage));

      // Sign with Para popup
      const signResult = await paraClient.signMessage({
        walletId: wallet.id,
        messageBase64,
      });

      // Check if signing was successful
      if (!("signature" in signResult) || !signResult.signature) {
        return null;
      }

      // Convert Para hex signature to Miden serialized format
      const serializedSig = fromHexSig(signResult.signature as string);

      // Convert to hex string for backend
      return bytesToHex(serializedSig);
    } catch (err) {
      console.error("Failed to generate signature:", err);
      return null;
    }
  };

  const handleCreateConsumeProposal = async (description: string, noteIds: string[]) => {
    if (!selectedMultisigWallet || !wallet?.publicKey) return;

    // Check if current user can sign
    const normalizedUserKey = wallet.publicKey.toLowerCase().replace(/^0x/, "");
    const approverIndex = selectedMultisigWallet.originalPublicKeys.findIndex(
      (pk) => pk.toLowerCase().replace(/^0x/, "") === normalizedUserKey
    );

    // If user is an approver, get their signature
    let autoSignInfo = undefined;
    if (approverIndex !== -1) {
      // First create the proposal to get the summary commitment
      const proposalId = await createConsumeProposal(
        selectedMultisigWallet.accountId,
        description,
        noteIds
      );

      // Get the created proposal to obtain summary commitment
      const proposal = await api.getProposal(proposalId);

      // Generate signature
      const signatureHex = await generateSignature(proposal.summaryCommitment);

      if (signatureHex) {
        autoSignInfo = {
          approverIndex,
          approverPublicKey: wallet.publicKey,
          signatureHex,
        };

        // Submit signature
        await submitSignature(
          proposalId,
          approverIndex,
          wallet.publicKey,
          signatureHex
        );

        // Refresh proposals to show updated signature status
        await fetchProposals(selectedMultisigWallet.accountId);
      }
      return;
    }

    // User is not an approver, just create the proposal
    await createConsumeProposal(
      selectedMultisigWallet.accountId,
      description,
      noteIds
    );
  };

  const handleCreateSendProposal = async (
    description: string,
    recipientId: string,
    faucetId: string,
    amount: number
  ) => {
    if (!selectedMultisigWallet || !wallet?.publicKey) return;

    // Check if current user can sign
    const normalizedUserKey = wallet.publicKey.toLowerCase().replace(/^0x/, "");
    const approverIndex = selectedMultisigWallet.originalPublicKeys.findIndex(
      (pk) => pk.toLowerCase().replace(/^0x/, "") === normalizedUserKey
    );

    // If user is an approver, get their signature
    let autoSignInfo = undefined;
    if (approverIndex !== -1) {
      // First create the proposal to get the summary commitment
      const proposalId = await createSendProposal(
        selectedMultisigWallet.accountId,
        description,
        recipientId,
        faucetId,
        amount
      );

      // Get the created proposal to obtain summary commitment
      const proposal = await api.getProposal(proposalId);

      // Generate signature
      const signatureHex = await generateSignature(proposal.summaryCommitment);

      if (signatureHex) {
        autoSignInfo = {
          approverIndex,
          approverPublicKey: wallet.publicKey,
          signatureHex,
        };

        // Submit signature
        await submitSignature(
          proposalId,
          approverIndex,
          wallet.publicKey,
          signatureHex
        );

        // Refresh proposals to show updated signature status
        await fetchProposals(selectedMultisigWallet.accountId);
      }
      return;
    }

    // User is not an approver, just create the proposal
    await createSendProposal(
      selectedMultisigWallet.accountId,
      description,
      recipientId,
      faucetId,
      amount
    );
  };

  const handleSignProposal = async (proposal: MultisigProposal, approverIndex: number) => {
    if (!wallet?.publicKey || !paraClient) {
      throw new Error("Wallet not connected");
    }

    // The message to sign is the keccak256 hash of the transaction summary commitment
    // This matches what miden-para does and what the Miden VM expects for ECDSA K256 Keccak verification
    const summaryCommitment = proposal.summaryCommitment;
    if (!summaryCommitment) {
      throw new Error("Proposal missing summary commitment for signing");
    }

    // Remove 0x prefix if present, then convert to bytes and hash with keccak256
    const commitmentHex = summaryCommitment.replace(/^0x/, "");
    const commitmentBytes = hexToBytes(commitmentHex);
    const hashedMessage = keccak_256(commitmentBytes);

    // Convert keccak hash to base64 for Para SDK
    const messageBase64 = btoa(String.fromCharCode(...hashedMessage));

    // Sign with Para popup
    const signResult = await paraClient.signMessage({
      walletId: wallet.id,
      messageBase64,
    });

    // Check if signing was successful
    if (!("signature" in signResult) || !signResult.signature) {
      throw new Error("Signing failed or was rejected");
    }

    // Convert Para hex signature to Miden serialized format
    // This adds the ECDSA auth scheme byte prefix (1) and padding
    const serializedSig = fromHexSig(signResult.signature as string);

    // Convert to hex string for backend
    const signatureHex = bytesToHex(serializedSig);

    // Send original public key for backend verification
    // Backend compares against original_public_keys stored during account creation
    await submitSignature(
      proposal.proposalId,
      approverIndex,
      wallet.publicKey,
      signatureHex
    );
  };

  const handleExecuteProposal = async (proposal: MultisigProposal) => {
    const result = await executeTransaction(proposal.proposalId);
    if (!result.success) {
      throw new Error(result.error || "Execution failed");
    }
  };

  const handleRefreshDialog = async () => {
    if (!selectedMultisigWallet) return;
    await Promise.all([
      fetchProposals(selectedMultisigWallet.accountId),
      fetchConsumableNotes(selectedMultisigWallet.accountId),
      fetchBalances(selectedMultisigWallet.accountId),
    ]);
  };

  const handleParaSignTransaction = async () => {
    if (!wallet) {
      throw new Error("You are not connected");
    }
    const result = await signMessageAsync({
      messageBase64: "testeing",
      walletId: wallet.id,
    });
    console.log("result", result, "public key", wallet.publicKey);
  };

  const handleCreateTestCompany = async () => {
    try {
      const { api } = await import("./lib/api");
      const result = await api.createTestCompany();
      alert(`${result.message}\nCompany ID: ${result.company.id}\nName: ${result.company.companyName}`);
    } catch (err) {
      alert(`Failed to create test company: ${err instanceof Error ? err.message : "Unknown error"}`);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-orange-50 to-orange-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Main Card */}
        <div className="bg-white shadow-lg p-8 space-y-6">
          {/* Connection Status */}
          <div className="flex items-center justify-between bg-orange-50 border border-orange-100 p-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700 wrap-anywhere">
                {isConnected ? address : "Disconnected"}
              </span>
            </div>
          </div>

          <Button
            onClick={onConnect}
            size="lg"
            className="w-full cursor-pointer wrap-anywhere"
            variant={isConnected ? "outline" : "default"}
          >
            <Wallet className="w-4 h-4" />
            <span className="truncate">
              {isConnected ? wallet?.address : "Connect Wallet"}
            </span>
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Single Signer Actions
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              onClick={handleMintConsume}
              variant="secondary"
              size="lg"
              className="w-full cursor-pointer"
              disabled={!isConnected}
            >
              <Coins className="w-4 h-4" />
              Mint & Consume
            </Button>

            {/* View Balances Button */}
            <Button
              onClick={handleViewBalances}
              variant="secondary"
              size="lg"
              className="w-full cursor-pointer"
              disabled={!isConnected}
            >
              <Eye className="w-4 h-4" />
              View Balances
            </Button>

            {/* Send Button */}
            <Button
              onClick={handleSendClick}
              size="lg"
              className="w-full cursor-pointer"
              disabled={!isConnected}
            >
              <Send className="w-4 h-4" />
              Send
            </Button>
          </div>

          {/* Multisig Section */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Multisig Wallets
              </span>
            </div>
          </div>

          {multisigError && (
            <div className="bg-red-50 border border-red-200 p-4">
              <p className="text-sm text-red-800">{multisigError}</p>
            </div>
          )}

          <div className="space-y-3">
            <div className="flex gap-2">
              <Button
                onClick={() => handleCreateTestCompany()}
                variant="outline"
                size="sm"
                className="flex-1 cursor-pointer bg-yellow-50 hover:bg-yellow-100 border-yellow-300 text-yellow-800"
              >
                <Plus className="w-4 h-4" />
                Create Test Company
              </Button>
              <Button
                onClick={() => fetchWallets()}
                variant="outline"
                size="lg"
                className="cursor-pointer"
                disabled={isMultisigLoading}
              >
                <RefreshCw className={`w-4 h-4 ${isMultisigLoading ? "animate-spin" : ""}`} />
              </Button>
            </div>
            <Button
              onClick={() => setIsCreateMultisigOpen(true)}
              variant="outline"
              size="lg"
              className="w-full cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Create Multisig Wallet
            </Button>

            {userMultisigWallets.length > 0 ? (
              <div className="grid gap-3">
                {userMultisigWallets.map((msWallet) => (
                  <MultisigWalletCard
                    key={msWallet.accountId}
                    wallet={msWallet}
                    proposals={getWalletProposals(msWallet.accountId)}
                    balances={getWalletBalances(msWallet.accountId)}
                    onSelect={() => handleSelectMultisigWallet(msWallet)}
                    onDelete={() => deleteWalletMetadata(msWallet.accountId)}
                    onRefresh={() => handleRefreshWallet(msWallet.accountId)}
                    onViewBalances={() => handleViewMultisigBalances(msWallet)}
                    isRefreshing={refreshingWalletId === msWallet.accountId}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-6 bg-gray-50 border border-dashed border-gray-200">
                <Users className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">
                  {wallet?.publicKey
                    ? "No multisig wallets found for your account"
                    : "Connect your wallet to see your multisig wallets"}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {wallet?.publicKey
                    ? "Create one to manage shared assets with multiple signers"
                    : "You'll only see wallets where you are a signer"}
                </p>
              </div>
            )}
          </div>

          {/* Info Text */}
          {!isConnected && (
            <div className="bg-orange-50 border border-orange-200 p-4">
              <p className="text-sm text-orange-800">
                Connect your wallet to perform actions
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Powered by Miden & Para</p>
        </div>
      </div>

      <MintConsumeDialog
        isOpen={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false);
          setProgress(null);
        }}
        progress={progress}
        error={error}
      />

      {isBalanceDialogOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setIsBalanceDialogOpen(false)}
        >
          <div
            className="bg-white p-6 max-w-2xl w-full m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-[#FF5500] mb-4">Balances</h2>
            {balances ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Balance</TableHead>
                    <TableHead>Asset ID</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {balances.map((b, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-bold">{b.balance}</TableCell>
                      <TableCell className="font-mono text-xs">
                        {b.assetId}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div>Loading...</div>
            )}
            <Button
              onClick={() => setIsBalanceDialogOpen(false)}
              className="mt-4 w-full"
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {isSendDialogOpen && (
        <SendDialog
          isOpen={isSendDialogOpen}
          onClose={() => setIsSendDialogOpen(false)}
          balances={balances}
          onSend={handleSendSubmit}
        />
      )}

      {/* Multisig Dialogs */}
      <CreateMultisigDialog
        isOpen={isCreateMultisigOpen}
        onClose={() => setIsCreateMultisigOpen(false)}
        onCreate={handleCreateMultisig}
        currentUserPublicKey={wallet?.publicKey}
      />

      {selectedMultisigWallet && (
        <MultisigTransactionDialog
          isOpen={isMultisigTxDialogOpen}
          onClose={() => {
            setIsMultisigTxDialogOpen(false);
            setSelectedMultisigWallet(null);
          }}
          wallet={selectedMultisigWallet}
          proposals={getWalletProposals(selectedMultisigWallet.accountId)}
          consumableNotes={getWalletNotes(selectedMultisigWallet.accountId)}
          balances={getWalletBalances(selectedMultisigWallet.accountId)}
          currentUserPublicKey={wallet?.publicKey}
          onCreateConsumeProposal={handleCreateConsumeProposal}
          onCreateSendProposal={handleCreateSendProposal}
          onSign={handleSignProposal}
          onExecute={handleExecuteProposal}
          onRefresh={handleRefreshDialog}
          canSign={canSign}
        />
      )}

      {/* Multisig Balance Dialog */}
      {balanceDialogWallet && (
        <MultisigBalanceDialog
          isOpen={isMultisigBalanceDialogOpen}
          onClose={() => {
            setIsMultisigBalanceDialogOpen(false);
            setBalanceDialogWallet(null);
          }}
          walletName={balanceDialogWallet.name}
          accountId={balanceDialogWallet.accountId}
          balances={getWalletBalances(balanceDialogWallet.accountId)}
          isLoading={isLoadingMultisigBalances}
          error={multisigBalanceError}
          onRefresh={handleRefreshMultisigBalances}
        />
      )}
    </div>
  );
}

export default App;
