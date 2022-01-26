
// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 0, ci: 6, si: 4, ti: 0 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
var NAV_TAB_INDEX = 2;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");

	// 개별 이벤트 처리
	/*
	$("#pop-quiz-02").on("quizCheck", function(){
		$("#pop-quiz-01").data("instance").showAnswer();
		answerCheck();
	})
	$("#pop-quiz-04").on("quizCheck", function(){
		$("#pop-quiz-03").data("instance").showAnswer();
		answerCheck();
	})
	$("#pop-quiz-06").on("quizCheck", function(){
		$("#pop-quiz-05").data("instance").showAnswer();
		answerCheck();
	})

	function answerCheck()
	{
		var total = $("#quiz-content-02").find(".quiz-check").length;
		var count = $("#quiz-content-02").find(".quiz-check .check-item.active").length;
		if(count == total)
		{
			$("#quiz-content-02").data("instance").showAnswer();
		}
	}
	*/
};
