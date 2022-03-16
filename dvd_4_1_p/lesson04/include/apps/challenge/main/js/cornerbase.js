/**
 * 코너 기본
 */
(function ($){
	'use strict';

	var CornerBase = CornerBase || (function ()
	{
		// static properties
		var instance;

		function initFn (){}
		function initData (){}

		return ICorner.extend({
			init : function (element, options)
			{
				this._super(element, options);

				instance = this;

				initFn.call(this);
			},

			setData : function (data)
			{
				this._super(data);

				initData.call(this);
			},

			setAudio : function()
			{
				this._super();
			},

			playAudioText : function (idx) {
				this._super(idx);
			},

			playAudioIdx : function(idx) {
				this._super(idx);
			},

			playIdx : function() {
				this._super();
			},

			stopAudio : function() {
				this._super();
			},

			showScript : function() {
				this._super();
			},
			
			playListIdx : function(){
				this._super();
			},

			showFullPopup : function()
			{
				this._super();
			},
			
			reset : function() {
				this._super();
			}
		});

	})();

	// 기본 옵션
	CornerBase.DEFAULT = {};

    function Plugin(option, params)
    {
        return this.each(function ()
        {
            var $this = $(this);
            var data = $this.data('ui.cornerBase');
            var options =  $.extend({}, CornerBase.DEFAULT, typeof option == "object" && option);
            if (!data) $this.data('ui.cornerBase', (data = new CornerBase($this, options)));
			if (typeof option == 'string') data[option](params);
			$this.data('instance', data);
        });
    }

	$.fn.cornerBase = Plugin;
    $.fn.cornerBase.Constructor = CornerBase;

})(jQuery);



/**
 * 교과서 > 동시
 */
(function ($){
	'use strict';

	var CornerPoem = CornerPoem || (function ()
	{
		// static properties
		var instance;

		function initFn (){
			console.log("코너 >> 동시");
			
		}
		function initData (){
			this.element.find(".btn-poem-audio").attr("idx", "0-" + (this.data.soundData.length-1))
		}

		return ICorner.extend({
			init : function (element, options)
			{
				this._super(element, options);

				instance = this;

				initFn.call(this);
			},

			setData : function (data)
			{
				this._super(data);

				initData.call(this);
			},

			setAudio : function()
			{
				this._super();
			},

			playAudioText : function (idx) {
				this._super(idx);
			},

			playAudioIdx : function(idx) {
				this._super(idx);
				var minY = 100;
				var maxY = 560;
				var audioText = this.element.find(".audio-text.active");
				instance.element.find(".scroll-box").data("scrollbar").scroll({el: audioText, margin: 200}, 300 );
			},

			playIdx : function() {
				this._super();
			},

			stopAudio : function() {
				this._super();

				instance.element.find(".scroll-box").data("scrollbar").scroll({y: 0}, 300 );
			},

			showScript : function() {
				this._super();
			},
			
			playListIdx : function(){
				this._super();
			},

			showFullPopup : function()
			{
				this._super();
			},
			
			reset : function() {
				this._super();
			}
		});

	})();

	// 기본 옵션
	CornerPoem.DEFAULT = {};

    function Plugin(option, params)
    {
        return this.each(function ()
        {
            var $this = $(this);
            var data = $this.data('ui.cornerPoem');
            var options =  $.extend({}, CornerPoem.DEFAULT, typeof option == "object" && option);
            if (!data) $this.data('ui.cornerPoem', (data = new CornerPoem($this, options)));
			if (typeof option == 'string') data[option](params);
			$this.data('instance', data);
        });
    }

	$.fn.cornerPoem = Plugin;
    $.fn.cornerPoem.Constructor = CornerPoem;

})(jQuery);



/**
 * 익힘책 > 정리하기 : 4학년 1학기 길찾기 타입
 */
