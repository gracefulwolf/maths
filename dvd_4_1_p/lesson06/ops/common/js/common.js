var commonUrl="../common/",GlobalRepeatDelay=.5,touchstart="mousedown",touchmove="mousemove",touchend="mouseup",isMobile=!1,isIE11=navigator.userAgent.match("Trident/7.0")?!0:!1;(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)&&"ontouchend"in document)&&(touchstart="touchstart",touchmove="touchmove",touchend="touchend",isMobile=!0),function(t){t.extend({getUrlVars:function(){for(var t,e=[],i=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),n=0;n<i.length;n++)t=i[n].split("="),e.push(t[0]),e[t[0]]=t[1];return e},getUrlVar:function(e){return t.getUrlVars()[e]},getNumbers:function(t,e){for(var i=[],n=t;e+1>n;n++)i.push(n);return i},makeRandom:function(t,e){var i,n,s,o=new Array,a=new Array,r=new Array;for(s=0;t>s;s++)r[s]=s;for(s=0;t>s;s++){i=Math.floor(Math.random()*(t-s)),n=r[i],o[s]=n;for(var l=i;t-s-1>l;l++)r[l]=r[l+1]}for(s=0;e>s;s++)a[s]=o[s];return a},trim:function(t){return t.replace(/(^\s*)|(\s*$)/gi,"")},trimLeft:function(t){return t.replace(/^\s*/g,"")},trimRight:function(t){return t.replace(/\s*$/g,"")},pad:function(t,e){var i="0000"+t;return i.substr(i.length-e)},complement:function(t,e){for(var i=[],n=[],s=0;s<t.length;s++)n.push(t[s]);for(var s=0;s<e.length;s++)n[s]&&e[s]?i.push(!0):i.push(!1);return i},getObject:function(t,e,i){for(var n in t)if(t[n][e]==i)return t[n]},getRangeToArray:function(t){var e=t;if(t.length>1){var i=parseInt(t[0]),n=parseInt(t[1]);e=[];for(var s=i;n>=s;s++)e.push(s)}return e},checkBroswerIE:function(){var t=navigator.userAgent.toLowerCase();return"Netscape"==navigator.appName&&-1!=navigator.userAgent.search("Trident")||-1!=t.indexOf("msie")?!0:!1},numberSortAsc:function(t,e){return t-e},numberSortDesc:function(t,e){return e-t},sum:function(t,e){return t+e}}),t.fn.extend({getTransform:function(){var t=void 0,e=this.css("transform");if("none"==e||void 0==e)return t;var i=e.split("(")[1].split(")")[0].split(",");if(i.length>0){t={};var n=i[0],s=i[1];i[2],i[3];t.scale=Math.sqrt(Math.pow(n,2)+Math.pow(s,2));var o=Math.atan2(s,n);t.angle=o*(180/Math.PI),t.angle=t.angle<0?t.angle+360:t.angle,t.x=i[13]||i[4],t.y=i[14]||i[5],t.x=Math.round(t.x/t.scale),t.y=Math.round(t.y/t.scale)}return t},animateRotateY:function(e,i,n,s,o){var a=t.speed(n,s,o),r=a.step;return this.each(function(n,s){a.complete=t.proxy(a.complete,s),a.step=function(e){return t(s).data("rotateY",e),t.style(s,"transform","rotateY("+e+"deg)"),r?r.apply(s,arguments):void 0},t({deg:e}).animate({deg:i},a)})},hitTestPointNew:function(t){var e=!1,i=this[0],n=i.getBoundingClientRect();return t.x>n.left&&t.x<n.right&&t.y>n.top&&t.y<n.bottom&&(e=!0),e}})}(jQuery),function(t){"use strict";var e=e||function(){function e(){var e=this;t(".btn-more-step").on("click",function(){console.log("한걸음더")}),t(".twins-tabs .tab").on("click",function(){GlobalAudio.play("button");var e=t(this).index(),i=t(this).parents(".popup");i.data("instance").close();var n=t(".popup-twins").eq(e);n.data("instance").open()}),t(".mission .btn-skip").on("click",function(){GlobalAudio.play("button");var e=t(".mission > .video-player"),i=e.data("instance").video.duration;e.data("instance").pause(),e.data("instance").seek(i),t(this).hide(),e.find(".btn-center").hide(),e.addClass("still")}),t("*[data-ui='quizMain']").on("QUIZ_CHECK_ANSWER_ALL",function(){e.playAudioList_idx=0,e.playAudioList=[],e.stopAudio()}),t("*[data-ui='quizMain']").on("QUIZ_SHOW_ANSWER",function(){e.playAudioList_idx=0,e.playAudioList=[],e.stopAudio()}),t("*[data-ui='quizMain']").on("QUIZ_RESET_ANSWER",function(){e.playAudioList_idx=0,e.playAudioList=[],e.stopAudio()}),t(".btn-audio").each(function(e){t(this).attr("idx")||t(this).attr("idx",e)}),t(".btn-audio").on("click",function(){var i=t(this).attr("data-id");if(i)return void GlobalAudio.play(i);var n=t(this).attr("idx"),s=t(this).attr("idx").split(",");if(n.indexOf("-")>-1){var o=parseInt(n.split("-")[0]),a=parseInt(n.split("-")[1]);s=t.getNumbers(o,a)}e.playAudioList=s,e.playAudioList_idx=0,e.textSync="true"==t(this).attr("text-sync")?!0:!1,t(".btn-audio.active").removeClass("active"),t(this).addClass("active");var r=t(this).attr("toggle");"toggle"==r?"true"==t(this).attr("play-pause")?(console.log("play/pause 버튼"),t(this).hasClass("toggle")?(null!=e.nowAudio&&(e.nowAudio.pause(),t(this).trigger("ON_PLAY_PAUSE")),t(this).removeClass("toggle")):(null!=e.nowAudio&&parseInt(s)==e.play_idx?(console.log("play-pause :: 계속 재생!!"),e.nowAudio.play(),t(this).trigger("ON_PLAY_RESUME")):(t(".btn-audio.toggle").removeClass("toggle"),e.playListIdx(),t(this).trigger("ON_PLAY_START"),t(this).data("syncIdx",0)),t(this).addClass("toggle"))):(console.log("play/stop 버튼"),t(this).hasClass("toggle")?(e.stopAudio(),t(this).removeClass("toggle"),t(this).removeClass("active")):(t(".btn-audio.toggle").removeClass("toggle"),e.playListIdx(),t(this).addClass("toggle"))):(e.stopAudio(),e.playListIdx(),t(this).trigger("ON_PLAY_START"))}),t(".btn-audio-stop").on("click",function(){e.playAudioList_idx=0,e.playAudioList=[],e.stopAudio()}),t(".audio-text").on("click",function(){t(".btn-audio.toggle").removeClass("toggle"),e.reset(),e.playAudioText(t(this))}),this.element.find(".btns-number .btn").on("click",function(){var i=t(this).index(),s=t(this).attr("data-href");s&&n.call(e,i,s)}),t(window).on("FULLPOPUP_CLOSE",function(){var i=t(".content .scroll-box").data("scrollbar");i&&(i.scroll(0),i.update()),e.reset()}),t(window).on("ON_CORNER_RETRY",function(){console.log("-------> RETRY"),e.retry()}),t(window).on("ON_CORNER_RESET",function(){console.log("-------> CORNER_RESET"),e.reset()})}function i(){}function n(t,e){}function s(){for(var t=this.playAudioList,e=0;e<t.length;e++){var i=parseInt(t[e]),n=this.audioList[i].audio;4!=n.readyState&&n.load()}}return Class.extend({init:function(i,n){this.element=i,this.options=n;this.timer=null,this.data=null,this.soundsDurationData=null,this.soundsDurationIndex=null,this.soundsDurationInSection=!1,this.nowAudioText=null,this.nowAudio=null,this.audioList=[],this.play_idx=null,this.playAudioList=[],this.playAudioList_idx=0,this.textSync=!1,this.tabIdx=0,this.arrIdx=0;var s=t.getUrlVars();s.arrIdx&&(this.arrIdx=parseInt(s.arrIdx)),console.log(window.location.href),isMobile||(t(".content-container *[class*='btn-']").each(function(e){t(this).hasClass("hide-btn-check")||(t(this).on("mouseenter",function(e){t(this).addClass("hover");var i=t(this).attr("targetElement");i&&t(i).addClass("hover")}),t(this).on("mouseleave",function(e){t(this).removeClass("hover");var i=t(this).attr("targetElement");i&&t(i).removeClass("hover")}))}),t(".audio-text").not(".not-active").each(function(e){t(this).on("mouseenter",function(e){t(this).addClass("hover")}),t(this).on("mouseleave",function(e){t(this).removeClass("hover")})})),e.call(this)},setData:function(t){this.data=t,this.options.tabIdx&&(this.tabIdx=this.options.tabIdx||0),this.element.find(".top-tab .btn").eq(this.tabIdx).addClass("active"),this.options.arrIdx&&(this.arrIdx=this.options.arrIdx||0),this.element.find(".arrow-tab .btn").not(this.element.find(".arrow-tab .btn").eq(this.arrIdx)).addClass("active"),"number"==typeof this.data.tabIdx&&console.log("tabIdx: ",this.data.tabIdx),"number"==typeof this.data.arrIdx&&console.log("arrIdx: ",this.data.arrIdx),this.data.soundData&&this.setAudio(),i.call(this)},onUpdateAudio:function(t,e){var i=t.currentTime,n=this.element.find(".btn-audio.toggle");if(n.length>0){var s=n.data("syncIdx"),o=n.data("syncData");if(!o)return;i>o[s]&&(s++,n.data("syncIdx",s),n.trigger("ON_SYNC_COUNT",{idx:s}))}},onFinishAudio:function(t,e){var i=this,n=this.element.find(".btn-audio.toggle"),s=n.data("syncData");n.length>0&&s&&n.trigger("ON_SYNC_FINISH"),this.playAudioList_idx++,this.playAudioList_idx<this.playAudioList.length?this.timer=setTimeout(function(){i.play_idx=parseInt(i.playAudioList[i.playAudioList_idx]),i.playIdx()},1e3*GlobalRepeatDelay):(this.stopAudio(),this.element.find(".btn-audio.active").removeClass("active"),this.element.find(".btn-audio.toggle").removeClass("toggle"))},setAudio:function(){for(var e=0;e<this.data.soundData.length;e++){var i=this.data.soundData[e],n=new AudioControl(i,{onFinish:t.proxy(this.onFinishAudio,this),onUpdate:t.proxy(this.onUpdateAudio,this)});this.audioList.push(n)}},playAudioText:function(t){this.textSync=!1,this.element.find(".btn-audio.active").removeClass("active");var e=parseInt(t.attr("audio-idx"));this.play_idx=e,this.playIdx(),this.nowAudioText=t,this.nowAudioText.hasClass("not-active")||this.nowAudioText.addClass("active")},playAudioIdx:function(t){null!=this.nowAudio&&(this.nowAudio.stop(),this.nowAudio.audio.currentFrame=0),this.nowAudio=this.audioList[t],this.nowAudio.audio.readyState>0&&(this.nowAudio.audio.currentFrame=0),this.nowAudio.play(),this.textSync&&(null!=this.nowAudioText&&this.nowAudioText.removeClass("active repeat"),this.nowAudioText=this.element.find(".audio-text[audio-idx='"+t+"']"),this.nowAudioText.hasClass("not-active")||this.nowAudioText.addClass("active"))},playIdx:function(){null!=this.nowAudio&&this.nowAudio.pause(),this.playAudioIdx(this.play_idx)},stopAudio:function(){clearTimeout(this.timer),null!=this.nowAudio&&(this.nowAudio.stop(),this.nowAudio.audio.currentTime&&(this.nowAudio.audio.currentTime=0),this.nowAudio=null,this.playAudioList_idx>=this.playAudioList.length&&(t(".btn-audio.active").removeClass("active"),t(".btn-audio.toggle").removeClass("toggle"),this.textSync=!1)),null!=this.nowAudioText&&this.nowAudioText.removeClass("active")},playListIdx:function(){this.playAudioList.length>1?(s.call(this),this.play_idx=parseInt(this.playAudioList[0]),this.playIdx()):(this.play_idx=parseInt(this.playAudioList[0]),this.playIdx())},showScript:function(){this.reset(),this.data.script&&t(this.data.script).data("instance").open()},showFullPopup:function(){this.reset(),t("#content_full").addClass("active"),t("#content_container").addClass("hide-alpha"),CallToMain({type:"SHOW_CONTENT_FULL"})},goLink:function(t){},setSoundsDuration:function(e){var i=this;this.soundsDurationData=e,this.soundsDurationIndex=0;var n=this.audioList[e.soundIndex],s=n.audio;t(s).on("ON_UPDATE",function(t,n){if(!(i.soundsDurationIndex>=e.sceneData.length)){var s=t.target.currentTime,o=e.sceneData[i.soundsDurationIndex][0],a=e.sceneData[i.soundsDurationIndex][1];s>o&&1!=i.soundsDurationInSection&&(i.soundsDurationInSection=!0,e.callback&&e.callback({type:"START",index:i.soundsDurationIndex})),s>a&&1==i.soundsDurationInSection&&(i.soundsDurationInSection=!1,e.callback&&e.callback({type:"STOP",index:i.soundsDurationIndex}),i.soundsDurationIndex++)}}),t(s).on("ON_STOP",function(t){i.soundsDurationIndex=0,i.soundsDurationInSection=!1,e.callback&&e.callback({type:"STOP",index:0})})},retry:function(){},reset:function(){this.playAudioList_idx=0,this.playAudioList=[],this.element.find(".video-player").each(function(){t(this).hasClass("still")||t(this).data("instance").reset()}),this.element.find(".audio-player").each(function(){t(this).data("instance").reset()}),t(".app-drawing-tool").each(function(){t(this).data("instance").reset()}),t(".app-angle-tool").each(function(){console.log(this),t(this).data("instance").reset()}),this.stopAudio();try{CcAniControl.reset()}catch(e){}},dispose:function(){}})}();window.ICorner=e}(jQuery),function(t){"use strict";var e=e||function(){return Class.extend({init:function(t,e){this.element=t,this.options=e,this.answerSelector="."+this.element.attr("id")+"-answer",this.eventId="."+Date.now()+Math.random().toFixed(3)},start:function(){this.element.show().removeClass("finish").addClass("start").trigger("quizStart")},showAnswer:function(){t(this.options.answerElement).addClass("show"),t(this.answerSelector).addClass("show")},checkAnswer:function(){},resetAnswer:function(){t(this.options.answerElement).removeClass("show"),t(this.answerSelector).removeClass("show")},hideAnswer:function(){t(this.options.answerElement).removeClass("show"),t(this.answerSelector).removeClass("show")},dispose:function(){}})}();window.IQuiz=e}(jQuery),function(t){"use strict";var e=e||function(){function e(){var e=this,i="<video playsinline><source src='"+this.source+"' type='video/mp4' /></video>";this.video=t(i)[0],t(this.video).on("loadedmetadata",function(t){e.target.trigger("ON_LOADEDMETADATA",t)}),this.video.load(),this.target.append(t(this.video))}function i(){if(this.video.currentTime>=this.video.duration)this.video.pause(),this.options.onUpdate&&this.options.onUpdate(this.video,1),this.options.onFinish&&this.options.onFinish(this.video),this.callBack&&(this.callBack(),this.callBack=null),clearInterval(this.timer);else{var t=(this.video.currentTime,this.video.duration,this.video.currentTime/this.video.duration);this.options.onUpdate&&this.options.onUpdate(this.video,t)}}return Class.extend({init:function(i,n,s){this.target=i,this.source=n,this.video,this.timer,this.options={onFinish:null,onUpdate:null,controls:""},this.callback=null,t.extend(this.options,s),e.call(this)},setSource:function(t){this.video.src=t},play:function(e,n){if(this.video.paused){n&&(this.callBack=n),e&&(this.video.currentTime=this.video.duration*e);var s=this.video.play();void 0!==s&&s.then(function(){})["catch"](function(t){}),this.timer=setInterval(t.proxy(i,this),1e3/30),i.call(this)}},pause:function(){this.video.paused||(this.video.pause(),clearInterval(this.timer))},stop:function(){this.video.paused||(this.video.pause(),this.video.currentTime=0,clearInterval(this.timer)),this.video.currentTime&&(this.video.currentTime=0)},volume:function(t){0==t?this.video.muted=!0:this.video.muted=!1,this.video.volume=t},fullscreen:function(){this.video.requestFullscreen?this.video.requestFullscreen():this.video.mozRequestFullScreen?this.video.mozRequestFullScreen():this.video.webkitRequestFullscreen?this.video.webkitRequestFullscreen():this.video.msRequestFullscreen?this.video.msRequestFullscreen():this.video.webkitEnterFullscreen&&this.video.webkitEnterFullscreen()},dispose:function(){t(this.video).remove(),this.video=null,clearInterval(this.timer)}})}();window.VideoControl=e}(jQuery),function(t){"use strict";var e=e||function(){function i(){this.options.preload?(t(this.audio),this.audio=t("<audio preload='"+this.options.preload+"'><source src='"+this.source+"' type='audio/mpeg' /></audio>")[0]):this.audio=t("<audio preload='none'><source src='"+this.source+"' type='audio/mpeg' /></audio>")[0],t("body").find("#audio-container").length<1&&t("body").append(t('<div id="audio-container"></div>')),t("body #audio-container").append(t(this.audio)),e.audioList.push(this.audio)}function n(){if(t(this.audio).trigger("ON_UPDATE",{target:this}),this.audio.currentTime>=this.audio.duration)this.audio.pause(),this.audio.currentTime=0,this.options.onUpdate&&this.options.onUpdate(this.audio,1),this.options.onFinish&&this.options.onFinish(this.audio,{type:"normal"}),this.loop?this.audio.play():clearInterval(this.timer);else{var e=(this.audio.currentTime,this.audio.duration,this.audio.currentTime/this.audio.duration);this.options.onUpdate&&this.options.onUpdate(this.audio,e)}}return Class.extend({init:function(e,n){this.audio,this.source=e,this.timer,this.options={onFinish:null,onUpdate:null,loop:!1},t.extend(this.options,n),i.call(this)},play:function(e){if(this.audio.paused){e&&(this.audio.currentTime=this.audio.duration*e,console.log(">>>>>>>>>>>>>>>>>>>>>>>",e));var i=this.audio.play();void 0!==i&&i.then(function(){})["catch"](function(t){}),this.timer=setInterval(t.proxy(n,this),1e3/30),n.call(this)}},pause:function(){this.audio.paused||(this.audio.pause(),clearInterval(this.timer))},stop:function(){this.audio.paused||(this.audio.pause(),this.audio.currentTime>0&&(this.audio.currentTime=0),clearInterval(this.timer)),t(this.audio).trigger("ON_STOP")},dispose:function(){t(this.audio).remove(),this.audio=null,clearInterval(this.timer)}})}();e.audioList=[],window.AudioControl=e}(jQuery),function(t){"use strict";var e=e||function(){var t={},e=null,i={init:function(){return this.addAudio("button",commonUrl+"audio/click.mp3"),this.addAudio("answer",commonUrl+"audio/click.mp3"),this.addAudio("quiz_o",commonUrl+"audio/quiz_o.mp3"),this.addAudio("quiz_x",commonUrl+"audio/quiz_x.mp3"),this},addAudio:function(i,n){var s=new AudioControl(n,{preload:"auto",onFinish:function(){e=null}});t[i]=s},play:function(i){""!=i&&null!=i&&void 0!=i&&(null!=e&&e.stop(),e=t[i],e&&e.play())},pause:function(){e.pause()},getAudio:function(e){return t[e]},getNowAudio:function(){return e}};return i};window.GlobalAudio=(new e).init()}(jQuery),function(t){"use strict";function e(e,n){return this.each(function(){var s=t(this),o=s.data("ui.rangeBar"),a=t.extend({},i.DEFAULT,"object"==typeof e&&e);o||s.data("ui.rangeBar",o=new i(s,a)),"string"==typeof e&&o[e](n),s.data("instance",o)})}var i=i||function(){function e(){this.options.drag&&this.bg.on(touchstart,t.proxy(n,this)),this.element.on("pointerup",function(t){t.stopPropagation()})}function n(e){this.bg.addClass("move"),t(window).on(touchmove+this.eventId,t.proxy(s,this)),t(window).on(touchend+this.eventId,t.proxy(o,this)),a.call(this,e),e.preventDefault(),e.stopPropagation()}function s(t){this.bg.hasClass("move")&&(a.call(this,t),t.preventDefault(),t.stopPropagation())}function o(e){this.bg.removeClass("move"),t(window).off(touchmove+this.eventId),t(window).off(touchend+this.eventId),this.element.trigger("onEnd",{per:this.per}),e&&(e.preventDefault(),e.stopPropagation())}function a(e){var n=e.clientX,s=e.clientY;e.originalEvent.changedTouches&&(n=e.originalEvent.changedTouches[0].clientX,s=e.originalEvent.changedTouches[0].clientY),(document.fullscreen||t("#content_container").hasClass("fullscale"))&&console.log("full"),this.options.direction==i.NON_VERTICAL?(this.per=(n-this.min)/this.width,this.per=this.per<0?0:this.per,this.per=this.per>1?1:this.per,this.per=this.per.toFixed(3),r.call(this)):(this.per=1-(s-this.min)/this.width,this.per=this.per<0?0:this.per,this.per=this.per>1?1:this.per,this.per=this.per.toFixed(3),r.call(this)),this.element.trigger("onProgress",{per:this.per})}function r(){if(this.bar){this.percent=100*this.per;var t=parseInt((.5-this.per)*this.dotWid);this.options.direction==i.NON_VERTICAL?(TweenLite.set(this.bar,{width:this.percent+"%"}),TweenLite.set(this.bar,{width:this.bar.width()+t}),this.dotPos=this.dotRange.min+(this.dotRange.max-this.dotRange.min)*this.per,this.dotPos<this.dotRange.min&&(this.dotPos=this.dotRange.min),this.dotPos>this.dotRange.max&&(this.dotPos=this.dotRange.max),TweenLite.set(this.dot,{left:this.dotPos})):(TweenLite.set(this.bar,{height:this.percent+"%"}),TweenLite.set(this.bar,{height:this.bar.height()+t}),this.dotPos=this.dotRange.max-(this.dotRange.max-this.dotRange.min)*this.per,this.dotPos<this.dotRange.min&&(this.dotPos=this.dotRange.min),this.dotPos>this.dotRange.max&&(this.dotPos=this.dotRange.max),TweenLite.set(this.dot,{top:this.dotPos}))}}return Class.extend({init:function(t,e){var i=this;this.element=t,this.options=e,this.eventId="."+Date.now()+Math.random().toFixed(3),this.container=this.element.parent(),this.bg=this.element.find(".bars .bg"),this.dot=this.element.find(".dot"),TweenLite.set(this.dot,{left:this.dot.width()/2});var n=0;this.timer=setInterval(function(){n++,0!=t.offset().left&&0!=t.offset().top&&(clearInterval(i.timer),i.setData())},1e3/30)},setData:function(){this.per=0,this.min=0,this.max=100,this.width=100,this.dotWid=this.options.dotWid,this.dotPosDum=0,this.dotPos=0,this.dotRange={min:0,max:0},this.bar=this.element.find(".bars .bar"),this.options.direction==i.NON_VERTICAL?(this.min=this.element.offset().left+this.dotWid/2,this.width=this.element.find(".bars").width()-this.dotWid,this.max=this.min+this.width):(this.min=this.dotWid/2,this.width=this.element.find(".bars").height()-this.dotWid,this.max=this.min+this.width),this.dotRange.min=this.dotWid/2-this.dotPosDum,this.dotRange.max=this.dotRange.min+this.width+2*this.dotPosDum,e.call(this),this.setPer(0)},setPer:function(t){t>-1&&(this.per=t),r.call(this)},reset:function(){o.call(this),this.setPer(.001)}})}();i.NON_VERTICAL="nonVertical",i.DEFAULT={target:null,direction:i.NON_VERTICAL,dotWid:0,drag:!0},window.RangeBar=i,t.fn.rangeBar=e,t.fn.rangeBar.Constructor=i}(jQuery);

