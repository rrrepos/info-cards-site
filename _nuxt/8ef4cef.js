(window.webpackJsonp=window.webpackJsonp||[]).push([[3,7],{596:function(e,t,r){},597:function(e,t,r){"use strict";r.r(t);r(243);var n={props:{header:{type:Object,required:!1},index:{type:Number,required:!1},count:{type:Number,required:!1}}},o=(r(598),r(39)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("div",{staticClass:"info"},[r("div",{staticClass:"title"},[e._v(e._s(e.header.title))]),e._v(" "),r("div",{staticClass:"subtitle"},[e._v(e._s(e.header.category)+" · "+e._s(e.header.level))])]),e._v(" "),r("div"),e._v(" "),e.index>=0?r("div",{staticClass:"count"},[r("span",[r("strong",[e._v(e._s(e.index+1))]),e._v(" / "+e._s(e.count))])]):e._e()])}),[],!1,null,"317a5020",null);t.default=component.exports},598:function(e,t,r){"use strict";r(596)},615:function(e,t,r){},620:function(e,t,r){"use strict";r(615)},632:function(e,t,r){"use strict";r.r(t);r(243),r(63),r(27),r(171),r(14),r(42);var n={props:{header:{type:Object,required:!1},index:{type:Number,required:!1},count:{type:Number,required:!1},question:{type:String,required:!1},answer:{type:String,required:!1},showQ:{type:Boolean}},mounted:function(){var e=this;this.current=this.index;var t=this.calculateDelayTime();this.timer=setTimeout((function(){e.isQ=!1}),t);var r=document.querySelector(".content-container"),n=document.querySelector(".card-header"),o=document.querySelector(".footer");this.netHeight=r.offsetHeight-n.offsetHeight-o.offsetHeight-32},updated:function(){var e=this;if(this.current!=this.index)if(this.current=this.index,clearTimeout(this.timer),this.last<this.index){this.last=this.index,this.isQ=!0;var t=this.calculateDelayTime();this.timer=setTimeout((function(){e.isQ=!1}),t)}else this.isQ=!1;this.isQ||this.resizeContent()},data:function(){return{current:-1,last:-1,delayTime:2.5,isQ:!0,timer:null,netHeight:0}},methods:{calculateDelayTime:function(){var e=180;this.showQ||(e=120);var t=this.question.split(" ").length/e*60*1e3;return Math.max(2e3,500*Math.ceil(t/500))},resizeContent:function(){var e=document.querySelector(".content-body"),t=document.querySelectorAll(".answer-regular");if(e){var r=1;if(!isNaN(e.offsetHeight)){do{for(var n=document.querySelectorAll(".answer-regular > p"),o=document.querySelectorAll(".answer-regular > ul > li"),l=document.querySelectorAll(".answer-regular > ol > li"),c=document.querySelectorAll(".answer-regular > blockquote > p"),d=document.querySelectorAll(".answer-regular > pre > code"),h=1.5*r,i=0;i<n.length;i++){n[i].style.fontSize=h+"rem"}for(var f=0;f<o.length;f++){o[f].style.fontSize=h+"rem"}for(var m=0;m<l.length;m++){l[m].style.fontSize=h+"rem"}for(var v=0;v<c.length;v++){c[v].style.fontSize=h+"rem"}for(var y=0;y<d.length;y++){d[y].style.fontSize=h+"rem"}r-=.05}while(e.offsetHeight>this.netHeight&&r>.35);t.forEach((function(e){return e.style.opacity="1"}))}}}}},o=(r(620),r(39)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content-container no-selection"},[r("card-header",{staticClass:"card-header",attrs:{header:e.header,index:e.index,count:e.count}}),e._v(" "),e.isQ?r("div",{staticClass:"content-body"},[r("div",{staticClass:"question-regular",domProps:{innerHTML:e._s(e.$md.render(e.question))}})]):r("div",{staticClass:"content-body"},[e.showQ?r("div",{staticClass:"smaller",domProps:{innerHTML:e._s(e.$md.render(e.question))}}):e._e(),e._v(" "),r("div",{staticClass:"answer-regular",domProps:{innerHTML:e._s(e.$md.render(e.answer))}})]),e._v(" "),r("div",{staticClass:"footer"})],1)}),[],!1,null,"17e02730",null);t.default=component.exports;installComponents(component,{CardHeader:r(597).default})}}]);