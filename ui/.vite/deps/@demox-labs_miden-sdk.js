import {
  Account,
  AccountArray,
  AccountBuilder,
  AccountBuilderResult,
  AccountCode,
  AccountComponent,
  AccountDelta,
  AccountFile,
  AccountHeader,
  AccountId,
  AccountIdArray,
  AccountInterface,
  AccountStorage,
  AccountStorageDelta,
  AccountStorageMode,
  AccountStorageRequirements,
  AccountType,
  AccountVaultDelta,
  Address,
  AdviceInputs,
  AdviceMap,
  AssetVault,
  AuthSecretKey,
  BasicFungibleFaucetComponent,
  BlockHeader,
  ConsumableNoteRecord,
  Endpoint,
  ExecutedTransaction,
  Felt,
  FeltArray,
  FetchedNote,
  FlattenedU8Vec,
  ForeignAccount,
  ForeignAccountArray,
  FungibleAsset,
  FungibleAssetDelta,
  FungibleAssetDeltaItem,
  GetProceduresResultItem,
  InputNote,
  InputNoteRecord,
  InputNoteState,
  InputNotes,
  IntoUnderlyingByteSource,
  IntoUnderlyingSink,
  IntoUnderlyingSource,
  JsAccountUpdate,
  JsStateSyncUpdate,
  JsStorageMapEntry,
  JsStorageSlot,
  JsVaultAsset,
  Library,
  MerklePath,
  NetworkId,
  Note,
  NoteAndArgs,
  NoteAndArgsArray,
  NoteAssets,
  NoteConsumability,
  NoteDetails,
  NoteDetailsAndTag,
  NoteDetailsAndTagArray,
  NoteExecutionHint,
  NoteExecutionMode,
  NoteFile,
  NoteFilter,
  NoteFilterTypes,
  NoteHeader,
  NoteId,
  NoteIdAndArgs,
  NoteIdAndArgsArray,
  NoteInclusionProof,
  NoteInputs,
  NoteLocation,
  NoteMetadata,
  NoteRecipient,
  NoteRecipientArray,
  NoteScript,
  NoteTag,
  NoteType,
  OutputNote,
  OutputNoteArray,
  OutputNotes,
  OutputNotesArray,
  Package,
  PartialNote,
  Program,
  ProvenTransaction,
  PublicKey,
  RpcClient,
  Rpo256,
  ScriptBuilder,
  SecretKey,
  SerializedInputNoteData,
  SerializedOutputNoteData,
  SerializedTransactionData,
  Signature,
  SigningInputs,
  SigningInputsType,
  SlotAndKeys,
  StorageMap,
  StorageSlot,
  StorageSlotArray,
  SyncSummary,
  TestUtils,
  TokenSymbol,
  TransactionArgs,
  TransactionFilter,
  TransactionId,
  TransactionProver,
  TransactionRecord,
  TransactionRequest,
  TransactionRequestBuilder,
  TransactionResult,
  TransactionScript,
  TransactionScriptInputPair,
  TransactionScriptInputPairArray,
  TransactionStatus,
  TransactionStoreUpdate,
  TransactionSummary,
  Word,
  initSync
} from "./chunk-JGDOBJS2.js";
import "./chunk-QEK2ZTOW.js";

// node_modules/.pnpm/@demox-labs+miden-sdk@0.12.5_rollup@4.53.3_tslib@2.8.1_typescript@5.9.3/node_modules/@demox-labs/miden-sdk/dist/wasm.js
async function loadWasm() {
  let wasmModule2;
  if (!import.meta.env || import.meta.env && !import.meta.env.SSR) {
    wasmModule2 = await import("./Cargo-68d95828-6ABRZOS2.js");
  }
  return wasmModule2;
}

