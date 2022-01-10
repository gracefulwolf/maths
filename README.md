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

보기박스
<div class="bogi_wrap">
    <div class="bogiContainer">
        <div class="icon_bogi"></div>
        <div class="inner">
           ...
        </div>
    </div>
</div>

보기 아이콘
<div class="icon_bogi"></div>

약물 숫자박스
<div class="bullet number orange inline">1</div>

약물 도트
<ul class="contentsList pos">
    <li>
        <ins class="dot"></ins>
        <div class="boxCont">...</div>
    </li>
</ul>

약물 예
<div class="bullet exam">예</div>

약물 화살표
<div class="icon_arrow big"></div>

버튼 다운로드
<a href="./data/(3-1-1)형성평가2_03차시.hwp" target="_blank" class="downloadBtn" data-name="활동지 다운로드"></a>
```

#### 답박스
```
* 그룹 단위로 답노출 :data-group-index="1"

<div data-quiz="toggle">
    <div class="toggle box" data-toggle-obj="1">
        <div class="answer" data-toggle-target="1">...</div>
    </div>
    <div class="toggle box" data-toggle-obj="2">
        <div class="answer" data-toggle-target="2">
            <!-- 예 아이콘과 긴 문장 -->
            <ul class="contentsList">
                <li>
                    <div class="bullet exam">예</div>
                    <div>연필과 물체의 끝을 잘 맞추어서 그립니다.</div>
                </li>
            </ul>
        </div>
    </div>

    //정답 확인 : data-quiz="toggle" 영역안의 답박스 확인
    <div class="buttonContainer">
        <button class="dapCheckBtn" data-answer-btn=""></button>
    </div>
</div>

//중앙기준 답박스
<div class="textAlignC">
    <div class="toggle" data-toggle-obj="1">
        <div class="answer" data-toggle-target="1">
            112＋124를 계산하여 구할 수 있습니다.
        </div>
    </div>
</div>

하단 정답버튼 풀이버튼 그룸일때
<div class="buttonContainer">
    <button class="solveCheckBtn" data-popup-btn="2" data-hover=""></button>
    <button class="dapCheckBtn" data-answer-btn=""></button>
</div>
```

#### 이미지 모션
```
<div class="imgBox">
    <img 
        data-sprite-btn="1" 
        data-sprite-target="1" 
        data-sprite-count="109" 
        data-sprite-src="./images/suh_0301_05_0003_201_2/1km" 
        data-sprite-delay="50" 
    class="longImage" src="./images/suh_0301_05_0003_201_2/1km/001.png" />
</div>
```

#### 직접입력 & 예보기
```
<input type="text" class="center afterDisplay" placeholder="직접 쓰기" data-input-obj="" maxlength="8" data-answer="예보기 텍스트"/>

<div class="buttonContainer">
    <button class="writeBtn" data-answer-btn=""></button>
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

- vod 팝업 버튼
<button class="videoSubPlayBtn right" data-video-link="M201801966_800K.mp4" data-hover="">활동영상 보기</button>

------------------------------------------------------
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

        // image : image full popup
        <li class="whole image pop_page_1" data-popup-page="1">
            <img src="./image/suh_p_0301_01/수학_010.jpg" alt="">
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

#### 탭
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

#### 캐릭터
```
이미지 미리 불러오기
<div class="prev-img">
    <img src="../common/contents/images/character/boy_1_sprite.png" alt="">
    <img src="../common/contents/images/character/boy_2_sprite.png" alt="">
    <img src="../common/contents/images/character/boy_3_sprite.png" alt="">
    <img src="../common/contents/images/character/boy_4_sprite.png" alt="">
    <img src="../common/contents/images/character/girl_1_sprite.png" alt="">
    <img src="../common/contents/images/character/girl_2_sprite.png" alt="">
    <img src="../common/contents/images/character/girl_3_sprite.png" alt="">
    <img src="../common/contents/images/character/girl_4_sprite.png" alt="">
</div>

$prite.add({
    target: $ts.getEl('#spriteAniBox_1'),
    spriteId: 'sprite1',
    spriteList: [
      {
        /* girl_1,girl_2,girl_3,girl_4,boy_1,boy_2,boy_3,boy_4 */
        name: 'girl_1', 

        /* 크롭(원) : blue, orange, purple, green */
        // circle: 'blue',

        top: 130,
        left: -25,

        /* 만약 위에 circle이 주석 해제 되었다면 width , height 필요없거나 1:1 비율이어야함 */
        width: 270,
        height: 360,

        /* 왼쪽 이동 시에만 적용 */
        movD: 'left', 
        movPx:250, 
        playMode: {
            rewind: false
        },

        thumbNail: '../common/contents/images/character/girl_1.png',
        spriteSheet: '../common/contents/images/character/girl_1_sprite.png',
        sound: './media/mp3/bom_0201_0102_1112_101/bom_0201_0102_1112_101_2.mp3',

        /* 말풍선 */
        // textBubble: {
        //   text: '지구는 아주 천천히 돌아갈 것 같습니다.',
        //   class: 'balloon bottom sky',
        //   top: 20,
        //   left: 140,
        //   width: 450,
        //   textAlign: 'center',
        //   wordBreak: 'keep-all'
        // },

        sheetWidth: 54000,
        sheetHeight: 360,
        endSheet: 0,
        delay: 40,
        callbacks: {
          start: function () {},
          end: function () {}
        }
      }
    ]
}); 
```

#### 계산식
```
<div class="math_calc_table table_2">
    <table>
        <tbody>
            <tr>
                <td></td>
                <td class="blueT">2
                    <sup class="sup redT">1</sup>
                </td>
                <td class="redT">1</td>
            </tr>
            <tr>
                <td>+</td>
                <td></td>
                <td class="redT">6</td>
            </tr>
            <tr>
                <td colspan="3">
                    <div class="rowLine"></div>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <div class="toggle" data-toggle-obj="1">
                        <div class="answer" data-toggle-target="1">2</div>
                    </div>
                </td>
                <td class="redT">7</td>
            </tr>
        </tbody>
    </table>
    <div class="lineDotted line_1"></div>
    <div class="lineDotted line_2"></div>
</div>
```