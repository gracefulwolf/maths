
// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 5, ci: 8, si: 2, ti: 0 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
var NAV_TAB_INDEX = 2;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");

	$("#quiz-01").on("quizCheck", function(e, params){
		var item = params.item;
		var idx = item.index();
		for(var i=0; i<10; i++){
			if($(".frog01").hasClass("a"+i))
			$(".frog01").removeClass("a"+i)
		}
		$(".frog01").addClass("a"+idx);
		
	});
	$("#quiz-01").on("RESET_ANSWER", function(e, params){
		for(var i=0; i<10; i++){
			if($(".frog01").hasClass("a"+i))
			$(".frog01").removeClass("a"+i)
		}
	});

	$("#quiz-01").on("SHOW_ANSWER", function(e, params){
		for(var i=0; i<10; i++){
			if($(".frog01").hasClass("a"+i))
			$(".frog01").removeClass("a"+i)
		}
		$(".frog01").addClass("a3");
	});

	$("#quiz-02").on("quizCheck", function(e, params){
		var item = params.item;
		var idx = item.index();
		for(var i=0; i<10; i++){
			if($(".frog02").hasClass("a"+i))
			$(".frog02").removeClass("a"+i)
		}
		$(".frog02").addClass("a"+idx);
		
	});
	$("#quiz-02").on("RESET_ANSWER", function(e, params){
		for(var i=0; i<10; i++){
			if($(".frog02").hasClass("a"+i))
			$(".frog02").removeClass("a"+i)
		}
	});

	$("#quiz-02").on("SHOW_ANSWER", function(e, params){
		for(var i=0; i<10; i++){
			if($(".frog02").hasClass("a"+i))
			$(".frog02").removeClass("a"+i)
		}
		$(".frog02").addClass("a6");
	});
};
