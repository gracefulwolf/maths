(function ( $ ) {
    'use strict';

    var lessonNum = 1;
    var playerNum = 2;
    var quizLength = 12;
    var currentGround = 0;
    var selectGround =[];
    var turnCount;
    var randomAr;
    var chanceNum;
    var modums;
    var timer;
    var counter;
    
    var introAudio = new AudioControl("./audio/intro.mp3");
    var popupAudio = new AudioControl("./audio/popup.mp3");
    var rouletteAudio = new AudioControl("./audio/roulette.mp3");
    var correctAudio = new AudioControl("./audio/correct.mp3");
    var wrongAudio = new AudioControl("./audio/wrong.mp3");
    var clockAudio = new AudioControl("./audio/clock.mp3");
    var chanceAudio = new AudioControl("./audio/chance.mp3");
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

        gsap.from($("#intro .lesson-con, #intro .player-con"), 0.6, {delay: 1, y:-20, opacity:0, ease:Cubic.easeOut});
        gsap.from($("#intro .start-btn > span"), 0.6, {delay: 1.5, scaleX:0.5, scaleY:0.5, opacity:0, ease:Back.easeOut});
        gsap.from($("#intro .guide-btn"), 0.6, {delay: 1.7, opacity:0});

        $("#intro .lesson-btn").on(click, function ( e ) {
            $("#intro .lesson-btn").removeClass("active");
            $(this).addClass("active");
        });

        $("#intro .player-btn").on(click, function ( e ) {
            $("#intro .player-btn").removeClass("active");
            $(this).addClass("active");
        });

        $("#intro .start-btn").on(click, function ( e ) {
            lessonNum = $("#intro .lesson-btn.active").index()+1;
            playerNum = $("#intro .player-btn.active").index()+2;
            startSelectModum();
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

    function startSelectModum() {
        introAudio.stop();
        $(".section").css({"z-index": ""});
        $("#select-modum").fadeIn(400, function (){
            $(".section:not(#select-modum)").hide().css({"z-index": 1});
            exportRoot.intro.gotoAndStop(0);
        }).css({"z-index": 9999});

        //console.log("lessonNum", lessonNum);
        //console.log("playerNum", playerNum);

        $("#select-modum .home-btn").on(click, function ( e ) {
            location.reload();
        });

        $("#select-modum .roulette").addClass("modum"+playerNum);

        $("#select-modum .rotate-btn").one(click, function ( e ) {
            $(this).addClass("disable");
            var randRo = Math.floor(Math.random() * 360);
            var ro = randRo;
            if(ro > 180) ro = ro - 360;
            var startNum = 1;
            switch(playerNum) {
                case 2 : 
                    if(ro < 45 &&  ro > -45)                                    startNum = 1;
                    else if(ro < -45 && ro > -135)                              startNum = 2;
                    else if((ro < -135 && ro > -180) || (ro < 180 && ro > 135)) startNum = 1;
                    else if(ro < 135 && ro > 45)                                startNum = 2;
                break;
                case 3 : 
                    if(ro < 60 &&  ro > -60)                                    startNum = 1;
                    else if(ro < -60 && ro > -180)                              startNum = 2;
                    else if(ro < 180 && ro > 60)                                startNum = 3;
                break;
                case 4 : 
                    if(ro < 45 &&  ro > -45)                                    startNum = 1;
                    else if(ro < -45 && ro > -135)                              startNum = 2;
                    else if((ro < -135 && ro > -180) || (ro < 180 && ro > 135)) startNum = 3;
                    else if(ro < 135 && ro > 45)                                startNum = 4;
                break;
            }
            //console.log("startNum", startNum)
            turnCount = startNum - 1;
            modums = setModums(startNum);
            gsap.to($("#select-modum .roulette"), 3.2, {rotation: (360 * 5) + randRo, force3D:true, onComplete: function (){
                //console.log("modums", modums)
                showSelectPop();
            }});
            rouletteAudio.play();
        });
    }

    function setModums ( start ) {
        var ar = [];
        for(var i=0; i< playerNum; i++) {
            var num = start + i;
            if(num > playerNum) num = num % playerNum;
            ar.push(num)
        }
        return ar;
    }

    function showSelectPop() {
        for(var i=0; i<modums.length; i++) {
            var modum = $('<span class="modum modum'+modums[i]+'"></span>');
            $("#select-modum .select-con").append(modum);
            if(i < modums.length-1) {
                $("#select-modum .select-con").append('<span class="arrow"></span>');
            }
        }
        $("#select-modum .select-pop").delay(300).fadeIn(500);
        setTimeout(function () {
            popupAudio.play();
        }, 300);

        gsap.from($("#select-modum .pop-wrap"), 0.8, {delay: 0.5, opacity:0, scaleX:0.8, scaleY:0.8, ease:Back.easeOut});
        

        $("#select-modum .start-btn").on(click, function ( e ) {
            startGame();
        });
    }
    

    function startGame() {
        introAudio.stop();
        $(".section").css({"z-index": ""});
        $("#game").fadeIn(400, function (){
            $(".section:not(#game)").hide()
        }).css({"z-index": 1});

        randomAr = $.makeRandom(quizLength, quizLength);
        chanceNum = Math.floor(Math.random() * 5) + 7;
        
        //chanceNum = 1;
        //console.log("randomAr", randomAr);
        //console.log("chanceNum", chanceNum);

        gsap.from($("#game .map-con"), 2, {y:500, scaleX:0.5, scaleY:0.5, ease:Cubic.easeInOut});
        gsap.from($("#game .cloud"), 2, {delay:0.1, opacity:0, scaleX:2, scaleY:2, ease:Cubic.easeInOut, onComplete:function (){
            turnGame();
        }});

        for(var i=0; i< 4; i++) {
            if(i > playerNum-1)   $("#game .modum-con .modum"+(i+1)).remove();
        }

        $("#game svg").css({"pointer-events":"none"});
        

        $("#game .home-btn").on(click, function ( e ) {
            location.reload();
        });

        bgmAudio.play();
        
    }

    function turnGame () {

        $("#game svg").css({"pointer-events":""});

        $("#game svg > g").off("mouseover").on("mouseover", function ( e ) {
            var idx = $(this).index()-1;
            $("#game .on-ground .ground").eq(idx).addClass("modum"+(turnCount+1));
            gsap.to($("#game .on-ground .ground").eq(idx), {opacity:1});
            $("#game .num-flag .flag").eq(idx).addClass("ani");
        });

        $("#game svg > g").off("mouseout").on("mouseout", function ( e ) {
            var idx = $(this).index()-1;
            $("#game .on-ground .ground").eq(idx).removeClass().addClass("ground");
            gsap.to($("#game .on-ground .ground").eq(idx), {opacity:0});
            $("#game .num-flag .flag").eq(idx).removeClass("ani");
        });

        $("#game svg > g").off(click).on(click, function ( e ) {
            var idx = $(this).index()-1;
            $("#game .on-ground .ground").eq(idx).removeClass().addClass("ground");
            $("#game .num-flag .flag").eq(idx).removeClass("ani");
            $("#game .modum-con .modum"+(turnCount+1)).removeClass("ani").addClass("active");
            $("#game svg").css({"pointer-events":"none"});
            currentGround = idx+1;
            startQuiz();
        });

        $("#game .modum-con .modum"+(turnCount+1)).addClass("ani");
        $("#game .top-title").addClass("active").find(">span").addClass("modum"+(turnCount+1));
    }

    function startQuiz() {
        var targetQuiz = $("#game .quiz-set.lesson"+lessonNum+" .quiz").eq(randomAr[currentGround-1]);
        // var targetQuiz = $("#game .quiz-set.lesson"+lessonNum+" .quiz").eq(currentGround-1);
        var targetModum = $("#game .modum-con .modum"+(turnCount+1));

        targetQuiz.find(".title > span").text(currentGround);
        targetQuiz.addClass("active");
        
        var delay = 0;
        //console.log("ischance", selectGround.length == chanceNum)
        if(selectGround.length == chanceNum) {
            $("#game .chance-pop").show();
            gsap.from($("#game .chance-pop"), 0.5, {opacity:0, scaleX:0.5, scaleY:0.5, ease:Back.easeOut});
            chanceAudio.play();
            delay = 2;
        }

        gsap.set($("#game .quiz-con"), {y:-800});
        gsap.to($("#game .quiz-con"), 1, {delay: delay, y:0, ease:Cubic.easeInOut, 
            onStart: function (){
                $("#game .chance-pop").hide();
                popupAudio.play();
                setTimeout(function () {
                    $("#game .top-title").removeClass("active").find(">span").removeClass();
                }, 500);
            }, 
            onComplete:function (){
                counter.reset();
                counter.start();
                timer = setInterval(update, 1000/60);
                targetModum.find(".time-con").show().find(">span").text("15");
                clockAudio.play();
                if(selectGround.length == chanceNum) {
                    targetModum.find(".chance-con").show();
                }

                targetQuiz.find(".list").off(click).on(click, function ( e ) {
                    $(this).addClass("active");
                    endQuiz($(this).is(".correct"), 1.5);
                });
            }
        });
    }

    function update () {
        var time = counter.time() / 1000;
        var timeNum = 15-parseInt(time);
        var timeEl = $("#game .modum-con .modum"+(turnCount+1)+" .time-con > span");
        
        if(parseInt(timeEl.text()) != timeNum) {
            timeEl.text(timeNum);
            gsap.set(timeEl, {scaleX:0.5, scaleY:0.5});    
            gsap.to(timeEl, 0.3, {scaleX:1, scaleY:1, ease:Back.easeOut});    
        }
        if(timeNum < 0) {
            endQuiz(false, 0.5);
        }
    }

    function endQuiz( correct, delay) {
        clockAudio.stop();

        // var targetQuiz = $("#game .quiz-set.lesson"+lessonNum+" .quiz").eq(currentGround-1);
        var targetQuiz = $("#game .quiz-set.lesson"+lessonNum+" .quiz").eq(randomAr[currentGround-1]);
        var targetModum = $("#game .modum-con .modum"+(turnCount+1));

        targetModum.removeClass("active")
        targetModum.find(".time-con").hide();
        targetModum.find(".chance-con").hide();
        
        clearInterval(timer);

        gsap.to($("#game .quiz-con"), 1, {delay: delay, y:-800, ease:Cubic.easeInOut, onComplete: function () {
            targetQuiz.removeClass("active").find(".list").removeClass("active");
            if(correct) {
                clearQuiz();
            } else {
                addTurnCount();
            }
        }});

        if(correct){
            var score;
            if(selectGround.length == chanceNum) {
                score = targetModum.data("score") + 2;
            } else {
                score = targetModum.data("score") + 1;
            }

            targetModum.data("score", score);
            targetModum.find(".score").text(score+"점");
            correctAudio.play();
        }
        else{
            wrongAudio.play();
        }
        if(selectGround.length == chanceNum) {
            chanceNum = 0;
        }
        targetQuiz.find(".list").off(click)
    }

    function clearQuiz () {
        selectGround.push({idx: currentGround, dodum: turnCount+1});
        $("#game .ground-length .num").text(12 - selectGround.length);
        $("#game svg > g").eq(currentGround-1).css({"pointer-events":"none"});
        $("#game .num-flag .flag").eq(currentGround-1).hide();
        $("#game .modum-flag .flag").eq(currentGround-1).addClass("modum"+(turnCount+1)).show();
        $("#game .on-ground .ground").eq(currentGround-1).addClass("modum"+(turnCount+1));
        gsap.to($("#game .on-ground .ground").eq(currentGround-1), {opacity:1});
        gsap.from($("#game .modum-flag .flag").eq(currentGround-1), {opacity:0, y: -100, ease:Bounce.easeOut});
        if(selectGround.length < quizLength) {
            setTimeout(function () {
                addTurnCount();
            }, 1000);
        } else {
            setTimeout(function () {
                startResult();
            }, 1000);
        }
    }


    function addTurnCount () {
        turnCount++;
        if(turnCount == playerNum) {
            turnCount = 0;
        }
        turnGame();
    }


    function startResult () {
        exportRoot.intro.gotoAndStop(0);
        $(".section").css({"z-index": ""});
        $("#result").fadeIn(400, function (){
            $(".section:not(#result)").hide();
        }).css({"z-index": 1});

        bgmAudio.stop();
        resultAudio.play();

        for(var i=0; i< 4; i++) {
            if(i > playerNum-1)   $("#result .score-con .modum"+(i+1)).remove();
        }

        var highScore = 0;
        $("#game .modum-con .modum").each(function ( i ) {
            var score = $(this).data("score");
            $("#result .score-con .modum"+(i+1)+" .score").text(score+"점");
            if(highScore < score) highScore = score;
        });

        var scoreHtml = '';
        $("#game .modum-con .modum").each(function ( i ) {
            var score = $(this).data("score");
            if(highScore == score) {
                scoreHtml += '<span class="modum'+(i+1)+'"></span>';
            }
        });
        scoreHtml += '모둠이 이겼습니다.';
        $("#result .winner-con").html(scoreHtml);

        gsap.from($("#result .result-top"), 0.6, {delay:0.5, scaleX:0.3, scaleY:0.8, opacity:0, ease:Back.easeOut});
        gsap.from($("#result .text-con, #result .winner-con, #result .score-con"), 0.8, {delay:1, y:20, opacity:0, ease:Cubic.easeOut});
        gsap.from($("#result .reset-btn > span"), 0.6, {delay:1.5, scaleX:0, scaleY:0, opacity:0, ease:Back.easeOut});

        $("#result .reset-btn").on(click, function ( e ){
            location.reload();
        });

        $("#result .char-ani").sequence({
            source: "./images/sequence/result",
            name: "result_",
            totalFrames: 14,
            autoPlay: true,
            loop: true
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
