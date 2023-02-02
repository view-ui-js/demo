import { defineComponent as r, openBlock as l, createElementBlock as p, createElementVNode as e, withModifiers as b, toDisplayString as s, unref as o, createTextVNode as g, pushScopeId as h, popScopeId as _ } from "/view-ui/libs/vue.js";
import { Langs as f } from "/view-ui/libs/view.js";
import { _ as v } from "./index2.js";
import "/view-ui/libs/state.js";
import "/view-ui/libs/pointer.js";
import "/view-ui/libs/swiper.js";
import "/view-ui/libs/navigator.js";
import "/view-ui/libs/components.js";
import "/view-ui/libs/viewui.js";
import "/view-ui/libs/router.js";
const i = (n) => (h("data-v-debb838e"), n = n(), _(), n), x = { class: "gestures" }, y = { class: "gesture" }, m = /* @__PURE__ */ i(() => /* @__PURE__ */ e("div", { class: "icon center" }, [
  /* @__PURE__ */ e("i", { class: "ficon-zuoyouhuadong" })
], -1)), k = { class: "summary" }, w = { class: "gesture" }, z = /* @__PURE__ */ i(() => /* @__PURE__ */ e("div", { class: "icon center" }, [
  /* @__PURE__ */ e("i", { class: "ficon-shangxiahuadong" })
], -1)), E = { class: "summary" }, S = { class: "hotKey" }, A = { class: "itemKey" }, C = /* @__PURE__ */ i(() => /* @__PURE__ */ e("div", { class: "keystroke" }, "S", -1)), F = { class: "itemKey" }, K = /* @__PURE__ */ i(() => /* @__PURE__ */ e("div", { class: "keystroke" }, "C", -1)), D = { class: "itemKey" }, B = /* @__PURE__ */ i(() => /* @__PURE__ */ e("div", { class: "keystroke" }, "A", -1)), I = { class: "itemKey" }, j = /* @__PURE__ */ i(() => /* @__PURE__ */ e("div", null, [
  /* @__PURE__ */ e("span", { class: "keystroke" }, "\u2190"),
  /* @__PURE__ */ e("span", { class: "keystroke" }, "\u2192")
], -1)), L = /* @__PURE__ */ i(() => /* @__PURE__ */ e("i", { class: "ficon-cha" }, null, -1)), P = /* @__PURE__ */ i(() => /* @__PURE__ */ e("div", null, [
  /* @__PURE__ */ e("span", { class: "keystroke" }, "F1")
], -1)), H = /* @__PURE__ */ r({
  __name: "guide",
  emits: ["close"],
  setup(n, { emit: c }) {
    const t = f({
      shortcutKeys: {
        en: "Shortcut Keys",
        zh: "\u5FEB\u6377\u952E"
      },
      sidebar: {
        en: "Show/Hide application bar",
        zh: "\u663E\u793A / \u9690\u85CF\u5E94\u7528\u680F"
      },
      controlbar: {
        en: "Show/Hide control bar",
        zh: "\u663E\u793A / \u9690\u85CF\u63A7\u5236\u680F"
      },
      horizontally: {
        en: "Swipe horizontally to switch apps",
        zh: "\u6A2A\u5411\u6ED1\u52A8\uFF0C\u5207\u6362\u5E94\u7528"
      },
      scroll: {
        en: "Swipe vertically to scroll through page",
        zh: "\u7EB5\u5411\u6ED1\u52A8\uFF0C\u6EDA\u52A8\u6D4F\u89C8\u9875\u9762"
      },
      switchLayer: {
        en: "Switch application layer",
        zh: "\u5207\u6362\u5E94\u7528\u5C42"
      },
      turningPages: {
        en: "Switch apps",
        zh: "\u5207\u6362\u5B50\u5E94\u7528"
      },
      close: {
        en: "Do not remind again",
        zh: "\u4E0D\u518D\u63D0\u793A"
      }
    });
    function u() {
      c("close");
    }
    function a() {
      c("close"), localStorage.guideState = 1;
    }
    return (N, d) => (l(), p("div", {
      class: "guide full center",
      onClick: u
    }, [
      e("div", {
        class: "center-box",
        onClick: d[0] || (d[0] = b(() => {
        }, ["stop"]))
      }, [
        e("div", x, [
          e("div", y, [
            m,
            e("div", k, s(o(t).horizontally), 1)
          ]),
          e("div", w, [
            z,
            e("div", E, s(o(t).scroll), 1)
          ])
        ]),
        e("div", S, [
          e("h3", null, s(o(t).shortcutKeys), 1),
          e("div", A, [
            e("div", null, s(o(t).switchLayer), 1),
            C
          ]),
          e("div", F, [
            e("div", null, s(o(t).controlbar), 1),
            K
          ]),
          e("div", D, [
            e("div", null, s(o(t).sidebar), 1),
            B
          ]),
          e("div", I, [
            e("div", null, s(o(t).turningPages), 1),
            j
          ])
        ]),
        e("div", {
          class: "close",
          onClick: a
        }, [
          e("div", null, [
            g(s(o(t).close) + " ", 1),
            L
          ]),
          P
        ])
      ])
    ]));
  }
}), M = `.guide[data-v-debb838e]{position:fixed;z-index:1000000;left:0;top:0;background-color:#8f8f8f6b;display:flex;flex-direction:column;justify-content:center;align-items:center;user-select:none}.guide .center-box[data-v-debb838e]{width:360px}.guide .center-box .gestures[data-v-debb838e],.guide .center-box .hotKey[data-v-debb838e],.guide .center-box .close[data-v-debb838e]{padding:20px;background-color:#838383f2;margin-bottom:15px;border-radius:10px;color:#fff}.guide .center-box .gestures .gesture[data-v-debb838e]{padding:10px 0;display:flex}.guide .center-box .gestures .gesture .icon[data-v-debb838e]{width:42px}.guide .center-box .gestures .gesture .icon i[data-v-debb838e]{font-size:20px}.guide .center-box .gestures .gesture .summary[data-v-debb838e]{display:flex;align-items:center;font-weight:700}.guide .center-box .keystroke[data-v-debb838e]{border:1px solid #ffffff;color:#fff;padding:0 4px;border-radius:3px;margin-left:6px}.guide .center-box .hotKey .itemKey[data-v-debb838e]{display:flex;justify-content:space-between;margin-top:22px}.guide .center-box .close[data-v-debb838e]{display:flex;justify-content:space-between;color:#ffbe28;cursor:pointer}.guide .center-box .close i[data-v-debb838e]{font-size:12px;margin-left:4px}
`, X = /* @__PURE__ */ v(H, [["styles", [M]], ["__scopeId", "data-v-debb838e"]]);
export {
  X as default
};
