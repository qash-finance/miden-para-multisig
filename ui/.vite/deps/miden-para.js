import {
  hexStringToBase64
} from "./chunk-AMXWO4KO.js";
import "./chunk-WAIU3DJR.js";
import "./chunk-U23KTIEM.js";
import "./chunk-G6422SFU.js";
import "./chunk-EIHG224A.js";
import "./chunk-PMFATS67.js";
import "./chunk-M6UVRKN6.js";
import "./chunk-3ZL3LWEU.js";
import "./chunk-Q5OWYOJ4.js";
import "./chunk-QEK2ZTOW.js";

// node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/_u64.js
var U32_MASK64 = BigInt(2 ** 32 - 1);
var _32n = BigInt(32);
function fromBig(n, le = false) {
  if (le)
    return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
  return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
  const len = lst.length;
  let Ah = new Uint32Array(len);
  let Al = new Uint32Array(len);
  for (let i = 0; i < len; i++) {
    const { h, l } = fromBig(lst[i], le);
    [Ah[i], Al[i]] = [h, l];
  }
  return [Ah, Al];
}
var rotlSH = (h, l, s) => h << s | l >>> 32 - s;
var rotlSL = (h, l, s) => l << s | h >>> 32 - s;
var rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
var rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;

// node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/utils.js
function isBytes(a) {
  return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
function anumber(n, title = "") {
  if (!Number.isSafeInteger(n) || n < 0) {
    const prefix = title && `"${title}" `;
    throw new Error(`${prefix}expected integer >= 0, got ${n}`);
  }
}
function abytes(value, length, title = "") {
  const bytes = isBytes(value);
  const len = value?.length;
  const needsLen = length !== void 0;
  if (!bytes || needsLen && len !== length) {
    const prefix = title && `"${title}" `;
    const ofLen = needsLen ? ` of length ${length}` : "";
    const got = bytes ? `length=${len}` : `type=${typeof value}`;
    throw new Error(prefix + "expected Uint8Array" + ofLen + ", got " + got);
  }
  return value;
}
function aexists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function aoutput(out, instance) {
  abytes(out, void 0, "digestInto() output");
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error('"digestInto() output" expected to be of length >=' + min);
  }
}
function u32(arr) {
  return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function clean(...arrays) {
  for (let i = 0; i < arrays.length; i++) {
    arrays[i].fill(0);
  }
}
var isLE = (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
function byteSwap(word) {
  return word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
}
function byteSwap32(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = byteSwap(arr[i]);
  }
  return arr;
}
var swap32IfBE = isLE ? (u) => u : byteSwap32;
var hasHexBuiltin = (() => (
  // @ts-ignore
  typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function"
))();
var hexes = Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
function bytesToHex(bytes) {
  abytes(bytes);
  if (hasHexBuiltin)
    return bytes.toHex();
  let hex = "";
  for (let i = 0; i < bytes.length; i++) {
    hex += hexes[bytes[i]];
  }
  return hex;
}
var asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function asciiToBase16(ch) {
  if (ch >= asciis._0 && ch <= asciis._9)
    return ch - asciis._0;
  if (ch >= asciis.A && ch <= asciis.F)
    return ch - (asciis.A - 10);
  if (ch >= asciis.a && ch <= asciis.f)
    return ch - (asciis.a - 10);
  return;
}
function hexToBytes(hex) {
  if (typeof hex !== "string")
    throw new Error("hex string expected, got " + typeof hex);
  if (hasHexBuiltin)
    return Uint8Array.fromHex(hex);
  const hl = hex.length;
  const al = hl / 2;
  if (hl % 2)
    throw new Error("hex string expected, got unpadded hex of length " + hl);
  const array = new Uint8Array(al);
  for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
    const n1 = asciiToBase16(hex.charCodeAt(hi));
    const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
    if (n1 === void 0 || n2 === void 0) {
      const char = hex[hi] + hex[hi + 1];
      throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
    }
    array[ai] = n1 * 16 + n2;
  }
  return array;
}
function utf8ToBytes(str) {
  if (typeof str !== "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(str));
}
function createHasher(hashCons, info = {}) {
  const hashC = (msg, opts) => hashCons(opts).update(msg).digest();
  const tmp = hashCons(void 0);
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = (opts) => hashCons(opts);
  Object.assign(hashC, info);
  return Object.freeze(hashC);
}
var oidNist = (suffix) => ({
  oid: Uint8Array.from([6, 9, 96, 134, 72, 1, 101, 3, 4, 2, suffix])
});

// node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/sha3.js
var _0n = BigInt(0);
var _1n = BigInt(1);
var _2n = BigInt(2);
var _7n = BigInt(7);
var _256n = BigInt(256);
var _0x71n = BigInt(113);
var SHA3_PI = [];
var SHA3_ROTL = [];
var _SHA3_IOTA = [];
for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
  [x, y] = [y, (2 * x + 3 * y) % 5];
  SHA3_PI.push(2 * (5 * y + x));
  SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
  let t = _0n;
  for (let j = 0; j < 7; j++) {
    R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
    if (R & _2n)
      t ^= _1n << (_1n << BigInt(j)) - _1n;
  }
  _SHA3_IOTA.push(t);
}
var IOTAS = split(_SHA3_IOTA, true);
var SHA3_IOTA_H = IOTAS[0];
var SHA3_IOTA_L = IOTAS[1];
var rotlH = (h, l, s) => s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s);
var rotlL = (h, l, s) => s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s);
function keccakP(s, rounds = 24) {
  const B = new Uint32Array(5 * 2);
  for (let round = 24 - rounds; round < 24; round++) {
    for (let x = 0; x < 10; x++)
      B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
    for (let x = 0; x < 10; x += 2) {
      const idx1 = (x + 8) % 10;
      const idx0 = (x + 2) % 10;
      const B0 = B[idx0];
      const B1 = B[idx0 + 1];
      const Th = rotlH(B0, B1, 1) ^ B[idx1];
      const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
      for (let y = 0; y < 50; y += 10) {
        s[x + y] ^= Th;
        s[x + y + 1] ^= Tl;
      }
    }
    let curH = s[2];
    let curL = s[3];
    for (let t = 0; t < 24; t++) {
      const shift = SHA3_ROTL[t];
      const Th = rotlH(curH, curL, shift);
      const Tl = rotlL(curH, curL, shift);
      const PI = SHA3_PI[t];
      curH = s[PI];
      curL = s[PI + 1];
      s[PI] = Th;
      s[PI + 1] = Tl;
    }
    for (let y = 0; y < 50; y += 10) {
      for (let x = 0; x < 10; x++)
        B[x] = s[y + x];
      for (let x = 0; x < 10; x++)
        s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
    }
    s[0] ^= SHA3_IOTA_H[round];
    s[1] ^= SHA3_IOTA_L[round];
  }
  clean(B);
}
var Keccak = class _Keccak {
  state;
  pos = 0;
  posOut = 0;
  finished = false;
  state32;
  destroyed = false;
  blockLen;
  suffix;
  outputLen;
  enableXOF = false;
  rounds;
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
    this.blockLen = blockLen;
    this.suffix = suffix;
    this.outputLen = outputLen;
    this.enableXOF = enableXOF;
    this.rounds = rounds;
    anumber(outputLen, "outputLen");
    if (!(0 < blockLen && blockLen < 200))
      throw new Error("only keccak-f1600 function is supported");
    this.state = new Uint8Array(200);
    this.state32 = u32(this.state);
  }
  clone() {
    return this._cloneInto();
  }
  keccak() {
    swap32IfBE(this.state32);
    keccakP(this.state32, this.rounds);
    swap32IfBE(this.state32);
    this.posOut = 0;
    this.pos = 0;
  }
  update(data) {
    aexists(this);
    abytes(data);
    const { blockLen, state } = this;
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      for (let i = 0; i < take; i++)
        state[this.pos++] ^= data[pos++];
      if (this.pos === blockLen)
        this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = true;
    const { state, suffix, pos, blockLen } = this;
    state[pos] ^= suffix;
    if ((suffix & 128) !== 0 && pos === blockLen - 1)
      this.keccak();
    state[blockLen - 1] ^= 128;
    this.keccak();
  }
  writeInto(out) {
    aexists(this, false);
    abytes(out);
    this.finish();
    const bufferOut = this.state;
    const { blockLen } = this;
    for (let pos = 0, len = out.length; pos < len; ) {
      if (this.posOut >= blockLen)
        this.keccak();
      const take = Math.min(blockLen - this.posOut, len - pos);
      out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
      this.posOut += take;
      pos += take;
    }
    return out;
  }
  xofInto(out) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(out);
  }
  xof(bytes) {
    anumber(bytes);
    return this.xofInto(new Uint8Array(bytes));
  }
  digestInto(out) {
    aoutput(out, this);
    if (this.finished)
      throw new Error("digest() was already called");
    this.writeInto(out);
    this.destroy();
    return out;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true;
    clean(this.state);
  }
  _cloneInto(to) {
    const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
    to ||= new _Keccak(blockLen, suffix, outputLen, enableXOF, rounds);
    to.state32.set(this.state32);
    to.pos = this.pos;
    to.posOut = this.posOut;
    to.finished = this.finished;
    to.rounds = rounds;
    to.suffix = suffix;
    to.outputLen = outputLen;
    to.enableXOF = enableXOF;
    to.destroyed = this.destroyed;
    return to;
  }
};
var genKeccak = (suffix, blockLen, outputLen, info = {}) => createHasher(() => new Keccak(blockLen, suffix, outputLen), info);
var sha3_224 = genKeccak(
  6,
  144,
  28,
  oidNist(7)
);
var sha3_256 = genKeccak(
  6,
  136,
  32,
  oidNist(8)
);
var sha3_384 = genKeccak(
  6,
  104,
  48,
  oidNist(9)
);
var sha3_512 = genKeccak(
  6,
  72,
  64,
  oidNist(10)
);
var keccak_224 = genKeccak(1, 144, 28);
var keccak_256 = genKeccak(1, 136, 32);
var keccak_384 = genKeccak(1, 104, 48);
var keccak_512 = genKeccak(1, 72, 64);
var genShake = (suffix, blockLen, outputLen, info = {}) => createHasher((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true), info);
var shake128 = genShake(31, 168, 16, oidNist(11));
var shake256 = genShake(31, 136, 32, oidNist(12));
var shake128_32 = genShake(31, 168, 32, oidNist(11));
var shake256_64 = genShake(31, 136, 64, oidNist(12));

