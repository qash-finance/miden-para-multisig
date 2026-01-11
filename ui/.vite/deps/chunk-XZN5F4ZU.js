import {
  AsyncDirective,
  isPrimitive
} from "./chunk-A32M5VNL.js";
import {
  classMap,
  directive,
  property
} from "./chunk-BFVZUM43.js";
import {
  UiHelperUtil,
  colorStyles,
  customElement,
  elementStyles,
  resetStyles
} from "./chunk-OF6WSB6X.js";
import {
  LitElement,
  css,
  html,
  noChange
} from "./chunk-3KQHVXDI.js";

// node_modules/.pnpm/@reown+appkit-ui@1.7.8_@react-native-async-storage+async-storage@1.24.0_react-native@0._8d2677c6f211a52961ebaa9803e80c3f/node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/styles.js
var styles_default = css`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;

// node_modules/.pnpm/@reown+appkit-ui@1.7.8_@react-native-async-storage+async-storage@1.24.0_react-native@0._8d2677c6f211a52961ebaa9803e80c3f/node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiFlex = class WuiFlex2 extends LitElement {
  render() {
    this.style.cssText = `
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap && `var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 3)};
    `;
    return html`<slot></slot>`;
  }
};
WuiFlex.styles = [resetStyles, styles_default];
__decorate([
  property()
], WuiFlex.prototype, "flexDirection", void 0);
__decorate([
  property()
], WuiFlex.prototype, "flexWrap", void 0);
__decorate([
  property()
], WuiFlex.prototype, "flexBasis", void 0);
__decorate([
  property()
], WuiFlex.prototype, "flexGrow", void 0);
__decorate([
  property()
], WuiFlex.prototype, "flexShrink", void 0);
__decorate([
  property()
], WuiFlex.prototype, "alignItems", void 0);
__decorate([
  property()
], WuiFlex.prototype, "justifyContent", void 0);
__decorate([
  property()
], WuiFlex.prototype, "columnGap", void 0);
__decorate([
  property()
], WuiFlex.prototype, "rowGap", void 0);
__decorate([
  property()
], WuiFlex.prototype, "gap", void 0);
__decorate([
  property()
], WuiFlex.prototype, "padding", void 0);
__decorate([
  property()
], WuiFlex.prototype, "margin", void 0);
WuiFlex = __decorate([
  customElement("wui-flex")
], WuiFlex);

