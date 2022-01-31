// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 4, ci: 1, si: 3, ti: 0 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
var NAV_TAB_INDEX = 2;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");

	$("#quiz-01").on("dragLiveCheck", function(e, areaIdx, dragIdx){
		console.log("dragLiveCheck");
		// var answer = $(this).find(".answer-item").eq(areaIdx);
		// answer.attr("idx", dragIdx);
	});

	/**
	var answer = [[1,0,1,0,0,1],[0,1,0,1,1,0]];
	$("#quiz-01").on("hitEvent", function(e, drag_idx, area_idx, drag_index){
		console.log("drag_index, area_idx",drag_index, area_idx);
		console.log("answer",answer[area_idx][drag_index]);

		var clone = $("#quiz-01").find(".drag-item").eq(drag_idx);
		clone.remove();

		var item = $("#quiz-01").find(".drag-item").eq(drag_index);

		if (answer[area_idx][drag_index] == 1) {
			var answerItem = $('<div class="answer-item answer-text"></div>');
			answerItem.attr("idx", drag_index);
			$("#quiz-01 .answer-con").append(answerItem);
			console.log('true11111111');
		} else {
			console.log('false22222222222');
		}
		// 정답일 때,

		// var answerItem = $('<div class="answer-item answer-text"></div>');
		// answerItem.attr("idx", drag_index);
		// answerItem.addClass("active");
		// $("#quiz-01 .answer-con").append(answerItem);
	})
	 */
};
