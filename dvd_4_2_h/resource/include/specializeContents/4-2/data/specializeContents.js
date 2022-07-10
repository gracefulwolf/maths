(function () {
  // 풍선날리기 분수 계산(7th_flyballoon)
  var games_1_1 = [
    {
      name: "7th_flyballoon",
      question: [[0, 1, 6], "+", [0, 4, 6], "=", "", [0, 2, 6], [0, 3, 6], [0, 5, 6]],
      answer: [[0, 5, 6]],
    },
    {
      name: "7th_flyballoon",
      question: [[0, 2, 8], "+", [0, 5, 8], "=", "", [0, 7, 8], [0, 6, 8], [0, 5, 8]],
      answer: [[0, 7, 8]],
    },
    {
      name: "7th_flyballoon",
      question: [[0, 3, 5], "+", [0, 4, 5], "=", "", [0, 2, 5], [1, 2, 5], [1, 5, 7]],
      answer: [[1, 2, 5]],
    },
    {
      name: "7th_flyballoon",
      question: [[0, 5, 7], "+", [0, 6, 7], "=", "", [1, 6, 7], [0, 5, 7], [1, 4, 7]],
      answer: [[1, 4, 7]],
    },
  ];
  // 인형사격장(7th_dollshooting)
  var games_1_2 = [
    {
      name: "7th_dollshooting",
      question: ["[0,7,8] - [0,3,8]", [0, 4, 8], [0, 5, 8], [0, 6, 8]],
      answer: [[0, 4, 8]],
    },
    {
      name: "7th_dollshooting",
      question: ["[0,5,6] - [0,3,6]", [0, 3, 6], [0, 2, 6], [0, 1, 6]],
      answer: [[0, 2, 6]],
    },
    {
      name: "7th_dollshooting",
      question: ["1 - [0,2,5]", [0, 3, 5], [0, 1, 5], [0, 4, 5]],
      answer: [[0, 3, 5]],
    },
    {
      name: "7th_dollshooting",
      question: ["1 - [0,7,9]", [0, 6, 9], [0, 7, 9], [0, 2, 9]],
      answer: [[0, 2, 9]],
    },
  ];
  // 과녁판3(vic_target3)
  var games_1_3 = [
    {
      name: "vic_target3",
      question: ["[3,2,5]", "[1,1,5]", "", "[3,2,5]", "[2,1,5]", "[4,3,5]", "+", "*"],
      answer: ["[4,3,5]"],
    },
    {
      name: "vic_target3",
      question: ["[2,3,7]", "[4,1,7]", "", "[6,4,7]", "[7,3,7]", "[4,3,7]", "+", "*"],
      answer: ["[6,4,7]"],
    },
    {
      name: "vic_target3",
      question: ["[1,3,4]", "[5,2,4]", "", "[6,2,4]", "[7,1,4]", "[4,3,4]", "+", "*"],
      answer: ["[7,1,4]"],
    },
    {
      name: "vic_target3",
      question: ["[6,3,7]", "[2,6,7]", "", "[9,2,7]", "[8,5,7]", "[7,3,7]", "+", "*"],
      answer: ["[9,2,7]"],
    },
  ];
  // 버스 정류장(vic_busStop)
  var games_1_4 = [
    {
      name: "vic_busStop",
      question: ["[4,5,6]", "[2,1,6]", "", "[3,2,6]", "[1,3,6]", "[2,4,6]", "-", "/"],
      answer: ["[2,4,6]"],
    },
    {
      name: "vic_busStop",
      question: ["[3,6,9]", "[1,3,9]", "", "[1,4,9]", "[2,3,9]", "[3,1,9]", "-", "/"],
      answer: ["[2,3,9]"],
    },
  ];
  // 기차 분수 계산(7th_connectTrain)
  var games_1_5 = [
    {
      name: "7th_connectTrain",
      question: ["3m", "[0,4,5]m", "[2,1,5]m", "[1,2,5]m", "[3,1,5]m"],
      answer: ["[2,1,5]m"],
    },
    {
      name: "7th_connectTrain",
      question: ["6m", "[0,1,3]m", "[4,1,3]m", "[5,2,3]m", "[5,1,3]m"],
      answer: ["[5,2,3]m"],
    },
    {
      name: "7th_connectTrain",
      question: ["4m", "[2,4,6]m", "[2,2,6]m", "[2,1,6]m", "[1,2,6]m"],
      answer: ["[1,2,6]m"],
    },
    {
      name: "7th_connectTrain",
      question: ["5m", "[1,3,7]m", "[3,4,7]m", "[3,2,7]m", "[4,3,7]m"],
      answer: ["[3,4,7]m"],
    },
  ];
  // 버스 정류장(vic_busStop)
  var games_1_6 = [
    {
      name: "vic_busStop",
      question: ["[5,2,7]", "[2,3,7]", "", "[2,6,7]", "[3,1,7]", "[2,5,7]", "-", "/"],
      answer: ["[2,6,7]"],
    },
    {
      name: "vic_busStop",
      question: ["[7,5,12]", "[5,9,12]", "", "[1,8,12]", "[2,7,12]", "[3,6,12]", "-", "/"],
      answer: ["[1,8,12]"],
    },
  ];

  // 도형찾기(dragFigure)
  var games_2_1 = [
    {
      name: "dragFigure",
      question: [
        ["text", "이등변삼각형", ""],
        ["figure", "triangle_8_16"],
        ["figure", "triangle_8_4"],
        ["figure", "triangle_7_5"],
        ["figure", "triangle_8_1"],
        ["figure", "triangle_8_2"],
        ["figure", "triangle_8_3"],
      ],
      answer: [3, 4, 6],
    },
    {
      name: "dragFigure",
      question: [
        ["text", "정삼각형", ""],
        ["figure", "triangle_8_17"],
        ["figure", "triangle_8_3"],
        ["figure", "triangle_8_18"],
        ["figure", "triangle_8_5"],
        ["figure", "triangle_8_1"],
        ["figure", "triangle_8_19"],
      ],
      answer: [1, 4, 6],
    },
    {
      name: "dragFigure",
      question: [
        ["text", "예각삼각형", ""],
        ["figure", "triangle_8_1"],
        ["figure", "triangle_5_2"],
        ["figure", "triangle_8_6"],
        ["figure", "triangle_8_7"],
        ["figure", "triangle_8_8"],
        ["figure", "triangle_8_9"],
      ],
      answer: [2, 4, 5],
    },
    {
      name: "dragFigure",
      question: [
        ["text", "둔각삼각형", ""],
        ["figure", "triangle_8_10"],
        ["figure", "triangle_8_11"],
        ["figure", "triangle_8_12"],
        ["figure", "triangle_8_13"],
        ["figure", "triangle_8_14"],
        ["figure", "triangle_8_15"],
      ],
      answer: [1, 5, 6],
    },
  ];
  // 문장완성(sentenceComplete)
  var games_2_2 = [
    {
      name: "sentenceComplete",
      question: ["두 변의 길이가 같은 삼각형은<br>", "입니다.", "이등변삼각형", "직각삼각형", "예각삼각형", "둔각삼각형"],
      answer: ["이등변삼각형"],
    },
    {
      name: "sentenceComplete",
      question: ["세 변의 길이가 같은 삼각형은<br>", "입니다.", "직각삼각형", "둔각삼각형", "이등변삼각형", "정삼각형"],
      answer: ["정삼각형"],
    },
    {
      name: "sentenceComplete",
      question: ["한 각이 둔각인 삼각형은<br>", "입니다.", "직각삼각형", "둔각삼각형", "예각삼각형", "정삼각형"],
      answer: ["둔각삼각형"],
    },
    {
      name: "sentenceComplete",
      question: ["세 각이 모두 예각인 삼각형은<br>", "입니다.", "직각삼각형", "둔각삼각형", "예각삼각형", "정삼각형"],
      answer: ["예각삼각형"],
    },
  ];
  // ox퀴즈(oxArrow)
  var games_2_3 = [
    {
      name: "oxArrow",
      question: ["이등변삼각형은 두 각의 크기가 같습니다.", "O", "X"],
      answer: ["O"],
    },
    {
      name: "oxArrow",
      question: ["정삼각형은 세 각의 크기가 같습니다.", "O", "X"],
      answer: ["O"],
    },
    {
      name: "oxArrow",
      question: ["이등변삼각형은 예각삼각형이기도 합니다.", "O", "X"],
      answer: ["X"],
    },
    {
      name: "oxArrow",
      question: ["정삼각형은 예각삼각형이기도 합니다.", "O", "X"],
      answer: ["O"],
    },
  ];
  // 원1(radius)
  var games_2_4 = [
    {
      name: "radius_1",
      question: [
        ["./images/42-2-18.svg", [350, 150], 150 * 2],
        [660, 120],
        ["35", "40", "45"],
      ],
      answer: ["35"],
    },
    {
      name: "radius_1",
      question: [
        ["./images/42-2-19.svg", [450, 130], 150 * 2.3],
        [535, 120],
        ["4", "5", "6"],
      ],
      answer: ["6"],
    },
    {
      name: "radius_1",
      question: [
        ["./images/42-2-23.svg", [430, 115], 150 * 2.5],
        [500, 165],
        ["60", "65", "90"],
      ],
      answer: ["60"],
    },
    {
      name: "radius_1",
      question: [
        ["./images/42-2-56.svg", [340, 115], 150 * 2.3],
        [590, 210],
        ["6 cm", "7 cm", "8 cm"],
      ],
      answer: ["7 cm"],
    },
  ];
  // 레일(7th_shootingDrop) v2
  var games_2_5 = [
    {
      name: "7th_shootingDrop_v2",
      question: ["이등변삼각형의 성질 모두 찾기", "세 각의 크기가 같다.", "두 각의 크기가 같다.", "두 변의 길이가 같다.", "세 변의 길이가 같다."],
      answer: ["두 각의 크기가 같다.", "두 변의 길이가 같다."],
    },
    {
      name: "7th_shootingDrop_v2",
      question: ["정삼각형의 성질 모두 찾기", "세 각의 크기가 같다.", "한 각이 직각이다.", "한 각이 둔각이다.", "세 변의 길이가 같다."],
      answer: ["세 각의 크기가 같다.", "세 변의 길이가 같다."],
    },
  ];
  // 분류하여 세기2(figureCount)
  var games_2_6 = [
    {
      name: "figureCount",
      question: [["flatShape_25"], ["text", "이등변<br/>삼각형"], ["text", "예각<br/>삼각형"], "3", "4", "1", "2"],
      answer: ["4", "2"],
    },
    {
      name: "figureCount",
      question: [["flatShape_7"], ["text", "정삼각형"], ["text", "둔각<br/>삼각형"], "3", "4", "1", "2"],
      answer: ["1", "2"],
    },
  ];

  // 주차하기2(parking2)
  var games_3_1 = [
    {
      name: "parking2",
      question: ["영 점 칠육", "0.67", "0.75", "0.76"],
      answer: ["0.76"],
    },
    {
      name: "parking2",
      question: ["영 점 이사오", "0.456", "0.245", "0.624"],
      answer: ["0.245"],
    },
  ];
  // 오락기(gameMachine)
  var games_3_2 = [
    {
      name: "gameMachine",
      question: ["0.82", "0.2", "0.02", "2가 나타내는 수"],
      answer: ["0.02"],
    },
    {
      name: "gameMachine",
      question: ["0.291", "0.2", "0.02", "2가 나타내는 수"],
      answer: ["0.2"],
    },
  ];
  // 먹이먹이기_2개_A(dogCatFoodA)
  var games_3_3 = [
    {
      name: "dogCatFoodA",
      question: ["2.5", "2.47", "큰 소수"],
      answer: ["2.5"],
    },
    {
      name: "dogCatFoodA",
      question: ["0.63", "0.65", "큰 소수"],
      answer: ["0.65"],
    },
  ];
  // 먹이먹이기_2개_B(dogCatFoodB)
  var games_3_4 = [
    {
      name: "dogCatFoodB",
      question: ["0.74", "0.47", "큰 소수"],
      answer: ["0.74"],
    },
  ];
  // 먹이먹이기_3개_B(dogCatFoodTwoB)
  var games_3_5 = [
    {
      name: "dogCatFoodTwoB",
      question: ["5.8", "5.74", "5.732", "가장 작은 소수"],
      answer: ["5.732"],
    },
  ];
  // 개구리 점프3(7th_frogJump)
  var games_3_6 = [
    {
      name: "7th_frogJump",
      question: [0.002, "", 0.2, "", 20, 200, 0.02, 2],
      answer: [0.02, 2],
    },
    {
      name: "7th_frogJump",
      question: [0.027, "", "", 27, 270, 0.27, 2.7, 2700],
      answer: [0.27, 2.7],
    },
  ];
  // 개구리 점프3(7th_frogJump2)
  var games_3_7 = [
    {
      name: "7th_frogJump2",
      question: [9, "", 0.09, "", 0.0009, 0.009, 90, 0.9],
      answer: [0.9, 0.009],
    },
    {
      name: "7th_frogJump2",
      question: [38, "", "", 0.038, 0.0038, 0.38, 380, 3.8],
      answer: [3.8, 0.38],
    },
  ];
  // 매쓰토이(mathToy) - 다른 게임으로 변경(1차 권고 수정)
  var games_3_8 = [
    {
      name: "campingcar",
      question: ["1.4", "2.7", "4.3", "3.1", "4.1", "+"],
      answer: ["4.1"],
    },
    {
      name: "campingcar",
      question: ["2.41", "0.35", "2.76", "2.64", "3.75", "+"],
      answer: ["2.76"],
    },
    {
      name: "campingcar",
      question: ["3.9", "1.4", "2.4", "2.5", "2.6", "-"],
      answer: ["2.5"],
    },
    {
      name: "campingcar",
      question: ["4.72", "3.21", "1.51", "1.52", "1.53", "-"],
      answer: ["1.51"],
    },
  ];
  // 소수 세로셈(7th_verticalSum_prNumber)
  var games_3_9 = [
    {
      name: "7th_verticalSum_prNumber",
      question: [
        ["plus", 4.8, 0.9],
        [
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
        ],
      ],

      answer: [5, 7],
    },
    {
      name: "7th_verticalSum_prNumber",
      question: [
        ["plus", 3.6, 2.57],
        [
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
        ],
      ],

      answer: [6, 1, 7],
    },
    {
      name: "7th_verticalSum_prNumber",
      question: [
        ["minus", 6.8, 3.9],
        [
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
        ],
      ],

      answer: [2, 9],
    },
    {
      name: "7th_verticalSum_prNumber",
      question: [
        ["minus", 1.27, 0.68],
        [
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
        ],
      ],

      answer: [0, 5, 9],
    },
  ];

  // 문장완성(sentenceComplete)
  var games_4_1 = [
    {
      name: "sentenceComplete",
      question: ["두 직선이 만나서 이루는 각이 직각일 때,<br>두 직선은 서로 ", "(이)라고 합니다.", "직각", "수직", "평행", "거리"],
      answer: ["수직"],
    },
    {
      name: "sentenceComplete",
      question: ["두 직선이 서로 수직으로 만나면, 한 직선은<br> 다른 직선에 대한 ", "(이)라고 합니다.", "평행선", "직선", "둔각", "수선"],
      answer: ["수선"],
    },
    {
      name: "sentenceComplete",
      question: ["서로 만나지 않는 두 직선을<br>", "하다고 합니다.", "평행", "수직", "수선", "직각"],
      answer: ["평행"],
    },
    {
      name: "sentenceComplete",
      question: ["평행한 두 직선을<br>", "(이)라고 합니다.", "수선", "직선", "직각", "평행선"],
      answer: ["평행선"],
    },
  ];
  // ox퀴즈(oxArrow)
  var games_4_2 = [
    {
      name: "oxArrow",
      question: ["삼각자를 사용하면 주어진 직선에 대한 수선을 그을 수 있습니다.", "O", "X"],
      answer: ["O"],
    },
    {
      name: "oxArrow",
      question: ["평행선을 긋기 위해서는 삼각자를 두 개 <br>사용합니다.", "O", "X"],
      answer: ["O"],
    },
    {
      name: "oxArrow",
      question: ["평행선 사이의 거리는 평행선 사이에 그은 선분 중 가장 긴 선분의 길이입니다.", "O", "X"],
      answer: ["X"],
    },
    {
      name: "oxArrow",
      question: ["평행선의 한 직선에서 다른 직선에 그은 수선의 길이를 평행선 사이의 거리라고 합니다.", "O", "X"],
      answer: ["O"],
    },
    {
      name: "oxArrow",
      question: ["마름모는 네 변의 길이가 같습니다.", "O", "X"],
      answer: ["O"],
    },
  ];
  // 문장완성(sentenceComplete)
  var games_4_3 = [
    {
      name: "sentenceComplete",
      question: ["평행한 변이 있는 사각형을<br>", "(이)라고 합니다.", "사다리꼴", "평행사변형", "마름모", "정사각형"],
      answer: ["사다리꼴"],
    },
    {
      name: "sentenceComplete",
      question: ["마주 보는 두 쌍의 변이 서로 평행한 사각형을<br>", "(이)라고 합니다.", "직사각형", "평행사변형", "마름모", "정사각형"],
      answer: ["평행사변형"],
    },
    {
      name: "sentenceComplete",
      question: ["네 변의 길이가 모두 같은 사각형을<br>", "(이)라고 합니다.", "마름모", "직사각형", "정사각형", "평행사변형"],
      answer: ["마름모"],
    },
  ];
  // 원1(radius)
  var games_4_4 = [
    {
      name: "radius_1",
      question: [
        ["./images/42-4-34.svg", [400, 70], 340, "변 ㄱㄹ과 평행한 변은 변 [dropArea]입니다."],
        [750, 105],
        ["ㄱㄴ", "ㄴㄷ", "ㄷㄹ"],
      ],
      answer: ["ㄴㄷ"],
    },
    {
      name: "radius_1",
      question: [
        ["./images/42-4-21.svg", [340, 70], 340, "변 ㄴㄷ과 평행한 변은 변 [dropArea]입니다."],
        [750, 105],
        ["ㄱㄴ", "ㄷㄹ", "ㄱㄹ"],
      ],
      answer: ["ㄱㄹ"],
    },
    {
      name: "radius_1",
      question: [
        ["./images/42-4-68.svg", [340, 70], 340, "마름모의 빈칸에 알맞은 수는 [dropArea]입니다."],
        [750, 105],
        ["8", "7", "6"],
      ],
      answer: ["8"],
    },
  ];
  // 레일(7th_shootingDrop_v2)
  var games_4_5 = [
    {
      name: "7th_shootingDrop_v2",
      question: ["사다리꼴의 성질 찾기", "네 변의 길이가 같다.", "네 각의 크기가 같다.", "평행한 변이 있다.", "마주 보는 두 각의 크기가 같다."],
      answer: ["평행한 변이 있다."],
    },
    {
      name: "7th_shootingDrop_v2",
      question: ["평행사변형의 성질 찾기", "마주 보는 두 각의 크기가 같다.", "네 변의 길이가 같다.", "이웃한 두 각의 크기가 같다.", "마주 보는 두 변의 길이가 같다."],
      answer: ["마주 보는 두 각의 크기가 같다.", "마주 보는 두 변의 길이가 같다."],
    },
    {
      name: "7th_shootingDrop_v2",
      question: ["마름모의 성질 찾기", "마주 보는 두 각의 크기가 같다.", "네 변의 길이가 같다.", "이웃한 두 각의 크기가 같다.", "네 각의 크기가 같다."],
      answer: ["마주 보는 두 각의 크기가 같다.", "네 변의 길이가 같다."],
    },
  ];
  // 분류하여 세기2(figureCount)
  var games_4_6 = [
    {
      name: "figureCount",
      question: [["flatShape_2"], ["text", "직사각형"], ["text", "정사각형"], "3", "4", "1", "2"],
      answer: ["4", "2"],
    },
    {
      name: "figureCount",
      question: [["flatShape_6"], ["text", "평행<br>사변형"], ["text", "마름모"], "3", "4", "1", "2"],
      answer: ["3", "1"],
    },
  ];

  // 문장완성(sentenceComplete)
  var games_5_1 = [
    {
      name: "sentenceComplete",
      question: ["연속적으로 변화하는 양을 점으로 표시하고 그 점들을 선분으로 이어 그린 그래프를 ", "라고 합니다.", "표", "그림그래프", "막대그래프", "꺾은선그래프"],
      answer: ["꺾은선그래프"],
    },
    {
      name: "sentenceComplete",
      question: ["그래프에서 일부분을 생략할 때<br>", "을 사용합니다.", "가로 눈금", "세로 눈금", "물결선", "제목"],
      answer: ["물결선"],
    },
    {
      name: "sentenceComplete",
      question: ["이 그래프는 ", "을/를 조사하여 나타낸 <br/>꺾은선그래프입니다.", "불량품 수", "좋아하는 음식", "하루 기온", "일주일 날씨", { type: "image", source: "./images/ik-42-5-02.svg", position: "left", width: 1000, height: 380 }],
      answer: ["불량품 수"],
    },
  ];
  // ox퀴즈(oxArrow)
  var games_5_2 = [
    {
      name: "oxArrow",
      question: ["꺾은선그래프는 자료의 변화를 <br>한눈에 알아보기 쉽습니다.", "O", "X"],
      answer: ["O"],
    },
    {
      name: "oxArrow",
      question: ["<div style='margin-left: 70px;'>세로는 월을 나타냅니다.</div>", "O", "X", { type: "image", source: "./images/ik-42-5-04.svg", height: 430 }],
      answer: ["X"],
    },
    {
      name: "oxArrow",
      question: ["<div style='margin-left: 50px;'>가로는 요일을 나타냅니다.</div>", "O", "X", { type: "image", source: "./images/ik-42-5-13.svg", height: 430 }],
      answer: ["O"],
    },
    {
      name: "oxArrow",
      question: ["관람객 수는 줄어들고 있습니다.", "O", "X", { type: "image", source: "./images/ik-42-5-13.svg", width: 1020, height: 430 }],
      answer: ["X"],
    },
  ];
  // 비교하기(양)(compareA)
  var games_5_3 = [
    /* 문제 삭제
    {
      name: "compareA",
      question: ["변화를 한눈에 알아보기 쉬운 것은?", "42-5-03.svg", "42-5-04.svg"],
      answer: ["42-5-04.svg"],
    },*/
    {
      name: "compareA",
      question: ["판매량의 변화가 더 잘 나타나는 그래프는?", "42-5-05.svg", "42-5-06.svg"],
      answer: ["42-5-06.svg"],
    },
  ];
  // 원2(diameter)
  var games_5_4 = [
    {
      name: "diameter",
      question: [
        ["42-5-05_1", "42-5-06_1"],
        [
          [85, 65, 210 * 2.5, 190 * 2.5],
          [615, 65, 210 * 2.5, 190 * 2.5],
        ],
        [190, 200, 185],
        [
          [690, 140],
          [690, 294],
          [690, 370],
        ],
        0.4,
        [
          [350, 575],
          [570, 575],
          [790, 575],
        ],
      ],
      answer: [200, 190, 185],
    },
    {
      name: "diameter",
      question: [
        ["42-5-21"],
        [[200, 55, 230 * 3.5, 140 * 3.5]],
        ["키", "날짜"],
        [
          [260, 455],
          [365, 480],
        ],
        0.4,
        [
          [480, 560],
          [700, 560],
        ],
      ],
      answer: ["키", "날짜"],
    },
  ];
  // 문장완성(sentenceComplete)
  var games_5_5 = [
    {
      name: "sentenceComplete",
      question: ["22일의 <br>양파 싹의 키는<br>", "cm입니다.", "0", "1", "2", "3", { type: "image", source: "./images/42-5-21.svg", position: "left", width: 940, height: 440 }],
      answer: ["1"],
    },
    {
      name: "sentenceComplete",
      question: ["36일의 <br>양파 싹의 키는<br>", "cm입니다.", "10", "15", "20", "25", { type: "image", source: "./images/42-5-21.svg", position: "left", width: 960, height: 440 }],
      answer: ["20"],
    },
    {
      name: "sentenceComplete",
      question: ["7일 전과 비교하여 양파 싹의 키가 가장 많이 큰 때는", "입니다.", "22일", "29일", "36일", "43일", { type: "image", source: "./images/42-5-21.svg", position: "left", width: 1040, height: 440 }],
      answer: ["36일"],
    },
    {
      name: "sentenceComplete",
      question: ["양파 싹은 ", "일 <br>이후부터 자라기 <br>시작합니다.", "1", "8", "15", "22", { type: "image", source: "./images/42-5-21.svg", position: "left", width: 980, height: 440 }],
      answer: ["15"],
    },
  ];
  // 카드 옮기기(7th_moveBox_noHint)
  var games_5_6 = [
    {
      name: "7th_moveBox_noHint",
      question: ["자료를 수집하여 분석하는 방법을 왼쪽부터 차례대로 옮겨 놓으세요.", "자료 수집하기", "꺾은선그래프로 자료 해석하기", "주제<br>정하기", "꺾은선<br>그래프로<br>나타내기"],
      answer: ["주제<br>정하기", "자료 수집하기", "꺾은선<br>그래프로<br>나타내기", "꺾은선그래프로 자료 해석하기"],
    },
  ];
  // 원2(diameter)
  var games_5_7 = [
    {
      name: "diameter",
      question: [
        ["42-5-07"],
        [[160, 60, 300 * 1.8, 220 * 1.8]],
        [202, 204, 215, 217, 218],
        [
          [203, 572],
          [203 + 114 * 1, 572],
          [203 + 114 * 2, 572],
          [203 + 114 * 3, 572],
          [203 + 114 * 4, 572],
        ],
        0.5,
        [
          [910, 90],
          [910, 200],
          [910, 310],
          [910, 420],
          [910, 530],
        ],
        [
          "과자 판매량",
          [
            ["월(월)", "5", "6", "7", "8", "9"],
            ["판매량<br>(상자)", "", "", "", "", ""],
          ],
          [85, 460],
          { margin: 4, fontSize: 24 },
        ],
      ],
      answer: [202, 204, 215, 218, 217],
    },
  ];
  // 문장완성(sentenceComplete)
  var games_5_8 = [
    {
      name: "sentenceComplete",
      question: ["2018년에 이사 온<br>가구는 ", "가구<br>입니다.", "5", "10", "15", "20", { type: "image", source: "./images/42-5-10.svg", position: "left", width: 1000, height: 400 }],
      answer: ["15"],
    },
    {
      name: "sentenceComplete",
      question: ["초등학교 입학생 수가 <br>가장 많은 때는", "년입니다.", "2016", "2017", "2018", "2019", { type: "image", source: "./images/42-5-11.svg", position: "left", width: 1040, height: 400 }],
      answer: ["2016"],
    },
  ];

  // 문장완성(sentenceComplete)
  var games_6_1 = [
    {
      name: "sentenceComplete",
      question: ["선분으로만 둘러싸인 도형을<br>", "(이)라고 합니다.", "원", "다각형", "평행선", "각"],
      answer: ["다각형"],
    },
    {
      name: "sentenceComplete",
      question: ["변의 길이가 모두 같고, 각의 크기가 모두 같은 다각형을", "(이)라고 합니다.", "각", "원", "수선", "정다각형"],
      answer: ["정다각형"],
    },
    {
      name: "sentenceComplete",
      question: ["다각형에서 이웃하지 않는 두 꼭짓점을 <br>이은 선분을 ", "(이)라고 합니다.", "대각선", "변", "평행선", "수선"],
      answer: ["대각선"],
    },
    {
      name: "sentenceComplete",
      question: ["삼각형은 대각선이 ", "개입니다.", "0", "1", "2", "3"],
      answer: ["0"],
    },
    {
      name: "sentenceComplete",
      question: ["대각선이 2개인 다각형은 ", "입니다.", "삼각형", "사각형", "오각형", "육각형"],
      answer: ["사각형"],
    },
  ];
  // 도형찾기(dragFigure)
  var games_6_2 = [
    {
      name: "dragFigure",
      question: [
        ["text", "오각형", ""],
        ["figure", "pentagon_5_2"],
        ["figure", "square_4_4"],
        ["figure", "square_6_2"],
        ["figure", "pentagon_5_1"],
        ["figure", "square_5_1"],
        ["figure", "pentagon_1_5"],
      ],
      answer: [1, 4, 6],
    },
    {
      name: "dragFigure",
      question: [
        ["text", "팔각형", ""],
        ["figure", "square_6_2"],
        ["figure", "octagon_1"],
        ["figure", "triangle_8_20"],
        ["figure", "octagon_2"],
        ["figure", "square_6_3"],
        ["figure", "octagon_3"],
      ],
      answer: [2, 4, 6],
    },
    {
      name: "dragFigure",
      question: [
        ["text", "정육각형", ""],
        ["figure", "square_2_1"],
        ["figure", "hexagon_1_3"],
        ["figure", "square_6_3"],
        ["figure", "hexagon_1_5"],
        ["figure", "pentagon_1_2"],
        ["figure", "hexagon_5_1"],
      ],
      answer: [2, 4, 6],
    },
    {
      name: "dragFigure",
      question: [
        ["text", "정칠각형", ""],
        ["figure", "pentagon_1_2"],
        ["figure", "hexagon_1_3"],
        ["figure", "hexagon_5_2"],
        ["figure", "hexagon_5_3"],
        ["figure", "heptagon_1"],
        ["figure", "heptagon_2"],
      ],
      answer: [5, 6],
    },
  ];
  // ox퀴즈(oxArrow)
  var games_6_3 = [
    {
      name: "oxArrow",
      question: ["변이 7개인 다각형을 칠각형이라고 부릅니다.", "O", "X"],
      answer: ["O"],
    },
    {
      name: "oxArrow",
      question: ["다각형의 변의 개수와 꼭짓점의 개수는 <br/> 같습니다.", "O", "X"],
      answer: ["O"],
    },
    {
      name: "oxArrow",
      question: ["각의 크기가 모두 같은 다각형을 정다각형이라고 합니다.", "O", "X"],
      answer: ["X"],
    },
    {
      name: "oxArrow",
      question: ["변의 길이가 모두 같은 다각형을 정다각형이라고 합니다.", "O", "X"],
      answer: ["X"],
    },
  ];
  // 원1(radius)
  var games_6_4 = [
    {
      name: "radius_1",
      question: [
        ["./images/4-2-6_14.jpg", [430, 50], 380],
        [520, 425],
        ["삼각형", "사각형", "오각형"],
      ],
      answer: ["오각형"],
    },
    {
      name: "radius_1",
      question: [
        ["./images/4-2-6_15.jpg", [430, 50], 380],
        [520, 425],
        ["정팔각형", "정칠각형", "정육각형"],
      ],
      answer: ["정팔각형"],
    },
    {
      name: "radius_1",
      question: [
        ["./images/4-2-6_16.jpg", [430, 50], 380],
        [520, 425],
        ["정육각형", "정삼각형", "정사각형"],
      ],
      answer: ["정삼각형"],
    },
  ];
  // 칠교판(tangram)
  var games_6_5 = [
    {
      name: "tangram",
      question: ["square1"],
      // answer: ["오각형"],
    },
  ];

  var gamesArray = [
    [].concat(games_1_1).concat(games_1_2).concat(games_1_3).concat(games_1_4).concat(games_1_5).concat(games_1_6),
    [].concat(games_2_1).concat(games_2_2).concat(games_2_3).concat(games_2_4).concat(games_2_5).concat(games_2_6),
    [].concat(games_3_1).concat(games_3_2).concat(games_3_3).concat(games_3_4).concat(games_3_5).concat(games_3_6).concat(games_3_7).concat(games_3_8).concat(games_3_9),
    [].concat(games_4_1).concat(games_4_2).concat(games_4_3).concat(games_4_4).concat(games_4_5).concat(games_4_6),
    [].concat(games_5_1).concat(games_5_2).concat(games_5_3).concat(games_5_4).concat(games_5_5).concat(games_5_6).concat(games_5_7).concat(games_5_8),
    [].concat(games_6_1).concat(games_6_2).concat(games_6_3).concat(games_6_4),
  ];

  gamesArray = shakeGamesArray(gamesArray);

  function shakeGamesArray(gamesArray) {
    console.log('>> shake games');
    return gamesArray.map(function(games, idx) {
      var gamesLength = games.length;
      var randomNumbers = [];
  
      while (randomNumbers.length < gamesLength) {
        var tempRandomNumber = Math.floor(Math.random() * gamesLength);
  
        if (randomNumbers.indexOf(tempRandomNumber) < 0) {
          randomNumbers.push(tempRandomNumber);
        }
      }
  
      console.log('* ' + (idx + 1) + '단원:', randomNumbers.join(', '));
  
      return randomNumbers.map(function(randomNumber) {
        return games[randomNumber];
      });
    });
  }

  var contents = {
    grade: "초등학교",
    subject: "수학 4-2",
    title: "놀이 수학",
    lesson: [
      {
        title: "분수의 덧셈과 뺄셈",
        subTitle: "너도나도",
        games: gamesArray[0],
      },
      {
        title: "삼각형",
        subTitle: "재미있게",
        games: gamesArray[1],
      },
      {
        title: "소수의 덧셈과 뺄셈",
        subTitle: "너도나도",
        games: gamesArray[2],
      },
      {
        title: "사각형",
        subTitle: "많이많이",
        games: gamesArray[3],
      },
      {
        title: "자료와 꺾은선그래프",
        subTitle: "풀어보니",
        games: gamesArray[4],
      },
      {
        title: "다각형",
        subTitle: "실력쑥쑥",
        games: gamesArray[5],
      },
    ],
  };

  window.$SPECIALIZECONTENTS = contents;
})();