// node_modules/.pnpm/@reown+appkit-ui@1.7.8_@react-native-async-storage+async-storage@1.24.0_react-native@0._8d2677c6f211a52961ebaa9803e80c3f/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/styles.js
var styles_default2 = css`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;

// node_modules/.pnpm/@reown+appkit-ui@1.7.8_@react-native-async-storage+async-storage@1.24.0_react-native@0._8d2677c6f211a52961ebaa9803e80c3f/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiText = class WuiText2 extends LitElement {
  constructor() {
    super(...arguments);
    this.variant = "paragraph-500";
    this.color = "fg-300";
    this.align = "left";
    this.lineClamp = void 0;
  }
  render() {
    const classes = {
      [`wui-font-${this.variant}`]: true,
      [`wui-color-${this.color}`]: true,
      [`wui-line-clamp-${this.lineClamp}`]: this.lineClamp ? true : false
    };
    this.style.cssText = `
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `;
    return html`<slot class=${classMap(classes)}></slot>`;
  }
};
WuiText.styles = [resetStyles, styles_default2];
__decorate2([
  property()
], WuiText.prototype, "variant", void 0);
__decorate2([
  property()
], WuiText.prototype, "color", void 0);
__decorate2([
  property()
], WuiText.prototype, "align", void 0);
__decorate2([
  property()
], WuiText.prototype, "lineClamp", void 0);
WuiText = __decorate2([
  customElement("wui-text")
], WuiText);

// node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/directives/private-async-helpers.js
var PseudoWeakRef = class {
  constructor(ref) {
    this._ref = ref;
  }
  /**
   * Disassociates the ref with the backing instance.
   */
  disconnect() {
    this._ref = void 0;
  }
  /**
   * Reassociates the ref with the backing instance.
   */
  reconnect(ref) {
    this._ref = ref;
  }
  /**
   * Retrieves the backing instance (will be undefined when disconnected)
   */
  deref() {
    return this._ref;
  }
};
var Pauser = class {
  constructor() {
    this._promise = void 0;
    this._resolve = void 0;
  }
  /**
   * When paused, returns a promise to be awaited; when unpaused, returns
   * undefined. Note that in the microtask between the pauser being resumed
   * an await of this promise resolving, the pauser could be paused again,
   * hence callers should check the promise in a loop when awaiting.
   * @returns A promise to be awaited when paused or undefined
   */
  get() {
    return this._promise;
  }
  /**
   * Creates a promise to be awaited
   */
  pause() {
    this._promise ??= new Promise((resolve) => this._resolve = resolve);
  }
  /**
   * Resolves the promise which may be awaited
   */
  resume() {
    this._resolve?.();
    this._promise = this._resolve = void 0;
  }
};

// node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/directives/until.js
var isPromise = (x) => {
  return !isPrimitive(x) && typeof x.then === "function";
};
var _infinity = 1073741823;
var UntilDirective = class extends AsyncDirective {
  constructor() {
    super(...arguments);
    this.__lastRenderedIndex = _infinity;
    this.__values = [];
    this.__weakThis = new PseudoWeakRef(this);
    this.__pauser = new Pauser();
  }
  render(...args) {
    return args.find((x) => !isPromise(x)) ?? noChange;
  }
  update(_part, args) {
    const previousValues = this.__values;
    let previousLength = previousValues.length;
    this.__values = args;
    const weakThis = this.__weakThis;
    const pauser = this.__pauser;
    if (!this.isConnected) {
      this.disconnected();
    }
    for (let i = 0; i < args.length; i++) {
      if (i > this.__lastRenderedIndex) {
        break;
      }
      const value = args[i];
      if (!isPromise(value)) {
        this.__lastRenderedIndex = i;
        return value;
      }
      if (i < previousLength && value === previousValues[i]) {
        continue;
      }
      this.__lastRenderedIndex = _infinity;
      previousLength = 0;
      Promise.resolve(value).then(async (result) => {
        while (pauser.get()) {
          await pauser.get();
        }
        const _this = weakThis.deref();
        if (_this !== void 0) {
          const index = _this.__values.indexOf(value);
          if (index > -1 && index < _this.__lastRenderedIndex) {
            _this.__lastRenderedIndex = index;
            _this.setValue(result);
          }
        }
      });
    }
    return noChange;
  }
  disconnected() {
    this.__weakThis.disconnect();
    this.__pauser.pause();
  }
  reconnected() {
    this.__weakThis.reconnect(this);
    this.__pauser.resume();
  }
};
var until = directive(UntilDirective);

// node_modules/.pnpm/@reown+appkit-ui@1.7.8_@react-native-async-storage+async-storage@1.24.0_react-native@0._8d2677c6f211a52961ebaa9803e80c3f/node_modules/@reown/appkit-ui/dist/esm/src/utils/CacheUtil.js
var CacheUtil = class {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
  }
  set(key, value) {
    this.cache.set(key, value);
  }
  get(key) {
    return this.cache.get(key);
  }
  has(key) {
    return this.cache.has(key);
  }
  delete(key) {
    this.cache.delete(key);
  }
  clear() {
    this.cache.clear();
  }
};
var globalSvgCache = new CacheUtil();

// node_modules/.pnpm/@reown+appkit-ui@1.7.8_@react-native-async-storage+async-storage@1.24.0_react-native@0._8d2677c6f211a52961ebaa9803e80c3f/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/styles.js
var styles_default3 = css`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;

