let categoryData = uiData;
let loadedIndex = null;

requirejs.config({
	baseUrl: '../common/js',
	paths: {
		babel: 'libs/polyfill.min',
		jquery: 'libs/jquery-1.12.4.min',
		materialize: 'libs/materialize',
		tweenmax: 'libs/TweenMax.min',
		overlayscrollbars: 'libs/jquery.overlayscrollbars.min',
		class: 'libs/class',
		common: 'common',
		mindMap: 'app/mindmap',
		cornerBase: 'cornerbase',
		videoplayer: 'videoplayer',
		quizMain: 'quiz/quizMain',
		quizCheck: 'quiz/quizCheck',
		quizCheckMulti: 'quiz/quizCheckMulti',
		quizInput: 'quiz/quizInput',
		quizDraggable: 'quiz/quizDraggable',
		quizPopSelect: 'quiz/quizPopSelect',
		quizDrawLine: 'quiz/quizDrawLine',
	},
	shim: {
		materialize: {
			deps: ['jquery'],
			exports: 'materialize',
		},
		overlayscrollbars: {
			deps: ['jquery'],
			exports: 'overlayscrollbars',
		},
		common: {
			deps: ['jquery','overlayscrollbars','class','tweenmax'],
			exports: 'common',
		},
		cornerBase: {
			deps: ['jquery','overlayscrollbars','class','tweenmax','common'],
			exports: 'cornerBase',
		},
		mindMap: {
			deps: ['jquery','class','common','tweenmax'],
			exports: 'mindmap',
		},
		videoplayer: {
			deps: ['jquery','class','common','tweenmax'],
			exports: 'videoplayer',
		},
		quizMain: {
			deps: ['jquery','class','common','tweenmax'],
			exports: 'quizMain',
		},
		quizCheck: {
			deps: ['jquery','class','common','tweenmax','quizMain'],
			exports: 'quizCheck',
		},
		quizCheckMulti: {
			deps: ['jquery','class','common','tweenmax','quizMain'],
			exports: 'quizCheckMulti',
		},
		quizInput: {
			deps: ['jquery','class','common','tweenmax','quizMain'],
			exports: 'quizInput',
		},
		quizDraggable: {
			deps: ['jquery','class','common','tweenmax','quizMain'],
			exports: 'quizDraggable',
		},
		quizPopSelect: {
			deps: ['jquery','class','common','tweenmax','quizMain'],
			exports: 'quizPopSelect',
		},
		quizDrawLine: {
			deps: ['jquery','class','common','tweenmax','quizMain'],
			exports: 'quizDrawLine',
		}
	},
});

// -- ie css 
let browse = navigator.userAgent.toLowerCase();
if ((navigator.appName == 'Netscape' && browse.indexOf('trident') != -1) || browse.indexOf('msie') != -1) {
    require(['babel']);
	
    let ie = document.createElement('link');
    ie.setAttribute('rel', 'stylesheet');
    ie.setAttribute('href', '../common/css/ie.css');

	document.querySelector('head').appendChild(ie);
}

// -- ui append
var ui = document.createElement('div');
ui.classList.add('ui-container')
ui.innerHTML = uiInner;
document.body.appendChild(ui);


// -- resize
const viewbase = { left: 0, top: 0, width: 1280, height: 720, scale: 1 };
let viewport = { left: 0, top: 0, width: 0, height: 0, scale: 1 };
scale();
window.onresize = function () {
	scale();
};

function scale() {
	viewport.width = window.innerWidth;
	viewport.height = window.innerHeight;
	let scaleW = viewport.width / viewbase.width;
	let scaleH = viewport.height / viewbase.height;
	/* ------------------- content-container를 660px로 맞출 때 조정하는 부분(상단 UI 영역을 제외한 scale 조정) */
	scaleH = (viewport.height-60) / (viewbase.height-60);
	viewport.scale = Math.min(scaleW, scaleH);

	viewport.left = (scaleW < scaleH) ? 0 : parseInt((viewport.width - (viewbase.width * viewport.scale))/2);
	// min-width 1280으로 셋팅
	if(viewport.scale < 1) 
	{
		viewport.scale = 1;
		viewport.left = parseInt((viewport.width - viewbase.width)/2);
		if(viewport.left < 0) viewport.left = 0;
	}

	// document.querySelector('.content-container').style.transform = 'scale(' + viewport.scale + ')' + 'translate(' + viewport.left + 'px, 0)';
	document.querySelector('.content-container').style.transform = 'scale(' + viewport.scale + ')';
	document.querySelector('.content-container').style.left = viewport.left + 'px';
}


