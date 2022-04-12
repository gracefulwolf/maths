// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 5, ci: 6, si: 0, ti: 0 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
// var NAV_TAB_INDEX = 0;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");
	corner.setData({});

	var ani01 = new SpriteAni($(".ani-01"), {source:"./images/ms_41_6_06_01_01/ani01.png", frameData:ani01_data, loop:false});
};

var ani01_data = {"frames": [

	{
		"filename": "Symbol 12 instance 10000",
		"frame": {"x":4,"y":4,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10001",
		"frame": {"x":373,"y":4,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10002",
		"frame": {"x":742,"y":4,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10003",
		"frame": {"x":1111,"y":4,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10004",
		"frame": {"x":1480,"y":4,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10005",
		"frame": {"x":4,"y":337,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10006",
		"frame": {"x":373,"y":337,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10007",
		"frame": {"x":742,"y":337,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10008",
		"frame": {"x":1111,"y":337,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10009",
		"frame": {"x":1480,"y":337,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10010",
		"frame": {"x":4,"y":670,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10011",
		"frame": {"x":373,"y":670,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10012",
		"frame": {"x":742,"y":670,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10013",
		"frame": {"x":1111,"y":670,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10014",
		"frame": {"x":1480,"y":670,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10015",
		"frame": {"x":4,"y":1003,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10016",
		"frame": {"x":373,"y":1003,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10017",
		"frame": {"x":742,"y":1003,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10018",
		"frame": {"x":1111,"y":1003,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10019",
		"frame": {"x":1480,"y":1003,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10020",
		"frame": {"x":4,"y":1336,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10021",
		"frame": {"x":373,"y":1336,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10022",
		"frame": {"x":742,"y":1336,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10023",
		"frame": {"x":1111,"y":1336,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10024",
		"frame": {"x":1480,"y":1336,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10025",
		"frame": {"x":4,"y":1669,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10026",
		"frame": {"x":373,"y":1669,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10027",
		"frame": {"x":742,"y":1669,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10028",
		"frame": {"x":1111,"y":1669,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10029",
		"frame": {"x":1480,"y":1669,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10030",
		"frame": {"x":4,"y":2002,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10031",
		"frame": {"x":373,"y":2002,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10032",
		"frame": {"x":742,"y":2002,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10033",
		"frame": {"x":1111,"y":2002,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10034",
		"frame": {"x":1480,"y":2002,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10035",
		"frame": {"x":4,"y":2335,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10036",
		"frame": {"x":373,"y":2335,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10037",
		"frame": {"x":742,"y":2335,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10038",
		"frame": {"x":1111,"y":2335,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10039",
		"frame": {"x":1480,"y":2335,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10040",
		"frame": {"x":4,"y":2668,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10041",
		"frame": {"x":373,"y":2668,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10042",
		"frame": {"x":742,"y":2668,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10043",
		"frame": {"x":1111,"y":2668,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}
	,{
		"filename": "Symbol 12 instance 10044",
		"frame": {"x":1480,"y":2668,"w":365,"h":329},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":365,"h":329},
		"sourceSize": {"w":365,"h":329}
	}],
	"meta": {
		"app": "Adobe Animate",
		"version": "19.2.1.408",
		"image": "ani01.png",
		"format": "RGBA8888",
		"size": {"w":2048,"h":4096},
		"scale": "1"
	}
}
	