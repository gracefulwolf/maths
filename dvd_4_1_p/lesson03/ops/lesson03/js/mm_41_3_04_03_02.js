
// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 2, ci: 4, si: 2, ti: 1 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
var NAV_TAB_INDEX = 2;

var quizNow = null;
var itemNow = null;
var quizMax = 0;
var quizIndex = 0;
var checkIndex = 0;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");
	
	// 개별 이벤트 처리
	quizMax = $("#quiz-content-01 .quiz").length;
	quizStart();
	$("#quiz-content-01 .quiz").on("quizCheck", function(e, params){
		itemNow.removeClass("ani");

		if(quizNow.find(".check-item").length == quizNow.find(".check-item.active").length)
		{
			console.log(" 다음 퀴즈로 ");
			checkIndex = 0;
			quizIndex ++;
			quizNow = $("#quiz-content-01 .quiz").eq(quizIndex);
			if(quizNow.length < 1)
			{
				console.log("퀴즈 끝");
			}
			else
			{
				itemNow = quizNow.find(".check-item").eq(checkIndex);
				itemNow.addClass("ani");
	
			}
		}
		else
		{
			console.log(" 다음 체크");
			checkIndex ++;
			itemNow = quizNow.find(".check-item").eq(checkIndex);
			itemNow.addClass("ani");
		}
	});


	// $("#quiz-content-01").on("QUIZ_RESET_ANSWER", function(){
	// 	$("#quiz-content-01").data("instance").resetAnswer();
	// 	$("#quiz-content-01 .quiz .check-item").removeClass("ani");
	// 	quizStart();
	// });
	
	function quizStart() {
		quizIndex = 0;
		checkIndex = 0;
		quizNow = $("#quiz-content-01 .quiz").eq(quizIndex);
		itemNow = quizNow.find(".check-item").eq(checkIndex);
		itemNow.addClass("ani");
	}
};
