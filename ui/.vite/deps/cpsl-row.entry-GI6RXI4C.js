import {
  Host,
  h,
  registerInstance
} from "./chunk-3QM4QFEZ.js";
import "./chunk-QEK2ZTOW.js";

// node_modules/.pnpm/@getpara+core-components@2.0.0-alpha.73/node_modules/@getpara/core-components/dist/esm/cpsl-row.entry.js
var cpslRowCss = ":host{display:flex;flex-direction:var(--direction, row);align-items:var(--align);justify-content:var(--justify);gap:var(--gap);flex-wrap:wrap}";
var CpslRowStyle0 = cpslRowCss;
var CpslRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.col = false;
    this.align = "center";
    this.justify = "center";
    this.gap = "8px";
  }
  render() {
    return h(Host, { key: "4dba86aa6c29ca0c7ad321820bcc9d3d32431396", style: { ["--align"]: this.align, ["--justify"]: this.justify, ["--gap"]: this.gap.toString(), ["--direction"]: this.col ? "column" : "row" } }, h("slot", { key: "96597bd39866d1cb4d68396eae52f930183d522d" }));
  }
};
CpslRow.style = CpslRowStyle0;
export {
  CpslRow as cpsl_row
};
//# sourceMappingURL=cpsl-row.entry-GI6RXI4C.js.map
