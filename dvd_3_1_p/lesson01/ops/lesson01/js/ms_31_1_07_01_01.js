// {volume[�숆린], part[�⑥썝], chapter[李⑥떆], section[肄붾꼫/�곷떒��], tab(�섎떒��)}
var PAGE_DEPTH = { vi: 0, pi: 0, ci: 7, si: 0, ti: 0 };
// �곷떒 �� -- �� �ｌ쑝硫� PAGE_DEPTH.si 媛믪쑝濡� 泥섎━ ��
// var NAV_TAB_INDEX = 0;

function initPage() {
	console.log("initPage");
	var corner = $(".content-container > .content").data("instance");

	var ani01 = new SpriteAni($(".ani-01"), {source:"./images/ms_31_1_07_01_01/ms_31_1_07_ani.png", frameData:ani01_data, loop:false});
};

var ani01_data = {"frames": [
	{
		"frame": {"x":4,"y":4,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":336,"y":4,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":668,"y":4,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":1000,"y":4,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":1332,"y":4,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":1664,"y":4,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":4,"y":285,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":4,"y":566,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":4,"y":847,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":4,"y":1128,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":4,"y":1409,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":4,"y":1690,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":336,"y":285,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":668,"y":285,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":668,"y":285,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":1000,"y":285,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":1332,"y":285,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":1664,"y":285,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":336,"y":566,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":336,"y":847,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":336,"y":1128,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":336,"y":1409,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":336,"y":1690,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":668,"y":566,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":1000,"y":566,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":1332,"y":566,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":1664,"y":566,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":668,"y":847,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":668,"y":847,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":668,"y":847,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":668,"y":1128,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":668,"y":1409,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":668,"y":1690,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":1000,"y":847,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":1332,"y":847,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":1664,"y":847,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":1000,"y":1128,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":1000,"y":1409,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":1000,"y":1690,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":1332,"y":1128,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":1664,"y":1128,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":1332,"y":1409,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":668,"y":1128,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":668,"y":1128,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}
	,{
		"frame": {"x":668,"y":1128,"w":328,"h":277},
		"sourceSize": {"w":328,"h":277}
	}],
	"meta": {
		"app": "Adobe Animate",
		"version": "19.2.1.408",
		"image": "ms_31_1_07_ani.png",
		"format": "RGBA8888",
		"size": {"w":2048,"h":2048},
		"scale": "1"
	}
}
	