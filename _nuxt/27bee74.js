(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{644:function(t,e,n){},656:function(t,e,n){"use strict";n(644)},680:function(t,e,n){"use strict";n.r(e);var o,r=n(5),c=(n(32),{name:"IndexPage",head:function(){return{title:"Kno",meta:[{"http-equiv":"Cache-Control",content:"no-cache, no-store, must-revalidate"},{"http-equiv":"Pragma",content:"no-cache"},{"http-equiv":"Expires",content:"-1"},{hid:"description",name:"Flip to know more",content:""},{hid:"og:title",property:"og:title",content:"Kno"},{hid:"og:description",property:"og:description",content:"Flip to know more"},{hid:"og:type",property:"og:type",content:"site"},{hid:"og:image",property:"og:image",content:"https://kno.cards"+n(388)},{hid:"og:url",property:"og:url",content:"https://kno.cards"+this.$route.fullPath}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,t.app,t.route,t.redirect,e.next=3,n("decks","en",{deep:!0}).only(["title","description","dir","id","listable","createdAt"]).where({listable:{$eq:!0}}).sortBy("createdAt","desc").fetch();case 3:return o=e.sent,e.abrupt("return",{decks:o});case 5:case"end":return e.stop()}}),e)})))()},created:function(){},mounted:function(){var t=document.querySelector(".install");window.addEventListener("beforeinstallprompt",(function(t){o=t})),window.addEventListener("appinstalled",(function(){t.classList.add("hide"),o=null,console.log("PWA was installed")})),t.addEventListener("click",Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.classList.add("hide"),o.prompt(),e.next=4,o.userChoice;case 4:n=e.sent,r=n.outcome,console.log("User response to the install prompt: ".concat(r)),o=null;case 8:case"end":return e.stop()}}),e)}))));var e=window.innerHeight;document.getElementsByClassName("main-grid")[0].style.height="".concat(e,"px"),this.isMobile=this.$device.isMobile,this.$store.dispatch("checkVer","1"),this.$store.dispatch("initialise")},data:function(){return{language:"en",isMobile:!1}},methods:{share:function(t){navigator.share&&navigator.share({title:this.$store.getters.t("share_title"),text:this.$store.getters.t("share_message"),url:"https://kno.cards/decks/".concat(this.decks[t].id)}).then((function(){console.log("Thanks for sharing!")})).catch((function(t){console.log("Couldn't share because of",t.message)}))}}}),l=(n(656),n(39)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-grid"},[n("div",{staticClass:"top"},[n("KnoMoreLogo"),t._v(" "),n("div",{staticClass:"install hide"},[t._v("\n      "+t._s(this.$store.getters.t("install_message"))+"\n    ")])],1),t._v(" "),n("div",{staticClass:"middle"},[n("div",{staticClass:"list"},t._l(t.decks,(function(e,o){return n("div",{key:o,staticClass:"square"},[n("div",{staticClass:"container"},[n("a",{staticClass:"image",attrs:{href:"/decks/"+e.id}},[n("v-img",{attrs:{src:e.dir+"/images/cover.png",alt:e.title}})],1),t._v(" "),n("div",{staticClass:"action-bar"},[t.isMobile?n("span",{staticClass:"material-icons menu-icon",on:{click:function(e){return t.share(o)}}},[t._v("share")]):t._e()])])])})),0)]),t._v(" "),n("div",{staticClass:"bottom"},[n("div",{staticClass:"menu"},[n("div",{staticClass:"menu-item"},[n("NuxtLink",{attrs:{to:"/decks/about_kno"}},[n("span",{staticClass:"material-icons"},[t._v("info")])])],1)]),t._v(" "),n("div",{staticClass:"copyright"},[t._v("© RmR, 2022")])])])}),[],!1,null,"3cfadf2a",null);e.default=component.exports;installComponents(component,{VImg:n(170).default})}}]);