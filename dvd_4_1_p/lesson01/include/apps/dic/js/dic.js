$(function ()
{
	$("*[data-ui='app-dic']").each(function ( i )
	{
		var option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).appDic(option);
	});
});

/*
* AppDic :: 
* ver 1.1 :: 단어 포함 검색 버전
*/
(function ($){
	'use strict';

	var AppDic = AppDic || (function ()
	{
        var instance;
        var view_type = "dic";
        var dic_type_idx = 0;
        var card_type_idx = 0;
        var card_count_idx = 1;
        var card_max = 1;
        var all_list = [];
        var choice_list = [];
        var page_list = [];
        var page_current = 1;
        var card_page_current = 1;
        var page_total = 1;
        var img_path = "./images/img/";
        var img_src = "";
        
		function initFn () {
            var owner = this;

            // 용어 사전 단원 제목 셋팅
            $(".select-box-cont.lesson .list-box li").each(function(i){
                var title = dicData.part[i].title;
                $(this).find(".title").html(title);
            });

			// 선택 박스 공통
			$(".select-box .select").on("click", function(){
                GlobalAudio.play("button");

				var selectBox = $(this).parents(".select-box");

				$(".select-cont .select-box").not(selectBox).removeClass("open");
				if(selectBox.hasClass("open"))
				{
					selectBox.removeClass("open");
				}
				else
				{
					selectBox.addClass("open");
				}
            });

			// 선택 박스 공통
			$(".select-box .list-box li").on("click", function(e){
                var type = ($(this).parents(".select-box-cont").hasClass("lesson")) ? "lesson" : "spelling";
                var idx = $(this).index();
                var all = ($(this).hasClass("all")) ? true : false;
                setList.call(instance, {type:type, target:$(this), idx:idx, all:all});
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
            
            // 모바일 아닌 기기에서만 모든 버튼 hover 기능 적용. 
            if(!isMobile)
            {
                $("*[class*='btn']").each(function(i){
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

            // $("*[class*='btn']").on("click", function(){
            //     GlobalAudio.play("button");
            // });

            // 용어 사전, 낱말 카드 전환 버튼
            this.element.find(".header .btns > .btn").on("click", function(){
                GlobalAudio.play("button");
                var type = ($(this).hasClass("dic")) ? "dic" : "card";
                var str = $(this).find("> span").text();
                changeView.call(instance, {type:type, str:str});
            });

            // 검색 기능
            this.element.find(".search input").attr("autocomplete", "off");
            this.element.find(".search input").attr("spellcheck", false);

            this.element.find(".search input").on("focusin", function(e){
                var container = $(this).parents(".container");
                container.addClass("focus");
            });
            this.element.find(".search input").on("focusout", function(e){
                var container = $(this).parents(".container");
                container.removeClass("focus");
            });
            this.element.find(".search input").on("keydown", function(e){
                if(e.keyCode == 13)
                {
                    var str = $(this).val();
                    searchWord.call(instance, str);
                }
            });
            this.element.find(".search .ico").on("click", function(e){
                var str = instance.element.find(".search input").val();
                searchWord.call(instance, str);
            });

            // 이미지 확대 기능
            this.element.find(".view-dic .img-box > .btn-zoom").on("click", function(){
                // console.log("zoom image");
            });

            // 용어 사전 확대 기능
            this.element.find(".view-dic #btn-zoomin").on("click", function(){
                GlobalAudio.play("button");
                if(!$(this).hasClass("active"))
                {
                    $(this).addClass("active");
                    zoomin.call(instance);
                }
                else
                {
                    $(this).removeClass("active");
                    zoomout.call(instance);
                }
            });

            // 용어 사전 보기 설정 기능
            $(".popup-dic-setting .option .item").on("click", function(){
                GlobalAudio.play("button");
                $(this).siblings().removeClass("active");
                $(this).addClass("active");
                dic_type_idx = $(this).index();
            });
            $(".popup-dic-setting").on("POPUP_CLOSE", function(){
                viewDicSetting.call(instance);
            });

            // 낱말 카드 보기 설정 기능
            $(".popup-card-setting .option .item").on("click", function(){
                GlobalAudio.play("button");
                $(this).siblings().removeClass("active");
                $(this).addClass("active");
                if($(this).parents(".option").hasClass("check"))
                {
                    card_type_idx = $(this).index();
                }
                else
                {
                    card_count_idx = $(this).index();
                }
            });
            $(".popup-card-setting").on("POPUP_CLOSE", function(){
                viewCardSetting.call(instance);
            });
            
            // 페이지 기능
            this.element.find(".pager-cont .btn-prev").on("click", function(){
                movePage.call(instance, -1);
            });
            this.element.find(".pager-cont .btn-next").on("click", function(){
                movePage.call(instance, 1);
            });

            this.element.find(".btn-choice-all").on("click", function(){
                if(!$(this).hasClass("active"))
                {
                    choiceListAll.call(instance, "all");
                }
                else
                {
                    choiceListAll.call(instance, "one");
                }
            });

            // 인쇄 기능
            this.element.find(".view-card .btn.print").on("click", function(){
                window.onbeforeprint = function() {
                    $("body").addClass("print");
                }
                window.onafterprint = function() {
                    $("body").removeClass("print");
                }
                window.print();
            });

            // 데이터 정리
            for(var i = 0; i < dicData.part.length; i++)
            {
                var lessonData = dicData.part[i].list;
                for(var j = 0; j < lessonData.length; j++)
                {
                    var obj = lessonData[j];
                    obj.part = i;
                    all_list.push(obj);
                }
            }
            // 순차 정렬
            all_list.sort(function(a, b){
                return(a.word < b.word) ? -1 : (a.word > b.word) ? 1 : 0;
            });


            // 디폴트 셋팅
            // setList.call(instance, {all:true});
            setList.call(instance, {type:"lesson", target:$(".select-box-cont.lesson .select-box .list-box li").eq(0), idx:0, all:false});
            // 카드 6장으로 셋팅
            viewCardSetting.call(instance);
        }

        function searchWord(str)
        {  
            var str1 = $.trim(str);

            if(str1 == "")
            {
                // alert("검색어를 입력해 주세요.")
                return;
            }

            var dummy_list = [];

            // ------------------------------ 1. 단어 포함 검색
            if(this.options.searchType == "word")
            {
                var strList = str1.split(" ");
                var seart_word_list = [];
    
                for(var i = 0; i < strList.length; i++)
                {
                    str1 = strList[i];
    
                    for(var j = 0; j < all_list.length; j++) 
                    {
                        var obj = all_list[j];
                        var word = obj.word;
                        var bool = word.match(str1);
                        var bool2 = seart_word_list.indexOf(word);
                        if(bool && bool2 < 0) 
                        {
                            dummy_list.push(obj);
                            seart_word_list.push(word);
                        }
                    }
                }
            }

            // ------------------------------------  2. 초성 검색
            else if(this.options.searchType == "spell")
            {
                var strArr = str1.split("");
                var strSpellArr = [];
    
                for(var i = 0; i < strArr.length; i++)
                {
                    var arr = getSpell(strArr[i]);
                    strSpellArr.push(arr);
                }
    
                for(var i = 0; i < all_list.length; i++) 
                {
                    var obj = all_list[i];
                    var word = obj.word;
                    var bool = matchWord(strSpellArr, word);
                    if(bool) dummy_list.push(obj);
                }
            }

            // 순차 정렬
            dummy_list.sort(function(a, b){
                return(a.word < b.word) ? -1 : (a.word > b.word) ? 1 : 0;
            });

            setList.call(instance, {type:"search", list:dummy_list});
        }

        function setList(data) {
            var dummy_list = [];

            if(!data) return;

            // 단원별 보기
            if(data.type == "lesson")
            {
                for(var i = 0; i < all_list.length; i++) 
                {
                    var obj = all_list[i];
                    if(obj.part == data.idx)
                    {
                        dummy_list.push(obj);
                    }
                }

                if(dummy_list.length > 0)
                {
                    var html = data.target.find(".text").html();
                    var selectBox = data.target.parents(".select-box");
                    selectBox.removeClass("open");
                    selectBox.find(".select .text").html(html);
                    selectBox.find(".select .text").removeClass("all");

                    this.element.find(".select-box-cont.spelling .select > .text").text("ㄱㄴㄷ");
                    this.element.find(".select-box-cont.spelling .select > .text").removeClass("fs-1");
                    this.element.find(".select-box-cont.spelling .select > .text").addClass("all");

                    this.element.find(".select-box-cont.lesson .select-box").attr("select", "on");
                    this.element.find(".select-box-cont.spelling .select-box").attr("select", "");
                }
            }
            
            // 자음 선택
            if(data.type == "spelling")
            {
                console.log("자음 선택" + spell);
                var spell = data.target.text();

                for(var i = 0; i < all_list.length; i++) 
                {
                    var obj = all_list[i];
                    var word = obj.word;

                    var bool = matchCho(spell, word);
                    if(bool) dummy_list.push(obj);
                }

                // lesson select box reset
                if(dummy_list.length > 0)
                {
                    var html = data.target.html();
                    var selectBox = data.target.parents(".select-box");
                    
                    selectBox.removeClass("open");
                    selectBox.find(".select .text").html(html);
                    // selectBox.find(".select .text").removeClass("all");
                    this.element.find(".select-box-cont.spelling .select > .text").removeClass("fs-1");

                    this.element.find(".select-box-cont.lesson .select-box").attr("select", "");
                    this.element.find(".select-box-cont.lesson .select > .text").text("단원별 보기");
                    this.element.find(".select-box-cont.lesson .select > .text").addClass("all");

                    this.element.find(".select-box-cont.lesson .select-box").attr("select", "");
                    this.element.find(".select-box-cont.spelling .select-box").attr("select", "on");
                }
            }

            // 검색
            if(data.type == "search")
            {
                dummy_list = data.list;

                if(dummy_list.length > 0)
                {
                    this.element.find(".select-box-cont.spelling .select > .text").text("ㄱㄴㄷ");
                    this.element.find(".select-box-cont.spelling .select > .text").removeClass("fs-1");
                    this.element.find(".select-box-cont.lesson .select > .text").text("단원별 보기");
                    this.element.find(".select-box-cont.lesson .select > .text").addClass("all");

                    this.element.find(".select-box-cont.lesson .select-box").attr("select", "");
                    this.element.find(".select-box-cont.spelling .select-box").attr("select", "");
                }

                this.element.find(".select-box-cont .select-box").removeClass("open");
            }

            // 전체 선택
            if(data.all == true)
            {
                for(var i = 0; i < all_list.length; i++) 
                {
                    dummy_list.push(all_list[i]);
                }
                this.element.find(".select-box-cont.spelling .select > .text").text("전체");
                this.element.find(".select-box-cont.spelling .select > .text").addClass("fs-1");
                this.element.find(".select-box-cont.lesson .select > .text").text("단원별 보기");
                this.element.find(".select-box-cont.lesson .select > .text").addClass("all");

                this.element.find(".select-box-cont.lesson .select-box").attr("select", "");
                this.element.find(".select-box-cont.spelling .select-box").attr("select", "on");

                this.element.find(".select-box-cont .select-box").removeClass("open");
            }

            if(dummy_list.length < 1) 
            {
                // alert("목록이 찾을 수 없습니다.");
                // showAlert();
                $(".popup-alert").data("instance").open();
                return;
            }

            this.element.find(".choice-list-box .list").empty();
            for(var i = 0; i < dummy_list.length; i++) 
            {
                var obj = dummy_list[i];
                choice_list.push(obj);

                var li = $('<li class="btn-choice box">');
                var cb = $('<span class="check-box"></span>');
                var tb = $('<span class="text-box"></span>');
                tb.html(obj.word);
                li.append(cb).append(tb);
                this.element.find(".choice-list-box .list").append(li);

                li.data("obj", obj);
                li.off("click").on("click", function(){
                    var obj = $(this).data("obj");
                    choiceList.call(instance, $(this));
                });
            }

            choice_list = [];
            choiceList.call(instance, this.element.find(".choice-list-box .list > li").eq(0));
            
            /**
             * <li class="btn-choice box active">
                    <span class="check-box"></span>
                    <span class="text-box">등고선</span>
                </li>
             */
        }

        function choiceListAll(type) {
            page_list = [];

            switch(type)
            {
                case "all":
                    this.element.find(".choice-list-box .list > li").each(function(i){
                        $(this).addClass("active");
                        page_list.push($(this).data("obj"));
                    });
                break;

                case "one":
                    this.element.find(".choice-list-box .list > li").removeClass("active");
                    this.element.find(".choice-list-box .list > li").eq(0).each(function(i){
                        $(this).addClass("active");
                        page_list.push($(this).data("obj"));
                    });
                break;
            }
            
            page_total = page_list.length;
            movePage.call(this, 0);
        }

        function choiceList(li) {
            var add = 0;

            if(!li.hasClass("active"))
            {
                li.addClass("active");
                add = 1;
            }
            else
            {
                if(this.element.find(".choice-list-box .list > li.active").length == 1) return;
                li.removeClass("active");
            }
        
            page_list = [];
            this.element.find(".choice-list-box .list > li").each(function(i){
                if($(this).hasClass("active"))
                {
                    page_list.push($(this).data("obj"));
                }
            });

            page_total = page_list.length;
            movePage.call(this, 0);
        }

        function movePage(add)
        {
            if(this.element.find(".choice-list-box .list > li").length == page_total)
            {
                this.element.find(".btn-choice-all").addClass("active");
            }
            else
            {
                this.element.find(".btn-choice-all").removeClass("active");
            }
            page_current = page_current + add;
            page_current = (page_current > page_total) ? page_total : page_current;
            page_current = (page_current < 1) ? 1 : page_current;
            if(add == 0) page_current = 1;

            var word = page_list[page_current-1].word;
            var mean = page_list[page_current-1].mean;

            // --- view에 따른 처리
            if(view_type == "dic")
            {
                this.element.find(".view-dic").find(".pager-cont .num-total").html(page_total);
                this.element.find(".view-dic").find(".pager-cont .num-current").html(page_current);
                this.element.find(".view-dic").find(".view-cont .word > span").html(word);
                this.element.find(".view-dic").find(".view-cont .mean > span").html(mean);

                img_src = "";
                if(page_list[page_current-1].has_image) img_src = img_path + page_list[page_current-1].filename + ".png";
                
                this.element.find(".view-dic").find(".view-cont .img-box > img").attr("src", img_src);
                $(".popup-image-zoom").find(".cont-box > img").attr("src", img_src);
                if(img_src) 
                {
                    console.log("image:", img_src);
                    this.element.find(".view-dic").find(".view-cont").addClass("has-image");
                }
                else
                {
                    this.element.find(".view-dic").find(".view-cont").removeClass("has-image");
                }
            }

            // --- view에 따른 처리
            if(view_type == "card")
            {
                var card_page_total = Math.ceil(page_total / card_max);

                card_page_current = card_page_current + add;
                card_page_current = (card_page_current > card_page_total) ? card_page_total : card_page_current;
                card_page_current = (card_page_current < 1) ? 1 : card_page_current;
                if(add == 0) card_page_current = 1;
                
                var word_idx = ((card_page_current-1) * card_max);

                this.element.find(".view-card").find(".pager-cont .num-total").html(card_page_total);
                this.element.find(".view-card").find(".pager-cont .num-current").html(card_page_current);

                for(var i = 0; i < card_max; i++)
                {
                    if(word_idx+i < page_list.length)
                    {
                        word = page_list[word_idx+i].word;
                        mean = page_list[word_idx+i].mean;
                        this.element.find(".view-card").find(".view-cont .card").eq(i).find(".word > span").html(word);
                        this.element.find(".view-card").find(".view-cont .card").eq(i).find(".mean > span").html(mean);
                    }
                    else
                    {
                        this.element.find(".view-card").find(".view-cont .card").eq(i).find(".word > span").html("");
                        this.element.find(".view-card").find(".view-cont .card").eq(i).find(".mean > span").html("");
                    }
                }
            }
        }

        function viewDicSetting() {
            this.element.find(".view-dic .box").removeClass("checked");
            
            if(dic_type_idx == 1) this.element.find(".view-dic .mean.box").addClass("checked");
            if(dic_type_idx == 2) this.element.find(".view-dic .word.box").addClass("checked");
        }

        function viewCardSetting() {
            this.element.find(".view-card .box").removeClass("checked");
            
            if(card_type_idx == 1) this.element.find(".view-card .mean.box").addClass("checked");
            if(card_type_idx == 2) this.element.find(".view-card .word.box").addClass("checked");

            this.element.find(".view-card .view-cont").removeClass("type-2 type-3");

            var target_card_max = 1;
            if(card_count_idx == 1) 
            {
                target_card_max = 4;
                this.element.find(".view-card .view-cont").addClass("type-2");
            }
            if(card_count_idx == 2) 
            {
                target_card_max = 6;
                this.element.find(".view-card .view-cont").addClass("type-3");
            }

            this.element.find(".view-card .view-cont .card").hide();
            this.element.find(".view-card .view-cont .card").each(function(i){
                if(i < target_card_max) $(this).show();
            });
            if(card_max != target_card_max)
            {
                card_max = target_card_max;
                movePage.call(this, 0);
            }
        }

        function zoomin() {
            $("body").addClass("zoomin");
        }

        function zoomout() {
            $("body").removeClass("zoomin");
        }

        function changeView(data) {
            var nowType = (this.element.hasClass("dic")) ? "dic" : "card";
            if(nowType != data.type)
            {
                console.log("change", data.type, data.str);
                view_type = data.type;
                this.element.removeClass("dic card");
                this.element.addClass(data.type);
                this.element.find(".header .title .text > span").text(data.str);

                this.element.find(".viewer > .view").removeClass("active");
                this.element.find(".viewer > .view-"+data.type).addClass("active");

                this.element.find(".header .btns > .btn").removeClass("active");
                this.element.find(".header .btns > .btn."+data.type).addClass("active");

                // setList.call(instance, {all:true});
                movePage.call(instance, 0);
            }
        }

        return Class.extend({
            init : function (element, options) {
                instance = this;
                this.element = element;
                this.options = options;

                console.log(this.options.searchType);
                
                initFn.call(this);
            },
            start : function (){},
            reset : function (){
            },
            dispose : function (){
                // this.element.removeClass("start active finish");
            }
        });

    })();

    // 기본 옵션
    /**
     * searchType : "word", "spell"
     */
	AppDic.DEFAULT = {width:1280, height:720, searchType:"word"};

    function Plugin(option, params)
    {
        return this.each(function ()
        {
            var $this = $(this);
            var data = $this.data('ui.appDic');
            var options =  $.extend({}, AppDic.DEFAULT, typeof option == "object" && option);
            if (!data) $this.data('ui.appDic', (data = new AppDic($this, options)));
			if (typeof option == 'string') data[option](params);
			$this.data('instance', data);
        });
    }

	$.fn.appDic = Plugin;
    $.fn.appDic.Constructor = AppDic;

})(jQuery);

// 초성 검색 
var rCho = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
var rJung = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];
var rJong = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

var rJaeum = ["ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄸ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅃ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

function getSpell(word) {
    var arr = [];

    var code = word.charCodeAt(0);
    // console.log("code:", code);
    // 자음만 있는 문자
    if(code >= 12593 && code <= 12622)
    {
        console.log("자음만 있는 한글 문자");
        var nTmp=word.charCodeAt(0) - 12593;
        var jaeum = nTmp;
        arr.push(rJaeum[jaeum]);
        return arr;
    }
    // 한글 문자 
    if(code >= 44032 && code <= 55203)
    {
        var nTmp=word.charCodeAt(0) - 0xAC00;
        var jong=nTmp % 28; // 종성
        var jung=( (nTmp-jong)/28 ) % 21; // 중성
        var cho=( ( (nTmp-jong)/28 ) - jung ) / 21; // 종성

        arr.push(rCho[cho]);
        arr.push(rJung[jung]);
        arr.push(rJong[jong]);

        return arr;
    }

    return ["a","a","a"];
}

function matchCho(spell, word) {
    var bool = false;

    var nTmp=word.charCodeAt(0) - 0xAC00;
    var jong=nTmp % 28; // 종성
    var jung=( (nTmp-jong)/28 ) % 21; // 중성
    var cho=( ( (nTmp-jong)/28 ) - jung ) / 21; // 종성

    if(spell == rCho[cho]) bool = true;
    
    // console.log(
    // "단어:"+word+" "
    // +"초성:"+rCho[cho]+" "
    // +"중성:"+rJung[jung]+" "
    // +"종성:"+rJong[jong]
    // );

    return bool;
}
function matchSpell(spell, word) {
    var bool = false;

    var total = spell.length;
    var count = 0;
    for(var i = 0; i < spell.length; i++)
    {
        if(i == 2 && spell[i] == "") 
        {
            count++;
            continue;
        }
        // console.log(spell[i], word[i]);
        if(spell[i] == word[i]) count++;
    }
    if(count == total) bool = true;

    return bool;
}

function matchWord(strSpellArr, word) {
    var bool = false;
    var total = strSpellArr.length;
    var count = 0;

    var wordArr = word.split("");
    var wordSpellArr = [];
    for(var i = 0; i < wordArr.length; i++)
    {
        var arr = getSpell(wordArr[i]);
        wordSpellArr.push(arr);
    }

    for(var i = 0; i < strSpellArr.length; i++)
    {
        if(!wordSpellArr[i]) continue;

        var right = matchSpell(strSpellArr[i], wordSpellArr[i]);
        if(right) count++;
    }

    // console.log(">>", count, "/", total);
    if(count == total) bool = true;
    // if(bool) console.log(count, total, word, strSpellArr);

    return bool;
}