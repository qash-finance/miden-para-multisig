import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-3QM4QFEZ.js";
import "./chunk-QEK2ZTOW.js";

// node_modules/.pnpm/@getpara+core-components@2.0.0-alpha.73/node_modules/@getpara/core-components/dist/esm/cpsl-nav-button.entry.js
var cpslNavButtonCss = ":host{display:flex;flex-direction:column;gap:8px;padding:0px;box-sizing:border-box;width:100%;background:var(--cpsl-color-background-4);border-radius:var(--cpsl-border-radius-primary-button);overflow:hidden}.sub-route-container{display:flex;flex-direction:column;gap:8px;border-left:1px solid var(--cpsl-color-background-16);padding-left:16px;margin-left:16px;margin-bottom:8px;margin-right:8px;background:var(--cpsl-color-background-4)}.sub-route{--button-padding-start:8px;--button-padding-end:8px;--button-padding-top:8px;--button-padding-bottom:8px;--button-justify-content:start;--button-primary-color:var(--cpsl-color-background-48);--button-primary-background-color:var(--cpsl-color-background-4);--button-primary-border-color:var(--cpsl-color-background-4);--button-primary-icon-color:var(--cpsl-color-text-primary);--button-primary-disabled-color:var(--cpsl-color-text-primary);--button-primary-disabled-background-color:var(--cpsl-color-background-4);--button-primary-disabled-border-color:var(--cpsl-color-background-4);--button-primary-disabled-icon-color:var(--cpsl-color-text-primary);--button-primary-hover-color:var(--cpsl-color-background-48);--button-primary-hover-background-color:var(--cpsl-color-background-0);--button-primary-hover-border-color:var(--cpsl-color-background-4);--button-primary-hover-icon-color:var(--cpsl-color-background-48);--button-primary-active-color:var(--cpsl-color-text-primary);--button-primary-active-background-color:var(--cpsl-color-background-4);--button-primary-active-border-color:var(--cpsl-color-background-4);--button-primary-active-icon-color:var(--cpsl-color-text-primary)}.sub-route.selected{--button-primary-color:var(--cpsl-color-text-primary);--button-primary-background-color:var(--cpsl-color-background-0);--button-primary-border-color:var(--cpsl-color-background-0);--button-primary-icon-color:var(--cpsl-color-background-48);--button-primary-disabled-color:var(--cpsl-color-background-48);--button-primary-disabled-background-color:var(--cpsl-color-background-0);--button-primary-disabled-border-color:var(--cpsl-color-background-0);--button-primary-disabled-icon-color:var(--cpsl-color-background-48);--button-primary-hover-color:var(--cpsl-color-text-primary);--button-primary-hover-background-color:var(--cpsl-color-background-0);--button-primary-hover-border-color:var(--cpsl-color-background-4);--button-primary-hover-icon-color:var(--cpsl-color-background-48);--button-primary-active-color:var(--cpsl-color-background-48);--button-primary-active-background-color:var(--cpsl-color-background-4);--button-primary-active-border-color:var(--cpsl-color-background-4);--button-primary-active-icon-color:var(--cpsl-color-background-48)}.main-route{--button-padding-start:8px;--button-padding-end:8px;--button-padding-top:8px;--button-padding-bottom:8px;--button-justify-content:start;--button-primary-color:var(--cpsl-color-background-48);--button-primary-background-color:var(--cpsl-color-background-0);--button-primary-border-color:var(--cpsl-color-background-0);--button-primary-icon-color:var(--cpsl-color-background-48);--button-primary-disabled-color:var(--cpsl-color-background-48);--button-primary-disabled-background-color:var(--cpsl-color-background-0);--button-primary-disabled-border-color:var(--cpsl-color-background-0);--button-primary-disabled-icon-color:var(--cpsl-color-background-48);--button-primary-hover-color:var(--cpsl-color-background-48);--button-primary-hover-background-color:var(--cpsl-color-background-4);--button-primary-hover-border-color:var(--cpsl-color-background-4);--button-primary-hover-icon-color:var(--cpsl-color-background-48);--button-primary-active-color:var(--cpsl-color-background-48);--button-primary-active-background-color:var(--cpsl-color-background-4);--button-primary-active-border-color:var(--cpsl-color-background-4);--button-primary-active-icon-color:var(--cpsl-color-background-48)}.main-route.selected{--button-primary-color:var(--cpsl-color-text-primary);--button-primary-background-color:var(--cpsl-color-background-4);--button-primary-border-color:var(--cpsl-color-background-4);--button-primary-icon-color:var(--cpsl-color-text-primary);--button-primary-disabled-color:var(--cpsl-color-text-primary);--button-primary-disabled-background-color:var(--cpsl-color-background-4);--button-primary-disabled-border-color:var(--cpsl-color-background-4);--button-primary-disabled-icon-color:var(--cpsl-color-text-primary);--button-primary-hover-color:var(--cpsl-color-text-primary);--button-primary-hover-background-color:var(--cpsl-color-background-4);--button-primary-hover-border-color:var(--cpsl-color-background-4);--button-primary-hover-icon-color:var(--cpsl-color-text-primary);--button-primary-active-color:var(--cpsl-color-text-primary);--button-primary-active-background-color:var(--cpsl-color-background-4);--button-primary-active-border-color:var(--cpsl-color-background-4);--button-primary-active-icon-color:var(--cpsl-color-text-primary)}";
var CpslNavButtonStyle0 = cpslNavButtonCss;
var CpslNavButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.cpslNavButtonClick = createEvent(this, "cpslNavButtonClick", 7);
    this.cpslNavButtonSubRouteClick = createEvent(this, "cpslNavButtonSubRouteClick", 7);
    this.handleNavButtonClick = () => {
      this.cpslNavButtonClick.emit(this.route);
    };
    this.handleSubRouteClick = (route) => () => {
      this.cpslNavButtonSubRouteClick.emit(route);
    };
    this.disabled = false;
    this.exactMainRouteMatch = void 0;
    this.exactSubRouteMatch = void 0;
    this.route = void 0;
    this.subRoutes = void 0;
    this.path = void 0;
  }
  render() {
    var _a, _b;
    const selectedSubRoute = (_a = this.subRoutes) === null || _a === void 0 ? void 0 : _a.find((sr) => this.exactSubRouteMatch ? this.path === `${this.route}/${sr.value}` : this.path.includes(`${this.route}/${sr.value}`));
    const isMainRouteSelected = this.exactMainRouteMatch ? this.path === this.route : this.path.includes(this.route);
    return h(Host, { key: "724bcb1abfa977e3869341ad0a34c57af10668a3" }, h("cpsl-button", { key: "07881553823869f3f118f4e17ac060a2466fa844", id: this.route, class: { "main-route": true, "selected": !!selectedSubRoute || isMainRouteSelected }, fullWidth: true, variant: "primary", disabled: this.disabled, onClick: this.handleNavButtonClick }, h("slot", { key: "515ccab53d017c9df9c5fbbc387de234a5b57817", name: "start" }), h("slot", { key: "76409265b1ed78de70c5301ca2edf364099dfa30" }), h("slot", { key: "449c15c256dee88bf32574aa7a8bf0a7d0732bb9", name: "end" })), (!!selectedSubRoute || isMainRouteSelected) && !!((_b = this.subRoutes) === null || _b === void 0 ? void 0 : _b.length) && h("div", { key: "806a59fd2b0783964ef66b789323b813fbb44f86", class: "sub-route-container" }, this.subRoutes.map((sr) => h("cpsl-button", { key: sr.value, id: `${this.route}/${sr.value}`, class: { "sub-route": true, "selected": sr.value === (selectedSubRoute === null || selectedSubRoute === void 0 ? void 0 : selectedSubRoute.value) }, onClick: this.handleSubRouteClick(`${this.route}/${sr.value}`), fullWidth: true, variant: "primary" }, sr.label))));
  }
  get el() {
    return getElement(this);
  }
};
CpslNavButton.style = CpslNavButtonStyle0;
export {
  CpslNavButton as cpsl_nav_button
};
//# sourceMappingURL=cpsl-nav-button.entry-R4KO2EGB.js.map
