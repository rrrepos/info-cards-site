(window.webpackJsonp=window.webpackJsonp||[]).push([[10,7],{619:function(e,t,r){},620:function(e,t,r){"use strict";r.r(t);r(243);var n={props:{header:{type:Object,required:!1},index:{type:Number,required:!1},count:{type:Number,required:!1}}},o=(r(621),r(39)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("div",{staticClass:"info"},[r("div",{staticClass:"title"},[e._v(e._s(e.header.title))]),e._v(" "),r("div",{staticClass:"subtitle"},[e._v(e._s(e.header.category)+" · "+e._s(e.header.level))])]),e._v(" "),r("div"),e._v(" "),e.index>=0?r("div",{staticClass:"count"},[r("span",[r("strong",[e._v(e._s(e.index+1))]),e._v(" / "+e._s(e.count))])]):e._e()])}),[],!1,null,"317a5020",null);t.default=component.exports},621:function(e,t,r){"use strict";r(619)},650:function(e,t,r){},662:function(e,t,r){"use strict";r(650)},686:function(e,t,r){"use strict";r.r(t);r(243);var n={components:{CardHeader:r(620).default},props:{header:{type:Object,required:!1},index:{type:Number,required:!1},count:{type:Number,required:!1},question:{type:String,required:!1}},mounted:function(){this.resetQuestion(),this.current=this.index},updated:function(){this.current!=this.index&&(this.current=this.index,this.resetQuestion())},data:function(){return{current:-1}},methods:{resizeContent:function(){var e=document.querySelector(".question-regular"),t=1;if(!isNaN(e.offsetHeight)&&!isNaN(e.scrollHeight))do{for(var r=document.querySelectorAll(".question-regular > p"),n=document.querySelectorAll(".question-regular > ul > li"),o=document.querySelectorAll(".question-regular > ol > li"),l=document.querySelectorAll(".question-regular > blockquote > p"),c=1.5*t,i=0;i<r.length;i++){r[i].style.fontSize=c+"rem"}for(var d=0;d<n.length;d++){n[d].style.fontSize=c+"rem"}for(var f=0;f<o.length;f++){o[f].style.fontSize=c+"rem"}for(var h=0;h<l.length;h++){l[h].style.fontSize=c+"rem"}t-=.05}while(e.scrollHeight>e.offsetHeight)},resetQuestion:function(){this.resizeContent()}}},o=(r(662),r(39)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"question-container no-selection"},[r("card-header",{attrs:{header:e.header,index:e.index,count:e.count}}),e._v(" "),r("div",{staticClass:"question-regular",domProps:{innerHTML:e._s(e.$md.render(e.question))}})],1)}),[],!1,null,"d0dc25d2",null);t.default=component.exports;installComponents(component,{CardHeader:r(620).default})}}]);