// node_modules/.pnpm/@demox-labs+miden-sdk@0.12.5_rollup@4.53.3_tslib@2.8.1_typescript@5.9.3/node_modules/@demox-labs/miden-sdk/dist/index.js
var WorkerAction = Object.freeze({
  INIT: "init",
  CALL_METHOD: "callMethod"
});
var MethodName = Object.freeze({
  CREATE_CLIENT: "createClient",
  NEW_WALLET: "newWallet",
  NEW_FAUCET: "newFaucet",
  EXECUTE_TRANSACTION: "executeTransaction",
  PROVE_TRANSACTION: "proveTransaction",
  SUBMIT_NEW_TRANSACTION: "submitNewTransaction",
  SUBMIT_NEW_TRANSACTION_MOCK: "submitNewTransactionMock",
  SYNC_STATE: "syncState",
  SYNC_STATE_MOCK: "syncStateMock"
});
var buildTypedArraysExport = (exportObject) => {
  return Object.entries(exportObject).reduce(
    (exports, [exportName, _export]) => {
      if (exportName.endsWith("Array")) {
        exports[exportName] = _export;
      }
      return exports;
    },
    {}
  );
};
var MidenArrays = {};
var wasmModule = null;
var wasmLoadPromise = null;
var webClientStaticsCopied = false;
var ensureWasm = async () => {
  if (wasmModule) {
    return wasmModule;
  }
  if (!wasmLoadPromise) {
    wasmLoadPromise = loadWasm().then((module) => {
      wasmModule = module;
      if (module) {
        Object.assign(MidenArrays, buildTypedArraysExport(module));
        if (!webClientStaticsCopied && module.WebClient) {
          copyWebClientStatics(module.WebClient);
          webClientStaticsCopied = true;
        }
      }
      return module;
    });
  }
  return wasmLoadPromise;
};
var getWasmOrThrow = async () => {
  const module = await ensureWasm();
  if (!module) {
    throw new Error(
      "Miden WASM bindings are unavailable in this environment (SSR is disabled)."
    );
  }
  return module;
};
var WebClient = class _WebClient {
  /**
   * Create a WebClient wrapper.
   *
   * @param {string | undefined} rpcUrl - RPC endpoint URL used by the client.
   * @param {Uint8Array | undefined} seed - Optional seed for account initialization.
   * @param {(pubKey: Uint8Array) => Promise<Uint8Array | null | undefined> | Uint8Array | null | undefined} [getKeyCb]
   *   - Callback to retrieve the secret key bytes for a given public key. The `pubKey`
   *   parameter is the serialized public key (from `PublicKey.serialize()`). Return the
   *   corresponding secret key as a `Uint8Array`, or `null`/`undefined` if not found. The
   *   return value may be provided synchronously or via a `Promise`.
   * @param {(pubKey: Uint8Array, secretKey: Uint8Array) => Promise<void> | void} [insertKeyCb]
   *   - Callback to persist a secret key. `pubKey` is the serialized public key, and
   *   `secretKey` is the serialized secret key (from `SecretKey.serialize()`). May return
   *   `void` or a `Promise<void>`.
   * @param {(pubKey: Uint8Array, signingInputs: Uint8Array) => Promise<Array<number | string>> | Array<number | string>} [signCb]
   *   - Callback to produce signature elements for the provided inputs. `pubKey` is the
   *   serialized public key, and `signingInputs` is a `Uint8Array` produced by
   *   `SigningInputs.serialize()`. Must return an array of numeric values (numbers or numeric
   *   strings) representing the signature elements, either directly or wrapped in a `Promise`.
   */
  constructor(rpcUrl, noteTransportUrl, seed, getKeyCb, insertKeyCb, signCb) {
    this.rpcUrl = rpcUrl;
    this.noteTransportUrl = noteTransportUrl;
    this.seed = seed;
    this.getKeyCb = getKeyCb;
    this.insertKeyCb = insertKeyCb;
    this.signCb = signCb;
    if (typeof Worker !== "undefined" && !this.getKeyCb && !this.insertKeyCb && !this.signCb) {
      console.log("WebClient: Web Workers are available.");
      this.worker = new Worker(
        new URL("./workers/web-client-methods-worker.js", import.meta.url),
        { type: "module" }
      );
      this.pendingRequests = /* @__PURE__ */ new Map();
      this.loaded = new Promise((resolve) => {
        this.loadedResolver = resolve;
      });
      this.ready = new Promise((resolve) => {
        this.readyResolver = resolve;
      });
      this.worker.addEventListener("message", (event) => {
        const data = event.data;
        if (data.loaded) {
          this.loadedResolver();
          return;
        }
        if (data.ready) {
          this.readyResolver();
          return;
        }
        const { requestId, error, result, methodName } = data;
        if (requestId && this.pendingRequests.has(requestId)) {
          const { resolve, reject } = this.pendingRequests.get(requestId);
          this.pendingRequests.delete(requestId);
          if (error) {
            console.error(
              `WebClient: Error from worker in ${methodName}:`,
              error
            );
            reject(new Error(error));
          } else {
            resolve(result);
          }
        }
      });
      this.loaded.then(() => {
        this.worker.postMessage({
          action: WorkerAction.INIT,
          args: [
            this.rpcUrl,
            this.noteTransportUrl,
            this.seed,
            this.getKeyCb,
            this.insertKeyCb,
            this.signCb
          ]
        });
      });
    } else {
      console.log("WebClient: Web Workers are not available.");
      this.worker = null;
      this.pendingRequests = null;
      this.loaded = Promise.resolve();
      this.ready = Promise.resolve();
    }
    this.wasmWebClient = null;
    this.wasmWebClientPromise = null;
  }
  async getWasmWebClient() {
    if (this.wasmWebClient) {
      return this.wasmWebClient;
    }
    if (!this.wasmWebClientPromise) {
      this.wasmWebClientPromise = (async () => {
        const wasm = await getWasmOrThrow();
        const client = new wasm.WebClient();
        this.wasmWebClient = client;
        return client;
      })();
    }
    return this.wasmWebClientPromise;
  }
  /**
   * Factory method to create and initialize a WebClient instance.
   * This method is async so you can await the asynchronous call to createClient().
   *
   * @param {string} rpcUrl - The RPC URL.
   * @param {string} noteTransportUrl - The note transport URL (optional).
   * @param {string} seed - The seed for the account.
   * @returns {Promise<WebClient>} The fully initialized WebClient.
   */
  static async createClient(rpcUrl, noteTransportUrl, seed) {
    const instance = new _WebClient(rpcUrl, noteTransportUrl, seed);
    const wasmWebClient = await instance.getWasmWebClient();
    await wasmWebClient.createClient(rpcUrl, noteTransportUrl, seed);
    await instance.ready;
    return new Proxy(instance, {
      get(target, prop, receiver) {
        if (prop in target) {
          return Reflect.get(target, prop, receiver);
        }
        if (target.wasmWebClient && prop in target.wasmWebClient) {
          const value = target.wasmWebClient[prop];
          if (typeof value === "function") {
            return value.bind(target.wasmWebClient);
          }
          return value;
        }
        return void 0;
      }
    });
  }
  /**
   * Factory method to create and initialize a WebClient instance with a remote keystore.
   * This method is async so you can await the asynchronous call to createClientWithExternalKeystore().
   *
   * @param {string} rpcUrl - The RPC URL.
   * @param {string | undefined} noteTransportUrl - The note transport URL (optional).
   * @param {string | undefined} seed - The seed for the account.
   * @param {Function | undefined} getKeyCb - The get key callback.
   * @param {Function | undefined} insertKeyCb - The insert key callback.
   * @param {Function | undefined} signCb - The sign callback.
   * @returns {Promise<WebClient>} The fully initialized WebClient.
   */
  static async createClientWithExternalKeystore(rpcUrl, noteTransportUrl, seed, getKeyCb, insertKeyCb, signCb) {
    const instance = new _WebClient(
      rpcUrl,
      noteTransportUrl,
      seed,
      getKeyCb,
      insertKeyCb,
      signCb
    );
    const wasmWebClient = await instance.getWasmWebClient();
    await wasmWebClient.createClientWithExternalKeystore(
      rpcUrl,
      noteTransportUrl,
      seed,
      getKeyCb,
      insertKeyCb,
      signCb
    );
    await instance.ready;
    return new Proxy(instance, {
      get(target, prop, receiver) {
        if (prop in target) {
          return Reflect.get(target, prop, receiver);
        }
        if (target.wasmWebClient && prop in target.wasmWebClient) {
          const value = target.wasmWebClient[prop];
          if (typeof value === "function") {
            return value.bind(target.wasmWebClient);
          }
          return value;
        }
        return void 0;
      }
    });
  }
  /**
   * Call a method via the worker.
   * @param {string} methodName - Name of the method to call.
   * @param  {...any} args - Arguments for the method.
   * @returns {Promise<any>}
   */
  async callMethodWithWorker(methodName, ...args) {
    await this.ready;
    const requestId = `${methodName}-${Date.now()}-${Math.random()}`;
    return new Promise((resolve, reject) => {
      this.pendingRequests.set(requestId, { resolve, reject });
      this.worker.postMessage({
        action: WorkerAction.CALL_METHOD,
        methodName,
        args,
        requestId
      });
    });
  }
  // ----- Explicitly Wrapped Methods (Worker-Forwarded) -----
  async newWallet(storageMode, mutable, authSchemeId, seed) {
    try {
      if (!this.worker) {
        const wasmWebClient = await this.getWasmWebClient();
        return await wasmWebClient.newWallet(
          storageMode,
          mutable,
          authSchemeId,
          seed
        );
      }
      const wasm = await getWasmOrThrow();
      const serializedStorageMode = storageMode.asStr();
      const serializedAccountBytes = await this.callMethodWithWorker(
        MethodName.NEW_WALLET,
        serializedStorageMode,
        mutable,
        authSchemeId,
        seed
      );
      return wasm.Account.deserialize(new Uint8Array(serializedAccountBytes));
    } catch (error) {
      console.error("INDEX.JS: Error in newWallet:", error.toString());
      throw error;
    }
  }
  async newFaucet(storageMode, nonFungible, tokenSymbol, decimals, maxSupply, authSchemeId) {
    try {
      if (!this.worker) {
        const wasmWebClient = await this.getWasmWebClient();
        return await wasmWebClient.newFaucet(
          storageMode,
          nonFungible,
          tokenSymbol,
          decimals,
          maxSupply,
          authSchemeId
        );
      }
      const wasm = await getWasmOrThrow();
      const serializedStorageMode = storageMode.asStr();
      const serializedMaxSupply = maxSupply.toString();
      const serializedAccountBytes = await this.callMethodWithWorker(
        MethodName.NEW_FAUCET,
        serializedStorageMode,
        nonFungible,
        tokenSymbol,
        decimals,
        serializedMaxSupply,
        authSchemeId
      );
      return wasm.Account.deserialize(new Uint8Array(serializedAccountBytes));
    } catch (error) {
      console.error("INDEX.JS: Error in newFaucet:", error.toString());
      throw error;
    }
  }
  async submitNewTransaction(accountId, transactionRequest) {
    try {
      if (!this.worker) {
        const wasmWebClient = await this.getWasmWebClient();
        return await wasmWebClient.submitNewTransaction(
          accountId,
          transactionRequest
        );
      }
      const wasm = await getWasmOrThrow();
      const serializedTransactionRequest = transactionRequest.serialize();
      const result = await this.callMethodWithWorker(
        MethodName.SUBMIT_NEW_TRANSACTION,
        accountId.toString(),
        serializedTransactionRequest
      );
      const transactionResult = wasm.TransactionResult.deserialize(
        new Uint8Array(result.serializedTransactionResult)
      );
      return transactionResult.id();
    } catch (error) {
      console.error(
        "INDEX.JS: Error in submitNewTransaction:",
        error.toString()
      );
      throw error;
    }
  }
  async executeTransaction(accountId, transactionRequest) {
    try {
      if (!this.worker) {
        const wasmWebClient = await this.getWasmWebClient();
        return await wasmWebClient.executeTransaction(
          accountId,
          transactionRequest
        );
      }
      const wasm = await getWasmOrThrow();
      const serializedTransactionRequest = transactionRequest.serialize();
      const serializedResultBytes = await this.callMethodWithWorker(
        MethodName.EXECUTE_TRANSACTION,
        accountId.toString(),
        serializedTransactionRequest
      );
      return wasm.TransactionResult.deserialize(
        new Uint8Array(serializedResultBytes)
      );
    } catch (error) {
      console.error("INDEX.JS: Error in executeTransaction:", error.toString());
      throw error;
    }
  }
  async submitTransaction(transactionResult, prover) {
    try {
      if (!this.worker) {
        const wasmWebClient2 = await this.getWasmWebClient();
        const proven = await wasmWebClient2.proveTransaction(
          transactionResult,
          prover
        );
        const submissionHeight2 = await wasmWebClient2.submitProvenTransaction(
          proven,
          transactionResult
        );
        return await wasmWebClient2.applyTransaction(
          transactionResult,
          submissionHeight2
        );
      }
      const wasm = await getWasmOrThrow();
      const serializedTransactionResult = transactionResult.serialize();
      const proverPayload = prover ? prover.serialize() : null;
      const { submissionHeight, serializedTransactionUpdate } = await this.callMethodWithWorker(
        MethodName.SUBMIT_TRANSACTION,
        serializedTransactionResult,
        proverPayload
      );
      if (this instanceof MockWebClient) {
        return wasm.TransactionStoreUpdate.deserialize(
          new Uint8Array(serializedTransactionUpdate)
        );
      }
      const wasmWebClient = await this.getWasmWebClient();
      return await wasmWebClient.applyTransaction(
        transactionResult,
        submissionHeight
      );
    } catch (error) {
      console.error("INDEX.JS: Error in submitTransaction:", error.toString());
      throw error;
    }
  }
  async proveTransaction(transactionResult, prover) {
    try {
      if (!this.worker) {
        const wasmWebClient = await this.getWasmWebClient();
        return await wasmWebClient.proveTransaction(transactionResult, prover);
      }
      const wasm = await getWasmOrThrow();
      const serializedTransactionResult = transactionResult.serialize();
      const proverPayload = prover ? prover.serialize() : null;
      const serializedProvenBytes = await this.callMethodWithWorker(
        MethodName.PROVE_TRANSACTION,
        serializedTransactionResult,
        proverPayload
      );
      return wasm.ProvenTransaction.deserialize(
        new Uint8Array(serializedProvenBytes)
      );
    } catch (error) {
      console.error("INDEX.JS: Error in proveTransaction:", error.toString());
      throw error;
    }
  }
  async syncState() {
    try {
      if (!this.worker) {
        const wasmWebClient = await this.getWasmWebClient();
        return await wasmWebClient.syncState();
      }
      const wasm = await getWasmOrThrow();
      const serializedSyncSummaryBytes = await this.callMethodWithWorker(
        MethodName.SYNC_STATE
      );
      return wasm.SyncSummary.deserialize(
        new Uint8Array(serializedSyncSummaryBytes)
      );
    } catch (error) {
      console.error("INDEX.JS: Error in syncState:", error.toString());
      throw error;
    }
  }
  terminate() {
    if (this.worker) {
      this.worker.terminate();
    }
  }
};
var MockWebClient = class _MockWebClient extends WebClient {
  constructor(seed) {
    super(null, seed);
  }
  /**
   * Factory method to create a WebClient with a mock chain for testing purposes.
   *
   * @param serializedMockChain - Serialized mock chain data (optional). Will use an empty chain if not provided.
   * @param serializedMockNoteTransportNode - Serialized mock note transport node data (optional). Will use a new instance if not provided.
   * @param seed - The seed for the account (optional).
   * @returns A promise that resolves to a MockWebClient.
   */
  static async createClient(serializedMockChain, serializedMockNoteTransportNode, seed) {
    const instance = new _MockWebClient(seed);
    const wasmWebClient = await instance.getWasmWebClient();
    await wasmWebClient.createMockClient(
      seed,
      serializedMockChain,
      serializedMockNoteTransportNode
    );
    await instance.ready;
    return new Proxy(instance, {
      get(target, prop, receiver) {
        if (prop in target) {
          return Reflect.get(target, prop, receiver);
        }
        if (target.wasmWebClient && prop in target.wasmWebClient) {
          const value = target.wasmWebClient[prop];
          if (typeof value === "function") {
            return value.bind(target.wasmWebClient);
          }
          return value;
        }
        return void 0;
      }
    });
  }
  async syncState() {
    try {
      const wasmWebClient = await this.getWasmWebClient();
      if (!this.worker) {
        return await wasmWebClient.syncState();
      }
      let serializedMockChain = wasmWebClient.serializeMockChain().buffer;
      let serializedMockNoteTransportNode = wasmWebClient.serializeMockNoteTransportNode().buffer;
      const wasm = await getWasmOrThrow();
      const serializedSyncSummaryBytes = await this.callMethodWithWorker(
        MethodName.SYNC_STATE_MOCK,
        serializedMockChain,
        serializedMockNoteTransportNode
      );
      return wasm.SyncSummary.deserialize(
        new Uint8Array(serializedSyncSummaryBytes)
      );
    } catch (error) {
      console.error("INDEX.JS: Error in syncState:", error.toString());
      throw error;
    }
  }
  async submitTransaction(transactionResult, prover) {
    try {
      if (!this.worker) {
        return await super.submitTransaction(transactionResult, prover);
      }
      const wasmWebClient = await this.getWasmWebClient();
      const wasm = await getWasmOrThrow();
      const serializedTransactionResult = transactionResult.serialize();
      const proverPayload = prover ? prover.serialize() : null;
      const serializedMockChain = wasmWebClient.serializeMockChain().buffer;
      const serializedMockNoteTransportNode = wasmWebClient.serializeMockNoteTransportNode().buffer;
      const result = await this.callMethodWithWorker(
        MethodName.SUBMIT_TRANSACTION_MOCK,
        serializedTransactionResult,
        proverPayload,
        serializedMockChain,
        serializedMockNoteTransportNode
      );
      const newMockChain = new Uint8Array(result.serializedMockChain);
      const newMockNoteTransportNode = result.serializedMockNoteTransportNode ? new Uint8Array(result.serializedMockNoteTransportNode) : void 0;
      if (!(this instanceof _MockWebClient)) {
        return await wasmWebClient.applyTransaction(
          transactionResult,
          result.submissionHeight
        );
      }
      this.wasmWebClient = new wasm.WebClient();
      this.wasmWebClientPromise = Promise.resolve(this.wasmWebClient);
      await this.wasmWebClient.createMockClient(
        this.seed,
        newMockChain,
        newMockNoteTransportNode
      );
      return wasm.TransactionStoreUpdate.deserialize(
        new Uint8Array(result.serializedTransactionUpdate)
      );
    } catch (error) {
      console.error("INDEX.JS: Error in submitTransaction:", error.toString());
      throw error;
    }
  }
  async submitNewTransaction(accountId, transactionRequest) {
    try {
      if (!this.worker) {
        return await super.submitNewTransaction(accountId, transactionRequest);
      }
      const wasmWebClient = await this.getWasmWebClient();
      const wasm = await getWasmOrThrow();
      const serializedTransactionRequest = transactionRequest.serialize();
      const serializedMockChain = wasmWebClient.serializeMockChain().buffer;
      const serializedMockNoteTransportNode = wasmWebClient.serializeMockNoteTransportNode().buffer;
      const result = await this.callMethodWithWorker(
        MethodName.SUBMIT_NEW_TRANSACTION_MOCK,
        accountId.toString(),
        serializedTransactionRequest,
        serializedMockChain,
        serializedMockNoteTransportNode
      );
      const newMockChain = new Uint8Array(result.serializedMockChain);
      const newMockNoteTransportNode = result.serializedMockNoteTransportNode ? new Uint8Array(result.serializedMockNoteTransportNode) : void 0;
      const transactionResult = wasm.TransactionResult.deserialize(
        new Uint8Array(result.serializedTransactionResult)
      );
      if (!(this instanceof _MockWebClient)) {
        return transactionResult.id();
      }
      this.wasmWebClient = new wasm.WebClient();
      this.wasmWebClientPromise = Promise.resolve(this.wasmWebClient);
      await this.wasmWebClient.createMockClient(
        this.seed,
        newMockChain,
        newMockNoteTransportNode
      );
      return transactionResult.id();
    } catch (error) {
      console.error(
        "INDEX.JS: Error in submitNewTransaction:",
        error.toString()
      );
      throw error;
    }
  }
};
function copyWebClientStatics(WasmWebClient) {
  if (!WasmWebClient) {
    return;
  }
  Object.getOwnPropertyNames(WasmWebClient).forEach((prop) => {
    if (typeof WasmWebClient[prop] === "function" && prop !== "constructor" && prop !== "prototype") {
      WebClient[prop] = WasmWebClient[prop];
    }
  });
}
export {
  Account,
  AccountArray,
  AccountBuilder,
  AccountBuilderResult,
  AccountCode,
  AccountComponent,
  AccountDelta,
  AccountFile,
  AccountHeader,
  AccountId,
  AccountIdArray,
  AccountInterface,
  AccountStorage,
  AccountStorageDelta,
  AccountStorageMode,
  AccountStorageRequirements,
  AccountType,
  AccountVaultDelta,
  Address,
  AdviceInputs,
  AdviceMap,
  AssetVault,
  AuthSecretKey,
  BasicFungibleFaucetComponent,
  BlockHeader,
  ConsumableNoteRecord,
  Endpoint,
  ExecutedTransaction,
  Felt,
  FeltArray,
  FetchedNote,
  FlattenedU8Vec,
  ForeignAccount,
  ForeignAccountArray,
  FungibleAsset,
  FungibleAssetDelta,
  FungibleAssetDeltaItem,
  GetProceduresResultItem,
  InputNote,
  InputNoteRecord,
  InputNoteState,
  InputNotes,
  IntoUnderlyingByteSource,
  IntoUnderlyingSink,
  IntoUnderlyingSource,
  JsAccountUpdate,
  JsStateSyncUpdate,
  JsStorageMapEntry,
  JsStorageSlot,
  JsVaultAsset,
  Library,
  MerklePath,
  MidenArrays,
  MockWebClient,
  NetworkId,
  Note,
  NoteAndArgs,
  NoteAndArgsArray,
  NoteAssets,
  NoteConsumability,
  NoteDetails,
  NoteDetailsAndTag,
  NoteDetailsAndTagArray,
  NoteExecutionHint,
  NoteExecutionMode,
  NoteFile,
  NoteFilter,
  NoteFilterTypes,
  NoteHeader,
  NoteId,
  NoteIdAndArgs,
  NoteIdAndArgsArray,
  NoteInclusionProof,
  NoteInputs,
  NoteLocation,
  NoteMetadata,
  NoteRecipient,
  NoteRecipientArray,
  NoteScript,
  NoteTag,
  NoteType,
  OutputNote,
  OutputNoteArray,
  OutputNotes,
  OutputNotesArray,
  Package,
  PartialNote,
  Program,
  ProvenTransaction,
  PublicKey,
  RpcClient,
  Rpo256,
  ScriptBuilder,
  SecretKey,
  SerializedInputNoteData,
  SerializedOutputNoteData,
  SerializedTransactionData,
  Signature,
  SigningInputs,
  SigningInputsType,
  SlotAndKeys,
  StorageMap,
  StorageSlot,
  StorageSlotArray,
  SyncSummary,
  TestUtils,
  TokenSymbol,
  TransactionArgs,
  TransactionFilter,
  TransactionId,
  TransactionProver,
  TransactionRecord,
  TransactionRequest,
  TransactionRequestBuilder,
  TransactionResult,
  TransactionScript,
  TransactionScriptInputPair,
  TransactionScriptInputPairArray,
  TransactionStatus,
  TransactionStoreUpdate,
  TransactionSummary,
  WebClient,
  Word,
  initSync
};
//# sourceMappingURL=@demox-labs_miden-sdk.js.map