/*
*	Corner 인터페이스
*/
(function ($){
	'use strict';

	var ICorner = ICorner || (function ()
	{

		function initFn() {
			var owner = this;

			// 한걸음 더
			$(".btn-more-step").on("click", function (){
				console.log("한걸음더");
			});

			// 플어보고 확인하고 쌍둥이 문제 탭 버튼
			$(".twins-tabs .tab").on("click", function(){
				GlobalAudio.play("button");

				var idx = $(this).index();
				var popup = $(this).parents(".popup");
				popup.data("instance").close();

				var targetPopup = $(".popup-twins").eq(idx);
				targetPopup.data("instance").open();
			});

			// 미션 스킵 버튼
			$(".mission .btn-skip").on("click", function(){
				GlobalAudio.play("button");
				var videoPlayer = $(".mission > .video-player");
				var duration = videoPlayer.data("instance").video.duration
				videoPlayer.data("instance").pause();
				videoPlayer.data("instance").seek(duration);
				$(this).hide();
				videoPlayer.find(".btn-center").hide();
				videoPlayer.addClass("still");
			});

			// 퀴즈 정답, 다시하기 체크시 사운드 멈추기
			$("*[data-ui='quizMain']").on("QUIZ_CHECK_ANSWER_ALL", function(){
				// 오디오 리셋
				owner.playAudioList_idx = 0;
				owner.playAudioList = [];
				owner.stopAudio();
			});
			$("*[data-ui='quizMain']").on("QUIZ_SHOW_ANSWER", function(){
				// 오디오 리셋
				owner.playAudioList_idx = 0;
				owner.playAudioList = [];
				owner.stopAudio();
			});
			$("*[data-ui='quizMain']").on("QUIZ_RESET_ANSWER", function(){
				// 오디오 리셋
				owner.playAudioList_idx = 0;
				owner.playAudioList = [];
				owner.stopAudio();
			});


			// tg-tip 기능
			// $(".btn-tip").on("click", function (){
			// 	GlobalAudio.play("button");

			// 	toggleTip.call(owner, $(this));
			// });
			// $(".tg-tip").on("click", function (){
			// 	if($(this).data("btn"))
			// 	{
			// 		GlobalAudio.play("button");

			// 		var btn = $(this).data("btn");
			// 		toggleTip.call(owner, btn);
			// 	}
			// });

			// 링크 버튼
			// $(".btn-link").on("click", function (){
			// 	var url = "../../../data/" + $(this).attr("data-url");
			// 	jjManager.linkExe(url);
			// });

			// 검색 버튼
			// $(".btn-search").on("click", function (){
			// 	GlobalAudio.play("button");
			// 	var str = $(this).attr("data-str");
			// 	console.log(str);
			// 	var url = "https://search.naver.com/search.naver?query=" + str;
			// 	window.open(url);
			// });


			// 풀 팝업 버튼
			// this.element.find(".btn-fullpop").on("click", function (){
			// 	owner.showFullPopup();
			// });

			// 페이지 이동 버튼
			// this.element.find(".btn-go").on("click", function(){
			// 	var url = $(this).attr("data-href");
			// 	var cname = $(this).attr("data-cname");
			// 	var params = $(this).attr("data-params");
			// 	if(cname) { loadContent(cname, params); return;}
			// 	if(url) { owner.goLink(url); return;}
			// });

			// 오디오 재생 버튼
			$(".btn-audio").each(function(i){
				if(!$(this).attr("idx")) $(this).attr("idx", i);
			});

			/**
			 * :: attr 속성 ::
			 * idx : audio index (number: 0 ~ )
			 * toggle : 버튼 토글 기능 (toggle="toggle")
			 * text-sync : audio-text와 active 동기화 하기;
			 * number : 맨 앞에 숫자 읽어주는 기능
			 */
			$(".btn-audio").on("click", function(){
				// owner.reset();

				var audio_id = $(this).attr("data-id");
				if(audio_id)
				{
					GlobalAudio.play(audio_id);
					return;
				}
				var str_idx = $(this).attr("idx");
				var arr_idx = $(this).attr("idx").split(",");

				if(str_idx.indexOf("-") > -1)
				{
					var start = parseInt(str_idx.split("-")[0]);
					var end = parseInt(str_idx.split("-")[1]);
					arr_idx = $.getNumbers(start, end);
				}

				owner.playAudioList = arr_idx;
				owner.playAudioList_idx = 0;

				owner.textSync = ($(this).attr("text-sync") == "true") ? true : false;

				$(".btn-audio.active").removeClass("active");
				$(this).addClass("active");

				var toggle = $(this).attr("toggle");
				if(toggle == "toggle")
				{
					// play-pause 버튼일 경우, 재생/일시 정지 처리
					if($(this).attr("play-pause") == "true")
					{
						console.log("play/pause 버튼");
						if($(this).hasClass("toggle"))
						{
							if(owner.nowAudio != null)
							{
								owner.nowAudio.pause();
								$(this).trigger("ON_PLAY_PAUSE");
							}
							$(this).removeClass("toggle");
						}
						else
						{
							if(owner.nowAudio != null && parseInt(arr_idx) == owner.play_idx)
							{
								console.log("play-pause :: 계속 재생!!");

								owner.nowAudio.play();
								$(this).trigger("ON_PLAY_RESUME");
							}
							else
							{
								$(".btn-audio.toggle").removeClass("toggle");
								owner.playListIdx();
								$(this).trigger("ON_PLAY_START");
								$(this).data("syncIdx", 0);
							}
							$(this).addClass("toggle");
						}
					}
					else
					{
						console.log("play/stop 버튼");
						if($(this).hasClass("toggle"))
						{
							owner.stopAudio();
							$(this).removeClass("toggle");
							$(this).removeClass("active");
						}
						else
						{
							$(".btn-audio.toggle").removeClass("toggle");
							owner.playListIdx();
							$(this).addClass("toggle");
						}
					}
				}
				else
				{
					owner.stopAudio();
					owner.playListIdx();
					$(this).trigger("ON_PLAY_START");
				}

			});

			$(".btn-audio-stop").on("click", function(){
				owner.playAudioList_idx = 0;
				owner.playAudioList = [];
				owner.stopAudio();
			});

			// 오디오 텍스트
			$(".audio-text").on("click", function(){
				$(".btn-audio.toggle").removeClass("toggle");
				owner.reset();
				owner.playAudioText($(this));
			});

			// 페이지 이동 버튼
			this.element.find(".btns-number .btn").on("click", function(){
				var idx = $(this).index();
				var url = $(this).attr("data-href");
				if(url)	goUrl.call(owner, idx, url);
			});

			// 풀 팝업 닫힐 때
			$(window).on("FULLPOPUP_CLOSE", function(){
				// content 스크롤 리셋
				var scrollBox = $(".content .scroll-box").data("scrollbar");
				if(scrollBox)
				{
					scrollBox.scroll(0);
					scrollBox.update();
				}

				owner.reset();
			});

			// 퀴즈만 다시하기 이벤트
			$(window).on("ON_CORNER_RETRY", function(){
				console.log("-------> RETRY");
				owner.retry();
			});

			// 코너 리셋 이벤트
			$(window).on("ON_CORNER_RESET", function(){
				console.log("-------> CORNER_RESET");
				owner.reset();
			});

		}

		function initData() {
		}

		function goUrl(idx, url)
		{
			// window.location.href = url;
		}

		function toggleTip (btn) {
			var target = $(btn.attr("data-target"));
			if(!target.data("btn")) target.data("btn", btn);
			if(!btn.hasClass("on"))
			{
				btn.addClass("on");
				target.addClass("on");
			}
			else
			{
				btn.removeClass("on");
				target.removeClass("on");
			}
		}

		function audioListLoad() {
			var list = this.playAudioList;
			for(var i = 0; i < list.length; i++)
			{
				var audio_idx = parseInt(list[i]);
				var audio = this.audioList[audio_idx].audio;
				if(audio.readyState != 4)	audio.load();
			}
		}

		return Class.extend({

			init : function (element, options)
			{
				this.element = element;
				this.options = options;

				var owner = this;

				this.timer = null;
				this.data = null;

				this.soundsDurationData = null;
				this.soundsDurationIndex = null;
				this.soundsDurationInSection = false;

				this.nowAudioText = null;
				this.nowAudio = null;
				this.audioList = [];
				this.play_idx = null;
				this.playAudioList = [];
				this.playAudioList_idx = 0;
				this.textSync = false; // btn-audio로 재생되는 audio와 audio-text[idx] active 동기화

				this.tabIdx = 0;
				this.arrIdx = 0;

				var vars = $.getUrlVars();
				if(vars.arrIdx)	this.arrIdx = parseInt(vars.arrIdx);
				console.log(window.location.href);
				// console.log("arrIdx: ", this.arrIdx);

				// var topTabs = this.element.find(".top-tab .btn");
				// if(topTabs.length > 0)
				// {
				// 	topTabs.each(function(i){
				// 		$(this).on("click", function(){
				// 			var idx = $(this).index();
				// 			window.location.href = owner.data.tab[idx].url + "?tabIdx=" + idx + "&arrIdx=" + owner.arrIdx;
				// 		});
				// 	});
				// };

				// var arrowTabs = this.element.find(".arrow-tab .btn");
				// if(arrowTabs.length > 0)
				// {
				// 	arrowTabs.each(function(i){
				// 		$(this).on("click", function(){
				// 			var url = $(this).attr("data-href");
				// 			var idx = $(this).index();
				// 			window.location.href = url + "?tabIdx=" + owner.tabIdx + "&arrIdx=" + idx;
				// 		});
				// 	});
				// };

				// 모바일 아닌 기기에서만 모든 버튼 hover 기능 적용.
				if(!isMobile)
				{
					$(".content-container *[class*='btn-']").each(function(i){
						if($(this).hasClass("hide-btn-check")) return;

						$(this).on("mouseenter", function(e){
							$(this).addClass("hover");
							var targetElement = $(this).attr("targetElement");
							if(targetElement) $(targetElement).addClass("hover");
						});
						$(this).on("mouseleave", function(e){
							$(this).removeClass("hover");
							var targetElement = $(this).attr("targetElement");
							if(targetElement) $(targetElement).removeClass("hover");
						});
					});

					$(".audio-text").not(".not-active").each(function(i){
						$(this).on("mouseenter", function(e){
							$(this).addClass("hover");
						});
						$(this).on("mouseleave", function(e){
							$(this).removeClass("hover");
						});
					});
				}

				initFn.call(this);
			},

			setData : function (data)
			{
				this.data = data;

				if(this.options.tabIdx) this.tabIdx = this.options.tabIdx || 0;
				this.element.find(".top-tab .btn").eq(this.tabIdx).addClass("active");

				if(this.options.arrIdx) this.arrIdx = this.options.arrIdx || 0;
				this.element.find(".arrow-tab .btn").not(this.element.find(".arrow-tab .btn").eq(this.arrIdx)).addClass("active");

				if(typeof this.data.tabIdx == "number")
				{
					console.log("tabIdx: ", this.data.tabIdx);
				}
				if(typeof this.data.arrIdx == "number")
				{
					console.log("arrIdx: ", this.data.arrIdx);
				}

				if(this.data.soundData) this.setAudio();


				initData.call(this);
			},

			onUpdateAudio : function(audio, params)
			{
				// 오디오 씽크 카운트 호출
				var currentTime = audio.currentTime;
				var toggleAudioBtn = this.element.find(".btn-audio.toggle");
				if(toggleAudioBtn.length > 0)
				{
					var syncIdx = toggleAudioBtn.data("syncIdx");
					var syncData = toggleAudioBtn.data("syncData");
					if(!syncData) return;

					if(currentTime > syncData[syncIdx])
					{
						syncIdx++;
						toggleAudioBtn.data("syncIdx", syncIdx);
						toggleAudioBtn.trigger("ON_SYNC_COUNT", {idx:syncIdx});
					}
				}
			},

			onFinishAudio : function(audio, params)
			{
				var owner = this;

				// 오디오 씽크 완료 호출
				var toggleAudioBtn = this.element.find(".btn-audio.toggle");
				var syncData = toggleAudioBtn.data("syncData");
				if(toggleAudioBtn.length > 0 && syncData)
				{
					toggleAudioBtn.trigger("ON_SYNC_FINISH");
				}

				this.playAudioList_idx++
				if(this.playAudioList_idx < this.playAudioList.length)
				{
					this.timer = setTimeout(function(){
						owner.play_idx = parseInt(owner.playAudioList[owner.playAudioList_idx]);
						owner.playIdx();
					}, GlobalRepeatDelay * 1000);
				}
				else
				{
					this.stopAudio();
					this.element.find(".btn-audio.active").removeClass("active");
					this.element.find(".btn-audio.toggle").removeClass("toggle");
				}
			},

			setAudio : function()
			{
				var owner = this;

				for(var i = 0; i < this.data.soundData.length; i++)
				{
					var src = this.data.soundData[i];
					var audioControl = new AudioControl(src, {onFinish: $.proxy(this.onFinishAudio, this), onUpdate: $.proxy(this.onUpdateAudio, this)});
					this.audioList.push(audioControl);
				}
			},

			playAudioText : function(el){
				this.textSync = false;

				this.element.find(".btn-audio.active").removeClass("active");

				var idx = parseInt(el.attr("audio-idx"));
				this.play_idx = idx;
				this.playIdx();

				this.nowAudioText = el;
				if(!this.nowAudioText.hasClass("not-active")) this.nowAudioText.addClass("active");
			},

			playAudioIdx : function(idx) {
				// this.stopAudio();
				// console.log(this.nowAudio);
				if(this.nowAudio != null) {
					this.nowAudio.stop();
					this.nowAudio.audio.currentFrame = 0;
				}
				this.nowAudio = this.audioList[idx];
				if(this.nowAudio.audio.readyState > 0) this.nowAudio.audio.currentFrame = 0;
				this.nowAudio.play();
				if(this.textSync)
				{
					// console.log("audio-text 동기화 : ", idx);
					if(this.nowAudioText != null) this.nowAudioText.removeClass("active repeat");
					this.nowAudioText = this.element.find(".audio-text[audio-idx='"+idx+"']");
					if(!this.nowAudioText.hasClass("not-active")) this.nowAudioText.addClass("active");
				}
			},

			playIdx : function() {
				if(this.nowAudio != null) this.nowAudio.pause();

				this.playAudioIdx(this.play_idx);
			},

			stopAudio : function() {
				clearTimeout(this.timer);

				// console.log("stopAudio");
				if(this.nowAudio != null)
				{
					this.nowAudio.stop();
					if(this.nowAudio.audio.currentTime) this.nowAudio.audio.currentTime = 0;
					this.nowAudio = null;

					// console.log(this.playAudioList_idx, this.playAudioList.length);
					if(this.playAudioList_idx >= this.playAudioList.length)
					{
						$(".btn-audio.active").removeClass("active");
						$(".btn-audio.toggle").removeClass("toggle");
						this.textSync = false;
					}
				}

				if(this.nowAudioText != null)
				{
					this.nowAudioText.removeClass("active");
				}
			},

			playListIdx : function(){
				if(this.playAudioList.length > 1)
				{
					audioListLoad.call(this);
					this.play_idx = parseInt(this.playAudioList[0]);
					this.playIdx();
				}
				else
				{
					this.play_idx = parseInt(this.playAudioList[0]);
					this.playIdx();
				}
			},

			showScript : function(){
				this.reset();
				if(this.data.script) $(this.data.script).data("instance").open();
			},

			showFullPopup : function() {
				this.reset();
				$("#content_full").addClass("active");
				$("#content_container").addClass("hide-alpha");
				CallToMain({type:"SHOW_CONTENT_FULL"});
			},

			goLink : function(url){
				// window.location.href = url;
			},

			setSoundsDuration : function(data){
				var owner = this;

				this.soundsDurationData = data;
				this.soundsDurationIndex = 0;
				var audioClass = this.audioList[data.soundIndex];
				var audio = audioClass.audio;
				$(audio).on("ON_UPDATE", function(e, params){
					if(owner.soundsDurationIndex >= data.sceneData.length) return;

					// console.log("ON_UPDATE", owner.soundsDurationIndex);
					var nt = e.target.currentTime;
					var st = data.sceneData[owner.soundsDurationIndex][0];
					var et = data.sceneData[owner.soundsDurationIndex][1];

					if(nt > st && owner.soundsDurationInSection != true)
					{
						owner.soundsDurationInSection = true;
						if(data.callback) data.callback({type: "START", index: owner.soundsDurationIndex});
					}
					if(nt > et && owner.soundsDurationInSection == true)
					{
						owner.soundsDurationInSection = false;
						if(data.callback) data.callback({type: "STOP", index: owner.soundsDurationIndex});

						owner.soundsDurationIndex ++;
					}
				});
				$(audio).on("ON_STOP", function(e) {
					// console.log("ON_STOP");
					owner.soundsDurationIndex = 0;
					owner.soundsDurationInSection = false;
					if(data.callback) data.callback({type: "STOP", index: 0});
				});
			},

			retry : function() {
				var owner = this;
			},

			reset : function (){
				// 코너 리셋
				this.playAudioList_idx = 0;
				this.playAudioList = [];

				this.element.find(".video-player").each(function(){
					if($(this).hasClass("still")) return;
					$(this).data("instance").reset();
				});
				this.element.find(".audio-player").each(function(){
					$(this).data("instance").reset();
				});

				// 그리기 앱 리셋
				$(".app-drawing-tool").each(function(){
					$(this).data("instance").reset();
				});
				// 각도기 앱 리셋
				$(".app-angle-tool").each(function(){
					$(this).data("instance").reset();
				});
				// 애니메이션 리셋
				$(".app-ccAnimation").each(function(){
					$(this).data("instance").reset();
				});

				// $(".ui-btns-bottom").each(function(){
				// 	$(this).data("instance").reset();
				// });

				this.stopAudio();

				try { CcAniControl.reset(); }
				catch(e) {
					// console.log('%c%s', 'color: blue; font-size: 14px;', e.message);
				}
			},

			dispose : function (){}

		});

	})();

	window.ICorner = ICorner;

})(jQuery);


