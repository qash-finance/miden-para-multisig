import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Convert hex string to bytes
 */
export function hexToBytes(hex: string): Uint8Array {
  const cleanHex = hex.replace(/^0x/, "");
  if (cleanHex.length % 2 !== 0) {
    throw new Error("Invalid hex string length");
  }
  const bytes = new Uint8Array(cleanHex.length / 2);
  for (let i = 0; i < cleanHex.length; i += 2) {
    bytes[i / 2] = parseInt(cleanHex.slice(i, i + 2), 16);
  }
  return bytes;
}

/**
 * Convert bytes to hex string
 */
export function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Transform a Para hex signature to Miden serialized format.
 * Prefixes with ECDSA auth scheme byte (1) and appends padding byte.
 * Based on: https://github.com/0xMiden/miden-para/blob/main/src/utils.ts#L39-L48
 *
 * Miden ECDSA signature format (66 bytes): r (32) + s (32) + v (1) + padding (1)
 * Para signature format (65 bytes): r (32) + s (32) + v (1)
 * Output format (67 bytes): auth_scheme (1) + r (32) + s (32) + v (1) + padding (1)
 */
export function fromHexSig(hexString: string): Uint8Array {
  const cleanHex = hexString.replace(/^0x/, "");
  if (cleanHex.length % 2 !== 0) {
    throw new Error("Invalid hex string length");
  }
  const sigBytes = hexToBytes(cleanHex);

  // Para returns 65 bytes: r (32) + s (32) + v (1)
  // Miden expects 66 bytes: r (32) + s (32) + v (1) + padding (1)
  // Output: auth_scheme (1) + Miden sig (66) = 67 bytes total
  const serialized = new Uint8Array(67);
  serialized[0] = 1; // Auth scheme for ECDSA
  serialized.set(sigBytes, 1); // Copy 65 bytes starting at index 1
  serialized[66] = 0; // Padding byte at index 66
  return serialized;
}

/**
 * Convert serialized signature bytes to array of u64 Felt values.
 * Each Felt is represented as a u64 (8 bytes, little-endian).
 */
export function signatureBytesToFelts(sigBytes: Uint8Array): number[] {
  const felts: number[] = [];
  for (let i = 0; i < sigBytes.length; i += 8) {
    let value = BigInt(0);
    for (let j = 0; j < 8 && i + j < sigBytes.length; j++) {
      value |= BigInt(sigBytes[i + j]) << BigInt(j * 8);
    }
    felts.push(Number(value));
  }
  return felts;
}

/**
 * Convert an uncompressed EVM public key to a Miden commitment hash.
 * The public key should be hex-encoded, starting with "04" prefix (uncompressed format).
 * Based on: https://github.com/0xMiden/miden-para/blob/main/src/utils.ts
 */
export async function evmPkToCommitment(uncompressedPublicKey: string): Promise<string> {
  const { Felt, Rpo256, FeltArray } = await import("@demox-labs/miden-sdk");

  // Remove 0x prefix if present
  const cleanHex = uncompressedPublicKey.replace(/^0x/, "");

  // Remove the 04 prefix (uncompressed point indicator)
  const withoutPrefix = cleanHex.slice(2);
  const x = withoutPrefix.slice(0, 64);
  const y = withoutPrefix.slice(64);

  // Determine the tag based on y coordinate parity (compressed point format)
  const tag = parseInt(y.slice(-1), 16) % 2 === 0 ? 2 : 3;

  // Build 33-byte compressed public key
  const bytes = new Uint8Array(33);
  bytes[0] = tag;
  bytes.set(hexToBytes(x), 1);

  // Convert to Felts (8 x 4-byte chunks as little-endian u32)
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const felts = Array.from(
    { length: 8 },
    (_, i) => new Felt(BigInt(view.getUint32(i * 4, true)))
  );
  // Add the last byte as a Felt
  felts.push(new Felt(BigInt(bytes[32])));

  // Hash to get the commitment
  const commitment = Rpo256.hashElements(new FeltArray(felts));
  return commitment.toHex();
}
