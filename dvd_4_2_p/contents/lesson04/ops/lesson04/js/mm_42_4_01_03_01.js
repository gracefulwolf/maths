// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 3, ci: 1, si: 2, ti: 0 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
var NAV_TAB_INDEX = 2;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");
};
// 오디오 씽크 이벤트 추가
// $("#btn-audio-01").data("syncData", [0.25, 1.3, 2.7, 3.7, 4.8, 6.2, 7.6, 8.8, 10.1, 11.4]);
// $("#btn-audio-01").on("ON_SYNC_COUNT", function(e, params){
// 	var index = params.idx - 1;
// 	$("#sound-sync-01").find(".item").eq(index).addClass("active");
// });
// $("#btn-audio-01").on("ON_SYNC_FINISH", function(e, params){
// 	console.log("ON_SYNC_FINISH");
// 	$("#quiz-01 .drag-item").removeClass("disable");
// 	$("#quiz-01 .drag-area").addClass("ani");
// });