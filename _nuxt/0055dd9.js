(window.webpackJsonp=window.webpackJsonp||[]).push([[2,5],{534:function(e,t,r){},535:function(e,t,r){"use strict";r.r(t);r(243);var n={props:{header:{type:Object,required:!1},index:{type:Number,required:!1},count:{type:Number,required:!1}}},o=(r(536),r(43)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("div",{staticClass:"info"},[r("div",{staticClass:"title"},[e._v(e._s(e.header.title))]),e._v(" "),r("div",{staticClass:"subtitle"},[e._v(e._s(e.header.category)+" · "+e._s(e.header.level))])]),e._v(" "),r("div"),e._v(" "),e.index>=0?r("div",{staticClass:"count"},[r("span",[r("strong",[e._v(e._s(e.index+1))]),e._v(" / "+e._s(e.count))])]):e._e()])}),[],!1,null,"5ad0902e",null);t.default=component.exports},536:function(e,t,r){"use strict";r(534)},550:function(e,t,r){},562:function(e,t,r){"use strict";r(550)},583:function(e,t,r){"use strict";r.r(t);r(243);var n={components:{CardHeader:r(535).default},props:{header:{type:Object,required:!1},index:{type:Number,required:!1},count:{type:Number,required:!1},question:{type:String,required:!1},answer:{type:String,required:!1},showQ:{type:Boolean}},mounted:function(){this.current=this.index,this.resizeContent()},updated:function(){this.current!=this.index&&(this.current=this.index,this.resizeContent())},data:function(){return{current:-1,timer:null,actionTime:0}},methods:{resizeContent:function(){var e=document.querySelector(".answer-content"),t=1;if(!isNaN(e.offsetHeight)&&!isNaN(e.scrollHeight))do{for(var r=document.querySelectorAll(".answercontent > .answerregular > p"),n=document.querySelectorAll(".answer-content > .answer-regular > ul > li"),o=document.querySelectorAll(".answer-content > .answer-regular > ol > li"),c=document.querySelectorAll(".answer-content > .answer-regular > blockquote > p"),l=1.5*t,i=0;i<r.length;i++){r[i].style.fontSize=l+"rem"}for(var d=0;d<n.length;d++){n[d].style.fontSize=l+"rem"}for(var h=0;h<o.length;h++){o[h].style.fontSize=l+"rem"}for(var f=0;f<c.length;f++){c[f].style.fontSize=l+"rem"}t-=.05}while(e.scrollHeight>e.offsetHeight)},leftSwipe:function(){document.querySelector(".answer-left").classList.add("highlight"),document.querySelector(".answer-action").classList.remove("hide"),$nuxt.$emit("answer-swipe",0)},rightSwipe:function(){document.querySelector(".answer-right").classList.add("highlight"),document.querySelector(".answer-action").classList.remove("hide"),$nuxt.$emit("answer-swipe",1)}}},o=(r(562),r(43)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"answer-container no-selection"},[r("card-header",{attrs:{header:e.header,index:e.index,count:e.count}}),e._v(" "),r("div",{staticClass:"answer-content"},[e.showQ?r("div",{staticClass:"smaller",domProps:{innerHTML:e._s(e.$md.render(e.question))}}):r("div"),e._v(" "),r("div",{staticClass:"answer-regular",domProps:{innerHTML:e._s(e.$md.render(e.answer))}})])],1)}),[],!1,null,"6427dadd",null);t.default=component.exports;installComponents(component,{CardHeader:r(535).default})}}]);