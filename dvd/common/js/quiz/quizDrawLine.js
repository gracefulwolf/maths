/*
*	QuizDrawLine
*	스크롤(scroll-box) 안에 퀴즈가 있을때, svg height값이 100%이기 때문에 퀴즈(quiz-draw-line)에 height값을 잡아 줘야함.
* 	data-line-group 속성 추가 :: 시자 점, 끝 점의 data-line-group 값이 같지 않으면 연결하지 않음.
*/
(function ($){
	'use strict';

	var QuizDrawLine = QuizDrawLine || (function ()
	{
		function initFn ()
		{
			var owner = this;

			if(this.options.autoStart) this.start();
		}

		function setAnswerPath()
		{
			var owner = this;

			var total = this.options.answer.length;
			for(var i = 0; i < total; i++)
			{
				var ans = this.options.answer[i];
				var startTarget = this.element.find(".start").eq(i);
				var endTarget = this.element.find(".end").eq(ans);
				var path = createPath();
				if(ans > -1 && ans != null)
				{
					var sx = (startTarget.offset().left - owner.answerPaper.offset().left)
					var sy = (startTarget.offset().top - owner.answerPaper.offset().top)
					var ex = (endTarget.offset().left - owner.answerPaper.offset().left)
					var ey = (endTarget.offset().top - owner.answerPaper.offset().top)

					sx = sx / viewport.scale + (startTarget.width()/2);
					sy = sy / viewport.scale + (startTarget.height()/2);
					ex = ex / viewport.scale + (endTarget.width()/2);
					ey = ey / viewport.scale + (endTarget.width()/2);

					path.attr("d", "M "+sx+" "+sy+" L "+ex+" "+ey).attr("stroke", this.options.answerColor);
				}
				this.answerPathList.push(path);
			}

			function createPath()
			{
				var path = $(document.createElementNS('http://www.w3.org/2000/svg', 'path'));
				path.attr("stroke", owner.options.strokColor).attr("stroke-width", owner.options.strokWidth);
				owner.answerPaper.append(path);
				owner.paths.push(path);
				return path;
			}

		}
		function setDrawLine()
		{
			var owner = this;
			this.element.find(".start").each(function ( i ) {
				$(this).data("end", -1);
			});
			this.element.find(".end").each(function ( i ) {
				$(this).data("start", -1);
			});

			this.element.find(".start").on('touchstart' + this.eventId, $.proxy(onTouchStart, this));
			this.element.find(".end").on('touchstart' + this.eventId, $.proxy(onTouchStart, this));
			this.element.find(".start").on('mousedown' + this.eventId, $.proxy(onTouchStart, this));
			this.element.find(".end").on('mousedown' + this.eventId, $.proxy(onTouchStart, this));

			$(window).on('touchmove' + this.eventId, $.proxy(onTouchMove, this));
			$(window).on('touchend'  + this.eventId, $.proxy(onTouchEnd, this));
			$(window).on('mousemove' + this.eventId, $.proxy(onTouchMove, this));
			$(window).on('mouseup'  + this.eventId, $.proxy(onTouchEnd, this));
			// ----------------------------------------------- jj 뷰어 스와이프 중복 처리
			this.element.on('pointerup', function(e){ 
				e.stopPropagation(); 
			}); 
		}

		function onTouchStart( e )
		{
			this.pageX = e.pageX;
			this.pageY = e.pageY;
			if(e.originalEvent.changedTouches)
			{
				this.pageX = e.originalEvent.changedTouches[0].clientX;
				this.pageY = e.originalEvent.changedTouches[0].clientY;
			}

			if(!this.isDrag) return false;

			this.touchTarget = $(e.currentTarget);
			this.targetPath = createPath.call(this);
			// this.touchTarget.data("path").push(this.targetPath);
			this.startX = (this.touchTarget.offset().left - this.paper.offset().left);
			this.startY = (this.touchTarget.offset().top - this.paper.offset().top);

			this.startX = this.startX / viewport.scale + (this.touchTarget.width()/2);
			this.startY = this.startY / viewport.scale + (this.touchTarget.height()/2);

			this.targetPath.attr("d", "M "+this.startX+" "+this.startY+" L "+this.startX+" "+this.startY);

			e.preventDefault();
			e.stopPropagation();
		}

		function onTouchMove( e )
		{
			var owner = this;

			if(this.targetPath)
			{
				this.pageX = e.pageX;
				this.pageY = e.pageY;
				if(e.originalEvent.changedTouches)
				{
					this.pageX = e.originalEvent.changedTouches[0].clientX;
					this.pageY = e.originalEvent.changedTouches[0].clientY;
				}

				var moveX = this.pageX - this.paper.offset().left;
				var moveY = this.pageY - this.paper.offset().top;

				moveX = moveX / viewport.scale;
				moveY = moveY / viewport.scale;

				this.targetPath.attr("d", "M "+this.startX+" "+this.startY+" L "+moveX+" "+moveY);
			}

			e.preventDefault();
			e.stopPropagation();
		}

		function onTouchEnd( e )
		{
			if(this.touchTarget)
			{
				var owner = this;
				var drawTarget = null;
				var startTarget = null;
				var endTarget = null;
				var selector = ".end";
				if(this.touchTarget.is(".end")) selector = ".start";

				this.element.find(selector).each(function ( i )
				{
					if($(this).hitTestPointNew( {"x":owner.pageX, "y":owner.pageY} ))
					{
						drawTarget = $(this);
					}
				});

				if(drawTarget)
				{
					if(this.touchTarget.is(".end"))
					{
						startTarget = drawTarget;
						endTarget = this.touchTarget;
					}
					else
					{
						startTarget = this.touchTarget;
						endTarget = drawTarget;
					}

					// line-group이 맞지 않으면 연결하지 않음
					if(startTarget.data("line-group") != endTarget.data("line-group"))
					{
						removePath.call(this, this.targetPath);
						return;
					}

					var val = endTarget.index();
					var ans = this.options.answer[startTarget.index()];
					val = (isNaN(val)) ? -1 : val;
					var isRight = checkRight.call(this, val, ans);

					// 퀴즈 옵션 rightanswer :: 정답만 연결하고 아니면 오답 처리
					if(this.options.rightanswer)
					{
						// removePath.call(this, this.targetPath);

						console.log("------------ 퀴즈 옵션 :: rightanswer");
						// console.log(val, ans);
						if(isRight)	
						{
							console.log("정답");
							this.element.find(".rightanswer").eq(startTarget.index()).addClass("show");
							GlobalAudio.play("quiz_o");
						}
						else
						{
							console.log("오답");
							GlobalAudio.play("quiz_x");
						}

						console.log(startTarget.data("end"));
						if(startTarget.data("end") > -1)
						{
							console.log("이미 정답 처리 됐음");
							removePath.call(this, this.targetPath);
							return;
						}
					}

					// 퀴즈 옵션 unviewline :: 정답 연결된 라인 숨기기
					if(this.options.unviewline)
					{
						if(isRight)
						{
							startTarget.data("end", endTarget.index());
						}
						else
						{
							startTarget.data("end", -1);
						}
						removePath.call(this, this.targetPath);

						this.touchTarget = null;
						this.targetPath = null;
						this.isDrag = true;
						return;
					}

					// 일반적인 퀴즈 정답 체크
					this.startX = (startTarget.offset().left - owner.paper.offset().left)
					this.startY = (startTarget.offset().top - owner.paper.offset().top)
					var moveX = (endTarget.offset().left - owner.paper.offset().left)
					var moveY = (endTarget.offset().top - owner.paper.offset().top)

					this.startX = this.startX / viewport.scale + (startTarget.width()/2);
					this.startY = this.startY / viewport.scale + (startTarget.height()/2);
					moveX = moveX / viewport.scale + (endTarget.width()/2);
					moveY = moveY / viewport.scale + (endTarget.height()/2);

					this.targetPath.attr("d", "M "+this.startX+" "+this.startY+" L "+moveX+" "+moveY).attr("stroke", this.options.strokColor);

					// start 라인에 중복 연결 체크
					if(startTarget.data("path"))
					{
						removePath.call(this, startTarget.data("path"));
						if(startTarget.data("end") > -1)
						{
							this.element.find(".end").eq(startTarget.data("end")).data("start", -1);
						}
						startTarget.data("end", -1);
					}

					// multiline 옵션 체크하여 end 라인에 중복 연결 체크
					if(!this.options.multiline)
					{
						// end 라인에 중복 연결 체크
						if(endTarget.data("start") > -1 && endTarget.data("start") != startTarget.index())
						{
							if(endTarget.data("start") > -1)
							{
								var startOld = this.element.find(".start").eq(endTarget.data("start"));
								if(startOld.data("path"))
								{
									removePath.call(this, startOld.data("path"));
								}
								startOld.data("end", -1);
								endTarget.data("start", -1);
							}
						}
					}
					
					startTarget.data("path", this.targetPath);
					startTarget.data("end", endTarget.index());

					endTarget.data("start", startTarget.index());

					this.touchTarget = null;
					this.targetPath = null;
	
					// drawTarget = null;
					// this.isDrag = true;
				}
				else
				{
					removePath.call(this, this.targetPath);
				}

				e.preventDefault();
				e.stopPropagation();
			}			
		}

		function createPath()
		{
			var owner = this;
			var path = $(document.createElementNS('http://www.w3.org/2000/svg', 'path'));
			path.attr("stroke", owner.options.strokColor).attr("stroke-width", owner.options.strokWidth);
			owner.paper.append(path);
			owner.paths.push(path);
			return path;
		}

		function removePath( path )
		{
			var ar = new Array();
			for(var i=0; i<this.paths.length;i++)
			{
				if(path == this.paths[i])
				{
					path.remove();
				}
				else
				{
					ar.push(this.paths[i]);
				}
			}
			this.paths = ar;
		}

		function hidePath( path )
		{
			if(path) path.addClass("hide");
		}

		function showPath( path )
		{
			if(path) path.removeClass("hide");
		}

		function checkRight(val, ans) 
		{
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

		function resetLine()
		{
			var total = this.element.find(".start").length;
			for(var i = 0; i < total; i++)
			{
				if(this.element.find(".start").eq(i).data("path"))
				{
					if(this.element.hasClass("active"))	
					{
						hidePath.call(this, this.element.find(".start").eq(i).data("path"));
					}
					else
					{
						showPath.call(this, this.element.find(".start").eq(i).data("path"));
					}
				}
			}

		}

		function clearLine()
		{
			// this.paper.removeClass("hide");
			var total = this.element.find(".start").length;
			for(var i = 0; i < total; i++)
			{
				if(this.element.find(".start").eq(i).data("path"))
				{
					removePath.call(this, this.element.find(".start").eq(i).data("path"));
					this.element.find(".start").eq(i).data("end", -1);
					this.element.find(".end").eq(i).data("start", -1);
				}
			}
		}

		return IQuiz.extend({
			init : function (element, options)
			{
				this._super(element, options);

				this.answerList = [];
				if(this.options.answer) this.answerList = this.options.answer;

				this.paths = new Array();
				this.touchTarget = null;
				this.targetPath = null;
				this.answerPathList = [];
				this.startX = 0;
				this.startY = 0;
				this.pageX;
				this.pageY;
				this.paper;
				this.isDrag = true;

				initFn.call(this);
			},

			start : function ()
			{
				this._super();

				this.answerPaper = $('<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;width:100%;height:100%"></svg>');
				this.element.prepend( this.answerPaper );
				this.answerPaper.addClass("ans")
				this.paper = $('<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;width:100%;height:100%"></svg>');
				this.element.prepend( this.paper );
				setDrawLine.call(this);
				setAnswerPath.call(this);

				if(this.options.unviewline)
				{
					this.answerPaper.addClass("hide");
				}

				if(this.options.rightanswer)
				{
					this.element.prepend( this.element.find("svg.rightanswer-view") );
				}
			},

			showAnswer : function() 
			{
				this._super();	
				
				this.element.addClass("active");
				resetLine.call(this);

				this.answerPaper.find("path").addClass("active");

				this.element.find(".rightanswer").addClass("show");
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
					var ans = this.options.answer[i];
					var val = this.element.find(".start").eq(i).data("end");
					val = (isNaN(val)) ? -1 : val;

					// console.log(val, ans);
					if(ans == -1)
					{
						count ++;
					}
					else
					{
						if(ans == null) 
						{
							if(checkRight.call(this, val, -1)) count++;
						}
						else
						{
							if(checkRight.call(this, val, ans)) count++;
						}
					}
					
					// if(ans != -1)	removePath.call(this, this.element.find(".start").eq(i).data("path"));
					if(ans != -1)	hidePath.call(this, this.element.find(".start").eq(i).data("path"));
					this.answerPaper.find("path").eq(i).addClass("active");
					this.element.find(".rightanswer").eq(i).addClass("show");
				}

				if(count == total) bool = true;

				// checkAnswerPart.call(this);
				return bool;
			},

			hideAnswerGroup : function(group, g_idx)
			{
				var groupArr = group.split(",");
				var total = groupArr.length;
				
				for(var j = 0; j < groupArr.length; j++)
				{
					var i = parseInt(groupArr[j]);
					this.answerPaper.find("path").eq(i).removeClass("active");
					// removePath.call(this, this.element.find(".start").eq(i).data("path"));
					// this.element.find(".start").eq(i).data("path", null);
					// this.element.find(".start").eq(i).data("end", -1);
					showPath.call(this, this.element.find(".start").eq(i).data("path"));

					this.element.find(".rightanswer").eq(i).removeClass("show");
				}

				this.element.data("isRight", false);
			},

			checkAnswer : function ()
			{
				var bool = false;
				var count = 0;
				var total = this.options.answer.length;

				for(var i = 0; i < total; i++)
				{
					var ans = this.options.answer[i];
					var val = this.element.find(".start").eq(i).data("end");
					val = (isNaN(val)) ? -1 : val;
					if(ans == null) 
					{
						if(checkRight.call(this, val, -1)) count++;
					}
					else
					{
						if(checkRight.call(this, val, ans)) count++;
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
				resetLine.call(this);
				
				this.answerPaper.find("path").removeClass("active");
				this.element.removeClass("finish");

				this.element.data("isRight", false);

				this.element.find(".start").data("end", -1);
				this.element.find(".end").data("start", -1);
				this.element.find(".rightanswer").removeClass("show");
			},

			resetAnswer : function()
			{
				this._super();

				clearLine.call(this);
				this.element.removeClass("active");
				this.answerPaper.find("path").removeClass("active");
				this.element.removeClass("finish");

				this.element.data("isRight", false);

				this.element.find(".start").data("end", -1);
				this.element.find(".end").data("start", -1);
				this.element.find(".rightanswer").removeClass("show");
			},

			dispose : function ()
			{
				this.element.removeClass("start active finish");
			}
		});

	})();

	// 기본 옵션
	/**
	 * answer[n] 정답이 -1 이면 무조건 정답으로 처리하고, 부분 정답 체크할 때 선 남겨둠.
	 * answer[n] 정답이 null 이면 연결되지 않았을때만 정답으로 처리하고, 부분 정답 체크할 때 선 지움.
	 * @param {boolean} rightanswer :: 정답만 연결됨.
	 * @param {boolean} unviewline :: 기본 라인 안 보이게 함.
	 * @param {boolean} multiline :: end line에 여러 라인이 연결되도록. 익힘책 ms_32_3_01_07_01 
	 */
	QuizDrawLine.DEFAULT = {autoStart:true, answer : [], strokColor:"#0000ff", answerColor:"#F9512A", strokWidth:4, rightanswer:false, unviewline:false, multiline:false};

    function Plugin(option, params)
    {
        return this.each(function ()
        {
            var $this = $(this);
            var data = $this.data('ui.quizDrawLine');
            var options =  $.extend({}, QuizDrawLine.DEFAULT, typeof option == "object" && option);
            if (!data) $this.data('ui.quizDrawLine', (data = new QuizDrawLine($this, options)));
			if (typeof option == 'string') data[option](params);
			$this.data('instance', data);
        });
    }

	$.fn.quizDrawLine = Plugin;
    $.fn.quizDrawLine.Constructor = QuizDrawLine;

})(jQuery);