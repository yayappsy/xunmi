(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cba6da9"],{5608:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"time"},[t._v("\n  "+t._s(t.tipText)),!0===t.isDay?s("span",{staticClass:"styleAll"},[t._v(t._s(t.day))]):t._e(),s("span",{staticClass:"timeTxt"},[t._v(t._s(t.dayText))]),s("span",{staticClass:"styleAll"},[t._v(t._s(t.hour))]),s("span",{staticClass:"timeTxt"},[t._v(t._s(t.hourText))]),s("span",{staticClass:"styleAll"},[t._v(t._s(t.minute))]),s("span",{staticClass:"timeTxt"},[t._v(t._s(t.minuteText))]),s("span",{staticClass:"styleAll"},[t._v(t._s(t.second))]),s("span",{staticClass:"timeTxt"},[t._v(t._s(t.secondText))])])},o=[],i=(s("c5f6"),{name:"CountDown",props:{tipText:{type:String,default:"倒计时"},dayText:{type:String,default:"天"},hourText:{type:String,default:"时"},minuteText:{type:String,default:"分"},secondText:{type:String,default:"秒"},datatime:{type:Number,default:0},isDay:{type:Boolean,default:!0}},data:function(){return{day:"00",hour:"00",minute:"00",second:"00"}},created:function(){this.show_time()},mounted:function(){},methods:{show_time:function(){var t=this;function e(){var e=t.datatime-Date.parse(new Date)/1e3,s=0,a=0,o=0,i=0;e>0?(s=!0===t.isDay?Math.floor(e/86400):0,a=Math.floor(e/3600)-24*s,o=Math.floor(e/60)-24*s*60-60*a,i=Math.floor(e)-24*s*60*60-60*a*60-60*o,a<=9&&(a="0"+a),o<=9&&(o="0"+o),i<=9&&(i="0"+i),t.day=s,t.hour=a,t.minute=o,t.second=i):(t.day="00",t.hour="00",t.minute="00",t.second="00")}e(),setInterval(e,1e3)}}}),r=i,n=s("2877"),c=Object(n["a"])(r,a,o,!1,null,null,null);e["a"]=c.exports},"64c5":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.domStatus,expression:"domStatus"}],class:[t.posterImageStatus?"noscroll product-con":"product-con"]},[s("ProductConSwiper",{attrs:{imgUrls:t.imgUrls}}),s("div",{staticClass:"wrapper"},[s("div",{staticClass:"share acea-row row-between row-bottom"},[s("div",{staticClass:"money font-color-red"},[t._v("\n        ￥"),s("span",{staticClass:"num",domProps:{textContent:t._s(t.storeInfo.price)}}),s("span",{staticClass:"y-money",domProps:{textContent:t._s("￥"+t.storeInfo.product_price)}})]),s("div",{staticClass:"iconfont icon-fenxiang",on:{click:t.setPosterImageStatus}})]),s("div",{staticClass:"introduce",domProps:{textContent:t._s(t.storeInfo.title)}}),s("div",{staticClass:"label acea-row row-between-wrapper"},[s("div",{domProps:{textContent:t._s("类型:"+t.storeInfo.people+"人团")}}),s("div",{domProps:{textContent:t._s("库存:"+t.storeInfo.stock+t.storeInfo.unit_name)}}),s("div",{domProps:{textContent:t._s("已拼:"+t.storeInfo.sales+t.storeInfo.unit_name)}})])]),s("div",{staticClass:"notice acea-row row-middle"},[s("div",{staticClass:"num font-color-red"},[s("span",{staticClass:"iconfont icon-laba"}),t._v("已拼"+t._s(t.storeInfo.sales)+t._s(t.storeInfo.unit_name)),s("span",{staticClass:"line"},[t._v("|")])]),s("div",{staticClass:"swiper-no-swiping swiper"},[s("swiper",{staticClass:"swiper-wrapper",attrs:{options:t.swiperTip}},t._l(t.itemNew,function(e,a){return s("swiperSlide",{key:a,staticClass:"swiper-slide"},[s("div",{staticClass:"line1"},[t._v(t._s(e))])])}),1)],1)]),s("div",{staticClass:"assemble"},[t._l(t.groupList,function(e,a){return s("div",{key:a},[a<t.groupListCount?s("div",{staticClass:"item acea-row row-between-wrapper"},[s("div",{staticClass:"pictxt acea-row row-between-wrapper"},[s("div",{staticClass:"pictrue"},[s("img",{staticClass:"image",attrs:{src:e.avatar}})]),s("div",{staticClass:"text line1",domProps:{textContent:t._s(e.nickname)}})]),s("div",{staticClass:"right acea-row row-middle"},[s("div",[s("div",{staticClass:"lack"},[t._v("\n              还差"),s("span",{staticClass:"font-color-red",domProps:{textContent:t._s(e.count)}}),t._v("人成团\n            ")]),s("CountDown",{attrs:{"is-day":!1,"tip-text":"剩余 ","day-text":"","hour-text":":","minute-text":":","second-text":"",datatime:e.stop_time}})],1),s("div",{staticClass:"spellBnt",on:{click:function(s){return t.groupRule(e.id)}}},[t._v("\n            去拼单"),s("span",{staticClass:"iconfont icon-jiantou"})])])]):t._e()])}),t.groupList.length>t.groupListCount?s("div",{staticClass:"more",on:{click:t.setGroupListCount}},[t._v("\n      查看更多"),s("span",{staticClass:"iconfont icon-xiangxia"})]):t._e()],2),t._m(0),s("div",{staticClass:"userEvaluation"},[s("div",{staticClass:"title acea-row row-between-wrapper"},[s("div",{domProps:{textContent:t._s("用户评价("+t.replyCount+")")}}),s("div",{staticClass:"praise",on:{click:t.goReply}},[s("span",{staticClass:"font-color-red",domProps:{textContent:t._s(t.replyChance+"%")}}),t._v("好评率"),s("span",{staticClass:"iconfont icon-jiantou"})])]),s("UserEvaluation",{attrs:{reply:t.reply}})],1),s("div",{staticClass:"product-intro"},[s("div",{staticClass:"title"},[t._v("产品介绍")]),s("div",{staticClass:"conter",domProps:{innerHTML:t._s(t.storeInfo.description)}})]),s("div",{staticStyle:{height:"1.2rem"}}),s("div",{staticClass:"footer-group acea-row row-between-wrapper"},[s("div",{staticClass:"customerSer acea-row row-center-wrapper row-column",on:{click:function(e){return t.$router.push({path:"/customer/list"})}}},[s("div",{staticClass:"iconfont icon-kefu"}),s("div",[t._v("客服")])]),s("div",{staticClass:"bnt bg-color-violet",on:{click:t.openAlone}},[t._v("单独购买")]),s("div",{staticClass:"bnt bg-color-red",on:{click:t.openTeam}},[t._v("立即开团")])]),s("ProductWindow",{attrs:{attr:t.attr},on:{changeFun:t.changeFun}}),s("StorePoster",{attrs:{posterImageStatus:t.posterImageStatus,posterData:t.posterData},on:{setPosterImageStatus:t.setPosterImageStatus}})],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"playWay"},[s("div",{staticClass:"title acea-row row-between-wrapper"},[s("div",[t._v("拼团玩法")])]),s("div",{staticClass:"way acea-row row-middle"},[s("div",{staticClass:"item"},[s("span",{staticClass:"num"},[t._v("①")]),t._v("开团/参团")]),s("div",{staticClass:"iconfont icon-arrow"}),s("div",{staticClass:"item"},[s("span",{staticClass:"num"},[t._v("②")]),t._v("邀请好友")]),s("div",{staticClass:"iconfont icon-arrow"}),s("div",{staticClass:"item"},[s("div",[s("span",{staticClass:"num"},[t._v("③")]),t._v("满员发货")])])])])}],i=s("7618"),r=(s("a481"),s("7f7f"),s("7212")),n=(s("e5d0"),s("c5f8")),c=s("5608"),l=s("edc3"),u=s("c6da"),d=s("cbd6"),p=s("ca41"),m=s("73f5"),v="GroupDetails",f={name:"GroupDetails",components:{ProductConSwiper:n["a"],CountDown:c["a"],UserEvaluation:l["a"],swiper:r["swiper"],swiperSlide:r["swiperSlide"],ProductWindow:u["a"],StorePoster:d["a"]},props:{},data:function(){return{domStatus:!1,posterData:{image:"",title:"",price:"",code:""},posterImageStatus:!1,reply:[],replyCount:0,replyChance:0,imgUrls:[],storeInfo:{},itemNew:{},groupListCount:2,groupList:{},swiperTip:{direction:"vertical",autoplay:{disableOnInteraction:!1,delay:2e3},loop:!0,speed:1e3,observer:!0,observeParents:!0},attr:{cartAttr:!1,productSelect:{image:"",store_name:"",price:"",stock:"",unique:"",cart_num:1}}}},watch:{$route:function(t){var e=this;console.log(t),t.name===v&&e.mountedStart()}},mounted:function(){this.mountedStart()},methods:{openAlone:function(){this.$router.replace({path:"/detail/"+this.storeInfo.id})},mountedStart:function(){var t=this,e=t.$route.params.id;Object(p["m"])(e).then(function(e){t.$set(t,"storeInfo",e.data.storeInfo),t.$set(t,"imgUrls",e.data.storeInfo.images),t.$set(t,"itemNew",e.data.pink_ok_list),t.$set(t,"groupList",e.data.pink),t.$set(t,"reply",[e.data.reply]),t.$set(t,"replyCount",e.data.replyCount),t.$set(t,"replyChance",e.data.replyChance),t.setProductSelect(),t.posterData.image=t.storeInfo.image_base,t.storeInfo.title.length>30?t.posterData.title=t.storeInfo.title.substring(0,30)+"...":t.posterData.title=t.storeInfo.title,t.posterData.price=t.storeInfo.price,t.posterData.code=t.storeInfo.code_base,t.domStatus=!0})},setPosterImageStatus:function(){var t=document.body||document.documentElement;t.scrollTop=0,this.posterImageStatus=!this.posterImageStatus},groupRule:function(t){var e=this;e.$router.push({path:"/activity/group_rule/"+t})},goReply:function(){var t=this;t.$router.push({path:"/evaluate_list/"+t.storeInfo.product_id})},setGroupListCount:function(){this.groupListCount=this.groupListCount+2},changeFun:function(t){"object"!==Object(i["a"])(t)&&(t={});var e=t.action||"",s=void 0===t.value?"":t.value;this[e]&&this[e](s)},changeattr:function(t){var e=this;e.attr.cartAttr=t},ChangeCartNum:function(t){var e=this;console.log(t),e.attr.productSelect.cart_num=1,e.$dialog.message("每人每次限购1"+e.storeInfo.unit_name)},setProductSelect:function(){var t=this,e=t.attr;e.productSelect.image=t.storeInfo.image,e.productSelect.store_name=t.storeInfo.title,e.productSelect.price=t.storeInfo.price,e.productSelect.stock=t.storeInfo.stock,e.cartAttr=!1,t.$set(t,"attr",e)},openTeam:function(){var t=this,e=this;if(0==e.attr.cartAttr)e.attr.cartAttr=!this.attr.cartAttr;else{var s={};s.productId=e.storeInfo.product_id,s.cartNum=e.attr.productSelect.cart_num,s.uniqueId=e.attr.productSelect.unique,s.combinationId=e.storeInfo.id,s.new=1,Object(m["m"])(s).then(function(t){e.$router.push({path:"/order/submit/"+t.data.cartId})}).catch(function(e){t.$dialog.error(e.msg)})}}}},C=f,_=(s("cbb4"),s("b97f"),s("2877")),w=Object(_["a"])(C,a,o,!1,null,"7e92b391",null);e["default"]=w.exports},"68a0":function(t,e,s){},9589:function(t,e,s){},b97f:function(t,e,s){"use strict";var a=s("68a0"),o=s.n(a);o.a},cbb4:function(t,e,s){"use strict";var a=s("9589"),o=s.n(a);o.a},edc3:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"evaluateWtapper"},t._l(t.reply,function(e,a){return s("div",{key:a,staticClass:"evaluateItem"},[s("div",{staticClass:"pic-text acea-row row-middle"},[s("div",{staticClass:"pictrue"},[s("img",{staticClass:"image",attrs:{src:e.avatar}})]),s("div",{staticClass:"acea-row row-middle"},[s("div",{staticClass:"name line1"},[t._v(t._s(e.nickname))]),s("div",{staticClass:"start",class:"star"+e.star})])]),s("div",{staticClass:"time"},[t._v(t._s(e.add_time)+" "+t._s(e.suk))]),s("div",{staticClass:"evaluate-infor"},[t._v(t._s(e.comment))]),s("div",{staticClass:"imgList acea-row"},t._l(e.pics,function(t,e){return s("div",{key:e,staticClass:"pictrue"},[s("img",{staticClass:"image",attrs:{src:t}})])}),0),e.merchant_reply_content?s("div",{staticClass:"reply"},[s("span",{staticClass:"font-color-orange"},[t._v("店小二")]),t._v("："+t._s(e.merchant_reply_content)+"\n    ")]):t._e()])}),0)},o=[],i={name:"UserEvaluation",props:{reply:{type:Array,default:function(){return[]}}},data:function(){return{}},mounted:function(){},methods:{}},r=i,n=s("2877"),c=Object(n["a"])(r,a,o,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-7cba6da9.7501ae7a.js.map