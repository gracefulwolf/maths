## 프로토가이드
#### 박스
```
라인 박스
<div class="lineBox pink">핑크</div>
<div class="lineBox deeppink">진한핑크</div>
<div class="lineBox yellow">옐로우</div>
<div class="lineBox sky">하늘색</div>
<div class="lineBox orange">오렌지</div>
<div class="lineBox beige">베이지</div>
<div class="lineBox purple">보라</div>
<div class="lineBox brown">브라운</div>
<div class="lineBox green">그린</div>

색상 박스
<div class="colorBox pink">핑크</div>
...

캐릭터얼굴 색상 : girl or boy 선택해서 사용
<div class="characterImg circle deeppink">
    <div class="charSpriteImg girl_1"></div>
    <div class="charSpriteImg boy_1"></div>
</div>
<div class="characterImg circle orange">
    <div class="charSpriteImg girl_2"></div>
    <div class="charSpriteImg boy_2"></div>
</div>
<div class="characterImg circle green">
    <div class="charSpriteImg girl_3"></div>
    <div class="charSpriteImg boy_3"></div>
</div>
<div class="characterImg circle purple">
    <div class="charSpriteImg girl_4"></div>
    <div class="charSpriteImg boy_4"></div>
</div>
```

#### 팝업
```
팝업
* data-popup-page : 버튼과 동일한 값으로 설정
* data-drag : 팝업드래그 가능
* 팝업이 여러개일 경우는 li 로 구분하여 나열한다.
* blinkOn blinkOpacity : 깜박이는 효과 

- 눈아이콘 버튼
<div class="popBtn textInBtn eye orange" data-hover="" data-popup-btn="2" data-popup-parent="hidden">텍스트</div>

- 손가락 버튼
<span class="popBtn click-finger-Btn blinkOn blinkOpacity" data-popup-btn="2" data-hover=""></span>

- 텍스트 버튼
<span class="popBtn word" data-popup-btn="3" data-hover="">텍스트</span>

- 이미지 크게보기(슬라이드) 버튼
<button class="popBtn zoomBtn line" data-hover="" data-popup-btn="4" data-slide="1" data-slide-page="1"></button>

- 말풍선 버튼
<div class="popBtn speech right" data-hover="" data-popup-mode="pageOff" data-popup-btn="1"></div>
<div class="popBtn speech left" data-hover="" data-popup-mode="pageOff" data-popup-btn="2"></div>

- 마우스 버튼
<div class="popBtn mouse" data-hover="" data-popup-mode="pageOff" data-popup-btn="1"></div>

- 팝업 콘텐츠
<section class="popup_container" data-popup-container="">
    <ul class="popup_pages">

        // whole : full popup
        <li class="whole pop_page_1" data-popup-page="1">
            <h2>제목</h2>
            <div class="popup_contents">...</div>
        </li>
        
        // min : mini popup
        <li class="min pop_page_1" data-popup-page="2" data-drag>
            <h2>제목</h2>
            <div class="popup_contents">...</div>
        </li>

        // image : image slide popup
        <li class="image pop_page_1" data-popup-page="3" data-drag>
            <h2>제목</h2>
            <div class="basicSlider" data-slide-container="popup">
                <ul class="basicSlider_slides" data-slides="">
                    <li class="page_1">
                        <figure>
                            <img src="" alt="이미지">
                        </figure>
                    </li>
                    <li class="page_2">...</li>
                </ul>
            </div>
            <div class="moveButtonContainer" data-slide-btn-container="">
                <div class="basicSlider_btn prev" data-btn-prev="" data-hover=""></div>
                <ul class="basicSlider_circle_tabs" data-tabs="">
                <li data-hover=""></li>
                <li data-hover=""></li>
                </ul>
                <div class="basicSlider_btn next" data-btn-next="" data-hover=""></div>
            </div>
        </li>

        // whole zoom popup
        <li class="whole pop_page_1" data-popup-page="4">
            <div class="zoomContainer horizon" data-zoom-container="">
                <div class="zoomArea">
                    <div class="zoomImgContainer">
                        <div class="zoom_img"></div>
                    </div>
                </div>
            </div>
        </li>

        // speech popup 
        <li class="speech bottom" data-popup-page="1">
            <div class="popup_contents">...</div>
        </li>
    </ul>
</section>

```

#### 메인 탭
```
- 메인탭
<div class="basicSlider contentsBox" data-slide-container="main">
    <ul class="basicSlider_tabs" data-tabs="">
        <li data-hover="">풀</li>
        <li data-hover="">미니</li>
        <li data-hover="">삽화</li>
    </ul>
    <ul class="basicSlider_slides" data-slides="">
        <li class="page_1">...</div>
        <li class="page_2">...</div>
        <li class="page_3">...</div>
    </ul>
</div>

- 하단 발문
<div class="imgContainer tab_1">...</div>
<div class="imgContainer tab_2 displayN">...</div>
<div class="introSlider" data-slide-container="intro">
    <ul class="intro_circle_tabs" data-tabs="">
        <li data-hover=""></li>
        <li data-hover=""></li>
    </ul>
    <ul class="introSlider_slides" data-slides="">
        <li class="tab_page_1">텍스트</li>
        <li class="tab_page_2">...</li>
    </ul>
    <div class="introSlider_btn prev" data-btn-prev="" data-hover=""></div>
    <div class="introSlider_btn next" data-btn-next="" data-hover=""></div>
</div>
```

#### 오디오
```
<div class="" data-sync-container="">
    <button class="speaker_icon icon1" data-speaker="1" data-hover=""></button>
</div>
<div class="mediaContainer" data-media-container="" data-media-control="speaker" data-speaker-media="1">
    <audio class="">
      <source src="./media/mp3/sample1.mp3"  type="audio/mp3" />
    </audio>
  </div>
```