// node_modules/.pnpm/miden-para@0.10.9_@demox-labs+miden-sdk@0.12.5_rollup@4.53.3_tslib@2.8.1_typescript@5.9_cae07f470e83fe8c6ec6ae93ce220ae9/node_modules/miden-para/dist/esm/utils.js
var fromHexSig = (hexString) => {
  if (hexString.length % 2 !== 0) {
    throw new Error("Invalid string len");
  }
  const sigBytes = hexToBytes(hexString);
  const serialized = new Uint8Array(sigBytes.length + 2);
  serialized[0] = 1;
  serialized.set(sigBytes, 1);
  return serialized;
};
var accountSeedFromStr = (str) => {
  if (!str) return;
  const buffer = new Uint8Array(32);
  const bytes = utf8ToBytes(str);
  buffer.set(bytes.slice(0, 32));
  return buffer;
};
var evmPkToCommitment = async (uncompressedPublicKey) => {
  const { Felt, Rpo256, FeltArray } = await import("./@demox-labs_miden-sdk.js");
  const withoutPrefix = uncompressedPublicKey.slice(4);
  const x = withoutPrefix.slice(0, 64);
  const y = withoutPrefix.slice(64);
  const tag = parseInt(y.slice(-1), 16) % 2 === 0 ? 2 : 3;
  const bytes = new Uint8Array(33);
  bytes[0] = tag;
  bytes.set(hexToBytes(x), 1);
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const felts = Array.from(
    { length: 8 },
    (_, i) => new Felt(BigInt(view.getUint32(i * 4, true)))
  );
  felts.push(new Felt(BigInt(bytes[32])));
  return Rpo256.hashElements(new FeltArray(felts));
};
var getUncompressedPublicKeyFromWallet = async (para, wallet) => {
  let publicKey = wallet.publicKey;
  if (!publicKey) {
    const { token } = await para.issueJwt();
    const payload = JSON.parse(window.atob(token.split(".")[1]));
    if (!payload.data) {
      throw new Error("Got invalid jwt token");
    }
    const wallets = payload.data.connectedWallets;
    const w = wallets.find((w2) => w2.id === wallet.id);
    if (!w) {
      throw new Error("Wallet Not Found in jwt data");
    }
    publicKey = w.publicKey;
  }
  return publicKey;
};
var txSummaryToJosn = (txSummary) => {
  const inputNotes = txSummary.inputNotes().notes().map((inputNote) => ({
    id: inputNote.id().toString(),
    assets: inputNote.note().assets().fungibleAssets().map((asset) => {
      return {
        assetId: asset.faucetId().toString(),
        amount: asset.amount().toString()
      };
    }),
    sender: inputNote.note().metadata().sender().toString()
  }));
  const outputNotes = txSummary.outputNotes().notes().map((outputNote) => ({
    id: outputNote.id().toString(),
    assets: outputNote.assets().fungibleAssets().map((asset) => {
      return {
        assetId: asset.faucetId().toString(),
        amount: asset.amount().toString()
      };
    }),
    noteType: noteTypeToString(outputNote.metadata().noteType())
  }));
  return {
    inputNotes,
    outputNotes
  };
};
function noteTypeToString(noteType) {
  switch (noteType) {
    case 1:
      return "public";
    case 2:
      return "private";
    case 3:
      return "encrypted";
    default:
      return "UNKNOWN";
  }
}

