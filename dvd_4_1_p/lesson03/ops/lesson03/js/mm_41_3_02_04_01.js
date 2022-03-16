
// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 2, ci: 2, si: 3, ti: 0 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
var NAV_TAB_INDEX = 2;

var quizIndex = 0;
function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");
	
	// 개별 이벤트 처리
	$(".quiz").on("quizCheck", function(e, params){
		quizIndex++;
		$(".quiz").eq(quizIndex).removeClass("hide");
	});

	$("#quiz-content-01").on("QUIZ_SHOW_ANSWER", function(e){
		$(".quiz").removeClass("hide");
	});
	$("#quiz-content-01").on("QUIZ_RESET_ANSWER", function(e){
		quizIndex = 0;
		$(".quiz").not("#quiz-01").addClass("hide");
	});
};
