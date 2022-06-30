
// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 1, ci: 6, si: 1, ti: 0 };


function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");


	// 개별 인터렉션 스크립트 작성
	$("#quiz-01, #quiz-03, #quiz-02, #quiz-04").on("quizCheck", $.proxy(checkEvent));

	function checkEvent(e, params) {
		var item = params.item;
		var answer_idx = item.data("answer-part-idx");
		$("#quiz-image-01").find(".answer").removeClass("show");
		$("#quiz-image-01").find(".answer-0"+answer_idx).addClass("show");
	}

	$(".quiz-content").on("QUIZ_RESET_ANSWER", function(){
		$("#quiz-image-01").find(".answer").removeClass("show");
	});
	
};
