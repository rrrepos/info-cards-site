(window.webpackJsonp=window.webpackJsonp||[]).push([[13,7,9,12],{739:function(t,e,r){},740:function(t,e,r){"use strict";r.r(e);r(243);var n={props:{header:{type:Object,required:!1},index:{type:Number,required:!1},count:{type:Number,required:!1}}},l=(r(741),r(39)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("div",{staticClass:"info"},[r("div",{staticClass:"title"},[t._v(t._s(t.header.title))]),t._v(" "),r("div",{staticClass:"subtitle"},[t._v(t._s(t.header.category)+" · "+t._s(t.header.level))])]),t._v(" "),r("div"),t._v(" "),t.index>=0?r("div",{staticClass:"count"},[r("span",[r("strong",[t._v(t._s(t.index+1))]),t._v(" / "+t._s(t.count))])]):t._e()])}),[],!1,null,"317a5020",null);e.default=component.exports},741:function(t,e,r){"use strict";r(739)},744:function(t,e,r){},745:function(t,e,r){},752:function(t,e,r){"use strict";r(744)},753:function(t,e,r){"use strict";r(745)},754:function(t,e,r){"use strict";r.r(e);var n={props:{related:{type:Array,required:!0}}},l=(r(753),r(39)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"related-container"},[r("div",{staticClass:"title"},[t._v("\n    "+t._s(this.$store.getters.t("related_decks"))+"\n  ")]),t._v(" "),r("div",{staticClass:"list"},t._l(t.related,(function(t,e){return r("a",{key:e,attrs:{href:"/decks/"+t.id}},[r("v-img",{staticClass:"image",attrs:{src:t.dir+t.id+"/images/cover.png",alt:t.id}})],1)})),0)])}),[],!1,null,"20150c59",null);e.default=component.exports;installComponents(component,{VImg:r(170).default})},757:function(t,e,r){"use strict";r.r(e);var n={props:{links:{type:Array,required:!0}}},l=(r(752),r(39)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"links-container"},[r("div",{staticClass:"title"},[t._v("\n    "+t._s(this.$store.getters.t("deck_links"))+"\n  ")]),t._v(" "),r("div",{staticClass:"list"},t._l(t.links,(function(e,n){return r("a",{key:n,attrs:{href:e.url,target:"_blank"}},[t._v("\n      "+t._s(e.title)+"\n    ")])})),0)])}),[],!1,null,"754ccbf0",null);e.default=component.exports},770:function(t,e,r){},788:function(t,e,r){"use strict";r(770)},813:function(t,e,r){"use strict";r.r(e);var n={props:{header:{type:Object,required:!1},related:{type:Array,required:!0},links:{type:Array,required:!0}}},l=(r(788),r(39)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"summary-container"},[r("card-header",{staticClass:"card-header",attrs:{header:t.header}}),t._v(" "),r("div"),t._v(" "),0!=t.links.length?r("card-links",{staticClass:"summary-links",attrs:{links:t.links}}):t._e(),t._v(" "),0!=t.related.length?r("card-related-to",{staticClass:"summary-relatedto",attrs:{related:t.related}}):t._e()],1)}),[],!1,null,"4c2b50e2",null);e.default=component.exports;installComponents(component,{CardHeader:r(740).default,CardLinks:r(757).default,CardRelatedTo:r(754).default})}}]);