// -- content show
document.querySelector('.content-container').classList.add('loaded');

require(['jquery', 'class', 'dvd_4_2_p/resource/contents/lesson03/ops/common/js/common', 'quizMain', 'quizCheck', 'quizCheckMulti', 'quizDraggable', 'quizInput', 'quizPopSelect', 'quizDrawLine'], function ($) {

	// -- 입력 관련 기본 셋팅
	inputSetting();

	// 퀴즈 메인
	$("*[data-ui='quizMain']").each(function (i) {
		let option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).quizMain(option);
	});

	// 퀴즈 check
	$("*[data-ui='quiz-check']").each(function (i) {
		let option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).quizCheck(option);
	});

	// 퀴즈 check-multi
	$("*[data-ui='quiz-check-multi']").each(function (i) {
		let option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).quizCheckMulti(option);
	});

	// 퀴즈 input
	$("*[data-ui='quiz-input-text']").each(function (i) {
		let option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).quizInputText(option);
	});

	// 퀴즈 draggable
	$("*[data-ui='quiz-draggable']").each(function (i) {
		let option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).quizDraggable(option);
	});

	// 퀴즈 pop-select
	$("*[data-ui='quiz-pop-select']").each(function ( i )
	{
		var option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).quizPopSelect(option);
		console.log("quizPopSelect");
	});

	// 퀴즈 draw-line
	$("*[data-ui='quiz-draw-line']").each(function ( i )
	{
		var option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).quizDrawLine(option);
	});


	// ie background-image > svg -> img > svg
	if($.checkBroswerIE())
	{
		$(".bg").each(function(i){
			let bg = $(this).css("background-image");
			if(bg.indexOf('.svg') == -1) return;
			let url = bg.replace('url("', '');
			url = url.replace('")', '');
			let img = $("<img/>");
			img.attr("src", url);
			$(this).prepend(img);
			$(this).css("background-image", "none");
		});
	}
});


require(['jquery', 'class', 'tweenmax', 'dvd_4_2_p/resource/contents/lesson03/ops/common/js/common', 'cornerBase', 'mindMap'], function ($) {
	$("*[data-ui='app-mind-map']").each(function ( i )
	{
		let option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).mindMap(option);
	});
});

require(['jquery', 'class', 'overlayscrollbars', 'tweenmax', 'dvd_4_2_p/resource/contents/lesson03/ops/common/js/common', 'cornerBase', 'videoplayer'], function ($) {
	load();
	init();
});

function init() {
	console.log("init - 컨텐츠 공통 부분 개발 셋팅");
	// $(window).on("resize", function() {});

	$(window).on("ON_MEDIA_STOP", function(){
		console.log("ON_MEDIA_STOP");
	});
	$(window).on("ON_CORNER_RESET", function(){
		console.log("ON_CORNER_RESET");
	});
	$(window).on("ON_QUIZ_RESET", function(){
		$("*[data-ui*='quizMain']").each(function(i){
			$(this).data("instance").resetAnswer();
		});
	});

	// 탭
	$("*[data-ui='tabs']").each(function (i) {
		let option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).tabs(option);
	});

	// 팝업
	$("*[data-ui='popup']").each(function (i) {
		let option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).popup(option);
	});

	// video-player 
	$("*[data-ui='videoplayer']").each(function (i) {
		let option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).videoPlayer(option);
		$(this).data("instance").setData({});
	});

	// CornerBase < ICorner 
	$("*[data-ui='cornerBase']").each(function (i) {
		let option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).cornerBase(option);
	});

	// CornerMsLast41 < ICorner 
	$("*[data-ui='cornerMsLast41']").each(function (i) {
		let option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).cornerMsLast41(option);
	});
	
	// 스크롤바 디자인 적용
	$(".scroll-box").each(function(){
		let instance = $(this).overlayScrollbars({
			overflowBehavior : {
				x: "hidden",
				y: "scroll"
			}
		}).overlayScrollbars();
		$(this).data("scrollbar", instance);
	});

	// $(".scroll-box").each(function(){
	// 	let element = this;

	// 	let instance = OverlayScrollbars(element, {
	// 		className: "os-theme-dark",
	// 		overflowBehavior : {
	// 			x: "hidden",
	// 			y: "scroll"
	// 		}
	// 	});
	// 	$(this).data("scrollbar", instance);
	// });

	// 컨텐츠 페이지 스크립트 실행
	if(window.hasOwnProperty("initPage")) window.initPage();
}

