(window.webpackJsonp=window.webpackJsonp||[]).push([[3,7],{575:function(e,t,r){},576:function(e,t,r){"use strict";r.r(t);r(243);var n={props:{index:{type:Number,required:!1},count:{type:Number,required:!1}}},o=(r(577),r(39)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("div"),e._v(" "),e.index>=0?r("div",{staticClass:"count"},[r("span",[r("strong",[e._v(e._s(e.index+1))]),e._v(" / "+e._s(e.count))])]):e._e()])}),[],!1,null,"65c05020",null);t.default=component.exports},577:function(e,t,r){"use strict";r(575)},602:function(e,t,r){},613:function(e,t,r){"use strict";r(602)},637:function(e,t,r){"use strict";r.r(t);r(243),r(63),r(27),r(171);var n={components:{CardHeader:r(576).default},props:{index:{type:Number,required:!1},count:{type:Number,required:!1},question:{type:String,required:!1},answer:{type:String,required:!1},showQ:{type:Boolean}},mounted:function(){var e=this;this.current=this.index;var t=this.calculateDelayTime();this.timer=setTimeout((function(){e.isQ=!1}),t);var r=document.querySelector(".content-container"),n=document.querySelector(".card-header"),o=document.querySelector(".footer");this.netHeight=r.offsetHeight-n.offsetHeight-o.offsetHeight},updated:function(){var e=this;if(this.current!=this.index){clearTimeout(this.timer),this.current=this.index,this.isQ=!0;var t=this.calculateDelayTime();this.timer=setTimeout((function(){e.isQ=!1}),t)}this.isQ||this.resizeContent()},data:function(){return{current:-1,delayTime:2.5,isQ:!0,timer:null,netHeight:0}},methods:{calculateDelayTime:function(){var e=150;this.showQ||(e=100);var t=this.question.split(" ").length/e*60*1e3;return Math.max(2500,500*Math.ceil(t/500))},resizeContent:function(){var e=document.querySelector(".content-body"),t=document.querySelector(".answer-regular");if(e){var r=1;if(!isNaN(e.offsetHeight)){do{for(var n=document.querySelectorAll(".answer-regular > p"),o=document.querySelectorAll(".answer-regular > ul > li"),c=document.querySelectorAll(".answer-regular > ol > li"),l=document.querySelectorAll(".answer-regular > blockquote > p"),d=1.5*r,i=0;i<n.length;i++){n[i].style.fontSize=d+"rem"}for(var h=0;h<o.length;h++){o[h].style.fontSize=d+"rem"}for(var f=0;f<c.length;f++){c[f].style.fontSize=d+"rem"}for(var m=0;m<l.length;m++){l[m].style.fontSize=d+"rem"}r-=.05}while(e.offsetHeight>this.netHeight);t.style.opacity="1"}}}}},o=(r(613),r(39)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content-container no-selection"},[r("card-header",{staticClass:"card-header",attrs:{index:e.index,count:e.count}}),e._v(" "),e.isQ?r("div",{staticClass:"content-body"},[r("div",{staticClass:"question-regular",domProps:{innerHTML:e._s(e.$md.render(e.question))}})]):r("div",{staticClass:"content-body"},[e.showQ?r("div",{staticClass:"smaller",domProps:{innerHTML:e._s(e.$md.render(e.question))}}):e._e(),e._v(" "),r("div",{staticClass:"answer-regular",domProps:{innerHTML:e._s(e.$md.render(e.answer))}})]),e._v(" "),r("div",{staticClass:"footer"})],1)}),[],!1,null,"317b6358",null);t.default=component.exports;installComponents(component,{CardHeader:r(576).default})}}]);