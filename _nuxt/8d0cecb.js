(window.webpackJsonp=window.webpackJsonp||[]).push([[13,3,4,5],{518:function(e,t,n){},519:function(e,t,n){"use strict";n.r(t);n(243);var r={props:{header:{type:Object,required:!1},index:{type:Number,required:!1},count:{type:Number,required:!1}}},c=(n(520),n(39)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"info"},[n("div",{staticClass:"title"},[e._v(e._s(e.header.title))]),e._v(" "),n("div",{staticClass:"subtitle"},[e._v(e._s(e.header.category)+" · "+e._s(e.header.level))])]),e._v(" "),n("div"),e._v(" "),e.index>=0?n("div",{staticClass:"count"},[n("span",[n("strong",[e._v(e._s(e.index+1))]),e._v(" / "+e._s(e.count))])]):e._e()])}),[],!1,null,"5ad0902e",null);t.default=component.exports},520:function(e,t,n){"use strict";n(518)},521:function(e,t,n){},522:function(e,t,n){},526:function(e,t,n){"use strict";n(521)},527:function(e,t,n){"use strict";n(522)},532:function(e,t,n){},539:function(e,t,n){"use strict";n.r(t);n(63);var r={props:{header:{type:Object,required:!1}},mounted:function(){var e=this,t=this;setTimeout((function(){t.message=e.$store.getters.t("swipe_left")}),5e3)},data:function(){return{message:""}},methods:{}},c=(n(526),n(39)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("v-img",{staticClass:"image",attrs:{src:e.header.dir+"/images/cover.png",alt:e.header.title}}),e._v(" "),n("div",{staticClass:"action-row"},[e._v("\n    "+e._s(e.message)+"\n  ")])],1)}),[],!1,null,"52e553df",null);t.default=component.exports;installComponents(component,{VImg:n(170).default})},540:function(e,t,n){"use strict";n.r(t);n(243);var r={components:{CardHeader:n(519).default},props:{header:{type:Object,required:!0},index:{type:Number,required:!1},count:{type:Number,required:!1},isRepeat:{type:Boolean,required:!1}}},c=(n(527),n(39)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("card-header",{attrs:{header:e.header,index:e.index,count:e.count}})],1)}),[],!1,null,"acb56a82",null);t.default=component.exports;installComponents(component,{CardHeader:n(519).default})},543:function(e,t,n){var map={"./content/decks/en/24_character_strengths/images/preview.png":245,"./content/decks/en/4th_industrial_revolution/images/preview.png":246,"./content/decks/en/about_kno/images/preview.png":247,"./content/decks/en/carbon_footprint/images/preview.png":248,"./content/decks/en/cop_26/images/preview.png":249,"./content/decks/en/covid_and_variants/images/preview.png":250,"./content/decks/en/digital_twin/images/preview.png":251,"./content/decks/en/first_pig_heart_transplant/images/preview.png":252,"./content/decks/en/gene_editing/images/preview.png":253,"./content/decks/en/greenhouse_gases/images/preview.png":254,"./content/decks/en/iot/images/preview.png":255,"./content/decks/en/james_webb_space_telescope/images/preview.png":256,"./content/decks/en/lab_made_dairy_products/images/preview.png":257,"./content/decks/en/lab_made_meat/images/preview.png":258,"./content/decks/en/malaria_vaccine/images/preview.png":259,"./content/decks/en/popular_internet_slangs/images/preview.png":260,"./content/decks/en/proxima_d/images/preview.png":261,"./content/decks/en/quantum_computers/images/preview.png":262,"./content/decks/en/self_fertilizing_crops/images/preview.png":263,"./content/decks/en/self_healing_concrete/images/preview.png":264,"./content/decks/en/space_tourism/images/preview.png":265,"./content/decks/en/what_are_character_strengths/images/preview.png":266,"./content/decks/en/what_are_life_skills/images/preview.png":267,"./content/decks/en/what_is_3d_printing/images/preview.png":268,"./content/decks/en/what_is_ar/images/preview.png":269,"./content/decks/en/what_is_bitcoin/images/preview.png":270,"./content/decks/en/what_is_blockchain_ledger/images/preview.png":271,"./content/decks/en/what_is_cbdc/images/preview.png":272,"./content/decks/en/what_is_deepfake/images/preview.png":273,"./content/decks/en/what_is_hyperloop/images/preview.png":274,"./content/decks/en/what_is_meme/images/preview.png":275,"./content/decks/en/what_is_metaverse/images/preview.png":276,"./content/decks/en/what_is_nft/images/preview.png":277,"./content/decks/en/what_is_quad/images/preview.png":278,"./content/decks/en/what_is_robotic_surgery/images/preview.png":279,"./content/decks/en/what_is_vr/images/preview.png":280,"./content/decks/en/what_is_web3/images/preview.png":281,"./content/decks/en/what_is_wordle/images/preview.png":282};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=c,e.exports=r,r.id=543},544:function(e,t,n){"use strict";n(532)},564:function(e,t,n){"use strict";n.r(t);var r=n(5),c=(n(32),n(33),n(42),n(27),n(172),n(131),n(40),n(63),{head:function(){return{title:this.deck.title,meta:[{"http-equiv":"Cache-Control",content:"no-cache, no-store, must-revalidate"},{"http-equiv":"Pragma",content:"no-cache"},{"http-equiv":"Expires",content:"-1"},{hid:"description",name:"description",content:this.deck.description},{hid:"og:title",property:"og:title",content:this.deck.title},{hid:"og:description",property:"og:description",content:this.deck.description},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:image",property:"og:image",content:"https://kno.cards"+n(543)("./content".concat(this.deck.dir,"/images/preview.png"))},{hid:"og:url",property:"og:url",content:"https://kno.cards"+this.$route.fullPath}]}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,i,q,o,d,l,h,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,r=e.params,e.app,e.route,e.redirect,t.next=3,n("decks",e.store.state.language,r.deck,"content").fetch();case 3:for(c=t.sent,i=0;i<c.cards.length;i++)q=c.cards[i].q,q.split(/\r\n|\r|\n/).length>2?c.cards[i].showQ=!1:c.cards[i].showQ=!0;if(o=[],c.related)for(d=0;d<c.related.length;d++)l=c.dir.split("/").slice(0,-1).join("/")+"/",o.push({dir:l,id:c.related[d].id});if(h=[],c.links)for(m=0;m<c.links.length;m++)h.push({url:c.links[m].url,title:c.links[m].title});return t.abrupt("return",{deck:c,related:o,links:h});case 10:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=window.innerHeight;document.getElementsByClassName("main-grid")[0].style.height="".concat(e,"px"),this.$store.dispatch("checkVer","1"),this.$store.dispatch("initialise"),this.header={dir:this.deck.dir,title:this.deck.title,category:this.deck.category,level:this.deck.level};var t=document.querySelector(".card");t.style.transform="rotateY(-30deg)",setTimeout((function(){t.style.transform="rotateY(00deg)"}),1e3)},data:function(){return{t:-1,degree:0,header:{dir:"",title:"",course:"",subject:""},qstr:"",astr:"",showq:!1}},methods:{flip:function(){if(this.t<this.deck.cards.length){var e=document.querySelector(".card");this.degree-=180,e.style.transform="rotateY("+this.degree+"deg)"}},flipAndIncrement:function(){var e=document.querySelector(".card");this.degree-=180,e.style.transform="rotateY("+this.degree+"deg)";var t=this;setTimeout((function(){t.t++,t.t<t.deck.cards.length&&(t.qstr=t.deck.cards[t.t].q,t.astr=t.deck.cards[t.t].a,t.showQ=t.deck.cards[t.t].showQ)}),500)},reverse:function(){if(this.t>=0){var e=document.querySelector(".card");this.degree+=180,e.style.transform="rotateY("+this.degree+"deg)"}},reverseAndDecrement:function(){var e=document.querySelector(".card");this.degree+=180,e.style.transform="rotateY("+this.degree+"deg)";var t=this;setTimeout((function(){t.t--,t.t>=0&&(t.qstr=t.deck.cards[t.t].q,t.astr=t.deck.cards[t.t].a,t.showQ=t.deck.cards[t.t].showQ)}),500)}}}),o=(n(544),n(39)),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-grid"},[n("div",{staticClass:"top"},[n("NuxtLink",{attrs:{to:"/"}},[n("KnoLogo")],1)],1),e._v(" "),n("div",{staticClass:"middle"},[n("div",{staticClass:"square"},[n("div",{staticClass:"card"},[-1==e.t?[n("card-cover",{directives:[{name:"hammer-touch",rawName:"v-hammer-touch:swipeleft",value:e.flipAndIncrement,expression:"flipAndIncrement",arg:"swipeleft"}],staticClass:"cardface",attrs:{header:e.header}}),e._v(" "),n("card-cover-back",{staticClass:"cardface card-b",attrs:{header:e.header,index:e.t,count:e.deck.cards.length}})]:e.t>=e.deck.cards.length?[n("lazy-card-summary",{directives:[{name:"hammer-touch",rawName:"v-hammer-touch:swiperight",value:e.reverseAndDecrement,expression:"reverseAndDecrement",arg:"swiperight"}],staticClass:"cardface card-b",attrs:{header:e.header,index:e.t,count:e.deck.cards.length,related:e.related,links:e.links}}),e._v(" "),n("lazy-card-summary-back",{staticClass:"cardface",attrs:{header:e.header}})]:[n("lazy-card-question",{directives:[{name:"hammer-touch",rawName:"v-hammer-touch:swipeleft",value:e.flip,expression:"flip",arg:"swipeleft"},{name:"hammer-touch",rawName:"v-hammer-touch:swiperight",value:e.reverseAndDecrement,expression:"reverseAndDecrement",arg:"swiperight"}],ref:"question",staticClass:"cardface card-b",attrs:{header:e.header,index:e.t,count:e.deck.cards.length,question:e.qstr}}),e._v(" "),n("lazy-card-answer",{directives:[{name:"hammer-touch",rawName:"v-hammer-touch:swipeleft",value:e.flipAndIncrement,expression:"flipAndIncrement",arg:"swipeleft"},{name:"hammer-touch",rawName:"v-hammer-touch:swiperight",value:e.reverse,expression:"reverse",arg:"swiperight"}],ref:"answer",staticClass:"cardface",attrs:{header:e.header,index:e.t,count:e.deck.cards.length,question:e.qstr,answer:e.astr,showQ:e.showQ}})]],2)])]),e._v(" "),n("div",{staticClass:"bottom"},[n("div",{staticClass:"menu"},[n("div",{staticClass:"menu-item"},[n("NuxtLink",{attrs:{to:"/"}},[n("span",{staticClass:"material-icons"},[e._v("close")])])],1)]),e._v(" "),n("div",{staticClass:"copyright"},[e._v("© RmR, 2022")])])])}),[],!1,null,"9336f398",null);t.default=component.exports;installComponents(component,{KnoLogo:n(285).default,CardCover:n(539).default,CardCoverBack:n(540).default})}}]);