(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{352:function(e,t,n){e.exports=n.p+"img/preview.97fd074.png"},353:function(e,t,n){e.exports=n.p+"img/preview.d1c04a5.png"},354:function(e,t,n){e.exports=n.p+"img/preview.38ff760.png"},355:function(e,t,n){e.exports=n.p+"img/preview.54554da.png"},356:function(e,t,n){var map={"./content/decks/en/covid_and_variants/content.yaml":357,"./content/decks/en/covid_and_variants/images/cover.png":358,"./content/decks/en/covid_and_variants/images/preview.png":352,"./content/decks/en/what_is_bitcoin/content.yaml":359,"./content/decks/en/what_is_bitcoin/images/cover.png":360,"./content/decks/en/what_is_bitcoin/images/preview.png":353,"./content/decks/en/what_is_blockchain_ledger/content.yaml":361,"./content/decks/en/what_is_blockchain_ledger/images/cover.png":362,"./content/decks/en/what_is_blockchain_ledger/images/preview.png":354,"./content/decks/en/what_is_nft/content.yaml":363,"./content/decks/en/what_is_nft/images/cover.png":364,"./content/decks/en/what_is_nft/images/preview.png":355};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=c,e.exports=r,r.id=356},357:function(e,t){throw new Error("Module parse failed: Unexpected token (2:13)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| id: covid_and_variants\n> title: Covid and its Variants\n| description: General info about covid and its variants\n| category: Health")},358:function(e,t,n){e.exports=n.p+"img/cover.14800e4.png"},359:function(e,t){throw new Error("Module parse failed: Unexpected token (2:12)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| id: what_is_bitcoin\n> title: What is Bitcoin\n| description: A brief overview for everyone\n| category: Technical")},360:function(e,t,n){e.exports=n.p+"img/cover.efc65eb.png"},361:function(e,t){throw new Error("Module parse failed: Unexpected token (2:12)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| id: what_is_blockchain_ledger\n> title: What is Blockchain Ledger\n| description: An overview for everyone\n| category: Technical")},362:function(e,t,n){e.exports=n.p+"img/cover.da1a8f3.png"},363:function(e,t){throw new Error("Module parse failed: Unexpected token (2:12)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| id: what_is_nft\n> title: What is NFT\n| description: An overview for everyone\n| category: Technical")},364:function(e,t,n){e.exports=n.p+"img/cover.bc2d97d.png"},365:function(e,t,n){"use strict";n.r(t);var r={props:{src:{type:String,required:!0},alt:{type:String,required:!0}},methods:{imgSrc:function(){try{return n(356)("./content".concat(this.src))}catch(e){return null}}}},c=n(63),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("img",{staticStyle:{width:"100%",height:"100%","object-fit":"contain"},attrs:{src:e.imgSrc(),alt:e.alt}})])}),[],!1,null,null,null);t.default=component.exports},366:function(e,t,n){e.exports=n.p+"img/kno_64x64.4600fb2.png"},367:function(e,t,n){},371:function(e,t,n){e.exports=n.p+"img/yay.a6a2df3.svg"},372:function(e,t,n){var map={"./content/decks/en/covid_and_variants/images/preview.png":352,"./content/decks/en/what_is_bitcoin/images/preview.png":353,"./content/decks/en/what_is_blockchain_ledger/images/preview.png":354,"./content/decks/en/what_is_nft/images/preview.png":355};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=c,e.exports=r,r.id=372},373:function(e,t,n){"use strict";n(367)},390:function(e,t,n){"use strict";n.r(t);var r=n(6),c=(n(42),n(24),n(37),n(91),n(33),n(22),n(66),n(64),{head:function(){return{title:this.deck.title,meta:[{hid:"description",name:"description",content:this.deck.description},{hid:"og:title",property:"og:title",content:this.deck.title},{hid:"og:description",property:"og:description",content:this.deck.description},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:image",property:"og:image",content:"https://kno.cards"+n(372)("./content".concat(this.deck.dir,"/images/preview.png"))},{hid:"og:url",property:"og:url",content:"https://rrrepos.github.io/info-cards-site"+this.$route.fullPath}]}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,o,d,i,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,r=e.params,c=e.app,e.route,e.redirect,t.next=3,n("decks",c.i18n.locale,r.deck,"content").fetch();case 3:for(o=t.sent,d=[],i=0;i<o.related.length;i++)l=o.dir.split("/").slice(0,-1).join("/")+"/",d.push({dir:l,id:o.related[i].id});return t.abrupt("return",{deck:o,related:d});case 7:case"end":return t.stop()}}),t)})))()},data:function(){return{t:-1,isfront:!0,counter:0}},methods:{flip:function(e,t){console.log("flip:",this.t);var n=t.currentTarget;this.t<this.deck.cards.length&&(console.log("flip rotate"),this.counter+=180,n.style.transform="rotateX("+this.counter+"deg)",this.isfront=!this.isfront)},reverse:function(e,t){console.log("reverse:",this.t);var n=t.currentTarget;this.t>0&&(console.log("reverse rotate"),this.counter-=180,n.style.transform="rotateX("+this.counter+"deg)",this.isfront=!this.isfront)},increment:function(e,t){if(console.log("increment:",this.t),this.t<this.deck.cards.length){var n=this;setTimeout((function(){console.log("increment timeout"),n.t++}),750)}},decrement:function(e,t){if(console.log("decrement",this.t),this.t>0){var n=this;setTimeout((function(){console.log("decrement timeout"),n.t--}),750)}}}}),o=(n(373),n(63)),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main-grid"},[r("div",{staticClass:"top"},[r("NuxtLink",{attrs:{to:"/"}},[r("img",{staticClass:"logo",attrs:{src:n(366)}})])],1),e._v(" "),r("div",{staticClass:"middle"},[r("div",{staticClass:"square"},[r("div",{directives:[{name:"touch",rawName:"v-touch:tap",value:e.flip,expression:"flip",arg:"tap"},{name:"touch",rawName:"v-touch:swipe.top",value:e.flip,expression:"flip",arg:"swipe",modifiers:{top:!0}},{name:"touch",rawName:"v-touch:swipe.bottom",value:e.reverse,expression:"reverse",arg:"swipe",modifiers:{bottom:!0}}],staticClass:"card"},[r("div",{directives:[{name:"touch",rawName:"v-touch:tap",value:e.increment,expression:"increment",arg:"tap"},{name:"touch",rawName:"v-touch:swipe.top",value:e.increment,expression:"increment",arg:"swipe",modifiers:{top:!0}},{name:"touch",rawName:"v-touch:swipe.bottom",value:e.decrement,expression:"decrement",arg:"swipe",modifiers:{bottom:!0}}],staticClass:"cardface card-f"},[-1==e.t?[r("div"),e._v(" "),r("v-img",{attrs:{src:e.deck.dir+"/images/cover.png",alt:e.deck.title}}),e._v(" "),r("div")]:e.t==e.deck.cards.length?[r("div")]:[r("div",{staticClass:"card-header"},[r("div",{staticClass:"card-info"},[r("div",{staticClass:"card-title"},[e._v(e._s(e.deck.title))]),e._v(" "),r("div",{staticClass:"card-subtitle"},[e._v("\n                  "+e._s(e.deck.category)+" · "+e._s(e.deck.level)+"\n                ")])]),e._v(" "),r("div"),e._v(" "),r("div",{staticClass:"card-count"},[r("strong",[e._v(e._s(e.t+1))]),e._v(" / "+e._s(e.deck.cards.length)+"\n              ")])]),e._v(" "),r("div",{staticClass:"card-content"},[r("div",{staticClass:"card-smaller",domProps:{innerHTML:e._s(e.$md.render(e.deck.cards[e.t].q))}}),e._v(" "),r("div",{staticClass:"card-regular",domProps:{innerHTML:e._s(e.$md.render(e.deck.cards[e.t].a))}})]),e._v(" "),r("div")]],2),e._v(" "),r("div",{staticClass:"cardface card-b"},[e.t==e.deck.cards.length?[e._m(0),e._v(" "),r("img",{staticClass:"card-end-image",attrs:{src:n(371),alt:"yaydasfa"}}),e._v(" "),r("div",{staticClass:"card-end-related"},[r("div",{staticClass:"card-end-related-title"},[e._v("Related decks:")]),e._v(" "),r("div",{staticClass:"card-end-related-list"},[e._l(e.related,(function(e,t){return r("a",{key:t,attrs:{href:"/decks/"+e.id}},[r("v-img",{staticClass:"card-end-related-deck",attrs:{src:e.dir+e.id+"/images/cover.png",alt:e.id}})],1)})),e._v(" "),r("div",{staticClass:"card-end-related-deck home-deck"},[r("NuxtLink",{attrs:{to:"/"}},[e._v("Discover other decks")])],1)],2)])]:-1===e.t?[r("div")]:[r("div",{staticClass:"card-header"},[r("div",{staticClass:"card-info"},[r("div",{staticClass:"card-title"},[e._v(e._s(e.deck.title))]),e._v(" "),r("div",{staticClass:"card-subtitle"},[e._v("\n                  "+e._s(e.deck.category)+" · "+e._s(e.deck.level)+"\n                ")])]),e._v(" "),r("div"),e._v(" "),r("div",{staticClass:"card-count"},[r("strong",[e._v(e._s(e.t+1))]),e._v(" / "+e._s(e.deck.cards.length)+"\n              ")])]),e._v(" "),r("div",{staticClass:"card-regular",domProps:{innerHTML:e._s(e.$md.render(e.deck.cards[e.t].q))}}),e._v(" "),r("div")]],2)])])]),e._v(" "),r("div",{staticClass:"bottom"},[r("div",{staticClass:"menu"},[r("div",{staticClass:"menu-item"},[r("NuxtLink",{attrs:{to:"/"}},[r("span",{staticClass:"material-icons"},[e._v("close")])])],1)]),e._v(" "),r("div",{staticClass:"copyright"},[e._v("© RmR, 2022")])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-end-menu"},[n("span",{staticClass:"material-icons"},[e._v("share")])])}],!1,null,"6ade3f66",null);t.default=component.exports;installComponents(component,{VImg:n(365).default})}}]);