/*
*	quiz 인터페이스
*/
(function ($){
	'use strict';

	var IQuiz = IQuiz || (function ()
	{

		return Class.extend({

			init : function (element, options)
			{
				this.element = element;
				this.options = options;

				this.answerSelector = "." + this.element.attr("id") + "-answer";
				this.eventId = "." + Date.now() + Math.random().toFixed(3);
			},

			start : function ()
			{
				this.element.show().removeClass("finish").addClass("start").trigger("quizStart");
			},
			showAnswer : function()
			{
				$(this.options.answerElement).addClass("show");
				$(this.answerSelector).addClass("show");
			},
			checkAnswer : function (){},
			resetAnswer : function()
			{
				$(this.options.answerElement).removeClass("show");
				$(this.answerSelector).removeClass("show");
			},
			hideAnswer : function()
			{
				$(this.options.answerElement).removeClass("show");
				$(this.answerSelector).removeClass("show");
			},
			dispose : function (){}
		});

	})();

	window.IQuiz = IQuiz;

})(jQuery);


/*
*	비디오 컨트롤 클래스
*	생성 : var videoControl = new VideoControl( $(element), "video.mp4" );
*	options
*		onFinish : 비디오 재생 종료 콜백 ( default : null )
*		onUpdate : 비디오 재생 업데이트 콜백 ( default : null )
*	public property
*		video : 비디오 객체
*		source : mp4 소스 경로
*	public method
*		setSource():void 비디오 소스 교체
*		play():void 비디오 플레이
*		pause():void 비디오 일시정지
*/
(function ($){
	'use strict';

	var VideoControl = VideoControl || (function ()
	{
		/*
		* @ private 비디오 초기화
		* @ return void
		*/
		function initVideo()
		{
			var owner = this;

			var html = "<video playsinline><source src='"+this.source+"' type='video/mp4' /></video>";

			this.video = $(html)[0];
			$(this.video).on("loadedmetadata", function(e){
				owner.target.trigger("ON_LOADEDMETADATA", e);
			})
			this.video.load();
			this.target.append($(this.video));
		}

		/*
		* @ private 비디오 업데이트 이벤트
		* @ return void
		*/
		function onUpdate()
		{
			if(this.video.currentTime >= this.video.duration)
            {
				this.video.pause();
				// this.video.currentTime = 0;
				if(this.options.onUpdate) this.options.onUpdate( this.video, 1);
				if(this.options.onFinish) this.options.onFinish( this.video );
				if(this.callBack)
				{
					this.callBack();
					this.callBack = null;
				}
				clearInterval(this.timer);
			}
			else
			{
				var currentTime = this.video.currentTime;
                var totalTime = this.video.duration;
				var percent = this.video.currentTime/this.video.duration
				if(this.options.onUpdate) this.options.onUpdate( this.video, percent);
			}
		}

		return Class.extend({

			/*
			* @ public constructor
			* @ params {source:String 소스경로, options:JSONObject 옵션}
			* @ return void
			*/
			init : function ( target, source, options )
			{
				this.target = target;
				this.source = source;
				this.video;
				this.timer;
				this.options = {onFinish:null, onUpdate:null, controls:""}
				this.callback = null;
				$.extend(this.options, options);
				initVideo.call(this);
			},

			setSource : function ( mp4 )
			{
				this.video.src = mp4;
			},

			/*
			* @ public 비디오 플레이
			* @ params {seek:Number 시작 타임}
			* @ return void
			*/
			play : function ( seek, callBack )
			{
				if( this.video.paused )
				{

					if(callBack) this.callBack = callBack;
					if(seek)
					{
						this.video.currentTime = this.video.duration * seek;
					}

					var playPromise = this.video.play();
					if (playPromise !== undefined) {
						playPromise.then(function(){}).catch(function (error){});
					}
					this.timer = setInterval($.proxy(onUpdate, this), 1000/30);
					onUpdate.call(this);
				}
			},

			/*
			* @ public 비디오 일시정지
			* @ return void
			*/
			pause : function ()
			{
				if(!this.video.paused)
                {
                    this.video.pause();
                    clearInterval(this.timer);
                }
			},

			/*
			* @ public 비디오 정지
			* @ return void
			*/
			stop : function ()
			{
				if(!this.video.paused)
				{
					this.video.pause();
					this.video.currentTime = 0;
					clearInterval(this.timer);
				}
				if(this.video.currentTime) this.video.currentTime = 0;
			},

			volume : function (vol)
			{
				if(vol == 0)
				{
					this.video.muted = true;
				}
				else
				{
					this.video.muted = false;
				}
				this.video.volume = vol;
			},

			fullscreen : function ()
			{
				if (this.video.requestFullscreen) {
					this.video.requestFullscreen();
				} else if (this.video.mozRequestFullScreen) {
					this.video.mozRequestFullScreen();
				} else if (this.video.webkitRequestFullscreen) {
					this.video.webkitRequestFullscreen();
				} else if(this.video.msRequestFullscreen){
					this.video.msRequestFullscreen();
				} else if(this.video.webkitEnterFullscreen){
					this.video.webkitEnterFullscreen();
				}
			},

			/*
			* @ public 비디오 제거
			* @ return void
			*/
			dispose : function ()
			{
				$(this.video).remove();
				this.video = null;
				clearInterval(this.timer);
			}
		});

	})();

	window.VideoControl = VideoControl;

})(jQuery);


