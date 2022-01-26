
// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 0, ci: 7, si: 5, ti: 3 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
var NAV_TAB_INDEX = 4;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");

	var baseText = "왼쪽 사진을 클릭해봐!";
	var answerTexts = [
		"해왕성 거리: <br/>44억 9840만 km",
		"천왕성 거리:<br/>28억 7066만 km",
		"토성 거리:<br/>14억 2667만 km ",
		"목성 거리:<br/>7억 7834만 km",
		"화성 거리:<br/>2억 2794만 km",
		"우리가 살고 있는 행성 지구: <br/>1억 4960만 km ",
		"금성 거리:<br/>1억 821만 km",
		"수성 거리:<br/>5791만 km"
	]

	/* 미션 > 선택활동 퀴즈 개별 개발 */
	$("#select-quiz-01").on("quizCheck", function(e, params){
		var item = params.item;
		var idx = item.index();
		var answerText = answerTexts[idx];
		item.addClass("checked");

		$("#select-quiz-01").find(".answer-box-01 .text").empty();
		$("#select-quiz-01").find(".answer-box-01 .text").append(answerText);
		$("#select-quiz-01").find(".answer-box-01").addClass("active");
	});

	$("#select-quiz-01").on("RESET_ANSWER", function(){
		$("#select-quiz-01").find(".check-item").removeClass("checked");
		$("#select-quiz-01").find(".answer-box-01 .text").empty();
		$("#select-quiz-01").find(".answer-box-01 .text").append(baseText);
		$("#select-quiz-01").find(".answer-box-01").removeClass("active");
	});
};
