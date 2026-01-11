import {
  COLORS,
  Prando
} from "./chunk-IKAB4A4D.js";
import {
  Host,
  h,
  registerInstance
} from "./chunk-3QM4QFEZ.js";
import "./chunk-QEK2ZTOW.js";

// node_modules/.pnpm/@getpara+core-components@2.0.0-alpha.73/node_modules/@getpara/core-components/dist/esm/cpsl-identicon.entry.js
var cpslIdenticonCss = ":host{--identicon-background-red:linear-gradient(136deg, #ff4270 6.86%, #ff7c7c 93.78%);--identicon-background-orange:linear-gradient(136deg, #f45532 6.86%, #ff9b63 93.78%);--identicon-background-yellow:linear-gradient(136deg, #ffa756 6.86%, #fbff47 93.78%);--identicon-background-green:linear-gradient(136deg, #0cae60 6.86%, #7bffd0 93.78%);--identicon-background-blue:linear-gradient(136deg, #476fff 6.86%, #47c8ff 93.78%);--identicon-background-purple:linear-gradient(136deg, #9747ff 6.86%, #da47ff 93.78%);--identicon-background-empty:linear-gradient(136deg, #aaaaaa 6.86%, #999999 93.78%);--identicon-arc-width:30%;display:block;aspect-ratio:1;border-radius:25%;position:relative;border:1px solid var(--cpsl-color-background-8)}:host>svg{fill:rgba(255, 255, 255, 0.6);position:absolute;width:var(--identicon-arc-width)}:host>svg.rotate90{transform:rotate(0.25turn)}:host>svg.rotate180{transform:rotate(0.5turn)}:host>svg.rotate270{transform:rotate(0.75turn)}:host>svg:nth-child(1){right:50%;bottom:50%}:host>svg:nth-child(2){left:50%;bottom:50%}:host>svg:nth-child(3){right:50%;top:50%}:host>svg:nth-child(4){left:50%;top:50%}:host(.red){background:var(--identicon-background-red)}:host(.orange){background:var(--identicon-background-orange)}:host(.green){background:var(--identicon-background-green)}:host(.yellow){background:var(--identicon-background-yellow)}:host(.blue){background:var(--identicon-background-blue)}:host(.purple){background:var(--identicon-background-purple)}:host(.empty){background:var(--identicon-background-empty)}:host(.avatar){border-radius:1000px}";
var CpslIdenticonStyle0 = cpslIdenticonCss;
var SingleArc = (rotation) => h("svg", { class: {
  rotate90: rotation === 1,
  rotate180: rotation === 2,
  rotate270: rotation === 3
}, viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" }, h("g", { "clip-path": "url(#clip0_674_66)" }, h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" })), h("defs", null, h("clipPath", { id: "clip0_674_66" }, h("rect", { width: "12", height: "12" }))));
var DoubleArc = (rotation) => h("svg", { class: {
  rotate90: rotation === 1,
  rotate180: rotation === 2,
  rotate270: rotation === 3
}, viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" }, h("g", { "clip-path": "url(#clip0_674_255)" }, h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" }), h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" })), h("defs", null, h("clipPath", { id: "clip0_674_255" }, h("rect", { width: "12", height: "12" }))));
var BASE_PATTERNS = [
  [
    [0, 0, 0, 0],
    [0, 1, 3, 2]
  ],
  [
    [1, 1, 0, 0],
    [0, 1, 3, 2]
  ],
  [
    [0, 1, 0, 1],
    [0, 1, 3, 2]
  ],
  [
    [0, 0, 1, 1],
    [0, 1, 3, 2]
  ],
  [
    [1, 0, 1, 0],
    [0, 1, 3, 2]
  ],
  [
    [1, 1, 1, 1],
    [0, 1, 3, 2]
  ],
  [
    [0, 0, 0, 0],
    [2, 3, 1, 0]
  ],
  [
    [1, 1, 1, 1],
    [2, 3, 1, 0]
  ],
  [
    [1, 1, 1, 1],
    [0, 1, 2, 3]
  ]
];
var CpslIdenticon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hash = void 0;
    this.size = "40px";
    this.variant = "default";
    this.arcWidth = "30%";
  }
  render() {
    let props;
    const isEmpty = !this.hash;
    if (!isEmpty)
      props = getIdenticonProps(this.hash);
    return h(Host, { key: "a3c8935e47ee631e95f63d02f32e022832229cb1", class: {
      red: (props === null || props === void 0 ? void 0 : props.color) === "red",
      orange: (props === null || props === void 0 ? void 0 : props.color) === "orange",
      yellow: (props === null || props === void 0 ? void 0 : props.color) === "yellow",
      green: (props === null || props === void 0 ? void 0 : props.color) === "green",
      blue: (props === null || props === void 0 ? void 0 : props.color) === "blue",
      purple: (props === null || props === void 0 ? void 0 : props.color) === "purple",
      empty: !(props === null || props === void 0 ? void 0 : props.color) && !this.hash,
      avatar: this.variant === "avatar"
    }, style: {
      width: this.size,
      height: this.size,
      ["--identicon-arc-width"]: this.arcWidth
    } }, (props === null || props === void 0 ? void 0 : props.shapes) && (props === null || props === void 0 ? void 0 : props.rotations) && props.shapes.map((isDouble, index) => {
      return isDouble ? DoubleArc(props.rotations[index]) : SingleArc(props.rotations[index]);
    }));
  }
};
var PRANDO_INTS = [COLORS.length, BASE_PATTERNS.length, 16];
function getIdenticonProps(seed) {
  const rng = new Prando(seed);
  const [iColor, iPattern, iDeviation] = PRANDO_INTS.map((len) => rng.nextInt(0, len - 1));
  const deviationIndex = Math.floor(iDeviation / 4);
  const [isDeviateShape, isDeviateFlip] = [iDeviation % 2 === 1, iDeviation % 4 >= 2];
  return {
    color: COLORS[iColor],
    shapes: BASE_PATTERNS[iPattern][0].map((s, i) => {
      return i === deviationIndex ? isDeviateShape ? s === 1 ? false : true : s === 1 : s === 1;
    }),
    rotations: BASE_PATTERNS[iPattern][1].map((r, i) => i === deviationIndex ? isDeviateFlip ? (r + 2) % 4 : r : r)
  };
}
CpslIdenticon.style = CpslIdenticonStyle0;
export {
  CpslIdenticon as cpsl_identicon
};
//# sourceMappingURL=cpsl-identicon.entry-EPQNDMT4.js.map
