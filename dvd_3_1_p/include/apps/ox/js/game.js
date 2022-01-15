(function ( $ ) {
    'use strict';

    var lessonNum = 1;
    var timer;
    var timer2;
    var counter;
    var randomAr;
    var quizLength = 10;
    var quizCount = 0;
    var targetQuiz = null;

    var introAudio = new AudioControl("./audio/intro.mp3");
    var correctAudio = new AudioControl("./audio/correct.mp3");
    var clockAudio = new AudioControl("./audio/clock.mp3");
    var popupAudio = new AudioControl("./audio/popup.mp3");
    var bgmAudio = new AudioControl("./audio/bgm.mp3", {onFinish: function (){
        bgmAudio.play();
    }});
    var resultAudio = new AudioControl("./audio/result.mp3");



    window.initGame = function () {
        $("#intro").show();
        startIntro();

        counter = new CounterUtils();

    }

    function startIntro() {
        $(".section").hide().css({"z-index": ""});
        $("#intro").show();
        $("#intro .intro-ani").sequence("gotoAndPlay", 0);

        exportRoot.intro.play();
        introAudio.play();

        gsap.from($("#intro .lesson-con"), 0.6, {delay: 1, y:-20, opacity:0, ease:Cubic.easeOut});
        gsap.from($("#intro .start-btn > span"), 0.6, {delay: 1.5, scaleX:0.5, scaleY:0.5, opacity:0, ease:Back.easeOut});
        gsap.from($("#intro .guide-btn"), 0.6, {delay: 1.7, opacity:0});

        $("#intro .lesson-btn").on(click, function ( e ) {
            $("#intro .lesson-btn").removeClass("active");
            $(this).addClass("active");
        });

        $("#intro .start-btn").on(click, function ( e ) {
            lessonNum = $("#intro .lesson-btn.active").index()+1;
            startGame();
        });

        $("#intro .guide-btn").on(click, function ( e ) {
            $("#intro .guide-pop").show();
            gsap.set($("#intro .guide-pop .pop-wrap"), {y:-700});
            gsap.to($("#intro .guide-pop .pop-wrap"), 0.6, {delay:0.1, y:0, ease:Cubic.easeOut, onStart:function (){
                popupAudio.play();
            }});
            
        });

        $("#intro .guide-pop .close-btn").on(click, function ( e ) {
            gsap.set($("#intro .guide-pop .pop-wrap"), {y:0});
            gsap.to($("#intro .guide-pop .pop-wrap"), 0.6, {y:-700, ease:Cubic.easeOut, onComplete:function (){
                $("#intro .guide-pop").hide();
            }});
        });
    }


    function startGame() {
        introAudio.stop();
        $(".section").css({"z-index": ""});
        $("#game").fadeIn(400, function (){
            $(".section:not(#game)").hide().css({"z-index": 1});
            exportRoot.intro.gotoAndStop(0);
            startQuiz();
        }).css({"z-index": 9999});

        randomAr = $.makeRandom(quizLength, quizLength);

        $("#game .home-btn").on(click, function ( e ) {
            location.reload();
        });

        $("#game .answer-btn").on(click, function ( e ) {
            endQuiz();
        });

        $("#game .next-btn").on(click, function ( e ) {
            if(quizCount < quizLength) {
                quizCount++;
            }
            $("#game .answer-btn").show();
            $("#game .next-btn").hide();
            startQuiz();
        });

        $("#game .restart-btn").on(click, function ( e ) {
            quizCount = 0;
            $("#game .answer-btn").show();
            $("#game .next-btn").hide();
            clearInterval(timer);
            clearTimeout(timer2);
            clockAudio.stop();
            startQuiz();
        });

        bgmAudio.play();
    }

    function startQuiz () {
        gsap.set($("#game .progress-con .bar"), {x: 0});

        $("#game .time-con > span").text("5");
        $("#game .quiz-set.lesson"+lessonNum).find(".quiz").removeClass("active");
        $("#game .char-con > div").hide();
        $("#game .char-con .default").show();
        $("#game .o-img").hide();
        $("#game .x-img").hide();
        $("#game .page-con .current").text(quizCount+1);

        counter.reset();
        counter.start();
        timer = setInterval(update, 1000/60);
        clockAudio.play();

        $("#game .quiz-set.lesson"+lessonNum).show();
        targetQuiz = $("#game .quiz-set.lesson"+lessonNum).find(".quiz").eq(randomAr[quizCount]);
        // targetQuiz = $("#game .quiz-set.lesson"+lessonNum).find(".quiz").eq(quizCount);
        targetQuiz.addClass("active");
    }

    function update () {
        var time = counter.time() / 1000;
        var percent = time / 15;
        var timeNum = 15-parseInt(time);
        if(parseInt($("#game .time-con > span").text()) != timeNum) {
            $("#game .time-con > span").text(timeNum);
            gsap.set($("#game .time-con > span"), {scaleX:0.5, scaleY:0.5});    
            gsap.to($("#game .time-con > span"), 0.3, {scaleX:1, scaleY:1, ease:Back.easeOut});    
        }
        gsap.set($("#game .progress-con .bar"), {x: -712 * percent});

        if(percent >= 1){
            endQuiz();
        }
    }

    function endQuiz() {

        clearInterval(timer);
        clockAudio.stop();

        $("#game .char-con > div").hide();
        $("#game .answer-btn").hide();

        if(targetQuiz.data("answer") == "o") {
            $("#game .char-con .o").show();
            gsap.to($("#game .char-con .o"), 0.3, {y:-30, ease:Cubic.easeOut});
            gsap.to($("#game .char-con .o"), 0.3, {delay: 0.3, y:0, ease:Cubic.easeIn});

            $("#game .o-img").show();
            gsap.set($("#game .o-img"), {scaleX:0, scaleY:0, opacity:0});    
            gsap.to($("#game .o-img"), 0.6, {delay:0.3, scaleX:1, scaleY:1, opacity:1, ease:Back.easeOut});
        } else {
            $("#game .char-con .x").show();
            gsap.to($("#game .char-con .x"), 0.3, {y:-30, ease:Cubic.easeOut});
            gsap.to($("#game .char-con .x"), 0.3, {delay: 0.3, y:0, ease:Cubic.easeIn});

            $("#game .x-img").show();
            gsap.set($("#game .x-img"), {scaleX:0, scaleY:0, opacity:0});    
            gsap.to($("#game .x-img"), 0.6, {delay:0.3, scaleX:1, scaleY:1, opacity:1, ease:Back.easeOut});
        }

        correctAudio.play();
        
        console.log("quizCount", quizCount);
        timer2 = setTimeout(function () {
            if(quizCount < quizLength-1) {
                $("#game .next-btn").show();   
            } else {
                startResult();
            }
        }, 2000);
    }

    function startResult () {
        exportRoot.intro.gotoAndStop(0);
        $(".section").css({"z-index": ""});
        $("#result").fadeIn(400, function (){
            $(".section:not(#result)").hide();
        }).css({"z-index": 1});

        bgmAudio.stop();
        resultAudio.play();

        
        gsap.from($("#result .result-top"), 0.6, {delay:0.5, scaleX:0.3, scaleY:0.8, opacity:0, ease:Back.easeOut});
        gsap.from($("#result .input-con"), 0.8, {delay:0.8, y:20, opacity:0, ease:Cubic.easeOut});
        gsap.from($("#result .text-con"), 0.8, {delay:1, y:20, opacity:0, ease:Cubic.easeOut});
        gsap.from($("#result .reset-btn > span"), 0.6, {delay:1.5, scaleX:0, scaleY:0, opacity:0, ease:Back.easeOut});

        $("#result .reset-btn").on(click, function ( e ){
            location.reload();
        });

        $("#result .fire1, #result .fire4").sequence({
            source: "./images/sequence/fire1",
            name: "fire1_",
            totalFrames: 70
        }).on("finish", fireFinish).hide();

        $("#result .fire2, #result .fire3").sequence({
            source: "./images/sequence/fire2",
            name: "fire2_",
            totalFrames: 70
        }).on("finish", fireFinish).hide();

        setTimeout(function () {
            $("#result .fire1").sequence("gotoAndPlay", 0).show();
        }, 100);

        setTimeout(function () {
            $("#result .fire2").sequence("gotoAndPlay", 0).show();
        }, 400);

        setTimeout(function () {
            $("#result .fire3").sequence("gotoAndPlay", 0).show();
        }, 1000);

        setTimeout(function () {
            $("#result .fire4").sequence("gotoAndPlay", 0).show();
        }, 1400);
    }

    function fireFinish( e ) {
        var tar = $(this);
        setTimeout(function () {
            tar.sequence("gotoAndPlay", 0);
        },800);
    }

})( jQuery );
