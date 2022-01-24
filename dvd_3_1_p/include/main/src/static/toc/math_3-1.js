window.MATH = window.MATH || {};
window.MATH.main = window.MATH.main || {};

var URL_VIEWER = window.jj ? '/viewer/' : '../../../viewer/';
var URL_EBOOK = URL_VIEWER + 'ebook/index.html?contentInformationURL=../../resource/ebook/&page=';
var URL_CONTENTS = URL_VIEWER + 'contents/index.html?contentInformationURL=../../resource/contents/';

window.MATH.main['math_3-1'] = {
  subjectName: '초등학교 수학 3-1',
  lessons: [
    {
      name: '덧셈과 뺄셈',
      corners: [
        { number: '1', name: '단원 도입', eBook: URL_EBOOK + 8, content: URL_CONTENTS + 'lesson01&page=1' },
        { number: '2', name: '덧셈을 해 볼까요(1)', eBook: URL_EBOOK + 10, content: URL_CONTENTS + 'lesson01&page=5' },
        { number: '3', name: '덧셈을 해 볼까요(2)', eBook: URL_EBOOK + 12, content: URL_CONTENTS + 'lesson01&page=11' },
        { number: '4, 5', name: '덧셈을 해 볼까요(3)', eBook: URL_EBOOK + 14, content: URL_CONTENTS + 'lesson01&page=17' },
        { number: '6', name: '뺄셈을 해 볼까요(1)', eBook: URL_EBOOK + 18, content: URL_CONTENTS + 'lesson01&page=25' },
        { number: '7', name: '뺄셈을 해 볼까요(2)', eBook: URL_EBOOK + 20, content: URL_CONTENTS + 'lesson01&page=31' },
        { number: '8', name: '뺄셈을 해 볼까요(3)', eBook: URL_EBOOK + 22, content: URL_CONTENTS + 'lesson01&page=37' },
        { number: '9', name: '수학의 힘을 키워요', eBook: URL_EBOOK + 24, content: URL_CONTENTS + 'lesson01&page=43' },
        { number: '10, 11', name: '단원을 마무리해요', eBook: URL_EBOOK + 26, content: URL_CONTENTS + 'lesson01&page=44' },
        { number: '', name: '재밌게 놀이를 해요', eBook: URL_EBOOK + 30, content: URL_CONTENTS + 'lesson01&page=55' },
      ],
    },
    {
      name: '평면도형',
      corners: [
        { number: '1', name: '단원 도입', eBook: URL_EBOOK + 32, content: URL_CONTENTS + 'lesson02&page=1' },
        { number: '2', name: '선의 종류에는 어떤 것이 있을까요', eBook: URL_EBOOK + 34, content: URL_CONTENTS + 'lesson02&page=5' },
        { number: '3', name: '각을 알아볼까요', eBook: URL_EBOOK + 36, content: URL_CONTENTS + 'lesson02&page=15' },
        { number: '4', name: '직각을 알아볼까요', eBook: URL_EBOOK + 38, content: URL_CONTENTS + 'lesson02&page=23' },
        { number: '5', name: '직각삼각형을 알아볼까요', eBook: URL_EBOOK + 40, content: URL_CONTENTS + 'lesson02&page=32' },
        { number: '6', name: '직사각형을 알아볼까요', eBook: URL_EBOOK + 42, content: URL_CONTENTS + 'lesson02&page=39' },
        { number: '7', name: '정사각형을 알아볼까요', eBook: URL_EBOOK + 44, content: URL_CONTENTS + 'lesson02&page=47' },
        { number: '8', name: '수학의 힘을 키워요', eBook: URL_EBOOK + 46, content: URL_CONTENTS + 'lesson02&page=55' },
        { number: '9, 10', name: '단원을 마무리해요', eBook: URL_EBOOK + 48, content: URL_CONTENTS + 'lesson02&page=56' },
        { number: '', name: '재밌게 놀이를 해요', eBook: URL_EBOOK + 52, content: URL_CONTENTS + 'lesson02&page=66' },
      ],
    },
    {
      name: '나눗셈',
      corners: [
        { number: '1', name: '단원 도입', eBook: URL_EBOOK + 54, content: URL_CONTENTS + 'lesson03&page=1' },
        { number: '2, 3', name: '똑같이 나누어 볼까요(1)', eBook: URL_EBOOK + 56, content: URL_CONTENTS + 'lesson03&page=4' },
        { number: '4, 5', name: '똑같이 나누어 볼까요(2)', eBook: URL_EBOOK + 60, content: URL_CONTENTS + 'lesson03&page=13' },
        { number: '6', name: '곱셈과 나눗셈의 관계를 알아볼까요', eBook: URL_EBOOK + 64, content: URL_CONTENTS + 'lesson03&page=21' },
        { number: '7', name: '나눗셈의 몫을 곱셈으로 구해 볼까요', eBook: URL_EBOOK + 66, content: URL_CONTENTS + 'lesson03&page=27' },
        { number: '8', name: '수학의 힘을 키워요', eBook: URL_EBOOK + 68, content: URL_CONTENTS + 'lesson03&page=33' },
        { number: '9, 10', name: '단원을 마무리해요', eBook: URL_EBOOK + 70, content: URL_CONTENTS + 'lesson03&page=34' },
        { number: '', name: '재밌게 놀이를 해요', eBook: URL_EBOOK + 74, content: URL_CONTENTS + 'lesson03&page=45' },
      ],
    },
    {
      name: '곱셈',
      corners: [
        { number: '1', name: '단원 도입', eBook: URL_EBOOK + 76, content: URL_CONTENTS + 'lesson04&page=1' },
        { number: '2', name: '(몇십)×(몇)을 계산해 볼까요', eBook: URL_EBOOK + 78, content: URL_CONTENTS + 'lesson04&page=4' },
        { number: '3', name: '(몇십몇)×(몇)을 계산해 볼까요(1)', eBook: URL_EBOOK + 80, content: URL_CONTENTS + 'lesson04&page=11' },
        { number: '4', name: '(몇십몇)×(몇)을 계산해 볼까요(2)', eBook: URL_EBOOK + 82, content: URL_CONTENTS + 'lesson04&page=18' },
        { number: '5', name: '(몇십몇)×(몇)을 계산해 볼까요(3)', eBook: URL_EBOOK + 84, content: URL_CONTENTS + 'lesson04&page=25' },
        { number: '6', name: '(몇십몇)×(몇)을 계산해 볼까요(4)', eBook: URL_EBOOK + 86, content: URL_CONTENTS + 'lesson04&page=32' },
        { number: '7', name: '수학의 힘을 키워요', eBook: URL_EBOOK + 88, content: URL_CONTENTS + 'lesson04&page=39' },
        { number: '8, 9', name: '단원을 마무리해요', eBook: URL_EBOOK + 90, content: URL_CONTENTS + 'lesson04&page=40' },
        { number: '', name: '재밌게 놀이를 해요', eBook: URL_EBOOK + 94, content: URL_CONTENTS + 'lesson04&page=51' },
      ],
    },
    {
      name: '길이와 시간',
      corners: [
        { number: '1', name: '단원 도입', eBook: URL_EBOOK + 96, content: URL_CONTENTS + 'lesson05&page=1' },
        { number: '2', name: 'cm보다 작은 단위는 무엇일까요', eBook: URL_EBOOK + 98, content: URL_CONTENTS + 'lesson05&page=5' },
        { number: '3', name: 'm보다 큰 단위는 무엇일까요', eBook: URL_EBOOK + 100, content: URL_CONTENTS + 'lesson05&page=15' },
        { number: '4, 5', name: '길이와 거리를 어림하고 재어 볼까요', eBook: URL_EBOOK + 102, content: URL_CONTENTS + 'lesson05&page=24' },
        { number: '6', name: '분보다 작은 단위는 무엇일까요', eBook: URL_EBOOK + 106, content: URL_CONTENTS + 'lesson05&page=33' },
        { number: '7', name: '시간은 어떻게 더할까요', eBook: URL_EBOOK + 108, content: URL_CONTENTS + 'lesson05&page=43' },
        { number: '8', name: '시간은 어떻게 뺄까요', eBook: URL_EBOOK + 110, content: URL_CONTENTS + 'lesson05&page=49' },
        { number: '9', name: '수학의 힘을 키워요', eBook: URL_EBOOK + 112, content: URL_CONTENTS + 'lesson05&page=55' },
        { number: '10, 11', name: '단원을 마무리해요', eBook: URL_EBOOK + 114, content: URL_CONTENTS + 'lesson05&page=56' },
        { number: '', name: '재밌게 놀이를 해요', eBook: URL_EBOOK + 118, content: URL_CONTENTS + 'lesson05&page=67' },
      ],
    },
    {
      name: '분수와 소수',
      corners: [
        { number: '1', name: '단원 도입', eBook: URL_EBOOK + 120, content: URL_CONTENTS + 'lesson06&page=1' },
        { number: '2', name: '똑같이 나누어 볼까요', eBook: URL_EBOOK + 122, content: URL_CONTENTS + 'lesson06&page=5' },
        { number: '3', name: '분수를 알아볼까요(1)', eBook: URL_EBOOK + 124, content: URL_CONTENTS + 'lesson06&page=11' },
        { number: '4', name: '분수를 알아볼까요(2)', eBook: URL_EBOOK + 126, content: URL_CONTENTS + 'lesson06&page=18' },
        { number: '5', name: '분모가 같은 분수의 크기를 비교해 볼까요', eBook: URL_EBOOK + 128, content: URL_CONTENTS + 'lesson06&page=26' },
        { number: '6', name: '단위분수의 크기를 비교해 볼까요', eBook: URL_EBOOK + 130, content: URL_CONTENTS + 'lesson06&page=32' },
        { number: '7', name: '소수를 알아볼까요(1)', eBook: URL_EBOOK + 132, content: URL_CONTENTS + 'lesson06&page=39' },
        { number: '8', name: '소수를 알아볼까요(2)', eBook: URL_EBOOK + 134, content: URL_CONTENTS + 'lesson06&page=47' },
        { number: '9', name: '소수의 크기를 비교해 볼까요', eBook: URL_EBOOK + 136, content: URL_CONTENTS + 'lesson06&page=55' },
        { number: '10', name: '수학의 힘을 키워요', eBook: URL_EBOOK + 138, content: URL_CONTENTS + 'lesson06&page=61' },
        { number: '11, 12', name: '단원을 마무리해요', eBook: URL_EBOOK + 140, content: URL_CONTENTS + 'lesson06&page=62' },
        { number: '', name: '재밌게 놀이를 해요', eBook: URL_EBOOK + 144, content: URL_CONTENTS + 'lesson06&page=73' },
      ],
    },
    {
      name: '창의·융합 프로젝트',
      corners: [
        { number: '1', name: '내 방 꾸미기', eBook: URL_EBOOK + 146, content: URL_CONTENTS + 'lesson07&page=1' },
        { number: '2', name: '카펫을 만들어 바닥 한가운데 놓기', eBook: URL_EBOOK + 148, content: URL_CONTENTS + 'lesson07&page=3' },
        { number: '3', name: '칠교판으로 모양 만들어 벽에 붙이기', eBook: URL_EBOOK + 150, content: URL_CONTENTS + 'lesson07&page=8' },
        { number: '4', name: '책장에 책을 똑같이 나누어 꽂기', eBook: URL_EBOOK + 152, content: URL_CONTENTS + 'lesson07&page=13' },
        { number: '5', name: '방학 계획표 만들고 내 방 완성하기', eBook: URL_EBOOK + 154, content: URL_CONTENTS + 'lesson07&page=18' },
      ],
    },
  ],
};
