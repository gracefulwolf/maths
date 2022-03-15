// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 2, ci: 7, si: 6, ti: 0 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
var NAV_TAB_INDEX = 5;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");

	var baseText = "왼쪽 사진을 클릭해봐!";
	var answerTexts = [
		"44억 8794만 km<br/>지구에서 가장 먼 곳을<br/>돌고 있는 행성",
		"29억 9196만 km<br/>누워서 도는 행성",
		"14억 9598만 km<br/>고리가 있는 행성",
		"7억 4799만 km<br/>크기가 가장 큰 행성",
		"2억 2739만 km<br/>지구와 환경이 가장 비슷한<br/>탐사선을 보낸 행성",
		"1억 4960만 km<br/>우리가 살고 있는 행성",
		"1억 472만 km<br/>태양계에서 가장 밝은 행성",
		"5834만 km<br/>태양에서 가장 가까운 행성"
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
