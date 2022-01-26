
// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 0, ci: 4, si: 6, ti: 3 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
var NAV_TAB_INDEX = 4;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");

	/* 미션 > 선택활동 퀴즈 개별 개발 */
	$(window).on("load", function(){
		setQuiz();
	});

	$(".popup-mission.type-quiz").on("POPUP_OPEN", function(){
		console.log("open");
	});

	$(".popup-mission.type-quiz").on("POPUP_CLOSE", function(){
		console.log("close");
		setQuiz();
	});
	
	var ansRandom = 0;
	var quizNow = 0;
	var quizTextList = [
		"1억은 99999999보다 | 큰 수입니다.",
		"1억은 99999990보다 | 큰 수입니다.",
		"1억은 99999900보다 | 큰 수입니다.",
		"1억은 99999000보다 | 큰 수입니다.",
		"1억은 1의 | 배인 수입니다.",
		"1억은 10의 | 배인 수입니다.",
		"1억은 100의 | 배인 수입니다.",
		"1억은 1000의 | 배인 수입니다.",
		"1억은 10000이 | 배인 수입니다."
	];
	var answerTextList = [
		"1",
		"10",
		"100",
		"1000",
		"1억",
		"1천만",
		"1백만",
		"1십만",
		"1만"
	];

	function setQuiz()
	{
		ansRandom = Math.floor(Math.random() * 3);
		quizNow = Math.floor(Math.random() * quizTextList.length);
		$("#select-quiz-content-01").removeClass("hide");
		$("#select-quiz-content-01").find(".title-box > .title").empty();
		var text = quizTextList[quizNow];

		var texts = text.split("|");
		var ico = $('<span class="ico-img-01"></span>');
		var box = $('<span class="ico-rect"></span>');

		$("#select-quiz-content-01").find(".title-box > .title").append(ico);
		$("#select-quiz-content-01").find(".title-box > .title").append(texts[0]);
		$("#select-quiz-content-01").find(".title-box > .title").append(box);
		$("#select-quiz-content-01").find(".title-box > .title").append(texts[1]);

		console.log("----------------");
		var left = ($("#select-quiz-content-01").find(".title-box > .title > .ico-rect").offset().left - viewport.left) / viewport.scale;
		var top = $("#select-quiz-content-01").find(".title-box > .title > .ico-rect").offset().top;
		top = (top - transformOriginY) / viewport.scale + transformOriginY; 
		$("#select-quiz-01").find(".drag-area").css("left", left);
		$("#select-quiz-01").find(".drag-area").css("top", top);

		var wrongTexts = [];
		for(var i = 0; i < answerTextList.length; i++)
		{
			if(i != quizNow)	wrongTexts.push(answerTextList[i]);
		}
		var wrongIdxArray = $.makeRandom(wrongTexts.length, wrongTexts.length);
		
		$("#select-quiz-01").find(".drag-item").each(function(i){
			$(this).find(".text").empty();
			if(ansRandom == i)
			{
				console.log("정답 텍스트로 셋팅");
				console.log("---> ", answerTextList[quizNow]);
				$(this).find(".text").append(answerTextList[quizNow]);
			}
			else
			{
				// console.log("오답 텍스트로 셋팅");
				// console.log(wrongIdxArray[i]);
				// console.log(wrongTexts[wrongIdxArray[i]]);
				$(this).find(".text").append(wrongTexts[wrongIdxArray[i]]);
			}
		});

		$("#select-quiz-01").data("instance").options.answer = [ansRandom];
		$("#select-quiz-01").data("instance").restart();

	}

};