/*
*	오디오 컨트롤
*/
(function ($){
	'use strict';

	var AudioControl = AudioControl || (function ()
	{
		/*
		* @ private 오디오 초기화
		* @ return void
		*/
		function initAudio()
		{
			var owner = this;

			if(this.options.preload)
			{
				$(this.audio)
				this.audio = $("<audio preload='"+this.options.preload+"'><source src='"+this.source+"' type='audio/mpeg' /></audio>")[0];
			}
			else
			{
				this.audio = $("<audio preload='none'><source src='"+this.source+"' type='audio/mpeg' /></audio>")[0];
			}

			if($("body").find("#audio-container").length < 1)
			{
				$("body").append($('<div id="audio-container"></div>'))
			}
			$("body #audio-container").append($(this.audio));

			AudioControl.audioList.push(this.audio);
		}

		/*
		* @ private 오디오 업데이트 이벤트
		* @ return void
		*/
		function onUpdate()
		{

			$(this.audio).trigger("ON_UPDATE", {target: this});
			if(this.audio.currentTime >= this.audio.duration)
            {
				this.audio.pause();
				this.audio.currentTime = 0;
				if(this.options.onUpdate) this.options.onUpdate( this.audio, 1);
				if(this.options.onFinish) this.options.onFinish( this.audio, {type:"normal"} );

				if(this.loop)
				{
					this.audio.play();
				}
				else
				{
					clearInterval(this.timer);
				}
			}
			else
			{
				var currentTime = this.audio.currentTime;
                var totalTime = this.audio.duration;
				var percent = this.audio.currentTime/this.audio.duration
				if(this.options.onUpdate) this.options.onUpdate( this.audio, percent);
			}
		}

		return Class.extend({

			/*
			* @ public constructor
			* @ params {source:String 소스경로, options:JSONObject 옵션}
			* @ return void
			*/
			init : function ( source, options )
			{
				this.audio;
				this.source = source;
				this.timer;


				this.options = {onFinish:null, onUpdate:null, loop:false}
				$.extend(this.options, options);
				initAudio.call(this);
			},

			/*
			* @ public 오디오 플레이
			* @ params {seek:Number 시작 타임}
			* @ return void
			*/
			play : function ( seek )
			{
				if( this.audio.paused )
				{
					if(seek)
					{
						this.audio.currentTime = this.audio.duration * seek;
						console.log(">>>>>>>>>>>>>>>>>>>>>>>", seek);
					}
					var playPromise = this.audio.play();
					if (playPromise !== undefined)
					{
						playPromise.then(function(){}).catch(function (error){});
					}

					this.timer = setInterval($.proxy(onUpdate, this), 1000/30);
					onUpdate.call(this);
				}
			},

			/*
			* @ public 오디오 일시정지
			* @ return void
			*/
			pause : function ()
			{
				if(!this.audio.paused)
                {
                    this.audio.pause();
                    clearInterval(this.timer);
                }
			},

			/*
			* @ public 오디오 정지
			* @ return void
			*/
			stop : function ()
			{
				if(!this.audio.paused)
				{
					this.audio.pause();
					if(this.audio.currentTime > 0)this.audio.currentTime = 0;
					clearInterval(this.timer);
				}
				$(this.audio).trigger("ON_STOP");
			},

			/*
			* @ public 오디오 제거
			* @ return void
			*/
			dispose : function ()
			{
				$(this.audio).remove();
				this.audio = null;
				clearInterval(this.timer);
			}
		});

	})();

	AudioControl.audioList = [];
	window.AudioControl = AudioControl;

})(jQuery);


