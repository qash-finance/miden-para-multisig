import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-3QM4QFEZ.js";
import "./chunk-QEK2ZTOW.js";

// node_modules/.pnpm/@getpara+core-components@2.0.0-alpha.73/node_modules/@getpara/core-components/dist/esm/cpsl-modal-v2.entry.js
var cpslModalV2Css = ":host{display:none;position:absolute;top:0;left:0;width:100vw;height:100vh;justify-content:center;align-items:center;z-index:10005}:host .card{z-index:10005;opacity:0;position:relative;transition:all}:host(.no-overlay){position:relative;top:unset;left:unset;width:100%;height:auto}:host(.open) .card{opacity:1}:host(.elevated) .card{--card-border-width:0px}:host(.elevated) .card::part(card-container){box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.12)}";
var CpslModalV2Style0 = cpslModalV2Css;
var CpslModalV2 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.cpslModalEntering = createEvent(this, "cpslModalEntering", 7);
    this.cpslModalEntered = createEvent(this, "cpslModalEntered", 7);
    this.cpslModalExiting = createEvent(this, "cpslModalExiting", 7);
    this.cpslModalExited = createEvent(this, "cpslModalExited", 7);
    this.enterTransitionDuration = 0.15;
    this.exitTransitionDuration = 0.15;
    this.elevated = void 0;
    this.noOverlay = void 0;
    this.open = void 0;
    this.zIndexOverride = void 0;
  }
  toggleHeight() {
    if (!this.open) {
      this.cpslModalExiting.emit();
      setTimeout(() => {
        this.el.style.display = "none";
        this.cpslModalExited.emit();
      }, this.exitTransitionDuration * 1e3);
    } else {
      this.cpslModalEntering.emit();
      this.el.style.display = "flex";
      setTimeout(() => {
        this.cpslModalEntered.emit();
      }, this.enterTransitionDuration * 1e3);
    }
  }
  componentDidLoad() {
    this.toggleHeight();
  }
  render() {
    return h(Host, { key: "f8396127918a8fae15123581ce33dc7fe6506257", class: { "open": this.open, "elevated": this.elevated, "no-overlay": this.noOverlay } }, !this.noOverlay && h("cpsl-overlay", { key: "c054a332fbb13c106916f99d15cd7775b6a3ee03", zIndexOverride: this.zIndexOverride ? this.zIndexOverride : void 0, id: "overlay", open: this.open, enterTransitionDuration: this.enterTransitionDuration, exitTransitionDuration: this.exitTransitionDuration }), h("cpsl-card", { key: "4ca21c725ab2971def6b0b065a57203fd65537c6", class: "card", style: { transitionDuration: this.open ? `${this.exitTransitionDuration}s` : `${this.enterTransitionDuration}s` } }, h("slot", { key: "9e635dfcd1956abbb3789eca2bb2c42bb47aea08" })));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "open": ["toggleHeight"]
    };
  }
};
CpslModalV2.style = CpslModalV2Style0;
export {
  CpslModalV2 as cpsl_modal_v2
};
//# sourceMappingURL=cpsl-modal-v2.entry-6XT326RN.js.map
