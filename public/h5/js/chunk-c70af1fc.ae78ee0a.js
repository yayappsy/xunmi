(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c70af1fc"],{ca41:function(t,n,i){"use strict";i.d(n,"n",(function(){return o})),i.d(n,"m",(function(){return r})),i.d(n,"o",(function(){return e})),i.d(n,"q",(function(){return s})),i.d(n,"p",(function(){return u})),i.d(n,"r",(function(){return c})),i.d(n,"t",(function(){return l})),i.d(n,"s",(function(){return d})),i.d(n,"f",(function(){return f})),i.d(n,"a",(function(){return p})),i.d(n,"h",(function(){return g})),i.d(n,"i",(function(){return m})),i.d(n,"b",(function(){return b})),i.d(n,"e",(function(){return v})),i.d(n,"c",(function(){return h})),i.d(n,"j",(function(){return C})),i.d(n,"d",(function(){return w})),i.d(n,"g",(function(){return _})),i.d(n,"l",(function(){return k})),i.d(n,"k",(function(){return L}));var a=i("b775");function o(t){return a["a"].get("/combination/list",t,{login:!1})}function r(t){return a["a"].get("/combination/detail/"+t,{},{login:!1})}function e(t){return a["a"].get("/combination/pink/"+t)}function s(t){return a["a"].post("/combination/remove",t)}function u(t){return a["a"].post("/combination/poster",t)}function c(){return a["a"].get("/seckill/index",{},{login:!1})}function l(t,n){return a["a"].get("/seckill/list/"+t,n,{login:!1})}function d(t){return a["a"].get("/seckill/detail/"+t,{},{login:!1})}function f(t){return a["a"].get("/bargain/list",t,{login:!1})}function p(t){return a["a"].get("/bargain/detail/"+t)}function g(t){return a["a"].post("/bargain/share",t)}function m(t){return a["a"].post("/bargain/start",t)}function b(t){return a["a"].post("/bargain/help",t)}function v(t){return a["a"].post("/bargain/help/price",t)}function h(t){return a["a"].post("/bargain/help/count",t)}function C(t){return a["a"].post("/bargain/start/user",t)}function w(t){return a["a"].post("/bargain/help/list",t)}function _(t){return a["a"].post("/bargain/poster",t)}function k(t){return a["a"].get("/bargain/user/list",t)}function L(t){return a["a"].post("/bargain/user/cancel",t)}},ed36:function(t,n,i){"use strict";i.r(n);var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{ref:"container",staticClass:"group-list"},[i("div",{staticClass:"header"}),i("div",{staticClass:"list"},[t._l(t.combinationList,(function(n,a){return i("div",{key:a,staticClass:"item acea-row row-between-wrapper",on:{click:function(i){return t.link(n.id)}}},[i("div",{staticClass:"pictrue"},[i("img",{attrs:{src:n.image}})]),i("div",{staticClass:"text"},[i("div",{staticClass:"line1",domProps:{textContent:t._s(n.title)}}),i("div",{staticClass:"acea-row"},[i("div",{staticClass:"team acea-row row-middle cart-color"},[i("div",{staticClass:"iconfont icon-pintuan"}),i("div",{staticClass:"num",domProps:{textContent:t._s(n.people+"人团")}})])]),i("div",{staticClass:"bottom acea-row row-between-wrapper"},[i("div",{staticClass:"money"},[t._v("\n            ￥"),i("span",{staticClass:"num",domProps:{textContent:t._s(n.price)}}),i("span",{staticClass:"y-money",domProps:{textContent:t._s("￥"+n.product_price)}})]),t._m(0,!0)])])])})),i("Loading",{attrs:{loaded:t.status,loading:t.loadingList}})],2),i("div",{attrs:{id:"title0"}}),i("div",{attrs:{id:"title1"}}),i("div",{attrs:{id:"title2"}})])},o=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"groupBnt bg-color-red"},[t._v("\n            去拼团"),i("span",{staticClass:"iconfont icon-jiantou"})])}],r=i("ca41"),e=i("3a5e"),s={name:"GoodsGroup",components:{Loading:e["a"]},props:{},data:function(){return{combinationList:[],status:!1,loading:!1,page:1,limit:10,loadingList:!1}},mounted:function(){var t=this;this.getCombinationList(),this.$scroll(this.$refs.container,(function(){!t.loading&&t.getCombinationList()}))},methods:{getCombinationList:function(){var t=this;t.loading||t.status||(t.loading=!0,Object(r["n"])({page:t.page,limit:t.limit}).then((function(n){t.status=n.data.length<t.limit,t.combinationList.push.apply(t.combinationList,n.data),t.page++,t.loading=!1})).catch((function(){t.loading=!1})))},link:function(t){this.$router.push({path:"/activity/group_detail/"+t})}}},u=s,c=i("623f"),l=Object(c["a"])(u,a,o,!1,null,null,null);n["default"]=l.exports}}]);
//# sourceMappingURL=chunk-c70af1fc.ae78ee0a.js.map