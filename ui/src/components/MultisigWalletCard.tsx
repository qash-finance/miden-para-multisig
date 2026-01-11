import { Button } from "./ui/button";
import { Users, Trash2, ExternalLink, ArrowRight, RefreshCw, Eye } from "lucide-react";
import type { MultisigWallet, MultisigProposal, AccountBalance } from "../lib/types";

interface MultisigWalletCardProps {
  wallet: MultisigWallet;
  proposals: MultisigProposal[];
  balances: AccountBalance[];
  onSelect: () => void;
  onDelete: () => void;
  onRefresh: () => void;
  onViewBalances: () => void;
  isRefreshing?: boolean;
}

export function MultisigWalletCard({
  wallet,
  proposals,
  balances,
  onSelect,
  onDelete,
  onRefresh,
  onViewBalances,
  isRefreshing,
}: MultisigWalletCardProps) {
  const pendingCount = proposals.filter(
    (p) => p.status === "Pending" || p.status === "Ready"
  ).length;

  const readyCount = proposals.filter((p) => p.status === "Ready").length;

  // Strip routing parameters from account ID for explorer link (e.g., "0x123@network" -> "0x123")
  const accountIdForExplorer = wallet.accountId.split("@")[0];

  return (
    <div className="border border-gray-200 p-4 hover:border-[#FF5500] transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-100 flex items-center justify-center">
            <Users className="w-4 h-4 text-[#FF5500]" />
          </div>
          <div>
            <h3 className="font-medium text-sm">{wallet.name}</h3>
            <p className="text-xs text-gray-500">
              {wallet.threshold} of {wallet.signers.length} signatures
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onRefresh();
            }}
            disabled={isRefreshing}
            className="h-8 w-8 p-0"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="h-8 w-8 p-0 hover:bg-red-50"
          >
            <Trash2 className="w-4 h-4 text-red-500" />
          </Button>
        </div>
      </div>

      <div className="bg-gray-50 p-2 mb-3">
        <p className="text-xs text-gray-500 mb-1">Miden Account</p>
        <p className="text-xs font-mono truncate">{wallet.accountId}</p>
      </div>

      {/* Balances summary - clickable */}
      <div
        className="mb-3 p-2 bg-green-50 border border-green-100 cursor-pointer hover:bg-green-100 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          onViewBalances();
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye className="w-3 h-3 text-green-600" />
            <p className="text-xs text-green-700 font-medium">
              {balances.length > 0
                ? `${balances.length} asset${balances.length > 1 ? "s" : ""}`
                : "No assets"}
            </p>
          </div>
          {balances.length > 0 && (
            <div className="flex gap-1">
              {balances.slice(0, 2).map((balance, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-white text-green-700 px-2 py-0.5 border border-green-200"
                >
                  {balance.amount.toLocaleString()}
                </span>
              ))}
              {balances.length > 2 && (
                <span className="text-xs text-green-600">...</span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Signers preview */}
      <div className="mb-3">
        <p className="text-xs text-gray-500 mb-1">Signers</p>
        <div className="flex flex-wrap gap-1">
          {wallet.signers.slice(0, 3).map((signer) => (
            <span
              key={signer.index}
              className="text-xs bg-gray-100 px-2 py-0.5 truncate max-w-[100px]"
              title={signer.publicKey}
            >
              {signer.name || `Signer ${signer.index + 1}`}
            </span>
          ))}
          {wallet.signers.length > 3 && (
            <span className="text-xs bg-gray-100 px-2 py-0.5">
              +{wallet.signers.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between text-xs mb-3">
        <div>
          <span className="text-gray-500">Pending: </span>
          <span className="font-medium">{pendingCount}</span>
        </div>
        {readyCount > 0 && (
          <span className="bg-green-100 text-green-800 px-2 py-0.5">
            {readyCount} ready to execute
          </span>
        )}
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={onSelect}
        >
          <ArrowRight className="w-4 h-4" />
          Manage
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a
            href={`https://testnet.midenscan.com/account/${accountIdForExplorer}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
