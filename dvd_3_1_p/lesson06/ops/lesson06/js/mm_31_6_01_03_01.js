// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 5, ci: 1, si: 2, ti: 0 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
var NAV_TAB_INDEX = 2;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");

	$("#btn-play-ani").on("click", function(){
		console.log("play ani");
		$("#btn-play-ani").addClass("toggle");
		$("#btn-play-ani").hide();

		$("#animation-01").data("instance").play("ani1", {onComplete: onComplete, endStop: true, startFrame: 1,});

		function onComplete(){
			console.log("11");
			$("#btn-play-ani").removeClass("toggle");
			$("#btn-play-ani").show();
		}
	});

	$("#btn-play-ani-02").on("click", function(){
		console.log("play ani");
		$("#btn-play-ani-02").addClass("toggle");
		$("#btn-play-ani-02").hide();

		$("#animation-01").data("instance").play("ani2", {onComplete: onComplete, endStop: true, startFrame: 1});

		function onComplete(){
			console.log("22");
			$("#btn-play-ani-02").removeClass("toggle");
			$("#btn-play-ani-02").show();
		}
	});

};
