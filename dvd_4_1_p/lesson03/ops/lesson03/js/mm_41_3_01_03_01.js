// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 2, ci: 1, si: 2, ti: 0 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
var NAV_TAB_INDEX = 2;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");
	corner.setData(
		{
			soundData : [
				"./audio/mm_41_3_01_03_01/audio_01.mp3",
			]
		}
	);

	// 드래그 안되도록 처리 // 숫자 세는 사운드 끝나면 드래그 되도록 처리
	$("#quiz-01 .drag-item").addClass("disable");

	// 오디오 씽크 이벤트 추가
	$("#btn-audio-01").data("syncData", [0.25, 1.3, 2.7, 3.7, 4.8, 6.2, 7.6, 8.8, 10.1, 11.4]);
	$("#btn-audio-01").on("ON_SYNC_COUNT", function(e, params){
		var index = params.idx - 1;
		$("#sound-sync-01").find(".item").eq(index).addClass("active");
	});
	$("#btn-audio-01").on("ON_SYNC_FINISH", function(e, params){
		console.log("ON_SYNC_FINISH");
		$("#quiz-01 .drag-item").removeClass("disable");
		$("#quiz-01 .drag-area").addClass("ani");
	});

	// 다시 하기 이벤트 추가
	$("#quiz-content-01").on("QUIZ_RESET_ANSWER", function(e){
		console.log("다시 하기-----");
		$("#quiz-01 .drag-item").addClass("disable");
		$("#quiz-01 .drag-area").removeClass("ani");
		$("#sound-sync-01").find(".item").removeClass("active");
		corner.reset();
	})
};