// node_modules/.pnpm/@reown+appkit-ui@1.7.8_@react-native-async-storage+async-storage@1.24.0_react-native@0._8d2677c6f211a52961ebaa9803e80c3f/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ICONS = {
  add: async () => (await import("./add-6B36GRDO.js")).addSvg,
  allWallets: async () => (await import("./all-wallets-45PR723V.js")).allWalletsSvg,
  arrowBottomCircle: async () => (await import("./arrow-bottom-circle-NGEN3FLH.js")).arrowBottomCircleSvg,
  appStore: async () => (await import("./app-store-F4T3WWWT.js")).appStoreSvg,
  apple: async () => (await import("./apple-CUZAQ3YL.js")).appleSvg,
  arrowBottom: async () => (await import("./arrow-bottom-LFILKC6H.js")).arrowBottomSvg,
  arrowLeft: async () => (await import("./arrow-left-PAPAI4L4.js")).arrowLeftSvg,
  arrowRight: async () => (await import("./arrow-right-IX5CEAME.js")).arrowRightSvg,
  arrowTop: async () => (await import("./arrow-top-2FTPUQQ2.js")).arrowTopSvg,
  bank: async () => (await import("./bank-DLPEG4UT.js")).bankSvg,
  browser: async () => (await import("./browser-QL7B5GOL.js")).browserSvg,
  card: async () => (await import("./card-A4BMBBCL.js")).cardSvg,
  checkmark: async () => (await import("./checkmark-6RJLEDFZ.js")).checkmarkSvg,
  checkmarkBold: async () => (await import("./checkmark-bold-VUWJXLZO.js")).checkmarkBoldSvg,
  chevronBottom: async () => (await import("./chevron-bottom-6SZXNURV.js")).chevronBottomSvg,
  chevronLeft: async () => (await import("./chevron-left-4ZDOHUIC.js")).chevronLeftSvg,
  chevronRight: async () => (await import("./chevron-right-VCJ5KM2I.js")).chevronRightSvg,
  chevronTop: async () => (await import("./chevron-top-CTN7UCVW.js")).chevronTopSvg,
  chromeStore: async () => (await import("./chrome-store-H67HOCSV.js")).chromeStoreSvg,
  clock: async () => (await import("./clock-LGPWENS2.js")).clockSvg,
  close: async () => (await import("./close-2JDCIOH7.js")).closeSvg,
  compass: async () => (await import("./compass-NSRUIDNZ.js")).compassSvg,
  coinPlaceholder: async () => (await import("./coinPlaceholder-AVSIXNVS.js")).coinPlaceholderSvg,
  copy: async () => (await import("./copy-64FROTZX.js")).copySvg,
  cursor: async () => (await import("./cursor-6PTII7O7.js")).cursorSvg,
  cursorTransparent: async () => (await import("./cursor-transparent-AJQY3FTI.js")).cursorTransparentSvg,
  desktop: async () => (await import("./desktop-MWYEIRSC.js")).desktopSvg,
  disconnect: async () => (await import("./disconnect-GYG6CSHQ.js")).disconnectSvg,
  discord: async () => (await import("./discord-JKDTKUKR.js")).discordSvg,
  etherscan: async () => (await import("./etherscan-MN3M3UCC.js")).etherscanSvg,
  extension: async () => (await import("./extension-4QTJNPLE.js")).extensionSvg,
  externalLink: async () => (await import("./external-link-Y2RRSP3Q.js")).externalLinkSvg,
  facebook: async () => (await import("./facebook-FQOV2UWO.js")).facebookSvg,
  farcaster: async () => (await import("./farcaster-6GB25V4N.js")).farcasterSvg,
  filters: async () => (await import("./filters-VQBH7QH3.js")).filtersSvg,
  github: async () => (await import("./github-23CUNCMO.js")).githubSvg,
  google: async () => (await import("./google-HZIC4ENR.js")).googleSvg,
  helpCircle: async () => (await import("./help-circle-BFGKSLVY.js")).helpCircleSvg,
  image: async () => (await import("./image-3X5SB43Z.js")).imageSvg,
  id: async () => (await import("./id-CWLTO2S5.js")).idSvg,
  infoCircle: async () => (await import("./info-circle-GVVTH6Q5.js")).infoCircleSvg,
  lightbulb: async () => (await import("./lightbulb-XD4VWSZH.js")).lightbulbSvg,
  mail: async () => (await import("./mail-K5BRHCXB.js")).mailSvg,
  mobile: async () => (await import("./mobile-GT6USOZE.js")).mobileSvg,
  more: async () => (await import("./more-54WWK3LO.js")).moreSvg,
  networkPlaceholder: async () => (await import("./network-placeholder-SVLDDGMI.js")).networkPlaceholderSvg,
  nftPlaceholder: async () => (await import("./nftPlaceholder-MFBCNPHS.js")).nftPlaceholderSvg,
  off: async () => (await import("./off-I4KY2KOR.js")).offSvg,
  playStore: async () => (await import("./play-store-C3DTN3KM.js")).playStoreSvg,
  plus: async () => (await import("./plus-ZV63UCGW.js")).plusSvg,
  qrCode: async () => (await import("./qr-code-FRRCCTSV.js")).qrCodeIcon,
  recycleHorizontal: async () => (await import("./recycle-horizontal-V76IEJIP.js")).recycleHorizontalSvg,
  refresh: async () => (await import("./refresh-OLSIZWAJ.js")).refreshSvg,
  search: async () => (await import("./search-5RVBDUUA.js")).searchSvg,
  send: async () => (await import("./send-LFQ2PKWT.js")).sendSvg,
  swapHorizontal: async () => (await import("./swapHorizontal-QOO2GN5N.js")).swapHorizontalSvg,
  swapHorizontalMedium: async () => (await import("./swapHorizontalMedium-WQ7BEOWK.js")).swapHorizontalMediumSvg,
  swapHorizontalBold: async () => (await import("./swapHorizontalBold-56S3TNQ5.js")).swapHorizontalBoldSvg,
  swapHorizontalRoundedBold: async () => (await import("./swapHorizontalRoundedBold-K7OGDMBY.js")).swapHorizontalRoundedBoldSvg,
  swapVertical: async () => (await import("./swapVertical-RE7DDSZ6.js")).swapVerticalSvg,
  telegram: async () => (await import("./telegram-6KIV2YJM.js")).telegramSvg,
  threeDots: async () => (await import("./three-dots-2J4FXYOB.js")).threeDotsSvg,
  twitch: async () => (await import("./twitch-RBUG2I2P.js")).twitchSvg,
  twitter: async () => (await import("./x-NMAOLYPX.js")).xSvg,
  twitterIcon: async () => (await import("./twitterIcon-X37LT7AX.js")).twitterIconSvg,
  verify: async () => (await import("./verify-Z3WJDSI7.js")).verifySvg,
  verifyFilled: async () => (await import("./verify-filled-SMLNJPO5.js")).verifyFilledSvg,
  wallet: async () => (await import("./wallet-ZCZ4H3II.js")).walletSvg,
  walletConnect: async () => (await import("./walletconnect-OJ3NNXR2.js")).walletConnectSvg,
  walletConnectLightBrown: async () => (await import("./walletconnect-OJ3NNXR2.js")).walletConnectLightBrownSvg,
  walletConnectBrown: async () => (await import("./walletconnect-OJ3NNXR2.js")).walletConnectBrownSvg,
  walletPlaceholder: async () => (await import("./wallet-placeholder-NBDDAOAJ.js")).walletPlaceholderSvg,
  warningCircle: async () => (await import("./warning-circle-72XTK2SP.js")).warningCircleSvg,
  x: async () => (await import("./x-NMAOLYPX.js")).xSvg,
  info: async () => (await import("./info-VNM6HHTU.js")).infoSvg,
  exclamationTriangle: async () => (await import("./exclamation-triangle-AB5WIT5P.js")).exclamationTriangleSvg,
  reown: async () => (await import("./reown-logo-REEB72IC.js")).reownSvg
};
async function getSvg(name) {
  if (globalSvgCache.has(name)) {
    return globalSvgCache.get(name);
  }
  const importFn = ICONS[name] ?? ICONS.copy;
  const svgPromise = importFn();
  globalSvgCache.set(name, svgPromise);
  return svgPromise;
}
var WuiIcon = class WuiIcon2 extends LitElement {
  constructor() {
    super(...arguments);
    this.size = "md";
    this.name = "copy";
    this.color = "fg-300";
    this.aspectRatio = "1 / 1";
  }
  render() {
    this.style.cssText = `
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `;
    return html`${until(getSvg(this.name), html`<div class="fallback"></div>`)}`;
  }
};
WuiIcon.styles = [resetStyles, colorStyles, styles_default3];
__decorate3([
  property()
], WuiIcon.prototype, "size", void 0);
__decorate3([
  property()
], WuiIcon.prototype, "name", void 0);
__decorate3([
  property()
], WuiIcon.prototype, "color", void 0);
__decorate3([
  property()
], WuiIcon.prototype, "aspectRatio", void 0);
WuiIcon = __decorate3([
  customElement("wui-icon")
], WuiIcon);

