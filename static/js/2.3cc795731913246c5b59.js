webpackJsonp([2],{"54w3":function(t,e,i){var n=i("W/En"),s=i("ak9d");e.bind=function(t,e,i,o,r){return s.bind(t,i,function(i){var s=i.target||i.srcElement;i.delegateTarget=n(s,e,!0,t),i.delegateTarget&&o.call(t,i)},r)},e.unbind=function(t,e,i,n){s.unbind(t,e,i,n)}},BLLY:function(t,e){function i(t){if(t)return function(t){for(var e in i.prototype)t[e]=i.prototype[e];return t}(t)}t.exports=i,i.prototype.on=i.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},i.prototype.once=function(t,e){function i(){this.off(t,i),e.apply(this,arguments)}return i.fn=e,this.on(t,i),this},i.prototype.off=i.prototype.removeListener=i.prototype.removeAllListeners=i.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},!arguments.length)return this._callbacks={},this;var i,n=this._callbacks["$"+t];if(!n)return this;if(1===arguments.length)return delete this._callbacks["$"+t],this;for(var s=0;s<n.length;s++)if((i=n[s])===e||i.fn===e){n.splice(s,1);break}return this},i.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),i=this._callbacks["$"+t];if(i)for(var n=0,s=(i=i.slice(0)).length;n<s;++n)i[n].apply(this,e);return this},i.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},i.prototype.hasListeners=function(t){return!!this.listeners(t).length}},"D/Ps":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i.d(e,"indexof",function(){return n}),i.d(e,"findClosest",function(){return s}),i.d(e,"getWidth",function(){return o}),i.d(e,"percentage",function(){return r});var n=function(t,e){if(t.indexOf)return t.indexOf(e);for(var i=0;i<t.length;++i)if(t[i]===e)return i;return-1},s=function(t,e){for(var i=null,n=e[0],s=0;s<e.length;s++)i=Math.abs(t-n),Math.abs(t-e[s])<i&&(n=e[s]);return n};function o(t){var e=window.getComputedStyle(t,null).width;return"100%"===e||"auto"===e?0:parseInt(e,10)}var r={isNumber:function(t){return"number"==typeof t},of:function(t,e){if(r.isNumber(t)&&r.isNumber(e))return t/100*e},from:function(t,e){if(r.isNumber(t)&&r.isNumber(e))return t/e*100}}},HQjf:function(t,e,i){var n=i("D/Ps").indexof,s=/\s+/,o=Object.prototype.toString;function r(t){if(!t||!t.nodeType)throw new Error("A DOM element reference is required");this.el=t,this.list=t.classList}t.exports=function(t){return new r(t)},r.prototype.add=function(t){if(this.list)return this.list.add(t),this;var e=this.array();return~n(e,t)||e.push(t),this.el.className=e.join(" "),this},r.prototype.remove=function(t){if("[object RegExp]"===o.call(t))return this.removeMatching(t);if(this.list)return this.list.remove(t),this;var e=this.array(),i=n(e,t);return~i&&e.splice(i,1),this.el.className=e.join(" "),this},r.prototype.removeMatching=function(t){for(var e=this.array(),i=0;i<e.length;i++)t.test(e[i])&&this.remove(e[i]);return this},r.prototype.toggle=function(t,e){return this.list?(void 0!==e?e!==this.list.toggle(t,e)&&this.list.toggle(t):this.list.toggle(t),this):(void 0!==e?e?this.add(t):this.remove(t):this.has(t)?this.remove(t):this.add(t),this)},r.prototype.array=function(){var t=(this.el.getAttribute("class")||"").replace(/^\s+|\s+$/g,"").split(s);return""===t[0]&&t.shift(),t},r.prototype.has=r.prototype.contains=function(t){return this.list?this.list.contains(t):!!~n(this.array(),t)}},JMuZ:function(t,e,i){var n=i("ak9d"),s=i("54w3");function o(t,e){if(!(this instanceof o))return new o(t,e);if(!t)throw new Error("element required");if(!e)throw new Error("object required");this.el=t,this.obj=e,this._events={}}t.exports=o,o.prototype.sub=function(t,e,i){this._events[t]=this._events[t]||{},this._events[t][e]=i},o.prototype.bind=function(t,e){var i,o={name:(i=t.split(/ +/)).shift(),selector:i.join(" ")},r=this.el,a=this.obj,l=o.name;e=e||"on"+l;var c=[].slice.call(arguments,2),u=function(){var t=[].slice.call(arguments).concat(c);a[e].apply(a,t)};return o.selector?u=s.bind(r,o.selector,l,u):n.bind(r,l,u),this.sub(l,e,u),u},o.prototype.unbind=function(t,e){if(0===arguments.length)return this.unbindAll();if(1===arguments.length)return this.unbindAllOf(t);var i=this._events[t];if(i){var s=i[e];s&&n.unbind(this.el,t,s)}},o.prototype.unbindAll=function(){for(var t in this._events)this.unbindAllOf(t)},o.prototype.unbindAllOf=function(t){var e=this._events[t];if(e)for(var i in e)this.unbind(t,i)}},KGG3:function(t,e){},LMMr:function(t,e){(e=t.exports=function(t,e){return e=e||document,i=t,e.querySelector(i);var i}).all=function(t,e){return(e=e||document).querySelectorAll(t)},e.engine=function(t){if(!t.one)throw new Error(".one callback required");if(!t.all)throw new Error(".all callback required");return e.all=t.all,e}},Pbd3:function(t,e,i){var n=i("BLLY"),s=i("ak9d");function o(t,e){this.obj=e||{},this.el=t}t.exports=function(t,e){return new o(t,e)},n(o.prototype),o.prototype.bind=function(){var t=this.obj,e=this;function i(o){t.onmouseup&&t.onmouseup(o),s.unbind(document,"mousemove",n),s.unbind(document,"mouseup",i),e.emit("up",o)}function n(i){t.onmousemove&&t.onmousemove(i),e.emit("move",i)}return e.down=function(o){t.onmousedown&&t.onmousedown(o),s.bind(document,"mouseup",i),s.bind(document,"mousemove",n),e.emit("down",o)},s.bind(this.el,"mousedown",e.down),this},o.prototype.unbind=function(){s.unbind(this.el,"mousedown",this.down),this.down=null}},VQk6:function(t,e){},"W/En":function(t,e,i){var n=i("ipo4");t.exports=function(t,e,i){i=i||document.documentElement;for(;t&&t!==i;){if(n(t,e))return t;t=t.parentNode}return n(t,e)?t:null}},Yjpo:function(t,e){},ak9d:function(t,e){var i=window.addEventListener?"addEventListener":"attachEvent",n=window.removeEventListener?"removeEventListener":"detachEvent",s="addEventListener"!==i?"on":"";e.bind=function(t,e,n,o){return t[i](s+e,n,o||!1),n},e.unbind=function(t,e,i,o){return t[n](s+e,i,o||!1),i}},ipo4:function(t,e,i){var n=i("LMMr"),s=window.Element.prototype,o=s.matches||s.webkitMatchesSelector||s.mozMatchesSelector||s.msMatchesSelector||s.oMatchesSelector;t.exports=function(t,e){if(!t||1!==t.nodeType)return!1;if(o)return o.call(t,e);for(var i=n.all(e,t.parentNode),s=0;s<i.length;++s)if(i[s]===t)return!0;return!1}},qp4O:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("uqwL"),s=i("YxJB"),o=i("3Lt7"),r={name:"x-progress",mixins:[i("f6Hi").a],props:{percent:{type:Number,default:0},showCancel:{type:Boolean,default:!0}},methods:{cancel:function(){this.$emit("on-cancel")}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-progress"},[e("div",{staticClass:"weui-progress__bar"},[e("div",{staticClass:"weui-progress__inner-bar",style:{width:this.percent+"%"}})]),this._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:this.showCancel,expression:"showCancel"}],staticClass:"weui-progress_opr",attrs:{href:"javascript:;"}},[e("i",{staticClass:"weui-icon-cancel",on:{click:this.cancel}})])])},staticRenderFns:[]};var l=i("VU/8")(r,a,!1,function(t){i("KGG3")},null,null).exports,c=i("D/Ps"),u=c.findClosest,h=c.getWidth,p=c.percentage,d=i("HQjf"),f=i("Pbd3"),m=i("JMuZ");function y(t,e){this.element=t,this.options=e||{},this.slider=this.create("span","range-bar"),this.hasAppend=!1,null!==this.element&&"text"===this.element.type&&this.init(),this.options.step&&this.step(this.slider.offsetWidth||this.options.initialBarWidth,h(this.handle)),this.setStart(this.options.start)}y.prototype.setStart=function(t){var e=null===t?this.options.min:t,i=p.from(e-this.options.min,this.options.max-this.options.min)||0,n=p.of(i,this.slider.offsetWidth-this.handle.offsetWidth),s=this.options.step?u(n,this.steps):n;this.setPosition(s),this.setValue(this.handle.style.left,this.slider.offsetWidth-this.handle.offsetWidth)},y.prototype.setStep=function(){this.step(h(this.slider)||this.options.initialBarWidth,h(this.handle))},y.prototype.setPosition=function(t){this.handle.style.left=t+"px",this.slider.querySelector(".range-quantity").style.width=t+"px"},y.prototype.onmousedown=function(t){t.touches&&(t=t.touches[0]),this.startX=t.clientX,this.handleOffsetX=this.handle.offsetLeft,this.restrictHandleX=this.slider.offsetWidth-this.handle.offsetWidth,this.unselectable(this.slider,!0)},y.prototype.changeEvent=function(t){if("function"!=typeof Event&&document.fireEvent)this.element.fireEvent("onchange");else{var e=document.createEvent("HTMLEvents");e.initEvent("change",!1,!0),this.element.dispatchEvent(e)}},y.prototype.onmousemove=function(t){t.preventDefault(),t.touches&&(t=t.touches[0]);var e=this.handleOffsetX+t.clientX-this.startX,i=this.steps?u(e,this.steps):e;e<=0?this.setPosition(0):e>=this.restrictHandleX?this.setPosition(this.restrictHandleX):this.setPosition(i),this.setValue(this.handle.style.left,this.slider.offsetWidth-this.handle.offsetWidth)},y.prototype.unselectable=function(t,e){d(this.slider).has("unselectable")||!0!==e?d(this.slider).remove("unselectable"):d(this.slider).add("unselectable")},y.prototype.onmouseup=function(t){this.unselectable(this.slider,!1)},y.prototype.disable=function(t){(this.options.disable||t)&&(this.mouse.unbind(),this.touch.unbind()),this.options.disable&&(this.options.disableOpacity&&(this.slider.style.opacity=this.options.disableOpacity),d(this.slider).add("range-bar-disabled"))},y.prototype.init=function(){this.hide(),this.append(),this.bindEvents(),this.checkValues(this.options.start),this.setRange(this.options.min,this.options.max),this.disable()},y.prototype.reInit=function(t){this.options.start=t.value,this.options.min=t.min,this.options.max=t.max,this.options.step=t.step,this.disable(!0),this.init()},y.prototype.checkStep=function(t){return t<0&&(t=Math.abs(t)),this.options.step=t,this.options.step},y.prototype.setValue=function(t,e){var i=p.from(parseFloat(t),e);if("0px"===t||0===e)n=this.options.min;else{var n=p.of(i,this.options.max-this.options.min)+this.options.min;(n=this.options.decimal?Math.round(100*n)/100:Math.round(n))>this.options.max&&(n=this.options.max)}var s;s=this.element.value!==n,this.element.value=n,this.options.callback(n),s&&this.changeEvent()},y.prototype.checkValues=function(t){t<this.options.min&&(this.options.start=this.options.min),t>this.options.max&&(this.options.start=this.options.max),this.options.min>=this.options.max&&(this.options.min=this.options.max)},y.prototype.step=function(t,e){for(var i=t-e,n=p.from(this.checkStep(this.options.step),this.options.max-this.options.min),s=p.of(n,i),o=[],r=0;r<=i;r+=s)o.push(r);this.steps=o;for(var a=10;a>=0;a--)this.steps[o.length-a]=i-s*a;return this.steps},y.prototype.create=function(t,e){var i=document.createElement(t);return i.className=e,i},y.prototype.insertAfter=function(t,e){t.parentNode.insertBefore(e,t.nextSibling)},y.prototype.setRange=function(t,e){"number"!=typeof t||"number"!=typeof e||this.options.hideRange||(this.slider.querySelector(".range-min").innerHTML=this.options.minHTML||t,this.slider.querySelector(".range-max").innerHTML=this.options.maxHTML||e)},y.prototype.generate=function(){var t={handle:{type:"span",selector:"range-handle"},min:{type:"span",selector:"range-min"},max:{type:"span",selector:"range-max"},quantity:{type:"span",selector:"range-quantity"}};for(var e in t)if(t.hasOwnProperty(e)){var i=this.create(t[e].type,t[e].selector);this.slider.appendChild(i)}return this.slider},y.prototype.append=function(){if(!this.hasAppend){var t=this.generate();this.insertAfter(this.element,t)}this.hasAppend=!0},y.prototype.hide=function(){this.element.style.display="none"},y.prototype.bindEvents=function(){this.handle=this.slider.querySelector(".range-handle"),this.touch=m(this.handle,this),this.touch.bind("touchstart","onmousedown"),this.touch.bind("touchmove","onmousemove"),this.touch.bind("touchend","onmouseup"),this.mouse=f(this.handle,this),this.mouse.bind()};var v={callback:function(){},decimal:!1,disable:!1,disableOpacity:null,hideRange:!1,min:0,max:100,start:null,step:null,vertical:!1},g={name:"range",props:{decimal:Boolean,value:{default:0,type:Number},min:{type:Number,default:0},minHTML:String,maxHTML:String,max:{type:Number,default:100},step:{type:Number,default:1},disabled:Boolean,disabledOpacity:Number,rangeBarHeight:{type:Number,default:1},rangeHandleHeight:{type:Number,default:30}},created:function(){this.currentValue=this.value},mounted:function(){var t=this,e=this;this.$nextTick(function(){var i={callback:function(t){e.currentValue=t},decimal:t.decimal,start:t.currentValue,min:t.min,max:t.max,minHTML:t.minHTML,maxHTML:t.maxHTML,disable:t.disabled,disabledOpacity:t.disabledOpacity,initialBarWidth:window.getComputedStyle(t.$el.parentNode).width.replace("px","")-80};0!==t.step&&(i.step=t.step),t.range=new function(t,e){e=e||{};for(var i in v)null==e[i]&&(e[i]=v[i]);return new y(t,e)}(t.$el.querySelector(".vux-range-input"),i);var n=(t.rangeHandleHeight-t.rangeBarHeight)/2;t.$el.querySelector(".range-handle").style.top="-"+n+"px",t.$el.querySelector(".range-bar").style.height=t.rangeBarHeight+"px",t.handleOrientationchange=function(){t.update()},window.addEventListener("orientationchange",t.handleOrientationchange,!1)})},methods:{update:function(){console.log("update",this.currentValue);var t=this.currentValue;t<this.min&&(t=this.min),t>this.max&&(t=this.max),this.range.reInit({min:this.min,max:this.max,step:this.step,value:t}),this.currentValue=t,this.range.setStart(this.currentValue),this.range.setStep()}},data:function(){return{currentValue:0}},watch:{currentValue:function(t){this.range&&this.range.setStart(t),this.$emit("input",t),this.$emit("on-change",t)},value:function(t){this.currentValue=t},min:function(){this.update()},step:function(){this.update()},max:function(){this.update()}},beforeDestroy:function(){window.removeEventListener("orientationchange",this.handleOrientationchange,!1)}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-range-input-box",staticStyle:{position:"relative","margin-right":"30px","margin-left":"50px"}},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentValue,expression:"currentValue",modifiers:{number:!0}}],staticClass:"vux-range-input",domProps:{value:t.currentValue},on:{input:function(e){e.target.composing||(t.currentValue=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])},staticRenderFns:[]};var x=i("VU/8")(g,b,!1,function(t){i("Yjpo")},null,null).exports,w={name:"box",props:{gap:String}},k={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{style:{margin:this.gap}},[this._t("default")],2)},staticRenderFns:[]},_=i("VU/8")(w,k,!1,null,null,null).exports,L=i("Msp2"),M=i("63CM"),E=function(t,e){return(new Array(e).join(0)+t).slice(-e)},T={directives:{TransferDom:i.n(M).a},components:{Blur:n.a,Flexbox:s.a,FlexboxItem:o.a,XProgress:l,Box:_,Actionsheet:L.a,Range:x},beforeCreate:function(){this.$nextTick(function(){})},created:function(){},beforeMount:function(){},mounted:function(){var t=this;this.createMenu(),this.$nextTick(function(){t.url=t.playList[t.index].coverUrl})},beforeDestroy:function(){},destroyed:function(){},computed:{},methods:{updateTime:function(t){var e=this;if(this.isStop=t.target.ended,t.target.ended)switch(this.play=!1,this.playback){case 0:setTimeout(function(){e.nextMusic()},100);break;case 1:setTimeout(function(){e.loopMusic()},100);break;case 2:setTimeout(function(){e.randomMusic()},100)}this.player=t.target.currentTime/document.getElementById("music").duration*100,this.currentTime=E(parseInt(t.target.currentTime/60),2)+":"+E(parseInt(t.target.currentTime%60),2),this.duration=E(parseInt(t.target.duration/60),2)+":"+E(parseInt(t.target.duration%60),2)},change:function(){document.getElementById("music").currentTime=this.player*document.getElementById("music").duration/100},circulation:function(){this.$vux.toast.show({type:"text",position:"center",text:2!==this.playback?this.cir[this.playback+1]:this.cir[0]}),this.playback<this.cir.length-1?this.playback++:this.playback=0},collect:function(t){this.$vux.toast.show({type:"text",position:"center",text:t})},togglePlay:function(){var t=document.getElementById("music");this.play?(t.pause(),this.play=!this.play):(t.play(),this.play=!this.play)},nextMusic:function(){var t=document.getElementById("music");this.index<this.playList.length-1?(this.updateTitle(this.playList[this.index+1].name),t.src=this.playList[this.index+1].src,t.play(),this.url=this.playList[this.index+1].coverUrl,this.play=!0,this.index++):(this.index=0,this.updateTitle(this.playList[this.index].name),t.src=this.playList[this.index].src,t.play(),this.url=this.playList[this.index].coverUrl,this.play=!0)},lastMusic:function(){var t=document.getElementById("music");this.index>0?(this.updateTitle(this.playList[this.index-1].name),t.src=this.playList[this.index-1].src,t.play(),this.url=this.playList[this.index-1].coverUrl,this.play=!0,this.index--):(this.index=this.playList.length-1,this.updateTitle(this.playList[this.index].name),t.src=this.playList[this.index].src,t.play(),this.url=this.playList[this.index].coverUrl,this.play=!0)},loopMusic:function(){var t=document.getElementById("music");this.updateTitle(this.playList[this.index].name),t.src=this.playList[this.index].src,t.play(),this.play=!0},randomMusic:function(){var t=document.getElementById("music"),e=Math.floor(Math.random()*this.playList.length);this.updateTitle(this.playList[e].name),t.src=this.playList[e].src,t.play(),this.url=this.playList[e].coverUrl,this.play=!0},createMenu:function(){this.menus.push({label:"播放列表",type:"info"});for(var t in this.playList)this.menus.push({label:'<div style="text-align: left;padding: 0 1rem;"><span style="font-size: 1.1rem">'+this.playList[t].name+"</span></div>",value:this.playList[t].id})},playMenu:function(t,e){var i=document.getElementById("music");this.updateTitle(this.playList[t-1].name),i.src=this.playList[t-1].src,i.play(),this.url=this.playList[t-1].coverUrl,this.play=!0},updateTitle:function(t){this.$store.dispatch("updateTitle",t)}},data:function(){return{playback:0,cir:["列表循环","单曲循环","随机播放"],url:"",showHideOnBlur:!1,player:0,musicUrl:this.$route.params.src,index:this.$route.params.index,musicTwoUrl:"./static/music/music-2.mp3",discUrl:"./static/images/needle-plus-2.png",discTopUrl:"./static/images/needle-top.png",play:!1,duration:"--:--",currentTime:"00:00",playList:this.$route.params.playlist,songMenu:!1,singer:!1,hide:"<span></span>",singerInfo:{"language.noop":'<span class="menu-title">快捷菜单</span>',"zh-CN":"歌手：徐秉龙",en:"专辑： 迂回",third:"收藏到歌单"},menus:[]}}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"song-play"},[i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("actionsheet",{attrs:{menus:t.menus,"show-cancel":!0,"cancel-text":"关闭"},on:{"on-click-menu-delete":t.onDelete,"on-click-menu":t.playMenu},model:{value:t.songMenu,callback:function(e){t.songMenu=e},expression:"songMenu"}})],1),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("actionsheet",{attrs:{menus:t.singerInfo},model:{value:t.singer,callback:function(e){t.singer=e},expression:"singer"}})],1),t._v(" "),i("img",{staticClass:"needle-top",attrs:{src:t.discTopUrl}}),t._v(" "),i("img",{class:{stop:!t.play},attrs:{id:"disc",src:t.discUrl}}),t._v(" "),i("blur",{staticStyle:{background:"rgba(0,0,0,.2)",height:"100%"},attrs:{"blur-amount":40,url:t.url}},[i("div",{class:[{player:!0},{play:t.play}]},[i("img",{attrs:{id:"play_cover",src:t.url}})]),t._v(" "),i("div",{staticClass:"play-control"},[i("div",{staticStyle:{padding:"0 10%",height:"30%"}},[i("flexbox",{attrs:{align:"center"}},[i("flexbox-item",[i("i",{staticClass:"iconfont icon-dynmenulikenormal",on:{click:function(e){t.collect("已添加到我喜欢的音乐")}}})]),t._v(" "),i("flexbox-item",[i("i",{staticClass:"iconfont icon-xiazai",on:{click:function(e){t.collect("已添加到下载列表")}}})]),t._v(" "),i("flexbox-item",[i("i",{staticClass:"iconfont icon-dyncomments",on:{click:function(e){t.collect("评论暂未开放")}}})]),t._v(" "),i("flexbox-item",[i("i",{staticClass:"iconfont icon-more",staticStyle:{transform:"rotate(90deg)",display:"inline-block"},on:{click:function(e){t.singer=!t.singer}}})])],1)],1),t._v(" "),i("div",{staticClass:"play-progress"},[i("box",{staticStyle:{position:"relative"},attrs:{gap:"10px"}},[i("span",{staticStyle:{left:"-2.9rem"}},[t._v(t._s(t.currentTime))]),t._v(" "),i("range",{attrs:{minHTML:t.hide,maxHTML:t.hide},nativeOn:{touchmove:function(e){t.change(e)}},model:{value:t.player,callback:function(e){t.player=e},expression:"player"}}),t._v(" "),i("span",{staticStyle:{right:"-2.9rem"}},[t._v(t._s(t.duration))])],1)],1),t._v(" "),i("div",{staticStyle:{height:"40%"}},[i("flexbox",{attrs:{align:"center"}},[i("audio",{attrs:{id:"music",src:t.musicUrl,controls:"",preload:""},on:{timeupdate:t.updateTime}}),t._v(" "),i("flexbox-item",[i("i",{staticClass:"iconfont",class:{"icon-xunhuanbofang":0==t.playback,"icon-danquxunhuan":1==t.playback,"icon-suijibofang":2==t.playback},staticStyle:{"font-size":"1.6rem"},on:{click:t.circulation}})]),t._v(" "),i("flexbox-item",[i("i",{staticClass:"iconfont icon-next",staticStyle:{"font-size":"2rem",transform:"rotate(180deg)",display:"inline-block"},on:{click:t.lastMusic}})]),t._v(" "),i("flexbox-item",[i("i",{staticClass:"iconfont",class:{"icon-videoplay":!t.play,"icon-pause":t.play},staticStyle:{"font-size":"2.5rem"},on:{click:t.togglePlay}})]),t._v(" "),i("flexbox-item",[i("i",{staticClass:"iconfont icon-next",staticStyle:{"font-size":"2rem"},on:{click:t.nextMusic}})]),t._v(" "),i("flexbox-item",[i("i",{staticClass:"iconfont icon-playlist",staticStyle:{"font-size":"1.6rem"},on:{click:function(e){t.songMenu=!t.songMenu}}})])],1)],1)])])],1)},staticRenderFns:[]};var C=i("VU/8")(T,S,!1,function(t){i("VQk6")},"data-v-2c310ff6",null);e.default=C.exports}});
//# sourceMappingURL=2.3cc795731913246c5b59.js.map