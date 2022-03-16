(function ( $ ) {
    'use strict';

    var lessonNum = 1;
    var playerNum = 2;
    var timeLength = 60;
    var randomAr;
    var orderAr = [];
    var quizCount = 0;
    var quizLength = 10;
    var turnCount = 0;
    
    var timer;
    var timer2;
    var counter;
    
    var introAudio = new AudioControl("./audio/intro.mp3");
    var correctAudio = new AudioControl("./audio/correct.mp3");
    var wrongAudio = new AudioControl("./audio/wrong.mp3");
    var bombAudio = new AudioControl("./audio/bomb.mp3");
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

        gsap.from($("#intro .lesson-con, #intro .time-con , #intro .player-con"), 0.6, {delay: 1, y:-20, opacity:0, ease:Cubic.easeOut});
        gsap.from($("#intro .start-btn > span"), 0.6, {delay: 1.5, scaleX:0.5, scaleY:0.5, opacity:0, ease:Back.easeOut});
        gsap.from($("#intro .guide-btn"), 0.6, {delay: 1.7, opacity:0});

        $("#intro .lesson-btn").on(click, function ( e ) {
            $("#intro .lesson-btn").removeClass("active");
            $(this).addClass("active");
        });

        $("#intro .time-btn").on(click, function ( e ) {
            $("#intro .time-btn").removeClass("active");
            $(this).addClass("active");
        });

        $("#intro .player-btn").on(click, function ( e ) {
            $("#intro .player-btn").removeClass("active");
            $(this).addClass("active");
        });

        $("#intro .start-btn").on(click, function ( e ) {
            lessonNum = $("#intro .lesson-btn.active").index()+1;
            playerNum = $("#intro .player-btn.active").index()+2;

            var timeIndex = $("#intro .time-btn.active").index();
            if(timeIndex == 0)      timeLength = 60;
            else if(timeIndex == 1) timeLength = 90;
            else                    timeLength = 120;

            //console.log("lessonNum", lessonNum, "playerNum", playerNum, "timeLength", timeLength);
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

        var randomAr = $.makeRandom(playerNum, playerNum);

        gsap.from($("#select-modum .title-con"), 0.8, {delay:0.2, y:-200, ease:Cubic.easeOut });

        for(var i=0; i< 4; i++) {
            if(i > playerNum-1){
                $("#select-modum .player"+(i+1)).remove();
                $("#select-modum .picket"+(i+1)).remove();
            } else {
                $("#select-modum .picket"+(i+1)).text(randomAr[i]+1);
                orderAr[randomAr[i]] = i+1;
            }
        }
        //console.log("orderAr", orderAr);

        gsap.set($("#select-modum .player-con"), {perspective:1800});
        $("#select-modum .player").each(function ( i ) {
            gsap.set($(this).find(".char"), { opacity:0, rotationY: -90});
            gsap.to($(this).find(".char"), 1, {delay: 0.8 + (0.15 * i), rotationY: 0, opacity:1, ease:Back.easeOut});
        });

        gsap.from($("#select-modum .enter-btn > span"), 0.6, {delay: 1.8, scaleX:0.5, scaleY:0.5, opacity:0, ease:Back.easeOut, onStart: function (){
            $("#select-modum .enter-btn").show();
        }});

        $("#select-modum .enter-btn").on(click, function ( e ) {
            $("#select-modum .enter-btn").hide();
            gsap.to($("#select-modum .title-con"), 0.4, {opacity:0});
            gsap.set($("#select-modum .picket"), {transformOrigin: "bottom center", rotation:180, opacity:1});
            $("#select-modum .picket").each(function (i) {
                gsap.to($(this), 1, {delay:0.15 * i, rotation:0, ease:Back.easeOut});
            });
            gsap.from($("#select-modum .start-btn > span"), 0.6, {delay: 1, scaleX:0.5, scaleY:0.5, opacity:0, ease:Back.easeOut, onStart:function (){
                $("#select-modum .start-btn").show();
            }});
        });

        $("#select-modum .start-btn").on(click, function ( e ) {
            startGame();
        });
        
        $("#select-modum .home-btn").on(click, function ( e ) {
            location.reload();
        });
    }

    function startGame() {
        introAudio.stop();
        $(".section").css({"z-index": ""});
        $("#game").fadeIn(400, function (){
            $(".section:not(#game)").hide()
        }).css({"z-index": 1});

        randomAr = $.makeRandom(quizLength, quizLength);

        for(var i=0; i< 4; i++) {
            var player = $("#game .player"+(i+1));
            if(i > playerNum-1){
                player.remove();
            } else {
                player.find(".char-con .default").append('<img src="./images/char'+ orderAr[i] +'.png" />');
                player.find(".char-con .fast").sequence({
                    source: "./images/sequence/char"+orderAr[i],
                    name: "char_ani1_",
                    totalFrames: 30,
                    loop: true
                }).hide();
                player.find(".char-con .boom").sequence({
                    source: "./images/sequence/char"+orderAr[i],
                    name: "char_ani2_",
                    totalFrames: 6
                }).hide();
                player.find(".char-con .clear").sequence({
                    source: "./images/sequence/char"+orderAr[i],
                    name: "char_ani3_",
                    totalFrames: 40
                }).hide();
            }
        }

        $("#game .bomb1").sequence({
            source: "./images/sequence/bomb",
            name: "bomb_ani1_",
            totalFrames: 19,
            loop: true
        }).sequence("play");

        $("#game .bomb2").sequence({
            source: "./images/sequence/bomb",
            name: "bomb_ani2_",
            totalFrames: 64
        }).hide();

        $("#game .bomb3").sequence({
            source: "./images/sequence/bomb",
            name: "bomb_ani3_",
            totalFrames: 56
        }).hide();

        $("#game .home-btn").on(click, function ( e ) {
            location.reload();
        });

        startQuiz();

        counter.start();
        timer = setInterval(update, 1000/60);
    }


    function startQuiz() {
        
        //console.log("quizCount", quizCount+1, "turnCount", turnCount+1);
        bgmAudio.play();

        // var targetQuiz = $("#game .quiz-set.lesson"+lessonNum+" .quiz").eq(quizCount);
        var targetQuiz = $("#game .quiz-set.lesson"+lessonNum+" .quiz").eq(randomAr[quizCount]-1);
        var targetPlayer = $("#game .player-con .player"+(turnCount+1));

        $("#game .quiz-set.lesson"+lessonNum+" .quiz").removeClass("active").find(".list").removeClass("active");
        targetQuiz.addClass("active");

        targetPlayer.find(".char-con > div").hide();
        targetPlayer.find(".char-con .fast").show().sequence("gotoAndPlay", 0);
        targetPlayer.append($("#game .bomb"));

        targetQuiz.find(".list").off(click).on(click, function ( e ) {
            $(this).addClass("active");
            targetQuiz.find(".list").off(click);
            endQuiz($(this).is(".correct"));
        });
    }

    function endQuiz ( isCorrect ) {
        var targetPlayer = $("#game .player-con .player"+(turnCount+1));
        var score = targetPlayer.data("score");
        if(isCorrect) {
            targetPlayer.find(".char-con > div").hide();
            targetPlayer.find(".char-con .clear").show().sequence("gotoAndPlay", 0);
            targetPlayer.data("score", score+10).find(".score").text(score+10);
            targetPlayer.find(".apply-num").removeClass("plus10 minus10 minus20").addClass("plus10");
            gsap.set(targetPlayer.find(".apply-num"), {opacity:0, y:20});
            gsap.to(targetPlayer.find(".apply-num"), 0.6, {opacity: 1, y:0});
            gsap.to(targetPlayer.find(".apply-num"), 0.6, {delay:1, opacity: 0, y:-20});

            correctAudio.play();
        } else {
            targetPlayer.data("score", score-10).find(".score").text(score-10);
            targetPlayer.find(".apply-num").removeClass("plus10 minus10 minus20").addClass("minus10");
            gsap.set(targetPlayer.find(".apply-num"), {opacity:0, y:20});
            gsap.to(targetPlayer.find(".apply-num"), 0.6, {opacity: 1, y:0});
            gsap.to(targetPlayer.find(".apply-num"), 0.6, {delay:1, opacity: 0, y:-20});
            wrongAudio.play();
        }

        if(quizCount < quizLength-1) {
            timer2 = setTimeout(function () {
                targetPlayer.find(".char-con > div").hide();
                targetPlayer.find(".char-con .default").show();
                quizCount++;
                addTurnCount();
            }, 1500);
        } else {
            timer2 = setTimeout(function () {
                clearTimeout(timer);
                $("#game .bomb > div").sequence("pause");
                startResult();
            }, 1500);
        }

        
    }

    function update () {
        var time = counter.time() / 1000;
        //console.log(time)
        if(time >= timeLength - 2 && time < timeLength) {
            
            if(!$("#game .bomb2").is(":visible")) {
                $("#game .bomb > div").hide();
                $("#game .bomb2").show().sequence("play");
            }
        } else if(time >= timeLength) {
            // var targetQuiz = $("#game .quiz-set.lesson"+lessonNum+" .quiz").eq(quizCount);
            var targetQuiz = $("#game .quiz-set.lesson"+lessonNum+" .quiz").eq(randomAr[quizCount]-1);
            var targetPlayer = $("#game .player-con .player"+(turnCount+1));
            if(!$("#game .bomb3").is(":visible")) {
                $("#game .bomb > div").hide();
                $("#game .bomb3").show().sequence("play");
                bombAudio.play();
                setTimeout(function () {
                    var score = targetPlayer.data("score");
                    targetPlayer.data("score", score-20).find(".score").text(score-20);
                    targetPlayer.find(".apply-num").removeClass("plus10 minus10 minus20").addClass("minus20");
                    gsap.set(targetPlayer.find(".apply-num"), {opacity:0, y:20});
                    gsap.to(targetPlayer.find(".apply-num"), 0.6, {opacity: 1, y:0});
                    gsap.to(targetPlayer.find(".apply-num"), 0.6, {delay:1, opacity: 0, y:-20});
                    targetPlayer.find(".char-con > div").hide();
                    targetPlayer.find(".char-con .boom").show().sequence("gotoAndPlay", 0).one("finish", function ( e ) {
                        setTimeout(function () {
                            startResult();
                        }, 1000);
                    });
                }, 600);
            }
            targetQuiz.find(".list").off(click);
            clearInterval(timer);
            clearTimeout(timer2);
        }
    }


    function addTurnCount () {
        turnCount++;
        if(turnCount == playerNum) {
            turnCount = 0;
        }
        startQuiz();
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
            var player = $("#result .player"+(i+1));
            if(i > playerNum-1){
                player.remove();
            } else {
                player.find(".char-con").sequence({
                    source: "./images/sequence/clear_char"+orderAr[i],
                    name: "clear_char_",
                    totalFrames: 40,
                    loop: true
                }).sequence("gotoAndStop", 39);
            }
        }

        var highScore = 0;
        $("#game .player-con .player").each(function ( i ) {
            var score = $(this).data("score");
            $("#result .player-con .player"+(i+1)+" .score").text(score);
            if(highScore < score) highScore = score;
        });

        var scoreHtml = '';
        var nameAr = ['토끼','강아지','펭귄','양'];
        $("#game .player-con .player").each(function ( i ) {
            var score = $(this).data("score");
            if(highScore == score) {
                scoreHtml += '<span class="name'+orderAr[i]+'">'+nameAr[orderAr[i]-1]+'</span>';
                $("#result .player"+(i+1)).find(".char-con").sequence("play");
            }
        });
        scoreHtml += '모둠이 이겼습니다.';
        $("#result .winner-con").html(scoreHtml);

        gsap.from($("#result .result-top"), 0.6, {delay:0.5, scaleX:0.3, scaleY:0.8, opacity:0, ease:Back.easeOut});
        gsap.from($("#result .text-con, #result .winner-con, #result .player-con"), 0.8, {delay:1, y:20, opacity:0, ease:Cubic.easeOut});
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
