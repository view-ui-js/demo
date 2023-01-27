import { defineComponent as F, openBlock as E, createElementBlock as C, createStaticVNode as B } from "/view-ui/libs/vue.js";
const A = { class: "markdown-body" }, D = /* @__PURE__ */ B("<h1>View UI</h1><p>\u8F7B\u91CF\u7EA7\u7684\u8DE8\u7AEF\u3001\u54CD\u5E94\u5F0F\u5FAE\u5E94\u7528\u5F00\u53D1\u5E73\u53F0\uFF0C\u901A\u8FC7\u5728\u6240\u6709\u7EC8\u7AEF\u8BBE\u5907\u4E2D\u7EDF\u4E00\u4F7F\u7528\u79FB\u52A8\u7AEF\u7684\u4EA4\u4E92\u903B\u8F91\uFF0C\u5B9E\u73B0\u591A\u7AEF\u4E00\u81F4\u7684\u8BBE\u8BA1\u3001\u5F00\u53D1\u548C\u4F7F\u7528\u4F53\u9A8C\u3002</p><p>\u4EE5\u76EE\u524D\u4E3B\u6D41\u7684\u4F20\u7EDF\u7AD6\u5C4F\u624B\u673A\u4F5C\u4E3A\u9002\u914D\u57FA\u7840\uFF0C\u901A\u8FC7\u7A97\u53E3\u5C42\u53E0\u3001\u5E73\u94FA\u3001\u4F38\u7F29\u7B49\u6392\u7248\u65B9\u5F0F\uFF0C\u5B9E\u73B0\u5BF9\u6298\u53E0\u5C4F\u3001Pad\u3001PC\u3001\u5934\u663E\u7B49\u591A\u79CD\u7EC8\u7AEF\u8BBE\u5907\u7684\u5E7F\u6CDB\u9002\u914D\uFF1B</p><blockquote><p>\u8BE5\u9879\u76EE\u5904\u4E8E\u65E9\u671F\u5B9E\u9A8C\u3001\u63A2\u7D22\u9636\u6BB5\uFF0C\u90E8\u5206\u529F\u80FD\u5C1A\u672A\u7A33\u5B9A\u548C\u5B8C\u5584\uFF0C\u4EC5\u4F9B\u53C2\u8003\u3002</p></blockquote><h2>\u7279\u6027</h2><ul><li><p>\u652F\u6301\u591A\u5E94\u7528\u5206\u5C4F\u663E\u793A\uFF0C\u901A\u8FC7\u5728\u7A97\u53E3\u4E2D\u5EFA\u7ACB\u865A\u62DF\u5206\u533A\uFF0C\u540C\u65F6\u663E\u793A\u591A\u4E2A\u5E94\u7528\uFF0C\u53EF\u5145\u5206\u53D1\u6325\u5BBD\u5C4F\u7684\u663E\u793A\u4F18\u52BF\uFF1B</p></li><li><p>\u5BBD\u5C4F\u6A21\u5F0F\u4E0B\uFF0C\u5E94\u7528\u7A97\u53E3\u652F\u6301\u5F39\u6027\u4F38\u7F29\u548C\u624B\u52BF\u5207\u6362\uFF0C\u6700\u5927\u5316\u5229\u7528\u5BBD\u5C4F\u4E2D\u7684\u7A7A\u95F2\u53EF\u89C6\u533A\u57DF\uFF1B</p></li><li><p>\u652F\u6301\u903B\u8F91\u5206\u5C42\u663E\u793A\uFF0C\u5E94\u7528\u53EF\u4EE5\u5728\u4E3B\u5E94\u7528\u5C42\uFF08\u56FA\u5B9A\u5168\u5C4F\uFF09\u3001\u5B50\u5E94\u7528\u5C42\uFF08\u6D6E\u52A8\u3001\u5F39\u6027\u5206\u5C4F\uFF09\u548C\u906E\u7F69\u5C42\u4E4B\u95F4\u81EA\u7531\u6302\u8F7D\uFF1B</p></li><li><p>\u4F7F\u7528\u53EF\u7EE7\u627F\u7684\u52A8\u6001\u5E94\u7528\u6CE8\u518C\u8868\uFF0C\u7EE7\u627F\u53EF\u51CF\u5C11\u91CD\u590D\u914D\u7F6E\u9879\uFF0C\u52A8\u6001\u6CE8\u518C\u8868\u53EF\u907F\u514D\u6BCF\u6B21\u4FEE\u6539\u914D\u7F6E\u540E\u90FD\u9700\u8981\u91CD\u65B0\u7F16\u8BD1\uFF1B</p></li><li><p>\u652F\u6301\u76F4\u63A5\u8BBF\u95EE\u672A\u6CE8\u518C\u7684\u5E94\u7528\uFF0C\u65E0\u9700\u9884\u8BBE\u8DEF\u7531\uFF0C\u5373\u53EF\u901A\u8FC7\u6587\u4EF6\u8DEF\u5F84\u52A8\u6001\u52A0\u8F7D\u5E94\u7528\uFF1B</p></li><li><p>\u652F\u6301\u4E0D\u540C\u7EC8\u7AEF\u73AF\u5883\u7684\u5DEE\u5F02\u5316\u6E32\u67D3\uFF0C\u901A\u8FC7\u53EF\u9009\u7684\u540C\u6784\u6216\u5F02\u6784\u6A21\u5F0F\u5339\u914D\uFF0C\u5B9E\u73B0\u5C40\u90E8\u5DEE\u5F02\u5316\u9002\u914D\uFF1B</p></li><li><p>\u652F\u6301\u9F20\u6807\u624B\u52BF\u64CD\u4F5C\uFF0C\u4FDD\u6301\u591A\u7EC8\u7AEF\u4E00\u81F4\u7684\u7528\u6237\u64CD\u4F5C\u4F53\u9A8C\uFF0C\u907F\u514D\u4EA7\u751F\u4E0D\u5FC5\u8981\u7684\u5B66\u4E60\u548C\u9002\u5E94\u6210\u672C\uFF1B</p></li><li><p>\u652F\u6301\u8DE8 IFrame \u624B\u52BF\u64CD\u4F5C\uFF0C\u4FDD\u6301\u6574\u4F53\u4EA4\u4E92\u884C\u4E3A\u7684\u4E00\u81F4\u6027\uFF08\u8DE8\u57DF\u65E0\u6548\uFF09\uFF1B</p></li><li><p>\u57FA\u4E8E\u4E8B\u4EF6\u7684\u8DE8\u5E94\u7528\u6570\u636E\u603B\u7EBF\uFF0C\u5B9E\u73B0\u591A\u5E94\u7528\u95F4\u7684\u6570\u636E\u6D41\u8F6C\uFF0C\u964D\u4F4E\u7CFB\u7EDF\u8026\u5408\u5EA6\uFF08\u4E3B\u8981\u9488\u5BF9\u72EC\u7ACB\u6253\u5305\u7684\u5E94\u7528\uFF09\uFF1B</p></li><li><p>\u53EF\u642D\u914D\u5E38\u89C4\u5E03\u5C40\u7684\u5E94\u7528\u6216\u7F51\u7AD9\u4F7F\u7528\uFF0C\u5728\u4E0D\u7834\u574F\u539F\u9879\u76EE\u4E3B\u4F53\u5E03\u5C40\u7684\u57FA\u7840\u4E0A\uFF0C\u6269\u5C55\u65B0\u7684\u4EA4\u4E92\u754C\u9762\u3002</p></li><li><p>\u652F\u6301 React\u3001Solid \u7B49\u6846\u67B6\u5F00\u53D1\u5B50\u5E94\u7528\uFF08\u4EC5\u63D0\u4F9B\u7528\u4E8E\u81EA\u5B9A\u4E49\u6302\u8F7D\u7684 DOM \u8282\u70B9\uFF09\uFF1B</p></li><li><p>\u57FA\u4E8E Vite \u6784\u5EFA\uFF0C\u4E3B\u5E94\u7528\u4F7F\u7528 Vue 3 \u5F00\u53D1\uFF0C\u5B50\u5E94\u7528\u9ED8\u8BA4\u4E3A Vue \u7EC4\u4EF6\uFF1B</p></li><li><p>\u652F\u6301\u9875\u9762\u5C40\u90E8\u54CD\u5E94\u5F0F\u5E03\u5C40\uFF0C\u4F5C\u4E3A CSS @container \u7279\u6027\u5E7F\u6CDB\u517C\u5BB9\u524D\u7684\u8FC7\u6E21\u65B9\u6848\uFF1B</p></li><li><p>\u5E73\u53F0\u6574\u4F53\u7531\u5E94\u7528\u57FA\u5EA7\u3001\u5FAE\u5E94\u7528\u548C\u516C\u5171\u4F9D\u8D56\u4E09\u90E8\u5206\u6784\u6210\uFF0C\u4E09\u8005\u5747\u53EF\u72EC\u7ACB\u6784\u5EFA\u548C\u53D1\u5E03\uFF1B</p></li><li><p>\u4E0D\u540C\u5B50\u5E94\u7528\u4E4B\u95F4\u516C\u5171\u7EC4\u4EF6\u3001\u8DEF\u7531\u76F8\u4E92\u9694\u79BB\uFF0C\u6BCF\u4E2A\u5B50\u5E94\u7528\u5747\u62E5\u6709\u72EC\u7ACB\u7684 Router\u3001Navigator \u5B9E\u4F8B\uFF1B</p></li><li><p>\u5185\u7F6E\u7B80\u5355\u3001\u8F7B\u91CF\u7EA7\u7684\u5B50\u5E94\u7528\u9694\u79BB\u65B9\u6848\uFF0C \u652F\u6301 ES Component\u3001Shadow DOM\u3001IFrame \u4E09\u79CD\u65B9\u6848\u53EF\u9009\uFF1B</p></li><li><p>\u96C6\u6210 PWA \u79BB\u7EBF\u7F13\u5B58\uFF0C\u53EF\u5B89\u88C5\u81F3\u684C\u9762\uFF1B</p></li></ul><h2>\u4F20\u7EDF\u7684\u591A\u7AEF\u54CD\u5E94\u5F0F\u5E03\u5C40\u5B58\u5728\u4EC0\u4E48\u95EE\u9898\uFF1F</h2><p>\u5728\u57FA\u4E8E CSS @media screen \u7684\u4F20\u7EDF\u591A\u7AEF\u54CD\u5E94\u5F0F\u5E03\u5C40\u4E2D\uFF0C\u901A\u5E38\u4F1A\u9009\u62E9\u5C06 PC \u6216\u79FB\u52A8\u7AEF\u4E2D\u7684\u4E00\u4E2A\u4F5C\u4E3A\u4E3B\u8981\u9002\u914D\u76EE\u6807\uFF0C\u5176\u5B83\u6B21\u8981\u7EC8\u7AEF\u5F80\u5F80\u4F1A\u9009\u62E9\u6298\u4E2D\u5904\u7406\uFF0C\u6280\u672F\u4E0A\u5F88\u96BE\u505A\u5230\u771F\u6B63\u7684\u591A\u7AEF\u517C\u987E\u3002</p><p>\u867D\u7136\u4F20\u7EDF\u54CD\u5E94\u5F0F\u5E03\u5C40\u4E5F\u80FD\u5B9E\u73B0\u9AD8\u5EA6\u5DEE\u5F02\u5316\u7684\u4EA4\u4E92\u6548\u679C\uFF0C\u4F46\u662F\u8FD9\u5F80\u5F80\u4E5F\u4F34\u968F\u7740\u4EE3\u7801\u7684\u5F3A\u8026\u5408\uFF0C\u4EE5\u53CA\u5927\u91CF\u7684\u5197\u4F59\u4EE3\u7801\uFF0C\u51FA\u73B0\u591A\u7AEF\u4EE3\u7801\u4E92\u76F8\u7EA0\u7F20\u4E0D\u6E05\u7684\u5C40\u9762\uFF0C\u968F\u7740\u7CFB\u7EDF\u5DEE\u5F02\u5316\u548C\u590D\u6742\u5EA6\u7684\u6301\u7EED\u589E\u52A0\uFF0C\u6700\u7EC8\u4F1A\u4EA7\u751F\u96BE\u4EE5\u7EF4\u62A4\u7684\u4EE3\u7801\u3002</p><p>\u5728\u5B9E\u9645\u5E94\u7528\u6848\u4F8B\u4E2D\uFF0C\u4F20\u7EDF\u54CD\u5E94\u5F0F\u5E03\u5C40\u4E3B\u8981\u8FD8\u662F\u5E94\u7528\u4E8E\u4E00\u4E9B\u76F8\u5BF9\u7B80\u5355\u7684\u8DE8\u5E73\u53F0\u5DEE\u5F02\u5316\u5E03\u5C40\u548C\u4EA4\u4E92\u573A\u666F\u4E2D\uFF0C\u9762\u5BF9\u590D\u6742\u573A\u666F\u65F6\u4F9D\u7136\u5B58\u5728\u660E\u663E\u7684\u5C40\u9650\u6027\u3002</p><h2>View UI \u5982\u4F55\u89E3\u51B3\u591A\u7AEF\u9002\u914D\u7684\u95EE\u9898\uFF1F</h2><p>\u76EE\u524D\u4E00\u5957\u4EE3\u7801\u9002\u914D\u591A\u7AEF\uFF0C\u4E3B\u8981\u9762\u4E34\u7684\u95EE\u9898\u662F\u5982\u4F55\u5B9E\u73B0\u5BF9\u5404\u79CD\u4E0D\u540C\u5C4F\u5E55\u5C3A\u5BF8\u7684\u5DEE\u5F02\u5316\u517C\u5BB9\uFF0CView UI \u5C1D\u8BD5\u89E3\u51B3\u4EE5\u4E0A\u95EE\u9898\u7684\u601D\u8DEF\u662F\u4E3A\u591A\u7AEF\u73AF\u5883\u5236\u5B9A\u5177\u6709\u7EDF\u4E00\u6807\u51C6\u7684\u901A\u7528\u865A\u62DF\u7A97\u53E3\uFF08\u4F7F\u7528\u5177\u6709\u76F8\u540C\u6700\u5C0F\u5C3A\u5BF8\u548C\u4EA4\u4E92\u903B\u8F91\u7684\u865A\u62DF\u5C4F\uFF09\uFF0C\u4E0D\u7528\u6216\u5C11\u7528\u5DEE\u5F02\u5316\u4EE3\u7801\uFF0C\u6765\u4FDD\u6301\u5E94\u7528\u884C\u4E3A\u7684\u6574\u4F53\u4E00\u81F4\u6027\u548C\u53EF\u9760\u6027\uFF0C\u5728\u7B80\u5C11\u5E94\u7528\u5C42\u4EE3\u7801\u91CF\u7684\u540C\u65F6\u4E5F\u964D\u4F4E\u4E86\u7CFB\u7EDF\u590D\u6742\u5EA6\u3002</p><p>\u5176\u6B21\uFF0C\u662F\u8981\u7EDF\u4E00\u4E0D\u540C\u8F93\u5165\u8BBE\u5907\u95F4\u5B58\u5728\u7684\u4EA4\u4E92\u884C\u4E3A\u5DEE\u5F02\u3002\u4E00\u81F4\u7684\u5C4F\u5E55\u5C3A\u5BF8\u9700\u8981\u5339\u914D\u4E00\u81F4\u7684\u8F93\u5165\u884C\u4E3A\uFF0C\u624D\u80FD\u4EA7\u751F\u8DE8\u7AEF\u4E00\u81F4\u7684\u4F7F\u7528\u4F53\u9A8C\uFF0CView UI \u63D0\u4F9B Pointer \u6A21\u5757\u4F5C\u4E3A\u7EDF\u4E00\u7684\u8F93\u5165\u4E8B\u4EF6\u4EE3\u7406\u5C42\uFF0C\u7528\u4E8E\u62B9\u5E73\u9F20\u6807\u3001\u89E6\u5C4F\u7B49\u4E0D\u540C\u7C7B\u578B\u6307\u9488\u8BBE\u5907\u7684\u884C\u4E3A\u5DEE\u5F02\u3002</p><p>\u8BE5\u9879\u76EE\u867D\u7136\u662F\u57FA\u4E8E WEB \u5E73\u53F0\u5F00\u53D1\uFF0C\u4F46\u662F\u591A\u7AEF\u9002\u914D\u7684\u601D\u8DEF\u5E76\u4E0D\u5C40\u9650\u4E8E WEB \u73AF\u5883\uFF0C\u56E0\u6B64\uFF0C\u5BF9\u4E8E\u5176\u5B83\u5E94\u7528\u5E73\u53F0\u7684\u5F00\u53D1\u8005\u4E5F\u540C\u6837\u9002\u7528\u3002</p><h2>\u516C\u5171\u4F9D\u8D56\u5E93</h2><blockquote><p>\u6240\u6709 api \u5747\u4EE5 npm \u6A21\u5757\u7684\u65B9\u5F0F\u5BFC\u5165\uFF0C\u53EF\u6309\u9700\u6269\u5C55\u3002</p></blockquote><h3>vue</h3><p>vue \u7684\u539F\u59CB npm \u6A21\u5757</p><h3>components</h3><p>\u516C\u5171\u57FA\u7840\u7EC4\u4EF6\u8D44\u6E90\u5E93</p><h3>helper</h3><p>\u516C\u5171\u5DE5\u5177\u51FD\u6570</p><h3>network</h3><p>\u7F51\u7EDC\u670D\u52A1\uFF0C\u57FA\u4E8E axios \u5C01\u88C5</p><h3>state</h3><p>\u5168\u5C40\u54CD\u5E94\u5F0F\u72B6\u6001\u7BA1\u7406</p><h3>navigator</h3><p>\u5168\u5C40\u5BFC\u822A\u76F8\u5173\u5C5E\u6027\u3001\u65B9\u6CD5</p><h2>\u8DEF\u7531</h2><p>View UI \u4F7F\u7528\u5B9A\u5236\u7684\u8F7B\u91CF\u7EA7\u3001\u6241\u5E73\u5316\u3001\u52A8\u6001\u8DEF\u7531\u65B9\u6848\uFF08\u7531\u4E8E Vue \u5B98\u65B9\u8DEF\u7531\u4E0E\u8BE5\u9879\u76EE\u4E2D\u7684\u8BF8\u591A\u5E94\u7528\u573A\u666F\u548C\u9700\u6C42\u4E0D\u5339\u914D\uFF0C\u56E0\u6B64\u5B9A\u5236\u8DEF\u7531\u662F\u66F4\u5408\u7406\u7684\u9009\u62E9\uFF09\u3002</p><h3>\u52A8\u6001\u53C2\u6570\u5904\u7406</h3>", 31), p = [
  D
], o = { title: "View UI" }, h = "", n = /* @__PURE__ */ F({
  __name: "zh",
  setup(e, { expose: u }) {
    return u({ frontmatter: { title: "View UI" }, excerpt: void 0 }), (i, t) => (E(), C("div", A, p));
  }
});
export {
  n as default,
  h as excerpt,
  o as frontmatter
};