// node_modules/.pnpm/miden-para@0.10.9_@demox-labs+miden-sdk@0.12.5_rollup@4.53.3_tslib@2.8.1_typescript@5.9_cae07f470e83fe8c6ec6ae93ce220ae9/node_modules/miden-para/dist/esm/modalClient.js
var createModalShell = (titleText) => {
  const existing = document.getElementById("para-signing-modal");
  if (existing) existing.remove();
  const overlay = document.createElement("div");
  overlay.id = "para-signing-modal";
  Object.assign(overlay.style, {
    position: "fixed",
    inset: "0",
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "9999",
    padding: "16px",
    boxSizing: "border-box",
    color: "#0f172a",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
  });
  const modal = document.createElement("div");
  Object.assign(modal.style, {
    background: "#f8fafc",
    borderRadius: "12px",
    padding: "20px",
    maxWidth: "420px",
    width: "100%",
    boxShadow: "0 12px 40px rgba(15, 23, 42, 0.25)"
  });
  const title = document.createElement("div");
  title.textContent = titleText;
  Object.assign(title.style, {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "12px"
  });
  modal.append(title);
  overlay.append(modal);
  return { overlay, modal };
};
var createActionsRow = () => {
  const actions = document.createElement("div");
  Object.assign(actions.style, {
    display: "flex",
    gap: "10px",
    justifyContent: "flex-end"
  });
  return actions;
};
var createPrimaryButton = (label) => {
  const button = document.createElement("button");
  button.textContent = label;
  Object.assign(button.style, {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    background: "#0ea5e9",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600"
  });
  return button;
};
var createSecondaryButton = (label) => {
  const button = document.createElement("button");
  button.textContent = label;
  Object.assign(button.style, {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    background: "#fff",
    color: "#0f172a",
    cursor: "pointer",
    fontWeight: "600"
  });
  return button;
};
var signingModal = (txSummaryJson) => {
  if (typeof document === "undefined") return Promise.resolve(true);
  return new Promise((resolve) => {
    const { overlay, modal } = createModalShell(
      "Do you want to sign this transaction?"
    );
    const txDetails = document.createElement("div");
    Object.assign(txDetails.style, {
      fontSize: "13px",
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
      background: "#e2e8f0",
      padding: "10px",
      borderRadius: "8px",
      marginBottom: "16px",
      color: "#0f172a",
      maxHeight: "300px",
      overflowY: "auto"
    });
    const inputSection = document.createElement("div");
    inputSection.style.marginBottom = "12px";
    const inputTitle = document.createElement("div");
    inputTitle.textContent = "Input Notes:";
    inputTitle.style.fontWeight = "600";
    inputTitle.style.marginBottom = "4px";
    inputSection.append(inputTitle);
    if (txSummaryJson.inputNotes.length === 0) {
      const noInputs = document.createElement("div");
      noInputs.textContent = "None";
      noInputs.style.color = "#64748b";
      inputSection.append(noInputs);
    } else {
      txSummaryJson.inputNotes.forEach((note, idx) => {
        const noteDiv = document.createElement("div");
        noteDiv.style.marginBottom = "8px";
        noteDiv.style.paddingLeft = "8px";
        noteDiv.innerHTML = `
          <div><strong>Note ${idx + 1}:</strong> ${note.id}</div>
          <div style="padding-left: 8px; color: #475569;">
            Sender: ${note.sender}<br/>
            Assets: ${note.assets.map((a) => `${a.amount} of ${a.assetId}`).join(", ") || "None"}
          </div>
        `;
        inputSection.append(noteDiv);
      });
    }
    const outputSection = document.createElement("div");
    const outputTitle = document.createElement("div");
    outputTitle.textContent = "Output Notes:";
    outputTitle.style.fontWeight = "600";
    outputTitle.style.marginBottom = "4px";
    outputSection.append(outputTitle);
    if (txSummaryJson.outputNotes.length === 0) {
      const noOutputs = document.createElement("div");
      noOutputs.textContent = "None";
      noOutputs.style.color = "#64748b";
      outputSection.append(noOutputs);
    } else {
      txSummaryJson.outputNotes.forEach((note, idx) => {
        const noteDiv = document.createElement("div");
        noteDiv.style.marginBottom = "8px";
        noteDiv.style.paddingLeft = "8px";
        noteDiv.innerHTML = `
          <div><strong>Note ${idx + 1}:</strong> ${note.id}</div>
          <div style="padding-left: 8px; color: #475569;">
            Type: ${note.noteType}<br/>
            Assets: ${note.assets.map((a) => `${a.amount} of ${a.assetId}`).join(", ") || "None"}
          </div>
        `;
        outputSection.append(noteDiv);
      });
    }
    txDetails.append(inputSection, outputSection);
    const actions = createActionsRow();
    const yesBtn = createPrimaryButton("Yes");
    const noBtn = createSecondaryButton("No");
    const cleanup = () => {
      overlay.remove();
    };
    yesBtn.onclick = () => {
      cleanup();
      resolve(true);
    };
    noBtn.onclick = () => {
      cleanup();
      resolve(false);
    };
    actions.append(noBtn, yesBtn);
    modal.append(txDetails, actions);
    document.body.append(overlay);
  });
};
var accountSelectionModal = (accounts) => {
  if (accounts.length === 1 || typeof document === "undefined") {
    return Promise.resolve(0);
  }
  return new Promise((resolve) => {
    const { overlay, modal } = createModalShell("Choose an account to use");
    const list = document.createElement("div");
    Object.assign(list.style, {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      marginBottom: "16px"
    });
    let selectedIndex = 0;
    const items = [];
    const highlightSelection = () => {
      items.forEach((item, idx) => {
        item.style.borderColor = idx === selectedIndex ? "#0ea5e9" : "#cbd5e1";
        item.style.background = idx === selectedIndex ? "#e0f2fe" : "#e2e8f0";
      });
    };
    const okBtn = createPrimaryButton("Ok");
    okBtn.disabled = !accounts.length;
    accounts.forEach((account, index) => {
      const item = document.createElement("button");
      item.type = "button";
      item.textContent = account;
      Object.assign(item.style, {
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #cbd5e1",
        background: "#e2e8f0",
        fontSize: "13px",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        color: "#0f172a",
        wordBreak: "break-all",
        textAlign: "left",
        cursor: "pointer"
      });
      item.onclick = () => {
        selectedIndex = index;
        highlightSelection();
        okBtn.disabled = false;
      };
      items.push(item);
      list.append(item);
    });
    if (items.length) {
      highlightSelection();
    }
    const actions = createActionsRow();
    const cleanup = () => {
      overlay.remove();
    };
    okBtn.onclick = () => {
      cleanup();
      resolve(selectedIndex);
    };
    actions.append(okBtn);
    modal.append(list, actions);
    document.body.append(overlay);
  });
};

