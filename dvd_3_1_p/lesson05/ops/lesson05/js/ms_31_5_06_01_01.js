// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 4, ci: 6, si: 0, ti: 0 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
// var NAV_TAB_INDEX = 0;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");
	// corner.setData({});

	var ani01 = new SpriteAni($(".ani-01"), {source:"./images/ms_31_5_06_01_01/ms_31_5_06_ani.png", frameData:ani01_data, loop:false});
	// ani01.play();
};

var ani01_data = {"frames": [

	{
		"frame": {"x":4,"y":4,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":4,"y":370,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":4,"y":736,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":4,"y":1102,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":4,"y":1468,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":245,"y":4,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":245,"y":370,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":245,"y":736,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":245,"y":1102,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":245,"y":1468,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":486,"y":4,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":727,"y":4,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":968,"y":4,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":1209,"y":4,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":1450,"y":4,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":1691,"y":4,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":486,"y":370,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":486,"y":736,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":486,"y":1102,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":486,"y":1468,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":727,"y":370,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":968,"y":370,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":1209,"y":370,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":1450,"y":370,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":1691,"y":370,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":727,"y":736,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":727,"y":1102,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":727,"y":1468,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":968,"y":736,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":968,"y":1102,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":968,"y":1468,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":1209,"y":736,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":1450,"y":736,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":1691,"y":736,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":1209,"y":1102,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":1209,"y":1468,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":1450,"y":1102,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":1691,"y":1102,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":1450,"y":1468,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}
	,{
		"frame": {"x":1691,"y":1468,"w":237,"h":362},
		"sourceSize": {"w":237,"h":362}
	}],
	"meta": {
		"app": "Adobe Animate",
		"version": "19.2.1.408",
		"image": "ms_31_5_06_aniaa.png",
		"format": "RGBA8888",
		"size": {"w":2048,"h":2048},
		"scale": "1"
	}
}
	