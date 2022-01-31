
// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 4, ci: 4, si: 9, ti: 4 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
var NAV_TAB_INDEX = 4;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");
	corner.setData(
		{
			soundData : [
				"./audio/mm_31_5_04_07_01/audio_01.mp3",
			]
		}
	);
};
