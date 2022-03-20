/*
*	QuizDraggable

<div id="quiz-01" class="qui quiz-draggable" data-ui="quiz-draggable" data-option='{"answer":[1]}'>
	<div class="answer-con">
		<div class="answer-item"></div>
	</div>
	<div class="area-con">
		<div class="drag-area"><span class="area"></span></div>
	</div>
	<div class="drag-con">
		<div class="drag-item" x="800" y="100" scale="1">
			<span class="area btn-"></span>
		</div>
	</div>
</div>

*/
(function ($){
	'use strict';

	var QuizDraggable = QuizDraggable || (function ()
	{

		var transformOriginY = 60; 

		function initFn ()
		{
			if(this.options.autoStart) this.start();
		}

		function setDraggable()
		{
			var owner = this;
			this.element.find(".drag-item").each(function (i){
				$(this).find(".area").on('touchstart' + owner.eventId, $.proxy(onTouchStart, owner));
				$(this).find(".area").on('mousedown' + owner.eventId, $.proxy(onTouchStart, owner));
			});

			$(window).on('touchmove' + this.eventId, $.proxy(onTouchMove, this));
			$(window).on('touchend' + this.eventId, $.proxy(onTouchEnd, this));
			$(window).on('mousemove' + this.eventId, $.proxy(onTouchMove, this));
			$(window).on('mouseup' + this.eventId, $.proxy(onTouchEnd, this));

			// ----------------------------------------------- jj 뷰어 스와이프 중복 처리
			this.element.on('pointerup', function(e){ 
				e.stopPropagation(); 
			}); 

			/**
			if(window != window.parent)
			{
				// iframe 상위 window의 move 이벤트 체크
				$(window.parent).off('touchmove' + this.eventId).on('touchmove' + this.eventId, function(){
					if(owner.touchTarget) {
						stopDrag.call(owner);
					}
				});
				$(window.parent).off('mousemove' + this.eventId).on('mousemove' + this.eventId, function(){
					if(owner.touchTarget) {
						stopDrag.call(owner);
					}
				});
			}
			*/

			$(window).on("resize", function(){
				owner.contX = (owner.element.parents(".full-popup").length > 0) ? 0 : $(".content-container").offset().left;
				// owner.contY = (owner.element.parents(".full-popup").length > 0) ? 0 : $(".content-container").offset().top;
				owner.contY = 0;
			});
		}

		function onTouchStart( e )
		{
			if(!this.isDrag) return;

			$("body").on('pointerup', function(e){ 
				e.stopPropagation(); 
			}); 

			var pageX = e.pageX;
			var pageY = e.pageY;

			if(e.originalEvent.changedTouches)
			{
				pageX = e.originalEvent.changedTouches[0].clientX;
				pageY = e.originalEvent.changedTouches[0].clientY;
			}

			this.pageX = pageX;
			this.pageY = pageY;

			var target = $(e.currentTarget).parents(".drag-item");
			if(!target.data("area"))
			{
				if(this.options.clone)
				{
					if(!target.is(".clone")) this.touchTarget = cloneDrag.call(this, target);
				}
				else
				{
					this.touchTarget = target;
				}

				var scale = (this.touchTarget.attr("drag-scale")) ? parseFloat(this.touchTarget.attr("drag-scale")) : 1;
				TweenLite.set(this.touchTarget, {scale:1});
				
				this.touchTarget.addClass("drag");
				if(this.options.lockCenter)
				{
					this.startX = parseInt(- (this.contX / viewport.scale) - this.touchTarget.width()/2);
					this.startY = parseInt(- (this.contY / viewport.scale) - this.touchTarget.height()/2);
				}
				else
				{
					this.startX = parseInt(- (this.contX / viewport.scale)) - (this.pageX - this.touchTarget.offset().left) / viewport.scale;
					this.startY = parseInt(- (this.contY / viewport.scale)) - (this.pageY - this.touchTarget.offset().top) / viewport.scale;
				}

				if(this.scroll != null)
				{
					this.startX -= this.scrollX;
					this.startY -= this.scrollY;
					this.startY += this.scroll.data("scrollbar").scroll().position.y;
				}

				this.touchTarget.css({"z-index":999});
				this.element.trigger("dragStart", [this.touchTarget.index()]);

				var moveX = pageX / viewport.scale;
				var moveY = (pageY - transformOriginY) / viewport.scale + transformOriginY; /* content-container 확대 기준 transform-origin y좌료 예외 처리 */
				moveX = parseInt(moveX);
				moveY = parseInt(moveY);

				TweenLite.set(this.touchTarget, {x:moveX+this.startX, y:moveY+this.startY, scale:scale});
			}
			else
			{
				// resetArea.call(this, target.data("area"));
				resetItem.call(this, target);
			}


			CallToMain({type:"START_DRAGGABLE"});
			
			e.preventDefault();
			e.stopPropagation();
		}

		function onTouchMove( e )
		{
			if(this.touchTarget)
			{
				var pageX = e.pageX;
				var pageY = e.pageY;
	
				if(e.originalEvent.changedTouches)
				{
					pageX = e.originalEvent.changedTouches[0].clientX;
					pageY = e.originalEvent.changedTouches[0].clientY;
				}

				this.pageX = pageX;
				this.pageY = pageY;

				var moveX = pageX / viewport.scale;
				var moveY = (pageY - transformOriginY) / viewport.scale + transformOriginY; /* content-container 확대 기준 transform-origin y좌료 예외 처리 */
				moveX = parseInt(moveX);
				moveY = parseInt(moveY);

				var scale = (this.touchTarget.attr("drag-scale")) ? parseFloat(this.touchTarget.attr("drag-scale")) : 1;
				TweenLite.set(this.touchTarget, {x:moveX+this.startX, y:moveY+this.startY, scale:scale});
			}

			e.preventDefault();
			e.stopPropagation();
		}

		function onTouchEnd( e )
		{
			var owner = this;

			$("body").off('pointerup');

			var pageX = e.pageX;
			var pageY = e.pageY;

			if(e.originalEvent.changedTouches)
			{
				pageX = e.originalEvent.changedTouches[0].clientX;
				pageY = e.originalEvent.changedTouches[0].clientY;
			}

			var hitTarget = null;
			var target = null;
			
			// ===================> 모바일에서 thouchend 이벤트 target 객체는 thouchstart 이벤트의 target 객체를 가져오기 때문에 document.elementFromPoint로 객체를 찾아 사용.
			if(e.originalEvent.changedTouches)
			{
				target = document.elementFromPoint(pageX, pageY);
			}
			else
			{
				target = e.target;
			}
			
			if($(target).hasClass("area"))
			{
				var area = $(target);
				hitTarget = area.parents(".drag-area");
				if(hitTarget.length == 0) hitTarget = null;
				if(hitTarget != null)
				{
					var hitElement = hitTarget.parents(".quiz-draggable");
					if(hitElement.attr("id") != this.element.attr("id")) hitTarget = null;
				}
			}

			if(this.touchTarget)
			{
				if(this.options.onlyDrag == true)
				{
					if(hitTarget && hitTarget.data("drag") == null)
					{
						TweenLite.to(this.touchTarget, this.resetTime, {x:this.touchTarget.data("x"), y:this.touchTarget.data("y"), scale:this.touchTarget.data("scale"), ease:Cubic.easeOut});
					}
					this.startX = this.startY = 0;
					this.touchTarget.removeClass("drag");
					this.touchTarget.css({"z-index":""});
					this.element.trigger("onlyDrag", [this.touchTarget.index()]);

					this.touchTarget = null;
					
					CallToMain({type:"END_DRAGGABLE"});
					return;
				}

				if(hitTarget && hitTarget.data("drag") == null)
				{
					// 정답? 오답?
					var checkRight = check.call(this, this.touchTarget, hitTarget);
					console.log("정답?오답?", checkRight);

					if(this.options.hitEvent == true)
					{
						this.startX = this.startY = 0;
						this.touchTarget.removeClass("drag");
						this.touchTarget.css({"z-index":""});
						this.element.trigger("hitEvent", [this.touchTarget.index(), hitTarget.index(), this.touchTarget.data("idx")]);

						this.touchTarget = null;
						
						CallToMain({type:"END_DRAGGABLE"});
						return;
					}

					// 붙나? 안붙나?
					var checkStick = true;

					// 정답체크 안하고 붙이는 옵션
					if(this.options.notLiveCheck != true)
					{
						if(checkRight) 	checkStick = true;
						else 			checkStick = false;
					}

					if(checkStick)
					{
						this.touchTarget.data("area", hitTarget);
						hitTarget.data("drag", this.touchTarget);
						var moveX = (hitTarget.offset().left - this.contX) / viewport.scale;
						var moveY = (hitTarget.offset().top - this.contY - transformOriginY) / viewport.scale + transformOriginY; /* content-container 확대 기준 transform-origin y좌료 예외 처리 */
						moveX = parseInt(moveX);
						moveY = parseInt(moveY);

						var scale = (this.touchTarget.attr("drag-scale")) ? parseFloat(this.touchTarget.attr("drag-scale")) : 1;
						TweenLite.set(this.touchTarget, {x:moveX, y:moveY, scale:scale});

						this.touchTarget.addClass("active");
						hitTarget.addClass("active");
						this.element.find(".answer-item").eq(hitTarget.index()).addClass("active");

						// 퀴즈 메인에서 정답 버튼 다시하기로 바꾸기
						var isClear = this.checkAnswer(true);
						console.log("isClear: ", isClear);
						if(isClear) 
						{
							var answerPartIdx = this.element.data("answer-part-idx");
							if(answerPartIdx != null || answerPartIdx != undefined)
							{
								var btn = this.quizMain.find(".btn-answer-part[data-idx='"+answerPartIdx+"']");
								btn.addClass("active");
							}
							var quizMainIns = this.element.parents("*[data-ui='quizMain']").data("instance");
							if(quizMainIns) quizMainIns.btnCheck(true);
						}
					}
					else
					{
						if(this.options.clone)
						{
							this.touchTarget.remove();
						}
						else
						{
							TweenLite.to(this.touchTarget, this.resetTime, {x:this.touchTarget.data("x"), y:this.touchTarget.data("y"), scale:this.touchTarget.data("scale"), ease:Cubic.easeOut});
						}
					}

					if(this.options.answerType == "item_length")
					{
						hitTarget.data("drag", null);
					}
					if(this.options.answerType == "item_answer")
					{
						hitTarget.data("drag", null);
					}

					// 정/오답 액션
					if(this.options.notLiveCheck != true)
					{
						if(checkRight)
						{
							// 정답 액션
							this.element.trigger("quizAnswer", [hitTarget.index(), this.touchTarget.index()]);
							GlobalAudio.play("button")
							// GlobalAudio.play(this.options.answerAudio);
						}
						else
						{
							// 오답 액션
							this.element.trigger("quizWrong");
							GlobalAudio.play(this.options.failedAudio);
						}
					}
					else
					{
						this.element.trigger("dragLiveCheck", [hitTarget.index(), this.touchTarget.index()]);
					}
				}
				else
				{
					if(this.options.clone)
					{
						this.touchTarget.remove();
					}
					else
					{
						TweenLite.to(this.touchTarget, this.resetTime, {x:this.touchTarget.data("x"), y:this.touchTarget.data("y"), scale:this.touchTarget.data("scale"), ease:Cubic.easeOut});
					}
					this.element.trigger("dragEnd", [this.touchTarget.index()]);
				}

				this.startX = this.startY = 0;
				this.touchTarget.removeClass("drag");
				this.touchTarget.css({"z-index":""});
				this.touchTarget = null;
				
				CallToMain({type:"END_DRAGGABLE"});

				e.preventDefault();
				e.stopPropagation();
			}
		}

		function cloneDrag( target )
		{
			var newTarget = target.clone();
			newTarget.addClass("clone");
			newTarget.removeClass("clone-origin");
			newTarget.data("idx", target.data("idx"));
			newTarget.on(this.touchstart, $.proxy(this.touchStart, this));
			target.parent().append(newTarget);
			return newTarget;
		}

		function check(target, area)
		{
			// 정답 체크 유형 01 추가 :: item_length >> 드래그 아이템을 몇개의 area에 나눠 담는 유형
			if(this.options.answerType == "item_length")
			{
				var max = this.options.answer[area.index()];
				var len = area.data("item_length") || 0;
				console.log(len, max);

				if(len < max)
				{
					area.data("item_length", len+1);
					this.element.find(".answer-item").eq(area.index()).find(".item").eq(len).addClass("active");
					return true;
				} 
				return false;
			}

			// 정답 체크 유형 02 추가 :: item_answer >> 드래그 아이템을 정답에 맞는 area에 나눠 담는 유형
			if(this.options.answerType == "item_answer")
			{
				this.element.find(".answer-item").eq(area.index()).find('.item[item-idx="'+target.data("idx")+'"]').addClass("active");
			}

			// 정답 체크 일반 유형
			if(typeof this.options.answer[area.index()] === "number")
			{
				if(target.data("idx") == this.options.answer[area.index()])
				{
					return true;
				}
			}
			else
			{
				if($.inArray(target.data("idx"), this.options.answer[area.index()])>-1)
				{
					return true;
				}
			}
			return false;
		}

		function resetItem(target) {
			var area = target.data("area");
			area.data("drag", null);
			area.removeClass("active");

			target.data("area", null);
			target.removeClass("active");
			TweenLite.to(target, this.resetTime, {x:target.data("x"), y:target.data("y"), scale:target.data("scale"), ease:Cubic.easeOut});
		}

		function stopDrag()
		{
			if(this.touchTarget == null) return;

			if(this.options.clone)
			{
				this.touchTarget.remove();
			}
			else
			{
				TweenLite.to(this.touchTarget, this.resetTime, {x:this.touchTarget.data("x"), y:this.touchTarget.data("y"), scale:this.touchTarget.data("scale"), ease:Cubic.easeOut});
			}

			this.startX = this.startY = 0;
			this.touchTarget.removeClass("drag");
			this.touchTarget.css({"z-index":""});
			this.touchTarget = null;
		}
		
		return IQuiz.extend({

			init : function (element, options)
			{
				this._super(element, options);

				this.quizMain = this.element.parents("*[data-ui='quizMain']");
				
				this.touchTarget = null;
				this.contX = (this.element.parents(".full-popup").length > 0) ? 0 : $(".content-container").offset().left;
				// this.contY = (this.element.parents(".full-popup").length > 0) ? 0 : $(".content-container").offset().top;
				// this.contX = 0;
				this.contY = 0;

				this.scroll = (this.element.parents(".scroll-box").length > 0) ? this.element.parents(".scroll-box") : null;
				this.scrollX = (this.scroll) ? this.scroll.position().left : 0;
				this.scrollY = (this.scroll) ? this.scroll.position().top : 0;
				
				this.startX = 0;
				this.startY = 0;
				this.pageX;
				this.pageY;
				this.isDrag = true;
				this.resetTime = this.options.resetTime;

				this.element.find(".drag-item").data("area", null).removeClass("active");
				this.element.find(".drag-area").data("drag", null).removeClass("active");

				if(this.options.notLiveCheck)
				{
					this.element.addClass("not-live-check");
				}

				initFn.call(this);
			},

			start : function ()
			{
				this._super();
				
				var owner = this;
				this.element.find(".drag-item").each(function ( i )
				{
					if(owner.options.clone)
					{
						$(this).addClass("clone-origin");
					}

					var x = parseInt($(this).attr("x"));
					var y = parseInt($(this).attr("y"));
					if(isNaN(x))
					{
						x = $(this).position().left / viewport.scale;
						y = $(this).position().top / viewport.scale;

						$(this).attr("x", x);
						$(this).attr("y", y);
					}
					var scale = parseFloat($(this).attr("scale")) || 1;
					TweenLite.set($(this), {x:x, y:y, scale:scale, force3D:false});
					$(this).data("x", x).data("y", y).css({top:0, left:0});
					$(this).data("scale", scale);
					$(this).data("idx", i);
				});

				this.element.find(".drag-item").each(function ( i ) {
					$(this).data("idx", i);
				});
				this.element.addClass("ready");

				setDraggable.call(this);
			},

			showAnswer : function() 
			{
				this._super();	
				
				var total = this.options.answer.length;

				for(var i = 0; i < total; i++)
				{
					var ans = this.options.answer[i];
					var area = this.element.find(".drag-area").eq(i);
					var item = this.element.find(".drag-item").eq(ans);
					
					if(!item.hasClass("active"))
					{
						item.data("area", area);
						area.data("drag", item);

						var moveX = (area.offset().left - this.contX) / viewport.scale;
						var moveY = (area.offset().top - this.contY - transformOriginY) / viewport.scale + transformOriginY; /* content-container 확대 기준 transform-origin y좌표 예외 처리 */
						moveX = parseInt(moveX);
						moveY = parseInt(moveY);

						var scale = (item.attr("drag-scale")) ? parseFloat(item.attr("drag-scale")) : 1;
						if(!item.hasClass("clone-origin")) TweenLite.set(item, {x:moveX, y:moveY, scale:scale});
	
						item.addClass("active");
						area.addClass("active");
					}
				}
				this.element.find(".drag-item").addClass("active");
				this.element.find(".answer-item").addClass("active");
				this.element.find(".answer-item > .item").addClass("active");

				this.element.addClass("active");
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
					var item = this.element.find(".drag-item").eq(i);
					if(item.hasClass("active")) count ++;

                    this.element.find(".drag-area").eq(i).addClass("ans");
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
                    var item = this.element.find(".drag-item").eq(i);
                    var x = item.data("x");
                    var y = item.data("y");
                    var scale = item.data("scale");
                    TweenLite.set(item, {x:x, y:y, scale:scale});
					item.removeClass("active");
					item.data("area", null);

                    // this.element.find(".drag-item").eq(i).removeClass("active");
                    this.element.find(".drag-area").eq(i).removeClass("ans active");
                }

                this.element.removeClass("active");
                this.element.removeClass("finish");

                this.element.data("isRight", false);
            },

			checkAnswer : function (checkOnly)
			{
				var bool = false;
				var count = 0;
				var total = this.options.answer.length;

				count = this.element.find(".drag-area.active").length;

				// 정답 체크 유형 01 추가 :: item_length >> 드래그 아이템을 몇개의 area에 나눠 담는 유형
				if(this.options.answerType == "item_length")
				{
					count = this.element.find(".drag-item.active").length;
					total = 0;
					for(var i = 0; i < this.options.answer.length; i++)
					{
						total += this.options.answer[i];
					}
				}

				// 정답 체크 유형 02 추가 :: item_answer >> 드래그 아이템을 정답에 맞는 area에 나눠 담는 유형
				if(this.options.answerType == "item_answer")
				{
					count = this.element.find(".drag-item.active").length;
					total = 0;
					for(var i = 0; i < this.options.answer.length; i++)
					{
						total += this.options.answer[i].length;
					}
				}

				/**
				 * 아래 스크립트를 사용할 경우 clone 유형에서 정답 체크 수 확인 시 오류 남.
				 * notLiveCheck 옵션을 사용하게 될 경우 기능 추가 개발할 것.
				 */
				/*
				for(var i = 0; i < total; i++)
				{
					var item = this.element.find(".drag-item").eq(i);

					// 정답이 붙었나 체크
					if(this.options.notLiveCheck)
					{
						var area = item.data("area");
						var checkRight = false;
						if(area != null)
						{
							checkRight = check.call(this, item, area);
						}
						if(checkRight)	count ++;
					}
					else
					{
						if(item.hasClass("active")) count ++;
					}
					this.element.find(".drag-area").eq(i).addClass("ans");
				}
				*/

				console.log("count:", count, "total:", total);
				if(count == total) 
				{
					bool = true;
					this.element.data("isRight", true);
				}
				else
				{
					this.element.data("isRight", false);
				}

				if(checkOnly) 
				{
					if(count == total) 
					{
						this.element.addClass("finish");		
						this.showAnswer();
					}
					return bool;
				}

                this.element.addClass("finish");
                this.showAnswer();
				console.log("?? :: ", bool);
				return bool;
			},

			hideAnswer : function()
			{
				this._super();

				this.element.removeClass("active");
				this.element.removeClass("finish");

				this.element.data("isRight", false);

				this.element.find(".drag-item").each(function (i){
					var x = $(this).data("x");
					var y = $(this).data("y");
					var scale = $(this).data("scale");
					TweenLite.set($(this), {x:x, y:y, scale:scale});
					$(this).removeClass("active");
					$(this).data("area", null);
				});
				this.element.find(".drag-area").data("item_length", 0);
				this.element.find(".drag-area").data("drag", null).removeClass("ans active");
				this.element.find(".answer-item").removeClass("active");
				this.element.find(".answer-item").find("> .item").removeClass("active");
				
			},

			resetAnswer : function()
			{
				this._super();

				this.element.removeClass("active");
				this.element.removeClass("finish");

				this.element.data("isRight", false);

				this.element.find(".drag-item.clone").remove();

				this.element.find(".drag-item").each(function (i){
					var x = $(this).data("x");
					var y = $(this).data("y");
					var scale = $(this).data("scale");
					TweenLite.set($(this), {x:x, y:y, scale:scale});
					$(this).removeClass("active");
					$(this).data("area", null);
				});
				this.element.find(".drag-area").data("item_length", 0);
				this.element.find(".drag-area").data("drag", null).removeClass("ans active");
				this.element.find(".answer-item").removeClass("active");
				this.element.find(".answer-item").find("> .item").removeClass("active");
			},

			dispose : function ()
			{
				this.element.find(".drag-item .area").off("touchstart mousedown");
				$(window).off('touchmove' + this.eventId);
				$(window).off('touchend' + this.eventId);
				$(window).off('mousemove' + this.eventId);
				$(window).off('mouseup' + this.eventId);
				this.element.off('pointerup'); 
				$("body").off('pointerup');
				
				// if(window != window.parent)	
				// {
				// 	$(window.parent).off('touchmove' + this.eventId)
				// 	$(window.parent).off('mousemove' + this.eventId)
				// }
			},

			restart : function () 
			{
				this.dispose();
				this.init(this.element, this.options);
				this.start();
			}
		});

	})();

	// 메인 기본 옵션
	/**
	 * onlyDrag : 드래그만 시키기 위한 요소.
	 * hitEvent : true면 area에 hit 되었을 때, 정오체크 안하고 hitEvent 이벤트만 trigger함(정오체크 등 이후 액션은 htiEvent에서 처리).
	 * notLiveCheck : true 면 드롭했을때 정답 체크 안하고 무조건 붙음.
	 * 복수 정답은 배열 안에 배열로 넣기 "answer":[2,0,[1,3],[1,3]]
	 * answerType : 드래그 퀴즈 유형 추가
	 * 		1) "item_length" : drag-area에 각각 몇개씩 나눠 담아야 하는 문제 (옵션 샘플 : "answer":[3,3,3]) / 샘플 : mm_31_3_02_03_01
	 * 		2) "item_answer" : drag-area에 정답만 나눠 담는 문제 (옵션 샘플 : "answer":[[0,1,6],[0,1,6],[0,1,6],[4,7],[4,7],[2,3,5],[2,3,5],[2,3,5]]) / 샘플 : mm_41_2_04_03_02
	 * 
	 */
	QuizDraggable.DEFAULT = {autoStart:true, lockCenter:true, resetTime:0.2,  answer : [], clone:false, failedAudio:"quiz_x", answerAudio:"quiz_o", notLiveCheck:false, hitEvent:false, onlyDrag:false};

    function Plugin(option, params)
    {
        return this.each(function ()
        {
            var $this = $(this);
            var data = $this.data('ui.quizDraggable');
            var options =  $.extend({}, QuizDraggable.DEFAULT, typeof option == "object" && option);
            if (!data) $this.data('ui.quizDraggable', (data = new QuizDraggable($this, options)));
			if (typeof option == 'string') data[option](params);
			$this.data('instance', data);
        });
    }

    $.fn.quizDraggable = Plugin;
    $.fn.quizDraggable.Constructor = QuizDraggable;

})(jQuery);