(function ($){
	'use strict';

	var CornerMsLast41 = CornerMsLast41 || (function ()
	{
		// static properties
		var instance;
		var quizIndex = 0;
		var quizMax = -1;
		var nowQuiz = null;

		var popQuizContent = null;
		var popQuizNow = null;

		function initFn() {

			$(".btns-popup > .button").hide();
			$(".btns-popup > .button").eq(quizIndex).show();

			instance.element.find("#quiz-content-01 .quiz").css("visibility", "hidden");

			quizMax = instance.element.find("#quiz-content-01 .quiz").length;

			nowQuiz = instance.element.find("#quiz-content-01 .quiz").eq(quizIndex);
			nowQuiz.css("visibility", "visible");
			nowQuiz.find(".check-item").addClass("ani");

			instance.element.find("#quiz-content-01 .check-item").on("click", function(){
				$(this).addClass("active");
				var isRight = nowQuiz.data("instance").checkAnswer();
				if(isRight)
				{
					GlobalAudio.play("quiz_o");
					goNextQuiz();
				}
				else
				{
					GlobalAudio.play("quiz_x");
					nowQuiz.data("instance").resetAnswer();
				}
			});

			instance.element.find("#quiz-content-01").on("QUIZ_RESET_ANSWER", function(){
				goReset();
			});

			var chara = instance.element.find(".chara");
			var charaPos = nowQuiz.data("chara-pos");
			TweenLite.set(instance.element.find(".chara"), {x: charaPos.x, y: charaPos.y});

			// 팝업 퀴즈
			var popQuizContent = instance.element.parent().find("#quiz-content-02");
			popQuizContent.find(".check-item").on("click", function(){
				$(this).addClass("active");
				popQuizNow = $(this).parents(".quiz");
				var isRight = popQuizNow.data("instance").checkAnswer();
				if(isRight)
				{
					GlobalAudio.play("quiz_o");
					goNextQuiz();
				}
				else
				{
					GlobalAudio.play("quiz_x");
					popQuizNow.data("instance").resetAnswer();
				}
			});

		}

		function initData() {
			var scrollbar = instance.element.find(".scroll-box").data("scrollbar");	
			scrollbar.options({
				callbacks: {
					onScroll: function(e) {
						console.log("onScroll");
						var y = e.target.scrollTop;
						console.log("scrollTop: ", y);
					}
				}
			})
		}

		function goNextQuiz() {
			nowQuiz.find(".check-item").removeClass("ani active ans");
			quizIndex++;
			if(quizIndex == quizMax) {
				goClear();
				return;
			}
			$(".btns-popup > .button").hide();
			$(".btns-popup > .button").eq(quizIndex).show();

			nowQuiz = instance.element.find("#quiz-content-01 .quiz").eq(quizIndex);
			nowQuiz.css("visibility", "visible");
			nowQuiz.find(".check-item").addClass("ani");
			
			// 스크롤
			// var y = Math.min(nowQuiz.find(".check-item").eq(0).position().top, nowQuiz.find(".check-item").eq(1).position().top);
			var y = nowQuiz.data("scroll-y");
			instance.element.find(".scroll-box").data("scrollbar").scroll({y:y}, 300);
			
			// 캐릭터 위치
			var charaPos = nowQuiz.data("chara-pos");
			TweenLite.set(instance.element.find(".chara"), {x: charaPos.x, y: charaPos.y});
		}

		function goClear() {
			$(".btns-popup > .button").hide();
			var chara = instance.element.find(".chara");
			var y = chara.data("scroll-y");
			instance.element.find(".scroll-box").data("scrollbar").scroll({y:y}, 300);

			var charaPos = chara.data("chara-clear-pos");
			TweenLite.set(chara, {x: charaPos.x, y: charaPos.y});

			var charaAni = chara.data("instance");
			charaAni.play();
		}
		
		function goReset() {
			instance.element.find("#quiz-content-01 .quiz").data("instance").resetAnswer();
			instance.element.find("#quiz-content-01 .quiz").css("visibility", "hidden");
			instance.element.find("#quiz-content-01 .check-item").removeClass("ani");
			quizIndex = 0;

			$(".btns-popup > .button").hide();
			$(".btns-popup > .button").eq(quizIndex).show();

			nowQuiz = instance.element.find("#quiz-content-01 .quiz").eq(quizIndex);
			nowQuiz.css("visibility", "visible");
			nowQuiz.find(".check-item").addClass("ani");

			instance.element.find(".scroll-box").data("scrollbar").scroll({y:0}, 300);

			var chara = instance.element.find(".chara");
			var charaPos = nowQuiz.data("chara-pos");
			TweenLite.set(instance.element.find(".chara"), {x: charaPos.x, y: charaPos.y});

			var charaAni = chara.data("instance");
			charaAni.reset();

		}

		return ICorner.extend({
			init : function (element, options)
			{
				this._super(element, options);

				instance = this;

				initFn.call(this);
			},

			setData : function (data)
			{
				this._super(data);

				initData.call(this);
			},

			setAudio : function()
			{
				this._super();
			},

			playAudioText : function (idx) {
				this._super(idx);
			},

			playAudioIdx : function(idx) {
				this._super(idx);
			},

			playIdx : function() {
				this._super();
			},

			stopAudio : function() {
				this._super();
			},

			showScript : function() {
				this._super();
			},
			
			playListIdx : function(){
				this._super();
			},

			showFullPopup : function()
			{
				this._super();
			},
			
			reset : function() {
				this._super();
			}
		});

	})();

	// 기본 옵션
	CornerMsLast41.DEFAULT = {};

    function Plugin(option, params)
    {
        return this.each(function ()
        {
            var $this = $(this);
            var data = $this.data('ui.cornerMsLast41');
            var options =  $.extend({}, CornerMsLast41.DEFAULT, typeof option == "object" && option);
            if (!data) $this.data('ui.cornerMsLast41', (data = new CornerMsLast41($this, options)));
			if (typeof option == 'string') data[option](params);
			$this.data('instance', data);
        });
    }

	$.fn.cornerMsLast41 = Plugin;
    $.fn.cornerMsLast41.Constructor = CornerMsLast41;

})(jQuery);


