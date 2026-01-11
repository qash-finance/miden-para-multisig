"use client";
import {
  create,
  createStore,
  useStore
} from "./chunk-O7NLK35K.js";
import {
  ACCOUNT_TYPES,
  BODY_MOTION_VARIANTS,
  BODY_TRANSITION,
  CpslAlert,
  CpslAuthModal,
  CpslButton,
  CpslCodeInput,
  CpslCol,
  CpslDivider,
  CpslIcon,
  CpslIconGroup,
  CpslInput,
  CpslQrCode,
  CpslRow,
  CpslSelect,
  CpslSelectItem,
  CpslSpinner,
  CpslTab,
  CpslTabs,
  CpslText,
  CpslTileButton,
  EMAIL_REGEX,
  HeaderButton,
  HeroSpinner,
  KnownDevices,
  MOBILE_SIZE,
  NETWORKS,
  NETWORK_NOT_SUPPORTED_ERROR,
  NetworkSpeedBanner,
  ON_RAMP_ASSETS,
  ON_RAMP_PROVIDERS,
  PARA_TERMS_AND_CONDITIONS,
  SDK_VERSION,
  SpinnerContainer,
  UserIdentifier,
  WalletTypeIcon,
  WarningBanner,
  defaultCosmosExternalWallet,
  defaultEvmExternalWallet,
  defaultSolanaExternalWallet,
  defineCustomElements,
  emotion_is_prop_valid_esm_exports,
  formatBiometricHints,
  generateTheme,
  getAccountTypeName,
  getAssetCode,
  getAssetIcon,
  getAssetName,
  getAuthDisplay,
  getExternalWalletIcon,
  getNetworkFromChainId,
  getNetworkIcon,
  getNetworkName,
  getNetworkOrMainNetEquivalent,
  init_emotion_is_prop_valid_esm,
  openMobileUrl,
  safeStyled,
  useCopyToClipboard,
  useUserAgent
} from "./chunk-HDIQWJJX.js";
import "./chunk-IKAB4A4D.js";
import "./chunk-EO4ZYWSJ.js";
import "./chunk-3QM4QFEZ.js";
import {
  useMutation,
  useMutationState,
  useQuery,
  useQueryClient
} from "./chunk-MSPEGW6G.js";
import {
  require_jsx_runtime
} from "./chunk-UPMDYLTV.js";
import {
  AccountLinkError,
  AuthMethod,
  AuthMethodStatus,
  COSMOS_WALLETS,
  EVM_WALLETS,
  EXTERNAL_WALLET_TYPES,
  EmailTheme,
  EnabledFlow,
  Environment,
  KeyContainer,
  LINKED_ACCOUNT_TYPES,
  LOCAL_STORAGE_CURRENT_WALLET_IDS,
  LOCAL_STORAGE_WALLETS,
  NON_ED25519,
  Network,
  OAUTH_METHODS,
  OAuthMethod,
  OnRampAsset,
  OnRampMethod,
  OnRampProvider,
  OnRampPurchaseStatus,
  OnRampPurchaseType,
  PARA_CORE_METHODS,
  PARA_INTERNAL_METHODS,
  PARA_PREFIX,
  PREFIX,
  PREGEN_IDENTIFIER_TYPES,
  Para,
  ParaEvent,
  PopupType,
  PregenIdentifierType,
  RecoveryStatus,
  SOLANA_WALLETS,
  ThemeMode,
  TransactionReviewDenied,
  TransactionReviewError,
  TransactionReviewTimeout,
  WALLET_SCHEMES,
  WALLET_TYPES,
  WalletScheme,
  WalletType,
  compressPubkey,
  constructUrl,
  createCredential,
  decimalToHex,
  decryptPrivateKey,
  decryptPrivateKeyAndDecryptShare,
  decryptPrivateKeyWithPassword,
  decryptWithKeyPair,
  decryptWithPrivateKey,
  dispatchEvent,
  displayPhoneNumber,
  distributeNewShare,
  encodePrivateKeyToPemHex,
  encryptPrivateKey,
  encryptPrivateKeyWithPassword,
  encryptWithDerivedPublicKey,
  entityToWallet,
  extractAuthInfo,
  filterProfileBalance,
  formatAssetQuantity,
  formatCurrency,
  formatPhoneNumber,
  generateSignature,
  getAsymmetricKeyPair,
  getBaseMPCNetworkUrl,
  getBaseOAuthUrl,
  getBaseUrl,
  getCosmosAddress,
  getCountries,
  getCountryCallingCode,
  getDerivedPrivateKeyAndDecrypt,
  getNetworkPrefix,
  getOnRampAssets,
  getOnRampNetworks,
  getPortalBaseURL,
  getPortalDomain,
  getPublicKeyFromSignature,
  getPublicKeyHex,
  getSHA256HashHex,
  hashPasswordWithSalt,
  hexStringToBase64,
  hexToDecimal,
  hexToSignature,
  hexToUint8Array,
  initClient,
  isAndroid,
  isEmail,
  isExternalWallet,
  isIOS,
  isIOSWebview,
  isLargeIOS,
  isMobile,
  isMobileSafari,
  isPasskeySupported,
  isPhone,
  isPortal,
  isSafari,
  isSmallIOS,
  isTablet,
  isTelegram,
  isWalletSupported,
  mpcComputationClient_exports,
  offRampSend,
  paraVersion,
  parseCredentialCreationRes,
  parsePhoneNumber,
  publicKeyFromHex,
  rawSecp256k1PubkeyToRawAddress,
  retrieve,
  shortenUrl,
  splitPhoneNumber,
  src_default,
  src_default2,
  toAssetInfoArray,
  truncateAddress,
  truncateEthAddress,
  validateBalancesConfig,
  waitUntilTrue
} from "./chunk-AMXWO4KO.js";
import "./chunk-WAIU3DJR.js";
import "./chunk-U23KTIEM.js";
import "./chunk-G6422SFU.js";
import "./chunk-EIHG224A.js";
import "./chunk-PMFATS67.js";
import "./chunk-M6UVRKN6.js";
import "./chunk-3ZL3LWEU.js";
import "./chunk-Q5OWYOJ4.js";
import {
  require_react
} from "./chunk-NSM7HXF2.js";
import {
  __toCommonJS,
  __toESM
} from "./chunk-QEK2ZTOW.js";

// node_modules/.pnpm/@getpara+react-sdk@2.0.0-alpha.73_2dc03c987641820ecb175cd72cd6c00f/node_modules/@getpara/react-sdk/dist/chunk-MMUBH76A.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/chunk-MMUBH76A.js
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
var __objRest2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/ParaModal.js
var import_jsx_runtime91 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/ModalContent/ModalContent.js
var import_jsx_runtime90 = __toESM(require_jsx_runtime(), 1);
var import_react120 = __toESM(require_react(), 1);

// node_modules/.pnpm/zustand@4.5.7_@types+react@19.2.7_react@19.2.1/node_modules/zustand/esm/middleware.mjs
function createJSONStorage(getStorage, options) {
  let storage;
  try {
    storage = getStorage();
  } catch (_e) {
    return;
  }
  const persistStorage = {
    getItem: (name) => {
      var _a;
      const parse2 = (str2) => {
        if (str2 === null) {
          return null;
        }
        return JSON.parse(str2, options == null ? void 0 : options.reviver);
      };
      const str = (_a = storage.getItem(name)) != null ? _a : null;
      if (str instanceof Promise) {
        return str.then(parse2);
      }
      return parse2(str);
    },
    setItem: (name, newValue) => storage.setItem(
      name,
      JSON.stringify(newValue, options == null ? void 0 : options.replacer)
    ),
    removeItem: (name) => storage.removeItem(name)
  };
  return persistStorage;
}
var toThenable = (fn) => (input) => {
  try {
    const result = fn(input);
    if (result instanceof Promise) {
      return result;
    }
    return {
      then(onFulfilled) {
        return toThenable(onFulfilled)(result);
      },
      catch(_onRejected) {
        return this;
      }
    };
  } catch (e) {
    return {
      then(_onFulfilled) {
        return this;
      },
      catch(onRejected) {
        return toThenable(onRejected)(e);
      }
    };
  }
};
var oldImpl = (config, baseOptions) => (set, get, api) => {
  let options = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (state2) => state2,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage;
  try {
    storage = options.getStorage();
  } catch (_e) {
  }
  if (!storage) {
    return config(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get,
      api
    );
  }
  const thenableSerialize = toThenable(options.serialize);
  const setItem = () => {
    const state2 = options.partialize({ ...get() });
    let errorInSync;
    const thenable = thenableSerialize({ state: state2, version: options.version }).then(
      (serializedValue) => storage.setItem(options.name, serializedValue)
    ).catch((e) => {
      errorInSync = e;
    });
    if (errorInSync) {
      throw errorInSync;
    }
    return thenable;
  };
  const savedSetState = api.setState;
  api.setState = (state2, replace) => {
    savedSetState(state2, replace);
    void setItem();
  };
  const configResult = config(
    (...args) => {
      set(...args);
      void setItem();
    },
    get,
    api
  );
  let stateFromStorage;
  const hydrate = () => {
    var _a;
    if (!storage) return;
    hasHydrated = false;
    hydrationListeners.forEach((cb) => cb(get()));
    const postRehydrationCallback = ((_a = options.onRehydrateStorage) == null ? void 0 : _a.call(options, get())) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((storageValue) => {
      if (storageValue) {
        return options.deserialize(storageValue);
      }
    }).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            return options.migrate(
              deserializedStorageValue.state,
              deserializedStorageValue.version
            );
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return deserializedStorageValue.state;
        }
      }
    }).then((migratedState) => {
      var _a2;
      stateFromStorage = options.merge(
        migratedState,
        (_a2 = get()) != null ? _a2 : configResult
      );
      set(stateFromStorage, true);
      return setItem();
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      hasHydrated = true;
      finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
    }).catch((e) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.getStorage) {
        storage = newOptions.getStorage();
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb);
      return () => {
        hydrationListeners.delete(cb);
      };
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb);
      return () => {
        finishHydrationListeners.delete(cb);
      };
    }
  };
  hydrate();
  return stateFromStorage || configResult;
};
var newImpl = (config, baseOptions) => (set, get, api) => {
  let options = {
    storage: createJSONStorage(() => localStorage),
    partialize: (state2) => state2,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage = options.storage;
  if (!storage) {
    return config(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get,
      api
    );
  }
  const setItem = () => {
    const state2 = options.partialize({ ...get() });
    return storage.setItem(options.name, {
      state: state2,
      version: options.version
    });
  };
  const savedSetState = api.setState;
  api.setState = (state2, replace) => {
    savedSetState(state2, replace);
    void setItem();
  };
  const configResult = config(
    (...args) => {
      set(...args);
      void setItem();
    },
    get,
    api
  );
  api.getInitialState = () => configResult;
  let stateFromStorage;
  const hydrate = () => {
    var _a, _b;
    if (!storage) return;
    hasHydrated = false;
    hydrationListeners.forEach((cb) => {
      var _a2;
      return cb((_a2 = get()) != null ? _a2 : configResult);
    });
    const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get()) != null ? _a : configResult)) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            return [
              true,
              options.migrate(
                deserializedStorageValue.state,
                deserializedStorageValue.version
              )
            ];
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return [false, deserializedStorageValue.state];
        }
      }
      return [false, void 0];
    }).then((migrationResult) => {
      var _a2;
      const [migrated, migratedState] = migrationResult;
      stateFromStorage = options.merge(
        migratedState,
        (_a2 = get()) != null ? _a2 : configResult
      );
      set(stateFromStorage, true);
      if (migrated) {
        return setItem();
      }
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      stateFromStorage = get();
      hasHydrated = true;
      finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
    }).catch((e) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.storage) {
        storage = newOptions.storage;
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb);
      return () => {
        hydrationListeners.delete(cb);
      };
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb);
      return () => {
        finishHydrationListeners.delete(cb);
      };
    }
  };
  if (!options.skipHydration) {
    hydrate();
  }
  return stateFromStorage || configResult;
};
var persistImpl = (config, baseOptions) => {
  if ("getStorage" in baseOptions || "serialize" in baseOptions || "deserialize" in baseOptions) {
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
      );
    }
    return oldImpl(config, baseOptions);
  }
  return newImpl(config, baseOptions);
};
var persist = persistImpl;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/utils/steps.js
var ModalStep = ((ModalStep2) => {
  ModalStep2["AUTH_MAIN"] = "AUTH_MAIN";
  ModalStep2["AUTH_MORE"] = "AUTH_MORE";
  ModalStep2["AUTH_GUEST_SIGNUP"] = "AUTH_GUEST_SIGNUP";
  ModalStep2["AWAITING_GUEST_WALLET_CREATION"] = "AWAITING_GUEST_WALLET_CREATION";
  ModalStep2["EX_WALLET_MORE"] = "EX_WALLET_MORE";
  ModalStep2["EX_WALLET_SELECTED"] = "EX_WALLET_SELECTED";
  ModalStep2["EX_WALLET_NETWORK_SELECT"] = "EX_WALLET_NETWORK_SELECT";
  ModalStep2["VERIFICATIONS"] = "VERIFICATIONS";
  ModalStep2["EXTERNAL_WALLET_VERIFICATION"] = "EXTERNAL_WALLET_VERIFICATION";
  ModalStep2["AWAITING_OAUTH"] = "AWAITING_OAUTH";
  ModalStep2["FARCASTER_OAUTH"] = "FARCASTER_OAUTH";
  ModalStep2["BIOMETRIC_CREATION"] = "BIOMETRIC_CREATION";
  ModalStep2["AWAITING_BIOMETRIC_CREATION"] = "AWAITING_BIOMETRIC_CREATION";
  ModalStep2["PASSWORD_CREATION"] = "PASSWORD_CREATION";
  ModalStep2["AWAITING_PASSWORD_CREATION"] = "AWAITING_PASSWORD_CREATION";
  ModalStep2["AWAITING_WALLET_CREATION"] = "AWAITING_WALLET_CREATION";
  ModalStep2["TELEGRAM_OAUTH"] = "TELEGRAM_OAUTH";
  ModalStep2["WALLET_CREATION_DONE"] = "WALLET_CREATION_DONE";
  ModalStep2["SECRET"] = "SECRET";
  ModalStep2["BIOMETRIC_LOGIN"] = "BIOMETRIC_LOGIN";
  ModalStep2["EMBEDDED_PASSWORD_LOGIN"] = "EMBEDDED_PASSWORD_LOGIN";
  ModalStep2["AWAITING_BIOMETRIC_LOGIN"] = "AWAITING_BIOMETRIC_LOGIN";
  ModalStep2["AWAITING_PASSWORD_LOGIN"] = "AWAITING_PASSWORD_LOGIN";
  ModalStep2["LOGIN_DONE"] = "LOGIN_DONE";
  ModalStep2["SETUP_2FA"] = "SETUP_2FA";
  ModalStep2["VERIFY_2FA"] = "VERIFY_2FA";
  ModalStep2["TWO_FACTOR_DONE"] = "TWO_FACTOR_DONE";
  ModalStep2["ADD_FUNDS_BUY"] = "ADD_FUNDS_BUY";
  ModalStep2["ADD_FUNDS_RECEIVE"] = "ADD_FUNDS_RECEIVE";
  ModalStep2["ADD_FUNDS_WITHDRAW"] = "ADD_FUNDS_WITHDRAW";
  ModalStep2["ADD_FUNDS_AWAITING"] = "ADD_FUNDS_AWAITING";
  ModalStep2["ADD_FUNDS_SUCCESS"] = "ADD_FUNDS_SUCCESS";
  ModalStep2["ADD_FUNDS_FAILURE"] = "ADD_FUNDS_FAILURE";
  ModalStep2["ACCOUNT_MAIN"] = "ACCOUNT_MAIN";
  ModalStep2["CHAIN_SWITCH"] = "CHAIN_SWITCH";
  ModalStep2["ACCOUNT_PROFILE"] = "ACCOUNT_PROFILE";
  ModalStep2["ACCOUNT_PROFILE_ADD"] = "ACCOUNT_PROFILE_ADD";
  ModalStep2["ACCOUNT_PROFILE_LIST"] = "ACCOUNT_PROFILE_LIST";
  ModalStep2["ACCOUNT_PROFILE_REMOVE"] = "ACCOUNT_PROFILE_REMOVE";
  ModalStep2["ACCOUNT_WALLET"] = "ACCOUNT_WALLET";
  ModalStep2["AWAITING_ACCOUNT"] = "AWAITING_ACCOUNT";
  ModalStep2["SWITCH_WALLETS"] = "SWITCH_WALLETS";
  ModalStep2["SWITCH_WALLETS_IFRAME"] = "SWITCH_WALLETS_IFRAME";
  ModalStep2["OTP"] = "OTP";
  ModalStep2["ADD_EX_WALLET_MORE"] = "ADD_EX_WALLET_MORE";
  ModalStep2["ADD_EX_WALLET_SELECTED"] = "ADD_EX_WALLET_SELECTED";
  ModalStep2["ADD_EX_WALLET_NETWORK_SELECT"] = "ADD_EX_WALLET_NETWORK_SELECT";
  ModalStep2["LINK_EX_WALLET_NETWORK_SELECT"] = "LINK_EX_WALLET_NETWORK_SELECT";
  ModalStep2["ACCOUNT_SEND"] = "ACCOUNT_SEND";
  ModalStep2["ACCOUNT_SEND_ASSET"] = "ACCOUNT_SEND_ASSET";
  ModalStep2["ACCOUNT_SEND_NETWORK"] = "ACCOUNT_SEND_NETWORK";
  return ModalStep2;
})(ModalStep || {});
var AccountStep = ((AccountStep2) => {
  AccountStep2["ACCOUNT_MAIN"] = "ACCOUNT_MAIN";
  AccountStep2["AUTH_GUEST_SIGNUP"] = "AUTH_GUEST_SIGNUP";
  AccountStep2["ADD_FUNDS_BUY"] = "ADD_FUNDS_BUY";
  AccountStep2["ADD_FUNDS_RECEIVE"] = "ADD_FUNDS_RECEIVE";
  AccountStep2["ADD_FUNDS_WITHDRAW"] = "ADD_FUNDS_WITHDRAW";
  AccountStep2["ADD_FUNDS_AWAITING"] = "ADD_FUNDS_AWAITING";
  AccountStep2["ADD_FUNDS_SUCCESS"] = "ADD_FUNDS_SUCCESS";
  AccountStep2["ADD_FUNDS_FAILURE"] = "ADD_FUNDS_FAILURE";
  AccountStep2["CHAIN_SWITCH"] = "CHAIN_SWITCH";
  AccountStep2["ACCOUNT_PROFILE"] = "ACCOUNT_PROFILE";
  AccountStep2["ACCOUNT_PROFILE_ADD"] = "ACCOUNT_PROFILE_ADD";
  AccountStep2["ACCOUNT_PROFILE_LIST"] = "ACCOUNT_PROFILE_LIST";
  AccountStep2["ACCOUNT_PROFILE_REMOVE"] = "ACCOUNT_PROFILE_REMOVE";
  AccountStep2["ACCOUNT_WALLET"] = "ACCOUNT_WALLET";
  AccountStep2["SWITCH_WALLETS"] = "SWITCH_WALLETS";
  AccountStep2["SWITCH_WALLETS_IFRAME"] = "SWITCH_WALLETS_IFRAME";
  AccountStep2["EXTERNAL_WALLET_VERIFICATION"] = "EXTERNAL_WALLET_VERIFICATION";
  AccountStep2["ADD_EX_WALLET_MORE"] = "ADD_EX_WALLET_MORE";
  AccountStep2["ADD_EX_WALLET_SELECTED"] = "ADD_EX_WALLET_SELECTED";
  AccountStep2["ADD_EX_WALLET_NETWORK_SELECT"] = "ADD_EX_WALLET_NETWORK_SELECT";
  AccountStep2["LINK_EX_WALLET_NETWORK_SELECT"] = "LINK_EX_WALLET_NETWORK_SELECT";
  AccountStep2["ACCOUNT_SEND"] = "ACCOUNT_SEND";
  AccountStep2["ACCOUNT_SEND_ASSET"] = "ACCOUNT_SEND_ASSET";
  AccountStep2["ACCOUNT_SEND_NETWORK"] = "ACCOUNT_SEND_NETWORK";
  return AccountStep2;
})(AccountStep || {});
var RESET_TO_AUTH_STEPS = [
  "EX_WALLET_SELECTED",
  "EX_WALLET_NETWORK_SELECT",
  "VERIFICATIONS",
  "EXTERNAL_WALLET_VERIFICATION",
  "AWAITING_OAUTH",
  "FARCASTER_OAUTH",
  "TELEGRAM_OAUTH",
  "BIOMETRIC_CREATION",
  "AWAITING_BIOMETRIC_CREATION",
  "PASSWORD_CREATION",
  "AWAITING_PASSWORD_CREATION",
  "AWAITING_ACCOUNT",
  "BIOMETRIC_LOGIN",
  "EMBEDDED_PASSWORD_LOGIN",
  "AWAITING_BIOMETRIC_LOGIN",
  "AWAITING_PASSWORD_LOGIN",
  "AWAITING_WALLET_CREATION",
  "AWAITING_WALLET_CREATION",
  "WALLET_CREATION_DONE",
  "SETUP_2FA",
  "VERIFY_2FA",
  "TWO_FACTOR_DONE",
  "OTP"
  /* OTP */
];
var RESET_TO_ACCOUNT_STEPS = [
  "AUTH_GUEST_SIGNUP",
  "ADD_FUNDS_BUY",
  "ADD_FUNDS_RECEIVE",
  "ADD_FUNDS_WITHDRAW",
  "ADD_FUNDS_AWAITING",
  "ADD_FUNDS_SUCCESS",
  "ADD_FUNDS_FAILURE",
  "CHAIN_SWITCH",
  "ACCOUNT_PROFILE",
  "ACCOUNT_PROFILE_ADD",
  "ACCOUNT_PROFILE_LIST",
  "ACCOUNT_PROFILE_REMOVE",
  "ACCOUNT_SEND",
  "ACCOUNT_SEND_ASSET",
  "ACCOUNT_SEND_NETWORK",
  "ACCOUNT_WALLET",
  "SWITCH_WALLETS",
  "SWITCH_WALLETS_IFRAME",
  "ADD_EX_WALLET_MORE",
  "ADD_EX_WALLET_SELECTED",
  "ADD_EX_WALLET_NETWORK_SELECT",
  "LINK_EX_WALLET_NETWORK_SELECT",
  "EXTERNAL_WALLET_VERIFICATION"
  /* EXTERNAL_WALLET_VERIFICATION */
];
var AccountPreviousStep = {
  [
    "ACCOUNT_MAIN"
    /* ACCOUNT_MAIN */
  ]: void 0,
  [
    "AUTH_GUEST_SIGNUP"
    /* AUTH_GUEST_SIGNUP */
  ]: "ACCOUNT_MAIN",
  [
    "ADD_FUNDS_BUY"
    /* ADD_FUNDS_BUY */
  ]: "ACCOUNT_MAIN",
  [
    "ADD_FUNDS_WITHDRAW"
    /* ADD_FUNDS_WITHDRAW */
  ]: "ACCOUNT_MAIN",
  [
    "ADD_FUNDS_RECEIVE"
    /* ADD_FUNDS_RECEIVE */
  ]: "ACCOUNT_MAIN",
  [
    "ADD_FUNDS_AWAITING"
    /* ADD_FUNDS_AWAITING */
  ]: "ADD_FUNDS_BUY",
  [
    "ADD_FUNDS_SUCCESS"
    /* ADD_FUNDS_SUCCESS */
  ]: "ACCOUNT_MAIN",
  [
    "ADD_FUNDS_FAILURE"
    /* ADD_FUNDS_FAILURE */
  ]: "ACCOUNT_MAIN",
  [
    "CHAIN_SWITCH"
    /* CHAIN_SWITCH */
  ]: "ACCOUNT_MAIN",
  [
    "ACCOUNT_PROFILE"
    /* ACCOUNT_PROFILE */
  ]: "ACCOUNT_MAIN",
  [
    "ACCOUNT_PROFILE_LIST"
    /* ACCOUNT_PROFILE_LIST */
  ]: "ACCOUNT_PROFILE",
  [
    "ACCOUNT_PROFILE_ADD"
    /* ACCOUNT_PROFILE_ADD */
  ]: "ACCOUNT_PROFILE_LIST",
  [
    "ACCOUNT_PROFILE_REMOVE"
    /* ACCOUNT_PROFILE_REMOVE */
  ]: "ACCOUNT_PROFILE",
  [
    "ACCOUNT_WALLET"
    /* ACCOUNT_WALLET */
  ]: "ACCOUNT_PROFILE",
  [
    "SWITCH_WALLETS"
    /* SWITCH_WALLETS */
  ]: "ACCOUNT_PROFILE",
  [
    "SWITCH_WALLETS_IFRAME"
    /* SWITCH_WALLETS_IFRAME */
  ]: "ACCOUNT_PROFILE",
  [
    "EXTERNAL_WALLET_VERIFICATION"
    /* EXTERNAL_WALLET_VERIFICATION */
  ]: "EX_WALLET_SELECTED",
  [
    "ADD_EX_WALLET_MORE"
    /* ADD_EX_WALLET_MORE */
  ]: "ACCOUNT_PROFILE",
  [
    "ADD_EX_WALLET_SELECTED"
    /* ADD_EX_WALLET_SELECTED */
  ]: "ADD_EX_WALLET_MORE",
  [
    "ADD_EX_WALLET_NETWORK_SELECT"
    /* ADD_EX_WALLET_NETWORK_SELECT */
  ]: "ADD_EX_WALLET_MORE",
  [
    "LINK_EX_WALLET_NETWORK_SELECT"
    /* LINK_EX_WALLET_NETWORK_SELECT */
  ]: "ACCOUNT_PROFILE_LIST",
  [
    "ACCOUNT_SEND"
    /* ACCOUNT_SEND */
  ]: "ACCOUNT_MAIN",
  [
    "ACCOUNT_SEND_ASSET"
    /* ACCOUNT_SEND_ASSET */
  ]: "ACCOUNT_SEND",
  [
    "ACCOUNT_SEND_NETWORK"
    /* ACCOUNT_SEND_NETWORK */
  ]: "ACCOUNT_SEND_ASSET"
  /* ACCOUNT_SEND_ASSET */
};
var SignUpModalStep = ((SignUpModalStep2) => {
  SignUpModalStep2["AUTH_MAIN"] = "AUTH_MAIN";
  SignUpModalStep2["AUTH_MORE"] = "AUTH_MORE";
  SignUpModalStep2["EX_WALLET_MORE"] = "EX_WALLET_MORE";
  SignUpModalStep2["EX_WALLET_SELECTED"] = "EX_WALLET_SELECTED";
  SignUpModalStep2["EX_WALLET_NETWORK_SELECT"] = "EX_WALLET_NETWORK_SELECT";
  SignUpModalStep2["VERIFICATIONS"] = "VERIFICATIONS";
  SignUpModalStep2["EXTERNAL_WALLET_VERIFICATION"] = "EXTERNAL_WALLET_VERIFICATION";
  SignUpModalStep2["AWAITING_OAUTH"] = "AWAITING_OAUTH";
  SignUpModalStep2["FARCASTER_OAUTH"] = "FARCASTER_OAUTH";
  SignUpModalStep2["TELEGRAM_OAUTH"] = "TELEGRAM_OAUTH";
  SignUpModalStep2["BIOMETRIC_CREATION"] = "BIOMETRIC_CREATION";
  SignUpModalStep2["AWAITING_BIOMETRIC_CREATION"] = "AWAITING_BIOMETRIC_CREATION";
  SignUpModalStep2["PASSWORD_CREATION"] = "PASSWORD_CREATION";
  SignUpModalStep2["AWAITING_PASSWORD_CREATION"] = "AWAITING_PASSWORD_CREATION";
  SignUpModalStep2["AWAITING_WALLET_CREATION"] = "AWAITING_WALLET_CREATION";
  SignUpModalStep2["WALLET_CREATION_DONE"] = "WALLET_CREATION_DONE";
  SignUpModalStep2["SECRET"] = "SECRET";
  SignUpModalStep2["SETUP_2FA"] = "SETUP_2FA";
  SignUpModalStep2["VERIFY_2FA"] = "VERIFY_2FA";
  SignUpModalStep2["TWO_FACTOR_DONE"] = "TWO_FACTOR_DONE";
  SignUpModalStep2["ADD_FUNDS_BUY"] = "ADD_FUNDS_BUY";
  SignUpModalStep2["ADD_FUNDS_RECEIVE"] = "ADD_FUNDS_RECEIVE";
  SignUpModalStep2["ADD_FUNDS_WITHDRAW"] = "ADD_FUNDS_WITHDRAW";
  SignUpModalStep2["ADD_FUNDS_AWAITING"] = "ADD_FUNDS_AWAITING";
  SignUpModalStep2["ADD_FUNDS_SUCCESS"] = "ADD_FUNDS_SUCCESS";
  SignUpModalStep2["ADD_FUNDS_FAILURE"] = "ADD_FUNDS_FAILURE";
  SignUpModalStep2["AWAITING_ACCOUNT"] = "AWAITING_ACCOUNT";
  SignUpModalStep2["OTP"] = "OTP";
  return SignUpModalStep2;
})(SignUpModalStep || {});
var SignUpPreviousStep = {
  [
    "AUTH_MAIN"
    /* AUTH_MAIN */
  ]: void 0,
  [
    "AUTH_MORE"
    /* AUTH_MORE */
  ]: "AUTH_MAIN",
  [
    "EX_WALLET_MORE"
    /* EX_WALLET_MORE */
  ]: "AUTH_MAIN",
  [
    "EX_WALLET_SELECTED"
    /* EX_WALLET_SELECTED */
  ]: "AUTH_MAIN",
  [
    "EX_WALLET_NETWORK_SELECT"
    /* EX_WALLET_NETWORK_SELECT */
  ]: "AUTH_MAIN",
  [
    "VERIFICATIONS"
    /* VERIFICATIONS */
  ]: "AUTH_MAIN",
  [
    "EXTERNAL_WALLET_VERIFICATION"
    /* EXTERNAL_WALLET_VERIFICATION */
  ]: "AUTH_MAIN",
  [
    "AWAITING_OAUTH"
    /* AWAITING_OAUTH */
  ]: "AUTH_MAIN",
  [
    "TELEGRAM_OAUTH"
    /* TELEGRAM_OAUTH */
  ]: "AUTH_MAIN",
  [
    "FARCASTER_OAUTH"
    /* FARCASTER_OAUTH */
  ]: "AUTH_MAIN",
  [
    "BIOMETRIC_CREATION"
    /* BIOMETRIC_CREATION */
  ]: "AUTH_MAIN",
  [
    "AWAITING_BIOMETRIC_CREATION"
    /* AWAITING_BIOMETRIC_CREATION */
  ]: "BIOMETRIC_CREATION",
  [
    "PASSWORD_CREATION"
    /* PASSWORD_CREATION */
  ]: "BIOMETRIC_CREATION",
  [
    "AWAITING_PASSWORD_CREATION"
    /* AWAITING_PASSWORD_CREATION */
  ]: "BIOMETRIC_CREATION",
  [
    "AWAITING_WALLET_CREATION"
    /* AWAITING_WALLET_CREATION */
  ]: void 0,
  [
    "WALLET_CREATION_DONE"
    /* WALLET_CREATION_DONE */
  ]: void 0,
  [
    "SECRET"
    /* SECRET */
  ]: void 0,
  [
    "SETUP_2FA"
    /* SETUP_2FA */
  ]: "SECRET",
  [
    "VERIFY_2FA"
    /* VERIFY_2FA */
  ]: "SETUP_2FA",
  [
    "TWO_FACTOR_DONE"
    /* TWO_FACTOR_DONE */
  ]: void 0,
  [
    "ADD_FUNDS_BUY"
    /* ADD_FUNDS_BUY */
  ]: "WALLET_CREATION_DONE",
  [
    "ADD_FUNDS_RECEIVE"
    /* ADD_FUNDS_RECEIVE */
  ]: "WALLET_CREATION_DONE",
  [
    "ADD_FUNDS_WITHDRAW"
    /* ADD_FUNDS_WITHDRAW */
  ]: "WALLET_CREATION_DONE",
  [
    "ADD_FUNDS_AWAITING"
    /* ADD_FUNDS_AWAITING */
  ]: "ADD_FUNDS_BUY",
  [
    "ADD_FUNDS_SUCCESS"
    /* ADD_FUNDS_SUCCESS */
  ]: void 0,
  [
    "ADD_FUNDS_FAILURE"
    /* ADD_FUNDS_FAILURE */
  ]: void 0,
  [
    "AWAITING_ACCOUNT"
    /* AWAITING_ACCOUNT */
  ]: "AUTH_MAIN",
  [
    "OTP"
    /* OTP */
  ]: "AUTH_MAIN"
  /* AUTH_MAIN */
};
var GuestPreviousStep = Object.fromEntries([
  ...Object.entries(SignUpPreviousStep).map(([key, value]) => {
    if (value === "AUTH_MAIN") {
      return [
        key,
        "AUTH_GUEST_SIGNUP"
        /* AUTH_GUEST_SIGNUP */
      ];
    }
    return [key, value];
  }),
  ...Object.entries(AccountPreviousStep)
]);
var LoginModalStep = ((LoginModalStep2) => {
  LoginModalStep2["AUTH_MAIN"] = "AUTH_MAIN";
  LoginModalStep2["AUTH_MORE"] = "AUTH_MORE";
  LoginModalStep2["EX_WALLET_MORE"] = "EX_WALLET_MORE";
  LoginModalStep2["EX_WALLET_SELECTED"] = "EX_WALLET_SELECTED";
  LoginModalStep2["EX_WALLET_NETWORK_SELECT"] = "EX_WALLET_NETWORK_SELECT";
  LoginModalStep2["AWAITING_OAUTH"] = "AWAITING_OAUTH";
  LoginModalStep2["FARCASTER_OAUTH"] = "FARCASTER_OAUTH";
  LoginModalStep2["TELEGRAM_OAUTH"] = "TELEGRAM_OAUTH";
  LoginModalStep2["BIOMETRIC_LOGIN"] = "BIOMETRIC_LOGIN";
  LoginModalStep2["EMBEDDED_PASSWORD_LOGIN"] = "EMBEDDED_PASSWORD_LOGIN";
  LoginModalStep2["AWAITING_BIOMETRIC_LOGIN"] = "AWAITING_BIOMETRIC_LOGIN";
  LoginModalStep2["AWAITING_PASSWORD_LOGIN"] = "AWAITING_PASSWORD_LOGIN";
  LoginModalStep2["AWAITING_WALLET_CREATION"] = "AWAITING_WALLET_CREATION";
  LoginModalStep2["WALLET_CREATION_DONE"] = "WALLET_CREATION_DONE";
  LoginModalStep2["SECRET"] = "SECRET";
  LoginModalStep2["SETUP_2FA"] = "SETUP_2FA";
  LoginModalStep2["VERIFY_2FA"] = "VERIFY_2FA";
  LoginModalStep2["TWO_FACTOR_DONE"] = "TWO_FACTOR_DONE";
  LoginModalStep2["LOGIN_DONE"] = "LOGIN_DONE";
  LoginModalStep2["ADD_FUNDS_BUY"] = "ADD_FUNDS_BUY";
  LoginModalStep2["ADD_FUNDS_RECEIVE"] = "ADD_FUNDS_RECEIVE";
  LoginModalStep2["ADD_FUNDS_WITHDRAW"] = "ADD_FUNDS_WITHDRAW";
  LoginModalStep2["ADD_FUNDS_AWAITING"] = "ADD_FUNDS_AWAITING";
  LoginModalStep2["ADD_FUNDS_SUCCESS"] = "ADD_FUNDS_SUCCESS";
  LoginModalStep2["ADD_FUNDS_FAILURE"] = "ADD_FUNDS_FAILURE";
  LoginModalStep2["AWAITING_ACCOUNT"] = "AWAITING_ACCOUNT";
  LoginModalStep2["OTP"] = "OTP";
  return LoginModalStep2;
})(LoginModalStep || {});
var LoginPreviousStep = {
  [
    "AUTH_MAIN"
    /* AUTH_MAIN */
  ]: void 0,
  [
    "AUTH_MORE"
    /* AUTH_MORE */
  ]: "AUTH_MAIN",
  [
    "EX_WALLET_MORE"
    /* EX_WALLET_MORE */
  ]: "AUTH_MAIN",
  [
    "EX_WALLET_SELECTED"
    /* EX_WALLET_SELECTED */
  ]: "AUTH_MAIN",
  [
    "EX_WALLET_NETWORK_SELECT"
    /* EX_WALLET_NETWORK_SELECT */
  ]: "AUTH_MAIN",
  [
    "TELEGRAM_OAUTH"
    /* TELEGRAM_OAUTH */
  ]: "AUTH_MAIN",
  [
    "AWAITING_OAUTH"
    /* AWAITING_OAUTH */
  ]: "AUTH_MAIN",
  [
    "FARCASTER_OAUTH"
    /* FARCASTER_OAUTH */
  ]: "AUTH_MAIN",
  [
    "BIOMETRIC_LOGIN"
    /* BIOMETRIC_LOGIN */
  ]: "AUTH_MAIN",
  [
    "EMBEDDED_PASSWORD_LOGIN"
    /* EMBEDDED_PASSWORD_LOGIN */
  ]: "AUTH_MAIN",
  [
    "AWAITING_BIOMETRIC_LOGIN"
    /* AWAITING_BIOMETRIC_LOGIN */
  ]: "BIOMETRIC_LOGIN",
  [
    "AWAITING_PASSWORD_LOGIN"
    /* AWAITING_PASSWORD_LOGIN */
  ]: "BIOMETRIC_LOGIN",
  [
    "AWAITING_WALLET_CREATION"
    /* AWAITING_WALLET_CREATION */
  ]: void 0,
  [
    "WALLET_CREATION_DONE"
    /* WALLET_CREATION_DONE */
  ]: void 0,
  [
    "SECRET"
    /* SECRET */
  ]: void 0,
  [
    "SETUP_2FA"
    /* SETUP_2FA */
  ]: void 0,
  [
    "VERIFY_2FA"
    /* VERIFY_2FA */
  ]: "SETUP_2FA",
  [
    "TWO_FACTOR_DONE"
    /* TWO_FACTOR_DONE */
  ]: void 0,
  [
    "LOGIN_DONE"
    /* LOGIN_DONE */
  ]: void 0,
  [
    "ADD_FUNDS_BUY"
    /* ADD_FUNDS_BUY */
  ]: "LOGIN_DONE",
  [
    "ADD_FUNDS_RECEIVE"
    /* ADD_FUNDS_RECEIVE */
  ]: "LOGIN_DONE",
  [
    "ADD_FUNDS_WITHDRAW"
    /* ADD_FUNDS_WITHDRAW */
  ]: "LOGIN_DONE",
  [
    "ADD_FUNDS_AWAITING"
    /* ADD_FUNDS_AWAITING */
  ]: "ADD_FUNDS_BUY",
  [
    "ADD_FUNDS_SUCCESS"
    /* ADD_FUNDS_SUCCESS */
  ]: void 0,
  [
    "ADD_FUNDS_FAILURE"
    /* ADD_FUNDS_FAILURE */
  ]: void 0,
  [
    "AWAITING_ACCOUNT"
    /* AWAITING_ACCOUNT */
  ]: "AUTH_MAIN",
  [
    "OTP"
    /* OTP */
  ]: "AUTH_MAIN"
  /* AUTH_MAIN */
};
function getAddFundsStep(currentTab) {
  switch (currentTab) {
    case "BUY":
      return "ADD_FUNDS_BUY";
    case "RECEIVE":
      return "ADD_FUNDS_RECEIVE";
    case "WITHDRAW":
    default:
      return "ADD_FUNDS_WITHDRAW";
  }
}
var IFrameSteps = [
  "PASSWORD_CREATION",
  "EMBEDDED_PASSWORD_LOGIN",
  "OTP",
  "SWITCH_WALLETS_IFRAME"
  /* SWITCH_WALLETS_IFRAME */
];

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/stores/modal/actions.js
function getPreviousStep(flow, step) {
  return flow === "account" ? AccountPreviousStep[step] : flow === "login" ? LoginPreviousStep[step] : flow === "guest" ? GuestPreviousStep[step] : SignUpPreviousStep[step];
}
var getActions = (set, get) => ({
  resetState: () => set(DEFAULT_MODAL_STATE),
  setOnModalStepChange: (onModalStepChange) => set({ onModalStepChange }),
  setRecoveryShare: (recoveryShare) => set({ recoveryShare }),
  setStep: (step) => {
    const onModalStepChange = get().onModalStepChange;
    const previousStep = get().step;
    const refs = get().refs;
    set({ step });
    refs.currentStep.current = step;
    onModalStepChange == null ? void 0 : onModalStepChange({ previousStep, currentStep: step, canGoBack: get().hasPreviousStep() });
    if (step === ModalStep.ACCOUNT_MAIN) {
      refs.wasSignedIn.current = true;
    }
  },
  decrementStep: () => {
    var _a;
    const currentStep = get().step;
    const onRampStep = get().onRampStep;
    const flow = get().flow;
    if ([ModalStep.ADD_FUNDS_BUY, ModalStep.ADD_FUNDS_WITHDRAW].includes(currentStep) && onRampStep > 0) {
      set({ onRampStep: onRampStep - 1 });
      return;
    }
    const onModalStepChange = get().onModalStepChange;
    const accountLinkOptions = get().accountLinkOptions || [];
    const signupState = get().getSignupState();
    const iFrameUrl = get().iFrameUrl;
    const refs = get().refs;
    let prevStep = getPreviousStep(flow, currentStep);
    if (currentStep === ModalStep.ACCOUNT_PROFILE_ADD && accountLinkOptions.length < 2) {
      prevStep = ModalStep.ACCOUNT_PROFILE;
    }
    if (currentStep === ModalStep.PASSWORD_CREATION && iFrameUrl && !(signupState == null ? void 0 : signupState.passkeyUrl)) {
      prevStep = ModalStep.AUTH_MAIN;
    }
    if (currentStep === ModalStep.EX_WALLET_SELECTED) {
      set({ selectedExternalWallet: void 0, isExternalWalletConnecting: false, externalWalletError: void 0 });
    }
    if (prevStep) {
      set(__spreadValues2({
        authStepRoute: void 0,
        step: prevStep,
        stepDirection: -1
      }, prevStep === ModalStep.AUTH_MAIN && { flow: void 0 }));
      refs.currentStep.current = prevStep;
      onModalStepChange == null ? void 0 : onModalStepChange({ previousStep: currentStep, currentStep: prevStep, canGoBack: get().hasPreviousStep() });
    }
    (_a = refs.popupWindow.current) == null ? void 0 : _a.close();
    refs.popupWindow.current = null;
  },
  hasPreviousStep: () => {
    const flow = get().flow;
    const currentStep = get().step;
    const onRampStep = get().onRampStep;
    if ([ModalStep.ADD_FUNDS_BUY, ModalStep.ADD_FUNDS_WITHDRAW].includes(currentStep) && onRampStep > 0) {
      return true;
    }
    return !!getPreviousStep(flow, currentStep);
  },
  setFlow: (flow) => {
    set({ flow });
  },
  isLogin: () => get().flow === "login",
  isAccount: () => get().flow === "account",
  setAuthState: (authState) => {
    let flow = get().flow, newFlow;
    switch (authState == null ? void 0 : authState.stage) {
      case "login":
        newFlow = "login";
        break;
      case "signup":
      case "verify":
        newFlow = flow === "guest" ? "guest" : "signup";
        break;
      default:
        break;
    }
    set(__spreadValues2({ authState }, newFlow ? { flow: newFlow } : {}));
  },
  getVerifyState: () => {
    const authState = get().authState;
    return (authState == null ? void 0 : authState.stage) === "verify" ? authState : void 0;
  },
  getLoginState: () => {
    const authState = get().authState;
    return (authState == null ? void 0 : authState.stage) === "login" ? authState : void 0;
  },
  getSignupState: () => {
    const authState = get().authState;
    return (authState == null ? void 0 : authState.stage) === "signup" ? authState : void 0;
  },
  setOnRampPurchase: (onRampPurchase) => set((state2) => ({ onRampPurchase: __spreadValues2(__spreadValues2({}, state2.onRampPurchase || {}), onRampPurchase) })),
  setOnRampConfig: (onRampConfig) => set({ onRampConfig }),
  setOnRampStep: (onRampStep) => set({ onRampStep }),
  setIsFullyLoggedIn: (isFullyLoggedIn) => set({ isFullyLoggedIn }),
  setAccountAddFundTab: (accountAddFundTab) => set({ accountAddFundTab }),
  setGuestAddFundsTab: (guestAddFundsTab) => set({ guestAddFundsTab }),
  setSelectedExternalWallet: (selectedExternalWallet) => set({ selectedExternalWallet }),
  setIsExternalWalletConnecting: (isExternalWalletConnecting) => set({ isExternalWalletConnecting }),
  setExternalWalletError: (externalWalletError) => set({ externalWalletError }),
  setModalError: (modalError) => set({ modalError }),
  setIsUsingMobileConnector: (isUsingMobileConnector) => set({ isUsingMobileConnector }),
  setStepDirection: (stepDirection) => set({ stepDirection }),
  setFarcasterConnectUri: (farcasterConnectUri) => set({ farcasterConnectUri }),
  setTwoFactorStatus: (twoFactorStatus) => set({ twoFactorStatus }),
  setIFrameUrl: (iFrameUrl) => set({ iFrameUrl }),
  setIsIFrameReady: (isIFrameReady) => set({ isIFrameReady }),
  setAuthLayout: (authLayout) => {
    const types = [];
    const uniqueLayouts = [];
    authLayout.map((layout2) => {
      const type = layout2.split(":")[0];
      if (!types.includes(type)) {
        uniqueLayouts.push(layout2);
        types.push(type);
      } else {
        console.warn(`${layout2} is a duplicate ${type} layout type. Please remove the duplicate type from your config.`);
      }
    });
    set({ authLayout: uniqueLayouts });
  },
  setAuthStepRoute: (authStepRoute) => set({ authStepRoute }),
  setIsPasskeySupported: (isPasskeySupported2) => set({ isPasskeySupported: isPasskeySupported2 }),
  setAccountLinkOptions: (accountLinkOptions) => set({ accountLinkOptions }),
  setProfileWallet: (profileWallet) => set({ profileWallet }),
  setSendTx: (sendTx) => set({ sendTx })
});

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/types/modalProps.js
var AuthLayout = ((AuthLayout2) => {
  AuthLayout2["AUTH_FULL"] = "AUTH:FULL";
  AuthLayout2["AUTH_CONDENSED"] = "AUTH:CONDENSED";
  AuthLayout2["EXTERNAL_FULL"] = "EXTERNAL:FULL";
  AuthLayout2["EXTERNAL_CONDENSED"] = "EXTERNAL:CONDENSED";
  return AuthLayout2;
})(AuthLayout || {});

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/stores/modal/useModalStore.js
var import_react = __toESM(require_react(), 1);
var OnRampStep = ((OnRampStep2) => {
  OnRampStep2[OnRampStep2["SETTINGS"] = 0] = "SETTINGS";
  OnRampStep2[OnRampStep2["PROVIDER"] = 1] = "PROVIDER";
  return OnRampStep2;
})(OnRampStep || {});
var DEFAULT_MODAL_STATE = {
  recoveryShare: null,
  flow: void 0,
  stepDirection: 1,
  authState: void 0,
  onModalStepChange: void 0,
  onRampPurchase: void 0,
  onRampStep: 0,
  isFullyLoggedIn: false,
  accountAddFundTab: void 0,
  guestAddFundsTab: void 0,
  isExternalWalletConnecting: false,
  externalWalletError: void 0,
  modalError: void 0,
  activeWallet: [void 0, void 0],
  farcasterConnectUri: void 0,
  twoFactorStatus: void 0,
  iFrameUrl: void 0,
  isIFrameReady: void 0,
  authLayout: [AuthLayout.AUTH_FULL, AuthLayout.EXTERNAL_FULL],
  authStepRoute: void 0,
  refs: {
    popupWindow: (0, import_react.createRef)(),
    poll: (0, import_react.createRef)(),
    currentStep: (0, import_react.createRef)(),
    telegramIFrame: (0, import_react.createRef)(),
    wasSignedIn: (0, import_react.createRef)(),
    initialFarcasterConnected: (0, import_react.createRef)(),
    iFrame: (0, import_react.createRef)()
  },
  isPasskeySupported: true,
  accountLinkOptions: [...LINKED_ACCOUNT_TYPES],
  profileWallet: void 0,
  sendTx: void 0
};
var useModalStore = create()(
  persist(
    (set, get) => __spreadValues2(__spreadValues2({
      step: ModalStep.AUTH_MAIN,
      onRampConfig: void 0
    }, DEFAULT_MODAL_STATE), getActions(set, get)),
    {
      version: 1,
      name: `${PARA_PREFIX}modalState`,
      storage: createJSONStorage(() => localStorage),
      partialize: (state2) => ({
        step: state2.step,
        authState: state2.authState,
        onRampPurchase: state2.onRampPurchase,
        selectedExternalWallet: state2.selectedExternalWallet,
        isUsingMobileConnector: state2.isUsingMobileConnector,
        isPasskeySupported: state2.isPasskeySupported
      })
    }
  )
);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Body/Body.js
var import_jsx_runtime89 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/VerificationCodeStep/VerificationCodeStep.js
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
var import_react73 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/common.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/stores/slices/client.js
var createClientSlice = (set) => ({
  client: void 0,
  setClient: (client) => set({ client })
});

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/stores/slices/modal.js
var import_react2 = __toESM(require_react(), 1);
var createModalSlice = (set) => ({
  modalConfig: void 0,
  setModalConfig: (modalConfig) => {
    var _a, _b, _c;
    return set({
      modalConfig,
      isDarkTheme: ((_a = modalConfig == null ? void 0 : modalConfig.theme) == null ? void 0 : _a.mode) === "dark",
      oAuthLogoVariant: (_c = (_b = modalConfig == null ? void 0 : modalConfig.theme) == null ? void 0 : _b.oAuthLogoVariant) != null ? _c : "default"
    });
  },
  isDarkTheme: false,
  oAuthLogoVariant: "default",
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  refs: {
    openedToStep: (0, import_react2.createRef)(),
    balancesInvalidationTime: (0, import_react2.createRef)()
  }
});

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/stores/slices/wallet.js
var createWalletSlice = (set) => ({
  rpcUrl: void 0,
  setRpcUrl: (rpcUrl) => set({ rpcUrl }),
  selectedWalletId: void 0,
  selectedWalletType: void 0,
  setSelectedWallet: (selectedWalletId, selectedWalletType) => set({ selectedWalletId, selectedWalletType }),
  clearSelectedWallet: () => set({ selectedWalletId: void 0, selectedWalletType: void 0 })
});

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/external/stubs/EvmExternalWalletContextStub.js
var import_react3 = __toESM(require_react(), 1);
var EvmExternalWalletContext = (0, import_react3.createContext)(
  defaultEvmExternalWallet
);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/external/stubs/CosmosExternalWalletContextStub.js
var import_react4 = __toESM(require_react(), 1);
var CosmosExternalWalletContext = (0, import_react4.createContext)(
  defaultCosmosExternalWallet
);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/external/stubs/SolanaExternalWalletContextStub.js
var import_react5 = __toESM(require_react(), 1);
var SolanaExternalWalletContext = (0, import_react5.createContext)(
  defaultSolanaExternalWallet
);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/stores/slices/externalWallets.js
var import_react6 = __toESM(require_react(), 1);
var createExternalWalletsSlice = (set) => ({
  externalWallets: [],
  setExternalWallets: (externalWallets) => set({ externalWallets }),
  externalWalletsWithFullAuth: [],
  setExternalWalletsWithFullAuth: (externalWalletsWithFullAuth) => set({ externalWalletsWithFullAuth }),
  includeWalletVerification: false,
  setIncludeWalletVerification: (includeWalletVerification) => set({ includeWalletVerification }),
  connectionOnly: false,
  setConnectionOnly: (connectionOnly) => set({ connectionOnly }),
  evmContext: EvmExternalWalletContext,
  setEvmContext: (evmContext) => set({ evmContext }),
  evmLib: void 0,
  setEvmLib: (evmLib) => set({ evmLib }),
  EvmProvider: void 0,
  setEvmProvider: (EvmProvider) => set({ EvmProvider }),
  evmWallets: [],
  setEvmWallets: (evmWallets) => set({ evmWallets }),
  isLoadingEvmLib: true,
  setIsLoadingEvmLib: (isLoadingEvmLib) => set({ isLoadingEvmLib }),
  cosmosContext: CosmosExternalWalletContext,
  setCosmosContext: (cosmosContext) => set({ cosmosContext }),
  CosmosProvider: void 0,
  setCosmosProvider: (CosmosProvider) => set({ CosmosProvider }),
  cosmosWallets: [],
  setCosmosWallets: (cosmosWallets) => set({ cosmosWallets }),
  isLoadingCosmosLib: true,
  setIsLoadingCosmosLib: (isLoadingCosmosLib) => set({ isLoadingCosmosLib }),
  solanaContext: SolanaExternalWalletContext,
  setSolanaContext: (solanaContext) => set({ solanaContext }),
  SolanaProvider: void 0,
  setSolanaProvider: (SolanaProvider) => set({ SolanaProvider }),
  solanaWallets: [],
  setSolanaWallets: (solanaWallets) => set({ solanaWallets }),
  isLoadingSolanaLib: true,
  setIsLoadingSolanaLib: (isLoadingSolanaLib) => set({ isLoadingSolanaLib }),
  onLoginRef: (0, import_react6.createRef)()
});

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/stores/slices/analytics.js
var createAnalyticsSlice = (set) => ({
  providerProps: {},
  setProviderProps: (providerProps) => set({ providerProps })
});

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/stores/slices/config.js
var createConfigSlice = (set) => ({
  appName: "",
  setAppName: (appName) => set({ appName }),
  farcasterMiniAppConfig: void 0,
  setFarcasterMiniAppConfig: (farcasterMiniAppConfig) => set({ farcasterMiniAppConfig })
});

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/stores/useStore.js
var vanillaStore = createStore()(
  persist(
    (...a) => __spreadValues2(__spreadValues2(__spreadValues2(__spreadValues2(__spreadValues2(__spreadValues2({}, createClientSlice(...a)), createModalSlice(...a)), createWalletSlice(...a)), createExternalWalletsSlice(...a)), createConfigSlice(...a)), createAnalyticsSlice(...a)),
    {
      version: 1,
      name: `${PARA_PREFIX}provider-state`,
      storage: createJSONStorage(() => localStorage),
      partialize: (state2) => ({
        selectedWalletId: state2.selectedWalletId,
        selectedWalletType: state2.selectedWalletType
      })
    }
  )
);
var createBoundedUseStore = (store) => (selector) => useStore(store, selector);
var useStore2 = createBoundedUseStore(vanillaStore);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/common.js
var import_react56 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/SearchableButtonList.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var import_react54 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var import_react16 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var import_react7 = __toESM(require_react(), 1);
var LayoutGroupContext = (0, import_react7.createContext)({});

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/use-constant.mjs
var import_react8 = __toESM(require_react(), 1);
function useConstant(init) {
  const ref = (0, import_react8.useRef)(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var React2 = __toESM(require_react(), 1);
var import_react12 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var import_react9 = __toESM(require_react(), 1);
var PresenceContext = (0, import_react9.createContext)(null);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var React = __toESM(require_react(), 1);
var import_react11 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var import_react10 = __toESM(require_react(), 1);
var MotionConfigContext = (0, import_react10.createContext)({
  transformPagePoint: (p) => p,
  isStatic: false,
  reducedMotion: "never"
});

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var PopChildMeasure = class extends React.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (element && prevProps.isPresent && !this.props.isPresent) {
      const size = this.props.sizeRef.current;
      size.height = element.offsetHeight || 0;
      size.width = element.offsetWidth || 0;
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
};
function PopChild({ children, isPresent: isPresent2 }) {
  const id3 = (0, import_react11.useId)();
  const ref = (0, import_react11.useRef)(null);
  const size = (0, import_react11.useRef)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  const { nonce } = (0, import_react11.useContext)(MotionConfigContext);
  (0, import_react11.useInsertionEffect)(() => {
    const { width, height, top, left } = size.current;
    if (isPresent2 || !ref.current || !width || !height)
      return;
    ref.current.dataset.motionPopId = id3;
    const style = document.createElement("style");
    if (nonce)
      style.nonce = nonce;
    document.head.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id3}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
    }
    return () => {
      document.head.removeChild(style);
    };
  }, [isPresent2]);
  return (0, import_jsx_runtime.jsx)(PopChildMeasure, { isPresent: isPresent2, childRef: ref, sizeRef: size, children: React.cloneElement(children, { ref }) });
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var PresenceChild = ({ children, initial, isPresent: isPresent2, onExitComplete, custom, presenceAffectsLayout, mode }) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id3 = (0, import_react12.useId)();
  const memoizedOnExitComplete = (0, import_react12.useCallback)((childId) => {
    presenceChildren.set(childId, true);
    for (const isComplete of presenceChildren.values()) {
      if (!isComplete)
        return;
    }
    onExitComplete && onExitComplete();
  }, [presenceChildren, onExitComplete]);
  const context = (0, import_react12.useMemo)(
    () => ({
      id: id3,
      initial,
      isPresent: isPresent2,
      custom,
      onExitComplete: memoizedOnExitComplete,
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? [Math.random(), memoizedOnExitComplete] : [isPresent2, memoizedOnExitComplete]
  );
  (0, import_react12.useMemo)(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent2]);
  React2.useEffect(() => {
    !isPresent2 && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent2]);
  if (mode === "popLayout") {
    children = (0, import_jsx_runtime2.jsx)(PopChild, { isPresent: isPresent2, children });
  }
  return (0, import_jsx_runtime2.jsx)(PresenceContext.Provider, { value: context, children });
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
var import_react13 = __toESM(require_react(), 1);
function usePresence(subscribe = true) {
  const context = (0, import_react13.useContext)(PresenceContext);
  if (context === null)
    return [true, null];
  const { isPresent: isPresent2, onExitComplete, register } = context;
  const id3 = (0, import_react13.useId)();
  (0, import_react13.useEffect)(() => {
    if (subscribe)
      register(id3);
  }, [subscribe]);
  const safeToRemove = (0, import_react13.useCallback)(() => subscribe && onExitComplete && onExitComplete(id3), [id3, onExitComplete, subscribe]);
  return !isPresent2 && onExitComplete ? [false, safeToRemove] : [true];
}
function useIsPresent() {
  return isPresent((0, import_react13.useContext)(PresenceContext));
}
function isPresent(context) {
  return context === null ? true : context.isPresent;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var import_react14 = __toESM(require_react(), 1);
var getChildKey = (child) => child.key || "";
function onlyElements(children) {
  const filtered = [];
  import_react14.Children.forEach(children, (child) => {
    if ((0, import_react14.isValidElement)(child))
      filtered.push(child);
  });
  return filtered;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var import_react15 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/is-browser.mjs
var isBrowser = typeof window !== "undefined";

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var useIsomorphicLayoutEffect = isBrowser ? import_react15.useLayoutEffect : import_react15.useEffect;

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false }) => {
  const [isParentPresent, safeToRemove] = usePresence(propagate);
  const presentChildren = (0, import_react16.useMemo)(() => onlyElements(children), [children]);
  const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
  const isInitialRender = (0, import_react16.useRef)(true);
  const pendingPresentChildren = (0, import_react16.useRef)(presentChildren);
  const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
  const [diffedChildren, setDiffedChildren] = (0, import_react16.useState)(presentChildren);
  const [renderedChildren, setRenderedChildren] = (0, import_react16.useState)(presentChildren);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    pendingPresentChildren.current = presentChildren;
    for (let i = 0; i < renderedChildren.length; i++) {
      const key = getChildKey(renderedChildren[i]);
      if (!presentKeys.includes(key)) {
        if (exitComplete.get(key) !== true) {
          exitComplete.set(key, false);
        }
      } else {
        exitComplete.delete(key);
      }
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
  const exitingChildren = [];
  if (presentChildren !== diffedChildren) {
    let nextChildren = [...presentChildren];
    for (let i = 0; i < renderedChildren.length; i++) {
      const child = renderedChildren[i];
      const key = getChildKey(child);
      if (!presentKeys.includes(key)) {
        nextChildren.splice(i, 0, child);
        exitingChildren.push(child);
      }
    }
    if (mode === "wait" && exitingChildren.length) {
      nextChildren = exitingChildren;
    }
    setRenderedChildren(onlyElements(nextChildren));
    setDiffedChildren(presentChildren);
    return;
  }
  if (mode === "wait" && renderedChildren.length > 1) {
    console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  }
  const { forceRender } = (0, import_react16.useContext)(LayoutGroupContext);
  return (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: renderedChildren.map((child) => {
    const key = getChildKey(child);
    const isPresent2 = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
    const onExit = () => {
      if (exitComplete.has(key)) {
        exitComplete.set(key, true);
      } else {
        return;
      }
      let isEveryExitComplete = true;
      exitComplete.forEach((isExitComplete) => {
        if (!isExitComplete)
          isEveryExitComplete = false;
      });
      if (isEveryExitComplete) {
        forceRender === null || forceRender === void 0 ? void 0 : forceRender();
        setRenderedChildren(pendingPresentChildren.current);
        propagate && (safeToRemove === null || safeToRemove === void 0 ? void 0 : safeToRemove());
        onExitComplete && onExitComplete();
      }
    };
    return (0, import_jsx_runtime3.jsx)(PresenceChild, { isPresent: isPresent2, initial: !isInitialRender.current || initial ? void 0 : false, custom: isPresent2 ? void 0 : custom, presenceAffectsLayout, mode, onExitComplete: isPresent2 ? void 0 : onExit, children: child }, key);
  }) });
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var import_react20 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs
var import_react17 = __toESM(require_react(), 1);
var DeprecatedLayoutGroupContext = (0, import_react17.createContext)(null);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/use-force-update.mjs
var import_react19 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs
var import_react18 = __toESM(require_react(), 1);

// node_modules/.pnpm/motion-utils@11.18.1/node_modules/motion-utils/dist/es/noop.mjs
var noop = (any) => any;

// node_modules/.pnpm/motion-utils@11.18.1/node_modules/motion-utils/dist/es/errors.mjs
var warning = noop;
var invariant = noop;
if (true) {
  warning = (check, message) => {
    if (!check && typeof console !== "undefined") {
      console.warn(message);
    }
  };
  invariant = (check, message) => {
    if (!check) {
      throw new Error(message);
    }
  };
}

// node_modules/.pnpm/motion-utils@11.18.1/node_modules/motion-utils/dist/es/memo.mjs
function memo(callback) {
  let result;
  return () => {
    if (result === void 0)
      result = callback();
    return result;
  };
}

// node_modules/.pnpm/motion-utils@11.18.1/node_modules/motion-utils/dist/es/progress.mjs
var progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

// node_modules/.pnpm/motion-utils@11.18.1/node_modules/motion-utils/dist/es/time-conversion.mjs
var secondsToMilliseconds = (seconds) => seconds * 1e3;
var millisecondsToSeconds = (milliseconds) => milliseconds / 1e3;

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/GlobalConfig.mjs
var MotionGlobalConfig = {
  skipAnimations: false,
  useManualTiming: false
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/frameloop/render-step.mjs
function createRenderStep(runNextFrame) {
  let thisFrame = /* @__PURE__ */ new Set();
  let nextFrame = /* @__PURE__ */ new Set();
  let isProcessing = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  let latestFrameData = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  function triggerCallback(callback) {
    if (toKeepAlive.has(callback)) {
      step.schedule(callback);
      runNextFrame();
    }
    callback(latestFrameData);
  }
  const step = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing;
      const queue = addToCurrentFrame ? thisFrame : nextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (!queue.has(callback))
        queue.add(callback);
      return callback;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (callback) => {
      nextFrame.delete(callback);
      toKeepAlive.delete(callback);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (frameData2) => {
      latestFrameData = frameData2;
      if (isProcessing) {
        flushNextFrame = true;
        return;
      }
      isProcessing = true;
      [thisFrame, nextFrame] = [nextFrame, thisFrame];
      thisFrame.forEach(triggerCallback);
      thisFrame.clear();
      isProcessing = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData2);
      }
    }
  };
  return step;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/frameloop/batcher.mjs
var stepsOrder = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
var maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
  let runNextFrame = false;
  let useDefaultElapsed = true;
  const state2 = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  const flagRunNextFrame = () => runNextFrame = true;
  const steps2 = stepsOrder.reduce((acc, key) => {
    acc[key] = createRenderStep(flagRunNextFrame);
    return acc;
  }, {});
  const { read, resolveKeyframes, update, preRender, render, postRender } = steps2;
  const processBatch = () => {
    const timestamp = MotionGlobalConfig.useManualTiming ? state2.timestamp : performance.now();
    runNextFrame = false;
    state2.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state2.timestamp, maxElapsed), 1);
    state2.timestamp = timestamp;
    state2.isProcessing = true;
    read.process(state2);
    resolveKeyframes.process(state2);
    update.process(state2);
    preRender.process(state2);
    render.process(state2);
    postRender.process(state2);
    state2.isProcessing = false;
    if (runNextFrame && allowKeepAlive) {
      useDefaultElapsed = false;
      scheduleNextBatch(processBatch);
    }
  };
  const wake = () => {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!state2.isProcessing) {
      scheduleNextBatch(processBatch);
    }
  };
  const schedule = stepsOrder.reduce((acc, key) => {
    const step = steps2[key];
    acc[key] = (process2, keepAlive = false, immediate = false) => {
      if (!runNextFrame)
        wake();
      return step.schedule(process2, keepAlive, immediate);
    };
    return acc;
  }, {});
  const cancel = (process2) => {
    for (let i = 0; i < stepsOrder.length; i++) {
      steps2[stepsOrder[i]].cancel(process2);
    }
  };
  return { schedule, cancel, state: state2, steps: steps2 };
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/frameloop/frame.mjs
var { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var import_react22 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/context/LazyContext.mjs
var import_react21 = __toESM(require_react(), 1);
var LazyContext = (0, import_react21.createContext)({ strict: false });

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/features/definitions.mjs
var featureProps = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
var featureDefinitions = {};
for (const key in featureProps) {
  featureDefinitions[key] = {
    isEnabled: (props) => featureProps[key].some((name) => !!props[name])
  };
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function loadFeatures(features) {
  for (const key in features) {
    featureDefinitions[key] = {
      ...featureDefinitions[key],
      ...features[key]
    };
  }
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var import_react23 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var validMotionProps = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function isValidMotionProp(key) {
  return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
var shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
  if (!isValidProp)
    return;
  shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
try {
  loadExternalIsValidProp((init_emotion_is_prop_valid_esm(), __toCommonJS(emotion_is_prop_valid_esm_exports)).default);
} catch (_a) {
}
function filterProps(props, isDom, forwardMotionProps) {
  const filteredProps = {};
  for (const key in props) {
    if (key === "values" && typeof props.values === "object")
      continue;
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || // If trying to use native HTML drag events, forward drag listeners
    props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/warn-once.mjs
var warned = /* @__PURE__ */ new Set();
function warnOnce(condition, message, element) {
  if (condition || warned.has(message))
    return;
  console.warn(message);
  if (element)
    console.warn(element);
  warned.add(message);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function createDOMMotionComponentProxy(componentFactory) {
  if (typeof Proxy === "undefined") {
    return componentFactory;
  }
  const componentCache = /* @__PURE__ */ new Map();
  const deprecatedFactoryFunction = (...args) => {
    if (true) {
      warnOnce(false, "motion() is deprecated. Use motion.create() instead.");
    }
    return componentFactory(...args);
  };
  return new Proxy(deprecatedFactoryFunction, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (_target, key) => {
      if (key === "create")
        return componentFactory;
      if (!componentCache.has(key)) {
        componentCache.set(key, componentFactory(key));
      }
      return componentCache.get(key);
    }
  });
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/index.mjs
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var import_react29 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var import_react24 = __toESM(require_react(), 1);
var MotionContext = (0, import_react24.createContext)({});

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
var import_react25 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs
function isVariantLabel(v) {
  return typeof v === "string" || Array.isArray(v);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function isAnimationControls(v) {
  return v !== null && typeof v === "object" && typeof v.start === "function";
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/utils/variant-props.mjs
var variantPriorityOrder = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
];
var variantProps = ["initial", ...variantPriorityOrder];

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
function isControllingVariants(props) {
  return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
}
function isVariantNode(props) {
  return Boolean(isControllingVariants(props) || props.variants);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
  if (isControllingVariants(props)) {
    const { initial, animate: animate2 } = props;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate2) ? animate2 : void 0
    };
  }
  return props.inherit !== false ? context : {};
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function useCreateMotionContext(props) {
  const { initial, animate: animate2 } = getCurrentTreeVariants(props, (0, import_react25.useContext)(MotionContext));
  return (0, import_react25.useMemo)(() => ({ initial, animate: animate2 }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate2)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
var motionComponentSymbol = Symbol.for("motionComponentSymbol");

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
var import_react26 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
  return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function useMotionRef(visualState, visualElement, externalRef) {
  return (0, import_react26.useCallback)(
    (instance) => {
      if (instance) {
        visualState.onMount && visualState.onMount(instance);
      }
      if (visualElement) {
        if (instance) {
          visualElement.mount(instance);
        } else {
          visualElement.unmount();
        }
      }
      if (externalRef) {
        if (typeof externalRef === "function") {
          externalRef(instance);
        } else if (isRefObject(externalRef)) {
          externalRef.current = instance;
        }
      }
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [visualElement]
  );
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
var import_react28 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
var camelToDash = (str) => str.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs
var optimizedAppearDataId = "framerAppearId";
var optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/frameloop/microtask.mjs
var { schedule: microtask, cancel: cancelMicrotask } = createRenderBatcher(queueMicrotask, false);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var import_react27 = __toESM(require_react(), 1);
var SwitchLayoutGroupContext = (0, import_react27.createContext)({});

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function useVisualElement(Component3, visualState, props, createVisualElement, ProjectionNodeConstructor) {
  var _a, _b;
  const { visualElement: parent } = (0, import_react28.useContext)(MotionContext);
  const lazyContext = (0, import_react28.useContext)(LazyContext);
  const presenceContext = (0, import_react28.useContext)(PresenceContext);
  const reducedMotionConfig = (0, import_react28.useContext)(MotionConfigContext).reducedMotion;
  const visualElementRef = (0, import_react28.useRef)(null);
  createVisualElement = createVisualElement || lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component3, {
      visualState,
      parent,
      props,
      presenceContext,
      blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
      reducedMotionConfig
    });
  }
  const visualElement = visualElementRef.current;
  const initialLayoutGroupConfig = (0, import_react28.useContext)(SwitchLayoutGroupContext);
  if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) {
    createProjectionNode(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
  }
  const isMounted = (0, import_react28.useRef)(false);
  (0, import_react28.useInsertionEffect)(() => {
    if (visualElement && isMounted.current) {
      visualElement.update(props, presenceContext);
    }
  });
  const optimisedAppearId = props[optimizedAppearDataAttribute];
  const wantsHandoff = (0, import_react28.useRef)(Boolean(optimisedAppearId) && !((_a = window.MotionHandoffIsComplete) === null || _a === void 0 ? void 0 : _a.call(window, optimisedAppearId)) && ((_b = window.MotionHasOptimisedAnimation) === null || _b === void 0 ? void 0 : _b.call(window, optimisedAppearId)));
  useIsomorphicLayoutEffect(() => {
    if (!visualElement)
      return;
    isMounted.current = true;
    window.MotionIsMounted = true;
    visualElement.updateFeatures();
    microtask.render(visualElement.render);
    if (wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
  });
  (0, import_react28.useEffect)(() => {
    if (!visualElement)
      return;
    if (!wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
    if (wantsHandoff.current) {
      queueMicrotask(() => {
        var _a2;
        (_a2 = window.MotionHandoffMarkAsComplete) === null || _a2 === void 0 ? void 0 : _a2.call(window, optimisedAppearId);
      });
      wantsHandoff.current = false;
    }
  });
  return visualElement;
}
function createProjectionNode(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
  const { layoutId, layout: layout2, drag: drag2, dragConstraints, layoutScroll, layoutRoot } = props;
  visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(visualElement.parent));
  visualElement.projection.setOptions({
    layoutId,
    layout: layout2,
    alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
    visualElement,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof layout2 === "string" ? layout2 : "both",
    initialPromotionConfig,
    layoutScroll,
    layoutRoot
  });
}
function getClosestProjectingNode(visualElement) {
  if (!visualElement)
    return void 0;
  return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/index.mjs
function createRendererMotionComponent({ preloadedFeatures, createVisualElement, useRender, useVisualState: useVisualState2, Component: Component3 }) {
  var _a, _b;
  preloadedFeatures && loadFeatures(preloadedFeatures);
  function MotionComponent(props, externalRef) {
    let MeasureLayout2;
    const configAndProps = {
      ...(0, import_react29.useContext)(MotionConfigContext),
      ...props,
      layoutId: useLayoutId(props)
    };
    const { isStatic } = configAndProps;
    const context = useCreateMotionContext(props);
    const visualState = useVisualState2(props, isStatic);
    if (!isStatic && isBrowser) {
      useStrictMode(configAndProps, preloadedFeatures);
      const layoutProjection = getProjectionFunctionality(configAndProps);
      MeasureLayout2 = layoutProjection.MeasureLayout;
      context.visualElement = useVisualElement(Component3, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode);
    }
    return (0, import_jsx_runtime7.jsxs)(MotionContext.Provider, { value: context, children: [MeasureLayout2 && context.visualElement ? (0, import_jsx_runtime7.jsx)(MeasureLayout2, { visualElement: context.visualElement, ...configAndProps }) : null, useRender(Component3, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement)] });
  }
  MotionComponent.displayName = `motion.${typeof Component3 === "string" ? Component3 : `create(${(_b = (_a = Component3.displayName) !== null && _a !== void 0 ? _a : Component3.name) !== null && _b !== void 0 ? _b : ""})`}`;
  const ForwardRefMotionComponent = (0, import_react29.forwardRef)(MotionComponent);
  ForwardRefMotionComponent[motionComponentSymbol] = Component3;
  return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
  const layoutGroupId = (0, import_react29.useContext)(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
  const isStrict = (0, import_react29.useContext)(LazyContext).strict;
  if (preloadedFeatures && isStrict) {
    const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    configAndProps.ignoreStrict ? warning(false, strictMessage) : invariant(false, strictMessage);
  }
}
function getProjectionFunctionality(props) {
  const { drag: drag2, layout: layout2 } = featureDefinitions;
  if (!drag2 && !layout2)
    return {};
  const combined = { ...drag2, ...layout2 };
  return {
    MeasureLayout: (drag2 === null || drag2 === void 0 ? void 0 : drag2.isEnabled(props)) || (layout2 === null || layout2 === void 0 ? void 0 : layout2.isEnabled(props)) ? combined.MeasureLayout : void 0,
    ProjectionNode: combined.ProjectionNode
  };
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component3) {
  if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component3 !== "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    Component3.includes("-")
  ) {
    return false;
  } else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    lowercaseSVGElements.indexOf(Component3) > -1 || /**
     * If it contains a capital letter, it's an SVG component
     */
    /[A-Z]/u.test(Component3)
  ) {
    return true;
  }
  return false;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
var import_react30 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs
function getValueState(visualElement) {
  const state2 = [{}, {}];
  visualElement === null || visualElement === void 0 ? void 0 : visualElement.values.forEach((value, key) => {
    state2[0][key] = value.get();
    state2[1][key] = value.getVelocity();
  });
  return state2;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
  if (typeof definition === "function") {
    const [current, velocity] = getValueState(visualElement);
    definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
  }
  if (typeof definition === "string") {
    definition = props.variants && props.variants[definition];
  }
  if (typeof definition === "function") {
    const [current, velocity] = getValueState(visualElement);
    definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
  }
  return definition;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
var isKeyframesTarget = (v) => {
  return Array.isArray(v);
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/resolve-value.mjs
var isCustomValue = (v) => {
  return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = (v) => {
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs
var isMotionValue = (value) => Boolean(value && value.getVelocity);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
function resolveMotionValue(value) {
  const unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function makeState({ scrapeMotionValuesFromProps: scrapeMotionValuesFromProps3, createRenderState, onUpdate }, props, context, presenceContext) {
  const state2 = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
    renderState: createRenderState()
  };
  if (onUpdate) {
    state2.onMount = (instance) => onUpdate({ props, current: instance, ...state2 });
    state2.onUpdate = (visualElement) => onUpdate(visualElement);
  }
  return state2;
}
var makeUseVisualState = (config) => (props, isStatic) => {
  const context = (0, import_react30.useContext)(MotionContext);
  const presenceContext = (0, import_react30.useContext)(PresenceContext);
  const make = () => makeState(config, props, context, presenceContext);
  return isStatic ? make() : useConstant(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  const values = {};
  const motionValues = scrapeMotionValues(props, {});
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let { initial, animate: animate2 } = props;
  const isControllingVariants$1 = isControllingVariants(props);
  const isVariantNode$1 = isVariantNode(props);
  if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
    if (initial === void 0)
      initial = context.initial;
    if (animate2 === void 0)
      animate2 = context.animate;
  }
  let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
  const variantToSet = isInitialAnimationBlocked ? animate2 : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    for (let i = 0; i < list.length; i++) {
      const resolved = resolveVariantFromProps(props, list[i]);
      if (resolved) {
        const { transitionEnd, transition, ...target } = resolved;
        for (const key in target) {
          let valueTarget = target[key];
          if (Array.isArray(valueTarget)) {
            const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
            valueTarget = valueTarget[index];
          }
          if (valueTarget !== null) {
            values[key] = valueTarget;
          }
        }
        for (const key in transitionEnd) {
          values[key] = transitionEnd[key];
        }
      }
    }
  }
  return values;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/html/utils/keys-transform.mjs
var transformPropOrder = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
var transformProps = new Set(transformPropOrder);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs
var checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
var isCSSVariableName = checkStringStartsWith("--");
var startsAsVariableToken = checkStringStartsWith("var(--");
var isCSSVariableToken = (value) => {
  const startsWithToken = startsAsVariableToken(value);
  if (!startsWithToken)
    return false;
  return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
var singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs
var getValueAsType = (value, type) => {
  return type && typeof value === "number" ? type.transform(value) : value;
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/clamp.mjs
var clamp = (min2, max2, v) => {
  if (v > max2)
    return max2;
  if (v < min2)
    return min2;
  return v;
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/types/numbers/index.mjs
var number = {
  test: (v) => typeof v === "number",
  parse: parseFloat,
  transform: (v) => v
};
var alpha = {
  ...number,
  transform: (v) => clamp(0, 1, v)
};
var scale = {
  ...number,
  default: 1
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/types/numbers/units.mjs
var createUnitType = (unit) => ({
  test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: (v) => `${v}${unit}`
});
var degrees = createUnitType("deg");
var percent = createUnitType("%");
var px = createUnitType("px");
var vh = createUnitType("vh");
var vw = createUnitType("vw");
var progressPercentage = {
  ...percent,
  parse: (v) => percent.parse(v) / 100,
  transform: (v) => percent.transform(v * 100)
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/value-types/number-browser.mjs
var browserNumberValueTypes = {
  // Border props
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  // Positioning props
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  // Spacing props
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  // Misc
  backgroundPositionX: px,
  backgroundPositionY: px
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/value-types/transform.mjs
var transformValueTypes = {
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs
var int = {
  ...number,
  transform: Math.round
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs
var numberValueTypes = {
  ...browserNumberValueTypes,
  ...transformValueTypes,
  zIndex: int,
  size: px,
  // SVG
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
var numTransforms = transformPropOrder.length;
function buildTransform(latestValues, transform2, transformTemplate) {
  let transformString = "";
  let transformIsDefault = true;
  for (let i = 0; i < numTransforms; i++) {
    const key = transformPropOrder[i];
    const value = latestValues[key];
    if (value === void 0)
      continue;
    let valueIsDefault = true;
    if (typeof value === "number") {
      valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
    } else {
      valueIsDefault = parseFloat(value) === 0;
    }
    if (!valueIsDefault || transformTemplate) {
      const valueAsType = getValueAsType(value, numberValueTypes[key]);
      if (!valueIsDefault) {
        transformIsDefault = false;
        const transformName = translateAlias[key] || key;
        transformString += `${transformName}(${valueAsType}) `;
      }
      if (transformTemplate) {
        transform2[key] = valueAsType;
      }
    }
  }
  transformString = transformString.trim();
  if (transformTemplate) {
    transformString = transformTemplate(transform2, transformIsDefault ? "" : transformString);
  } else if (transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state2, latestValues, transformTemplate) {
  const { style, vars, transformOrigin } = state2;
  let hasTransform2 = false;
  let hasTransformOrigin = false;
  for (const key in latestValues) {
    const value = latestValues[key];
    if (transformProps.has(key)) {
      hasTransform2 = true;
      continue;
    } else if (isCSSVariableName(key)) {
      vars[key] = value;
      continue;
    } else {
      const valueAsType = getValueAsType(value, numberValueTypes[key]);
      if (key.startsWith("origin")) {
        hasTransformOrigin = true;
        transformOrigin[key] = valueAsType;
      } else {
        style[key] = valueAsType;
      }
    }
  }
  if (!latestValues.transform) {
    if (hasTransform2 || transformTemplate) {
      style.transform = buildTransform(latestValues, state2.transform, transformTemplate);
    } else if (style.transform) {
      style.transform = "none";
    }
  }
  if (hasTransformOrigin) {
    const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
    style.transformOrigin = `${originX} ${originY} ${originZ}`;
  }
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/svg/utils/path.mjs
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
  attrs.pathLength = 1;
  const keys = useDashCase ? dashKeys : camelKeys;
  attrs[keys.offset] = px.transform(-offset);
  const pathLength = px.transform(length);
  const pathSpacing = px.transform(spacing);
  attrs[keys.array] = `${pathLength} ${pathSpacing}`;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs
function calcOrigin(origin, offset, size) {
  return typeof origin === "string" ? origin : px.transform(offset + size * origin);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
  const pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
  const pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
  return `${pxOriginX} ${pxOriginY}`;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function buildSVGAttrs(state2, {
  attrX,
  attrY,
  attrScale,
  originX,
  originY,
  pathLength,
  pathSpacing = 1,
  pathOffset = 0,
  // This is object creation, which we try to avoid per-frame.
  ...latest
}, isSVGTag2, transformTemplate) {
  buildHTMLStyles(state2, latest, transformTemplate);
  if (isSVGTag2) {
    if (state2.style.viewBox) {
      state2.attrs.viewBox = state2.style.viewBox;
    }
    return;
  }
  state2.attrs = state2.style;
  state2.style = {};
  const { attrs, style, dimensions } = state2;
  if (attrs.transform) {
    if (dimensions)
      style.transform = attrs.transform;
    delete attrs.transform;
  }
  if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
    style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
  }
  if (attrX !== void 0)
    attrs.x = attrX;
  if (attrY !== void 0)
    attrs.y = attrY;
  if (attrScale !== void 0)
    attrs.scale = attrScale;
  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var createSvgRenderState = () => ({
  ...createHtmlRenderState(),
  attrs: {}
});

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs
var isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/html/utils/render.mjs
function renderHTML(element, { style, vars }, styleProp, projection) {
  Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
  for (const key in vars) {
    element.style.setProperty(key, vars[key]);
  }
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
var camelCaseAttributes = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
  renderHTML(element, renderState, void 0, projection);
  for (const key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
var scaleCorrectors = {};
function addScaleCorrector(correctors) {
  Object.assign(scaleCorrectors, correctors);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, { layout: layout2, layoutId }) {
  return transformProps.has(key) || key.startsWith("origin") || (layout2 || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
  var _a;
  const { style } = props;
  const newValues = {};
  for (const key in style) {
    if (isMotionValue(style[key]) || prevProps.style && isMotionValue(prevProps.style[key]) || isForcedMotionValue(key, props) || ((_a = visualElement === null || visualElement === void 0 ? void 0 : visualElement.getValue(key)) === null || _a === void 0 ? void 0 : _a.liveStyle) !== void 0) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps2(props, prevProps, visualElement) {
  const newValues = scrapeMotionValuesFromProps(props, prevProps, visualElement);
  for (const key in props) {
    if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
      const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/svg/config-motion.mjs
function updateSVGDimensions(instance, renderState) {
  try {
    renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
  } catch (e) {
    renderState.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
}
var layoutProps = ["x", "y", "width", "height", "cx", "cy", "r"];
var svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
    createRenderState: createSvgRenderState,
    onUpdate: ({ props, prevProps, current, renderState, latestValues }) => {
      if (!current)
        return;
      let hasTransform2 = !!props.drag;
      if (!hasTransform2) {
        for (const key in latestValues) {
          if (transformProps.has(key)) {
            hasTransform2 = true;
            break;
          }
        }
      }
      if (!hasTransform2)
        return;
      let needsMeasure = !prevProps;
      if (prevProps) {
        for (let i = 0; i < layoutProps.length; i++) {
          const key = layoutProps[i];
          if (props[key] !== prevProps[key]) {
            needsMeasure = true;
          }
        }
      }
      if (!needsMeasure)
        return;
      frame.read(() => {
        updateSVGDimensions(current, renderState);
        frame.render(() => {
          buildSVGAttrs(renderState, latestValues, isSVGTag(current.tagName), props.transformTemplate);
          renderSVG(current, renderState);
        });
      });
    }
  })
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/html/config-motion.mjs
var htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createHtmlRenderState
  })
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/use-render.mjs
var import_react33 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/html/use-props.mjs
var import_react31 = __toESM(require_react(), 1);
function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues({ transformTemplate }, visualState) {
  return (0, import_react31.useMemo)(() => {
    const state2 = createHtmlRenderState();
    buildHTMLStyles(state2, visualState, transformTemplate);
    return Object.assign({}, state2.vars, state2.style);
  }, [visualState]);
}
function useStyle(props, visualState) {
  const styleProp = props.style || {};
  const style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState));
  return style;
}
function useHTMLProps(props, visualState) {
  const htmlProps = {};
  const style = useStyle(props, visualState);
  if (props.drag && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
  }
  if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) {
    htmlProps.tabIndex = 0;
  }
  htmlProps.style = style;
  return htmlProps;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/svg/use-props.mjs
var import_react32 = __toESM(require_react(), 1);
function useSVGProps(props, visualState, _isStatic, Component3) {
  const visualProps = (0, import_react32.useMemo)(() => {
    const state2 = createSvgRenderState();
    buildSVGAttrs(state2, visualState, isSVGTag(Component3), props.transformTemplate);
    return {
      ...state2.attrs,
      style: { ...state2.style }
    };
  }, [visualState]);
  if (props.style) {
    const rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = { ...rawStyles, ...visualProps.style };
  }
  return visualProps;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function createUseRender(forwardMotionProps = false) {
  const useRender = (Component3, props, ref, { latestValues }, isStatic) => {
    const useVisualProps = isSVGComponent(Component3) ? useSVGProps : useHTMLProps;
    const visualProps = useVisualProps(props, latestValues, isStatic, Component3);
    const filteredProps = filterProps(props, typeof Component3 === "string", forwardMotionProps);
    const elementProps = Component3 !== import_react33.Fragment ? { ...filteredProps, ...visualProps, ref } : {};
    const { children } = props;
    const renderedChildren = (0, import_react33.useMemo)(() => isMotionValue(children) ? children.get() : children, [children]);
    return (0, import_react33.createElement)(Component3, {
      ...elementProps,
      children: renderedChildren
    });
  };
  return useRender;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/components/create-factory.mjs
function createMotionComponentFactory(preloadedFeatures, createVisualElement) {
  return function createMotionComponent2(Component3, { forwardMotionProps } = { forwardMotionProps: false }) {
    const baseConfig = isSVGComponent(Component3) ? svgMotionConfig : htmlMotionConfig;
    const config = {
      ...baseConfig,
      preloadedFeatures,
      useRender: createUseRender(forwardMotionProps),
      createVisualElement,
      Component: Component3
    };
    return createRendererMotionComponent(config);
  };
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/components/m/create.mjs
var createMinimalMotionComponent = createMotionComponentFactory();

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs
var m = createDOMMotionComponentProxy(createMinimalMotionComponent);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
  if (!Array.isArray(prev))
    return false;
  const prevLength = prev.length;
  if (prevLength !== next.length)
    return false;
  for (let i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i])
      return false;
  }
  return true;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
function resolveVariant(visualElement, definition, custom) {
  const props = visualElement.getProps();
  return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, visualElement);
}

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var supportsScrollTimeline = memo(() => window.ScrollTimeline !== void 0);

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/animation/controls/BaseGroup.mjs
var BaseGroupPlaybackControls = class {
  constructor(animations2) {
    this.stop = () => this.runAll("stop");
    this.animations = animations2.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((animation) => "finished" in animation ? animation.finished : animation));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(propName) {
    return this.animations[0][propName];
  }
  setAll(propName, newValue) {
    for (let i = 0; i < this.animations.length; i++) {
      this.animations[i][propName] = newValue;
    }
  }
  attachTimeline(timeline, fallback) {
    const subscriptions = this.animations.map((animation) => {
      if (supportsScrollTimeline() && animation.attachTimeline) {
        return animation.attachTimeline(timeline);
      } else if (typeof fallback === "function") {
        return fallback(animation);
      }
    });
    return () => {
      subscriptions.forEach((cancel, i) => {
        cancel && cancel();
        this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(time2) {
    this.setAll("time", time2);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(speed) {
    this.setAll("speed", speed);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let max2 = 0;
    for (let i = 0; i < this.animations.length; i++) {
      max2 = Math.max(max2, this.animations[i].duration);
    }
    return max2;
  }
  runAll(methodName) {
    this.animations.forEach((controls) => controls[methodName]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
};

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/animation/controls/Group.mjs
var GroupPlaybackControls = class extends BaseGroupPlaybackControls {
  then(onResolve, onReject) {
    return Promise.all(this.animations).then(onResolve).catch(onReject);
  }
};

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function getValueTransition(transition, key) {
  return transition ? transition[key] || transition["default"] || transition : void 0;
}

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs
var maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator) {
  let duration = 0;
  const timeStep = 50;
  let state2 = generator.next(duration);
  while (!state2.done && duration < maxGeneratorDuration) {
    duration += timeStep;
    state2 = generator.next(duration);
  }
  return duration >= maxGeneratorDuration ? Infinity : duration;
}

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function createGeneratorEasing(options, scale2 = 100, createGenerator) {
  const generator = createGenerator({ ...options, keyframes: [0, scale2] });
  const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
  return {
    type: "keyframes",
    ease: (progress2) => {
      return generator.next(duration * progress2).value / scale2;
    },
    duration: millisecondsToSeconds(duration)
  };
}

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function isGenerator(type) {
  return typeof type === "function";
}

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/animation/waapi/utils/attach-timeline.mjs
function attachTimeline(animation, timeline) {
  animation.timeline = timeline;
  animation.onfinish = null;
}

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/animation/waapi/NativeAnimationControls.mjs
var NativeAnimationControls = class {
  constructor(animation) {
    this.animation = animation;
  }
  get duration() {
    var _a, _b, _c;
    const durationInMs = ((_b = (_a = this.animation) === null || _a === void 0 ? void 0 : _a.effect) === null || _b === void 0 ? void 0 : _b.getComputedTiming().duration) || ((_c = this.options) === null || _c === void 0 ? void 0 : _c.duration) || 300;
    return millisecondsToSeconds(Number(durationInMs));
  }
  get time() {
    var _a;
    if (this.animation) {
      return millisecondsToSeconds(((_a = this.animation) === null || _a === void 0 ? void 0 : _a.currentTime) || 0);
    }
    return 0;
  }
  set time(newTime) {
    if (this.animation) {
      this.animation.currentTime = secondsToMilliseconds(newTime);
    }
  }
  get speed() {
    return this.animation ? this.animation.playbackRate : 1;
  }
  set speed(newSpeed) {
    if (this.animation) {
      this.animation.playbackRate = newSpeed;
    }
  }
  get state() {
    return this.animation ? this.animation.playState : "finished";
  }
  get startTime() {
    return this.animation ? this.animation.startTime : null;
  }
  get finished() {
    return this.animation ? this.animation.finished : Promise.resolve();
  }
  play() {
    this.animation && this.animation.play();
  }
  pause() {
    this.animation && this.animation.pause();
  }
  stop() {
    if (!this.animation || this.state === "idle" || this.state === "finished") {
      return;
    }
    if (this.animation.commitStyles) {
      this.animation.commitStyles();
    }
    this.cancel();
  }
  flatten() {
    var _a;
    if (!this.animation)
      return;
    (_a = this.animation.effect) === null || _a === void 0 ? void 0 : _a.updateTiming({ easing: "linear" });
  }
  attachTimeline(timeline) {
    if (this.animation)
      attachTimeline(this.animation, timeline);
    return noop;
  }
  complete() {
    this.animation && this.animation.finish();
  }
  cancel() {
    try {
      this.animation && this.animation.cancel();
    } catch (e) {
    }
  }
};

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/utils/is-bezier-definition.mjs
var isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var supportsFlags = {
  linearEasing: void 0
};

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function memoSupports(callback, supportsFlag) {
  const memoized = memo(callback);
  return () => {
    var _a;
    return (_a = supportsFlags[supportsFlag]) !== null && _a !== void 0 ? _a : memoized();
  };
}

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs
var supportsLinearEasing = memoSupports(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch (e) {
    return false;
  }
  return true;
}, "linearEasing");

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs
var generateLinearEasing = (easing, duration, resolution = 10) => {
  let points = "";
  const numPoints = Math.max(Math.round(duration / resolution), 2);
  for (let i = 0; i < numPoints; i++) {
    points += easing(progress(0, numPoints - 1, i)) + ", ";
  }
  return `linear(${points.substring(0, points.length - 2)})`;
};

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/animation/waapi/utils/easing.mjs
function isWaapiSupportedEasing(easing) {
  return Boolean(typeof easing === "function" && supportsLinearEasing() || !easing || typeof easing === "string" && (easing in supportedWaapiEasing || supportsLinearEasing()) || isBezierDefinition(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
var supportedWaapiEasing = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: cubicBezierAsString([0, 0.65, 0.55, 1]),
  circOut: cubicBezierAsString([0.55, 0, 1, 0.45]),
  backIn: cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
  backOut: cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
};
function mapEasingToNativeEasing(easing, duration) {
  if (!easing) {
    return void 0;
  } else if (typeof easing === "function" && supportsLinearEasing()) {
    return generateLinearEasing(easing, duration);
  } else if (isBezierDefinition(easing)) {
    return cubicBezierAsString(easing);
  } else if (Array.isArray(easing)) {
    return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
  } else {
    return supportedWaapiEasing[easing];
  }
}

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs
var isDragging = {
  x: false,
  y: false
};
function isDragActive() {
  return isDragging.x || isDragging.y;
}

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function resolveElements(elementOrSelector, scope, selectorCache) {
  var _a;
  if (elementOrSelector instanceof Element) {
    return [elementOrSelector];
  } else if (typeof elementOrSelector === "string") {
    let root = document;
    if (scope) {
      root = scope.current;
    }
    const elements = (_a = selectorCache === null || selectorCache === void 0 ? void 0 : selectorCache[elementOrSelector]) !== null && _a !== void 0 ? _a : root.querySelectorAll(elementOrSelector);
    return elements ? Array.from(elements) : [];
  }
  return Array.from(elementOrSelector);
}

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function setupGesture(elementOrSelector, options) {
  const elements = resolveElements(elementOrSelector);
  const gestureAbortController = new AbortController();
  const eventOptions = {
    passive: true,
    ...options,
    signal: gestureAbortController.signal
  };
  const cancel = () => gestureAbortController.abort();
  return [elements, eventOptions, cancel];
}

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/gestures/hover.mjs
function filterEvents(callback) {
  return (event) => {
    if (event.pointerType === "touch" || isDragActive())
      return;
    callback(event);
  };
}
function hover(elementOrSelector, onHoverStart, options = {}) {
  const [elements, eventOptions, cancel] = setupGesture(elementOrSelector, options);
  const onPointerEnter = filterEvents((enterEvent) => {
    const { target } = enterEvent;
    const onHoverEnd = onHoverStart(enterEvent);
    if (typeof onHoverEnd !== "function" || !target)
      return;
    const onPointerLeave = filterEvents((leaveEvent) => {
      onHoverEnd(leaveEvent);
      target.removeEventListener("pointerleave", onPointerLeave);
    });
    target.addEventListener("pointerleave", onPointerLeave, eventOptions);
  });
  elements.forEach((element) => {
    element.addEventListener("pointerenter", onPointerEnter, eventOptions);
  });
  return cancel;
}

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
var isNodeOrChild = (parent, child) => {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs
var isPrimaryPointer = (event) => {
  if (event.pointerType === "mouse") {
    return typeof event.button !== "number" || event.button <= 0;
  } else {
    return event.isPrimary !== false;
  }
};

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs
var focusableElements = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function isElementKeyboardAccessible(element) {
  return focusableElements.has(element.tagName) || element.tabIndex !== -1;
}

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var isPressing = /* @__PURE__ */ new WeakSet();

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function filterEvents2(callback) {
  return (event) => {
    if (event.key !== "Enter")
      return;
    callback(event);
  };
}
function firePointerEvent(target, type) {
  target.dispatchEvent(new PointerEvent("pointer" + type, { isPrimary: true, bubbles: true }));
}
var enableKeyboardPress = (focusEvent, eventOptions) => {
  const element = focusEvent.currentTarget;
  if (!element)
    return;
  const handleKeydown = filterEvents2(() => {
    if (isPressing.has(element))
      return;
    firePointerEvent(element, "down");
    const handleKeyup = filterEvents2(() => {
      firePointerEvent(element, "up");
    });
    const handleBlur = () => firePointerEvent(element, "cancel");
    element.addEventListener("keyup", handleKeyup, eventOptions);
    element.addEventListener("blur", handleBlur, eventOptions);
  });
  element.addEventListener("keydown", handleKeydown, eventOptions);
  element.addEventListener("blur", () => element.removeEventListener("keydown", handleKeydown), eventOptions);
};

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/gestures/press/index.mjs
function isValidPressEvent(event) {
  return isPrimaryPointer(event) && !isDragActive();
}
function press(elementOrSelector, onPressStart, options = {}) {
  const [elements, eventOptions, cancelEvents] = setupGesture(elementOrSelector, options);
  const startPress = (startEvent) => {
    const element = startEvent.currentTarget;
    if (!isValidPressEvent(startEvent) || isPressing.has(element))
      return;
    isPressing.add(element);
    const onPressEnd = onPressStart(startEvent);
    const onPointerEnd = (endEvent, success) => {
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerCancel);
      if (!isValidPressEvent(endEvent) || !isPressing.has(element)) {
        return;
      }
      isPressing.delete(element);
      if (typeof onPressEnd === "function") {
        onPressEnd(endEvent, { success });
      }
    };
    const onPointerUp = (upEvent) => {
      onPointerEnd(upEvent, options.useGlobalTarget || isNodeOrChild(element, upEvent.target));
    };
    const onPointerCancel = (cancelEvent) => {
      onPointerEnd(cancelEvent, false);
    };
    window.addEventListener("pointerup", onPointerUp, eventOptions);
    window.addEventListener("pointercancel", onPointerCancel, eventOptions);
  };
  elements.forEach((element) => {
    if (!isElementKeyboardAccessible(element) && element.getAttribute("tabindex") === null) {
      element.tabIndex = 0;
    }
    const target = options.useGlobalTarget ? window : element;
    target.addEventListener("pointerdown", startPress, eventOptions);
    element.addEventListener("focus", (event) => enableKeyboardPress(event, eventOptions), eventOptions);
  });
  return cancelEvents;
}

// node_modules/.pnpm/motion-dom@11.18.1/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function setDragLock(axis) {
  if (axis === "x" || axis === "y") {
    if (isDragging[axis]) {
      return null;
    } else {
      isDragging[axis] = true;
      return () => {
        isDragging[axis] = false;
      };
    }
  } else {
    if (isDragging.x || isDragging.y) {
      return null;
    } else {
      isDragging.x = isDragging.y = true;
      return () => {
        isDragging.x = isDragging.y = false;
      };
    }
  }
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/html/utils/keys-position.mjs
var positionalKeys = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...transformPropOrder
]);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/frameloop/sync-time.mjs
var now;
function clearTime() {
  now = void 0;
}
var time = {
  now: () => {
    if (now === void 0) {
      time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
    }
    return now;
  },
  set: (newTime) => {
    now = newTime;
    queueMicrotask(clearTime);
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/array.mjs
function addUniqueItem(arr, item) {
  if (arr.indexOf(item) === -1)
    arr.push(item);
}
function removeItem(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1)
    arr.splice(index, 1);
}
function moveItem([...arr], fromIndex, toIndex) {
  const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
  if (startIndex >= 0 && startIndex < arr.length) {
    const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
    const [item] = arr.splice(fromIndex, 1);
    arr.splice(endIndex, 0, item);
  }
  return arr;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/subscription-manager.mjs
var SubscriptionManager = class {
  constructor() {
    this.subscriptions = [];
  }
  add(handler) {
    addUniqueItem(this.subscriptions, handler);
    return () => removeItem(this.subscriptions, handler);
  }
  notify(a, b, c) {
    const numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions)
      return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a, b, c);
    } else {
      for (let i = 0; i < numSubscriptions; i++) {
        const handler = this.subscriptions[i];
        handler && handler(a, b, c);
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/index.mjs
var MAX_VELOCITY_DELTA = 30;
var isFloat = (value) => {
  return !isNaN(parseFloat(value));
};
var collectMotionValues = {
  current: void 0
};
var MotionValue = class {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(init, options = {}) {
    this.version = "11.18.2";
    this.canTrackVelocity = null;
    this.events = {};
    this.updateAndNotify = (v, render = true) => {
      const currentTime = time.now();
      if (this.updatedAt !== currentTime) {
        this.setPrevFrameValue();
      }
      this.prev = this.current;
      this.setCurrent(v);
      if (this.current !== this.prev && this.events.change) {
        this.events.change.notify(this.current);
      }
      if (render && this.events.renderRequest) {
        this.events.renderRequest.notify(this.current);
      }
    };
    this.hasAnimated = false;
    this.setCurrent(init);
    this.owner = options.owner;
  }
  setCurrent(current) {
    this.current = current;
    this.updatedAt = time.now();
    if (this.canTrackVelocity === null && current !== void 0) {
      this.canTrackVelocity = isFloat(this.current);
    }
  }
  setPrevFrameValue(prevFrameValue = this.current) {
    this.prevFrameValue = prevFrameValue;
    this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(subscription) {
    if (true) {
      warnOnce(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
    }
    return this.on("change", subscription);
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    const unsubscribe = this.events[eventName].add(callback);
    if (eventName === "change") {
      return () => {
        unsubscribe();
        frame.read(() => {
          if (!this.events.change.getSize()) {
            this.stop();
          }
        });
      };
    }
    return unsubscribe;
  }
  clearListeners() {
    for (const eventManagers in this.events) {
      this.events[eventManagers].clear();
    }
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(passiveEffect, stopPassiveEffect) {
    this.passiveEffect = passiveEffect;
    this.stopPassiveEffect = stopPassiveEffect;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(v, render = true) {
    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v, render);
    } else {
      this.passiveEffect(v, this.updateAndNotify);
    }
  }
  setWithVelocity(prev, current, delta) {
    this.set(current);
    this.prev = void 0;
    this.prevFrameValue = prev;
    this.prevUpdatedAt = this.updatedAt - delta;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(v, endAnimation = true) {
    this.updateAndNotify(v);
    this.prev = v;
    this.prevUpdatedAt = this.prevFrameValue = void 0;
    endAnimation && this.stop();
    if (this.stopPassiveEffect)
      this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    if (collectMotionValues.current) {
      collectMotionValues.current.push(this);
    }
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const currentTime = time.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
      return 0;
    }
    const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
    return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(startAnimation) {
    this.stop();
    return new Promise((resolve) => {
      this.hasAnimated = true;
      this.animation = startAnimation(resolve);
      if (this.events.animationStart) {
        this.events.animationStart.notify();
      }
    }).then(() => {
      if (this.events.animationComplete) {
        this.events.animationComplete.notify();
      }
      this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    if (this.animation) {
      this.animation.stop();
      if (this.events.animationCancel) {
        this.events.animationCancel.notify();
      }
    }
    this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners();
    this.stop();
    if (this.stopPassiveEffect) {
      this.stopPassiveEffect();
    }
  }
};
function motionValue(init, options) {
  return new MotionValue(init, options);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/utils/setters.mjs
function setMotionValue(visualElement, key, value) {
  if (visualElement.hasValue(key)) {
    visualElement.getValue(key).set(value);
  } else {
    visualElement.addValue(key, motionValue(value));
  }
}
function setTarget(visualElement, definition) {
  const resolved = resolveVariant(visualElement, definition);
  let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
  target = { ...target, ...transitionEnd };
  for (const key in target) {
    const value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement, key, value);
  }
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/use-will-change/is.mjs
function isWillChangeMotionValue(value) {
  return Boolean(isMotionValue(value) && value.add);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/use-will-change/add-will-change.mjs
function addValueToWillChange(visualElement, key) {
  const willChange = visualElement.getValue("willChange");
  if (isWillChangeMotionValue(willChange)) {
    return willChange.add(key);
  }
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs
function getOptimisedAppearId(visualElement) {
  return visualElement.props[optimizedAppearDataAttribute];
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs
var instantAnimationState = {
  current: false
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs
var calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - x;
    if (currentX > 0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return noop;
  const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
  return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/easing/modifiers/mirror.mjs
var mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/easing/modifiers/reverse.mjs
var reverseEasing = (easing) => (p) => 1 - easing(1 - p);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/easing/back.mjs
var backOut = cubicBezier(0.33, 1.53, 0.69, 0.99);
var backIn = reverseEasing(backOut);
var backInOut = mirrorEasing(backIn);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/easing/anticipate.mjs
var anticipate = (p) => (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/easing/circ.mjs
var circIn = (p) => 1 - Math.sin(Math.acos(p));
var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circIn);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs
var isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/utils/is-none.mjs
function isNone(value) {
  if (typeof value === "number") {
    return value === 0;
  } else if (value !== null) {
    return value === "none" || value === "0" || isZeroValueString(value);
  } else {
    return true;
  }
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/types/utils/sanitize.mjs
var sanitize = (v) => Math.round(v * 1e5) / 1e5;

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/types/utils/float-regex.mjs
var floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/types/utils/is-nullish.mjs
function isNullish(v) {
  return v == null;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/types/utils/single-color-regex.mjs
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/types/color/utils.mjs
var isColorString = (type, testProp) => (v) => {
  return Boolean(typeof v === "string" && singleColorRegex.test(v) && v.startsWith(type) || testProp && !isNullish(v) && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
  if (typeof v !== "string")
    return v;
  const [a, b, c, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a),
    [bName]: parseFloat(b),
    [cName]: parseFloat(c),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/types/color/rgba.mjs
var clampRgbUnit = (v) => clamp(0, 255, v);
var rgbUnit = {
  ...number,
  transform: (v) => Math.round(clampRgbUnit(v))
};
var rgba = {
  test: isColorString("rgb", "red"),
  parse: splitColor("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/types/color/hex.mjs
function parseHex(v) {
  let r = "";
  let g = "";
  let b = "";
  let a = "";
  if (v.length > 5) {
    r = v.substring(1, 3);
    g = v.substring(3, 5);
    b = v.substring(5, 7);
    a = v.substring(7, 9);
  } else {
    r = v.substring(1, 2);
    g = v.substring(2, 3);
    b = v.substring(3, 4);
    a = v.substring(4, 5);
    r += r;
    g += g;
    b += b;
    a += a;
  }
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
var hex = {
  test: isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/types/color/hsla.mjs
var hsla = {
  test: isColorString("hsl", "hue"),
  parse: splitColor("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/types/color/index.mjs
var color = {
  test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: (v) => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: (v) => {
    return typeof v === "string" ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/types/utils/color-regex.mjs
var colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/types/complex/index.mjs
function test(v) {
  var _a, _b;
  return isNaN(v) && typeof v === "string" && (((_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) + (((_b = v.match(colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) > 0;
}
var NUMBER_TOKEN = "number";
var COLOR_TOKEN = "color";
var VAR_TOKEN = "var";
var VAR_FUNCTION_TOKEN = "var(";
var SPLIT_TOKEN = "${}";
var complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(value) {
  const originalValue = value.toString();
  const values = [];
  const indexes = {
    color: [],
    number: [],
    var: []
  };
  const types = [];
  let i = 0;
  const tokenised = originalValue.replace(complexRegex, (parsedValue) => {
    if (color.test(parsedValue)) {
      indexes.color.push(i);
      types.push(COLOR_TOKEN);
      values.push(color.parse(parsedValue));
    } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
      indexes.var.push(i);
      types.push(VAR_TOKEN);
      values.push(parsedValue);
    } else {
      indexes.number.push(i);
      types.push(NUMBER_TOKEN);
      values.push(parseFloat(parsedValue));
    }
    ++i;
    return SPLIT_TOKEN;
  });
  const split = tokenised.split(SPLIT_TOKEN);
  return { values, split, indexes, types };
}
function parseComplexValue(v) {
  return analyseComplexValue(v).values;
}
function createTransformer(source) {
  const { split, types } = analyseComplexValue(source);
  const numSections = split.length;
  return (v) => {
    let output = "";
    for (let i = 0; i < numSections; i++) {
      output += split[i];
      if (v[i] !== void 0) {
        const type = types[i];
        if (type === NUMBER_TOKEN) {
          output += sanitize(v[i]);
        } else if (type === COLOR_TOKEN) {
          output += color.transform(v[i]);
        } else {
          output += v[i];
        }
      }
    }
    return output;
  };
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
  const parsed = parseComplexValue(v);
  const transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}
var complex = {
  test,
  parse: parseComplexValue,
  createTransformer,
  getAnimatableNone
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/types/complex/filter.mjs
var maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
  const [name, value] = v.slice(0, -1).split("(");
  if (name === "drop-shadow")
    return v;
  const [number2] = value.match(floatRegex) || [];
  if (!number2)
    return v;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value)
    defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /\b([a-z-]*)\(.*?\)/gu;
var filter = {
  ...complex,
  getAnimatableNone: (v) => {
    const functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(" ") : v;
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs
var defaultValueTypes = {
  ...numberValueTypes,
  // Color props
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  // Border props
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter,
  WebkitFilter: filter
};
var getDefaultValueType = (key) => defaultValueTypes[key];

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
function getAnimatableNone2(key, value) {
  let defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter)
    defaultValueType = complex;
  return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/html/utils/make-none-animatable.mjs
var invalidTemplates = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
  let i = 0;
  let animatableTemplate = void 0;
  while (i < unresolvedKeyframes.length && !animatableTemplate) {
    const keyframe = unresolvedKeyframes[i];
    if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && analyseComplexValue(keyframe).values.length) {
      animatableTemplate = unresolvedKeyframes[i];
    }
    i++;
  }
  if (animatableTemplate && name) {
    for (const noneIndex of noneKeyframeIndexes) {
      unresolvedKeyframes[noneIndex] = getAnimatableNone2(name, animatableTemplate);
    }
  }
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs
var isNumOrPxType = (v) => v === number || v === px;
var getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
var getTranslateFromMatrix = (pos2, pos3) => (_bbox, { transform: transform2 }) => {
  if (transform2 === "none" || !transform2)
    return 0;
  const matrix3d = transform2.match(/^matrix3d\((.+)\)$/u);
  if (matrix3d) {
    return getPosFromMatrix(matrix3d[1], pos3);
  } else {
    const matrix = transform2.match(/^matrix\((.+)\)$/u);
    if (matrix) {
      return getPosFromMatrix(matrix[1], pos2);
    } else {
      return 0;
    }
  }
};
var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
  const removedTransforms = [];
  nonTranslationalTransformKeys.forEach((key) => {
    const value = visualElement.getValue(key);
    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  return removedTransforms;
}
var positionalValues = {
  // Dimensions
  width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
  height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
  top: (_bbox, { top }) => parseFloat(top),
  left: (_bbox, { left }) => parseFloat(left),
  bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
  right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
  // Transform
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/utils/KeyframesResolver.mjs
var toResolve = /* @__PURE__ */ new Set();
var isScheduled = false;
var anyNeedsMeasurement = false;
function measureAllKeyframes() {
  if (anyNeedsMeasurement) {
    const resolversToMeasure = Array.from(toResolve).filter((resolver) => resolver.needsMeasurement);
    const elementsToMeasure = new Set(resolversToMeasure.map((resolver) => resolver.element));
    const transformsToRestore = /* @__PURE__ */ new Map();
    elementsToMeasure.forEach((element) => {
      const removedTransforms = removeNonTranslationalTransform(element);
      if (!removedTransforms.length)
        return;
      transformsToRestore.set(element, removedTransforms);
      element.render();
    });
    resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
    elementsToMeasure.forEach((element) => {
      element.render();
      const restore = transformsToRestore.get(element);
      if (restore) {
        restore.forEach(([key, value]) => {
          var _a;
          (_a = element.getValue(key)) === null || _a === void 0 ? void 0 : _a.set(value);
        });
      }
    });
    resolversToMeasure.forEach((resolver) => resolver.measureEndState());
    resolversToMeasure.forEach((resolver) => {
      if (resolver.suspendedScrollY !== void 0) {
        window.scrollTo(0, resolver.suspendedScrollY);
      }
    });
  }
  anyNeedsMeasurement = false;
  isScheduled = false;
  toResolve.forEach((resolver) => resolver.complete());
  toResolve.clear();
}
function readAllKeyframes() {
  toResolve.forEach((resolver) => {
    resolver.readKeyframes();
    if (resolver.needsMeasurement) {
      anyNeedsMeasurement = true;
    }
  });
}
function flushKeyframeResolvers() {
  readAllKeyframes();
  measureAllKeyframes();
}
var KeyframeResolver = class {
  constructor(unresolvedKeyframes, onComplete, name, motionValue2, element, isAsync = false) {
    this.isComplete = false;
    this.isAsync = false;
    this.needsMeasurement = false;
    this.isScheduled = false;
    this.unresolvedKeyframes = [...unresolvedKeyframes];
    this.onComplete = onComplete;
    this.name = name;
    this.motionValue = motionValue2;
    this.element = element;
    this.isAsync = isAsync;
  }
  scheduleResolve() {
    this.isScheduled = true;
    if (this.isAsync) {
      toResolve.add(this);
      if (!isScheduled) {
        isScheduled = true;
        frame.read(readAllKeyframes);
        frame.resolveKeyframes(measureAllKeyframes);
      }
    } else {
      this.readKeyframes();
      this.complete();
    }
  }
  readKeyframes() {
    const { unresolvedKeyframes, name, element, motionValue: motionValue2 } = this;
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      if (unresolvedKeyframes[i] === null) {
        if (i === 0) {
          const currentValue = motionValue2 === null || motionValue2 === void 0 ? void 0 : motionValue2.get();
          const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
          if (currentValue !== void 0) {
            unresolvedKeyframes[0] = currentValue;
          } else if (element && name) {
            const valueAsRead = element.readValue(name, finalKeyframe);
            if (valueAsRead !== void 0 && valueAsRead !== null) {
              unresolvedKeyframes[0] = valueAsRead;
            }
          }
          if (unresolvedKeyframes[0] === void 0) {
            unresolvedKeyframes[0] = finalKeyframe;
          }
          if (motionValue2 && currentValue === void 0) {
            motionValue2.set(unresolvedKeyframes[0]);
          }
        } else {
          unresolvedKeyframes[i] = unresolvedKeyframes[i - 1];
        }
      }
    }
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = true;
    this.onComplete(this.unresolvedKeyframes, this.finalKeyframe);
    toResolve.delete(this);
  }
  cancel() {
    if (!this.isComplete) {
      this.isScheduled = false;
      toResolve.delete(this);
    }
  }
  resume() {
    if (!this.isComplete)
      this.scheduleResolve();
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs
var isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs
var splitCSSVariableRegex = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function parseCSSVariable(current) {
  const match2 = splitCSSVariableRegex.exec(current);
  if (!match2)
    return [,];
  const [, token1, token2, fallback] = match2;
  return [`--${token1 !== null && token1 !== void 0 ? token1 : token2}`, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
  invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
  const [token, fallback] = parseCSSVariable(current);
  if (!token)
    return;
  const resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    const trimmed = resolved.trim();
    return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
  }
  return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs
var testValueType = (v) => (type) => type.test(v);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs
var auto = {
  test: (v) => v === "auto",
  parse: (v) => v
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs
var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
var findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs
var DOMKeyframesResolver = class extends KeyframeResolver {
  constructor(unresolvedKeyframes, onComplete, name, motionValue2, element) {
    super(unresolvedKeyframes, onComplete, name, motionValue2, element, true);
  }
  readKeyframes() {
    const { unresolvedKeyframes, element, name } = this;
    if (!element || !element.current)
      return;
    super.readKeyframes();
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      let keyframe = unresolvedKeyframes[i];
      if (typeof keyframe === "string") {
        keyframe = keyframe.trim();
        if (isCSSVariableToken(keyframe)) {
          const resolved = getVariableValue(keyframe, element.current);
          if (resolved !== void 0) {
            unresolvedKeyframes[i] = resolved;
          }
          if (i === unresolvedKeyframes.length - 1) {
            this.finalKeyframe = keyframe;
          }
        }
      }
    }
    this.resolveNoneKeyframes();
    if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
      return;
    }
    const [origin, target] = unresolvedKeyframes;
    const originType = findDimensionValueType(origin);
    const targetType = findDimensionValueType(target);
    if (originType === targetType)
      return;
    if (isNumOrPxType(originType) && isNumOrPxType(targetType)) {
      for (let i = 0; i < unresolvedKeyframes.length; i++) {
        const value = unresolvedKeyframes[i];
        if (typeof value === "string") {
          unresolvedKeyframes[i] = parseFloat(value);
        }
      }
    } else {
      this.needsMeasurement = true;
    }
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes, name } = this;
    const noneKeyframeIndexes = [];
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      if (isNone(unresolvedKeyframes[i])) {
        noneKeyframeIndexes.push(i);
      }
    }
    if (noneKeyframeIndexes.length) {
      makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
    }
  }
  measureInitialState() {
    const { element, unresolvedKeyframes, name } = this;
    if (!element || !element.current)
      return;
    if (name === "height") {
      this.suspendedScrollY = window.pageYOffset;
    }
    this.measuredOrigin = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
    unresolvedKeyframes[0] = this.measuredOrigin;
    const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
    if (measureKeyframe !== void 0) {
      element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
    }
  }
  measureEndState() {
    var _a;
    const { element, name, unresolvedKeyframes } = this;
    if (!element || !element.current)
      return;
    const value = element.getValue(name);
    value && value.jump(this.measuredOrigin, false);
    const finalKeyframeIndex = unresolvedKeyframes.length - 1;
    const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
    unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
    if (finalKeyframe !== null && this.finalKeyframe === void 0) {
      this.finalKeyframe = finalKeyframe;
    }
    if ((_a = this.removedTransforms) === null || _a === void 0 ? void 0 : _a.length) {
      this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
        element.getValue(unsetTransformName).set(unsetTransformValue);
      });
    }
    this.resolveNoneKeyframes();
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs
var isAnimatable = (value, name) => {
  if (name === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && // It's animatable if we have a string
  (complex.test(value) || value === "0") && // And it contains numbers and/or colors
  !value.startsWith("url(")) {
    return true;
  }
  return false;
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/animators/utils/can-animate.mjs
function hasKeyframesChanged(keyframes2) {
  const current = keyframes2[0];
  if (keyframes2.length === 1)
    return true;
  for (let i = 0; i < keyframes2.length; i++) {
    if (keyframes2[i] !== current)
      return true;
  }
}
function canAnimate(keyframes2, name, type, velocity) {
  const originKeyframe = keyframes2[0];
  if (originKeyframe === null)
    return false;
  if (name === "display" || name === "visibility")
    return true;
  const targetKeyframe = keyframes2[keyframes2.length - 1];
  const isOriginAnimatable = isAnimatable(originKeyframe, name);
  const isTargetAnimatable = isAnimatable(targetKeyframe, name);
  warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
  if (!isOriginAnimatable || !isTargetAnimatable) {
    return false;
  }
  return hasKeyframesChanged(keyframes2) || (type === "spring" || isGenerator(type)) && velocity;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs
var isNotNull = (value) => value !== null;
function getFinalKeyframe(keyframes2, { repeat, repeatType = "loop" }, finalKeyframe) {
  const resolvedKeyframes = keyframes2.filter(isNotNull);
  const index = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
  return !index || finalKeyframe === void 0 ? resolvedKeyframes[index] : finalKeyframe;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/animators/BaseAnimation.mjs
var MAX_RESOLVE_DELAY = 40;
var BaseAnimation = class {
  constructor({ autoplay = true, delay: delay2 = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", ...options }) {
    this.isStopped = false;
    this.hasAttemptedResolve = false;
    this.createdAt = time.now();
    this.options = {
      autoplay,
      delay: delay2,
      type,
      repeat,
      repeatDelay,
      repeatType,
      ...options
    };
    this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    if (!this.resolvedAt)
      return this.createdAt;
    return this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    if (!this._resolved && !this.hasAttemptedResolve) {
      flushKeyframeResolvers();
    }
    return this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(keyframes2, finalKeyframe) {
    this.resolvedAt = time.now();
    this.hasAttemptedResolve = true;
    const { name, type, velocity, delay: delay2, onComplete, onUpdate, isGenerator: isGenerator2 } = this.options;
    if (!isGenerator2 && !canAnimate(keyframes2, name, type, velocity)) {
      if (instantAnimationState.current || !delay2) {
        onUpdate && onUpdate(getFinalKeyframe(keyframes2, this.options, finalKeyframe));
        onComplete && onComplete();
        this.resolveFinishedPromise();
        return;
      } else {
        this.options.duration = 0;
      }
    }
    const resolvedAnimation = this.initPlayback(keyframes2, finalKeyframe);
    if (resolvedAnimation === false)
      return;
    this._resolved = {
      keyframes: keyframes2,
      finalKeyframe,
      ...resolvedAnimation
    };
    this.onPostResolved();
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(resolve, reject) {
    return this.currentFinishedPromise.then(resolve, reject);
  }
  flatten() {
    this.options.type = "keyframes";
    this.options.ease = "linear";
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((resolve) => {
      this.resolveFinishedPromise = resolve;
    });
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/mix/number.mjs
var mixNumber = (from, to, progress2) => {
  return from + (to - from) * progress2;
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/hsla-to-rgba.mjs
function hueToRgb(p, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p + (q - p) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/mix/immediate.mjs
function mixImmediate(a, b) {
  return (p) => p > 0 ? b : a;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/mix/color.mjs
var mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  const expo = v * (to * to - fromExpo) + fromExpo;
  return expo < 0 ? 0 : Math.sqrt(expo);
};
var colorTypes = [hex, rgba, hsla];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color2) {
  const type = getColorType(color2);
  warning(Boolean(type), `'${color2}' is not an animatable color. Use the equivalent color code instead.`);
  if (!Boolean(type))
    return false;
  let model = type.parse(color2);
  if (type === hsla) {
    model = hslaToRgba(model);
  }
  return model;
}
var mixColor = (from, to) => {
  const fromRGBA = asRGBA(from);
  const toRGBA = asRGBA(to);
  if (!fromRGBA || !toRGBA) {
    return mixImmediate(from, to);
  }
  const blended = { ...fromRGBA };
  return (v) => {
    blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
    blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
    blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
    blended.alpha = mixNumber(fromRGBA.alpha, toRGBA.alpha, v);
    return rgba.transform(blended);
  };
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/pipe.mjs
var combineFunctions = (a, b) => (v) => b(a(v));
var pipe = (...transformers) => transformers.reduce(combineFunctions);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/mix/visibility.mjs
var invisibleValues = /* @__PURE__ */ new Set(["none", "hidden"]);
function mixVisibility(origin, target) {
  if (invisibleValues.has(origin)) {
    return (p) => p <= 0 ? origin : target;
  } else {
    return (p) => p >= 1 ? target : origin;
  }
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/mix/complex.mjs
function mixNumber2(a, b) {
  return (p) => mixNumber(a, b, p);
}
function getMixer(a) {
  if (typeof a === "number") {
    return mixNumber2;
  } else if (typeof a === "string") {
    return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
  } else if (Array.isArray(a)) {
    return mixArray;
  } else if (typeof a === "object") {
    return color.test(a) ? mixColor : mixObject;
  }
  return mixImmediate;
}
function mixArray(a, b) {
  const output = [...a];
  const numValues = output.length;
  const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
  return (p) => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](p);
    }
    return output;
  };
}
function mixObject(a, b) {
  const output = { ...a, ...b };
  const blendValue = {};
  for (const key in output) {
    if (a[key] !== void 0 && b[key] !== void 0) {
      blendValue[key] = getMixer(a[key])(a[key], b[key]);
    }
  }
  return (v) => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }
    return output;
  };
}
function matchOrder(origin, target) {
  var _a;
  const orderedOrigin = [];
  const pointers = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < target.values.length; i++) {
    const type = target.types[i];
    const originIndex = origin.indexes[type][pointers[type]];
    const originValue = (_a = origin.values[originIndex]) !== null && _a !== void 0 ? _a : 0;
    orderedOrigin[i] = originValue;
    pointers[type]++;
  }
  return orderedOrigin;
}
var mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyseComplexValue(origin);
  const targetStats = analyseComplexValue(target);
  const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
  if (canInterpolate) {
    if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) {
      return mixVisibility(origin, target);
    }
    return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
  } else {
    warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
    return mixImmediate(origin, target);
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/mix/index.mjs
function mix(from, to, p) {
  if (typeof from === "number" && typeof to === "number" && typeof p === "number") {
    return mixNumber(from, to, p);
  }
  const mixer = getMixer(from);
  return mixer(from, to);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/generators/utils/velocity.mjs
var velocitySampleDuration = 5;
function calcGeneratorVelocity(resolveValue, t, current) {
  const prevT = Math.max(t - velocitySampleDuration, 0);
  return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/generators/spring/defaults.mjs
var springDefaults = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/generators/spring/find.mjs
var safeMin = 1e-3;
function findSpring({ duration = springDefaults.duration, bounce = springDefaults.bounce, velocity = springDefaults.velocity, mass = springDefaults.mass }) {
  let envelope;
  let derivative;
  warning(duration <= secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less");
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp(springDefaults.minDamping, springDefaults.maxDamping, dampingRatio);
  duration = clamp(springDefaults.minDuration, springDefaults.maxDuration, millisecondsToSeconds(duration));
  if (dampingRatio < 1) {
    envelope = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const a = exponentialDecay - velocity;
      const b = calcAngularFreq(undampedFreq2, dampingRatio);
      const c = Math.exp(-delta);
      return safeMin - a / b * c;
    };
    derivative = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const d = delta * velocity + velocity;
      const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f = Math.exp(-delta);
      const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g;
    };
  } else {
    envelope = (undampedFreq2) => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = (undampedFreq2 - velocity) * duration + 1;
      return -safeMin + a * b;
    };
    derivative = (undampedFreq2) => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = (velocity - undampedFreq2) * (duration * duration);
      return a * b;
    };
  }
  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = secondsToMilliseconds(duration);
  if (isNaN(undampedFreq)) {
    return {
      stiffness: springDefaults.stiffness,
      damping: springDefaults.damping,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs
var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
  return keys.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = {
    velocity: springDefaults.velocity,
    stiffness: springDefaults.stiffness,
    damping: springDefaults.damping,
    mass: springDefaults.mass,
    isResolvedFromDuration: false,
    ...options
  };
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    if (options.visualDuration) {
      const visualDuration = options.visualDuration;
      const root = 2 * Math.PI / (visualDuration * 1.2);
      const stiffness = root * root;
      const damping = 2 * clamp(0.05, 1, 1 - (options.bounce || 0)) * Math.sqrt(stiffness);
      springOptions = {
        ...springOptions,
        mass: springDefaults.mass,
        stiffness,
        damping
      };
    } else {
      const derived = findSpring(options);
      springOptions = {
        ...springOptions,
        ...derived,
        mass: springDefaults.mass
      };
      springOptions.isResolvedFromDuration = true;
    }
  }
  return springOptions;
}
function spring(optionsOrVisualDuration = springDefaults.visualDuration, bounce = springDefaults.bounce) {
  const options = typeof optionsOrVisualDuration !== "object" ? {
    visualDuration: optionsOrVisualDuration,
    keyframes: [0, 1],
    bounce
  } : optionsOrVisualDuration;
  let { restSpeed, restDelta } = options;
  const origin = options.keyframes[0];
  const target = options.keyframes[options.keyframes.length - 1];
  const state2 = { done: false, value: origin };
  const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions({
    ...options,
    velocity: -millisecondsToSeconds(options.velocity || 0)
  });
  const initialVelocity = velocity || 0;
  const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
  const initialDelta = target - origin;
  const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
  const isGranularScale = Math.abs(initialDelta) < 5;
  restSpeed || (restSpeed = isGranularScale ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default);
  restDelta || (restDelta = isGranularScale ? springDefaults.restDelta.granular : springDefaults.restDelta.default);
  let resolveSpring;
  if (dampingRatio < 1) {
    const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
    resolveSpring = (t) => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
    };
  } else if (dampingRatio === 1) {
    resolveSpring = (t) => target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
  } else {
    const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
    resolveSpring = (t) => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      const freqForT = Math.min(dampedAngularFreq * t, 300);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
    };
  }
  const generator = {
    calculatedDuration: isResolvedFromDuration ? duration || null : null,
    next: (t) => {
      const current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        let currentVelocity = 0;
        if (dampingRatio < 1) {
          currentVelocity = t === 0 ? secondsToMilliseconds(initialVelocity) : calcGeneratorVelocity(resolveSpring, t, current);
        }
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
        state2.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state2.done = t >= duration;
      }
      state2.value = state2.done ? target : current;
      return state2;
    },
    toString: () => {
      const calculatedDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
      const easing = generateLinearEasing((progress2) => generator.next(calculatedDuration * progress2).value, calculatedDuration, 30);
      return calculatedDuration + "ms " + easing;
    }
  };
  return generator;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/generators/inertia.mjs
function inertia({ keyframes: keyframes2, velocity = 0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min: min2, max: max2, restDelta = 0.5, restSpeed }) {
  const origin = keyframes2[0];
  const state2 = {
    done: false,
    value: origin
  };
  const isOutOfBounds = (v) => min2 !== void 0 && v < min2 || max2 !== void 0 && v > max2;
  const nearestBoundary = (v) => {
    if (min2 === void 0)
      return max2;
    if (max2 === void 0)
      return min2;
    return Math.abs(min2 - v) < Math.abs(max2 - v) ? min2 : max2;
  };
  let amplitude = power * velocity;
  const ideal = origin + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal)
    amplitude = target - origin;
  const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
  const calcLatest = (t) => target + calcDelta(t);
  const applyFriction = (t) => {
    const delta = calcDelta(t);
    const latest = calcLatest(t);
    state2.done = Math.abs(delta) <= restDelta;
    state2.value = state2.done ? target : latest;
  };
  let timeReachedBoundary;
  let spring$1;
  const checkCatchBoundary = (t) => {
    if (!isOutOfBounds(state2.value))
      return;
    timeReachedBoundary = t;
    spring$1 = spring({
      keyframes: [state2.value, nearestBoundary(state2.value)],
      velocity: calcGeneratorVelocity(calcLatest, t, state2.value),
      // TODO: This should be passing * 1000
      damping: bounceDamping,
      stiffness: bounceStiffness,
      restDelta,
      restSpeed
    });
  };
  checkCatchBoundary(0);
  return {
    calculatedDuration: null,
    next: (t) => {
      let hasUpdatedFrame = false;
      if (!spring$1 && timeReachedBoundary === void 0) {
        hasUpdatedFrame = true;
        applyFriction(t);
        checkCatchBoundary(t);
      }
      if (timeReachedBoundary !== void 0 && t >= timeReachedBoundary) {
        return spring$1.next(t - timeReachedBoundary);
      } else {
        !hasUpdatedFrame && applyFriction(t);
        return state2;
      }
    }
  };
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/easing/ease.mjs
var easeIn = cubicBezier(0.42, 0, 1, 1);
var easeOut = cubicBezier(0, 0, 0.58, 1);
var easeInOut = cubicBezier(0.42, 0, 0.58, 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/easing/utils/is-easing-array.mjs
var isEasingArray = (ease2) => {
  return Array.isArray(ease2) && typeof ease2[0] !== "number";
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/easing/utils/map.mjs
var easingLookup = {
  linear: noop,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate
};
var easingDefinitionToFunction = (definition) => {
  if (isBezierDefinition(definition)) {
    invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
    const [x1, y1, x2, y2] = definition;
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    invariant(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`);
    return easingLookup[definition];
  }
  return definition;
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/interpolate.mjs
function createMixers(output, ease2, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || mix;
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);
    if (ease2) {
      const easingFunction = Array.isArray(ease2) ? ease2[i] || noop : ease2;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function interpolate(input, output, { clamp: isClamp = true, ease: ease2, mixer } = {}) {
  const inputLength = input.length;
  invariant(inputLength === output.length, "Both input and output ranges must be the same length");
  if (inputLength === 1)
    return () => output[0];
  if (inputLength === 2 && output[0] === output[1])
    return () => output[1];
  const isZeroDeltaRange = input[0] === input[1];
  if (input[0] > input[inputLength - 1]) {
    input = [...input].reverse();
    output = [...output].reverse();
  }
  const mixers = createMixers(output, ease2, mixer);
  const numMixers = mixers.length;
  const interpolator = (v) => {
    if (isZeroDeltaRange && v < input[0])
      return output[0];
    let i = 0;
    if (numMixers > 1) {
      for (; i < input.length - 2; i++) {
        if (v < input[i + 1])
          break;
      }
    }
    const progressInRange = progress(input[i], input[i + 1], v);
    return mixers[i](progressInRange);
  };
  return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/offsets/fill.mjs
function fillOffset(offset, remaining) {
  const min2 = offset[offset.length - 1];
  for (let i = 1; i <= remaining; i++) {
    const offsetProgress = progress(0, remaining, i);
    offset.push(mixNumber(min2, 1, offsetProgress));
  }
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/offsets/default.mjs
function defaultOffset(arr) {
  const offset = [0];
  fillOffset(offset, arr.length - 1);
  return offset;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/offsets/time.mjs
function convertOffsetToTimes(offset, duration) {
  return offset.map((o) => o * duration);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/generators/keyframes.mjs
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease: ease2 = "easeInOut" }) {
  const easingFunctions = isEasingArray(ease2) ? ease2.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease2);
  const state2 = {
    done: false,
    value: keyframeValues[0]
  };
  const absoluteTimes = convertOffsetToTimes(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues),
    duration
  );
  const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
    ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
  });
  return {
    calculatedDuration: duration,
    next: (t) => {
      state2.value = mapTimeToKeyframe(t);
      state2.done = t >= duration;
      return state2;
    }
  };
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/animators/drivers/driver-frameloop.mjs
var frameloopDriver = (update) => {
  const passTimestamp = ({ timestamp }) => update(timestamp);
  return {
    start: () => frame.update(passTimestamp, true),
    stop: () => cancelFrame(passTimestamp),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => frameData.isProcessing ? frameData.timestamp : time.now()
  };
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/animators/MainThreadAnimation.mjs
var generators = {
  decay: inertia,
  inertia,
  tween: keyframes,
  keyframes,
  spring
};
var percentToProgress = (percent2) => percent2 / 100;
var MainThreadAnimation = class extends BaseAnimation {
  constructor(options) {
    super(options);
    this.holdTime = null;
    this.cancelTime = null;
    this.currentTime = 0;
    this.playbackSpeed = 1;
    this.pendingPlayState = "running";
    this.startTime = null;
    this.state = "idle";
    this.stop = () => {
      this.resolver.cancel();
      this.isStopped = true;
      if (this.state === "idle")
        return;
      this.teardown();
      const { onStop } = this.options;
      onStop && onStop();
    };
    const { name, motionValue: motionValue2, element, keyframes: keyframes2 } = this.options;
    const KeyframeResolver$1 = (element === null || element === void 0 ? void 0 : element.KeyframeResolver) || KeyframeResolver;
    const onResolved = (resolvedKeyframes, finalKeyframe) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe);
    this.resolver = new KeyframeResolver$1(keyframes2, onResolved, name, motionValue2, element);
    this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten();
    if (this._resolved) {
      Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
    }
  }
  initPlayback(keyframes$1) {
    const { type = "keyframes", repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = this.options;
    const generatorFactory = isGenerator(type) ? type : generators[type] || keyframes;
    let mapPercentToKeyframes;
    let mirroredGenerator;
    if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
      if (true) {
        invariant(keyframes$1.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`);
      }
      mapPercentToKeyframes = pipe(percentToProgress, mix(keyframes$1[0], keyframes$1[1]));
      keyframes$1 = [0, 100];
    }
    const generator = generatorFactory({ ...this.options, keyframes: keyframes$1 });
    if (repeatType === "mirror") {
      mirroredGenerator = generatorFactory({
        ...this.options,
        keyframes: [...keyframes$1].reverse(),
        velocity: -velocity
      });
    }
    if (generator.calculatedDuration === null) {
      generator.calculatedDuration = calcGeneratorDuration(generator);
    }
    const { calculatedDuration } = generator;
    const resolvedDuration = calculatedDuration + repeatDelay;
    const totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
    return {
      generator,
      mirroredGenerator,
      mapPercentToKeyframes,
      calculatedDuration,
      resolvedDuration,
      totalDuration
    };
  }
  onPostResolved() {
    const { autoplay = true } = this.options;
    this.play();
    if (this.pendingPlayState === "paused" || !autoplay) {
      this.pause();
    } else {
      this.state = this.pendingPlayState;
    }
  }
  tick(timestamp, sample = false) {
    const { resolved } = this;
    if (!resolved) {
      const { keyframes: keyframes3 } = this.options;
      return { done: true, value: keyframes3[keyframes3.length - 1] };
    }
    const { finalKeyframe, generator, mirroredGenerator, mapPercentToKeyframes, keyframes: keyframes2, calculatedDuration, totalDuration, resolvedDuration } = resolved;
    if (this.startTime === null)
      return generator.next(0);
    const { delay: delay2, repeat, repeatType, repeatDelay, onUpdate } = this.options;
    if (this.speed > 0) {
      this.startTime = Math.min(this.startTime, timestamp);
    } else if (this.speed < 0) {
      this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
    }
    if (sample) {
      this.currentTime = timestamp;
    } else if (this.holdTime !== null) {
      this.currentTime = this.holdTime;
    } else {
      this.currentTime = Math.round(timestamp - this.startTime) * this.speed;
    }
    const timeWithoutDelay = this.currentTime - delay2 * (this.speed >= 0 ? 1 : -1);
    const isInDelayPhase = this.speed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
    this.currentTime = Math.max(timeWithoutDelay, 0);
    if (this.state === "finished" && this.holdTime === null) {
      this.currentTime = totalDuration;
    }
    let elapsed = this.currentTime;
    let frameGenerator = generator;
    if (repeat) {
      const progress2 = Math.min(this.currentTime, totalDuration) / resolvedDuration;
      let currentIteration = Math.floor(progress2);
      let iterationProgress = progress2 % 1;
      if (!iterationProgress && progress2 >= 1) {
        iterationProgress = 1;
      }
      iterationProgress === 1 && currentIteration--;
      currentIteration = Math.min(currentIteration, repeat + 1);
      const isOddIteration = Boolean(currentIteration % 2);
      if (isOddIteration) {
        if (repeatType === "reverse") {
          iterationProgress = 1 - iterationProgress;
          if (repeatDelay) {
            iterationProgress -= repeatDelay / resolvedDuration;
          }
        } else if (repeatType === "mirror") {
          frameGenerator = mirroredGenerator;
        }
      }
      elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
    }
    const state2 = isInDelayPhase ? { done: false, value: keyframes2[0] } : frameGenerator.next(elapsed);
    if (mapPercentToKeyframes) {
      state2.value = mapPercentToKeyframes(state2.value);
    }
    let { done } = state2;
    if (!isInDelayPhase && calculatedDuration !== null) {
      done = this.speed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
    }
    const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
    if (isAnimationFinished && finalKeyframe !== void 0) {
      state2.value = getFinalKeyframe(keyframes2, this.options, finalKeyframe);
    }
    if (onUpdate) {
      onUpdate(state2.value);
    }
    if (isAnimationFinished) {
      this.finish();
    }
    return state2;
  }
  get duration() {
    const { resolved } = this;
    return resolved ? millisecondsToSeconds(resolved.calculatedDuration) : 0;
  }
  get time() {
    return millisecondsToSeconds(this.currentTime);
  }
  set time(newTime) {
    newTime = secondsToMilliseconds(newTime);
    this.currentTime = newTime;
    if (this.holdTime !== null || this.speed === 0) {
      this.holdTime = newTime;
    } else if (this.driver) {
      this.startTime = this.driver.now() - newTime / this.speed;
    }
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(newSpeed) {
    const hasChanged = this.playbackSpeed !== newSpeed;
    this.playbackSpeed = newSpeed;
    if (hasChanged) {
      this.time = millisecondsToSeconds(this.currentTime);
    }
  }
  play() {
    if (!this.resolver.isScheduled) {
      this.resolver.resume();
    }
    if (!this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver = frameloopDriver, onPlay, startTime } = this.options;
    if (!this.driver) {
      this.driver = driver((timestamp) => this.tick(timestamp));
    }
    onPlay && onPlay();
    const now2 = this.driver.now();
    if (this.holdTime !== null) {
      this.startTime = now2 - this.holdTime;
    } else if (!this.startTime) {
      this.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
    } else if (this.state === "finished") {
      this.startTime = now2;
    }
    if (this.state === "finished") {
      this.updateFinishedPromise();
    }
    this.cancelTime = this.startTime;
    this.holdTime = null;
    this.state = "running";
    this.driver.start();
  }
  pause() {
    var _a;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused";
    this.holdTime = (_a = this.currentTime) !== null && _a !== void 0 ? _a : 0;
  }
  complete() {
    if (this.state !== "running") {
      this.play();
    }
    this.pendingPlayState = this.state = "finished";
    this.holdTime = null;
  }
  finish() {
    this.teardown();
    this.state = "finished";
    const { onComplete } = this.options;
    onComplete && onComplete();
  }
  cancel() {
    if (this.cancelTime !== null) {
      this.tick(this.cancelTime);
    }
    this.teardown();
    this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle";
    this.stopDriver();
    this.resolveFinishedPromise();
    this.updateFinishedPromise();
    this.startTime = this.cancelTime = null;
    this.resolver.cancel();
  }
  stopDriver() {
    if (!this.driver)
      return;
    this.driver.stop();
    this.driver = void 0;
  }
  sample(time2) {
    this.startTime = 0;
    return this.tick(time2, true);
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/animators/utils/accelerated-values.mjs
var acceleratedValues = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/animators/waapi/index.mjs
function startWaapiAnimation(element, valueName, keyframes2, { delay: delay2 = 0, duration = 300, repeat = 0, repeatType = "loop", ease: ease2 = "easeInOut", times } = {}) {
  const keyframeOptions = { [valueName]: keyframes2 };
  if (times)
    keyframeOptions.offset = times;
  const easing = mapEasingToNativeEasing(ease2, duration);
  if (Array.isArray(easing))
    keyframeOptions.easing = easing;
  return element.animate(keyframeOptions, {
    delay: delay2,
    duration,
    easing: !Array.isArray(easing) ? easing : "linear",
    fill: "both",
    iterations: repeat + 1,
    direction: repeatType === "reverse" ? "alternate" : "normal"
  });
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-waapi.mjs
var supportsWaapi = memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/animators/AcceleratedAnimation.mjs
var sampleDelta = 10;
var maxDuration = 2e4;
function requiresPregeneratedKeyframes(options) {
  return isGenerator(options.type) || options.type === "spring" || !isWaapiSupportedEasing(options.ease);
}
function pregenerateKeyframes(keyframes2, options) {
  const sampleAnimation = new MainThreadAnimation({
    ...options,
    keyframes: keyframes2,
    repeat: 0,
    delay: 0,
    isGenerator: true
  });
  let state2 = { done: false, value: keyframes2[0] };
  const pregeneratedKeyframes = [];
  let t = 0;
  while (!state2.done && t < maxDuration) {
    state2 = sampleAnimation.sample(t);
    pregeneratedKeyframes.push(state2.value);
    t += sampleDelta;
  }
  return {
    times: void 0,
    keyframes: pregeneratedKeyframes,
    duration: t - sampleDelta,
    ease: "linear"
  };
}
var unsupportedEasingFunctions = {
  anticipate,
  backInOut,
  circInOut
};
function isUnsupportedEase(key) {
  return key in unsupportedEasingFunctions;
}
var AcceleratedAnimation = class extends BaseAnimation {
  constructor(options) {
    super(options);
    const { name, motionValue: motionValue2, element, keyframes: keyframes2 } = this.options;
    this.resolver = new DOMKeyframesResolver(keyframes2, (resolvedKeyframes, finalKeyframe) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe), name, motionValue2, element);
    this.resolver.scheduleResolve();
  }
  initPlayback(keyframes2, finalKeyframe) {
    let { duration = 300, times, ease: ease2, type, motionValue: motionValue2, name, startTime } = this.options;
    if (!motionValue2.owner || !motionValue2.owner.current) {
      return false;
    }
    if (typeof ease2 === "string" && supportsLinearEasing() && isUnsupportedEase(ease2)) {
      ease2 = unsupportedEasingFunctions[ease2];
    }
    if (requiresPregeneratedKeyframes(this.options)) {
      const { onComplete, onUpdate, motionValue: motionValue3, element, ...options } = this.options;
      const pregeneratedAnimation = pregenerateKeyframes(keyframes2, options);
      keyframes2 = pregeneratedAnimation.keyframes;
      if (keyframes2.length === 1) {
        keyframes2[1] = keyframes2[0];
      }
      duration = pregeneratedAnimation.duration;
      times = pregeneratedAnimation.times;
      ease2 = pregeneratedAnimation.ease;
      type = "keyframes";
    }
    const animation = startWaapiAnimation(motionValue2.owner.current, name, keyframes2, { ...this.options, duration, times, ease: ease2 });
    animation.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
    if (this.pendingTimeline) {
      attachTimeline(animation, this.pendingTimeline);
      this.pendingTimeline = void 0;
    } else {
      animation.onfinish = () => {
        const { onComplete } = this.options;
        motionValue2.set(getFinalKeyframe(keyframes2, this.options, finalKeyframe));
        onComplete && onComplete();
        this.cancel();
        this.resolveFinishedPromise();
      };
    }
    return {
      animation,
      duration,
      times,
      type,
      ease: ease2,
      keyframes: keyframes2
    };
  }
  get duration() {
    const { resolved } = this;
    if (!resolved)
      return 0;
    const { duration } = resolved;
    return millisecondsToSeconds(duration);
  }
  get time() {
    const { resolved } = this;
    if (!resolved)
      return 0;
    const { animation } = resolved;
    return millisecondsToSeconds(animation.currentTime || 0);
  }
  set time(newTime) {
    const { resolved } = this;
    if (!resolved)
      return;
    const { animation } = resolved;
    animation.currentTime = secondsToMilliseconds(newTime);
  }
  get speed() {
    const { resolved } = this;
    if (!resolved)
      return 1;
    const { animation } = resolved;
    return animation.playbackRate;
  }
  set speed(newSpeed) {
    const { resolved } = this;
    if (!resolved)
      return;
    const { animation } = resolved;
    animation.playbackRate = newSpeed;
  }
  get state() {
    const { resolved } = this;
    if (!resolved)
      return "idle";
    const { animation } = resolved;
    return animation.playState;
  }
  get startTime() {
    const { resolved } = this;
    if (!resolved)
      return null;
    const { animation } = resolved;
    return animation.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(timeline) {
    if (!this._resolved) {
      this.pendingTimeline = timeline;
    } else {
      const { resolved } = this;
      if (!resolved)
        return noop;
      const { animation } = resolved;
      attachTimeline(animation, timeline);
    }
    return noop;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved } = this;
    if (!resolved)
      return;
    const { animation } = resolved;
    if (animation.playState === "finished") {
      this.updateFinishedPromise();
    }
    animation.play();
  }
  pause() {
    const { resolved } = this;
    if (!resolved)
      return;
    const { animation } = resolved;
    animation.pause();
  }
  stop() {
    this.resolver.cancel();
    this.isStopped = true;
    if (this.state === "idle")
      return;
    this.resolveFinishedPromise();
    this.updateFinishedPromise();
    const { resolved } = this;
    if (!resolved)
      return;
    const { animation, keyframes: keyframes2, duration, type, ease: ease2, times } = resolved;
    if (animation.playState === "idle" || animation.playState === "finished") {
      return;
    }
    if (this.time) {
      const { motionValue: motionValue2, onUpdate, onComplete, element, ...options } = this.options;
      const sampleAnimation = new MainThreadAnimation({
        ...options,
        keyframes: keyframes2,
        duration,
        type,
        ease: ease2,
        times,
        isGenerator: true
      });
      const sampleTime = secondsToMilliseconds(this.time);
      motionValue2.setWithVelocity(sampleAnimation.sample(sampleTime - sampleDelta).value, sampleAnimation.sample(sampleTime).value, sampleDelta);
    }
    const { onStop } = this.options;
    onStop && onStop();
    this.cancel();
  }
  complete() {
    const { resolved } = this;
    if (!resolved)
      return;
    resolved.animation.finish();
  }
  cancel() {
    const { resolved } = this;
    if (!resolved)
      return;
    resolved.animation.cancel();
  }
  static supports(options) {
    const { motionValue: motionValue2, name, repeatDelay, repeatType, damping, type } = options;
    if (!motionValue2 || !motionValue2.owner || !(motionValue2.owner.current instanceof HTMLElement)) {
      return false;
    }
    const { onUpdate, transformTemplate } = motionValue2.owner.getProps();
    return supportsWaapi() && name && acceleratedValues.has(name) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !onUpdate && !transformTemplate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
};
var criticallyDampedSpring = (target) => ({
  type: "spring",
  stiffness: 550,
  damping: target === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
});
var keyframesTransition = {
  type: "keyframes",
  duration: 0.8
};
var ease = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
};
var getDefaultTransition = (valueKey, { keyframes: keyframes2 }) => {
  if (keyframes2.length > 2) {
    return keyframesTransition;
  } else if (transformProps.has(valueKey)) {
    return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes2[1]) : underDampedSpring;
  }
  return ease;
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/utils/is-transition-defined.mjs
function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition }) {
  return !!Object.keys(transition).length;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs
var animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
  const valueTransition = getValueTransition(transition, name) || {};
  const delay2 = valueTransition.delay || transition.delay || 0;
  let { elapsed = 0 } = transition;
  elapsed = elapsed - secondsToMilliseconds(delay2);
  let options = {
    keyframes: Array.isArray(target) ? target : [null, target],
    ease: "easeOut",
    velocity: value.getVelocity(),
    ...valueTransition,
    delay: -elapsed,
    onUpdate: (v) => {
      value.set(v);
      valueTransition.onUpdate && valueTransition.onUpdate(v);
    },
    onComplete: () => {
      onComplete();
      valueTransition.onComplete && valueTransition.onComplete();
    },
    name,
    motionValue: value,
    element: isHandoff ? void 0 : element
  };
  if (!isTransitionDefined(valueTransition)) {
    options = {
      ...options,
      ...getDefaultTransition(name, options)
    };
  }
  if (options.duration) {
    options.duration = secondsToMilliseconds(options.duration);
  }
  if (options.repeatDelay) {
    options.repeatDelay = secondsToMilliseconds(options.repeatDelay);
  }
  if (options.from !== void 0) {
    options.keyframes[0] = options.from;
  }
  let shouldSkip = false;
  if (options.type === false || options.duration === 0 && !options.repeatDelay) {
    options.duration = 0;
    if (options.delay === 0) {
      shouldSkip = true;
    }
  }
  if (instantAnimationState.current || MotionGlobalConfig.skipAnimations) {
    shouldSkip = true;
    options.duration = 0;
    options.delay = 0;
  }
  if (shouldSkip && !isHandoff && value.get() !== void 0) {
    const finalKeyframe = getFinalKeyframe(options.keyframes, valueTransition);
    if (finalKeyframe !== void 0) {
      frame.update(() => {
        options.onUpdate(finalKeyframe);
        options.onComplete();
      });
      return new GroupPlaybackControls([]);
    }
  }
  if (!isHandoff && AcceleratedAnimation.supports(options)) {
    return new AcceleratedAnimation(options);
  } else {
    return new MainThreadAnimation(options);
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
  const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay: delay2 = 0, transitionOverride, type } = {}) {
  var _a;
  let { transition = visualElement.getDefaultTransition(), transitionEnd, ...target } = targetAndTransition;
  if (transitionOverride)
    transition = transitionOverride;
  const animations2 = [];
  const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
  for (const key in target) {
    const value = visualElement.getValue(key, (_a = visualElement.latestValues[key]) !== null && _a !== void 0 ? _a : null);
    const valueTarget = target[key];
    if (valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    const valueTransition = {
      delay: delay2,
      ...getValueTransition(transition || {}, key)
    };
    let isHandoff = false;
    if (window.MotionHandoffAnimation) {
      const appearId = getOptimisedAppearId(visualElement);
      if (appearId) {
        const startTime = window.MotionHandoffAnimation(appearId, key, frame);
        if (startTime !== null) {
          valueTransition.startTime = startTime;
          isHandoff = true;
        }
      }
    }
    addValueToWillChange(visualElement, key);
    value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && positionalKeys.has(key) ? { type: false } : valueTransition, visualElement, isHandoff));
    const animation = value.animation;
    if (animation) {
      animations2.push(animation);
    }
  }
  if (transitionEnd) {
    Promise.all(animations2).then(() => {
      frame.update(() => {
        transitionEnd && setTarget(visualElement, transitionEnd);
      });
    });
  }
  return animations2;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs
function animateVariant(visualElement, variant, options = {}) {
  var _a;
  const resolved = resolveVariant(visualElement, variant, options.type === "exit" ? (_a = visualElement.presenceContext) === null || _a === void 0 ? void 0 : _a.custom : void 0);
  let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  const getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options)) : () => Promise.resolve();
  const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
    const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
    return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : () => Promise.resolve();
  const { when } = transition;
  if (when) {
    const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
    return first().then(() => last());
  } else {
    return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
  }
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
  const animations2 = [];
  const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
  const generateStaggerDuration = staggerDirection === 1 ? (i = 0) => i * staggerChildren : (i = 0) => maxStaggerDuration - i * staggerChildren;
  Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach((child, i) => {
    child.notify("AnimationStart", variant);
    animations2.push(animateVariant(child, variant, {
      ...options,
      delay: delayChildren + generateStaggerDuration(i)
    }).then(() => child.notify("AnimationComplete", variant)));
  });
  return Promise.all(animations2);
}
function sortByTreeOrder(a, b) {
  return a.sortNodePosition(b);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs
function animateVisualElement(visualElement, definition, options = {}) {
  visualElement.notify("AnimationStart", definition);
  let animation;
  if (Array.isArray(definition)) {
    const animations2 = definition.map((variant) => animateVariant(visualElement, variant, options));
    animation = Promise.all(animations2);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement, definition, options);
  } else {
    const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
    animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
  }
  return animation.then(() => {
    visualElement.notify("AnimationComplete", definition);
  });
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/utils/get-variant-context.mjs
var numVariantProps = variantProps.length;
function getVariantContext(visualElement) {
  if (!visualElement)
    return void 0;
  if (!visualElement.isControllingVariants) {
    const context2 = visualElement.parent ? getVariantContext(visualElement.parent) || {} : {};
    if (visualElement.props.initial !== void 0) {
      context2.initial = visualElement.props.initial;
    }
    return context2;
  }
  const context = {};
  for (let i = 0; i < numVariantProps; i++) {
    const name = variantProps[i];
    const prop = visualElement.props[name];
    if (isVariantLabel(prop) || prop === false) {
      context[name] = prop;
    }
  }
  return context;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
var reversePriorityOrder = [...variantPriorityOrder].reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
  return (animations2) => Promise.all(animations2.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
  let animate2 = animateList(visualElement);
  let state2 = createState();
  let isInitialRender = true;
  const buildResolvedTypeValues = (type) => (acc, definition) => {
    var _a;
    const resolved = resolveVariant(visualElement, definition, type === "exit" ? (_a = visualElement.presenceContext) === null || _a === void 0 ? void 0 : _a.custom : void 0);
    if (resolved) {
      const { transition, transitionEnd, ...target } = resolved;
      acc = { ...acc, ...target, ...transitionEnd };
    }
    return acc;
  };
  function setAnimateFunction(makeAnimator) {
    animate2 = makeAnimator(visualElement);
  }
  function animateChanges(changedActiveType) {
    const { props } = visualElement;
    const context = getVariantContext(visualElement.parent) || {};
    const animations2 = [];
    const removedKeys = /* @__PURE__ */ new Set();
    let encounteredKeys = {};
    let removedVariantIndex = Infinity;
    for (let i = 0; i < numAnimationTypes; i++) {
      const type = reversePriorityOrder[i];
      const typeState = state2[type];
      const prop = props[type] !== void 0 ? props[type] : context[type];
      const propIsVariant = isVariantLabel(prop);
      const activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false)
        removedVariantIndex = i;
      let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) {
        isInherited = false;
      }
      typeState.protectedKeys = { ...encounteredKeys };
      if (
        // If it isn't active and hasn't *just* been set as inactive
        !typeState.isActive && activeDelta === null || // If we didn't and don't have any defined prop for this animation type
        !prop && !typeState.prevProp || // Or if the prop doesn't define an animation
        isAnimationControls(prop) || typeof prop === "boolean"
      ) {
        continue;
      }
      const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      let shouldAnimateType = variantDidChange || // If we're making this variant active, we want to always make it active
      type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || // If we removed a higher-priority variant (i is in reverse order)
      i > removedVariantIndex && propIsVariant;
      let handledRemovedValues = false;
      const definitionList = Array.isArray(prop) ? prop : [prop];
      let resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
      if (activeDelta === false)
        resolvedValues = {};
      const { prevResolvedValues = {} } = typeState;
      const allKeys = {
        ...prevResolvedValues,
        ...resolvedValues
      };
      const markToAnimate = (key) => {
        shouldAnimateType = true;
        if (removedKeys.has(key)) {
          handledRemovedValues = true;
          removedKeys.delete(key);
        }
        typeState.needsAnimating[key] = true;
        const motionValue2 = visualElement.getValue(key);
        if (motionValue2)
          motionValue2.liveStyle = false;
      };
      for (const key in allKeys) {
        const next = resolvedValues[key];
        const prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key))
          continue;
        let valueHasChanged = false;
        if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
          valueHasChanged = !shallowCompare(next, prev);
        } else {
          valueHasChanged = next !== prev;
        }
        if (valueHasChanged) {
          if (next !== void 0 && next !== null) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== void 0 && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      if (typeState.isActive) {
        encounteredKeys = { ...encounteredKeys, ...resolvedValues };
      }
      if (isInitialRender && visualElement.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      const willAnimateViaParent = isInherited && variantDidChange;
      const needsAnimating = !willAnimateViaParent || handledRemovedValues;
      if (shouldAnimateType && needsAnimating) {
        animations2.push(...definitionList.map((animation) => ({
          animation,
          options: { type }
        })));
      }
    }
    if (removedKeys.size) {
      const fallbackAnimation = {};
      removedKeys.forEach((key) => {
        const fallbackTarget = visualElement.getBaseTarget(key);
        const motionValue2 = visualElement.getValue(key);
        if (motionValue2)
          motionValue2.liveStyle = true;
        fallbackAnimation[key] = fallbackTarget !== null && fallbackTarget !== void 0 ? fallbackTarget : null;
      });
      animations2.push({ animation: fallbackAnimation });
    }
    let shouldAnimate = Boolean(animations2.length);
    if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate2(animations2) : Promise.resolve();
  }
  function setActive(type, isActive) {
    var _a;
    if (state2[type].isActive === isActive)
      return Promise.resolve();
    (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
      var _a2;
      return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
    });
    state2[type].isActive = isActive;
    const animations2 = animateChanges(type);
    for (const key in state2) {
      state2[key].protectedKeys = {};
    }
    return animations2;
  }
  return {
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: () => state2,
    reset: () => {
      state2 = createState();
      isInitialRender = true;
    }
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (Array.isArray(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive = false) {
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  return {
    animate: createTypeState(true),
    whileInView: createTypeState(),
    whileHover: createTypeState(),
    whileTap: createTypeState(),
    whileDrag: createTypeState(),
    whileFocus: createTypeState(),
    exit: createTypeState()
  };
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/features/Feature.mjs
var Feature = class {
  constructor(node) {
    this.isMounted = false;
    this.node = node;
  }
  update() {
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
var AnimationFeature = class extends Feature {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(node) {
    super(node);
    node.animationState || (node.animationState = createAnimationState(node));
  }
  updateAnimationControlsSubscription() {
    const { animate: animate2 } = this.node.getProps();
    if (isAnimationControls(animate2)) {
      this.unmountControls = animate2.subscribe(this.node);
    }
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: animate2 } = this.node.getProps();
    const { animate: prevAnimate } = this.node.prevProps || {};
    if (animate2 !== prevAnimate) {
      this.updateAnimationControlsSubscription();
    }
  }
  unmount() {
    var _a;
    this.node.animationState.reset();
    (_a = this.unmountControls) === null || _a === void 0 ? void 0 : _a.call(this);
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs
var id = 0;
var ExitAnimationFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.id = id++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: isPresent2, onExitComplete } = this.node.presenceContext;
    const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || isPresent2 === prevIsPresent) {
      return;
    }
    const exitAnimation = this.node.animationState.setActive("exit", !isPresent2);
    if (onExitComplete && !isPresent2) {
      exitAnimation.then(() => onExitComplete(this.id));
    }
  }
  mount() {
    const { register } = this.node.presenceContext || {};
    if (register) {
      this.unmount = register(this.id);
    }
  }
  unmount() {
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
  animation: {
    Feature: AnimationFeature
  },
  exit: {
    Feature: ExitAnimationFeature
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/events/add-dom-event.mjs
function addDomEvent(target, eventName, handler, options = { passive: true }) {
  target.addEventListener(eventName, handler, options);
  return () => target.removeEventListener(eventName, handler);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/events/event-info.mjs
function extractEventInfo(event) {
  return {
    point: {
      x: event.pageX,
      y: event.pageY
    }
  };
}
var addPointerInfo = (handler) => {
  return (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, eventName, addPointerInfo(handler), options);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/distance.mjs
var distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
  const xDelta = distance(a.x, b.x);
  const yDelta = distance(a.y, b.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var PanSession = class {
  constructor(event, handlers, { transformPagePoint, contextWindow, dragSnapToOrigin = false } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};
    this.contextWindow = window;
    this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance2D(info2.offset, { x: 0, y: 0 }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      const { point: point2 } = info2;
      const { timestamp: timestamp2 } = frameData;
      this.history.push({ ...point2, timestamp: timestamp2 });
      const { onStart, onMove } = this.handlers;
      if (!isPanStarted) {
        onStart && onStart(this.lastMoveEvent, info2);
        this.startEvent = this.lastMoveEvent;
      }
      onMove && onMove(this.lastMoveEvent, info2);
    };
    this.handlePointerMove = (event2, info2) => {
      this.lastMoveEvent = event2;
      this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
      frame.update(this.updatePoint, true);
    };
    this.handlePointerUp = (event2, info2) => {
      this.end();
      const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
      if (this.dragSnapToOrigin)
        resumeAnimation && resumeAnimation();
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
      if (this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }
      onSessionEnd && onSessionEnd(event2, panInfo);
    };
    if (!isPrimaryPointer(event))
      return;
    this.dragSnapToOrigin = dragSnapToOrigin;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    this.contextWindow = contextWindow || window;
    const info = extractEventInfo(event);
    const initialInfo = transformPoint(info, this.transformPagePoint);
    const { point } = initialInfo;
    const { timestamp } = frameData;
    this.history = [{ ...point, timestamp }];
    const { onSessionStart } = handlers;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(handlers) {
    this.handlers = handlers;
  }
  end() {
    this.removeListeners && this.removeListeners();
    cancelFrame(this.updatePoint);
  }
};
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
  return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo({ point }, history) {
  return {
    point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  const time2 = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
  if (time2 === 0) {
    return { x: 0, y: 0 };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time2,
    y: (lastPoint.y - timestampedPoint.y) / time2
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs
var SCALE_PRECISION = 1e-4;
var SCALE_MIN = 1 - SCALE_PRECISION;
var SCALE_MAX = 1 + SCALE_PRECISION;
var TRANSLATE_PRECISION = 0.01;
var TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
var TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
  return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
  delta.origin = origin;
  delta.originPoint = mixNumber(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  delta.translate = mixNumber(target.min, target.max, delta.origin) - delta.originPoint;
  if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) {
    delta.scale = 1;
  }
  if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) {
    delta.translate = 0;
  }
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0);
  calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
}
function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
  calcRelativeAxis(target.x, relative.x, parent.x);
  calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout2, parent) {
  target.min = layout2.min - parent.min;
  target.max = target.min + calcLength(layout2);
}
function calcRelativePosition(target, layout2, parent) {
  calcRelativeAxisPosition(target.x, layout2.x, parent.x);
  calcRelativeAxisPosition(target.y, layout2.y, parent.y);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function applyConstraints(point, { min: min2, max: max2 }, elastic) {
  if (min2 !== void 0 && point < min2) {
    point = elastic ? mixNumber(min2, point, elastic.min) : Math.max(point, min2);
  } else if (max2 !== void 0 && point > max2) {
    point = elastic ? mixNumber(max2, point, elastic.max) : Math.min(point, max2);
  }
  return point;
}
function calcRelativeAxisConstraints(axis, min2, max2) {
  return {
    min: min2 !== void 0 ? axis.min + min2 : void 0,
    max: max2 !== void 0 ? axis.max + max2 - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  let min2 = constraintsAxis.min - layoutAxis.min;
  let max2 = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    [min2, max2] = [max2, min2];
  }
  return { min: min2, max: max2 };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin2(source, target) {
  let origin = 0.5;
  const sourceLength = calcLength(source);
  const targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp(0, 1, origin);
}
function rebaseAxisConstraints(layout2, constraints) {
  const relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout2.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout2.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic = defaultElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/projection/geometry/models.mjs
var createAxisDelta = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
var createDelta = () => ({
  x: createAxisDelta(),
  y: createAxisDelta()
});
var createAxis = () => ({ min: 0, max: 0 });
var createBox = () => ({
  x: createAxis(),
  y: createAxis()
});

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
function convertBoundingBoxToBox({ top, left, right, bottom }) {
  return {
    x: { min: left, max: right },
    y: { min: top, max: bottom }
  };
}
function convertBoxToBoundingBox({ x, y }) {
  return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
function transformBoxPoints(point, transformPoint2) {
  if (!transformPoint2)
    return point;
  const topLeft = transformPoint2({ x: point.left, y: point.top });
  const bottomRight = transformPoint2({ x: point.right, y: point.bottom });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale2) {
  return scale2 === void 0 || scale2 === 1;
}
function hasScale({ scale: scale2, scaleX, scaleY }) {
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
  return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
}
function has2DTranslate(values) {
  return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
  return value && value !== "0%";
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function scalePoint(point, scale2, originPoint) {
  const distanceFromOrigin = point - originPoint;
  const scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point = scalePoint(point, boxScale, originPoint);
  }
  return scalePoint(point, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate = 0, scale2 = 1, originPoint, boxScale) {
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, { x, y }) {
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
var TREE_SCALE_SNAP_MIN = 0.999999999999;
var TREE_SCALE_SNAP_MAX = 1.0000000000001;
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
  const treeLength = treePath.length;
  if (!treeLength)
    return;
  treeScale.x = treeScale.y = 1;
  let node;
  let delta;
  for (let i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    const { visualElement } = node.options;
    if (visualElement && visualElement.props.style && visualElement.props.style.display === "contents") {
      continue;
    }
    if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
      transformBox(box, {
        x: -node.scroll.offset.x,
        y: -node.scroll.offset.y
      });
    }
    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues);
    }
  }
  if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) {
    treeScale.x = 1;
  }
  if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) {
    treeScale.y = 1;
  }
}
function translateAxis(axis, distance2) {
  axis.min = axis.min + distance2;
  axis.max = axis.max + distance2;
}
function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
  const originPoint = mixNumber(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
}
function transformBox(box, transform2) {
  transformAxis(box.x, transform2.x, transform2.scaleX, transform2.scale, transform2.originX);
  transformAxis(box.y, transform2.y, transform2.scaleY, transform2.scale, transform2.originY);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
  const viewportBox = measureViewportBox(element, transformPagePoint);
  const { scroll: scroll2 } = rootProjectionNode2;
  if (scroll2) {
    translateAxis(viewportBox.x, scroll2.offset.x);
    translateAxis(viewportBox.y, scroll2.offset.y);
  }
  return viewportBox;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var getContextWindow = ({ current }) => {
  return current ? current.ownerDocument.defaultView : null;
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var elementDragControls = /* @__PURE__ */ new WeakMap();
var VisualElementDragControls = class {
  constructor(visualElement) {
    this.openDragLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = { x: 0, y: 0 };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.visualElement = visualElement;
  }
  start(originEvent, { snapToCursor = false } = {}) {
    const { presenceContext } = this.visualElement;
    if (presenceContext && presenceContext.isPresent === false)
      return;
    const onSessionStart = (event) => {
      const { dragSnapToOrigin: dragSnapToOrigin2 } = this.getProps();
      dragSnapToOrigin2 ? this.pauseAnimation() : this.stopAnimation();
      if (snapToCursor) {
        this.snapToCursor(extractEventInfo(event).point);
      }
    };
    const onStart = (event, info) => {
      const { drag: drag2, dragPropagation, onDragStart } = this.getProps();
      if (drag2 && !dragPropagation) {
        if (this.openDragLock)
          this.openDragLock();
        this.openDragLock = setDragLock(drag2);
        if (!this.openDragLock)
          return;
      }
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      if (this.visualElement.projection) {
        this.visualElement.projection.isAnimationBlocked = true;
        this.visualElement.projection.target = void 0;
      }
      eachAxis((axis) => {
        let current = this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current)) {
          const { projection } = this.visualElement;
          if (projection && projection.layout) {
            const measuredAxis = projection.layout.layoutBox[axis];
            if (measuredAxis) {
              const length = calcLength(measuredAxis);
              current = length * (parseFloat(current) / 100);
            }
          }
        }
        this.originPoint[axis] = current;
      });
      if (onDragStart) {
        frame.postRender(() => onDragStart(event, info));
      }
      addValueToWillChange(this.visualElement, "transform");
      const { animationState } = this.visualElement;
      animationState && animationState.setActive("whileDrag", true);
    };
    const onMove = (event, info) => {
      const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
      if (!dragPropagation && !this.openDragLock)
        return;
      const { offset } = info;
      if (dragDirectionLock && this.currentDirection === null) {
        this.currentDirection = getCurrentDirection(offset);
        if (this.currentDirection !== null) {
          onDirectionLock && onDirectionLock(this.currentDirection);
        }
        return;
      }
      this.updateAxis("x", info.point, offset);
      this.updateAxis("y", info.point, offset);
      this.visualElement.render();
      onDrag && onDrag(event, info);
    };
    const onSessionEnd = (event, info) => this.stop(event, info);
    const resumeAnimation = () => eachAxis((axis) => {
      var _a;
      return this.getAnimationState(axis) === "paused" && ((_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.play());
    });
    const { dragSnapToOrigin } = this.getProps();
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd,
      resumeAnimation
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin,
      contextWindow: getContextWindow(this.visualElement)
    });
  }
  stop(event, info) {
    const isDragging2 = this.isDragging;
    this.cancel();
    if (!isDragging2)
      return;
    const { velocity } = info;
    this.startAnimation(velocity);
    const { onDragEnd } = this.getProps();
    if (onDragEnd) {
      frame.postRender(() => onDragEnd(event, info));
    }
  }
  cancel() {
    this.isDragging = false;
    const { projection, animationState } = this.visualElement;
    if (projection) {
      projection.isAnimationBlocked = false;
    }
    this.panSession && this.panSession.end();
    this.panSession = void 0;
    const { dragPropagation } = this.getProps();
    if (!dragPropagation && this.openDragLock) {
      this.openDragLock();
      this.openDragLock = null;
    }
    animationState && animationState.setActive("whileDrag", false);
  }
  updateAxis(axis, _point, offset) {
    const { drag: drag2 } = this.getProps();
    if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
      return;
    const axisValue = this.getAxisMotionValue(axis);
    let next = this.originPoint[axis] + offset[axis];
    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next);
  }
  resolveConstraints() {
    var _a;
    const { dragConstraints, dragElastic } = this.getProps();
    const layout2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a = this.visualElement.projection) === null || _a === void 0 ? void 0 : _a.layout;
    const prevConstraints = this.constraints;
    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout2) {
        this.constraints = calcRelativeConstraints(layout2.layoutBox, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && layout2 && this.constraints && !this.hasMutatedConstraints) {
      eachAxis((axis) => {
        if (this.constraints !== false && this.getAxisMotionValue(axis)) {
          this.constraints[axis] = rebaseAxisConstraints(layout2.layoutBox[axis], this.constraints[axis]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
    if (!constraints || !isRefObject(constraints))
      return false;
    const constraintsElement = constraints.current;
    invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection } = this.visualElement;
    if (!projection || !projection.layout)
      return false;
    const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
    if (onMeasureDragConstraints) {
      const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  }
  startAnimation(velocity) {
    const { drag: drag2, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
    const constraints = this.constraints || {};
    const momentumAnimations = eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, this.currentDirection)) {
        return;
      }
      let transition = constraints && constraints[axis] || {};
      if (dragSnapToOrigin)
        transition = { min: 0, max: 0 };
      const bounceStiffness = dragElastic ? 200 : 1e6;
      const bounceDamping = dragElastic ? 40 : 1e7;
      const inertia2 = {
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness,
        bounceDamping,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...dragTransition,
        ...transition
      };
      return this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(axis, transition) {
    const axisValue = this.getAxisMotionValue(axis);
    addValueToWillChange(this.visualElement, axis);
    return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
  }
  stopAnimation() {
    eachAxis((axis) => this.getAxisMotionValue(axis).stop());
  }
  pauseAnimation() {
    eachAxis((axis) => {
      var _a;
      return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.pause();
    });
  }
  getAnimationState(axis) {
    var _a;
    return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(axis) {
    const dragKey = `_drag${axis.toUpperCase()}`;
    const props = this.visualElement.getProps();
    const externalMotionValue = props[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : void 0) || 0);
  }
  snapToCursor(point) {
    eachAxis((axis) => {
      const { drag: drag2 } = this.getProps();
      if (!shouldDrag(axis, drag2, this.currentDirection))
        return;
      const { projection } = this.visualElement;
      const axisValue = this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        const { min: min2, max: max2 } = projection.layout.layoutBox[axis];
        axisValue.set(point[axis] - mixNumber(min2, max2, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: drag2, dragConstraints } = this.getProps();
    const { projection } = this.visualElement;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints)
      return;
    this.stopAnimation();
    const boxProgress = { x: 0, y: 0 };
    eachAxis((axis) => {
      const axisValue = this.getAxisMotionValue(axis);
      if (axisValue && this.constraints !== false) {
        const latest = axisValue.get();
        boxProgress[axis] = calcOrigin2({ min: latest, max: latest }, this.constraints[axis]);
      }
    });
    const { transformTemplate } = this.visualElement.getProps();
    this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    projection.root && projection.root.updateScroll();
    projection.updateLayout();
    this.resolveConstraints();
    eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, null))
        return;
      const axisValue = this.getAxisMotionValue(axis);
      const { min: min2, max: max2 } = this.constraints[axis];
      axisValue.set(mixNumber(min2, max2, boxProgress[axis]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    elementDragControls.set(this.visualElement, this);
    const element = this.visualElement.current;
    const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
      const { drag: drag2, dragListener = true } = this.getProps();
      drag2 && dragListener && this.start(event);
    });
    const measureDragConstraints = () => {
      const { dragConstraints } = this.getProps();
      if (isRefObject(dragConstraints) && dragConstraints.current) {
        this.constraints = this.resolveRefConstraints();
      }
    };
    const { projection } = this.visualElement;
    const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      projection.root && projection.root.updateScroll();
      projection.updateLayout();
    }
    frame.read(measureDragConstraints);
    const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
    const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
      if (this.isDragging && hasLayoutChanged) {
        eachAxis((axis) => {
          const motionValue2 = this.getAxisMotionValue(axis);
          if (!motionValue2)
            return;
          this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        this.visualElement.render();
      }
    }));
    return () => {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
      stopLayoutUpdateListener && stopLayoutUpdateListener();
    };
  }
  getProps() {
    const props = this.visualElement.getProps();
    const { drag: drag2 = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
    return {
      ...props,
      drag: drag2,
      dragDirectionLock,
      dragPropagation,
      dragConstraints,
      dragElastic,
      dragMomentum
    };
  }
};
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold = 10) {
  let direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var DragGesture = class extends Feature {
  constructor(node) {
    super(node);
    this.removeGroupControls = noop;
    this.removeListeners = noop;
    this.controls = new VisualElementDragControls(node);
  }
  mount() {
    const { dragControls } = this.node.getProps();
    if (dragControls) {
      this.removeGroupControls = dragControls.subscribe(this.controls);
    }
    this.removeListeners = this.controls.addListeners() || noop;
  }
  unmount() {
    this.removeGroupControls();
    this.removeListeners();
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/gestures/pan/index.mjs
var asyncHandler = (handler) => (event, info) => {
  if (handler) {
    frame.postRender(() => handler(event, info));
  }
};
var PanGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.removePointerDownListener = noop;
  }
  onPointerDown(pointerDownEvent) {
    this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: getContextWindow(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
    return {
      onSessionStart: asyncHandler(onPanSessionStart),
      onStart: asyncHandler(onPanStart),
      onMove: onPan,
      onEnd: (event, info) => {
        delete this.session;
        if (onPanEnd) {
          frame.postRender(() => onPanEnd(event, info));
        }
      }
    };
  }
  mount() {
    this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener();
    this.session && this.session.end();
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var import_react34 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/projection/node/state.mjs
var globalProjectionState = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: true,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: false
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min)
    return 0;
  return pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = {
  correct: (latest, node) => {
    if (!node.target)
      return latest;
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    const x = pixelsToPercent(latest, node.target.x);
    const y = pixelsToPercent(latest, node.target.y);
    return `${x}% ${y}%`;
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs
var correctBoxShadow = {
  correct: (latest, { treeScale, projectionDelta }) => {
    const original = latest;
    const shadow = complex.parse(latest);
    if (shadow.length > 5)
      return original;
    const template = complex.createTransformer(latest);
    const offset = typeof shadow[0] !== "number" ? 1 : 0;
    const xScale = projectionDelta.x.scale * treeScale.x;
    const yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    const averageScale = mixNumber(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset] === "number")
      shadow[2 + offset] /= averageScale;
    if (typeof shadow[3 + offset] === "number")
      shadow[3 + offset] /= averageScale;
    return template(shadow);
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var MeasureLayoutWithContext = class extends import_react34.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
    const { projection } = visualElement;
    addScaleCorrector(defaultScaleCorrectors);
    if (projection) {
      if (layoutGroup.group)
        layoutGroup.group.add(projection);
      if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
        switchLayoutGroup.register(projection);
      }
      projection.root.didUpdate();
      projection.addEventListener("animationComplete", () => {
        this.safeToRemove();
      });
      projection.setOptions({
        ...projection.options,
        onExitComplete: () => this.safeToRemove()
      });
    }
    globalProjectionState.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(prevProps) {
    const { layoutDependency, visualElement, drag: drag2, isPresent: isPresent2 } = this.props;
    const projection = visualElement.projection;
    if (!projection)
      return null;
    projection.isPresent = isPresent2;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent2) {
      if (isPresent2) {
        projection.promote();
      } else if (!projection.relegate()) {
        frame.postRender(() => {
          const stack = projection.getStack();
          if (!stack || !stack.members.length) {
            this.safeToRemove();
          }
        });
      }
    }
    return null;
  }
  componentDidUpdate() {
    const { projection } = this.props.visualElement;
    if (projection) {
      projection.root.didUpdate();
      microtask.postRender(() => {
        if (!projection.currentAnimation && projection.isLead()) {
          this.safeToRemove();
        }
      });
    }
  }
  componentWillUnmount() {
    const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
    const { projection } = visualElement;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup && layoutGroup.group)
        layoutGroup.group.remove(projection);
      if (promoteContext && promoteContext.deregister)
        promoteContext.deregister(projection);
    }
  }
  safeToRemove() {
    const { safeToRemove } = this.props;
    safeToRemove && safeToRemove();
  }
  render() {
    return null;
  }
};
function MeasureLayout(props) {
  const [isPresent2, safeToRemove] = usePresence();
  const layoutGroup = (0, import_react34.useContext)(LayoutGroupContext);
  return (0, import_jsx_runtime8.jsx)(MeasureLayoutWithContext, { ...props, layoutGroup, switchLayoutGroup: (0, import_react34.useContext)(SwitchLayoutGroupContext), isPresent: isPresent2, safeToRemove });
}
var defaultScaleCorrectors = {
  borderRadius: {
    ...correctBorderRadius,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/animate/single-value.mjs
function animateSingleValue(value, keyframes2, options) {
  const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
  motionValue$1.start(animateMotionValue("", motionValue$1, keyframes2, options));
  return motionValue$1.animation;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs
function isSVGElement(element) {
  return element instanceof SVGElement && element.tagName !== "svg";
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
var compareByDepth = (a, b) => a.depth - b.depth;

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
var FlatTree = class {
  constructor() {
    this.children = [];
    this.isDirty = false;
  }
  add(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  }
  remove(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  }
  forEach(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/delay.mjs
function delay(callback, timeout) {
  const start = time.now();
  const checkElapsed = ({ timestamp }) => {
    const elapsed = timestamp - start;
    if (elapsed >= timeout) {
      cancelFrame(checkElapsed);
      callback(elapsed - timeout);
    }
  };
  frame.read(checkElapsed, true);
  return () => cancelFrame(checkElapsed);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs
var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;
var asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
var isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
  if (shouldCrossfadeOpacity) {
    target.opacity = mixNumber(
      0,
      // TODO Reinstate this if only child
      lead.opacity !== void 0 ? lead.opacity : 1,
      easeCrossfadeIn(progress2)
    );
    target.opacityExit = mixNumber(follow.opacity !== void 0 ? follow.opacity : 1, 0, easeCrossfadeOut(progress2));
  } else if (isOnlyMember) {
    target.opacity = mixNumber(follow.opacity !== void 0 ? follow.opacity : 1, lead.opacity !== void 0 ? lead.opacity : 1, progress2);
  }
  for (let i = 0; i < numBorders; i++) {
    const borderLabel = `border${borders[i]}Radius`;
    let followRadius = getRadius(follow, borderLabel);
    let leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0)
      continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mixNumber(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  if (follow.rotate || lead.rotate) {
    target.rotate = mixNumber(follow.rotate || 0, lead.rotate || 0, progress2);
  }
}
function getRadius(values, radiusName) {
  return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
var easeCrossfadeIn = compress(0, 0.5, circOut);
var easeCrossfadeOut = compress(0.5, 0.95, noop);
function compress(min2, max2, easing) {
  return (p) => {
    if (p < min2)
      return 0;
    if (p > max2)
      return 1;
    return easing(progress(min2, max2, p));
  };
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}
function copyAxisDeltaInto(delta, originDelta) {
  delta.translate = originDelta.translate;
  delta.scale = originDelta.scale;
  delta.originPoint = originDelta.originPoint;
  delta.origin = originDelta.origin;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs
function removePointDelta(point, translate, scale2, originPoint, boxScale) {
  point -= translate;
  point = scalePoint(point, 1 / scale2, originPoint);
  if (boxScale !== void 0) {
    point = scalePoint(point, 1 / boxScale, originPoint);
  }
  return point;
}
function removeAxisDelta(axis, translate = 0, scale2 = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    const relativeProgress = mixNumber(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number")
    return;
  let originPoint = mixNumber(originAxis.min, originAxis.max, origin);
  if (axis === originAxis)
    originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0);
  removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/projection/geometry/utils.mjs
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a, b) {
  return a.min === b.min && a.max === b.max;
}
function boxEquals(a, b) {
  return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
}
function axisEqualsRounded(a, b) {
  return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
}
function boxEqualsRounded(a, b) {
  return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
}
function aspectRatio(box) {
  return calcLength(box.x) / calcLength(box.y);
}
function axisDeltaEquals(a, b) {
  return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/projection/shared/stack.mjs
var NodeStack = class {
  constructor() {
    this.members = [];
  }
  add(node) {
    addUniqueItem(this.members, node);
    node.scheduleRender();
  }
  remove(node) {
    removeItem(this.members, node);
    if (node === this.prevLead) {
      this.prevLead = void 0;
    }
    if (node === this.lead) {
      const prevLead = this.members[this.members.length - 1];
      if (prevLead) {
        this.promote(prevLead);
      }
    }
  }
  relegate(node) {
    const indexOfNode = this.members.findIndex((member) => node === member);
    if (indexOfNode === 0)
      return false;
    let prevLead;
    for (let i = indexOfNode; i >= 0; i--) {
      const member = this.members[i];
      if (member.isPresent !== false) {
        prevLead = member;
        break;
      }
    }
    if (prevLead) {
      this.promote(prevLead);
      return true;
    } else {
      return false;
    }
  }
  promote(node, preserveFollowOpacity) {
    const prevLead = this.lead;
    if (node === prevLead)
      return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();
    if (prevLead) {
      prevLead.instance && prevLead.scheduleRender();
      node.scheduleRender();
      node.resumeFrom = prevLead;
      if (preserveFollowOpacity) {
        node.resumeFrom.preserveOpacity = true;
      }
      if (prevLead.snapshot) {
        node.snapshot = prevLead.snapshot;
        node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
      }
      if (node.root && node.root.isUpdating) {
        node.isLayoutDirty = true;
      }
      const { crossfade } = node.options;
      if (crossfade === false) {
        prevLead.hide();
      }
    }
  }
  exitAnimationComplete() {
    this.members.forEach((node) => {
      const { options, resumingFrom } = node;
      options.onExitComplete && options.onExitComplete();
      if (resumingFrom) {
        resumingFrom.options.onExitComplete && resumingFrom.options.onExitComplete();
      }
    });
  }
  scheduleRender() {
    this.members.forEach((node) => {
      node.instance && node.scheduleRender(false);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    if (this.lead && this.lead.snapshot) {
      this.lead.snapshot = void 0;
    }
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
  let transform2 = "";
  const xTranslate = delta.x.translate / treeScale.x;
  const yTranslate = delta.y.translate / treeScale.y;
  const zTranslate = (latestTransform === null || latestTransform === void 0 ? void 0 : latestTransform.z) || 0;
  if (xTranslate || yTranslate || zTranslate) {
    transform2 = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
  }
  if (treeScale.x !== 1 || treeScale.y !== 1) {
    transform2 += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
  }
  if (latestTransform) {
    const { transformPerspective, rotate, rotateX, rotateY, skewX, skewY } = latestTransform;
    if (transformPerspective)
      transform2 = `perspective(${transformPerspective}px) ${transform2}`;
    if (rotate)
      transform2 += `rotate(${rotate}deg) `;
    if (rotateX)
      transform2 += `rotateX(${rotateX}deg) `;
    if (rotateY)
      transform2 += `rotateY(${rotateY}deg) `;
    if (skewX)
      transform2 += `skewX(${skewX}deg) `;
    if (skewY)
      transform2 += `skewY(${skewY}deg) `;
  }
  const elementScaleX = delta.x.scale * treeScale.x;
  const elementScaleY = delta.y.scale * treeScale.y;
  if (elementScaleX !== 1 || elementScaleY !== 1) {
    transform2 += `scale(${elementScaleX}, ${elementScaleY})`;
  }
  return transform2 || "none";
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
var metrics = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
var isDebug = typeof window !== "undefined" && window.MotionDebug !== void 0;
var transformAxes = ["", "X", "Y", "Z"];
var hiddenVisibility = { visibility: "hidden" };
var animationTarget = 1e3;
var id2 = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
  const { latestValues } = visualElement;
  if (latestValues[key]) {
    values[key] = latestValues[key];
    visualElement.setStaticValue(key, 0);
    if (sharedAnimationValues) {
      sharedAnimationValues[key] = 0;
    }
  }
}
function cancelTreeOptimisedTransformAnimations(projectionNode) {
  projectionNode.hasCheckedOptimisedAppear = true;
  if (projectionNode.root === projectionNode)
    return;
  const { visualElement } = projectionNode.options;
  if (!visualElement)
    return;
  const appearId = getOptimisedAppearId(visualElement);
  if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
    const { layout: layout2, layoutId } = projectionNode.options;
    window.MotionCancelOptimisedAnimation(appearId, "transform", frame, !(layout2 || layoutId));
  }
  const { parent } = projectionNode;
  if (parent && !parent.hasCheckedOptimisedAppear) {
    cancelTreeOptimisedTransformAnimations(parent);
  }
}
function createProjectionNode2({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
  return class ProjectionNode {
    constructor(latestValues = {}, parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent()) {
      this.id = id2++;
      this.animationId = 0;
      this.children = /* @__PURE__ */ new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.isProjectionDirty = false;
      this.isSharedProjectionDirty = false;
      this.isTransformDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.hasCheckedOptimisedAppear = false;
      this.treeScale = { x: 1, y: 1 };
      this.eventHandlers = /* @__PURE__ */ new Map();
      this.hasTreeAnimated = false;
      this.updateScheduled = false;
      this.scheduleUpdate = () => this.update();
      this.projectionUpdateScheduled = false;
      this.checkUpdateFailed = () => {
        if (this.isUpdating) {
          this.isUpdating = false;
          this.clearAllSnapshots();
        }
      };
      this.updateProjection = () => {
        this.projectionUpdateScheduled = false;
        if (isDebug) {
          metrics.totalNodes = metrics.resolvedTargetDeltas = metrics.recalculatedProjection = 0;
        }
        this.nodes.forEach(propagateDirtyNodes);
        this.nodes.forEach(resolveTargetDelta);
        this.nodes.forEach(calcProjection);
        this.nodes.forEach(cleanDirtyNodes);
        if (isDebug) {
          window.MotionDebug.record(metrics);
        }
      };
      this.resolvedRelativeTargetAt = 0;
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */ new Map();
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? [...parent.path, parent] : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      for (let i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this)
        this.nodes = new FlatTree();
    }
    addEventListener(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }
      return this.eventHandlers.get(name).add(handler);
    }
    notifyListeners(name, ...args) {
      const subscriptionManager = this.eventHandlers.get(name);
      subscriptionManager && subscriptionManager.notify(...args);
    }
    hasListeners(name) {
      return this.eventHandlers.has(name);
    }
    /**
     * Lifecycles
     */
    mount(instance, isLayoutDirty = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = isSVGElement(instance);
      this.instance = instance;
      const { layoutId, layout: layout2, visualElement } = this.options;
      if (visualElement && !visualElement.current) {
        visualElement.mount(instance);
      }
      this.root.nodes.add(this);
      this.parent && this.parent.children.add(this);
      if (isLayoutDirty && (layout2 || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        let cancelDelay;
        const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
        attachResizeListener(instance, () => {
          this.root.updateBlockedByResize = true;
          cancelDelay && cancelDelay();
          cancelDelay = delay(resizeUnblockUpdate, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      if (this.options.animate !== false && visualElement && (layoutId || layout2)) {
        this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeTargetChanged, layout: newLayout }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0;
            this.relativeTarget = void 0;
            return;
          }
          const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
          const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
          const targetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout) || hasRelativeTargetChanged;
          const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !this.currentAnimation)) {
            if (this.resumeFrom) {
              this.resumingFrom = this.resumeFrom;
              this.resumingFrom.resumingFrom = void 0;
            }
            this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
            const animationOptions = {
              ...getValueTransition(layoutTransition, "layout"),
              onPlay: onLayoutAnimationStart,
              onComplete: onLayoutAnimationComplete
            };
            if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
              animationOptions.delay = 0;
              animationOptions.type = false;
            }
            this.startAnimation(animationOptions);
          } else {
            if (!hasLayoutChanged) {
              finishAnimation(this);
            }
            if (this.isLead() && this.options.onExitComplete) {
              this.options.onExitComplete();
            }
          }
          this.targetLayout = newLayout;
        });
      }
    }
    unmount() {
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      const stack = this.getStack();
      stack && stack.remove(this);
      this.parent && this.parent.children.delete(this);
      this.instance = void 0;
      cancelFrame(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    // Note: currently only running on root node
    startUpdate() {
      if (this.isUpdateBlocked())
        return;
      this.isUpdating = true;
      this.nodes && this.nodes.forEach(resetSkewAndRotation);
      this.animationId++;
    }
    getTransformTemplate() {
      const { visualElement } = this.options;
      return visualElement && visualElement.getProps().transformTemplate;
    }
    willUpdate(shouldNotifyListeners = true) {
      this.root.hasTreeAnimated = true;
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
        cancelTreeOptimisedTransformAnimations(this);
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty)
        return;
      this.isLayoutDirty = true;
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        node.shouldResetTransform = true;
        node.updateScroll("snapshot");
        if (node.options.layoutRoot) {
          node.willUpdate(false);
        }
      }
      const { layoutId, layout: layout2 } = this.options;
      if (layoutId === void 0 && !layout2)
        return;
      const transformTemplate = this.getTransformTemplate();
      this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    }
    update() {
      this.updateScheduled = false;
      const updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        this.unblockUpdate();
        this.clearAllSnapshots();
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (!this.isUpdating) {
        this.nodes.forEach(clearIsLayoutDirty);
      }
      this.isUpdating = false;
      this.nodes.forEach(resetTransformStyle);
      this.nodes.forEach(updateLayout);
      this.nodes.forEach(notifyLayoutUpdate);
      this.clearAllSnapshots();
      const now2 = time.now();
      frameData.delta = clamp(0, 1e3 / 60, now2 - frameData.timestamp);
      frameData.timestamp = now2;
      frameData.isProcessing = true;
      frameSteps.update.process(frameData);
      frameSteps.preRender.process(frameData);
      frameSteps.render.process(frameData);
      frameData.isProcessing = false;
    }
    didUpdate() {
      if (!this.updateScheduled) {
        this.updateScheduled = true;
        microtask.read(this.scheduleUpdate);
      }
    }
    clearAllSnapshots() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach(removeLeadSnapshots);
    }
    scheduleUpdateProjection() {
      if (!this.projectionUpdateScheduled) {
        this.projectionUpdateScheduled = true;
        frame.preRender(this.updateProjection, false, true);
      }
    }
    scheduleCheckAfterUnmount() {
      frame.postRender(() => {
        if (this.isLayoutDirty) {
          this.root.didUpdate();
        } else {
          this.root.checkUpdateFailed();
        }
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      if (this.snapshot || !this.instance)
        return;
      this.snapshot = this.measure();
    }
    updateLayout() {
      if (!this.instance)
        return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          node.updateScroll();
        }
      }
      const prevLayout = this.layout;
      this.layout = this.measure(false);
      this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement } = this.options;
      visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
    }
    updateScroll(phase = "measure") {
      let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
        needsMeasurement = false;
      }
      if (needsMeasurement) {
        const isRoot = checkIsScrollRoot(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase,
          isRoot,
          offset: measureScroll(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : isRoot
        };
      }
    }
    resetTransform() {
      if (!resetTransform)
        return;
      const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
      const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      const transformTemplate = this.getTransformTemplate();
      const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    }
    measure(removeTransform = true) {
      const pageBox = this.measurePageBox();
      let layoutBox = this.removeElementScroll(pageBox);
      if (removeTransform) {
        layoutBox = this.removeTransform(layoutBox);
      }
      roundBox(layoutBox);
      return {
        animationId: this.root.animationId,
        measuredBox: pageBox,
        layoutBox,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var _a;
      const { visualElement } = this.options;
      if (!visualElement)
        return createBox();
      const box = visualElement.measureViewportBox();
      const wasInScrollRoot = ((_a = this.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot) || this.path.some(checkNodeWasScrollRoot);
      if (!wasInScrollRoot) {
        const { scroll: scroll2 } = this.root;
        if (scroll2) {
          translateAxis(box.x, scroll2.offset.x);
          translateAxis(box.y, scroll2.offset.y);
        }
      }
      return box;
    }
    removeElementScroll(box) {
      var _a;
      const boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      if ((_a = this.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot) {
        return boxWithoutScroll;
      }
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        const { scroll: scroll2, options } = node;
        if (node !== this.root && scroll2 && options.layoutScroll) {
          if (scroll2.wasRoot) {
            copyBoxInto(boxWithoutScroll, box);
          }
          translateAxis(boxWithoutScroll.x, scroll2.offset.x);
          translateAxis(boxWithoutScroll.y, scroll2.offset.y);
        }
      }
      return boxWithoutScroll;
    }
    applyTransform(box, transformOnly = false) {
      const withTransforms = createBox();
      copyBoxInto(withTransforms, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          transformBox(withTransforms, {
            x: -node.scroll.offset.x,
            y: -node.scroll.offset.y
          });
        }
        if (!hasTransform(node.latestValues))
          continue;
        transformBox(withTransforms, node.latestValues);
      }
      if (hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues);
      }
      return withTransforms;
    }
    removeTransform(box) {
      const boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!node.instance)
          continue;
        if (!hasTransform(node.latestValues))
          continue;
        hasScale(node.latestValues) && node.updateSnapshot();
        const sourceBox = createBox();
        const nodeBox = node.measurePageBox();
        copyBoxInto(sourceBox, nodeBox);
        removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : void 0, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    }
    setTargetDelta(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
      this.isProjectionDirty = true;
    }
    setOptions(options) {
      this.options = {
        ...this.options,
        ...options,
        crossfade: options.crossfade !== void 0 ? options.crossfade : true
      };
    }
    clearMeasurements() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      if (!this.relativeParent)
        return;
      if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) {
        this.relativeParent.resolveTargetDelta(true);
      }
    }
    resolveTargetDelta(forceRecalculation = false) {
      var _a;
      const lead = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
      this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
      this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize);
      if (canSkip)
        return;
      const { layout: layout2, layoutId } = this.options;
      if (!this.layout || !(layout2 || layoutId))
        return;
      this.resolvedRelativeTargetAt = frameData.timestamp;
      if (!this.targetDelta && !this.relativeTarget) {
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && relativeParent.layout && this.animationProgress !== 1) {
          this.relativeParent = relativeParent;
          this.forceRelativeParentToResolveTarget();
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      if (!this.relativeTarget && !this.targetDelta)
        return;
      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
        this.forceRelativeParentToResolveTarget();
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.target = this.applyTransform(this.layout.layoutBox);
        } else {
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.layoutBox);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
          this.relativeParent = relativeParent;
          this.forceRelativeParentToResolveTarget();
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent.target);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      if (isDebug) {
        metrics.resolvedTargetDeltas++;
      }
    }
    getClosestProjectingParent() {
      if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
        return void 0;
      }
      if (this.parent.isProjecting()) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    }
    isProjecting() {
      return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var _a;
      const lead = this.getLead();
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      let canSkip = true;
      if (this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty)) {
        canSkip = false;
      }
      if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
        canSkip = false;
      }
      if (this.resolvedRelativeTargetAt === frameData.timestamp) {
        canSkip = false;
      }
      if (canSkip)
        return;
      const { layout: layout2, layoutId } = this.options;
      this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }
      if (!this.layout || !(layout2 || layoutId))
        return;
      copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
      const prevTreeScaleX = this.treeScale.x;
      const prevTreeScaleY = this.treeScale.y;
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
      if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
        lead.target = lead.layout.layoutBox;
        lead.targetWithTransforms = createBox();
      }
      const { target } = lead;
      if (!target) {
        if (this.prevProjectionDelta) {
          this.createProjectionDeltas();
          this.scheduleRender();
        }
        return;
      }
      if (!this.projectionDelta || !this.prevProjectionDelta) {
        this.createProjectionDeltas();
      } else {
        copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
        copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
      }
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
      if (isDebug) {
        metrics.recalculatedProjection++;
      }
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(notifyAll = true) {
      var _a;
      (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.scheduleRender();
      if (notifyAll) {
        const stack = this.getStack();
        stack && stack.scheduleRender();
      }
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = createDelta();
      this.projectionDelta = createDelta();
      this.projectionDeltaWithTransform = createDelta();
    }
    setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
      const snapshot = this.snapshot;
      const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
      const mixedValues = { ...this.latestValues };
      const targetDelta = createDelta();
      if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
        this.relativeTarget = this.relativeTargetOrigin = void 0;
      }
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      const relativeLayout = createBox();
      const snapshotSource = snapshot ? snapshot.source : void 0;
      const layoutSource = this.layout ? this.layout.source : void 0;
      const isSharedLayoutAnimation = snapshotSource !== layoutSource;
      const stack = this.getStack();
      const isOnlyMember = !stack || stack.members.length <= 1;
      const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      let prevRelativeTarget;
      this.mixTargetDelta = (latest) => {
        const progress2 = latest / 1e3;
        mixAxisDelta(targetDelta.x, delta.x, progress2);
        mixAxisDelta(targetDelta.y, delta.y, progress2);
        this.setTargetDelta(targetDelta);
        if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
          calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
          mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress2);
          if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) {
            this.isProjectionDirty = false;
          }
          if (!prevRelativeTarget)
            prevRelativeTarget = createBox();
          copyBoxInto(prevRelativeTarget, this.relativeTarget);
        }
        if (isSharedLayoutAnimation) {
          this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
        }
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = progress2;
      };
      this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(options) {
      this.notifyListeners("animationStart");
      this.currentAnimation && this.currentAnimation.stop();
      if (this.resumingFrom && this.resumingFrom.currentAnimation) {
        this.resumingFrom.currentAnimation.stop();
      }
      if (this.pendingAnimation) {
        cancelFrame(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }
      this.pendingAnimation = frame.update(() => {
        globalProjectionState.hasAnimatedSinceResize = true;
        this.currentAnimation = animateSingleValue(0, animationTarget, {
          ...options,
          onUpdate: (latest) => {
            this.mixTargetDelta(latest);
            options.onUpdate && options.onUpdate(latest);
          },
          onComplete: () => {
            options.onComplete && options.onComplete();
            this.completeAnimation();
          }
        });
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = this.currentAnimation;
        }
        this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }
      const stack = this.getStack();
      stack && stack.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
      this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      if (this.currentAnimation) {
        this.mixTargetDelta && this.mixTargetDelta(animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      const lead = this.getLead();
      let { targetWithTransforms, target, layout: layout2, latestValues } = lead;
      if (!targetWithTransforms || !target || !layout2)
        return;
      if (this !== lead && this.layout && layout2 && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout2.layoutBox)) {
        target = this.target || createBox();
        const xLength = calcLength(this.layout.layoutBox.x);
        target.x.min = lead.target.x.min;
        target.x.max = target.x.min + xLength;
        const yLength = calcLength(this.layout.layoutBox.y);
        target.y.min = lead.target.y.min;
        target.y.max = target.y.min + yLength;
      }
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    }
    registerSharedNode(layoutId, node) {
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      const stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      const config = node.options.initialPromotionConfig;
      node.promote({
        transition: config ? config.transition : void 0,
        preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
      });
    }
    isLead() {
      const stack = this.getStack();
      return stack ? stack.lead === this : true;
    }
    getLead() {
      var _a;
      const { layoutId } = this.options;
      return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
    }
    getPrevLead() {
      var _a;
      const { layoutId } = this.options;
      return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : void 0;
    }
    getStack() {
      const { layoutId } = this.options;
      if (layoutId)
        return this.root.sharedNodes.get(layoutId);
    }
    promote({ needsReset, transition, preserveFollowOpacity } = {}) {
      const stack = this.getStack();
      if (stack)
        stack.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }
      if (transition)
        this.setOptions({ transition });
    }
    relegate() {
      const stack = this.getStack();
      if (stack) {
        return stack.relegate(this);
      } else {
        return false;
      }
    }
    resetSkewAndRotation() {
      const { visualElement } = this.options;
      if (!visualElement)
        return;
      let hasDistortingTransform = false;
      const { latestValues } = visualElement;
      if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) {
        hasDistortingTransform = true;
      }
      if (!hasDistortingTransform)
        return;
      const resetValues = {};
      if (latestValues.z) {
        resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
      }
      for (let i = 0; i < transformAxes.length; i++) {
        resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
        resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
      }
      visualElement.render();
      for (const key in resetValues) {
        visualElement.setStaticValue(key, resetValues[key]);
        if (this.animationValues) {
          this.animationValues[key] = resetValues[key];
        }
      }
      visualElement.scheduleRender();
    }
    getProjectionStyles(styleProp) {
      var _a, _b;
      if (!this.instance || this.isSVG)
        return void 0;
      if (!this.isVisible) {
        return hiddenVisibility;
      }
      const styles = {
        visibility: ""
      };
      const transformTemplate = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false;
        styles.opacity = "";
        styles.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
        styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return styles;
      }
      const lead = this.getLead();
      if (!this.projectionDelta || !this.layout || !lead.target) {
        const emptyStyles = {};
        if (this.options.layoutId) {
          emptyStyles.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
          emptyStyles.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return emptyStyles;
      }
      const valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        styles.transform = transformTemplate(valuesToRender, styles.transform);
      }
      const { x, y } = this.projectionDelta;
      styles.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
      if (lead.animationValues) {
        styles.opacity = lead === this ? (_b = (_a = valuesToRender.opacity) !== null && _a !== void 0 ? _a : this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        styles.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
      }
      for (const key in scaleCorrectors) {
        if (valuesToRender[key] === void 0)
          continue;
        const { correct, applyTo } = scaleCorrectors[key];
        const corrected = styles.transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
        if (applyTo) {
          const num = applyTo.length;
          for (let i = 0; i < num; i++) {
            styles[applyTo[i]] = corrected;
          }
        } else {
          styles[key] = corrected;
        }
      }
      if (this.options.layoutId) {
        styles.pointerEvents = lead === this ? resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "" : "none";
      }
      return styles;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((node) => {
        var _a;
        return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
      });
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    }
  };
}
function updateLayout(node) {
  node.updateLayout();
}
function notifyLayoutUpdate(node) {
  var _a;
  const snapshot = ((_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    const { layoutBox: layout2, measuredBox: measuredLayout } = node.layout;
    const { animationType } = node.options;
    const isShared = snapshot.source !== node.layout.source;
    if (animationType === "size") {
      eachAxis((axis) => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(axisSnapshot);
        axisSnapshot.min = layout2[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout2)) {
      eachAxis((axis) => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(layout2[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
        if (node.relativeTarget && !node.currentAnimation) {
          node.isProjectionDirty = true;
          node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
        }
      });
    }
    const layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout2, snapshot.layoutBox);
    const visualDelta = createDelta();
    if (isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
    } else {
      calcBoxDelta(visualDelta, layout2, snapshot.layoutBox);
    }
    const hasLayoutChanged = !isDeltaZero(layoutDelta);
    let hasRelativeTargetChanged = false;
    if (!node.resumeFrom) {
      const relativeParent = node.getClosestProjectingParent();
      if (relativeParent && !relativeParent.resumeFrom) {
        const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
        if (parentSnapshot && parentLayout) {
          const relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
          const relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout2, parentLayout.layoutBox);
          if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
            hasRelativeTargetChanged = true;
          }
          if (relativeParent.options.layoutRoot) {
            node.relativeTarget = relativeLayout;
            node.relativeTargetOrigin = relativeSnapshot;
            node.relativeParent = relativeParent;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout: layout2,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeTargetChanged
    });
  } else if (node.isLead()) {
    const { onExitComplete } = node.options;
    onExitComplete && onExitComplete();
  }
  node.options.transition = void 0;
}
function propagateDirtyNodes(node) {
  if (isDebug) {
    metrics.totalNodes++;
  }
  if (!node.parent)
    return;
  if (!node.isProjecting()) {
    node.isProjectionDirty = node.parent.isProjectionDirty;
  }
  node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
  node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
  node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function clearIsLayoutDirty(node) {
  node.isLayoutDirty = false;
}
function resetTransformStyle(node) {
  const { visualElement } = node.options;
  if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
    visualElement.notify("BeforeLayoutMeasure");
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = void 0;
  node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetSkewAndRotation(node) {
  node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
  output.translate = mixNumber(delta.translate, 0, p);
  output.scale = mixNumber(delta.scale, 1, p);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
  output.min = mixNumber(from.min, to.min, p);
  output.max = mixNumber(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
  mixAxis(output.x, from.x, to.x, p);
  mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
var userAgentContains = (string) => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
var roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(axis) {
  axis.min = roundPoint(axis.min);
  axis.max = roundPoint(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout2) {
  return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout2), 0.2);
}
function checkNodeWasScrollRoot(node) {
  var _a;
  return node !== node.root && ((_a = node.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
var DocumentProjectionNode = createProjectionNode2({
  attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => true
});

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
var rootProjectionNode = {
  current: void 0
};
var HTMLProjectionNode = createProjectionNode2({
  measureScroll: (instance) => ({
    x: instance.scrollLeft,
    y: instance.scrollTop
  }),
  defaultParent: () => {
    if (!rootProjectionNode.current) {
      const documentNode = new DocumentProjectionNode({});
      documentNode.mount(window);
      documentNode.setOptions({ layoutScroll: true });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: (instance, value) => {
    instance.style.transform = value !== void 0 ? value : "none";
  },
  checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed")
});

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
  pan: {
    Feature: PanGesture
  },
  drag: {
    Feature: DragGesture,
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/gestures/hover.mjs
function handleHoverEvent(node, event, lifecycle) {
  const { props } = node;
  if (node.animationState && props.whileHover) {
    node.animationState.setActive("whileHover", lifecycle === "Start");
  }
  const eventName = "onHover" + lifecycle;
  const callback = props[eventName];
  if (callback) {
    frame.postRender(() => callback(event, extractEventInfo(event)));
  }
}
var HoverGesture = class extends Feature {
  mount() {
    const { current } = this.node;
    if (!current)
      return;
    this.unmount = hover(current, (startEvent) => {
      handleHoverEvent(this.node, startEvent, "Start");
      return (endEvent) => handleHoverEvent(this.node, endEvent, "End");
    });
  }
  unmount() {
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/gestures/focus.mjs
var FocusGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.isActive = false;
  }
  onFocus() {
    let isFocusVisible = false;
    try {
      isFocusVisible = this.node.current.matches(":focus-visible");
    } catch (e) {
      isFocusVisible = true;
    }
    if (!isFocusVisible || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", true);
    this.isActive = true;
  }
  onBlur() {
    if (!this.isActive || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", false);
    this.isActive = false;
  }
  mount() {
    this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/gestures/press.mjs
function handlePressEvent(node, event, lifecycle) {
  const { props } = node;
  if (node.animationState && props.whileTap) {
    node.animationState.setActive("whileTap", lifecycle === "Start");
  }
  const eventName = "onTap" + (lifecycle === "End" ? "" : lifecycle);
  const callback = props[eventName];
  if (callback) {
    frame.postRender(() => callback(event, extractEventInfo(event)));
  }
}
var PressGesture = class extends Feature {
  mount() {
    const { current } = this.node;
    if (!current)
      return;
    this.unmount = press(current, (startEvent) => {
      handlePressEvent(this.node, startEvent, "Start");
      return (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "End" : "Cancel");
    }, { useGlobalTarget: this.node.props.globalTapTarget });
  }
  unmount() {
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
var observerCallbacks = /* @__PURE__ */ new WeakMap();
var observers = /* @__PURE__ */ new WeakMap();
var fireObserverCallback = (entry) => {
  const callback = observerCallbacks.get(entry.target);
  callback && callback(entry);
};
var fireAllObserverCallbacks = (entries) => {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
  const lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  const rootObservers = observers.get(lookupRoot);
  const key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  const rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return () => {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var thresholdNames = {
  some: 0,
  all: 1
};
var InViewFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.hasEnteredView = false;
    this.isInView = false;
  }
  startObserver() {
    this.unmount();
    const { viewport = {} } = this.node.getProps();
    const { root, margin: rootMargin, amount = "some", once } = viewport;
    const options = {
      root: root ? root.current : void 0,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    const onIntersectionUpdate = (entry) => {
      const { isIntersecting } = entry;
      if (this.isInView === isIntersecting)
        return;
      this.isInView = isIntersecting;
      if (once && !isIntersecting && this.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        this.hasEnteredView = true;
      }
      if (this.node.animationState) {
        this.node.animationState.setActive("whileInView", isIntersecting);
      }
      const { onViewportEnter, onViewportLeave } = this.node.getProps();
      const callback = isIntersecting ? onViewportEnter : onViewportLeave;
      callback && callback(entry);
    };
    return observeIntersection(this.node.current, options, onIntersectionUpdate);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver === "undefined")
      return;
    const { props, prevProps } = this.node;
    const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
    if (hasOptionsChanged) {
      this.startObserver();
    }
  }
  unmount() {
  }
};
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
  return (name) => viewport[name] !== prevViewport[name];
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
  inView: {
    Feature: InViewFeature
  },
  tap: {
    Feature: PressGesture
  },
  focus: {
    Feature: FocusGesture
  },
  hover: {
    Feature: HoverGesture
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/motion/features/layout.mjs
var layout = {
  layout: {
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var import_react35 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs
var prefersReducedMotion = { current: null };
var hasReducedMotionListener = { current: false };

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs
function initPrefersReducedMotion() {
  hasReducedMotionListener.current = true;
  if (!isBrowser)
    return;
  if (window.matchMedia) {
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
    const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
    motionMediaQuery.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs
var valueTypes = [...dimensionValueTypes, color, complex];
var findValueType = (v) => valueTypes.find(testValueType(v));

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/store.mjs
var visualElementStore = /* @__PURE__ */ new WeakMap();

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/utils/motion-values.mjs
function updateMotionValuesFromProps(element, next, prev) {
  for (const key in next) {
    const nextValue = next[key];
    const prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
      if (true) {
        warnOnce(nextValue.version === "11.18.2", `Attempting to mix Motion versions ${nextValue.version} with 11.18.2 may not work as expected.`);
      }
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue, { owner: element }));
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        const existingValue = element.getValue(key);
        if (existingValue.liveStyle === true) {
          existingValue.jump(nextValue);
        } else if (!existingValue.hasAnimated) {
          existingValue.set(nextValue);
        }
      } else {
        const latestValue = element.getStaticValue(key);
        element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
      }
    }
  }
  for (const key in prev) {
    if (next[key] === void 0)
      element.removeValue(key);
  }
  return next;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/VisualElement.mjs
var propEventHandlers = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
var VisualElement = class {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
    return {};
  }
  constructor({ parent, props, presenceContext, reducedMotionConfig, blockInitialAnimation, visualState }, options = {}) {
    this.current = null;
    this.children = /* @__PURE__ */ new Set();
    this.isVariantNode = false;
    this.isControllingVariants = false;
    this.shouldReduceMotion = null;
    this.values = /* @__PURE__ */ new Map();
    this.KeyframeResolver = KeyframeResolver;
    this.features = {};
    this.valueSubscriptions = /* @__PURE__ */ new Map();
    this.prevMotionValues = {};
    this.events = {};
    this.propEventSubscriptions = {};
    this.notifyUpdate = () => this.notify("Update", this.latestValues);
    this.render = () => {
      if (!this.current)
        return;
      this.triggerBuild();
      this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
    };
    this.renderScheduledAt = 0;
    this.scheduleRender = () => {
      const now2 = time.now();
      if (this.renderScheduledAt < now2) {
        this.renderScheduledAt = now2;
        frame.render(this.render, false, true);
      }
    };
    const { latestValues, renderState, onUpdate } = visualState;
    this.onUpdate = onUpdate;
    this.latestValues = latestValues;
    this.baseTarget = { ...latestValues };
    this.initialValues = props.initial ? { ...latestValues } : {};
    this.renderState = renderState;
    this.parent = parent;
    this.props = props;
    this.presenceContext = presenceContext;
    this.depth = parent ? parent.depth + 1 : 0;
    this.reducedMotionConfig = reducedMotionConfig;
    this.options = options;
    this.blockInitialAnimation = Boolean(blockInitialAnimation);
    this.isControllingVariants = isControllingVariants(props);
    this.isVariantNode = isVariantNode(props);
    if (this.isVariantNode) {
      this.variantChildren = /* @__PURE__ */ new Set();
    }
    this.manuallyAnimateOnMount = Boolean(parent && parent.current);
    const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
    for (const key in initialMotionValues) {
      const value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key], false);
      }
    }
  }
  mount(instance) {
    this.current = instance;
    visualElementStore.set(instance, this);
    if (this.projection && !this.projection.instance) {
      this.projection.mount(instance);
    }
    if (this.parent && this.isVariantNode && !this.isControllingVariants) {
      this.removeFromVariantTree = this.parent.addVariantChild(this);
    }
    this.values.forEach((value, key) => this.bindToMotionValue(key, value));
    if (!hasReducedMotionListener.current) {
      initPrefersReducedMotion();
    }
    this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : prefersReducedMotion.current;
    if (true) {
      warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
    }
    if (this.parent)
      this.parent.children.add(this);
    this.update(this.props, this.presenceContext);
  }
  unmount() {
    visualElementStore.delete(this.current);
    this.projection && this.projection.unmount();
    cancelFrame(this.notifyUpdate);
    cancelFrame(this.render);
    this.valueSubscriptions.forEach((remove) => remove());
    this.valueSubscriptions.clear();
    this.removeFromVariantTree && this.removeFromVariantTree();
    this.parent && this.parent.children.delete(this);
    for (const key in this.events) {
      this.events[key].clear();
    }
    for (const key in this.features) {
      const feature = this.features[key];
      if (feature) {
        feature.unmount();
        feature.isMounted = false;
      }
    }
    this.current = null;
  }
  bindToMotionValue(key, value) {
    if (this.valueSubscriptions.has(key)) {
      this.valueSubscriptions.get(key)();
    }
    const valueIsTransform = transformProps.has(key);
    const removeOnChange = value.on("change", (latestValue) => {
      this.latestValues[key] = latestValue;
      this.props.onUpdate && frame.preRender(this.notifyUpdate);
      if (valueIsTransform && this.projection) {
        this.projection.isTransformDirty = true;
      }
    });
    const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
    let removeSyncCheck;
    if (window.MotionCheckAppearSync) {
      removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
    }
    this.valueSubscriptions.set(key, () => {
      removeOnChange();
      removeOnRenderRequest();
      if (removeSyncCheck)
        removeSyncCheck();
      if (value.owner)
        value.stop();
    });
  }
  sortNodePosition(other) {
    if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) {
      return 0;
    }
    return this.sortInstanceNodePosition(this.current, other.current);
  }
  updateFeatures() {
    let key = "animation";
    for (key in featureDefinitions) {
      const featureDefinition = featureDefinitions[key];
      if (!featureDefinition)
        continue;
      const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
      if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) {
        this.features[key] = new FeatureConstructor(this);
      }
      if (this.features[key]) {
        const feature = this.features[key];
        if (feature.isMounted) {
          feature.update();
        } else {
          feature.mount();
          feature.isMounted = true;
        }
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
  }
  getStaticValue(key) {
    return this.latestValues[key];
  }
  setStaticValue(key, value) {
    this.latestValues[key] = value;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(props, presenceContext) {
    if (props.transformTemplate || this.props.transformTemplate) {
      this.scheduleRender();
    }
    this.prevProps = this.props;
    this.props = props;
    this.prevPresenceContext = this.presenceContext;
    this.presenceContext = presenceContext;
    for (let i = 0; i < propEventHandlers.length; i++) {
      const key = propEventHandlers[i];
      if (this.propEventSubscriptions[key]) {
        this.propEventSubscriptions[key]();
        delete this.propEventSubscriptions[key];
      }
      const listenerName = "on" + key;
      const listener = props[listenerName];
      if (listener) {
        this.propEventSubscriptions[key] = this.on(key, listener);
      }
    }
    this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps, this), this.prevMotionValues);
    if (this.handleChildMotionValue) {
      this.handleChildMotionValue();
    }
    this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(name) {
    return this.props.variants ? this.props.variants[name] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(child) {
    const closestVariantNode = this.getClosestVariantNode();
    if (closestVariantNode) {
      closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
      return () => closestVariantNode.variantChildren.delete(child);
    }
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(key, value) {
    const existingValue = this.values.get(key);
    if (value !== existingValue) {
      if (existingValue)
        this.removeValue(key);
      this.bindToMotionValue(key, value);
      this.values.set(key, value);
      this.latestValues[key] = value.get();
    }
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(key) {
    this.values.delete(key);
    const unsubscribe = this.valueSubscriptions.get(key);
    if (unsubscribe) {
      unsubscribe();
      this.valueSubscriptions.delete(key);
    }
    delete this.latestValues[key];
    this.removeValueFromRenderState(key, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(key) {
    return this.values.has(key);
  }
  getValue(key, defaultValue) {
    if (this.props.values && this.props.values[key]) {
      return this.props.values[key];
    }
    let value = this.values.get(key);
    if (value === void 0 && defaultValue !== void 0) {
      value = motionValue(defaultValue === null ? void 0 : defaultValue, { owner: this });
      this.addValue(key, value);
    }
    return value;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(key, target) {
    var _a;
    let value = this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
    if (value !== void 0 && value !== null) {
      if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
        value = parseFloat(value);
      } else if (!findValueType(value) && complex.test(target)) {
        value = getAnimatableNone2(key, target);
      }
      this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
    }
    return isMotionValue(value) ? value.get() : value;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(key, value) {
    this.baseTarget[key] = value;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(key) {
    var _a;
    const { initial } = this.props;
    let valueFromInitial;
    if (typeof initial === "string" || typeof initial === "object") {
      const variant = resolveVariantFromProps(this.props, initial, (_a = this.presenceContext) === null || _a === void 0 ? void 0 : _a.custom);
      if (variant) {
        valueFromInitial = variant[key];
      }
    }
    if (initial && valueFromInitial !== void 0) {
      return valueFromInitial;
    }
    const target = this.getBaseTargetFromProps(this.props, key);
    if (target !== void 0 && !isMotionValue(target))
      return target;
    return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    return this.events[eventName].add(callback);
  }
  notify(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].notify(...args);
    }
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs
var DOMVisualElement = class extends VisualElement {
  constructor() {
    super(...arguments);
    this.KeyframeResolver = DOMKeyframesResolver;
  }
  sortInstanceNodePosition(a, b) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(props, key) {
    return props.style ? props.style[key] : void 0;
  }
  removeValueFromRenderState(key, { vars, style }) {
    delete vars[key];
    delete style[key];
  }
  handleChildMotionValue() {
    if (this.childSubscription) {
      this.childSubscription();
      delete this.childSubscription;
    }
    const { children } = this.props;
    if (isMotionValue(children)) {
      this.childSubscription = children.on("change", (latest) => {
        if (this.current) {
          this.current.textContent = `${latest}`;
        }
      });
    }
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs
function getComputedStyle2(element) {
  return window.getComputedStyle(element);
}
var HTMLVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "html";
    this.renderInstance = renderHTML;
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      const computedStyle = getComputedStyle2(instance);
      const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      return typeof value === "string" ? value.trim() : value;
    }
  }
  measureInstanceViewportBox(instance, { transformPagePoint }) {
    return measureViewportBox(instance, transformPagePoint);
  }
  build(renderState, latestValues, props) {
    buildHTMLStyles(renderState, latestValues, props.transformTemplate);
  }
  scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    return scrapeMotionValuesFromProps(props, prevProps, visualElement);
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs
var SVGVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "svg";
    this.isSVGTag = false;
    this.measureInstanceViewportBox = createBox;
  }
  getBaseTargetFromProps(props, key) {
    return props[key];
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    }
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return instance.getAttribute(key);
  }
  scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    return scrapeMotionValuesFromProps2(props, prevProps, visualElement);
  }
  build(renderState, latestValues, props) {
    buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate);
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderSVG(instance, renderState, styleProp, projection);
  }
  mount(instance) {
    this.isSVGTag = isSVGTag(instance.tagName);
    super.mount(instance);
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var createDomVisualElement = (Component3, options) => {
  return isSVGComponent(Component3) ? new SVGVisualElement(options) : new HTMLVisualElement(options, {
    allowProjection: Component3 !== import_react35.Fragment
  });
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/components/motion/create.mjs
var createMotionComponent = createMotionComponentFactory({
  ...animations,
  ...gestureAnimations,
  ...drag,
  ...layout
}, createDomVisualElement);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs
var motion = createDOMMotionComponentProxy(createMotionComponent);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/features-animation.mjs
var domAnimation = {
  renderer: createDomVisualElement,
  ...animations,
  ...gestureAnimations
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/features-max.mjs
var domMax = {
  ...domAnimation,
  ...drag,
  ...layout
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/dom/features-min.mjs
var domMin = {
  renderer: createDomVisualElement,
  ...animations
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs
var import_react36 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/use-scroll.mjs
var import_react37 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/use-motion-value.mjs
var import_react38 = __toESM(require_react(), 1);
function useMotionValue(initial) {
  const value = useConstant(() => motionValue(initial));
  const { isStatic } = (0, import_react38.useContext)(MotionConfigContext);
  if (isStatic) {
    const [, setLatest] = (0, import_react38.useState)(initial);
    (0, import_react38.useEffect)(() => value.on("change", setLatest), []);
  }
  return value;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function useCombineMotionValues(values, combineValues) {
  const value = useMotionValue(combineValues());
  const updateValue = () => value.set(combineValues());
  updateValue();
  useIsomorphicLayoutEffect(() => {
    const scheduleUpdate = () => frame.preRender(updateValue, false, true);
    const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
    return () => {
      subscriptions.forEach((unsubscribe) => unsubscribe());
      cancelFrame(updateValue);
    };
  });
  return value;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/use-spring.mjs
var import_react39 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs
var import_react40 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/transform.mjs
var isCustomValueType = (v) => {
  return v && typeof v === "object" && v.mix;
};
var getMixer2 = (v) => isCustomValueType(v) ? v.mix : void 0;
function transform(...args) {
  const useImmediate = !Array.isArray(args[0]);
  const argOffset = useImmediate ? 0 : -1;
  const inputValue = args[0 + argOffset];
  const inputRange = args[1 + argOffset];
  const outputRange = args[2 + argOffset];
  const options = args[3 + argOffset];
  const interpolator = interpolate(inputRange, outputRange, {
    mixer: getMixer2(outputRange[0]),
    ...options
  });
  return useImmediate ? interpolator(inputValue) : interpolator;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/use-computed.mjs
function useComputed(compute) {
  collectMotionValues.current = [];
  compute();
  const value = useCombineMotionValues(collectMotionValues.current, compute);
  collectMotionValues.current = void 0;
  return value;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/use-transform.mjs
function useTransform(input, inputRangeOrTransformer, outputRange, options) {
  if (typeof input === "function") {
    return useComputed(input);
  }
  const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
  return Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
}
function useListTransform(values, transformer) {
  const latest = useConstant(() => []);
  return useCombineMotionValues(values, () => {
    latest.length = 0;
    const numValues = values.length;
    for (let i = 0; i < numValues; i++) {
      latest[i] = values[i].get();
    }
    return transformer(latest);
  });
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
var import_react41 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion-config.mjs
var import_react42 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs
var import_react43 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/wrap.mjs
var wrap = (min2, max2, v) => {
  const rangeSize = max2 - min2;
  return ((v - min2) % rangeSize + rangeSize) % rangeSize + min2;
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/easing/utils/get-easing-for-segment.mjs
function getEasingForSegment(easing, i) {
  return isEasingArray(easing) ? easing[wrap(0, easing.length, i)] : easing;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs
function isDOMKeyframes(keyframes2) {
  return typeof keyframes2 === "object" && !Array.isArray(keyframes2);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs
function resolveSubjects(subject, keyframes2, scope, selectorCache) {
  if (typeof subject === "string" && isDOMKeyframes(keyframes2)) {
    return resolveElements(subject, scope, selectorCache);
  } else if (subject instanceof NodeList) {
    return Array.from(subject);
  } else if (Array.isArray(subject)) {
    return subject;
  } else {
    return [subject];
  }
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs
function calculateRepeatDuration(duration, repeat, _repeatDelay) {
  return duration * (repeat + 1);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs
function calcNextTime(current, next, prev, labels) {
  var _a;
  if (typeof next === "number") {
    return next;
  } else if (next.startsWith("-") || next.startsWith("+")) {
    return Math.max(0, current + parseFloat(next));
  } else if (next === "<") {
    return prev;
  } else {
    return (_a = labels.get(next)) !== null && _a !== void 0 ? _a : current;
  }
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs
function eraseKeyframes(sequence, startTime, endTime) {
  for (let i = 0; i < sequence.length; i++) {
    const keyframe = sequence[i];
    if (keyframe.at > startTime && keyframe.at < endTime) {
      removeItem(sequence, keyframe);
      i--;
    }
  }
}
function addKeyframes(sequence, keyframes2, easing, offset, startTime, endTime) {
  eraseKeyframes(sequence, startTime, endTime);
  for (let i = 0; i < keyframes2.length; i++) {
    sequence.push({
      value: keyframes2[i],
      at: mixNumber(startTime, endTime, offset[i]),
      easing: getEasingForSegment(easing, i)
    });
  }
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs
function normalizeTimes(times, repeat) {
  for (let i = 0; i < times.length; i++) {
    times[i] = times[i] / (repeat + 1);
  }
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs
function compareByTime(a, b) {
  if (a.at === b.at) {
    if (a.value === null)
      return 1;
    if (b.value === null)
      return -1;
    return 0;
  } else {
    return a.at - b.at;
  }
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/sequence/create.mjs
var defaultSegmentEasing = "easeInOut";
var MAX_REPEAT = 20;
function createAnimationsFromSequence(sequence, { defaultTransition = {}, ...sequenceTransition } = {}, scope, generators2) {
  const defaultDuration = defaultTransition.duration || 0.3;
  const animationDefinitions = /* @__PURE__ */ new Map();
  const sequences = /* @__PURE__ */ new Map();
  const elementCache = {};
  const timeLabels = /* @__PURE__ */ new Map();
  let prevTime = 0;
  let currentTime = 0;
  let totalDuration = 0;
  for (let i = 0; i < sequence.length; i++) {
    const segment = sequence[i];
    if (typeof segment === "string") {
      timeLabels.set(segment, currentTime);
      continue;
    } else if (!Array.isArray(segment)) {
      timeLabels.set(segment.name, calcNextTime(currentTime, segment.at, prevTime, timeLabels));
      continue;
    }
    let [subject, keyframes2, transition = {}] = segment;
    if (transition.at !== void 0) {
      currentTime = calcNextTime(currentTime, transition.at, prevTime, timeLabels);
    }
    let maxDuration2 = 0;
    const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numSubjects = 0) => {
      const valueKeyframesAsList = keyframesAsList(valueKeyframes);
      const { delay: delay2 = 0, times = defaultOffset(valueKeyframesAsList), type = "keyframes", repeat, repeatType, repeatDelay = 0, ...remainingTransition } = valueTransition;
      let { ease: ease2 = defaultTransition.ease || "easeOut", duration } = valueTransition;
      const calculatedDelay = typeof delay2 === "function" ? delay2(elementIndex, numSubjects) : delay2;
      const numKeyframes = valueKeyframesAsList.length;
      const createGenerator = isGenerator(type) ? type : generators2 === null || generators2 === void 0 ? void 0 : generators2[type];
      if (numKeyframes <= 2 && createGenerator) {
        let absoluteDelta = 100;
        if (numKeyframes === 2 && isNumberKeyframesArray(valueKeyframesAsList)) {
          const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
          absoluteDelta = Math.abs(delta);
        }
        const springTransition = { ...remainingTransition };
        if (duration !== void 0) {
          springTransition.duration = secondsToMilliseconds(duration);
        }
        const springEasing = createGeneratorEasing(springTransition, absoluteDelta, createGenerator);
        ease2 = springEasing.ease;
        duration = springEasing.duration;
      }
      duration !== null && duration !== void 0 ? duration : duration = defaultDuration;
      const startTime = currentTime + calculatedDelay;
      if (times.length === 1 && times[0] === 0) {
        times[1] = 1;
      }
      const remainder = times.length - valueKeyframesAsList.length;
      remainder > 0 && fillOffset(times, remainder);
      valueKeyframesAsList.length === 1 && valueKeyframesAsList.unshift(null);
      if (repeat) {
        invariant(repeat < MAX_REPEAT, "Repeat count too high, must be less than 20");
        duration = calculateRepeatDuration(duration, repeat);
        const originalKeyframes = [...valueKeyframesAsList];
        const originalTimes = [...times];
        ease2 = Array.isArray(ease2) ? [...ease2] : [ease2];
        const originalEase = [...ease2];
        for (let repeatIndex = 0; repeatIndex < repeat; repeatIndex++) {
          valueKeyframesAsList.push(...originalKeyframes);
          for (let keyframeIndex = 0; keyframeIndex < originalKeyframes.length; keyframeIndex++) {
            times.push(originalTimes[keyframeIndex] + (repeatIndex + 1));
            ease2.push(keyframeIndex === 0 ? "linear" : getEasingForSegment(originalEase, keyframeIndex - 1));
          }
        }
        normalizeTimes(times, repeat);
      }
      const targetTime = startTime + duration;
      addKeyframes(valueSequence, valueKeyframesAsList, ease2, times, startTime, targetTime);
      maxDuration2 = Math.max(calculatedDelay + duration, maxDuration2);
      totalDuration = Math.max(targetTime, totalDuration);
    };
    if (isMotionValue(subject)) {
      const subjectSequence = getSubjectSequence(subject, sequences);
      resolveValueSequence(keyframes2, transition, getValueSequence("default", subjectSequence));
    } else {
      const subjects = resolveSubjects(subject, keyframes2, scope, elementCache);
      const numSubjects = subjects.length;
      for (let subjectIndex = 0; subjectIndex < numSubjects; subjectIndex++) {
        keyframes2 = keyframes2;
        transition = transition;
        const thisSubject = subjects[subjectIndex];
        const subjectSequence = getSubjectSequence(thisSubject, sequences);
        for (const key in keyframes2) {
          resolveValueSequence(keyframes2[key], getValueTransition2(transition, key), getValueSequence(key, subjectSequence), subjectIndex, numSubjects);
        }
      }
    }
    prevTime = currentTime;
    currentTime += maxDuration2;
  }
  sequences.forEach((valueSequences, element) => {
    for (const key in valueSequences) {
      const valueSequence = valueSequences[key];
      valueSequence.sort(compareByTime);
      const keyframes2 = [];
      const valueOffset = [];
      const valueEasing = [];
      for (let i = 0; i < valueSequence.length; i++) {
        const { at, value, easing } = valueSequence[i];
        keyframes2.push(value);
        valueOffset.push(progress(0, totalDuration, at));
        valueEasing.push(easing || "easeOut");
      }
      if (valueOffset[0] !== 0) {
        valueOffset.unshift(0);
        keyframes2.unshift(keyframes2[0]);
        valueEasing.unshift(defaultSegmentEasing);
      }
      if (valueOffset[valueOffset.length - 1] !== 1) {
        valueOffset.push(1);
        keyframes2.push(null);
      }
      if (!animationDefinitions.has(element)) {
        animationDefinitions.set(element, {
          keyframes: {},
          transition: {}
        });
      }
      const definition = animationDefinitions.get(element);
      definition.keyframes[key] = keyframes2;
      definition.transition[key] = {
        ...defaultTransition,
        duration: totalDuration,
        ease: valueEasing,
        times: valueOffset,
        ...sequenceTransition
      };
    }
  });
  return animationDefinitions;
}
function getSubjectSequence(subject, sequences) {
  !sequences.has(subject) && sequences.set(subject, {});
  return sequences.get(subject);
}
function getValueSequence(name, sequences) {
  if (!sequences[name])
    sequences[name] = [];
  return sequences[name];
}
function keyframesAsList(keyframes2) {
  return Array.isArray(keyframes2) ? keyframes2 : [keyframes2];
}
function getValueTransition2(transition, key) {
  return transition && transition[key] ? {
    ...transition,
    ...transition[key]
  } : { ...transition };
}
var isNumber = (keyframe) => typeof keyframe === "number";
var isNumberKeyframesArray = (keyframes2) => keyframes2.every(isNumber);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/render/object/ObjectVisualElement.mjs
function isObjectKey(key, object) {
  return key in object;
}
var ObjectVisualElement = class extends VisualElement {
  constructor() {
    super(...arguments);
    this.type = "object";
  }
  readValueFromInstance(instance, key) {
    if (isObjectKey(key, instance)) {
      const value = instance[key];
      if (typeof value === "string" || typeof value === "number") {
        return value;
      }
    }
    return void 0;
  }
  getBaseTargetFromProps() {
    return void 0;
  }
  removeValueFromRenderState(key, renderState) {
    delete renderState.output[key];
  }
  measureInstanceViewportBox() {
    return createBox();
  }
  build(renderState, latestValues) {
    Object.assign(renderState.output, latestValues);
  }
  renderInstance(instance, { output }) {
    Object.assign(instance, output);
  }
  sortInstanceNodePosition() {
    return 0;
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs
function createDOMVisualElement(element) {
  const options = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        transform: {},
        transformOrigin: {},
        style: {},
        vars: {},
        attrs: {}
      },
      latestValues: {}
    }
  };
  const node = isSVGElement(element) ? new SVGVisualElement(options) : new HTMLVisualElement(options);
  node.mount(element);
  visualElementStore.set(element, node);
}
function createObjectVisualElement(subject) {
  const options = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  };
  const node = new ObjectVisualElement(options);
  node.mount(subject);
  visualElementStore.set(subject, node);
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/animate/subject.mjs
function isSingleValue(subject, keyframes2) {
  return isMotionValue(subject) || typeof subject === "number" || typeof subject === "string" && !isDOMKeyframes(keyframes2);
}
function animateSubject(subject, keyframes2, options, scope) {
  const animations2 = [];
  if (isSingleValue(subject, keyframes2)) {
    animations2.push(animateSingleValue(subject, isDOMKeyframes(keyframes2) ? keyframes2.default || keyframes2 : keyframes2, options ? options.default || options : options));
  } else {
    const subjects = resolveSubjects(subject, keyframes2, scope);
    const numSubjects = subjects.length;
    invariant(Boolean(numSubjects), "No valid elements provided.");
    for (let i = 0; i < numSubjects; i++) {
      const thisSubject = subjects[i];
      const createVisualElement = thisSubject instanceof Element ? createDOMVisualElement : createObjectVisualElement;
      if (!visualElementStore.has(thisSubject)) {
        createVisualElement(thisSubject);
      }
      const visualElement = visualElementStore.get(thisSubject);
      const transition = { ...options };
      if ("delay" in transition && typeof transition.delay === "function") {
        transition.delay = transition.delay(i, numSubjects);
      }
      animations2.push(...animateTarget(visualElement, { ...keyframes2, transition }, {}));
    }
  }
  return animations2;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/animate/sequence.mjs
function animateSequence(sequence, options, scope) {
  const animations2 = [];
  const animationDefinitions = createAnimationsFromSequence(sequence, options, scope, { spring });
  animationDefinitions.forEach(({ keyframes: keyframes2, transition }, subject) => {
    animations2.push(...animateSubject(subject, keyframes2, transition));
  });
  return animations2;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/animate/index.mjs
function isSequence(value) {
  return Array.isArray(value) && value.some(Array.isArray);
}
function createScopedAnimate(scope) {
  function scopedAnimate(subjectOrSequence, optionsOrKeyframes, options) {
    let animations2 = [];
    if (isSequence(subjectOrSequence)) {
      animations2 = animateSequence(subjectOrSequence, optionsOrKeyframes, scope);
    } else {
      animations2 = animateSubject(subjectOrSequence, optionsOrKeyframes, options, scope);
    }
    const animation = new GroupPlaybackControls(animations2);
    if (scope) {
      scope.animations.push(animation);
    }
    return animation;
  }
  return scopedAnimate;
}
var animate = createScopedAnimate();

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/animators/waapi/utils/style.mjs
function setCSSVar(element, name, value) {
  element.style.setProperty(`--${name}`, value);
}
function setStyle(element, name, value) {
  element.style[name] = value;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-partial-keyframes.mjs
var supportsPartialKeyframes = memo(() => {
  try {
    document.createElement("div").animate({ opacity: [1] });
  } catch (e) {
    return false;
  }
  return true;
});

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/animators/waapi/NativeAnimation.mjs
var state = /* @__PURE__ */ new WeakMap();
function hydrateKeyframes(valueName, keyframes2, read) {
  for (let i = 0; i < keyframes2.length; i++) {
    if (keyframes2[i] === null) {
      keyframes2[i] = i === 0 ? read() : keyframes2[i - 1];
    }
    if (typeof keyframes2[i] === "number" && browserNumberValueTypes[valueName]) {
      keyframes2[i] = browserNumberValueTypes[valueName].transform(keyframes2[i]);
    }
  }
  if (!supportsPartialKeyframes() && keyframes2.length < 2) {
    keyframes2.unshift(read());
  }
}
var defaultEasing2 = "easeOut";
function getElementAnimationState(element) {
  const animationState = state.get(element) || /* @__PURE__ */ new Map();
  state.set(element, animationState);
  return state.get(element);
}
var NativeAnimation = class extends NativeAnimationControls {
  constructor(element, valueName, valueKeyframes, options) {
    const isCSSVar = valueName.startsWith("--");
    invariant(typeof options.type !== "string", `animateMini doesn't support "type" as a string. Did you mean to import { spring } from "framer-motion"?`);
    const existingAnimation = getElementAnimationState(element).get(valueName);
    existingAnimation && existingAnimation.stop();
    const readInitialKeyframe = () => {
      return valueName.startsWith("--") ? element.style.getPropertyValue(valueName) : window.getComputedStyle(element)[valueName];
    };
    if (!Array.isArray(valueKeyframes)) {
      valueKeyframes = [valueKeyframes];
    }
    hydrateKeyframes(valueName, valueKeyframes, readInitialKeyframe);
    if (isGenerator(options.type)) {
      const generatorOptions = createGeneratorEasing(options, 100, options.type);
      options.ease = supportsLinearEasing() ? generatorOptions.ease : defaultEasing2;
      options.duration = secondsToMilliseconds(generatorOptions.duration);
      options.type = "keyframes";
    } else {
      options.ease = options.ease || defaultEasing2;
    }
    const onFinish = () => {
      this.setValue(element, valueName, getFinalKeyframe(valueKeyframes, options));
      this.cancel();
      this.resolveFinishedPromise();
    };
    const init = () => {
      this.setValue = isCSSVar ? setCSSVar : setStyle;
      this.options = options;
      this.updateFinishedPromise();
      this.removeAnimation = () => {
        const elementState = state.get(element);
        elementState && elementState.delete(valueName);
      };
    };
    if (!supportsWaapi()) {
      super();
      init();
      onFinish();
    } else {
      super(startWaapiAnimation(element, valueName, valueKeyframes, options));
      init();
      if (options.autoplay === false) {
        this.animation.pause();
      }
      this.animation.onfinish = onFinish;
      getElementAnimationState(element).set(valueName, this);
    }
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(resolve, reject) {
    return this.currentFinishedPromise.then(resolve, reject);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((resolve) => {
      this.resolveFinishedPromise = resolve;
    });
  }
  play() {
    if (this.state === "finished") {
      this.updateFinishedPromise();
    }
    super.play();
  }
  cancel() {
    this.removeAnimation();
    super.cancel();
  }
};

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/animators/waapi/animate-elements.mjs
function animateElements(elementOrSelector, keyframes2, options, scope) {
  const elements = resolveElements(elementOrSelector, scope);
  const numElements = elements.length;
  invariant(Boolean(numElements), "No valid element provided.");
  const animations2 = [];
  for (let i = 0; i < numElements; i++) {
    const element = elements[i];
    const elementTransition = { ...options };
    if (typeof elementTransition.delay === "function") {
      elementTransition.delay = elementTransition.delay(i, numElements);
    }
    for (const valueName in keyframes2) {
      const valueKeyframes = keyframes2[valueName];
      const valueOptions = {
        ...getValueTransition(elementTransition, valueName)
      };
      valueOptions.duration = valueOptions.duration ? secondsToMilliseconds(valueOptions.duration) : valueOptions.duration;
      valueOptions.delay = secondsToMilliseconds(valueOptions.delay || 0);
      animations2.push(new NativeAnimation(element, valueName, valueKeyframes, valueOptions));
    }
  }
  return animations2;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/animators/waapi/animate-style.mjs
var createScopedWaapiAnimate = (scope) => {
  function scopedAnimate(elementOrSelector, keyframes2, options) {
    return new GroupPlaybackControls(animateElements(elementOrSelector, keyframes2, options, scope));
  }
  return scopedAnimate;
};
var animateMini = createScopedWaapiAnimate();

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/events/use-dom-event.mjs
var import_react44 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/projection/use-reset-projection.mjs
var import_react45 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/use-cycle.mjs
var import_react46 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/use-in-view.mjs
var import_react47 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/utils/use-instant-transition.mjs
var import_react48 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/animation/hooks/use-animated-state.mjs
var import_react49 = __toESM(require_react(), 1);
var createObject = () => ({});
var useVisualState = makeUseVisualState({
  scrapeMotionValuesFromProps: createObject,
  createRenderState: createObject
});

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/components/AnimateSharedLayout.mjs
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var React3 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/value/use-inverted-scale.mjs
var import_react50 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/components/Reorder/Group.mjs
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var import_react52 = __toESM(require_react(), 1);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/context/ReorderContext.mjs
var import_react51 = __toESM(require_react(), 1);
var ReorderContext = (0, import_react51.createContext)(null);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/components/Reorder/utils/check-reorder.mjs
function checkReorder(order, value, offset, velocity) {
  if (!velocity)
    return order;
  const index = order.findIndex((item2) => item2.value === value);
  if (index === -1)
    return order;
  const nextOffset = velocity > 0 ? 1 : -1;
  const nextItem = order[index + nextOffset];
  if (!nextItem)
    return order;
  const item = order[index];
  const nextLayout = nextItem.layout;
  const nextItemCenter = mixNumber(nextLayout.min, nextLayout.max, 0.5);
  if (nextOffset === 1 && item.layout.max + offset > nextItemCenter || nextOffset === -1 && item.layout.min + offset < nextItemCenter) {
    return moveItem(order, index, index + nextOffset);
  }
  return order;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/components/Reorder/Group.mjs
function ReorderGroupComponent({ children, as = "ul", axis = "y", onReorder, values, ...props }, externalRef) {
  const Component3 = useConstant(() => motion[as]);
  const order = [];
  const isReordering = (0, import_react52.useRef)(false);
  invariant(Boolean(values), "Reorder.Group must be provided a values prop");
  const context = {
    axis,
    registerItem: (value, layout2) => {
      const idx = order.findIndex((entry) => value === entry.value);
      if (idx !== -1) {
        order[idx].layout = layout2[axis];
      } else {
        order.push({ value, layout: layout2[axis] });
      }
      order.sort(compareMin);
    },
    updateOrder: (item, offset, velocity) => {
      if (isReordering.current)
        return;
      const newOrder = checkReorder(order, item, offset, velocity);
      if (order !== newOrder) {
        isReordering.current = true;
        onReorder(newOrder.map(getValue).filter((value) => values.indexOf(value) !== -1));
      }
    }
  };
  (0, import_react52.useEffect)(() => {
    isReordering.current = false;
  });
  return (0, import_jsx_runtime10.jsx)(Component3, { ...props, ref: externalRef, ignoreStrict: true, children: (0, import_jsx_runtime10.jsx)(ReorderContext.Provider, { value: context, children }) });
}
var ReorderGroup = (0, import_react52.forwardRef)(ReorderGroupComponent);
function getValue(item) {
  return item.value;
}
function compareMin(a, b) {
  return a.layout.min - b.layout.min;
}

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/components/Reorder/Item.mjs
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var import_react53 = __toESM(require_react(), 1);
function useDefaultMotionValue(value, defaultValue = 0) {
  return isMotionValue(value) ? value : useMotionValue(defaultValue);
}
function ReorderItemComponent({ children, style = {}, value, as = "li", onDrag, layout: layout2 = true, ...props }, externalRef) {
  const Component3 = useConstant(() => motion[as]);
  const context = (0, import_react53.useContext)(ReorderContext);
  const point = {
    x: useDefaultMotionValue(style.x),
    y: useDefaultMotionValue(style.y)
  };
  const zIndex = useTransform([point.x, point.y], ([latestX, latestY]) => latestX || latestY ? 1 : "unset");
  invariant(Boolean(context), "Reorder.Item must be a child of Reorder.Group");
  const { axis, registerItem, updateOrder } = context;
  return (0, import_jsx_runtime11.jsx)(Component3, { drag: axis, ...props, dragSnapToOrigin: true, style: { ...style, x: point.x, y: point.y, zIndex }, layout: layout2, onDrag: (event, gesturePoint) => {
    const { velocity } = gesturePoint;
    velocity[axis] && updateOrder(value, point[axis].get(), velocity[axis]);
    onDrag && onDrag(event, gesturePoint);
  }, onLayoutMeasure: (measured) => registerItem(value, measured), ref: externalRef, ignoreStrict: true, children });
}
var ReorderItem = (0, import_react53.forwardRef)(ReorderItemComponent);

// node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.2.2_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/framer-motion/dist/es/frameloop/index-legacy.mjs
var cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = (process2) => cancelFrame(process2);
  return acc;
}, {});

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/SearchableButtonList.js
var contentMotionProps = {
  transition: { duration: 0.2 },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};
var ESTIMATED_ITEM_HEIGHT = 72;
var VISIBILITY_BUFFER = 3;
function SearchableButtonList({
  items,
  transformItem,
  searchFilter,
  searchPlaceholder = "Search for an asset",
  onSelect
}) {
  const [searchStr, setSearchStr] = (0, import_react54.useState)("");
  const outerContainerRef = (0, import_react54.useRef)(null);
  const scrollContainerRef = (0, import_react54.useRef)(null);
  const [scrollTop, setScrollTop] = (0, import_react54.useState)(0);
  const [containerHeight, setContainerHeight] = (0, import_react54.useState)(0);
  const [contentHeight, setContentHeight] = (0, import_react54.useState)(0);
  const [renderedRange, setRenderedRange] = (0, import_react54.useState)({ start: 0, end: 0 });
  const transformedAndFiltered = (0, import_react54.useMemo)(() => {
    return items.filter((item) => !searchFilter || searchFilter({ item, searchStr })).map((item) => ({
      assetItem: transformItem(item),
      originalItem: item
    }));
  }, [items, searchFilter, searchStr, transformItem]);
  (0, import_react54.useEffect)(() => {
    setRenderedRange({ start: 0, end: 0 });
  }, [items, searchStr]);
  const desiredRange = (0, import_react54.useMemo)(() => {
    if (containerHeight === 0) {
      return { start: 0, end: transformedAndFiltered.length };
    }
    const startIndex = Math.max(0, Math.floor(scrollTop / ESTIMATED_ITEM_HEIGHT) - VISIBILITY_BUFFER);
    const endIndex = Math.min(
      transformedAndFiltered.length,
      Math.ceil((scrollTop + containerHeight) / ESTIMATED_ITEM_HEIGHT) + VISIBILITY_BUFFER
    );
    return { start: startIndex, end: endIndex };
  }, [scrollTop, containerHeight, transformedAndFiltered.length]);
  (0, import_react54.useEffect)(() => {
    setRenderedRange((prev) => ({
      start: Math.min(desiredRange.start, prev.start),
      end: Math.max(desiredRange.end, prev.end)
    }));
  }, [desiredRange]);
  const visibleRange = renderedRange;
  const visibleItems = (0, import_react54.useMemo)(() => {
    return transformedAndFiltered.slice(visibleRange.start, visibleRange.end);
  }, [transformedAndFiltered, visibleRange.start, visibleRange.end]);
  (0, import_react54.useEffect)(() => {
    var _a, _b;
    const container = (_b = (_a = scrollContainerRef.current) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.parentElement;
    if (!container) return;
    const updateDimensions = () => {
      setContainerHeight(container.clientHeight);
      setContentHeight(container.scrollHeight);
    };
    let scrollTimeout;
    const handleScroll = () => {
      if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = requestAnimationFrame(() => {
        setScrollTop(container.scrollTop);
      });
    };
    updateDimensions();
    container.addEventListener("scroll", handleScroll, { passive: true });
    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(container);
    const contentDiv = scrollContainerRef.current;
    if (contentDiv) {
      const contentResizeObserver = new ResizeObserver(updateDimensions);
      contentResizeObserver.observe(contentDiv);
      return () => {
        if (scrollTimeout) {
          cancelAnimationFrame(scrollTimeout);
        }
        container.removeEventListener("scroll", handleScroll);
        resizeObserver.disconnect();
        contentResizeObserver.disconnect();
      };
    }
    return () => {
      if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
      }
      container.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, []);
  const paddingTop = visibleRange.start * ESTIMATED_ITEM_HEIGHT;
  const paddingBottom = Math.max(0, (transformedAndFiltered.length - visibleRange.end) * ESTIMATED_ITEM_HEIGHT);
  const MAX_CONTAINER_HEIGHT = 480;
  (0, import_react54.useEffect)(() => {
    var _a, _b;
    const container = (_b = (_a = scrollContainerRef.current) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.parentElement;
    if (container) {
      requestAnimationFrame(() => {
        setContentHeight(container.scrollHeight);
      });
    }
  }, [visibleRange.start, visibleRange.end, transformedAndFiltered.length]);
  const outerContainerHeight = (0, import_react54.useMemo)(() => {
    if (contentHeight === 0) {
      return MAX_CONTAINER_HEIGHT;
    }
    const searchInputHeight = items.length >= 4 && !!searchFilter ? 56 : 0;
    const totalNeededHeight = contentHeight + searchInputHeight;
    if (totalNeededHeight < MAX_CONTAINER_HEIGHT) {
      return totalNeededHeight + 4;
    }
    return MAX_CONTAINER_HEIGHT;
  }, [contentHeight, items.length, searchFilter]);
  return (0, import_jsx_runtime12.jsxs)(
    "div",
    {
      ref: outerContainerRef,
      style: {
        display: "flex",
        flexDirection: "column",
        height: `${outerContainerHeight}px`,
        maxHeight: `${MAX_CONTAINER_HEIGHT}px`,
        overflow: "hidden"
      },
      children: [
        items.length >= 4 && !!searchFilter && (0, import_jsx_runtime12.jsx)(
          SearchInput,
          {
            placeholder: searchPlaceholder,
            value: searchStr,
            onCpslInput: (e) => {
              setSearchStr(e.detail.value);
            },
            style: { marginBottom: "8px" },
            children: (0, import_jsx_runtime12.jsx)(CpslIcon, { icon: "search", slot: "start" })
          }
        ),
        (0, import_jsx_runtime12.jsx)(GradientScroll, { height: "100%", gap: "8px", children: (0, import_jsx_runtime12.jsx)("div", { ref: scrollContainerRef, children: (0, import_jsx_runtime12.jsx)(List, { style: { paddingTop, paddingBottom }, children: (0, import_jsx_runtime12.jsx)(AnimatePresence, { mode: "sync", children: visibleItems.map(({ assetItem, originalItem }) => {
          const { key, icon, text, textSecondary, endText, endTextSecondary } = assetItem;
          return (0, import_jsx_runtime12.jsx)(motion.li, __spreadProps2(__spreadValues2({ style: { width: "100%" } }, contentMotionProps), { children: (0, import_jsx_runtime12.jsxs)(AssetButton, { fullWidth: true, variant: "secondary", onClick: () => onSelect(originalItem), children: [
            icon,
            (0, import_jsx_runtime12.jsxs)(Info, { children: [
              (0, import_jsx_runtime12.jsx)(Code, { color: "contrast", variant: "bodyL", children: text }),
              textSecondary && (0, import_jsx_runtime12.jsx)(Name, { color: "contrast", variant: "bodyS", children: textSecondary })
            ] }),
            endText && (0, import_jsx_runtime12.jsxs)(End, { children: [
              (0, import_jsx_runtime12.jsx)(EndText, { color: "primary", variant: "bodyM", children: endText }),
              endTextSecondary && (0, import_jsx_runtime12.jsx)(EndTextSecondary, { color: "contrast", variant: "bodyS", children: endTextSecondary })
            ] })
          ] }) }), key);
        }) }) }) }) })
      ]
    }
  );
}
var List = safeStyled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  list-style: none;
  padding-inline-start: 0;
  padding-inline-end: 0;
  margin: 0;
`;
var AssetButton = safeStyled(CpslButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  --button-secondary-background-color: var(--cpsl-color-background-8);
  --button-secondary-border-color: var(--cpsl-color-background-8);
  --button-secondary-hover-background-color: var(--cpsl-color-background-16);
  --button-secondary-hover-border-color: var(--cpsl-color-background-16);
`;
var Info = safeStyled(CpslCol)`
    text-align: left;
    min-width: 0;
  `;
var Code = CpslText;
var Name = safeStyled(CpslText)`
    display: flex;
    align-items: flex-start;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
    height: 20px;
  `;
var EndText = safeStyled(CpslText)`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  `;
var EndTextSecondary = safeStyled(CpslText)`
    overflow: hidden;
  `;
var End = safeStyled(CpslCol)`
  text-align: right;
  align-items: flex-end;
  gap: 4px;
  min-width: 0;
`;
var SearchInput = safeStyled(CpslInput)`
  --container-background-color: var(--cpsl-color-background-8);
  --input-background-color: transparent;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/QuantityInput.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
function QuantityInput({
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  size = "72px",
  symbol
}) {
  return (0, import_jsx_runtime13.jsxs)(Container, { style: { fontSize: size, position: "relative" }, children: [
    symbol && (0, import_jsx_runtime13.jsx)(CurrencySign, { slot: "start", children: symbol }),
    (0, import_jsx_runtime13.jsx)(
      Input,
      {
        value: value != null ? value : "",
        onFocus: (e) => {
          e.currentTarget.select();
          onFocus == null ? void 0 : onFocus();
        },
        onKeyDown: (e) => {
          if (!/^(\d|\.)$/.test(e.key) && !["Delete", "Backspace", "Tab", "Shift", "ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) {
            e.preventDefault();
          }
        },
        onChange: (e) => {
          const rawValue = e.currentTarget.value;
          if (rawValue === "") {
            onChange(null);
            return;
          }
          const numericValue = rawValue.replace(/[^0-9.]/g, "");
          if (numericValue === "") {
            onChange(null);
            return;
          }
          const isValidNumberFormat = /^\d*\.?\d*$/.test(numericValue);
          if (isValidNumberFormat) {
            onChange(numericValue);
          } else {
            onChange(null);
          }
        },
        onBlur: (e) => {
          const numericValue = (e.currentTarget.value || "").replace(/[^0-9.]/g, "");
          if (numericValue === "") {
            onChange(null);
          } else {
            const parsed = parseFloat(numericValue);
            if (!isNaN(parsed)) {
              onChange(parsed.toString());
            } else {
              onChange(null);
            }
          }
          onBlur == null ? void 0 : onBlur();
        },
        placeholder: placeholder || "0"
      }
    )
  ] });
}
var Container = safeStyled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--cpsl-font-family);
  color: var(--cpsl-color-text-primary);
`;
var CurrencySign = safeStyled.div`
  position: relative;
  left: 0px;
`;
var Input = safeStyled.input`
  font-family: var(--cpsl-font-family);
  font-size: inherit;
  color: inherit;
  background-color: transparent;
  height: auto;
  border-width: 0;
  text-align: center;
  width: 100%;
  outline: none;
  field-sizing: content;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Body/AnimatedHeightWrapper.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var import_react55 = __toESM(require_react(), 1);
var AnimatedHeightWrapper = ({ children, className, noAnimate }) => {
  const containerRef = (0, import_react55.useRef)(null);
  const [height, setHeight] = (0, import_react55.useState)("auto");
  (0, import_react55.useEffect)(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        const observedHeight = entries[0].contentRect.height;
        setHeight(observedHeight);
      });
      resizeObserver.observe(containerRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);
  return (0, import_jsx_runtime14.jsx)(Container2, { className, style: { height }, animate: { height }, transition: { duration: noAnimate ? 0 : 0.2 }, children: (0, import_jsx_runtime14.jsx)("div", { ref: containerRef, children }) });
};
var Container2 = safeStyled(motion.div)`
  overflow: hidden;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/common.js
var SpinnerContainer2 = safeStyled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
var QRContainer = safeStyled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 286px;
  height: 286px;
`;
var InfoBoxContent = safeStyled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
var InfoBoxHeader = safeStyled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  cpsl-icon {
    --height: 20px;
    --width: 20px;
  }
`;
var FilledDisabledInput = safeStyled(CpslInput)`
  --container-border-color: var(--cpsl-color-input-border-placeholder);
  --container-background-color: var(--cpsl-color-background-0);
  --input-background-color: transparent;
  --input-font-weight: 500;
  --input-color: var(--cpsl-color-text-secondary);
`;
var FullWidthFilledDisabledInput = safeStyled(FilledDisabledInput)`
  width: 100%;
`;
var CenteredText = safeStyled(CpslText)`
  width: 100%;
  text-align: center;
`;
var InnerStepContainer = safeStyled.div`
  width: 100%;
  height: 100%;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
var StepContainer = safeStyled(InnerStepContainer)`
  gap: ${({ $wide }) => $wide ? "32px" : "24px"};
`;
var Heading = (_a) => {
  var _b = _a, { children } = _b, props = __objRest2(_b, ["children"]);
  return (0, import_jsx_runtime15.jsx)(CpslText, __spreadProps2(__spreadValues2({ variant: "bodyL", weight: "semiBold" }, props), { style: __spreadProps2(__spreadValues2({}, props.style), { textAlign: "center", width: "100%" }), children }));
};
var StyledCpslTileButton = safeStyled(CpslTileButton)`
  --button-width: 100%;
  --button-height: 87px;
  --button-icon-height: 32px;
  --button-icon-width: 32px;
`;
var HeroIcon = safeStyled(CpslIcon)`
  --height: 80px;
  --width: 80px;
  --icon-color: var(--cpsl-color-text-primary);
`;
var HeaderSelect = safeStyled(CpslSelect)`
  --container-height: 26px;
  --container-border-width: 0px;
  --container-padding-end: 4px;
  --container-padding-start: 0px;
  --container-box-shadow: none;
  --container-gap: 2px;
  --icon-width: 16px;
  --icon-height: 16px;
  --dropdown-inner-padding: 16px;
  --dropdown-inner-gap: 10px;
  position: relative;

  &::part(selected-text) {
    white-space: nowrap;
  }

  &::part(dropdown) {
    min-width: ${({ $width }) => `${$width - 2}px`};
  }

  &::part(popover) {
    /* Have to adjust the top of the popover here since we're using a transform on the modal which causes fixed position items to not be relative to the viewport */
    @media (max-width: ${MOBILE_SIZE}px) {
      top: ${({ $top }) => $top ? `${$top}px` : "0px"};
      bottom: 16px;
    }
    cpsl-auth-modal.force-mobile-media & {
      top: ${({ $top }) => $top ? `${$top}px` : "0px"};
      bottom: 16px;
    }
  }

  &::part(icon) {
    --icon-color: var(--cpsl-color-contrast);
  }
`;
var HeaderSelectItem = safeStyled(CpslSelectItem)`
  --outer-container-padding-start: 0px;
  --outer-container-padding-end: 0px;
  --outer-container-padding-top: 0px;
  --outer-container-padding-bottom: 0px;
  --container-padding-start: 0px;
  --container-padding-end: 0px;
  --container-padding-top: 0px;
  --container-padding-bottom: 0px;
  width: 236px;
`;
var HeaderSelectContainer = safeStyled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: var(--cpsl-border-radius-tile-button);
  background-color: var(--cpsl-color-background-8);
`;
var StyledIcon = safeStyled(CpslIcon)`
  background: var(--cpsl-color-background-0);
  border-radius: 100%;
`;
function AssetIcon({ asset, size }) {
  const isDark = useStore2((state2) => {
    var _a, _b;
    return ((_b = (_a = state2.modalConfig) == null ? void 0 : _a.theme) == null ? void 0 : _b.mode) === "dark";
  });
  const data = ON_RAMP_ASSETS[asset];
  return (0, import_jsx_runtime15.jsx)(StyledIcon, { size, icon: data.icon, inset: data.isCircular ? void 0 : "15%", invert: isDark && data.isDark });
}
function NetworkIcon({ network, size }) {
  var _a;
  const isDark = useStore2((state2) => {
    var _a2, _b;
    return ((_b = (_a2 = state2.modalConfig) == null ? void 0 : _a2.theme) == null ? void 0 : _b.mode) === "dark";
  });
  const data = (_a = NETWORKS[network != null ? network : ""]) != null ? _a : {
    icon: "globe",
    isPlain: true
  };
  return (0, import_jsx_runtime15.jsx)(
    StyledIcon,
    {
      size,
      icon: data.icon,
      inset: data.isCircular ? void 0 : "15%",
      color: (data == null ? void 0 : data.isPlain) ? "var(--cpsl-color-text-contrast)" : void 0,
      invert: isDark && data.isDark
    }
  );
}
var ErrorContainer = safeStyled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
var ErrorIcon = safeStyled(CpslIcon)`
  --height: 16px;
  --width: 16px;
  --icon-color: var(--cpsl-color-text-error);
`;
function AccountTypeIcon({
  accountType,
  size,
  inset,
  src
}) {
  var _a;
  const isDark = useStore2((state2) => {
    var _a2, _b;
    return ((_b = (_a2 = state2.modalConfig) == null ? void 0 : _a2.theme) == null ? void 0 : _b.mode) === "dark";
  });
  const data = accountType ? ACCOUNT_TYPES[accountType] : null;
  return data || src ? (0, import_jsx_runtime15.jsx)(
    CpslIcon,
    {
      size,
      inset,
      icon: (_a = data == null ? void 0 : data.iconBranded) != null ? _a : data == null ? void 0 : data.icon,
      color: (data == null ? void 0 : data.isPlain) ? "var(--cpsl-color-text-contrast)" : void 0,
      src,
      invert: isDark && (data == null ? void 0 : data.isDark)
    }
  ) : null;
}
function HeroAccountTypeIcon({ accountType, src }) {
  if (accountType === "EMAIL" || accountType === "PHONE") {
    return (0, import_jsx_runtime15.jsx)(HeroGenericIcon, { accountType });
  }
  return (0, import_jsx_runtime15.jsx)(AccountTypeIcon, { accountType, size: "60px", src });
}
function HeroSuccessIcon() {
  return (0, import_jsx_runtime15.jsx)(CpslIcon, { icon: "checkCircleFilled", size: "80px", style: { ["--icon-color"]: "var(--cpsl-color-utility-green" } });
}
function GradientScroll({ height, gap, children }) {
  const [isNotAtBottom, setIsNotAtBottom] = (0, import_react56.useState)(false);
  const [isNotAtTop, setIsNotAtTop] = (0, import_react56.useState)(false);
  const ref = (0, import_react56.useRef)(null);
  const onScroll = () => {
    if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;
      if (scrollHeight <= clientHeight) {
        setIsNotAtTop(false);
        setIsNotAtBottom(false);
      } else {
        setIsNotAtTop(scrollTop > 30);
        setIsNotAtBottom(scrollTop + clientHeight < scrollHeight - 30);
      }
    }
  };
  (0, import_react56.useEffect)(() => {
    onScroll();
    const resizeObserver = new ResizeObserver(() => {
      onScroll();
    });
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return (0, import_jsx_runtime15.jsx)(
    GradientScrollContainer,
    {
      ref,
      $height: height,
      $gap: gap,
      $isNotAtBottom: isNotAtBottom,
      $isNotAtTop: isNotAtTop,
      onScroll,
      children: (0, import_jsx_runtime15.jsx)("div", { children })
    }
  );
}
var HeroGenericIcon = ({ accountType }) => {
  return (0, import_jsx_runtime15.jsx)(Avatar, { children: (0, import_jsx_runtime15.jsx)(AccountTypeIcon, { accountType, size: "24px" }) });
};
var GradientScrollContainer = safeStyled.div`
  max-height: ${({ $height }) => $height || "100%"};
  width: 100%;
  overflow-y: auto;
  mask-image: ${({ $isNotAtBottom, $isNotAtTop }) => $isNotAtBottom && $isNotAtTop ? "linear-gradient(to bottom, transparent 0%, black 24px, black calc(100% - 24px), transparent 100%)" : $isNotAtBottom ? "linear-gradient(to bottom, black calc(100% - 24px), transparent 100%)" : $isNotAtTop ? "linear-gradient(to top, black calc(100% - 24px), transparent 100%)" : "none"};

  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${({ $gap }) => $gap || "8px"};
  }
`;
var Avatar = safeStyled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--cpsl-color-background-8);
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/providers/AuthProvider.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
var import_react72 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/ParaProvider.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var import_react71 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/ParaProviderMin.js
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
var import_react70 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/utils/useAutoSessionKeepAlive.js
var import_react63 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/utils/useClient.js
var useClient = () => {
  const client = useStore2((state2) => state2.client);
  return client;
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/utils/useModal.js
var useModal = () => {
  const isOpen = useStore2((state2) => state2.isOpen);
  const setIsOpen2 = useStore2((state2) => state2.setIsOpen);
  const refs = useStore2((state2) => state2.refs);
  const setStep = useModalStore((state2) => state2.setStep);
  const openModal = ({ step } = {}) => {
    if (step) {
      refs.openedToStep.current = step;
      setStep(step);
    }
    if (!isOpen) {
      setIsOpen2(true);
    }
  };
  const closeModal = () => {
    refs.openedToStep.current = null;
    setIsOpen2(false);
  };
  return { isOpen, openModal, closeModal };
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/utils/useWalletState.js
var import_react57 = __toESM(require_react(), 1);
var useWalletState = () => {
  const client = useClient();
  const selectedWalletId = useStore2((state2) => state2.selectedWalletId);
  const selectedWalletType = useStore2((state2) => state2.selectedWalletType);
  const setStoredSelectedWallet = useStore2((state2) => state2.setSelectedWallet);
  const clearSelectedWallet = useStore2((state2) => state2.clearSelectedWallet);
  const setSelectedWallet = (0, import_react57.useCallback)(
    ({ id: id3, type }) => {
      try {
        const validId = client == null ? void 0 : client.findWalletId(id3, type ? { type: [type] } : void 0);
        if (validId !== id3) {
          clearSelectedWallet();
        } else {
          setStoredSelectedWallet(id3, type);
        }
      } catch (e) {
        clearSelectedWallet();
      }
    },
    [client, clearSelectedWallet, setStoredSelectedWallet]
  );
  const updateSelectedWallet = (0, import_react57.useCallback)(() => {
    if (!client) {
      clearSelectedWallet();
      return;
    }
    if (!selectedWalletId || !client.findWallet(selectedWalletId)) {
      const defaultWallet = client.findWallet(void 0, void 0, { forbidPregen: true });
      setSelectedWallet({ id: defaultWallet == null ? void 0 : defaultWallet.id, type: defaultWallet == null ? void 0 : defaultWallet.type });
    }
  }, [clearSelectedWallet, setSelectedWallet, client, selectedWalletId]);
  return {
    selectedWallet: {
      id: selectedWalletId,
      type: selectedWalletType,
      address: selectedWalletId ? client == null ? void 0 : client.getDisplayAddress(selectedWalletId, { addressType: selectedWalletType }) : void 0
    },
    setSelectedWallet,
    updateSelectedWallet
  };
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/utils/useInternalClient.js
var useInternalClient = () => {
  const client = useClient();
  return client;
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/queries/useIsFullyLoggedIn.js
var IS_FULLY_LOGGED_IN_BASE_KEY = "PARA_FULLY_LOGGED_IN";
var useIsFullyLoggedIn = () => {
  var _a;
  const client = useInternalClient();
  return useQuery({
    enabled: !!(client == null ? void 0 : client.isReady),
    queryKey: [IS_FULLY_LOGGED_IN_BASE_KEY, (_a = client == null ? void 0 : client.userId) != null ? _a : null],
    queryFn: () => __async(void 0, null, function* () {
      var _a2;
      return (_a2 = yield client == null ? void 0 : client.isFullyLoggedIn()) != null ? _a2 : false;
    })
  });
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/queries/useAccount.js
var import_react58 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/actions/getEmbeddedAccount.js
var getEmbeddedAccount = (para, isFullyLoggedIn) => __async(void 0, null, function* () {
  switch (true) {
    case !para:
    case !(para == null ? void 0 : para.isReady):
    case isFullyLoggedIn === void 0:
      return { isConnected: false };
  }
  if (para.isGuestMode) {
    return {
      isConnected: true,
      isGuestMode: true,
      wallets: para.availableWallets
    };
  }
  if (!isFullyLoggedIn) {
    return {
      isConnected: false
    };
  }
  const authInfo = para.authInfo;
  let authMethods;
  try {
    authMethods = yield para.supportedUserAuthMethods();
  } catch (e) {
    authMethods = /* @__PURE__ */ new Set();
  }
  const value = {
    auth: authInfo == null ? void 0 : authInfo.auth,
    authType: authInfo == null ? void 0 : authInfo.authType,
    identifier: authInfo == null ? void 0 : authInfo.identifier,
    userId: para.userId,
    wallets: para.availableWallets,
    isConnected: true,
    isGuestMode: false,
    authMethods
  };
  if (authInfo) {
    switch (authInfo.authType) {
      case "email":
        value.email = authInfo.identifier;
        break;
      case "phone":
        value.phone = authInfo.identifier;
        break;
      case "farcaster":
        value.farcasterUsername = authInfo.identifier;
        break;
      case "telegram":
        value.telegramUserId = authInfo.identifier;
        break;
      case "externalWallet":
        value.externalWalletAddress = authInfo.identifier;
        break;
      default:
        break;
    }
  }
  return value;
});

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/queries/useAccount.js
var ACCOUNT_BASE_KEY = "PARA_ACCOUNT";
function pickSolanaAdapter(adapter) {
  if (!adapter) return { isConnected: false };
  const { connected, connecting, publicKey, name, icon, readyState, supportedTransactionVersions, url } = adapter;
  return {
    isConnected: connected,
    isConnecting: connecting,
    publicKey,
    name,
    icon,
    readyState,
    supportedTransactionVersions,
    url
  };
}
function pickCosmosAccount(account) {
  if (!account) return { isConnected: false };
  const _a = account, { reconnect: _ } = _a, rest = __objRest2(_a, ["reconnect"]);
  return rest;
}
var lastConnectionState = "";
var invalidationTimeoutId = null;
var useInvalidation = (connectionStates, queryKey2) => {
  const queryClient = useQueryClient();
  (0, import_react58.useEffect)(() => {
    const connectionStateKey = `${connectionStates.evm}-${connectionStates.cosmos}-${connectionStates.solana}`;
    if (connectionStateKey === lastConnectionState) {
      return;
    }
    lastConnectionState = connectionStateKey;
    if (invalidationTimeoutId) {
      clearTimeout(invalidationTimeoutId);
    }
    invalidationTimeoutId = setTimeout(() => {
      queryClient.invalidateQueries({ queryKey: queryKey2 });
      invalidationTimeoutId = null;
    }, 0);
    return () => {
      if (invalidationTimeoutId) {
        clearTimeout(invalidationTimeoutId);
        invalidationTimeoutId = null;
      }
    };
  }, [connectionStates, queryClient]);
};
var useAccount = ({ cosmos } = {}) => {
  var _a, _b, _c, _d, _e, _f;
  const client = useInternalClient();
  const { data: isFullyLoggedIn, isSuccess, isLoading: isFullyLoggedInLoading } = useIsFullyLoggedIn();
  const evmContext = useStore2((state2) => state2.evmContext);
  const { useAccount: useEvmAccount } = (0, import_react58.useContext)(evmContext);
  const evmAccount = useEvmAccount();
  const evmQueryKeys = [evmAccount == null ? void 0 : evmAccount.addresses, evmAccount == null ? void 0 : evmAccount.chainId];
  const cosmosContext = useStore2((state2) => state2.cosmosContext);
  const { useAccount: useCosmosAccount } = (0, import_react58.useContext)(cosmosContext);
  const cosmosAccount = useCosmosAccount(cosmos);
  const cosmosQueryKeys = [cosmosAccount == null ? void 0 : cosmosAccount.data];
  const solanaContext = useStore2((state2) => state2.solanaContext);
  const { useWallet: useSolanaWallet } = (0, import_react58.useContext)(solanaContext);
  const solanaWallet = useSolanaWallet();
  const solanaQueryKeys = [(_b = (_a = solanaWallet == null ? void 0 : solanaWallet.wallet) == null ? void 0 : _a.adapter) == null ? void 0 : _b.publicKey];
  const solanaAdapter = (_c = solanaWallet == null ? void 0 : solanaWallet.wallet) == null ? void 0 : _c.adapter;
  const queryKey2 = [
    ACCOUNT_BASE_KEY,
    isFullyLoggedIn != null ? isFullyLoggedIn : null,
    isFullyLoggedInLoading,
    (_d = client == null ? void 0 : client.userId) != null ? _d : null,
    evmQueryKeys,
    cosmosQueryKeys,
    solanaQueryKeys
  ];
  const connectionStates = (0, import_react58.useMemo)(() => {
    var _a2, _b2;
    return {
      evm: !!(evmAccount == null ? void 0 : evmAccount.isConnected),
      cosmos: !!(cosmosAccount == null ? void 0 : cosmosAccount.isConnected),
      solana: !!((_b2 = (_a2 = solanaWallet == null ? void 0 : solanaWallet.wallet) == null ? void 0 : _a2.adapter) == null ? void 0 : _b2.connected)
    };
  }, [!!(evmAccount == null ? void 0 : evmAccount.isConnected), !!(cosmosAccount == null ? void 0 : cosmosAccount.isConnected), !!((_f = (_e = solanaWallet == null ? void 0 : solanaWallet.wallet) == null ? void 0 : _e.adapter) == null ? void 0 : _f.connected)]);
  useInvalidation(connectionStates, queryKey2);
  const { data, isLoading } = useQuery({
    enabled: isSuccess && !!client,
    queryKey: queryKey2,
    queryFn: () => __async(void 0, null, function* () {
      const paraAccount = yield getEmbeddedAccount(client, isFullyLoggedIn);
      let connectionType = "none";
      if (paraAccount.isConnected) {
        connectionType = "embedded";
        if (paraAccount.wallets.some((w) => w.isExternal)) {
          connectionType = "both";
        }
        if (paraAccount.wallets.every((w) => w.isExternal) && ((evmAccount == null ? void 0 : evmAccount.isConnected) || (cosmosAccount == null ? void 0 : cosmosAccount.isConnected) || (solanaAdapter == null ? void 0 : solanaAdapter.connected))) {
          connectionType = "external";
        }
      }
      const isEmbeddedConnected = connectionType === "embedded" || connectionType === "both";
      const connectedNetworks = [];
      if (evmAccount == null ? void 0 : evmAccount.isConnected) {
        connectedNetworks.push("evm");
      }
      if (cosmosAccount == null ? void 0 : cosmosAccount.isConnected) {
        connectedNetworks.push("cosmos");
      }
      if (solanaAdapter == null ? void 0 : solanaAdapter.connected) {
        connectedNetworks.push("solana");
      }
      return {
        isConnected: paraAccount.isConnected,
        connectionType,
        embedded: __spreadProps2(__spreadValues2({}, paraAccount), { isConnected: isEmbeddedConnected }),
        external: {
          connectedNetworks,
          evm: evmAccount != null ? evmAccount : {
            address: void 0,
            addresses: void 0,
            chain: void 0,
            chainId: void 0,
            connector: void 0,
            isConnected: false,
            isReconnecting: false,
            isConnecting: false,
            isDisconnected: true,
            status: "disconnected"
          },
          cosmos: pickCosmosAccount(cosmosAccount),
          solana: pickSolanaAdapter(solanaAdapter)
        }
      };
    })
  });
  const defaultResp = {
    isConnected: false,
    connectionType: "none",
    isLoading,
    embedded: {
      isConnected: false
    },
    external: {
      connectedNetworks: [],
      evm: {
        address: void 0,
        addresses: void 0,
        chain: void 0,
        chainId: void 0,
        connector: void 0,
        isConnected: false,
        isReconnecting: false,
        isConnecting: false,
        isDisconnected: true,
        status: "disconnected"
      },
      cosmos: { isConnected: false },
      solana: { isConnected: false }
    }
  };
  return __spreadProps2(__spreadValues2({}, data != null ? data : defaultResp), {
    isLoading: isFullyLoggedInLoading || isLoading
  });
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/queries/useParaStatus.js
var useParaStatus = () => {
  var _a, _b;
  const client = useInternalClient();
  const { data } = useQuery({
    enabled: !!client,
    queryKey: ["useParaStatus", (_a = client == null ? void 0 : client.isReady) != null ? _a : null, (_b = client == null ? void 0 : client.isFarcasterMiniApp) != null ? _b : null],
    queryFn: () => {
      var _a2, _b2;
      return {
        isReady: (_a2 = client == null ? void 0 : client.isReady) != null ? _a2 : false,
        isFarcasterMiniApp: (_b2 = client == null ? void 0 : client.isFarcasterMiniApp) != null ? _b2 : false
      };
    }
  });
  return data != null ? data : { isReady: false, isFarcasterMiniApp: false };
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/actions/getWallet.js
var getWallet = (para, selectedWallet, isConnected) => __async(void 0, null, function* () {
  var _a;
  if (!para) {
    return null;
  }
  const isLoggedIn = isConnected != null ? isConnected : yield para == null ? void 0 : para.isFullyLoggedIn();
  if (!isLoggedIn) {
    return null;
  }
  return (_a = para.findWallet(selectedWallet == null ? void 0 : selectedWallet.id, selectedWallet == null ? void 0 : selectedWallet.type)) != null ? _a : null;
});

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/queries/useWallet.js
var WALLET_BASE_KEY = "PARA_WALLET";
var useWallet = () => {
  var _a, _b;
  const client = useClient();
  const { selectedWallet } = useWalletState();
  const { data: isFullyLoggedIn, isSuccess } = useIsFullyLoggedIn();
  return useQuery({
    enabled: !!client && !!selectedWallet && isSuccess,
    queryKey: [WALLET_BASE_KEY, isFullyLoggedIn != null ? isFullyLoggedIn : null, (_a = selectedWallet.id) != null ? _a : null, (_b = selectedWallet.type) != null ? _b : null],
    queryFn: () => __async(void 0, null, function* () {
      return yield getWallet(client, selectedWallet, isFullyLoggedIn);
    })
  });
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/actions/utils.js
function generateCoreAction(method) {
  return (_para, ...args) => __async(this, null, function* () {
    try {
      if (!_para) {
        throw new Error("no para instance");
      }
      const para = _para;
      return typeof para[method] === "function" ? yield para[method](...args) : para[method];
    } catch (e) {
      throw e;
    }
  });
}
function generateInternalAction(method) {
  return (_para, ...args) => __async(this, null, function* () {
    try {
      if (!_para) {
        throw new Error("no para instance");
      }
      const para = _para;
      return typeof para[method] === "function" ? yield para[method](...args) : para[method];
    } catch (e) {
      throw e;
    }
  });
}

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/actions/index.js
var signUpOrLogIn = generateCoreAction("signUpOrLogIn");
var verifyNewAccount = generateCoreAction("verifyNewAccount");
var waitForLogin = generateCoreAction("waitForLogin");
var waitForSignup = generateCoreAction("waitForSignup");
var waitForWalletCreation = generateCoreAction("waitForWalletCreation");
var verifyOAuth = generateCoreAction("verifyOAuth");
var verifyFarcaster = generateCoreAction("verifyFarcaster");
var verifyTelegram = generateCoreAction("verifyTelegram");
var loginExternalWallet = generateCoreAction("loginExternalWallet");
var verifyExternalWallet = generateCoreAction("verifyExternalWallet");
var setup2fa = generateCoreAction("setup2fa");
var enable2fa = generateCoreAction("enable2fa");
var verify2fa = generateCoreAction("verify2fa");
var keepSessionAlive = generateCoreAction("keepSessionAlive");
var logout = generateCoreAction("logout");
var resendVerificationCode = generateCoreAction("resendVerificationCode");
var createWallet = generateCoreAction("createWallet");
var createWalletPerType = generateCoreAction("createWalletPerType");
var createPregenWallet = generateCoreAction("createPregenWallet");
var createPregenWalletPerType = generateCoreAction("createPregenWalletPerType");
var claimPregenWallets = generateCoreAction("claimPregenWallets");
var hasPregenWallet = generateCoreAction("hasPregenWallet");
var updatePregenWalletIdentifier = generateCoreAction("updatePregenWalletIdentifier");
var createGuestWallets = generateCoreAction("createGuestWallets");
var signMessage = generateCoreAction("signMessage");
var signTransaction = generateCoreAction("signTransaction");
var getWalletBalance = generateCoreAction("getWalletBalance");
var issueJwt = generateCoreAction("issueJwt");
var getLinkedAccounts = generateCoreAction("getLinkedAccounts");
var accountLinkInProgress = generateCoreAction("accountLinkInProgress");
var addCredential = generateCoreAction("addCredential");
var linkAccount = generateInternalAction("linkAccount");
var unlinkAccount = generateInternalAction("unlinkAccount");
var verifyEmailOrPhoneLink = generateInternalAction("verifyEmailOrPhoneLink");
var verifyFarcasterLink = generateInternalAction("verifyFarcasterLink");
var verifyTelegramLink = generateInternalAction("verifyTelegramLink");
var verifyOAuthLink = generateInternalAction("verifyOAuthLink");
var verifyExternalWalletLink = generateInternalAction("verifyExternalWalletLink");
var exportPrivateKey = generateCoreAction("exportPrivateKey");

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/providers/ExternalWalletProvider.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var import_react59 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/hooks/useGoBack.js
var useGoBack = () => {
  const currentStep = useModalStore((state2) => state2.step);
  const refs = useModalStore((state2) => state2.refs);
  const setStep = useModalStore((state2) => state2.setStep);
  const accountAddFundTab = useModalStore((state2) => state2.accountAddFundTab);
  const decrementStep = useModalStore((state2) => state2.decrementStep);
  const resetState = useModalStore((state2) => state2.resetState);
  const { setChainIdSwitchingTo, disconnectExternalWallet } = useExternalWallets();
  const para = useInternalClient();
  const iFrameUrl = useModalStore((state2) => state2.iFrameUrl);
  const setIFrameUrl = useModalStore((state2) => state2.setIFrameUrl);
  const setIsIFrameReady = useModalStore((state2) => state2.setIsIFrameReady);
  const goBack = () => {
    if (accountAddFundTab && currentStep === ModalStep.ADD_FUNDS_AWAITING) {
      setStep(getAddFundsStep(accountAddFundTab));
    } else {
      decrementStep();
    }
    switch (refs.currentStep.current) {
      case ModalStep.AUTH_MAIN:
      case ModalStep.AUTH_MORE:
      case ModalStep.EX_WALLET_SELECTED:
      case ModalStep.EXTERNAL_WALLET_VERIFICATION: {
        resetState();
        if (para.isExternalWalletAuth) {
          disconnectExternalWallet();
        }
        break;
      }
      case ModalStep.PASSWORD_CREATION: {
        const urlWithTimestamp = iFrameUrl ? `${iFrameUrl}${iFrameUrl.includes("?") ? "&" : "?"}_t=${Date.now()}` : "";
        setIFrameUrl(urlWithTimestamp);
        setIsIFrameReady(false);
        break;
      }
      case ModalStep.CHAIN_SWITCH: {
        setChainIdSwitchingTo();
        break;
      }
    }
  };
  return goBack;
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/utils/validatePortalOrigin.js
var validatePortalOrigin = (event, paraCtx) => {
  const portalBase = getPortalBaseURL(paraCtx);
  const portalLocalBase = getPortalBaseURL(paraCtx, true);
  if (event.origin !== portalBase && event.origin !== portalLocalBase) {
    return false;
  }
  return true;
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/providers/ExternalWalletProvider.js
var useWalletDisplayHelpers = (wallet) => {
  const isUsingMobileConnector = useModalStore((state2) => state2.isUsingMobileConnector);
  return {
    // Show the extension screen if on web and the wallet is an extension and installed or the wallet isn't a mobile wallet
    // Also show the extension connection if on desktop for a solana wallet (no walletConnect)
    showExtension: !isMobile() && ((wallet == null ? void 0 : wallet.isExtension) && (wallet == null ? void 0 : wallet.installed) || !(wallet == null ? void 0 : wallet.isMobile) || (wallet == null ? void 0 : wallet.type) === "SOLANA"),
    // Show the mobile screen if on mobile and the wallet is a mobile wallet or if on desktop and the wallet isn't installed
    showMobile: isMobile() && (wallet == null ? void 0 : wallet.isMobile) || !isMobile() && !(wallet == null ? void 0 : wallet.installed),
    isCosmosMobileWallet: (wallet == null ? void 0 : wallet.type) === "COSMOS" && !!isUsingMobileConnector
  };
};
var defaultExternalWallet = {
  wallets: [],
  chains: [],
  chainId: void 0,
  wallet: void 0,
  qrUri: void 0,
  chainIdSwitchingTo: void 0,
  walletDisplayHelpers: { showExtension: false, showMobile: false, isCosmosMobileWallet: false },
  username: void 0,
  avatar: void 0,
  connectExternalWallet: () => Promise.resolve(),
  addAdditionalExternalWallet: () => Promise.resolve(),
  disconnectExternalWallet: () => Promise.resolve(),
  switchChain: () => Promise.resolve(),
  setChainIdSwitchingTo: () => {
  },
  connectEmbeddedToExternalConnectors: () => Promise.resolve(),
  verifyWalletSignature: () => Promise.resolve({}),
  signMessage: () => Promise.resolve({}),
  isSigningMessage: false,
  getWalletBalance: () => Promise.resolve(void 0),
  requestInfo: (_) => Promise.resolve({}),
  disconnectBase: (_, __, ___) => Promise.resolve(),
  connectFarcasterMiniApp: () => Promise.resolve(),
  verificationStage: void 0,
  evmDisconnectStatus: "idle",
  solanaDisconnectStatus: "idle",
  cosmosDisconnectStatus: "idle"
};
var ExternalWalletContext = (0, import_react59.createContext)(defaultExternalWallet);
function ExternalWalletProvider({ children }) {
  const { isReady, isFarcasterMiniApp } = useParaStatus();
  const { closeModal } = useModal();
  const { isConnected } = useAccount();
  const farcasterMiniAppConfig = useStore2((state2) => state2.farcasterMiniAppConfig);
  const evmContext = useStore2((state2) => state2.evmContext);
  const cosmosContext = useStore2((state2) => state2.cosmosContext);
  const solanaContext = useStore2((state2) => state2.solanaContext);
  const externalWallets = useStore2((state2) => state2.externalWallets);
  const externalWalletsWithFullAuth = useStore2((state2) => state2.externalWalletsWithFullAuth);
  const includeWalletVerification = useStore2((state2) => state2.includeWalletVerification);
  const connectionOnly = useStore2((state2) => state2.connectionOnly);
  const {
    wallets: evmWallets,
    disconnect: evmDisconnect,
    chains: evmChains,
    chainId: evmChainId,
    switchChain: evmSwitchChain,
    username: evmUsername,
    avatar: evmAvatar,
    connectParaEmbedded: evmConnectParaEmbedded,
    signMessage: evmSignMessage,
    signVerificationMessage: evmSignVerificationMessage,
    getWalletBalance: evmGetWalletBalance,
    requestInfo: evmRequestInfo,
    disconnectBase: evmDisconnectBase,
    farcasterStatus: evmFarcasterStatus,
    verificationStage: evmVerificationStage,
    disconnectStatus: evmDisconnectStatus
  } = (0, import_react59.useContext)(evmContext);
  const {
    wallets: solanaWallets,
    disconnect: solanaDisconnect,
    signMessage: solanaSignMessage,
    signVerificationMessage: solanaSignVerificationMessage,
    requestInfo: solanaRequestInfo,
    disconnectBase: solanaDisconnectBase,
    farcasterStatus: solanaFarcasterStatus,
    disconnectStatus: solanaDisconnectStatus
  } = (0, import_react59.useContext)(solanaContext);
  const {
    wallets: cosmosWallets,
    disconnect: cosmosDisconnect,
    chains: cosmosChains,
    chainId: cosmosChainId,
    switchChain: cosmosSwitchChain,
    connectParaEmbedded: cosmosConnectParaEmbedded,
    signMessage: cosmosSignMessage,
    signVerificationMessage: cosmosSignVerificationMessage,
    requestInfo: cosmosRequestInfo,
    disconnectBase: cosmosDisconnectBase,
    disconnectStatus: cosmosDisconnectStatus
  } = (0, import_react59.useContext)(cosmosContext);
  const onLoginRef = useStore2((state2) => state2.onLoginRef);
  const setStep = useModalStore((state2) => state2.setStep);
  const setStepDirection = useModalStore((state2) => state2.setStepDirection);
  const setIsExternalWalletConnecting = useModalStore((state2) => state2.setIsExternalWalletConnecting);
  const isExternalWalletConnecting = useModalStore((state2) => state2.isExternalWalletConnecting);
  const selectedExternalWallet = useModalStore((state2) => state2.selectedExternalWallet);
  const setSelectedExternalWallet = useModalStore((state2) => state2.setSelectedExternalWallet);
  const setExternalWalletError = useModalStore((state2) => state2.setExternalWalletError);
  const setIsUsingMobileConnector = useModalStore((state2) => state2.setIsUsingMobileConnector);
  const refs = useModalStore((state2) => state2.refs);
  const para = useInternalClient();
  const { setSelectedWallet } = useWalletState();
  const { onNewAuthState } = useAuthActions();
  const { verifyExternalWalletAsync } = useVerifyExternalWallet();
  const queryClient = useQueryClient();
  const goBack = useGoBack();
  const [qrUri, setQrUri] = (0, import_react59.useState)();
  const [chainIdSwitchingTo, setChainIdSwitchingTo] = (0, import_react59.useState)();
  const [isSigningMessage, setIsSigningMessage] = (0, import_react59.useState)(false);
  const popupCloseIntervalRef = (0, import_react59.useRef)(null);
  const allWallets = [...evmWallets, ...solanaWallets, ...cosmosWallets];
  let wallets = allWallets.filter(
    (w) => (w.internalId !== "FARCASTER" || (para == null ? void 0 : para.isFarcasterMiniApp)) && externalWallets.includes(w.internalId)
  ).sort(
    (a, b) => externalWallets.indexOf(a.internalId) - externalWallets.indexOf(b.internalId)
  );
  const injectedWallets = allWallets.filter(
    (w) => (w == null ? void 0 : w.id) !== "Para" && !wallets.some((wallet2) => wallet2.id === w.id) && w.installed
  );
  wallets = [...wallets, ...injectedWallets].sort((a, b) => a.installed === b.installed ? 0 : a.installed ? -1 : 1);
  const wallet = (0, import_react59.useMemo)(
    () => wallets.find((w) => w.id === (selectedExternalWallet == null ? void 0 : selectedExternalWallet.id) && w.type === (selectedExternalWallet == null ? void 0 : selectedExternalWallet.type)),
    [wallets, selectedExternalWallet]
  );
  const [walletConnectCleanup, setWalletConnectCleanup] = (0, import_react59.useState)(null);
  const listenForWalletConnectUri = () => {
    setQrUri(void 0);
    if (walletConnectCleanup) {
      walletConnectCleanup();
    }
    const callback = (event) => {
      openMobileUrl(event.detail);
      setQrUri(event.detail);
      cleanup();
      setWalletConnectCleanup(null);
    };
    const cleanup = () => {
      window.removeEventListener("PARA_WALLETCONNECT_URI_READY", callback);
    };
    window.addEventListener("PARA_WALLETCONNECT_URI_READY", callback);
    setWalletConnectCleanup(() => cleanup);
    return cleanup;
  };
  const isWithFullAuth = (wallet2) => {
    if (connectionOnly) {
      return false;
    }
    if (externalWalletsWithFullAuth === "ALL") {
      return true;
    }
    return !!wallet2.name && externalWalletsWithFullAuth.includes(wallet2.name.toUpperCase());
  };
  const getWalletBalance2 = (0, import_react59.useCallback)(() => __async(this, null, function* () {
    var _a;
    const walletType = (_a = Object.values(para.externalWallets || {})[0]) == null ? void 0 : _a.type;
    switch (walletType) {
      case "EVM": {
        return yield evmGetWalletBalance();
      }
      default: {
        return void 0;
      }
    }
  }), [evmGetWalletBalance, selectedExternalWallet]);
  const chains = (0, import_react59.useMemo)(() => {
    var _a;
    const walletType = (_a = Object.values(para.externalWallets || {})[0]) == null ? void 0 : _a.type;
    switch (walletType) {
      case "COSMOS": {
        return cosmosChains;
      }
      case "EVM": {
        return evmChains;
      }
      default: {
        return [];
      }
    }
  }, [cosmosChains, evmChains, selectedExternalWallet]);
  const chainId = (0, import_react59.useMemo)(() => {
    var _a;
    const walletType = (_a = Object.values(para.externalWallets || {})[0]) == null ? void 0 : _a.type;
    switch (walletType) {
      case "COSMOS": {
        return cosmosChainId;
      }
      case "EVM": {
        return evmChainId == null ? void 0 : evmChainId.toString();
      }
      default: {
        return void 0;
      }
    }
  }, [cosmosChains, evmChains, selectedExternalWallet]);
  const verificationStage = (0, import_react59.useMemo)(() => {
    var _a;
    const walletType = (_a = Object.values(para.externalWallets || {})[0]) == null ? void 0 : _a.type;
    switch (walletType) {
      case "EVM": {
        return evmVerificationStage;
      }
      default: {
        return "verifying";
      }
    }
  }, [selectedExternalWallet, evmVerificationStage]);
  const switchChain = (0, import_react59.useCallback)(
    (chainId2) => __async(this, null, function* () {
      var _a;
      const walletType = (_a = Object.values(para.externalWallets || {})[0]) == null ? void 0 : _a.type;
      if (walletType) {
        let resp;
        setExternalWalletError();
        setChainIdSwitchingTo(chainId2);
        switch (walletType) {
          case "COSMOS": {
            setStep(ModalStep.CHAIN_SWITCH);
            resp = yield cosmosSwitchChain(chainId2);
            break;
          }
          case "EVM": {
            setStep(ModalStep.CHAIN_SWITCH);
            resp = yield evmSwitchChain(parseInt(chainId2));
            break;
          }
          default: {
            resp = {};
            break;
          }
        }
        if (resp.error) {
          setExternalWalletError(resp.error);
        } else {
          setChainIdSwitchingTo(void 0);
          setStepDirection(-1);
          setStep(ModalStep.ACCOUNT_MAIN);
        }
      }
    }),
    [evmSwitchChain, cosmosSwitchChain]
  );
  const verifyWalletSignature = (0, import_react59.useCallback)(() => __async(this, null, function* () {
    setExternalWalletError();
    const wallet2 = Object.values(para.externalWallets)[0];
    const walletType = wallet2 == null ? void 0 : wallet2.type;
    let verifyExternalWalletParams;
    const withVerification = includeWalletVerification;
    const isConnectionOnly = connectionOnly;
    const withFullParaAuth = (wallet2 == null ? void 0 : wallet2.name) ? isWithFullAuth(wallet2) : false;
    const defaultWalletInfo = {
      withVerification,
      isConnectionOnly,
      withFullParaAuth,
      provider: wallet2.name,
      providerId: wallet2.externalProviderId,
      isExternal: true
    };
    switch (walletType) {
      case "COSMOS":
        {
          const { address, signature, error, cosmosPublicKeyHex, cosmosSigner, addressBech32 } = yield cosmosSignVerificationMessage();
          if (error) {
            setExternalWalletError([error]);
            return;
          } else if (signature && address) {
            verifyExternalWalletParams = {
              externalWallet: __spreadValues2({
                partnerId: para.partnerId,
                type: "COSMOS",
                address,
                addressBech32
              }, defaultWalletInfo),
              signedMessage: signature,
              cosmosPublicKeyHex,
              cosmosSigner
            };
          }
        }
        break;
      case "EVM":
        {
          const { signature, error, address } = yield evmSignVerificationMessage();
          if (error) {
            setExternalWalletError([error]);
            return;
          } else if (signature && address) {
            verifyExternalWalletParams = {
              externalWallet: __spreadValues2({
                partnerId: para.partnerId,
                type: "EVM",
                address
              }, defaultWalletInfo),
              signedMessage: signature
            };
          }
        }
        break;
      case "SOLANA":
        {
          const { signature, error, address } = yield solanaSignVerificationMessage();
          if (error) {
            setExternalWalletError([error]);
            return;
          } else if (signature && address) {
            verifyExternalWalletParams = {
              externalWallet: __spreadValues2({
                partnerId: para.partnerId,
                type: "SOLANA",
                address
              }, defaultWalletInfo),
              signedMessage: signature
            };
          }
        }
        break;
      default:
        break;
    }
    if (!(verifyExternalWalletParams == null ? void 0 : verifyExternalWalletParams.externalWallet) || !(verifyExternalWalletParams == null ? void 0 : verifyExternalWalletParams.signedMessage)) {
      console.error("No signature or address found on the verifyWalletSignature response.");
      setExternalWalletError(["Signature verification failed."]);
      return;
    }
    try {
      const d = yield verifyExternalWalletAsync(verifyExternalWalletParams);
      yield queryClient.refetchQueries({ queryKey: [IS_FULLY_LOGGED_IN_BASE_KEY] });
      if (wallet2 && isWithFullAuth(wallet2)) {
        yield onNewAuthState(d);
      } else {
        setStep(ModalStep.LOGIN_DONE);
      }
    } catch (e) {
      console.error("Error verifying signature:", e);
      setExternalWalletError(["Signature verification failed."]);
    }
    return verifyExternalWalletParams;
  }), [cosmosSignVerificationMessage, evmSignVerificationMessage, solanaSignVerificationMessage, wallet]);
  const signMessage2 = (0, import_react59.useCallback)(
    (_0) => __async(this, [_0], function* ({
      message,
      externalWallet: _externalWallet
    }) {
      var _a;
      setExternalWalletError();
      setIsSigningMessage(true);
      let externalWallet = _externalWallet;
      const walletType = (externalWallet == null ? void 0 : externalWallet.type) || ((_a = Object.values(para.externalWallets || {})[0]) == null ? void 0 : _a.type);
      let response;
      try {
        switch (walletType) {
          case "COSMOS":
            {
              const { address, signature, error, cosmosPublicKeyHex, cosmosSigner, addressBech32 } = yield cosmosSignMessage(
                {
                  message,
                  externalWallet
                }
              );
              if (error) {
                throw new Error(error);
              } else if (signature && address) {
                response = { address, signature, cosmosPublicKeyHex, cosmosSigner, addressBech32 };
              }
            }
            break;
          case "EVM":
            {
              const { address, signature, error } = yield evmSignMessage({ message, externalWallet });
              if (error) {
                throw new Error(error);
              } else if (signature && address) {
                response = { address, signature };
              }
            }
            break;
          case "SOLANA":
            {
              const { signature, error, address } = yield solanaSignMessage({ message });
              if (error) {
                throw new Error(error);
              } else if (signature && address) {
                response = { address, signature };
              }
            }
            break;
          default:
            break;
        }
        setIsSigningMessage(false);
        return response;
      } catch (error) {
        setIsSigningMessage(false);
        throw error;
      }
    }),
    [cosmosSignMessage, evmSignMessage, solanaSignMessage]
  );
  const addAdditionalExternalWallet = (0, import_react59.useCallback)(
    (wallet2) => __async(this, null, function* () {
      setExternalWalletError();
      try {
        const walletInfo = yield requestInfo(wallet2.id, wallet2.type);
        const walletAddress = wallet2.type === "COSMOS" && walletInfo.addressBech32 ? walletInfo.addressBech32 : walletInfo.address;
        const walletKey = walletInfo.address;
        const newWallet = __spreadProps2(__spreadValues2({}, walletInfo), {
          id: walletKey,
          // Use EVM-style address as the key/ID
          address: walletAddress,
          // Use bech32 address for Cosmos, regular for others
          name: wallet2.name,
          // Ensure the name is set from the wallet object
          isExternal: true,
          isExternalWithParaAuth: false,
          externalProviderId: walletInfo.provider || wallet2.name,
          signer: "",
          isExternalConnectionOnly: true,
          isExternalWithVerification: includeWalletVerification
        });
        yield para.setExternalWallets((currentWallets) => {
          const updatedWallets = __spreadProps2(__spreadValues2({}, currentWallets), {
            [walletKey]: newWallet
          });
          return updatedWallets;
        });
        dispatchEvent(ParaEvent.EXTERNAL_WALLET_CHANGE_EVENT, null);
        try {
          const externalWalletInfo = __spreadProps2(__spreadValues2({
            partnerId: para.partnerId,
            address: walletInfo.address
          }, wallet2.type === "COSMOS" && walletInfo.addressBech32 && {
            addressBech32: walletInfo.addressBech32
            // Include bech32 address for Cosmos
          }), {
            type: wallet2.type,
            provider: walletInfo.provider,
            providerId: walletInfo.providerId
            // Use the providerId from requestInfo
          });
          const linkResult = yield para.linkAccount({ externalWallet: externalWalletInfo });
          if (linkResult && linkResult.externalWallet && "signatureVerificationMessage" in linkResult.externalWallet) {
            const verificationMessage = linkResult.externalWallet.signatureVerificationMessage;
            const signResult = yield signMessage2({
              message: verificationMessage,
              externalWallet: externalWalletInfo
            });
            if (!signResult || !signResult.signature) {
              throw new Error(`Failed to sign ${wallet2.type} message: No signature returned`);
            }
            const { signature: signedMessage, cosmosPublicKeyHex, cosmosSigner } = signResult;
            yield para.verifyExternalWalletLink({ signedMessage, cosmosPublicKeyHex, cosmosSigner });
          } else {
            throw new Error("Unknown error linking external wallet");
          }
        } catch (e) {
        }
        yield connectEmbeddedToExternalConnectors();
        setStep(ModalStep.ACCOUNT_PROFILE);
      } catch (e) {
        setExternalWalletError(["Failed to add wallet. Please try again."]);
      }
    }),
    [para, connectionOnly, includeWalletVerification, setStep, setExternalWalletError]
  );
  const setupExternalWalletVerificationStatusListener = (wallet2) => {
    typeof window !== "undefined" && window.addEventListener("message", function handleMessage(event) {
      return __async(this, null, function* () {
        var _a, _b, _c, _d;
        if (!validatePortalOrigin(event, para.ctx)) {
          return;
        }
        if (((_a = event.data) == null ? void 0 : _a.type) === "EW_VERIFY_SUCCESS") {
          clearPopupWindowCloseListener();
          const serverAuthState = (_b = event.data) == null ? void 0 : _b.serverAuthState;
          if (serverAuthState && ((_c = serverAuthState.externalWallet) == null ? void 0 : _c.withFullParaAuth)) {
            const authState = yield para.verifyExternalWallet({ serverAuthState });
            yield onNewAuthState(authState);
          } else {
            setStep(ModalStep.LOGIN_DONE);
          }
          window.removeEventListener("message", handleMessage);
        }
        if (((_d = event.data) == null ? void 0 : _d.type) === "EW_VERIFY_RETRY") {
          yield handleTriggerSignMessage(wallet2, event.data.message);
          window.removeEventListener("message", handleMessage);
        }
      });
    });
  };
  const handlePostMessage = (message) => {
    var _a;
    if (refs.popupWindow.current) {
      refs.popupWindow.current.postMessage(message, "*");
    } else if (refs.iFrame.current) {
      (_a = refs.iFrame.current.contentWindow) == null ? void 0 : _a.postMessage(message, "*");
    }
  };
  const handleTriggerSignMessage = (wallet2, message) => __async(this, null, function* () {
    setupExternalWalletVerificationStatusListener(wallet2);
    try {
      const { address, signature, cosmosPublicKeyHex, cosmosSigner, addressBech32 } = yield signMessage2({
        message,
        externalWallet: wallet2
      });
      const paraWallet = Object.values(para.externalWallets)[0];
      const walletType = paraWallet == null ? void 0 : paraWallet.type;
      let verifyExternalWalletParams;
      const withVerification = includeWalletVerification;
      const isConnectionOnly = connectionOnly;
      const withFullParaAuth = (paraWallet == null ? void 0 : paraWallet.name) ? isWithFullAuth(paraWallet) : false;
      const defaultWalletInfo = {
        withVerification,
        isConnectionOnly,
        withFullParaAuth,
        provider: paraWallet.name,
        providerId: paraWallet.externalProviderId,
        isExternal: true
      };
      switch (walletType) {
        case "COSMOS":
          {
            verifyExternalWalletParams = {
              externalWallet: __spreadValues2({
                partnerId: para.partnerId,
                type: "COSMOS",
                address,
                addressBech32
              }, defaultWalletInfo),
              signedMessage: signature,
              cosmosPublicKeyHex,
              cosmosSigner
            };
          }
          break;
        case "EVM":
          {
            verifyExternalWalletParams = {
              externalWallet: __spreadValues2({
                partnerId: para.partnerId,
                type: "EVM",
                address
              }, defaultWalletInfo),
              signedMessage: signature
            };
          }
          break;
        case "SOLANA":
          {
            verifyExternalWalletParams = {
              externalWallet: __spreadValues2({
                partnerId: para.partnerId,
                type: "SOLANA",
                address
              }, defaultWalletInfo),
              signedMessage: signature
            };
          }
          break;
        default:
          break;
      }
      if (!(verifyExternalWalletParams == null ? void 0 : verifyExternalWalletParams.externalWallet) || !(verifyExternalWalletParams == null ? void 0 : verifyExternalWalletParams.signedMessage)) {
        console.error("No signature or address found on the verifyWalletSignature response.");
        handlePostMessage({ type: "EW_SIGN_MESSAGE_ERROR", error: "Signature verification failed." });
        return;
      }
      handlePostMessage({ type: "EW_SIGN_MESSAGE_SUCCESS", verifyExternalWalletParams });
    } catch (error) {
      handlePostMessage({ type: "EW_SIGN_MESSAGE_ERROR", error: error.message || "Error signing message" });
    }
  });
  const setupExternalWalletVerificationTriggerListener = (wallet2) => {
    if (!wallet2) {
      return;
    }
    typeof window !== "undefined" && window.addEventListener("message", function handleMessage(event) {
      return __async(this, null, function* () {
        var _a;
        if (!validatePortalOrigin(event, para.ctx)) {
          return;
        }
        if (((_a = event.data) == null ? void 0 : _a.type) === "EW_TRIGGER_SIGN_MESSAGE") {
          yield handleTriggerSignMessage(wallet2, event.data.message);
          window.removeEventListener("message", handleMessage);
        }
      });
    });
  };
  const setupPopupWindowCloseListener = () => {
    const popup = refs.popupWindow.current;
    if (!popup) return;
    if (popupCloseIntervalRef.current) {
      clearInterval(popupCloseIntervalRef.current);
    }
    popupCloseIntervalRef.current = setInterval(() => {
      if (popup.closed) {
        if (popupCloseIntervalRef.current) {
          clearInterval(popupCloseIntervalRef.current);
          popupCloseIntervalRef.current = null;
        }
        goBack();
        disconnectExternalWallet();
      }
    }, 500);
  };
  const clearPopupWindowCloseListener = () => {
    if (popupCloseIntervalRef.current) {
      clearInterval(popupCloseIntervalRef.current);
      popupCloseIntervalRef.current = null;
      refs.popupWindow.current = null;
    }
  };
  const handlePostConnectRetry = () => {
    handlePostMessage({ type: "EW_CONNECT_RETRY" });
  };
  const handlePostConnectError = (error) => {
    handlePostMessage({ type: "EW_CONNECT_ERROR", error });
  };
  const handleConnectRetryMessage = (wallet2) => (event) => __async(this, null, function* () {
    var _a;
    if (!validatePortalOrigin(event, para.ctx)) {
      return;
    }
    if (((_a = event.data) == null ? void 0 : _a.type) === "EW_CONNECT_RETRY") {
      clearExternalWalletConnectionRetryListener(wallet2);
      yield connectExternalWallet({ wallet: wallet2, isMobileConnect: wallet2.isMobile, isRetryConnection: true });
    }
  });
  const setupExternalWalletConnectionRetryListener = (wallet2) => {
    typeof window !== "undefined" && window.addEventListener("message", handleConnectRetryMessage(wallet2));
  };
  const clearExternalWalletConnectionRetryListener = (wallet2) => {
    window.removeEventListener("message", handleConnectRetryMessage(wallet2));
  };
  const connectExternalWallet = (0, import_react59.useCallback)(
    (_0) => __async(this, [_0], function* ({
      wallet: wallet2,
      isManualWalletConnect,
      isMobileConnect,
      isResetAfterManualWalletConnect,
      isRetryConnection
    }) {
      if (isRetryConnection) {
        clearExternalWalletConnectionRetryListener(wallet2);
        handlePostConnectRetry();
      }
      if (!isMobile() && isWithFullAuth(wallet2)) {
        const popupUrl = yield para.constructPortalUrl("connectExternalWallet");
        if (typeof window !== void 0) {
          refs.popupWindow.current = openPopup({
            url: popupUrl,
            type: "LOGIN_EXTERNAL_WALLET",
            target: "ParaExternalWallet"
          });
        }
        setupPopupWindowCloseListener();
      }
      if (isExternalWalletConnecting && isManualWalletConnect) {
        yield evmDisconnect();
        yield solanaDisconnect();
        yield cosmosDisconnect();
        setQrUri(void 0);
        setIsExternalWalletConnecting(false);
      }
      if (isResetAfterManualWalletConnect || isManualWalletConnect || isMobileConnect || !isExternalWalletConnecting) {
        setExternalWalletError();
        setIsExternalWalletConnecting(true);
        setIsUsingMobileConnector(isMobileConnect);
        listenForWalletConnectUri();
        const { address, error, authState } = yield isMobileConnect ? wallet2.connectMobile(isManualWalletConnect, connectionOnly) : wallet2.connect(connectionOnly);
        if (error) {
          setExternalWalletError([error]);
          setIsUsingMobileConnector();
          handlePostConnectError(error);
          if (isManualWalletConnect && error === "Connection request rejected") {
            setExternalWalletError();
            yield connectExternalWallet({ wallet: wallet2, isResetAfterManualWalletConnect: true });
            return;
          }
          setupExternalWalletConnectionRetryListener(wallet2);
        } else if (address) {
          if (!!authState && (isWithFullAuth(wallet2) || includeWalletVerification)) {
            clearExternalWalletConnectionRetryListener(wallet2);
            onNewAuthState(authState);
            setupExternalWalletVerificationTriggerListener(authState.externalWallet);
          } else {
            setStep(ModalStep.LOGIN_DONE);
          }
        }
        setIsExternalWalletConnecting(false);
      }
    }),
    [isExternalWalletConnecting, externalWalletsWithFullAuth, connectionOnly, includeWalletVerification]
  );
  const connectFarcasterMiniApp = () => __async(this, null, function* () {
    const evmWallet = para.supportedWalletTypes.find(({ type }) => type === "EVM") ? evmWallets.find((w) => w.internalId === "FARCASTER") : void 0;
    const solanaWallet = para.supportedWalletTypes.find(({ type }) => type === "SOLANA") ? solanaWallets.find((w) => w.internalId === "FARCASTER") : void 0;
    if (evmWallet || solanaWallet) {
      const loginWallets = [];
      if (evmWallet && (evmFarcasterStatus == null ? void 0 : evmFarcasterStatus.isPresent)) {
        const isEvmConnected = evmFarcasterStatus.isConnected && !!evmFarcasterStatus.address;
        if (isEvmConnected) {
          loginWallets.push({
            type: "EVM",
            provider: "Farcaster",
            providerId: "FARCASTER",
            address: evmFarcasterStatus.address,
            isConnectionOnly: true
          });
        } else {
          yield connectExternalWallet({ wallet: evmWallet, isManualWalletConnect: true });
        }
      }
      if (solanaWallet && (solanaFarcasterStatus == null ? void 0 : solanaFarcasterStatus.isPresent)) {
        const isSolanaConnected = solanaFarcasterStatus.isConnected && !!solanaFarcasterStatus.address;
        if (isSolanaConnected) {
          loginWallets.push({
            type: "SOLANA",
            provider: "Farcaster",
            providerId: "FARCASTER",
            address: solanaFarcasterStatus.address,
            isConnectionOnly: true
          });
        } else {
          yield connectExternalWallet({ wallet: solanaWallet, isManualWalletConnect: true });
        }
      }
      if (loginWallets.length > 0) {
        yield para.loginExternalWallet({
          externalWallet: loginWallets
        });
      }
      closeModal();
    }
  });
  const requestInfo = (providerId, type) => __async(this, null, function* () {
    listenForWalletConnectUri();
    switch (type) {
      case "EVM": {
        const externalWallet = yield evmRequestInfo(providerId);
        return externalWallet;
      }
      case "SOLANA": {
        const externalWallet = yield solanaRequestInfo(providerId);
        return externalWallet;
      }
      case "COSMOS": {
        const externalWallet = yield cosmosRequestInfo(providerId);
        return externalWallet;
      }
      default: {
        throw new Error(`Unsupported wallet type: ${type}`);
      }
    }
  });
  const disconnectBase = (providerId, type, opts) => __async(this, null, function* () {
    switch (type) {
      case "EVM":
        yield evmDisconnectBase(providerId, opts);
        break;
      case "SOLANA":
        yield solanaDisconnectBase(providerId, opts);
        break;
      default: {
        yield cosmosDisconnectBase(void 0, opts);
        break;
      }
    }
    if ((opts == null ? void 0 : opts.disconnectType) === "ACCOUNT_WIDGET") {
      yield para.setExternalWallets(
        (prev) => Object.entries(prev).reduce((acc, [address, externalWallet]) => {
          if (externalWallet.type === type && externalWallet.externalProviderId === providerId) {
            return acc;
          }
          return __spreadProps2(__spreadValues2({}, acc), {
            [address]: externalWallet
          });
        }, {})
      );
    }
  });
  const disconnectExternalWallet = () => __async(this, null, function* () {
    if (para.isExternalWalletAuth) yield para.logout();
    yield evmDisconnect();
    yield cosmosDisconnect();
    setSelectedExternalWallet();
    yield solanaDisconnect();
  });
  const walletDisplayHelpers = useWalletDisplayHelpers(wallet);
  const username = (0, import_react59.useMemo)(() => {
    let username2;
    const storedExternalWallet = Object.values(para.externalWallets || {})[0];
    if (storedExternalWallet) {
      const walletType = storedExternalWallet == null ? void 0 : storedExternalWallet.type;
      switch (walletType) {
        case "EVM": {
          username2 = evmUsername ? evmUsername.startsWith("0x") ? truncateAddress(evmUsername, "EVM") : evmUsername : void 0;
          break;
        }
        default: {
          username2 = storedExternalWallet.address && storedExternalWallet.type ? truncateAddress(storedExternalWallet.address, storedExternalWallet.type) : void 0;
          break;
        }
      }
    }
    return username2;
  }, [evmUsername, wallet]);
  const avatar = (0, import_react59.useMemo)(() => {
    var _a;
    const walletType = (_a = Object.values(para.externalWallets || {})[0]) == null ? void 0 : _a.type;
    if (walletType) {
      switch (walletType) {
        case "EVM": {
          return evmAvatar;
        }
        default: {
          return void 0;
        }
      }
    }
  }, [evmAvatar, wallet]);
  const connectEmbeddedToExternalConnectors = (0, import_react59.useCallback)(() => __async(this, null, function* () {
    const evmWallet = para.findWallet(void 0, void 0, { type: ["EVM"] });
    const cosmosWallet = para.findWallet(void 0, void 0, { type: ["COSMOS"] });
    if (evmWallet) {
      try {
        const { error } = yield evmConnectParaEmbedded();
        if (error) {
          console.warn("Failed to connect Para EVM wallet to Wagmi:", error);
        } else {
          if (evmWallet) {
            setSelectedWallet({ id: evmWallet.id, type: "EVM" });
          }
        }
      } catch (err) {
        console.warn("Error calling connectParaEvmWallet:", err);
      }
    }
    if (cosmosWallet) {
      try {
        const { error } = yield cosmosConnectParaEmbedded();
        if (error) {
          console.warn("Failed to connect Para Cosmos wallet to Graz:", error);
        } else {
          if (cosmosWallet) {
            setSelectedWallet({ id: cosmosWallet.id, type: "COSMOS" });
          }
        }
      } catch (err) {
        console.warn("Error calling connectParaCosmosWallet:", err);
      }
    }
  }), [evmConnectParaEmbedded, cosmosConnectParaEmbedded]);
  (0, import_react59.useEffect)(() => {
    onLoginRef.current = () => __async(this, null, function* () {
      yield connectEmbeddedToExternalConnectors();
    });
  }, [connectEmbeddedToExternalConnectors]);
  (0, import_react59.useEffect)(() => {
    if (isReady && isFarcasterMiniApp && !isConnected && !(farcasterMiniAppConfig == null ? void 0 : farcasterMiniAppConfig.disableAutoConnect) && !refs.wasSignedIn.current && !refs.initialFarcasterConnected.current && !!evmFarcasterStatus && !!solanaFarcasterStatus) {
      refs.initialFarcasterConnected.current = true;
      connectFarcasterMiniApp();
    }
  }, [isReady, isConnected, isFarcasterMiniApp, farcasterMiniAppConfig, evmFarcasterStatus, solanaFarcasterStatus]);
  return (0, import_jsx_runtime16.jsx)(
    ExternalWalletContext.Provider,
    {
      value: (0, import_react59.useMemo)(
        () => ({
          wallets,
          chains,
          chainId,
          wallet,
          qrUri,
          walletDisplayHelpers,
          chainIdSwitchingTo,
          username,
          avatar,
          connectExternalWallet,
          addAdditionalExternalWallet,
          disconnectExternalWallet,
          switchChain,
          setChainIdSwitchingTo,
          connectEmbeddedToExternalConnectors,
          signMessage: signMessage2,
          isSigningMessage,
          verifyWalletSignature,
          getWalletBalance: getWalletBalance2,
          requestInfo,
          disconnectBase,
          connectFarcasterMiniApp,
          verificationStage,
          evmDisconnectStatus,
          solanaDisconnectStatus,
          cosmosDisconnectStatus
        }),
        [
          wallets,
          chains,
          chainId,
          wallet,
          qrUri,
          walletDisplayHelpers,
          chainIdSwitchingTo,
          username,
          avatar,
          disconnectExternalWallet,
          connectExternalWallet,
          addAdditionalExternalWallet,
          switchChain,
          setChainIdSwitchingTo,
          connectEmbeddedToExternalConnectors,
          signMessage2,
          isSigningMessage,
          verifyWalletSignature,
          getWalletBalance2,
          requestInfo,
          disconnectBase,
          connectFarcasterMiniApp,
          verificationStage,
          evmDisconnectStatus,
          solanaDisconnectStatus,
          cosmosDisconnectStatus
        ]
      ),
      children
    }
  );
}
var useExternalWallets = () => (0, import_react59.useContext)(ExternalWalletContext);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/queries/useWalletBalance.js
var import_react60 = __toESM(require_react(), 1);
var WALLET_BALANCE_BASE_KEY = "PARA_WALLET_BALANCE";
var useWalletBalance = (args) => {
  const client = useClient();
  const { data: selectedWallet } = useWallet();
  const {
    selectedWallet: { type: selectedWalletType }
  } = useWalletState();
  const { embedded } = useAccount();
  const rpcUrl = useStore2((state2) => state2.rpcUrl);
  const { getWalletBalance: getExternalWalletBalance, chainId } = useExternalWallets();
  const queryFn = (0, import_react60.useCallback)(() => __async(void 0, null, function* () {
    var _a, _b, _c;
    const skipGetBalance = !selectedWallet || selectedWalletType && ["COSMOS", "SOLANA"].includes(selectedWalletType);
    if (skipGetBalance) {
      return null;
    }
    try {
      if (selectedWallet.isExternal) {
        return (_a = yield getExternalWalletBalance()) != null ? _a : null;
      } else {
        const completeArgs = __spreadValues2({ walletId: (_b = selectedWallet == null ? void 0 : selectedWallet.id) != null ? _b : "", rpcUrl }, args);
        return (_c = yield getWalletBalance(client, completeArgs)) != null ? _c : null;
      }
    } catch (err) {
      console.error("Error fetching wallet balance: ", err);
      return null;
    }
  }), [embedded, selectedWallet, selectedWalletType, rpcUrl, getExternalWalletBalance]);
  return useQuery({
    queryKey: [
      WALLET_BALANCE_BASE_KEY,
      client == null ? void 0 : client.userId,
      selectedWallet == null ? void 0 : selectedWallet.id,
      selectedWallet == null ? void 0 : selectedWallet.type,
      (selectedWallet == null ? void 0 : selectedWallet.isExternal) ? chainId : ""
    ],
    queryFn,
    enabled: !!client && !!selectedWallet && !!rpcUrl && !!(embedded == null ? void 0 : embedded.isConnected)
  });
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/queries/useLinkedAccounts.js
var LINKED_ACCOUNTS_BASE_KEY = "PARA_LINKED_ACCOUNTS";
var useLinkedAccounts = (params = { withMetadata: false }) => {
  var _a;
  const client = useInternalClient();
  const { connectionType } = useAccount();
  return useQuery({
    enabled: !!(client == null ? void 0 : client.isReady) && ["both", "embedded"].includes(connectionType),
    queryKey: [LINKED_ACCOUNTS_BASE_KEY, (_a = client == null ? void 0 : client.userId) != null ? _a : null, connectionType, params],
    queryFn: () => __async(void 0, null, function* () {
      var _a2;
      return (_a2 = yield getLinkedAccounts(client, params)) != null ? _a2 : [];
    })
  });
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/queries/useAccountLinkInProgress.js
var ACCOUNT_LINK_IN_PROGRESS_BASE_KEY = "ACCOUNT_LINK_IN_PROGRESS";
var useAccountLinkInProgress = () => {
  var _a, _b;
  const client = useInternalClient();
  return useQuery({
    enabled: !!(client == null ? void 0 : client.isReady),
    queryKey: [ACCOUNT_LINK_IN_PROGRESS_BASE_KEY, (_a = client == null ? void 0 : client.userId) != null ? _a : null, (_b = client == null ? void 0 : client.accountLinkInProgress) != null ? _b : null],
    queryFn: () => __async(void 0, null, function* () {
      var _a2;
      return (_a2 = yield accountLinkInProgress(client)) != null ? _a2 : null;
    })
  });
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/queries/useProfileBalance.js
var import_react61 = __toESM(require_react(), 1);
var useProfileBalance = (options) => {
  var _a, _b, _c;
  const client = useInternalClient();
  const { data: isFullyLoggedIn, isSuccess } = useIsFullyLoggedIn();
  const config = useStore2((state2) => {
    var _a2;
    return (_a2 = state2.modalConfig) == null ? void 0 : _a2.balances;
  });
  const refs = useStore2((state2) => state2.refs);
  const isComprehensive = (_a = options == null ? void 0 : options.isComprehensive) != null ? _a : false;
  const previousTriggerRef = (0, import_react61.useRef)(options == null ? void 0 : options.refetchTrigger);
  const shouldRefetchRef = (0, import_react61.useRef)(false);
  const lastQueryTimeRef = (0, import_react61.useRef)(0);
  const isInitialLoadRef = (0, import_react61.useRef)(true);
  (0, import_react61.useEffect)(() => {
    if ((options == null ? void 0 : options.refetchTrigger) !== previousTriggerRef.current) {
      shouldRefetchRef.current = true;
      previousTriggerRef.current = options == null ? void 0 : options.refetchTrigger;
    }
  }, [options == null ? void 0 : options.refetchTrigger]);
  return useQuery({
    enabled: isSuccess && !!client,
    queryKey: [
      "useProfileBalance",
      isFullyLoggedIn != null ? isFullyLoggedIn : null,
      (_b = client == null ? void 0 : client.userId) != null ? _b : null,
      (_c = client == null ? void 0 : client.availableWallets.map(({ address }) => address)) != null ? _c : null,
      config != null ? config : null
      // Note: refetchTrigger is NOT in query key to allow cache sharing
    ],
    staleTime: 3e4,
    retry: 3,
    queryFn: () => __async(void 0, null, function* () {
      var _a2;
      if (!client || !isFullyLoggedIn) {
        return null;
      }
      const isInvalidationRefetch = ((_a2 = refs.balancesInvalidationTime.current) != null ? _a2 : 0) > lastQueryTimeRef.current;
      const isInitialLoad = isInitialLoadRef.current;
      const profileBalance = yield client == null ? void 0 : client.getProfileBalance({
        config,
        refetch: shouldRefetchRef.current || isInvalidationRefetch || isInitialLoad
      });
      lastQueryTimeRef.current = Date.now();
      shouldRefetchRef.current = false;
      isInitialLoadRef.current = false;
      return isComprehensive ? profileBalance : filterProfileBalance(profileBalance, config || { displayType: "AGGREGATED" });
    }),
    // We handle refetch manually
    refetchOnWindowFocus: false
  });
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/utils.js
function generateInternalMutation(method, action, {
  delay: delay2,
  defaultParams
} = {}) {
  return () => {
    const para = useInternalClient();
    const mutation = useMutation({
      mutationKey: [method],
      mutationFn: (args) => __async(this, null, function* () {
        if (typeof delay2 === "number") yield new Promise((resolve) => setTimeout(resolve, delay2));
        try {
          const result = yield action(para, args != null ? args : defaultParams);
          return result;
        } catch (error) {
          throw error;
        }
      })
    });
    return mutation;
  };
}
function generateStateHook(method) {
  return () => {
    const frames = useMutationState({
      filters: { mutationKey: [method] },
      select: (mutation) => mutation.state
    });
    const latest = frames[frames.length - 1];
    if (!latest) {
      return {
        data: void 0,
        error: null,
        failureCount: 0,
        isLoading: false,
        isPaused: false,
        isPending: false,
        isError: false,
        isSuccess: false,
        isIdle: true,
        status: "idle",
        variables: void 0,
        context: null,
        failureReason: null,
        submittedAt: 0
      };
    }
    return __spreadProps2(__spreadValues2({}, latest), {
      isPending: latest.status === "pending",
      isError: latest.status === "error",
      isSuccess: latest.status === "success",
      isIdle: latest.status === "idle"
    });
  };
}

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/providers/AccountLinkProvider.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var import_react62 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/utils/authInputHelpers.js
function isCcMatch(countryCode, option) {
  return countryCode === "+1" ? option.selectedLabel === "US" : option.value === countryCode;
}
function validateAuth(auth) {
  switch (true) {
    case "email" in auth:
      if (!EMAIL_REGEX.test(auth.email)) {
        throw new Error("Please enter a valid email address!");
      }
      break;
    case "phone" in auth:
      {
        if (!/^\+1\d{3}555\d{4}$/.test(auth.phone)) {
          const formatted = formatPhoneNumber(auth.phone);
          if (!formatted) {
            throw new Error("Please enter a valid phone number!");
          }
        }
      }
      break;
  }
  return auth;
}
function validateInput(identifier, countryCode, type) {
  const isEmail2 = type === "email";
  const isPhone2 = type === "phone";
  const auth = isEmail2 ? { email: identifier } : isPhone2 ? { phone: `${countryCode}${identifier}` } : void 0;
  if (!auth) {
    throw new Error("Please enter a valid email or phone number!");
  }
  return validateAuth(auth);
}

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/providers/AccountLinkProvider.js
var AccountLinkContext = (0, import_react62.createContext)({
  isEnabled: false,
  accountLinkInProgress: void 0,
  accountLinkOptions: [...LINKED_ACCOUNT_TYPES],
  linkAccount: () => Promise.resolve(),
  isLinkAccountPending: false,
  verifyEmailOrPhoneLink: () => {
  },
  verifyOAuthLink: () => {
  },
  verifyFarcasterLink: () => {
  },
  verifyTelegramLink: () => {
  },
  verifyLinkedAccount: () => {
  },
  unlinkingAccount: void 0,
  linkAccountStatus: "idle",
  linkAccountError: null,
  setLinkAccountError: () => {
  },
  unlinkAccount: () => {
  },
  unlinkAccountConfirm: () => {
  },
  isUnlinkAccountPending: false,
  cancelLinkAccount: () => {
  },
  onAccountLinked: () => {
  },
  onAccountLinkVerified: () => {
  },
  resetMutations: () => {
  }
  // externalWalletQrUri: undefined,
});
var useLinkAccount = generateInternalMutation("linkAccount", linkAccount);
var useUnlinkAccount = generateInternalMutation("unlinkAccount", unlinkAccount);
var useVerifyOAuthLink = generateInternalMutation("verifyOAuthLink", verifyOAuthLink, { delay: 500 });
var useVerifyEmailOrPhoneLink = generateInternalMutation("verifyEmailOrPhoneLink", verifyEmailOrPhoneLink);
var useVerifyFarcasterLink = generateInternalMutation("verifyFarcasterLink", verifyFarcasterLink, {
  delay: 500
});
var useVerifyTelegramLink = generateInternalMutation("verifyTelegramLink", verifyTelegramLink);
var useVerifyExternalWalletLink = generateInternalMutation("verifyExternalWalletLink", verifyExternalWalletLink);
var AccountLinkProvider = ({ children }) => {
  var _a, _b, _c;
  const para = useInternalClient();
  const queryClient = useQueryClient();
  const { embedded } = useAccount();
  const { data: coreAccountLinkInProgress } = useAccountLinkInProgress();
  const {
    wallets,
    signMessage: signMessage2,
    isSigningMessage,
    requestInfo: externalWalletRequestInfo,
    disconnectBase
  } = useExternalWallets();
  const { isOpen, openModal } = useModal();
  const includeWalletVerification = useStore2((state2) => state2.includeWalletVerification);
  const setStep = useModalStore((state2) => state2.setStep);
  const setFarcasterConnectUri = useModalStore((state2) => state2.setFarcasterConnectUri);
  const refs = useModalStore((state2) => state2.refs);
  const externalWalletError = useModalStore((state2) => state2.externalWalletError);
  const accountLinkOptions = useModalStore((state2) => state2.accountLinkOptions) || [...LINKED_ACCOUNT_TYPES];
  const setAccountLinkOptions = useModalStore((state2) => state2.setAccountLinkOptions);
  const externalWalletsWithFullAuth = useStore2((state2) => state2.externalWalletsWithFullAuth);
  const goBack = useGoBack();
  const { mutateAsync: mutateLinkAccountAsync, isPending: isLinkAccountPending } = useLinkAccount();
  const { mutate: mutateUnlinkAccount, isPending: isUnlinkAccountPending } = useUnlinkAccount();
  const {
    mutate: mutateVerifyEmailOrPhoneLink,
    status: statusVerifyEmailOrPhoneLink,
    reset: resetVerifyEmailOrPhoneLink
  } = useVerifyEmailOrPhoneLink();
  const { mutate: mutateVerifyOAuthLink, status: statusVerifyOAuthLink, reset: resetVerifyOAuthLink } = useVerifyOAuthLink();
  const {
    mutate: mutateVerifyFarcasterLink,
    status: statusVerifyFarcasterLink,
    reset: resetVerifyFarcasterLink
  } = useVerifyFarcasterLink();
  const {
    mutateAsync: mutateVerifyTelegramLinkAsync,
    status: statusVerifyTelegramLink,
    reset: resetVerifyTelegramLink
  } = useVerifyTelegramLink();
  const {
    mutateAsync: mutateAsyncVerifyExternalWalletLink,
    status: statusVerifyExternalWalletLink,
    reset: resetVerifyExternalWalletLink
  } = useVerifyExternalWalletLink();
  const isEnabled = !(embedded == null ? void 0 : embedded.isGuestMode) && (embedded == null ? void 0 : embedded.isConnected) && (!((_a = para.authInfo) == null ? void 0 : _a.externalWallet) || includeWalletVerification || externalWalletsWithFullAuth === "ALL" || externalWalletsWithFullAuth.includes((_c = (_b = para.authInfo) == null ? void 0 : _b.externalWallet) == null ? void 0 : _c.providerId));
  const [accountLinkInProgress2, setAccountLinkInProgress] = (0, import_react62.useState)(
    coreAccountLinkInProgress || void 0
  );
  const [unlinkingAccount, setUnlinkingAccount] = (0, import_react62.useState)(void 0);
  const [linkAccountError, setLinkAccountError] = (0, import_react62.useState)(null);
  const [linkAccountStatus, setLinkAccountStatus] = (0, import_react62.useState)("pending");
  const linkAccount2 = (args) => __async(void 0, null, function* () {
    var _a2;
    if (!isEnabled) {
      setLinkAccountError(AccountLinkError.NotAuthenticated);
      throw new Error(AccountLinkError.NotAuthenticated);
    }
    setLinkAccountError(null);
    switch (true) {
      case !args:
      case (args && "options" in args):
        {
          const options = (args == null ? void 0 : args.options) || (para == null ? void 0 : para.supportedAccountLinks) || [...LINKED_ACCOUNT_TYPES];
          if (options.length < 2) {
            throw new Error("Account linking options array must contain 2 or more items");
          }
          setAccountLinkOptions(options);
          openModal({ step: ModalStep.ACCOUNT_PROFILE_LIST });
        }
        break;
      case (args && "externalWallet" in args):
        {
          const isSupportedWalletType = EXTERNAL_WALLET_TYPES.includes(args.externalWallet.provider);
          let supportedWalletId;
          if (isSupportedWalletType) {
            supportedWalletId = (_a2 = wallets.find((w) => w.internalId === args.externalWallet.provider)) == null ? void 0 : _a2.id;
            if (!supportedWalletId) {
              throw new Error(`wallet not installed: ${args.externalWallet.provider}`);
            }
          }
          const providerId = supportedWalletId != null ? supportedWalletId : args.externalWallet.provider;
          const type = args.externalWallet.type;
          setAccountLinkInProgress({
            type: "EXTERNAL_WALLET",
            pendingWalletProvider: providerId,
            pendingWalletType: type
          });
          const linkWallet = wallets.find((w) => w.id === providerId);
          if (!linkWallet) {
            throw new Error(`wallet not installed: ${providerId}`);
          }
          openModal({ step: !type ? ModalStep.LINK_EX_WALLET_NETWORK_SELECT : ModalStep.ACCOUNT_PROFILE_ADD });
          if (!type) {
            return;
          }
          try {
            const externalWallet = yield externalWalletRequestInfo(providerId, type);
            const accountLinkInProgress22 = yield mutateLinkAccountAsync({ externalWallet });
            yield onAccountLinked(accountLinkInProgress22);
            const signatureVerificationMessage = accountLinkInProgress22.externalWallet.signatureVerificationMessage;
            yield new Promise((resolve) => setTimeout(resolve, 100));
            const {
              signature: signedMessage,
              cosmosPublicKeyHex,
              cosmosSigner
            } = yield signMessage2({
              message: signatureVerificationMessage,
              externalWallet: accountLinkInProgress22.externalWallet
            });
            const updatedAccounts = yield mutateAsyncVerifyExternalWalletLink({
              signedMessage,
              cosmosPublicKeyHex,
              cosmosSigner
            });
            yield onAccountLinkVerified(updatedAccounts);
          } catch (e) {
            console.error(e);
            setLinkAccountError(e.message);
          } finally {
            if (linkWallet.type === "EVM" || linkWallet.type === "SOLANA") {
              yield disconnectBase(providerId, linkWallet.type, { disconnectType: "ACCOUNT_LINKING" });
            }
          }
        }
        break;
      default: {
        switch (true) {
          case "auth" in args:
            {
              validateAuth(args.auth);
              const authInfo = extractAuthInfo(args.auth, { isRequired: true });
              setAccountLinkInProgress({
                type: authInfo.authType.toUpperCase(),
                identifier: authInfo.identifier
              });
            }
            break;
          case "type" in args: {
            if (args.type === "EMAIL" || args.type === "PHONE" || !isOpen) {
              setAccountLinkInProgress({ type: args.type === "X" ? "TWITTER" : args.type });
            }
            break;
          }
        }
        if (!isOpen) {
          openModal({ step: ModalStep.ACCOUNT_PROFILE_ADD });
        }
        try {
          const accountLinkInProgress22 = yield mutateLinkAccountAsync(args);
          yield onAccountLinked(accountLinkInProgress22);
        } catch (e) {
          setLinkAccountError(e.message);
        }
      }
    }
  });
  const onAccountLinked = (accountLinkInProgress22) => __async(void 0, null, function* () {
    queryClient.setQueryData(["accountLinkInProgress"], accountLinkInProgress22 != null ? accountLinkInProgress22 : null);
    setStep(ModalStep.ACCOUNT_PROFILE_ADD);
    switch (accountLinkInProgress22.type) {
      case "EMAIL":
      case "PHONE":
      case "TELEGRAM":
      case "EXTERNAL_WALLET":
        break;
      case "FARCASTER":
        verifyFarcasterLink2();
        break;
      default:
        verifyLinkedAccount(accountLinkInProgress22);
    }
  });
  const verifyEmailOrPhoneLink2 = (verificationCode) => __async(void 0, null, function* () {
    mutateVerifyEmailOrPhoneLink(
      { verificationCode },
      {
        onSuccess: onAccountLinkVerified,
        onError: onAccountLinkError
      }
    );
  });
  const verifyOAuthLink2 = (method) => __async(void 0, null, function* () {
    mutateVerifyOAuthLink(
      {
        method,
        isCanceled: () => {
          var _a2;
          return !!((_a2 = refs.popupWindow.current) == null ? void 0 : _a2.closed);
        },
        onOAuthPopup: (oAuthPopup) => {
          refs.popupWindow.current = oAuthPopup;
        }
      },
      {
        onSuccess: onAccountLinkVerified,
        onError: onAccountLinkError
      }
    );
  });
  const verifyFarcasterLink2 = () => __async(void 0, null, function* () {
    mutateVerifyFarcasterLink(
      {
        isCanceled: () => refs.currentStep.current !== ModalStep.ACCOUNT_PROFILE_ADD,
        onConnectUri: (connectUri) => {
          setFarcasterConnectUri(connectUri);
        }
      },
      {
        onSuccess: onAccountLinkVerified,
        onError: () => {
          if (refs.currentStep.current === ModalStep.ACCOUNT_PROFILE_ADD) {
            goBack();
          }
        }
      }
    );
  });
  const verifyTelegramLink2 = (telegramAuthResponse) => __async(void 0, null, function* () {
    try {
      const accounts = yield mutateVerifyTelegramLinkAsync({
        telegramAuthResponse
      });
      onAccountLinkVerified(accounts);
    } catch (e) {
      onAccountLinkError(e);
      throw e;
    }
  });
  const verifyLinkedAccount = ({ type }) => {
    switch (type) {
      case "EMAIL":
      case "PHONE":
      case "TELEGRAM":
      case "EXTERNAL_WALLET":
        break;
      case "FARCASTER":
        verifyFarcasterLink2();
        break;
      default:
        verifyOAuthLink2(type);
        break;
    }
  };
  const onAccountLinkVerified = (updatedAccounts) => __async(void 0, null, function* () {
    queryClient.invalidateQueries({ queryKey: [LINKED_ACCOUNTS_BASE_KEY] });
    queryClient.setQueryData(["getLinkedAccounts"], () => updatedAccounts);
    if ((accountLinkInProgress2 == null ? void 0 : accountLinkInProgress2.type) === "EXTERNAL_WALLET" && accountLinkInProgress2.externalWallet) {
      try {
        yield disconnectBase(
          accountLinkInProgress2.externalWallet.providerId,
          accountLinkInProgress2.externalWallet.type,
          { disconnectType: "ACCOUNT_LINKING" }
        );
      } catch (e) {
      }
    }
    setTimeout(() => {
      setStep(ModalStep.ACCOUNT_PROFILE);
      setAccountLinkInProgress(void 0);
    }, 2e3);
  });
  const onAccountLinkError = (e) => {
    setLinkAccountError(e instanceof Error ? e.message : e);
    setAccountLinkInProgress(void 0);
  };
  const unlinkAccount2 = (linkedAccount) => {
    setUnlinkingAccount(linkedAccount);
    setStep(ModalStep.ACCOUNT_PROFILE_REMOVE);
  };
  const unlinkAccountConfirm = () => {
    mutateUnlinkAccount(
      {
        linkedAccountId: unlinkingAccount.id
      },
      {
        onSuccess: (updatedAccounts) => {
          queryClient.setQueryData(["getLinkedAccounts"], () => updatedAccounts);
          setUnlinkingAccount(void 0);
          setStep(ModalStep.ACCOUNT_PROFILE);
        }
      }
    );
  };
  const cancelLinkAccount = () => {
    mutateUnlinkAccount(void 0);
  };
  const resetMutations = () => {
    resetVerifyEmailOrPhoneLink();
    resetVerifyFarcasterLink();
    resetVerifyOAuthLink();
    resetVerifyTelegramLink();
    resetVerifyExternalWalletLink();
  };
  (0, import_react62.useEffect)(() => {
    setAccountLinkInProgress((prev) => {
      return coreAccountLinkInProgress || prev;
    });
  }, [coreAccountLinkInProgress]);
  (0, import_react62.useEffect)(() => {
    if (!isOpen) {
      setLinkAccountError(null);
      setAccountLinkInProgress(void 0);
      setUnlinkingAccount(void 0);
      resetMutations();
    }
  }, [isOpen]);
  (0, import_react62.useEffect)(() => {
    setLinkAccountStatus(() => {
      if (!isEnabled || !accountLinkInProgress2) {
        return "idle";
      }
      if ((accountLinkInProgress2.type === "EMAIL" || accountLinkInProgress2.type === "PHONE") && !accountLinkInProgress2.identifier) {
        return "idle";
      }
      if (linkAccountError) return "error";
      switch (true) {
        case accountLinkInProgress2.type === "TELEGRAM":
          return statusVerifyTelegramLink;
        case accountLinkInProgress2.type === "FARCASTER":
          return statusVerifyFarcasterLink;
        case accountLinkInProgress2.type === "EMAIL":
        case accountLinkInProgress2.type === "PHONE":
          return statusVerifyEmailOrPhoneLink;
        case accountLinkInProgress2.type === "EXTERNAL_WALLET":
          if (isSigningMessage) return "pending";
          return externalWalletError && externalWalletError.length > 0 ? "error" : statusVerifyExternalWalletLink === "idle" ? "pending" : statusVerifyExternalWalletLink;
        default:
          return statusVerifyOAuthLink;
      }
    });
  }, [
    linkAccountError,
    isEnabled,
    accountLinkInProgress2,
    statusVerifyEmailOrPhoneLink,
    statusVerifyFarcasterLink,
    statusVerifyOAuthLink,
    statusVerifyTelegramLink,
    statusVerifyExternalWalletLink,
    externalWalletError,
    isSigningMessage
  ]);
  const value = (0, import_react62.useMemo)(
    () => ({
      isEnabled,
      accountLinkInProgress: accountLinkInProgress2,
      accountLinkOptions,
      linkAccount: linkAccount2,
      isLinkAccountPending,
      verifyOAuthLink: verifyOAuthLink2,
      verifyFarcasterLink: verifyFarcasterLink2,
      verifyTelegramLink: verifyTelegramLink2,
      verifyEmailOrPhoneLink: verifyEmailOrPhoneLink2,
      verifyLinkedAccount,
      linkAccountStatus,
      linkAccountError,
      setLinkAccountError,
      unlinkingAccount,
      unlinkAccount: unlinkAccount2,
      unlinkAccountConfirm,
      isUnlinkAccountPending,
      cancelLinkAccount,
      onAccountLinked,
      onAccountLinkVerified,
      resetMutations
    }),
    [
      isEnabled,
      accountLinkInProgress2,
      accountLinkOptions,
      linkAccount2,
      isLinkAccountPending,
      verifyOAuthLink2,
      verifyFarcasterLink2,
      verifyTelegramLink2,
      verifyEmailOrPhoneLink2,
      verifyLinkedAccount,
      linkAccountStatus,
      linkAccountError,
      setLinkAccountError,
      unlinkAccount2,
      unlinkAccountConfirm,
      isUnlinkAccountPending,
      cancelLinkAccount,
      onAccountLinked,
      onAccountLinkVerified,
      resetMutations
    ]
  );
  return (0, import_jsx_runtime17.jsx)(AccountLinkContext.Provider, { value, children });
};
var useAccountLinking = () => (0, import_react62.useContext)(AccountLinkContext);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useLinkAccount.js
var useLinkAccount2 = () => {
  const { linkAccount: linkAccount2, linkAccountError, linkAccountStatus } = useAccountLinking();
  return {
    linkAccount: (args) => {
      return linkAccount2(args);
    },
    error: linkAccountError,
    status: linkAccountStatus,
    isPending: linkAccountStatus === "pending",
    isError: linkAccountStatus === "error",
    isIdle: linkAccountStatus === "idle",
    isSuccess: linkAccountStatus === "success"
  };
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/utils/renameMutations.js
function renameMutations(mutationObj, name) {
  const newMutations = {
    [name]: mutationObj.mutate,
    [`${name}Async`]: mutationObj.mutateAsync
  };
  const _a = mutationObj, { mutate: _, mutateAsync: __ } = _a, rest = __objRest2(_a, ["mutate", "mutateAsync"]);
  return __spreadValues2(__spreadValues2({}, newMutations), rest);
}

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useSignUpOrLogIn.js
var SIGN_UP_LOG_IN_KEY = "SIGN_UP_LOG_IN";
var useSignUpOrLogIn = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [SIGN_UP_LOG_IN_KEY],
    mutationFn: (args) => __async(void 0, null, function* () {
      try {
        const result = yield signUpOrLogIn(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "signUpOrLogIn");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useVerifyNewAccount.js
var VERIFY_NEW_ACCOUNT_KEY = "VERIFY_NEW_ACCOUNT";
var useVerifyNewAccount = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [VERIFY_NEW_ACCOUNT_KEY],
    mutationFn: (args) => __async(void 0, null, function* () {
      try {
        const result = yield verifyNewAccount(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "verifyNewAccount");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useWaitForLogin.js
var WAIT_FOR_LOG_IN_KEY = "WAIT_FOR_LOG_IN";
var useWaitForLogin = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [WAIT_FOR_LOG_IN_KEY],
    mutationFn: (..._0) => __async(void 0, [..._0], function* (args = {}) {
      try {
        const result = yield waitForLogin(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "waitForLogin");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useWaitForSignup.js
var WAIT_FOR_SIGN_UP_KEY = "WAIT_FOR_SIGN_UP";
var useWaitForSignup = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [WAIT_FOR_SIGN_UP_KEY],
    mutationFn: (..._0) => __async(void 0, [..._0], function* (args = {}) {
      try {
        const result = yield waitForSignup(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "waitForSignup");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useWaitForWalletCreation.js
var WAIT_FOR_WALLET_CREATION_KEY = "WAIT_FOR_WALLET_CREATION";
var useWaitForWalletCreation = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [WAIT_FOR_WALLET_CREATION_KEY],
    mutationFn: (..._0) => __async(void 0, [..._0], function* (args = {}) {
      try {
        const result = yield waitForWalletCreation(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "waitForWalletCreation");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useVerifyOAuth.js
var VERIFY_OAUTH_KEY = "VERIFY_OAUTH";
var useVerifyOAuth = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [VERIFY_OAUTH_KEY],
    mutationFn: (args) => __async(void 0, null, function* () {
      try {
        const result = yield verifyOAuth(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "verifyOAuth");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useVerifyFarcaster.js
var VERIFY_FARCASTER_KEY = "VERIFY_FARCASTER";
var useVerifyFarcaster = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [VERIFY_FARCASTER_KEY],
    mutationFn: (..._0) => __async(void 0, [..._0], function* (args = {}) {
      try {
        const result = yield verifyFarcaster(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "verifyFarcaster");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useVerifyTelegram.js
var VERIFY_TELEGRAM_KEY = "VERIFY_TELEGRAM";
var useVerifyTelegram = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [VERIFY_TELEGRAM_KEY],
    mutationFn: (args) => __async(void 0, null, function* () {
      try {
        const result = yield verifyTelegram(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "verifyTelegram");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useLoginExternalWallet.js
var LOGIN_EXTERNAL_WALLET_KEY = "LOGIN_EXTERNAL_WALLET";
var useLoginExternalWallet = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [LOGIN_EXTERNAL_WALLET_KEY],
    mutationFn: (args) => __async(void 0, null, function* () {
      try {
        const result = yield loginExternalWallet(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "loginExternalWallet");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useVerifyExternalWallet.js
var VERIFY_EXTERNAL_WALLET_KEY = "VERIFY_EXTERNAL_WALLET";
var useVerifyExternalWallet = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [VERIFY_EXTERNAL_WALLET_KEY],
    mutationFn: (args) => __async(void 0, null, function* () {
      try {
        const result = yield verifyExternalWallet(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "verifyExternalWallet");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useSetup2fa.js
var SETUP_2FA_KEY = "SETUP_2FA";
var useSetup2fa = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [SETUP_2FA_KEY],
    mutationFn: (args) => __async(void 0, null, function* () {
      try {
        const result = yield setup2fa(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "setup2fa");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useEnable2fa.js
var ENABLE_2FA_KEY = "ENABLE_2FA";
var useEnable2fa = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [ENABLE_2FA_KEY],
    mutationFn: (args) => __async(void 0, null, function* () {
      try {
        const result = yield enable2fa(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "enable2fa");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useVerify2fa.js
var VERIFY_2FA_KEY = "VERIFY_2FA";
var useVerify2fa = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [VERIFY_2FA_KEY],
    mutationFn: (args) => __async(void 0, null, function* () {
      try {
        const result = yield verify2fa(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "verify2fa");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useKeepSessionAlive.js
var KEEP_SESSION_ALIVE_KEY = "KEEP_SESSION_ALIVE";
var useKeepSessionAlive = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [KEEP_SESSION_ALIVE_KEY],
    mutationFn: (args) => __async(void 0, null, function* () {
      try {
        const result = yield keepSessionAlive(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "keepSessionAlive");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useLogout.js
var LOGOUT_KEY = "LOGOUT";
var useLogout = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [LOGOUT_KEY],
    mutationFn: (..._0) => __async(void 0, [..._0], function* (args = {}) {
      try {
        const result = yield logout(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "logout");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useResendVerificationCode.js
var RESEND_VERIFICATION_CODE_KEY = "RESEND_VERIFICATION_CODE";
var useResendVerificationCode = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [RESEND_VERIFICATION_CODE_KEY],
    mutationFn: (..._0) => __async(void 0, [..._0], function* (args = {}) {
      try {
        const result = yield resendVerificationCode(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "resendVerificationCode");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useCreateWallet.js
var CREATE_WALLET_KEY = "CREATE_WALLET";
var useCreateWallet = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [CREATE_WALLET_KEY],
    mutationFn: (..._0) => __async(void 0, [..._0], function* (args = {}) {
      try {
        const result = yield createWallet(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "createWallet");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useCreateWalletPerType.js
var CREATE_WALLET_PER_TYPE_KEY = "CREATE_WALLET_PER_TYPE";
var useCreateWalletPerType = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [CREATE_WALLET_PER_TYPE_KEY],
    mutationFn: (..._0) => __async(void 0, [..._0], function* (args = {}) {
      try {
        const result = yield createWalletPerType(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "createWalletPerType");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useCreatePregenWallet.js
var CREATE_PREGEN_WALLET_KEY = "CREATE_PREGEN_WALLET";
var useCreatePregenWallet = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [CREATE_PREGEN_WALLET_KEY],
    mutationFn: (args) => __async(void 0, null, function* () {
      try {
        const result = yield createPregenWallet(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "createPregenWallet");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useCreatePregenWalletPerType.js
var CREATE_PREGEN_WALLET_PER_TYPE_KEY = "CREATE_PREGEN_WALLET_PER_TYPE";
var useCreatePregenWalletPerType = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [CREATE_PREGEN_WALLET_PER_TYPE_KEY],
    mutationFn: (args) => __async(void 0, null, function* () {
      try {
        const result = yield createPregenWalletPerType(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "createPregenWalletPerType");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useClaimPregenWallets.js
var CLAIM_PREGEN_WALLETS_KEY = "CLAIM_PREGEN_WALLETS";
var useClaimPregenWallets = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [CLAIM_PREGEN_WALLETS_KEY],
    mutationFn: (args) => __async(void 0, null, function* () {
      try {
        const result = yield claimPregenWallets(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "claimPregenWallets");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useHasPregenWallet.js
var HAS_PREGEN_WALLET_KEY = "HAS_PREGEN_WALLET";
var useHasPregenWallet = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [HAS_PREGEN_WALLET_KEY],
    mutationFn: (args) => __async(void 0, null, function* () {
      try {
        const result = yield hasPregenWallet(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "hasPregenWallet");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useUpdatePregenWalletIdentifier.js
var UPDATE_PREGEN_WALLET_IDENTIFIER_KEY = "UPDATE_PREGEN_WALLET_IDENTIFIER";
var useUpdatePregenWalletIdentifier = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [UPDATE_PREGEN_WALLET_IDENTIFIER_KEY],
    mutationFn: (args) => __async(void 0, null, function* () {
      try {
        const result = yield updatePregenWalletIdentifier(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "updatePregenWalletIdentifier");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useCreateGuestWallets.js
var CREATE_GUEST_WALLETS_KEY = "CREATE_GUEST_WALLETS";
var useCreateGuestWallets = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [CREATE_GUEST_WALLETS_KEY],
    mutationFn: (args) => __async(void 0, null, function* () {
      try {
        const result = yield createGuestWallets(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "createGuestWallets");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useSignMessage.js
var SIGN_MESSAGE_KEY = "SIGN_MESSAGE";
var useSignMessage = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [SIGN_MESSAGE_KEY],
    mutationFn: (args) => __async(void 0, null, function* () {
      try {
        const result = yield signMessage(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "signMessage");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useSignTransaction.js
var SIGN_TRANSACTION_KEY = "SIGN_TRANSACTION";
var useSignTransaction = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [SIGN_TRANSACTION_KEY],
    mutationFn: (args) => __async(void 0, null, function* () {
      try {
        const result = yield signTransaction(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "signTransaction");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useIssueJwt.js
var ISSUE_JWT_KEY = "ISSUE_JWT";
var useIssueJwt = () => {
  const para = useClient();
  const mutation = useMutation({
    mutationKey: [ISSUE_JWT_KEY],
    mutationFn: (..._0) => __async(void 0, [..._0], function* (args = {}) {
      try {
        const result = yield issueJwt(para, args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "issueJwt");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useAddAuthMethod.js
var ADD_CREDENTIAL_KEY = "ADD_CREDENTIAL";
var useAddAuthMethod = ({ openPopup: openPopup2 } = { openPopup: true }) => {
  const para = useClient();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: [ADD_CREDENTIAL_KEY],
    mutationFn: (..._0) => __async(void 0, [..._0], function* (args = {}) {
      try {
        const result = yield addCredential(para, args);
        if (result && openPopup2) {
          openPopup({ url: result, target: "ParaAddAuthCredential", type: "ADD_CREDENTIAL" });
          if (typeof window !== "undefined" && para) {
            const handleMessage = (event) => {
              var _a;
              const portalBase = getPortalBaseURL(para.ctx);
              const portalLocalBase = getPortalBaseURL(para.ctx, true);
              if (!event.origin.startsWith(portalBase) && !event.origin.startsWith(portalLocalBase)) {
                return;
              }
              if (((_a = event.data) == null ? void 0 : _a.type) === "CLOSE_WINDOW") {
                if (event.data.success) {
                  queryClient.refetchQueries({ queryKey: [ACCOUNT_BASE_KEY] });
                }
                window.removeEventListener("message", handleMessage);
                clearTimeout(timeoutId);
              }
            };
            const timeoutId = setTimeout(
              () => {
                window.removeEventListener("message", handleMessage);
              },
              1e3 * 60 * 3
            );
            window.addEventListener("message", handleMessage);
          }
        }
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "addAuthMethod");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useExportPrivateKey.js
var EXPORT_PRIVATE_KEY_KEY = "EXPORT_PRIVATE_KEY";
var useExportPrivateKey = () => {
  const para = useClient();
  const { data: activeWallet } = useWallet();
  return useMutation({
    mutationKey: [EXPORT_PRIVATE_KEY_KEY],
    mutationFn: (args) => __async(void 0, null, function* () {
      try {
        const result = yield exportPrivateKey(para, __spreadValues2({
          walletId: activeWallet == null ? void 0 : activeWallet.id,
          shouldOpenPopup: true
        }, args));
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/index.js
var useCreateGuestWalletsState = generateStateHook("createGuestWallets");

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/utils/useAutoSessionKeepAlive.js
var SESSION_CHECK_INTERVAL = 6e4;
var SESSION_REFRESH_THRESHOLD = 3e5;
var useAutoSessionKeepAlive = ({ disabled }) => {
  const client = useInternalClient();
  const { embedded } = useAccount();
  const { logoutAsync } = useLogout();
  const { keepSessionAliveAsync } = useKeepSessionAlive();
  const sessionCheckInterval = (0, import_react63.useRef)(null);
  (0, import_react63.useEffect)(() => {
    if (!client || disabled) {
      clearSessionMonitoring();
      return;
    }
    if ((embedded == null ? void 0 : embedded.isConnected) && !embedded.isGuestMode && client.externalWalletConnectionType !== "CONNECTION_ONLY") {
      setupSessionMonitoring();
    } else {
      clearSessionMonitoring();
    }
    return () => clearSessionMonitoring();
  }, [client, embedded, disabled]);
  const getSessionExpiry = () => __async(void 0, null, function* () {
    try {
      const sessionCookie = yield client == null ? void 0 : client.retrieveSessionCookie();
      if (!sessionCookie) return null;
      const expiresMatch = sessionCookie.match(/Expires=([^;]+)/);
      return expiresMatch ? new Date(expiresMatch[1]) : null;
    } catch (e) {
      return null;
    }
  });
  const setupSessionMonitoring = () => {
    clearSessionMonitoring();
    sessionCheckInterval.current = setInterval(() => __async(void 0, null, function* () {
      const expiry = yield getSessionExpiry();
      if (!expiry) {
        yield logoutAsync({});
        clearSessionMonitoring();
        return;
      }
      const timeUntilExpiry = expiry.getTime() - Date.now();
      if (timeUntilExpiry <= 0) {
        yield logoutAsync({});
        clearSessionMonitoring();
        return;
      }
      if (timeUntilExpiry <= SESSION_REFRESH_THRESHOLD) {
        try {
          yield keepSessionAliveAsync();
          setupSessionMonitoring();
        } catch (err) {
          console.error("Failed to keep session alive:", err);
          yield logoutAsync({});
          clearSessionMonitoring();
        }
        return;
      }
    }), SESSION_CHECK_INTERVAL);
  };
  const clearSessionMonitoring = () => {
    if (sessionCheckInterval.current) {
      clearInterval(sessionCheckInterval.current);
    }
  };
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/utils/useEventListeners.js
var import_react64 = __toESM(require_react(), 1);
var useEventListeners = ({
  onLogin,
  onLogout,
  onAccountSetup,
  onAccountCreation,
  onSignMessage,
  onSignTransaction,
  onWalletCreated,
  onPregenWalletClaimed,
  onExternalWalletChange,
  onWalletsChange,
  onGuestWalletsCreated
} = {}) => {
  const queryClient = useQueryClient();
  const refs = useStore2((state2) => state2.refs);
  const clearSelectedWallet = useStore2((state2) => state2.clearSelectedWallet);
  const { updateSelectedWallet } = useWalletState();
  const setSendTx = useModalStore((state2) => state2.setSendTx);
  const loginOrSetupListener = (0, import_react64.useCallback)(() => {
    queryClient.refetchQueries({ queryKey: [IS_FULLY_LOGGED_IN_BASE_KEY] });
    queryClient.refetchQueries({ queryKey: [ACCOUNT_BASE_KEY] });
    queryClient.refetchQueries({ queryKey: [WALLET_BASE_KEY] });
    queryClient.invalidateQueries({ queryKey: [WALLET_BALANCE_BASE_KEY], exact: false });
  }, [queryClient]);
  const loginListener = (0, import_react64.useCallback)(
    (event) => {
      loginOrSetupListener();
      onLogin == null ? void 0 : onLogin(event);
    },
    [loginOrSetupListener, onLogin]
  );
  const accountSetupListener = (0, import_react64.useCallback)(
    (event) => {
      loginOrSetupListener();
      onAccountSetup == null ? void 0 : onAccountSetup(event);
    },
    [loginOrSetupListener, onAccountSetup]
  );
  const accountCreationListener = (0, import_react64.useCallback)(
    (event) => {
      loginOrSetupListener();
      onAccountCreation == null ? void 0 : onAccountCreation(event);
    },
    [loginOrSetupListener, onAccountCreation]
  );
  const logoutListener = (0, import_react64.useCallback)(
    (event) => {
      queryClient.setQueriesData({ queryKey: [IS_FULLY_LOGGED_IN_BASE_KEY] }, false);
      queryClient.invalidateQueries({ queryKey: [IS_FULLY_LOGGED_IN_BASE_KEY] });
      queryClient.invalidateQueries({ queryKey: [ACCOUNT_BASE_KEY] });
      clearSelectedWallet();
      setSendTx(void 0);
      onLogout == null ? void 0 : onLogout(event);
    },
    [queryClient, clearSelectedWallet, setSendTx, onLogout]
  );
  const signMessageListener = (0, import_react64.useCallback)(
    (event) => {
      onSignMessage == null ? void 0 : onSignMessage(event);
    },
    [onSignMessage]
  );
  const signTransactionListener = (0, import_react64.useCallback)(
    (event) => {
      onSignTransaction == null ? void 0 : onSignTransaction(event);
    },
    [onSignTransaction]
  );
  const walletChangeListener = (0, import_react64.useCallback)(
    (event) => {
      queryClient.refetchQueries({ queryKey: [IS_FULLY_LOGGED_IN_BASE_KEY] });
      queryClient.refetchQueries({ queryKey: [ACCOUNT_BASE_KEY] });
      updateSelectedWallet();
      onWalletsChange == null ? void 0 : onWalletsChange(event);
    },
    [queryClient, updateSelectedWallet, onWalletsChange]
  );
  const externalWalletChangeListener = (0, import_react64.useCallback)(
    (event) => {
      queryClient.refetchQueries({ queryKey: [IS_FULLY_LOGGED_IN_BASE_KEY] });
      queryClient.refetchQueries({ queryKey: [ACCOUNT_BASE_KEY] });
      updateSelectedWallet();
      onExternalWalletChange == null ? void 0 : onExternalWalletChange(event);
    },
    [queryClient, updateSelectedWallet, onExternalWalletChange]
  );
  const walletCreatedListener = (0, import_react64.useCallback)(
    (event) => {
      onWalletCreated == null ? void 0 : onWalletCreated(event);
    },
    [onWalletCreated]
  );
  const pregenWalletClaimedListener = (0, import_react64.useCallback)(
    (event) => {
      onPregenWalletClaimed == null ? void 0 : onPregenWalletClaimed(event);
    },
    [onPregenWalletClaimed]
  );
  const guestWalletsCreatedListener = (0, import_react64.useCallback)(
    (event) => {
      queryClient.refetchQueries({ queryKey: [IS_FULLY_LOGGED_IN_BASE_KEY] });
      queryClient.refetchQueries({ queryKey: [ACCOUNT_BASE_KEY] });
      updateSelectedWallet();
      onGuestWalletsCreated == null ? void 0 : onGuestWalletsCreated(event);
    },
    [queryClient, updateSelectedWallet, onGuestWalletsCreated]
  );
  const assetTransferListener = (0, import_react64.useCallback)(() => {
    refs.balancesInvalidationTime.current = Date.now();
    queryClient.invalidateQueries({
      queryKey: ["useProfileBalance"],
      refetchType: "active"
    });
  }, [queryClient, refs.balancesInvalidationTime]);
  (0, import_react64.useEffect)(() => {
    if (typeof window === "undefined") return;
    window.addEventListener(ParaEvent.LOGIN_EVENT, loginListener);
    window.addEventListener(ParaEvent.ACCOUNT_SETUP_EVENT, accountSetupListener);
    window.addEventListener(ParaEvent.ACCOUNT_CREATION_EVENT, accountCreationListener);
    window.addEventListener(ParaEvent.LOGOUT_EVENT, logoutListener);
    window.addEventListener(ParaEvent.SIGN_MESSAGE_EVENT, signMessageListener);
    window.addEventListener(ParaEvent.SIGN_TRANSACTION_EVENT, signTransactionListener);
    window.addEventListener(ParaEvent.WALLETS_CHANGE_EVENT, walletChangeListener);
    window.addEventListener(ParaEvent.EXTERNAL_WALLET_CHANGE_EVENT, externalWalletChangeListener);
    window.addEventListener(ParaEvent.WALLET_CREATED, walletCreatedListener);
    window.addEventListener(ParaEvent.PREGEN_WALLET_CLAIMED, pregenWalletClaimedListener);
    window.addEventListener(ParaEvent.GUEST_WALLETS_CREATED, guestWalletsCreatedListener);
    window.addEventListener(ParaEvent.ASSET_TRANSFERRED, assetTransferListener);
    return () => {
      if (typeof window === "undefined") return;
      window.removeEventListener(ParaEvent.LOGIN_EVENT, loginListener);
      window.removeEventListener(ParaEvent.ACCOUNT_SETUP_EVENT, accountSetupListener);
      window.removeEventListener(ParaEvent.ACCOUNT_CREATION_EVENT, accountCreationListener);
      window.removeEventListener(ParaEvent.LOGOUT_EVENT, logoutListener);
      window.removeEventListener(ParaEvent.SIGN_MESSAGE_EVENT, signMessageListener);
      window.removeEventListener(ParaEvent.SIGN_TRANSACTION_EVENT, signTransactionListener);
      window.removeEventListener(ParaEvent.WALLETS_CHANGE_EVENT, walletChangeListener);
      window.removeEventListener(ParaEvent.EXTERNAL_WALLET_CHANGE_EVENT, externalWalletChangeListener);
      window.removeEventListener(ParaEvent.WALLET_CREATED, walletCreatedListener);
      window.removeEventListener(ParaEvent.PREGEN_WALLET_CLAIMED, pregenWalletClaimedListener);
      window.removeEventListener(ParaEvent.GUEST_WALLETS_CREATED, guestWalletsCreatedListener);
      window.removeEventListener(ParaEvent.ASSET_TRANSFERRED, assetTransferListener);
    };
  }, [
    loginListener,
    accountSetupListener,
    accountCreationListener,
    logoutListener,
    signMessageListener,
    signTransactionListener,
    walletChangeListener,
    externalWalletChangeListener,
    walletCreatedListener,
    pregenWalletClaimedListener,
    guestWalletsCreatedListener
  ]);
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/components/ExternalWalletWrapper.js
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
var import_react68 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/components/EvmWalletWrapper.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/providers/EvmExternalWalletProvider.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var import_react65 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/external/getParaEvmLib.js
var getParaEvmLib = () => __async(void 0, null, function* () {
  let lib;
  try {
    lib = yield import("./dist-766XTUU2.js");
  } catch (e) {
    lib = void 0;
  }
  return { lib };
});

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/external/getParaEvmConnector.js
var getParaEvmConnector = () => __async(void 0, null, function* () {
  let Provider = void 0, context = EvmExternalWalletContext, wallets = [];
  const { lib } = yield getParaEvmLib();
  if (lib) {
    Provider = lib.ParaEvmProvider;
    context = lib.EvmExternalWalletContext;
    wallets = lib.allWallets;
  }
  return { Provider, context, wallets };
});

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/providers/EvmExternalWalletProvider.js
function EvmExternalWalletProvider(_a) {
  var _b = _a, {
    children,
    isUsing,
    wallets: walletsFromProps
  } = _b, rest = __objRest2(_b, [
    "children",
    "isUsing",
    "wallets"
  ]);
  const setEvmContext = useStore2((state2) => state2.setEvmContext);
  const setEvmProvider = useStore2((state2) => state2.setEvmProvider);
  const EvmProvider = useStore2((state2) => state2.EvmProvider);
  const setEvmWallets = useStore2((state2) => state2.setEvmWallets);
  const evmWallets = useStore2((state2) => state2.evmWallets);
  const isLoadingLib = useStore2((state2) => state2.isLoadingEvmLib);
  const setIsLoadingLib = useStore2((state2) => state2.setIsLoadingEvmLib);
  const filteredWallets = (0, import_react65.useMemo)(
    () => evmWallets.filter(
      (w) => {
        var _a2, _b2, _c, _d;
        return walletsFromProps.includes(
          w({
            appName: (_b2 = (_a2 = rest == null ? void 0 : rest.config) == null ? void 0 : _a2.appName) != null ? _b2 : "",
            projectId: (_d = (_c = rest == null ? void 0 : rest.config) == null ? void 0 : _c.projectId) != null ? _d : ""
          }).id.toUpperCase()
        );
      }
    ),
    [evmWallets, walletsFromProps]
  );
  (0, import_react65.useEffect)(() => {
    const loadLib = () => __async(this, null, function* () {
      if (EvmProvider) {
        return;
      }
      const { Provider, context, wallets } = yield getParaEvmConnector();
      if (Provider) {
        setEvmProvider(Provider);
      }
      if (wallets) {
        setEvmWallets(wallets);
      }
      if (context) {
        setEvmContext(context);
      }
      setIsLoadingLib(false);
    });
    loadLib();
  }, []);
  if (isLoadingLib) {
    return null;
  }
  if (!rest.config) {
    return children;
  }
  if (EvmProvider) {
    return (0, import_jsx_runtime18.jsx)(EvmProvider, __spreadProps2(__spreadValues2({}, rest), { config: __spreadProps2(__spreadValues2({}, rest == null ? void 0 : rest.config), { wallets: filteredWallets }), children }));
  } else if (isUsing) {
    console.warn("@getpara/evm-wallet-connectors is required to use an external EVM wallet.");
  }
  return children;
}

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/components/EvmWalletWrapper.js
var EvmWalletWrapper = ({
  children,
  evmProviderConfig,
  wagmiProviderProps,
  onSwitchWallet
}) => {
  const para = useInternalClient();
  const { selectedWallet } = useWalletState();
  const externalWalletsWithFullAuth = useStore2((state2) => state2.externalWalletsWithFullAuth);
  const wallets = useStore2((state2) => state2.externalWallets);
  const connectionOnly = useStore2((state2) => state2.connectionOnly);
  const includeWalletVerification = useStore2((state2) => state2.includeWalletVerification);
  const isUsing = wallets.some((w) => w in EVM_WALLETS);
  return (0, import_jsx_runtime19.jsx)(
    EvmExternalWalletProvider,
    {
      config: evmProviderConfig,
      internalConfig: {
        onSwitchWallet,
        para,
        walletsWithFullAuth: externalWalletsWithFullAuth,
        connectedWallet: (selectedWallet == null ? void 0 : selectedWallet.id) ? { id: selectedWallet.id, type: selectedWallet.type } : null,
        connectionOnly,
        includeWalletVerification
      },
      wagmiProviderProps,
      isUsing,
      wallets,
      children
    }
  );
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/components/CosmosWalletWrapper.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/providers/CosmosExternalWalletProvider.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var import_react66 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/external/getParaCosmosLib.js
var getParaCosmosLib = () => __async(void 0, null, function* () {
  let lib;
  try {
    lib = yield import("./dist-ROQTMC4O.js");
  } catch (e) {
    lib = void 0;
  }
  return { lib };
});

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/external/getParaCosmosConnector.js
var getParaCosmosConnector = () => __async(void 0, null, function* () {
  let Provider = void 0, context = CosmosExternalWalletContext, wallets = [];
  const { lib } = yield getParaCosmosLib();
  if (lib) {
    Provider = lib.ParaCosmosProvider;
    context = lib.CosmosExternalWalletContext;
    wallets = lib.allWallets;
  }
  return { Provider, context, wallets };
});

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/providers/CosmosExternalWalletProvider.js
function CosmosExternalWalletProvider(_a) {
  var _b = _a, {
    children,
    isUsing,
    wallets: walletsFromProps
  } = _b, rest = __objRest2(_b, [
    "children",
    "isUsing",
    "wallets"
  ]);
  const setCosmosContext = useStore2((state2) => state2.setCosmosContext);
  const setCosmosProvider = useStore2((state2) => state2.setCosmosProvider);
  const CosmosProvider = useStore2((state2) => state2.CosmosProvider);
  const setCosmosWallets = useStore2((state2) => state2.setCosmosWallets);
  const cosmosWallets = useStore2((state2) => state2.cosmosWallets);
  const isLoadingLib = useStore2((state2) => state2.isLoadingCosmosLib);
  const setIsLoadingLib = useStore2((state2) => state2.setIsLoadingCosmosLib);
  const filteredWallets = (0, import_react66.useMemo)(
    () => cosmosWallets.filter((w) => walletsFromProps.includes(w().id.toUpperCase())),
    [cosmosWallets, walletsFromProps]
  );
  (0, import_react66.useEffect)(() => {
    const loadLib = () => __async(this, null, function* () {
      if (CosmosProvider) {
        return;
      }
      const { Provider, context, wallets } = yield getParaCosmosConnector();
      if (Provider) {
        setCosmosProvider(Provider);
      }
      if (wallets) {
        setCosmosWallets(wallets);
      }
      if (context) {
        setCosmosContext(context);
      }
      setIsLoadingLib(false);
    });
    loadLib();
  }, []);
  if (isLoadingLib) {
    return null;
  }
  if (!rest.config) {
    return children;
  }
  if (CosmosProvider) {
    return (0, import_jsx_runtime20.jsx)(CosmosProvider, __spreadProps2(__spreadValues2({}, rest), { config: __spreadProps2(__spreadValues2({}, rest == null ? void 0 : rest.config), { wallets: filteredWallets }), children }));
  } else if (isUsing) {
    console.warn("@getpara/cosmos-wallet-connectors is required to use an external Cosmos wallet.");
  }
  return children;
}
var MemoizedCosmosExternalWalletProvider = (0, import_react66.memo)(CosmosExternalWalletProvider);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/components/CosmosWalletWrapper.js
var CosmosWalletWrapper = ({
  children,
  cosmosConnectorConfig,
  grazProviderProps,
  onSwitchWallet
}) => {
  const para = useInternalClient();
  const { selectedWallet } = useWalletState();
  const externalWalletsWithFullAuth = useStore2((state2) => state2.externalWalletsWithFullAuth);
  const wallets = useStore2((state2) => state2.externalWallets);
  const isUsing = wallets.some((w) => w in COSMOS_WALLETS);
  const connectionOnly = useStore2((state2) => state2.connectionOnly);
  const includeWalletVerification = useStore2((state2) => state2.includeWalletVerification);
  return (0, import_jsx_runtime21.jsx)(
    CosmosExternalWalletProvider,
    {
      config: cosmosConnectorConfig,
      internalConfig: {
        onSwitchWallet,
        para,
        walletsWithFullAuth: externalWalletsWithFullAuth,
        connectedWallet: (selectedWallet == null ? void 0 : selectedWallet.id) ? { id: selectedWallet.id, type: selectedWallet.type } : null,
        connectionOnly,
        includeWalletVerification
      },
      grazProviderProps,
      isUsing,
      wallets,
      children
    }
  );
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/components/SolanaWalletWrapper.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/providers/SolanaExternalWalletProvider.js
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var import_react67 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/external/getParaSolanaLib.js
var getParaSolanaLib = () => __async(void 0, null, function* () {
  let lib;
  try {
    lib = yield import("./dist-SBI3GAV6.js");
  } catch (e) {
    lib = void 0;
  }
  return { lib };
});

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/external/getParaSolanaConnector.js
var getParaSolanaConnector = () => __async(void 0, null, function* () {
  let Provider = void 0, context = SolanaExternalWalletContext, wallets = [];
  const { lib } = yield getParaSolanaLib();
  if (lib) {
    Provider = lib.ParaSolanaProvider;
    context = lib.SolanaExternalWalletContext;
    wallets = lib.allWallets;
  }
  return { Provider, context, wallets };
});

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/providers/SolanaExternalWalletProvider.js
function SolanaExternalWalletProvider(_a) {
  var _b = _a, {
    children,
    isUsing,
    wallets: walletsFromProps
  } = _b, rest = __objRest2(_b, [
    "children",
    "isUsing",
    "wallets"
  ]);
  const setSolanaContext = useStore2((state2) => state2.setSolanaContext);
  const setSolanaProvider = useStore2((state2) => state2.setSolanaProvider);
  const SolanaProvider = useStore2((state2) => state2.SolanaProvider);
  const setSolanaWallets = useStore2((state2) => state2.setSolanaWallets);
  const solanaWallets = useStore2((state2) => state2.solanaWallets);
  const isLoadingLib = useStore2((state2) => state2.isLoadingSolanaLib);
  const setIsLoadingLib = useStore2((state2) => state2.setIsLoadingSolanaLib);
  const filteredWallets = (0, import_react67.useMemo)(
    () => solanaWallets.filter((w) => walletsFromProps.includes(w().id.toUpperCase())),
    [solanaWallets, walletsFromProps]
  );
  (0, import_react67.useEffect)(() => {
    const loadLib = () => __async(this, null, function* () {
      if (SolanaProvider) {
        return;
      }
      const { Provider, context, wallets } = yield getParaSolanaConnector();
      if (Provider) {
        setSolanaProvider(Provider);
      }
      if (wallets) {
        setSolanaWallets(wallets);
      }
      if (context) {
        setSolanaContext(context);
      }
      setIsLoadingLib(false);
    });
    loadLib();
  }, []);
  if (isLoadingLib) {
    return null;
  }
  if (!rest.config) {
    return children;
  }
  if (SolanaProvider) {
    return (0, import_jsx_runtime22.jsx)(SolanaProvider, __spreadProps2(__spreadValues2({}, rest), { config: __spreadProps2(__spreadValues2({}, rest == null ? void 0 : rest.config), { wallets: filteredWallets }), children }));
  } else if (isUsing) {
    console.warn("@getpara/solana-wallet-connectors is required to use an external Solana wallet.");
  }
  return children;
}
var MemoizedSolanaExternalWalletProvider = (0, import_react67.memo)(SolanaExternalWalletProvider);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/components/SolanaWalletWrapper.js
var SolanaWalletWrapper = ({
  children,
  solanaProviderConfig,
  onSwitchWallet
}) => {
  const externalWalletsWithFullAuth = useStore2((state2) => state2.externalWalletsWithFullAuth);
  const para = useInternalClient();
  const wallets = useStore2((state2) => state2.externalWallets);
  const connectionOnly = useStore2((state2) => state2.connectionOnly);
  const includeWalletVerification = useStore2((state2) => state2.includeWalletVerification);
  const isUsing = wallets.some((w) => w in SOLANA_WALLETS);
  if (!solanaProviderConfig) {
    if (isUsing) {
      throw new Error("A valid solanaConnector config is required to use an external Solana wallet.");
    }
    return children;
  }
  return (0, import_jsx_runtime23.jsx)(
    SolanaExternalWalletProvider,
    {
      config: solanaProviderConfig,
      internalConfig: {
        onSwitchWallet,
        para,
        walletsWithFullAuth: externalWalletsWithFullAuth,
        connectionOnly,
        includeWalletVerification
      },
      isUsing,
      wallets,
      children
    }
  );
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/components/ExternalWalletWrapper.js
var ExternalWalletWrapper = ({
  children,
  config
}) => {
  var _a;
  const { appDescription, appIcon, appUrl, walletConnect, evmConnector, cosmosConnector, solanaConnector } = config != null ? config : {};
  const appName = useStore2((state2) => state2.appName);
  const resetModalState = useModalStore((state2) => state2.resetState);
  const wallets = useStore2((state2) => state2.externalWallets);
  const para = useInternalClient();
  (0, import_react68.useEffect)(() => {
    if (!!wallets.length && !(walletConnect == null ? void 0 : walletConnect.projectId) && wallets.some((wallet) => EVM_WALLETS.includes(wallet))) {
      para.displayModalError(
        "It is recommended to provide a WalletConnect project id to ensure wallet connection works as expected. Refer to our docs at [https://docs.getpara.com/v2/react/guides/external-wallets/evm#configure-the-providers](https://docs.getpara.com/v2/react/guides/external-wallets/evm#configure-the-providers) for configuration details and sign up for your free key at [https://cloud.walletconnect.com/sign-in](https://cloud.walletconnect.com/sign-in)"
      );
      console.warn(
        "It is recommended to provide a WalletConnect project id to ensure wallet connection works as expected. Sign up for your free key at https://cloud.walletconnect.com/sign-in"
      );
    }
  }, [wallets, walletConnect]);
  const evmProviderConfig = (0, import_react68.useMemo)(
    () => {
      var _a2;
      return evmConnector ? __spreadValues2({ appName, appDescription, appIcon, appUrl, projectId: (_a2 = walletConnect == null ? void 0 : walletConnect.projectId) != null ? _a2 : "" }, evmConnector == null ? void 0 : evmConnector.config) : void 0;
    },
    [appName, appDescription, appIcon, appUrl, walletConnect == null ? void 0 : walletConnect.projectId, evmConnector]
  );
  const solanaProviderConfig = (0, import_react68.useMemo)(() => {
    var _a2, _b, _c, _d, _e, _f;
    const appIdentity = {
      name: (_b = (_a2 = solanaConnector == null ? void 0 : solanaConnector.config.appIdentity) == null ? void 0 : _a2.name) != null ? _b : appName,
      uri: (_d = (_c = solanaConnector == null ? void 0 : solanaConnector.config.appIdentity) == null ? void 0 : _c.uri) != null ? _d : appUrl,
      icon: (_f = (_e = solanaConnector == null ? void 0 : solanaConnector.config.appIdentity) == null ? void 0 : _e.icon) != null ? _f : appIcon
    };
    return solanaConnector ? __spreadValues2({ appIdentity }, solanaConnector == null ? void 0 : solanaConnector.config) : void 0;
  }, [solanaConnector]);
  const cosmosProviderConfig = (0, import_react68.useMemo)(
    () => cosmosConnector ? cosmosConnector.config : void 0,
    [cosmosConnector]
  );
  const grazProviderProps = (0, import_react68.useMemo)(() => {
    var _a2, _b;
    const connectorsGrazProviderProps = cosmosConnector == null ? void 0 : cosmosConnector.grazProviderProps;
    return __spreadProps2(__spreadValues2({}, connectorsGrazProviderProps), {
      walletConnect: __spreadProps2(__spreadValues2({}, connectorsGrazProviderProps == null ? void 0 : connectorsGrazProviderProps.walletConnect), {
        options: __spreadProps2(__spreadValues2({}, (_a2 = connectorsGrazProviderProps == null ? void 0 : connectorsGrazProviderProps.walletConnect) == null ? void 0 : _a2.options), { projectId: (_b = walletConnect == null ? void 0 : walletConnect.projectId) != null ? _b : "" })
      })
    });
  }, [cosmosConnector, walletConnect == null ? void 0 : walletConnect.projectId]);
  const handleSwitchWallet = (0, import_react68.useCallback)(({ address, error }) => {
    if (error || !address) {
      resetModalState();
    }
  }, []);
  return (0, import_jsx_runtime24.jsx)(
    EvmWalletWrapper,
    {
      evmProviderConfig,
      wagmiProviderProps: (_a = evmConnector == null ? void 0 : evmConnector.wagmiProviderProps) != null ? _a : {},
      onSwitchWallet: handleSwitchWallet,
      children: (0, import_jsx_runtime24.jsx)(
        CosmosWalletWrapper,
        {
          cosmosConnectorConfig: cosmosProviderConfig,
          grazProviderProps,
          onSwitchWallet: handleSwitchWallet,
          children: (0, import_jsx_runtime24.jsx)(SolanaWalletWrapper, { onSwitchWallet: handleSwitchWallet, solanaProviderConfig, children: (0, import_jsx_runtime24.jsx)(ExternalWalletProvider, { children }) })
        }
      )
    }
  );
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/utils/paraConfigTypeGuards.js
function isConfigType(obj) {
  return !!obj && typeof obj === "object" && "apiKey" in obj;
}
function isParaWeb(obj) {
  return obj instanceof src_default2;
}

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/providers/AssetsProvider.js
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
var import_react69 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/utils/useAssetInfo.js
var useAssetInfo = () => {
  const client = useInternalClient();
  return useQuery({
    enabled: !!client,
    queryKey: ["useAssetInfo"],
    staleTime: 15e3,
    queryFn: () => __async(void 0, null, function* () {
      const { assets } = yield client == null ? void 0 : client.ctx.client.getAssetInfo();
      return assets;
    })
  });
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/providers/AssetsProvider.js
var AssetsContext = (0, import_react69.createContext)({
  displayCurrency: "USD",
  profileBalance: null,
  profileBalanceIsPending: true,
  assetMetadata: null,
  assetMetadataIsPending: true,
  totalBalance: void 0
});
function AssetsProvider({ children }) {
  const balancesConfig = useStore2((state2) => {
    var _a;
    return (_a = state2.modalConfig) == null ? void 0 : _a.balances;
  });
  const { data: profileBalance, isPending: profileBalanceIsPending } = useProfileBalance();
  const { data: assetMetadata, isPending: assetMetadataIsPending } = useAssetInfo();
  const totalBalance = (0, import_react69.useMemo)(() => {
    switch (true) {
      case !balancesConfig:
      case (balancesConfig == null ? void 0 : balancesConfig.displayType) === "AGGREGATED":
        if (!(profileBalance == null ? void 0 : profileBalance.value)) {
          return void 0;
        }
        return formatCurrency(profileBalance.value);
      default: {
        if (!profileBalance) {
          return void 0;
        }
        const assetQuantity = profileBalance.wallets.reduce((acc, wallet) => {
          const asset = wallet.assets.find((a) => {
            var _a;
            return ((_a = a.metadata) == null ? void 0 : _a.symbol) === balancesConfig.asset.symbol;
          });
          if (!asset) {
            return acc;
          }
          return acc + asset.quantity;
        }, 0);
        return formatAssetQuantity({ quantity: assetQuantity, symbol: balancesConfig.asset.symbol });
      }
    }
  }, [balancesConfig, profileBalance]);
  const value = (0, import_react69.useMemo)(
    () => ({
      displayCurrency: "USD",
      profileBalance: profileBalance || null,
      profileBalanceIsPending,
      assetMetadata: assetMetadata || null,
      assetMetadataIsPending,
      totalBalance
    }),
    [profileBalance, totalBalance, profileBalanceIsPending, assetMetadata, assetMetadataIsPending]
  );
  return (0, import_jsx_runtime25.jsx)(AssetsContext.Provider, { value, children });
}
var useAssets = () => (0, import_react69.useContext)(AssetsContext);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/ParaProviderMin.js
var ParaProviderMin = (0, import_react70.forwardRef)(({ children, paraClientConfig, callbacks, config, externalWalletConfig, paraModalConfig }, ref) => {
  useEventListeners(callbacks);
  useAutoSessionKeepAlive({ disabled: config.disableAutoSessionKeepAlive });
  const setClient = useStore2((state2) => state2.setClient);
  const client = useStore2((state2) => state2.client);
  const setExternalWallets = useStore2((state2) => state2.setExternalWallets);
  const externalWallets = useStore2((state2) => state2.externalWallets);
  const setExternalWalletsWithFullAuth = useStore2((state2) => state2.setExternalWalletsWithFullAuth);
  const externalWalletsWithFullAuth = useStore2((state2) => state2.externalWalletsWithFullAuth);
  const setIncludeWalletVerification = useStore2((state2) => state2.setIncludeWalletVerification);
  const includeWalletVerification = useStore2((state2) => state2.includeWalletVerification);
  const setConnectionOnly = useStore2((state2) => state2.setConnectionOnly);
  const connectionOnly = useStore2((state2) => state2.connectionOnly);
  const setModalConfig = useStore2((state2) => state2.setModalConfig);
  const modalConfig = useStore2((state2) => state2.modalConfig);
  const setAppName = useStore2((state2) => state2.setAppName);
  const appName = useStore2((state2) => state2.appName);
  const setFarcasterMiniAppConfig = useStore2((state2) => state2.setFarcasterMiniAppConfig);
  const farcasterMiniAppConfig = useStore2((state2) => state2.farcasterMiniAppConfig);
  const rpcUrl = useStore2((state2) => state2.rpcUrl);
  const setRpcUrl = useStore2((state2) => state2.setRpcUrl);
  const setProviderProps = useStore2((state2) => state2.setProviderProps);
  const setModalError = useModalStore((state2) => state2.setModalError);
  const [isClientReady, setIsClientReady] = (0, import_react70.useState)(client == null ? void 0 : client.isReady);
  (0, import_react70.useEffect)(() => {
    setProviderProps(__spreadProps2(__spreadValues2(__spreadValues2(__spreadValues2({}, config), externalWalletConfig), paraModalConfig), {
      // Redacting walletConnect to avoid exposing project id
      walletConnect: void 0
    }));
  }, [config, externalWalletConfig, paraModalConfig]);
  (0, import_react70.useEffect)(() => {
    if (rpcUrl !== config.rpcUrl) setRpcUrl(config.rpcUrl);
  }, [config.rpcUrl]);
  (0, import_react70.useEffect)(() => {
    if (appName !== config.appName) setAppName(config.appName);
  }, [config.appName]);
  (0, import_react70.useEffect)(() => {
    if (farcasterMiniAppConfig !== config.farcasterMiniAppConfig) {
      setFarcasterMiniAppConfig(config.farcasterMiniAppConfig);
    }
  }, [config.farcasterMiniAppConfig]);
  (0, import_react70.useEffect)(() => {
    if (modalConfig !== paraModalConfig) setModalConfig(paraModalConfig);
  }, [paraModalConfig]);
  (0, import_react70.useEffect)(() => {
    var _a;
    if (connectionOnly !== (externalWalletConfig == null ? void 0 : externalWalletConfig.connectionOnly)) {
      setConnectionOnly((_a = externalWalletConfig == null ? void 0 : externalWalletConfig.connectionOnly) != null ? _a : false);
    }
  }, [externalWalletConfig == null ? void 0 : externalWalletConfig.connectionOnly]);
  (0, import_react70.useEffect)(() => {
    var _a, _b;
    if (includeWalletVerification !== (externalWalletConfig == null ? void 0 : externalWalletConfig.includeWalletVerification)) {
      if ((externalWalletConfig == null ? void 0 : externalWalletConfig.connectionOnly) || (isParaWeb(paraClientConfig) ? paraClientConfig.externalWalletConnectionOnly : (_a = paraClientConfig.opts) == null ? void 0 : _a.externalWalletConnectionOnly)) {
        console.warn("includeWalletVerification has no effect when using connection only external wallets");
        setIncludeWalletVerification(false);
      } else {
        setIncludeWalletVerification((_b = externalWalletConfig == null ? void 0 : externalWalletConfig.includeWalletVerification) != null ? _b : false);
      }
    }
  }, [externalWalletConfig == null ? void 0 : externalWalletConfig.includeWalletVerification]);
  (0, import_react70.useEffect)(() => {
    var _a;
    if (externalWallets !== (externalWalletConfig == null ? void 0 : externalWalletConfig.wallets)) {
      setExternalWallets((_a = externalWalletConfig == null ? void 0 : externalWalletConfig.wallets) != null ? _a : [...EXTERNAL_WALLET_TYPES]);
    }
  }, [externalWalletConfig == null ? void 0 : externalWalletConfig.wallets]);
  (0, import_react70.useEffect)(() => {
    var _a, _b;
    if (externalWalletsWithFullAuth !== (externalWalletConfig == null ? void 0 : externalWalletConfig.createLinkedEmbeddedForExternalWallets)) {
      if ((externalWalletConfig == null ? void 0 : externalWalletConfig.connectionOnly) || (isParaWeb(paraClientConfig) ? paraClientConfig.externalWalletConnectionOnly : (_a = paraClientConfig.opts) == null ? void 0 : _a.externalWalletConnectionOnly)) {
        console.warn("createLinkedEmbeddedForExternalWallets has no effect when using connection only external wallets");
        setExternalWalletsWithFullAuth([]);
      } else {
        setExternalWalletsWithFullAuth((_b = externalWalletConfig == null ? void 0 : externalWalletConfig.createLinkedEmbeddedForExternalWallets) != null ? _b : []);
      }
    }
  }, [externalWalletConfig == null ? void 0 : externalWalletConfig.createLinkedEmbeddedForExternalWallets]);
  (0, import_react70.useEffect)(() => {
    if (!isConfigType(paraClientConfig) && !isParaWeb(paraClientConfig)) {
      throw new Error("Invalid Para config");
    }
    const newClient = isParaWeb(paraClientConfig) ? paraClientConfig : new src_default2(paraClientConfig.env, paraClientConfig.apiKey, paraClientConfig.opts);
    newClient.setModalError = setModalError;
    newClient.portalTheme = paraModalConfig == null ? void 0 : paraModalConfig.theme;
    if (newClient.isReady) {
      setIsClientReady(true);
    } else {
      setIsClientReady(false);
    }
    setClient(newClient);
  }, [paraClientConfig]);
  (0, import_react70.useEffect)(() => {
    if (client) {
      client.portalTheme = paraModalConfig == null ? void 0 : paraModalConfig.theme;
    }
  }, [paraModalConfig == null ? void 0 : paraModalConfig.theme, client]);
  (0, import_react70.useEffect)(() => {
    if (client && !client.isReady) {
      client.ready().then(() => {
        setIsClientReady(true);
      }).catch((err) => {
        setIsClientReady(false);
        console.error("Error initializing Para client:", err);
      });
    }
  }, [client]);
  if (!client || !isClientReady) {
    return null;
  }
  return (0, import_jsx_runtime26.jsx)(
    AuthProvider,
    {
      is2faEnabled: paraModalConfig == null ? void 0 : paraModalConfig.twoFactorAuthEnabled,
      isRecoverySecretStepEnabled: paraModalConfig == null ? void 0 : paraModalConfig.recoverySecretStepEnabled,
      overrides: {
        login: paraModalConfig == null ? void 0 : paraModalConfig.loginTransitionOverride,
        createWallets: paraModalConfig == null ? void 0 : paraModalConfig.createWalletOverride
      },
      children: (0, import_jsx_runtime26.jsx)(AssetsProvider, { children: (0, import_jsx_runtime26.jsx)(ExternalWalletWrapper, { config: externalWalletConfig, children: (0, import_jsx_runtime26.jsxs)(AccountLinkProvider, { children: [
        children,
        !config.disableEmbeddedModal && client.isReady && (0, import_jsx_runtime26.jsx)(ParaModal, { ref })
      ] }) }) })
    }
  );
});

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/utils/constants.js
var EVM_CONFIG_DEFAULT = {
  chains: [
    {
      id: 11155111,
      name: "Sepolia",
      nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: { default: { http: ["https://rpc.sepolia.org"] } },
      blockExplorers: {
        default: {
          name: "Etherscan",
          url: "https://sepolia.etherscan.io",
          apiUrl: "https://api-sepolia.etherscan.io/api"
        }
      },
      contracts: {
        multicall3: { address: "0xca11bde05977b3631167028862be2a173976ca11", blockCreated: 751532 },
        ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
        ensUniversalResolver: { address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC", blockCreated: 5317080 }
      },
      testnet: true
    }
  ]
};
var COSMOS_CONFIG_DEFAULT = {
  chains: [
    {
      chainId: "theta-testnet-001",
      currencies: [{ coinDenom: "atom", coinMinimalDenom: "uatom", coinDecimals: 6 }],
      rest: "https://cosmoshubt.lava.build",
      rpc: "https://cosmoshubt.tendermintrpc.lava.build:443",
      bech32Config: {
        bech32PrefixAccAddr: "cosmos",
        bech32PrefixAccPub: "cosmospub",
        bech32PrefixValAddr: "cosmosvaloper",
        bech32PrefixValPub: "cosmosvaloperpub",
        bech32PrefixConsAddr: "cosmosvalcons",
        bech32PrefixConsPub: "cosmosvalconspub"
      },
      chainName: "cosmoshubtestnet",
      feeCurrencies: [
        {
          coinDenom: "atom",
          coinMinimalDenom: "uatom",
          coinDecimals: 6,
          coinGeckoId: "",
          gasPriceStep: { low: 0.01, average: 0.025, high: 0.03 }
        }
      ],
      stakeCurrency: { coinDenom: "atom", coinMinimalDenom: "uatom", coinDecimals: 6 },
      bip44: { coinType: 118 }
    }
  ],
  onSwitchChain: () => {
  },
  selectedChainId: "theta-testnet-001"
};
var SOLANA_CONFIG_DEFAULT = {
  chain: "devnet",
  endpoint: "https://api.devnet.solana.com"
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/ParaProvider.js
var ParaProvider = (0, import_react71.forwardRef)((_a, ref) => {
  var _b = _a, { externalWalletConfig } = _b, config = __objRest2(_b, ["externalWalletConfig"]);
  var _a2, _b2, _c;
  return (0, import_jsx_runtime27.jsx)(
    ParaProviderMin,
    __spreadProps2(__spreadValues2({
      ref
    }, config), {
      externalWalletConfig: __spreadProps2(__spreadValues2({}, externalWalletConfig), {
        evmConnector: __spreadProps2(__spreadValues2({}, externalWalletConfig == null ? void 0 : externalWalletConfig.evmConnector), {
          config: ((_a2 = externalWalletConfig == null ? void 0 : externalWalletConfig.evmConnector) == null ? void 0 : _a2.config) || EVM_CONFIG_DEFAULT
        }),
        cosmosConnector: __spreadProps2(__spreadValues2({}, externalWalletConfig == null ? void 0 : externalWalletConfig.cosmosConnector), {
          config: ((_b2 = externalWalletConfig == null ? void 0 : externalWalletConfig.cosmosConnector) == null ? void 0 : _b2.config) || COSMOS_CONFIG_DEFAULT
        }),
        solanaConnector: __spreadProps2(__spreadValues2({}, externalWalletConfig == null ? void 0 : externalWalletConfig.solanaConnector), {
          config: ((_c = externalWalletConfig == null ? void 0 : externalWalletConfig.solanaConnector) == null ? void 0 : _c.config) || SOLANA_CONFIG_DEFAULT
        })
      })
    })
  );
});

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/stores/getters.js
var getClient = () => vanillaStore.getState().client;
var getIsOpen = () => vanillaStore.getState().isOpen;
var getSelectedWalletId = () => vanillaStore.getState().selectedWalletId;
var getSelectedWalletType = () => vanillaStore.getState().selectedWalletType;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/stores/setters.js
var setIsOpen = (isOpen) => vanillaStore.setState({ isOpen });

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/mutations/useSwitchWallets.js
var SWITCH_WALLETS_KEY = "SWITCH_WALLETS";
var useSwitchWallets = () => {
  const para = useInternalClient();
  const mutation = useMutation({
    mutationKey: [SWITCH_WALLETS_KEY],
    mutationFn: (..._0) => __async(void 0, [..._0], function* (args = {}) {
      if (!para) {
        throw new Error("Para client not available");
      }
      try {
        const result = yield para.waitForWalletSwitching(args);
        return result;
      } catch (error) {
        throw error;
      }
    })
  });
  return renameMutations(mutation, "switchWallets");
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/constants/defaults.js
var DEFAULTS = {
  LOGGIN_POLLING_DELAY_MS: 5e3,
  POLLING_INTERVAL_MS: 2e3,
  ANIMATION_DURATION: 0.15
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/utils/openPopup.js
function openPopup({
  url,
  target,
  type,
  current
}) {
  if (typeof window === "undefined") {
    return null;
  }
  current == null ? void 0 : current.close();
  const popUpWidth = 560;
  let popUpHeight;
  switch (type) {
    case "LOGIN_PASSWORD": {
      popUpHeight = 798;
      break;
    }
    case "LOGIN_PASSKEY":
    case "SWITCH_WALLETS": {
      popUpHeight = 798;
      break;
    }
    case "CREATE_PASSWORD": {
      popUpHeight = 400;
      break;
    }
    case "CREATE_PASSKEY": {
      popUpHeight = 464;
      break;
    }
    case "TRANSACTION_REVIEW": {
      popUpHeight = 480;
      break;
    }
    case "OAUTH":
    case "ADD_CREDENTIAL":
    case "LOGIN_EXTERNAL_WALLET":
    default: {
      popUpHeight = 768;
      break;
    }
  }
  const dualScreenLeft = window.screenLeft !== void 0 ? window.screenLeft : window.screenX;
  const dualScreenTop = window.screenTop !== void 0 ? window.screenTop : window.screenY;
  const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
  const left = (width - popUpWidth) / 2 + dualScreenLeft;
  const top = (height - popUpHeight) / 2 + dualScreenTop;
  const windowFeatures = `toolbar=no, menubar=no, width=${popUpWidth}, 
    height=${popUpHeight}, top=${top}, left=${left}`;
  let popupWindow = window.open(url, isMobile() ? "_blank" : target, windowFeatures);
  if (!popupWindow) {
    setTimeout(() => {
      popupWindow = window.open(url, "_blank");
    }, 0);
  }
  return popupWindow != null ? popupWindow : null;
}

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/hooks/utils/useFormattedBiometricHints.js
var queryKey = ["FORMATTED_BIOMETRIC_HINTS"];
var useFormattedBiometricHints = () => {
  var _a;
  const client = useClient();
  const loginState = useModalStore((state2) => state2.getLoginState());
  return useQuery({
    queryKey: [...queryKey, (_a = loginState == null ? void 0 : loginState.biometricHints) != null ? _a : "undefined"],
    queryFn: () => __async(void 0, null, function* () {
      if (!client || !(loginState == null ? void 0 : loginState.biometricHints)) {
        return null;
      }
      const isPasskeySupported2 = yield client.isPasskeySupported();
      return formatBiometricHints(loginState.biometricHints, isPasskeySupported2);
    })
  });
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/provider/providers/AuthProvider.js
var AuthContext = (0, import_react72.createContext)({
  signUpOrLogIn: () => {
  },
  isSignUpOrLogInPending: false,
  verifyNewAccount: () => {
  },
  verifyNewAccountStatus: "idle",
  verifyNewAccountError: null,
  verifyOAuth: () => {
  },
  verifyFarcaster: () => {
  },
  verifyTelegram: () => {
  },
  verifyTelegramStatus: "idle",
  verifyFarcasterStatus: "idle",
  onNewAuthState: () => {
  },
  isSetup2faPending: false,
  presentSignupUi: () => {
  },
  presentLoginUi: () => {
  },
  presentVerifyUi: () => {
  },
  createGuestWallets: () => {
  },
  isCreateGuestWalletsPending: false,
  logout: () => {
  },
  switchWallets: () => {
  },
  switchWalletsUrl: void 0,
  setSwitchWalletsUrl: () => {
  },
  isSwitchWalletsPending: false
});
function AuthProvider({
  children,
  is2faEnabled = false,
  isRecoverySecretStepEnabled = false,
  overrides = {}
}) {
  const queryClient = useQueryClient();
  const para = useInternalClient();
  const userAgent = useUserAgent();
  const onLoginRef = useStore2((state2) => state2.onLoginRef);
  const setIsOpen2 = useStore2((state2) => state2.setIsOpen);
  const bareModal = useStore2((state2) => {
    var _a;
    return (_a = state2.modalConfig) == null ? void 0 : _a.bareModal;
  });
  const refs = useModalStore((state2) => state2.refs);
  const setFlow = useModalStore((state2) => state2.setFlow);
  const currentStep = useModalStore((state2) => state2.step);
  const setStep = useModalStore((state2) => state2.setStep);
  const setAuthStepRoute = useModalStore((state2) => state2.setAuthStepRoute);
  const setIFrameUrl = useModalStore((state2) => state2.setIFrameUrl);
  const setIsIFrameReady = useModalStore((state2) => state2.setIsIFrameReady);
  const iFrameUrl = useModalStore((state2) => state2.iFrameUrl);
  const loginState = useModalStore((state2) => state2.getLoginState());
  const signupState = useModalStore((state2) => state2.getSignupState());
  const setAuthState = useModalStore((state2) => state2.setAuthState);
  const setFarcasterConnectUri = useModalStore((state2) => state2.setFarcasterConnectUri);
  const setTwoFactorStatus = useModalStore((state2) => state2.setTwoFactorStatus);
  const setRecoveryShare = useModalStore((state2) => state2.setRecoveryShare);
  const authStepRoute = useModalStore((state2) => state2.authStepRoute);
  const isIFrameReady = useModalStore((state2) => state2.isIFrameReady);
  const goBack = useGoBack();
  const { signUpOrLogIn: mutateSignUpOrLogIn, isPending: isSignUpOrLogInPending } = useSignUpOrLogIn();
  const {
    verifyNewAccount: mutateVerifyNewAccount,
    status: verifyNewAccountStatus,
    error: verifyNewAccountError
  } = useVerifyNewAccount();
  const { verifyOAuth: mutateVerifyOAuth } = useVerifyOAuth();
  const { verifyFarcaster: mutateVerifyFarcaster, status: verifyFarcasterStatus } = useVerifyFarcaster();
  const { verifyTelegram: mutateVerifyTelegram, status: verifyTelegramStatus } = useVerifyTelegram();
  const { waitForLogin: mutateWaitForLogin } = useWaitForLogin();
  const { waitForSignup: mutateWaitForSignup } = useWaitForSignup();
  const { waitForWalletCreationAsync: mutateAsyncWaitForWalletCreation } = useWaitForWalletCreation();
  const { switchWallets: mutateSwitchWallets, isPending: mutateIsSwitchWalletsPending } = useSwitchWallets();
  const { setup2fa: mutateSetup2fa, isPending: isSetup2faPending } = useSetup2fa();
  const { createGuestWallets: mutateCreateGuestWallets, isPending: isCreateGuestWalletsPending } = useCreateGuestWallets();
  const { logout: mutateLogout } = useLogout();
  const { updateSelectedWallet } = useWalletState();
  const { data: biometricHints } = useFormattedBiometricHints();
  const [switchWalletsUrl, setSwitchWalletsUrl] = (0, import_react72.useState)(void 0);
  const [isSwitchWalletsPending, setIsSwitchWalletsPending] = (0, import_react72.useState)(mutateIsSwitchWalletsPending);
  const messageHandlerRef = (0, import_react72.useRef)(null);
  const goBackIfPopupClosedOnSteps = (steps2) => {
    var _a;
    if (((_a = refs.popupWindow.current) == null ? void 0 : _a.closed) && (!refs.currentStep.current || steps2.includes(refs.currentStep.current))) {
      refs.popupWindow.current = null;
      goBack();
    }
  };
  const cancelIfExitedSteps = (steps2) => {
    const stepNow = refs.currentStep.current;
    return !!stepNow && !steps2.includes(stepNow);
  };
  const setupListener = () => {
    if (messageHandlerRef.current) {
      window.removeEventListener("message", messageHandlerRef.current);
    }
    const handleMessage = (event) => {
      var _a;
      if (!validatePortalOrigin(event, para.ctx)) {
        return;
      }
      if (((_a = event.data) == null ? void 0 : _a.type) === "CLOSE_WINDOW") {
        if (event.data.success) {
          setAuthStepRoute();
          setIFrameUrl();
          setIsIFrameReady(false);
          if (refs.currentStep.current !== ModalStep.LOGIN_DONE && refs.currentStep.current !== ModalStep.AWAITING_ACCOUNT) {
            setStep(ModalStep.AWAITING_ACCOUNT);
          }
        }
        window.removeEventListener("message", handleMessage);
        messageHandlerRef.current = null;
      }
    };
    messageHandlerRef.current = handleMessage;
    window.addEventListener("message", handleMessage);
  };
  const pollSignup = () => {
    if (typeof window !== "undefined") {
      refs.poll.current = {
        action: "signup",
        timeout: window == null ? void 0 : window.setTimeout(() => __async(this, null, function* () {
          mutateWaitForSignup(
            {
              isCanceled: () => cancelIfExitedSteps([
                ModalStep.BIOMETRIC_CREATION,
                ModalStep.AWAITING_BIOMETRIC_CREATION,
                ModalStep.PASSWORD_CREATION,
                ModalStep.AWAITING_ACCOUNT,
                ModalStep.VERIFICATIONS,
                ModalStep.AWAITING_OAUTH,
                ModalStep.EXTERNAL_WALLET_VERIFICATION,
                ModalStep.OTP
              ]),
              onPoll: () => {
                goBackIfPopupClosedOnSteps([ModalStep.AWAITING_BIOMETRIC_CREATION]);
              }
            },
            {
              onSuccess: () => {
                if (para.isNoWalletConfig) {
                  onLoginComplete({
                    on2faSetupOrError: () => {
                      setStep(ModalStep.LOGIN_DONE);
                    },
                    on2faNotSetup: () => setStep(ModalStep.SETUP_2FA)
                  });
                } else {
                  createWallets();
                }
              },
              onError: () => {
                if (refs.currentStep.current && [ModalStep.AWAITING_BIOMETRIC_CREATION, ModalStep.PASSWORD_CREATION, ModalStep.AWAITING_ACCOUNT].includes(
                  refs.currentStep.current
                )) {
                  goBack();
                }
              },
              onSettled: () => {
                var _a;
                window == null ? void 0 : window.clearTimeout((_a = refs.poll.current) == null ? void 0 : _a.timeout);
                refs.poll.current = null;
                refs.popupWindow.current = null;
              }
            }
          );
        }), DEFAULTS.POLLING_INTERVAL_MS)
      };
    }
  };
  const presentSignupUi = (0, import_react72.useCallback)(
    (method, authState) => {
      switch (method) {
        case AuthMethod.PASSKEY:
          if (refs.currentStep.current !== ModalStep.AWAITING_BIOMETRIC_CREATION) {
            setStep(ModalStep.AWAITING_BIOMETRIC_CREATION);
          }
          if (typeof window !== "undefined") {
            refs.popupWindow.current = openPopup({
              url: authState.passkeyUrl,
              target: "ParaPasskey",
              type: "CREATE_PASSKEY",
              current: refs.popupWindow.current
            });
          }
          break;
        case AuthMethod.PASSWORD:
          setupListener();
          if (isIFrameReady) {
            setStep(ModalStep.PASSWORD_CREATION);
          } else {
            setIFrameUrl(authState.passwordUrl);
            setIsIFrameReady(false);
            setAuthStepRoute(ModalStep.PASSWORD_CREATION);
          }
          break;
        case AuthMethod.PIN:
          setupListener();
          if (isIFrameReady) {
            setStep(ModalStep.PASSWORD_CREATION);
          } else {
            setIFrameUrl(authState.pinUrl);
            setIsIFrameReady(false);
            setAuthStepRoute(ModalStep.PASSWORD_CREATION);
          }
          break;
      }
    },
    [isIFrameReady]
  );
  const presentVerifyUi = (0, import_react72.useCallback)(
    (method, authState) => {
      switch (method) {
        case AuthMethod.BASIC_LOGIN:
          setupListener();
          if (isIFrameReady) {
            setStep(ModalStep.OTP);
          } else {
            setIFrameUrl(authState.loginUrl);
            setIsIFrameReady(false);
            setAuthStepRoute(ModalStep.OTP);
          }
          break;
      }
    },
    [isIFrameReady]
  );
  const login = (authState) => {
    const hasPasskey = !!authState.passkeyUrl;
    if (!hasPasskey) {
      setupListener();
      setIFrameUrl(authState.passwordUrl || authState.pinUrl);
      setIsIFrameReady(false);
      setStep(ModalStep.EMBEDDED_PASSWORD_LOGIN);
    } else {
      setStep(ModalStep.BIOMETRIC_LOGIN);
    }
    pollLogin();
  };
  const pollLogin = () => {
    if (typeof window !== "undefined") {
      refs.poll.current = {
        action: "login",
        timeout: window == null ? void 0 : window.setTimeout(() => __async(this, null, function* () {
          mutateWaitForLogin(
            {
              isCanceled: () => cancelIfExitedSteps([
                ModalStep.BIOMETRIC_LOGIN,
                ModalStep.EMBEDDED_PASSWORD_LOGIN,
                ModalStep.AWAITING_BIOMETRIC_LOGIN,
                ModalStep.AWAITING_PASSWORD_LOGIN,
                ModalStep.AWAITING_ACCOUNT,
                ModalStep.OTP,
                ModalStep.FARCASTER_OAUTH,
                ModalStep.TELEGRAM_OAUTH,
                ModalStep.AWAITING_OAUTH,
                ModalStep.SWITCH_WALLETS
              ]),
              onPoll: () => {
                goBackIfPopupClosedOnSteps([
                  ModalStep.AWAITING_BIOMETRIC_LOGIN,
                  ModalStep.AWAITING_PASSWORD_LOGIN,
                  ModalStep.EMBEDDED_PASSWORD_LOGIN,
                  ModalStep.OTP,
                  ModalStep.SWITCH_WALLETS
                ]);
              }
            },
            {
              onSuccess: ({ needsWallet }) => {
                if (needsWallet && !para.isNoWalletConfig) {
                  createWallets();
                } else {
                  onLoginComplete({
                    on2faSetupOrError: () => setStep(ModalStep.LOGIN_DONE),
                    on2faNotSetup: () => setStep(ModalStep.SETUP_2FA)
                  });
                }
              },
              onSettled: () => {
                var _a;
                window == null ? void 0 : window.clearTimeout((_a = refs.poll.current) == null ? void 0 : _a.timeout);
                refs.poll.current = null;
                refs.popupWindow.current = null;
              }
            }
          );
        }), DEFAULTS.LOGGIN_POLLING_DELAY_MS)
      };
    }
  };
  const presentLoginUi = (0, import_react72.useCallback)(
    (method, authState) => {
      const isPassword = method === AuthMethod.PASSWORD, isPIN = method === AuthMethod.PIN;
      if (overrides.login) {
        let loginOverride = function() {
          return __async(this, null, function* () {
            var _a, _b;
            yield (_a = overrides == null ? void 0 : overrides.login) == null ? void 0 : _a.call(overrides, para);
            yield (_b = onLoginRef.current) == null ? void 0 : _b.call(onLoginRef);
            yield onLoginComplete();
          });
        };
        loginOverride();
        return;
      }
      if (typeof window !== "undefined") {
        refs.popupWindow.current = openPopup({
          url: isPIN ? authState.pinUrl : isPassword ? authState.passwordUrl : authState.passkeyUrl,
          target: isPIN ? "ParaPIN" : isPassword ? "ParaPassword" : "ParaPasskey",
          type: isPIN ? "LOGIN_PASSWORD" : isPassword ? "LOGIN_PASSWORD" : "LOGIN_PASSKEY",
          current: refs.popupWindow.current
        });
      }
      setStep(isPassword || isPIN ? ModalStep.AWAITING_PASSWORD_LOGIN : ModalStep.AWAITING_BIOMETRIC_LOGIN);
    },
    [loginState, biometricHints]
  );
  const onNewAuthState = (authState) => __async(this, null, function* () {
    var _a, _b, _c;
    setAuthState(authState);
    switch (authState.stage) {
      case "verify":
        if (isExternalWallet(authState.auth)) {
          if (authState.loginUrl && ((_a = authState.externalWallet) == null ? void 0 : _a.withFullParaAuth)) {
            let isBasicLogin = false;
            if (authState.nextStage === "login") {
              isBasicLogin = authState.loginAuthMethods.includes(AuthMethod.BASIC_LOGIN);
            } else {
              isBasicLogin = authState.signupAuthMethods.includes(AuthMethod.BASIC_LOGIN);
            }
            if (authState.nextStage === "login") {
              setFlow("login");
              isBasicLogin && pollLogin();
            } else {
              setFlow("signup");
              isBasicLogin && pollSignup();
            }
            if (!isMobile() && refs.popupWindow.current) {
              refs.popupWindow.current.location.href = authState.loginUrl;
              setStep(ModalStep.AWAITING_ACCOUNT);
            } else {
              setIFrameUrl(authState.loginUrl);
              setStep(ModalStep.OTP);
              setupListener();
            }
          } else {
            setStep(ModalStep.EXTERNAL_WALLET_VERIFICATION);
          }
        } else {
          if (authState.nextStage === "login") {
            setFlow("login");
            pollLogin();
          } else {
            setFlow("signup");
            pollSignup();
          }
          if (authState.loginUrl) {
            setIFrameUrl(authState.loginUrl);
            setIsIFrameReady(false);
            presentVerifyUi(AuthMethod.BASIC_LOGIN, authState);
          } else {
            setStep(ModalStep.VERIFICATIONS);
          }
        }
        break;
      case "login":
        if (authState.pinUrl && authState.signatureVerificationMessage) {
          setStep(ModalStep.EXTERNAL_WALLET_VERIFICATION);
        } else {
          login(authState);
        }
        break;
      case "signup":
        {
          const isPassword = !!authState.passwordUrl, isPIN = !!authState.pinUrl, isPasswordOrPIN = isPassword || isPIN, isPasswordOrPINOnly = isPasswordOrPIN && (!authState.passkeyUrl || (userAgent == null ? void 0 : userAgent.device.type) === "mobile" && !authState.isPasskeySupported);
          if (isPasswordOrPIN) {
            setIFrameUrl(authState.passwordUrl || authState.pinUrl);
            setIsIFrameReady(false);
          }
          pollSignup();
          if (isPasswordOrPINOnly) {
            presentSignupUi(isPassword ? AuthMethod.PASSWORD : AuthMethod.PIN, authState);
          } else {
            setStep(ModalStep.BIOMETRIC_CREATION);
          }
        }
        break;
      case "done":
        if (!((_b = authState.externalWallet) == null ? void 0 : _b.withFullParaAuth) && !((_c = authState.externalWallet) == null ? void 0 : _c.withVerification)) {
          if (authState.isNewUser) {
            pollSignup();
            setFlow("signup");
          } else {
            pollLogin();
            setFlow("login");
          }
        }
        if (!authState.isWalletSelectionNeeded) {
          setStep(ModalStep.AWAITING_ACCOUNT);
        }
        break;
    }
  });
  const signUpOrLogIn2 = (auth) => __async(this, null, function* () {
    mutateSignUpOrLogIn(
      { auth, useShortUrls: true },
      {
        onSuccess: onNewAuthState
      }
    );
  });
  const verifyNewAccount2 = (verificationCode) => __async(this, null, function* () {
    mutateVerifyNewAccount(
      { verificationCode, useShortUrls: true },
      {
        onSuccess: onNewAuthState
      }
    );
  });
  const verifyOAuth2 = (method) => __async(this, null, function* () {
    setStep(ModalStep.AWAITING_OAUTH);
    mutateVerifyOAuth(
      {
        method,
        onOAuthPopup: (oAuthPopup) => {
          refs.popupWindow.current = oAuthPopup;
        },
        isCanceled: () => {
          var _a;
          return ((_a = refs.popupWindow.current) == null ? void 0 : _a.closed) || cancelIfExitedSteps([ModalStep.AWAITING_OAUTH]);
        },
        onPoll: () => {
          goBackIfPopupClosedOnSteps([ModalStep.AWAITING_OAUTH]);
        },
        useShortUrls: true
      },
      {
        onSuccess: onNewAuthState,
        onError: () => {
          goBackIfPopupClosedOnSteps([ModalStep.AWAITING_OAUTH]);
        }
      }
    );
  });
  const verifyFarcaster2 = (serverAuthState) => __async(this, null, function* () {
    if (!serverAuthState) {
      setStep(ModalStep.FARCASTER_OAUTH);
    } else {
      setupListener();
    }
    mutateVerifyFarcaster(
      {
        isCanceled: () => refs.currentStep.current !== ModalStep.FARCASTER_OAUTH,
        onConnectUri: (connectUri) => {
          setFarcasterConnectUri(connectUri);
          openMobileUrl(connectUri);
        },
        useShortUrls: true,
        serverAuthState
      },
      {
        onSuccess: onNewAuthState,
        onError: () => {
          if (refs.currentStep.current === ModalStep.FARCASTER_OAUTH) {
            goBack();
          }
        }
      }
    );
  });
  const verifyTelegram2 = (serverAuthState) => __async(this, null, function* () {
    if (serverAuthState) {
      setupListener();
    }
    mutateVerifyTelegram(
      {
        serverAuthState,
        useShortUrls: true
      },
      {
        onSuccess: onNewAuthState
      }
    );
  });
  const onLoginComplete = (0, import_react72.useCallback)(
    (..._0) => __async(this, [..._0], function* ({
      on2faSetupOrError,
      on2faNotSetup
    } = {}) {
      var _a;
      yield queryClient.invalidateQueries({ queryKey: ["isFullyLoggedIn"] });
      setAuthState();
      yield (_a = onLoginRef.current) == null ? void 0 : _a.call(onLoginRef);
      if (is2faEnabled) {
        mutateSetup2fa(void 0, {
          onSuccess: (status) => {
            setTwoFactorStatus(status);
            if (!status.isSetup && !!status.uri) {
              on2faNotSetup == null ? void 0 : on2faNotSetup();
            } else {
              on2faSetupOrError == null ? void 0 : on2faSetupOrError();
            }
          },
          onError: () => {
            on2faSetupOrError == null ? void 0 : on2faSetupOrError();
          }
        });
      } else {
        on2faSetupOrError == null ? void 0 : on2faSetupOrError();
      }
    }),
    [is2faEnabled]
  );
  const createWallets = (0, import_react72.useCallback)(() => __async(this, null, function* () {
    var _a;
    if (refs.currentStep.current !== ModalStep.AWAITING_WALLET_CREATION) {
      setStep(ModalStep.AWAITING_WALLET_CREATION);
    }
    let recoverySecret, walletIds;
    try {
      if (overrides.createWallets) {
        ({ recoverySecret, walletIds } = yield (_a = overrides == null ? void 0 : overrides.createWallets) == null ? void 0 : _a.call(overrides, para));
        const fetchedWallets = (yield para.fetchWallets()).filter((wallet) => !!wallet.address);
        const newWallets = {};
        for (const wallet of fetchedWallets) {
          newWallets[wallet.id] = __spreadProps2(__spreadValues2({}, entityToWallet(wallet)), {
            signer: ""
          });
        }
        para.setWallets(newWallets);
      } else {
        ({ recoverySecret, walletIds } = yield mutateAsyncWaitForWalletCreation({
          isCanceled: () => false
        }));
      }
      if (walletIds) {
        yield para.setCurrentWalletIds(walletIds);
      }
      if (recoverySecret && isRecoverySecretStepEnabled) {
        setRecoveryShare(recoverySecret);
      }
      setStep(recoverySecret && isRecoverySecretStepEnabled ? ModalStep.SECRET : ModalStep.WALLET_CREATION_DONE);
      onLoginComplete();
    } catch (e) {
    }
  }), [para, isRecoverySecretStepEnabled, overrides == null ? void 0 : overrides.createWallets]);
  const createGuestWallets2 = () => {
    if (bareModal) {
      setFlow("guest");
      setStep(ModalStep.AWAITING_GUEST_WALLET_CREATION);
    } else {
      setIsOpen2(false);
    }
    mutateCreateGuestWallets(void 0, {
      onSuccess: () => {
      },
      onSettled: () => {
      }
    });
  };
  const logout2 = () => {
    mutateLogout();
  };
  const switchWallets = () => {
    if (!switchWalletsUrl) {
      return;
    }
    setIsSwitchWalletsPending(true);
    try {
      setStep(ModalStep.SWITCH_WALLETS);
      refs.popupWindow.current = openPopup({
        url: switchWalletsUrl,
        target: "ParaSwitchWallets",
        type: "SWITCH_WALLETS",
        current: refs.popupWindow.current
      });
      pollSwitchWallets();
    } catch (error) {
      console.error("Failed to open wallet switching popup:", error);
    }
  };
  const pollSwitchWallets = () => {
    if (typeof window !== "undefined") {
      refs.poll.current = {
        action: "login",
        timeout: window == null ? void 0 : window.setTimeout(() => __async(this, null, function* () {
          mutateSwitchWallets(
            {
              isCanceled: () => {
                var _a, _b;
                const exitedSteps = cancelIfExitedSteps([ModalStep.SWITCH_WALLETS, ModalStep.SWITCH_WALLETS_IFRAME]);
                const popupClosed = (_b = (_a = refs.popupWindow.current) == null ? void 0 : _a.closed) != null ? _b : false;
                const isCanceled = exitedSteps || popupClosed;
                if (isCanceled) {
                  if (popupClosed && (refs.currentStep.current === ModalStep.SWITCH_WALLETS || refs.currentStep.current === ModalStep.SWITCH_WALLETS_IFRAME)) {
                    goBack();
                  }
                }
                return isCanceled;
              },
              onPoll: () => {
                if (refs.currentStep.current === ModalStep.SWITCH_WALLETS || refs.currentStep.current === ModalStep.SWITCH_WALLETS_IFRAME) {
                  goBackIfPopupClosedOnSteps([ModalStep.SWITCH_WALLETS, ModalStep.SWITCH_WALLETS_IFRAME]);
                }
              }
            },
            {
              onSuccess: () => {
                updateSelectedWallet();
                setTimeout(() => {
                  setStep(ModalStep.ACCOUNT_PROFILE);
                  refs.popupWindow.current = null;
                }, 500);
              },
              onError: () => {
                if (refs.currentStep.current === ModalStep.SWITCH_WALLETS) {
                  goBack();
                }
              },
              onSettled: () => {
                var _a;
                setIsSwitchWalletsPending(false);
                window == null ? void 0 : window.clearTimeout((_a = refs.poll.current) == null ? void 0 : _a.timeout);
                refs.poll.current = null;
                refs.popupWindow.current = null;
              }
            }
          );
        }), DEFAULTS.LOGGIN_POLLING_DELAY_MS)
      };
    }
  };
  const isPasswordIFrameLoading = !!iFrameUrl && iFrameUrl === (signupState == null ? void 0 : signupState.passwordUrl) && !isIFrameReady;
  const value = (0, import_react72.useMemo)(
    () => ({
      presentSignupUi,
      presentLoginUi,
      presentVerifyUi,
      signUpOrLogIn: signUpOrLogIn2,
      isSignUpOrLogInPending,
      verifyNewAccount: verifyNewAccount2,
      verifyNewAccountStatus: isPasswordIFrameLoading ? "pending" : verifyNewAccountStatus,
      verifyNewAccountError,
      verifyOAuth: verifyOAuth2,
      verifyFarcaster: verifyFarcaster2,
      verifyTelegram: verifyTelegram2,
      verifyTelegramStatus,
      onNewAuthState,
      isSetup2faPending,
      createGuestWallets: createGuestWallets2,
      isCreateGuestWalletsPending,
      logout: logout2,
      switchWallets,
      switchWalletsUrl,
      setSwitchWalletsUrl,
      isSwitchWalletsPending,
      biometricHints: biometricHints || void 0,
      verifyFarcasterStatus
    }),
    [
      presentSignupUi,
      presentLoginUi,
      presentVerifyUi,
      signUpOrLogIn2,
      isSignUpOrLogInPending,
      verifyNewAccount2,
      verifyNewAccountStatus,
      isPasswordIFrameLoading,
      verifyNewAccountError,
      verifyOAuth2,
      verifyFarcaster2,
      verifyTelegram2,
      verifyTelegramStatus,
      onNewAuthState,
      isSetup2faPending,
      createGuestWallets2,
      isCreateGuestWalletsPending,
      logout2,
      switchWallets,
      switchWalletsUrl,
      setSwitchWalletsUrl,
      isSwitchWalletsPending,
      biometricHints,
      verifyFarcasterStatus
    ]
  );
  (0, import_react72.useEffect)(() => {
    let timerId;
    if (!!authStepRoute && refs.currentStep.current !== authStepRoute) {
      timerId = setTimeout(() => {
        setStep(authStepRoute);
      }, 200);
    }
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [authStepRoute]);
  (0, import_react72.useEffect)(() => {
    refs.currentStep.current = currentStep;
  }, [currentStep]);
  (0, import_react72.useEffect)(() => {
    if (refs.currentStep.current === ModalStep.AWAITING_GUEST_WALLET_CREATION && !isCreateGuestWalletsPending) {
      setStep(ModalStep.ACCOUNT_MAIN);
    }
  }, [isCreateGuestWalletsPending]);
  (0, import_react72.useEffect)(() => {
    setIsSwitchWalletsPending((prev) => !!prev ? mutateIsSwitchWalletsPending : prev);
  }, [mutateIsSwitchWalletsPending]);
  (0, import_react72.useEffect)(() => {
    return () => {
      var _a;
      window == null ? void 0 : window.clearTimeout((_a = refs.poll.current) == null ? void 0 : _a.timeout);
      if (messageHandlerRef.current) {
        window.removeEventListener("message", messageHandlerRef.current);
      }
    };
  }, []);
  return (0, import_jsx_runtime28.jsx)(AuthContext.Provider, { value, children });
}
var useAuthActions = () => (0, import_react72.useContext)(AuthContext);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/VerificationCodeStep/VerificationCodeStep.js
var VerificationCode = ({ authInfo, onResend, onSubmit, status, error }) => {
  const inputRef = (0, import_react73.useRef)(null);
  const resendTimerRef = (0, import_react73.useRef)();
  const [code, setCode] = (0, import_react73.useState)("");
  const [isPending, setIsPending] = (0, import_react73.useState)(status === "pending");
  const [codeError, setCodeError] = (0, import_react73.useState)(null);
  const [resendDisabled, setResendDisabled] = (0, import_react73.useState)(false);
  const isEmail2 = (authInfo == null ? void 0 : authInfo.authType) === "email";
  (0, import_react73.useEffect)(() => {
    const timerId = setTimeout(() => {
      var _a, _b, _c, _d;
      (_d = (_c = (_b = (_a = inputRef.current) == null ? void 0 : _a.shadowRoot) == null ? void 0 : _b.querySelectorAll("input")) == null ? void 0 : _c[0]) == null ? void 0 : _d.focus();
    }, 10);
    return () => {
      clearTimeout(timerId);
    };
  }, []);
  (0, import_react73.useEffect)(() => {
    setCodeError(null);
    if (code.length === 6) {
      handleSubmitCode();
    }
  }, [code]);
  (0, import_react73.useEffect)(() => {
    if (status === "pending") {
      setIsPending(true);
    }
  }, [status]);
  const handleResendClick = () => __async(void 0, null, function* () {
    if (!resendDisabled) {
      setResendDisabled(true);
      try {
        onResend();
      } finally {
        resendTimerRef.current = setTimeout(() => {
          setResendDisabled(false);
        }, 3e3);
      }
    }
  });
  (0, import_react73.useEffect)(() => {
    return () => {
      if (resendTimerRef.current) {
        clearTimeout(resendTimerRef.current);
      }
    };
  }, []);
  const handleCodeInput = (e) => {
    setCode(e.detail.value.trim());
  };
  const handleSubmitCode = () => __async(void 0, null, function* () {
    if (code.length === 6 && /^\d+$/.test(code)) {
      onSubmit(code);
    } else {
      setCodeError("Incorrect code.");
    }
  });
  (0, import_react73.useEffect)(() => {
    if (!!error) {
      setIsPending(false);
      const status2 = error.status;
      switch (status2) {
        case 429:
          setCodeError("Too many incorrect attempts. Please try again in 10 minutes.");
          break;
        default:
          setCodeError("Incorrect code.");
          break;
      }
    }
  }, [error]);
  return (0, import_jsx_runtime29.jsxs)(import_jsx_runtime29.Fragment, { children: [
    (0, import_jsx_runtime29.jsxs)(InnerStepContainer, { children: [
      (0, import_jsx_runtime29.jsxs)(Heading, { children: [
        "Verify ",
        isEmail2 ? "Email" : "Phone Number"
      ] }),
      (0, import_jsx_runtime29.jsxs)(InlineText, { variant: "bodyS", color: "secondary", children: [
        "Please enter the code we sent to",
        " ",
        (0, import_jsx_runtime29.jsx)(InlineText, { variant: "bodyS", children: (authInfo == null ? void 0 : authInfo.authType) === "phone" ? displayPhoneNumber(authInfo.identifier) : authInfo.identifier })
      ] })
    ] }),
    (0, import_jsx_runtime29.jsx)(InnerStepContainer, { children: isPending ? (0, import_jsx_runtime29.jsx)(CpslSpinner, {}) : (0, import_jsx_runtime29.jsxs)(import_jsx_runtime29.Fragment, { children: [
      (0, import_jsx_runtime29.jsx)(
        "form",
        {
          onSubmit: (e) => __async(void 0, null, function* () {
            e.preventDefault();
            yield handleSubmitCode();
          }),
          children: (0, import_jsx_runtime29.jsx)(
            StyledCodeInput,
            {
              ref: inputRef,
              length: 6,
              type: "number",
              code,
              onCpslInput: handleCodeInput,
              errorText: codeError || "",
              onKeyDown: (e) => __async(void 0, null, function* () {
                return e.key === "Enter" && (yield handleSubmitCode());
              })
            }
          )
        }
      ),
      (0, import_jsx_runtime29.jsxs)(InlineText, { variant: "bodyS", color: "secondary", children: [
        "Didn’t receive a code?",
        " ",
        (0, import_jsx_runtime29.jsx)(
          ClickableText,
          {
            variant: "bodyS",
            style: { cursor: resendDisabled ? "default" : "pointer" },
            onClick: handleResendClick,
            children: resendDisabled ? "Resent!" : "Resend."
          }
        )
      ] })
    ] }) })
  ] });
};
var VerificationCodeStep = () => {
  const { verifyNewAccount: verifyNewAccount2, verifyNewAccountStatus, verifyNewAccountError } = useAuthActions();
  const { resendVerificationCodeAsync } = useResendVerificationCode();
  const para = useInternalClient();
  if (!para.authInfo) {
    return null;
  }
  return (0, import_jsx_runtime29.jsx)(StepContainer, { $wide: true, children: (0, import_jsx_runtime29.jsx)(
    VerificationCode,
    {
      authInfo: para.authInfo,
      onSubmit: verifyNewAccount2,
      onResend: () => {
        resendVerificationCodeAsync({ type: "SIGNUP" });
      },
      status: verifyNewAccountStatus,
      error: verifyNewAccountError
    }
  ) });
};
var StyledCodeInput = safeStyled(CpslCodeInput)`
  align-self: center;
`;
var InlineText = safeStyled(CpslText)`
  text-align: center;
  display: inline-block;
`;
var ClickableText = safeStyled(InlineText)`
  cursor: pointer;
  display: inline-block;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/BiometricLoginStep/BiometricLoginStep.js
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
var BiometricLoginStep = () => {
  var _a;
  const loginState = useModalStore((state2) => state2.getLoginState());
  const para = useInternalClient();
  const { biometricHints, presentLoginUi } = useAuthActions();
  if (!loginState) {
    return null;
  }
  const { passkeyUrl, pinUrl, passkeyKnownDeviceUrl, passwordUrl, isPasskeySupported: isPasskeySupported2 } = loginState;
  const { isOnKnownDevice = false, formattedHints } = biometricHints || {};
  const isPasskey = !!passkeyUrl, isPassword = !!passwordUrl, isPIN = !!pinUrl, isNeither = !isPasskey && !isPassword, hasHints = (_a = formattedHints == null ? void 0 : formattedHints.length) != null ? _a : 0 > 0, isPasskeyOnKnownDevice = isPasskeySupported2 && isOnKnownDevice, isPasskeyUnavailable = hasHints && !isOnKnownDevice || !isPasskeySupported2 || isNeither, displayKnownDevices = isPasskeyUnavailable && !!biometricHints && (hasHints || !!passkeyKnownDeviceUrl), displayWelcomeBack = isPasskeyOnKnownDevice || isPassword || isPIN;
  return (0, import_jsx_runtime30.jsxs)(StepContainer, { $wide: true, children: [
    (0, import_jsx_runtime30.jsxs)(InnerStepContainer, { children: [
      displayWelcomeBack && (0, import_jsx_runtime30.jsx)(Heading, { children: "Welcome back," }),
      (0, import_jsx_runtime30.jsx)(UserIdentifier, { authInfo: para.authInfo })
    ] }),
    (0, import_jsx_runtime30.jsxs)(MainContainer, { children: [
      (isPassword || isPIN) && (0, import_jsx_runtime30.jsxs)(CpslButton, { fullWidth: true, onClick: () => presentLoginUi(isPIN ? AuthMethod.PIN : AuthMethod.PASSWORD, loginState), children: [
        (0, import_jsx_runtime30.jsx)(CpslIcon, { slot: "start", icon: "passcode" }),
        isPIN && isPassword ? "Login" : isPIN ? "Login with PIN" : "Login with Password"
      ] }),
      isPasskey && (0, import_jsx_runtime30.jsxs)(import_jsx_runtime30.Fragment, { children: [
        displayKnownDevices && (0, import_jsx_runtime30.jsxs)(import_jsx_runtime30.Fragment, { children: [
          (0, import_jsx_runtime30.jsx)(KnownDevices, { hints: biometricHints, link: passkeyKnownDeviceUrl }),
          (0, import_jsx_runtime30.jsx)(CpslDivider, { children: "or" })
        ] }),
        (0, import_jsx_runtime30.jsx)(CpslButton, { fullWidth: true, onClick: () => presentLoginUi(AuthMethod.PASSKEY, loginState), children: isPasskeyUnavailable ? "Continue anyway" : (0, import_jsx_runtime30.jsxs)(import_jsx_runtime30.Fragment, { children: [
          (0, import_jsx_runtime30.jsx)(CpslIcon, { slot: "start", icon: "key" }),
          "Login with Passkey"
        ] }) })
      ] })
    ] })
  ] });
};
var MainContainer = safeStyled(InnerStepContainer)`
  gap: 16px;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Setup2FAStep/Setup2FAStep.js
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
var import_react74 = __toESM(require_react(), 1);
var Setup2FAStep = ({ onClose }) => {
  const isLogin = useModalStore((state2) => state2.isLogin());
  const setStep = useModalStore((state2) => state2.setStep);
  const twoFactorStatus = useModalStore((state2) => state2.twoFactorStatus);
  const { enable2fa: enable2fa2, isPending } = useEnable2fa();
  const isVerifying = useModalStore((state2) => state2.step === ModalStep.VERIFY_2FA);
  const [copied, copy] = useCopyToClipboard();
  const inputRef = (0, import_react74.useRef)(null);
  const [code, setCode] = (0, import_react74.useState)("");
  const [codeError, setCodeError] = (0, import_react74.useState)("");
  const params = (twoFactorStatus == null ? void 0 : twoFactorStatus.uri) ? new URL(twoFactorStatus.uri).searchParams : void 0;
  const secret = params == null ? void 0 : params.get("secret");
  (0, import_react74.useEffect)(() => {
    const timerId = setTimeout(() => {
      var _a, _b, _c, _d;
      (_d = (_c = (_b = (_a = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _a.shadowRoot) == null ? void 0 : _b.querySelectorAll("input")) == null ? void 0 : _c[0]) == null ? void 0 : _d.focus();
    }, 10);
    return () => {
      clearTimeout(timerId);
    };
  }, [isVerifying]);
  (0, import_react74.useEffect)(() => {
    if (code.length === 6) {
      handleSubmitCode();
    }
  }, [code]);
  const handleNext = () => {
    setStep(ModalStep.VERIFY_2FA);
  };
  const handleSkip = () => {
    if (isLogin) {
      setStep(ModalStep.LOGIN_DONE);
    } else {
      onClose();
    }
  };
  const handleCodeInput = (e) => {
    if (codeError) {
      setCodeError("");
    }
    setCode(e.detail.value.trim());
  };
  const handleSubmitCode = () => __async(void 0, null, function* () {
    if (code.length === 6 && /^\d+$/.test(code)) {
      enable2fa2(
        { verificationCode: code },
        {
          onSuccess: () => {
            setStep(ModalStep.TWO_FACTOR_DONE);
          },
          onError: () => {
            setCodeError("Incorrect Code");
          }
        }
      );
    } else {
      setCodeError("Incorrect Code");
    }
  });
  const handleCopy = () => {
    if (secret) {
      copy(secret);
    }
  };
  return (0, import_jsx_runtime31.jsxs)(StepContainer, { children: [
    (0, import_jsx_runtime31.jsxs)(InnerStepContainer, { children: [
      (0, import_jsx_runtime31.jsx)(Heading, { children: "Turn on two-factor authentication" }),
      isVerifying && (0, import_jsx_runtime31.jsx)(CpslText, { variant: "bodyS", color: "secondary", weight: "medium", children: "Please enter the code from your authenticator app" })
    ] }),
    (0, import_jsx_runtime31.jsx)(InnerStepContainer, { children: isVerifying ? (0, import_jsx_runtime31.jsx)(import_jsx_runtime31.Fragment, { children: isPending ? (0, import_jsx_runtime31.jsx)(CpslSpinner, {}) : (0, import_jsx_runtime31.jsx)(
      "form",
      {
        onSubmit: (e) => __async(void 0, null, function* () {
          e.preventDefault();
          yield handleSubmitCode();
        }),
        children: (0, import_jsx_runtime31.jsx)(
          StyledCodeInput2,
          {
            ref: inputRef,
            code,
            onCpslInput: handleCodeInput,
            errorText: codeError,
            length: 6,
            onKeyDown: (e) => __async(void 0, null, function* () {
              return e.key === "Enter" && (yield handleSubmitCode());
            })
          }
        )
      }
    ) }) : (0, import_jsx_runtime31.jsxs)(import_jsx_runtime31.Fragment, { children: [
      (0, import_jsx_runtime31.jsx)(CpslText, { variant: "bodyS", color: "secondary", weight: "medium", children: "Scan with your preferred authenticator app" }),
      (0, import_jsx_runtime31.jsx)(QRContainer, { children: !(twoFactorStatus == null ? void 0 : twoFactorStatus.uri) ? (0, import_jsx_runtime31.jsx)(CpslSpinner, { size: 100 }) : (0, import_jsx_runtime31.jsx)(CpslQrCode, { url: twoFactorStatus.uri }) })
    ] }) }),
    !isVerifying && (0, import_jsx_runtime31.jsxs)(import_jsx_runtime31.Fragment, { children: [
      (0, import_jsx_runtime31.jsx)(InnerStepContainer, { children: (0, import_jsx_runtime31.jsx)(CpslDivider, { children: "or enter the code manually" }) }),
      (0, import_jsx_runtime31.jsx)(InnerStepContainer, { children: (0, import_jsx_runtime31.jsx)(FilledDisabledInput, { disabled: true, value: secret != null ? secret : "", noAutoDisable: true, children: (0, import_jsx_runtime31.jsx)(CpslButton, { slot: "end", variant: "ghost", onClick: handleCopy, children: (0, import_jsx_runtime31.jsx)(CpslIcon, { icon: copied ? "check" : "copy" }) }) }) }),
      (0, import_jsx_runtime31.jsxs)(InnerStepContainer, { children: [
        (0, import_jsx_runtime31.jsx)(CpslButton, { fullWidth: true, onClick: handleNext, children: "Continue" }),
        (0, import_jsx_runtime31.jsx)(SkipButton, { variant: "ghost", onClick: handleSkip, children: "Skip" })
      ] })
    ] })
  ] });
};
var StyledCodeInput2 = safeStyled(CpslCodeInput)`
  align-self: center;
`;
var SkipButton = safeStyled(CpslButton)`
  margin-top: 8px;
  text-decoration: underline;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/LoginDoneStep/LoginDoneStep.js
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
var import_react75 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/WalletCard/WalletCard.js
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
var ExternalWalletCard = ({
  address,
  showAddFunds
}) => {
  var _a;
  const para = useInternalClient();
  const wallet = para.externalWallets[address];
  if (!(wallet == null ? void 0 : wallet.address) || !(wallet == null ? void 0 : wallet.type)) {
    return null;
  }
  return (0, import_jsx_runtime32.jsx)(
    SharedWalletCard,
    {
      name: wallet.name,
      address: (_a = wallet.ensName) != null ? _a : truncateAddress(wallet.address, wallet.type),
      showAddFunds,
      Icon: (0, import_jsx_runtime32.jsx)(
        WalletTypeIcon,
        {
          externalWallet: wallet.externalProviderId,
          walletType: wallet.type,
          size: "48px",
          inset: "6px",
          radius: "theme",
          background: "var(--cpsl-color-background-0)",
          border: "1px solid var(--cpsl-color-background-16)"
        }
      )
    }
  );
};
var WalletCard = ({ id: id3, type, showAddFunds }) => {
  var _a;
  const para = useInternalClient();
  const appName = useStore2((state2) => state2.appName);
  const wallet = para.findWallet(id3, type);
  if (!wallet) {
    return null;
  }
  return (0, import_jsx_runtime32.jsx)(
    SharedWalletCard,
    {
      id: wallet.id,
      type: wallet.type,
      name: (_a = wallet.name) != null ? _a : `${appName ? `${appName} ` : ""}Wallet`,
      showAddFunds,
      Icon: (0, import_jsx_runtime32.jsx)(
        CpslIcon,
        {
          icon: para.partnerLogo ? void 0 : "wallet02",
          src: para.partnerLogo,
          color: "var(--cpsl-color-text-contrast)",
          radius: "theme",
          background: "var(--cpsl-color-background-0)",
          border: "1px solid var(--cpsl-color-background-16)",
          size: "48px",
          inset: para.partnerLogo ? "8px" : "12px"
        }
      )
    }
  );
};
var SharedWalletCard = ({ address, name, showAddFunds, id: id3, type, Icon }) => {
  const onRampConfig = useModalStore((state2) => state2.onRampConfig);
  const { setSelectedWallet } = useWalletState();
  const setStep = useModalStore((state2) => state2.setStep);
  const isAddFundsEnabled = (onRampConfig == null ? void 0 : onRampConfig.isBuyEnabled) || (onRampConfig == null ? void 0 : onRampConfig.isReceiveEnabled);
  const handleAddFundsClick = () => {
    if (id3 && type) {
      setSelectedWallet({ id: id3, type });
      isAddFundsEnabled && setStep(onRampConfig.isBuyEnabled ? ModalStep.ADD_FUNDS_BUY : ModalStep.ADD_FUNDS_RECEIVE);
    }
  };
  return (0, import_jsx_runtime32.jsxs)(Container3, { children: [
    (0, import_jsx_runtime32.jsxs)(InnerContainer, { children: [
      Icon,
      (0, import_jsx_runtime32.jsxs)(WalletNameContainer, { children: [
        !!name && (0, import_jsx_runtime32.jsx)(Name2, { color: "contrast", variant: "bodyL", weight: "semiBold", children: name }),
        !!address && (0, import_jsx_runtime32.jsx)(Name2, { color: "secondary", variant: "bodyS", weight: "medium", children: address })
      ] })
    ] }),
    showAddFunds && isAddFundsEnabled && (0, import_jsx_runtime32.jsx)(AddFundsButton, { onClick: handleAddFundsClick, children: (0, import_jsx_runtime32.jsx)(CpslText, { variant: "bodyXS", color: "contrast", weight: "medium", children: "Add Funds" }) })
  ] });
};
var WalletCards = safeStyled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
var Container3 = safeStyled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  background-color: var(--cpsl-color-background-8);
  border-radius: 16px;
`;
var InnerContainer = safeStyled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  align-items: center;
  overflow: hidden;
`;
var WalletNameContainer = safeStyled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
`;
var Name2 = safeStyled(CpslText)`
  width: 100%;
  &::part(text-element) {
    line-height: 150%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
var AddFundsButton = safeStyled(CpslButton)`
  --button-primary-background-color: var(--cpsl-color-card-surface);
  --button-primary-hover-background-color: var(--cpsl-color-background-4);
  --button-primary-color: var(--cpsl-color-text-contrast);
  --button-primary-hover-color: var(--cpsl-color-text-contrast);
  --button-primary-active-color: var(--cpsl-color-text-contrast);
  --button-padding-start: 8px;
  --button-padding-end: 8px;
  --button-padding-top: 8px;
  --button-padding-bottom: 8px;
  --button-border-radius: 8px;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/LoginDoneStep/LoginDoneStep.js
var LoginDoneStep = ({ onClose }) => {
  const para = useInternalClient();
  const bareModal = useStore2((state2) => {
    var _a;
    return (_a = state2.modalConfig) == null ? void 0 : _a.bareModal;
  });
  const setStep = useModalStore((state2) => state2.setStep);
  const setFlow = useModalStore((state2) => state2.setFlow);
  const hideWallets = useStore2((state2) => {
    var _a;
    return (_a = state2.modalConfig) == null ? void 0 : _a.hideWallets;
  });
  const content = (0, import_react75.useMemo)(() => {
    var _a, _b;
    if (para.externalWalletConnectionType === "CONNECTION_ONLY" || para.externalWalletConnectionType === "VERIFICATION") {
      return (0, import_jsx_runtime33.jsx)(ExternalWalletCard, { address: (_b = (_a = Object.values(para.externalWallets || {})[0]) == null ? void 0 : _a.address) != null ? _b : "", showAddFunds: false });
    }
    const { id: id3, type } = Object.values(para.wallets || {})[0] || {};
    if (!id3 || !type) return null;
    return (0, import_jsx_runtime33.jsx)(WalletCard, { id: id3, type, showAddFunds: false }, `${id3}-${type}`);
  }, [para.externalWalletConnectionType, para.externalWallets, para.wallets]);
  (0, import_react75.useEffect)(() => {
    const timerId = setTimeout(() => {
      if (bareModal) {
        setFlow("account");
        setStep(ModalStep.ACCOUNT_MAIN);
      } else {
        onClose();
      }
    }, 1600);
    return () => {
      clearTimeout(timerId);
    };
  }, []);
  return (0, import_jsx_runtime33.jsxs)(StepContainer, { children: [
    (0, import_jsx_runtime33.jsx)(HeroIcon, { icon: "checkCircleFilled" }),
    (0, import_jsx_runtime33.jsx)(Heading, { children: "Connected" }),
    !hideWallets && (0, import_jsx_runtime33.jsx)(WalletCards, { children: content })
  ] });
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AwaitingBiometricsStep/AwaitingBiometricsStep.js
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Waiting/Waiting.js
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
var Waiting = ({ heading, subheading }) => {
  return (0, import_jsx_runtime34.jsxs)(Container4, { $wide: true, children: [
    (0, import_jsx_runtime34.jsx)(SpinnerContainer2, { children: (0, import_jsx_runtime34.jsx)(CpslSpinner, { size: 100 }) }),
    heading && (0, import_jsx_runtime34.jsxs)(InnerStepContainer, { children: [
      (0, import_jsx_runtime34.jsx)(Heading, { children: heading }),
      subheading && (0, import_jsx_runtime34.jsx)(CpslText, { variant: "bodyS", color: "secondary", weight: "medium", children: subheading })
    ] })
  ] });
};
var Container4 = safeStyled(StepContainer)`
  flex: 1;
  justify-content: space-between;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AwaitingBiometricsStep/AwaitingBiometricsStep.js
var AwaitingBiometricsStep = () => {
  const isLogin = useModalStore((state2) => state2.isLogin());
  return (0, import_jsx_runtime35.jsx)(
    Waiting,
    {
      heading: isLogin ? "Waiting for Passkey" : "Creating Passkey",
      subheading: "Follow the prompts presented by your browser."
    }
  );
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AwaitingWalletCreationStep/AwaitingWalletCreationStep.js
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
var AwaitingWalletCreationStep = ({ isGuestMode = false }) => {
  const hideWallets = useStore2((state2) => {
    var _a;
    return (_a = state2.modalConfig) == null ? void 0 : _a.hideWallets;
  });
  const { embedded } = useAccount();
  return (0, import_jsx_runtime36.jsx)(StepContainer, { $wide: true, children: (0, import_jsx_runtime36.jsx)(
    Waiting,
    {
      heading: isGuestMode ? "Creating Guest Account" : (embedded == null ? void 0 : embedded.isGuestMode) ? hideWallets ? "Linking Guest Account" : "Linking Guest Wallet" : hideWallets ? "Creating Your Account" : "Creating Your Wallet",
      subheading: "This should only take a couple of seconds."
    }
  ) });
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/WalletCreationDoneStep/WalletCreationDoneStep.js
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
var import_react76 = __toESM(require_react(), 1);
var WalletCreationDoneStep = ({ twoFactorAuthEnabled, onClose }) => {
  const { isSetup2faPending } = useAuthActions();
  const hideWallets = useStore2((state2) => {
    var _a;
    return (_a = state2.modalConfig) == null ? void 0 : _a.hideWallets;
  });
  const bareModal = useStore2((state2) => {
    var _a;
    return (_a = state2.modalConfig) == null ? void 0 : _a.bareModal;
  });
  const setStep = useModalStore((state2) => state2.setStep);
  const setFlow = useModalStore((state2) => state2.setFlow);
  const isLogin = useModalStore((state2) => state2.isLogin());
  const twoFactorStatus = useModalStore((state2) => state2.twoFactorStatus);
  const onRampConfig = useModalStore((state2) => state2.onRampConfig);
  const para = useInternalClient();
  const [isWaiting, setIsWaiting] = (0, import_react76.useState)(false);
  const isOnRampConfigured = (onRampConfig == null ? void 0 : onRampConfig.isBuyEnabled) || (onRampConfig == null ? void 0 : onRampConfig.isReceiveEnabled) || (onRampConfig == null ? void 0 : onRampConfig.isWithdrawEnabled);
  const onBypass2fa = () => {
    if (isLogin) {
      setStep(ModalStep.LOGIN_DONE);
    } else {
      if (bareModal) {
        setFlow("account");
        setStep(ModalStep.ACCOUNT_MAIN);
      } else {
        onClose();
      }
    }
  };
  const handleNext = () => __async(void 0, null, function* () {
    if (!twoFactorAuthEnabled) {
      onBypass2fa();
    }
    if (!twoFactorStatus) {
      if (isSetup2faPending) {
        setIsWaiting(true);
      }
    } else {
      if (twoFactorStatus.isSetup) {
        onBypass2fa();
      } else {
        setStep(ModalStep.SETUP_2FA);
      }
    }
  });
  (0, import_react76.useEffect)(() => {
    if (isWaiting && !!twoFactorStatus) {
      setStep(ModalStep.SETUP_2FA);
    }
  }, [isWaiting, twoFactorStatus]);
  return (0, import_jsx_runtime37.jsxs)(StepContainer, { $wide: true, children: [
    (0, import_jsx_runtime37.jsx)(CardContainer, { children: hideWallets ? (0, import_jsx_runtime37.jsxs)(import_jsx_runtime37.Fragment, { children: [
      (0, import_jsx_runtime37.jsx)(HeroIcon, { icon: "checkCircleFilled" }),
      (0, import_jsx_runtime37.jsx)(CpslText, { variant: "bodyM", color: "secondary", weight: "medium", style: { marginTop: "16px" }, children: "Your account has been created." })
    ] }) : (0, import_jsx_runtime37.jsx)(WalletCards, { children: para.currentWalletIdsArray.map(([id3, type]) => {
      return (0, import_jsx_runtime37.jsx)(WalletCard, { id: id3, type, showAddFunds: isOnRampConfigured }, id3);
    }) }) }),
    (0, import_jsx_runtime37.jsx)(InnerStepContainer, { children: (0, import_jsx_runtime37.jsx)(CpslButton, { fullWidth: true, onClick: handleNext, disabled: isWaiting, children: twoFactorAuthEnabled ? "Continue" : "Done" }) })
  ] });
};
var CardContainer = safeStyled(InnerStepContainer)`
  min-height: 196px;
  justify-content: center;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/RecoverySecretStep/RecoverySecretStep.js
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/utils/getMailtoLink.js
function getMailtoLink(email, recoveryShare) {
  const emailBody = `Hello,%0D%0DBelow is your Para Recovery Secret. Keep this safe!%0D%0D${recoveryShare}%0D%0DPlease get in touch via support@getpara.com if you have any questions`;
  const mailText = `mailto:${email}?subject=Para%20Recovery%20Secret&body=${emailBody}`;
  return mailText;
}

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/RecoverySecretStep/RecoverySecretStep.js
var import_react77 = __toESM(require_react(), 1);
var SaveRecoverySecret = ({
  email,
  value,
  onComplete
}) => {
  const [isSecretSaved, setIsSecretSaved] = (0, import_react77.useState)(false);
  const [isCopied, copy] = useCopyToClipboard();
  const onCopy = () => {
    copy(value);
    setIsSecretSaved(true);
  };
  const onDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([value], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "recovery.txt";
    document.body.appendChild(element);
    element.click();
    setIsSecretSaved(true);
  };
  const onEmail = () => {
    typeof window !== "undefined" && window.open(getMailtoLink(email, value), "_self");
    setIsSecretSaved(true);
  };
  return (0, import_jsx_runtime38.jsxs)(import_jsx_runtime38.Fragment, { children: [
    (0, import_jsx_runtime38.jsxs)(InnerStepContainer, { children: [
      (0, import_jsx_runtime38.jsx)(Heading, { children: "Save your Recovery Secret" }),
      (0, import_jsx_runtime38.jsxs)(ButtonContainer, { children: [
        (0, import_jsx_runtime38.jsx)(ActionButton, { icon: "download", onClick: onDownload, children: (0, import_jsx_runtime38.jsx)(CpslText, { variant: "bodyXS", color: "secondary", weight: "medium", children: "Download" }) }),
        (0, import_jsx_runtime38.jsx)(ActionButton, { icon: isCopied ? "check" : "copy", onClick: onCopy, children: (0, import_jsx_runtime38.jsx)(CpslText, { variant: "bodyXS", color: "secondary", weight: "medium", children: isCopied ? "Copied!" : "Copy" }) }),
        (0, import_jsx_runtime38.jsx)(ActionButton, { icon: "send", onClick: onEmail, children: (0, import_jsx_runtime38.jsx)(CpslText, { variant: "bodyXS", color: "secondary", weight: "medium", children: "Email" }) })
      ] })
    ] }),
    (0, import_jsx_runtime38.jsx)(InnerStepContainer, { children: (0, import_jsx_runtime38.jsx)(CpslButton, { fullWidth: true, onClick: onComplete, disabled: !isSecretSaved, children: !isSecretSaved ? "Choose an option above to continue" : "I’ve saved my recovery secret" }) })
  ] });
};
var RecoverySecretStep = () => {
  const para = useInternalClient();
  const hideWallets = useStore2((state2) => {
    var _a;
    return (_a = state2.modalConfig) == null ? void 0 : _a.hideWallets;
  });
  const setStep = useModalStore((state2) => state2.setStep);
  const authInfo = para.authInfo;
  const recoveryShare = useModalStore((state2) => state2.recoveryShare);
  const backupDecryptionKey = JSON.parse(recoveryShare || "{}").backupDecryptionKey;
  const onComplete = () => __async(void 0, null, function* () {
    setStep(ModalStep.WALLET_CREATION_DONE);
  });
  return (0, import_jsx_runtime38.jsxs)(StepContainer, { children: [
    (0, import_jsx_runtime38.jsxs)(InnerStepContainer, { children: [
      (0, import_jsx_runtime38.jsx)(Heading, { children: hideWallets ? "Don't lose access" : "Don't lose your wallet" }),
      (0, import_jsx_runtime38.jsxs)(InlineText2, { variant: "bodyS", color: "secondary", weight: "medium", children: [
        "Your",
        " ",
        (0, import_jsx_runtime38.jsx)(InlineText2, { variant: "bodyS", weight: "medium", children: "Recovery Secret" }),
        " ",
        "ensures you will be able to regain access to your ",
        hideWallets ? "account" : "wallet",
        " if you lose your Passkey or Password."
      ] })
    ] }),
    (0, import_jsx_runtime38.jsx)(
      SaveRecoverySecret,
      {
        email: (authInfo == null ? void 0 : authInfo.authType) === "email" ? authInfo.identifier : void 0,
        value: backupDecryptionKey,
        onComplete
      }
    )
  ] });
};
var ActionButton = safeStyled(StyledCpslTileButton)`
  flex: 1;

  --button-icon-color: var(--cpsl-color-text-primary);
`;
var ButtonContainer = safeStyled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;
var InlineText2 = safeStyled(CpslText)`
  text-align: center;
  display: inline-block;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/TwoFactorDoneStep/TwoFactorDoneStep.js
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
var TwoFactorDoneStep = ({ onClose }) => {
  const hideWallets = useStore2((state2) => {
    var _a;
    return (_a = state2.modalConfig) == null ? void 0 : _a.hideWallets;
  });
  return (0, import_jsx_runtime39.jsxs)(StepContainer, { children: [
    (0, import_jsx_runtime39.jsx)(HeroIcon, { icon: "checkCircleFilled" }),
    (0, import_jsx_runtime39.jsxs)(InnerStepContainer, { children: [
      (0, import_jsx_runtime39.jsx)(Heading, { variant: "headingXS", children: "Success" }),
      (0, import_jsx_runtime39.jsxs)(CpslText, { variant: "bodyS", color: "secondary", weight: "medium", children: [
        "Your ",
        hideWallets ? "account" : "wallet",
        " is now protected by 2FA"
      ] })
    ] }),
    (0, import_jsx_runtime39.jsx)(CpslButton, { fullWidth: true, onClick: onClose, children: "Done" })
  ] });
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/BiometricCreationStep/BiometricCreationStep.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
var BiometricCreationStep = () => {
  const para = useInternalClient();
  const authInfo = para.authInfo;
  const appName = useStore2((state2) => state2.appName);
  const { presentSignupUi } = useAuthActions();
  const signupState = useModalStore((state2) => state2.getSignupState());
  const authStepRoute = useModalStore((state2) => state2.authStepRoute);
  const [isCopied, copy] = useCopyToClipboard();
  const handleCopy = () => {
    if (signupState == null ? void 0 : signupState.passkeyUrl) {
      copy(signupState.passkeyUrl);
    }
  };
  const onClick = (method) => () => {
    presentSignupUi(method, signupState);
  };
  const isBoth = !!(signupState == null ? void 0 : signupState.passkeyUrl) && (!!(signupState == null ? void 0 : signupState.passwordUrl) || !!(signupState == null ? void 0 : signupState.pinUrl));
  const isPIN = !!(signupState == null ? void 0 : signupState.pinUrl);
  if (!signupState) {
    return null;
  }
  return (0, import_jsx_runtime40.jsxs)(StepContainer, { $wide: true, children: [
    (0, import_jsx_runtime40.jsxs)(InnerStepContainer, { children: [
      (0, import_jsx_runtime40.jsx)(Heading, { children: para.isExternalWalletAuth ? `Finish setup for your${appName ? ` ${appName}` : ""} wallet` : isBoth ? "Secure Your Account" : "Create Passkey" }),
      (0, import_jsx_runtime40.jsx)(UserIdentifier, { authInfo }),
      (0, import_jsx_runtime40.jsx)(CpslText, { variant: "bodyS", color: "secondary", weight: "medium", children: isBoth ? `Choose a ${isPIN ? "PIN" : "password"} or set up a passkey` : "Your Passkey keeps your account safe." })
    ] }),
    (0, import_jsx_runtime40.jsxs)(InnerStepContainer, { children: [
      (signupState == null ? void 0 : signupState.isPasskeySupported) ? (0, import_jsx_runtime40.jsxs)(CpslButton, { fullWidth: true, onClick: onClick(AuthMethod.PASSKEY), children: [
        (0, import_jsx_runtime40.jsx)(CpslIcon, { slot: "start", icon: "key" }),
        isBoth ? "Create Passkey" : "Create"
      ] }) : (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [
        (0, import_jsx_runtime40.jsx)(CpslText, { weight: "semiBold", children: "Scan with your mobile device" }),
        (0, import_jsx_runtime40.jsx)(QRContainer, { children: !(signupState == null ? void 0 : signupState.passkeyUrl) ? (0, import_jsx_runtime40.jsx)(CpslSpinner, { size: 100 }) : (0, import_jsx_runtime40.jsx)(CpslQrCode, { url: signupState.passkeyUrl }) }),
        (0, import_jsx_runtime40.jsxs)(CpslButton, { size: "small", variant: "ghost", onClick: handleCopy, children: [
          (0, import_jsx_runtime40.jsx)(CpslIcon, { slot: "start", icon: isCopied ? "check" : "copy" }),
          isCopied ? "Copied" : "Copy Link"
        ] })
      ] }),
      isBoth && (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [
        (0, import_jsx_runtime40.jsx)(CpslDivider, { children: "or" }),
        (0, import_jsx_runtime40.jsxs)(CpslButton, { fullWidth: true, onClick: onClick(isPIN ? AuthMethod.PIN : AuthMethod.PASSWORD), disabled: !!authStepRoute, children: [
          (0, import_jsx_runtime40.jsx)(CpslIcon, { slot: "start", icon: "passcode" }),
          "Choose ",
          isPIN ? "PIN" : "Password"
        ] })
      ] })
    ] })
  ] });
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AwaitingOAuthStep/AwaitingOAuthStep.js
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
var AwaitingOAuthStep = () => {
  return (0, import_jsx_runtime41.jsx)(Waiting, { heading: "Complete Login", subheading: "Follow the prompts presented by your browser." });
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AddFunds/AddFunds.js
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
var import_react85 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AddFunds/AddFundsProvider.js
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AddFunds/AddFundsContext.js
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
var import_react78 = __toESM(require_react(), 1);
var TABS = [
  [EnabledFlow.BUY, "isBuyEnabled", "creditCard", "Buy"],
  [EnabledFlow.RECEIVE, "isReceiveEnabled", "qrCode", "Receive"],
  [EnabledFlow.WITHDRAW, "isWithdrawEnabled", "arrowCircleBrokenDownLeft", "Withdraw"]
];
var DEFAULT = {
  networks: [],
  assets: [],
  isProviderAllowed: {},
  tab: TABS[0][0],
  network: void 0,
  setNetwork: () => {
  },
  asset: void 0,
  setAsset: () => {
  },
  fiatQuantity: "25.00",
  setFiatQuantity: () => {
  },
  onRampConfig: {},
  activeWallet: {}
};
function isValid(onRampConfig, walletType, network, asset) {
  var _a, _b;
  return network && asset && walletType ? !!((_b = (_a = onRampConfig == null ? void 0 : onRampConfig.assetInfo[walletType]) == null ? void 0 : _a[network]) == null ? void 0 : _b[asset]) : false;
}
var AddFundsContext = (0, import_react78.createContext)(DEFAULT);
function AddFundsContextProvider({ tab, children }) {
  var _a, _b;
  const onRampConfig = useModalStore((state2) => state2.onRampConfig);
  const onRampStep = useModalStore((state2) => state2.onRampStep);
  const setOnRampStep = useModalStore((state2) => state2.setOnRampStep);
  const { chainId } = useExternalWallets();
  const { data: activeWallet } = useWallet();
  const [fiatQuantity, setFiatQuantity] = (0, import_react78.useState)((_b = (_a = onRampConfig == null ? void 0 : onRampConfig.defaultBuyAmount) == null ? void 0 : _a[0]) != null ? _b : "25.00");
  const networks = (0, import_react78.useMemo)(() => {
    if (!onRampConfig) {
      return [];
    }
    const detectedNetwork = getNetworkFromChainId(chainId);
    const isExternal = (activeWallet == null ? void 0 : activeWallet.isExternal) && !!detectedNetwork;
    return isExternal ? [getNetworkOrMainNetEquivalent(detectedNetwork, onRampConfig.testMode)] : getOnRampNetworks(onRampConfig.assetInfo, {
      walletType: activeWallet == null ? void 0 : activeWallet.type,
      allowed: onRampConfig.allowedAssets ? Object.keys(onRampConfig.allowedAssets) : void 0,
      providers: onRampConfig.providers,
      action: OnRampPurchaseType[tab === EnabledFlow.BUY ? "BUY" : "SELL"]
    });
  }, [chainId, activeWallet, onRampConfig, tab]);
  const assets = (0, import_react78.useMemo)(() => {
    if (!onRampConfig) {
      return [];
    }
    return [
      ...new Set(
        Object.values(
          networks.reduce((acc, network2) => {
            var _a2;
            const configValue = (_a2 = onRampConfig.allowedAssets) == null ? void 0 : _a2[network2];
            const allowed = configValue === true ? void 0 : configValue;
            return __spreadProps2(__spreadValues2({}, acc), {
              [network2]: getOnRampAssets(onRampConfig.assetInfo, {
                walletType: activeWallet == null ? void 0 : activeWallet.type,
                network: network2,
                allowed,
                providers: onRampConfig.providers,
                action: OnRampPurchaseType[tab === EnabledFlow.BUY ? "BUY" : "SELL"]
              })
            });
          }, {})
        ).flat()
      )
    ];
  }, [networks, onRampConfig, activeWallet, tab]);
  const [network, setNetwork] = (0, import_react78.useState)(
    !!(activeWallet == null ? void 0 : activeWallet.type) && !!(onRampConfig == null ? void 0 : onRampConfig.defaultOnRampNetwork) && !!onRampConfig.assetInfo[activeWallet.type][onRampConfig.defaultOnRampNetwork] ? onRampConfig.defaultOnRampNetwork : void 0
  );
  const [asset, setAsset] = (0, import_react78.useState)(
    !!network && !!(onRampConfig == null ? void 0 : onRampConfig.defaultOnRampAsset) && assets.includes(onRampConfig.defaultOnRampAsset) ? onRampConfig.defaultOnRampAsset : void 0
  );
  const isProviderAllowed = (0, import_react78.useMemo)(
    () => onRampConfig && !!(activeWallet == null ? void 0 : activeWallet.type) ? onRampConfig.providers.reduce(
      (acc, id3) => {
        var _a2, _b2, _c, _d, _e;
        return __spreadProps2(__spreadValues2({}, acc), {
          [id3]: !!network && !!asset && !!((_e = (_d = (_c = (_b2 = (_a2 = onRampConfig.assetInfo[activeWallet.type]) == null ? void 0 : _a2[network]) == null ? void 0 : _b2[asset]) == null ? void 0 : _c[id3]) == null ? void 0 : _d[1]) == null ? void 0 : _e[tab === EnabledFlow.BUY ? "BUY" : "SELL"])
        });
      },
      {}
    ) : {},
    [onRampConfig, network, asset, activeWallet, tab]
  );
  const value = (0, import_react78.useMemo)(() => {
    if (!onRampConfig || !activeWallet) {
      return DEFAULT;
    }
    return {
      tab,
      networks,
      assets,
      isProviderAllowed,
      asset,
      setAsset,
      network,
      setNetwork,
      fiatQuantity,
      setFiatQuantity,
      activeWallet,
      onRampConfig
    };
  }, [
    tab,
    networks,
    assets,
    isProviderAllowed,
    asset,
    setAsset,
    network,
    setNetwork,
    fiatQuantity,
    setFiatQuantity,
    activeWallet,
    onRampConfig
  ]);
  (0, import_react78.useEffect)(() => {
    if (!!activeWallet && onRampStep === OnRampStep.PROVIDER && !isValid(onRampConfig, activeWallet.type, network, asset)) {
      setOnRampStep(OnRampStep.SETTINGS);
    }
  }, [onRampStep, onRampConfig, activeWallet, network, asset, setOnRampStep]);
  return (0, import_jsx_runtime42.jsx)(AddFundsContext.Provider, { value, children });
}
var useAddFunds = () => (0, import_react78.useContext)(AddFundsContext);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/OnRampComponents/OnRampProviderButton.js
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
var import_react79 = __toESM(require_react(), 1);
var OnRampProviderButton = ({ config, index, onClick: _onClick }) => {
  const [isLoading, setIsLoading] = (0, import_react79.useState)(false);
  const provider = config.providers[index];
  const { feeLower, feeUpper, name, icon, backgroundColors } = ON_RAMP_PROVIDERS[provider];
  const feeString = `Fee ${feeLower}% - ${feeUpper}%`;
  const onClick = () => __async(void 0, null, function* () {
    setIsLoading(true);
    yield _onClick();
    setIsLoading(false);
  });
  return (0, import_jsx_runtime43.jsx)(StyledButton, { $gradientColors: backgroundColors, fullWidth: true, onClick, children: (0, import_jsx_runtime43.jsxs)(Container5, { $backgroundColor: backgroundColors[1], children: [
    (0, import_jsx_runtime43.jsx)(IconContainer, { children: (0, import_jsx_runtime43.jsx)(CpslIcon, { icon }) }),
    (0, import_jsx_runtime43.jsxs)(ProviderInfoContainer, { children: [
      (0, import_jsx_runtime43.jsx)(Text, { variant: "bodyL", weight: "medium", children: name }),
      (0, import_jsx_runtime43.jsx)(ProviderInfoInnerContainer, { children: (0, import_jsx_runtime43.jsx)(Text, { variant: "bodyXS", weight: "medium", children: feeString }) })
    ] }),
    isLoading ? (0, import_jsx_runtime43.jsx)(CpslSpinner, { size: 16 }) : (0, import_jsx_runtime43.jsx)(Chevron, { icon: "chevronUp" })
  ] }) });
};
var StyledButton = safeStyled(CpslButton)`
  width: 100%;
  --button-primary-background-color: ${({ $gradientColors }) => `linear-gradient(90deg, ${$gradientColors[0]} 0%, ${$gradientColors[1]} 100%)`};
  --button-primary-hover-background-color: ${({ $gradientColors }) => `linear-gradient(90deg, ${$gradientColors[0]} 0%, ${$gradientColors[0]} 100%)`};
  --button-primary-active-background-color: ${({ $gradientColors }) => `linear-gradient(90deg, ${$gradientColors[0]} 0%, ${$gradientColors[0]} 100%)`};
`;
var Container5 = safeStyled(motion.div)`
  display: flex;
  gap: 8px;
  flex: 1;
  align-items: center;

  & cpsl-spinner {
    --background-color: ${({ $backgroundColor }) => `${$backgroundColor}`};
  }
`;
var ProviderInfoContainer = safeStyled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2px;
`;
var ProviderInfoInnerContainer = safeStyled.div`
  display: flex;
  gap: 16px;
`;
var IconContainer = safeStyled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 100%;
  height: 48px;
  width: 48px;
`;
var Text = safeStyled(CpslText)`
  &::part(text-element) {
    color: #fff;
  }
`;
var Chevron = safeStyled(CpslIcon)`
  transform: rotate(90deg);
  --icon-color: #fff;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AddFunds/AddFundsProvider.js
function AddFundsProvider() {
  const para = useInternalClient();
  const hideWallets = useStore2((state2) => {
    var _a;
    return (_a = state2.modalConfig) == null ? void 0 : _a.hideWallets;
  });
  const onRampConfig = useModalStore((state2) => state2.onRampConfig);
  const setOnRampPurchase = useModalStore((state2) => state2.setOnRampPurchase);
  const { asset, network, fiatQuantity, isProviderAllowed, tab } = useAddFunds();
  const { data: activeWallet } = useWallet();
  return (0, import_jsx_runtime44.jsxs)(Container6, __spreadProps2(__spreadValues2({}, contentMotionProps), { children: [
    (0, import_jsx_runtime44.jsx)(Heading, { children: "Choose Provider" }),
    (0, import_jsx_runtime44.jsxs)($InnerStepContainer, { children: [
      (0, import_jsx_runtime44.jsxs)(NoProviders, { isHidden: Object.values(isProviderAllowed).some((v) => !!v), variant: "bodyM", children: [
        "No providers are available for this ",
        hideWallets ? "account" : "wallet"
      ] }),
      (0, import_jsx_runtime44.jsx)(AnimatePresence, { children: onRampConfig ? onRampConfig.providers.map((id3, index) => {
        return isProviderAllowed[id3] ? (0, import_jsx_runtime44.jsx)(
          motion.div,
          {
            style: { width: "100%" },
            layout: true,
            initial: { opacity: 0, transform: "translateX(25px)" },
            animate: { opacity: 1, transform: "none" },
            exit: { opacity: 0, transform: "translateX(-25px)" },
            transition: { duration: 0.2 },
            children: (0, import_jsx_runtime44.jsx)(
              OnRampProviderButton,
              {
                config: onRampConfig,
                index,
                onClick: () => __async(this, null, function* () {
                  if (!(activeWallet == null ? void 0 : activeWallet.type)) return;
                  const { onRampPurchase: newOnRampPurchase } = yield para.initiateOnRampTransaction({
                    walletId: activeWallet.isExternal ? void 0 : activeWallet.id,
                    externalWalletAddress: activeWallet.isExternal ? activeWallet.id : void 0,
                    shouldOpenPopup: true,
                    params: {
                      type: tab === EnabledFlow.BUY ? OnRampPurchaseType.BUY : OnRampPurchaseType.SELL,
                      walletType: activeWallet.type,
                      provider: id3,
                      network,
                      asset,
                      fiatQuantity,
                      testMode: onRampConfig == null ? void 0 : onRampConfig.testMode
                    }
                  });
                  setOnRampPurchase(__spreadProps2(__spreadValues2({}, newOnRampPurchase), { fiat: "USD" }));
                })
              },
              id3
            )
          },
          id3
        ) : null;
      }) : null })
    ] })
  ] }));
}
var Container6 = safeStyled(motion.div)`
  width: 100%;
  height: 100%;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  height: 320px;
`;
var $InnerStepContainer = safeStyled(InnerStepContainer)`
  position: relative;
`;
var NoProviders = safeStyled(CpslText)`
  width: 100%;
  text-align: center;
  visibility: ${({ isHidden }) => isHidden ? "hidden" : "visible"};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: visibility 0.2s;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AddFunds/AddFundsReceive.js
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
var import_react80 = __toESM(require_react(), 1);

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/toDate.mjs
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
    return new argument.constructor(+argument);
  } else if (typeof argument === "number" || argStr === "[object Number]" || typeof argument === "string" || argStr === "[object String]") {
    return new Date(argument);
  } else {
    return /* @__PURE__ */ new Date(NaN);
  }
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/constructFrom.mjs
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addDays.mjs
function addDays(date, amount) {
  const _date = toDate(date);
  if (isNaN(amount)) return constructFrom(date, NaN);
  if (!amount) {
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/constants.mjs
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var millisecondsInWeek = 6048e5;
var millisecondsInMinute = 6e4;
var millisecondsInHour = 36e5;
var millisecondsInSecond = 1e3;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/_lib/defaultOptions.mjs
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfWeek.mjs
function startOfWeek(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfISOWeek.mjs
function startOfISOWeek(date) {
  return startOfWeek(date, { weekStartsOn: 1 });
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getISOWeekYear.mjs
function getISOWeekYear(date) {
  const _date = toDate(date);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfISOWeekYear.mjs
function startOfISOWeekYear(date) {
  const year = getISOWeekYear(date);
  const fourthOfJanuary = constructFrom(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/locale/en-US/_lib/formatLong.mjs
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/locale/en-US/_lib/localize.mjs
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = (dirtyNumber, _options) => {
  const number2 = Number(dirtyNumber);
  const rem100 = number2 % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number2 + "st";
      case 2:
        return number2 + "nd";
      case 3:
        return number2 + "rd";
    }
  }
  return number2 + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/locale/_lib/buildMatchFn.mjs
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      findKey(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/locale/en-US/_lib/match.mjs
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getISOWeek.mjs
function getISOWeek(date) {
  const _date = toDate(date);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getWeekYear.mjs
function getWeekYear(date, options) {
  const _date = toDate(date);
  const year = _date.getFullYear();
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const firstWeekOfNextYear = constructFrom(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfWeekYear.mjs
function startOfWeekYear(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const year = getWeekYear(date, options);
  const firstWeek = constructFrom(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getWeek.mjs
function getWeek(date, options) {
  const _date = toDate(date);
  const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getISODay.mjs
function getISODay(date) {
  const _date = toDate(date);
  let day = _date.getDay();
  if (day === 0) {
    day = 7;
  }
  return day;
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/Setter.mjs
var Setter = class {
  subPriority = 0;
  validate(_utcDate, _options) {
    return true;
  }
};
var ValueSetter = class extends Setter {
  constructor(value, validateValue, setValue, priority, subPriority) {
    super();
    this.value = value;
    this.validateValue = validateValue;
    this.setValue = setValue;
    this.priority = priority;
    if (subPriority) {
      this.subPriority = subPriority;
    }
  }
  validate(date, options) {
    return this.validateValue(date, this.value, options);
  }
  set(date, flags, options) {
    return this.setValue(date, flags, this.value, options);
  }
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/Parser.mjs
var Parser = class {
  run(dateString, token, match2, options) {
    const result = this.parse(dateString, token, match2, options);
    if (!result) {
      return null;
    }
    return {
      setter: new ValueSetter(
        result.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: result.rest
    };
  }
  validate(_utcDate, _value, _options) {
    return true;
  }
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/EraParser.mjs
var EraParser = class extends Parser {
  priority = 140;
  parse(dateString, token, match2) {
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return match2.era(dateString, { width: "abbreviated" }) || match2.era(dateString, { width: "narrow" });
      // A, B
      case "GGGGG":
        return match2.era(dateString, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return match2.era(dateString, { width: "wide" }) || match2.era(dateString, { width: "abbreviated" }) || match2.era(dateString, { width: "narrow" });
    }
  }
  set(date, flags, value) {
    flags.era = value;
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["R", "u", "t", "T"];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/constants.mjs
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/utils.mjs
function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }
  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest
  };
}
function parseNumericPattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseTimezonePattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  if (matchResult[0] === "Z") {
    return {
      value: 0,
      rest: dateString.slice(1)
    };
  }
  const sign = matchResult[1] === "+" ? 1 : -1;
  const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, dateString);
    default:
      return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
  }
}
function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, dateString);
    default:
      return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
  }
}
function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  const isCommonEra = currentYear > 0;
  const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  let result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    const rangeEnd = absCurrentYear + 50;
    const rangeEndCentury = Math.trunc(rangeEnd / 100) * 100;
    const isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }
  return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/YearParser.mjs
var YearParser = class extends Parser {
  priority = 130;
  incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
  parse(dateString, token, match2) {
    const valueCallback = (year) => ({
      year,
      isTwoDigitYear: token === "yy"
    });
    switch (token) {
      case "y":
        return mapValue(parseNDigits(4, dateString), valueCallback);
      case "yo":
        return mapValue(
          match2.ordinalNumber(dateString, {
            unit: "year"
          }),
          valueCallback
        );
      default:
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
    }
  }
  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }
  set(date, flags, value) {
    const currentYear = date.getFullYear();
    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = normalizeTwoDigitYear(
        value.year,
        currentYear
      );
      date.setFullYear(normalizedTwoDigitYear, 0, 1);
      date.setHours(0, 0, 0, 0);
      return date;
    }
    const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.mjs
var LocalWeekYearParser = class extends Parser {
  priority = 130;
  parse(dateString, token, match2) {
    const valueCallback = (year) => ({
      year,
      isTwoDigitYear: token === "YY"
    });
    switch (token) {
      case "Y":
        return mapValue(parseNDigits(4, dateString), valueCallback);
      case "Yo":
        return mapValue(
          match2.ordinalNumber(dateString, {
            unit: "year"
          }),
          valueCallback
        );
      default:
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
    }
  }
  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }
  set(date, flags, value, options) {
    const currentYear = getWeekYear(date, options);
    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = normalizeTwoDigitYear(
        value.year,
        currentYear
      );
      date.setFullYear(
        normalizedTwoDigitYear,
        0,
        options.firstWeekContainsDate
      );
      date.setHours(0, 0, 0, 0);
      return startOfWeek(date, options);
    }
    const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, options.firstWeekContainsDate);
    date.setHours(0, 0, 0, 0);
    return startOfWeek(date, options);
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T"
  ];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.mjs
var ISOWeekYearParser = class extends Parser {
  priority = 130;
  parse(dateString, token) {
    if (token === "R") {
      return parseNDigitsSigned(4, dateString);
    }
    return parseNDigitsSigned(token.length, dateString);
  }
  set(date, _flags, value) {
    const firstWeekOfYear = constructFrom(date, 0);
    firstWeekOfYear.setFullYear(value, 0, 4);
    firstWeekOfYear.setHours(0, 0, 0, 0);
    return startOfISOWeek(firstWeekOfYear);
  }
  incompatibleTokens = [
    "G",
    "y",
    "Y",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.mjs
var ExtendedYearParser = class extends Parser {
  priority = 130;
  parse(dateString, token) {
    if (token === "u") {
      return parseNDigitsSigned(4, dateString);
    }
    return parseNDigitsSigned(token.length, dateString);
  }
  set(date, _flags, value) {
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/QuarterParser.mjs
var QuarterParser = class extends Parser {
  priority = 120;
  parse(dateString, token, match2) {
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ":
        return parseNDigits(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return match2.ordinalNumber(dateString, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return match2.quarter(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return match2.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return match2.quarter(dateString, {
          width: "wide",
          context: "formatting"
        }) || match2.quarter(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 4;
  }
  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.mjs
var StandAloneQuarterParser = class extends Parser {
  priority = 120;
  parse(dateString, token, match2) {
    switch (token) {
      // 1, 2, 3, 4
      case "q":
      case "qq":
        return parseNDigits(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return match2.ordinalNumber(dateString, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return match2.quarter(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match2.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return match2.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return match2.quarter(dateString, {
          width: "wide",
          context: "standalone"
        }) || match2.quarter(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match2.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 4;
  }
  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/MonthParser.mjs
var MonthParser = class extends Parser {
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "L",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
  priority = 110;
  parse(dateString, token, match2) {
    const valueCallback = (value) => value - 1;
    switch (token) {
      // 1, 2, ..., 12
      case "M":
        return mapValue(
          parseNumericPattern(numericPatterns.month, dateString),
          valueCallback
        );
      // 01, 02, ..., 12
      case "MM":
        return mapValue(parseNDigits(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return mapValue(
          match2.ordinalNumber(dateString, {
            unit: "month"
          }),
          valueCallback
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return match2.month(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.month(dateString, { width: "narrow", context: "formatting" });
      // J, F, ..., D
      case "MMMMM":
        return match2.month(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return match2.month(dateString, { width: "wide", context: "formatting" }) || match2.month(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.month(dateString, { width: "narrow", context: "formatting" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.mjs
var StandAloneMonthParser = class extends Parser {
  priority = 110;
  parse(dateString, token, match2) {
    const valueCallback = (value) => value - 1;
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return mapValue(
          parseNumericPattern(numericPatterns.month, dateString),
          valueCallback
        );
      // 01, 02, ..., 12
      case "LL":
        return mapValue(parseNDigits(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return mapValue(
          match2.ordinalNumber(dateString, {
            unit: "month"
          }),
          valueCallback
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return match2.month(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match2.month(dateString, { width: "narrow", context: "standalone" });
      // J, F, ..., D
      case "LLLLL":
        return match2.month(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return match2.month(dateString, { width: "wide", context: "standalone" }) || match2.month(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match2.month(dateString, { width: "narrow", context: "standalone" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setWeek.mjs
function setWeek(date, week, options) {
  const _date = toDate(date);
  const diff = getWeek(_date, options) - week;
  _date.setDate(_date.getDate() - diff * 7);
  return _date;
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.mjs
var LocalWeekParser = class extends Parser {
  priority = 100;
  parse(dateString, token, match2) {
    switch (token) {
      case "w":
        return parseNumericPattern(numericPatterns.week, dateString);
      case "wo":
        return match2.ordinalNumber(dateString, { unit: "week" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 53;
  }
  set(date, _flags, value, options) {
    return startOfWeek(setWeek(date, value, options), options);
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T"
  ];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setISOWeek.mjs
function setISOWeek(date, week) {
  const _date = toDate(date);
  const diff = getISOWeek(_date) - week;
  _date.setDate(_date.getDate() - diff * 7);
  return _date;
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.mjs
var ISOWeekParser = class extends Parser {
  priority = 100;
  parse(dateString, token, match2) {
    switch (token) {
      case "I":
        return parseNumericPattern(numericPatterns.week, dateString);
      case "Io":
        return match2.ordinalNumber(dateString, { unit: "week" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 53;
  }
  set(date, _flags, value) {
    return startOfISOWeek(setISOWeek(date, value));
  }
  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/DateParser.mjs
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
var DateParser = class extends Parser {
  priority = 90;
  subPriority = 1;
  parse(dateString, token, match2) {
    switch (token) {
      case "d":
        return parseNumericPattern(numericPatterns.date, dateString);
      case "do":
        return match2.ordinalNumber(dateString, { unit: "date" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear2 = isLeapYearIndex(year);
    const month = date.getMonth();
    if (isLeapYear2) {
      return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
    } else {
      return value >= 1 && value <= DAYS_IN_MONTH[month];
    }
  }
  set(date, _flags, value) {
    date.setDate(value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.mjs
var DayOfYearParser = class extends Parser {
  priority = 90;
  subpriority = 1;
  parse(dateString, token, match2) {
    switch (token) {
      case "D":
      case "DD":
        return parseNumericPattern(numericPatterns.dayOfYear, dateString);
      case "Do":
        return match2.ordinalNumber(dateString, { unit: "date" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear2 = isLeapYearIndex(year);
    if (isLeapYear2) {
      return value >= 1 && value <= 366;
    } else {
      return value >= 1 && value <= 365;
    }
  }
  set(date, _flags, value) {
    date.setMonth(0, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "E",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setDay.mjs
function setDay(date, day, options) {
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date);
  const currentDay = _date.getDay();
  const remainder = day % 7;
  const dayIndex = (remainder + 7) % 7;
  const delta = 7 - weekStartsOn;
  const diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
  return addDays(_date, diff);
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/DayParser.mjs
var DayParser = class extends Parser {
  priority = 90;
  parse(dateString, token, match2) {
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return match2.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.day(dateString, { width: "short", context: "formatting" }) || match2.day(dateString, { width: "narrow", context: "formatting" });
      // T
      case "EEEEE":
        return match2.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return match2.day(dateString, { width: "short", context: "formatting" }) || match2.day(dateString, { width: "narrow", context: "formatting" });
      // Tuesday
      case "EEEE":
      default:
        return match2.day(dateString, { width: "wide", context: "formatting" }) || match2.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.day(dateString, { width: "short", context: "formatting" }) || match2.day(dateString, { width: "narrow", context: "formatting" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options) {
    date = setDay(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/LocalDayParser.mjs
var LocalDayParser = class extends Parser {
  priority = 90;
  parse(dateString, token, match2, options) {
    const valueCallback = (value) => {
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
    };
    switch (token) {
      // 3
      case "e":
      case "ee":
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
      // 3rd
      case "eo":
        return mapValue(
          match2.ordinalNumber(dateString, {
            unit: "day"
          }),
          valueCallback
        );
      // Tue
      case "eee":
        return match2.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.day(dateString, { width: "short", context: "formatting" }) || match2.day(dateString, { width: "narrow", context: "formatting" });
      // T
      case "eeeee":
        return match2.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return match2.day(dateString, { width: "short", context: "formatting" }) || match2.day(dateString, { width: "narrow", context: "formatting" });
      // Tuesday
      case "eeee":
      default:
        return match2.day(dateString, { width: "wide", context: "formatting" }) || match2.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.day(dateString, { width: "short", context: "formatting" }) || match2.day(dateString, { width: "narrow", context: "formatting" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options) {
    date = setDay(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "c",
    "t",
    "T"
  ];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.mjs
var StandAloneLocalDayParser = class extends Parser {
  priority = 90;
  parse(dateString, token, match2, options) {
    const valueCallback = (value) => {
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
    };
    switch (token) {
      // 3
      case "c":
      case "cc":
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
      // 3rd
      case "co":
        return mapValue(
          match2.ordinalNumber(dateString, {
            unit: "day"
          }),
          valueCallback
        );
      // Tue
      case "ccc":
        return match2.day(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match2.day(dateString, { width: "short", context: "standalone" }) || match2.day(dateString, { width: "narrow", context: "standalone" });
      // T
      case "ccccc":
        return match2.day(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return match2.day(dateString, { width: "short", context: "standalone" }) || match2.day(dateString, { width: "narrow", context: "standalone" });
      // Tuesday
      case "cccc":
      default:
        return match2.day(dateString, { width: "wide", context: "standalone" }) || match2.day(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match2.day(dateString, { width: "short", context: "standalone" }) || match2.day(dateString, { width: "narrow", context: "standalone" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options) {
    date = setDay(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "e",
    "t",
    "T"
  ];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setISODay.mjs
function setISODay(date, day) {
  const _date = toDate(date);
  const currentDay = getISODay(_date);
  const diff = day - currentDay;
  return addDays(_date, diff);
}

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/ISODayParser.mjs
var ISODayParser = class extends Parser {
  priority = 90;
  parse(dateString, token, match2) {
    const valueCallback = (value) => {
      if (value === 0) {
        return 7;
      }
      return value;
    };
    switch (token) {
      // 2
      case "i":
      case "ii":
        return parseNDigits(token.length, dateString);
      // 2nd
      case "io":
        return match2.ordinalNumber(dateString, { unit: "day" });
      // Tue
      case "iii":
        return mapValue(
          match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }),
          valueCallback
        );
      // T
      case "iiiii":
        return mapValue(
          match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }),
          valueCallback
        );
      // Tu
      case "iiiiii":
        return mapValue(
          match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }),
          valueCallback
        );
      // Tuesday
      case "iiii":
      default:
        return mapValue(
          match2.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }),
          valueCallback
        );
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 7;
  }
  set(date, _flags, value) {
    date = setISODay(date, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "E",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/AMPMParser.mjs
var AMPMParser = class extends Parser {
  priority = 80;
  parse(dateString, token, match2) {
    switch (token) {
      case "a":
      case "aa":
      case "aaa":
        return match2.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return match2.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return match2.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match2.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.mjs
var AMPMMidnightParser = class extends Parser {
  priority = 80;
  parse(dateString, token, match2) {
    switch (token) {
      case "b":
      case "bb":
      case "bbb":
        return match2.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return match2.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return match2.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match2.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.mjs
var DayPeriodParser = class extends Parser {
  priority = 80;
  parse(dateString, token, match2) {
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return match2.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return match2.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return match2.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match2.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "b", "t", "T"];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.mjs
var Hour1to12Parser = class extends Parser {
  priority = 70;
  parse(dateString, token, match2) {
    switch (token) {
      case "h":
        return parseNumericPattern(numericPatterns.hour12h, dateString);
      case "ho":
        return match2.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 12;
  }
  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else if (!isPM && value === 12) {
      date.setHours(0, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }
  incompatibleTokens = ["H", "K", "k", "t", "T"];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.mjs
var Hour0to23Parser = class extends Parser {
  priority = 70;
  parse(dateString, token, match2) {
    switch (token) {
      case "H":
        return parseNumericPattern(numericPatterns.hour23h, dateString);
      case "Ho":
        return match2.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 23;
  }
  set(date, _flags, value) {
    date.setHours(value, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.mjs
var Hour0To11Parser = class extends Parser {
  priority = 70;
  parse(dateString, token, match2) {
    switch (token) {
      case "K":
        return parseNumericPattern(numericPatterns.hour11h, dateString);
      case "Ko":
        return match2.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }
  incompatibleTokens = ["h", "H", "k", "t", "T"];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.mjs
var Hour1To24Parser = class extends Parser {
  priority = 70;
  parse(dateString, token, match2) {
    switch (token) {
      case "k":
        return parseNumericPattern(numericPatterns.hour24h, dateString);
      case "ko":
        return match2.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 24;
  }
  set(date, _flags, value) {
    const hours = value <= 24 ? value % 24 : value;
    date.setHours(hours, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/MinuteParser.mjs
var MinuteParser = class extends Parser {
  priority = 60;
  parse(dateString, token, match2) {
    switch (token) {
      case "m":
        return parseNumericPattern(numericPatterns.minute, dateString);
      case "mo":
        return match2.ordinalNumber(dateString, { unit: "minute" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 59;
  }
  set(date, _flags, value) {
    date.setMinutes(value, 0, 0);
    return date;
  }
  incompatibleTokens = ["t", "T"];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/SecondParser.mjs
var SecondParser = class extends Parser {
  priority = 50;
  parse(dateString, token, match2) {
    switch (token) {
      case "s":
        return parseNumericPattern(numericPatterns.second, dateString);
      case "so":
        return match2.ordinalNumber(dateString, { unit: "second" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 59;
  }
  set(date, _flags, value) {
    date.setSeconds(value, 0);
    return date;
  }
  incompatibleTokens = ["t", "T"];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.mjs
var FractionOfSecondParser = class extends Parser {
  priority = 30;
  parse(dateString, token) {
    const valueCallback = (value) => Math.trunc(value * Math.pow(10, -token.length + 3));
    return mapValue(parseNDigits(token.length, dateString), valueCallback);
  }
  set(date, _flags, value) {
    date.setMilliseconds(value);
    return date;
  }
  incompatibleTokens = ["t", "T"];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.mjs
var ISOTimezoneWithZParser = class extends Parser {
  priority = 10;
  parse(dateString, token) {
    switch (token) {
      case "X":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalMinutes,
          dateString
        );
      case "XX":
        return parseTimezonePattern(timezonePatterns.basic, dateString);
      case "XXXX":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalSeconds,
          dateString
        );
      case "XXXXX":
        return parseTimezonePattern(
          timezonePatterns.extendedOptionalSeconds,
          dateString
        );
      case "XXX":
      default:
        return parseTimezonePattern(timezonePatterns.extended, dateString);
    }
  }
  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return constructFrom(
      date,
      date.getTime() - getTimezoneOffsetInMilliseconds(date) - value
    );
  }
  incompatibleTokens = ["t", "T", "x"];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.mjs
var ISOTimezoneParser = class extends Parser {
  priority = 10;
  parse(dateString, token) {
    switch (token) {
      case "x":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalMinutes,
          dateString
        );
      case "xx":
        return parseTimezonePattern(timezonePatterns.basic, dateString);
      case "xxxx":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalSeconds,
          dateString
        );
      case "xxxxx":
        return parseTimezonePattern(
          timezonePatterns.extendedOptionalSeconds,
          dateString
        );
      case "xxx":
      default:
        return parseTimezonePattern(timezonePatterns.extended, dateString);
    }
  }
  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return constructFrom(
      date,
      date.getTime() - getTimezoneOffsetInMilliseconds(date) - value
    );
  }
  incompatibleTokens = ["t", "T", "X"];
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.mjs
var TimestampSecondsParser = class extends Parser {
  priority = 40;
  parse(dateString) {
    return parseAnyDigitsSigned(dateString);
  }
  set(date, _flags, value) {
    return [constructFrom(date, value * 1e3), { timestampIsSet: true }];
  }
  incompatibleTokens = "*";
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.mjs
var TimestampMillisecondsParser = class extends Parser {
  priority = 20;
  parse(dateString) {
    return parseAnyDigitsSigned(dateString);
  }
  set(date, _flags, value) {
    return [constructFrom(date, value), { timestampIsSet: true }];
  }
  incompatibleTokens = "*";
};

// node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers.mjs
var parsers = {
  G: new EraParser(),
  y: new YearParser(),
  Y: new LocalWeekYearParser(),
  R: new ISOWeekYearParser(),
  u: new ExtendedYearParser(),
  Q: new QuarterParser(),
  q: new StandAloneQuarterParser(),
  M: new MonthParser(),
  L: new StandAloneMonthParser(),
  w: new LocalWeekParser(),
  I: new ISOWeekParser(),
  d: new DateParser(),
  D: new DayOfYearParser(),
  E: new DayParser(),
  e: new LocalDayParser(),
  c: new StandAloneLocalDayParser(),
  i: new ISODayParser(),
  a: new AMPMParser(),
  b: new AMPMMidnightParser(),
  B: new DayPeriodParser(),
  h: new Hour1to12Parser(),
  H: new Hour0to23Parser(),
  K: new Hour0To11Parser(),
  k: new Hour1To24Parser(),
  m: new MinuteParser(),
  s: new SecondParser(),
  S: new FractionOfSecondParser(),
  X: new ISOTimezoneWithZParser(),
  x: new ISOTimezoneParser(),
  t: new TimestampSecondsParser(),
  T: new TimestampMillisecondsParser()
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/utils/stringFormatters.js
var formatNetworkList = (networks) => {
  if (networks.length === 0) {
    return "";
  }
  if (networks.length === 1) {
    return getNetworkName(networks[0]);
  }
  const networkNames = networks.map((id3) => getNetworkName(id3));
  const allButLast = networkNames.slice(0, -1);
  const last = networkNames[networkNames.length - 1];
  return `${allButLast.join(", ")}${networks.length > 2 ? "," : ""} and ${last}`;
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AddFunds/AddFundsReceive.js
var GENERIC_WALLET = {
  EVM: "Ethereum or EVM-based networks",
  SOLANA: "Solana or SVM-based networks",
  COSMOS: "Cosmos networks"
};
function AddFundsReceive() {
  const { networks } = useAddFunds();
  const para = useInternalClient();
  const onRampConfig = useModalStore((state2) => state2.onRampConfig);
  const { data: activeWallet } = useWallet();
  const address = (0, import_react80.useMemo)(
    () => activeWallet ? para.getDisplayAddress(activeWallet.id, { addressType: activeWallet.type }) : "",
    [para, activeWallet == null ? void 0 : activeWallet.id, activeWallet == null ? void 0 : activeWallet.type]
  );
  return (0, import_jsx_runtime45.jsxs)(import_jsx_runtime45.Fragment, { children: [
    !isMobile() && (0, import_jsx_runtime45.jsx)(import_jsx_runtime45.Fragment, { children: (0, import_jsx_runtime45.jsx)(InnerStepContainer, { children: (0, import_jsx_runtime45.jsx)(QRContainer, { children: !address ? (0, import_jsx_runtime45.jsx)(CpslSpinner, { size: 100 }) : (0, import_jsx_runtime45.jsx)(CpslQrCode, { url: address }, address) }) }) }),
    (activeWallet == null ? void 0 : activeWallet.type) && (0, import_jsx_runtime45.jsx)(InnerStepContainer, { children: (0, import_jsx_runtime45.jsxs)(CenteredText, { variant: "bodyS", weight: "semiBold", children: [
      "Only send funds on",
      " ",
      !!(onRampConfig == null ? void 0 : onRampConfig.allowedAssets) && networks.length > 0 ? formatNetworkList(networks) : GENERIC_WALLET[activeWallet.type]
    ] }) })
  ] });
}

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AddFunds/AddFundsSettings.js
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
var import_react82 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AddFunds/common.js
var NoProviders2 = safeStyled(CpslText)`
  width: 100%;
  text-align: center;
  visibility: ${({ isHidden }) => isHidden ? "hidden" : "visible"};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: visibility 0.2s;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AddFunds/AddFundsAsset.js
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
var import_react81 = __toESM(require_react(), 1);
function AddFundsAsset() {
  const onRampConfig = useModalStore((state2) => state2.onRampConfig);
  const { assets, setAsset, network, setNetwork } = useAddFunds();
  const { data: activeWallet } = useWallet();
  const { assetMetadata } = useAssets();
  const [searchStr, setSearchStr] = (0, import_react81.useState)("");
  const onSelect = (_asset) => __async(this, null, function* () {
    yield setAsset(_asset);
    if (!network && !!onRampConfig && !!activeWallet) {
      yield setNetwork(
        getOnRampNetworks(onRampConfig.assetInfo, {
          walletType: activeWallet.type,
          assets: [_asset]
        })[0]
      );
    }
  });
  return (0, import_jsx_runtime46.jsxs)(import_jsx_runtime46.Fragment, { children: [
    (0, import_jsx_runtime46.jsx)(AnimatePresence, { mode: "sync", children: assets.length >= 4 && (0, import_jsx_runtime46.jsx)(motion.div, __spreadProps2(__spreadValues2({}, contentMotionProps), { children: (0, import_jsx_runtime46.jsx)(
      SearchInput2,
      {
        placeholder: "Search for an asset",
        value: searchStr,
        onCpslInput: (e) => {
          setSearchStr(e.detail.value);
        },
        children: (0, import_jsx_runtime46.jsx)(CpslIcon, { icon: "search", slot: "start" })
      }
    ) })) }),
    (0, import_jsx_runtime46.jsx)(GradientScroll, { height: "calc(100% - 56px)", gap: "8px", children: (0, import_jsx_runtime46.jsx)(AssetList, { children: (0, import_jsx_runtime46.jsx)(AnimatePresence, { mode: "sync", children: assets.filter((asset) => {
      return searchStr === "" || getAssetCode(asset).toLowerCase().startsWith(searchStr.toLowerCase()) || getAssetName(asset).toLowerCase().startsWith(searchStr.toLowerCase());
    }).map((asset) => (0, import_jsx_runtime46.jsx)(
      motion.li,
      {
        style: { width: "100%" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        children: (0, import_jsx_runtime46.jsxs)(AssetButton2, { fullWidth: true, variant: "secondary", onClick: () => onSelect(asset), children: [
          (0, import_jsx_runtime46.jsx)(AssetIcon, { asset, size: "48px" }),
          (0, import_jsx_runtime46.jsxs)(Info2, { children: [
            (0, import_jsx_runtime46.jsx)(Code2, { color: "contrast", variant: "bodyL", children: ON_RAMP_ASSETS[asset].code }),
            (0, import_jsx_runtime46.jsx)(Name3, { color: "contrast", variant: "bodyS", children: ON_RAMP_ASSETS[asset].name })
          ] }),
          (assetMetadata == null ? void 0 : assetMetadata[asset]) && (0, import_jsx_runtime46.jsx)(CpslText, { variant: "bodyM", children: formatCurrency(assetMetadata[asset].price) })
        ] }, asset)
      },
      asset
    )) }) }) })
  ] });
}
var AssetList = safeStyled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  list-style: none;
  padding-inline-start: 0;
  margin: 0;
  padding: 0px;
`;
var AssetButton2 = safeStyled(CpslButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  --button-secondary-background-color: var(--cpsl-color-background-8);
  --button-secondary-border-color: var(--cpsl-color-background-8);
  --button-secondary-hover-background-color: var(--cpsl-color-background-16);
  --button-secondary-hover-border-color: var(--cpsl-color-background-16);
`;
var Info2 = safeStyled(CpslCol)`
    text-align: left;
  `;
var Code2 = CpslText;
var Name3 = CpslText;
var SearchInput2 = safeStyled(CpslInput)`
  --container-background-color: var(--cpsl-color-background-8);
  --input-background-color: transparent;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AddFunds/AddFundsSettings.js
function NetworkPill({
  network,
  gap = "4px",
  slot,
  start,
  fix = false
}) {
  return (0, import_jsx_runtime47.jsxs)(CpslRow, __spreadProps2(__spreadValues2({ gap }, slot ? { slot } : {}), { children: [
    start,
    (0, import_jsx_runtime47.jsx)(NetworkIcon, { network, size: "24px" }),
    (0, import_jsx_runtime47.jsx)(CpslText, { variant: "bodyXS", color: "contrast", style: fix ? { marginRight: "8px" } : void 0, children: getNetworkName(network) })
  ] }));
}
function AssetPill({ asset, gap = "4px", slot, fix }) {
  if (!asset) {
    return null;
  }
  return (0, import_jsx_runtime47.jsxs)(CpslRow, __spreadProps2(__spreadValues2({ gap }, slot ? { slot } : {}), { children: [
    (0, import_jsx_runtime47.jsx)(AssetIcon, { asset, size: "24px" }),
    (0, import_jsx_runtime47.jsx)(CpslText, { variant: "bodyXS", color: "contrast", style: fix ? { marginRight: "8px" } : void 0, children: getAssetCode(asset) })
  ] }));
}
var NetworkLabel = (0, import_jsx_runtime47.jsx)(CpslText, { variant: "bodyXS", color: "secondary", style: { margin: "0 8px" }, children: "Network" });
function AddFundsSettings() {
  const isPresent2 = useIsPresent();
  const hideWallets = useStore2((state2) => {
    var _a;
    return (_a = state2.modalConfig) == null ? void 0 : _a.hideWallets;
  });
  const setOnRampStep = useModalStore((state2) => state2.setOnRampStep);
  const {
    assets,
    networks,
    asset,
    setAsset,
    network,
    setNetwork,
    fiatQuantity,
    setFiatQuantity,
    onRampConfig,
    activeWallet,
    isProviderAllowed,
    tab
  } = useAddFunds();
  const [value, setValue] = (0, import_react82.useState)(parseFloat(fiatQuantity || "25.00").toFixed(2));
  const narrowedNetworks = (0, import_react82.useMemo)(() => {
    return !asset ? networks : getOnRampNetworks(onRampConfig.assetInfo, {
      walletType: activeWallet == null ? void 0 : activeWallet.type,
      allowed: onRampConfig.allowedAssets ? Object.entries(onRampConfig.allowedAssets).filter(([_, value2]) => value2 === true || value2.includes(asset)).map(([key]) => key) : void 0,
      assets: [asset],
      providers: onRampConfig.providers,
      action: tab === EnabledFlow.BUY ? OnRampPurchaseType.BUY : OnRampPurchaseType.SELL
    });
  }, [networks, network, asset, activeWallet == null ? void 0 : activeWallet.type, onRampConfig.providers, tab]);
  const content = (0, import_react82.useMemo)(() => {
    if (!!asset && Object.values(isProviderAllowed).every((v) => !v) || assets.length === 0) {
      return (0, import_jsx_runtime47.jsx)(Container7, __spreadProps2(__spreadValues2({}, contentMotionProps), { isPresent: isPresent2, children: (0, import_jsx_runtime47.jsxs)(NoProviders2, { isHidden: Object.values(isProviderAllowed).some((v) => !!v), variant: "bodyM", children: [
        "No providers are available for this ",
        hideWallets ? "account" : "wallet"
      ] }) }), "noProviders");
    }
    return !!asset ? (0, import_jsx_runtime47.jsx)(Container7, __spreadProps2(__spreadValues2({}, contentMotionProps), { isPresent: isPresent2, children: assets.length > 0 && (0, import_jsx_runtime47.jsxs)(import_jsx_runtime47.Fragment, { children: [
      (0, import_jsx_runtime47.jsxs)(CpslRow, { children: [
        (0, import_jsx_runtime47.jsx)(HeaderSelectContainer, { children: assets.length > 1 ? (0, import_jsx_runtime47.jsxs)(
          HeaderSelect,
          {
            selectedValue: asset,
            onCpslSelectValueChange: (e) => {
              setAsset(e.detail);
            },
            showFormattedSelectedItem: true,
            placeholder: "Choose asset...",
            anchorElId: "inputContainer",
            $width: 160,
            autoWidth: true,
            selectedItemVariant: "bodyXS",
            children: [
              asset && (0, import_jsx_runtime47.jsx)(AssetPill, { asset, slot: "selected-item" }),
              assets.map((a) => (0, import_jsx_runtime47.jsx)(HeaderSelectItem, { slot: "items", value: a, children: (0, import_jsx_runtime47.jsx)(AssetPill, { gap: "8px", asset: a }) }, a))
            ]
          }
        ) : (0, import_jsx_runtime47.jsx)(AssetPill, { asset, fix: true }) }),
        (0, import_jsx_runtime47.jsx)(HeaderSelectContainer, { children: narrowedNetworks.length > 1 ? (0, import_jsx_runtime47.jsxs)(
          HeaderSelect,
          {
            selectedValue: network,
            onCpslSelectValueChange: (e) => {
              setNetwork(e.detail);
            },
            showFormattedSelectedItem: true,
            placeholder: "Choose network...",
            $width: 160,
            autoWidth: true,
            selectedItemVariant: "bodyXS",
            children: [
              network && (0, import_jsx_runtime47.jsx)(NetworkPill, { network, start: NetworkLabel, slot: "selected-item" }),
              narrowedNetworks.map((n) => (0, import_jsx_runtime47.jsx)(HeaderSelectItem, { slot: "items", value: n, children: (0, import_jsx_runtime47.jsx)(NetworkPill, { gap: "8px", network: n }) }, n))
            ]
          }
        ) : network ? (0, import_jsx_runtime47.jsx)(NetworkPill, { network, start: NetworkLabel, fix: true }) : null })
      ] }),
      (0, import_jsx_runtime47.jsxs)(CpslRow, { col: true, gap: "16px", children: [
        (0, import_jsx_runtime47.jsx)(QuantityInput, { value, onChange: setValue, symbol: "$" }),
        (0, import_jsx_runtime47.jsx)(CpslRow, { style: { width: "100%" }, children: ["25", "50", "100"].map((quantity) => {
          return (0, import_jsx_runtime47.jsxs)(PresetButton, { fullWidth: true, variant: "secondary", onClick: () => setValue(`${quantity}.00`), children: [
            "$",
            quantity
          ] }, quantity);
        }) })
      ] }),
      (0, import_jsx_runtime47.jsxs)(
        CpslButton,
        {
          fullWidth: true,
          disabled: value === "",
          onClick: () => {
            setFiatQuantity(value != null ? value : void 0);
            setOnRampStep(OnRampStep.PROVIDER);
          },
          children: [
            "Continue",
            (0, import_jsx_runtime47.jsx)(CpslIcon, { icon: "arrow" })
          ]
        }
      )
    ] }) }), "quantity") : (0, import_jsx_runtime47.jsx)(AssetContainer, __spreadProps2(__spreadValues2({}, contentMotionProps), { isPresent: isPresent2, children: (0, import_jsx_runtime47.jsx)(AddFundsAsset, {}) }), "asset");
  }, [asset, network, assets, narrowedNetworks, isProviderAllowed, isPresent2, value]);
  (0, import_react82.useEffect)(() => {
    if (!network || !narrowedNetworks.includes(network)) {
      setNetwork(narrowedNetworks[0]);
    }
  }, [narrowedNetworks, network, tab]);
  (0, import_react82.useEffect)(() => {
    if (!!asset && !assets.includes(asset)) {
      setAsset(assets[0]);
    }
  }, [assets, asset, tab]);
  return (0, import_jsx_runtime47.jsx)(AnimatePresence, { mode: "wait", children: content });
}
var Container7 = safeStyled(motion.div)`
  width: 100%;
  height: 100%;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  position: relative;
  height: 320px;
  ${({ isPresent: isPresent2 }) => isPresent2 ? "transform: none !important;" : ""};

  & > * {
    width: 100%;
  }
`;
var AssetContainer = safeStyled(Container7)`
  gap: 8px;
`;
var PresetButton = safeStyled(CpslButton)`
  --button-color: var(--cpsl-color-text-contrast);
  --button-font-size: 24px;
  --button-secondary-background-color: var(--cpsl-color-background-8);
  --button-secondary-border-color: var(--cpsl-color-background-8);
  --button-secondary-hover-color: var(--cpsl-color-text-contrast);
  --button-secondary-hover-background-color: var(--cpsl-color-background-16);
  --button-secondary-hover-border-color: var(--cpsl-color-background-16);
  flex: 1;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/WalletSelectOld/WalletSelectOld.js
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);
var import_react84 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AuthInput/hooks/useDropdownPosition.js
var import_react83 = __toESM(require_react(), 1);
var useDropdownPosition = (inputRef) => {
  const [dropdownMaxHeight, setDropdownMaxHeight] = (0, import_react83.useState)();
  const [dropdownWidth, setDropdownWidth] = (0, import_react83.useState)();
  const [mobileAnchor, setMobileAnchor] = (0, import_react83.useState)();
  const resize2 = () => {
    var _a, _b, _c, _d;
    if (typeof window !== "undefined") {
      const newMaxHeight = Math.max(
        window.innerHeight - ((_b = (_a = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _a.getBoundingClientRect().bottom) != null ? _b : 0) - 20,
        window.innerHeight * 0.25
      );
      setDropdownMaxHeight(newMaxHeight);
      setDropdownWidth((_c = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _c.getBoundingClientRect().width);
      setMobileAnchor((_d = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _d.getBoundingClientRect().height);
    }
  };
  if (inputRef.current && !dropdownMaxHeight) {
    resize2();
  }
  (0, import_react83.useEffect)(() => {
    typeof window !== "undefined" && window.addEventListener("resize", resize2);
    return () => {
      typeof window !== "undefined" && window.removeEventListener("resize", resize2);
    };
  }, []);
  return { dropdownMaxHeight, dropdownWidth, mobileAnchor, resize: resize2 };
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/WalletSelectOld/WalletSelectOld.js
var getValue2 = (id3, type) => {
  return id3 && type ? `${id3}~${type}` : void 0;
};
var Wallet = ({
  wallet,
  withCopy,
  slot,
  withIcon
}) => {
  const para = useInternalClient();
  const [isCopied, copy] = useCopyToClipboard();
  return (0, import_jsx_runtime48.jsxs)(WalletContainer, { slot, style: { flex: "1" }, children: [
    withIcon && (0, import_jsx_runtime48.jsx)(
      WalletTypeIcon2,
      {
        externalWallet: wallet.isExternal ? wallet.externalProviderId : void 0,
        walletType: wallet.type,
        size: "32px",
        inset: "6px"
      }
    ),
    (0, import_jsx_runtime48.jsx)(CpslText, { variant: "bodyM", color: "contrast", style: { flex: "1" }, children: para.getDisplayAddress(wallet.id, { truncate: true, addressType: wallet.type }) }),
    withCopy && (0, import_jsx_runtime48.jsx)(
      CopyButton,
      {
        id: "ignore-click",
        size: "small",
        variant: "ghost",
        onClick: (e) => {
          e.stopPropagation();
          e.preventDefault();
          copy(para.getDisplayAddress(wallet.id, { addressType: wallet.type }));
        },
        children: (0, import_jsx_runtime48.jsx)(CpslIcon, { id: "ignore-click", slot: "start", icon: isCopied ? "check" : "copy" })
      }
    )
  ] });
};
var WalletSelectOld = ({
  style,
  noTitle,
  types,
  isEmbeddedOnly
}) => {
  const containerRef = (0, import_react84.useRef)(null);
  const { dropdownMaxHeight, dropdownWidth, mobileAnchor, resize: resize2 } = useDropdownPosition(containerRef);
  const { setSelectedWallet } = useWalletState();
  const { data: activeWallet } = useWallet();
  const { embedded } = useAccount();
  const availableWallets = (0, import_react84.useMemo)(() => {
    var _a;
    return (_a = embedded == null ? void 0 : embedded.wallets) == null ? void 0 : _a.filter((wallet) => !isEmbeddedOnly || !wallet.isExternal);
  }, [embedded, isEmbeddedOnly]);
  const isMultiWallet = availableWallets && availableWallets.length > 1;
  const ActiveWalletNode = activeWallet ? (0, import_jsx_runtime48.jsx)(Wallet, { withCopy: true, wallet: activeWallet, slot: "selected-item", withIcon: true }) : null;
  (0, import_react84.useEffect)(() => {
    if (dropdownMaxHeight && (activeWallet == null ? void 0 : activeWallet.address)) {
      resize2();
    }
  }, [activeWallet, availableWallets, dropdownMaxHeight]);
  return (0, import_jsx_runtime48.jsxs)(Container8, { style, children: [
    isMultiWallet && !noTitle && (0, import_jsx_runtime48.jsx)(CpslText, { variant: "bodyM", color: "secondary", weight: "semiBold", children: "Select Wallet" }),
    (0, import_jsx_runtime48.jsx)(SelectContainer, { ref: containerRef, id: "addressInputContainerOld", style: { width: "100%" }, children: (0, import_jsx_runtime48.jsxs)(
      Select,
      {
        selectedValue: getValue2(activeWallet == null ? void 0 : activeWallet.id, activeWallet == null ? void 0 : activeWallet.type),
        onCpslSelectValueChange: (e) => {
          const [id3, type] = e.detail.split("~");
          setSelectedWallet({ id: id3, type });
        },
        showFormattedSelectedItem: true,
        placeholder: "Choose wallet...",
        anchorElId: "addressInputContainerOld",
        dropdownMaxHeight,
        $width: dropdownWidth != null ? dropdownWidth : 0,
        $top: (mobileAnchor != null ? mobileAnchor : 0) + 220 + 1,
        selectedItemVariant: "bodyXS",
        icon: isMultiWallet ? "chevronUp" : null,
        disabled: !isMultiWallet,
        style: { width: "100%" },
        children: [
          activeWallet && ActiveWalletNode,
          (availableWallets || []).filter((wallet) => !types || !wallet.type || types.includes(wallet.type)).map((wallet) => {
            const key = getValue2(wallet.id, wallet.type);
            return (0, import_jsx_runtime48.jsx)(SelectItem, { slot: "items", value: key, children: (0, import_jsx_runtime48.jsx)(Wallet, { wallet, withIcon: true }) }, key);
          })
        ]
      }
    ) })
  ] });
};
var Container8 = safeStyled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;
var WalletContainer = safeStyled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
var Select = safeStyled(CpslSelect)`
  --icon-width: 32px;
  --icon-height: 32px;
  --container-border-color: var(--cpsl-color-background-16);
  --container-background-color-disabled: var(--container-background-color);
  width: 286px;
  position: relative;

  &::part(selected-text) {
    white-space: nowrap;
  }

  &::part(dropdown) {
    min-width: ${({ $width }) => `${$width - 2}px`};
  } 

  &::part(popover) {
      /* Have to adjust the top of the popover here since we're using a transform on the modal which causes fixed position items to not be relative to the viewport */
      @media (max-width: ${MOBILE_SIZE}px) {
        top: ${({ $top }) => $top ? `${$top}px` : "0px"};
        bottom: 16px;
      }
      cpsl-auth-modal.force-mobile-media & {
        top: ${({ $top }) => $top ? `${$top}px` : "0px"};
        bottom: 16px;
      }
  }
  

  &::part(icon) {
    --icon-color: var(--cpsl-color-text-primary);
  }
`;
var SelectItem = safeStyled(CpslSelectItem)`
  --outer-container-padding-start: 0px;
  --outer-container-padding-end: 0px;
  --outer-container-padding-top: 0px;
  --outer-container-padding-bottom: 0px;
  --container-padding-start: 12px;
  --container-padding-end: 12px;
  --container-padding-top: 8px;
  --container-padding-bottom: 8px;
`;
var SelectContainer = safeStyled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: var(--cpsl-border-radius-tile-button);
  background-color: var(--cpsl-color-background-4);
`;
var WalletTypeIcon2 = safeStyled(WalletTypeIcon)`
  --border: 1px solid var(--cpsl-color-background-8);
  --background: var(--cpsl-color-background-0);
  --border-radius: 4px;
`;
var CopyButton = safeStyled(CpslButton)`
  cpsl-icon {
    --height: 24px;
    --width: 24px;
  }
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AddFunds/AddFunds.js
var AddFunds = () => {
  var _a;
  const step = useModalStore((state2) => state2.step);
  const onRampConfig = useModalStore((state2) => state2.onRampConfig);
  const onRampStep = useModalStore((state2) => state2.onRampStep);
  const storedTab = useModalStore((state2) => state2.accountAddFundTab);
  const setModalStep = useModalStore((state2) => state2.setStep);
  const setOnRampPurchase = useModalStore((state2) => state2.setOnRampPurchase);
  const { data: activeWallet } = useWallet();
  const { embedded } = useAccount();
  const isGuestMode = (embedded == null ? void 0 : embedded.isConnected) && embedded.isGuestMode;
  const tabs = TABS.filter(
    ([enabledFlow, key]) => !!(onRampConfig == null ? void 0 : onRampConfig[key]) && (!isGuestMode || enabledFlow === EnabledFlow.RECEIVE)
  );
  const tab = storedTab != null ? storedTab : (_a = tabs[0]) == null ? void 0 : _a[0];
  const isMultiFlow = (tab === EnabledFlow.BUY || tab === EnabledFlow.RECEIVE) && (onRampConfig == null ? void 0 : onRampConfig.isBuyEnabled) && (onRampConfig == null ? void 0 : onRampConfig.isReceiveEnabled);
  const onSetTab = (event) => {
    setModalStep(getAddFundsStep(event.detail.tab));
  };
  const Content4 = (0, import_react85.useMemo)(() => {
    switch (tab) {
      case EnabledFlow.BUY:
      case EnabledFlow.WITHDRAW: {
        switch (onRampStep) {
          case OnRampStep.SETTINGS:
            return (0, import_jsx_runtime49.jsx)(AddFundsSettings, {});
          case OnRampStep.PROVIDER:
            return (0, import_jsx_runtime49.jsx)(AddFundsProvider, {});
        }
      }
      default:
        return (0, import_jsx_runtime49.jsx)(AddFundsReceive, {});
    }
  }, [onRampStep, tab]);
  (0, import_react85.useEffect)(() => {
    setOnRampPurchase(void 0);
  }, []);
  if (!onRampConfig || !activeWallet || !tab) {
    return (0, import_jsx_runtime49.jsx)(SpinnerContainer3, { children: (0, import_jsx_runtime49.jsx)(CpslSpinner, {}) });
  }
  return (0, import_jsx_runtime49.jsxs)(StepContainer, { children: [
    isMultiFlow && (0, import_jsx_runtime49.jsx)(InnerStepContainer, { children: (0, import_jsx_runtime49.jsx)(CpslTabs, { selectedTab: tab, onCpslTabsChanged: onSetTab, children: tabs.filter(([enabledFlow]) => enabledFlow !== EnabledFlow.WITHDRAW).map(([tab2, _, icon, title]) => (0, import_jsx_runtime49.jsxs)(CpslTab, { tab: tab2, children: [
      (0, import_jsx_runtime49.jsx)(CpslIcon, { slot: "start", icon }),
      title
    ] }, tab2)) }) }),
    (step === ModalStep.ADD_FUNDS_RECEIVE || (embedded == null ? void 0 : embedded.wallets) && embedded.wallets.length > 1) && (0, import_jsx_runtime49.jsx)(WalletSelectOld, {}),
    (0, import_jsx_runtime49.jsx)(AnimatePresence, { mode: "wait", children: (0, import_jsx_runtime49.jsx)(AddFundsContextProvider, { "data-testid": "add-funds", tab, children: Content4 }) })
  ] });
};
var SpinnerContainer3 = safeStyled(StepContainer)`
  margin: 50% 0;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AddFunds/AddFundsAwaiting.js
var import_react86 = __toESM(require_react(), 1);
var STEPS = {
  CANCELLED: ModalStep.ADD_FUNDS_FAILURE,
  FINISHED: ModalStep.ADD_FUNDS_SUCCESS
};
var AddFundsAwaiting = () => {
  const setStep = useModalStore((state2) => state2.setStep);
  const onRampPurchase = useModalStore((state2) => state2.onRampPurchase);
  (0, import_react86.useEffect)(() => {
    let timeoutId;
    if ((onRampPurchase == null ? void 0 : onRampPurchase.status) && ["CANCELLED", "FINISHED"].includes(onRampPurchase.status)) {
      timeoutId = setTimeout(() => {
        var _a;
        setStep(STEPS[(_a = onRampPurchase.status) != null ? _a : ""]);
      }, 5e3);
    }
    return () => clearTimeout(timeoutId);
  }, [onRampPurchase == null ? void 0 : onRampPurchase.status]);
  return null;
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AddFunds/AddFundsDone.js
var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
var import_react87 = __toESM(require_react(), 1);
var AddFundsDone = ({ isSuccess, onClose }) => {
  var _a;
  const hideWallets = useStore2((state2) => {
    var _a2;
    return (_a2 = state2.modalConfig) == null ? void 0 : _a2.hideWallets;
  });
  const setStep = useModalStore((state2) => state2.setStep);
  const onRampPurchase = useModalStore((state2) => state2.onRampPurchase);
  const accountAddFundTab = useModalStore((state2) => state2.accountAddFundTab);
  const formatter = (0, import_react87.useMemo)(() => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: (onRampPurchase == null ? void 0 : onRampPurchase.fiat) || "USD"
    });
  }, [onRampPurchase == null ? void 0 : onRampPurchase.fiat]);
  const heading = isSuccess ? "Transaction Successful" : "Something Went Wrong";
  const text = isSuccess ? `${formatter.format(parseFloat((_a = onRampPurchase == null ? void 0 : onRampPurchase.fiatQuantity) != null ? _a : "0"))} is now available in your ${hideWallets ? "account" : "wallet"}.` : `No funds were added to your ${hideWallets ? "account" : "wallet"}.`;
  const buttonText = isSuccess ? "Done" : "Try Again";
  return (0, import_jsx_runtime50.jsxs)(StepContainer, { children: [
    (0, import_jsx_runtime50.jsx)(HeroIcon, { icon: "checkCircleFilled" }),
    (0, import_jsx_runtime50.jsxs)(InnerStepContainer, { children: [
      (0, import_jsx_runtime50.jsx)(Heading, { children: heading }),
      (0, import_jsx_runtime50.jsx)(CpslText, { variant: "bodyS", color: "secondary", children: text })
    ] }),
    (0, import_jsx_runtime50.jsx)(
      CpslButton,
      {
        fullWidth: true,
        onClick: () => {
          isSuccess ? onClose() : setStep(getAddFundsStep(accountAddFundTab != null ? accountAddFundTab : EnabledFlow.BUY));
        },
        children: buttonText
      }
    )
  ] });
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/OAuth/FarcasterOAuthStep.js
var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/hooks/useFarcasterLogin.js
var import_react88 = __toESM(require_react(), 1);
var useFarcasterLogin = ({
  isActive = false
} = {}) => {
  const para = useInternalClient();
  const refs = useModalStore((state2) => state2.refs);
  const { verifyFarcasterStatus, verifyFarcaster: verifyFarcaster2 } = useAuthActions();
  const [url, setUrl] = (0, import_react88.useState)();
  const [isLoaded, setIsLoaded] = (0, import_react88.useState)(false);
  const [msgStatus, setMsgStatus] = (0, import_react88.useState)("idle");
  const status = msgStatus === "success" ? verifyFarcasterStatus : msgStatus;
  (0, import_react88.useEffect)(() => {
    const setup = () => __async(void 0, null, function* () {
      if (!url) {
        yield para.logout();
        yield para.touchSession(true);
        para.constructPortalUrl("loginFarcaster").then(setUrl);
      }
    });
    if (isActive) {
      setup();
    }
  }, [isActive, url]);
  (0, import_react88.useEffect)(() => {
    if (typeof window === "undefined") return;
    const updateState = (event) => __async(void 0, null, function* () {
      var _a, _b;
      if (!validatePortalOrigin(event, para.ctx)) {
        return;
      }
      switch (event.data.type) {
        case "FARCASTER_LOGIN":
          setMsgStatus("pending");
          break;
        case "FARCASTER_FAILED":
          setMsgStatus("error");
          break;
        case "FARCASTER_SUCCESS":
          setMsgStatus("success");
          if (!!event.data.payload) {
            const authObject = event.data.payload;
            try {
              yield verifyFarcaster2(authObject);
            } catch (e) {
              (_b = (_a = refs.telegramIFrame.current) == null ? void 0 : _a.contentWindow) == null ? void 0 : _b.postMessage({ type: "FARCASTER_RETRY" }, "*");
            }
          }
          break;
      }
    });
    if (isActive) {
      window == null ? void 0 : window.addEventListener("message", updateState, false);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("message", updateState, false);
      }
    };
  }, [isActive]);
  return {
    url,
    isLoaded,
    setIsLoaded,
    status
  };
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/OAuth/FarcasterOAuthStep.js
var import_react89 = __toESM(require_react(), 1);
function FarcasterOAuthStep() {
  const { url, isLoaded, setIsLoaded } = useFarcasterLogin({
    isActive: true
  });
  const para = useInternalClient();
  const [height, setHeight] = (0, import_react89.useState)(0);
  (0, import_react89.useEffect)(() => {
    const handleMessage = (event) => {
      if (!url) {
        return;
      }
      if (!validatePortalOrigin(event, para.ctx)) {
        return;
      }
      if (event.data) {
        if (event.data.type === "HEIGHT") {
          setHeight(event.data.height);
        }
      }
    };
    typeof window !== "undefined" && window.addEventListener("message", handleMessage);
    return () => {
      typeof window !== "undefined" && window.removeEventListener("message", handleMessage);
    };
  }, [url]);
  return (0, import_jsx_runtime51.jsxs)(Container9, { children: [
    url && (0, import_jsx_runtime51.jsx)(IFrame, { style: { display: isLoaded ? "block" : "none", height }, src: url, onLoad: () => setIsLoaded(true) }),
    (!url || !isLoaded) && (0, import_jsx_runtime51.jsx)(CpslSpinner, {})
  ] });
}
var Container9 = safeStyled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
var IFrame = safeStyled.iframe`
  width: 100%;
  border: none;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Header/Header.js
var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Header/hooks/useStepTitle.js
var import_react90 = __toESM(require_react(), 1);
var signUpOrLogInTitle = "Sign Up or Login";
var connectWalletTitle = "Connect Wallet";
var useStepTitle = () => {
  var _a, _b;
  const logo = useStore2((state2) => {
    var _a2;
    return (_a2 = state2.modalConfig) == null ? void 0 : _a2.logo;
  });
  const hideWallets = useStore2((state2) => {
    var _a2;
    return (_a2 = state2.modalConfig) == null ? void 0 : _a2.hideWallets;
  });
  const isLogin = useModalStore((state2) => state2.isLogin());
  const currentStep = useModalStore((state2) => state2.step);
  const authLayout = useModalStore((state2) => state2.authLayout) || [];
  const profileWallet = useModalStore((state2) => state2.profileWallet);
  const { data: activeWallet } = useWallet();
  const [isAuthFirst, isAuthCondensed, isExternalFirst, isExternalCondensed, isBothCondensed] = [
    (_a = authLayout[0]) == null ? void 0 : _a.includes("AUTH"),
    authLayout.includes("AUTH:CONDENSED"),
    (_b = authLayout[0]) == null ? void 0 : _b.includes("EXTERNAL"),
    authLayout.includes("EXTERNAL:CONDENSED"),
    authLayout.includes("AUTH:CONDENSED") && authLayout.includes("EXTERNAL:CONDENSED")
  ];
  const authStepTitle = isBothCondensed ? null : isAuthFirst && !isAuthCondensed ? signUpOrLogInTitle : isExternalFirst && !isExternalCondensed ? connectWalletTitle : "";
  const { chainId } = useExternalWallets();
  const { isEnabled: isAccountLinkingEnabled } = useAccountLinking();
  const titles = (0, import_react90.useMemo)(
    () => {
      var _a2;
      return {
        [ModalStep.AUTH_MAIN]: authStepTitle,
        [ModalStep.AUTH_MORE]: signUpOrLogInTitle,
        [ModalStep.AUTH_GUEST_SIGNUP]: "Complete Account Setup",
        [ModalStep.EX_WALLET_MORE]: connectWalletTitle,
        [ModalStep.ADD_EX_WALLET_MORE]: "Add Wallet",
        [ModalStep.VERIFICATIONS]: "Sign Up",
        [ModalStep.AWAITING_OAUTH]: signUpOrLogInTitle,
        [ModalStep.FARCASTER_OAUTH]: signUpOrLogInTitle,
        [ModalStep.TELEGRAM_OAUTH]: signUpOrLogInTitle,
        [ModalStep.BIOMETRIC_CREATION]: "Sign Up",
        [ModalStep.PASSWORD_CREATION]: "Sign Up",
        [ModalStep.AWAITING_BIOMETRIC_CREATION]: "Sign Up",
        [ModalStep.AWAITING_WALLET_CREATION]: isLogin ? "Login" : "Sign Up",
        [ModalStep.AWAITING_PASSWORD_CREATION]: "Sign Up",
        [ModalStep.WALLET_CREATION_DONE]: hideWallets ? "Account Created" : "Wallet Created",
        [ModalStep.SECRET]: isLogin ? "Login" : "Sign Up",
        [ModalStep.BIOMETRIC_LOGIN]: "Login",
        [ModalStep.EMBEDDED_PASSWORD_LOGIN]: "Login",
        [ModalStep.AWAITING_PASSWORD_LOGIN]: "Login",
        [ModalStep.AWAITING_BIOMETRIC_LOGIN]: "Login",
        [ModalStep.LOGIN_DONE]: "",
        [ModalStep.SETUP_2FA]: "2FA",
        [ModalStep.VERIFY_2FA]: "2FA",
        [ModalStep.TWO_FACTOR_DONE]: "2FA",
        [ModalStep.ADD_FUNDS_BUY]: "Add Funds",
        [ModalStep.ADD_FUNDS_RECEIVE]: "Add Funds",
        [ModalStep.ADD_FUNDS_WITHDRAW]: "Withdraw",
        [ModalStep.ADD_FUNDS_AWAITING]: "Add Funds",
        [ModalStep.ADD_FUNDS_SUCCESS]: "Add Funds",
        [ModalStep.ADD_FUNDS_FAILURE]: "Add Funds",
        [ModalStep.ACCOUNT_MAIN]: "",
        [ModalStep.CHAIN_SWITCH]: "",
        [ModalStep.ACCOUNT_PROFILE]: isAccountLinkingEnabled ? "Profile" : "Settings",
        [ModalStep.ACCOUNT_PROFILE_LIST]: "Link Account",
        [ModalStep.ACCOUNT_PROFILE_ADD]: "Link Account",
        [ModalStep.ACCOUNT_PROFILE_REMOVE]: "Unlink Account",
        [ModalStep.EX_WALLET_SELECTED]: "Connect Wallet",
        [ModalStep.EX_WALLET_NETWORK_SELECT]: "Select Network",
        [ModalStep.ADD_EX_WALLET_NETWORK_SELECT]: "Select Network",
        [ModalStep.LINK_EX_WALLET_NETWORK_SELECT]: "Select Network",
        [ModalStep.ADD_EX_WALLET_SELECTED]: "Add Wallet",
        [ModalStep.EXTERNAL_WALLET_VERIFICATION]: "Verify Wallet",
        [ModalStep.AWAITING_ACCOUNT]: isLogin ? "Login" : "Sign Up",
        [ModalStep.ACCOUNT_WALLET]: (_a2 = profileWallet == null ? void 0 : profileWallet.displayName) != null ? _a2 : "Wallet Settings",
        [ModalStep.ACCOUNT_SEND]: "Send",
        [ModalStep.ACCOUNT_SEND_ASSET]: "Send",
        [ModalStep.ACCOUNT_SEND_NETWORK]: "Send"
      };
    },
    [isLogin, chainId, hideWallets, authStepTitle]
  );
  const title = (0, import_react90.useMemo)(() => {
    var _a2;
    if (((_a2 = titles[currentStep]) == null ? void 0 : _a2.length) > 0) {
      return titles[currentStep];
    }
    return null;
  }, [currentStep, titles]);
  const isControls = (0, import_react90.useMemo)(() => {
    return (activeWallet == null ? void 0 : activeWallet.isExternal) && (activeWallet == null ? void 0 : activeWallet.type) === "EVM" && [ModalStep.ACCOUNT_MAIN, ModalStep.CHAIN_SWITCH].includes(currentStep);
  }, [activeWallet, currentStep]);
  const isTitleDisplayed = (0, import_react90.useMemo)(() => {
    return !isControls && (currentStep !== ModalStep.AUTH_MAIN || !logo);
  }, [isControls, currentStep, logo]);
  return { title, isTitleDisplayed, isControls };
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Header/Header.js
var import_react91 = __toESM(require_react(), 1);
var StepTitle = () => {
  const para = useInternalClient();
  const currentStep = useModalStore((state2) => state2.step);
  const { title, isTitleDisplayed } = useStepTitle();
  const { isConnected, connectionType } = useAccount();
  const content = (0, import_react91.useMemo)(() => {
    if (!isTitleDisplayed) {
      return null;
    }
    if ((para == null ? void 0 : para.authInfo) && connectionType !== "external" && currentStep === ModalStep.ACCOUNT_MAIN) {
      const { name, icon, src } = getAuthDisplay(para.authInfo);
      return (0, import_jsx_runtime52.jsxs)(AuthDisplay, { children: [
        (0, import_jsx_runtime52.jsx)(CpslIcon, { src, icon, size: "14px", rounded: !!src }),
        (0, import_jsx_runtime52.jsx)(CpslText, { variant: "bodyXS", color: "contrast", weight: "medium", children: name })
      ] });
    }
    return (0, import_jsx_runtime52.jsx)(CenteredText, { weight: "semiBold", color: "secondary", children: title });
  }, [isTitleDisplayed, para, currentStep, isConnected, connectionType, title]);
  return (0, import_jsx_runtime52.jsx)("div", { style: { height: "100%", width: "100%" }, children: content });
};
var Header = () => {
  const { isControls } = useStepTitle();
  const stepDirection = useModalStore((state2) => state2.stepDirection);
  const currentStep = useModalStore((state2) => state2.step);
  return (0, import_jsx_runtime52.jsx)(AnimatePresence, { mode: "popLayout", initial: false, custom: stepDirection, children: (0, import_jsx_runtime52.jsx)(
    Container10,
    {
      isVisible: !isControls,
      custom: stepDirection,
      variants: BODY_MOTION_VARIANTS,
      initial: "enter",
      animate: "center",
      exit: "exit",
      transition: BODY_TRANSITION,
      slot: "header",
      id: "header",
      children: (0, import_jsx_runtime52.jsx)(StepTitle, {})
    },
    ["ADD_FUNDS_BUY", "ADD_FUNDS_RECEIVE", "ADD_FUNDS_WITHDRAW"].includes(currentStep) ? "ADD_FUNDS" : currentStep
  ) });
};
var Container10 = safeStyled(motion.div)`
  margin: 0 16px;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
  height: 24px;
  visibility: ${({ isVisible }) => isVisible ? "visible" : "hidden"};
`;
var AuthDisplay = safeStyled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100%;
  height: 100%;

  cpsl-icon {
    --icon-color: var(--cpsl-color-text-contrast);
  }
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AuthMainStep/AuthMainStep.js
var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AuthMainStep/AuthMainStepContent.js
var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);
var import_react95 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/ExternalWallets/ExternalWallets.js
var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);
var import_react92 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/utils/authLayoutHelpers.js
var hasExternalWallet = (authLayout) => authLayout.find((layout2) => layout2.includes("EXTERNAL"));
var hasEmbeddedAuth = (authLayout) => authLayout.find((layout2) => layout2.includes("AUTH"));

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/ExternalWallets/ExternalWallets.js
var HAS_MORE_LENGTH = 3;
var ExternalWallets = ({ isAddingWallets = false }) => {
  const { wallets: allWallets, connectExternalWallet, addAdditionalExternalWallet } = useExternalWallets();
  const setSelectedExternalWallet = useModalStore((state2) => state2.setSelectedExternalWallet);
  const setStep = useModalStore((state2) => state2.setStep);
  const showAll = useModalStore(
    (state2) => state2.step === ModalStep.EX_WALLET_MORE || state2.step === ModalStep.ADD_EX_WALLET_MORE
  );
  const authLayout = useModalStore((state2) => state2.authLayout);
  const [search, setSearch] = (0, import_react92.useState)("");
  const dedupedWallets = Array.from(new Set(allWallets.map((wallet) => wallet.id))).map((id3) => {
    return allWallets.find((wallet) => wallet.id === id3);
  }).filter((wallet) => wallet.internalId !== "FARCASTER");
  const hasMore = dedupedWallets.length > HAS_MORE_LENGTH;
  const walletsToShow = showAll || !hasMore ? search ? dedupedWallets.filter((w) => w.name.toLowerCase().includes(search.toLowerCase())) : dedupedWallets : dedupedWallets.slice(0, HAS_MORE_LENGTH);
  const showMoreButton = !showAll && hasMore;
  const handleShowAll = () => {
    setStep(ModalStep.EX_WALLET_MORE);
  };
  const handleParaClick = () => {
    setStep(ModalStep.AUTH_MORE);
  };
  const handleWalletClick = (wallet) => () => __async(void 0, null, function* () {
    const shouldShowNetworkSelection = allWallets.filter((w) => w.id === wallet.id).length > 1;
    if (shouldShowNetworkSelection) {
      setSelectedExternalWallet({ id: wallet.id, type: wallet.type });
      setStep(isAddingWallets ? ModalStep.ADD_EX_WALLET_NETWORK_SELECT : ModalStep.EX_WALLET_NETWORK_SELECT);
      return;
    }
    setSelectedExternalWallet({ id: wallet.id, type: wallet.type });
    setStep(isAddingWallets ? ModalStep.ADD_EX_WALLET_SELECTED : ModalStep.EX_WALLET_SELECTED);
    if (isAddingWallets) {
      try {
        yield addAdditionalExternalWallet(wallet);
      } catch (error) {
        console.error("Failed to add additional wallet:", error);
      }
    } else {
      if (wallet.installed) {
        connectExternalWallet({ wallet });
      } else if (wallet.isMobile) {
        connectExternalWallet({ wallet, isMobile: true });
      }
    }
  });
  return (0, import_jsx_runtime53.jsxs)(Container11, { $maxHeight: showAll, children: [
    showAll && (0, import_jsx_runtime53.jsxs)(import_jsx_runtime53.Fragment, { children: [
      (0, import_jsx_runtime53.jsx)(SearchInputWrapper, { children: (0, import_jsx_runtime53.jsx)(
        SearchInput3,
        {
          placeholder: "Search for your wallet",
          onCpslInput: (e) => __async(void 0, null, function* () {
            var _a;
            setSearch((_a = e.target.value) != null ? _a : "");
          }),
          value: search,
          style: { width: "100%" },
          children: (0, import_jsx_runtime53.jsx)(SearchIcon, { slot: "start", icon: "search" })
        }
      ) }),
      hasEmbeddedAuth(authLayout != null ? authLayout : []) && !isAddingWallets && (0, import_jsx_runtime53.jsx)(CpslButton, { fullWidth: true, variant: "tertiary", onClick: handleParaClick, children: (0, import_jsx_runtime53.jsxs)(WalletButtonOuterContainer, { children: [
        (0, import_jsx_runtime53.jsxs)(WalletButtonInnerContainer, { children: [
          (0, import_jsx_runtime53.jsx)(CpslIcon, { slot: "start", icon: "paraIcon" }),
          (0, import_jsx_runtime53.jsx)(CpslText, { weight: "medium", children: "Para" })
        ] }),
        (0, import_jsx_runtime53.jsx)(Badge, { $show: true, $variant: "installed", children: (0, import_jsx_runtime53.jsx)(CpslText, { variant: "body2XS", weight: "medium", children: "Available" }) })
      ] }) })
    ] }),
    walletsToShow.map(
      (wallet) => showAll ? (0, import_jsx_runtime53.jsx)(CpslButton, { fullWidth: true, variant: "tertiary", onClick: handleWalletClick(wallet), children: (0, import_jsx_runtime53.jsxs)(WalletButtonOuterContainer, { children: [
        (0, import_jsx_runtime53.jsxs)(WalletButtonInnerContainer, { children: [
          (0, import_jsx_runtime53.jsx)(CpslIcon, { slot: "start", src: wallet.iconUrl }),
          (0, import_jsx_runtime53.jsx)(CpslText, { weight: "medium", children: wallet.name })
        ] }),
        (0, import_jsx_runtime53.jsx)(Badge, { $show: !!wallet.isMobile || !!wallet.installed, $variant: wallet.installed ? "installed" : "mobile", children: (0, import_jsx_runtime53.jsx)(CpslText, { variant: "body2XS", weight: "medium", children: wallet.installed ? "Installed" : "Mobile" }) })
      ] }) }, wallet.id) : (0, import_jsx_runtime53.jsx)(WalletTileButton, { src: wallet.iconUrl, onClick: handleWalletClick(wallet), children: (0, import_jsx_runtime53.jsxs)(TileButtonInnerContainer, { children: [
        wallet.installed && (0, import_jsx_runtime53.jsx)(InstalledIndicator, {}),
        (0, import_jsx_runtime53.jsx)(CpslText, { variant: "bodyXS", color: "secondary", weight: "medium", children: wallet.name })
      ] }) }, wallet.id)
    ),
    showMoreButton && (0, import_jsx_runtime53.jsxs)(CpslButton, { variant: "tertiary", fullWidth: true, onClick: handleShowAll, children: [
      (0, import_jsx_runtime53.jsx)(CpslIcon, { slot: "start", icon: "wallet" }),
      "More Wallets"
    ] }),
    showAll && (0, import_jsx_runtime53.jsx)(BlurContainer, {})
  ] });
};
var Container11 = safeStyled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;

  max-height: ${({ $maxHeight }) => $maxHeight ? "348px" : "none"};
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
var WalletTileButton = safeStyled(StyledCpslTileButton)`
  flex: 1;
`;
var WalletButtonOuterContainer = safeStyled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
`;
var WalletButtonInnerContainer = safeStyled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  cpsl-icon {
    --icon-color: var(--cpsl-color-contrast);
  }
  cpsl-text {
    &::part(text-element) {
      color: var(--cpsl-color-contrast);
    }
  }
`;
var Badge = safeStyled.div`
  visibility: ${({ $show }) => $show ? "visible" : "hidden"};
  padding: 2px 4px;
  border-radius: 4px;
  border: 1px solid;
  border-color: ${({ $variant }) => $variant === "installed" ? "var(--cpsl-color-utility-green)" : "var(--cpsl-color-text-primary)"};
  cpsl-text {
    &::part(text-element) {
      color: ${({ $variant }) => $variant === "installed" ? "var(--cpsl-color-utility-green)" : "var(--cpsl-color-text-primary)"};
    }
  }
`;
var InstalledIndicator = safeStyled.span`
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: var(--cpsl-color-utility-green);
`;
var TileButtonInnerContainer = safeStyled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
var SearchIcon = safeStyled(CpslIcon)`
  --icon-color: var(--cpsl-color-contrast);
`;
var SearchInputWrapper = safeStyled.div`
  width: 100%;
  background-color: var(--cpsl-color-background-0);

  position: sticky;
  top: 0;
  padding-bottom: 4px;
  margin-bottom: -4px;
`;
var SearchInput3 = safeStyled(CpslInput)`
  width: 100%;
  --container-background-color: var(--cpsl-color-background-8);
  --input-background-color: var(--cpsl-color-background-8);
`;
var BlurContainer = safeStyled.div`
  position: sticky;
  height: 56px;
  width: 100%;
  bottom: 0;

  background: linear-gradient(0deg, var(--cpsl-color-background-0) 0%, rgba(234, 239, 211, 0) 100%);
  pointer-events: none;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AuthOptions/AuthOptions.js
var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);
var import_react94 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/OAuth/OAuth.js
var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/utils/getTileButtonFlex.js
var getTileButtonFlex = (index, totalItems) => {
  const gapOffset = 8 - 8 * 0.333;
  if (totalItems < 2) {
    return "1 1 auto";
  }
  if (totalItems % 3 === 0) {
    return `0 0 calc(33.333333% - ${gapOffset}px)`;
  }
  if (totalItems % 3 === 1) {
    return index < 4 ? "0 0 calc(50% - 4px)" : `0 0 calc(33.333333% - ${gapOffset}px)`;
  }
  if (totalItems % 3 === 2) {
    return index < 2 ? "0 0 calc(50% - 4px)" : `0 0 calc(33.333333% - ${gapOffset}px)`;
  }
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/OAuth/OAuth.js
var HAS_MORE_LENGTH2 = 3;
var OAuth = ({ methods }) => {
  const oAuthLogoVariant = useStore2((state2) => state2.oAuthLogoVariant);
  const isDark = useStore2((state2) => state2.isDarkTheme);
  const setStep = useModalStore((state2) => state2.setStep);
  const showAll = useModalStore((state2) => state2.step === ModalStep.AUTH_MORE || state2.step === ModalStep.AUTH_GUEST_SIGNUP);
  const { verifyOAuth: verifyOAuth2 } = useAuthActions();
  const hasMore = methods.length > HAS_MORE_LENGTH2;
  const methodsToShow = showAll || !hasMore ? methods : methods.slice(0, HAS_MORE_LENGTH2 - 1);
  const handleShowAll = () => {
    setStep(ModalStep.AUTH_MORE);
  };
  const handleMethodClick = (method) => () => __async(void 0, null, function* () {
    switch (method) {
      case "FARCASTER":
        setStep(ModalStep.FARCASTER_OAUTH);
        break;
      case "TELEGRAM":
        setStep(ModalStep.TELEGRAM_OAUTH);
        break;
      default:
        verifyOAuth2(method);
        break;
    }
  });
  const useBrandedLogos = oAuthLogoVariant === "default";
  const useDarkLogos = useBrandedLogos ? isDark : oAuthLogoVariant !== "dark";
  const showMoreButton = !showAll && hasMore;
  return (0, import_jsx_runtime54.jsxs)(OAuthContainer, { children: [
    methodsToShow.map((method, index) => (0, import_jsx_runtime54.jsx)(
      OAuthButton,
      {
        $isDark: useDarkLogos,
        icon: ACCOUNT_TYPES[method][useBrandedLogos ? "iconBranded" : "icon"],
        onClick: handleMethodClick(method),
        $index: index,
        $totalItems: showMoreButton ? HAS_MORE_LENGTH2 : methodsToShow.length
      },
      method
    )),
    showMoreButton && (0, import_jsx_runtime54.jsx)(
      OAuthButton,
      {
        $isDark: useDarkLogos,
        icon: "moreLoginOptions",
        onClick: handleShowAll,
        $index: HAS_MORE_LENGTH2 - 1,
        $totalItems: HAS_MORE_LENGTH2
      }
    )
  ] });
};
var OAuthContainer = safeStyled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`;
var OAuthButton = safeStyled(StyledCpslTileButton)`
  flex: ${({ $index, $totalItems }) => getTileButtonFlex($index, $totalItems)};

  --button-icon-color: ${({ $isDark }) => $isDark ? "white" : "black"};
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AuthInput/AuthInput.js
var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);
var import_react93 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/utils/countryCodes.js
var excludedCountries = [
  "AC",
  "AF",
  "AO",
  "AZ",
  "BI",
  "BD",
  "BO",
  "CG",
  "CI",
  "CV",
  "DZ",
  "ER",
  "EG",
  "ET",
  "GE",
  "GF",
  "GG",
  "GH",
  "GP",
  "ID",
  "IQ",
  "JE",
  "JO",
  "KG",
  "KH",
  "KM",
  "KW",
  "KZ",
  "LA",
  "LB",
  "LK",
  "LS",
  "LY",
  "MA",
  "MF",
  "MG",
  "MM",
  "MR",
  "MZ",
  "NC",
  "NG",
  "NP",
  "OM",
  "PK",
  "PM",
  "PS",
  "RE",
  "RU",
  "RW",
  "SD",
  "SH",
  "SJ",
  "SS",
  "TA",
  "TJ",
  "TM",
  "TN",
  "UG",
  "UZ",
  "VA",
  "VN",
  "WF",
  "XK",
  "YE",
  "YT",
  "ZM",
  "ZW"
];
var generateCountryCodes = () => {
  const countries = getCountries();
  const countryList = countries.filter((country) => !excludedCountries.includes(country)).map((country) => {
    const countryCode = getCountryCallingCode(country);
    const countryName = new Intl.DisplayNames(["en"], { type: "region" }).of(country);
    return {
      label: countryName != null ? countryName : "",
      value: `+${countryCode}`,
      selectedLabel: country,
      icon: country
    };
  }).sort((a, b) => {
    var _a, _b;
    return ((_a = a.label) != null ? _a : "").localeCompare((_b = b.label) != null ? _b : "");
  });
  return countryList;
};
var countryCodes = generateCountryCodes();
var countryCodes_default = countryCodes;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AuthInput/phoneMasks.js
var defaultPhoneMask = "#################";
var phoneMasks = {
  AF: "### ### ####",
  AX: "## ### ####",
  AL: "(###) ### ###",
  DZ: "(###) ### ###",
  AS: "(###) ###-####",
  AD: "### ###",
  AO: "(###) ### ###",
  AI: "(###) ###-####",
  AG: "(###) ###-####",
  AR: "(###) ###-####",
  AM: "## ### ###",
  AW: "### ####",
  AU: "# #### ####",
  AT: "(###) ### ####",
  AZ: "(###) ### ## ##",
  BS: "(###) ###-####",
  BH: "#### ####",
  BD: "# ### ###",
  BB: "(###) ###-####",
  BY: "(##) ###-##-##",
  BE: "(###) ### ###",
  BZ: "###-####",
  BJ: "##-##-####",
  BM: "(###) ###-####",
  BT: "# ### ###",
  BO: "# ### ####",
  BA: "## ###-###",
  BW: "## ### ###",
  BR: "(##) ####-####",
  IO: "### ####",
  BN: "### ####",
  BG: "(###) ### ###",
  BF: "## ## ####",
  BI: "## ## ####",
  KH: "## ### ###",
  CM: "#### ####",
  CA: "(###) ###-####",
  CV: "(###) ## ##",
  KY: "(###) ###-####",
  CF: "## ## ####",
  TD: "## ## ## ##",
  CL: "# #### ####",
  CN: "(###) #### ####",
  CX: "# ## ## ##",
  CC: "# ## ## ##",
  CO: "(###) ### ####",
  KM: "## ## ## ##",
  CG: "## ### ####",
  CK: "## ###",
  CR: "#### ####",
  HR: "## #### ###",
  CU: "# ### ####",
  CY: "## ### ###",
  CZ: "### ### ###",
  CD: "### ### ###",
  DK: "## ## ## ##",
  DJ: "## ## ## ##",
  DM: "(###) ###-####",
  DO: "(###) ###-####",
  EC: "## ### ####",
  EG: "# #### ####",
  SV: "#### ####",
  GQ: "## ### ####",
  ER: "# ### ###",
  EE: "#### ####",
  SZ: "#### ####",
  ET: "## ### ####",
  FK: "#####",
  FO: "######",
  FJ: "### ####",
  FI: "## ### ####",
  FR: "## ## ## ## ##",
  GF: "### ## ## ##",
  PF: "## ## ##",
  GA: "# ## ## ##",
  GM: "### ####",
  GE: "(###) ## ## ##",
  DE: "###########",
  GH: "## ### ####",
  GI: "### #####",
  GR: "(###) ### ####",
  GL: "## ## ##",
  GD: "(###) ###-####",
  GP: "### ## ## ##",
  GU: "(###) ###-####",
  GT: "# ### ####",
  GG: "(####) ### ###",
  GN: "## ### ###",
  GW: "# #######",
  GY: "### ####",
  HT: "## ## ####",
  VA: "### ####",
  HN: "####-####",
  HK: "#### ####",
  HU: "(##) ### ####",
  IS: "### ####",
  IN: "####### ###",
  ID: "(###) ###-####",
  IR: "(###) ### ####",
  IQ: "(###) ### ####",
  IE: "(###) ### ###",
  IM: "(####) ### ###",
  IL: "#-###-####",
  IT: "(###) #### ###",
  CI: "## ## ## ##",
  JM: "(###) ###-####",
  JP: "(###) ###-####",
  JE: "(####) ### ###",
  JO: "# #### ####",
  KZ: "(###) ###-##-##",
  KE: "### ######",
  KI: "## ###",
  KP: "###-###-####",
  KR: "(###) ####-####",
  XK: "## ### ###",
  KW: "#### ####",
  KG: "(###) ###-###",
  LA: "## ## ####",
  LV: "## ### ###",
  LB: "## ### ###",
  LS: "# ### ####",
  LR: "## ### ###",
  LY: "##-#######",
  LI: "(###) ###-####",
  LT: "(###) ## ###",
  LU: "### ### ###",
  MO: "#### ####",
  MG: "## ## ### ##",
  MW: "# #### ####",
  MY: "(###) ###-###",
  MV: "###-####",
  ML: "## ## ####",
  MT: "#### ####",
  MH: "###-####",
  MQ: "### ## ## ##",
  MR: "## ## ####",
  MU: "### ####",
  YT: "### ## ## ##",
  MX: "(###) ###-####",
  FM: "### ####",
  MD: "#### ####",
  MC: "(###) ###-###",
  MN: "## ## ####",
  ME: "## ### ###",
  MS: "(###) ###-####",
  MA: "#-####-####",
  MZ: "## ### ####",
  MM: "# ### ####",
  NA: "## ### ####",
  NR: "### ####",
  NP: "#-######",
  NL: "## ### ####",
  NC: "##.##.##",
  NZ: "## ### ###",
  NI: "#### ####",
  NE: "## ## ## ##",
  NG: "## #### ####",
  NU: "####",
  NF: "### ###",
  MK: "## ### ###",
  MP: "(###) ###-####",
  NO: "### ## ###",
  OM: "#### ####",
  PK: "(###) #######",
  PW: "### ####",
  PS: "## ### ####",
  PA: "####-####",
  PG: "(###) ## ###",
  PY: "## ### ####",
  PE: "(###) ### ###",
  PH: "(###) ###-####",
  PN: "### ####",
  PL: "### ### ###",
  PT: "## ### ####",
  PR: "(###) ###-####",
  QA: "#### ####",
  RE: "##### ####",
  RO: "## ### ####",
  RU: "(###) ###-##-##",
  RW: "(###) ### ###",
  BL: "### ## ## ##",
  SH: "####",
  KN: "(###) ###-####",
  LC: "(###) ###-####",
  MF: "### ## ## ##",
  PM: "## ## ##",
  VC: "(###) ###-####",
  WS: "####",
  SM: "(####) ######",
  ST: "## ####",
  SA: "# ### ####",
  SN: "## ### ####",
  RS: "## ### ####",
  SC: "# ### ###",
  SL: "## ######",
  SG: "#### ####",
  SX: "(###) ###-####",
  SK: "(###) ### ###",
  SI: "## ### ###",
  SB: "### ####",
  SO: "# ### ###",
  ZA: "## ### ####",
  GS: "####",
  SS: "# ### ####",
  ES: "### ### ###",
  LK: "## ### ####",
  SD: "## ### ####",
  SR: "###-####",
  SJ: "### ## ###",
  SE: "## ### ####",
  CH: "## ### ####",
  SY: "## #### ###",
  TW: "#### ####",
  TJ: "## ### ####",
  TZ: "## ### ####",
  TH: "# #### ####",
  TL: "#### ####",
  TG: "## ## ## ##",
  TK: "####",
  TO: "####",
  TT: "(###) ###-####",
  TN: "## ### ###",
  TR: "(###) ### ####",
  TM: "# ### ###",
  TC: "(###) ###-####",
  TV: "####",
  UG: "## ### ####",
  UA: "## ### ####",
  AE: "# ### ####",
  GB: "#### ### ###",
  US: "(###) ###-####",
  UM: "(###) ###-####",
  UY: "# ### ## ##",
  UZ: "## ### ####",
  VU: "## ####",
  VE: "###-###-####",
  VN: "## #### ###",
  VG: "(###) ###-####",
  VI: "(###) ###-####",
  WF: "## ####",
  EH: "###-###-###",
  YE: "# ### ###",
  ZM: "## ### ####",
  ZW: "# #######"
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AuthInput/AuthInput.js
var DEFAULT_COUNTRY = { label: "United States", value: "+1", selectedLabel: "US", icon: "US" };
var AuthInput = ({
  defaultAuth,
  disableEmailLogin,
  disablePhoneLogin,
  onSubmit: _onSubmit,
  isSubmitting,
  disableSubmitButton,
  children: Children2,
  error: propsError,
  sticky = false
}) => {
  var _a, _b, _c;
  const inputRef = (0, import_react93.useRef)(null);
  const { dropdownMaxHeight, dropdownWidth } = useDropdownPosition(inputRef);
  const [authInfo, storedNationalNumber, storedCountryCode] = (0, import_react93.useMemo)(() => {
    if (!defaultAuth) {
      return [void 0, void 0, void 0];
    }
    const authInfo2 = extractAuthInfo(defaultAuth);
    if (!authInfo2 || (authInfo2 == null ? void 0 : authInfo2.authType) !== "phone") {
      return [authInfo2, void 0, void 0];
    }
    const parsed = parsePhoneNumber(authInfo2.identifier);
    return [authInfo2, parsed == null ? void 0 : parsed.nationalNumber, parsed == null ? void 0 : parsed.countryCallingCode];
  }, [defaultAuth]);
  const [countryCode, setCountryCode] = (0, import_react93.useState)(storedCountryCode != null ? storedCountryCode : "+1");
  const [identifier, setIdentifier] = (0, import_react93.useState)(
    (() => {
      if (!(authInfo == null ? void 0 : authInfo.authType) || ["telegram", "farcaster", "externalWallet"].includes(authInfo == null ? void 0 : authInfo.authType)) {
        return "";
      }
      if (authInfo.authType !== "phone") {
        return authInfo.identifier;
      }
      return storedNationalNumber != null ? storedNationalNumber : "";
    })()
  );
  const [identifierType, setIdentifierType] = (0, import_react93.useState)(
    authInfo && (authInfo.authType === "email" || authInfo.authType === "phone") ? authInfo.authType : void 0
  );
  const [matchedCountryCode, setMatchedCountryCode] = (0, import_react93.useState)(
    (_a = countryCodes_default.find((option) => isCcMatch(countryCode, option))) != null ? _a : DEFAULT_COUNTRY
  );
  const [error, setError] = (0, import_react93.useState)(propsError || void 0);
  const [isPending, setIsPending] = (0, import_react93.useState)(isSubmitting || false);
  const [search, setSearch] = (0, import_react93.useState)("");
  const setCountryCodes = (countyCodeInput) => {
    setCountryCode(countyCodeInput.value);
    setMatchedCountryCode(countyCodeInput);
  };
  const isEmail2 = identifierType === "email";
  const isPhone2 = identifierType === "phone";
  const isUnknown = !identifierType;
  const filteredCountryCodes = search ? countryCodes_default.filter(
    (cc) => cc.selectedLabel.toLowerCase().includes(search.toLowerCase()) || cc.label.toLowerCase().includes(search.toLowerCase()) || cc.value.toLowerCase().includes(search.toLowerCase())
  ) : countryCodes_default;
  const handleSearchInput = (ev) => {
    setSearch(ev.detail);
  };
  const handleIdentifierInput = (ev) => {
    var _a2;
    if (!sticky) {
      setError(void 0);
    }
    const newIdentifier = (_a2 = ev.detail.value) != null ? _a2 : "";
    let isNewPhone = false, isNewEmail = false;
    if (!disablePhoneLogin) {
      const countryCodeInputMatch = countryCodes_default.find((option) => isCcMatch(newIdentifier, option));
      if (countryCodeInputMatch) {
        setCountryCodes(countryCodeInputMatch);
        setIdentifierType("phone");
        setIdentifier("");
        return;
      }
      isNewPhone = !isEmail2 && isPhone2 ? /\d+$/.test(newIdentifier) : /\d\d\d+$/.test(newIdentifier);
    }
    if (!disableEmailLogin) {
      isNewEmail = /\D.*$/.test(newIdentifier);
    }
    setIdentifierType(isNewEmail ? "email" : isNewPhone ? "phone" : void 0);
    setIdentifier(newIdentifier);
  };
  const handleCountryCodeInput = (ev) => {
    const matchedCountryCode2 = countryCodes_default.find((code) => code.selectedLabel === ev.detail);
    if (matchedCountryCode2) {
      setCountryCodes(matchedCountryCode2);
    }
  };
  const onSubmit = () => __async(void 0, null, function* () {
    setError(void 0);
    try {
      const auth = validateInput(identifier, countryCode, identifierType);
      _onSubmit(auth);
    } catch (err) {
      setError(err.message);
    }
  });
  (0, import_react93.useEffect)(() => {
    setIsPending(isSubmitting);
  }, [isSubmitting]);
  (0, import_react93.useEffect)(() => {
    if (propsError === null || propsError === void 0 && !sticky) {
      setError(void 0);
    }
    if (propsError) {
      setError(propsError);
      setIsPending(false);
    }
  }, [propsError, sticky]);
  (0, import_react93.useEffect)(() => {
    if (!sticky || isSubmitting) {
      setIsPending(isSubmitting);
    }
  }, [error]);
  if (disableEmailLogin && disablePhoneLogin) {
    return null;
  }
  return (0, import_jsx_runtime55.jsxs)(
    "form",
    {
      onSubmit: (e) => __async(void 0, null, function* () {
        e.preventDefault();
        onSubmit();
      }),
      style: { width: "100%" },
      children: [
        (0, import_jsx_runtime55.jsxs)(
          StyledInput,
          {
            ref: inputRef,
            id: "authInput",
            placeholder: isEmail2 || disablePhoneLogin ? "Enter email" : isPhone2 || disableEmailLogin ? "Enter phone" : "Enter email or phone",
            onCpslInput: handleIdentifierInput,
            value: identifier,
            errorText: error,
            autofocus: true,
            inputMode: "email",
            onKeyDown: (e) => __async(void 0, null, function* () {
              return e.key === "Enter" && onSubmit();
            }),
            contrastText: true,
            isPhone: isPhone2,
            mask: identifierType === "phone" ? (_c = phoneMasks[(_b = matchedCountryCode.selectedLabel) != null ? _b : ""]) != null ? _c : defaultPhoneMask : void 0,
            enterkeyhint: "go",
            noAutoDisable: true,
            disabled: isPending,
            "data-testid": "auth-input",
            children: [
              (0, import_jsx_runtime55.jsxs)(IconContainer2, { slot: "start", children: [
                !disableEmailLogin && (isUnknown || isEmail2) && (0, import_jsx_runtime55.jsx)(CpslIcon, { "aria-label": "email", icon: "mail" }),
                !disablePhoneLogin && isUnknown && (0, import_jsx_runtime55.jsx)(CpslIcon, { "aria-label": "phone", icon: "phone" }),
                isPhone2 && (0, import_jsx_runtime55.jsxs)(
                  CountryCodeSelect,
                  {
                    selectedValue: matchedCountryCode.selectedLabel,
                    onCpslSelectValueChange: handleCountryCodeInput,
                    showFormattedSelectedItem: true,
                    autoWidth: true,
                    dropdownMaxHeight,
                    anchorElId: "authInput",
                    $width: dropdownWidth != null ? dropdownWidth : 0,
                    showSearch: true,
                    searchPlaceholder: "Search Countries",
                    onCpslSearchChange: handleSearchInput,
                    "data-testid": "country-code-select",
                    children: [
                      matchedCountryCode && (0, import_jsx_runtime55.jsxs)(SelectedItem, { slot: "selected-item", children: [
                        (0, import_jsx_runtime55.jsx)(CpslText, { children: matchedCountryCode.selectedLabel }),
                        (0, import_jsx_runtime55.jsx)(CpslText, { children: matchedCountryCode.value })
                      ] }),
                      filteredCountryCodes.map((cc) => (0, import_jsx_runtime55.jsxs)(StyledSelectItem, { slot: "items", value: cc.selectedLabel, children: [
                        (0, import_jsx_runtime55.jsx)(CpslText, { children: cc.label }),
                        (0, import_jsx_runtime55.jsx)(CpslText, { children: cc.value })
                      ] }, cc.selectedLabel))
                    ]
                  }
                )
              ] }),
              identifier && !disableSubmitButton && (0, import_jsx_runtime55.jsx)(CpslButton, { slot: "end", size: "small", fullWidth: true, disabled: isPending, onClick: onSubmit, children: isPending ? (0, import_jsx_runtime55.jsx)(CpslSpinner, { size: 16 }) : (0, import_jsx_runtime55.jsx)(CpslIcon, { icon: "arrowNarrow" }) })
            ]
          },
          "email"
        ),
        Children2 && (0, import_jsx_runtime55.jsx)(ChildContainer, { children: (0, import_jsx_runtime55.jsx)(Children2, { onSubmit, isPending, isSubmitting: isPending }) })
      ]
    }
  );
};
var IconContainer2 = safeStyled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-right: 12px;
  border-right: 1px solid var(--cpsl-color-background-16);

  & cpsl-icon {
    --icon-color: var(--cpsl-color-contrast);
  }
`;
var CountryCodeSelect = safeStyled(CpslSelect)`
  --container-height: 100%;
  --container-padding-start: 0px;
  --container-padding-end: 0px;
  --container-border-width: 0px;
  --container-gap: 4px;
  --container-background-color: transparent;
  --container-box-shadow: none;
  --dropdown-background-color: var(--cpsl-color-background-4);

  &::part(dropdown) {
    width: ${({ $width }) => `${$width - 2}px`};
  }

  &::part(popover) {
    @media (max-width: ${MOBILE_SIZE}px) {
      top: unset !important;
      bottom: 16px;
    }

    cpsl-auth-modal.force-mobile-media & {
      top: unset !important;
      bottom: 16px;
    }
  }
`;
var StyledSelectItem = safeStyled(CpslSelectItem)`
  &::part(inner-container) {
    justify-content: space-between;
  }
`;
var SelectedItem = safeStyled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
var StyledInput = safeStyled(CpslInput)`
  --container-background-color: var(--cpsl-color-background-8);
  --input-background-color: var(--cpsl-color-background-8);
  --container-padding-end: 8px;
  width: 100%;
`;
var ChildContainer = safeStyled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
  width: 100%;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AuthOptions/AuthOptions.js
var AuthOptions = ({
  oAuthMethods,
  disableEmailLogin,
  disablePhoneLogin,
  isGuestModeEnabled = false
}) => {
  var _a, _b;
  const para = useInternalClient();
  const defaultAuthIdentifier = useStore2((state2) => {
    var _a2;
    return (_a2 = state2.modalConfig) == null ? void 0 : _a2.defaultAuthIdentifier;
  });
  const { signUpOrLogIn: signUpOrLogIn2, isSignUpOrLogInPending } = useAuthActions();
  const { wallets } = useExternalWallets();
  const guestAddFundsTab = useModalStore((state2) => state2.guestAddFundsTab);
  const defaultAuth = defaultAuthIdentifier ? /^\+\d+$/.test(defaultAuthIdentifier) ? { phone: defaultAuthIdentifier } : { email: defaultAuthIdentifier } : para.authInfo && (isEmail((_a = para.authInfo) == null ? void 0 : _a.auth) || isPhone((_b = para.authInfo) == null ? void 0 : _b.auth)) ? para.authInfo.auth : void 0;
  const Content4 = (0, import_react94.useMemo)(() => {
    const Methods = [];
    if (!!(oAuthMethods == null ? void 0 : oAuthMethods.length)) {
      Methods.push((0, import_jsx_runtime56.jsx)(OAuth, { methods: oAuthMethods }, "oAuth"));
    }
    if (!disableEmailLogin || !disablePhoneLogin) {
      Methods.push(
        (0, import_jsx_runtime56.jsx)(
          AuthInput,
          {
            sticky: true,
            defaultAuth,
            disableEmailLogin,
            disablePhoneLogin,
            onSubmit: signUpOrLogIn2,
            isSubmitting: isSignUpOrLogInPending
          },
          "input"
        )
      );
    }
    return (0, import_jsx_runtime56.jsx)(import_jsx_runtime56.Fragment, { children: Methods });
  }, [oAuthMethods, disableEmailLogin, disablePhoneLogin, isGuestModeEnabled, wallets]);
  return (0, import_jsx_runtime56.jsxs)(Container12, { children: [
    guestAddFundsTab && (0, import_jsx_runtime56.jsxs)(CompleteAccountSetup, { children: [
      (0, import_jsx_runtime56.jsx)(CompleteAccountIcon, { icon: "stars02", size: "16px" }),
      (0, import_jsx_runtime56.jsxs)(CpslText, { variant: "bodyS", weight: "bold", children: [
        "Complete account setup to",
        " ",
        guestAddFundsTab === "BUY" ? "buy assets" : guestAddFundsTab === "WITHDRAW" ? "sell assets" : "continue",
        "."
      ] })
    ] }),
    Content4
  ] });
};
var Container12 = safeStyled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
var CompleteAccountSetup = safeStyled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: var(--cpsl-color-text-primary);
  margin-bottom: 8px;
`;
var CompleteAccountIcon = safeStyled(CpslIcon)`
  --icon-color: var(--cpsl-color-text-primary);
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AuthMainStep/AuthMainStepContent.js
var AuthMainStepContent = ({
  oAuthMethods,
  disableEmailLogin,
  disablePhoneLogin,
  isGuestModeEnabled = false
}) => {
  const { wallets, connectFarcasterMiniApp } = useExternalWallets();
  const { createGuestWallets: createGuestWallets2 } = useAuthActions();
  const { isFarcasterMiniApp } = useParaStatus();
  const { embedded } = useAccount();
  const authLayout = useModalStore((state2) => state2.authLayout);
  const setStep = useModalStore((state2) => state2.setStep);
  const oAuthLogoVariant = useStore2((state2) => state2.oAuthLogoVariant);
  const isDark = useStore2((state2) => {
    var _a, _b;
    return ((_b = (_a = state2.modalConfig) == null ? void 0 : _a.theme) == null ? void 0 : _b.mode) === "dark";
  });
  const isGuestMode = (embedded == null ? void 0 : embedded.isConnected) && embedded.isGuestMode;
  const useBrandedLogos = oAuthLogoVariant === "default";
  const useDarkLogos = useBrandedLogos ? isDark : oAuthLogoVariant !== "dark";
  const handleCondensedAuthClick = () => {
    setStep(ModalStep.AUTH_MORE);
  };
  const handleCondensedExternalClick = () => {
    setStep(ModalStep.EX_WALLET_MORE);
  };
  const Content4 = (0, import_react95.useMemo)(() => {
    const methods = [];
    if (isFarcasterMiniApp) {
      methods.push([
        (0, import_jsx_runtime57.jsxs)(FarcasterButton, { variant: "primary", fullWidth: true, onClick: connectFarcasterMiniApp, children: [
          (0, import_jsx_runtime57.jsx)(CpslIcon, { slot: "start", icon: "farcaster" }),
          "Continue with Farcaster"
        ] }),
        "FARCASTER"
      ]);
    }
    authLayout == null ? void 0 : authLayout.forEach((layout2) => {
      switch (layout2) {
        case AuthLayout.AUTH_FULL: {
          methods.push([
            (0, import_jsx_runtime57.jsx)(
              AuthOptions,
              {
                oAuthMethods,
                disableEmailLogin,
                disablePhoneLogin,
                isGuestModeEnabled
              },
              "authFull"
            ),
            layout2
          ]);
          break;
        }
        case AuthLayout.AUTH_CONDENSED: {
          const icons = [];
          oAuthMethods == null ? void 0 : oAuthMethods.forEach((method) => icons.push(ACCOUNT_TYPES[method][useBrandedLogos ? "iconBranded" : "icon"]));
          methods.push([
            (0, import_jsx_runtime57.jsxs)(CondensedButton, { onClick: handleCondensedAuthClick, variant: "tertiary", fullWidth: true, children: [
              (0, import_jsx_runtime57.jsx)(IconGroupSpacer, { slot: "start", icons: [], $isDark: useDarkLogos }),
              signUpOrLogInTitle,
              (0, import_jsx_runtime57.jsx)(StyledIconGroup, { slot: "end", icons: icons.splice(0, 3), $isDark: useDarkLogos })
            ] }, "authCondensed"),
            layout2
          ]);
          break;
        }
        case AuthLayout.EXTERNAL_FULL: {
          if (!!wallets.length) {
            methods.push([(0, import_jsx_runtime57.jsx)(ExternalWallets, {}, "externalWallets"), layout2]);
          }
          break;
        }
        case AuthLayout.EXTERNAL_CONDENSED: {
          const icons = [];
          wallets == null ? void 0 : wallets.forEach((wallet) => icons.push(wallet.iconUrl));
          methods.push([
            (0, import_jsx_runtime57.jsxs)(CondensedButton, { onClick: handleCondensedExternalClick, variant: "tertiary", fullWidth: true, children: [
              (0, import_jsx_runtime57.jsx)(IconGroupSpacer, { slot: "start", icons: [], $isDark: useDarkLogos }),
              connectWalletTitle,
              (0, import_jsx_runtime57.jsx)(StyledIconGroup, { slot: "end", icons: icons.splice(0, 3), $isDark: useDarkLogos })
            ] }, "authCondensed"),
            layout2
          ]);
          break;
        }
        default: {
          break;
        }
      }
    });
    return (0, import_jsx_runtime57.jsx)(import_jsx_runtime57.Fragment, { children: methods.map(([reactNode, key], index) => (0, import_jsx_runtime57.jsxs)(import_react95.Fragment, { children: [
      reactNode,
      methods.length > 1 && index < methods.length - 1 && (0, import_jsx_runtime57.jsx)(CpslDivider, { children: "or" }, "or")
    ] }, key)) });
  }, [isFarcasterMiniApp, oAuthMethods, disableEmailLogin, disablePhoneLogin, isGuestModeEnabled, wallets, authLayout]);
  return (0, import_jsx_runtime57.jsxs)(Container13, { "data-testid": "main-auth-step-content", children: [
    Content4,
    isGuestModeEnabled && !isGuestMode && !isFarcasterMiniApp && (0, import_jsx_runtime57.jsx)(
      GuestMode,
      {
        href: "#",
        $isDark: isDark,
        onClick: (e) => {
          e.preventDefault();
          createGuestWallets2();
        },
        children: "Continue as Guest"
      }
    )
  ] });
};
var Container13 = safeStyled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
var StyledIconGroup = safeStyled(CpslIconGroup)`
  --icon-item-color: ${({ $isDark }) => $isDark ? "white" : "black"};
  flex: 1;
  justify-content: flex-end;
`;
var IconGroupSpacer = safeStyled(StyledIconGroup)`
  visibility: hidden;
`;
var CondensedButton = safeStyled(CpslButton)`
  --button-justify-content: space-between;

  &::part(button-native) {
    max-height: 50px;
  }
`;
var GuestMode = safeStyled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  color: ${({ $isDark }) => $isDark ? "white" : "black"};
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  font-family: var(--cpsl-font-family);

  &:hover {
    text-decoration: underline;
  }
`;
var FarcasterButton = safeStyled(CpslButton)`
  --button-primary-icon-color: white;
  --button-primary-hover-icon-color: white;
  --button-primary-active-icon-color: white;
  --button-primary-background-color: #7e50d1;
  --button-primary-hover-background-color: #8A63D2;
  --button-primary-active-background-color: #8A63D2;
  --button-primary-color: white;
  --button-primary-hover-color: white;
  --button-primary-active-color: white;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AuthMainStep/AuthMainStep.js
var AuthMainStep = ({
  oAuthMethods,
  disableEmailLogin,
  disablePhoneLogin,
  isGuestModeEnabled = false
}) => {
  const embeddedModal = useStore2((state2) => {
    var _a;
    return (_a = state2.modalConfig) == null ? void 0 : _a.embeddedModal;
  });
  const logo = useStore2((state2) => {
    var _a;
    return (_a = state2.modalConfig) == null ? void 0 : _a.logo;
  });
  const appName = useStore2((state2) => state2.appName);
  const { title, isTitleDisplayed } = useStepTitle();
  return (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
    logo && (0, import_jsx_runtime58.jsx)(Logo, { src: logo, alt: `${appName ? `${appName} -` : ""}logo` }),
    !embeddedModal && !isTitleDisplayed && (0, import_jsx_runtime58.jsx)(CenteredText, { variant: logo ? "bodyM" : "headingS", weight: "semiBold", children: title }),
    (0, import_jsx_runtime58.jsx)(
      AuthMainStepContent,
      {
        disableEmailLogin,
        disablePhoneLogin,
        isGuestModeEnabled,
        oAuthMethods
      }
    )
  ] });
};
var Logo = safeStyled.img`
  height: 100px;
  max-width: 260px;
  object-fit: contain;
  box-sizing: content-box;
  align-self: center;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/Account.js
var import_jsx_runtime61 = __toESM(require_jsx_runtime(), 1);
var import_react98 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/AccountHeader.js
var import_jsx_runtime60 = __toESM(require_jsx_runtime(), 1);
var import_react97 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/AccountWalletSelect.js
var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);
var import_react96 = __toESM(require_react(), 1);
var getValue3 = (id3, type) => {
  return id3 && type ? `${id3}~${type}` : void 0;
};
var Wallet2 = ({
  wallet,
  withCopy,
  slot,
  withIcon,
  isMenu
}) => {
  const para = useInternalClient();
  const [isCopied, copy] = useCopyToClipboard();
  const { name, icon, src } = (0, import_react96.useMemo)(() => {
    var _a;
    let name2, icon2, src2;
    if (wallet.isExternal) {
      name2 = (_a = wallet.ensName) != null ? _a : truncateAddress(wallet.address, wallet.type, { prefix: para.cosmosPrefix });
      src2 = wallet.ensAvatar;
      icon2 = getExternalWalletIcon(wallet.externalProviderId);
    } else {
      name2 = `${para.partnerName} Wallet`;
      src2 = para.partnerLogo;
      icon2 = "wallet02";
    }
    return { name: name2, icon: icon2, src: src2 };
  }, [wallet, para.partnerName, para.partnerLogo, para.externalWallets]);
  return (0, import_jsx_runtime59.jsxs)(WalletContainer2, { slot, style: isMenu ? void 0 : { flex: "0" }, children: [
    withIcon && (0, import_jsx_runtime59.jsx)(WalletIcon, { icon, src, size: "32px", inset: "6px" }),
    (0, import_jsx_runtime59.jsx)(
      CpslText,
      {
        variant: slot === "selected-item" ? "headingXS" : "bodyM",
        weight: "semiBold",
        color: "contrast",
        style: { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", flex: isMenu ? "1" : void 0 },
        children: name
      }
    ),
    withCopy && (0, import_jsx_runtime59.jsx)(
      CopyButton2,
      {
        id: "ignore-click",
        size: "small",
        variant: "ghost",
        onClick: (e) => {
          e.stopPropagation();
          e.preventDefault();
          copy(para.getDisplayAddress(wallet.id, { addressType: wallet.type }));
        },
        children: (0, import_jsx_runtime59.jsx)(CpslIcon, { id: "ignore-click", slot: "start", icon: isCopied ? "check" : "copy" })
      }
    )
  ] });
};
var AccountWalletSelect = () => {
  var _a, _b, _c;
  const containerRef = (0, import_react96.useRef)(null);
  const { dropdownMaxHeight, dropdownWidth, mobileAnchor, resize: resize2 } = useDropdownPosition(containerRef);
  const { setSelectedWallet } = useWalletState();
  const { data: activeWallet } = useWallet();
  const { embedded } = useAccount();
  const firstEmbeddedWallet = (_b = (_a = embedded == null ? void 0 : embedded.wallets) == null ? void 0 : _a.filter((wallet) => !wallet.isExternal)) == null ? void 0 : _b[0];
  const availableExternalWallets = ((_c = embedded == null ? void 0 : embedded.wallets) == null ? void 0 : _c.filter((wallet) => wallet.isExternal)) || [];
  const availableWallets = [...firstEmbeddedWallet ? [firstEmbeddedWallet] : [], ...availableExternalWallets];
  const isMultiWallet = availableWallets && availableWallets.length > 1;
  const ActiveWalletNode = activeWallet ? (0, import_jsx_runtime59.jsx)(Wallet2, { wallet: activeWallet, slot: "selected-item", withCopy: activeWallet.isExternal }) : null;
  (0, import_react96.useEffect)(() => {
    if (dropdownMaxHeight && (activeWallet == null ? void 0 : activeWallet.address)) {
      resize2();
    }
  }, [activeWallet, availableWallets, dropdownMaxHeight]);
  return (0, import_jsx_runtime59.jsx)(Container14, { children: (0, import_jsx_runtime59.jsx)(SelectContainer2, { ref: containerRef, id: "addressInputContainer", children: (0, import_jsx_runtime59.jsxs)(
    Select2,
    {
      selectedValue: getValue3(activeWallet == null ? void 0 : activeWallet.id, activeWallet == null ? void 0 : activeWallet.type),
      onCpslSelectValueChange: (e) => {
        const [id3, type] = e.detail.split("~");
        setSelectedWallet({ id: id3, type });
      },
      showFormattedSelectedItem: true,
      placeholder: "Choose wallet...",
      anchorElId: "addressInputContainer",
      dropdownMaxHeight,
      $width: dropdownWidth != null ? dropdownWidth : 0,
      $top: (mobileAnchor != null ? mobileAnchor : 0) + 184 + 1,
      selectedItemVariant: "bodyXS",
      icon: isMultiWallet ? "chevronUp" : null,
      disabled: !isMultiWallet,
      children: [
        activeWallet && ActiveWalletNode,
        firstEmbeddedWallet && (0, import_jsx_runtime59.jsx)(SelectItem2, { slot: "items", value: getValue3(firstEmbeddedWallet == null ? void 0 : firstEmbeddedWallet.id, firstEmbeddedWallet == null ? void 0 : firstEmbeddedWallet.type), children: (0, import_jsx_runtime59.jsx)(Wallet2, { isMenu: true, wallet: firstEmbeddedWallet, withIcon: true }) }, "embedded"),
        (availableExternalWallets || []).map((wallet) => {
          const key = getValue3(wallet.id, wallet.type);
          return (0, import_jsx_runtime59.jsx)(SelectItem2, { slot: "items", value: key, children: (0, import_jsx_runtime59.jsx)(Wallet2, { isMenu: true, wallet, withIcon: true, withCopy: true }) }, key);
        })
      ]
    }
  ) }) });
};
var Container14 = safeStyled.div`
  flex: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;
var WalletContainer2 = safeStyled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`;
var Select2 = safeStyled(CpslSelect)`
  --icon-width: 32px;
  --icon-height: 32px;
  --container-border-color: transparent;
  --container-background-color: transparent;
  --container-border-width: 0px;
  --container-background-color-disabled: var(--container-background-color);
  --container-box-shadow: none !important;
  --dropdown-border-width: 0px;
  --dropdown-background-color: var(--cpsl-color-background-4);
  
  width: 286px;
  position: relative;

  &::part(selected-text) {
    white-space: nowrap;
  }

  &::part(select-container) {
    justify-content: center;
  }

  &::part(dropdown) {
    min-width: ${({ $width }) => `${$width - 2}px`};
  }

  &::part(popover) {
      /* Have to adjust the top of the popover here since we're using a transform on the modal which causes fixed position items to not be relative to the viewport */
      @media (max-width: ${MOBILE_SIZE}px) {
        top: ${({ $top }) => $top ? `${$top}px` : "0px"};
        bottom: 16px;
      }
      cpsl-auth-modal.force-mobile-media & {
        top: ${({ $top }) => $top ? `${$top}px` : "0px"};
        bottom: 16px;
      }
    }

  &::part(icon) {
    --icon-color: var(--cpsl-color-text-primary);
  }
`;
var SelectItem2 = safeStyled(CpslSelectItem)`
  --outer-container-padding-start: 0px;
  --outer-container-padding-end: 0px;
  --outer-container-padding-top: 0px;
  --outer-container-padding-bottom: 0px;
  --container-padding-start: 12px;
  --container-padding-end: 12px;
  --container-padding-top: 8px;
  --container-padding-bottom: 8px;
  --container-background-color: var(--cpsl-color-background-4);
  --container-hover-background-color: var(--cpsl-color-background-8);
  width: 100%;
`;
var SelectContainer2 = safeStyled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: var(--cpsl-border-radius-tile-button);
  background-color: transparent;
`;
var WalletIcon = safeStyled(CpslIcon)`
  --icon-border: 1px solid var(--cpsl-color-background-8);
  --icon-background: var(--cpsl-color-background-0);
  --icon-border-radius: 4px;
`;
var CopyButton2 = safeStyled(CpslButton)`
  cpsl-icon {
    --height: 24px;
    --width: 24px;
  }
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/AccountHeader.js
var AccountHeader = ({ withBalance = false } = {}) => {
  const para = useInternalClient();
  const { connectionType } = useAccount();
  const { profileBalance, totalBalance } = useAssets();
  const { data: activeWallet } = useWallet();
  const { name, icon, src } = (0, import_react97.useMemo)(() => {
    var _a;
    let name2, icon2, src2;
    switch (true) {
      case (activeWallet == null ? void 0 : activeWallet.isExternal):
        name2 = (_a = activeWallet.ensName) != null ? _a : truncateAddress(activeWallet.address, activeWallet.type, { prefix: para.cosmosPrefix });
        src2 = activeWallet.ensAvatar;
        icon2 = getExternalWalletIcon(activeWallet.externalProviderId);
        break;
      default:
        name2 = `${para.partnerName} Wallet`;
        src2 = para.partnerLogo;
        icon2 = "wallet02";
        break;
    }
    return { name: name2, icon: icon2, src: src2 };
  }, [para.partnerName, para.partnerLogo, activeWallet]);
  return (0, import_jsx_runtime60.jsxs)(AccountContainer, { children: [
    (0, import_jsx_runtime60.jsx)(
      CpslIcon,
      {
        size: "48px",
        inset: "8px",
        border: "1px solid var(--cpsl-color-background-8)",
        color: "var(--cpsl-color-foreground-0)",
        radius: "theme",
        icon,
        src
      }
    ),
    connectionType === "both" ? (0, import_jsx_runtime60.jsx)(AccountWalletSelect, {}) : (0, import_jsx_runtime60.jsx)(CpslText, { variant: "headingXS", weight: "semiBold", color: "contrast", children: name }),
    withBalance && typeof totalBalance === "string" && totalBalance !== "" && (0, import_jsx_runtime60.jsx)(CpslText, { variant: "bodyM", weight: "medium", style: { visibility: profileBalance ? "visible" : "hidden" }, children: totalBalance })
  ] });
};
var AccountContainer = safeStyled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/Account.js
var Account = () => {
  const onRampConfig = useModalStore((state2) => state2.onRampConfig);
  const setStep = useModalStore((state2) => state2.setStep);
  const setGuestAddFundsTab = useModalStore((state2) => state2.setGuestAddFundsTab);
  const setOnRampStep = useModalStore((state2) => state2.setOnRampStep);
  const sendTx = useModalStore((state2) => state2.sendTx);
  const para = useInternalClient();
  const { embedded } = useAccount();
  const { selectedWallet, setSelectedWallet } = useWalletState();
  const { isEnabled } = useAccountLinking();
  const { profileBalance } = useAssets();
  const isGuestMode = embedded.isConnected && embedded.isGuestMode;
  const cantBuyAndWithdraw = (para.externalWalletConnectionType === "CONNECTION_ONLY" || para.externalWalletConnectionType === "VERIFICATION") && !para.userId;
  const isOnRampLoaded = !!onRampConfig;
  const handleSendClick = () => {
    var _a, _b;
    if ((selectedWallet == null ? void 0 : selectedWallet.type) === "COSMOS" || ((_a = embedded.wallets) == null ? void 0 : _a.some((w) => w.id === (selectedWallet == null ? void 0 : selectedWallet.id) && w.isExternal))) {
      const validWallet = (_b = embedded.wallets) == null ? void 0 : _b.find(({ type, isExternal }) => type !== "COSMOS" && !isExternal);
      if (!validWallet) {
        return;
      }
      setSelectedWallet({ id: validWallet.id, type: validWallet.type });
    }
    setStep(ModalStep.ACCOUNT_SEND);
  };
  const handleBuyClick = () => {
    if (isGuestMode) {
      if (onRampConfig == null ? void 0 : onRampConfig.isReceiveEnabled) {
        setStep(ModalStep.ADD_FUNDS_RECEIVE);
      } else {
        setGuestAddFundsTab(EnabledFlow.BUY);
        setStep(ModalStep.AUTH_GUEST_SIGNUP);
      }
    } else if ((onRampConfig == null ? void 0 : onRampConfig.isBuyEnabled) || (onRampConfig == null ? void 0 : onRampConfig.isReceiveEnabled)) {
      setOnRampStep(OnRampStep.SETTINGS);
      setStep((onRampConfig == null ? void 0 : onRampConfig.isBuyEnabled) ? ModalStep.ADD_FUNDS_BUY : ModalStep.ADD_FUNDS_RECEIVE);
    }
  };
  const handleSellClick = () => {
    if (isGuestMode) {
      setGuestAddFundsTab(EnabledFlow.WITHDRAW);
      setStep(ModalStep.AUTH_GUEST_SIGNUP);
    } else {
      setOnRampStep(OnRampStep.SETTINGS);
      setStep(ModalStep.ADD_FUNDS_WITHDRAW);
    }
  };
  const handleProfileClick = () => {
    setStep(ModalStep.ACCOUNT_PROFILE);
  };
  (0, import_react98.useEffect)(() => {
    setGuestAddFundsTab();
  }, []);
  return (0, import_jsx_runtime61.jsx)(StepContainer, { $wide: true, children: (0, import_jsx_runtime61.jsxs)($InnerStepContainer2, { children: [
    (0, import_jsx_runtime61.jsx)(AccountHeader, { withBalance: true }),
    (0, import_jsx_runtime61.jsxs)(LowerContainer, { children: [
      isGuestMode && (0, import_jsx_runtime61.jsxs)(import_jsx_runtime61.Fragment, { children: [
        profileBalance && profileBalance.value && profileBalance.value.value > 0 && (0, import_jsx_runtime61.jsxs)(Alert, { children: [
          (0, import_jsx_runtime61.jsx)(CpslIcon, { icon: "alertTriangle", size: "24px", style: { color: "var(--cpsl-color-utility-yellow)" } }),
          "You've funded this account - complete account setup to maintain access."
        ] }),
        (0, import_jsx_runtime61.jsxs)(
          CpslButton,
          {
            fullWidth: true,
            variant: "primary",
            onClick: () => {
              setStep(ModalStep.AUTH_GUEST_SIGNUP);
            },
            children: [
              (0, import_jsx_runtime61.jsx)(CpslIcon, { icon: "stars02" }),
              "Complete Account Setup"
            ]
          }
        )
      ] }),
      !!(sendTx == null ? void 0 : sendTx.explorerUrl) && (0, import_jsx_runtime61.jsxs)(MonitorLink, { target: "_blank", href: sendTx.explorerUrl, rel: "noopener noreferrer", children: [
        (0, import_jsx_runtime61.jsx)("span", { children: "Monitor Transaction" }),
        (0, import_jsx_runtime61.jsx)(CpslIcon, { icon: "externalLink", size: "16px", style: { marginLeft: "6px" } })
      ] }),
      (0, import_jsx_runtime61.jsx)(ButtonContainer2, { children: isOnRampLoaded ? (0, import_jsx_runtime61.jsxs)(import_jsx_runtime61.Fragment, { children: [
        (onRampConfig.isBuyEnabled || onRampConfig.isReceiveEnabled) && !cantBuyAndWithdraw && (0, import_jsx_runtime61.jsx)(OptionButton, { icon: "plusCircle", onClick: handleBuyClick, children: (0, import_jsx_runtime61.jsx)(CpslText, { variant: "bodyXS", color: "secondary", weight: "medium", children: "Add Funds" }) }),
        (0, import_jsx_runtime61.jsx)(OptionButton, { icon: "send", onClick: handleSendClick, disabled: !profileBalance, children: (0, import_jsx_runtime61.jsx)(CpslText, { variant: "bodyXS", color: "secondary", weight: "medium", children: "Send" }) }),
        onRampConfig.isWithdrawEnabled && !cantBuyAndWithdraw && (0, import_jsx_runtime61.jsx)(OptionButton, { icon: "arrowCircleDown", onClick: handleSellClick, children: (0, import_jsx_runtime61.jsx)(CpslText, { variant: "bodyXS", color: "secondary", weight: "medium", children: "Withdraw" }) }),
        (0, import_jsx_runtime61.jsx)(OptionButton, { icon: "user01", onClick: handleProfileClick, children: (0, import_jsx_runtime61.jsx)(CpslText, { variant: "bodyXS", color: "secondary", weight: "medium", children: isEnabled ? "Profile" : "Settings" }) })
      ] }) : (0, import_jsx_runtime61.jsx)(CpslSpinner, {}) })
    ] })
  ] }) });
};
var ButtonContainer2 = safeStyled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;
var OptionButton = safeStyled(CpslTileButton)`
  --button-gap: 4px;
  --button-width: 100%;
  --button-icon-height: 24px;
  --button-icon-width: 24px;
  --button-padding-top: 12px;
  --button-padding-bottom: 12px;
  --button-icon-color: var(--cpsl-color-text-contrast);
  --button-height: auto;
  flex: 1;
`;
var $InnerStepContainer2 = safeStyled(InnerStepContainer)`
  gap: 24px;
  `;
var Alert = safeStyled.div`
  --icon-color: var(--cpsl-color-utility-yellow);
  --icon-stroke-color: var(--cpsl-color-utility-yellow);
  --icon-fill-color: var(--cpsl-color-utility-yellow);

  display: flex;
  padding: 8px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: var(--cpsl-border-radius-alert);
  border: 1px solid var(--cpsl-color-utility-yellow);
  background: var(--cpsl-color-utility-yellow-light);
  font-size: 14px;
`;
var LowerContainer = safeStyled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;
var MonitorLink = safeStyled.a`
  font-family: var(--cpsl-font-family);
  font-size: 14px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--cpsl-color-text-primary);
  --icon-color: var(--cpsl-color-text-primary);

  &:hover {
    color: var(--cpsl-color-text-contrast);
    --icon-color: var(--cpsl-color-text-contrast);
  }
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/ExternalWalletStep/ExternalWalletStep.js
var import_jsx_runtime62 = __toESM(require_jsx_runtime(), 1);
var import_react99 = __toESM(require_react(), 1);
var isSolanaWalletInAppBrowser = (wallet) => {
  var _a;
  switch (wallet) {
    case "PHANTOM":
      return !!((_a = window == null ? void 0 : window.phantom) == null ? void 0 : _a.solana);
    case "SOLFLARE":
      return !!(window == null ? void 0 : window.solflare);
    case "BACKPACK":
      return !!(window == null ? void 0 : window.backpack);
    case "GLOW":
      return !!(window == null ? void 0 : window.glowSolana);
    default:
      break;
  }
};
var ExternalWalletMobileConnect = ({
  wallet,
  onConnectWc,
  onRetryClick
}) => {
  var _a, _b;
  const externalWalletError = useModalStore((state2) => state2.externalWalletError);
  const [isCopied, copy] = useCopyToClipboard();
  const appName = useStore2((state2) => state2.appName);
  const isWalletConnect = wallet.id === "WalletConnect";
  const { qrUri } = useExternalWallets();
  const handleCopy = () => {
    if (qrUri) {
      copy(qrUri);
    }
  };
  const isError = !!(externalWalletError == null ? void 0 : externalWalletError[0]);
  const handleRetryClick = () => __async(void 0, null, function* () {
    if (isError && onRetryClick) {
      yield onRetryClick();
    } else {
      yield openMobileUrl(qrUri);
    }
  });
  if (wallet.type === "SOLANA" || isMobile() && !isTablet()) {
    return (0, import_jsx_runtime62.jsxs)(import_jsx_runtime62.Fragment, { children: [
      wallet.type === "SOLANA" && !!qrUri && !isSolanaWalletInAppBrowser(wallet.internalId) && (0, import_jsx_runtime62.jsx)(InnerStepContainer, { children: (0, import_jsx_runtime62.jsx)(
        HeroSpinner,
        {
          icon: (0, import_jsx_runtime62.jsx)(HeroAccountTypeIcon, { accountType: wallet.internalId, src: wallet ? wallet.iconUrl : void 0 }),
          status: isError ? "error" : "pending",
          text: isError ? externalWalletError[0] : `Continue in the ${wallet.name} mobile app.`,
          secondaryText: externalWalletError == null ? void 0 : externalWalletError[1]
        }
      ) }),
      wallet.id !== "WalletConnect" && (0, import_jsx_runtime62.jsxs)(InnerStepContainer, { children: [
        (0, import_jsx_runtime62.jsx)(
          HeroSpinner,
          {
            icon: (0, import_jsx_runtime62.jsx)(HeroAccountTypeIcon, { accountType: wallet.internalId, src: wallet ? wallet.iconUrl : void 0 }),
            status: wallet.type === "SOLANA" && !isSolanaWalletInAppBrowser(wallet.internalId) ? "idle" : isError ? "error" : "pending",
            text: wallet.type === "SOLANA" && (!isSolanaWalletInAppBrowser(wallet.internalId) || wallet.hasIosSafariExtension) ? "" : isError ? externalWalletError[0] : `Confirm connection request in the ${wallet.name} app.`,
            secondaryText: externalWalletError == null ? void 0 : externalWalletError[1]
          }
        ),
        wallet.type === "SOLANA" && isSolanaWalletInAppBrowser(wallet.internalId) && !wallet.hasIosSafariExtension || wallet.type !== "SOLANA" ? (0, import_jsx_runtime62.jsx)(CpslButton, { onClick: handleRetryClick, fullWidth: true, children: isError ? "Retry" : "Connect Wallet" }) : (0, import_jsx_runtime62.jsx)(Text2, { weight: "semiBold", children: wallet.hasIosSafariExtension ? `Please install and use the ${wallet.name} extension for iOS Safari.` : `Please navigate to ${appName} in the ${wallet.name} wallet.` }),
        !wallet.hasIosSafariExtension && (0, import_jsx_runtime62.jsx)(Link, { href: (_a = wallet.downloadUrl) != null ? _a : "", target: "_blank", children: (0, import_jsx_runtime62.jsxs)(ExternalButton, { variant: "secondary", children: [
          `Get ${wallet.name}`,
          (0, import_jsx_runtime62.jsx)(ExternalIcon, { icon: "linkExternal" })
        ] }) })
      ] })
    ] });
  }
  const GetWalletButton = (0, import_jsx_runtime62.jsxs)(ExternalButton, { variant: "secondary", onClick: isWalletConnect ? () => onConnectWc(wallet) : void 0, children: [
    `${isWalletConnect ? "Open" : "Get"} ${wallet.name}`,
    (0, import_jsx_runtime62.jsx)(ExternalIcon, { icon: "linkExternal" })
  ] });
  return (0, import_jsx_runtime62.jsxs)(import_jsx_runtime62.Fragment, { children: [
    (0, import_jsx_runtime62.jsxs)(InnerStepContainer, { children: [
      (0, import_jsx_runtime62.jsx)(CpslText, { weight: "semiBold", children: "Scan with your mobile device" }),
      (0, import_jsx_runtime62.jsx)(QRContainer, { children: !qrUri ? (0, import_jsx_runtime62.jsx)(CpslSpinner, { size: 100 }) : (0, import_jsx_runtime62.jsx)(CpslQrCode, { url: qrUri, imageSrc: wallet.iconUrl }) }),
      (0, import_jsx_runtime62.jsxs)(CpslButton, { size: "small", variant: "ghost", onClick: handleCopy, children: [
        (0, import_jsx_runtime62.jsx)(CpslIcon, { slot: "start", icon: isCopied ? "check" : "copy" }),
        isCopied ? "Copied" : "Copy Link"
      ] })
    ] }),
    (0, import_jsx_runtime62.jsx)(InnerStepContainer, { children: isWalletConnect ? (0, import_jsx_runtime62.jsx)(import_jsx_runtime62.Fragment, { children: GetWalletButton }) : (0, import_jsx_runtime62.jsx)(Link, { href: (_b = wallet.downloadUrl) != null ? _b : "", target: "_blank", children: GetWalletButton }) })
  ] });
};
var ExternalWalletStep = ({ isAddingWallets = false }) => {
  const externalWalletError = useModalStore((state2) => state2.externalWalletError);
  const step = useModalStore((state2) => state2.step);
  const setStep = useModalStore((state2) => state2.setStep);
  const { connectExternalWallet, addAdditionalExternalWallet, wallet, qrUri, walletDisplayHelpers } = useExternalWallets();
  const handleConnect = (0, import_react99.useCallback)(
    (wallet2, isWc = false, isRetryConnection = false) => __async(void 0, null, function* () {
      if (isAddingWallets) {
        yield addAdditionalExternalWallet(wallet2);
      } else {
        yield isWc ? connectExternalWallet({ wallet: wallet2, isMobile: true, isManualWalletConnect: true }) : connectExternalWallet({ wallet: wallet2, isMobile: wallet2.isMobile, isRetryConnection });
      }
    }),
    [isAddingWallets, addAdditionalExternalWallet, connectExternalWallet]
  );
  const handleTryAgainClick = () => __async(void 0, null, function* () {
    if (wallet) {
      yield handleConnect(wallet, false, true);
    }
  });
  const Content4 = (0, import_react99.useMemo)(() => {
    var _a;
    if (!wallet) {
      return null;
    }
    const isWalletConnect = wallet.id === "WalletConnect";
    const isMobileWalletConnect = isMobile() && isWalletConnect;
    if (isMobileWalletConnect) {
      (0, import_jsx_runtime62.jsx)(InnerStepContainer, { children: (0, import_jsx_runtime62.jsx)(Text2, { weight: "semiBold", children: "Continue in the WalletConnect modal." }) });
    }
    const { showExtension, showMobile } = walletDisplayHelpers;
    if (!showMobile && !showExtension) {
      return (0, import_jsx_runtime62.jsx)(InnerStepContainer, { children: (0, import_jsx_runtime62.jsx)(Text2, { weight: "semiBold", children: `${wallet.name} isn't supported on mobile devices.

Please choose another wallet or continue on desktop.` }) });
    }
    if (showExtension) {
      const isInstalled = wallet.installed;
      const isError = !isInstalled || (externalWalletError == null ? void 0 : externalWalletError.length);
      return (0, import_jsx_runtime62.jsxs)(InnerStepContainer, { children: [
        (0, import_jsx_runtime62.jsx)(
          HeroSpinner,
          {
            icon: (0, import_jsx_runtime62.jsx)(HeroAccountTypeIcon, { accountType: wallet.internalId, src: wallet ? wallet.iconUrl : void 0 }),
            status: isError ? "error" : "pending",
            text: isError ? isInstalled ? externalWalletError == null ? void 0 : externalWalletError[0] : `${wallet.name} not detected` : `Confirm connection request in the ${wallet.name} browser extension.`
          }
        ),
        isError && (0, import_jsx_runtime62.jsxs)(
          CpslButton,
          {
            as: isInstalled ? "button" : "a",
            href: (_a = wallet.downloadUrl) != null ? _a : "",
            target: "_blank",
            variant: "secondary",
            onClick: handleTryAgainClick,
            children: [
              (0, import_jsx_runtime62.jsx)(CpslIcon, { fullWidth: true, slot: "start", icon: isInstalled ? "refresh" : "linkExternal" }),
              isInstalled ? "Try Again" : `Get ${wallet.name}`
            ]
          }
        )
      ] });
    }
    if (showMobile) {
      return (0, import_jsx_runtime62.jsx)(
        ExternalWalletMobileConnect,
        {
          wallet,
          qrUri,
          onConnectWc: (w) => __async(void 0, null, function* () {
            yield handleConnect(w, true);
          }),
          onRetryClick: () => __async(void 0, null, function* () {
            yield connectExternalWallet({ wallet, isMobile: true, isRetryConnection: true });
          })
        }
      );
    }
  }, [
    wallet,
    walletDisplayHelpers,
    externalWalletError,
    qrUri,
    isAddingWallets,
    addAdditionalExternalWallet,
    connectExternalWallet
  ]);
  (0, import_react99.useEffect)(() => {
    if (!wallet) {
      if (step === ModalStep.ADD_EX_WALLET_SELECTED) {
        setStep(ModalStep.ADD_EX_WALLET_MORE);
      } else {
        setStep(ModalStep.AUTH_MAIN);
      }
    }
  }, [wallet, step]);
  if (!wallet) {
    return null;
  }
  return (0, import_jsx_runtime62.jsx)(Container15, { children: Content4 });
};
var Container15 = safeStyled(StepContainer)`
  flex: 1;
  justify-content: space-between;
`;
var Text2 = safeStyled(CenteredText)`
  white-space: pre-line;
`;
var ExternalButton = safeStyled(CpslButton)`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  margin-top: 8px;
  text-decoration: none;
`;
var ExternalIcon = safeStyled(CpslIcon)`
  --height: 20px;
  --width: 20px;
`;
var Link = safeStyled.a`
  text-decoration: none;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/ChainSwitch/ChainSwitch.js
var import_jsx_runtime63 = __toESM(require_jsx_runtime(), 1);
var import_react100 = __toESM(require_react(), 1);
var ChainSwitch = () => {
  const [isCopied, copy] = useCopyToClipboard();
  const externalWalletError = useModalStore((state2) => state2.externalWalletError);
  const setStep = useModalStore((state2) => state2.setStep);
  const setStepDirection = useModalStore((state2) => state2.setStepDirection);
  const { switchChain, wallet, qrUri, chainIdSwitchingTo, walletDisplayHelpers } = useExternalWallets();
  (0, import_react100.useEffect)(() => {
    if ((wallet == null ? void 0 : wallet.type) === "COSMOS") {
      openMobileUrl(qrUri);
    }
  }, [qrUri, wallet]);
  (0, import_react100.useEffect)(() => {
    if (!wallet) {
      setStepDirection(-1);
      setStep(ModalStep.ACCOUNT_MAIN);
    }
  }, [wallet]);
  const handleTryAgainClick = () => __async(void 0, null, function* () {
    if (chainIdSwitchingTo) {
      yield switchChain(chainIdSwitchingTo);
    }
  });
  const handleCopy = () => {
    if (qrUri) {
      copy(qrUri);
    }
  };
  const Content4 = (0, import_react100.useMemo)(() => {
    var _a;
    if (!wallet) {
      return null;
    }
    const { isCosmosMobileWallet } = walletDisplayHelpers;
    if (isCosmosMobileWallet) {
      return (0, import_jsx_runtime63.jsx)(import_jsx_runtime63.Fragment, { children: (0, import_jsx_runtime63.jsxs)(InnerStepContainer, { children: [
        (0, import_jsx_runtime63.jsx)(CpslText, { weight: "semiBold", children: "Scan with your mobile device to switch networks" }),
        (0, import_jsx_runtime63.jsx)(QRContainer, { children: !qrUri ? (0, import_jsx_runtime63.jsx)(CpslSpinner, { size: 100 }) : (0, import_jsx_runtime63.jsx)(CpslQrCode, { url: qrUri, imageSrc: wallet.iconUrl }) }),
        (0, import_jsx_runtime63.jsxs)(CpslButton, { size: "small", variant: "ghost", onClick: handleCopy, children: [
          (0, import_jsx_runtime63.jsx)(CpslIcon, { slot: "start", icon: isCopied ? "check" : "copy" }),
          isCopied ? "Copied" : "Copy Link"
        ] })
      ] }) });
    }
    const isError = !!(externalWalletError == null ? void 0 : externalWalletError[0]);
    return (0, import_jsx_runtime63.jsxs)(InnerStepContainer, { children: [
      (0, import_jsx_runtime63.jsx)(
        HeroSpinner,
        {
          icon: (0, import_jsx_runtime63.jsx)(HeroAccountTypeIcon, { accountType: wallet.internalId, src: wallet ? wallet.iconUrl : void 0 }),
          status: isError ? "error" : "pending",
          text: isError ? externalWalletError[0] : `Confirm the request to change networks in your ${wallet.name} wallet.`,
          secondaryText: externalWalletError == null ? void 0 : externalWalletError[1]
        }
      ),
      ((_a = externalWalletError == null ? void 0 : externalWalletError[0]) == null ? void 0 : _a.toLowerCase()) !== NETWORK_NOT_SUPPORTED_ERROR && (0, import_jsx_runtime63.jsxs)(CpslButton, { fullWidth: true, variant: "secondary", onClick: handleTryAgainClick, children: [
        (0, import_jsx_runtime63.jsx)(CpslIcon, { slot: "start", icon: "refresh" }),
        "Try Again"
      ] })
    ] });
  }, [wallet, walletDisplayHelpers, externalWalletError, qrUri]);
  if (!wallet) {
    return null;
  }
  return (0, import_jsx_runtime63.jsx)(Container16, { children: Content4 });
};
var Container16 = safeStyled(StepContainer)`
  flex: 1;
  justify-content: space-between;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Controls/Controls.js
var import_jsx_runtime65 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Controls/ChainSelect.js
var import_jsx_runtime64 = __toESM(require_jsx_runtime(), 1);
var import_react101 = __toESM(require_react(), 1);
var Chain = ({
  chain: { id: id3, name },
  slot,
  isLarge = false
}) => {
  var _a;
  const network = getNetworkFromChainId(id3.toString());
  const networkName = (_a = name != null ? name : getNetworkName(id3.toString())) != null ? _a : `Chain ID ${id3.toString()}`;
  return (0, import_jsx_runtime64.jsxs)(
    "div",
    {
      slot,
      style: { display: "flex", alignItems: "center", gap: "4px", padding: isLarge ? "0px" : "4px 0 4px 8px" },
      children: [
        (0, import_jsx_runtime64.jsx)(NetworkIcon, { network, size: isLarge ? "24px" : "16px" }),
        (0, import_jsx_runtime64.jsx)(ChainName, { variant: isLarge ? "bodyS" : "bodyXS", color: "contrast", children: networkName })
      ]
    }
  );
};
var ChainSelect = () => {
  var _a, _b;
  const containerRef = (0, import_react101.useRef)(null);
  const { dropdownMaxHeight, dropdownWidth, mobileAnchor, resize: resize2 } = useDropdownPosition(containerRef);
  const { data: activeWallet } = useWallet();
  const { switchChain, chainId, chains, chainIdSwitchingTo } = useExternalWallets();
  (0, import_react101.useEffect)(() => {
    if (dropdownMaxHeight && chainId) {
      resize2();
    }
  }, [chainId, chainIdSwitchingTo, dropdownMaxHeight]);
  const handleChainChange = (chainId2) => __async(void 0, null, function* () {
    yield switchChain(chainId2);
  });
  if (!activeWallet || !activeWallet.isExternal || activeWallet.type === "SOLANA") {
    return null;
  }
  const chainIdToUse = chainIdSwitchingTo != null ? chainIdSwitchingTo : chainId;
  return (0, import_jsx_runtime64.jsx)(Container17, { children: (0, import_jsx_runtime64.jsx)(HeaderSelectContainer, { ref: containerRef, id: "inputContainer", children: (0, import_jsx_runtime64.jsxs)(
    HeaderSelect,
    {
      selectedValue: (_a = chainIdToUse == null ? void 0 : chainIdToUse.toString()) != null ? _a : "",
      onCpslSelectValueChange: (e) => {
        handleChainChange(e.detail);
      },
      showFormattedSelectedItem: true,
      placeholder: "Choose chain...",
      anchorElId: "inputContainer",
      dropdownMaxHeight,
      $width: dropdownWidth != null ? dropdownWidth : 0,
      $top: (mobileAnchor != null ? mobileAnchor : 0) + 16 + 1,
      autoWidth: true,
      alignCenter: true,
      selectedItemVariant: "bodyXS",
      children: [
        chainIdToUse && (0, import_jsx_runtime64.jsx)(
          Chain,
          {
            slot: "selected-item",
            chain: { id: chainIdToUse, name: (_b = chains.find((c) => c.id.toString() === chainIdToUse)) == null ? void 0 : _b.name }
          }
        ),
        chains == null ? void 0 : chains.map((chain) => (0, import_jsx_runtime64.jsx)(HeaderSelectItem, { slot: "items", value: chain.id.toString(), children: (0, import_jsx_runtime64.jsx)(Chain, { isLarge: true, chain }) }, chain.id))
      ]
    }
  ) }) });
};
var Container17 = safeStyled.div`
  flex: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;
var ChainName = safeStyled(CpslText)`
  max-width: 150px;
  text-transform: capitalize;

  &::part(text-element) {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Controls/Controls.js
var Controls = ({ onClose }) => {
  const bareModal = useStore2((state2) => {
    var _a;
    return (_a = state2.modalConfig) == null ? void 0 : _a.bareModal;
  });
  const hasPreviousStep = useModalStore((state2) => state2.hasPreviousStep());
  const goBack = useGoBack();
  const { isControls } = useStepTitle();
  const handleBackClick = () => {
    goBack();
  };
  return (0, import_jsx_runtime65.jsxs)(Container18, { children: [
    (0, import_jsx_runtime65.jsx)(
      BackButton,
      {
        variant: "ghost",
        style: {
          visibility: hasPreviousStep ? "visible" : "hidden"
        },
        onClick: handleBackClick,
        children: (0, import_jsx_runtime65.jsx)(CpslIcon, { icon: "arrow" })
      }
    ),
    (0, import_jsx_runtime65.jsx)(MiddleContainer, { children: isControls && (0, import_jsx_runtime65.jsx)(import_jsx_runtime65.Fragment, { children: (0, import_jsx_runtime65.jsx)(ChainSelect, {}) }) }),
    (0, import_jsx_runtime65.jsx)(CloseButton, { bareModal, variant: "ghost", onClick: onClose, children: (0, import_jsx_runtime65.jsx)(CpslIcon, { icon: "close" }) })
  ] });
};
var Container18 = safeStyled.div`
  position: absolute;
  height: 24px;
  top: 0;
  left: -24px;
  right: -24px;
  margin: 0 16px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
var MiddleContainer = safeStyled.div`
  flex: 1;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
var CloseButton = safeStyled(HeaderButton)`
  transform: rotate(180deg);
  visibility: ${({ bareModal }) => bareModal ? "hidden" : "visible"};
`;
var BackButton = safeStyled(HeaderButton)`
  transform: rotate(180deg);
  flex-basis: auto;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Body/Body.js
var import_react119 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/OAuth/TelegramOAuthStep.js
var import_jsx_runtime66 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/hooks/useTelegramLogin.js
var import_react102 = __toESM(require_react(), 1);
var useTelegramLogin = ({
  isActive = false,
  onSubmit,
  status: propsStatus,
  isLinking
} = {}) => {
  const para = useInternalClient();
  const refs = useModalStore((state2) => state2.refs);
  const [url, setUrl] = (0, import_react102.useState)();
  const [isLoaded, setIsLoaded] = (0, import_react102.useState)(false);
  const [msgStatus, setMsgStatus] = (0, import_react102.useState)("idle");
  const status = msgStatus === "success" ? propsStatus : msgStatus;
  (0, import_react102.useEffect)(() => {
    const setup = () => __async(void 0, null, function* () {
      if (!url) {
        if (!isLinking) {
          yield para.logout();
          yield para.touchSession(true);
        }
        para.constructPortalUrl(!isLinking ? "telegramLoginVerify" : "telegramLogin").then(setUrl);
      }
    });
    if (isActive) {
      setup();
    }
  }, [isActive, url]);
  (0, import_react102.useEffect)(() => {
    const updateState = (event) => __async(void 0, null, function* () {
      var _a, _b;
      if (!validatePortalOrigin(event, para.ctx)) {
        return;
      }
      switch (event.data.type) {
        case "TELEGRAM_LOGIN":
          setMsgStatus("pending");
          break;
        case "TELEGRAM_FAILED":
          setMsgStatus("error");
          break;
        case "TELEGRAM_SUCCESS":
          setMsgStatus("success");
          if (!!event.data.payload) {
            const authObject = event.data.payload;
            try {
              yield onSubmit == null ? void 0 : onSubmit(authObject);
            } catch (e) {
              (_b = (_a = refs.telegramIFrame.current) == null ? void 0 : _a.contentWindow) == null ? void 0 : _b.postMessage({ type: "TELEGRAM_RETRY" }, "*");
            }
          }
          break;
      }
    });
    if (isActive) {
      window == null ? void 0 : window.addEventListener("message", updateState, false);
    }
    return () => {
      window == null ? void 0 : window.removeEventListener("message", updateState, false);
    };
  }, [isActive, onSubmit]);
  return {
    url,
    isLoaded,
    setIsLoaded,
    status
  };
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/OAuth/TelegramOAuthStep.js
var import_react103 = __toESM(require_react(), 1);
function TelegramOAuthStep() {
  const { verifyTelegramStatus, verifyTelegram: verifyTelegram2 } = useAuthActions();
  const { url, isLoaded, setIsLoaded } = useTelegramLogin({
    isActive: true,
    status: verifyTelegramStatus,
    onSubmit: verifyTelegram2,
    isLinking: false
  });
  const refs = useModalStore((state2) => state2.refs);
  const para = useInternalClient();
  const [height, setHeight] = (0, import_react103.useState)(0);
  (0, import_react103.useEffect)(() => {
    const handleMessage = (event) => {
      if (!url) {
        return;
      }
      if (!validatePortalOrigin(event, para.ctx)) {
        return;
      }
      if (event.data) {
        if (event.data.type === "HEIGHT") {
          setHeight(event.data.height);
        }
      }
    };
    typeof window !== "undefined" && window.addEventListener("message", handleMessage);
    return () => {
      typeof window !== "undefined" && window.removeEventListener("message", handleMessage);
    };
  }, [url]);
  return (0, import_jsx_runtime66.jsxs)(Container19, { children: [
    url && (0, import_jsx_runtime66.jsx)(
      IFrame2,
      {
        ref: refs.telegramIFrame,
        style: { display: isLoaded ? "block" : "none", height },
        src: url,
        onLoad: () => setIsLoaded(true)
      }
    ),
    (!url || !isLoaded) && (0, import_jsx_runtime66.jsx)(CpslSpinner, {})
  ] });
}
function TelegramIFrame({
  url,
  isLoaded,
  setIsLoaded,
  isVisible = false
}) {
  const refs = useModalStore((state2) => state2.refs);
  if (!url) return null;
  return (0, import_jsx_runtime66.jsxs)(Container19, { children: [
    url && (0, import_jsx_runtime66.jsx)(
      IFrame2,
      {
        ref: refs.telegramIFrame,
        style: { display: isLoaded && isVisible ? "block" : "none" },
        src: url,
        onLoad: () => setIsLoaded(true)
      }
    ),
    (!url || !isLoaded) && (0, import_jsx_runtime66.jsx)(CpslSpinner, {})
  ] });
}
var Container19 = safeStyled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
var IFrame2 = safeStyled.iframe`
  width: 100%;
  height: 52px;
  border: none;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AwaitingPasswordStep/AwaitingPasswordStep.js
var import_jsx_runtime67 = __toESM(require_jsx_runtime(), 1);
var AwaitingPasswordStep = () => {
  const isLogin = useModalStore((state2) => state2.isLogin());
  const signupState = useModalStore((state2) => state2.getSignupState());
  const loginState = useModalStore((state2) => state2.getLoginState());
  const isPIN = !!(signupState == null ? void 0 : signupState.pinUrl) || !!(loginState == null ? void 0 : loginState.pinUrl);
  return (0, import_jsx_runtime67.jsx)(
    Waiting,
    {
      heading: isLogin ? `Waiting for ${isPIN ? "PIN" : "Password"}` : `Creating  ${isPIN ? "PIN" : "Password"}`,
      subheading: "Follow the prompts presented by your browser."
    }
  );
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/IFrameStep/IFrameStep.js
var import_jsx_runtime68 = __toESM(require_jsx_runtime(), 1);
var import_react104 = __toESM(require_react(), 1);
var IFrameStep = () => {
  const iFrameUrl = useModalStore((state2) => state2.iFrameUrl);
  const setIsReady = useModalStore((state2) => state2.setIsIFrameReady);
  const isReady = useModalStore((state2) => state2.isIFrameReady);
  const currentStep = useModalStore((state2) => state2.step);
  const refs = useModalStore((state2) => state2.refs);
  const embeddedModal = useStore2((state2) => {
    var _a;
    return (_a = state2.modalConfig) == null ? void 0 : _a.embeddedModal;
  });
  const para = useInternalClient();
  const [height, setHeight] = (0, import_react104.useState)(0);
  (0, import_react104.useEffect)(() => {
    if (!IFrameSteps.includes(currentStep)) {
      setHeight(0);
    }
  }, [currentStep]);
  (0, import_react104.useEffect)(() => {
    const handleMessage = (event) => {
      if (!iFrameUrl) {
        return;
      }
      if (!validatePortalOrigin(event, para.ctx)) {
        return;
      }
      if (event.data) {
        if (event.data.type === "HEIGHT" && typeof event.data.height === "number") {
          setHeight(Math.max(event.data.height, 200));
          setIsReady(event.data.height > 0 ? true : false);
        }
      }
    };
    typeof window !== "undefined" && window.addEventListener("message", handleMessage);
    return () => {
      typeof window !== "undefined" && window.removeEventListener("message", handleMessage);
    };
  }, [setIsReady, iFrameUrl]);
  return (0, import_jsx_runtime68.jsxs)(OuterContainer, { $isVisible: IFrameSteps.includes(currentStep), $embeddedModal: !!embeddedModal, $isReady: !!isReady, children: [
    (0, import_jsx_runtime68.jsx)(Container20, { $isReady: !!isReady, $height: height, children: (0, import_jsx_runtime68.jsx)("iframe", { src: iFrameUrl, ref: refs.iFrame }) }),
    !isReady && (0, import_jsx_runtime68.jsx)(SpinnerContainer, { style: { width: "100%", height: "100%", flex: 1, position: "absolute" }, children: (0, import_jsx_runtime68.jsx)(CpslSpinner, { size: 100 }) })
  ] });
};
var OuterContainer = safeStyled.div`
  position: relative;
  height: ${({ $isVisible, $isReady }) => $isVisible ? $isReady ? "auto" : "200px" : "0px"};
  width: ${({ $isVisible }) => $isVisible ? "100%" : "0px"};
  flex: ${({ $isVisible }) => $isVisible ? 1 : "auto"};
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${MOBILE_SIZE}px) {
    padding: ${({ $embeddedModal, $isVisible }) => !$isVisible ? "0px" : $embeddedModal ? "12px 0px 0px" : "0px"};
  }
`;
var Container20 = safeStyled.div`
  height: ${({ $height }) => $height}px;
  width: 100%;
  opacity: ${({ $isReady }) => $isReady ? 1 : 0};

  & > iframe {
    height: ${({ $height }) => $height}px;
    width: 100%;
    border: none;
    background: transparent;
  }
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/ExternalWalletVerificationStep/ExternalWalletVerificationStep.js
var import_jsx_runtime69 = __toESM(require_jsx_runtime(), 1);
var import_react105 = __toESM(require_react(), 1);
var ExternalWalletVerificationStep = () => {
  const effectRan = (0, import_react105.useRef)(false);
  const { verifyWalletSignature, verificationStage } = useExternalWallets();
  const externalWalletError = useModalStore((state2) => state2.externalWalletError);
  (0, import_react105.useEffect)(() => {
    const hasRun = effectRan.current;
    if (!hasRun) {
      verifyWalletSignature();
      effectRan.current = true;
    }
  }, []);
  const isVerifying = verificationStage === "verifying";
  const header = isVerifying ? "Verifying Your Wallet" : "Switching Network";
  const subheader = isVerifying ? "Sign the message with your wallet to complete sign up." : "Confirm the request to switch the network in your wallet.";
  return (0, import_jsx_runtime69.jsxs)(StepContainer, { $wide: true, children: [
    (0, import_jsx_runtime69.jsxs)(InnerStepContainer, { children: [
      (0, import_jsx_runtime69.jsx)(Heading, { children: header }),
      (0, import_jsx_runtime69.jsx)(InlineText3, { variant: "bodyS", color: "secondary", children: subheader }),
      !!(externalWalletError == null ? void 0 : externalWalletError[0]) && (0, import_jsx_runtime69.jsxs)(ErrorContainer, { children: [
        (0, import_jsx_runtime69.jsx)(ErrorIcon, { icon: "alertCircle" }),
        (0, import_jsx_runtime69.jsx)(CpslText, { weight: "semiBold", color: "error", children: externalWalletError == null ? void 0 : externalWalletError[0] })
      ] })
    ] }),
    (0, import_jsx_runtime69.jsx)(InnerStepContainer, { children: !externalWalletError || !effectRan.current ? (0, import_jsx_runtime69.jsx)(CpslSpinner, {}) : (0, import_jsx_runtime69.jsx)(CpslButton, { onClick: verifyWalletSignature, children: "Retry" }) })
  ] });
};
var InlineText3 = safeStyled(CpslText)`
  text-align: center;
  display: inline-block;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/AccountProfile.js
var import_jsx_runtime71 = __toESM(require_jsx_runtime(), 1);
var import_react107 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/AccountProfileEntry.js
var import_jsx_runtime70 = __toESM(require_jsx_runtime(), 1);
var import_react106 = __toESM(require_react(), 1);
var AccountProfileEntry = ({
  icon,
  key,
  text,
  textSecondary,
  textTertiary,
  copyString,
  accessory,
  style,
  className,
  onSelect
}) => {
  const [isCopied, copy] = useCopyToClipboard();
  const Copy = copyString ? (0, import_jsx_runtime70.jsx)(
    CpslButton,
    {
      size: "small",
      variant: "ghost",
      onClick: (e) => {
        e.stopPropagation();
        e.preventDefault();
        copy(copyString);
      },
      children: (0, import_jsx_runtime70.jsx)(CopyIcon, { id: "ignore-click", slot: "start", isCopied, icon: isCopied ? "check" : "copy" })
    }
  ) : null;
  return (0, import_jsx_runtime70.jsxs)(EntryContainer, { onClick: onSelect, className, style, children: [
    icon,
    (0, import_jsx_runtime70.jsx)(EntryDisplayName, { variant: "bodyM", color: "contrast", children: text }),
    (0, import_jsx_runtime70.jsx)(EntryFlex, { children: textSecondary ? (0, import_jsx_runtime70.jsxs)(import_jsx_runtime70.Fragment, { children: [
      (0, import_jsx_runtime70.jsx)(CpslText, { variant: "bodyM", color: "secondary", children: textSecondary }),
      Copy
    ] }) : Copy }),
    textTertiary && (0, import_jsx_runtime70.jsx)(CpslText, { variant: "bodyM", color: "contrast", children: textTertiary }),
    accessory,
    onSelect && (0, import_jsx_runtime70.jsx)(CpslIcon, { color: "var(--cpsl-color-foreground-32)", icon: "chevronRight", size: "16px" })
  ] }, key);
};
var WalletEntry = ({
  wallet,
  isSelectable = false,
  style,
  className
}) => {
  var _a, _b;
  const { wallets } = useExternalWallets();
  const { profileBalance } = useAssets();
  const balancesConfig = useStore2((state2) => {
    var _a2;
    return (_a2 = state2.modalConfig) == null ? void 0 : _a2.balances;
  });
  const setProfileWallet = useModalStore((state2) => state2.setProfileWallet);
  const setStep = useModalStore((state2) => state2.setStep);
  const walletBalance = (0, import_react106.useMemo)(() => {
    return profileBalance == null ? void 0 : profileBalance.wallets.find((w) => w.address === wallet.address);
  }, [profileBalance, wallet.address]);
  const externalWallet = (0, import_react106.useMemo)(
    () => wallets.find((w) => w.id === wallet.externalProviderId),
    [wallets, wallet.externalProviderId]
  );
  const withAddressShort = wallet.ensName || !!wallet.externalProviderId;
  const balance = (0, import_react106.useMemo)(() => {
    var _a2;
    switch (true) {
      case !balancesConfig:
      case (balancesConfig == null ? void 0 : balancesConfig.displayType) === "AGGREGATED":
        return formatCurrency(walletBalance == null ? void 0 : walletBalance.value);
      default:
        return formatAssetQuantity({
          quantity: (_a2 = walletBalance == null ? void 0 : walletBalance.assets.find(
            ({ metadata }) => !!metadata && metadata.symbol === balancesConfig.asset.symbol
          )) == null ? void 0 : _a2.quantity,
          symbol: balancesConfig.asset.symbol
        });
    }
  }, [balancesConfig, walletBalance]);
  return (0, import_jsx_runtime70.jsx)(
    AccountProfileEntry,
    {
      icon: (0, import_jsx_runtime70.jsx)(
        WalletTypeIcon,
        {
          walletType: wallet.type,
          externalWallet: externalWallet != null ? externalWallet : wallet.externalProviderId,
          size: "24px",
          inset: "0"
        }
      ),
      text: (_b = (_a = wallet.ensName) != null ? _a : wallet.externalProviderId) != null ? _b : wallet.addressShort,
      textSecondary: withAddressShort ? wallet.addressShort : void 0,
      textTertiary: balance,
      copyString: wallet.address,
      style,
      className,
      onSelect: isSelectable ? () => {
        setProfileWallet(wallet);
        setStep(ModalStep.ACCOUNT_WALLET);
      } : void 0
    },
    wallet.address
  );
};
var AccountLinkEntry = ({
  accountLink,
  isPrimary = false
}) => {
  var _a, _b, _c, _d;
  const para = useInternalClient();
  const { wallets } = useExternalWallets();
  const { unlinkAccount: unlinkAccount2 } = useAccountLinking();
  const { identifier, displayName, type, externalWallet } = accountLink;
  const externalWalletConnector = wallets.find(
    (wallet) => {
      var _a2, _b2;
      return wallet.id === (externalWallet == null ? void 0 : externalWallet.providerId) || wallet.id.toLowerCase() === ((_a2 = externalWallet == null ? void 0 : externalWallet.providerId) == null ? void 0 : _a2.toLowerCase()) || wallet.name.toLowerCase() === ((_b2 = externalWallet == null ? void 0 : externalWallet.providerId) == null ? void 0 : _b2.toLowerCase());
    }
  );
  let accountType = type;
  let src = void 0;
  let address = void 0;
  let addressShort = void 0;
  if (externalWallet) {
    address = (_a = externalWallet.addressBech32) != null ? _a : externalWallet.address;
    addressShort = truncateAddress(address, externalWallet.type, {
      prefix: para.cosmosPrefix
    });
    if (externalWalletConnector) {
      accountType = void 0;
      src = externalWalletConnector.iconUrl;
    } else if (externalWallet.providerId && ACCOUNT_TYPES[externalWallet.providerId]) {
      accountType = externalWallet.providerId;
      src = void 0;
    } else {
      accountType = "EXTERNAL_WALLET";
      src = void 0;
    }
  }
  return (0, import_jsx_runtime70.jsx)(
    AccountProfileEntry,
    {
      icon: (0, import_jsx_runtime70.jsx)(AccountTypeIcon, { accountType, src, size: "24px" }),
      text: externalWallet ? (_d = (_c = (_b = externalWallet.ensName) != null ? _b : externalWalletConnector == null ? void 0 : externalWalletConnector.name) != null ? _c : externalWallet.provider) != null ? _d : "" : displayName != null ? displayName : identifier,
      textSecondary: addressShort,
      copyString: address,
      accessory: isPrimary ? void 0 : (0, import_jsx_runtime70.jsx)(
        EntryUnlink,
        {
          href: "#",
          onClick: isPrimary ? void 0 : (e) => {
            e.preventDefault();
            unlinkAccount2(accountLink);
          },
          children: "Unlink"
        }
      )
    },
    identifier
  );
};
var EntryContainer = safeStyled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  ${({ onClick }) => onClick ? "cursor: pointer;" : ""}
`;
var EntryDisplayName = safeStyled(CpslText)``;
var EntryFlex = safeStyled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex: 1;
`;
var CopyIcon = safeStyled(CpslIcon)`
  --width: 16px;
  --height: 16px;
  --icon-color: ${({ isCopied }) => isCopied ? "var(--cpsl-color-utility-green) !important" : "var(--cpsl-color-text-secondary)"};

  &:hover {
    --icon-color: var(--cpsl-color-text-contrast);
  }
`;
var EntryUnlink = safeStyled.a`
  color: var(--cpsl-color-utility-red);
  position: absolute;
  right: 0;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  font-family: var(--cpsl-font-family);

  &:hover {
    text-decoration: underline;
  }
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/AccountProfile.js
var AccountProfile = ({
  isDisconnecting,
  onDisconnect
}) => {
  const para = useInternalClient();
  const { embedded } = useAccount();
  const { data: linkedAccounts } = useLinkedAccounts();
  const { isEnabled: isAccountLinkingEnabled, linkAccount: linkAccount2 } = useAccountLinking();
  const hideWallets = useStore2((state2) => {
    var _a;
    return (_a = state2.modalConfig) == null ? void 0 : _a.hideWallets;
  });
  const { switchWallets, switchWalletsUrl, setSwitchWalletsUrl, isSwitchWalletsPending } = useAuthActions();
  const setStep = useModalStore((state2) => state2.setStep);
  const partnerGroups = (0, import_react107.useMemo)(() => {
    var _a;
    return (_a = embedded == null ? void 0 : embedded.wallets) == null ? void 0 : _a.reduce((acc, wallet) => {
      if (!wallet.partner || !wallet.partner.id || !wallet.partner.displayName) return acc;
      const partnerGroup = acc.find((group) => {
        var _a2;
        return group.partner.id === ((_a2 = wallet.partner) == null ? void 0 : _a2.id);
      });
      return !!partnerGroup ? acc.map(
        (group) => group.partner.id === wallet.partner.id ? __spreadProps2(__spreadValues2({}, group), { wallets: [...group.wallets, wallet] }) : group
      ) : [...acc, { partner: wallet.partner, wallets: [wallet] }];
    }, []);
  }, [embedded == null ? void 0 : embedded.wallets]);
  (0, import_react107.useEffect)(() => {
    if (para) {
      para.getSwitchWalletsUrl().then((url) => {
        setSwitchWalletsUrl(url);
      });
    }
  }, []);
  if (!para || !switchWalletsUrl) {
    return (0, import_jsx_runtime71.jsx)(Waiting, {});
  }
  return (0, import_jsx_runtime71.jsxs)(StepContainer, { children: [
    partnerGroups && partnerGroups.length > 0 && (0, import_jsx_runtime71.jsxs)(Section, { children: [
      partnerGroups.map(({ partner, wallets }) => {
        return (0, import_jsx_runtime71.jsxs)(Section, { children: [
          (0, import_jsx_runtime71.jsxs)(Title, { variant: "bodyS", color: "secondary", children: [
            partner.displayName,
            " Wallets"
          ] }),
          (0, import_jsx_runtime71.jsx)(Content, { children: wallets.map((wallet) => (0, import_jsx_runtime71.jsx)(WalletEntry, { wallet, isSelectable: true }, `${wallet.address}-${wallet.type}`)) })
        ] }, partner.id);
      }),
      !embedded.isGuestMode && (0, import_jsx_runtime71.jsx)(CpslButton, { fullWidth: true, variant: "tertiary", onClick: switchWallets, disabled: isSwitchWalletsPending, children: isSwitchWalletsPending ? "Please Wait..." : (0, import_jsx_runtime71.jsxs)(import_jsx_runtime71.Fragment, { children: [
        (0, import_jsx_runtime71.jsx)(CpslIcon, { icon: "shuffle", slot: "start", size: "16px" }),
        para.isMultiWallet ? "Switch Wallets" : "Switch Wallet"
      ] }) })
    ] }),
    !embedded.isGuestMode && (0, import_jsx_runtime71.jsxs)(Section, { children: [
      (0, import_jsx_runtime71.jsx)(Title, { variant: "bodyS", color: "secondary", children: "Connected Wallets" }),
      (0, import_jsx_runtime71.jsxs)(Content, { children: [
        para.availableWallets.filter(({ isExternal }) => isExternal).map((wallet) => {
          return (0, import_jsx_runtime71.jsx)(WalletEntry, { wallet, isSelectable: true }, wallet.address);
        }),
        (0, import_jsx_runtime71.jsxs)(
          CpslButton,
          {
            fullWidth: true,
            variant: "tertiary",
            onClick: () => {
              setStep(ModalStep.ADD_EX_WALLET_MORE);
            },
            children: [
              (0, import_jsx_runtime71.jsx)(CpslIcon, { icon: "plus", slot: "start" }),
              "Add Wallet"
            ]
          }
        )
      ] })
    ] }),
    isAccountLinkingEnabled && (0, import_jsx_runtime71.jsxs)(Section, { children: [
      (0, import_jsx_runtime71.jsx)(Title, { variant: "bodyS", color: "secondary", children: "Linked Accounts" }),
      (0, import_jsx_runtime71.jsxs)(Content, { children: [
        (0, import_jsx_runtime71.jsx)(GradientScroll, { gap: "12px", height: "360px", children: [...((linkedAccounts == null ? void 0 : linkedAccounts.primary) || []).map((p) => __spreadProps2(__spreadValues2({}, p), { isPrimary: true })), ...(linkedAccounts == null ? void 0 : linkedAccounts.linked) || []].filter(({ externalWallet }) => {
          return !externalWallet || externalWallet.address !== (embedded == null ? void 0 : embedded.externalWalletAddress);
        }).map((linkedAccount) => {
          return (0, import_jsx_runtime71.jsx)(
            AccountLinkEntry,
            {
              accountLink: linkedAccount,
              isPrimary: linkedAccount.isPrimary
            },
            linkedAccount.id
          );
        }) }),
        (0, import_jsx_runtime71.jsxs)(CpslButton, { fullWidth: true, variant: "tertiary", onClick: () => linkAccount2(void 0), children: [
          (0, import_jsx_runtime71.jsx)(CpslIcon, { icon: "userPlus", slot: "start", size: "16px" }),
          "Link an account"
        ] })
      ] })
    ] }),
    (0, import_jsx_runtime71.jsxs)(DisconnectButton, { variant: "destructive", fullWidth: true, onClick: onDisconnect, disabled: isDisconnecting, children: [
      hideWallets ? "Logout" : "Disconnect Wallet",
      (0, import_jsx_runtime71.jsx)(CpslIcon, { icon: "logOut", slot: "end" })
    ] })
  ] });
};
var Section = safeStyled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;
var Content = safeStyled(Section)`
  gap: 12px;
`;
var Title = safeStyled(CpslText)`
  font-weight: 600;
`;
var DisconnectButton = safeStyled(CpslButton)`
  --button-border-width: 0px;
  --button-destructive-hover-background-color: rgba(255, 0, 0, 0.2);
  --button-destructive-active-background-color: rgba(255, 0, 0, 0.1);
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/AccountProfileLinkOptions.js
var import_jsx_runtime72 = __toESM(require_jsx_runtime(), 1);
var import_react108 = __toESM(require_react(), 1);
function AccountProfileLinkOptions() {
  const para = useInternalClient();
  const { accountLinkOptions, linkAccount: linkAccount2, isLinkAccountPending, linkAccountError, setLinkAccountError, resetMutations } = useAccountLinking();
  const { wallets } = useExternalWallets();
  const { data: linkedAccounts } = useLinkedAccounts();
  const [isEmail2, isPhone2, externalWalletIndex, isOptions] = [
    accountLinkOptions.includes("EMAIL"),
    accountLinkOptions.includes("PHONE"),
    accountLinkOptions.indexOf("EXTERNAL_WALLET"),
    (accountLinkOptions || []).filter((o) => o !== "EMAIL" && o !== "PHONE").length > 0
  ];
  const options = (0, import_react108.useMemo)(() => {
    const baseOptions = externalWalletIndex >= 0 ? [
      ...accountLinkOptions.slice(0, externalWalletIndex),
      ...wallets.map((wallet) => wallet.id),
      ...accountLinkOptions.slice(externalWalletIndex + 1)
    ] : accountLinkOptions;
    return Array.from(
      new Set(
        baseOptions.filter((option) => {
          if (!wallets.some((wallet) => wallet.id === option) || wallets.some(({ type, id: id3, installed, isMobile: isMobile2 }) => {
            if (!(installed || isMobile2) || !(para == null ? void 0 : para.supportedWalletTypes.some((obj) => obj.type === type)) || id3 !== option) {
              return false;
            }
            const isAlreadyLinked = [...(linkedAccounts == null ? void 0 : linkedAccounts.primary) || [], ...(linkedAccounts == null ? void 0 : linkedAccounts.linked) || []].some(
              (linkedAccount) => {
                var _a, _b;
                return ((_a = linkedAccount.externalWallet) == null ? void 0 : _a.providerId) === id3 && ((_b = linkedAccount.externalWallet) == null ? void 0 : _b.type) === type;
              }
            );
            return !isAlreadyLinked;
          })) {
            return true;
          }
          return false;
        })
      )
    );
  }, [accountLinkOptions, externalWalletIndex, wallets, linkedAccounts, para == null ? void 0 : para.supportedWalletTypes]);
  (0, import_react108.useEffect)(() => {
    resetMutations();
    setLinkAccountError(null);
  }, []);
  const getExternalWalletType = (id3) => {
    const allWallets = wallets.filter((wallet) => wallet.id === id3);
    if (allWallets.length === 1) {
      return allWallets[0].type;
    }
    return void 0;
  };
  return (0, import_jsx_runtime72.jsx)(StepContainer, { $wide: true, children: (0, import_jsx_runtime72.jsxs)(Content2, { children: [
    (isEmail2 || isPhone2) && (0, import_jsx_runtime72.jsxs)(import_jsx_runtime72.Fragment, { children: [
      (0, import_jsx_runtime72.jsx)(
        AuthInput,
        {
          disableEmailLogin: !isEmail2,
          disablePhoneLogin: !isPhone2,
          onSubmit: (auth) => {
            linkAccount2({
              auth
            });
          },
          error: linkAccountError ? linkAccountError === "CONFLICT" ? "Account already linked" : "An unknown error occurred" : void 0,
          isSubmitting: isLinkAccountPending
        }
      ),
      isOptions && (0, import_jsx_runtime72.jsx)(CpslDivider, { children: "or" })
    ] }),
    isOptions && (0, import_jsx_runtime72.jsx)(GradientScroll, { height: "320px", children: options.filter((option) => option !== "EMAIL" && option !== "PHONE").map((option) => {
      const externalWallet = wallets.find((wallet) => wallet.id === option);
      return (0, import_jsx_runtime72.jsxs)(
        Option,
        {
          fullWidth: true,
          variant: "tertiary",
          onClick: () => linkAccount2(
            !!externalWallet ? {
              externalWallet: {
                provider: externalWallet.id,
                type: getExternalWalletType(externalWallet.id)
              }
            } : { type: option }
          ),
          children: [
            (0, import_jsx_runtime72.jsx)(
              AccountTypeIcon,
              {
                accountType: externalWallet ? void 0 : option,
                src: externalWallet ? externalWallet.iconUrl : void 0,
                size: "24px"
              }
            ),
            (0, import_jsx_runtime72.jsx)(CpslText, { color: "contrast", variant: "bodyM", children: externalWallet ? externalWallet.name : getAccountTypeName(option) })
          ]
        },
        option
      );
    }) })
  ] }) });
}
var Content2 = safeStyled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;
var Option = safeStyled(CpslButton)`
  --button-justify-content: flex-start;

  height: 48px;
  display: flex;
  align-items: flex-start;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/AccountProfileLink.js
var import_jsx_runtime74 = __toESM(require_jsx_runtime(), 1);
var import_react109 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/OAuth/FarcasterLink.js
var import_jsx_runtime73 = __toESM(require_jsx_runtime(), 1);
function FarcasterConnectQR() {
  const farcasterConnectUri = useModalStore((state2) => state2.farcasterConnectUri);
  return (0, import_jsx_runtime73.jsx)(import_jsx_runtime73.Fragment, { children: isMobile() ? (0, import_jsx_runtime73.jsxs)(InnerStepContainer, { children: [
    (0, import_jsx_runtime73.jsx)(CpslText, { weight: "medium", color: "secondary", children: `Don’t have Farcaster` }),
    (0, import_jsx_runtime73.jsxs)(CpslButton, { as: "a", href: "https://link.warpcast.com/download-qr", target: "_blank", variant: "secondary", children: [
      (0, import_jsx_runtime73.jsx)(CpslIcon, { slot: "start", icon: "linkExternal" }),
      `Get Farcaster`
    ] })
  ] }) : (0, import_jsx_runtime73.jsxs)(import_jsx_runtime73.Fragment, { children: [
    (0, import_jsx_runtime73.jsx)(Heading, { children: "Sign in using Farcaster" }),
    (0, import_jsx_runtime73.jsxs)(InnerStepContainer, { children: [
      (0, import_jsx_runtime73.jsx)(CenteredText, { variant: "bodyS", color: "secondary", weight: "medium", children: "Scan the QR code with your phone's camera to proceed." }),
      (0, import_jsx_runtime73.jsx)(QRContainer, { children: !farcasterConnectUri ? (0, import_jsx_runtime73.jsx)(CpslSpinner, { size: 100 }) : (0, import_jsx_runtime73.jsx)(CpslQrCode, { url: farcasterConnectUri }) })
    ] })
  ] }) });
}
var FarcasterLink = () => {
  return (0, import_jsx_runtime73.jsx)(StepContainer, { $wide: true, children: (0, import_jsx_runtime73.jsx)(FarcasterConnectQR, {}) });
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/AccountProfileLink.js
function AccountProfileLink() {
  var _a, _b, _c, _d;
  const {
    accountLinkInProgress: accountLinkInProgress2,
    verifyEmailOrPhoneLink: verifyEmailOrPhoneLink2,
    linkAccountStatus,
    linkAccountError,
    verifyTelegramLink: verifyTelegramLink2,
    linkAccount: linkAccount2,
    isLinkAccountPending,
    resetMutations
  } = useAccountLinking(), { wallets } = useExternalWallets(), { resendVerificationCode: resendVerificationCode2 } = useResendVerificationCode(), accountLinkType = accountLinkInProgress2 == null ? void 0 : accountLinkInProgress2.type, externalWalletProvider = (_b = accountLinkInProgress2 == null ? void 0 : accountLinkInProgress2.pendingWalletProvider) != null ? _b : (_a = accountLinkInProgress2 == null ? void 0 : accountLinkInProgress2.externalWallet) == null ? void 0 : _a.providerId, externalWalletType = (_d = accountLinkInProgress2 == null ? void 0 : accountLinkInProgress2.pendingWalletType) != null ? _d : (_c = accountLinkInProgress2 == null ? void 0 : accountLinkInProgress2.externalWallet) == null ? void 0 : _c.type, externalWallet = wallets.find((w) => w.id === externalWalletProvider), isTelegram2 = accountLinkType === "TELEGRAM", {
    url,
    status: telegramStatus,
    isLoaded,
    setIsLoaded
  } = useTelegramLogin(
    isTelegram2 ? { isActive: isTelegram2, status: linkAccountStatus, onSubmit: verifyTelegramLink2, isLinking: true } : { isActive: false, isLinking: true }
  ), status = (accountLinkInProgress2 == null ? void 0 : accountLinkInProgress2.isComplete) ? "success" : isTelegram2 ? telegramStatus : linkAccountStatus, commonWallet = (0, import_react109.useMemo)(() => {
    const wallet = wallets.find(
      (w) => [w.name, w.internalId, w.id].includes(externalWalletProvider != null ? externalWalletProvider : "") && w.type === externalWalletType
    );
    return wallet;
  }, [wallets]), walletDisplayHelpers = useWalletDisplayHelpers(commonWallet);
  const { upper, lower } = (0, import_react109.useMemo)(() => {
    let upper2 = null, lower2 = null;
    let message;
    switch (status) {
      case "pending":
        message = externalWalletType ? "Confirm wallet connection" : "Confirm login request";
        break;
      case "success":
        message = "Account linked";
        break;
      case "error":
        switch (linkAccountError) {
          case AccountLinkError.Conflict:
            message = "Account already linked";
            break;
          default:
            message = (accountLinkInProgress2 == null ? void 0 : accountLinkInProgress2.type) === "EXTERNAL_WALLET" ? "Connection failed" : "Login failed";
            break;
        }
        break;
      default:
        message = null;
    }
    const heroSpinner = (0, import_jsx_runtime74.jsx)(
      HeroSpinner,
      {
        status,
        icon: status === "success" ? (0, import_jsx_runtime74.jsx)(HeroSuccessIcon, {}) : (0, import_jsx_runtime74.jsx)(
          HeroAccountTypeIcon,
          {
            accountType: externalWallet ? void 0 : accountLinkType,
            src: externalWallet ? externalWallet.iconUrl : void 0
          }
        ),
        text: message
      }
    );
    const onTryAgain = externalWalletProvider && externalWalletType ? () => linkAccount2({ externalWallet: { provider: externalWalletProvider, type: externalWalletType } }) : accountLinkType && accountLinkType !== "EXTERNAL_WALLET" ? () => linkAccount2({ type: accountLinkType }) : void 0;
    const tryAgain = onTryAgain ? (0, import_jsx_runtime74.jsxs)(CpslButton, { variant: "secondary", fullWidth: true, onClick: onTryAgain, children: [
      (0, import_jsx_runtime74.jsx)(CpslIcon, { icon: "refresh", slot: "start" }),
      "Try Again"
    ] }) : null;
    if (!accountLinkInProgress2) {
      return { upper: upper2, lower: lower2 };
    }
    switch (true) {
      // Email or phone input
      case (!accountLinkInProgress2.identifier && (accountLinkInProgress2.type === "EMAIL" || accountLinkInProgress2.type === "PHONE")):
        upper2 = heroSpinner;
        lower2 = (0, import_jsx_runtime74.jsx)(
          AuthInput,
          {
            disableEmailLogin: accountLinkInProgress2.type !== "EMAIL",
            disablePhoneLogin: accountLinkInProgress2.type !== "PHONE",
            onSubmit: (auth) => {
              try {
                linkAccount2({
                  auth
                });
              } catch (e) {
                throw e;
              }
            },
            error: linkAccountError === "CONFLICT" ? "Account already linked" : void 0,
            isSubmitting: isLinkAccountPending,
            disableSubmitButton: true,
            children: ({ isSubmitting, onSubmit, isPending }) => {
              return (0, import_jsx_runtime74.jsxs)(CpslButton, { variant: "primary", onClick: onSubmit, disabled: isPending || isSubmitting, fullWidth: true, children: [
                "Link ",
                accountLinkType === "EMAIL" ? "Email Address" : "Phone Number"
              ] });
            }
          }
        );
        break;
      // Verify email or phone code
      case ((accountLinkType === "EMAIL" || accountLinkType === "PHONE") && (accountLinkInProgress2 == null ? void 0 : accountLinkInProgress2.identifier) && status !== "success"):
        {
          const authInfo = extractAuthInfo(
            accountLinkType === "EMAIL" ? { email: accountLinkInProgress2.identifier } : { phone: accountLinkInProgress2.identifier },
            { isRequired: true }
          );
          lower2 = (0, import_jsx_runtime74.jsx)(
            VerificationCode,
            {
              authInfo,
              onSubmit: verifyEmailOrPhoneLink2,
              onResend: () => {
                resendVerificationCode2({ type: "LINK_ACCOUNT" });
              },
              status: linkAccountStatus,
              error: linkAccountError
            }
          );
        }
        break;
      // Farcaster Connect QR
      case (accountLinkType === "FARCASTER" && status !== "success"):
        lower2 = (0, import_jsx_runtime74.jsx)(FarcasterLink, {});
        break;
      // OAuth, External Wallet, Telegram
      default:
        upper2 = heroSpinner;
        switch (true) {
          case accountLinkType === "EXTERNAL_WALLET":
            {
              if (commonWallet && walletDisplayHelpers.showMobile) {
                upper2 = status === "success" || status === "error" ? heroSpinner : (0, import_jsx_runtime74.jsx)(
                  ExternalWalletMobileConnect,
                  {
                    wallet: commonWallet,
                    isSelfFetching: true,
                    onConnectWc: (w) => __async(this, null, function* () {
                      yield linkAccount2({ externalWallet: { provider: w.id, type: w.type } });
                    })
                  }
                );
              }
              lower2 = linkAccountError ? tryAgain : null;
            }
            break;
          case accountLinkType === "TELEGRAM":
            lower2 = (0, import_jsx_runtime74.jsx)(
              TelegramIFrame,
              {
                url,
                isLoaded,
                setIsLoaded,
                isVisible: status === "error" || status === "idle"
              }
            );
            break;
          case (status === "error" && !!accountLinkInProgress2):
            lower2 = tryAgain;
            break;
        }
        break;
    }
    return {
      upper: upper2,
      lower: lower2
    };
  }, [
    linkAccountError,
    accountLinkType,
    accountLinkInProgress2,
    telegramStatus,
    url,
    isLoaded,
    linkAccount2,
    status,
    isTelegram2,
    externalWalletType,
    commonWallet,
    walletDisplayHelpers.showMobile
  ]);
  (0, import_react109.useEffect)(() => {
    return () => {
      resetMutations();
    };
  }, []);
  return (0, import_jsx_runtime74.jsxs)(import_jsx_runtime74.Fragment, { children: [
    upper,
    lower
  ] });
}

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/AccountProfileUnlink.js
var import_jsx_runtime75 = __toESM(require_jsx_runtime(), 1);
var import_react110 = __toESM(require_react(), 1);
function AccountProfileUnlink() {
  var _a, _b;
  const { unlinkingAccount, unlinkAccountConfirm, isUnlinkAccountPending } = useAccountLinking(), [accountType, setAccountType] = (0, import_react110.useState)((_b = (_a = unlinkingAccount == null ? void 0 : unlinkingAccount.externalWallet) == null ? void 0 : _a.providerId) != null ? _b : unlinkingAccount == null ? void 0 : unlinkingAccount.type), [isUnlinkingExternalWallet, setIsUnlinkingExternalWallet] = (0, import_react110.useState)(false);
  (0, import_react110.useEffect)(() => {
    var _a2, _b2;
    if (unlinkingAccount) {
      setAccountType((_b2 = (_a2 = unlinkingAccount == null ? void 0 : unlinkingAccount.externalWallet) == null ? void 0 : _a2.provider) != null ? _b2 : unlinkingAccount == null ? void 0 : unlinkingAccount.type);
      setIsUnlinkingExternalWallet(!!(unlinkingAccount == null ? void 0 : unlinkingAccount.externalWallet));
    }
  }, [unlinkingAccount]);
  return (0, import_jsx_runtime75.jsxs)(Content3, { children: [
    (0, import_jsx_runtime75.jsxs)(Upper, { children: [
      (0, import_jsx_runtime75.jsx)(AccountTypeIcon, { accountType, size: "80px", inset: "5px" }),
      (0, import_jsx_runtime75.jsxs)(Message, { variant: "bodyM", weight: "semiBold", color: "contrast", children: [
        "Are you sure you want to unlink your",
        " ",
        isUnlinkingExternalWallet ? accountType : getAccountTypeName(accountType, { inline: true }),
        "?"
      ] })
    ] }),
    (0, import_jsx_runtime75.jsx)(CpslButton, { variant: "destructive", fullWidth: true, onClick: unlinkAccountConfirm, disabled: isUnlinkAccountPending, children: "Confirm" })
  ] });
}
var Content3 = safeStyled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
`;
var Upper = safeStyled(Content3)`
  gap: 8px;
`;
var Message = safeStyled(CpslText)`
  text-align: center;
  max-width: 342px;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/ExternalWalletNetworkSelectStep/ExternalWalletNetworkSelectStep.js
var import_jsx_runtime76 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/constants/walletTypeConfig.js
var WALLET_TYPE_CONFIG = {
  EVM: {
    name: "Ethereum",
    icon: "ethCircle"
  },
  SOLANA: { name: "Solana", icon: "solanaCircle" },
  COSMOS: { name: "Cosmos", icon: "cosmosCircle" }
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/ExternalWalletNetworkSelectStep/ExternalWalletNetworkSelectStep.js
var ExternalWalletNetworkSelectStep = ({ type = "CONNECT" }) => {
  var _a, _b, _c;
  const setStep = useModalStore((state2) => state2.setStep);
  const selectedExternalWallet = useModalStore((state2) => state2.selectedExternalWallet);
  const setSelectedExternalWallet = useModalStore((state2) => state2.setSelectedExternalWallet);
  const { wallets, connectExternalWallet, addAdditionalExternalWallet } = useExternalWallets();
  const { accountLinkInProgress: accountLinkInProgress2, linkAccount: linkAccount2 } = useAccountLinking();
  const externalWalletProvider = (_c = (_b = accountLinkInProgress2 == null ? void 0 : accountLinkInProgress2.pendingWalletProvider) != null ? _b : (_a = accountLinkInProgress2 == null ? void 0 : accountLinkInProgress2.externalWallet) == null ? void 0 : _a.providerId) != null ? _c : selectedExternalWallet == null ? void 0 : selectedExternalWallet.id;
  if (!externalWalletProvider) {
    return null;
  }
  const availableWallets = wallets.filter((w) => w.id === externalWalletProvider);
  const firstWallet = availableWallets[0];
  const handleWalletClick = (wallet) => () => __async(void 0, null, function* () {
    switch (type) {
      case "ACCOUNT_LINKING":
        linkAccount2({ externalWallet: { provider: wallet.id, type: wallet.type } });
        break;
      case "ADD_EXTERNAL":
        setSelectedExternalWallet({ id: wallet.id, type: wallet.type });
        setStep(ModalStep.ADD_EX_WALLET_SELECTED);
        try {
          yield addAdditionalExternalWallet(wallet);
        } catch (error) {
          console.error("Failed to add additional wallet:", error);
        }
        break;
      case "CONNECT":
      default:
        setSelectedExternalWallet({ id: wallet.id, type: wallet.type });
        setStep(ModalStep.EX_WALLET_SELECTED);
        if (wallet.installed || wallet.internalId === "FARCASTER") {
          connectExternalWallet({ wallet });
        } else if (wallet.isMobile) {
          connectExternalWallet({ wallet, isMobile: true });
        }
        break;
    }
  });
  const getIconSource = () => {
    var _a2, _b2, _c2;
    switch (type) {
      case "ACCOUNT_LINKING":
        return ((_a2 = accountLinkInProgress2 == null ? void 0 : accountLinkInProgress2.externalWallet) == null ? void 0 : _a2.providerId) ? (_b2 = wallets.find((w) => {
          var _a3;
          return w.id === ((_a3 = accountLinkInProgress2.externalWallet) == null ? void 0 : _a3.providerId);
        })) == null ? void 0 : _b2.iconUrl : firstWallet == null ? void 0 : firstWallet.iconUrl;
      case "ADD_EXTERNAL":
        return (selectedExternalWallet == null ? void 0 : selectedExternalWallet.id) ? (_c2 = wallets.find((w) => w.id === selectedExternalWallet.id)) == null ? void 0 : _c2.iconUrl : firstWallet == null ? void 0 : firstWallet.iconUrl;
      case "CONNECT":
      default:
        return firstWallet == null ? void 0 : firstWallet.iconUrl;
    }
  };
  return (0, import_jsx_runtime76.jsxs)(Container21, { children: [
    (0, import_jsx_runtime76.jsx)(Avatar2, { slot: "image", src: getIconSource() }),
    (0, import_jsx_runtime76.jsx)(ButtonContainer3, { children: availableWallets.map((wallet) => {
      const config = WALLET_TYPE_CONFIG[wallet.type];
      return (0, import_jsx_runtime76.jsx)(CpslButton, { fullWidth: true, variant: "tertiary", onClick: handleWalletClick(wallet), children: (0, import_jsx_runtime76.jsxs)(ButtonInnerContainer, { children: [
        (0, import_jsx_runtime76.jsx)(CpslIcon, { slot: "start", icon: config.icon }),
        (0, import_jsx_runtime76.jsx)(CpslText, { weight: "medium", children: config.name })
      ] }) }, wallet.type);
    }) })
  ] });
};
var Container21 = safeStyled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;
var ButtonContainer3 = safeStyled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
var Avatar2 = safeStyled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;
var ButtonInnerContainer = safeStyled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/AwaitingAccountStep/AwaitingAccountStep.js
var import_jsx_runtime77 = __toESM(require_jsx_runtime(), 1);
var AwaitingAccountStep = () => {
  var _a;
  const isLogin = useModalStore((state2) => state2.isLogin());
  const refs = useModalStore((state2) => state2.refs);
  const isSLOPopup = ((_a = refs.popupWindow.current) == null ? void 0 : _a.closed) === false;
  return (0, import_jsx_runtime77.jsx)(
    Waiting,
    {
      heading: isLogin ? "Logging you in..." : "Creating your account...",
      subheading: isSLOPopup ? "Follow the prompts presented by your browser." : void 0
    }
  );
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/SwitchWalletsStep/SwitchWalletsStep.js
var import_jsx_runtime78 = __toESM(require_jsx_runtime(), 1);
var SwitchWalletsStep = () => {
  return (0, import_jsx_runtime78.jsx)(Waiting, { heading: "Switching Wallets", subheading: "Please complete the wallet selection in the popup window." });
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Footer/Footer.js
var import_jsx_runtime79 = __toESM(require_jsx_runtime(), 1);
var Footer = () => {
  const currentStep = useModalStore((state2) => state2.step);
  const { accountLinkInProgress: accountLinkInProgress2 } = useAccountLinking();
  const showFooter = !accountLinkInProgress2 && [
    ModalStep.AUTH_MAIN,
    ModalStep.AUTH_MORE,
    ModalStep.EX_WALLET_NETWORK_SELECT,
    ModalStep.EX_WALLET_MORE,
    ModalStep.EX_WALLET_SELECTED
  ].includes(currentStep);
  if (!showFooter) {
    return null;
  }
  return (0, import_jsx_runtime79.jsxs)(FooterContainer, { children: [
    (0, import_jsx_runtime79.jsxs)(InlineText4, { variant: "body2XS", color: "secondary", weight: "medium", children: [
      "By logging in you agree to our",
      " ",
      (0, import_jsx_runtime79.jsx)("a", { href: PARA_TERMS_AND_CONDITIONS, target: "blank", children: (0, import_jsx_runtime79.jsx)(ClickableText2, { variant: "body2XS", weight: "medium", children: "Terms & Conditions" }) })
    ] }),
    (0, import_jsx_runtime79.jsx)(PoweredByContainer, { children: (0, import_jsx_runtime79.jsx)(ParaLogo, { icon: "para" }) })
  ] });
};
var FooterContainer = safeStyled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
`;
var PoweredByContainer = safeStyled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;
var InlineText4 = safeStyled(CpslText)`
  text-align: center;
  display: inline-block;
`;
var ClickableText2 = safeStyled(InlineText4)`
  cursor: pointer;
  display: inline-block;

  &:hover {
    text-decoration: underline;}
`;
var ParaLogo = safeStyled(CpslIcon)`
  display: inline-block;
  --icon-color: var(--cpsl-color-text-contrast);
  --width: 46px;
  --height: auto;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/utils/renderTextWithLinks.js
var import_jsx_runtime80 = __toESM(require_jsx_runtime(), 1);
var import_react111 = __toESM(require_react(), 1);
var renderTextWithLinks = (text) => {
  if (!text) return [(0, import_jsx_runtime80.jsx)(import_react111.Fragment, { children: "" }, 0)];
  const linkStyle = { color: "inherit", textDecoration: "underline", fontWeight: "500" };
  const combinedRegex = /(\[([^\]]+)\]\((https?:\/\/[^)]+)\))|(https?:\/\/[^\s]+)/g;
  const parts = [];
  let lastIndex = 0;
  let match2;
  while ((match2 = combinedRegex.exec(text)) !== null) {
    if (match2.index > lastIndex) {
      parts.push((0, import_jsx_runtime80.jsx)(import_react111.Fragment, { children: text.slice(lastIndex, match2.index) }, parts.length));
    }
    if (match2[1]) {
      parts.push(
        (0, import_jsx_runtime80.jsx)("a", { href: match2[3], target: "_blank", rel: "noopener noreferrer", style: linkStyle, children: match2[2] }, parts.length)
      );
    } else if (match2[4]) {
      parts.push(
        (0, import_jsx_runtime80.jsx)("a", { href: match2[4], target: "_blank", rel: "noopener noreferrer", style: linkStyle, children: match2[4] }, parts.length)
      );
    }
    lastIndex = match2.index + match2[0].length;
  }
  if (lastIndex < text.length) {
    parts.push((0, import_jsx_runtime80.jsx)(import_react111.Fragment, { children: text.slice(lastIndex) }, parts.length));
  }
  return parts.length ? parts : [(0, import_jsx_runtime80.jsx)(import_react111.Fragment, { children: text }, 0)];
};

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/AccountWallet.js
var import_jsx_runtime81 = __toESM(require_jsx_runtime(), 1);
var import_react112 = __toESM(require_react(), 1);
var EXPLORERS = {
  EVM: {
    name: "Etherscan",
    url: (address) => `https://etherscan.io/address/${address}`
  },
  SOLANA: {
    name: "Solana Explorer",
    url: (address) => `https://explorer.solana.com/address/${address}`
  },
  COSMOS: {
    name: "Atomscan",
    url: (address) => `https://atomscan.com/accounts/${address}`
  }
};
var AccountWallet = () => {
  const profileWallet = useModalStore((state2) => state2.profileWallet);
  const setProfileWallet = useModalStore((state2) => state2.setProfileWallet);
  const setStep = useModalStore((state2) => state2.setStep);
  const { connectionType } = useAccount();
  const { mutate: exportPrivateKey2 } = useExportPrivateKey();
  const { disconnectBase, evmDisconnectStatus, solanaDisconnectStatus, cosmosDisconnectStatus } = useExternalWallets();
  const disconnectStatus = (0, import_react112.useMemo)(() => {
    if (!(profileWallet == null ? void 0 : profileWallet.isExternal)) {
      return "idle";
    }
    switch (profileWallet.type) {
      case "EVM":
        return evmDisconnectStatus;
      case "SOLANA":
        return solanaDisconnectStatus;
      case "COSMOS":
      default:
        return cosmosDisconnectStatus;
    }
  }, [profileWallet == null ? void 0 : profileWallet.isExternal, profileWallet == null ? void 0 : profileWallet.type, evmDisconnectStatus, solanaDisconnectStatus, cosmosDisconnectStatus]);
  const Content4 = (0, import_react112.useMemo)(() => {
    if (!profileWallet) {
      return null;
    }
    if (disconnectStatus === "pending") {
      return (0, import_jsx_runtime81.jsx)(SpinnerContainer, { children: (0, import_jsx_runtime81.jsx)(CpslSpinner, {}) });
    }
    const { name, url } = EXPLORERS[profileWallet.type];
    return (0, import_jsx_runtime81.jsxs)(import_jsx_runtime81.Fragment, { children: [
      (0, import_jsx_runtime81.jsx)(
        WalletEntry,
        {
          wallet: profileWallet,
          style: { marginBottom: "16px" }
        },
        `${profileWallet.address}-${profileWallet.type}`
      ),
      typeof window !== "undefined" && (0, import_jsx_runtime81.jsxs)(
        CpslButton,
        {
          variant: "tertiary",
          fullWidth: true,
          onClick: () => {
            window.open(url(profileWallet.address), "_blank");
          },
          children: [
            "View wallet on ",
            name,
            (0, import_jsx_runtime81.jsx)(CpslIcon, { icon: "linkExternal", slot: "end" })
          ]
        }
      ),
      !profileWallet.isExternal && ["EVM", "COSMOS"].includes(profileWallet.type) && (0, import_jsx_runtime81.jsxs)(
        DestructiveButton,
        {
          variant: "destructive",
          fullWidth: true,
          onClick: () => exportPrivateKey2({ walletId: profileWallet.id, shouldOpenPopup: true }),
          children: [
            (0, import_jsx_runtime81.jsx)(CpslIcon, { icon: "key", slot: "start" }),
            "Export private key"
          ]
        }
      ),
      profileWallet.isExternal && connectionType === "both" && (0, import_jsx_runtime81.jsxs)(
        DestructiveButton,
        {
          variant: "destructive",
          fullWidth: true,
          onClick: () => __async(void 0, null, function* () {
            yield disconnectBase(profileWallet.externalProviderId, profileWallet.type, {
              disconnectType: "ACCOUNT_WIDGET"
            });
            setProfileWallet(void 0);
            setStep(ModalStep.ACCOUNT_PROFILE);
          }),
          children: [
            (0, import_jsx_runtime81.jsx)(CpslIcon, { icon: "key", slot: "start" }),
            "Disconnect"
          ]
        }
      )
    ] });
  }, [profileWallet, connectionType, disconnectStatus]);
  (0, import_react112.useEffect)(() => {
    return () => {
      setProfileWallet(void 0);
    };
  }, []);
  return (0, import_jsx_runtime81.jsx)(Container22, { children: Content4 });
};
var Container22 = safeStyled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
`;
var DestructiveButton = safeStyled(CpslButton)`
  --button-destructive-hover-background-color: rgba(255, 0, 0, 0.2);
  --button-destructive-active-background-color: rgba(255, 0, 0, 0.1);
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/AccountSend/index.js
var import_jsx_runtime88 = __toESM(require_jsx_runtime(), 1);
var import_react118 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/AccountSend/AccountSendForm.js
var import_jsx_runtime84 = __toESM(require_jsx_runtime(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/AccountSend/context.js
var import_jsx_runtime82 = __toESM(require_jsx_runtime(), 1);
var import_react113 = __toESM(require_react(), 1);
var getDefaultSendMetadata = (balances, wallet) => {
  if (!balances || !(wallet == null ? void 0 : wallet.type) || !(wallet == null ? void 0 : wallet.address) || (wallet == null ? void 0 : wallet.type) === "COSMOS") {
    return { asset: null, network: null };
  }
  const walletBalance = balances.wallets.find(({ address }) => address === (wallet == null ? void 0 : wallet.address));
  if (!walletBalance) {
    return { asset: null, network: null };
  }
  const defaultAsset = walletBalance.assets.find(
    ({ metadata }) => (metadata == null ? void 0 : metadata.symbol) === ((wallet == null ? void 0 : wallet.type) === "EVM" ? "ETH" : "SOL")
  );
  if (!defaultAsset) {
    return { asset: null, network: null };
  }
  const defaultNetwork = defaultAsset.networks[0] || null;
  return { asset: defaultAsset, network: defaultNetwork };
};
var getTransferAmount = (sendMetadata, transferValue) => {
  var _a, _b, _c, _d, _e;
  const isPriced = ((_b = (_a = sendMetadata == null ? void 0 : sendMetadata.asset) == null ? void 0 : _a.metadata) == null ? void 0 : _b.price) !== void 0 && ((_e = (_d = (_c = sendMetadata == null ? void 0 : sendMetadata.asset) == null ? void 0 : _c.metadata) == null ? void 0 : _d.price) == null ? void 0 : _e.value) > 0;
  if (isPriced) {
    return transferValue / sendMetadata.asset.metadata.price.value;
  }
  return 0;
};
var getTransferValue = (sendMetadata, transferAmount) => {
  var _a, _b, _c, _d, _e;
  const isPriced = ((_b = (_a = sendMetadata == null ? void 0 : sendMetadata.asset) == null ? void 0 : _a.metadata) == null ? void 0 : _b.price) !== void 0 && ((_e = (_d = (_c = sendMetadata == null ? void 0 : sendMetadata.asset) == null ? void 0 : _c.metadata) == null ? void 0 : _d.price) == null ? void 0 : _e.value) > 0;
  if (isPriced) {
    return transferAmount * sendMetadata.asset.metadata.price.value;
  }
  return 0;
};
var AccountSendContext = (0, import_react113.createContext)({});
function AccountSendProvider({ children, step }) {
  var _a, _b, _c, _d, _e, _f;
  const para = useInternalClient();
  const setStep = useModalStore((state2) => state2.setStep);
  const setSendTx = useModalStore((state2) => state2.setSendTx);
  const { data: balances } = useProfileBalance({ isComprehensive: true });
  const { signTransactionAsync } = useSignTransaction();
  const { signMessageAsync } = useSignMessage();
  const { selectedWallet, setSelectedWallet } = useWalletState();
  const [estimate, setEstimate] = (0, import_react113.useState)(null);
  const [broadcast, setBroadcast] = (0, import_react113.useState)(null);
  const [sendMetadata, setSendMetadata] = (0, import_react113.useState)(() => getDefaultSendMetadata(balances, selectedWallet));
  const [destinationAddress, setDestinationAddress] = (0, import_react113.useState)("");
  const [transferValue, setTransferValue] = (0, import_react113.useState)(0);
  const [transferAmount, setTransferAmount] = (0, import_react113.useState)(getTransferAmount(sendMetadata, transferValue));
  const [isMax, setIsMax] = (0, import_react113.useState)(false);
  const optionsType = (0, import_react113.useMemo)(() => {
    const walletBalance = balances == null ? void 0 : balances.wallets.find(({ address }) => address === (selectedWallet == null ? void 0 : selectedWallet.address));
    if (!walletBalance || walletBalance.assets.length === 0) {
      return "NONE";
    }
    if ((walletBalance == null ? void 0 : walletBalance.assets.length) === 1) {
      return walletBalance.assets[0].networks.length === 1 ? "SINGLE_NETWORK" : "SINGLE_ASSET";
    }
    return "MULTIPLE";
  }, [balances, selectedWallet == null ? void 0 : selectedWallet.address]);
  const {
    mutate: estimateMutate,
    isPending: estimateIsPending,
    isError: estimateIsError
  } = useMutation({
    mutationKey: ["estimate-tx"],
    mutationFn: (_0) => __async(this, [_0], function* ({ userId, walletId, opts }) {
      if (!para.userId || !selectedWallet.id) {
        return null;
      }
      const result = yield para.ctx.client.estimateSendTransaction({
        userId,
        walletId,
        opts
      });
      return result;
    }),
    onSuccess: (data) => {
      setEstimate(data);
    },
    onError: (error) => {
      console.error(error);
    }
  });
  const queryClient = useQueryClient();
  const refs = useStore2((state2) => state2.refs);
  const {
    mutate: broadcastMutate,
    isPending: broadcastIsPending,
    isError: broadcastIsError
  } = useMutation({
    mutationKey: ["broadcast-tx"],
    mutationFn: (_0) => __async(this, [_0], function* ({
      userId,
      walletId,
      walletAddress,
      walletType,
      txSerialized,
      message,
      evmChainId,
      isDevnet
    }) {
      var _a2, _b2, _c2, _d2, _e2;
      if (!para.userId || !selectedWallet.id) {
        return null;
      }
      let signature;
      switch (walletType) {
        case "SOLANA":
          signature = (_a2 = yield signMessageAsync({
            walletId,
            messageBase64: message
          })) == null ? void 0 : _a2.signature;
          break;
        case "EVM":
        default:
          signature = (_b2 = yield signTransactionAsync({
            walletId,
            rlpEncodedTxBase64: hexStringToBase64(txSerialized),
            chainId: evmChainId
          })) == null ? void 0 : _b2.signature;
          if (!!signature) {
            signature = `0x${signature}`;
          }
          break;
      }
      const result = yield para.ctx.client.broadcastSendTransaction({
        userId,
        walletId,
        opts: {
          type: walletType,
          evmChainId,
          isDevnet,
          tx: txSerialized,
          signature,
          sourceAddress: walletAddress,
          txUrlFormat: (_e2 = (_d2 = (_c2 = sendMetadata == null ? void 0 : sendMetadata.network) == null ? void 0 : _c2.metadata) == null ? void 0 : _d2.explorer) == null ? void 0 : _e2.txUrlFormat
        }
      });
      return result;
    }),
    onSuccess: (data) => {
      if (!!(data == null ? void 0 : data.error)) {
        setBroadcast(data);
      } else if (!!data) {
        setSendTx(data);
        setStep(ModalStep.ACCOUNT_MAIN);
        refs.balancesInvalidationTime.current = Date.now();
        queryClient.invalidateQueries({
          queryKey: ["useProfileBalance"],
          refetchType: "active"
        });
      }
    },
    onError: (error) => {
      console.error(error);
    }
  });
  const onSubmit = (0, import_react113.useCallback)(() => {
    var _a2, _b2, _c2, _d2, _e2, _f2;
    broadcastMutate({
      userId: para.userId,
      walletId: selectedWallet.id,
      walletAddress: selectedWallet.address,
      walletType: selectedWallet.type,
      txSerialized: (_a2 = estimate == null ? void 0 : estimate.result) == null ? void 0 : _a2.txSerialized,
      message: (_b2 = estimate == null ? void 0 : estimate.result) == null ? void 0 : _b2.message,
      evmChainId: (_d2 = (_c2 = sendMetadata == null ? void 0 : sendMetadata.network) == null ? void 0 : _c2.metadata) == null ? void 0 : _d2.evmChainId,
      isDevnet: ((_f2 = (_e2 = sendMetadata == null ? void 0 : sendMetadata.network) == null ? void 0 : _e2.metadata) == null ? void 0 : _f2.internalId) === "SOLANA_DEVNET"
    });
  }, [
    para.userId,
    selectedWallet.id,
    selectedWallet.address,
    selectedWallet.type,
    (_a = estimate == null ? void 0 : estimate.result) == null ? void 0 : _a.txSerialized,
    (_b = estimate == null ? void 0 : estimate.result) == null ? void 0 : _b.message,
    (_d = (_c = sendMetadata == null ? void 0 : sendMetadata.network) == null ? void 0 : _c.metadata) == null ? void 0 : _d.evmChainId,
    (_f = (_e = sendMetadata == null ? void 0 : sendMetadata.network) == null ? void 0 : _e.metadata) == null ? void 0 : _f.internalId
  ]);
  const availableWallets = (0, import_react113.useMemo)(() => {
    return para.availableWallets.filter(({ type }) => type !== "COSMOS");
  }, [para.availableWallets]);
  const { assetPrice, assetValueOnNetwork, assetAmountOnNetwork } = (0, import_react113.useMemo)(() => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g;
    const assetAmountOnNetwork2 = ((_a2 = sendMetadata.network) == null ? void 0 : _a2.quantity) || 0;
    if (((_c2 = (_b2 = sendMetadata.asset) == null ? void 0 : _b2.metadata) == null ? void 0 : _c2.price) && ((_f2 = (_e2 = (_d2 = sendMetadata.asset) == null ? void 0 : _d2.metadata) == null ? void 0 : _e2.price) == null ? void 0 : _f2.value) > 0) {
      return {
        assetPrice: sendMetadata.asset.metadata.price,
        assetValueOnNetwork: ((_g = sendMetadata.network) == null ? void 0 : _g.value) || null,
        assetAmountOnNetwork: assetAmountOnNetwork2
      };
    }
    return {
      assetPrice: null,
      assetValueOnNetwork: null,
      assetAmountOnNetwork: assetAmountOnNetwork2
    };
  }, [sendMetadata.asset, sendMetadata.network]);
  (0, import_react113.useEffect)(() => {
    if (availableWallets.length > 0 && selectedWallet.type === "COSMOS") {
      const defaultWallet = availableWallets.find((wallet) => wallet.type !== "EVM");
      (defaultWallet == null ? void 0 : defaultWallet.id) && (defaultWallet == null ? void 0 : defaultWallet.type) && setSelectedWallet(defaultWallet);
    }
  }, [availableWallets, selectedWallet.type, setSelectedWallet]);
  const updateSourceRef = (0, import_react113.useRef)(null);
  const prevSendMetadataRef = (0, import_react113.useRef)(sendMetadata);
  const prevWalletAddressRef = (0, import_react113.useRef)(selectedWallet == null ? void 0 : selectedWallet.address);
  const isSettingMaxRef = (0, import_react113.useRef)(false);
  const isResettingRef = (0, import_react113.useRef)(false);
  const resetState = (0, import_react113.useCallback)(() => {
    if (isResettingRef.current) {
      return;
    }
    isResettingRef.current = true;
    updateSourceRef.current = "value";
    setDestinationAddress("");
    setTransferValue(0);
    setTransferAmount(0);
    setIsMax(false);
    setEstimate(null);
    setTimeout(() => {
      isResettingRef.current = false;
      updateSourceRef.current = null;
    }, 0);
  }, []);
  (0, import_react113.useEffect)(() => {
    const walletAddressChanged = prevWalletAddressRef.current !== (selectedWallet == null ? void 0 : selectedWallet.address);
    if (walletAddressChanged) {
      prevWalletAddressRef.current = selectedWallet == null ? void 0 : selectedWallet.address;
      const newSendMetadata = getDefaultSendMetadata(
        balances || null,
        selectedWallet ? { type: selectedWallet.type, address: selectedWallet.address } : null
      );
      setSendMetadata(newSendMetadata);
      resetState();
    }
  }, [selectedWallet == null ? void 0 : selectedWallet.address, balances, resetState]);
  (0, import_react113.useEffect)(() => {
    var _a2, _b2;
    const sendMetadataChanged = ((_a2 = prevSendMetadataRef.current) == null ? void 0 : _a2.asset) !== (sendMetadata == null ? void 0 : sendMetadata.asset) || ((_b2 = prevSendMetadataRef.current) == null ? void 0 : _b2.network) !== (sendMetadata == null ? void 0 : sendMetadata.network);
    const walletAddressChanged = prevWalletAddressRef.current !== (selectedWallet == null ? void 0 : selectedWallet.address);
    if (sendMetadataChanged && !walletAddressChanged && !isResettingRef.current) {
      prevSendMetadataRef.current = sendMetadata;
      resetState();
    } else if (sendMetadataChanged) {
      prevSendMetadataRef.current = sendMetadata;
    }
  }, [sendMetadata, selectedWallet == null ? void 0 : selectedWallet.address, resetState]);
  (0, import_react113.useEffect)(() => {
    if (step !== "SEND_FORM" || sendMetadata.network) {
      return;
    }
    if (sendMetadata.asset && sendMetadata.asset.networks.length > 0) {
      setSendMetadata((prev) => __spreadProps2(__spreadValues2({}, prev), {
        network: prev.asset.networks[0]
      }));
      return;
    }
    const defaultMetadata = getDefaultSendMetadata(balances, selectedWallet);
    if (defaultMetadata.asset !== sendMetadata.asset || defaultMetadata.network !== sendMetadata.network) {
      setSendMetadata(defaultMetadata);
    }
  }, [step, sendMetadata.asset, sendMetadata.network, balances, selectedWallet]);
  (0, import_react113.useEffect)(() => {
    if (isResettingRef.current || isSettingMaxRef.current) {
      return;
    }
    if (updateSourceRef.current !== "amount") {
      updateSourceRef.current = "value";
      setTransferAmount(getTransferAmount(sendMetadata, transferValue));
      setTimeout(() => {
        updateSourceRef.current = null;
      }, 0);
    }
  }, [transferValue, sendMetadata]);
  (0, import_react113.useEffect)(() => {
    if (isResettingRef.current || isSettingMaxRef.current) {
      return;
    }
    if (updateSourceRef.current !== "value") {
      updateSourceRef.current = "amount";
      const newValue = getTransferValue(sendMetadata, transferAmount);
      setTransferValue((prevValue) => {
        if (newValue !== prevValue) {
          return newValue;
        }
        return prevValue;
      });
      setTimeout(() => {
        updateSourceRef.current = null;
      }, 0);
    }
  }, [transferAmount, sendMetadata]);
  (0, import_react113.useEffect)(() => {
    if (isResettingRef.current) {
      return;
    }
    if (!isSettingMaxRef.current && transferAmount !== assetAmountOnNetwork) {
      setIsMax(false);
    }
  }, [transferAmount, assetAmountOnNetwork]);
  (0, import_react113.useEffect)(() => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g;
    if (isResettingRef.current) {
      return;
    }
    const isSendMax = isMax && assetAmountOnNetwork > 0;
    if (!destinationAddress || destinationAddress.length === 0 || !isSendMax && transferAmount <= 0) {
      setEstimate(null);
      return;
    }
    estimateMutate({
      walletId: selectedWallet.id,
      userId: para.userId,
      opts: {
        type: selectedWallet.type === "COSMOS" ? "EVM" : selectedWallet.type,
        sourceAddress: selectedWallet.address,
        destinationAddress,
        contractAddress: (_a2 = sendMetadata == null ? void 0 : sendMetadata.network) == null ? void 0 : _a2.contractAddress,
        transferAmount: isMax && assetAmountOnNetwork ? assetAmountOnNetwork : transferAmount,
        evmChainId: (_c2 = (_b2 = sendMetadata == null ? void 0 : sendMetadata.network) == null ? void 0 : _b2.metadata) == null ? void 0 : _c2.evmChainId,
        isDevnet: selectedWallet.type === "SOLANA" && ((_e2 = (_d2 = sendMetadata == null ? void 0 : sendMetadata.network) == null ? void 0 : _d2.metadata) == null ? void 0 : _e2.internalId) === "SOLANA_DEVNET",
        tokenSymbol: (_g = (_f2 = sendMetadata == null ? void 0 : sendMetadata.asset) == null ? void 0 : _f2.metadata) == null ? void 0 : _g.symbol
      }
    });
  }, [
    transferAmount,
    destinationAddress,
    selectedWallet.address,
    selectedWallet.type,
    selectedWallet.id,
    sendMetadata == null ? void 0 : sendMetadata.asset,
    sendMetadata == null ? void 0 : sendMetadata.network,
    para.userId,
    assetAmountOnNetwork,
    isMax
  ]);
  const value = (0, import_react113.useMemo)(() => {
    return {
      step,
      sendMetadata,
      setSendMetadata,
      destinationAddress,
      setDestinationAddress,
      transferValue,
      setTransferValue,
      transferAmount,
      setTransferAmount,
      assetPrice,
      assetValueOnNetwork,
      assetAmountOnNetwork,
      estimate,
      isMax,
      setIsMax,
      onSubmit,
      estimateIsPending,
      estimateIsError,
      broadcast,
      broadcastIsPending,
      broadcastIsError,
      optionsType
    };
  }, [
    step,
    sendMetadata,
    setSendMetadata,
    destinationAddress,
    setDestinationAddress,
    transferValue,
    setTransferValue,
    transferAmount,
    setTransferAmount,
    assetPrice,
    assetValueOnNetwork,
    assetAmountOnNetwork,
    estimate,
    isMax,
    setIsMax,
    onSubmit,
    estimateIsPending,
    estimateIsError,
    broadcast,
    broadcastIsPending,
    broadcastIsError,
    optionsType
  ]);
  return (0, import_jsx_runtime82.jsx)(AccountSendContext.Provider, { value, children });
}
var useSend = () => (0, import_react113.useContext)(AccountSendContext);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/AccountSend/AccountSendForm.js
var import_react115 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/hooks/useDebounce.js
var import_react114 = __toESM(require_react(), 1);
function useDebounce(value, delay2 = 500) {
  const [debouncedValue, setDebouncedValue] = (0, import_react114.useState)(value);
  (0, import_react114.useEffect)(() => {
    const timer = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay2);
    return () => window.clearTimeout(timer);
  }, [value, delay2]);
  return debouncedValue;
}

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/AccountSend/AssetNetwork.js
var import_jsx_runtime83 = __toESM(require_jsx_runtime(), 1);
function AssetNetwork({
  size = 40,
  assetSrc,
  networkSrc
}) {
  return (0, import_jsx_runtime83.jsxs)("div", { style: { position: "relative", width: `${size}px`, height: `${size}px` }, children: [
    assetSrc ? (0, import_jsx_runtime83.jsx)(CpslIcon, { radius: "full", src: assetSrc, size: `${size}px` }) : (0, import_jsx_runtime83.jsx)(
      CpslIcon,
      {
        icon: "coins",
        radius: "full",
        size: `${size}px`,
        inset: `${size / 8}px`,
        color: "var(--cpsl-color-text-contrast)",
        background: "var(--cpsl-color-accent-64)"
      }
    ),
    networkSrc && (0, import_jsx_runtime83.jsx)(
      CpslIcon,
      {
        radius: "full",
        src: networkSrc,
        size: `${2 + size * 3 / 8}px`,
        border: "1px solid var(--cpsl-color-background-4)",
        style: { position: "absolute", bottom: 0, right: 0 }
      }
    )
  ] });
}

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/AccountSend/AccountSendForm.js
function AccountSendForm() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const { selectedWallet } = useWalletState();
  const setStep = useModalStore((state2) => state2.setStep);
  const onRampConfig = useModalStore((state2) => state2.onRampConfig);
  const {
    estimate,
    broadcast,
    onSubmit,
    sendMetadata,
    destinationAddress,
    setDestinationAddress,
    transferValue,
    setTransferValue,
    transferAmount,
    setTransferAmount,
    assetPrice,
    assetValueOnNetwork,
    assetAmountOnNetwork,
    isMax,
    setIsMax,
    estimateIsPending,
    broadcastIsPending,
    optionsType
  } = useSend();
  const [inputDestinationAddress, setInputDestinationAddress] = (0, import_react115.useState)(destinationAddress);
  const dbInputDestinationAddress = useDebounce(inputDestinationAddress, 500);
  const isTestnet = (_b = (_a = sendMetadata == null ? void 0 : sendMetadata.network) == null ? void 0 : _a.metadata) == null ? void 0 : _b.isTestnet;
  const shouldUseAmountMode = !assetPrice || !!assetPrice && isTestnet;
  const [inputMode, setInputMode] = (0, import_react115.useState)(shouldUseAmountMode ? "AMOUNT" : "VALUE");
  const [inputValue, setInputValue] = (0, import_react115.useState)(
    inputMode === "VALUE" ? transferValue.toFixed(2) : formatAssetQuantity({ quantity: transferAmount, symbol: "" })
  );
  const dbInputValue = useDebounce(inputValue, 500);
  const isEditing = (0, import_react115.useRef)(false);
  const error = (0, import_react115.useMemo)(() => {
    var _a2;
    const errorRef = (estimate == null ? void 0 : estimate.error) || (broadcast == null ? void 0 : broadcast.error);
    if (!errorRef || estimateIsPending || broadcastIsPending) {
      return null;
    }
    switch (errorRef == null ? void 0 : errorRef.code) {
      case "INSUFFICIENT_NATIVE_BALANCE": {
        const nativeSymbol = (selectedWallet == null ? void 0 : selectedWallet.type) === "EVM" ? "ETH" : "SOL";
        return (0, import_jsx_runtime84.jsxs)(import_jsx_runtime84.Fragment, { children: [
          (0, import_jsx_runtime84.jsxs)(CpslText, { variant: "bodyXS", color: "error", style: { textAlign: (onRampConfig == null ? void 0 : onRampConfig.isBuyEnabled) ? "left" : "center" }, children: [
            "You need ",
            (_a2 = estimate == null ? void 0 : estimate.transferAmount) != null ? _a2 : nativeSymbol,
            " to conduct this transaction"
          ] }),
          (onRampConfig == null ? void 0 : onRampConfig.isBuyEnabled) && (0, import_jsx_runtime84.jsxs)(
            "button",
            {
              style: {
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "var(--cpsl-color-text-contrast)",
                fontSize: "12px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                paddingRight: 0
              },
              onClick: () => setStep(ModalStep.ADD_FUNDS_BUY),
              children: [
                (0, import_jsx_runtime84.jsxs)("span", { children: [
                  "Buy ",
                  nativeSymbol
                ] }),
                (0, import_jsx_runtime84.jsx)(CpslIcon, { icon: "chevronRight", size: "12px", color: "var(--cpsl-color-text-contrast)" })
              ]
            }
          )
        ] });
      }
      default: {
        return (0, import_jsx_runtime84.jsx)(CpslText, { variant: "bodyXS", color: "error", style: { textAlign: "center", width: "100%" }, children: errorRef == null ? void 0 : errorRef.message });
      }
    }
  }, [
    broadcast == null ? void 0 : broadcast.error,
    estimate == null ? void 0 : estimate.error,
    selectedWallet == null ? void 0 : selectedWallet.type,
    estimateIsPending,
    broadcastIsPending,
    onRampConfig == null ? void 0 : onRampConfig.isBuyEnabled
  ]);
  (0, import_react115.useEffect)(() => {
    var _a2, _b2;
    const isTestnet2 = (_b2 = (_a2 = sendMetadata == null ? void 0 : sendMetadata.network) == null ? void 0 : _a2.metadata) == null ? void 0 : _b2.isTestnet;
    const shouldUseAmountMode2 = !assetPrice || !!assetPrice && isTestnet2;
    setInputMode(shouldUseAmountMode2 ? "AMOUNT" : "VALUE");
  }, [assetPrice, (_d = (_c = sendMetadata == null ? void 0 : sendMetadata.network) == null ? void 0 : _c.metadata) == null ? void 0 : _d.isTestnet]);
  (0, import_react115.useEffect)(() => {
    if (inputMode === "AMOUNT") {
      setTransferAmount(Number(dbInputValue));
    } else {
      setTransferValue(Number(dbInputValue));
    }
  }, [dbInputValue]);
  (0, import_react115.useEffect)(() => {
    setDestinationAddress(dbInputDestinationAddress);
  }, [dbInputDestinationAddress]);
  (0, import_react115.useEffect)(() => {
    if (inputMode === "VALUE" && !isEditing.current) {
      const numValue = parseFloat(inputValue || "0");
      const formattedValue = transferValue.toFixed(2);
      if (Math.abs(numValue - transferValue) > 1e-3 || inputValue !== formattedValue) {
        setInputValue(formattedValue);
      }
    }
  }, [transferValue, inputMode, inputValue]);
  (0, import_react115.useEffect)(() => {
    if (inputMode === "AMOUNT" && !isEditing.current && Number(inputValue) !== transferAmount) {
      setInputValue(formatAssetQuantity({ quantity: transferAmount, symbol: "" }));
    }
  }, [transferAmount]);
  (0, import_react115.useEffect)(() => {
    setInputDestinationAddress(destinationAddress);
  }, [destinationAddress]);
  return (0, import_jsx_runtime84.jsxs)("div", { style: { display: "flex", width: "100%", flexDirection: "column", gap: "16px", alignItems: "center" }, children: [
    (0, import_jsx_runtime84.jsxs)(
      "div",
      {
        style: {
          display: "flex",
          width: "100%",
          background: "var(--cpsl-color-background-4)",
          borderRadius: "var(--cpsl-border-radius-input)",
          padding: "32px 16px 16px",
          flexDirection: "column",
          gap: "32px",
          alignItems: "center"
        },
        children: [
          (0, import_jsx_runtime84.jsxs)("div", { style: { display: "flex", width: "100%", flexDirection: "column", gap: "4px", alignItems: "center" }, children: [
            (0, import_jsx_runtime84.jsx)(
              QuantityInput,
              {
                value: inputMode === "VALUE" ? isMax && !!assetValueOnNetwork ? assetValueOnNetwork.value.toFixed(2) : inputValue : isMax && !!assetAmountOnNetwork ? formatAssetQuantity({ quantity: assetAmountOnNetwork, symbol: "" }) : inputValue,
                onChange: (value) => {
                  setIsMax(false);
                  setInputValue(value != null ? value : "");
                },
                onFocus: () => isEditing.current = true,
                onBlur: () => {
                  isEditing.current = false;
                  if (inputMode === "VALUE" && inputValue) {
                    const numValue = parseFloat(inputValue);
                    if (!isNaN(numValue)) {
                      const formatted = numValue.toFixed(2);
                      if (inputValue !== formatted) {
                        setInputValue(formatted);
                      }
                    }
                  }
                },
                symbol: inputMode === "VALUE" ? "$" : void 0,
                size: "56px"
              }
            ),
            !!assetPrice && assetPrice.value > 0 && !isTestnet && (0, import_jsx_runtime84.jsxs)(
              "button",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer"
                },
                onClick: () => setInputMode((prev) => prev === "VALUE" ? "AMOUNT" : "VALUE"),
                children: [
                  (0, import_jsx_runtime84.jsx)(CpslText, { variant: "bodyM", color: "secondary", children: inputMode === "VALUE" ? formatAssetQuantity({
                    quantity: isMax && assetAmountOnNetwork ? assetAmountOnNetwork : transferAmount,
                    symbol: (_e = sendMetadata.asset.metadata) == null ? void 0 : _e.symbol
                  }) : formatCurrency({
                    value: isMax && assetValueOnNetwork ? assetValueOnNetwork.value : Number(transferValue),
                    currency: "USD"
                  }) }),
                  (0, import_jsx_runtime84.jsx)(CpslIcon, { icon: "arrowUpDown", size: "16px", color: "var(--cpsl-color-text-secondary)" })
                ]
              }
            )
          ] }),
          (sendMetadata == null ? void 0 : sendMetadata.asset) && (sendMetadata == null ? void 0 : sendMetadata.network) && (0, import_jsx_runtime84.jsxs)(
            "button",
            {
              onClick: () => !["SINGLE_NETWORK", "NONE"].includes(optionsType) ? setStep(optionsType === "SINGLE_ASSET" ? ModalStep.ACCOUNT_SEND_NETWORK : ModalStep.ACCOUNT_SEND_ASSET) : void 0,
              style: {
                cursor: "pointer",
                background: "transparent",
                border: "none",
                padding: 0,
                display: "flex",
                width: "100%",
                height: "32px",
                alignItems: "center",
                justifyContent: "space-between"
              },
              children: [
                (0, import_jsx_runtime84.jsxs)(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      gap: "8px",
                      flexGrow: 1,
                      height: "100%"
                    },
                    children: [
                      (0, import_jsx_runtime84.jsx)(
                        AssetNetwork,
                        {
                          assetSrc: sendMetadata.asset.metadata.logoUrl,
                          networkSrc: sendMetadata.network.metadata.logoUrl,
                          size: 32
                        }
                      ),
                      (0, import_jsx_runtime84.jsxs)(
                        "div",
                        {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            flexGrow: 1,
                            position: "relative",
                            height: "100%"
                          },
                          children: [
                            (0, import_jsx_runtime84.jsx)(
                              CpslText,
                              {
                                variant: "bodyM",
                                color: "contrast",
                                style: { position: "absolute", height: "16px", top: "-4px", left: 0 },
                                children: sendMetadata.asset.metadata.symbol
                              }
                            ),
                            (0, import_jsx_runtime84.jsxs)(
                              CpslText,
                              {
                                variant: "bodyS",
                                color: "secondary",
                                style: { position: "absolute", height: "14px", bottom: 0, left: 0 },
                                children: [
                                  "Balance:",
                                  " ",
                                  formatAssetQuantity({
                                    quantity: assetAmountOnNetwork,
                                    symbol: ""
                                  }),
                                  !!assetValueOnNetwork && (0, import_jsx_runtime84.jsxs)("span", { style: { color: "var(--cpsl-color-text-tertiary) !important" }, children: [
                                    " (",
                                    formatCurrency(assetValueOnNetwork),
                                    ")"
                                  ] })
                                ]
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                !isMax && (0, import_jsx_runtime84.jsx)(
                  "button",
                  {
                    style: {
                      background: "transparent",
                      cursor: "pointer",
                      border: "1px solid var(--cpsl-color-background-16)",
                      color: "var(--cpsl-color-text-primary)",
                      borderRadius: "4px",
                      padding: "4px"
                    },
                    onClick: (e) => {
                      e.stopPropagation();
                      setIsMax(true);
                    },
                    children: (0, import_jsx_runtime84.jsx)(CpslText, { variant: "bodyXS", color: "primary", children: "Max" })
                  }
                ),
                optionsType !== "SINGLE_NETWORK" && (0, import_jsx_runtime84.jsx)(CpslIcon, { icon: "chevronRight", size: "24px", color: "var(--cpsl-color-text-contrast)" })
              ]
            }
          )
        ]
      }
    ),
    (0, import_jsx_runtime84.jsx)(
      CpslInput,
      {
        placeholder: "Enter recipient address",
        value: inputDestinationAddress,
        onCpslInput: (e) => setInputDestinationAddress(e.detail.value),
        style: { width: "100%" },
        children: (0, import_jsx_runtime84.jsx)(WalletTypeIcon, { walletType: selectedWallet.type, size: "24px", slot: "start" })
      }
    ),
    ((estimate == null ? void 0 : estimate.feeValue) || (estimate == null ? void 0 : estimate.feeAmount) || estimateIsPending) && (0, import_jsx_runtime84.jsxs)("div", { style: { display: "flex", width: "100%", gap: "4px", alignItems: "center", justifyContent: "space-between" }, children: [
      (0, import_jsx_runtime84.jsx)(CpslText, { variant: "bodyXS", color: "secondary", children: "Network Fee" }),
      (0, import_jsx_runtime84.jsx)(CpslText, { variant: "bodyXS", color: "contrast", children: estimateIsPending ? "Estimating..." : (_i = (_h = ((_g = (_f = sendMetadata == null ? void 0 : sendMetadata.network) == null ? void 0 : _f.metadata) == null ? void 0 : _g.isTestnet) ? estimate == null ? void 0 : estimate.feeAmount : estimate == null ? void 0 : estimate.feeValue) != null ? _h : estimate == null ? void 0 : estimate.feeAmount) != null ? _i : "0" })
    ] }),
    error && (0, import_jsx_runtime84.jsx)("div", { style: { display: "flex", width: "100%", gap: "4px", alignItems: "center", justifyContent: "space-between" }, children: error }),
    (0, import_jsx_runtime84.jsx)(
      CpslButton,
      {
        variant: "primary",
        fullWidth: true,
        pending: estimateIsPending || broadcastIsPending,
        disabled: estimateIsPending || broadcastIsPending || !((_j = estimate == null ? void 0 : estimate.result) == null ? void 0 : _j.txSerialized) || !!(estimate == null ? void 0 : estimate.error),
        onClick: onSubmit,
        children: "Confirm Send"
      }
    )
  ] });
}

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/AccountSend/AccountSendAsset.js
var import_jsx_runtime85 = __toESM(require_jsx_runtime(), 1);
var import_react116 = __toESM(require_react(), 1);
var NetworkIcons = (0, import_react116.memo)(({ networks }) => {
  return (0, import_jsx_runtime85.jsx)("div", { style: { position: "relative", height: "12px" }, children: networks.slice(0, 3).map((network, index) => {
    var _a;
    return (0, import_jsx_runtime85.jsx)(
      CpslIcon,
      {
        src: network.metadata.logoUrl,
        size: "16px",
        radius: "full",
        style: {
          borderRadius: "1000px",
          backgroundColor: "var(--cpsl-color-primary)",
          position: "absolute",
          top: 0,
          left: `${index * 8}px`,
          zIndex: 3 - index
        }
      },
      ((_a = network.metadata) == null ? void 0 : _a.logoUrl) || index
    );
  }) });
});
NetworkIcons.displayName = "NetworkIcons";
function AccountSendAsset() {
  const setStep = useModalStore((state2) => state2.setStep);
  const { profileBalance } = useAssets();
  const { selectedWallet } = useWalletState();
  const { setSendMetadata, setTransferAmount } = useSend();
  const walletAssets = (0, import_react116.useMemo)(() => {
    var _a, _b;
    return (_b = (_a = profileBalance == null ? void 0 : profileBalance.wallets.find((wallet) => wallet.address === (selectedWallet == null ? void 0 : selectedWallet.address))) == null ? void 0 : _a.assets) != null ? _b : [];
  }, [profileBalance, selectedWallet == null ? void 0 : selectedWallet.address]);
  const transformItem = (0, import_react116.useCallback)((item) => {
    var _a, _b;
    const isValued = ((_a = item.value) == null ? void 0 : _a.value) && ((_b = item.value) == null ? void 0 : _b.value) >= 0.01;
    const quantity = formatAssetQuantity({ quantity: item.quantity, symbol: item.metadata.symbol });
    return {
      key: item.metadata.zerionId,
      icon: (0, import_jsx_runtime85.jsx)(
        AssetNetwork,
        {
          assetSrc: item.metadata.logoUrl,
          networkSrc: item.networks.length === 1 ? item.networks[0].metadata.logoUrl : void 0,
          size: 48
        }
      ),
      text: item.metadata.symbol,
      textSecondary: item.networks.length > 0 ? item.networks.length === 1 ? item.networks[0].metadata.name : (0, import_jsx_runtime85.jsx)(NetworkIcons, { networks: item.networks }) : void 0,
      endText: isValued ? formatCurrency(item.value) : quantity,
      endTextSecondary: isValued ? quantity : void 0
    };
  }, []);
  const searchFilter = (0, import_react116.useCallback)(({ item, searchStr }) => {
    if (!item.metadata) return false;
    const lowerSearchStr = searchStr.toLowerCase();
    return item.metadata.symbol.toLowerCase().includes(lowerSearchStr) || item.metadata.name.toLowerCase().includes(lowerSearchStr);
  }, []);
  const onSelect = (0, import_react116.useCallback)(
    (item) => {
      setTransferAmount(0);
      setSendMetadata({
        asset: item,
        network: item.networks[0]
      });
      setStep(item.networks.length > 1 ? ModalStep.ACCOUNT_SEND_NETWORK : ModalStep.ACCOUNT_SEND);
    },
    [setTransferAmount, setSendMetadata, setStep]
  );
  return (0, import_jsx_runtime85.jsx)("div", { style: { width: "100%" }, children: (0, import_jsx_runtime85.jsx)(
    SearchableButtonList,
    {
      items: walletAssets,
      transformItem,
      searchFilter,
      onSelect
    }
  ) });
}

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/AccountSend/AccountSendNetwork.js
var import_jsx_runtime86 = __toESM(require_jsx_runtime(), 1);
var import_react117 = __toESM(require_react(), 1);
function AccountSendNetwork() {
  const setStep = useModalStore((state2) => state2.setStep);
  const { profileBalance } = useAssets();
  const { sendMetadata, setSendMetadata } = useSend();
  const assetNetworks = (0, import_react117.useMemo)(() => {
    var _a, _b;
    return (_b = (_a = sendMetadata.asset) == null ? void 0 : _a.networks) != null ? _b : [];
  }, [profileBalance, sendMetadata.asset]);
  return (0, import_jsx_runtime86.jsx)("div", { style: { width: "100%", maxHeight: "480px" }, children: (0, import_jsx_runtime86.jsx)(
    SearchableButtonList,
    {
      items: assetNetworks,
      transformItem: (item) => {
        return {
          key: item.metadata.zerionId,
          icon: (0, import_jsx_runtime86.jsx)(AssetNetwork, { assetSrc: sendMetadata.asset.metadata.logoUrl, networkSrc: item.metadata.logoUrl, size: 48 }),
          text: sendMetadata.asset.metadata.symbol,
          textSecondary: item.metadata.name,
          endText: formatAssetQuantity({ quantity: item.quantity, symbol: sendMetadata.asset.metadata.symbol }),
          endTextSecondary: formatCurrency(item.value)
        };
      },
      searchPlaceholder: "Search for a network",
      searchFilter: ({ item, searchStr }) => {
        var _a, _b, _c;
        return (_c = (_b = (_a = item.metadata) == null ? void 0 : _a.name) == null ? void 0 : _b.toLowerCase().includes(searchStr.toLowerCase())) != null ? _c : false;
      },
      onSelect: (item) => {
        setSendMetadata((prev) => __spreadProps2(__spreadValues2({}, prev), {
          network: item
        }));
        setStep(ModalStep.ACCOUNT_SEND);
      }
    }
  ) });
}

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/AccountSend/AccountSendNoAssets.js
var import_jsx_runtime87 = __toESM(require_jsx_runtime(), 1);
function AccountSendNoAssets() {
  const onRampConfig = useModalStore((state2) => state2.onRampConfig);
  const setStep = useModalStore((state2) => state2.setStep);
  return (0, import_jsx_runtime87.jsxs)(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "308px",
        textAlign: "center"
      },
      children: [
        (0, import_jsx_runtime87.jsxs)(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              flexGrow: 1
            },
            children: [
              (0, import_jsx_runtime87.jsx)(CpslText, { variant: "bodyL", color: "primary", weight: "semiBold", children: "No Funds Available" }),
              (0, import_jsx_runtime87.jsx)(CpslText, { variant: "bodyS", color: "secondary", children: "Switch to a wallet with funds or buy crypto with this wallet." })
            ]
          }
        ),
        (onRampConfig == null ? void 0 : onRampConfig.isBuyEnabled) && (0, import_jsx_runtime87.jsx)(
          CpslButton,
          {
            fullWidth: true,
            variant: "primary",
            onClick: () => {
              setStep(ModalStep.ADD_FUNDS_BUY);
            },
            children: "Buy"
          }
        )
      ]
    }
  );
}

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Account/AccountSend/index.js
var STEP_ORDER = ["SEND_FORM", "SEND_ASSET", "SEND_NETWORK"];
function AccountSendIndex() {
  const { step, optionsType } = useSend();
  const prevStepRef = (0, import_react118.useRef)(step);
  const [direction, setDirection] = (0, import_react118.useState)(1);
  (0, import_react118.useEffect)(() => {
    const prevIndex = STEP_ORDER.indexOf(prevStepRef.current);
    const currentIndex = STEP_ORDER.indexOf(step);
    setDirection(currentIndex > prevIndex ? 1 : -1);
    prevStepRef.current = step;
  }, [step]);
  const Content4 = (0, import_react118.useMemo)(() => {
    if (optionsType === "NONE") {
      return (0, import_jsx_runtime88.jsx)(AccountSendNoAssets, {});
    }
    switch (step) {
      case "SEND_FORM":
        return (0, import_jsx_runtime88.jsx)(AccountSendForm, {});
      case "SEND_ASSET":
        return (0, import_jsx_runtime88.jsx)(AccountSendAsset, {});
      case "SEND_NETWORK":
        return (0, import_jsx_runtime88.jsx)(AccountSendNetwork, {});
    }
  }, [step, optionsType]);
  return (0, import_jsx_runtime88.jsxs)(StepContainer, { style: { gap: "16px" }, children: [
    step === "SEND_FORM" && (0, import_jsx_runtime88.jsx)(WalletSelectOld, { noTitle: true, types: ["EVM", "SOLANA"], isEmbeddedOnly: true, style: { width: "100%" } }),
    (0, import_jsx_runtime88.jsx)(AnimatePresence, { mode: "popLayout", initial: false, custom: direction, children: (0, import_jsx_runtime88.jsx)(
      AnimatedContainer,
      {
        custom: direction,
        variants: BODY_MOTION_VARIANTS,
        initial: "enter",
        animate: "center",
        exit: "exit",
        transition: BODY_TRANSITION,
        children: Content4
      },
      step
    ) })
  ] });
}
var AnimatedContainer = safeStyled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;
function AccountSend({ step }) {
  return (0, import_jsx_runtime88.jsx)(AccountSendProvider, { step, children: (0, import_jsx_runtime88.jsx)(AccountSendIndex, {}) });
}

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/Body/Body.js
var MIN_HEIGHT = {
  [ModalStep.ADD_FUNDS_AWAITING]: "680px"
};
var Body = ({
  oAuthMethods,
  twoFactorAuthEnabled,
  disableEmailLogin,
  disablePhoneLogin,
  isGuestModeEnabled = false,
  onClose,
  onDisconnect,
  isDisconnecting
}) => {
  const currentStep = useModalStore((state2) => state2.step);
  const onRampConfig = useModalStore((state2) => state2.onRampConfig);
  const stepDirection = useModalStore((state2) => state2.stepDirection);
  const setStepDirection = useModalStore((state2) => state2.setStepDirection);
  const accountAddFundTab = useModalStore((state2) => state2.accountAddFundTab);
  const setAccountAddFundTab = useModalStore((state2) => state2.setAccountAddFundTab);
  const modalError = useModalStore((state2) => state2.modalError);
  const setModalError = useModalStore((state2) => state2.setModalError);
  const embeddedModal = useStore2((state2) => {
    var _a;
    return (_a = state2.modalConfig) == null ? void 0 : _a.embeddedModal;
  });
  const appName = useStore2((state2) => state2.appName);
  const [isTestModeAlert, setIsTestModeAlert] = (0, import_react119.useState)(onRampConfig == null ? void 0 : onRampConfig.testMode);
  const Content4 = () => {
    switch (currentStep) {
      case ModalStep.AUTH_MAIN: {
        return (0, import_jsx_runtime89.jsx)(
          AuthMainStep,
          {
            oAuthMethods,
            disableEmailLogin,
            disablePhoneLogin,
            isGuestModeEnabled
          }
        );
      }
      case ModalStep.EX_WALLET_MORE: {
        return (0, import_jsx_runtime89.jsx)(ExternalWallets, {});
      }
      case ModalStep.AWAITING_GUEST_WALLET_CREATION: {
        return (0, import_jsx_runtime89.jsx)(AwaitingWalletCreationStep, { isGuestMode: true });
      }
      case ModalStep.AUTH_MORE:
      case ModalStep.AUTH_GUEST_SIGNUP: {
        return (0, import_jsx_runtime89.jsx)(
          AuthOptions,
          {
            oAuthMethods,
            disableEmailLogin,
            disablePhoneLogin,
            isGuestModeEnabled
          }
        );
      }
      case ModalStep.VERIFICATIONS: {
        return (0, import_jsx_runtime89.jsx)(VerificationCodeStep, {});
      }
      case ModalStep.EXTERNAL_WALLET_VERIFICATION: {
        return (0, import_jsx_runtime89.jsx)(ExternalWalletVerificationStep, {});
      }
      case ModalStep.BIOMETRIC_LOGIN: {
        return (0, import_jsx_runtime89.jsx)(BiometricLoginStep, {});
      }
      case ModalStep.SETUP_2FA:
      case ModalStep.VERIFY_2FA: {
        return (0, import_jsx_runtime89.jsx)(Setup2FAStep, { onClose });
      }
      case ModalStep.LOGIN_DONE: {
        return (0, import_jsx_runtime89.jsx)(LoginDoneStep, { onClose });
      }
      case ModalStep.AWAITING_BIOMETRIC_LOGIN:
      case ModalStep.AWAITING_BIOMETRIC_CREATION: {
        return (0, import_jsx_runtime89.jsx)(AwaitingBiometricsStep, {});
      }
      case ModalStep.AWAITING_PASSWORD_LOGIN:
      case ModalStep.AWAITING_PASSWORD_CREATION: {
        return (0, import_jsx_runtime89.jsx)(AwaitingPasswordStep, {});
      }
      case ModalStep.AWAITING_WALLET_CREATION: {
        return (0, import_jsx_runtime89.jsx)(AwaitingWalletCreationStep, {});
      }
      case ModalStep.WALLET_CREATION_DONE: {
        return (0, import_jsx_runtime89.jsx)(WalletCreationDoneStep, { twoFactorAuthEnabled, onClose });
      }
      case ModalStep.SECRET: {
        return (0, import_jsx_runtime89.jsx)(RecoverySecretStep, {});
      }
      case ModalStep.TWO_FACTOR_DONE: {
        return (0, import_jsx_runtime89.jsx)(TwoFactorDoneStep, { onClose });
      }
      case ModalStep.BIOMETRIC_CREATION: {
        return (0, import_jsx_runtime89.jsx)(BiometricCreationStep, {});
      }
      case ModalStep.AWAITING_OAUTH: {
        return (0, import_jsx_runtime89.jsx)(AwaitingOAuthStep, {});
      }
      case ModalStep.FARCASTER_OAUTH: {
        return (0, import_jsx_runtime89.jsx)(FarcasterOAuthStep, {});
      }
      case ModalStep.TELEGRAM_OAUTH: {
        return (0, import_jsx_runtime89.jsx)(TelegramOAuthStep, {});
      }
      case ModalStep.ADD_FUNDS_BUY:
      case ModalStep.ADD_FUNDS_RECEIVE:
      case ModalStep.ADD_FUNDS_WITHDRAW: {
        return (0, import_jsx_runtime89.jsx)(AddFunds, { "data-testid": "add-funds" });
      }
      case ModalStep.ADD_FUNDS_AWAITING: {
        return (0, import_jsx_runtime89.jsx)(AddFundsAwaiting, {});
      }
      case ModalStep.ADD_FUNDS_SUCCESS: {
        return (0, import_jsx_runtime89.jsx)(AddFundsDone, { isSuccess: true, onClose });
      }
      case ModalStep.ADD_FUNDS_FAILURE: {
        return (0, import_jsx_runtime89.jsx)(AddFundsDone, { onClose });
      }
      case ModalStep.ACCOUNT_MAIN: {
        return (0, import_jsx_runtime89.jsx)(Account, {});
      }
      case ModalStep.ACCOUNT_PROFILE: {
        return (0, import_jsx_runtime89.jsx)(AccountProfile, { onDisconnect, isDisconnecting });
      }
      case ModalStep.ACCOUNT_PROFILE_LIST: {
        return (0, import_jsx_runtime89.jsx)(AccountProfileLinkOptions, {});
      }
      case ModalStep.ACCOUNT_PROFILE_ADD: {
        return (0, import_jsx_runtime89.jsx)(AccountProfileLink, {});
      }
      case ModalStep.ACCOUNT_PROFILE_REMOVE: {
        return (0, import_jsx_runtime89.jsx)(AccountProfileUnlink, {});
      }
      case ModalStep.ACCOUNT_WALLET: {
        return (0, import_jsx_runtime89.jsx)(AccountWallet, {});
      }
      case ModalStep.EX_WALLET_SELECTED: {
        return (0, import_jsx_runtime89.jsx)(ExternalWalletStep, {});
      }
      case ModalStep.CHAIN_SWITCH: {
        return (0, import_jsx_runtime89.jsx)(ChainSwitch, {});
      }
      case ModalStep.EX_WALLET_NETWORK_SELECT: {
        return (0, import_jsx_runtime89.jsx)(ExternalWalletNetworkSelectStep, { type: "CONNECT" });
      }
      case ModalStep.ADD_EX_WALLET_NETWORK_SELECT: {
        return (0, import_jsx_runtime89.jsx)(ExternalWalletNetworkSelectStep, { type: "ADD_EXTERNAL" });
      }
      case ModalStep.LINK_EX_WALLET_NETWORK_SELECT: {
        return (0, import_jsx_runtime89.jsx)(ExternalWalletNetworkSelectStep, { type: "ACCOUNT_LINKING" });
      }
      case ModalStep.ADD_EX_WALLET_MORE: {
        return (0, import_jsx_runtime89.jsx)(ExternalWallets, { isAddingWallets: true });
      }
      case ModalStep.ADD_EX_WALLET_SELECTED: {
        return (0, import_jsx_runtime89.jsx)(ExternalWalletStep, { isAddingWallets: true });
      }
      case ModalStep.ADD_EX_WALLET_NETWORK_SELECT: {
        return (0, import_jsx_runtime89.jsx)(ExternalWalletNetworkSelectStep, { type: "ADD_EXTERNAL" });
      }
      case ModalStep.AWAITING_ACCOUNT: {
        return (0, import_jsx_runtime89.jsx)(AwaitingAccountStep, {});
      }
      case ModalStep.SWITCH_WALLETS: {
        return (0, import_jsx_runtime89.jsx)(SwitchWalletsStep, {});
      }
      case ModalStep.ACCOUNT_SEND: {
        return (0, import_jsx_runtime89.jsx)(AccountSend, { step: "SEND_FORM" });
      }
      case ModalStep.ACCOUNT_SEND_ASSET: {
        return (0, import_jsx_runtime89.jsx)(AccountSend, { step: "SEND_ASSET" });
      }
      case ModalStep.ACCOUNT_SEND_NETWORK: {
        return (0, import_jsx_runtime89.jsx)(AccountSend, { step: "SEND_NETWORK" });
      }
      default: {
        if (IFrameSteps.includes(currentStep)) {
          return null;
        }
      }
    }
  };
  (0, import_react119.useEffect)(() => {
    if (!isTestModeAlert && (onRampConfig == null ? void 0 : onRampConfig.testMode)) {
      setIsTestModeAlert(true);
    }
  }, [onRampConfig == null ? void 0 : onRampConfig.testMode]);
  (0, import_react119.useEffect)(() => {
    switch (currentStep) {
      case ModalStep.ADD_FUNDS_BUY:
        setAccountAddFundTab(EnabledFlow.BUY);
        break;
      case ModalStep.ADD_FUNDS_RECEIVE:
        setAccountAddFundTab(EnabledFlow.RECEIVE);
        break;
      case ModalStep.ADD_FUNDS_WITHDRAW:
        setAccountAddFundTab(EnabledFlow.WITHDRAW);
        break;
      default:
        break;
    }
  }, [currentStep]);
  return (0, import_jsx_runtime89.jsxs)(Container23, { slot: "body", "data-testid": "modal-content", children: [
    !embeddedModal && (0, import_jsx_runtime89.jsxs)(import_jsx_runtime89.Fragment, { children: [
      (0, import_jsx_runtime89.jsx)(Controls, { onClose }),
      (0, import_jsx_runtime89.jsx)(Header, {})
    ] }),
    (0, import_jsx_runtime89.jsxs)(AnimatedWrapper, { noAnimate: IFrameSteps.includes(currentStep), children: [
      (0, import_jsx_runtime89.jsx)(
        AnimatePresence,
        {
          mode: "popLayout",
          initial: false,
          onExitComplete: () => {
            setStepDirection(1);
          },
          custom: stepDirection,
          children: (0, import_jsx_runtime89.jsxs)(
            BodyContainer,
            {
              custom: stepDirection,
              variants: BODY_MOTION_VARIANTS,
              initial: "enter",
              animate: "center",
              exit: "exit",
              transition: BODY_TRANSITION,
              children: [
                (0, import_jsx_runtime89.jsxs)(
                  InnerContainer2,
                  {
                    $embeddedModal: !!embeddedModal,
                    $step: currentStep,
                    $isIFrameStep: IFrameSteps.includes(currentStep),
                    children: [
                      !IFrameSteps.includes(currentStep) && (0, import_jsx_runtime89.jsx)(NetworkSpeedBanner, { fontSize: "12px", iconSize: "16px" }),
                      Content4(),
                      (onRampConfig == null ? void 0 : onRampConfig.testMode) && [
                        ModalStep.ADD_FUNDS_BUY,
                        ModalStep.ADD_FUNDS_WITHDRAW,
                        ModalStep.ADD_FUNDS_AWAITING,
                        ModalStep.ADD_FUNDS_FAILURE,
                        ModalStep.ADD_FUNDS_SUCCESS
                      ].includes(currentStep) && isTestModeAlert && accountAddFundTab !== EnabledFlow.RECEIVE && (0, import_jsx_runtime89.jsx)(TestModeAlert, { children: (0, import_jsx_runtime89.jsxs)("div", { style: { fontSize: "14px" }, children: [
                        "This Para Modal is configured to run on-ramp services in ",
                        (0, import_jsx_runtime89.jsx)("b", { children: "test mode" }),
                        " only, for development purposes. If you are a user of ",
                        appName,
                        ", please contact support.",
                        (0, import_jsx_runtime89.jsx)(CloseButton2, { onClick: () => setIsTestModeAlert(false), children: (0, import_jsx_runtime89.jsx)(CloseX, { icon: "x" }) })
                      ] }) })
                    ]
                  }
                ),
                modalError && (0, import_jsx_runtime89.jsx)(WarningBanner, { onClose: () => setModalError(void 0), children: renderTextWithLinks(modalError) })
              ]
            },
            ["ADD_FUNDS_BUY", "ADD_FUNDS_RECEIVE", "ADD_FUNDS_WITHDRAW"].includes(currentStep) ? "ADD_FUNDS" : ["ACCOUNT_SEND", "ACCOUNT_SEND_ASSET", "ACCOUNT_SEND_NETWORK"].includes(currentStep) ? "ACCOUNT_SEND" : currentStep
          )
        }
      ),
      (0, import_jsx_runtime89.jsx)(IFrameStep, {}),
      (0, import_jsx_runtime89.jsx)(Footer, {})
    ] })
  ] });
};
var Container23 = safeStyled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
var AnimatedWrapper = safeStyled(AnimatedHeightWrapper)`
`;
var BodyContainer = safeStyled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  will-change: auto !important;
`;
var InnerContainer2 = safeStyled.div`
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
  padding: 0px;
  min-height: ${({ $step }) => {
  var _a;
  return (_a = MIN_HEIGHT[$step]) != null ? _a : "auto";
}};
  height: ${({ $step }) => {
  var _a;
  return (_a = MIN_HEIGHT[$step]) != null ? _a : "auto";
}};

  @media (max-width: ${MOBILE_SIZE}px) {
    padding: ${({ $embeddedModal, $isIFrameStep }) => $isIFrameStep ? "0px" : $embeddedModal ? "12px 0px 0px" : "0px"};
  }
`;
var TestModeAlert = safeStyled(CpslAlert)`
  --container-padding-end: 40px;
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  z-index: 1000;
`;
var CloseButton2 = safeStyled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;
var CloseX = safeStyled(CpslIcon)`
  --icon-color: var(--cpsl-color-utility-yellow-dark, #92400e);
  --height: 18px;
  --width: 18px;
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/components/ModalContent/ModalContent.js
var ModalContent = (0, import_react120.forwardRef)(
  ({
    twoFactorAuthEnabled = false,
    oAuthMethods,
    disableEmailLogin,
    disablePhoneLogin,
    isGuestModeEnabled = false,
    onClose,
    onDisconnect,
    isDisconnecting,
    onRampTestMode
  }, ref) => {
    const para = useInternalClient();
    const refs = useModalStore((state2) => state2.refs);
    const onRampConfig = useModalStore((state2) => state2.onRampConfig);
    const setOnRampConfig = useModalStore((state2) => state2.setOnRampConfig);
    const accountAddFundTab = useModalStore((state2) => state2.accountAddFundTab);
    const setAccountAddFundTab = useModalStore((state2) => state2.setAccountAddFundTab);
    const { disconnectExternalWallet } = useExternalWallets();
    (0, import_react120.useImperativeHandle)(ref, () => {
      return {
        handleModalClose() {
          handleClose();
        }
      };
    }, []);
    const handleClose = () => {
      onClose == null ? void 0 : onClose();
      if (refs.currentStep.current === ModalStep.EXTERNAL_WALLET_VERIFICATION && para.isExternalWalletAuth) {
        disconnectExternalWallet();
      }
    };
    (0, import_react120.useEffect)(() => {
      if (!onRampConfig) {
        para.ctx.client.getOnRampConfig().then((res) => {
          let newOnRampConfig;
          newOnRampConfig = __spreadProps2(__spreadValues2({}, res), { testMode: onRampTestMode });
          setOnRampConfig(newOnRampConfig);
          if (!accountAddFundTab) {
            setAccountAddFundTab(
              newOnRampConfig.isBuyEnabled ? EnabledFlow.BUY : newOnRampConfig.isReceiveEnabled ? EnabledFlow.RECEIVE : newOnRampConfig.isWithdrawEnabled ? EnabledFlow.WITHDRAW : void 0
            );
          }
        }).catch();
      }
    }, []);
    (0, import_react120.useEffect)(() => {
      if (!!onRampConfig) {
        setOnRampConfig(__spreadProps2(__spreadValues2({}, onRampConfig), { testMode: onRampTestMode }));
      }
    }, [onRampTestMode]);
    (0, import_react120.useEffect)(() => {
      return () => {
        var _a;
        window.clearTimeout((_a = refs.poll.current) == null ? void 0 : _a.timeout);
      };
    }, []);
    return (0, import_jsx_runtime90.jsxs)(import_jsx_runtime90.Fragment, { children: [
      (0, import_jsx_runtime90.jsx)(
        Body,
        {
          oAuthMethods,
          twoFactorAuthEnabled,
          disableEmailLogin: !!disableEmailLogin,
          disablePhoneLogin: !!disablePhoneLogin,
          isGuestModeEnabled,
          onClose: handleClose,
          onDisconnect,
          isDisconnecting
        }
      ),
      (0, import_jsx_runtime90.jsx)(Footer, {})
    ] });
  }
);

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/ParaModal.js
var import_react121 = __toESM(require_react(), 1);
defineCustomElements();
var ParaModal = (0, import_react121.forwardRef)((props, ref) => {
  const storedModalConfig = useStore2((state2) => state2.modalConfig);
  const refs = useStore2((state2) => state2.refs);
  const modalContentRef = (0, import_react121.useRef)(null);
  const modalRefs = useModalStore((state2) => state2.refs);
  const flow = useModalStore((state2) => state2.flow);
  const currentStep = useModalStore((state2) => state2.step);
  const setAuthState = useModalStore((state2) => state2.setAuthState);
  const setOnModalStepChange = useModalStore((state2) => state2.setOnModalStepChange);
  const setStep = useModalStore((state2) => state2.setStep);
  const hasPreviousStep = useModalStore((state2) => state2.hasPreviousStep());
  const setFlow = useModalStore((state2) => state2.setFlow);
  const goBack = useGoBack();
  const setAuthLayout = useModalStore((state2) => state2.setAuthLayout);
  const storedAuthLayout = useModalStore((state2) => state2.authLayout);
  const resetModalState = useModalStore((state2) => state2.resetState);
  const setRecoveryShare = useModalStore((state2) => state2.setRecoveryShare);
  const { disconnectExternalWallet } = useExternalWallets();
  const { isOpen: storedIsOpen, closeModal } = useModal();
  const para = useInternalClient();
  const { setSelectedWallet, updateSelectedWallet } = useWalletState();
  const setAuthStepRoute = useModalStore((state2) => state2.setAuthStepRoute);
  const { signUpOrLogIn: signUpOrLogIn2, isCreateGuestWalletsPending } = useAuthActions();
  const { isReady, isFarcasterMiniApp } = useParaStatus();
  const { isLoading: isAccountLoading, isConnected, embedded } = useAccount();
  const setIFrameUrl = useModalStore((state2) => state2.setIFrameUrl);
  const setIsIFrameReady = useModalStore((state2) => state2.setIsIFrameReady);
  const [isModalMounted, setIsModalMounted] = (0, import_react121.useState)(false);
  const [isDisconnecting, setIsDisconnecting] = (0, import_react121.useState)(false);
  const externalWallets = useStore2((state2) => state2.externalWallets);
  const providerProps = useStore2((state2) => state2.providerProps);
  const setAccountLinkOptions = useModalStore((state2) => state2.setAccountLinkOptions);
  const selectedExternalWallet = useModalStore((state2) => state2.selectedExternalWallet);
  const isInitialized = (0, import_react121.useRef)(false);
  const _a = __spreadValues2(__spreadValues2({}, storedModalConfig), props), {
    isOpen: configIsOpen,
    theme,
    disableEmailLogin = false,
    disablePhoneLogin = false,
    isGuestModeEnabled = false,
    oAuthMethods = ["GOOGLE", "TWITTER"],
    bareModal = false,
    className,
    currentStepOverride,
    authLayout = [AuthLayout.AUTH_FULL, AuthLayout.EXTERNAL_FULL],
    embeddedModal,
    onModalStepChange,
    onClose,
    defaultAuthIdentifier,
    supportedAccountLinks: propsSupportedAccountLinks
  } = _a, rest = __objRest2(_a, [
    "isOpen",
    "theme",
    "disableEmailLogin",
    "disablePhoneLogin",
    "isGuestModeEnabled",
    "oAuthMethods",
    "bareModal",
    "className",
    "currentStepOverride",
    "authLayout",
    "embeddedModal",
    "onModalStepChange",
    "onClose",
    "defaultAuthIdentifier",
    "supportedAccountLinks"
  ]);
  (0, import_react121.useEffect)(() => {
    const trackAnalytics = () => __async(void 0, null, function* () {
      try {
        yield para.ctx.client.trackReactSdkAnalytics({
          props: __spreadValues2(__spreadProps2(__spreadValues2({}, providerProps), {
            theme,
            disableEmailLogin,
            disablePhoneLogin,
            isGuestModeEnabled,
            oAuthMethods,
            bareModal,
            className,
            currentStepOverride,
            authLayout,
            embeddedModal,
            onModalStepChange,
            onClose,
            defaultAuthIdentifier
          }), rest),
          reactSdkVersion: SDK_VERSION
        });
      } catch (e) {
      }
    });
    trackAnalytics();
  }, []);
  const isOpen = bareModal || (configIsOpen != null ? configIsOpen : storedIsOpen);
  (0, import_react121.useImperativeHandle)(ref, () => {
    return {
      goBack() {
        goBack();
      },
      canGoBack() {
        return hasPreviousStep;
      },
      currentStep() {
        return currentStep;
      },
      handleModalClose() {
        var _a2;
        (_a2 = modalContentRef == null ? void 0 : modalContentRef.current) == null ? void 0 : _a2.handleModalClose();
      }
    };
  }, [hasPreviousStep, currentStep]);
  const initModal = (shouldAutoLogin) => __async(void 0, null, function* () {
    var _a2;
    if (!isReady) {
      return;
    }
    setIFrameUrl(void 0);
    setIsIFrameReady(false);
    const isAccount = isConnected, isGuest = isAccount && para.isGuestMode || isCreateGuestWalletsPending;
    switch (true) {
      case !!currentStepOverride:
        setStep(ModalStep[currentStepOverride.toUpperCase()]);
        break;
      case isGuest:
        setFlow("guest");
        setStep(isCreateGuestWalletsPending ? ModalStep.AWAITING_GUEST_WALLET_CREATION : ModalStep.ACCOUNT_MAIN);
        break;
      case isAccount:
        setFlow("account");
        if (!refs.openedToStep.current) {
          setStep(ModalStep.ACCOUNT_MAIN);
        }
        break;
      default:
        if (currentStep !== ModalStep.AUTH_MAIN && currentStep !== ModalStep.SECRET) {
          setFlow(void 0);
          setStep(para.isTelegram ? ModalStep.TELEGRAM_OAUTH : ModalStep.AUTH_MAIN);
          setAuthState();
          setAuthStepRoute();
        }
        if (!isFarcasterMiniApp) {
          yield disconnectExternalWallet();
          setSelectedWallet({ id: void 0, type: void 0 });
        }
        if (shouldAutoLogin) {
          if (defaultAuthIdentifier && ((_a2 = para.authInfo) == null ? void 0 : _a2.identifier) !== defaultAuthIdentifier) {
            const number2 = parsePhoneNumber(defaultAuthIdentifier);
            try {
              const auth = validateInput(
                number2 ? number2.nationalNumber : defaultAuthIdentifier,
                (number2 == null ? void 0 : number2.countryCallingCode) ? `+${number2 == null ? void 0 : number2.countryCallingCode}` : void 0,
                number2 ? "phone" : "email"
              );
              para.setAuth(number2 ? { phone: defaultAuthIdentifier } : { email: defaultAuthIdentifier });
              signUpOrLogIn2(auth);
            } catch (err) {
              console.error("invalid user identifier:", err.message);
            }
          }
        }
        break;
    }
  });
  (0, import_react121.useEffect)(() => {
    if (isReady && isOpen && !isAccountLoading && !isInitialized.current) {
      initModal(isOpen);
      isInitialized.current = true;
    }
    let timerId;
    if (!bareModal && isReady && !isOpen && isInitialized.current) {
      timerId = setTimeout(() => {
        initModal();
        isInitialized.current = false;
      }, 250);
    }
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [bareModal, isReady, isOpen, isAccountLoading]);
  (0, import_react121.useEffect)(() => {
    let _authLayout = authLayout;
    if (!(externalWallets == null ? void 0 : externalWallets.length) && hasExternalWallet(authLayout)) {
      _authLayout = _authLayout.filter((l) => !l.includes("EXTERNAL"));
    }
    if (disableEmailLogin && disablePhoneLogin && !(oAuthMethods == null ? void 0 : oAuthMethods.length) && hasEmbeddedAuth(authLayout)) {
      _authLayout = _authLayout.filter((l) => !l.includes("AUTH"));
    }
    if (JSON.stringify(storedAuthLayout) !== JSON.stringify(_authLayout)) {
      setAuthLayout(_authLayout);
    }
  }, [disableEmailLogin, disablePhoneLogin, oAuthMethods, externalWallets, authLayout, storedAuthLayout]);
  (0, import_react121.useEffect)(() => {
    if (theme) {
      generateTheme(theme);
    }
  }, [theme]);
  (0, import_react121.useEffect)(() => {
    setOnModalStepChange(onModalStepChange);
  }, [onModalStepChange]);
  (0, import_react121.useEffect)(() => {
    updateSelectedWallet();
  }, [para]);
  (0, import_react121.useEffect)(() => {
    if (bareModal && !selectedExternalWallet && !isAccountLoading && !isConnected && !["signup", "login"].includes(flow != null ? flow : "") && modalRefs.currentStep.current !== ModalStep.AUTH_MAIN) {
      setStep(ModalStep.AUTH_MAIN);
    }
  }, [bareModal, flow, isConnected, isAccountLoading, selectedExternalWallet]);
  (0, import_react121.useEffect)(() => {
    setAccountLinkOptions(propsSupportedAccountLinks != null ? propsSupportedAccountLinks : para == null ? void 0 : para.supportedAccountLinks);
  }, [propsSupportedAccountLinks, para == null ? void 0 : para.supportedAccountLinks]);
  const handleClose = () => {
    closeModal();
    onClose == null ? void 0 : onClose();
  };
  const handleDisconnect = () => __async(void 0, null, function* () {
    setIsDisconnecting(true);
    handleClose();
    const reset = () => __async(void 0, null, function* () {
      yield para.logout({ clearPregenWallets: embedded == null ? void 0 : embedded.isGuestMode });
      yield disconnectExternalWallet();
      setStep(ModalStep.AUTH_MAIN);
      setFlow(void 0);
      setIsDisconnecting(false);
    });
    if (bareModal) {
      reset();
      return;
    }
    setTimeout(() => {
      reset();
    }, 250);
  });
  const handleModalEntering = () => {
    setIsModalMounted(true);
  };
  const handleModalExited = () => __async(void 0, null, function* () {
    refs.openedToStep.current = null;
    setIsModalMounted(false);
    if (RESET_TO_AUTH_STEPS.includes(currentStep)) {
      resetModalState();
      setRecoveryShare(null);
    } else if (RESET_TO_ACCOUNT_STEPS.includes(currentStep)) {
      setStep(ModalStep.LOGIN_DONE);
    }
  });
  if (!para) {
    console.error("A Para instance is required.");
    return null;
  }
  if (!(storedAuthLayout == null ? void 0 : storedAuthLayout.length)) {
    const hasExternalWalletError = !(externalWallets == null ? void 0 : externalWallets.length) && hasExternalWallet(authLayout);
    const hasEmbeddedWalletError = disableEmailLogin && disablePhoneLogin && !(oAuthMethods == null ? void 0 : oAuthMethods.length) && hasEmbeddedAuth(authLayout);
    if (hasExternalWalletError || hasEmbeddedWalletError) {
      if (hasExternalWalletError) {
        console.error("At least one external wallet must be provided if external wallet auth is enabled.");
      }
      if (hasEmbeddedWalletError) {
        console.error(
          "At least one login method (email, phone or OAuth) must be provided if embedded wallet auth is enabled."
        );
      }
    } else {
      console.error("At least one auth layout selection is required.");
    }
    return null;
  }
  return (0, import_jsx_runtime91.jsx)(
    StyledAuthModal,
    {
      enterTransitionDuration: DEFAULTS.ANIMATION_DURATION,
      exitTransitionDuration: DEFAULTS.ANIMATION_DURATION,
      open: isOpen,
      onCpslModalExited: handleModalExited,
      onCpslModalEntering: handleModalEntering,
      onCpslModalRequestClose: handleClose,
      noOverlay: bareModal,
      className,
      "data-testid": "modal",
      $embeddedModal: !!embeddedModal,
      children: isModalMounted && ((embeddedModal || bareModal) && isInitialized.current || !embeddedModal && !bareModal) && (0, import_jsx_runtime91.jsx)(
        ModalContent,
        __spreadValues2({
          oAuthMethods,
          disableEmailLogin,
          disablePhoneLogin,
          isGuestModeEnabled,
          onClose: handleClose,
          onDisconnect: handleDisconnect,
          isDisconnecting
        }, rest)
      )
    }
  );
});
var StyledAuthModal = safeStyled(CpslAuthModal)`
  ${({ $embeddedModal }) => $embeddedModal && `
    &::part(modal-body-card) {
    --card-box-shadow: none;
    --card-border-width: 0px;
  };

  &::part(modal-footer) {
    --card-box-shadow: none;
    --card-border-width: 0px;
  };`}
`;

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/modal/utils/validateOnRampConfig.js
var OnRampConfigError = class extends Error {
  constructor(message) {
    super(`On-ramp configuration error: ${message}.`);
    this.name = "OnRampConfigError";
  }
};
function checkHasProviders({ providers }) {
  if (!providers || providers.length < 1) {
    throw new OnRampConfigError("No providers are configured");
  }
}
function checkDuplicateProviders({ providers }) {
  providers.forEach((id3, index) => {
    if (providers.findIndex((p) => p === id3) !== index) {
      throw new OnRampConfigError(`Provider ${id3} is configured more than once`);
    }
  });
}
function validateOnRampConfig(obj) {
  if (!obj) {
    return false;
  }
  checkHasProviders(obj);
  checkDuplicateProviders(obj);
  return true;
}

// node_modules/.pnpm/@getpara+react-sdk-lite@2.0.0-alpha.73_@emotion+is-prop-valid@1.2.2_@tanstack+react-que_8567e4e90cb199ecada4d9cc3d944ced/node_modules/@getpara/react-sdk-lite/dist/index.js
var src_default3 = src_default2;

// node_modules/.pnpm/@getpara+react-sdk@2.0.0-alpha.73_2dc03c987641820ecb175cd72cd6c00f/node_modules/@getpara/react-sdk/dist/provider/ParaProvider.js
var import_jsx_runtime92 = __toESM(require_jsx_runtime(), 1);
var import_react122 = __toESM(require_react(), 1);
var ParaProvider2 = (0, import_react122.forwardRef)((_a, ref) => {
  var _b = _a, { children, externalWalletConfig } = _b, providerProps = __objRest(_b, ["children", "externalWalletConfig"]);
  var _a2;
  return (0, import_jsx_runtime92.jsx)(
    ParaProviderMin,
    __spreadProps(__spreadValues({}, providerProps), {
      externalWalletConfig: __spreadProps(__spreadValues({}, externalWalletConfig), { wallets: (_a2 = externalWalletConfig == null ? void 0 : externalWalletConfig.wallets) != null ? _a2 : [] }),
      ref,
      children
    })
  );
});

// node_modules/.pnpm/@getpara+react-sdk@2.0.0-alpha.73_2dc03c987641820ecb175cd72cd6c00f/node_modules/@getpara/react-sdk/dist/index.js
var src_default4 = src_default3;
export {
  AccountLinkError,
  AuthLayout,
  AuthMethod,
  AuthMethodStatus,
  COSMOS_WALLETS,
  EVM_WALLETS,
  EXTERNAL_WALLET_TYPES,
  EmailTheme,
  EnabledFlow,
  Environment,
  KeyContainer,
  LINKED_ACCOUNT_TYPES,
  LOCAL_STORAGE_CURRENT_WALLET_IDS,
  LOCAL_STORAGE_WALLETS,
  ModalStep,
  NETWORKS,
  NON_ED25519,
  Network,
  OAUTH_METHODS,
  OAuthMethod,
  ON_RAMP_ASSETS,
  ON_RAMP_PROVIDERS,
  OnRampAsset,
  OnRampConfigError,
  OnRampMethod,
  OnRampProvider,
  OnRampPurchaseStatus,
  OnRampPurchaseType,
  PARA_CORE_METHODS,
  PARA_INTERNAL_METHODS,
  PARA_PREFIX as PARA_STORAGE_PREFIX,
  PREGEN_IDENTIFIER_TYPES,
  src_default as ParaCore,
  ParaEvent,
  ParaModal,
  ParaProvider2 as ParaProvider,
  ParaProviderMin,
  Para as ParaWeb,
  PopupType,
  PregenIdentifierType,
  RecoveryStatus,
  SOLANA_WALLETS,
  PREFIX as STORAGE_PREFIX,
  SaveRecoverySecret,
  ThemeMode,
  TransactionReviewDenied,
  TransactionReviewError,
  TransactionReviewTimeout,
  WALLET_SCHEMES,
  WALLET_TYPES,
  WalletScheme,
  WalletType,
  compressPubkey,
  constructUrl,
  createCredential,
  decimalToHex,
  decryptPrivateKey,
  decryptPrivateKeyAndDecryptShare,
  decryptPrivateKeyWithPassword,
  decryptWithKeyPair,
  decryptWithPrivateKey,
  src_default4 as default,
  dispatchEvent,
  displayPhoneNumber,
  distributeNewShare,
  encodePrivateKeyToPemHex,
  encryptPrivateKey,
  encryptPrivateKeyWithPassword,
  encryptWithDerivedPublicKey,
  entityToWallet,
  formatAssetQuantity,
  formatCurrency,
  formatPhoneNumber,
  generateSignature,
  getAssetCode,
  getAssetIcon,
  getAsymmetricKeyPair,
  getBaseMPCNetworkUrl,
  getBaseOAuthUrl,
  getBaseUrl,
  getClient,
  getCosmosAddress,
  getDerivedPrivateKeyAndDecrypt,
  getIsOpen,
  getNetworkIcon,
  getNetworkName,
  getNetworkPrefix,
  getOnRampAssets,
  getOnRampNetworks,
  getPortalBaseURL,
  getPortalDomain,
  getPublicKeyFromSignature,
  getPublicKeyHex,
  getSHA256HashHex,
  getSelectedWalletId,
  getSelectedWalletType,
  hashPasswordWithSalt,
  hexStringToBase64,
  hexToDecimal,
  hexToSignature,
  hexToUint8Array,
  initClient,
  isAndroid,
  isIOS,
  isIOSWebview,
  isLargeIOS,
  isMobile,
  isMobileSafari,
  isPasskeySupported,
  isPortal,
  isSafari,
  isSmallIOS,
  isTablet,
  isTelegram,
  isWalletSupported,
  mpcComputationClient_exports as mpcComputationClient,
  offRampSend,
  openPopup,
  paraVersion,
  parseCredentialCreationRes,
  publicKeyFromHex,
  rawSecp256k1PubkeyToRawAddress,
  setIsOpen,
  shortenUrl,
  splitPhoneNumber,
  toAssetInfoArray,
  retrieve as transmissionUtilsRetrieve,
  truncateAddress,
  truncateEthAddress,
  useAccount,
  useAccountLinkInProgress,
  useAddAuthMethod,
  useClaimPregenWallets,
  useClient,
  useCreateGuestWallets,
  useCreateGuestWalletsState,
  useCreatePregenWallet,
  useCreatePregenWalletPerType,
  useCreateWallet,
  useCreateWalletPerType,
  useEnable2fa,
  useExportPrivateKey,
  useHasPregenWallet,
  useIssueJwt,
  useKeepSessionAlive,
  useLinkAccount2 as useLinkAccount,
  useLinkedAccounts,
  useLoginExternalWallet,
  useLogout,
  useModal,
  useParaStatus,
  useProfileBalance,
  useResendVerificationCode,
  useSetup2fa,
  useSignMessage,
  useSignTransaction,
  useSignUpOrLogIn,
  useUpdatePregenWalletIdentifier,
  useVerify2fa,
  useVerifyExternalWallet,
  useVerifyFarcaster,
  useVerifyNewAccount,
  useVerifyOAuth,
  useVerifyTelegram,
  useWaitForLogin,
  useWaitForSignup,
  useWaitForWalletCreation,
  useWallet,
  useWalletBalance,
  useWalletState,
  validateBalancesConfig,
  validateOnRampConfig,
  waitUntilTrue
};
//# sourceMappingURL=@getpara_react-sdk.js.map
