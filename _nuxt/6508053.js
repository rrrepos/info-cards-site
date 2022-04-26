(window.webpackJsonp=window.webpackJsonp||[]).push([[17,3,4,5,6,7,11],{694:function(e,t,n){},695:function(e,t,n){"use strict";n.r(t);n(243);var r={props:{header:{type:Object,required:!1},index:{type:Number,required:!1},count:{type:Number,required:!1}}},c=(n(696),n(39)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"info"},[n("div",{staticClass:"title"},[e._v(e._s(e.header.title))]),e._v(" "),n("div",{staticClass:"subtitle"},[e._v(e._s(e.header.category)+" · "+e._s(e.header.level))])]),e._v(" "),n("div"),e._v(" "),e.index>=0?n("div",{staticClass:"count"},[n("span",[n("strong",[e._v(e._s(e.index+1))]),e._v(" / "+e._s(e.count))])]):e._e()])}),[],!1,null,"317a5020",null);t.default=component.exports},696:function(e,t,n){"use strict";n(694)},697:function(e,t,n){},698:function(e,t,n){},701:function(e,t,n){},702:function(e,t,n){},703:function(e,t,n){},704:function(e,t,n){"use strict";n(697)},705:function(e,t,n){"use strict";n(698)},709:function(e,t,n){"use strict";n.r(t);var r=n(5),c=(n(32),{methods:{submitError:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=document.querySelector(".input").value,e.$emit("error",n);case 2:case"end":return t.stop()}}),t)})))()},stopp:function(e){e.stopPropagation()}}}),o=(n(704),n(39)),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"error-container"},[n("input",{staticClass:"input",attrs:{placeholder:"report the error"},on:{click:e.stopp,focus:e.stopp}}),e._v(" "),n("span",{staticClass:"material-icons menu-icon",on:{click:function(t){return e.submitError()}}},[e._v("play_arrow")])])}),[],!1,null,"2739688a",null);t.default=component.exports},710:function(e,t,n){"use strict";n.r(t);var r=n(5),c=(n(32),{methods:{setRating:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.stopPropagation(),console.log(t),n.$emit("rated",t);case 3:case"end":return r.stop()}}),r)})))()}}}),o=(n(705),n(39)),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rating-container"},[n("div",{staticClass:"rating",on:{click:function(t){return e.setRating(t,1)}}},[n("div",{staticClass:"number"},[e._v("1")]),e._v(" "),n("div",{staticClass:"text"},[e._v(e._s(this.$store.getters.t("inaccurate")))])]),e._v(" "),n("div",{staticClass:"rating",on:{click:function(t){return e.setRating(t,2)}}},[n("div",{staticClass:"number"},[e._v("2")]),e._v(" "),n("div",{staticClass:"text"},[e._v(e._s(this.$store.getters.t("insufficient")))])]),e._v(" "),n("div",{staticClass:"rating",on:{click:function(t){return e.setRating(t,3)}}},[n("div",{staticClass:"number"},[e._v("3")]),e._v(" "),n("div",{staticClass:"text"},[e._v(e._s(this.$store.getters.t("excessive")))])]),e._v(" "),n("div",{staticClass:"rating",on:{click:function(t){return e.setRating(t,4)}}},[n("div",{staticClass:"number"},[e._v("4")]),e._v(" "),n("div",{staticClass:"text"},[e._v(e._s(this.$store.getters.t("perfect")))])])])}),[],!1,null,"4e71fed7",null);t.default=component.exports},712:function(e,t,n){"use strict";n(701)},713:function(e,t,n){"use strict";n(702)},714:function(e,t,n){"use strict";n(703)},716:function(e,t,n){},726:function(e,t,n){"use strict";n.r(t);n(63);var r={props:{header:{type:Object,required:!1}},mounted:function(){var e=this;setTimeout((function(){e.$device.isMobile?e.message=e.$store.getters.t("swipe"):e.message=e.$store.getters.t("tap")}),1e3*this.delay)},data:function(){return{message:"",delay:2}},methods:{}},c=(n(712),n(39)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("v-img",{staticClass:"image",attrs:{src:e.header.dir+"/images/cover.png",alt:e.header.title}}),e._v(" "),n("div",{staticClass:"action-row"},[e._v("\n    "+e._s(e.message)+"\n  ")])],1)}),[],!1,null,"2648e6fb",null);t.default=component.exports;installComponents(component,{VImg:n(170).default})},727:function(e,t,n){"use strict";n.r(t);var r={},c=(n(713),n(39)),component=Object(c.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"container"})}),[],!1,null,"532500c8",null);t.default=component.exports},728:function(e,t,n){"use strict";n.r(t);n(243),n(63),n(27),n(171),n(14),n(40);var r={props:{header:{type:Object,required:!1},index:{type:Number,required:!1},count:{type:Number,required:!1},question:{type:String,required:!1},answer:{type:String,required:!1},showQ:{type:Boolean}},mounted:function(){var e=this;this.current=this.index;var t=this.calculateDelayTime();this.timer=setTimeout((function(){e.isQ=!1}),t);var n=document.querySelector(".content-container"),r=document.querySelector(".card-header"),c=document.querySelector(".footer");this.netHeight=n.offsetHeight-r.offsetHeight-c.offsetHeight-32},updated:function(){var e=this;if(this.current!=this.index)if(this.current=this.index,clearTimeout(this.timer),this.last<this.index){this.last=this.index,this.isQ=!0;var t=this.calculateDelayTime();this.timer=setTimeout((function(){e.isQ=!1}),t)}else this.isQ=!1;this.isQ||this.resizeContent()},data:function(){return{current:-1,last:-1,delayTime:2.5,isQ:!0,timer:null,netHeight:0}},methods:{calculateDelayTime:function(){var e=180;this.showQ||(e=120);var t=this.question.split(" ").length/e*60*1e3;return Math.max(2e3,500*Math.ceil(t/500))},resizeContent:function(){var e=document.querySelector(".content-body"),t=document.querySelectorAll(".answer-regular");if(e){var n=1;if(!isNaN(e.offsetHeight)){do{for(var r=document.querySelectorAll(".answer-regular > p"),c=document.querySelectorAll(".answer-regular > ul > li"),o=document.querySelectorAll(".answer-regular > ol > li"),d=document.querySelectorAll(".answer-regular > blockquote > p"),m=document.querySelectorAll(".answer-regular > pre > code"),l=1.5*n,i=0;i<r.length;i++){r[i].style.fontSize=l+"rem"}for(var _=0;_<c.length;_++){c[_].style.fontSize=l+"rem"}for(var h=0;h<o.length;h++){o[h].style.fontSize=l+"rem"}for(var v=0;v<d.length;v++){d[v].style.fontSize=l+"rem"}for(var w=0;w<m.length;w++){m[w].style.fontSize=l+"rem"}n-=.05}while(e.offsetHeight>this.netHeight&&n>.35);t.forEach((function(e){return e.style.opacity="1"}))}}}}},c=(n(714),n(39)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-container no-selection"},[n("card-header",{staticClass:"card-header",attrs:{header:e.header,index:e.index,count:e.count}}),e._v(" "),e.isQ?n("div",{staticClass:"content-body"},[n("div",{staticClass:"question-regular",domProps:{innerHTML:e._s(e.$md.render(e.question))}})]):n("div",{staticClass:"content-body"},[e.showQ?n("div",{staticClass:"smaller",domProps:{innerHTML:e._s(e.$md.render(e.question))}}):e._e(),e._v(" "),n("div",{staticClass:"answer-regular",domProps:{innerHTML:e._s(e.$md.render(e.answer))}})]),e._v(" "),n("div",{staticClass:"footer"})],1)}),[],!1,null,"17e02730",null);t.default=component.exports;installComponents(component,{CardHeader:n(695).default})},730:function(e,t,n){var map={"./content/decks/en/24_character_strengths/images/preview.png":248,"./content/decks/en/4th_industrial_revolution/images/preview.png":250,"./content/decks/en/about_kno/images/preview.png":252,"./content/decks/en/air_quality_db_2022/images/preview.png":254,"./content/decks/en/bhai_lang/images/preview.png":256,"./content/decks/en/bionic_eyes/images/preview.png":258,"./content/decks/en/brain_machine_interface/images/preview.png":260,"./content/decks/en/carbon_footprint/images/preview.png":262,"./content/decks/en/colored_eink_display/images/preview.png":264,"./content/decks/en/cop_26/images/preview.png":266,"./content/decks/en/covid_and_variants/images/preview.png":268,"./content/decks/en/dall_e_2/images/preview.png":270,"./content/decks/en/digital_denim/images/preview.png":272,"./content/decks/en/digital_twin/images/preview.png":274,"./content/decks/en/earth_day/images/preview.png":276,"./content/decks/en/earth_hour/images/preview.png":278,"./content/decks/en/finlands_edu_system/images/preview.png":280,"./content/decks/en/first_pig_heart_transplant/images/preview.png":282,"./content/decks/en/flying_car/images/preview.png":284,"./content/decks/en/formula_one/images/preview.png":286,"./content/decks/en/gene_editing/images/preview.png":288,"./content/decks/en/greenhouse_gases/images/preview.png":290,"./content/decks/en/gudi_padwa/images/preview.png":292,"./content/decks/en/holi/images/preview.png":294,"./content/decks/en/hydrogen_powered_cars/images/preview.png":296,"./content/decks/en/iot/images/preview.png":298,"./content/decks/en/james_webb_space_telescope/images/preview.png":300,"./content/decks/en/lab_made_dairy_products/images/preview.png":302,"./content/decks/en/lab_made_meat/images/preview.png":304,"./content/decks/en/low_code_no_code/images/preview.png":306,"./content/decks/en/malaria_vaccine/images/preview.png":308,"./content/decks/en/medical_nanorobots/images/preview.png":310,"./content/decks/en/museum_of_the_future/images/preview.png":312,"./content/decks/en/newest_country/images/preview.png":314,"./content/decks/en/no_fault_divorce/images/preview.png":316,"./content/decks/en/nowruz/images/preview.png":318,"./content/decks/en/nsdr_yoga_nidra/images/preview.png":320,"./content/decks/en/poison_pills/images/preview.png":322,"./content/decks/en/popular_internet_slangs/images/preview.png":324,"./content/decks/en/proxima_d/images/preview.png":326,"./content/decks/en/quantum_computers/images/preview.png":328,"./content/decks/en/robobees/images/preview.png":330,"./content/decks/en/self_fertilizing_crops/images/preview.png":332,"./content/decks/en/self_healing_concrete/images/preview.png":334,"./content/decks/en/sensors_on_breeze/images/preview.png":336,"./content/decks/en/smart_cane/images/preview.png":338,"./content/decks/en/solid_state_battery/images/preview.png":340,"./content/decks/en/space_tourism/images/preview.png":342,"./content/decks/en/sustainable_aviation_fuel/images/preview.png":344,"./content/decks/en/the_working_of_hypersonic_missiles/images/preview.png":346,"./content/decks/en/the_working_of_motion_sensors/images/preview.png":348,"./content/decks/en/the_working_of_qrcodes/images/preview.png":350,"./content/decks/en/understanding_panic_attacks/images/preview.png":352,"./content/decks/en/what_are_character_strengths/images/preview.png":354,"./content/decks/en/what_are_cryptocoins/images/preview.png":356,"./content/decks/en/what_are_life_skills/images/preview.png":358,"./content/decks/en/what_are_xenobots/images/preview.png":360,"./content/decks/en/what_fingerprints_reveal/images/preview.png":362,"./content/decks/en/what_is_3d_printing/images/preview.png":364,"./content/decks/en/what_is_4d_printing/images/preview.png":366,"./content/decks/en/what_is_aps_26/images/preview.png":368,"./content/decks/en/what_is_ar/images/preview.png":370,"./content/decks/en/what_is_biomimicry/images/preview.png":372,"./content/decks/en/what_is_bitcoin/images/preview.png":374,"./content/decks/en/what_is_blockchain_ledger/images/preview.png":376,"./content/decks/en/what_is_bossaball/images/preview.png":378,"./content/decks/en/what_is_cbdc/images/preview.png":380,"./content/decks/en/what_is_collaboration_overload/images/preview.png":382,"./content/decks/en/what_is_dark_web/images/preview.png":384,"./content/decks/en/what_is_deepfake/images/preview.png":386,"./content/decks/en/what_is_eskin/images/preview.png":388,"./content/decks/en/what_is_gorpcore_fashion/images/preview.png":390,"./content/decks/en/what_is_green_steel/images/preview.png":392,"./content/decks/en/what_is_highlining/images/preview.png":394,"./content/decks/en/what_is_holoportation/images/preview.png":396,"./content/decks/en/what_is_hydroponics/images/preview.png":398,"./content/decks/en/what_is_hyperloop/images/preview.png":400,"./content/decks/en/what_is_lidar/images/preview.png":402,"./content/decks/en/what_is_lifi/images/preview.png":404,"./content/decks/en/what_is_meme/images/preview.png":406,"./content/decks/en/what_is_metaverse/images/preview.png":408,"./content/decks/en/what_is_nft/images/preview.png":410,"./content/decks/en/what_is_quad/images/preview.png":412,"./content/decks/en/what_is_robotic_surgery/images/preview.png":414,"./content/decks/en/what_is_rpa/images/preview.png":416,"./content/decks/en/what_is_self_awareness/images/preview.png":418,"./content/decks/en/what_is_sleep_apnea/images/preview.png":420,"./content/decks/en/what_is_synaesthesia/images/preview.png":422,"./content/decks/en/what_is_vertical_farming/images/preview.png":424,"./content/decks/en/what_is_voice_cloning/images/preview.png":426,"./content/decks/en/what_is_vr/images/preview.png":428,"./content/decks/en/what_is_web3/images/preview.png":430,"./content/decks/en/what_is_wordle/images/preview.png":432,"./content/decks/en/who_owns_space/images/preview.png":434,"./content/decks/en/whr_2022/images/preview.png":436,"./content/decks/en/womens_day/images/preview.png":438,"./content/decks/en/zero_trust_security/images/preview.png":440};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=c,e.exports=r,r.id=730},731:function(e,t,n){var map={"./content/decks/en/24_character_strengths/images/cover.png":247,"./content/decks/en/4th_industrial_revolution/images/cover.png":249,"./content/decks/en/about_kno/images/cover.png":251,"./content/decks/en/air_quality_db_2022/images/cover.png":253,"./content/decks/en/bhai_lang/images/cover.png":255,"./content/decks/en/bionic_eyes/images/cover.png":257,"./content/decks/en/brain_machine_interface/images/cover.png":259,"./content/decks/en/carbon_footprint/images/cover.png":261,"./content/decks/en/colored_eink_display/images/cover.png":263,"./content/decks/en/cop_26/images/cover.png":265,"./content/decks/en/covid_and_variants/images/cover.png":267,"./content/decks/en/dall_e_2/images/cover.png":269,"./content/decks/en/digital_denim/images/cover.png":271,"./content/decks/en/digital_twin/images/cover.png":273,"./content/decks/en/earth_day/images/cover.png":275,"./content/decks/en/earth_hour/images/cover.png":277,"./content/decks/en/finlands_edu_system/images/cover.png":279,"./content/decks/en/first_pig_heart_transplant/images/cover.png":281,"./content/decks/en/flying_car/images/cover.png":283,"./content/decks/en/formula_one/images/cover.png":285,"./content/decks/en/gene_editing/images/cover.png":287,"./content/decks/en/greenhouse_gases/images/cover.png":289,"./content/decks/en/gudi_padwa/images/cover.png":291,"./content/decks/en/holi/images/cover.png":293,"./content/decks/en/hydrogen_powered_cars/images/cover.png":295,"./content/decks/en/iot/images/cover.png":297,"./content/decks/en/james_webb_space_telescope/images/cover.png":299,"./content/decks/en/lab_made_dairy_products/images/cover.png":301,"./content/decks/en/lab_made_meat/images/cover.png":303,"./content/decks/en/low_code_no_code/images/cover.png":305,"./content/decks/en/malaria_vaccine/images/cover.png":307,"./content/decks/en/medical_nanorobots/images/cover.png":309,"./content/decks/en/museum_of_the_future/images/cover.png":311,"./content/decks/en/newest_country/images/cover.png":313,"./content/decks/en/no_fault_divorce/images/cover.png":315,"./content/decks/en/nowruz/images/cover.png":317,"./content/decks/en/nsdr_yoga_nidra/images/cover.png":319,"./content/decks/en/poison_pills/images/cover.png":321,"./content/decks/en/popular_internet_slangs/images/cover.png":323,"./content/decks/en/proxima_d/images/cover.png":325,"./content/decks/en/quantum_computers/images/cover.png":327,"./content/decks/en/robobees/images/cover.png":329,"./content/decks/en/self_fertilizing_crops/images/cover.png":331,"./content/decks/en/self_healing_concrete/images/cover.png":333,"./content/decks/en/sensors_on_breeze/images/cover.png":335,"./content/decks/en/smart_cane/images/cover.png":337,"./content/decks/en/solid_state_battery/images/cover.png":339,"./content/decks/en/space_tourism/images/cover.png":341,"./content/decks/en/sustainable_aviation_fuel/images/cover.png":343,"./content/decks/en/the_working_of_hypersonic_missiles/images/cover.png":345,"./content/decks/en/the_working_of_motion_sensors/images/cover.png":347,"./content/decks/en/the_working_of_qrcodes/images/cover.png":349,"./content/decks/en/understanding_panic_attacks/images/cover.png":351,"./content/decks/en/what_are_character_strengths/images/cover.png":353,"./content/decks/en/what_are_cryptocoins/images/cover.png":355,"./content/decks/en/what_are_life_skills/images/cover.png":357,"./content/decks/en/what_are_xenobots/images/cover.png":359,"./content/decks/en/what_fingerprints_reveal/images/cover.png":361,"./content/decks/en/what_is_3d_printing/images/cover.png":363,"./content/decks/en/what_is_4d_printing/images/cover.png":365,"./content/decks/en/what_is_aps_26/images/cover.png":367,"./content/decks/en/what_is_ar/images/cover.png":369,"./content/decks/en/what_is_biomimicry/images/cover.png":371,"./content/decks/en/what_is_bitcoin/images/cover.png":373,"./content/decks/en/what_is_blockchain_ledger/images/cover.png":375,"./content/decks/en/what_is_bossaball/images/cover.png":377,"./content/decks/en/what_is_cbdc/images/cover.png":379,"./content/decks/en/what_is_collaboration_overload/images/cover.png":381,"./content/decks/en/what_is_dark_web/images/cover.png":383,"./content/decks/en/what_is_deepfake/images/cover.png":385,"./content/decks/en/what_is_eskin/images/cover.png":387,"./content/decks/en/what_is_gorpcore_fashion/images/cover.png":389,"./content/decks/en/what_is_green_steel/images/cover.png":391,"./content/decks/en/what_is_highlining/images/cover.png":393,"./content/decks/en/what_is_holoportation/images/cover.png":395,"./content/decks/en/what_is_hydroponics/images/cover.png":397,"./content/decks/en/what_is_hyperloop/images/cover.png":399,"./content/decks/en/what_is_lidar/images/cover.png":401,"./content/decks/en/what_is_lifi/images/cover.png":403,"./content/decks/en/what_is_meme/images/cover.png":405,"./content/decks/en/what_is_metaverse/images/cover.png":407,"./content/decks/en/what_is_nft/images/cover.png":409,"./content/decks/en/what_is_quad/images/cover.png":411,"./content/decks/en/what_is_robotic_surgery/images/cover.png":413,"./content/decks/en/what_is_rpa/images/cover.png":415,"./content/decks/en/what_is_self_awareness/images/cover.png":417,"./content/decks/en/what_is_sleep_apnea/images/cover.png":419,"./content/decks/en/what_is_synaesthesia/images/cover.png":421,"./content/decks/en/what_is_vertical_farming/images/cover.png":423,"./content/decks/en/what_is_voice_cloning/images/cover.png":425,"./content/decks/en/what_is_vr/images/cover.png":427,"./content/decks/en/what_is_web3/images/cover.png":429,"./content/decks/en/what_is_wordle/images/cover.png":431,"./content/decks/en/who_owns_space/images/cover.png":433,"./content/decks/en/whr_2022/images/cover.png":435,"./content/decks/en/womens_day/images/cover.png":437,"./content/decks/en/zero_trust_security/images/cover.png":439};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=c,e.exports=r,r.id=731},732:function(e,t,n){"use strict";n(716)},756:function(e,t,n){"use strict";n.r(t);var r=n(5),c=(n(32),n(33),n(43),n(27),n(171),n(131),n(41),n(63),n(84),{head:function(){return{title:this.deck.title,meta:[{"http-equiv":"Cache-Control",content:"no-cache, no-store, must-revalidate"},{"http-equiv":"Pragma",content:"no-cache"},{"http-equiv":"Expires",content:"-1"},{hid:"description",name:"description",content:this.deck.description},{hid:"og:title",property:"og:title",content:this.deck.title},{hid:"og:description",property:"og:description",content:this.deck.description},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:image",property:"og:image",content:"https://kno.cards"+n(730)("./content".concat(this.deck.dir,"/images/preview.png"))},{hid:"og:url",property:"og:url",content:"https://kno.cards"+this.$route.fullPath},{hid:"twitter:card",property:"twitter:card",content:"summary"},{hid:"twitter:site",property:"twitter:site",content:"@knocards"},{hid:"twitter:creator",property:"twitter:creator",content:"@rmr"},{hid:"twitter:image",property:"twitter:image",content:"https://kno.cards"+n(731)("./content".concat(this.deck.dir,"/images/cover.png"))}]}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,i,q,o,d,m,l,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,r=e.params,e.app,e.route,e.redirect,t.next=3,n("decks",e.store.state.language,r.deck,"content").fetch();case 3:for(c=t.sent,i=0;i<c.cards.length;i++)q=c.cards[i].q,q.split(/\r\n|\r|\n/).length>3?c.cards[i].showQ=!1:c.cards[i].showQ=!0;if(o=[],c.related)for(d=0;d<c.related.length;d++)m=c.dir.split("/").slice(0,-1).join("/")+"/",o.push({dir:m,id:c.related[d].id});if(l=[],c.links)for(_=0;_<c.links.length;_++)l.push({url:c.links[_].url,title:c.links[_].title});return t.abrupt("return",{deck:c,related:o,links:l});case 10:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=window.innerHeight;document.getElementsByClassName("main-grid")[0].style.height="".concat(e,"px"),this.$store.dispatch("checkVer","1"),this.$store.dispatch("initialise"),this.$store.dispatch("addDeck",this.deck),this.header={dir:this.deck.dir,id:this.deck.id,title:this.deck.title,category:this.deck.category,level:this.deck.level};var t=document.querySelector(".card");t.style.transform="rotateY(-0.1turn)",setTimeout((function(){t.style.transform="rotateY(0turn)"}),1e3)},data:function(){return{t:-1,turn:0,delayTime:500,header:{dir:"",title:"",category:"",level:""},qstr:"",astr:"",showq:!1,menu:!1,error:!1,rating:!1,timeDelay:5,hasRated:!1}},methods:{showMenu:function(){this.menu=!0},hideMenu:function(){this.menu=!1},showError:function(){this.resetMenu(),this.error=!0},showRating:function(){this.resetMenu(),this.rating=!0},shareDeck:function(){var e=this;navigator.share?navigator.share({title:this.$store.getters.t("share_title"),text:this.$store.getters.t("share_message"),url:window.location.href}).then((function(){e.resetMenu(),console.log("Thanks for sharing!")})).catch((function(t){e.resetMenu(),console.log("Couldn't share because of",t.message)})):(this.resetMenu(),console.log("does not support share"))},setRate:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.resetMenu(),!e){n.next=12;break}return n.prev=2,r="https://asia-south1-flashback-cards.cloudfunctions.net/kno_ratings?id=".concat(t.deck.id,"&rating=").concat(e),n.next=6,t.$http.$get(r);case 6:t.hasRated=!0,n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()},submitError:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.resetMenu(),!e){n.next=12;break}return n.prev=2,r="id=".concat(t.deck.id,"&index=").concat(t.t+1,"&error=").concat(e),c="https://asia-south1-flashback-cards.cloudfunctions.net/kno_errors?".concat(r),n.next=7,t.$http.$get(c);case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()},resetMenu:function(){this.menu=!1,this.error=!1,this.rating=!1},checkTapPosition:function(e){if(this.menu)this.resetMenu();else if(!this.$device.isMobile){var rect=e.target.getBoundingClientRect(),t=rect.width,n=(rect.height,e.srcEvent.clientX-rect.left);e.srcEvent.clientY,rect.top;n<t/2?this.reverseAndDecrement():this.flipAndIncrement()}},flipAndIncrement:function(){this.resetMenu();var e=document.querySelector(".card");if(this.turn-=.5,e.style.transform="rotateY("+this.turn+"turn)",this.t<this.deck.cards.length){var t=this;setTimeout((function(){t.t++,t.t<t.deck.cards.length?(t.qstr=t.deck.cards[t.t].q,t.astr=t.deck.cards[t.t].a,t.showQ=t.deck.cards[t.t].showQ):t.showMenu()}),this.delayTime)}},reverseAndDecrement:function(){this.resetMenu();var e=document.querySelector(".card");this.turn+=.5,e.style.transform="rotateY("+this.turn+"turn)";var t=this;setTimeout((function(){t.t--,t.t>=0&&(t.qstr=t.deck.cards[t.t].q,t.astr=t.deck.cards[t.t].a,t.showQ=t.deck.cards[t.t].showQ)}),this.delayTime)}}}),o=(n(732),n(39)),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-grid"},[n("div",{staticClass:"top"},[n("NuxtLink",{attrs:{to:"/"}},[n("KnoLogo")],1)],1),e._v(" "),n("div",{staticClass:"middle"},[n("div",{staticClass:"square"},[n("div",{staticClass:"card"},[-1==e.t?[n("card-cover",{directives:[{name:"hammer-touch",rawName:"v-hammer-touch:swipeleft",value:e.flipAndIncrement,expression:"flipAndIncrement",arg:"swipeleft"},{name:"hammer-touch",rawName:"v-hammer-touch:tap",value:e.flipAndIncrement,expression:"flipAndIncrement",arg:"tap"}],staticClass:"cardface",attrs:{header:e.header}}),e._v(" "),n("card-cover-back",{staticClass:"cardface card-b"})]:e.t>=e.deck.cards.length?[n("lazy-card-summary",{directives:[{name:"hammer-touch",rawName:"v-hammer-touch:swiperight",value:e.reverseAndDecrement,expression:"reverseAndDecrement",arg:"swiperight"},{name:"hammer-touch",rawName:"v-hammer-touch:tap",value:e.reverseAndDecrement,expression:"reverseAndDecrement",arg:"tap"}],staticClass:"cardface",attrs:{header:e.header,related:e.related,links:e.links}}),e._v(" "),n("lazy-card-summary",{directives:[{name:"hammer-touch",rawName:"v-hammer-touch:swiperight",value:e.reverseAndDecrement,expression:"reverseAndDecrement",arg:"swiperight"},{name:"hammer-touch",rawName:"v-hammer-touch:tap",value:e.reverseAndDecrement,expression:"reverseAndDecrement",arg:"tap"}],staticClass:"cardface card-b",attrs:{header:e.header,related:e.related,links:e.links}})]:[e.t%2==0?n("card-content",{directives:[{name:"hammer-touch",rawName:"v-hammer-touch:swipeleft",value:e.flipAndIncrement,expression:"flipAndIncrement",arg:"swipeleft"},{name:"hammer-touch",rawName:"v-hammer-touch:swiperight",value:e.reverseAndDecrement,expression:"reverseAndDecrement",arg:"swiperight"},{name:"hammer-touch",rawName:"v-hammer-touch:tap",value:e.checkTapPosition,expression:"checkTapPosition",arg:"tap"}],staticClass:"cardface card-b",attrs:{header:e.header,index:e.t,count:e.deck.cards.length,question:e.qstr,answer:e.astr,showQ:e.showQ}}):e._e(),e._v(" "),e.t%2==0?n("card-cover-back",{staticClass:"cardface"}):e._e(),e._v(" "),e.t%2!=0?n("card-content",{directives:[{name:"hammer-touch",rawName:"v-hammer-touch:swipeleft",value:e.flipAndIncrement,expression:"flipAndIncrement",arg:"swipeleft"},{name:"hammer-touch",rawName:"v-hammer-touch:swiperight",value:e.reverseAndDecrement,expression:"reverseAndDecrement",arg:"swiperight"},{name:"hammer-touch",rawName:"v-hammer-touch:tap",value:e.checkTapPosition,expression:"checkTapPosition",arg:"tap"}],staticClass:"cardface",attrs:{header:e.header,index:e.t,count:e.deck.cards.length,question:e.qstr,answer:e.astr,showQ:e.showQ}}):e._e(),e._v(" "),e.t%2!=0?n("card-cover-back",{staticClass:"cardface card-b"}):e._e()]],2)]),e._v(" "),-1==e.t?n("div",{staticClass:"dummy-row"}):e._e(),e._v(" "),-1==e.t||e.error||e.rating?e._e():n("div",{staticClass:"menu-items-row box-shadow"},[e.menu?e._e():n("span",{staticClass:"menu-icon shadow material-icons",on:{click:e.showMenu}},[e._v("menu")]),e._v(" "),e.menu?n("span"):e._e(),e._v(" "),e.menu&&e.t<e.deck.cards.length?n("span",{staticClass:"small-icon menu-icon material-icons",on:{click:e.showError}},[e._v("warning_amber")]):e._e(),e._v(" "),e.menu&&!e.hasRated?n("span",{staticClass:"small-icon menu-icon material-icons",on:{click:e.showRating}},[e._v("star_outline")]):e._e(),e._v(" "),e.menu&&e.$device.isMobile?n("span",{staticClass:"small-icon menu-icon material-icons",on:{click:e.shareDeck}},[e._v("share")]):e._e(),e._v(" "),e.menu?n("span"):e._e()]),e._v(" "),e.error?n("card-error",{staticClass:"error-row box-shadow",on:{error:e.submitError}}):e._e(),e._v(" "),e.rating?n("card-rating",{staticClass:"rating-row box-shadow",on:{rated:e.setRate}}):e._e()],1),e._v(" "),n("div",{staticClass:"bottom"},[n("div",{staticClass:"close-row"},[n("NuxtLink",{attrs:{to:"/"}},[n("span",{staticClass:"menu-icon material-icons"},[e._v("close")])])],1),e._v(" "),n("div",{staticClass:"copyright"},[e._v("© RmR, 2022")])])])}),[],!1,null,"5325f235",null);t.default=component.exports;installComponents(component,{KnoLogo:n(245).default,CardCover:n(726).default,CardCoverBack:n(727).default,CardContent:n(728).default,CardError:n(709).default,CardRating:n(710).default})}}]);