/**
 * 	Global Audio :: Static Plugin
*/
(function ($){
	'use strict';

	var GlobalAudio = GlobalAudio || (function ()
	{
		var list = {};
		var nowAudio = null;

		var instance = {
			init : function()
			{
				this.addAudio("button", commonUrl + "audio/click.mp3");
				this.addAudio("answer", commonUrl + "audio/click.mp3");
				this.addAudio("quiz_o", commonUrl + "audio/quiz_o.mp3");
				this.addAudio("quiz_x", commonUrl + "audio/quiz_x.mp3");

				return this;
			},
			addAudio : function(id, src)
			{
				var control = new AudioControl(src, {preload:"auto", onFinish:function(){
					nowAudio = null;
				}});
				list[id] = control;
			},
			play : function(id)
			{
				if(id == "" || id == null || id == undefined) return;

				if(nowAudio != null) nowAudio.stop();
				nowAudio = list[id];
				if(nowAudio) nowAudio.play();
			},
			pause : function()
			{
				nowAudio.pause();
			},
			getAudio : function(id)
			{
				return list[id];
			},
			getNowAudio : function()
			{
				return nowAudio;
			}
		}
		return instance;

	});

	window.GlobalAudio = new GlobalAudio().init();

})(jQuery);


/**
 * 	RangeBar :: Class - for videoPlayer, audioPlayer, volume
 */
