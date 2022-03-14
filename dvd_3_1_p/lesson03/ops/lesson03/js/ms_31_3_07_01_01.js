// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 2, ci: 7, si: 0, ti: 0 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
// var NAV_TAB_INDEX = 0;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");

	var ani01 = new SpriteAni($(".ani-01"), {source:"./images/ms_31_3_07_01_01/ms_31_3_07_ani.png", frameData:ani01_data, loop:false});
};

var ani01_data = {"frames": [

	{
		"frame": {"x":0,"y":0,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":371,"y":0,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":742,"y":0,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":1113,"y":0,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":1484,"y":0,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":0,"y":297,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":371,"y":297,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":742,"y":297,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":1113,"y":297,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":1484,"y":297,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":0,"y":594,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":371,"y":594,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":742,"y":594,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":1113,"y":594,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":1484,"y":594,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":0,"y":891,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":371,"y":891,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":742,"y":891,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":1113,"y":891,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":1484,"y":891,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":0,"y":1188,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":371,"y":1188,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":742,"y":1188,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":1113,"y":1188,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":1484,"y":1188,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":0,"y":1485,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":371,"y":1485,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":742,"y":1485,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":1113,"y":1485,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":1484,"y":1485,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":0,"y":1782,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":371,"y":1782,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":742,"y":1782,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":1113,"y":1782,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":1484,"y":1782,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":0,"y":2079,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":371,"y":2079,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":742,"y":2079,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":1113,"y":2079,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":1484,"y":2079,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":0,"y":2376,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":371,"y":2376,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":742,"y":2376,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":1113,"y":2376,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}
	,{
		"frame": {"x":1484,"y":2376,"w":371,"h":297},
		"sourceSize": {"w":371,"h":297}
	}],
	"meta": {
		"app": "Adobe Animate",
		"version": "19.2.1.408",
		"image": "ms_31_3_07_ani.png",
		"format": "RGBA8888",
		"size": {"w":2048,"h":4096},
		"scale": "1"
	}
}
	