
// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 0, ci: 0, si: 1, ti: 0 };


function initPage() {
	console.log("initPage");

	// 동시 생성
	$("*[data-ui='cornerPoem']").each(function ( i )
	{
		var option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).cornerPoem(option);
	});

	var corner = $(".content-container > .content").data("instance");
	corner.setData(
		{
			soundData : [
				"./audio/mm_41_1_00_02_01/audio_01.mp3",
				"./audio/mm_41_1_00_02_01/audio_02.mp3",
				"./audio/mm_41_1_00_02_01/audio_03.mp3",
				"./audio/mm_41_1_00_02_01/audio_04.mp3",
				"./audio/mm_41_1_00_02_01/audio_05.mp3",
				"./audio/mm_41_1_00_02_01/audio_06.mp3",
				"./audio/mm_41_1_00_02_01/audio_07.mp3",
				"./audio/mm_41_1_00_02_01/audio_08.mp3",
				"./audio/mm_41_1_00_02_01/audio_09.mp3",
				"./audio/mm_41_1_00_02_01/audio_10.mp3",
				"./audio/mm_41_1_00_02_01/audio_11.mp3",
				"./audio/mm_41_1_00_02_01/audio_12.mp3",
				"./audio/mm_41_1_00_02_01/audio_13.mp3",
				"./audio/mm_41_1_00_02_01/audio_14.mp3",
			]
		}
	);
};


