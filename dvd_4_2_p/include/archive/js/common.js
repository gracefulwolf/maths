
var commonUrl = './';
var GlobalRepeatDelay = 0.5;

var touchstart = 'mousedown';
var touchmove = 'mousemove';
var touchend = 'mouseup';

var isMobile = false;

var isIE11 = navigator.userAgent.match('Trident/7.0') ? true : false;

if( navigator.userAgent.match(/Android/i)|| navigator.userAgent.match(/webOS/i)|| 
	navigator.userAgent.match(/iPhone/i)|| navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)||
	(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
	navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) && 'ontouchend' in document) {

	touchstart = 'touchstart';
	touchmove = 'touchmove';
	touchend = 'touchend';

	isMobile = true;
}

/*
* 제이쿼리 확장
*/
(function ( $ )
{
	$.extend({

		//파라메터 전체 가져오기
		getUrlVars: function(){
			var vars = [], hash;
			var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
			for(var i = 0; i < hashes.length; i++) {
				hash = hashes[i].split('=');
				vars.push(hash[0]);
				vars[hash[0]] = hash[1];
			}
			return vars;
		},

		//파라메터 네임으로 가져오기
		getUrlVar: function(name) {
			return $.getUrlVars()[name];
		},

		// 숫자 배열 만들기
		getNumbers: function(start, end)
		{
			var arr = [];
			
			for( var i = start; i < end+1; i++)
			{
				arr.push(i);
			}
			return arr;
		},

		//랜덤 만들기
		makeRandom : function ( randomNum, arNum )
		{
			var randomAr = new Array();
			var rand = new Array();
			var temp = new Array();
			var r,p,i;

			for(i = 0; i<randomNum; i++)
			{
				temp[i] = i;
			}

			for(i = 0; i<randomNum; i++)
			{
				r = Math.floor(Math.random() * (randomNum - i));
				p = temp[r];
				randomAr[i] = p;
				for(var j = r; j<randomNum - i- 1; j++)
				{
					temp[j] = temp[j + 1];
				}
			}

			for (i = 0; i < arNum; i++ )
			{
				rand[i] = randomAr[i];
			}

			return rand;
		},

		//앞뒤 공백제거
		trim : function ( str )
		{
			return str.replace(/(^\s*)|(\s*$)/gi, '');
		},

		//앞문자 공백제거
		trimLeft : function ( str )
		{
			return str.replace( /^\s*/g, '' );
		},

		//뒤문자 공백제거
		trimRight : function ( str )
		{
			return str.replace( /\s*$/g, '' );
		},

		//  앞에 0 붙히기
		pad : function (num, size)
		{
			var s = '0000' + num;
			return s.substr(s.length - size);
		},

		//배열 비교
		complement : function(a, b)
		{
			var res = [];
			var tmp = [];
			for(var i=0;i<a.length;i++) tmp.push(a[i]);
			for(var i=0;i<b.length;i++)
			{
				if(tmp[i] && b[i])  res.push(true);
				else              res.push(false);
			}
			return res;
		},

		// 오브젝트 배열에서 key value로 오브젝트 찾기
		getObject: function(obj, key, val) {
			var newObj = null;
			for (var i in obj) {
				if(obj[i][key] == val)
				{
					return obj[i];
				}
			}
		},

		// 
		getRangeToArray : function(arr)
		{
			var value = arr;
			if(arr.length > 1)
			{
				var n1 = parseInt(arr[0]);
				var n2 = parseInt(arr[1]);
				value = [];
				for(var i = n1; i <= n2; i++)
				{
					value.push(i);
				}
			}
			return value;
		},

		// ie11 이하
		checkBroswerIE : function()
		{
			var agent = navigator.userAgent.toLowerCase();
			if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf('msie') != -1) ) 
			{
				return true;
			}
			return false;
		},

		// 숫자 오름차순 정렬
		numberSortAsc : function(a, b) { 
			return a - b;
		},

		// 숫자 내림차순 정렬
		numberSortDesc : function(a, b) { 
			return b - a;
		},

		sum : function(a, b)
		{
			return a + b;
		}
	});

	$.fn.extend({
		// transform 데이터 받아오기
		getTransform : function()
		{
			var value = undefined;
			var matrixStr = this.css('transform');
			if(matrixStr == 'none' || matrixStr == undefined) return value;
			var matrixArr = matrixStr.split('(')[1].split(')')[0].split(',');
			if(matrixArr.length > 0) 
			{
				value = {};
				
				var a = matrixArr[0];
				var b = matrixArr[1];
				var c = matrixArr[2];
				var d = matrixArr[3];

				value.scale = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
				var radian = Math.atan2(b, a);
				value.angle = radian * (180/Math.PI);
				value.angle = (value.angle < 0) ? value.angle + 360 : value.angle;

				value.x = matrixArr[13] || matrixArr[4];
				value.y = matrixArr[14] || matrixArr[5];
				value.x = Math.round(value.x / value.scale);
				value.y = Math.round(value.y / value.scale);
			}

			return value;
		},

		// 오브젝트 Y 회전 시키키
		animateRotateY : function(sangle, angle, duration, easing, complete) 
		{
			var args = $.speed(duration, easing, complete);
			var step = args.step;
			return this.each(function(i, e) {
				args.complete = $.proxy(args.complete, e);
				args.step = function(now) {
					$(e).data('rotateY', now);
					$.style(e, 'transform', 'rotateY(' + now + 'deg)');
					if (step) return step.apply(e, arguments);
				};
		
				$({deg: sangle}).animate({deg: angle}, args);
			});
		},

		hitTestPointNew : function(obj)
		{
			var bool = false;
			var target = this[0];
			var targetRect = target.getBoundingClientRect();

			if(obj.x > targetRect.left && obj.x < targetRect.right && obj.y > targetRect.top && obj.y < targetRect.bottom)
			{
				bool = true;
			}
			
			return bool;
		}
		
	});

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

				if(this.options.loop)
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
				this.addAudio("button", commonUrl + "audio/button.mp3");
				// this.addAudio("answer", commonUrl + "audio/answer.mp3");

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

