(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{775:function(t,e,n){},791:function(t,e,n){"use strict";n(775)},818:function(t,e,n){"use strict";n.r(e);var o=n(5),r=(n(32),n(27),n(173),{name:"SearchPage",head:function(){return{title:"Kno",meta:[{"http-equiv":"Cache-Control",content:"no-cache, no-store, must-revalidate"},{"http-equiv":"Pragma",content:"no-cache"},{"http-equiv":"Expires",content:"-1"},{hid:"description",name:"Flip to know more",content:""},{hid:"og:title",property:"og:title",content:"Kno"},{hid:"og:description",property:"og:description",content:"Flip to know more"},{hid:"og:type",property:"og:type",content:"site"},{hid:"og:image",property:"og:image",content:"https://kno.cards"+n(244)},{hid:"og:url",property:"og:url",content:"https://kno.cards"+this.$route.fullPath}]}},created:function(){},mounted:function(){var t=window.innerHeight;document.getElementsByClassName("main-grid")[0].style.height="".concat(t,"px"),this.isMobile=this.$device.isMobile,this.$store.dispatch("checkVer","1"),this.$store.dispatch("initialise")},data:function(){return{language:"en",isMobile:!1,query:"",decks:[]}},watch:{query:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=3;break}return e.decks=[],n.abrupt("return");case 3:return n.next=5,e.$content("decks","en",{deep:!0}).only(["title","dir","id","listable","createdAt"]).where({listable:{$eq:!0}}).sortBy("createdAt","desc").limit(12).search(t).fetch();case 5:e.decks=n.sent;case 6:case"end":return n.stop()}}),n)})))()}}}),c=(n(791),n(39)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-grid"},[n("div",{staticClass:"top"},[n("KnoLogo")],1),t._v(" "),n("div",{staticClass:"middle"},[t._m(0),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"title input box-shadow",attrs:{type:"search",autocomplete:"on",placeholder:"enter keywords with spaces"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),t.decks.length?n("div",{staticClass:"list top-16"},t._l(t.decks,(function(t,e){return n("div",{key:e,staticClass:"square"},[n("div",{staticClass:"container"},[n("a",{staticClass:"image",attrs:{href:"/decks/"+t.id}},[n("v-img",{attrs:{src:t.dir+"/images/cover.png",alt:t.title}})],1)])])})),0):t._e()]),t._v(" "),n("div",{staticClass:"bottom"},[n("div",{staticClass:"menu"},[n("div",{staticClass:"menu-item"},[n("NuxtLink",{attrs:{to:"/"}},[n("span",{staticClass:"menu-icon material-icons"},[t._v("close")])])],1)]),t._v(" "),n("div",{staticClass:"copyright"},[t._v("© RmR, 2022")])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title top-16"},[n("div",{staticClass:"title-label"},[t._v("Search for a topic")])])}],!1,null,"27dff9a6",null);e.default=component.exports;installComponents(component,{KnoLogo:n(245).default,VImg:n(170).default})}}]);