document.addEventListener("DOMContentLoaded", function(){
  var WRAPCARD = document.querySelector('.wrap-card');
  var DATA = dataArr[0]["grade"];
  var DATA_TEMP = wordCardData[SUBJECT];

  var platform = window['platform-detect'];


  // 상단 타이틀
  var pageTitle = document.querySelector('.pageTitle');
  var subject = pageTitle.querySelector('h4');
  var grade = pageTitle.querySelector('.grade');

  subject.innerHTML = SUBJECT.split('_')[1];
  grade.innerHTML = SUBJECT.split('_')[2];




  var wordCards = WRAPCARD.querySelectorAll(".wordCard");

  // 메인 카드 보이기/숨기기 및 클릭 이벤트
  for (var i = 0, wordCard; i < wordCards.length; i++) {
    wordCard = wordCards[i];
    var isNoData = DATA_TEMP[i].listWord.length === 0;
    
    if (isNoData) {
      wordCard.style.display = 'none';
    }

    wordCard.addEventListener("click", function() {
      if (!this.classList.contains('view')) {
        window.$efSound.click();
        hideWordCards();
        console.log(this);
        this.classList.add("view");
      }
    });

    addHoverEvent(wordCard);
  }


  // 단원 내용 삽입
  Array.prototype.forEach.call(wordCards, insertCardData);

  function insertFront(container, lessonName, lessonNumber) {
    var front = container.querySelector('.front');

    front.innerHTML = "<div class='cont'><div class='level'><span>"+ lessonNumber +"</span></div><div class='levelName'>"+ lessonName +"</div><div class='ppp'>용어 카드</div>";
  }
  function insertBack(container, lessonName, lessonNumber) {
    var back = container.querySelector('.back');

    var listContainer = document.createElement('ul');
    listContainer.classList.add('list-word');

    DATA_TEMP[lessonNumber-1].listWord.forEach(function(word) {
      var list = document.createElement('li');
      list.innerHTML = '<a>'+ word.title +'</a>';
      addHoverEvent(list);
      listContainer.appendChild(list);
    });

    back.innerHTML = "<div class='level'>"+ lessonNumber +"</div><div class='levelName'>"+ lessonName +"</div>";

    back.appendChild(listContainer);
  }
  function insertCardData(card, index) {
    var lessonName = DATA_TEMP[index].levelName;
    var lessonNumber = index + 1;

    insertFront(card, lessonName, lessonNumber);
    insertBack(card, lessonName, lessonNumber);
  }
  function addHoverEvent(target) {
    function addHover(event) {
      if (event.type) this.classList[event.type === 'mouseover' ? 'add' : 'remove']('hover');
    }
    target.addEventListener('mouseover', addHover);
    target.addEventListener('mouseout', addHover);
  }

  function popSlide(cardIdx, wordIdxLength) {
    var areaSlide = document.querySelector(".area-slide");

    var slideCont = "";
    var slideMeans = "";
    var slideRef = "";

    areaSlide.className = "area-slide";
    areaSlide.classList.add("level-"+(cardIdx + 1));


    for(var i = 0; i < wordIdxLength; i++) {
      var slideExp = "";
      var expLength = "";

      slidePage = DATA_TEMP[cardIdx].listWord[i].page;
      slideMeans = DATA_TEMP[cardIdx].listWord[i].means;
      slideRef = DATA_TEMP[cardIdx].listWord[i].referenceImg;

      expLength = DATA_TEMP[cardIdx].listWord[i].example.length;

      for(var j = 0; j < expLength; j++){
        slideExp += "<li>"+DATA_TEMP[cardIdx].listWord[i].example[j]+"</li>";
      }

      
      if(slideRef != ""){
        slideCont += "<div class='swiper-slide'><div class='popTitle'><h4>"+
          DATA_TEMP[cardIdx].listWord[i].title+"</h4><div class='info'><span class='grade'>"+
          DATA_TEMP[cardIdx].level+"</span>단원 <strong>"+
          DATA_TEMP[cardIdx].levelName+"</strong> | 수학 <span class='pageNum'>"+
          slidePage+"</span>쪽</div></div><div class='contBody'><dl><dt>뜻</dt><dd>"+
          slideMeans+"</dd><dt>예문</dt><dd><ul>"+
          slideExp+"</ul></dd><dt>참고<br />그림</dt><dd><img src='../img/"+
          slideRef+"' /></dd></div></div>";
      }else{
        slideCont += "<div class='swiper-slide's><div class='popTitle'><h4>"+
          DATA_TEMP[cardIdx].listWord[i].title+"</h4><div class='info'><span class='grade'>"+
          DATA_TEMP[cardIdx].level+"</span>단원 <strong>"+
          DATA_TEMP[cardIdx].levelName+"</strong> | 수학 <span class='pageNum'>"+
          slidePage+"</span>쪽</div></div><div class='contBody'><dl><dt>뜻</dt><dd>"+
          slideMeans+"</dd><dt>예문</dt><dd><ul>"+
          slideExp+"</ul></dd><dt style='display:none;'>참고<br />그림</dt><dd style='display:none;'></dd></div></div>";
      }

      document.querySelector(".swiper-wrapper").innerHTML = slideCont;
    }
  }

  var cardIdx = "";

  function slideTab(cardIdx, wordIdxLength){
    document.querySelector(".bottomList").innerHTML = "";


    for(var i = 0; i < wordIdxLength; i++) {
      thumWords = DATA_TEMP[cardIdx].listWord[i].title;

      thumWrap = "<div class='bottomTitle'><span class='level'>"+
        DATA_TEMP[cardIdx].level+"</span><strong>"+
        DATA_TEMP[cardIdx].levelName+"</strong></div>";

      document.querySelector(".bottomList").innerHTML = thumWrap;
      document.querySelector(".area-slide").querySelector(".swiper-pagination").querySelectorAll("span.swiper-pagination-bullet")[i].innerHTML = thumWords;
      //$(".bx-pager div a").attr('data-before',thumWords);
    }
  }



  if (!platform.mobile) {
    $(document).on("mouseleave", ".wordCard .back", function(){
      $(this).closest(".wordCard").removeClass("view");
    });
  }


  var wordList = document.querySelector('ul.list-word > li');
  //wordList.addEventListener('click',function(){
  var wordIdxLength = "";

  $(document).on("click", "ul.list-word > li", function(){

    window.$efSound.stop();
    window.$efSound.open();
    
    $('.pointerCntl-start').hide();
    $('.pointerCntl-end').hide();

    cardIdx = $(this).closest(".wrap-card").find(".wordCard").index($(this).closest(".wordCard"));
    var wordIdx = $(this).closest("ul.list-word").find("li").index($(this));
    wordIdxLength = $(this).closest("ul.list-word").find("li").length;

    popSlide(cardIdx, wordIdxLength, function(){});
    
    var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: false,
      slidesPerView: 1,
      spaceBetween: 40,
      centeredSlides: true,
      width:1000,
      initialSlide:wordIdx,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on : {
        fromEdge: function(){
          $('.pointerCntl-start').hide();
          $('.pointerCntl-end').hide();
        },
        reachBeginning: function(){
          $('.pointerCntl-start').show();
          $('.pointerCntl-end').hide();
        },
        reachEnd: function(){
          $('.pointerCntl-start').hide();
          $('.pointerCntl-end').show();
        }
      }
    });
    slideTab(cardIdx, wordIdxLength);
    $(".wrap-pop").animate({
      "opacity": "1",
      "top": "0"
    }, 300);
    // setTimeout(window.resizeBy( -2, 0),900);
    // setTimeout(window.resizeBy(2, 0),1500);
    //setTimeout($(".bx-pager > .bx-pager-item").eq(1).children("a").click(),3000);
    //new window.$cale({target: document.querySelector(".bxslider")});
  });

  $(document).on("click", "ul.sliderTab > li", function(){
    var thumbIdx = $(this).closest("ul.sliderTab").find("li").index($(this));
    console.log('thumbIdx', thumbIdx);
  });


  $(document).on("click",".wrap-pop button.btn-close" , function(){
    $(this).closest(".wrap-pop").animate({
      "opacity": "0",
      "top": "100%"
    }, 0);
    document.querySelector(".area-slide").innerHTML = "<div class='swiper-container'><div class='swiper-wrapper'></div><div class='swiper-pagination'></div><div class='swiper-button-prev'></div><div class='swiper-button-next'></div><div class='character'></div></div>";

    window.$efSound.click2();
  });

  new window.$cale({target: document.querySelector("#wrap")});
  new window.$cale({target: document.querySelector(".wrap-pop")});

  function hideWordCards() {
    for (var i = 0; i < wordCards.length; i++) {
      wordCards[i].classList.remove("view");
    }
  }
});