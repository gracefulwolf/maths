
/**
 * 4학년 메인 
 */
(function () {

	let pathInclude = (window.jj) ? '/resource/include/' : '../../include/';
	let pathApps = pathInclude + 'apps/';
	let pathChallenge = pathApps + 'challenge/minigame/';
	let pathActivity = pathInclude + 'activeHelper/';


	let bgm, eff01;
	let timer = null;
	let ready = false;

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

		// --------- 프레임 리사이징
		viewport.width = window.innerWidth;
		viewport.height = window.innerHeight;
		viewport.scale = Math.min(scaleW, scaleH);
		viewport.left = (scaleW < scaleH) ? 0 : parseInt((viewport.width - (viewbase.width * viewport.scale))/2);

		// ------- 스케일 축소 제한
		/** 
		if(viewport.scale < 1) 
		{
			viewport.scale = 1;
			viewport.left = parseInt((viewport.width - viewbase.width)/2);
			if(viewport.left < 0) viewport.left = 0;
		}
		*/
		document.querySelector('.resize-container').style.transform = 'scale(' + viewport.scale + ')';
		document.querySelector('.resize-container').style.left = viewport.left + 'px';
	}

	function closeLoading() {
		if (window.jj) {
			var opener = window.jj.opener();
			if (opener && opener.closeSplash) opener.closeSplash(window);
		}
	}

	function setLocalStorage(mode) {
		try {
			window.localStorage.setItem("FORTEACHERCD_MODE", mode);
		} catch (e) {
			console.log("err : ", e);
		}
	}

	$(function(){
		// <!-- jj: 진도저장 -->
		if(window.hasOwnProperty("Progress")) window.Progress.initiate();
		
		// --------------------------- 뷰어 메인 시작시 반드시 필요한 호출
		setLocalStorage("HTML");
		// close loading
		closeLoading();
		// --------------------------- 뷰어 메인 시작시 반드시 필요한 호출

		// 오디오 셋팅
		bgm = new AudioControl("./audio/bgm.mp3", {preload:"auto", loop: true, onFinish:function(){}});
		eff01 = new AudioControl("./audio/eff01.mp3", {preload:"auto", loop: false, onFinish:function(){}});

		// 입력 관련 초기화
		inputSetting();
		
		// 메인 애니 시작
		$("#animation-01").on("ON_READY", function(){
			setTimeout(function(){
				playAnimation();	
			},100);
		});


		// 모바일 아닌 기기에서만 버튼 hover 기능 적용. 
		if(!isMobile)
		{
			$(".content-container *[class*='btn-']").each(function(i){
				if($(this).hasClass("hide-btn-check")) return;
				
				$(this).on("mouseenter", function(e){
					$(this).addClass("hover");
					var targetElement = $(this).attr("targetElement");
					if(targetElement) $(targetElement).addClass("hover");
				});
				$(this).on("mouseleave", function(e){
					$(this).removeClass("hover");
					var targetElement = $(this).attr("targetElement");
					if(targetElement) $(targetElement).removeClass("hover");
				});
			});
		}

		// navi 버튼
		$(".navi .btn-main").on(touchend, function(e){
			GlobalAudio.play("button01");

			var idx = $(this).index();
			if( idx < $(".navi .btn-main").length - 1 )
			{
				console.log("서브 오픈");
				openNaviSub(idx);
			}
			else
			{
				console.log("프로젝트 단원 페이지로 이동");
				var page = uiData.project.page;
				goEbookPage("ebook", "ebook", page);
			}
		});

		$(".navi-sub .btn-tab").on(touchend, function(e){
			changeNaviSub();
		});

		$(".navi-sub .btn-close").on(touchend, function(e){
			closeNaviSub();
		});

		// footer 버튼
		$(".footer .btn-app").on(touchend, function(e){
			e.stopPropagation();

			closeAppSub();

			var idx = $(this).index();
			var str = "";
			var url = "";
			switch(idx) {
				case 0:
					str = "진도 나가기";
					 window.Progress.open();
				break;
				case 1:
					str = "수업 마법사";
				break;
				case 2:
					str = "놀이";
				break;
				case 3:
					str = "자료실";
					url = pathInclude + "archive/index.html";
					// gojjLink('html', url, '_blank', {maximize: true});
					gojjLink('html', url, '_top', {maximize: true});
				break;
				case 4:
					str = "이용 안내";
					url = "./data/이용 안내.pdf";
					fileOpen(url);
				break;
			}
			console.log(str);

			if(idx == 1 || idx == 2)
			{
				GlobalAudio.play("button01");
				$(this).addClass("active");
				openAppSub(idx)
				return;
			}
		});

		$(".footer .apps-sub").on(touchend, function(e) {
			e.stopPropagation();
		});

		$(".footer .apps-sub.sub-01 .btn-sub").on(touchend, function(e){
			var idx = $(this).index();
			if(idx == 0) window.MY_CLASS_MAKER.openMyClassMaker();
			if(idx == 1) window.MY_CLASS_MAKER.openProgress();
		});
		$(".footer .apps-sub.sub-02 .btn-sub").on(touchend, function(e){
			var idx = $(this).index();
			if(idx == 0)
			{
				console.log("OX 퀴즈");
				// OX퀴즈
				path = 'ox/game_'+uiData.grade+'_'+uiData.term+'.html';
			}
			if(idx == 1)
			{
				console.log("전체 게임(땅따먹기/폭탁돌리기");
				// '전체 게임';
				path = 'game/game_'+uiData.grade+'_'+uiData.term+'.html';
			}
			url = pathApps + path;
			console.log(url);
			bgm.stop();
			gojjLink('html', url, '_blank', {maximize: true});
		});

		$("body").on(touchend, function(){
			closeAppSub();
		});

		$(".footer input").on("keydown", function(e){
			if(e.keyCode == 13)
			{
				goPage();
			}
		});

		$(".footer .btn-go").on(touchend, function(){
			goPage();
		});

		function goPage()
		{
			var page = $(".footer input").val();
			page = $.trim(page);
			if(page.length > 0)
			{
				console.log("이동:", page);
				goEbookPage("ebook", "ebook", page);
			}
		}

		document.querySelector('.content-container').classList.add('loaded');
	});

	function changeNaviSub()
	{
		if($(".navi-sub-cont").hasClass("mm"))
		{
			$(".navi-sub-cont").removeClass("mm").addClass("ms");
		}
		else
		{
			$(".navi-sub-cont").removeClass("ms").addClass("mm");
		}
		var idx = $(".navi-sub").data("open-idx");
		makeNaviSub(idx);
	}
	function makeNaviSub(idx) {
		var isMM = ($(".navi-sub-cont").hasClass("mm")) ? true : false;
		var title = $(".navi-sub-cont").find(".title");
		var lists = $(".navi-sub-cont").find(".lists");

		var strNumber = idx + 1;
		var strText = uiData.volume[0].part[idx].title;
		title.find(".lesson").text(strNumber);
		title.find(".text").text(strText);

		lists.empty();
		var subData = uiData.volume[0].part[idx].chapter;
		var subDataMs = uiDataMs.volume[0].part[idx].chapter;
		for(var i = 0; i < subData.length; i++)
		{
			var btn = $('<div class="btn-list"></div>');
			var strText = subData[i].title;
			var folder = "ebook";
			var page = 0;

			// 메뉴로 등록할지 말지
			var isAdd = true;
			if(isMM)
			{
				// 교과서
				// if(i == 0) isAdd = false;

				folder = "ebook";
				page = subData[i].section[0].page;

			} else {
				// 익힘책
				if(i > subData.length-3) isAdd = false;
				if(i == 0) strText = subDataMs[i].title;
				if(i == subData.length-3) strText = subDataMs[i].title;

				folder = "ebook_sub";
				page = subData[i].section[0].page;
				if(subDataMs[i]) page = subDataMs[i].section[0].page;
			}

			if(typeof page == "object") page = page[0];

			if(isAdd)
			{
				btn.data("folder", folder);
				btn.data("page", page);
				btn.html(strText);
				// 모바일 아닌 기기에서만 버튼 hover 기능 적용. 
				if(!isMobile)
				{
					btn.on("mouseenter", function(e){
						$(this).addClass("hover");
					});
					btn.on("mouseleave", function(e){
						$(this).removeClass("hover");
					});
				}

				btn.on(touchend, function(e){
					var folder = $(this).data("folder");
					var page = $(this).data("page");

					goEbookPage("ebook", folder, page);
				});

				lists.append(btn);
			}
		}
	}

	function openNaviSub(idx) {
		$(".navi-sub-cont").removeClass("ms").addClass("mm");
		makeNaviSub(idx);
		$(".navi-sub").addClass("open");
		$(".navi-sub").data("open-idx", idx);
	}
	function closeNaviSub(idx) {
		$(".navi-sub").removeClass("open");
	}

	function openAppSub(idx) {
		$(".apps-sub.sub-0" + idx).addClass("open");
	}

	function closeAppSub() {
		$(".btn-app").removeClass("active");
		$(".apps-sub").removeClass("open");
	}

	function playAnimation()
	{
		bgm.play();
		eff01.play();

		var animation = $("#animation-01").data("instance");
		animation.play(null, {startFrame:1});

		// ui 등장 모션 startUI
		animation.exportRoot.onCue = function(){
			console.log("onCue :: UI 등장 시작");
			animation.exportRoot.onCue = null;
			startUIAni();
		}

		// $(".content-container").css("pointer-events", "none");
		$("body").one(touchstart, function(){
			console.log("skip");
			skipUIAni();
		});
	}

	function startUIAni()
	{
		clearTimeout(timer);
		// $("body").off(touchstart);

		var ani_elem = null; 
		var delay = 0;

		// 학년, 학기
		var ani_elem = $(".header > .title"); 
		delay = 0;
		TweenLite.set(ani_elem, {x: -10, alpha: 0 })
		TweenLite.to(ani_elem, 0.5, {x: 0, alpha:1, delay: delay, ease:Cubic.easeOut })
		ani_elem.removeClass("hidden");

		// 네비 
		ani_elem = $(".navi-main > .btn-main"); 
		delay = 0.3;
		for(var i = 0; i < ani_elem.length; i++)
		{
			TweenLite.set(ani_elem.eq(i), {y: -10, alpha: 0 })
			TweenLite.to(ani_elem.eq(i), 0.3, {y: 0, alpha:1, delay: delay, ease:Cubic.easeOut })
			ani_elem.eq(i).removeClass("hidden");
			delay += 0.1;
		}

		// footer apps
		ani_elem= $(".footer-cont .apps"); 
		delay = 0.7;
		TweenLite.set(ani_elem, {y: 530, alpha: 0 });
		TweenLite.to(ani_elem, 0, {alpha:1, delay: delay, ease:Cubic.easeOut});
		TweenLite.to(ani_elem, 1, {y: 0, alpha:1, delay: delay, ease:Back.easeOut, onComplete:function(){
		}});
		ani_elem.removeClass("hidden");

		// footer pages
		ani_elem= $(".footer-cont .pages"); 
		delay += 0.2;
		TweenLite.set(ani_elem, {y: 530, alpha: 0 });
		TweenLite.to(ani_elem, 0, {alpha:1, delay: delay, ease:Cubic.easeOut});
		TweenLite.to(ani_elem, 1, {y: 0, alpha:1, delay: delay, ease:Back.easeOut, onComplete:function(){
			console.log("네비 애니까지 완료");
			enableUI();
		}});
		ani_elem.removeClass("hidden");
	}

	function skipUIAni() {
		clearTimeout(timer);

		// 애니 마지막 프레임으로 이동
		var animation = $("#animation-01").data("instance");
		var frame = animation.exportRoot.totalFrames -1;
		animation.gotoAndStop(null, frame);
		
		var ani_elem = $(".header > .title"); 
		TweenLite.killTweensOf(ani_elem);
		TweenLite.set(ani_elem, {x: 0, alpha: 1 });
		ani_elem.removeClass("hidden");

		ani_elem = $(".navi-main > .btn-main"); 
		TweenLite.killTweensOf(ani_elem);
		TweenLite.set(ani_elem, {y: 0, alpha: 1 });
		ani_elem.removeClass("hidden");

		// footer apps
		ani_elem= $(".footer-cont .apps"); 
		TweenLite.killTweensOf(ani_elem);
		TweenLite.set(ani_elem, {y: 0, alpha: 1 });
		ani_elem.removeClass("hidden");

		// footer pages
		ani_elem= $(".footer-cont .pages"); 
		TweenLite.killTweensOf(ani_elem);
		TweenLite.set(ani_elem, {y: 0, alpha: 1 });
		ani_elem.removeClass("hidden");
		
		enableUI();
	}

	function enableUI() {
		timer = setTimeout(function(){
			$(".content-container").css("pointer-events", "");
		}, 500);

		// text-license
		if($(".text-license").hasClass("show")) return;
		var ani_elem= $(".text-license"); 
		var delay = 0;
		TweenLite.set(ani_elem, {alpha: 0 })
		TweenLite.to(ani_elem, 0.5, {alpha:1, delay: delay, ease:Cubic.easeOut});
		$(".text-license").addClass("show");
	}

	// 뷰어 새창 링크
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

	// 이북 페이지 이동
	function goEbookPage(type, folder, pageNum) {
		if(window.jj)
		{
			// let type = 'ebook'; // 'ebook', 'contents'
			// let folder = 'ebook'; // 'ebook', 'ebook_sub', ''contents'', 'contents_sub'
			var URL = '/viewer/' + type + '/index.html?contentInformationURL=' + '../../resource/' + folder + '&page='+pageNum;
			jj.link.html(URL, '_top');
		}
		else
		{
			console.log(type, folder, pageNum);
			console.log("jj 환경이 아닙니다.");
		}
	}

	// 파일 열기
	function fileOpen(src) {
		if (window.jj && jj.native && jj.native.exe) window.jj.native.exe(src);
		else window.open(src, '_blank');
	}

})();