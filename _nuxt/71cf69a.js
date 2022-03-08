(window.webpackJsonp=window.webpackJsonp||[]).push([[2,5,6],{545:function(e,r,t){},546:function(e,r,t){"use strict";t.r(r);t(243);var n={props:{header:{type:Object,required:!1},index:{type:Number,required:!1},count:{type:Number,required:!1}}},o=(t(547),t(39)),component=Object(o.a)(n,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"header"},[t("div",{staticClass:"info"},[t("div",{staticClass:"title"},[e._v(e._s(e.header.title))]),e._v(" "),t("div",{staticClass:"subtitle"},[e._v(e._s(e.header.category)+" · "+e._s(e.header.level))])]),e._v(" "),t("div"),e._v(" "),e.index>=0?t("div",{staticClass:"count"},[t("span",[t("strong",[e._v(e._s(e.index+1))]),e._v(" / "+e._s(e.count))])]):e._e()])}),[],!1,null,"5ad0902e",null);r.default=component.exports},547:function(e,r,t){"use strict";t(545)},550:function(e,r,t){},556:function(e,r,t){"use strict";t(550)},563:function(e,r,t){},570:function(e,r,t){"use strict";t.r(r);var n=t(5),o=(t(32),{methods:{submitError:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t=document.querySelector(".input").value,e.$emit("error",t);case 2:case"end":return r.stop()}}),r)})))()},stopp:function(e){e.stopPropagation()}}}),c=(t(556),t(39)),component=Object(c.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"error-container"},[t("input",{staticClass:"input",attrs:{placeholder:"report the error"},on:{click:e.stopp,focus:e.stopp}}),e._v(" "),t("span",{staticClass:"material-icons menu-icon",on:{click:function(r){return e.submitError()}}},[e._v("play_arrow")])])}),[],!1,null,"0652b875",null);r.default=component.exports},577:function(e,r,t){"use strict";t(563)},597:function(e,r,t){"use strict";t.r(r);var n=t(5),o=(t(32),t(243),t(63),t(84),{components:{CardHeader:t(546).default},props:{header:{type:Object,required:!1},index:{type:Number,required:!1},count:{type:Number,required:!1},question:{type:String,required:!1},answer:{type:String,required:!1},showQ:{type:Boolean}},mounted:function(){this.current=this.index,this.resizeContent()},updated:function(){this.current!=this.index&&(this.current=this.index,this.resizeContent())},data:function(){return{current:-1,timer:null,actionTime:0,showError:!1,showThanks:!1}},methods:{clearError:function(){this.showError=!1},submitError:function(e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.showError=!1,!e){t.next=15;break}return r.showThanks=!0,n=r,setTimeout((function(){n.showThanks=!1}),2e3),t.prev=5,o="id=".concat(r.header.id,"&index=").concat(r.index,"&error=").concat(e),c="https://asia-south1-flashback-cards.cloudfunctions.net/kno_errors?".concat(o),t.next=10,r.$http.$get(c);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[5,12]])})))()},reportError:function(e){e.stopPropagation(),this.showError=!0},resizeContent:function(){var e=document.querySelector(".answer-content"),r=1;if(!isNaN(e.offsetHeight)&&!isNaN(e.scrollHeight))do{for(var t=document.querySelectorAll(".answercontent > .answerregular > p"),n=document.querySelectorAll(".answer-content > .answer-regular > ul > li"),o=document.querySelectorAll(".answer-content > .answer-regular > ol > li"),c=document.querySelectorAll(".answer-content > .answer-regular > blockquote > p"),l=1.5*r,i=0;i<t.length;i++){t[i].style.fontSize=l+"rem"}for(var d=0;d<n.length;d++){n[d].style.fontSize=l+"rem"}for(var h=0;h<o.length;h++){o[h].style.fontSize=l+"rem"}for(var f=0;f<c.length;f++){c[f].style.fontSize=l+"rem"}r-=.05}while(e.scrollHeight>e.offsetHeight)}}}),c=(t(577),t(39)),component=Object(c.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"answer-container no-selection",on:{click:e.clearError}},[t("card-header",{attrs:{header:e.header,index:e.index,count:e.count}}),e._v(" "),t("div",{staticClass:"answer-content"},[e.showQ?t("div",{staticClass:"smaller",domProps:{innerHTML:e._s(e.$md.render(e.question))}}):t("div"),e._v(" "),t("div",{staticClass:"answer-regular",domProps:{innerHTML:e._s(e.$md.render(e.answer))}})]),e._v(" "),t("div",{staticClass:"error-row"},[e.showError?t("card-error",{staticClass:"error-input",on:{error:e.submitError}}):e._e(),e._v(" "),e.showError||e.showThanks?e._e():t("span",{staticClass:"material-icons error-icon",on:{click:e.reportError}},[e._v("report_problem")]),e._v(" "),e.showThanks?t("span",{staticClass:"material-icons thanks-icon"},[e._v("thumb_up")]):e._e()],1)],1)}),[],!1,null,"4fc77767",null);r.default=component.exports;installComponents(component,{CardHeader:t(546).default,CardError:t(570).default})}}]);