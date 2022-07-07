/*
*	QuizInputText
*   기능 추가 :: 2020.11.09 >> 부분 정답 체크할 때, 퀴즈 전체의 input이 정답 체크 상태인지 검사하여 .quiz-01-answer 보이기
*   기능 추가 :: 2020.11.22 >> 무조건 정답으로 처리하는 기능 answer 정답에 "-1"이면 어떤 값이 입력되도 무조건 정답으로 처리
*/
(function ($){
	'use strict';

	var QuizInputText = QuizInputText || (function ()
	{
		function initFn ()
		{
			var owner = this;
			
			this.element.find("textarea").each(function(i){

				//------------------------------------------------------------
				/**
				 * 입력 줄 수 제한 신규 버전 적용 2020.05.29
				 * if textarea has Class "limit-height"
				 * "Enter"가 입력된다면 console.log(height, $(this).height()); 로 height 값을 체크해 보자
				*/
				// 입력 체크할 임시 div 셋팅
				if($(this).hasClass("limit-height"))
				{
					if(!$.fn.textHeight)
					{
						$.fn.textHeight = function(text, font) {
							if (!$.fn.textHeight.fakeEl) $.fn.textHeight.fakeEl = $('<div class="textarea-fake">').appendTo(document.body);
			
							var str = text || this.val() || this.text();
							$.fn.textHeight.fakeEl.html(str)
							.css('padding-left', this.css('padding-left'))
							.css('padding-right', this.css('padding-right'))
							.css('font-size', this.css('font-size'))
							.css('font-family', this.css('font-family'))
							.css('width', this.css('width'))
							.css('line-height', this.css('line-height'))
							.css('text-align', this.css('text-align'))
							.css('text-indent', this.css('text-indent'))
							.css('letter-spacing', this.css('letter-spacing'))
							.css('word-break', this.css('word-break'));

							/*
							if(this.attr('word-break') == "break-all")
							{
								$.fn.textHeight.fakeEl.css('word-break', this.attr('word-break'));
							}
							else
							{
								if(isIE11)	$.fn.textHeight.fakeEl.css('word-break', "keep-all");
								else		$.fn.textHeight.fakeEl.css('word-break', "break-word");
							}
							*/

							return $.fn.textHeight.fakeEl.height();
						};
					}	

					// 입력 순간 체크
					$(this).on("propertychange change keyup paste input keydown", function(e) {
						var height = $(this).textHeight();
						var heightOrigin = $(this).height();
						var heightDum = 4; /* textHeight, scrollHeight 값이 1~4 픽셀 크게 나오는 경우가 있어 예외 처리를 위해 더해 줌 */
						// $('#'+this.id+'-height').html(height + 'px');

						// console.log("height: ", height);
		
						var oldVal = $(this).data("oldVal");
		
						// 1. 페이크 엘리먼트의 height이 textarea의 height 보다 크면 입력 안 함으로 처리.
						// console.log("line-height: ", $(this).css("line-height"));
						// console.log("height: ", height, heightOrigin);
						if(height > heightOrigin + heightDum)
						{
							$(this).val(oldVal);
							e.preventDefault();
							e.stopPropagation();
							// console.log("return1");
							return;
						}
						// 2. 페이크 엘리먼트의 height이 textarea의 height 과 같을때, Enter 키가 "keydown" 되면 입력 안 함으로 처리.
						else if(height == heightOrigin)
						{
							if(e.type == "keydown")
							{
								if(e.key == "Enter")
								{
									// console.log("return2");
									e.preventDefault();
									e.stopPropagation();
									return;
								}    
							}
						}
		
						/**
						 * 3. Enter는 실제로 keyup 이후에 입력 처리다 되어 
						 * 페이크 엘리먼터의 height만으론 연속를 막을 수 없다.
						 * textarea의 scrollHeight이 실제 height 보다 클 경우 입력 안 함으로 처리.
						*/
						if(e.key == "Enter")
						{
							// ie11에서 this.scrollHeight 값이 1~4 픽셀 크게 나오는 경우가 생김. height에 heigthtDum을 더 해줘서 예외 처리
							// console.log("Enter:", e.type ,this.scrollHeight, heightOrigin);
							if(this.scrollHeight > heightOrigin + heightDum)
							{
								var str = oldVal.substr(0, oldVal.length-1);
								$(this).val(str);
								// console.log("return3");
								e.preventDefault();
								e.stopPropagation();
								return;
							}
						}
		
						var currentVal = $(this).val();
						/** 
						 * 4. 마지막 줄에서 공백(space)이 무한정 입력되는 오류 처리 
						*/
						if(height == $(this).height() && (e.key == " " || e.key == "Spacebar" || e.keyCode == 229))
						{
							var chars = currentVal.substr(-2);
							if(chars == "  ") currentVal = currentVal.substr(0, currentVal.length-1);
							$(this).val(currentVal);
							// console.log("return4");
						}
						if(currentVal == oldVal) {
							return;
						}
						$(this).data("oldVal", currentVal);
		
						/**
						 * 추가 css 관련 체크 사항 
						 * 1. line-height 있을 경우 체크 -- ie11에서 line-height 적용된 최종 height 값을 못 가져와서 오류 발생
						 * 2. text-indent 있을 경우 체크
						 * 3. letter-spacing 있을 경우 체크
						*/
					});

					// 줄 수 셋팅
					if(owner.options.maxRows != null) $(this).attr("rows", owner.options.maxRows);
					var rows = $(this).attr("rows");
					if(!rows) 
					{
						rows = 2;
						$(this).attr("rows", 2);
					}

					/**
					 * 추가 체크 사항 1번 line-height 있는 경우 ie11의 오류 처리
					 * 필수 : line-height 값은 반드시 "px"로 넣어야 처리 된다
					 * 필수 : rows 값이 없으면 default로 2로 설정 된다.
					*/
					var lh = $(this).css("line-height");
					if(lh.indexOf("px") == -1) return;
					else
					{
						var height = parseInt(lh.replace("px", "")) * rows;
						$(this).css("height", height+"px");
					}

					// 추가 체크 : 입력 없이 "Enter"로만 줄 바꿈 할 때
					$(this).on("keydown", function(e){
						onKeyDown.call(owner, this, e);
					});
					return;
				}
				//------------------------------------------------------------

				/**
				 * 입력 줄 수 제한 :: 샘플 - e6_sp1_02_01.html
				 */
				// if($(this).attr("rows"))
				if(owner.options.maxRows != null)
				{
					$(this).attr("scrollHeight", this.scrollHeight);
					$(this).on("keydown", function(e){
						onKeyDown.call(owner, this, e);
					});

					// $(this).on("keyup", function(e){
					// 	onKeyUp.call(owner, this, e);
					// });
				}

				/**
				 * 2줄 입력 문제에 스크롤 안 들어가고, 입력시 스크롤 안 되도록 처리 :: 샘플 - e6_sp1_02_01.html
				 */
				if($(this).hasClass("scroll-none")) 
				{
					$(this).on("change keyup paste", function(){
						$(this).scrollTop(0);
					});
					return;
				}

				var instance = OverlayScrollbars(this, {
					className: "os-theme-dark textarea_wrapper",
					overflowBehavior : {
						x: "hidden",
						y: "scroll"
					},
					textarea: {
						dynWidth  : false,
						dynHeight : true
					},
				});

				$(this).data("scroll", instance);
			});

			// input 입력 width에 맞춰 제한 걸기
			this.element.find("input[type='text']").each(function(i){
				if(!$.fn.textWidth)
				{
					$.fn.textWidth = function(text, font) {
						if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<div class="input-fake">').show().appendTo(document.body);
						var str = text || this.val() || this.text();
						$.fn.textWidth.fakeEl.html(str)
						.css('font-size', this.css('font-size'))
						.css('font-family', this.css('font-family'))
						.css('text-indent', this.css('text-indent'))
						.css('letter-spacing', this.css('letter-spacing'));
						
						return $.fn.textWidth.fakeEl.width();
					};
				}
	
				// 입력 순간 체크
				$(this).on("propertychange change keyup paste input", function() {
					var width = $(this).textWidth();
					// $('#'+this.id+'-width').html(width + 'px');
	
					var oldVal = $(this).data("oldVal");
	
					if(width > $(this).width())
					{
						$(this).val(oldVal);
						return;
					}
	
					var currentVal = $(this).val();
					if(currentVal == oldVal) {
						return;
					}
					$(this).data("oldVal", currentVal);
					
				});
			});

			this.element.find(".guide.inner-text").each(function(i){
				var str = (typeof owner.options.answer[i] == "string") ? owner.options.answer[i] :  owner.options.answer[i][0] ;
				$(this).text(str);
			});

			this.element.find(".answer").each(function(i){
				var str = "";
				if(owner.options.answer[i]) str = (typeof owner.options.answer[i] == "string") ? owner.options.answer[i] :  owner.options.answer[i][0] ;
				$(this).find(".inner-text").text(str);
				if($(this).hasClass("inner-text")) $(this).text(str);
			});

			if(this.options.autoStart) this.start();

			this.element.find(".input").on("click", function(e){
				e.stopPropagation();
			});

			// 개별 정답 체크 버튼
			this.element.find(".btn-check").on("click", function(e){
				var cont = $(this).parents(".input-cont");
				var idx = $(this).index();
				if(cont.length > 0) idx = cont.index();
				idx = ($(this).attr("data-idx")) ? parseInt($(this).attr("data-idx")) : idx;
				console.log(idx);
				
				var quizMain = $(this).parents("*[data-ui='quizMain']");
				var quizMainIns = quizMain.data("instance");
				if(quizMainIns) {
					var btn = quizMain.find(".btn-answer-part[data-idx='"+idx+"']");
					btn.trigger("click");
					$(this).addClass("remove");
				}
			});
		}

		function onKeyDown(el, e) {
			$(el).scrollTop(0);
			var numberOfLines = (el.value.match(/\n/g) || []).length + 1, 		// 현재 textarea에 입력된 줄 수
			maxRows = this.options.maxRows || parseInt($(el).attr("rows"));	// 옵션에 선언된 maxRows 수

			if (e.which === 13 && numberOfLines === maxRows) {
				e.preventDefault ();
				e.stopPropagation();
			}
		}

		function checkRight(val, ans) {
			var bool = false;
			if(val == undefined) return;
			
			val = val.replace(/\n/g, " ");
			// console.log("multiCheckList: ", this.multiCheckList);

			if(typeof val == "string") val = val.replace("'", "’");
			if(typeof ans == "object")
			{
				for(var i in ans)
				{
					if(this.options.answerType == "multiCheck")
					{
						console.log(val);
						console.log(this.multiCheckList);

						if(this.multiCheckList.indexOf(val) > -1) continue;
					}
					if(val == ans[i])
					{
						bool = true;
						break;
					}

					// 무조건 정답으로 처리
					if(ans[i] == "-1") 
					{
						bool = true;
						break;
					}
				}
			}
			else
			{
				if(val == ans) bool = true;
				
				// 무조건 정답으로 처리
				if(ans == "-1") bool = true;
			}

			return bool;
		}

		function checkAnswerPart()
		{
			// 기능 추가 :: 2020.11.09 >> 부분 정답 체크할 때, 퀴즈 전체의 input이 정답 체크 상태인지 검사하여 .quiz-01-answer 보이기
			var bool = this.element.find(".input").length == this.element.find(".input.hide").length;
			if(bool)
			{
				$(this.options.answerElement).addClass("show");
				$(this.answerSelector).addClass("show");
			}
			else
			{
				$(this.options.answerElement).removeClass("show");
				$(this.answerSelector).removeClass("show");
			}


			this.answerParts.each(function(x){
				if($(this).find(".ans").length < 1) return;
				if($(this).find(".ans").length == $(this).find(".ans.show").length)
				{
					$(this).addClass("show");
				}
				else
				{
					$(this).removeClass("show");
				}
			});
		}

		return IQuiz.extend({
			init : function (element, options)
			{
				this._super(element, options);

				this.answerParts = this.element.find("[class*='answer-part']");
				this.answerList = [];
				this.multiCheckList = [];
				if(this.options.answer) this.answerList = this.options.answer;

				initFn.call(this);
			},

			start : function ()
			{
				this._super();
			},

			showAnswer : function() 
			{
				this._super();

				this.answerParts.addClass("show");
				this.answerParts.find(" span").addClass("show");
				this.answerParts.each(function(i){
					var audioText = $(this).parents(".answer-audio-text.audio-text");
					audioText.removeClass("not-hover");
				});

				// if(this.options.valueCheck != "notCheck") this.element.find(".input").val("");
				this.element.find(".input").addClass("hide");
				this.element.addClass("active");

				// text area scroll reset;
				this.element.find("textarea").each(function(i){
					var scroll = $(this).data('scroll');
					if(scroll) scroll.update();
				});

				this.element.find(".btn-check").addClass("remove");
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
					var str = this.element.find(".input").eq(i).val();
					if(typeof this.options.answer[i] == "string") 	var ans = this.options.answer[i].split("|");
					else if(typeof this.options.answer[i] == "number") 	var ans = this.options.answer[i].toString();
					else											var ans = this.options.answer[i];

					// console.log(str, ans);
					if(checkRight.call(this, str, ans)) count++;

					this.element.find(".input").eq(i).addClass("hide");

                    // 부분 정답 체크 할 때 인풋 초기화 하는 옵션 추가
                    // 정답이 보이면서 textarea가 안보이는데  
                    // 스크롤이 초기화 되지 않아 스크롤이 보이는 경우 발생 -- 2020.04.28 ljb
                    if(this.options.resetWhenCheck === true) {
                        this.element.find(".input").eq(i).val("");
                        this.element.find("textarea").each(function(i){
                            var scroll = $(this).data('scroll');
                            if(scroll) scroll.update();
                        });
                    }
				}

				if(count == total) bool = true;

				// 두자릿수 인덱스 부분 정답 처리
				var answerEl = null;
                if(g_idx > 9) {
					answerEl = this.element.find(".answer-part-"+(g_idx));
                } else {
					answerEl = this.element.find(".answer-part-0"+(g_idx));
				}
				answerEl.addClass("show");
				answerEl.find("span").addClass("show");
				answerEl.each(function(i){
					var audioText = $(this).parents(".answer-audio-text.audio-text");
					audioText.removeClass("not-hover");
				});

				// 다른 부분 정답의 해당 답칸만 리셋하기
				var part_idx = g_idx;
				this.answerParts.find("span.ans").each(function(x){
					if($(this).attr("part"))
					{
						var partArr = $(this).attr("part").split(",");
						for(var i = 0; i < partArr.length; i++)
						{
							var part = parseInt(partArr[i]);
							if(part_idx == part)
							{
								$(this).addClass("show");
								break;
							}
						}
					}
				});

				checkAnswerPart.call(this);
				return bool;
			},

			hideAnswerGroup : function(group, g_idx)
			{
				this.multiCheckList = [];
				
				var groupArr = group.split(",");
				var total = groupArr.length;
				
				for(var j = 0; j < groupArr.length; j++)
				{
					var i = parseInt(groupArr[j]);
					this.element.find(".input").eq(i).removeClass("hide");
					// this.element.find(".input").eq(i).val("");
				}

				// 두자릿수 인덱스 부분 정답 처리
				var answerEl = null;
                if(g_idx > 9) {
					answerEl = this.element.find(".answer-part-"+(g_idx));
                } else {
					answerEl = this.element.find(".answer-part-0"+(g_idx));
				}
				answerEl.removeClass("show");
				answerEl.find("span").removeClass("show");
				answerEl.each(function(i){
					var audioText = $(this).parents(".answer-audio-text.audio-text");
					audioText.addClass("not-hover");
				});

				// 다른 부분 정답의 해당 답칸만 리셋하기
				var part_idx = g_idx;
				this.answerParts.find(" span.ans").each(function(x){
					if($(this).attr("part"))
					{
						var partArr = $(this).attr("part").split(",");
						for(var i = 0; i < partArr.length; i++)
						{
							var part = parseInt(partArr[i]);
							if(part_idx == part)
							{
								$(this).removeClass("show");
								break;
							}
						}
					}
				});

				checkAnswerPart.call(this);
				
				// this.element.find(".input").val("");
				this.element.removeClass("active");
				this.element.removeClass("finish");

				this.element.find(".btn-check").removeClass("remove");

				this.element.data("isRight", false);
			},

			checkAnswer : function ()
			{
				this._super();

				var bool = false;
				var count = 0;
				var total = this.options.answer.length;

				this.multiCheckList = [];
				for(var i = 0; i < total; i++)
				{
					var str = this.element.find(".input").eq(i).val();
					if(typeof this.options.answer[i] == "string") 	var ans = this.options.answer[i].split("|");
					else if(typeof this.options.answer[i] == "number") 	var ans = this.options.answer[i].toString();
					else											var ans = this.options.answer[i];
					if(checkRight.call(this, str, ans))
					{
						count++;
						
						if(this.options.answerType == "multiCheck")
						{
							this.multiCheckList.push(str);
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

				this.multiCheckList = [];

				this.answerParts.removeClass("show");
				this.answerParts.find(".ans").removeClass("show");
				this.answerParts.each(function(i){
					var audioText = $(this).parents(".answer-audio-text.audio-text");
					audioText.addClass("not-hover");
				});

				this.element.find(".input").removeClass("hide");
				this.element.removeClass("active");
				this.element.removeClass("finish");

				this.element.data("isRight", false);

				// text area scroll reset;
				this.element.find("textarea").each(function(i){
					var scroll = $(this).data('scroll');
					if(scroll) scroll.update();
				});
			},

			resetAnswer : function()
			{
				this._super();

				this.answerParts.removeClass("show");
				this.answerParts.find(".ans").removeClass("show");
				this.answerParts.each(function(i){
					var audioText = $(this).parents(".answer-audio-text.audio-text");
					audioText.addClass("not-hover");
				});

				this.element.find(".input").removeClass("hide");
				this.element.find(".input").val("");
				this.element.removeClass("active");
				this.element.removeClass("finish");

				this.element.data("isRight", false);

				// text area scroll reset;
				this.element.find("textarea").each(function(i){
					var scroll = $(this).data('scroll');
					if(scroll) scroll.update();
				});

				this.element.find(".btn-check").removeClass("remove");
			},

			dispose : function (){
				this._super();

				this.element.removeClass("start active finish");
				this.dispose();
			}
		});

	})();

	// 기본 옵션
	/**
	 * resetWhenCheck : 부분 정답 시 인풋 초기화 
	 * answerType : "multiCheck" // 2개 이상 input 복수 정답. 서로 바꿔 넣어도 정답으로 처리 :: e3_10_26_03.html
	 * 				부분 정답(quizGroup) 체크에서 multiCheck는 작동 안 함.
	 * valueCheck : "notCheck" // 정답 확인할 때, input/textarea value 사라지지 않도록 처리
	 * maxRows : textarea 줄 수 제한
	 */
	QuizInputText.DEFAULT = {autoStart:true, answer:[], answerType:null, valueCheck:null, answerElement:null, maxRows:null, autoReset:false};
    function Plugin(option, params)
    {
        return this.each(function ()
        {
            var $this = $(this);
            var data = $this.data('ui.quizInputText');
            var options =  $.extend({}, QuizInputText.DEFAULT, typeof option == "object" && option);
            if (!data) $this.data('ui.quizInputText', (data = new QuizInputText($this, options)));
			if (typeof option == 'string') data[option](params);
			$this.data('instance', data);
        });
    }

	$.fn.quizInputText = Plugin;
    $.fn.quizInputText.Constructor = QuizInputText;

})(jQuery);