(function ($){
	'use strict';

	var RangeBar = RangeBar || (function ()
	{
		function initFn() {
			if(this.options.drag) this.bg.on('touchstart mousedown', $.proxy(onStart, this));
			// ----------------------------------------------- jj 뷰어 스와이프 중복 처리
			this.element.on('pointerup', function(e){
				e.stopPropagation();
			});

		}

		function onStart(e) {
			var owner = this;

			this.bg.addClass("move");

			$(window).on('touchmove' + this.eventId, $.proxy(onMove, this));
			$(window).on('mousemove' + this.eventId, $.proxy(onMove, this));

			$(window).on('touchend' + this.eventId, $.proxy(onEnd, this));
			$(window).on('mouseup' + this.eventId, $.proxy(onEnd, this));

			onProgress.call(this, e);

			e.preventDefault();
			e.stopPropagation();
		}

		function onMove(e) {
			if(!this.bg.hasClass("move")) return;
			// console.log("move");
			onProgress.call(this, e);

			e.preventDefault();
			e.stopPropagation();
		}

		function onEnd(e) {
			// console.log("end");
			this.bg.removeClass("move");

			$(window).off('touchmove' + this.eventId);
			$(window).off('touchend' + this.eventId);

			$(window).off('mousemove' + this.eventId);
			$(window).off('mouseup' + this.eventId);

			this.element.trigger("onEnd", {per: this.per});

			if(e)
			{
				e.preventDefault();
				e.stopPropagation();
			}
		}

		function onProgress(e) {
			// var pageX = e.pageX;
			// var pageY = e.pageY;
			var pageX = e.clientX;
			var pageY = e.clientY;
			if(e.originalEvent.changedTouches)
			{
				pageX = e.originalEvent.changedTouches[0].clientX;
				pageY = e.originalEvent.changedTouches[0].clientY;
			}

			if(document.fullscreen || $("#content_container").hasClass("fullscale"))
			{
				console.log("full");
				// pageX = pageX + 92;
			}

			if(this.options.direction == RangeBar.NON_VERTICAL)
			{
				this.per = (pageX - this.min) / this.width;
				this.per = (this.per < 0) ? 0 : this.per;
				this.per = (this.per > 1) ? 1 : this.per;
				this.per = this.per.toFixed(3);

				setBar.call(this);
			}
			else
			{
				// pageY = pageY - 600;
				// console.log(pageY);
				this.per = 1 - ((pageY - this.min) / this.width);
				this.per = (this.per < 0) ? 0 : this.per;
				this.per = (this.per > 1) ? 1 : this.per;
				this.per = this.per.toFixed(3);

				setBar.call(this);
			}

			this.element.trigger("onProgress", {per: this.per});
		}

		function setBar() {
			if(!this.bar) return;

			this.percent = this.per * 100;
			var barDumWidth = parseInt( (0.5 - this.per) * this.dotWid );

			if(this.options.direction == RangeBar.NON_VERTICAL)
			{
				TweenLite.set(this.bar, {width: this.percent+"%"});
				TweenLite.set(this.bar, {width: this.bar.width() + barDumWidth});

				this.dotPos = this.dotRange.min + (this.dotRange.max-this.dotRange.min)*this.per;
				if(this.dotPos < this.dotRange.min) this.dotPos = this.dotRange.min;
				if(this.dotPos > this.dotRange.max) this.dotPos = this.dotRange.max;
				TweenLite.set(this.dot, {left: this.dotPos});
			}
			else
			{
				TweenLite.set(this.bar, {height: this.percent+"%"});
				TweenLite.set(this.bar, {height: this.bar.height() + barDumWidth});

				this.dotPos = this.dotRange.max - (this.dotRange.max-this.dotRange.min)*this.per;
				if(this.dotPos < this.dotRange.min) this.dotPos = this.dotRange.min;
				if(this.dotPos > this.dotRange.max) this.dotPos = this.dotRange.max;
				TweenLite.set(this.dot, {top: this.dotPos});
			}
		}

		return Class.extend({
			init : function (element, options)
			{
				var owner = this;
				this.element = element;
				this.options = options;
				this.eventId = "." + Date.now() + Math.random().toFixed(3);

				this.container = this.element.parent();
				this.bg = this.element.find(".bars .bg");
				this.dot = this.element.find(".dot");
				TweenLite.set(this.dot, {left: this.dot.width()/2});

				var cnt = 0;
				this.timer = setInterval(function(){
					cnt++;
					if(element.offset().left != 0 && element.offset().top != 0)
					{
						clearInterval(owner.timer);
						owner.setData();
					}
				}, 1000/30);
			},

			setData : function()
			{
				this.per = 0;
				this.min = 0;
				this.max = 100;
				this.width = 100;
				this.dotWid = this.options.dotWid;
				this.dotPosDum = 0;
				this.dotPos = 0;
				this.dotRange = {min:0, max:0};

				this.bar = this.element.find(".bars .bar");

				if(this.options.direction == RangeBar.NON_VERTICAL)
				{
					this.min = this.element.offset().left + this.dotWid/2;
					this.width = this.element.find(".bars").width() - this.dotWid;
					this.max = this.min + this.width;
				}
				else
				{
					this.min = this.dotWid/2;
					this.width = this.element.find(".bars").height() - this.dotWid;
					this.max = this.min + this.width;
				}
				this.dotRange.min = this.dotWid/2 - this.dotPosDum;
				this.dotRange.max = this.dotRange.min + this.width + this.dotPosDum*2;

				initFn.call(this);
				this.setPer(0);
			},

			setPer : function(per) {
				if(per > -1) this.per = per;
				setBar.call(this);
			},

			reset : function() {
				onEnd.call(this);
				this.setPer(0.001);
			}
		});
	})();

	// 기본 옵션
	RangeBar.NON_VERTICAL = "nonVertical";
	RangeBar.DEFAULT = {target: null, direction: RangeBar.NON_VERTICAL, dotWid: 0, drag: true};

    function Plugin(option, params)
    {
        return this.each(function ()
        {
            var $this = $(this);
            var data = $this.data('ui.rangeBar');
            var options =  $.extend({}, RangeBar.DEFAULT, typeof option == "object" && option);
            if (!data) $this.data('ui.rangeBar', (data = new RangeBar($this, options)));
			if (typeof option == 'string') data[option](params);
			$this.data('instance', data);
        });
    }

	window.RangeBar = RangeBar;

    $.fn.rangeBar = Plugin;
    $.fn.rangeBar.Constructor = RangeBar;
})(jQuery);