function load() {
	let container = document.createElement('div');
	container.setAttribute('class', 'nav-area');

	console.log("-------------------- load");
	if(!categoryData) 
	{
		let message = "!! uiData 정보가 없습니다!! uiData 필수";
		console.log('%c%s', 'color: blue; font-size: 16px; font-weight:bold', message); 
		return;
	}

	document.body.classList.add("grade-"+categoryData.grade);
	document.body.classList.add(categoryData.bookType);

	if(categoryData.volume.length > 0) {
		// create volumes
		let volumes = document.createElement('ul');
		volumes.setAttribute('class', 'collapsible expandable volumes');

		for (let vi = 0; vi < categoryData.volume.length; vi++) {
			let volume = document.createElement('li');
			volume.setAttribute('class', 'active');

			let volumeHeader = document.createElement('div');
			volumeHeader.setAttribute('class', 'collapsible-header volume');

			let volumeHeaderIndex = document.createElement('span');
			volumeHeaderIndex.setAttribute('class', 'index');
			volumeHeaderIndex.innerHTML = categoryData.volume[vi].index + '단원';

			let volumeHeaderTitle = document.createElement('span');
			volumeHeaderTitle.setAttribute('class', 'title');
			volumeHeaderTitle.innerHTML = categoryData.volume[vi].title;

			let volumeBody = document.createElement('div');
			volumeBody.setAttribute('class', 'collapsible-body');

			// create parts
			let parts = document.createElement('ul');
			parts.setAttribute('class', 'collapsible parts');

			for (let pi = 0; pi < categoryData.volume[vi].part.length; pi++) {
				let part = document.createElement('li');

				let partHeader = document.createElement('div');
				partHeader.setAttribute('class', 'collapsible-header part');

				let partHeaderIndex = document.createElement('span');
				partHeaderIndex.setAttribute('class', 'index');
				partHeaderIndex.innerHTML = categoryData.volume[vi].part[pi].index;

				let partHeaderTitle = document.createElement('span');
				partHeaderTitle.setAttribute('class', 'title');
				partHeaderTitle.innerHTML = categoryData.volume[vi].part[pi].title;

				let partBody = document.createElement('div');
				partBody.setAttribute('class', 'collapsible-body');

				// create chapters
				let chapters = document.createElement('ul');
				chapters.setAttribute('class', 'collapsible chapters');

				for (let ci = 0; ci < categoryData.volume[vi].part[pi].chapter.length; ci++) {
					let chapter = document.createElement('li');

					let chapterNumber = document.createElement('span');
					chapterNumber.setAttribute('class', 'number');

					// if (categoryData.volume[vi].part[pi].chapter[ci].number != '') {
					// 	chapterNumber.innerHTML = categoryData.volume[vi].part[pi].chapter[ci].number;
					// 	chapter.appendChild(chapterNumber);
					// }

					let chapterTitle = document.createElement('span');
					chapterTitle.setAttribute('class', 'title');
					chapterTitle.innerHTML = categoryData.volume[vi].part[pi].chapter[ci].title;

					chapter.classList.add('btn-flat');
					chapter.appendChild(chapterTitle);

					chapter.dataset.vi = vi;
					chapter.dataset.pi = pi;
					chapter.dataset.ci = ci;

					chapters.appendChild(chapter);
				}

				partHeader.appendChild(partHeaderIndex);
				partHeader.appendChild(partHeaderTitle);

				partBody.appendChild(chapters);

				part.appendChild(partHeader);
				part.appendChild(partBody);

				parts.appendChild(part);
			}

			volumeHeader.appendChild(volumeHeaderIndex);
			volumeHeader.appendChild(volumeHeaderTitle);

			volumeBody.appendChild(parts);

			volume.appendChild(volumeHeader);
			volume.appendChild(volumeBody);

			volumes.appendChild(volume);
		}

		container.appendChild(volumes);

		document.querySelector('.sidenav .books').appendChild(container);

		if(!window.hasOwnProperty("PAGE_DEPTH")) 
		{
			let message = "!! PAGE_DEPTH 정보가 없습니다!! PAGE_DEPTH 입력 필수";
			console.log('%c%s', 'color: blue; font-size: 16px; font-weight:bold', message); 
			return;
		}

		console.log("PAGE_DEPTH:", PAGE_DEPTH);

		let section = categoryData.volume[PAGE_DEPTH.vi].part[PAGE_DEPTH.pi].chapter[PAGE_DEPTH.ci].section;
		let tabIdx = 0;
		for(let i = 0; i < section.length; i++) {
			let tab = document.createElement('button');
			let tabTitle = document.createElement('span');
			
			if(!section[i].tab) continue;

			tab.dataset.idx = i;

			let title = section[i].title;
			if(title.indexOf("단원이야기") > -1) title = "단원 이야기";
			if(title.indexOf("다지기") > -1) title = "다지기";
			if(title.indexOf("형성평가") > -1) title = "형성 평가";
			let num = parseInt(title);

			if(isNaN(num))	tab.classList.add("type1");
			else 			tab.classList.add("type2");

			if(!window.hasOwnProperty("NAV_TAB_INDEX")) window.NAV_TAB_INDEX = PAGE_DEPTH.si;
			if(NAV_TAB_INDEX == tabIdx) tab.classList.add("active");

			tabTitle.innerHTML = title;
			tab.appendChild(tabTitle);
			document.querySelector('nav.tabs').appendChild(tab);
			tabIdx++;
		}

		uiInit();
	}
}

