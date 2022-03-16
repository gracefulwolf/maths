
(function () {

	let pathData = (window.jj) ? '/resource/data/' : '../../data/';
	let pathInclude = (window.jj) ? '/resource/include/' : '../../include/';
	let pathApps = pathInclude + 'apps/';

	let grade = "";
	let lessonMax = null;
	let lessonData = [];

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


	$(function(){
		lessonMax = $(".content-body > .lesson").length;
		grade = "grade-" + archiveData.grade + "-" + archiveData.term;
		$("body").addClass(grade);

		// archiveData로 버튼 만들기
		makeBtns();

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
		};

		// 단원 버튼
		$(".btns-lesson .btn-lesson").on(touchstart, function(e){
			var idx = $(this).index();
			changeLesson(idx);
		});

		// 총론 버튼
		$(".btn-outline").on(touchend, function(){
			var src = pathData + archiveData.outline[0].src;
			var type = archiveData.outline[0].type;
			gojjLink(type, src);
		});

		// 추가 자료 출처 버튼
		$(".btn-source").on(touchend, function(){
			var src = pathData + archiveData.source[0].src;
			var type = archiveData.source[0].type;
			gojjLink(type, src);
		});

		// 닫기 버튼
		$(".btn-close").on(touchend, function(){
			window.history.back();
		});

		changeLesson(0);
		document.querySelector('.content-container').classList.add('loaded');

	});

	function makeBtns() 
	{
		$(".content-body > .lesson").empty();
		$(".content-body > .lesson").each(function(i){
			var lesson = $(this);
			var data = archiveData.lesson[i];
			for(var j = 0; j < data.length; j++)
			{
				var part = $('<div class="btns-part">');
				part.addClass("part-0"+(j+1));
				lesson.append(part);

				var data_part = data[j];
				for(var k = 0; k < data_part.length; k++)
				{
					var data_btn = data_part[k];

					var btn = $('<div class="btn"></div>');
					if(j >= 5) btn.addClass("btn-box");
					else	   btn.addClass("btn-block");

					btn.addClass("line-"+data_btn.line);

					var src = data_btn.src;
					var type = data_btn.type;
					btn.data("src", src);
					btn.data("type", type);	
					btn.on(touchend, function(e){
						var src = pathData + $(this).data("src");
						var type = $(this).data("type");
						gojjLink(type, src);
					});

					part.append(btn);
				}
			}
		});
	}

	function changeLesson(idx)
	{
		$("#bg-lesson").removeClass();
		$(".btns-lesson .btn-lesson").removeClass("active");
		$(".content-body > .lesson").removeClass("active");

		var lesson = "lesson0"+(idx+1);
		$("#bg-lesson").addClass(lesson);

		$(".btns-lesson .btn-lesson").eq(idx).addClass("active");
		$(".content-body > .lesson").eq(idx).addClass("active");
	}

	// 뷰어 링크
	function gojjLink(type, src) {
		console.log(type, src);
		switch(type) {
			case 'download': 
				fileDownload(src);
				break;
			case 'open': 
				fileOpen(src);
				break;
			case 'folder': 
				folderOpen(src);
				break;
			case 'select': 
				// selectPopup.open(src);
				break;
		}
	}

	function folderOpen(src) {
		if (window.jj && jj.native && jj.native.explorer) window.jj.native.explorer(src);
		else window.open(src, '_blank');
	}

	function fileOpen(src) {
		if (window.jj && jj.native && jj.native.exe) window.jj.native.exe(src);
		else window.open(src, '_blank');
	}

	function fileDownload(src) {
		if (window.jj && jj.native && jj.native.download) window.jj.native.download(src);
		else window.open(src, '_blank');
	}

})();

// 디버그 모드
function debugOn() {
	if($("body").hasClass("debug")) $("body").removeClass("debug");
	else 							$("body").addClass("debug");
}