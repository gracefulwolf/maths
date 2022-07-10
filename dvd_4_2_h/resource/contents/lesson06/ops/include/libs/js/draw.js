var isMobile;
var downEvent, moveEvent, upEvent, clickEvent, overEvent, outEvent;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ) {
    isMobile = true;
    downEvent = "touchstart";
    moveEvent = "touchmove";
    overEvent = "touchstart";
    outEvent = "touchend";
    upEvent = "touchend";
    clickEvent = "click";
}else {
    isMobile = false;
    downEvent = "mousedown";
    moveEvent = "mousemove";
    overEvent = "mouseover";
    outEvent = "mouseout";
    upEvent = "mouseup";
    clickEvent = "click";
};

var drawClear;
var closeDraw;
var ctxIndex = 0;
$(function(){
    var drawHTML = '<div class="pen_tool">';
    drawHTML += '<div class="move_tool"></div>';
    drawHTML += '<div class="eraser_tool"></div>';
    drawHTML += '<div class="allEraser_tool"></div>';
    drawHTML += '<div class="color_tool"></div>';
    drawHTML += '<div class="width_tool select" data-width="5"></div>';
    drawHTML += '<div class="width_tool" data-width="10"></div>';
    drawHTML += '<div class="width_tool" data-width="15"></div>';
    drawHTML += '<div class="close_tool"></div>';

    drawHTML += '<div class="color_palette">';
    drawHTML += '<div data-color="#ffffff"></div>';
    drawHTML += '<div data-color="#adaea9"></div>';
    drawHTML += '<div data-color="#858489"></div>';
    drawHTML += '<div data-color="#5c5d58"></div>';
    drawHTML += '<div data-color="#000000"></div>';

    drawHTML += '<div data-color="#fff800"></div>';
    drawHTML += '<div data-color="#f9bd00"></div>';
    drawHTML += '<div data-color="#fd8200"></div>';
    drawHTML += '<div data-color="#fe3e00"></div>';
    drawHTML += '<div class="select" data-color="#fd0000"></div>';

    drawHTML += '<div data-color="#96cf00"></div>';
    drawHTML += '<div data-color="#69cc00"></div>';
    drawHTML += '<div data-color="#019802"></div>';
    drawHTML += '<div data-color="#007c00"></div>';
    drawHTML += '<div data-color="#034f00"></div>;'

    drawHTML += '<div data-color="#3E73D9"></div>';
    drawHTML += '<div data-color="#0AC1F1"></div>';
    drawHTML += '<div data-color="#0E5AEF"></div>';
    drawHTML += '<div data-color="#0B1A7D"></div>';
    drawHTML += '<div data-color="#100645"></div>';
    drawHTML += '</div>';
    drawHTML += '</div>';
    // drawBtn 수에 맞춰서 자동으로 html 뿌려지는 코드

    $('.drawBtn').each(function(idx){
        var parents = $(this).attr('data-parent');
        $('.' + parents).append(drawHTML);
            ctxIndex = idx;
        $(this).on('click', function(){
            $('.pen_tool').eq(idx).show();
        });
    }); // 그리기 버튼 클릭시 펜툴 show
    
    $('.pen_tool .move_tool').each(function(){
        $(this).on(downEvent, function(e){
            var parent = $(this).parent();
            var x = (isMobile ? e.touches[0].pageX : e.pageX) - $(parent).offset().left;
            var y = (isMobile ? e.touches[0].pageY : e.pageY) - $(parent).offset().top;
            $(document).on(moveEvent, function(e){
                var moveX = (isMobile ? e.touches[0].pageX : e.pageX) - $(parent).parent().offset().left - x;
                var moveY = (isMobile ? e.touches[0].pageY : e.pageY) - $(parent).parent().offset().top - y;
                var limitX = parseInt($(parent).parent().css('width')) - parseInt($(parent).css('width'));
                var limitY = parseInt($(parent).parent().css('height')) - parseInt($(parent).css('height'));

                if( moveX > limitX ) moveX = limitX;
                if( moveX < 0 ) moveX = 0;
                if( moveY > limitY ) moveY = limitY;
                if( moveY < 0 ) moveY = 0;

                $(parent).css('left', moveX);
                $(parent).css('top', moveY);
            });

            $(document).on(upEvent, function() {
                $(document).off(upEvent);
                $(document).off(moveEvent);
            });
        });
    }); // 그리기 툴 이동

    $('.drawClear').each(function(idx){
        $(this).on('click', function(){
            drawClear(idx);
        });
    }); // 지우기

    var basicColor = '#fd0000';
    $('.pen_tool').each(function(idx){
        $(this).find('.width_tool').on('click', function(){
            var width = $(this).attr('data-width');
            $('.pen_tool').eq(idx).find('.width_tool').removeClass('select');
            $(this).addClass('select');

            $('.pen_tool').eq(idx).find('.eraser_tool').removeClass('select');
            
            ctx[idx].lineWidth = width;
            mode = "pen";
        }); // 선 두께

        $(this).find('.color_palette > div').on('click', function(){
            var color = $(this).attr('data-color');
            $('.pen_tool').eq(idx).find('.color_palette > div').removeClass('select');
            $(this).addClass('select');

            $('.pen_tool').eq(idx).find('.eraser_tool').removeClass('select');

            ctx[idx].strokeStyle = color;
            if( mode == "eraser" ){
                ctx[idx].lineWidth = 5;
                $('.pen_tool').eq(idx).find('.width_tool').removeClass('select');
                $('.pen_tool').eq(idx).find('.width_tool').eq(0).addClass('select');
                mode = "pen";
            }

            $('.color_tool').eq(idx).css('background-color', color);
            $(this).parent().hide();
        }); // 컬러

        $(this).find('.close_tool').on('click', function(){
            $('.pen_tool').eq(idx).hide();
        }); // 선 두께

        $(this).find('.color_tool').on('click', function(){
            if( $('.pen_tool .color_palette').eq(idx).is(':visible') ){
                $('.pen_tool .color_palette').eq(idx).hide();
            } else {
                $('.pen_tool .color_palette').eq(idx).show();
            };
        }); // 선 두께

        $(this).find('.eraser_tool').on('click', function(){
            mode = "eraser";
            $(this).addClass('select');
            $('.pen_tool').eq(idx).find('.width_tool').removeClass('select');
        }); // 지우개 클릭

        $(this).find('.allEraser_tool').on('click', function(){
            drawClear(idx);
            if( mode == "eraser" ){
                ctx[idx].lineWidth = 5;
                $('.pen_tool').eq(idx).find('.eraser_tool').removeClass('select');
                $('.pen_tool').eq(idx).find('.width_tool').removeClass('select');
                $('.pen_tool').eq(idx).find('.width_tool').eq(0).addClass('select');
                mode = "pen";
            };
        }); // 전체 지우기 클릭
    }); // 펜툴 안에 버튼


    /* 버튼 클릭시 초기화 */
   /*  $('.leftBtn').on('click', function(){
        closeDraw();
    });
    $('.leftBtn2').on('click', function(){
        closeDraw();
    });
    $('.rightBtn').on('click', function(){
        closeDraw();
    });
    $('.rightBtn2').on('click', function(){
        closeDraw();
    });
    $('.slideDot').on('click', function(){
        closeDraw();
    });
    $('.GOPAGE').on('click', function(){
        closeDraw();
    });
    $("li.tab-nav").on('click', function(){ 
        closeDraw();
    });  */
    closeDraw = function() {
        mode = "pen";
        $('.pen_tool').hide();
        $('.pen_tool').find('.eraser_tool').removeClass('select');
        $('.pen_tool').find('.width_tool').removeClass('select');
        $('.pen_tool').find('.width_tool[data-width=1]').addClass('select');
        
        $('.color_tool').css('background-color', basicColor);
        $('.pen_tool').find('.color_palette > div').removeClass('select')
        $('.pen_tool').find('.color_palette > div').each(function(){
            if( $(this).attr('data-color') == basicColor )
            $(this).addClass('select');
        });

        for(var i = 0; i < canvasLength; i++){
            ctx[i].lineWidth = 5;
            ctx[i].strokeStyle = basicColor;
        };
    }; // 슬라이드 이동 시 초기화
    /* 버튼 클릭시 초기화 */


    var canvasLength =  $('canvas[id*="draw"]').length;
    var canvas = [];
    var ctx = [];

    var isDown = false;
    var strokeWidth = 5;
    var mode = "pen";

    var canvasX, canvasY;
    var isDrawing = false, lastX = 0, lastY = 0;

    for(var i = 0; i < canvasLength; i++ ){
        canvas[i] = document.getElementById("draw" + i);
        ctx[i] = canvas[i].getContext("2d");

        ctx[i].strokeStyle = basicColor;
        ctx[i].lineCap = "round";
        ctx[i].lineJoin = "round";

        ctx[i].lineWidth = strokeWidth;

        canvas[i].addEventListener(downEvent, function(e) {
            canvasX = -($(this).offset().left);
            canvasY = -($(this).offset().top);
            lastX = (canvasX + (isMobile ? e.touches[0].pageX : e.pageX));
            lastY = (canvasY + (isMobile ? e.touches[0].pageY : e.pageY));

            isDrawing = true;
            isDown = true;
            $(document).on(upEvent, function() {
                isDrawing = false; 
                isDown = false;
                $(document).off(upEvent);
            });
        });
    }; // 여러 캔버스 넣기

    function draw(e){
        if(isDown){
            ctx[ctxIndex].globalCompositeOperation = "source-over";
            ctx[ctxIndex].beginPath();
            if(mode == "pen"){
                if (!isDrawing) return;
                ctx[ctxIndex].moveTo(lastX, lastY);
                ctx[ctxIndex].lineTo((canvasX + (isMobile ? e.touches[0].pageX : e.pageX)), (canvasY + (isMobile ? e.touches[0].pageY : e.pageY)));
                ctx[ctxIndex].stroke();           
            } else {
                ctx[ctxIndex].globalCompositeOperation="destination-out";
                ctx[ctxIndex].lineWidth = 30;
                ctx[ctxIndex].moveTo(lastX, lastY);
                ctx[ctxIndex].lineTo((canvasX + (isMobile ? e.touches[0].pageX : e.pageX)), (canvasY + (isMobile ? e.touches[0].pageY : e.pageY)));
                ctx[ctxIndex].stroke(); 
            };
        };
        lastX = (canvasX + (isMobile ? e.touches[0].pageX : e.pageX));
        lastY = (canvasY + (isMobile ? e.touches[0].pageY : e.pageY));
    };
    
    //마우스 그리기 시작
    document.addEventListener(moveEvent, draw);

    drawClear = function(idx){
        isDown = false;
        ctx[idx].clearRect(0, 0, canvas[idx].width, canvas[idx].height);
    };    
}); // end