// node_modules/.pnpm/miden-para@0.10.9_@demox-labs+miden-sdk@0.12.5_rollup@4.53.3_tslib@2.8.1_typescript@5.9_cae07f470e83fe8c6ec6ae93ce220ae9/node_modules/miden-para/dist/esm/midenClient.js
var signCb = (para, wallet, showSigningModal, customSignConfirmStep) => {
  return async (_, signingInputs) => {
    const { SigningInputs } = await import("./@demox-labs_miden-sdk.js");
    const inputs = SigningInputs.deserialize(signingInputs);
    let commitment = inputs.toCommitment().toHex().slice(2);
    const hashed = bytesToHex(keccak_256(hexToBytes(commitment)));
    const txSummaryJson = txSummaryToJosn(inputs.transactionSummaryPayload());
    if (showSigningModal) {
      const confirmed = await signingModal(txSummaryJson);
      if (!confirmed) {
        throw new Error("User cancelled signing");
      }
    }
    if (customSignConfirmStep) {
      await customSignConfirmStep(txSummaryJson);
    }
    console.time("Para Signing Time");
    const res = await para.signMessage({
      walletId: wallet.id,
      messageBase64: hexStringToBase64(hashed)
    });
    console.timeEnd("Para Signing Time");
    const signature = res.signature;
    const sig = fromHexSig(signature);
    return sig;
  };
};
async function createAccount(midenClient, publicKey, opts) {
  const { AccountBuilder, AccountComponent, AccountStorageMode } = await import("./@demox-labs_miden-sdk.js");
  await midenClient.syncState();
  let pkc = await evmPkToCommitment(publicKey);
  const accountBuilder = new AccountBuilder(
    accountSeedFromStr(opts.accountSeed) ?? new Uint8Array(32).fill(0)
  );
  let accountStorageMode;
  if (opts.storageMode === "public") {
    accountStorageMode = AccountStorageMode.public();
  } else if (opts.storageMode === "private") {
    accountStorageMode = AccountStorageMode.private();
  } else {
    accountStorageMode = AccountStorageMode.network();
  }
  const account = accountBuilder.withAuthComponent(
    AccountComponent.createAuthComponentFromCommitment(pkc, 1)
  ).accountType(opts.type).storageMode(accountStorageMode).withBasicWalletComponent().build().account;
  if (opts.storageMode !== "private") {
    try {
      await midenClient.importAccountById(account.id());
    } catch {
    }
  }
  const existing = await midenClient.getAccount(account.id());
  if (!existing) {
    await midenClient.newAccount(account, false);
  }
  await midenClient.syncState();
  return account.id().toString();
}
async function createParaMidenClient(para, wallets, opts, showSigningModal = true, customSignConfirmStep) {
  const evmWallets = wallets.filter((wallet2) => wallet2.type === "EVM");
  if (!evmWallets?.length) {
    throw new Error("No EVM wallets provided");
  }
  const accountKeys = await Promise.all(
    evmWallets.map((w) => getUncompressedPublicKeyFromWallet(para, w))
  );
  const selectedIndex = await accountSelectionModal(accountKeys);
  const wallet = evmWallets[selectedIndex] ?? evmWallets[0];
  const publicKey = accountKeys[selectedIndex] ?? accountKeys[0];
  const { WebClient } = await import("./@demox-labs_miden-sdk.js");
  const createClientWithExternalKeystore = WebClient.createClientWithExternalKeystore;
  if (opts.storageMode === "private" && !opts.accountSeed) {
    throw new Error("accountSeed is required when using private storage mode");
  }
  const noteTransportUrl = opts.noteTransportUrl || opts.nodeTransportUrl || "https://transport.miden.io";
  const client = await createClientWithExternalKeystore(
    opts.endpoint,
    noteTransportUrl,
    opts.seed,
    void 0,
    void 0,
    signCb(para, wallet, showSigningModal, customSignConfirmStep)
  );
  const accountId = await createAccount(
    client,
    publicKey,
    opts
  );
  return { client, accountId };
}
export {
  createParaMidenClient,
  signCb
};
//# sourceMappingURL=miden-para.js.map
