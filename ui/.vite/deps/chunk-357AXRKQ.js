import {
  from,
  getContractError,
  getSelector
} from "./chunk-RELLE3JG.js";
import {
  BaseError,
  InvalidAddressError,
  decodeErrorResult,
  isAddress
} from "./chunk-42GQ5IOA.js";

// node_modules/.pnpm/viem@2.41.2_bufferutil@4.0.9_typescript@5.9.3_utf-8-validate@5.0.10_zod@4.1.13/node_modules/viem/_esm/accounts/toAccount.js
function toAccount(source) {
  if (typeof source === "string") {
    if (!isAddress(source, { strict: false }))
      throw new InvalidAddressError({ address: source });
    return {
      address: source,
      type: "json-rpc"
    };
  }
  if (!isAddress(source.address, { strict: false }))
    throw new InvalidAddressError({ address: source.address });
  return {
    address: source.address,
    nonceManager: source.nonceManager,
    sign: source.sign,
    signAuthorization: source.signAuthorization,
    signMessage: source.signMessage,
    signTransaction: source.signTransaction,
    signTypedData: source.signTypedData,
    source: "custom",
    type: "local"
  };
}

// node_modules/.pnpm/ox@0.9.6_typescript@5.9.3_zod@4.1.13/node_modules/ox/_esm/core/AbiError.js
function from2(abiError, options = {}) {
  return from(abiError, options);
}
function getSelector2(abiItem) {
  return getSelector(abiItem);
}
var solidityError = from2({
  inputs: [
    {
      name: "message",
      type: "string"
    }
  ],
  name: "Error",
  type: "error"
});
var solidityPanic = from2({
  inputs: [
    {
      name: "reason",
      type: "uint8"
    }
  ],
  name: "Panic",
  type: "error"
});

// node_modules/.pnpm/viem@2.41.2_bufferutil@4.0.9_typescript@5.9.3_utf-8-validate@5.0.10_zod@4.1.13/node_modules/viem/_esm/experimental/erc7821/errors.js
var FunctionSelectorNotRecognizedError = class extends BaseError {
  constructor() {
    super("Function is not recognized.", {
      metaMessages: [
        "This could be due to any of the following:",
        "  - The contract does not have the function,",
        "  - The address is not a contract."
      ],
      name: "FunctionSelectorNotRecognizedError"
    });
  }
};

// node_modules/.pnpm/viem@2.41.2_bufferutil@4.0.9_typescript@5.9.3_utf-8-validate@5.0.10_zod@4.1.13/node_modules/viem/_esm/experimental/erc7821/utils/getExecuteError.js
function getExecuteError(e, parameters) {
  const error = e.walk((e2) => "data" in e2);
  if (!error?.data)
    return e;
  if (error.data === getSelector2(from2("error FnSelectorNotRecognized()")))
    return new FunctionSelectorNotRecognizedError();
  let matched = null;
  for (const c of parameters.calls) {
    const call2 = c;
    if (!call2.abi)
      continue;
    try {
      const matches = Boolean(decodeErrorResult({
        abi: call2.abi,
        data: error.data
      }));
      if (!matches)
        continue;
      matched = call2;
    } catch {
    }
  }
  if (matched)
    return getContractError(error, {
      abi: matched.abi,
      address: matched.to,
      args: matched.args,
      functionName: matched.functionName
    });
  return e;
}

// node_modules/.pnpm/viem@2.41.2_bufferutil@4.0.9_typescript@5.9.3_utf-8-validate@5.0.10_zod@4.1.13/node_modules/viem/_esm/experimental/erc7821/constants.js
var executionMode = {
  default: "0x0100000000000000000000000000000000000000000000000000000000000000",
  opData: "0x0100000000007821000100000000000000000000000000000000000000000000",
  batchOfBatches: "0x0100000000007821000200000000000000000000000000000000000000000000"
};

// node_modules/.pnpm/viem@2.41.2_bufferutil@4.0.9_typescript@5.9.3_utf-8-validate@5.0.10_zod@4.1.13/node_modules/viem/_esm/experimental/erc7821/actions/supportsExecutionMode.js
var toSerializedMode = {
  default: executionMode.default,
  opData: executionMode.opData,
  batchOfBatches: executionMode.batchOfBatches
};

export {
  toAccount,
  getExecuteError
};
//# sourceMappingURL=chunk-357AXRKQ.js.map
