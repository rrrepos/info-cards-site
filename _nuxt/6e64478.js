(window.webpackJsonp=window.webpackJsonp||[]).push([[13,9,12],{582:function(t,e,r){},583:function(t,e,r){},584:function(t,e,r){"use strict";r.r(e);var n={props:{related:{type:Array,required:!0}}},l=(r(590),r(39)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"related-container"},[r("div",{staticClass:"title"},[t._v("\n    "+t._s(this.$store.getters.t("related_decks"))+"\n  ")]),t._v(" "),r("div",{staticClass:"list"},t._l(t.related,(function(t,e){return r("a",{key:e,attrs:{href:"/decks/"+t.id}},[r("v-img",{staticClass:"image",attrs:{src:t.dir+t.id+"/images/cover.png",alt:t.id}})],1)})),0)])}),[],!1,null,"20150c59",null);e.default=component.exports;installComponents(component,{VImg:r(170).default})},589:function(t,e,r){"use strict";r(582)},590:function(t,e,r){"use strict";r(583)},595:function(t,e,r){"use strict";r.r(e);var n={props:{links:{type:Array,required:!0}}},l=(r(589),r(39)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"links-container"},[r("div",{staticClass:"title"},[t._v("\n    "+t._s(this.$store.getters.t("deck_links"))+"\n  ")]),t._v(" "),r("div",{staticClass:"list"},t._l(t.links,(function(e,n){return r("a",{key:n,attrs:{href:e.url,target:"_blank"}},[t._v("\n      "+t._s(e.title)+"\n    ")])})),0)])}),[],!1,null,"754ccbf0",null);e.default=component.exports},605:function(t,e,r){},616:function(t,e,r){"use strict";r(605)},640:function(t,e,r){"use strict";r.r(e);var n={components:{CardRelatedTo:r(584).default},props:{related:{type:Array,required:!0},links:{type:Array,required:!0}}},l=(r(616),r(39)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"summary-container"},[0!=t.links.length?r("card-links",{staticClass:"summary-links",attrs:{links:t.links}}):t._e(),t._v(" "),0!=t.related.length?r("card-related-to",{staticClass:"summary-relatedto",attrs:{related:t.related}}):t._e()],1)}),[],!1,null,"a5d6fde0",null);e.default=component.exports;installComponents(component,{CardLinks:r(595).default,CardRelatedTo:r(584).default})}}]);