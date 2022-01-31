
// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 5, ci: 6, si: 3, ti: 0 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
var NAV_TAB_INDEX = 2;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");
	
	$("#quiz-content-01").on("QUIZ_SHOW_ANSWER",function(){
		$("#quiz-01").find(".check-item").removeClass("on");
		$("#quiz-01").find(".check-item").eq(6).addClass("on");
	});
	$("#quiz-content-01").on("QUIZ_RESET_ANSWER",function(){
		$("#quiz-01").find(".check-item").removeClass("on");
	});
	$("#quiz-01").on("quizCheck", function(e,prame){
		console.log(prame.item);
		$(this).find(".check-item").removeClass("on");
		$(prame.item).addClass("on");
	});
	// 개별 이벤트 처리:: 체크 버튼 클릭하면 quiz-01도 체크 되도록 처리
	$("#quiz-02").on("quizCheck", function(e){
		console.log($(".btn-answer-part").eq(0));
		$(".btn-answer-part").eq(0).removeClass("active");
		$(".btn-answer-part").eq(0).trigger("click");
	});


};
