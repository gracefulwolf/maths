
// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 2, ci: 6, si: 3, ti: 0 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
var NAV_TAB_INDEX = 2;

function initPage() {
	console.log("initPage");
    var corner = $(".content-container > .content").data("instance");
    

    /**
	 * 페이지 개별 스크립트 :: cc 애니메이션 재생
	 */
	$("#btn-play-ani").on("click", function(){
		console.log("play ani");
		$("#btn-play-ani").addClass("toggle");
		$("#btn-play-ani").hide();

		$("#animation-01").data("instance").play(null, {onComplete: onComplete, endStop: true, startFrame: 1});

		function onComplete(mc){
			$("#btn-play-ani").removeClass("toggle");
			$("#btn-play-ani").show();
		}
	});

	$('#btn-play-ani').click(function(){
		$('.bb-01').css('visibility','visible');
	});
};
