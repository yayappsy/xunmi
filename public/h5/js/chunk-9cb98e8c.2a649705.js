(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9cb98e8c"],{3201:function(t,n,a){"use strict";a.r(n);var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{ref:"container",staticClass:"bargain-record"},[t._l(t.bargain,(function(n,i){return a("div",{key:i,staticClass:"item"},[a("div",{staticClass:"picTxt acea-row row-between-wrapper"},[a("div",{staticClass:"pictrue"},[a("img",{attrs:{src:n.image}})]),a("div",{staticClass:"text acea-row row-column-around"},[a("div",{staticClass:"line1"},[t._v(t._s(n.title))]),a("count-down",{attrs:{"is-day":!0,"tip-text":"倒计时 ","day-text":" 天 ","hour-text":" 时 ","minute-text":" 分 ","second-text":" 秒",datatime:n.datatime}}),a("div",{staticClass:"money font-color-red"},[t._v("\n          已砍至"),a("span",{staticClass:"symbol"},[t._v("￥")]),a("span",{staticClass:"num"},[t._v(t._s(n.residue_price))])])],1)]),a("div",{staticClass:"bottom acea-row row-between-wrapper"},[1===n.status?a("div",{staticClass:"purple"},[t._v("活动进行中")]):3===n.status?a("div",{staticClass:"success"},[t._v("砍价成功")]):a("div",{staticClass:"end"},[t._v("活动已结束")]),a("div",{staticClass:"acea-row row-middle row-right"},[1===n.status?a("div",{staticClass:"bnt cancel",on:{click:function(a){return t.getBargainUserCancel(n.bargain_id)}}},[t._v("\n          取消活动\n        ")]):t._e(),1===n.status?a("div",{staticClass:"bnt bg-color-red",on:{click:function(a){return t.goDetail(n.bargain_id)}}},[t._v("\n          继续砍价\n        ")]):a("div",{staticClass:"bnt bg-color-red",on:{click:t.goList}},[t._v("重开一个")])])])])})),a("Loading",{attrs:{loaded:t.status,loading:t.loadingList}})],2)},e=[],s=a("5608"),r=a("ca41"),o=a("3a5e"),u={name:"BargainRecord",components:{CountDown:s["a"],Loading:o["a"]},props:{},data:function(){return{bargain:[],status:!1,loadingList:!1,page:1,limit:20}},mounted:function(){var t=this;this.getBargainUserList(),this.$scroll(this.$refs.container,(function(){!t.loadingList&&t.getBargainUserList()}))},methods:{goDetail:function(t){this.$router.push({path:"/activity/dargain_detail/"+t+"/0"})},goList:function(){this.$router.push({path:"/activity/bargain"})},getBargainUserList:function(){var t=this;t.loadingList||t.status||Object(r["l"])({page:t.page,limit:t.limit}).then((function(n){t.status=n.data.length<t.limit,t.bargain.push.apply(t.bargain,n.data),t.page++,t.loadingList=!1})).catch((function(n){t.$dialog.error(n.msg)}))},getBargainUserCancel:function(t){var n=this;Object(r["k"])({bargainId:t}).then((function(t){n.$dialog.success(t.msg).then((function(){n.status=!1,n.loadingList=!1,n.page=1,n.bargain=[],n.getBargainUserList()}))})).catch((function(t){n.$dialog.error(t.msg)}))}}},c=u,l=a("623f"),d=Object(l["a"])(c,i,e,!1,null,null,null);n["default"]=d.exports},5608:function(t,n,a){"use strict";var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"time"},[t._v("\n  "+t._s(t.tipText)),!0===t.isDay?a("span",{staticClass:"styleAll"},[t._v(t._s(t.day))]):t._e(),a("span",{staticClass:"timeTxt"},[t._v(t._s(t.dayText))]),a("span",{staticClass:"styleAll"},[t._v(t._s(t.hour))]),a("span",{staticClass:"timeTxt"},[t._v(t._s(t.hourText))]),a("span",{staticClass:"styleAll"},[t._v(t._s(t.minute))]),a("span",{staticClass:"timeTxt"},[t._v(t._s(t.minuteText))]),a("span",{staticClass:"styleAll"},[t._v(t._s(t.second))]),a("span",{staticClass:"timeTxt"},[t._v(t._s(t.secondText))])])},e=[],s=(a("163d"),{name:"CountDown",props:{tipText:{type:String,default:"倒计时"},dayText:{type:String,default:"天"},hourText:{type:String,default:"时"},minuteText:{type:String,default:"分"},secondText:{type:String,default:"秒"},datatime:{type:Number,default:0},isDay:{type:Boolean,default:!0}},data:function(){return{day:"00",hour:"00",minute:"00",second:"00"}},created:function(){this.show_time()},mounted:function(){},methods:{show_time:function(){var t=this;function n(){var n=t.datatime-Date.parse(new Date)/1e3,a=0,i=0,e=0,s=0;n>0?(a=!0===t.isDay?Math.floor(n/86400):0,i=Math.floor(n/3600)-24*a,e=Math.floor(n/60)-24*a*60-60*i,s=Math.floor(n)-24*a*60*60-60*i*60-60*e,i<=9&&(i="0"+i),e<=9&&(e="0"+e),s<=9&&(s="0"+s),t.day=a,t.hour=i,t.minute=e,t.second=s):(t.day="00",t.hour="00",t.minute="00",t.second="00")}n(),setInterval(n,1e3)}}}),r=s,o=a("623f"),u=Object(o["a"])(r,i,e,!1,null,null,null);n["a"]=u.exports},ca41:function(t,n,a){"use strict";a.d(n,"n",(function(){return e})),a.d(n,"m",(function(){return s})),a.d(n,"o",(function(){return r})),a.d(n,"q",(function(){return o})),a.d(n,"p",(function(){return u})),a.d(n,"r",(function(){return c})),a.d(n,"t",(function(){return l})),a.d(n,"s",(function(){return d})),a.d(n,"f",(function(){return g})),a.d(n,"a",(function(){return f})),a.d(n,"h",(function(){return p})),a.d(n,"i",(function(){return m})),a.d(n,"b",(function(){return v})),a.d(n,"e",(function(){return h})),a.d(n,"c",(function(){return b})),a.d(n,"j",(function(){return _})),a.d(n,"d",(function(){return C})),a.d(n,"g",(function(){return y})),a.d(n,"l",(function(){return w})),a.d(n,"k",(function(){return x}));var i=a("b775");function e(t){return i["a"].get("/combination/list",t,{login:!1})}function s(t){return i["a"].get("/combination/detail/"+t,{},{login:!1})}function r(t){return i["a"].get("/combination/pink/"+t)}function o(t){return i["a"].post("/combination/remove",t)}function u(t){return i["a"].post("/combination/poster",t)}function c(){return i["a"].get("/seckill/index",{},{login:!1})}function l(t,n){return i["a"].get("/seckill/list/"+t,n,{login:!1})}function d(t){return i["a"].get("/seckill/detail/"+t,{},{login:!1})}function g(t){return i["a"].get("/bargain/list",t,{login:!1})}function f(t){return i["a"].get("/bargain/detail/"+t)}function p(t){return i["a"].post("/bargain/share",t)}function m(t){return i["a"].post("/bargain/start",t)}function v(t){return i["a"].post("/bargain/help",t)}function h(t){return i["a"].post("/bargain/help/price",t)}function b(t){return i["a"].post("/bargain/help/count",t)}function _(t){return i["a"].post("/bargain/start/user",t)}function C(t){return i["a"].post("/bargain/help/list",t)}function y(t){return i["a"].post("/bargain/poster",t)}function w(t){return i["a"].get("/bargain/user/list",t)}function x(t){return i["a"].post("/bargain/user/cancel",t)}}}]);
//# sourceMappingURL=chunk-9cb98e8c.2a649705.js.map