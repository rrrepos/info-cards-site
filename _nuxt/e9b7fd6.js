(window.webpackJsonp=window.webpackJsonp||[]).push([[19,16],{796:function(t,e,n){},806:function(t,e,n){"use strict";n(796)},811:function(t,e,n){},822:function(t,e,n){"use strict";n.r(e);var o=n(5),r=(n(32),n(63),{methods:{submitTopic:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=document.querySelector(".input").value)&&(t.$emit("topic",n),setTimeout((function(){document.querySelector(".input").value=""}),2e3));case 2:case"end":return e.stop()}}),e)})))()},stopp:function(t){t.stopPropagation()}}}),c=(n(806),n(39)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topic-container"},[n("input",{staticClass:"input",attrs:{placeholder:"suggest topic"},on:{click:t.stopp,focus:t.stopp}}),t._v(" "),n("span",{staticClass:"material-icons menu-icon",on:{click:function(e){return t.submitTopic()}}},[t._v("play_arrow")])])}),[],!1,null,"2f2b6889",null);e.default=component.exports},829:function(t,e,n){"use strict";n(811)},854:function(t,e,n){"use strict";n.r(e);var o=n(5),r=(n(63),n(32),{name:"IndexPage",head:function(){return{title:"Kno",meta:[{"http-equiv":"Cache-Control",content:"no-cache, no-store, must-revalidate"},{"http-equiv":"Pragma",content:"no-cache"},{"http-equiv":"Expires",content:"-1"},{hid:"description",name:"Flip to know more",content:""},{hid:"og:title",property:"og:title",content:"Kno"},{hid:"og:description",property:"og:description",content:"Flip to know more"},{hid:"og:type",property:"og:type",content:"site"},{hid:"og:image",property:"og:image",content:"https://kno.cards"+n(244)},{hid:"og:url",property:"og:url",content:"https://kno.cards"+this.$route.fullPath}]}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,t.app,t.route,t.redirect,e.next=3,n("decks","en",{deep:!0}).only(["title","description","dir","id","listable","createdAt"]).where({listable:{$eq:!0}}).sortBy("createdAt","desc").limit(12).fetch();case 3:return o=e.sent,e.abrupt("return",{decks:o});case 5:case"end":return e.stop()}}),e)})))()},created:function(){},mounted:function(){var t=window.innerHeight;document.getElementsByClassName("main-grid")[0].style.height="".concat(t,"px"),this.isMobile=this.$device.isMobile,this.$store.dispatch("checkVer","1"),this.$store.dispatch("initialise")},data:function(){return{language:"en",isMobile:!1,hasSuggested:!1,topics:["AI","Behaviour","Business","Culture","Finance","Future","Engineering","Environment","Health","Science","Space","Sports","Technology","World"]}},methods:{share:function(t){navigator.share&&navigator.share({title:this.$store.getters.t("share_title"),text:this.$store.getters.t("share_message"),url:"https://kno.cards/decks/".concat(this.decks[t].id)}).then((function(){console.log("Thanks for sharing!")})).catch((function(t){console.log("Couldn't share because of",t.message)}))},submitTopic:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=13;break}return n.prev=1,e.hasSuggested=!0,setTimeout((function(){e.hasSuggested=!1}),2e3),o="title=".concat(t),r="https://asia-south1-flashback-cards.cloudfunctions.net/kno_suggestion?".concat(o),n.next=8,e.$http.$get(r);case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})))()}}}),c=(n(829),n(39)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-grid"},[n("div",{staticClass:"top"},[n("KnoMoreLogo")],1),t._v(" "),n("div",{staticClass:"middle"},[n("div",{staticClass:"title"},[n("div",{staticClass:"title-label"},[t._v("Recent Decks")]),t._v(" "),n("NuxtLink",{staticClass:"search",attrs:{to:"/search/"}},[n("span",{staticClass:"material-icons"},[t._v("search")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/list/"}},[n("div",{staticClass:"title-button"},[n("span",[t._v("All Decks")]),t._v(" "),n("span",{staticClass:"material-icons"},[t._v("arrow_forward")])])])],1),t._v(" "),n("div",{staticClass:"list"},t._l(t.decks,(function(e,o){return n("div",{key:o,staticClass:"square"},[n("div",{staticClass:"container"},[n("a",{staticClass:"image",attrs:{href:"/decks/"+e.id}},[n("v-img",{attrs:{src:e.dir+"/images/cover.png",alt:e.title}})],1),t._v(" "),n("div",{staticClass:"action-bar"},[t.isMobile?n("span",{staticClass:"material-icons menu-icon",on:{click:function(e){return t.share(o)}}},[t._v("share")]):t._e()])])])})),0),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"topics"},t._l(t.topics,(function(e,o){return n("div",{key:o,staticClass:"topic"},[n("NuxtLink",{attrs:{to:"/list/"+e.toLowerCase()}},[t._v(t._s(e))])],1)})),0),t._v(" "),t._m(1),t._v(" "),n("card-topic",{staticClass:"topic-row box-shadow",on:{topic:t.submitTopic}}),t._v(" "),n("div",{staticClass:"spacer-8"}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.hasSuggested,expression:"!hasSuggested"}],staticClass:"subtitle-label"},[t._v("KNO topics are contemporary and of general appeal")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.hasSuggested,expression:"hasSuggested"}],staticClass:"subtitle-label"},[t._v("Thank You")]),t._v(" "),n("div",{staticClass:"spacer-8"})],1),t._v(" "),n("div",{staticClass:"bottom"},[n("div",{staticClass:"menu"},[n("div",{staticClass:"menu-item"},[n("NuxtLink",{attrs:{to:"/decks/about_kno"}},[n("span",{staticClass:"material-icons"},[t._v("info")])])],1)]),t._v(" "),n("div",{staticClass:"copyright"},[t._v("© RmR, 2022")])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title top-16"},[n("div",{staticClass:"title-label"},[t._v("Select a topic of your interest")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title top-16"},[n("div",{staticClass:"title-label"},[t._v("Suggest a title you would like to know more about")])])}],!1,null,"6d651860",null);e.default=component.exports;installComponents(component,{VImg:n(170).default,CardTopic:n(822).default})}}]);