/*
*	스프라이트 시퀀스
*/
(function ($){
	'use strict';
	
	var SpriteAni = SpriteAni || (function ()
	{

		function initSprite()
		{
			var owner = this;

			this.totalFrams = this.options.frameData.frames.length;
			this.container.width(this.options.frameData.frames[0].sourceSize.w);
			this.container.height(this.options.frameData.frames[0].sourceSize.h);
			var url = "url('" + this.options.source + "')";
			this.container.css("background-image", url);

			this.gotoAndStop(0);

			if(this.options.autoPlay)
			{
				this.play();
			}
		}

		function onUpdate( isFirst )
		{
			var owner = this;
			if(!isFirst)	this.currentFrame++;
			if(this.currentFrame > this.totalFrams) this.currentFrame = this.totalFrams;
			
			if(this.currentFrame < this.totalFrams)
			{
				var pos = -this.frames[this.currentFrame].frame.x+"px " + -this.frames[this.currentFrame].frame.y+"px";
				this.container.css("background-position", pos);
			}

			if(this.currentFrame >= this.totalFrams)
			{
				if(this.options.onFinish)
				{
					if(this.options.callbackTarget)   this.options.onFinish.call(this.options.callbackTarget, this );
					else                              this.options.onFinish( this );
				}
				
				this.stop();

				if(this.options.loop)
				{
					this.currentFrame = 1;
					this.timeout = setTimeout(function ()
					{
						owner.play();
					}, this.options.delay);
				}
			}
		}
		
		return Class.extend({

			init : function ( element, options )
			{
				this.element = element;
				this.container = this.element;
				this.options = {source:"", frameData:{}, loop:true, autoPlay:false, fps:30, onFinish:null, delay:0, callbackTarget:null};
				$.extend(this.options, options);

				if(!this.options.frameData.frames) return;
				this.frames = this.options.frameData.frames;

				this.currentFrame = 1;
				this.timer;
				this.timeout;
				this.totalFrams;
				initSprite.call(this);

				this.element.data("instance", this);
			},

			play : function (frame)
			{
				if(frame) this.currentFrame = frame;
				clearInterval(this.timer);
				this.timer = setInterval($.proxy(onUpdate, this), 1000/this.options.fps);
			},

			stop : function ()
			{
				clearInterval(this.timer);
				clearTimeout(this.timeout);
			},

			gotoAndStop : function ( frame ) {
				this.currentFrame = frame;
				if(this.currentFrame > this.totalFrams) this.currentFrame = this.totalFrams;

				var pos = -this.frames[this.currentFrame].frame.x+"px " + -this.frames[this.currentFrame].frame.y+"px";
				this.container.css("background-position", pos);
			},

			show : function ()
			{
				this.container.show();
			},

			hide : function ()
			{
				this.container.hide();
				this.stop();
			},

			update : function ()
			{
				onUpdate.call(this);
			},

			reset : function ()
			{
				this.stop();
				this.gotoAndStop(0);
			},

			dispose : function ()
			{
				clearInterval(this.timer);
				clearTimeout(this.timeout);
			}
		});

	})();

	window.SpriteAni = SpriteAni;

})(jQuery);


