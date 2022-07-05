/*
*	QuizPopSelect
*   기능 추가 :: 2020.11.22 >> 입력값 없을 때 정답으로 처리하는 기능 answer 정답에 -1 or "-1" 이면 선택 없을 때만 정답으로 처리
*/
(function ($){
	'use strict';

	var QuizPopSelect = QuizPopSelect || (function ()
	{
		function initFn ()
		{
			var owner = this;
			// console.log('quiz-cont length: ', this.element.find(".quiz-cont").length);

			this.element.find(".quiz-bt-open").on("click",function(){
				GlobalAudio.play("button");
				checkOpen.call(owner, $(this));
			});
			this.element.find(".quiz-pop .quiz-bt").on("click",function(){
				GlobalAudio.play("button");
				checkSelect.call(owner, $(this).index(), $(this));
			});
			
			if(this.options.autoStart) this.start();
		}

		function checkOpen(btn)
		{
			var owner = this;

			// 정답 확인 됐을 때 클릭 막기
			if(this.element.hasClass("finish")) return;

			var group_id = this.element.attr("data-group");
			$("*[data-ui='quiz-pop-select'][data-group='"+group_id+"']").not(this.element).each(function(i){
				if($(this).data("instance").isOpen)
				{
					$(this).data("instance").close();
				}
			});

			var quizCont = btn.parents(".quiz-cont");
			if(quizCont.length > 0)
			{
				if(!quizCont.hasClass("open"))
				{
					this.close();
					quizCont.addClass("open");
					
					quizCont.find(".quiz-pop").addClass("active");
				}
				else
				{
					quizCont.removeClass("open");
					quizCont.find(".quiz-pop").removeClass("active");
				}
			}
			else
			{
				if(!this.element.find(".quiz-pop").hasClass("active"))
				{
					this.element.find(".quiz-pop").addClass("active");
				}
				else
				{
					this.element.find(".quiz-pop").removeClass("active");
				}
			}
		}

		function checkSelect(idx, btn)
		{
			var group_id = this.element.attr("data-group");
			$("*[data-ui='quiz-pop-select'][data-group='"+group_id+"']").not(this.element).each(function(i){
				var t_idx = parseInt($(this).find(".quiz-bt-open").attr("idx"));
				if(idx == t_idx) $(this).find(".quiz-bt-open").attr("idx", "");
			});

			this.close();

			var quizCont = btn.parents(".quiz-cont");
			if(quizCont.length > 0)
			{
				// console.log("btn");
				quizCont.find(".quiz-bt-open").attr("idx", idx);
			}
			else
			{
				this.element.find(".quiz-bt-open").attr("idx", idx);
			}

			this.element.trigger("SELECT", {target:this.element, index:idx});
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

					console.log(val);

					// 입력값 없을 때 정답처리
					if(isNaN(val) && parseInt(ans[i]) == -1)
					{
						bool = true;
						break;
					}
				}
			}
			else
			{
				if(val == ans) bool = true;

				// 입력값 없을 때 정답처리
				if(isNaN(val) && parseInt(ans) == -1) bool = true;
			}
			return bool;
		}

		function checkAnswerPart(i)
		{
			var ans = this.options.answer[i];
			this.element.find(".quiz-cont").eq(i).find(".quiz-bt-open").addClass("ans");
			this.element.find(".quiz-cont").eq(i).find(".quiz-bt-open").attr("idx", ans);

			this.element.find(".quiz-cont").eq(i).removeClass("open");
			this.element.find(".quiz-cont").eq(i).find(".quiz-pop").removeClass("active");
		}

		return IQuiz.extend({
			init : function (element, options)
			{
				this._super(element, options);

				initFn.call(this);
			},

			start : function ()
			{
				this._super();
			},

			showAnswer : function() 
			{
				this._super();	
				
				var total = this.options.answer.length;
				for(var i = 0; i < total; i++)
				{
					this.element.find(".quiz-cont").eq(i).find(".quiz-bt-open").attr("idx", this.options.answer[i]);
					this.element.find(".quiz-cont").eq(i).find(".quiz-bt-open").addClass("ans");
				}

				this.element.addClass("active");
				this.element.trigger("SHOW_ANSWER");

				this.close();
			},

			checkAnswerGroup : function (group, g_idx)
			{
				var groupArr = group.split(",");

				var bool = false;
				var count = 0;
				var total = groupArr.length;
				for(var j = 0; j < groupArr.length; j++)
				{
					var i = parseInt(groupArr[j]);
					var val = parseInt(this.element.find(".quiz-cont").eq(i).find(".quiz-bt-open").attr("idx"));
					var ans = this.options.answer[i];
					
					if(checkRight.call(this, val, ans)) count++;
					checkAnswerPart.call(this, i);
				}

				if(count == total) bool = true;
			
				return bool;
			},

			hideAnswerGroup : function(group, g_idx)
			{
				var groupArr = group.split(",");

				for(var j = 0; j < groupArr.length; j++)
				{
					var i = parseInt(groupArr[j]);

					this.element.find(".quiz-cont").eq(i).find(".quiz-bt-open").attr("idx", "");
					this.element.find(".quiz-cont").eq(i).find(".quiz-bt-open").removeClass("ans");
				}

				this.element.removeClass("active");
				this.element.removeClass("finish");

				this.element.data("isRight", false);
			},

			checkAnswer : function (){
				var bool = false;
				var count = 0;
				var total = this.options.answer.length;

				for(var i = 0; i < total; i++)
				{
					var val = parseInt(this.element.find(".quiz-cont").eq(i).find(".quiz-bt-open").attr("idx"));
					var ans = this.options.answer[i];
					if(checkRight.call(this, val, ans)) count++;
				}

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

				this.close();

				this.element.removeClass("active");
				this.element.removeClass("finish");

				this.element.data("isRight", false);

				this.element.find(".quiz-bt-open").attr("idx", "");
				this.element.find(".quiz-bt-open").removeClass("ans");
			},

			resetAnswer : function()
			{
				this._super();

				this.close();

				this.element.removeClass("active");
				this.element.removeClass("finish");

				this.element.data("isRight", false);

				this.element.find(".quiz-bt-open").attr("idx", "");
				this.element.find(".quiz-bt-open").removeClass("ans");
			},

			close : function()
			{
				this.element.removeClass("open");
				this.element.find(".quiz-cont").removeClass("open");
				this.element.find(".quiz-pop").removeClass("active");
			},

			dispose : function (){

			}
		});

	})();

	// 기본 옵션
	QuizPopSelect.DEFAULT = {autoStart:true};

    function Plugin(option, params)
    {
        return this.each(function ()
        {
            var $this = $(this);
            var data = $this.data('ui.quizPopSelect');
            var options =  $.extend({}, QuizPopSelect.DEFAULT, typeof option == "object" && option);
            if (!data) $this.data('ui.quizPopSelect', (data = new QuizPopSelect($this, options)));
			if (typeof option == 'string') data[option](params);
			$this.data('instance', data);
        });
    }

	$.fn.quizPopSelect = Plugin;
    $.fn.quizPopSelect.Constructor = QuizPopSelect;

})(jQuery);