import { Loader2, Wallet, RefreshCw } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import type { AccountBalance } from "../lib/types";

interface MultisigBalanceDialogProps {
  isOpen: boolean;
  onClose: () => void;
  walletName: string;
  accountId: string;
  balances: AccountBalance[];
  isLoading: boolean;
  error: string | null;
  onRefresh: () => Promise<void>;
}

export function MultisigBalanceDialog({
  isOpen,
  onClose,
  walletName,
  accountId,
  balances,
  isLoading,
  error,
  onRefresh,
}: MultisigBalanceDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-[#FF5500] flex items-center gap-2">
              <Wallet className="w-5 h-5" />
              {walletName} Balances
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onRefresh}
              disabled={isLoading}
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            </Button>
          </div>
          <DialogDescription className="font-mono text-xs truncate">
            {accountId}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {error ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-800 font-medium">Error</p>
              <p className="text-sm text-red-600 mt-1">{error}</p>
            </div>
          ) : isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-12 h-12 text-[#FF5500] animate-spin mb-4" />
              <p className="text-sm text-gray-600">Fetching balances...</p>
            </div>
          ) : balances && balances.length > 0 ? (
            <>
              <div className="space-y-2">
                {balances.map((asset, index) => (
                  <div
                    key={index}
                    className="bg-green-50 border border-green-200 rounded-lg p-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                          Asset {index + 1}
                        </p>
                        <p className="text-lg font-bold text-green-700">
                          {asset.amount.toLocaleString()}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-medium text-gray-600">
                          Faucet ID
                        </p>
                        <p className="text-xs text-gray-700 font-mono break-all bg-white p-2 rounded border border-gray-200">
                          {asset.faucetId}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-2">
                <Button
                  onClick={onClose}
                  size="lg"
                  className="bg-[#FF5500] hover:bg-[#FF5500]/90"
                >
                  Close
                </Button>
              </div>
            </>
          ) : (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <div className="flex flex-col items-center justify-center text-center">
                <Wallet className="w-12 h-12 text-gray-400 mb-3" />
                <p className="text-sm font-medium text-gray-700">
                  No assets found
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  This multisig account doesn't have any assets yet.
                  <br />
                  Consume incoming notes to receive assets.
                </p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