/**
 *  입력 관련 셋팅
 */
function inputSetting() {
	// ----------------------------- input 숫자만 입력
	var validCheck = {
		keyDown : function (e) {
			var key;
			if(window.event)
				key = window.event.keyCode; //IE
			else
				key = e.which; //firefox
			var event;
			if (key == 0 || key == 8 || key == 46 || key == 9){
				event = e || window.event;
				if (typeof event.stopPropagation != "undefined") {
					event.stopPropagation();
				} else {
					event.cancelBubble = true;
				}   
				return;
			}
			if($(e.currentTarget).hasClass("float"))
			{
				// 소수점, 마침표 입력 가능하도록 체크 
				if(key == 188 || key == 190 || key == 110) {}
				else
					if (key < 48 || (key > 57 && key < 96) || key > 105 || e.shiftKey)
						e.preventDefault ? e.preventDefault() : e.returnValue = false;
			}
			else
			{
				if (key < 48 || (key > 57 && key < 96) || key > 105 || e.shiftKey) 
					e.preventDefault ? e.preventDefault() : e.returnValue = false;
			}
		},        
		keyUp : function (e) {
			var key;
			if(window.event)
				key = window.event.keyCode; //IE
			else
				key = e.which; //firefox
			var event;
			event = e || window.event;
			if ( key == 8 || key == 46 || key == 37 || key == 39 ) 
				return;
			else
				if($(e.currentTarget).hasClass("float"))
					event.target.value = event.target.value.replace(/[^0-9.,]/g, "");
				else
					event.target.value = event.target.value.replace(/[^0-9]/g, "");
		},
		focusOut : function (ele) {
			if($(ele).hasClass("float"))
				ele.val(ele.val().replace(/[^0-9.,]/g, ""));
			else 
				ele.val(ele.val().replace(/[^0-9]/g, ""));
		}
	};

	$("input.number").css("ime-mode", "disabled").keydown( function(e) {
		validCheck.keyDown(e);
	}).keyup( function(e){
		validCheck.keyUp(e);
	}).focusout( function(e){        
		validCheck.focusOut($(this));
	});
	// ----------------------------- input 숫자만 입력

	// ----------------------------- input, textarea 자동완성 off
	$("input").attr("autocomplete", "off");
	$("textarea").attr("autocomplete", "off");
	// ----------------------------- input, textarea 오타체크 off
	$("input").attr("spellcheck", false);
	$("textarea").attr("spellcheck", false);
}
