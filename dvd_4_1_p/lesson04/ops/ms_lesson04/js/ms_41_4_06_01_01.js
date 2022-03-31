// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 3, ci: 6, si: 0, ti: 0 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
// var NAV_TAB_INDEX = 0;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");
	// corner.setData({});

	var ani01 = new SpriteAni($(".ani-01"), {source:"./images/ms_41_4_06_01_01/ani01.png", frameData:ani01_data, loop:false});
};

var ani01_data = {"frames": [

	{
		"filename": "Symbol 14 instance 10000",
		"frame": {"x":4,"y":4,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10001",
		"frame": {"x":322,"y":4,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10002",
		"frame": {"x":640,"y":4,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10003",
		"frame": {"x":958,"y":4,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10004",
		"frame": {"x":1276,"y":4,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10005",
		"frame": {"x":1594,"y":4,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10006",
		"frame": {"x":4,"y":315,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10007",
		"frame": {"x":322,"y":315,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10008",
		"frame": {"x":640,"y":315,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10009",
		"frame": {"x":958,"y":315,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10010",
		"frame": {"x":1276,"y":315,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10011",
		"frame": {"x":1594,"y":315,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10012",
		"frame": {"x":4,"y":626,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10013",
		"frame": {"x":322,"y":626,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10014",
		"frame": {"x":640,"y":626,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10015",
		"frame": {"x":958,"y":626,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10016",
		"frame": {"x":1276,"y":626,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10017",
		"frame": {"x":1594,"y":626,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10018",
		"frame": {"x":4,"y":937,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10019",
		"frame": {"x":322,"y":937,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10020",
		"frame": {"x":640,"y":937,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10021",
		"frame": {"x":958,"y":937,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10022",
		"frame": {"x":1276,"y":937,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10023",
		"frame": {"x":1594,"y":937,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10024",
		"frame": {"x":4,"y":1248,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10025",
		"frame": {"x":322,"y":1248,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10026",
		"frame": {"x":640,"y":1248,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10027",
		"frame": {"x":958,"y":1248,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10028",
		"frame": {"x":1276,"y":1248,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10029",
		"frame": {"x":1594,"y":1248,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10030",
		"frame": {"x":4,"y":1559,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10031",
		"frame": {"x":322,"y":1559,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10032",
		"frame": {"x":640,"y":1559,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10033",
		"frame": {"x":958,"y":1559,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10034",
		"frame": {"x":1276,"y":1559,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10035",
		"frame": {"x":1594,"y":1559,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10036",
		"frame": {"x":4,"y":1870,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10037",
		"frame": {"x":322,"y":1870,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10038",
		"frame": {"x":640,"y":1870,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10039",
		"frame": {"x":958,"y":1870,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}
	,{
		"filename": "Symbol 14 instance 10040",
		"frame": {"x":1276,"y":1870,"w":314,"h":307},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":314,"h":307},
		"sourceSize": {"w":314,"h":307}
	}]
}
	