// node_modules/.pnpm/@reown+appkit-ui@1.7.8_@react-native-async-storage+async-storage@1.24.0_react-native@0._8d2677c6f211a52961ebaa9803e80c3f/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-box/styles.js
var styles_default4 = css`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;

// node_modules/.pnpm/@reown+appkit-ui@1.7.8_@react-native-async-storage+async-storage@1.24.0_react-native@0._8d2677c6f211a52961ebaa9803e80c3f/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-box/index.js
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiIconBox = class WuiIconBox2 extends LitElement {
  constructor() {
    super(...arguments);
    this.size = "md";
    this.backgroundColor = "accent-100";
    this.iconColor = "accent-100";
    this.background = "transparent";
    this.border = false;
    this.borderColor = "wui-color-bg-125";
    this.icon = "copy";
  }
  render() {
    const iconSize = this.iconSize || this.size;
    const isLg = this.size === "lg";
    const isXl = this.size === "xl";
    const bgMix = isLg ? "12%" : "16%";
    const borderRadius = isLg ? "xxs" : isXl ? "s" : "3xl";
    const isGray = this.background === "gray";
    const isOpaque = this.background === "opaque";
    const isColorChange = this.backgroundColor === "accent-100" && isOpaque || this.backgroundColor === "success-100" && isOpaque || this.backgroundColor === "error-100" && isOpaque || this.backgroundColor === "inverse-100" && isOpaque;
    let bgValueVariable = `var(--wui-color-${this.backgroundColor})`;
    if (isColorChange) {
      bgValueVariable = `var(--wui-icon-box-bg-${this.backgroundColor})`;
    } else if (isGray) {
      bgValueVariable = `var(--wui-color-gray-${this.backgroundColor})`;
    }
    this.style.cssText = `
       --local-bg-value: ${bgValueVariable};
       --local-bg-mix: ${isColorChange || isGray ? `100%` : bgMix};
       --local-border-radius: var(--wui-border-radius-${borderRadius});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor === "wui-color-bg-125" ? `2px` : `1px`} solid ${this.border ? `var(--${this.borderColor})` : `transparent`}
   `;
    return html` <wui-icon color=${this.iconColor} size=${iconSize} name=${this.icon}></wui-icon> `;
  }
};
WuiIconBox.styles = [resetStyles, elementStyles, styles_default4];
__decorate4([
  property()
], WuiIconBox.prototype, "size", void 0);
__decorate4([
  property()
], WuiIconBox.prototype, "backgroundColor", void 0);
__decorate4([
  property()
], WuiIconBox.prototype, "iconColor", void 0);
__decorate4([
  property()
], WuiIconBox.prototype, "iconSize", void 0);
__decorate4([
  property()
], WuiIconBox.prototype, "background", void 0);
__decorate4([
  property({ type: Boolean })
], WuiIconBox.prototype, "border", void 0);
__decorate4([
  property()
], WuiIconBox.prototype, "borderColor", void 0);
__decorate4([
  property()
], WuiIconBox.prototype, "icon", void 0);
WuiIconBox = __decorate4([
  customElement("wui-icon-box")
], WuiIconBox);

// node_modules/.pnpm/@reown+appkit-ui@1.7.8_@react-native-async-storage+async-storage@1.24.0_react-native@0._8d2677c6f211a52961ebaa9803e80c3f/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/styles.js
var styles_default5 = css`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;

