(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{786:function(t,e,n){},804:function(t,e,n){"use strict";n(786)},829:function(t,e,n){"use strict";n.r(e);var o=n(5),r=(n(32),{name:"DeckPage",head:function(){return{title:"Kno",meta:[{"http-equiv":"Cache-Control",content:"no-cache, no-store, must-revalidate"},{"http-equiv":"Pragma",content:"no-cache"},{"http-equiv":"Expires",content:"-1"},{hid:"description",name:"Flip to know more",content:""},{hid:"og:title",property:"og:title",content:"Kno"},{hid:"og:description",property:"og:description",content:"Flip to know more"},{hid:"og:type",property:"og:type",content:"site"},{hid:"og:image",property:"og:image",content:"https://kno.cards"+n(244)},{hid:"og:url",property:"og:url",content:"https://kno.cards"+this.$route.fullPath}]}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,t.app,t.route,t.redirect,r=o.topic.toLowerCase(),console.log(r),e.next=5,n("decks","en",{deep:!0}).only(["title","description","dir","id","listable","createdAt","tags"]).where({listable:{$eq:!0},tags:{$contains:r}}).sortBy("createdAt","desc").fetch();case 5:return c=e.sent,e.abrupt("return",{decks:c});case 7:case"end":return e.stop()}}),e)})))()},created:function(){},mounted:function(){var t=window.innerHeight;document.getElementsByClassName("main-grid")[0].style.height="".concat(t,"px"),this.isMobile=this.$device.isMobile,this.$store.dispatch("checkVer","1"),this.$store.dispatch("initialise")},data:function(){return{language:"en",isMobile:!1}},methods:{share:function(t){navigator.share&&navigator.share({title:this.$store.getters.t("share_title"),text:this.$store.getters.t("share_message"),url:"https://kno.cards/decks/".concat(this.decks[t].id)}).then((function(){console.log("Thanks for sharing!")})).catch((function(t){console.log("Couldn't share because of",t.message)}))}}}),c=r,l=(n(804),n(39)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-grid"},[n("div",{staticClass:"top"},[n("NuxtLink",{attrs:{to:"/"}},[n("KnoLogo")],1)],1),t._v(" "),n("div",{staticClass:"middle"},[n("div",{staticClass:"list"},t._l(t.decks,(function(e,o){return n("div",{key:o,staticClass:"square"},[n("div",{staticClass:"container"},[n("a",{staticClass:"image",attrs:{href:"/decks/"+e.id}},[n("v-img",{attrs:{src:e.dir+"/images/cover.png",alt:e.title}})],1),t._v(" "),n("div",{staticClass:"action-bar"},[t.isMobile?n("span",{staticClass:"material-icons menu-icon",on:{click:function(e){return t.share(o)}}},[t._v("share")]):t._e()])])])})),0)]),t._v(" "),n("div",{staticClass:"bottom"},[n("div",{staticClass:"menu"},[n("div",{staticClass:"menu-item"},[n("NuxtLink",{attrs:{to:"/"}},[n("span",{staticClass:"menu-icon material-icons"},[t._v("close")])])],1)]),t._v(" "),n("div",{staticClass:"copyright"},[t._v("© RmR, 2022")])])])}),[],!1,null,"1d425210",null);e.default=component.exports;installComponents(component,{KnoLogo:n(245).default,VImg:n(170).default})}}]);