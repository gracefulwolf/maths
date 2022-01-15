let loadedIndex = null;
let mmPageData = [];
let msPageData = [];
let pathInclude = (window.jj) ? '/resource/include/' : '../../include/';
let pathApps = pathInclude + 'apps/';
let pathChallenge = pathApps + 'challenge/game/';
let pathActivity = pathInclude + 'activeHelper/';


let thisURL = window.location.pathname;
let thisFilename = thisURL.substring(thisURL.lastIndexOf('/')+1);
let thisFileID = thisFilename.substr(0, 10);
let thisBookType = thisFilename.substr(0,2);

let categoryData = (thisBookType=="mm") ? uiData : uiDataMs;
let otherData = (thisBookType=="mm") ? uiDataMs : uiData;
let currentPage = categoryData.volume[PAGE_DEPTH.vi].part[PAGE_DEPTH.pi].chapter[PAGE_DEPTH.ci].section[PAGE_DEPTH.si].page;
if(typeof currentPage == "object") currentPage = currentPage[PAGE_DEPTH.ti] || currentPage[0];

// -- ie css 
let browse = navigator.userAgent.toLowerCase();
if ((navigator.appName == 'Netscape' && browse.indexOf('trident') != -1) || browse.indexOf('msie') != -1) {
    	
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
let viewportOrigin = { left: 0, top: 0, width: 0, height: 0, scale: 1 };
let transformOriginY = 60;
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
	let scaleH2 = (viewport.height-60) / (viewbase.height-60);
	viewport.scale = Math.min(scaleW, scaleH2);

	viewport.left = (scaleW < scaleH2) ? 0 : parseInt((viewport.width - (viewbase.width * viewport.scale))/2);
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


	// --------- 도전 프레임 리사이징
	var hasChallenge = document.querySelector('.challenge-container') !== null;
	if(!hasChallenge) return;
	if(hasChallenge)
	{
		viewportOrigin.width = window.innerWidth;
		viewportOrigin.height = window.innerHeight;
		viewportOrigin.scale = Math.min(scaleW, scaleH);
		viewportOrigin.left = (scaleW < scaleH) ? 0 : parseInt((viewportOrigin.width - (viewbase.width * viewportOrigin.scale))/2);
		if(viewportOrigin.scale < 1) 
		{
			viewportOrigin.scale = 1;
			viewportOrigin.left = parseInt((viewportOrigin.width - viewbase.width)/2);
			if(viewportOrigin.left < 0) viewportOrigin.left = 0;
		}
		document.querySelector('.challenge-container').style.transform = 'scale(' + viewportOrigin.scale + ')';
		document.querySelector('.challenge-container').style.left = viewportOrigin.left + 'px';
	}
}


$(function(){
	// -- content show
	// setTimeout(function(){
	document.querySelector('.content-container').classList.add('loaded');
	// }, 200);

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

	// 퀴즈 check-multi :: 2020.08.28 아직 유형이 없어서 개발 안 했음.
	// $("*[data-ui='quiz-check-multi']").each(function (i) {
	// 	let option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
	// 	$(this).quizCheckMulti(option);
	// });

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

// 앱 등록 
$(function(){
	// 마인드 맵
	$("*[data-ui='app-mind-map']").each(function ( i )
	{
		let option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).mindMap(option);
	});

	// 드로잉 툴
	$("*[data-ui='app-drawing-tool']").each(function ( i )
	{
		let option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).drawingTool(option);
	});

	// 각도기 툴
	$("*[data-ui='app-angle-tool']").each(function ( i )
	{
		let option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).angleTool(option);
	});

	// 주사위 던지기
	diceApp();
	// 선택 활동 퀴즈
	if(window.hasOwnProperty("selectQuiz")) selectQuiz();
});

$(function(){
	load();
	init();
});

