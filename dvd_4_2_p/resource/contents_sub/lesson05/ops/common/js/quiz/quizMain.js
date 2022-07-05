/*
*	QuizMain
*/
(function ($){
	'use strict';

	var QuizMain = QuizMain || (function ()
	{
		function initFn ()
		{
			var owner = this;

			// 퀴즈 클리어 처리하기
			this.element.on("CLEAR", function(){
				// console.log("정답 버튼 active");

				owner.element.find(".check-btns > div").addClass("active");
				quizClear.call(owner);
			});

			// quiz-draggable 드래그 퀴즈 완료했을때
			this.element.find(".quiz-draggable").on("quizClear", function(){
				// console.log("quiz-draggable clear!!");
				// 정답 버튼에 active 주기
				owner.element.find(".check-btns > div").addClass("active");
				quizClear.call(owner);
			});

			// check btns
			this.element.find(".btn-ex").on("click", function(){
				GlobalAudio.play("answer");
				
				if(!$(this).hasClass("active"))
				{
					$(this).addClass("active");
					owner.showAnswer();
					// owner.checkAnswerAll();
					
					// 퀴즈 메인에 .clear-audio가 없으면 clear 처리
					var quizMain = $(this).parents(".quiz-main");
					if(quizMain.find(".clear-audio").length < 1) quizClear.call(owner);
				}
				else
				{
					$(this).removeClass("active");
					owner.hideAnswer()
				}
			});

			this.element.find(".btn-answer-part").each(function(e){
				var idx = ($(this).attr("data-idx")) ? parseInt($(this).attr("data-idx")) : $(this).index();
				$(this).attr("data-idx", idx);
			});
			this.element.find(".btn-answer-part").on("click", function(){
				var option = JSON.parse($(this).attr("data-option"));
				var list = [];
				for(var i = 0; i < option.quiz.length; i++)
				{
					var quiz = owner.element.find(option.quiz[i]);
					list.push(quiz);
				}
				var group = option.quizGroup;
				var idx = ($(this).attr("data-idx")) ? parseInt($(this).attr("data-idx")) : $(this).index();

				if(!$(this).hasClass("active"))
				{
					// CC 애니 플레이
					if($(this).attr("data-ani"))
					{
						var ani = JSON.parse($(this).attr("data-ani"));
						CcAniControl.playMovieclip(ani);
					}

					$(this).addClass("active");
					owner.checkAnswerPart(list, group, idx);
				}
				else
				{
					$(this).removeClass("active");
					owner.hideAnswerPart(list, group, idx);
				}
			});
			this.element.find(".btn-answer-all").on("click", function(){
				if(!$(this).hasClass("active"))
				{
					$(this).addClass("active");
					owner.checkAnswerAll();
				}
				else
				{
					$(this).removeClass("active");
					owner.hideAnswer();
				}
			});
			this.element.find(".btn-answer").on("click", function(){
				if(!$(this).hasClass("active"))
				{
					$(this).addClass("active");
					owner.checkAnswerAll();
				}
				else
				{
					$(this).removeClass("active");
					owner.hideAnswer();
				}
			});

			// 다시하기 버튼
			this.element.find(".btn-retry").on("click", function(){
				GlobalAudio.play("button");
				owner.resetAnswer();
			});
		}

		function quizClear () {
			this.element.addClass("clear");
		}
		
		return Class.extend({
			init : function (element, options)
			{
				this.element = element;
				this.options = options;

				initFn.call(this);
			},

			/**
			 * @param {bool} checkAll //btn-answer-part 버튼 없을 때 (예시,정답,전체정답) 버튼을 다시하기로 바꾼다
			 */
			btnCheck : function (checkAll) 
			{
				// 전체 정답 버튼 active 체크
				var total = this.element.find(".btn-answer-part").length;
				var count = this.element.find(".btn-answer-part.active").length;
				// console.log("btn-answer-part :: count", count, "total", total);
				if(total < 1) 
				{
					if(this.element.find(".btn-answer").hasClass("active") || this.element.find(".btn-answer-all").hasClass("active") || this.element.find(".btn-ex").hasClass("active") || checkAll)
					{
						this.element.find(".btn-ex.toggle").addClass("remove");
						this.element.find(".btn-answer.toggle").addClass("remove");	
						this.element.find(".btn-answer-all.toggle").addClass("remove");

						this.element.find(".btn-retry.toggle").removeClass("remove");

						this.element.find(".btn-answer").addClass("active");
						this.element.find(".btn-answer-all").addClass("active");
					}
					else
					{
						this.element.find(".btn-ex.toggle").removeClass("remove");
						this.element.find(".btn-answer.toggle").removeClass("remove");
						this.element.find(".btn-answer-all.toggle").removeClass("remove");

						this.element.find(".btn-retry.toggle").addClass("remove");
					}
					return;
				}
				if(count == total)
				{
					this.element.find(".btn-ex.toggle").addClass("remove");	
					this.element.find(".btn-answer-all.toggle").addClass("remove");	
					this.element.find(".btn-answer.toggle").addClass("remove");	
					this.element.find(".btn-retry.toggle").removeClass("remove");

					this.element.find(".btn-ex").addClass("active");
					this.element.find(".btn-answer-all").addClass("active");
					this.element.find(".btn-answer").addClass("active");

					quizClear.call(this);
					this.element.trigger("QUIZ_CLEAR_ON");
					// console.log(this.element.attr("class"), "trigger", "QUIZ_CLEAR_ON");
				}
				else
				{
					this.element.find(".btn-ex.toggle").removeClass("remove");
					this.element.find(".btn-answer-all.toggle").removeClass("remove");
					this.element.find(".btn-answer.toggle").removeClass("remove");	
					this.element.find(".btn-retry.toggle").addClass("remove");

					this.element.find(".btn-ex").removeClass("active");
					this.element.find(".btn-answer-all").removeClass("active");
					this.element.find(".btn-answer").removeClass("active");

					this.element.removeClass("clear");
					this.element.trigger("QUIZ_CLEAR_OFF");
					// console.log(this.element.attr("class"), "trigger", "QUIZ_CLEAR_OFF");
				}
			},

			checkAnswerPart : function (list, group, idx){
				if(this.options.answerCheck == false)
				{
					for(var i = 0; i < list.length; i++)
					{
						// ----------------------------------------- 2020.05.13 부분 정답 버튼도 정답 체크 안하는 "예시 정답" 기능 적용 :: e6_11_18_03.html
						// quizIns.showAnswer();
						var hasGroup = false;
						if(group) 
						{
							if(group[i]) hasGroup = true;
						}
	
						var quizIns = $(list[i]).data("instance");
	
						if(hasGroup)
						{
							if(quizIns.checkAnswerGroup(group[i], idx)) count++;
						}
						else
						{
							if(quizIns.checkAnswer()) count++;
						}
					}
					GlobalAudio.play("answer");
				}
				else
				{
					var onlyAnswerAudio = false;
					var count = 0;
					var total = list.length;
					for(var i = 0; i < list.length; i++)
					{
						var hasGroup = false;
						if(group) 
						{
							if(group[i]) hasGroup = true;
						}

						var quizIns = $(list[i]).data("instance");
	
						if(hasGroup)
						{
							if(quizIns.checkAnswerGroup(group[i], idx)) count++;
						}
						else
						{
							if(quizIns.checkAnswer()) count++;
						}

						// if($(list[i]).hasClass("image-answer")) onlyAnswerAudio = true;
					}
	
					if(this.element.find(".btn-ex").length > 0 || onlyAnswerAudio == true)
					{
						// 예시 효과음 
						GlobalAudio.play("answer");
					}
					else
					{
						// 정오 효과음 
						if(count == total)	GlobalAudio.play("quiz_o");
						else				GlobalAudio.play("quiz_x");
					}
					
				}

				this.btnCheck();
			},

			hideAnswerPart : function (list, group, idx)
			{
				for(var i = 0; i < list.length; i++)
				{
					var hasGroup = false;
					if(group) 
					{
						if(group[i]) hasGroup = true;
					}

					var quizIns = $(list[i]).data("instance");

					if(hasGroup)
					{
						quizIns.hideAnswerGroup(group[i], idx);
					}
					else
					{
						quizIns.hideAnswer();
					}
				}

				this.btnCheck();
			},

			checkAnswerAll : function (arr){

				if(this.options.answerCheck == false)
				{
					this.showAnswer();
					GlobalAudio.play("answer");
					return;
				}

				var list = this.element.find("*[data-ui*='quiz-']").each(function(i){
					if($(this).data("isRight") != true) 
					{
						$(this).data("instance").checkAnswer();
					}
				});
				
				var isRight = true;
				var total = this.element.find("*[data-ui*='quiz-']").length;
				for(var i = 0; i < total; i++)
				{
					var right = this.element.find("*[data-ui*='quiz-']").eq(i).data("isRight");

					if(right != true) 
					{
						isRight = false;
						break;
					}
				}
				if(isRight)
				{
					GlobalAudio.play("quiz_o");
					quizClear.call(this);
				}
				else
				{
					GlobalAudio.play("quiz_x");
				}
				this.element.find(".btn-answer-part").addClass("active");

				this.btnCheck();

				this.element.trigger("QUIZ_CHECK_ANSWER_ALL");
				// console.log(this.element.attr("class"), "trigger", "QUIZ_CHECK_ANSWER_ALL");
			},

			showAnswer : function ()
			{
				this.element.find("*[data-ui*='quiz-']").each(function(i){
					$(this).data("instance").showAnswer();
				});
				
				this.element.find(".btn-answer-part").addClass("active");
				this.element.find(".btn-ex").addClass("active");
				this.element.find(".btn-answer-all").addClass("active");
				this.element.find(".btn-answer").addClass("active");

				this.btnCheck();

				this.element.trigger("QUIZ_SHOW_ANSWER");
				// console.log(this.element.attr("class"), "trigger", "QUIZ_SHOW_ANSWER");
			},
			resetAnswer : function ()
			{
				this.element.find("*[data-ui*='quiz-']").each(function(i){
					if(!$(this).hasClass("disable")) $(this).data("instance").resetAnswer();
				});
				
				this.element.find(".btn-answer-part").removeClass("active");
				this.element.find(".btn-ex").removeClass("active");
				this.element.find(".btn-answer-all").removeClass("active");
				this.element.find(".btn-answer").removeClass("active");

				// this.element.find(".btn-answer").each(function(i){
				// 	if(!$(this).hasClass("always-show")) $(this).removeClass("active");
				// });

				this.btnCheck();

				this.element.trigger("QUIZ_RESET_ANSWER");
				// console.log(this.element.attr("class"), "trigger", "QUIZ_RESET_ANSWER");
			},
			hideAnswer : function ()
			{
				// console.log("정답 숨기기");
				
				this.element.find("*[data-ui*='quiz-']").each(function(i){
					$(this).data("instance").hideAnswer();
				});
				
				this.element.find(".btn-answer-part").removeClass("active");
				this.element.find(".btn-ex").removeClass("active");
				this.element.find(".btn-answer-all").removeClass("active");
				this.element.find(".btn-answer").removeClass("active");

				// this.element.find(".btn-answer").each(function(i){
				// 	if(!$(this).hasClass("always-show")) $(this).removeClass("active");
				// });

				this.btnCheck();
			},

			dispose : function (){

			}
		});

	})();

	// 기본 옵션
	/**
	 * @param {string} answerCheck "false" 일때, 정답 체크 안 함
	 */
	QuizMain.DEFAULT = {answerCheck:true};

    function Plugin(option, params)
    {
        return this.each(function ()
        {
            var $this = $(this);
            var data = $this.data('ui.quizMain');
            var options =  $.extend({}, QuizMain.DEFAULT, typeof option == "object" && option);
            if (!data) $this.data('ui.quizMain', (data = new QuizMain($this, options)));
			if (typeof option == 'string') data[option](params);
			$this.data('instance', data);
        });
    }

	window.QuizMain = QuizMain;

	$.fn.quizMain = Plugin;
    $.fn.quizMain.Constructor = QuizMain;

})(jQuery);