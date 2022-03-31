// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 3, ci: 6, si: 0, ti: 0 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
// var NAV_TAB_INDEX = 0;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");

	var ani01 = new SpriteAni($(".ani-01"), {source:"./images/ms_31_4_06_01_01/ms_31_4_06_ani.png", frameData:ani01_data, loop:false});

	corner.setData({});
};

var ani01_data = {"frames": [

	{
		"frame": {"x":4,"y":4,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":308,"y":4,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":612,"y":4,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":916,"y":4,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":1220,"y":4,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":1524,"y":4,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":4,"y":313,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":308,"y":313,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":612,"y":313,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":916,"y":313,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":1220,"y":313,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":1524,"y":313,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":4,"y":622,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":308,"y":622,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":612,"y":622,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":916,"y":622,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":1220,"y":622,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":1524,"y":622,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":4,"y":931,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":308,"y":931,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":612,"y":931,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":916,"y":931,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":1220,"y":931,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":1524,"y":931,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":4,"y":1240,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":308,"y":1240,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":612,"y":1240,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":916,"y":1240,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":1220,"y":1240,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":1524,"y":1240,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":4,"y":1549,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":308,"y":1549,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":612,"y":1549,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":916,"y":1549,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":1220,"y":1549,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":1524,"y":1549,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":4,"y":1858,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":308,"y":1858,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":612,"y":1858,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":916,"y":1858,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":1220,"y":1858,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":1524,"y":1858,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":4,"y":2167,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":308,"y":2167,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}
	,{
		"frame": {"x":612,"y":2167,"w":300,"h":305},
		"sourceSize": {"w":300,"h":305}
	}],
	"meta": {
		"app": "Adobe Animate",
		"version": "19.2.1.408",
		"image": "ms_31_4_06_ani.png",
		"format": "RGBA8888",
		"size": {"w":2048,"h":4096},
		"scale": "1"
	}
}
	