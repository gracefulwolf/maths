// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 2, ci: 8, si: 0, ti: 0 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
// var NAV_TAB_INDEX = 0;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");
	// corner.setData({});

	var ani01 = new SpriteAni($(".ani-01"), {source:"./images/ms_41_3_08_01_01/ani01.png", frameData:ani01_data, loop:false});
};

var ani01_data = {"frames": [

	{
		"frame": {"x":4,"y":4,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":337,"y":4,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":670,"y":4,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":1003,"y":4,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":1336,"y":4,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":1669,"y":4,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":4,"y":334,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":337,"y":334,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":670,"y":334,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":1003,"y":334,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":1336,"y":334,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":1669,"y":334,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":4,"y":664,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":337,"y":664,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":670,"y":664,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":1003,"y":664,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":1336,"y":664,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":1669,"y":664,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":4,"y":994,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":337,"y":994,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":670,"y":994,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":1003,"y":994,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":1336,"y":994,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":1669,"y":994,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":4,"y":1324,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":337,"y":1324,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":670,"y":1324,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":1003,"y":1324,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}
	,{
		"frame": {"x":1336,"y":1324,"w":329,"h":326},
		"spriteSourceSize": {"x":0,"y":0,"w":329,"h":326},
		"sourceSize": {"w":329,"h":326}
	}]
}
	