function uiInit() {
	require(['jquery', 'materialize', 'overlayscrollbars'], function ($) {
		$('.sidenav').sidenav({
			onOpenStart: function() {
				$('.sidenav-trigger').addClass("open");
			},
			onCloseStart: function () {
				$('.sidenav-trigger').removeClass("open");
				// $('.chapters > li').removeClass('active');
				// $('.sidenav').removeClass('extend');
			},
			onCloseEnd: function () {
				categoryReset();
			},
		});
		$('.sidenav-trigger').on("click", function(e){
			if($(this).hasClass("open"))
			{
				let instance = M.Sidenav.getInstance($('.sidenav')[0]);
				instance.close();
				e.stopPropagation();
			}
		});

		$('.volumes').collapsible({
			accordion: false,
		});

		$('.parts').collapsible({
			// accordion: false,
			onCloseStart: function () {
				$('.chapters > li').removeClass('active');
				$('.corners').removeClass('active');
				$('.sidenav').removeClass('extend');
			},
			onOpenStart: function () {
				let et = $(this)[0].el;
				let parts = $('.parts');

				parts.not(et).collapsible('close').find('li').removeClass('active');
				parts.not(et).closest('li').removeClass('focus');
			},
		});

        $('.books').overlayScrollbars({
		});
        
        $('.btn-more').dropdown({
            alignment: 'right'
		});
		
		// 수학 익힘 버튼 활성화
		if(categoryData.grade == 4)
		{
			$('#moreApps').find('li .icon-04').addClass('grade-'+categoryData.grade);
			var span = $('#moreApps').find('li .icon-04').next();
			span.html('폭탄돌리기 놀이');
		}

		$('.chapters > li').click(function () {
			$('.chapters > li').removeClass('active');
			$(this).addClass('active');

			if ($('.corners').hasClass('active')) {
				$('.corners').removeClass('active');
			}

			let corners = document.querySelectorAll('.corners-body');

			for (let i = 0; i < corners.length; i++) {
				corners[i].innerHTML = '';
			}

			let index = $(this).data();
			let sections = categoryData.volume[index.vi].part[index.pi].chapter[index.ci].section;

			if (sections.length > 0) {
				for (let si = 0; si < sections.length; si++) {
					let corner = document.createElement('li');
					let cornerTitle = document.createElement('span');
					cornerTitle.setAttribute('class', 'title');
					cornerTitle.innerHTML = sections[si].title;
					corner.appendChild(cornerTitle);
					corner.dataset.vi = index.vi;
					corner.dataset.pi = index.pi;
					corner.dataset.ci = index.ci;
					corner.dataset.si = si;

					if (sections[si].type === 'intro') {
						document.querySelector('.corners-body.intro').appendChild(corner);
					} else if (sections[si].type === 'develop') {
						document.querySelector('.corners-body.develop').appendChild(corner);
					} else if (sections[si].type === 'outro') {
						document.querySelector('.corners-body.outro').appendChild(corner);
					} else if (sections[si].type === '') {
						document.querySelector('.corners-body.etc').appendChild(corner);
					}
				}

				let cornersBodys = document.querySelectorAll('.corners-body');

				for (let i = 0; i < cornersBodys.length; i++) {
					if (cornersBodys[i].childNodes.length === 0) {
						let target = document.querySelectorAll('.' + cornersBodys[i].classList[1]);
						for (let ti = 0; ti < target.length; ti++) {
							target[ti].classList.add('hide');
						}
					} else {
						let target = document.querySelectorAll('.' + cornersBodys[i].classList[1]);
						for (let ti = 0; ti < target.length; ti++) {
							target[ti].classList.remove('hide');
						}
					}
                }

				document.querySelector('.sidenav').classList.add('extend');
                document.querySelector('.corners').classList.add('active');
                
                let viewportHeight = parseInt(window.innerHeight);
                let cornersHeight = parseInt(document.querySelector('.corners').offsetHeight);
				let activeChapter = parseInt(document.querySelector('.chapters > li.active').offsetTop);
				let sidenavTop = document.querySelector('.sidenav').offsetTop;
				let bottomMargin = 20;

				let pointerTop = activeChapter - 30;
				let cornersTop = activeChapter - 35;
				let maxHeight = cornersTop + cornersHeight + sidenavTop + bottomMargin;
				if(maxHeight > viewportHeight) cornersTop -= (maxHeight - viewportHeight);

				let cornersDum = ((cornersTop + cornersHeight) - pointerTop) - 105;
				if(cornersDum < 0)	cornersTop -= cornersDum;

				document.querySelector('.corners-pointer').style.top = pointerTop + 'px';
				document.querySelector('.corners').style.top = cornersTop + 'px';
				document.querySelector('.corners').style.bottom = 'auto';
			}
		});

		$('.corners-body').on('click', 'li', function () {
			$('.corners-body >li').removeClass('active');
			$(this).addClass('active');
			document.querySelector('nav.global h1').innerHTML = '';

			let index = $(this).data();
			loadContent(index);

			index.ti = 0;
			goContentPage(index);
		});

		$('nav.tabs').on('click', 'button', function () {
			if($(this).hasClass("active")) return;

			$('nav.tabs button').removeClass('active');
			$(this).addClass('active');
			
			let tabIdx = $(this).data("idx");

			let index = {};
			index.vi = PAGE_DEPTH.vi;
			index.pi = PAGE_DEPTH.pi;
			index.ci = PAGE_DEPTH.ci;
			index.si = tabIdx;
			index.ti = 0;
			goContentPage(index);
		});

		loadedIndex = PAGE_DEPTH;
		categoryReset();
	});

	$('.ui-container').addClass('loaded');
}

