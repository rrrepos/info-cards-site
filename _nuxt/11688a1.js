(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{613:function(e,t,n){},619:function(e,t,n){"use strict";n(613)},625:function(e,t,n){"use strict";n.r(t);n(63);var r={props:{header:{type:Object,required:!1}},mounted:function(){var e=this;setTimeout((function(){e.$device.isMobile?e.message=e.$store.getters.t("swipe"):e.message=e.$store.getters.t("tap")}),1e3*this.delay)},data:function(){return{message:"",delay:2}},methods:{}},o=(n(619),n(39)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("v-img",{staticClass:"image",attrs:{src:e.header.dir+"/images/cover.png",alt:e.header.title}}),e._v(" "),n("div",{staticClass:"action-row"},[e._v("\n    "+e._s(e.message)+"\n  ")])],1)}),[],!1,null,"2648e6fb",null);t.default=component.exports;installComponents(component,{VImg:n(170).default})}}]);