(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5,6,8,9],{536:function(t,e,r){},537:function(t,e,r){"use strict";r.r(e);r(243);var n={props:{header:{type:Object,required:!1},index:{type:Number,required:!1},count:{type:Number,required:!1}}},c=(r(538),r(39)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("div",{staticClass:"info"},[r("div",{staticClass:"title"},[t._v(t._s(t.header.title))]),t._v(" "),r("div",{staticClass:"subtitle"},[t._v(t._s(t.header.category)+" · "+t._s(t.header.level))])]),t._v(" "),r("div"),t._v(" "),t.index>=0?r("div",{staticClass:"count"},[r("span",[r("strong",[t._v(t._s(t.index+1))]),t._v(" / "+t._s(t.count))])]):t._e()])}),[],!1,null,"5ad0902e",null);e.default=component.exports},538:function(t,e,r){"use strict";r(536)},541:function(t,e,r){},542:function(t,e,r){},543:function(t,e,r){},546:function(t,e,r){"use strict";r(541)},547:function(t,e,r){"use strict";r(542)},548:function(t,e,r){"use strict";r(543)},549:function(t,e,r){"use strict";r.r(e);var n={props:{related:{type:Array,required:!0}}},c=(r(548),r(39)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"related-container"},[r("div",{staticClass:"title"},[t._v("\n    "+t._s(this.$store.getters.t("related_decks"))+"\n  ")]),t._v(" "),r("div",{staticClass:"list"},t._l(t.related,(function(t,e){return r("a",{key:e,attrs:{href:"/decks/"+t.id}},[r("v-img",{staticClass:"image",attrs:{src:t.dir+t.id+"/images/cover.png",alt:t.id}})],1)})),0)])}),[],!1,null,"20150c59",null);e.default=component.exports;installComponents(component,{VImg:r(170).default})},554:function(t,e,r){},559:function(t,e,r){"use strict";r.r(e);var n={props:{links:{type:Array,required:!0}}},c=(r(546),r(39)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"links-container"},[r("div",{staticClass:"title"},[t._v("\n    "+t._s(this.$store.getters.t("deck_links"))+"\n  ")]),t._v(" "),r("div",{staticClass:"list"},t._l(t.links,(function(e,n){return r("a",{key:n,attrs:{href:e.url,target:"_blank"}},[t._v("\n      "+t._s(e.title)+"\n    ")])})),0)])}),[],!1,null,"754ccbf0",null);e.default=component.exports},560:function(t,e,r){"use strict";r.r(e);var n=r(5),c=(r(32),{methods:{setRating:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.$emit("rated",t);case 1:case"end":return r.stop()}}),r)})))()}}}),l=(r(547),r(39)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rating-container"},[r("div",{staticClass:"rating-title"},[t._v(t._s(this.$store.getters.t("rate_the_content")))]),t._v(" "),r("div",{staticClass:"ratings"},[r("div",{staticClass:"rating",on:{click:function(e){return t.setRating(1)}}},[r("div",{staticClass:"number"},[t._v("1")]),t._v(" "),r("div",{staticClass:"text"},[t._v(t._s(this.$store.getters.t("inaccurate")))])]),t._v(" "),r("div",{staticClass:"rating",on:{click:function(e){return t.setRating(2)}}},[r("div",{staticClass:"number"},[t._v("2")]),t._v(" "),r("div",{staticClass:"text"},[t._v(t._s(this.$store.getters.t("insufficient")))])]),t._v(" "),r("div",{staticClass:"rating",on:{click:function(e){return t.setRating(3)}}},[r("div",{staticClass:"number"},[t._v("3")]),t._v(" "),r("div",{staticClass:"text"},[t._v(t._s(this.$store.getters.t("excessive")))])]),t._v(" "),r("div",{staticClass:"rating",on:{click:function(e){return t.setRating(4)}}},[r("div",{staticClass:"number"},[t._v("4")]),t._v(" "),r("div",{staticClass:"text"},[t._v(t._s(this.$store.getters.t("perfect")))])])])])}),[],!1,null,"43e65fbb",null);e.default=component.exports},566:function(t,e,r){t.exports=r.p+"img/yay.a6a2df3.svg"},567:function(t,e,r){t.exports=r.p+"img/thanks.fd055ab.svg"},568:function(t,e,r){"use strict";r(554)},586:function(t,e,r){"use strict";r.r(e);r(243),r(84);var n=r(537),c=r(560),l=r(549),o={components:{CardHeader:n.default,CardRating:c.default,CardRelatedTo:l.default},props:{header:{type:Object,required:!1},index:{type:Number,required:!1},count:{type:Number,required:!1},isRepeat:{type:Boolean,required:!1},related:{type:Array,required:!0},links:{type:Array,required:!0}},data:function(){return{rating:1,ratingMode:!1,hasRated:!1}},methods:{toggleRatings:function(){this.hasRated||(this.ratingMode=!this.ratingMode)},setRate:function(t){if(this.toggleRatings(),!this.hasRated)try{"https://asia-south1-flashback-cards.cloudfunctions.net/kno_ratings?id=".concat(this.deck.id,"&rating=").concat(t);this.hasRated=!0}catch(t){console.log(t)}},share:function(){navigator.share&&navigator.share({title:this.$store.getters.t("share_title"),text:this.$store.getters.t("share_message"),url:window.location.href}).then((function(){console.log("Thanks for sharing!")})).catch((function(t){console.log("Couldn't share because of",t.message)}))}}},d=(r(568),r(39)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"summary-container"},[n("card-header",{attrs:{header:t.header,index:-1,count:t.count,isRepeat:t.isRepeat}}),t._v(" "),n("div",{staticClass:"summary-menu"},[t._m(0),t._v(" "),n("div",[n("span",{staticClass:"material-icons icon",on:{click:t.toggleRatings}},[t._v("star_rate")])]),t._v(" "),t.$device.isMobile?n("div",{on:{click:t.share}},[n("span",{staticClass:"material-icons icon"},[t._v("share")])]):t._e()]),t._v(" "),n("div",{staticClass:"summary-middle"},[1==t.ratingMode&&0==t.hasRated?n("lazy-card-rating",{on:{rated:t.setRate}}):t._e(),t._v(" "),0==t.ratingMode&&0==t.hasRated?n("img",{staticClass:"image",attrs:{draggable:"false",src:r(566),alt:"yay"}}):t._e(),t._v(" "),0==t.ratingMode&&1==t.hasRated?n("img",{staticClass:"image",attrs:{draggable:"false",src:r(567),alt:"yay"}}):t._e()],1),t._v(" "),t.ratingMode?t._e():n("div",{staticClass:"summary-end"},[0!=t.related.length?n("card-related-to",{attrs:{related:t.related}}):t._e(),t._v(" "),0!=t.links.length?n("card-links",{attrs:{links:t.links}}):t._e()],1)],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a",{attrs:{href:"https://forms.gle/8F1Sjmyx1BXaQFnRA",target:"_blank"}},[r("span",{staticClass:"material-icons icon"},[t._v("report_problem")])])])}],!1,null,"527c9e5b",null);e.default=component.exports;installComponents(component,{CardHeader:r(537).default,CardRelatedTo:r(549).default,CardLinks:r(559).default})}}]);