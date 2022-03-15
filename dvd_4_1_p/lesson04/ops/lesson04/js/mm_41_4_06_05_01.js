// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 3, ci: 6, si: 4, ti: 0 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
// var NAV_TAB_INDEX = 0;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");

	// 개별 퀴즈 이벤트 처리
	$(".quiz-check.image-answer").on("quizCheck", function(e, params){
		var item = params.item;
		var idx = item.data("answer-part-idx");

		var nextQuiz = $(".quiz-0" + (idx+2));
		nextQuiz.find(".check-item").removeClass("hide");
	});

	$(".quiz-content").on("QUIZ_RESET_ANSWER", function(){
		$(this).find(".quiz-check .check-item").addClass("hide");
		$(".quiz-01").find(".check-item").removeClass("hide");
	})
};