/**
 * 도전 퀴즈
 */
(function ($){
	'use strict';

	var CornerChallenge = CornerChallenge || (function ()
	{
		// static properties
		var instance;
		var path = ""
		var files = [];

		function initFn() {

			path = pathChallenge;

			this.element.find(".btns > div").on("click", function(){
				var file = files[$(this).index()];
				$("#challenge-frame").attr("src", path+file);
				$("#challenge-frame").on("load", function(){
					if(!$(".challenge-container").hasClass("ready"))
					{
						$(".challenge-container").addClass("ready");
						$("body").addClass("is-challenge");
					}
					
				});
			});
		
			$(".challenge-container .btn-home").on("click", function(){
				$("#challenge-frame").contents().find("body").html('');
				$(".challenge-container").removeClass("ready");
				$("body").removeClass("is-challenge");
			});
		}

		function initData() {
			
		}

		return ICorner.extend({
			init : function (element, options)
			{
				this._super(element, options);

				instance = this;

				files = this.options.files;

				initFn.call(this);
			},

			setData : function (data)
			{
				this._super(data);

				initData.call(this);
			},

			open : function(url)
			{
				$("#challenge-frame").attr("src", url);
				$("#challenge-frame").on("load", function(){
					if(!$(".challenge-container").hasClass("ready"))
					{
						$(".challenge-container").addClass("ready");
						$("body").addClass("is-challenge");
					}
					
				});
			},

			close : function() {
				$("#challenge-frame").contents().find("body").html('');
				$(".challenge-container").removeClass("ready");
				$("body").removeClass("is-challenge");
			},

			reset : function() {
				this._super();
			}
		});

	})();

	// 기본 옵션
	CornerChallenge.DEFAULT = {};

    function Plugin(option, params)
    {
        return this.each(function ()
        {
            var $this = $(this);
            var data = $this.data('ui.cornerChallenge');
            var options =  $.extend({}, CornerChallenge.DEFAULT, typeof option == "object" && option);
            if (!data) $this.data('ui.cornerChallenge', (data = new CornerChallenge($this, options)));
			if (typeof option == 'string') data[option](params);
			$this.data('instance', data);
        });
    }

	$.fn.cornerChallenge = Plugin;
    $.fn.cornerChallenge.Constructor = CornerChallenge;

})(jQuery);