/**
 * 탭 : Class
 */
(function ($){
	'use strict';
	var Tabs = Tabs || (function ()
	{
		return Class.extend({
			init : function (element, options) {
				this.element = element;
				this.options = {};
				$.extend(this.options, options);

				this.nowIdx = PAGE_DEPTH.ti || 0;

				this.start();
			},
			start : function() {
				var list = this.options.list;
				if(list.length < 1) return;

				for(var i = 0; i < list.length; i++)
				{
					var tab = list[i];
					var div = $('<div></div>');
					div.addClass('button tab');
					if(typeof tab == 'number' && tab > 0)
					{
						div.addClass('number');
						div.text(tab);
					}
					if(typeof tab == 'string')
					{
						div.addClass(tab);
					}
					if(i == this.nowIdx) div.addClass('on');

					div.on(touchstart, $.proxy(this.goLink, this));

					this.element.append(div);
				}
			},
			goLink : function(e) {
				var btn = $(e.currentTarget);
				var idx = btn.index()

				if(idx == this.nowIdx) return;

				this.nowIdx = idx;
				this.element.find('.tab').removeClass('on');
				btn.addClass('on');

				let index = {};
				index.vi = PAGE_DEPTH.vi;
				index.pi = PAGE_DEPTH.pi;
				index.ci = PAGE_DEPTH.ci;
				index.si = PAGE_DEPTH.si;
				index.ti = idx;
				goContentPage(index);
			}
		});
	})();

	// 기본 옵션
	Tabs.DEFAULT = {list:[], index:0};

	function Plugin(option, params)
    {
        return this.each(function ()
        {
            var $this = $(this);
            var data = $this.data('ui.tabs');
            var options =  $.extend({}, Tabs.DEFAULT, typeof option == 'object' && option);
            if (!data) $this.data('ui.tabs', (data = new Tabs($this, options)));
			if (typeof option == 'string') data[option](params);
			$this.data('instance', data);
        });
	}

	$.fn.tabs = Plugin;
    $.fn.tabs.Constructor = Tabs;

})(jQuery);