function loadContent(index) {
	// console.log("loadContent: ", index);
	loadedIndex = index;

	let curreontChapterNumber = document.createElement('span');
	curreontChapterNumber.setAttribute('class', 'number');
	curreontChapterNumber.innerHTML = categoryData.volume[index.vi].part[index.pi].chapter[index.ci].number;

	if (categoryData.volume[index.vi].part[index.pi].chapter[index.ci].number != '') {
		document.querySelector('nav.global h1').appendChild(curreontChapterNumber);
	}

	let curreontChapterTitle = document.createElement('span');
	curreontChapterTitle.setAttribute('class', 'title');
	curreontChapterTitle.innerHTML = categoryData.volume[index.vi].part[index.pi].chapter[index.ci].title;
	document.querySelector('nav.global h1').appendChild(curreontChapterTitle);

	let currentCornerType = document.createElement('span');
	currentCornerType.setAttribute('class', 'type');

	let type = categoryData.volume[index.vi].part[index.pi].chapter[index.ci].section[index.si].type;

	if (type == '') {
		document.querySelector('nav.global h1').setAttribute('class', 'etc');
	} else {
		document.querySelector('nav.global h1').setAttribute('class', '');

		if (type === 'intro') {
			currentCornerType.innerHTML = '도입';
		} else if (type === 'develop') {
			currentCornerType.innerHTML = '전개';
		} else if (type === 'outro') {
			currentCornerType.innerHTML = '정리';
		}
	}

	document.querySelector('nav.global h1').appendChild(currentCornerType);

	let page = categoryData.volume[index.vi].part[index.pi].chapter[index.ci].section[index.si].page;
	document.querySelector('nav.global .pager .index').innerHTML = page;

	let otherPage = categoryData.volume[index.vi].part[index.pi].chapter[index.ci].section[index.si].otherPage;
	if(otherPage > -1) 
	{
		document.querySelector('nav.global .btn-ext').removeAttribute("disabled");
		$('nav.global .btn-ext').data("otherPage", otherPage);
		$('nav.global .btn-ext').on("click", function(e) {
			console.log("다른 책 컨텐츠로 이동: ", $(this).data("otherPage"));
			console.log(PAGE_DEPTH);
			let bookType = (categoryData.bookType == "ms") ? "mm_" : "ms_";
			var folder = (categoryData.bookType == "ms") ? "" : "ms_";
			let filename = bookType +  categoryData.grade + (PAGE_DEPTH.vi+1) + "_" + (PAGE_DEPTH.pi+1) + "_" + $.pad(PAGE_DEPTH.ci, 2) + "_01_01.html";
			console.log(filename);

			let lesson = $.pad(PAGE_DEPTH.pi + 1, 2);
			let url = "../" + folder + "lesson" + lesson + "/" + filename; 
			console.log(url);
			location.href = url;
		});
	}

	console.log("현재 책 페이지: ", page);
	console.log("다른 책 페이지: ", otherPage);
}

