(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{533:function(t,e,n){},538:function(t,e,n){"use strict";n(533)},551:function(t,e,n){"use strict";n.r(e);var r=n(5),c=(n(32),{methods:{setRating:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.$emit("rated",t);case 1:case"end":return n.stop()}}),n)})))()}}}),v=(n(538),n(39)),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rating-container"},[n("div",{staticClass:"rating-title"},[t._v(t._s(this.$store.getters.t("rate_the_content")))]),t._v(" "),n("div",{staticClass:"ratings"},[n("div",{staticClass:"rating",on:{click:function(e){return t.setRating(1)}}},[n("div",{staticClass:"number"},[t._v("1")]),t._v(" "),n("div",{staticClass:"text"},[t._v(t._s(this.$store.getters.t("inaccurate")))])]),t._v(" "),n("div",{staticClass:"rating",on:{click:function(e){return t.setRating(2)}}},[n("div",{staticClass:"number"},[t._v("2")]),t._v(" "),n("div",{staticClass:"text"},[t._v(t._s(this.$store.getters.t("insufficient")))])]),t._v(" "),n("div",{staticClass:"rating",on:{click:function(e){return t.setRating(3)}}},[n("div",{staticClass:"number"},[t._v("3")]),t._v(" "),n("div",{staticClass:"text"},[t._v(t._s(this.$store.getters.t("excessive")))])]),t._v(" "),n("div",{staticClass:"rating",on:{click:function(e){return t.setRating(4)}}},[n("div",{staticClass:"number"},[t._v("4")]),t._v(" "),n("div",{staticClass:"text"},[t._v(t._s(this.$store.getters.t("perfect")))])])])])}),[],!1,null,"43e65fbb",null);e.default=component.exports}}]);