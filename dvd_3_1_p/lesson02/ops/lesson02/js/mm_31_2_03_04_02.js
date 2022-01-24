
// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 1, ci: 3, si: 3, ti: 1 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
var NAV_TAB_INDEX = 2;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");

	var baseText = "왼쪽 그림에서<br/>직각을 찾아봐!";
	var answerTexts = [
		"<span class='emp'>창문</span>에서<br/>직각을 찾았어~",
		"<span class='emp'>수학책</span>에서도<br/>직각을 찾았어.",
		"<span class='emp'>교실 칠판</span>에도<br/>직각이 있었네!"
	]

	/* 미션 > 선택활동 퀴즈 개별 개발 */
	$("#quiz-01").on("quizCheck", function(e, params){
		var item = params.item;
		var idx = item.index();
		var answerText = answerTexts[idx];

		$("#quiz-01").find(".answer-box-01 .text").empty();
		$("#quiz-01").find(".answer-box-01 .text").append(answerText);
		$("#quiz-01").find(".answer-box-01").addClass("active");
	});

	$("#quiz-01").on("RESET_ANSWER", function(){
		$("#quiz-01").find(".answer-box-01 .text").empty();
		$("#quiz-01").find(".answer-box-01 .text").append(baseText);
		$("#quiz-01").find(".answer-box-01").removeClass("active");
	});
};
