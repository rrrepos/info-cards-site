(window.webpackJsonp=window.webpackJsonp||[]).push([[13,7,9,12],{631:function(t,e,r){},632:function(t,e,r){"use strict";r.r(e);r(243);var n={props:{header:{type:Object,required:!1},index:{type:Number,required:!1},count:{type:Number,required:!1}}},l=(r(633),r(39)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("div",{staticClass:"info"},[r("div",{staticClass:"title"},[t._v(t._s(t.header.title))]),t._v(" "),r("div",{staticClass:"subtitle"},[t._v(t._s(t.header.category)+" · "+t._s(t.header.level))])]),t._v(" "),r("div"),t._v(" "),t.index>=0?r("div",{staticClass:"count"},[r("span",[r("strong",[t._v(t._s(t.index+1))]),t._v(" / "+t._s(t.count))])]):t._e()])}),[],!1,null,"317a5020",null);e.default=component.exports},633:function(t,e,r){"use strict";r(631)},638:function(t,e,r){},639:function(t,e,r){},651:function(t,e,r){"use strict";r(638)},652:function(t,e,r){"use strict";r(639)},653:function(t,e,r){"use strict";r.r(e);var n={props:{related:{type:Array,required:!0}}},l=(r(652),r(39)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"related-container"},[r("div",{staticClass:"title"},[t._v("\n    "+t._s(this.$store.getters.t("related_decks"))+"\n  ")]),t._v(" "),r("div",{staticClass:"list"},t._l(t.related,(function(t,e){return r("a",{key:e,attrs:{href:"/decks/"+t.id}},[r("v-img",{staticClass:"image",attrs:{src:t.dir+t.id+"/images/cover.png",alt:t.id}})],1)})),0)])}),[],!1,null,"20150c59",null);e.default=component.exports;installComponents(component,{VImg:r(170).default})},654:function(t,e,r){"use strict";r.r(e);var n={props:{links:{type:Array,required:!0}}},l=(r(651),r(39)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"links-container"},[r("div",{staticClass:"title"},[t._v("\n    "+t._s(this.$store.getters.t("deck_links"))+"\n  ")]),t._v(" "),r("div",{staticClass:"list"},t._l(t.links,(function(e,n){return r("a",{key:n,attrs:{href:e.url,target:"_blank"}},[t._v("\n      "+t._s(e.title)+"\n    ")])})),0)])}),[],!1,null,"754ccbf0",null);e.default=component.exports},663:function(t,e,r){},675:function(t,e,r){"use strict";r(663)},699:function(t,e,r){"use strict";r.r(e);var n={props:{header:{type:Object,required:!1},related:{type:Array,required:!0},links:{type:Array,required:!0}}},l=(r(675),r(39)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"summary-container"},[r("card-header",{staticClass:"card-header",attrs:{header:t.header}}),t._v(" "),r("div"),t._v(" "),0!=t.links.length?r("card-links",{staticClass:"summary-links",attrs:{links:t.links}}):t._e(),t._v(" "),0!=t.related.length?r("card-related-to",{staticClass:"summary-relatedto",attrs:{related:t.related}}):t._e()],1)}),[],!1,null,"4c2b50e2",null);e.default=component.exports;installComponents(component,{CardHeader:r(632).default,CardLinks:r(654).default,CardRelatedTo:r(653).default})}}]);