function init() {
	// - 기호 잘 못 들어간 경우 처리
	$(".sign-minus").each(function(){
		var str = $(this).text();
		console.log(str);
		if(str != "-")
		{
			$(this).text("-");
		}
	});
	// 키우기 숫자 있는 경우 icon 숫자 붙은 것으로 처리 2020.11.06
	let title = categoryData.volume[PAGE_DEPTH.vi].part[PAGE_DEPTH.pi].chapter[PAGE_DEPTH.ci].section[PAGE_DEPTH.si].title;
	if(title.indexOf("키우기") > -1)
	{
		try {
			var arr = title.split("키우기");
			if(arr.length > 1 && arr[1].length > 0)
			{
				$(".content > .title-h1 .ico-title-h1.ico-03").addClass("nn n-"+arr[1]);
			}
		}
		catch(e){}
	}

	// 익힘 차시 인트로 타이틀 "개념 정리"로 통일 2020.10.27
	$(".ms-chapter-intro .title .text > span").text("개념 정리");
	// 꺽쇠[1~3] 우측 여백 조정
	$(".left-inner").has(".col-em").addClass("pr-10");
	// "개념 확인" 행간 조정한 블릿 텍스트의 블릿 위치 조정을 위해 클래스 추가하기 2020.11.20 (line-height-bulb)
	$(".bullet-text").each(function(i){
		if($(this).find(".line-height-bulb").length > 0)
		{
			$(this).addClass("bulb");
		}
	});
	
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

	// CornerChallenge < ICorner 
	$("*[data-ui='cornerChallenge']").each(function (i) {
		let option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).cornerChallenge(option);
	});	
	
	// 스크롤바 디자인 적용
	$(".scroll-box").each(function(){
		let overflowY = $(this).data("overflow-y") || "scroll";
		let instance = $(this).overlayScrollbars({
			overflowBehavior : {
				x: "hidden",
				y: overflowY
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
		let message = "!! categoryData 정보가 없습니다!! categoryData 필수";
		console.log('%c%s', 'color: blue; font-size: 16px; font-weight:bold', message); 
		return;
	}

	document.body.classList.add("grade-"+categoryData.grade);
	document.body.classList.add(categoryData.bookType);
	document.body.classList.add(categoryData.volume[PAGE_DEPTH.vi].part[PAGE_DEPTH.pi].colorType);

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

					let chapterBox = document.createElement('span');
					chapterBox.setAttribute('class', 'over-box');
					chapter.appendChild(chapterBox);

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

		// 탭 번호가 1개일 때 없애기
		if(section.length > 1)
		{
			setTabs();
		}
		else
		{
			setTabs();
			// document.querySelector('nav.tabs .bg.left').style.left = "-1850px";
		}

		function setTabs()
		{
			let tabIdx = 0;
			for(let i = 0; i < section.length; i++) {
				let tab = document.createElement('button');
				let tabTitle = document.createElement('span');
				
				if(!section[i].tab) continue;

				tab.dataset.idx = i;


				let title = section[i].title;
				if(title.indexOf("단원이야기") > -1) title = "단원 이야기";
				if(title.indexOf("다지기") > -1) title = "다지기";
				if(title.indexOf("키우기") > -1) title = "키우기";
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
		}

		uiInit();
	}

	// 뷰어 컨텐츠 epub 페이지 리스트 로드
	if(window.jj)
	{
		loadXML("../../../common/xml/pageData.xml", function(xml){
			// 교과서 데이타
			var mm_lessonList = xml.getElementsByTagName("mm")[0].getElementsByTagName("ol");
			for(var i = 0; i < mm_lessonList.length; i++)
			{
				var arr = [];
				var lessonNode = mm_lessonList[i];
				var pages = lessonNode.getElementsByTagName("li");
				for(var j = 0; j < pages.length; j++)
				{
					var node = pages[j];
					var page = parseInt(node.getAttribute("page"));
					var file = node.getElementsByTagName("a")[0].childNodes[0].nodeValue;
					arr[page-1] = {"page": page, "file": file};
				}
				mmPageData.push(arr);
			}
			// console.log(mmPageData);

			// 익힘책 데이타
			var ms_lessonList = xml.getElementsByTagName("ms")[0].getElementsByTagName("ol");
			for(var i = 0; i < ms_lessonList.length; i++)
			{
				var arr = [];
				var lessonNode = ms_lessonList[i];
				var pages = lessonNode.getElementsByTagName("li");
				for(var j = 0; j < pages.length; j++)
				{
					var node = pages[j];
					var page = parseInt(node.getAttribute("page"));
					var file = node.getElementsByTagName("a")[0].childNodes[0].nodeValue;
					arr[page-1] = {"page": page, "file": file};
				}
				msPageData.push(arr);
			}
			// console.log(msPageData);
		});
	}
}

function uiInit() {
	$('.sidenav').sidenav({
		onOpenStart: function() {
			$('.sidenav-trigger').addClass("open");
			let sections = categoryData.volume[PAGE_DEPTH.vi].part[PAGE_DEPTH.pi].chapter[PAGE_DEPTH.ci].section;
			setPosCorners(sections);
		},
		onCloseStart: function () {
			// $('.chapters > li').removeClass('active');
			// $('.sidenav').removeClass('extend');
		},
		onCloseEnd: function () {
			setTimeout(function(){$('.sidenav-trigger').removeClass("open");}, 50);
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
	
	// 활동도우미 버튼
	$('.btn-more').dropdown({
		alignment: 'right',
		onOpenStart: function(){
			$('.btn-more').addClass('open');
		},
		onCloseEnd: function(){
			setTimeout(function(){$('.btn-more').removeClass('open');}, 50);
		}
	});
	$('#moreApps li > a').on(touchend, function(e){
		var strType = $(this).find('i').attr('class');
		console.log($(this).find('span').text());
		console.log(strType);
		
		var path = '';
		var url = '';
		switch(strType)
		{
			case 'icon-01':
				// 타이머
				path = 'timer.html';
				url = pathActivity + path;
			break;
			case 'icon-02':
				// OX퀴즈
				// path = 'OX퀴즈';
				path = 'ox/game_'+categoryData.grade+'_'+categoryData.term+'.html';
				url = pathApps + path;
			break;
			case 'icon-03':
				// 칠판 보드
				path = 'board.html';
				url = pathActivity + path;
			break;
			case 'icon-04':
				path = 'game/game_'+categoryData.grade+'_'+categoryData.term+'.html';
				console.log(path);

				// if($('body').hasClass('grade-3'))
				// {
				// 	// 땅따먹기 놀이
				// 	path = 'ground/game.html';
				// }
				// else
				// {
				// 	// '폭탄돌리기놀이';
				// 	path = 'game/game_'+categoryData.grade+'_'+categoryData.term+'.html';
				// }
				url = pathApps + path;
			break;
			case 'icon-04 grade-3':
				// 땅따먹기 놀이
				path = 'game/game_'+categoryData.grade+'_'+categoryData.term+'.html';
				url = pathApps + path;
			break;
			case 'icon-04 grade-4':
				// '폭탄돌리기놀이';
				path = 'game/game_'+categoryData.grade+'_'+categoryData.term+'.html';
				url = pathApps + path;
			break;
			case 'icon-05':
				// 시키미
				path = 'selection.html';
				url = pathActivity + path;
			break;
			case 'icon-06':
				// '수준별놀이';
				path = 'challenge/index.html';
				url = pathApps + path;
			break;
			case 'icon-07':
				// 주사위
				path = 'dice.html';
				url = pathActivity + path;
			break;
			case 'icon-08':
				path = 'dic/dic.html';
				url = pathApps + path;
			break;
				
		}
		
		console.log(strType, url);
	
		gojjLink('html', url, '_blank', {maximize: true});
		M.Dropdown.getInstance($('.btn-more')).close();

		e.preventDefault();
		e.stopPropagation();
	});
	
	// 수학 익힘 버튼 활성화
	if(categoryData.grade == 4)
	{
		$('#moreApps').find('li .icon-04').addClass('grade-'+categoryData.grade);
		var span = $('#moreApps').find('li .icon-04').next();
		span.html('폭탄 돌리기 놀이');
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

				if(index.pi == PAGE_DEPTH.pi && index.ci == PAGE_DEPTH.ci && si == PAGE_DEPTH.si)
				{
					corner.classList.add('active');
				}
			}

			let cornersBodys = document.querySelectorAll('.corners-body');

			for (let i = 0; i < cornersBodys.length; i++) {
				if (cornersBodys[i].childNodes.length === 0) {
					let target = document.querySelectorAll('.corners .' + cornersBodys[i].classList[1]);
					for (let ti = 0; ti < target.length; ti++) {
						target[ti].classList.add('hide');
					}
				} else {
					let target = document.querySelectorAll('.corners .' + cornersBodys[i].classList[1]);
					for (let ti = 0; ti < target.length; ti++) {
						target[ti].classList.remove('hide');
					}
				}
			}

			document.querySelector('.sidenav').classList.add('extend');
			document.querySelector('.corners').classList.add('active');
			
			setPosCorners(sections);
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

	$('.btn-ebook').on('click', function () {
		goEbookPage();
	});

	loadedIndex = PAGE_DEPTH;
	categoryReset();

	$('.ui-container').addClass('loaded');
}

// 서브 메뉴 위치 잡기
function setPosCorners(sections) {
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

	// --------- 위치 수정 :: 탭 하나일 때,
	if(sections.length < 2) {
		cornersTop -= 20;
		document.querySelector('.corners-pointer').classList.add("one");
	}
	else
	{
		document.querySelector('.corners-pointer').classList.remove("one");
	}

	document.querySelector('.corners-pointer').style.top = pointerTop + 'px';
	document.querySelector('.corners').style.top = cornersTop + 'px';
	document.querySelector('.corners').style.bottom = 'auto';
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

	// 쪽 수 표시
	document.querySelector('nav.global .pager .index').innerHTML = currentPage;

	let otherPage = categoryData.volume[index.vi].part[index.pi].chapter[index.ci].section[index.si].otherPage;
	 
	document.querySelector('nav.global .btn-ext').classList.remove('type1');
	document.querySelector('nav.global .btn-ext').classList.remove('type2');
	if(thisBookType == "mm")
	{
		document.querySelector('nav.global .btn-ext').classList.add('type1');
		document.querySelector('nav.global .btn-ext > span').innerHTML = "수학익힘";
	}
	else
	{
		document.querySelector('nav.global .btn-ext').classList.add('type2');
		document.querySelector('nav.global .btn-ext > span').innerHTML = "수학";
	}
	
	if(otherPage > -1) 
	{
		document.querySelector('nav.global .btn-ext').removeAttribute("disabled");
		$('nav.global .btn-ext').data("otherPage", otherPage);
		$('nav.global .btn-ext').on("click", function(e) {
			goOtherContentPage();
		});
	}

	console.log("현재 책 페이지: ", currentPage);
	console.log("다른 책 이동 버튼 활성화: ", otherPage);
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
	console.log("goContentPage: ", index);
	
	let section = categoryData.volume[index.vi].part[index.pi].chapter[index.ci].section[index.si];
	let bookType = (categoryData.bookType == "ms") ? "ms_" : "";
	let lesson = $.pad(index.pi + 1, 2);
	let lessonStr = "lesson" + lesson;

	if(section.url)
	{
		let filename = section.url[0].substr(0, 14) + $.pad((index.ti+1), 2);
		let url = "../"+bookType+"lesson" + lesson + "/"  + filename + ".html";

		if(!window.jj)
		{
			// 0. 뷰어가 아닌 독립 실행일 때
			location.href = url;
			return;
		}
		else
		{
			let data = eval(categoryData.bookType + "PageData")[index.pi];
			let pageName = filename+".html";
			let pageJson = $.getObject(data, "file", filename);

			let page = window.parent.GET_CURRENT_PAGE_NUMBER();

			if(!pageJson) {
				let message = "페이지 데이타 오류";
				console.log('%c%s', 'color: blue; font-size: 16px; font-weight:bold', message); 
			}
			else
			{
				page = pageJson.page;
			}
			
			// 1. 같은 단원으로 이동할 때
			// alert("현재 단원:" + PAGE_DEPTH.pi + " / 이동할 단원:" + index.pi);
			if(PAGE_DEPTH.pi == index.pi)
			{
				// alert("같은 단원에서 이동할 page: " + page);
				window.parent.GO_PAGE_LOAD(page);
				// window.parent.GO_PAGE_NEXT();
				return;
			}
			else
			{
				// 2. 다른 단원으로 이동할 때
				let type = "contents";
				let folder = (categoryData.bookType == "ms") ? "contents_sub" : "contents";
				// let jjURL = '/viewer/' + type + '/index.html?contentInformationURL=' + '../../resource/' + folder + '/' + lessonStr +'&page='+page;
				let jjURL = '/viewer/' + type + '/index.html?contentInformationURL=' + '../../resource/' + folder + '/' + lessonStr +'&pageName='+pageName;
	
				jj.link.html(jjURL, '_top');
			}

			return;
		}
	}
	else
	{
		alert("이동할 section.url 정보를 찾지 못 했습니다.")
		return;
	}
	
}

function goOtherContentPage() {
	console.log("다른 책 해당 차시 첫 번째 컨텐츠로 이동");
	let bookType = (categoryData.bookType == "ms") ? "mm_" : "ms_";
	let bookFolder = (categoryData.bookType == "ms") ? "" : "ms_";
	
	let filename = otherData.volume[PAGE_DEPTH.vi].part[PAGE_DEPTH.pi].chapter[PAGE_DEPTH.ci].section[0].url[0];

	let lesson = $.pad(PAGE_DEPTH.pi + 1, 2);
	let lessonStr = "lesson" + lesson;
	let url = "../" + bookFolder + "lesson" + lesson + "/" + filename; 

	if(!window.jj)
	{
		// 0. 뷰어가 아닌 독립 실행일 때
		location.href = url;
		return;
	}
	else
	{
		// 뷰어에서 다른 콘텐츠 뷰어로 이동(교과서 -> 익힘 or 익힘 -> 교과서)
		
		let type = 'contents'; // 'ebook', 'contents'
		let folder = 'ebook'; // 'ebook', 'ebook_sub', ''contents'', 'contents_sub'
		folder = (bookType == "mm_") ? 'contents' : 'contents_sub';
		
		let jjURL = '/viewer/' + type + '/index.html?contentInformationURL=' + '../../resource/' + folder + '/' + lessonStr +'&pageName='+filename;

		// let pageData = categoryData.volume[PAGE_DEPTH.vi].part[PAGE_DEPTH.pi].chapter[PAGE_DEPTH.ci].section[PAGE_DEPTH.si];
		// let pageNum = pageData.page;
		// var jjURL = '/viewer/' + type + '/index.html?contentInformationURL=' + '../../resource/' + folder + '/' + lessonStr + '&page='+filename;

		jj.link.html(jjURL, '_top');
	}
}

function goEbookPage() {
	if(window.jj)
	{
		let type = 'ebook'; // 'ebook', 'contents'
		let folder = 'ebook'; // 'ebook', 'ebook_sub', ''contents'', 'contents_sub'
		let pageNum = currentPage;

		if(categoryData.bookType == "mm")
		{
			folder = 'ebook';
		}
		else
		{
			folder = 'ebook_sub';
		}
		URL = '/viewer/' + type + '/index.html?contentInformationURL=' + '../../resource/' + folder + '&page='+pageNum;
		console.log(URL);
		jj.link.html(URL, '_top');
	}
	else
	{
		console.log("jj 환경이 아닙니다.");
	}
}

// 뷰어 링크
function gojjLink(type, url, windowName, params) {
	switch(type)
	{
		case 'html':
			if(!window.hasOwnProperty("jj")) 
			{
				var win = window.open(url, windowName);
				return;
			}
			window.jj.link.html(url, windowName, params);
		break;
	}
}

function loadXML(url, callback) {
	var jqxhr = $.ajax({
		type: "GET",
		url: url,
		dataType: "xml",
	})
	.done(function(xml) {
		console.log("xml load success!");
		if(callback) callback(xml);
	})
	.fail(function() {
		alert( "error" );
	})
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


// -------------------- 도전 퀴즈 통신
function goHome() {
	var cornerChallenge = $(".content-container > .content").data("instance");
	cornerChallenge.close();
}