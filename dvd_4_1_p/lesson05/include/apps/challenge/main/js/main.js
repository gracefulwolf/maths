let pathInclude = (window.jj) ? '/resource/include/' : '../../../include/';
let pathApps = pathInclude + 'apps/';
let pathChallenge = pathApps + 'challenge/game/';

let idx_lesson = 0;
let idx_diff = 0;
var cornerChallenge = null;


// -- resize
const viewbase = { left: 0, top: 0, width: 1280, height: 720, scale: 1 };
let viewport = { left: 0, top: 0, width: 0, height: 0, scale: 1 };
let viewportOrigin = { left: 0, top: 0, width: 0, height: 0, scale: 1 };
let transformOriginY = 0;
scale();
window.onresize = function () {
	scale();
};

function scale() {
	viewport.width = window.innerWidth;
	viewport.height = window.innerHeight;
	let scaleW = viewport.width / viewbase.width;
	let scaleH = viewport.height / viewbase.height;

	// --------- 도전 프레임 리사이징
	var hasChallenge = document.querySelector('.resize-container') !== null;
	if(!hasChallenge) return;
	if(hasChallenge)
	{
		viewportOrigin.width = window.innerWidth;
		viewportOrigin.height = window.innerHeight;
		viewportOrigin.scale = Math.min(scaleW, scaleH);
		viewportOrigin.left = (scaleW < scaleH) ? 0 : parseInt((viewportOrigin.width - (viewbase.width * viewportOrigin.scale))/2);
		// if(viewportOrigin.scale < 1) 
		// {
		// 	viewportOrigin.scale = 1;
		// 	viewportOrigin.left = parseInt((viewportOrigin.width - viewbase.width)/2);
		// 	if(viewportOrigin.left < 0) viewportOrigin.left = 0;
		// }
		document.querySelector('.resize-container').style.transform = 'scale(' + viewportOrigin.scale + ')';
		document.querySelector('.resize-container').style.left = viewportOrigin.left + 'px';
	}
}

$(function(){
	document.querySelector('.content-container').classList.add('loaded');

	// CornerChallenge < ICorner 
	$("*[data-ui='cornerChallenge']").each(function (i) {
		let option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).cornerChallenge(option);
	});	

	cornerChallenge = $(".content-container > .content").data("instance");

	// 버튼 셋팅
	$(".btns-lesson > .btn-box").on(touchstart, function(){
		GlobalAudio.play("button");
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		idx_lesson = $(this).index();
	});
	$(".btns-diff > .btn-box").on(touchstart, function(){
		GlobalAudio.play("button");
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		idx_diff = $(this).index();
	});
	$(".btn-start").on(touchstart, function(){
		GlobalAudio.play("button");
		var url = pathChallenge + linkUrls [idx_lesson][idx_diff];
		console.log(url);
		cornerChallenge.open(url);
	});
});

function goHome() {
	cornerChallenge.close();
}