/**
 *  DiceApp :: 주사위 던지기
 * <div class="app-dice" data-ui="app-dice" data-option='{}'></div>
 */
function diceApp() {
	$("*[data-ui='app-dice']").each(function ( i )
	{
		let option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).diceApp(option);
	});
}
(function ($){
	'use strict';

	var DiceApp = DiceApp || (function ()
	{
		var ani_data = {
			"frames": [
				{
					"frame": {"x":4,"y":4,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}
				,{
					"frame": {"x":4,"y":241,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}
				,{
					"frame": {"x":4,"y":478,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}
				,{
					"frame": {"x":4,"y":715,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}
				,{
					"frame": {"x":4,"y":952,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}
				,{
					"frame": {"x":4,"y":1189,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}
				,{
					"frame": {"x":4,"y":1426,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}
				,{
					"frame": {"x":4,"y":1663,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}
				,{
					"frame": {"x":178,"y":4,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}
				,{
					"frame": {"x":178,"y":241,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}
				,{
					"frame": {"x":178,"y":478,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}
				,{
					"frame": {"x":178,"y":715,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}
				,{
					"frame": {"x":178,"y":952,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}
				,{
					"frame": {"x":178,"y":1189,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}
				,{
					"frame": {"x":178,"y":1426,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}
				,{
					"frame": {"x":178,"y":1663,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}
				,{
					"frame": {"x":352,"y":4,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}
				,{
					"frame": {"x":352,"y":241,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}
				,{
					"frame": {"x":352,"y":478,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}
				,{
					"frame": {"x":352,"y":715,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}
				,{
					"frame": {"x":352,"y":952,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}
				,{
					"frame": {"x":352,"y":1189,"w":170,"h":233},
					"sourceSize": {"w":170,"h":233}
				}],
				"meta": {
					"app": "Adobe Animate",
					"version": "19.2.1.408",
					"image": "dice_sprite.png",
					"format": "RGBA8888",
					"size": {"w":1024,"h":2048},
					"scale": "1"
				}
		}
		var htmlInner = 
		'<div class="dice-cont">'
		+'	<div class="dice dice-img"></div>'
		+'	<div class="dice dice-ani"></div>'
		+'	<div class="btn-play"></div>'
		+'</div>'

		var instance;
		var count = 0;
		
		function initFn ()
		{
			var ani = new SpriteAni(this.element.find(".dice-ani"), {source:"../common/images/dice/dice_sprite.png", frameData:ani_data, loop:false, onFinish:$.proxy(onFinish, this)});

			this.element.find(".btn-play").on("click", function(){
				instance.element.css("pointer-events", "none");
				GlobalAudio.play("button");
				instance.element.addClass("play");
				ani.play(1);

				count = Math.ceil(Math.random()*6);
				console.log(count);
				instance.element.find(".dice-img").attr("idx", count);
			});

			if(this.options.autoStart) this.start();
		}

		function onFinish(e)
		{
			instance.element.css("pointer-events", "");
			instance.element.removeClass("play");
		}
		return Class.extend({

			init : function (element, options)
			{
				this.element = element;
				this.options = options;

				instance = this;

				this.element.css("pointer-events", "none");
				this.element.append($(htmlInner));
				
				initFn.call(this);
			},
			start : function ()
			{
				this.element.css("pointer-events", "");
			}
		});

	})();

	// 메인 기본 옵션
	DiceApp.DEFAULT = {autoStart:true};

    function Plugin(option, params)
    {
        return this.each(function ()
        {
            var $this = $(this);
            var data = $this.data('ui.diceApp');
            var options =  $.extend({}, DiceApp.DEFAULT, typeof option == "object" && option);
            if (!data) $this.data('ui.diceApp', (data = new DiceApp($this, options)));
			if (typeof option == 'string') data[option](params);
			$this.data('instance', data);
        });
    }

	window.DiceApp = DiceApp;

    $.fn.diceApp = Plugin;
    $.fn.diceApp.Constructor = DiceApp;

})(jQuery);