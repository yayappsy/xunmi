(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221dc8"],{cbc6:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"bargain-list"},[i("div",{staticClass:"header"}),i("div",{staticClass:"list"},[t._l(t.bargainLis,function(a,s){return i("div",{key:s,staticClass:"item acea-row row-between-wrapper"},[i("div",{staticClass:"pictrue"},[i("img",{attrs:{src:a.image}})]),i("div",{staticClass:"text acea-row row-column-around"},[i("div",{staticClass:"line1",domProps:{textContent:t._s(a.title)}}),i("div",{staticClass:"num"},[i("span",{staticClass:"iconfont icon-pintuan"}),t._v(t._s(a.people)+"人正在参与\n        ")]),i("div",{staticClass:"money font-color-red"},[t._v("\n          可砍至: ￥"),i("span",{staticClass:"price",domProps:{textContent:t._s(a.min_price)}})])]),i("div",{staticClass:"cutBnt bg-color-red",on:{click:function(i){return t.goDetail(a.id)}}},[i("span",{staticClass:"iconfont icon-kanjia"}),t._v("参与砍价\n      ")])])}),t.status?t._e():i("div",{staticClass:"load font-color-red",on:{click:t.getBargainList}},[t._v("\n      点击加载更多\n    ")])],2)])},n=[],e=i("ca41"),o={name:"GoodsBargain",components:{},props:{},data:function(){return{bargainLis:[],status:!1,loading:!1,page:1,limit:20}},mounted:function(){this.getBargainList()},methods:{getBargainList:function(){var t=this;t.loading||t.status||(t.loading=!0,Object(e["f"])({page:t.page,limit:t.limit}).then(function(a){t.status=a.data.length<t.limit,t.bargainLis.push.apply(t.bargainLis,a.data),t.page++,t.loading=!1}))},goDetail:function(t){this.$router.push({path:"/activity/dargain_detail/"+t+"/0"})}}},c=o,l=i("2877"),r=Object(l["a"])(c,s,n,!1,null,null,null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d221dc8.5e9a7ee5.js.map