function inputSetting(){var t={keyDown:function(t){var e;e=window.event?window.event.keyCode:t.which;var i;return 0==e||8==e||46==e||9==e?(i=t||window.event,void("undefined"!=typeof i.stopPropagation?i.stopPropagation():i.cancelBubble=!0)):void($(t.currentTarget).hasClass("float")?188==e||190==e||110==e||(48>e||e>57&&96>e||e>105||t.shiftKey)&&(t.preventDefault?t.preventDefault():t.returnValue=!1):(48>e||e>57&&96>e||e>105||t.shiftKey)&&(t.preventDefault?t.preventDefault():t.returnValue=!1))},keyUp:function(t){var e;e=window.event?window.event.keyCode:t.which;var i;i=t||window.event,8!=e&&46!=e&&37!=e&&39!=e&&($(t.currentTarget).hasClass("float")?i.target.value=i.target.value.replace(/[^0-9.,]/g,""):i.target.value=i.target.value.replace(/[^0-9]/g,""))},focusOut:function(t){$(t).hasClass("float")?t.val(t.val().replace(/[^0-9.,]/g,"")):t.val(t.val().replace(/[^0-9]/g,""))}};$("input.number").css("ime-mode","disabled").keydown(function(e){t.keyDown(e)}).keyup(function(e){t.keyUp(e)}).focusout(function(e){t.focusOut($(this))}),$("input").attr("autocomplete","off"),$("textarea").attr("autocomplete","off"),$("input").attr("spellcheck",!1),$("textarea").attr("spellcheck",!1)}!function($){"use strict";function Plugin(t,e){return this.each(function(){var i=$(this),n=i.data("ui.popup"),s=$.extend({},Popup.DEFAULT,"object"==typeof t&&t);n||i.data("ui.popup",n=new Popup(i,s)),"string"==typeof t&&n[t](e),i.data("instance",n)})}var Popup=Popup||function(){function initFn(){var owner=this;if(this.element.hasClass("popup-hint")){this.charaIdx=this.toggleBtn.length>0?this.toggleBtn.data("chara-idx"):1;var ani_element=$('<div class="chara-ani"></div>');this.element.attr("chara-idx",this.charaIdx),this.element.prepend(ani_element);var ani_data=eval("hint_ani_0"+this.charaIdx);this.ani=new SpriteAni(ani_element,{source:"../common/images//popup_hint/hint_ani_chara_0"+this.charaIdx+".png",frameData:ani_data,fps:8,loop:!1}),this.ani.options.onFinish=function(t){owner.element.addClass("end-chara-ani")}}this.element.hasClass("popup-slide")&&(this.element.find(".btn-arrow").on("click",function(t){GlobalAudio.play("button");var e=owner.slideIndex;$(this).hasClass("prev")?e--:e++,setSlideIdx.call(owner,e)}),this.element.find(".bottom-tabs > .tab").on("click",function(t){GlobalAudio.play("button");var e=$(this).index();setSlideIdx.call(owner,e)})),this.toggleBtn&&$(this.toggleBtn).on("click",function(){$(this).hasClass("btn-slide-popup");var t=$(this).index();$(this).attr("data-idx")&&(t=parseInt($(this).attr("data-idx"))),setSlideIdx.call(owner,t),GlobalAudio.play("button"),checkOpen.call(owner)}),this.element.find(".btn-close").on("click",function(){GlobalAudio.play("button"),owner.close(),$(this).hasClass(".full-popup")&&fullPopupClose.call(owner)})}function setSlideIdx(t){this.element.find(".slide-item").hide(),this.slideIndex=t,null!=t&&t>-1&&this.element.find(".slide-item").eq(t).show(),0>=t?this.element.find(".btn-arrow.prev").hide():this.element.find(".btn-arrow.prev").show(),t+1>=this.element.find(".slide-item").length?this.element.find(".btn-arrow.next").hide():this.element.find(".btn-arrow.next").show(),this.element.find(".bottom-tabs > .tab").removeClass("on"),this.element.find(".bottom-tabs > .tab").eq(t).addClass("on"),this.element.find("*[data-ui*='quizMain']").each(function(t){$(this).data("instance").resetAnswer()})}function checkOpen(){this.isOpen=!this.isOpen,this.isOpen?(this.element.hasClass("popup-dim")||($(window).trigger("ON_CORNER_RESET"),$(window).trigger("ON_QUIZ_RESET")),this.toggleBtn.addClass("active"),this.element.addClass("active"),$("body").addClass("popup-open"),this.element.trigger("POPUP_OPEN",{target:this.element}),null!=this.ani&&(this.ani.gotoAndStop(0),this.ani.play())):((this.element.find(".video-player").length>0||this.element.find(".audio-player").length>0)&&$(window).trigger("ON_MEDIA_STOP"),this.element.hasClass("popup-dim")||$(window).trigger("ON_CORNER_RESET"),this.toggleBtn.removeClass("active"),this.element.removeClass("active"),$("body").removeClass("popup-open"),this.element.trigger("POPUP_CLOSE",{target:this.element}),null!=this.ani&&this.ani.stop(),this.element.removeClass("end-chara-ani"))}function fullPopupClose(){$(window).trigger("FULLPOPUP_CLOSE"),this.reset()}return Class.extend({init:function(t,e){this.element=t,this.options={},$.extend(this.options,e),this.isOpen=!1,this.toggleBtn=$(this.options.btn),this.slideIndex=0,this.charaIdx=null,this.ani=null,initFn.call(this)},open:function(){this.isOpen=!1,checkOpen.call(this)},close:function(){var t=this;if(!this.element.hasClass("popup-dim")){var e=$(".scroll-box").not('[data-reset="false"]');e.each(function(t){var e=$(this).data("scrollbar");e&&(e.scroll(0),e.update())})}setTimeout(function(){t.isOpen=!0,checkOpen.call(t)},10)},reset:function(){this.close()}})}();Popup.DEFAULT={},$.fn.popup=Plugin,$.fn.popup.Constructor=Popup}(jQuery),function(t){"use strict";var e=e||function(){function e(){this.totalFrams=this.options.frameData.frames.length,this.container.width(this.options.frameData.frames[0].sourceSize.w),this.container.height(this.options.frameData.frames[0].sourceSize.h);var t="url('"+this.options.source+"')";this.container.css("background-image",t),this.gotoAndStop(0),this.options.autoPlay&&this.play()}function i(t){var e=this;if(t||this.currentFrame++,this.currentFrame>this.totalFrams&&(this.currentFrame=this.totalFrams),this.currentFrame<this.totalFrams){var i=-this.frames[this.currentFrame].frame.x+"px "+-this.frames[this.currentFrame].frame.y+"px";this.container.css("background-position",i)}this.currentFrame>=this.totalFrams&&(this.options.onFinish&&(this.options.callbackTarget?this.options.onFinish.call(this.options.callbackTarget,this):this.options.onFinish(this)),this.stop(),this.options.loop&&(this.currentFrame=1,this.timeout=setTimeout(function(){e.play()},this.options.delay)))}return Class.extend({init:function(i,n){this.element=i,this.container=this.element,this.options={source:"",frameData:{},loop:!0,autoPlay:!1,fps:30,onFinish:null,delay:0,callbackTarget:null},t.extend(this.options,n),this.options.frameData.frames&&(this.frames=this.options.frameData.frames,this.currentFrame=1,this.timer,this.timeout,this.totalFrams,e.call(this),this.element.data("instance",this))},play:function(e){e&&(this.currentFrame=e),clearInterval(this.timer),this.timer=setInterval(t.proxy(i,this),1e3/this.options.fps)},stop:function(){clearInterval(this.timer),clearTimeout(this.timeout)},gotoAndStop:function(t){this.currentFrame=t,this.currentFrame>this.totalFrams&&(this.currentFrame=this.totalFrams);var e=-this.frames[this.currentFrame].frame.x+"px "+-this.frames[this.currentFrame].frame.y+"px";this.container.css("background-position",e)},show:function(){this.container.show()},hide:function(){this.container.hide(),this.stop()},update:function(){i.call(this)},reset:function(){this.stop(),this.gotoAndStop(0)},dispose:function(){clearInterval(this.timer),clearTimeout(this.timeout)}})}();window.SpriteAni=e}(jQuery);

// 팝업 캐릭터 애니 정보
var hint_ani_01 = {"frames": [
	{
		"frame": {"x":4,"y":4,"w":360,"h":252},
		"sourceSize": {"w":360,"h":252}
	}
	,{
		"frame": {"x":368,"y":4,"w":360,"h":252},
		"sourceSize": {"w":360,"h":252}
	}
	,{
		"frame": {"x":4,"y":260,"w":360,"h":252},
		"sourceSize": {"w":360,"h":252}
	}
	,{
		"frame": {"x":4,"y":516,"w":360,"h":252},
		"sourceSize": {"w":360,"h":252}
	}
	,{
		"frame": {"x":368,"y":260,"w":360,"h":252},
		"sourceSize": {"w":360,"h":252}
	}
	,{
		"frame": {"x":368,"y":516,"w":360,"h":252},
		"sourceSize": {"w":360,"h":252}
	}]
}

var hint_ani_02 = {"frames": [
	{
		"frame": {"x":4,"y":4,"w":444,"h":276},
		"sourceSize": {"w":444,"h":276}
	}
	,{
		"frame": {"x":452,"y":4,"w":444,"h":276},
		"sourceSize": {"w":444,"h":276}
	}
	,{
		"frame": {"x":4,"y":284,"w":444,"h":276},
		"sourceSize": {"w":444,"h":276}
	}
	,{
		"frame": {"x":452,"y":284,"w":444,"h":276},
		"sourceSize": {"w":444,"h":276}
	}
	,{
		"frame": {"x":4,"y":564,"w":444,"h":276},
		"sourceSize": {"w":444,"h":276}
	}
	,{
		"frame": {"x":452,"y":564,"w":444,"h":276},
		"sourceSize": {"w":444,"h":276}
	}]
}

var hint_ani_03 = {"frames": [
	{
		"frame": {"x":4,"y":4,"w":285,"h":382},
		"sourceSize": {"w":285,"h":382}
	}
	,{
		"frame": {"x":4,"y":390,"w":285,"h":382},
		"sourceSize": {"w":285,"h":382}
	}
	,{
		"frame": {"x":293,"y":4,"w":285,"h":382},
		"sourceSize": {"w":285,"h":382}
	}
	,{
		"frame": {"x":582,"y":4,"w":285,"h":382},
		"sourceSize": {"w":285,"h":382}
	}
	,{
		"frame": {"x":293,"y":390,"w":285,"h":382},
		"sourceSize": {"w":285,"h":382}
	}
	,{
		"frame": {"x":582,"y":390,"w":285,"h":382},
		"sourceSize": {"w":285,"h":382}
	}]
}

var hint_ani_04 = {"frames": [
	{
		"frame": {"x":4,"y":4,"w":330,"h":335},
		"sourceSize": {"w":330,"h":335}
	}
	,{
		"frame": {"x":4,"y":343,"w":330,"h":335},
		"sourceSize": {"w":330,"h":335}
	}
	,{
		"frame": {"x":338,"y":4,"w":330,"h":335},
		"sourceSize": {"w":330,"h":335}
	}
	,{
		"frame": {"x":672,"y":4,"w":330,"h":335},
		"sourceSize": {"w":330,"h":335}
	}
	,{
		"frame": {"x":338,"y":343,"w":330,"h":335},
		"sourceSize": {"w":330,"h":335}
	}
	,{
		"frame": {"x":672,"y":343,"w":330,"h":335},
		"sourceSize": {"w":330,"h":335}
	}]
}
