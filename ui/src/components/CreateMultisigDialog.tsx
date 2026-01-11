import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Loader2, Plus, Trash2, Users } from "lucide-react";

interface SignerInput {
  publicKey: string;
  name: string;
}

interface CreateMultisigDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (
    name: string,
    threshold: number,
    signers: Array<{ publicKey: string; name?: string }>
  ) => Promise<void>;
  currentUserPublicKey?: string;
}

export function CreateMultisigDialog({
  isOpen,
  onClose,
  onCreate,
  currentUserPublicKey,
}: CreateMultisigDialogProps) {
  const [name, setName] = useState("");
  const [threshold, setThreshold] = useState(1);
  const [signers, setSigners] = useState<SignerInput[]>([
    { publicKey: currentUserPublicKey || "", name: "Me" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addSigner = () => {
    setSigners([...signers, { publicKey: "", name: "" }]);
  };

  const removeSigner = (index: number) => {
    if (signers.length <= 1) return;
    const updated = signers.filter((_, i) => i !== index);
    setSigners(updated);
    // Adjust threshold if it's now greater than signer count
    if (threshold > updated.length) {
      setThreshold(updated.length);
    }
  };

  const updateSigner = (
    index: number,
    field: "publicKey" | "name",
    value: string
  ) => {
    const updated = [...signers];
    updated[index] = { ...updated[index], [field]: value };
    setSigners(updated);
  };

  const handleSubmit = async () => {
    setError(null);

    // Validation
    if (!name.trim()) {
      setError("Please enter a wallet name");
      return;
    }

    if (signers.length < 1) {
      setError("At least 1 signer is required");
      return;
    }

    if (threshold < 1 || threshold > signers.length) {
      setError(`Required signatures must be between 1 and ${signers.length}`);
      return;
    }

    const emptySigners = signers.filter((s) => !s.publicKey.trim());
    if (emptySigners.length > 0) {
      setError("All signers must have a public key");
      return;
    }

    // Validate public key format (should be hex, 66 chars for compressed or 130 for uncompressed)
    for (const signer of signers) {
      const pk = signer.publicKey.replace(/^0x/, "");
      if (!/^[0-9a-fA-F]+$/.test(pk)) {
        setError(`Invalid public key format for signer: ${signer.name || pk.slice(0, 10)}`);
        return;
      }
      if (pk.length !== 66 && pk.length !== 130) {
        setError(
          `Public key should be 33 bytes (compressed) or 65 bytes (uncompressed). Got ${pk.length / 2} bytes for: ${signer.name || pk.slice(0, 10)}`
        );
        return;
      }
    }

    // Check for duplicate public keys
    const uniqueKeys = new Set(signers.map((s) => s.publicKey.toLowerCase().replace(/^0x/, "")));
    if (uniqueKeys.size !== signers.length) {
      setError("Duplicate public keys are not allowed");
      return;
    }

    setIsLoading(true);
    try {
      await onCreate(
        name,
        threshold,
        signers.map((s) => ({ publicKey: s.publicKey, name: s.name || undefined }))
      );
      handleClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create wallet");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setName("");
    setThreshold(1);
    setSigners([
      { publicKey: currentUserPublicKey || "", name: "Me" },
    ]);
    setError(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={!isLoading ? handleClose : undefined}
    >
      <div
        className="bg-white p-6 max-w-lg w-full m-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-[#FF5500]" />
          <h2 className="text-xl font-bold text-[#FF5500]">
            Create Multisig Wallet
          </h2>
        </div>

        <div className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 p-4">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <div>
            <label className="text-sm font-medium block mb-1">
              Wallet Name
            </label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="My Multisig Wallet"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">
              Required Signatures
            </label>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                min={1}
                max={signers.length}
                value={threshold}
                onChange={(e) => setThreshold(parseInt(e.target.value) || 1)}
                className="w-20"
                disabled={isLoading}
              />
              <span className="text-sm text-gray-600">
                of {signers.length} signers
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Number of signatures required to execute transactions
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium">Signers (ECDSA Public Keys)</label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addSigner}
                disabled={isLoading}
              >
                <Plus className="w-4 h-4" />
                Add Signer
              </Button>
            </div>

            <div className="space-y-3">
              {signers.map((signer, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-3 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500">
                      Signer {index + 1}
                    </span>
                    {signers.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeSigner(index)}
                        disabled={isLoading}
                        className="h-6 w-6 p-0"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    )}
                  </div>
                  <Input
                    placeholder="Name (optional)"
                    value={signer.name}
                    onChange={(e) => updateSigner(index, "name", e.target.value)}
                    disabled={isLoading}
                    className="text-sm"
                  />
                  <Input
                    placeholder="Public Key (0x04... uncompressed or 0x02/03... compressed)"
                    value={signer.publicKey}
                    onChange={(e) => updateSigner(index, "publicKey", e.target.value)}
                    disabled={isLoading || (index === 0 && !!currentUserPublicKey)}
                    className="text-sm font-mono"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Enter ECDSA secp256k1 public keys. Can be compressed (33 bytes, starts with 02/03) or uncompressed (65 bytes, starts with 04).
            </p>
          </div>

          <div className="flex gap-2 pt-2">
            <Button
              onClick={handleSubmit}
              className="flex-1"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Wallet"
              )}
            </Button>
            <Button
              onClick={handleClose}
              variant="outline"
              className="flex-1"
              disabled={isLoading}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
