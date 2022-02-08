// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 0, ci: 8, si: 0, ti: 0 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
// var NAV_TAB_INDEX = 0;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");

	var ani01 = new SpriteAni($(".ani-01"), {source:"./images/ms_41_1_08_01_01/ms_41_1_08_ani.png", frameData:ani01_data, loop:false});
};

var ani01_data = {"frames": [
	{
		"filename": "fbd445 instance 10000",
		"frame": {"x":4,"y":4,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10001",
		"frame": {"x":248,"y":4,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10002",
		"frame": {"x":492,"y":4,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10003",
		"frame": {"x":736,"y":4,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10004",
		"frame": {"x":4,"y":299,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10005",
		"frame": {"x":248,"y":299,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10006",
		"frame": {"x":492,"y":299,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10007",
		"frame": {"x":736,"y":299,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10008",
		"frame": {"x":4,"y":594,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10009",
		"frame": {"x":248,"y":594,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10010",
		"frame": {"x":492,"y":594,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10011",
		"frame": {"x":736,"y":594,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10012",
		"frame": {"x":4,"y":889,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10013",
		"frame": {"x":248,"y":889,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10014",
		"frame": {"x":492,"y":889,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10015",
		"frame": {"x":736,"y":889,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10016",
		"frame": {"x":4,"y":1184,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10017",
		"frame": {"x":248,"y":1184,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10018",
		"frame": {"x":492,"y":1184,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10019",
		"frame": {"x":736,"y":1184,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10020",
		"frame": {"x":4,"y":1479,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10021",
		"frame": {"x":248,"y":1479,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10022",
		"frame": {"x":492,"y":1479,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}
	,{
		"filename": "fbd445 instance 10023",
		"frame": {"x":736,"y":1479,"w":240,"h":291},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":240,"h":291},
		"sourceSize": {"w":240,"h":291}
	}],
	"meta": {
		"app": "Adobe Animate",
		"version": "19.2.1.408",
		"image": "ms_41_1_08_ani.png",
		"format": "RGBA8888",
		"size": {"w":1024,"h":2048},
		"scale": "1"
	}
}
	