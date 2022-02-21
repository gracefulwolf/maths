// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 1, ci: 7, si: 0, ti: 0 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
// var NAV_TAB_INDEX = 0;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");

	var ani01 = new SpriteAni($(".ani-01"), {source:"./images/ms_31_2_07_01_01/ms_31_2_07_ani.png", frameData:ani01_data, loop:false});
};

var ani01_data = {"frames": [

	{
		"frame": {"x":0,"y":0,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":208,"y":0,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":416,"y":0,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":624,"y":0,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":832,"y":0,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":1040,"y":0,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":1248,"y":0,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":1456,"y":0,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":1664,"y":0,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":0,"y":281,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":208,"y":281,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":416,"y":281,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":624,"y":281,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":832,"y":281,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":1040,"y":281,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":1248,"y":281,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":1456,"y":281,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":1664,"y":281,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":0,"y":562,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":208,"y":562,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":416,"y":562,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":624,"y":562,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":832,"y":562,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":1040,"y":562,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":1248,"y":562,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":1456,"y":562,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":1664,"y":562,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":0,"y":843,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":208,"y":843,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":416,"y":843,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":624,"y":843,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":832,"y":843,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":1040,"y":843,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":1248,"y":843,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":1456,"y":843,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":1664,"y":843,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":0,"y":1124,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":208,"y":1124,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":416,"y":1124,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":624,"y":1124,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":832,"y":1124,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":1040,"y":1124,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":1248,"y":1124,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":1456,"y":1124,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}
	,{
		"frame": {"x":1664,"y":1124,"w":208,"h":281},
		"sourceSize": {"w":208,"h":281}
	}],
	"meta": {
		"app": "Adobe Animate",
		"version": "19.2.1.408",
		"image": "ms_31_2_07_ani.png",
		"format": "RGBA8888",
		"size": {"w":2048,"h":2048},
		"scale": "1"
	}
}
	
	