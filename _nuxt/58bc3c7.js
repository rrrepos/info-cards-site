(window.webpackJsonp=window.webpackJsonp||[]).push([[17,4,5,6,7,11],{581:function(e,t,n){},582:function(e,t,n){"use strict";n.r(t);n(243);var r={props:{header:{type:Object,required:!1},index:{type:Number,required:!1},count:{type:Number,required:!1}}},c=(n(583),n(39)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"info"},[n("div",{staticClass:"title"},[e._v(e._s(e.header.title))]),e._v(" "),n("div",{staticClass:"subtitle"},[e._v(e._s(e.header.category)+" · "+e._s(e.header.level))])]),e._v(" "),n("div"),e._v(" "),e.index>=0?n("div",{staticClass:"count"},[n("span",[n("strong",[e._v(e._s(e.index+1))]),e._v(" / "+e._s(e.count))])]):e._e()])}),[],!1,null,"317a5020",null);t.default=component.exports},583:function(e,t,n){"use strict";n(581)},584:function(e,t,n){},585:function(e,t,n){},586:function(e,t,n){},587:function(e,t,n){},591:function(e,t,n){"use strict";n(584)},592:function(e,t,n){"use strict";n(585)},593:function(e,t,n){"use strict";n(586)},594:function(e,t,n){"use strict";n(587)},597:function(e,t,n){"use strict";n.r(t);var r=n(5),c=(n(32),{methods:{submitError:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=document.querySelector(".input").value,e.$emit("error",n);case 2:case"end":return t.stop()}}),t)})))()},stopp:function(e){e.stopPropagation()}}}),o=(n(591),n(39)),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"error-container"},[n("input",{staticClass:"input",attrs:{placeholder:"report the error"},on:{click:e.stopp,focus:e.stopp}}),e._v(" "),n("span",{staticClass:"material-icons menu-icon",on:{click:function(t){return e.submitError()}}},[e._v("play_arrow")])])}),[],!1,null,"9c63eb64",null);t.default=component.exports},598:function(e,t,n){"use strict";n.r(t);var r=n(5),c=(n(32),{methods:{setRating:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.stopPropagation(),console.log(t),n.$emit("rated",t);case 3:case"end":return r.stop()}}),r)})))()}}}),o=(n(592),n(39)),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rating-container"},[n("div",{staticClass:"rating",on:{click:function(t){return e.setRating(1)}}},[n("div",{staticClass:"number"},[e._v("1")]),e._v(" "),n("div",{staticClass:"text"},[e._v(e._s(this.$store.getters.t("inaccurate")))])]),e._v(" "),n("div",{staticClass:"rating",on:{click:function(t){return e.setRating(2)}}},[n("div",{staticClass:"number"},[e._v("2")]),e._v(" "),n("div",{staticClass:"text"},[e._v(e._s(this.$store.getters.t("insufficient")))])]),e._v(" "),n("div",{staticClass:"rating",on:{click:function(t){return e.setRating(3)}}},[n("div",{staticClass:"number"},[e._v("3")]),e._v(" "),n("div",{staticClass:"text"},[e._v(e._s(this.$store.getters.t("excessive")))])]),e._v(" "),n("div",{staticClass:"rating",on:{click:function(t){return e.setRating(4)}}},[n("div",{staticClass:"number"},[e._v("4")]),e._v(" "),n("div",{staticClass:"text"},[e._v(e._s(this.$store.getters.t("perfect")))])])])}),[],!1,null,"2c1a5c81",null);t.default=component.exports},599:function(e,t,n){"use strict";n.r(t);n(63);var r={props:{header:{type:Object,required:!1}},mounted:function(){var e=this;setTimeout((function(){e.message=e.$store.getters.t("swipe_left")}),1e3*this.delay)},data:function(){return{message:"",delay:5}},methods:{}},c=(n(593),n(39)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("v-img",{staticClass:"image",attrs:{src:e.header.dir+"/images/cover.png",alt:e.header.title}}),e._v(" "),n("div",{staticClass:"action-row"},[e._v("\n    "+e._s(e.message)+"\n  ")])],1)}),[],!1,null,"79e351ad",null);t.default=component.exports;installComponents(component,{VImg:n(170).default})},600:function(e,t,n){"use strict";n.r(t);var r={components:{CardHeader:n(582).default}},c=(n(594),n(39)),component=Object(c.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"container"})}),[],!1,null,"7c3b0fce",null);t.default=component.exports},602:function(e,t,n){var map={"./content/decks/en/24_character_strengths/images/preview.png":245,"./content/decks/en/4th_industrial_revolution/images/preview.png":247,"./content/decks/en/about_kno/images/preview.png":249,"./content/decks/en/bionic_eyes/images/preview.png":251,"./content/decks/en/carbon_footprint/images/preview.png":253,"./content/decks/en/cop_26/images/preview.png":255,"./content/decks/en/covid_and_variants/images/preview.png":257,"./content/decks/en/digital_twin/images/preview.png":259,"./content/decks/en/first_pig_heart_transplant/images/preview.png":261,"./content/decks/en/formula_one/images/preview.png":263,"./content/decks/en/gene_editing/images/preview.png":265,"./content/decks/en/greenhouse_gases/images/preview.png":267,"./content/decks/en/holi/images/preview.png":269,"./content/decks/en/iot/images/preview.png":271,"./content/decks/en/james_webb_space_telescope/images/preview.png":273,"./content/decks/en/lab_made_dairy_products/images/preview.png":275,"./content/decks/en/lab_made_meat/images/preview.png":277,"./content/decks/en/low_code_no_code/images/preview.png":279,"./content/decks/en/malaria_vaccine/images/preview.png":281,"./content/decks/en/medical_nanorobots/images/preview.png":283,"./content/decks/en/museum_of_the_future/images/preview.png":285,"./content/decks/en/newest_country/images/preview.png":287,"./content/decks/en/nsdr_yoga_nidra/images/preview.png":289,"./content/decks/en/popular_internet_slangs/images/preview.png":291,"./content/decks/en/proxima_d/images/preview.png":293,"./content/decks/en/quantum_computers/images/preview.png":295,"./content/decks/en/robobees/images/preview.png":297,"./content/decks/en/self_fertilizing_crops/images/preview.png":299,"./content/decks/en/self_healing_concrete/images/preview.png":301,"./content/decks/en/smart_cane/images/preview.png":303,"./content/decks/en/space_tourism/images/preview.png":305,"./content/decks/en/what_are_character_strengths/images/preview.png":307,"./content/decks/en/what_are_cryptocoins/images/preview.png":309,"./content/decks/en/what_are_life_skills/images/preview.png":311,"./content/decks/en/what_are_xenobots/images/preview.png":313,"./content/decks/en/what_is_3d_printing/images/preview.png":315,"./content/decks/en/what_is_4d_printing/images/preview.png":317,"./content/decks/en/what_is_ar/images/preview.png":319,"./content/decks/en/what_is_bitcoin/images/preview.png":321,"./content/decks/en/what_is_blockchain_ledger/images/preview.png":323,"./content/decks/en/what_is_cbdc/images/preview.png":325,"./content/decks/en/what_is_collaboration_overload/images/preview.png":327,"./content/decks/en/what_is_deepfake/images/preview.png":329,"./content/decks/en/what_is_eskin/images/preview.png":331,"./content/decks/en/what_is_hydroponics/images/preview.png":333,"./content/decks/en/what_is_hyperloop/images/preview.png":335,"./content/decks/en/what_is_lidar/images/preview.png":337,"./content/decks/en/what_is_lifi/images/preview.png":339,"./content/decks/en/what_is_meme/images/preview.png":341,"./content/decks/en/what_is_metaverse/images/preview.png":343,"./content/decks/en/what_is_nft/images/preview.png":345,"./content/decks/en/what_is_quad/images/preview.png":347,"./content/decks/en/what_is_robotic_surgery/images/preview.png":349,"./content/decks/en/what_is_self_awareness/images/preview.png":351,"./content/decks/en/what_is_sleep_apnea/images/preview.png":353,"./content/decks/en/what_is_vr/images/preview.png":355,"./content/decks/en/what_is_web3/images/preview.png":357,"./content/decks/en/what_is_wordle/images/preview.png":359,"./content/decks/en/womens_day/images/preview.png":361};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=c,e.exports=r,r.id=602},603:function(e,t,n){var map={"./content/decks/en/24_character_strengths/images/cover.png":244,"./content/decks/en/4th_industrial_revolution/images/cover.png":246,"./content/decks/en/about_kno/images/cover.png":248,"./content/decks/en/bionic_eyes/images/cover.png":250,"./content/decks/en/carbon_footprint/images/cover.png":252,"./content/decks/en/cop_26/images/cover.png":254,"./content/decks/en/covid_and_variants/images/cover.png":256,"./content/decks/en/digital_twin/images/cover.png":258,"./content/decks/en/first_pig_heart_transplant/images/cover.png":260,"./content/decks/en/formula_one/images/cover.png":262,"./content/decks/en/gene_editing/images/cover.png":264,"./content/decks/en/greenhouse_gases/images/cover.png":266,"./content/decks/en/holi/images/cover.png":268,"./content/decks/en/iot/images/cover.png":270,"./content/decks/en/james_webb_space_telescope/images/cover.png":272,"./content/decks/en/lab_made_dairy_products/images/cover.png":274,"./content/decks/en/lab_made_meat/images/cover.png":276,"./content/decks/en/low_code_no_code/images/cover.png":278,"./content/decks/en/malaria_vaccine/images/cover.png":280,"./content/decks/en/medical_nanorobots/images/cover.png":282,"./content/decks/en/museum_of_the_future/images/cover.png":284,"./content/decks/en/newest_country/images/cover.png":286,"./content/decks/en/nsdr_yoga_nidra/images/cover.png":288,"./content/decks/en/popular_internet_slangs/images/cover.png":290,"./content/decks/en/proxima_d/images/cover.png":292,"./content/decks/en/quantum_computers/images/cover.png":294,"./content/decks/en/robobees/images/cover.png":296,"./content/decks/en/self_fertilizing_crops/images/cover.png":298,"./content/decks/en/self_healing_concrete/images/cover.png":300,"./content/decks/en/smart_cane/images/cover.png":302,"./content/decks/en/space_tourism/images/cover.png":304,"./content/decks/en/what_are_character_strengths/images/cover.png":306,"./content/decks/en/what_are_cryptocoins/images/cover.png":308,"./content/decks/en/what_are_life_skills/images/cover.png":310,"./content/decks/en/what_are_xenobots/images/cover.png":312,"./content/decks/en/what_is_3d_printing/images/cover.png":314,"./content/decks/en/what_is_4d_printing/images/cover.png":316,"./content/decks/en/what_is_ar/images/cover.png":318,"./content/decks/en/what_is_bitcoin/images/cover.png":320,"./content/decks/en/what_is_blockchain_ledger/images/cover.png":322,"./content/decks/en/what_is_cbdc/images/cover.png":324,"./content/decks/en/what_is_collaboration_overload/images/cover.png":326,"./content/decks/en/what_is_deepfake/images/cover.png":328,"./content/decks/en/what_is_eskin/images/cover.png":330,"./content/decks/en/what_is_hydroponics/images/cover.png":332,"./content/decks/en/what_is_hyperloop/images/cover.png":334,"./content/decks/en/what_is_lidar/images/cover.png":336,"./content/decks/en/what_is_lifi/images/cover.png":338,"./content/decks/en/what_is_meme/images/cover.png":340,"./content/decks/en/what_is_metaverse/images/cover.png":342,"./content/decks/en/what_is_nft/images/cover.png":344,"./content/decks/en/what_is_quad/images/cover.png":346,"./content/decks/en/what_is_robotic_surgery/images/cover.png":348,"./content/decks/en/what_is_self_awareness/images/cover.png":350,"./content/decks/en/what_is_sleep_apnea/images/cover.png":352,"./content/decks/en/what_is_vr/images/cover.png":354,"./content/decks/en/what_is_web3/images/cover.png":356,"./content/decks/en/what_is_wordle/images/cover.png":358,"./content/decks/en/womens_day/images/cover.png":360};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=c,e.exports=r,r.id=603},604:function(e,t,n){},615:function(e,t,n){"use strict";n(604)},639:function(e,t,n){"use strict";n.r(t);var r=n(5),c=(n(32),n(33),n(41),n(27),n(171),n(131),n(40),n(63),n(84),n(597)),o=n(598),d={components:{CardError:c.default,CardRating:o.default},head:function(){return{title:this.deck.title,meta:[{"http-equiv":"Cache-Control",content:"no-cache, no-store, must-revalidate"},{"http-equiv":"Pragma",content:"no-cache"},{"http-equiv":"Expires",content:"-1"},{hid:"description",name:"description",content:this.deck.description},{hid:"og:title",property:"og:title",content:this.deck.title},{hid:"og:description",property:"og:description",content:this.deck.description},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:image",property:"og:image",content:"https://kno.cards"+n(602)("./content".concat(this.deck.dir,"/images/preview.png"))},{hid:"og:url",property:"og:url",content:"https://kno.cards"+this.$route.fullPath},{hid:"twitter:card",property:"twitter:card",content:"summary"},{hid:"twitter:site",property:"twitter:site",content:"@knocards"},{hid:"twitter:creator",property:"twitter:creator",content:"@rmr"},{hid:"twitter:image",property:"twitter:image",content:"https://kno.cards"+n(603)("./content".concat(this.deck.dir,"/images/cover.png"))}]}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,i,q,o,d,m,l,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,r=e.params,e.app,e.route,e.redirect,t.next=3,n("decks",e.store.state.language,r.deck,"content").fetch();case 3:for(c=t.sent,i=0;i<c.cards.length;i++)q=c.cards[i].q,q.split(/\r\n|\r|\n/).length>3?c.cards[i].showQ=!1:c.cards[i].showQ=!0;if(o=[],c.related)for(d=0;d<c.related.length;d++)m=c.dir.split("/").slice(0,-1).join("/")+"/",o.push({dir:m,id:c.related[d].id});if(l=[],c.links)for(v=0;v<c.links.length;v++)l.push({url:c.links[v].url,title:c.links[v].title});return t.abrupt("return",{deck:c,related:o,links:l});case 10:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=window.innerHeight;document.getElementsByClassName("main-grid")[0].style.height="".concat(e,"px"),this.$store.dispatch("checkVer","1"),this.$store.dispatch("initialise"),this.header={dir:this.deck.dir,id:this.deck.id,title:this.deck.title,category:this.deck.category,level:this.deck.level};var t=document.querySelector(".card");t.style.transform="rotateY(-0.1turn)",setTimeout((function(){t.style.transform="rotateY(0turn)"}),1e3)},data:function(){return{t:-1,turn:0,delayTime:500,header:{dir:"",title:"",category:"",level:""},qstr:"",astr:"",showq:!1,menu:!1,error:!1,rating:!1,timeDelay:5,hasRated:!1,menuTimeout:null}},methods:{showMenu:function(){var e=this;this.menu=!0,this.menuTimeout=setTimeout((function(){e.hideMenu()}),1e3*this.timeDelay)},hideMenu:function(){this.menu=!1},showError:function(){this.resetMenu(),this.error=!0},showRating:function(){this.resetMenu(),this.rating=!0},shareDeck:function(){var e=this;navigator.share?navigator.share({title:this.$store.getters.t("share_title"),text:this.$store.getters.t("share_message"),url:window.location.href}).then((function(){e.resetMenu(),console.log("Thanks for sharing!")})).catch((function(t){e.resetMenu(),console.log("Couldn't share because of",t.message)})):(this.resetMenu(),console.log("does not support share"))},setRate:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log(e),t.resetMenu(),!e){n.next=14;break}return n.prev=3,r="https://asia-south1-flashback-cards.cloudfunctions.net/kno_ratings?id=".concat(t.deck.id,"&rating=").concat(e),console.log(r),n.next=8,t.$http.$get(r);case 8:t.hasRated=!0,n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[3,11]])})))()},submitError:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.resetMenu(),!e){n.next=12;break}return n.prev=2,r="id=".concat(t.deck.id,"&index=").concat(t.t+1,"&error=").concat(e),c="https://asia-south1-flashback-cards.cloudfunctions.net/kno_errors?".concat(r),n.next=7,t.$http.$get(c);case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()},resetMenu:function(){clearTimeout(this.menuTimeout),this.menu=!1,this.error=!1,this.rating=!1},flipAndIncrement:function(){this.resetMenu();var e=document.querySelector(".card");if(this.turn-=.5,e.style.transform="rotateY("+this.turn+"turn)",this.t<this.deck.cards.length){var t=this;setTimeout((function(){t.t++,t.t<t.deck.cards.length&&(t.qstr=t.deck.cards[t.t].q,t.astr=t.deck.cards[t.t].a,t.showQ=t.deck.cards[t.t].showQ)}),this.delayTime)}},reverseAndDecrement:function(){this.resetMenu();var e=document.querySelector(".card");this.turn+=.5,e.style.transform="rotateY("+this.turn+"turn)";var t=this;setTimeout((function(){t.t--,t.t>=0&&(t.qstr=t.deck.cards[t.t].q,t.astr=t.deck.cards[t.t].a,t.showQ=t.deck.cards[t.t].showQ)}),this.delayTime)}}},m=(n(615),n(39)),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-grid"},[n("div",{staticClass:"top"},[n("NuxtLink",{attrs:{to:"/"}},[n("KnoLogo")],1)],1),e._v(" "),n("div",{staticClass:"middle"},[-1==e.t?n("div",{staticClass:"dummy-row"}):e._e(),e._v(" "),e.menu||-1==e.t||e.error||e.rating?e._e():n("div",{staticClass:"menu-row",on:{click:e.showMenu}},[e._m(0)]),e._v(" "),e.menu?n("div",{staticClass:"menu-items-row"},[e.t<e.deck.cards.length?n("div",{on:{click:e.showError}},[n("span",{staticClass:"menu-icon material-icons"},[e._v("warning_amber")])]):e._e(),e._v(" "),e.hasRated?e._e():n("div",{on:{click:e.showRating}},[n("span",{staticClass:"menu-icon material-icons"},[e._v("star_outline")])]),e._v(" "),n("div",[e.$device.isMobile?n("span",{staticClass:"menu-icon material-icons",on:{click:e.shareDeck}},[e._v("share")]):e._e()])]):e._e(),e._v(" "),e.error?n("card-error",{staticClass:"error-row",on:{error:e.submitError}}):e._e(),e._v(" "),e.rating?n("card-rating",{staticClass:"rating-row",on:{rated:e.setRate}}):e._e(),e._v(" "),n("div",{staticClass:"square"},[n("div",{staticClass:"card"},[-1==e.t?[n("card-cover",{directives:[{name:"hammer-touch",rawName:"v-hammer-touch:swipeleft",value:e.flipAndIncrement,expression:"flipAndIncrement",arg:"swipeleft"}],staticClass:"cardface",attrs:{header:e.header}}),e._v(" "),n("card-cover-back",{staticClass:"cardface card-b"})]:e.t>=e.deck.cards.length?[n("lazy-card-summary",{directives:[{name:"hammer-touch",rawName:"v-hammer-touch:swiperight",value:e.reverseAndDecrement,expression:"reverseAndDecrement",arg:"swiperight"}],staticClass:"cardface",attrs:{header:e.header,related:e.related,links:e.links}}),e._v(" "),n("lazy-card-summary",{directives:[{name:"hammer-touch",rawName:"v-hammer-touch:swiperight",value:e.reverseAndDecrement,expression:"reverseAndDecrement",arg:"swiperight"}],staticClass:"cardface card-b",attrs:{header:e.header,related:e.related,links:e.links}})]:[n("lazy-card-content",{directives:[{name:"hammer-touch",rawName:"v-hammer-touch:swipeleft",value:e.flipAndIncrement,expression:"flipAndIncrement",arg:"swipeleft"},{name:"hammer-touch",rawName:"v-hammer-touch:swiperight",value:e.reverseAndDecrement,expression:"reverseAndDecrement",arg:"swiperight"},{name:"hammer-touch",rawName:"v-hammer-touch:tap",value:e.resetMenu,expression:"resetMenu",arg:"tap"}],staticClass:"cardface",attrs:{header:e.header,index:e.t,count:e.deck.cards.length,question:e.qstr,answer:e.astr,showQ:e.showQ}}),e._v(" "),n("lazy-card-content",{directives:[{name:"hammer-touch",rawName:"v-hammer-touch:swipeleft",value:e.flipAndIncrement,expression:"flipAndIncrement",arg:"swipeleft"},{name:"hammer-touch",rawName:"v-hammer-touch:swiperight",value:e.reverseAndDecrement,expression:"reverseAndDecrement",arg:"swiperight"},{name:"hammer-touch",rawName:"v-hammer-touch:tap",value:e.resetMenu,expression:"resetMenu",arg:"tap"}],staticClass:"cardface card-b",attrs:{header:e.header,index:e.t,count:e.deck.cards.length,question:e.qstr,answer:e.astr,showQ:e.showQ}})]],2)]),e._v(" "),n("div")],1),e._v(" "),n("div",{staticClass:"bottom"},[n("div",{staticClass:"close-row"},[n("NuxtLink",{attrs:{to:"/"}},[n("span",{staticClass:"menu-icon material-icons"},[e._v("close")])])],1),e._v(" "),n("div",{staticClass:"copyright"},[e._v("© RmR, 2022")])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"menu-icon material-icons"},[e._v("menu")])])}],!1,null,"2bb0f579",null);t.default=component.exports;installComponents(component,{KnoLogo:n(362).default,CardError:n(597).default,CardRating:n(598).default,CardCover:n(599).default,CardCoverBack:n(600).default})}}]);