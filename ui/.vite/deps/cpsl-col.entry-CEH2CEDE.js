import {
  Host,
  forceUpdate,
  h,
  registerInstance
} from "./chunk-3QM4QFEZ.js";
import "./chunk-QEK2ZTOW.js";

// node_modules/.pnpm/@getpara+core-components@2.0.0-alpha.73/node_modules/@getpara/core-components/dist/esm/cpsl-col.entry.js
var SIZE_TO_MEDIA = {
  xs: "(min-width: 0px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)"
};
var matchBreakpoint = (breakpoint) => {
  if (breakpoint === void 0 || breakpoint === "") {
    return true;
  }
  if (typeof window !== "undefined" && window.matchMedia) {
    const mediaQuery = SIZE_TO_MEDIA[breakpoint];
    return window.matchMedia(mediaQuery).matches;
  }
  return false;
};
var cpslColCss = ":host{-webkit-padding-start:var(--cpsl-grid-column-padding-xs, var(--cpsl-grid-column-padding, 0px));padding-inline-start:var(--cpsl-grid-column-padding-xs, var(--cpsl-grid-column-padding, 0px));-webkit-padding-end:var(--cpsl-grid-column-padding-xs, var(--cpsl-grid-column-padding, 0px));padding-inline-end:var(--cpsl-grid-column-padding-xs, var(--cpsl-grid-column-padding, 0px));padding-top:var(--cpsl-grid-column-padding-xs, var(--cpsl-grid-column-padding, 0px));padding-bottom:var(--cpsl-grid-column-padding-xs, var(--cpsl-grid-column-padding, 0px));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;box-sizing:border-box;position:relative;flex-basis:0;flex-grow:1;width:100%;max-width:100%;min-height:1px}@media (min-width: 576px){:host{-webkit-padding-start:var(--cpsl-grid-column-padding-sm, var(--cpsl-grid-column-padding, 0px));padding-inline-start:var(--cpsl-grid-column-padding-sm, var(--cpsl-grid-column-padding, 0px));-webkit-padding-end:var(--cpsl-grid-column-padding-sm, var(--cpsl-grid-column-padding, 0px));padding-inline-end:var(--cpsl-grid-column-padding-sm, var(--cpsl-grid-column-padding, 0px));padding-top:var(--cpsl-grid-column-padding-sm, var(--cpsl-grid-column-padding, 0px));padding-bottom:var(--cpsl-grid-column-padding-sm, var(--cpsl-grid-column-padding, 0px))}}@media (min-width: 768px){:host{-webkit-padding-start:var(--cpsl-grid-column-padding-md, var(--cpsl-grid-column-padding, 0px));padding-inline-start:var(--cpsl-grid-column-padding-md, var(--cpsl-grid-column-padding, 0px));-webkit-padding-end:var(--cpsl-grid-column-padding-md, var(--cpsl-grid-column-padding, 0px));padding-inline-end:var(--cpsl-grid-column-padding-md, var(--cpsl-grid-column-padding, 0px));padding-top:var(--cpsl-grid-column-padding-md, var(--cpsl-grid-column-padding, 0px));padding-bottom:var(--cpsl-grid-column-padding-md, var(--cpsl-grid-column-padding, 0px))}}@media (min-width: 992px){:host{-webkit-padding-start:var(--cpsl-grid-column-padding-lg, var(--cpsl-grid-column-padding, 0px));padding-inline-start:var(--cpsl-grid-column-padding-lg, var(--cpsl-grid-column-padding, 0px));-webkit-padding-end:var(--cpsl-grid-column-padding-lg, var(--cpsl-grid-column-padding, 0px));padding-inline-end:var(--cpsl-grid-column-padding-lg, var(--cpsl-grid-column-padding, 0px));padding-top:var(--cpsl-grid-column-padding-lg, var(--cpsl-grid-column-padding, 0px));padding-bottom:var(--cpsl-grid-column-padding-lg, var(--cpsl-grid-column-padding, 0px))}}@media (min-width: 1200px){:host{-webkit-padding-start:var(--cpsl-grid-column-padding-xl, var(--cpsl-grid-column-padding, 0px));padding-inline-start:var(--cpsl-grid-column-padding-xl, var(--cpsl-grid-column-padding, 0px));-webkit-padding-end:var(--cpsl-grid-column-padding-xl, var(--cpsl-grid-column-padding, 0px));padding-inline-end:var(--cpsl-grid-column-padding-xl, var(--cpsl-grid-column-padding, 0px));padding-top:var(--cpsl-grid-column-padding-xl, var(--cpsl-grid-column-padding, 0px));padding-bottom:var(--cpsl-grid-column-padding-xl, var(--cpsl-grid-column-padding, 0px))}}";
var CpslColStyle0 = cpslColCss;
var win = typeof window !== "undefined" ? window : void 0;
var SUPPORTS_VARS = win && !!(win.CSS && win.CSS.supports && win.CSS.supports("--a: 0"));
var BREAKPOINTS = ["", "xs", "sm", "md", "lg", "xl"];
var CpslCol = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.align = "center";
    this.justify = "center";
    this.gap = "8px";
    this.offset = void 0;
    this.offsetXs = void 0;
    this.offsetSm = void 0;
    this.offsetMd = void 0;
    this.offsetLg = void 0;
    this.offsetXl = void 0;
    this.pull = void 0;
    this.pullXs = void 0;
    this.pullSm = void 0;
    this.pullMd = void 0;
    this.pullLg = void 0;
    this.pullXl = void 0;
    this.push = void 0;
    this.pushXs = void 0;
    this.pushSm = void 0;
    this.pushMd = void 0;
    this.pushLg = void 0;
    this.pushXl = void 0;
    this.size = void 0;
    this.sizeXs = void 0;
    this.sizeSm = void 0;
    this.sizeMd = void 0;
    this.sizeLg = void 0;
    this.sizeXl = void 0;
  }
  onResize() {
    forceUpdate(this);
  }
  // Loop through all of the breakpoints to see if the media query
  // matches and grab the column value from the relevant prop if so
  getColumns(property) {
    let matched;
    for (const breakpoint of BREAKPOINTS) {
      const matches = matchBreakpoint(breakpoint);
      const columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
      if (matches && columns !== void 0) {
        matched = columns;
      }
    }
    return matched;
  }
  calculateSize() {
    const columns = this.getColumns("size");
    if (!columns || columns === "") {
      return;
    }
    const colSize = columns === "auto" ? "auto" : (
      // If CSS supports variables we should use the grid columns var
      SUPPORTS_VARS ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)` : (
        // Convert the columns to a percentage by dividing by the total number
        // of columns (12) and then multiplying by 100
        columns / 12 * 100 + "%"
      )
    );
    return {
      "flex": `0 0 ${colSize}`,
      "width": `${colSize}`,
      "max-width": `${colSize}`
    };
  }
  // Called by push, pull, and offset since they use the same calculations
  calculatePosition(property, modifier) {
    const columns = this.getColumns(property);
    if (!columns) {
      return;
    }
    const amount = SUPPORTS_VARS ? (
      // If CSS supports variables we should use the grid columns var
      `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
    ) : (
      // Convert the columns to a percentage by dividing by the total number
      // of columns (12) and then multiplying by 100
      columns > 0 && columns < 12 ? columns / 12 * 100 + "%" : "auto"
    );
    return {
      [modifier]: amount
    };
  }
  calculateOffset(isRTL) {
    return this.calculatePosition("offset", isRTL ? "margin-right" : "margin-left");
  }
  calculatePull(isRTL) {
    return this.calculatePosition("pull", isRTL ? "left" : "right");
  }
  calculatePush(isRTL) {
    return this.calculatePosition("push", isRTL ? "right" : "left");
  }
  render() {
    const isRTL = document.dir === "rtl";
    return h(Host, { key: "eac2e429c731259f9a8419cc831b415b3ea072e9", style: Object.assign(Object.assign(Object.assign(Object.assign({}, this.calculateOffset(isRTL)), this.calculatePull(isRTL)), this.calculatePush(isRTL)), this.calculateSize()) }, h("slot", { key: "597831d03acde0ce70a87ba538ae8e555effd248" }));
  }
};
CpslCol.style = CpslColStyle0;
export {
  CpslCol as cpsl_col
};
//# sourceMappingURL=cpsl-col.entry-CEH2CEDE.js.map
