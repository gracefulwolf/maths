/*
*	QuizCheckMulti

<div id="quiz-01" class="quiz quiz-check-multi" data-ui="quiz-check-multi" data-option='{"answer":[[0,2]]}'>
	<div class="check-list">
		<div class="check-item btn-item"></div>
		<div class="check-item btn-item"></div>
	</div>
</div>
*/
(function ($){
	'use strict';

	var QuizCheckMulti = QuizCheckMulti || (function ()
	{
		function initFn ()
		{
			var owner = this;

			for(var i = 0; i < this.options.answer.length; i++)
			{
				for(var j = 0; j < this.options.answer[i].length; j++)
				{
					var ans = this.options.answer[i][j];
					this.element.find(".check-list").eq(i).find(".check-item").eq(ans).addClass("ans-item");
				}
			}
						
			this.element.find(".check-item").on("click", function(){
				if(owner.options.clickAudio) 	GlobalAudio.play(owner.options.clickAudio);
				else							GlobalAudio.play("button")

				var idx = $(this).index();
				checkActive.call(owner, idx, $(this));
			});

			if(this.options.autoStart) this.start();

		}

		function checkActive(idx, item)
		{
			item.removeClass("answered");
			item.addClass("active");
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
			for(var j = 0; j < this.options.answer[i].length; j++)
			{
				this.element.find(".check-list").eq(i).find(".check-item.ans-item").addClass("ans");
			}
			this.element.find(".check-list").eq(i).find(".check-item").addClass("answered");
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
			
				console.log("quiz-check-multi : showAnswer");
				var total = this.options.answer.length;
				for(var i = 0; i < total; i++)
				{
					this.element.find(".check-list").eq(i).find(".check-item.ans-item").addClass("ans");
					this.element.find(".check-list").eq(i).find(".check-item").addClass("answered");
				}

				this.element.find(".check-item").addClass("answered");

				this.element.addClass("active");
				this.element.trigger("SHOW_ANSWER");
			},
			
			checkAnswerGroup : function (group, g_idx)
			{
				console.log("CCCCCCCCC");
				var groupArr = group.split(",");

				var bool = false;
				var count = 0;
				var total = 0;
				for(var k = 0; k < groupArr.length; k++)
				{
					var i = parseInt(groupArr[k]);
					total += this.element.find(".check-list").eq(i).find(".check-item.ans-item").length;

					for(var j = 0; j < this.options.answer[i].length; j++)
					{
						var ans = this.options.answer[i][j];

						var item = this.element.find(".check-list").eq(i).find(".check-item").eq(ans);
						if(item.hasClass("active")) 
						{
							count++;
						}
						item.addClass("ans");
					}

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
				var total = this.element.find(".check-item.ans-item").length;

				for(var i = 0; i < this.options.answer.length; i++)
				{
					for(var j = 0; j < this.options.answer[i].length; j++)
					{
						var ans = this.options.answer[i][j];

						var item = this.element.find(".check-list").eq(i).find(".check-item").eq(ans);
						if(item.hasClass("active")) 
						{
							count++;
						}
					}
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

				this.element.removeClass("active");
				this.element.removeClass("finish");

				this.element.data("isRight", false);

				this.element.find(".check-item").removeClass("ans answered");
				this.element.trigger("HIDE_ANSWER");
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
			},

			dispose : function ()
			{
				this.element.removeClass("start active finish");
				this.dispose();
			}
		});

	})();

	// 기본 옵션

	QuizCheckMulti.DEFAULT = {autoStart:true, clickAudio:null};

    function Plugin(option, params)
    {
        return this.each(function ()
        {
            var $this = $(this);
            var data = $this.data('ui.quizCheckMulti');
            var options =  $.extend({}, QuizCheckMulti.DEFAULT, typeof option == "object" && option);
            if (!data) $this.data('ui.quizCheckMulti', (data = new QuizCheckMulti($this, options)));
			if (typeof option == 'string') data[option](params);
			$this.data('instance', data);
        });
    }

	$.fn.quizCheckMulti = Plugin;
    $.fn.quizCheckMulti.Constructor = QuizCheckMulti;

})(jQuery);