// node_modules/.pnpm/@reown+appkit-ui@1.7.8_@react-native-async-storage+async-storage@1.24.0_react-native@0._8d2677c6f211a52961ebaa9803e80c3f/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/index.js
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiImage = class WuiImage2 extends LitElement {
  constructor() {
    super(...arguments);
    this.src = "./path/to/image.jpg";
    this.alt = "Image";
    this.size = void 0;
  }
  render() {
    this.style.cssText = `
      --local-width: ${this.size ? `var(--wui-icon-size-${this.size});` : "100%"};
      --local-height: ${this.size ? `var(--wui-icon-size-${this.size});` : "100%"};
      `;
    return html`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`;
  }
  handleImageError() {
    this.dispatchEvent(new CustomEvent("onLoadError", { bubbles: true, composed: true }));
  }
};
WuiImage.styles = [resetStyles, colorStyles, styles_default5];
__decorate5([
  property()
], WuiImage.prototype, "src", void 0);
__decorate5([
  property()
], WuiImage.prototype, "alt", void 0);
__decorate5([
  property()
], WuiImage.prototype, "size", void 0);
WuiImage = __decorate5([
  customElement("wui-image")
], WuiImage);

// node_modules/.pnpm/@reown+appkit-ui@1.7.8_@react-native-async-storage+async-storage@1.24.0_react-native@0._8d2677c6f211a52961ebaa9803e80c3f/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tag/styles.js
var styles_default6 = css`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;

// node_modules/.pnpm/@reown+appkit-ui@1.7.8_@react-native-async-storage+async-storage@1.24.0_react-native@0._8d2677c6f211a52961ebaa9803e80c3f/node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tag/index.js
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiTag = class WuiTag2 extends LitElement {
  constructor() {
    super(...arguments);
    this.variant = "main";
    this.size = "lg";
  }
  render() {
    this.dataset["variant"] = this.variant;
    this.dataset["size"] = this.size;
    const textVariant = this.size === "md" ? "mini-700" : "micro-700";
    return html`
      <wui-text data-variant=${this.variant} variant=${textVariant} color="inherit">
        <slot></slot>
      </wui-text>
    `;
  }
};
WuiTag.styles = [resetStyles, styles_default6];
__decorate6([
  property()
], WuiTag.prototype, "variant", void 0);
__decorate6([
  property()
], WuiTag.prototype, "size", void 0);
WuiTag = __decorate6([
  customElement("wui-tag")
], WuiTag);

// node_modules/.pnpm/@reown+appkit-ui@1.7.8_@react-native-async-storage+async-storage@1.24.0_react-native@0._8d2677c6f211a52961ebaa9803e80c3f/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-spinner/styles.js
var styles_default7 = css`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;

// node_modules/.pnpm/@reown+appkit-ui@1.7.8_@react-native-async-storage+async-storage@1.24.0_react-native@0._8d2677c6f211a52961ebaa9803e80c3f/node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-spinner/index.js
var __decorate7 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiLoadingSpinner = class WuiLoadingSpinner2 extends LitElement {
  constructor() {
    super(...arguments);
    this.color = "accent-100";
    this.size = "lg";
  }
  render() {
    this.style.cssText = `--local-color: ${this.color === "inherit" ? "inherit" : `var(--wui-color-${this.color})`}`;
    this.dataset["size"] = this.size;
    return html`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`;
  }
};
WuiLoadingSpinner.styles = [resetStyles, styles_default7];
__decorate7([
  property()
], WuiLoadingSpinner.prototype, "color", void 0);
__decorate7([
  property()
], WuiLoadingSpinner.prototype, "size", void 0);
WuiLoadingSpinner = __decorate7([
  customElement("wui-loading-spinner")
], WuiLoadingSpinner);
//# sourceMappingURL=chunk-XZN5F4ZU.js.map
