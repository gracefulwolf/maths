/*
*	QuizCheck
<div id="quiz-01" class="quiz quiz-check" data-ui="quiz-check" data-option='{"answer":[10], "ansLength":true}'>
	<div class="check-list">
		<div class="check-item"></div>
		<div class="check-item"></div>
	</div>
</div>
*/
/**
 * data-answer-all : 체크 버튼이 전체 정답 보이도록 하는 기능 mm_41_1_06_05_01
 */
(function ($){
	'use strict';

	var QuizCheck = QuizCheck || (function ()
	{
		function initFn ()
		{
			var owner = this;

			this.element.find(".check-item").each(function(){
				var idx = $(this).data("idx");
				if(!idx && isNaN(idx)) $(this).data("idx", $(this).index());
			});
			this.element.find(".check-item").on("click", function(){
				// 특별한 코너에서 따로 이벤트를 넣었을 때, 이벤트 막기
				if(owner.cornerEvent) return;

				var idx = $(this).data("idx");
				checkActive.call(owner, idx, $(this));
			});

			if(this.options.autoStart) this.start();

		}

		function checkActive(idx, item)
		{
			var audioEff = "button";

			var checkList = item.parents(".check-list");
			if(checkList.length < 1) checkList = this.element;
			var item = checkList.find(".check-item").eq(idx);
			item.removeClass("answered");

			// 체크 갯수로 정답 체크
			if(this.options.ansLength || this.multicheck)
			{
				if(item.hasClass("active")) item.removeClass("active");
				else						item.addClass("active");
			}
			else
			{
				checkList.find(".check-item").removeClass("active");
				if(isNaN(idx)) return;
				item.addClass("active");
			}

			// 퀴즈 유형 followActive :: 체크한 아이템의 index까지 active 적용
			if(this.options.followActive)
			{
				checkList.find(".check-item").removeClass("active");
				for(var i = 0; i < idx+1; i ++)
				{
					checkList.find(".check-item").eq(i).addClass("active");
				}
			}

			// type-box 일때 부분 정답 버튼 처리
			var answerPartIdx = item.data("answer-part-idx");
			if(answerPartIdx != null || answerPartIdx != undefined)
			{
				console.log("answerPartIdx: ", answerPartIdx);
				var btn = this.quizMain.find(".btn-answer-part[data-idx='"+answerPartIdx+"']");

				if(this.selfcheck)
				{
					if(this.element.find(".check-item.active").length == this.element.find(".check-item").length)
					{
						btn.addClass("active");
					}
				}
				else
				{
					btn.addClass("active");
				}

				if(this.options.ansLength)
				{
					if( this.element.find(".check-item.active").length == this.element.find(".check-item").length)
					{
						this.checkAnswer();
					}
				}
			}
			// 정답 버튼 확인 및 정답 버튼 유형에 따른 효과음 처리
			if(this.selfcheck || this.element.hasClass("type-box") || this.element.hasClass("image-answer"))
			{
				if(checkList.find(".check-item.active").length == checkList.find(".check-item").length)
				{
					if(this.element.hasClass("image-answer") || this.selfcheck)
					{
						this.checkAnswer();
					}
					var quizMainIns = this.quizMain.data("instance");
					if(quizMainIns) quizMainIns.btnCheck(true);
				}
				audioEff = "answer";
			}

			if(this.element.data("audio-effect") != false)	GlobalAudio.play(audioEff);
			

			// item 체크시 추가 요소(ex: .quiz-01_0_0) 보이도록 처리
			var quiz_id = this.element.attr("id");
			var list_idx = (checkList.hasClass("check-list")) ? checkList.index() : 0;
			var item_idx = item.index();

			if(quiz_id)
			{
				var selector = "." + quiz_id + "_" + list_idx + "_" + item_idx;
				console.log(selector);
				$(selector).addClass("show");
			}

			// :: 1. 체크 버튼이 전체 정답 보이도록 하는 기능 mm_41_1_06_05_01
			if(item.data("answer-all"))
			{
				var quizMainIns = this.quizMain.data("instance");
				if(quizMainIns) quizMainIns.showAnswer();
			}
			
			this.element.trigger("quizCheck", {item:item});
			console.log("trigger quizCheck");
		}

		function checkRight(val, ans) {
			var bool = false;
			if(typeof ans == "object")
			{
				for(var i in ans)
				{
					if(val == ans[i])
					{
						bool = true;
						break;
					}
				}
			}
			else
			{
				if(val == ans) bool = true;
			}
			return bool;
		}

		function checkAnswerPart(i)
		{
			var ans = this.options.answer[i];
			
			// 체크 갯수로 정답 체크
			if(this.options.ansLength)
			{
				this.element.find(".check-list").eq(i).find(".check-item").each(function(j){
					if(j < ans)
					{
						$(this).addClass("ans");
					}
				});
			}
			else
			{
				this.element.find(".check-list").eq(i).find(".check-item").eq(ans).addClass("ans");
			}
			
			this.element.find(".check-list").eq(i).find(".check-item").addClass("answered");
		}

		return IQuiz.extend({
			init : function (element, options)
			{
				this._super(element, options);

				this.cornerEvent = this.element.data("corner-event");

				this.quizMain = this.element.parents("*[data-ui='quizMain']");

				this.selfcheck = this.element.data("selfcheck");
				this.multicheck = this.element.data("multicheck");

				this.answerList = [];
				if(this.options.answer) this.answerList = this.options.answer;

				
				if(!this.element.data("toggle-disable"))
				{
					if(this.options.ansLength) this.element.addClass("toggle-active");
					if(this.options.multiAnswer) this.element.addClass("toggle-active");
					if(this.options.followActive) this.element.addClass("toggle-active");
				}

				initFn.call(this);
			},

			start : function ()
			{
				this._super();
			},

			showAnswer : function() 
			{
				this._super();	

				var owner = this;
			
				console.log("quiz-check : showAnswer");
				var total = this.options.answer.length;

				// multiAnswer :: check-list는 1개만 사용해야 함.
				if(this.options.multiAnswer == true) 
				{
					for(var i = 0; i < total; i++)
					{
						this.element.find(".check-item").eq(this.options.answer[i]).addClass("ans");
					}
				}
				else
				{
					for(var i = 0; i < total; i++)
					{
						var ans = this.options.answer[i];
	
						// 체크 갯수로 정답 체크
						if(this.options.ansLength)
						{
							this.element.find(".check-list").eq(i).find(".check-item").each(function(j){
								if(j < ans)
								{
									$(this).addClass("ans");
								}
							});
						}
						else
						{
							this.element.find(".check-list").eq(i).find(".check-item").eq(ans).addClass("ans");
						}

						// followActive 일 때, 정답 체크
						if(this.options.followActive)
						{
							this.element.find(".check-list").eq(i).find(".check-item").each(function(j){
								if(j <= ans) owner.element.find(".check-list").eq(i).find(".check-item").eq(j).addClass("ans");
							})
						}
						
	
						this.element.find(".check-list").eq(i).find(".check-item").addClass("answered");
					}
				}
				

				this.element.find(".check-item").addClass("answered");

				this.element.addClass("active");
				this.element.trigger("SHOW_ANSWER");

				this.element.find(".btn-check").addClass("remove");
			},
			
			checkAnswerGroup : function (group, g_idx)
			{
				if(this.element.hasClass("image-answer"))
				{
					this.checkAnswer();
				}

				var groupArr = group.split(",");

				var bool = false;
				var count = 0;
				var total = groupArr.length;
				for(var j = 0; j < groupArr.length; j++)
				{
					var i = parseInt(groupArr[j]);
					var val = this.element.find(".check-list").eq(i).find(".check-item.active").index();
					// 체크 갯수로 정답 체크
					if(this.options.ansLength)
					{
						val = this.element.find(".check-list").eq(i).find(".check-item.active").length;
					}

					var ans = this.options.answer[i];
					
					if(checkRight.call(this, val, ans)) count++;
					checkAnswerPart.call(this, i);
				}

				if(count == total) bool = true;
				
				if(this.element.hasClass("image-answer")) bool = true;

				return bool;
			},

			hideAnswerGroup : function(group, g_idx)
			{
				var groupArr = group.split(",");

				for(var j = 0; j < groupArr.length; j++)
				{
					var i = parseInt(groupArr[j]);

					// this.element.find(".check-list").eq(i).find(".check-item").removeClass("ans active");
					this.element.find(".check-list").eq(i).find(".check-item").removeClass("ans answered");
				}

				this.element.removeClass("active");
				this.element.removeClass("finish");

				this.element.data("isRight", false);
			},

			checkAnswer : function ()
			{
				var bool = false;
				var count = 0;
				var total = this.options.answer.length;
				var val;
				var ans;

				// multiAnswer :: check-list는 1개만 사용해야 함.
				if(this.options.multiAnswer == true) {
					for(var i = 0; i < this.element.find(".check-item").length; i++)
					{
						ans = this.options.answer;
						if(this.element.find(".check-item").eq(i).hasClass("active"))
						{
							val = i;
							if(checkRight.call(this, val, ans)) count++;
							else count--;
						}
					}
				}
				else
				{
					for(var i = 0; i < total; i++)
					{
						val = this.element.find(".check-list").eq(i).find(".check-item.active").index();
	
						// 체크 갯수로 정답 체크
						if(this.options.ansLength)
						{
							val = this.element.find(".check-list").eq(i).find(".check-item.active").length;
							if(this.element.find(".check-list").eq(i).find(".check-item.ans").length > 0)
							{
								val = this.element.find(".check-list").eq(i).find(".check-item.ans").length;
							}
						}
						// followActive 일 때, 정답 체크
						if(this.options.followActive)
						{
							val = this.element.find(".check-list").eq(i).find(".check-item.active").length - 1;
						}

						ans = this.options.answer[i];
						if(checkRight.call(this, val, ans)) count++;
					}
				}
				
				console.log(count, total);
				if(count == total) 
				{
					bool = true;
					this.element.data("isRight", true);
				}
				else
				{
					this.element.data("isRight", false);
				}

				this.element.addClass("finish");
				this.showAnswer();

				return bool;
			},

			hideAnswer : function()
			{
				this._super();

				this.element.removeClass("active");
				this.element.removeClass("finish");

				this.element.data("isRight", false);

				this.element.find(".check-item").removeClass("ans answered");
				this.element.trigger("HIDE_ANSWER");

				this.element.find(".btn-check").removeClass("remove");
			},

			resetAnswer : function()
			{
				this._super();

				this.element.removeClass("active");
				this.element.removeClass("finish");

				this.element.data("isRight", false);

				this.element.find(".check-item").removeClass("ans active");
				this.element.find(".check-item").removeClass("answered");
				this.element.trigger("RESET_ANSWER");

				this.element.find(".btn-check").removeClass("remove");
			},

			dispose : function ()
			{
				this.element.removeClass("start active finish");
				this.dispose();
			}
		});

	})();

	// 기본 옵션
	/** 
	 * ansLength : 체크 갯수로 정답 체크할 때 사용 
	 * multiAnswer : 멀티 정답인 경우 사용   <div id="quiz-01" class="quiz quiz-check type-ox-01" data-ui="quiz-check" data-selfcheck=false data-multicheck=true data-option='{"answer":[0,1,2,3], "multiAnswer":true}'>
	 * 				multiAnswer에서는 check-list는 1개만 사용해야 함.
	 * 싱글 체크, 싱글 정답 사용 예 :<div id="quiz-01" class="quiz quiz-check type-ox-01" data-ui="quiz-check" data-multicheck=false data-option='{"answer":[1], "multiAnswer":false}'>
	 * followActive : 체크한 아이템의 index까지 active 적용되도록 할 때 사용.(ex: 막대바 색칠, 셀프체크 별 색칠)
	 * 
	 * data- 옵션
	 * 1) data-selfcheck=true >> 클릭 시 바로 정답 처리
	 * 2) data-multicheck=true >> 2개 이상 check-item 정답 체크 가능
	 * 3) data-toggle-disable=true >> multicheck 이더라도 토글 체크 안 되도록 처리
	 * 
	*/

	QuizCheck.DEFAULT = {autoStart:true, ansLength:false, multiAnswer:false, followActive:false};

    function Plugin(option, params)
    {
        return this.each(function ()
        {
            var $this = $(this);
            var data = $this.data('ui.quizCheck');
            var options =  $.extend({}, QuizCheck.DEFAULT, typeof option == "object" && option);
            if (!data) $this.data('ui.quizCheck', (data = new QuizCheck($this, options)));
			if (typeof option == 'string') data[option](params);
			$this.data('instance', data);
        });
    }

	$.fn.quizCheck = Plugin;
    $.fn.quizCheck.Constructor = QuizCheck;

})(jQuery);