function categoryReset() {
	$('.volumes li:eq(' + loadedIndex.vi + ') .parts').collapsible('open', loadedIndex.pi);
	$('.volumes')
		.find('li:eq(' + loadedIndex.vi + ') .parts > li:eq(' + loadedIndex.pi + ') .chapters > li:eq(' + loadedIndex.ci + ')')
		.click();

	let corners = document.querySelectorAll('.corners-body li');

	for (let i = 0; i < corners.length; i++) {
		let e = corners[i];

		if (loadedIndex.vi === parseInt(e.dataset.vi) && loadedIndex.pi === parseInt(e.dataset.pi) && loadedIndex.ci === parseInt(e.dataset.ci) && loadedIndex.si === parseInt(e.dataset.si)) {
			$('.corners-body >li').removeClass('active');
			$(e).addClass('active');
			document.querySelector('nav.global h1').innerHTML = '';

			let index = $(e).data();
			loadContent(index);

		}
	}
}

function goContentPage(index) {
	console.log("pageData: ", index);
	
	let section = categoryData.volume[index.vi].part[index.pi].chapter[index.ci].section[index.si];
	let bookType = (categoryData.bookType == "ms") ? "ms_" : "";
	let lesson = $.pad(PAGE_DEPTH.pi + 1, 2);
	if(section.pages)
	{
		// let url = "../"+bookType+"lesson" + lesson + "/"  + section.pages[index.ti]
		let url = "./"+ section.pages[index.ti]
		console.log(url);
		location.href = url;
	}
}

// document.fullscreen
function openFullscreen(elem) {
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.mozRequestFullScreen) { /* Firefox */
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) { /* IE/Edge */
		elem.msRequestFullscreen();
	}
}

function closeFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.mozCancelFullScreen) { /* Firefox */
		document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) { /* IE/Edge */
		document.msExitFullscreen();
	}
}

// ------------------ 메인과 통신
function CallToMain(obj) {
	// if(window.parent.CallFromContent) window.parent.CallFromContent(obj);
}

function GetGlobalVolume() {
	return 1;
}

// ------------------- 디버그
window.debugOn = parent.debugOn = function()
{
	if($("body").hasClass("debug"))	$("body").removeClass("debug");
	else 							$("body").addClass("debug");
}