(function () {
  // 세로셈블록(heightLengthBlock)
  var games_1_1 = [
    {
      name: "heightLengthBlock",
      question: [341, 142, 482, 483, 484, "+"],
      answer: [483],
    },
    {
      name: "heightLengthBlock",
      question: [315, 226, 531, 541, 551, "+"],
      answer: [541],
    },
    {
      name: "heightLengthBlock",
      question: [275, 638, 903, 913, 923, "+"],
      answer: [913],
    },
    {
      name: "heightLengthBlock",
      question: [959, 474, 1433, 1443, 1444, "+"],
      answer: [1433],
    },
  ];
  // 기차2(Train)
  var games_1_2 = [
    {
      name: "Train",
      question: [271, 115, 376, 386, 396, "+"],
      answer: [386],
    },
    {
      name: "Train",
      question: [173, 318, 491, 492, 493, "+"],
      answer: [491],
    },
    {
      name: "Train",
      question: [279, 132, 401, 411, 421, "+"],
      answer: [411],
    },
  ];
  // 매쓰토이(mathToy) - 다른 게임으로 교체
  var games_1_3 = [
    {
      name: "Train",
      question: [231, 339, 560, 570, 580, "+"],
      answer: [570],
    },
    {
      name: "lockClick",
      question: [368, 375, 733, 743, 753, "합"],
      answer: [743],
    },
    {
      name: "lockClick",
      question: [989, 829, 1808, 1818, 1828, "합"],
      answer: [1818],
    },
  ];
  // 세로셈블록(heightLengthBlock)
  var games_1_4 = [
    {
      name: "heightLengthBlock",
      question: [487, 447, 20, 30, 40, "-"],
      answer: [40],
    },
    {
      name: "heightLengthBlock",
      question: [840, 736, 104, 105, 106, "-"],
      answer: [104],
    },
    {
      name: "heightLengthBlock",
      question: [625, 596, 19, 29, 39, "-"],
      answer: [29],
    },
  ];
  // 자물쇠(lockClick)
  var games_1_5 = [
    {
      name: "lockClick",
      question: [926, 525, 401, 411, 421, "차"],
      answer: [401],
    },
    {
      name: "lockClick",
      question: [341, 228, 113, 123, 133, "차"],
      answer: [113],
    },
    {
      name: "lockClick",
      question: [943, 904, 38, 39, 40, "차"],
      answer: [39],
    },
    {
      name: "lockClick",
      question: [355, 278, 76, 77, 78, "차"],
      answer: [77],
    },
  ];
  // 기차2(Train)
  var games_1_6 = [
    {
      name: "Train",
      question: [954, 850, 104, 114, 124, "-"],
      answer: [104],
    },
    {
      name: "Train",
      question: [586, 249, 337, 338, 339, "-"],
      answer: [337],
    },
    {
      name: "Train",
      question: [742, 656, 66, 76, 86, "-"],
      answer: [86],
    },
  ];
  // 짝찾기(도형) 3X2(pairCard)
  var games_2_1 = [
    {
      name: "pairCard",
      question: [
        ["text", "선분 ㄱㄴ"],
        ["line", "line_17"],
        ["text", "선분 ㅁㅂ"],
        ["text", "선분 ㄷㄹ"],
        ["line", "line_18"],
        ["line", "line_19"],
      ],
      answer: [
        [0, 1],
        [2, 4],
        [3, 5],
      ],
    },
    {
      name: "pairCard",
      question: [
        ["text", "반직선<br>ㄹㄷ"],
        ["text", "반직선<br>ㅁㅂ"],
        ["line", "line_20"],
        ["text", "반직선<br>ㄴㄱ"],
        ["line", "line_21"],
        ["line", "line_22"],
      ],
      answer: [
        [0, 4],
        [1, 2],
        [3, 5],
      ],
    },
    {
      name: "pairCard",
      question: [
        ["text", "직선 ㄷㄹ"],
        ["line", "line_23"],
        ["line", "line_24"],
        ["text", "직선 ㄱㄴ"],
        ["line", "line_25"],
        ["text", "직선 ㅅㅇ"],
      ],
      answer: [
        [0, 2],
        [1, 3],
        [4, 5],
      ],
    },
    {
      name: "pairCard",
      question: [
        ["text", "반직선<br>ㄱㄴ"],
        ["text", "선분 ㄱㄴ"],
        ["line", "line_1"],
        ["text", "반직선<br>ㄴㄱ"],
        ["line", "line_26"],
        ["line", "line_27"],
      ],
      answer: [
        [0, 5],
        [1, 4],
        [2, 3],
      ],
    },
    {
      name: "pairCard",
      question: [
        ["text", "직선 ㅅㅇ"],
        ["text", "선분 ㅅㅇ"],
        ["line", "line_28"],
        ["line", "line_7"],
        ["text", "직선 ㅁㅂ"],
        ["line", "line_29"],
      ],
      answer: [
        [0, 5],
        [1, 2],
        [3, 4],
      ],
    },
    {
      name: "pairCard",
      question: [
        ["line", "line_21"],
        ["line", "line_30"],
        ["line", "line_6"],
        ["text", "반직선<br>ㄹㄷ"],
        ["text", "반직선<br>ㄷㄹ"],
        ["text", "직선 ㄷㄹ"],
      ],
      answer: [
        [0, 3],
        [1, 5],
        [2, 4],
      ],
    },
    {
      name: "pairCard",
      question: [
        ["figure", "angle_1_1"],
        ["text", "각이 3개"],
        ["figure", "angle_2_1"],
        ["figure", "triangle_1_3"],
        ["text", "각이 2개"],
        ["text", "각이 1개"],
      ],
      answer: [
        [0, 5],
        [1, 3],
        [2, 4],
      ],
    },
    {
      name: "pairCard",
      question: [
        ["text", "각이 6개"],
        ["figure", "square_1_2"],
        ["text", "각이 4개"],
        ["figure", "hexagon_2_4"],
        ["figure", "angle_2_2"],
        ["text", "각이 2개"],
      ],
      answer: [
        [0, 3],
        [1, 2],
        [4, 5],
      ],
    },
    {
      name: "pairCard",
      question: [
        ["text", "직각이<br>1개"],
        ["text", "직각이<br>3개"],
        ["figure", "angle_5_1"],
        ["figure", "angle_2_2"],
        ["figure", "triangle_3_3"],
        ["text", "직각이<br>2개"],
      ],
      answer: [
        [0, 4],
        [1, 2],
        [3, 5],
      ],
    },
    {
      name: "pairCard",
      question: [
        ["figure", "square_1_1"],
        ["text", "직각이<br>1개"],
        ["text", "직각이<br>4개"],
        ["figure", "angle_1_2"],
        ["figure", "angle_5_2"],
        ["text", "직각이<br>3개"],
      ],
      answer: [
        [0, 2],
        [1, 3],
        [4, 5],
      ],
    },
  ];
  // 풍선 터트리기 4X2(boomBalloon)
  var games_2_2 = [
    {
      name: "boomBalloon",
      question: ["직각삼각형", "을 고르시오.", ["figure", "triangle_3_1"], ["figure", "triangle_2_5"], ["figure", "triangle_6_3"], ["figure", "triangle_5_3"], ["figure", "triangleLine_5"], ["figure", "triangle_4_1"], ["figure", "triangle_7_2"], ["figure", "triangle_1_4"]],
      answer: [0, 2, 6],
    },
    {
      name: "boomBalloon",
      question: ["직각삼각형", "을 고르시오.", ["figure", "triangle_4_3"], ["figure", "triangle_3_5"], ["figure", "triangleLine_3"], ["figure", "triangle_1_2"], ["figure", "triangle_2_4"], ["figure", "triangle_4_3"], ["figure", "triangle_3_2"], ["figure", "triangle_5_5"]],
      answer: [1, 2, 6],
    },
    {
      name: "boomBalloon",
      question: ["직사각형", "을 고르시오.", ["figure", "triangleLine_3"], ["figure", "triangleLine_2"], ["figure", "squareLine_5"], ["figure", "squareLine_1"], ["figure", "squareLine_2"], ["figure", "triangleLine_4"], ["figure", "triangleLine_5"], ["figure", "squareLine_3"]],
      answer: [3, 4, 7],
    },
    {
      name: "boomBalloon",
      question: ["직사각형", "을 고르시오.", ["figure", "square_5_5"], ["figure", "square_3_1"], ["figure", "triangle_6_2"], ["figure", "triangle_7_4"], ["figure", "square_6_1"], ["figure", "square_2_2"], ["figure", "triangleLine_3"], ["figure", "square_5_5"]],
      answer: [1, 5],
    },
    {
      name: "boomBalloon",
      question: ["정사각형", "을 고르시오.", ["figure", "square_5_4"], ["figure", "square_3_5"], ["figure", "square_1_4"], ["figure", "square_5_1"], ["figure", "square_6_1"], ["figure", "square_4_3"], ["figure", "square_5_3"], ["figure", "square_2_4"]],
      answer: [2, 5],
    },
    {
      name: "boomBalloon",
      question: ["정사각형", "을 고르시오.", ["figure", "square_1_1"], ["figure", "square_2_3"], ["figure", "square_3_4"], ["figure", "square_5_5"], ["figure", "square_1_2"], ["figure", "triangle_3_2"], ["figure", "triangle_4_3"], ["figure", "squareLine_2"]],
      answer: [0, 4],
    },
  ];
  // 분류하기2(categorize)
  var games_2_3 = [
    {
      name: "categorize",
      question: [
        ["text", ["직각삼각형"], ["직사각형"]],
        ["figure", "triangle_3_1"],
        ["figure", "triangle_3_2"],
        ["figure", "square_2_1"],
        ["figure", "square_3_4"],
        ["figure", "triangle_1_3"],
        ["figure", "triangle_4_2"],
        ["figure", "square_4_5"],
        ["figure", "square_1_2"],
      ],
      answer: [
        [0, 1],
        [2, 3, 6, 7],
      ],
    },
    {
      name: "categorize",
      question: [
        ["text", ["정사각형"], ["직각삼각형"]],
        ["figure", "square_1_3"],
        ["figure", "square_1_1"],
        ["figure", "triangle_3_3"],
        ["figure", "triangle_3_5"],
        ["figure", "square_3_2"],
        ["figure", "square_5_5"],
        ["figure", "triangle_1_1"],
        ["figure", "triangle_5_3"],
      ],
      answer: [
        [0, 1],
        [2, 3],
      ],
    },
  ];
  // 짝찾기(도형) 3X2(pairCard)
  var games_2_4 = [
    {
      name: "pairCard",
      question: [
        ["figure", "square_3_1"],
        ["figure", "triangle_3_5"],
        ["figure", "square_2_1"],
        ["figure", "square_1_3"],
        ["figure", "square_1_2"],
        ["figure", "triangle_3_2"],
      ],
      answer: [
        [0, 2],
        [1, 5],
        [3, 4],
      ],
    },
    {
      name: "pairCard",
      question: [
        ["figure", "square_3_4"],
        ["figure", "square_1_5"],
        ["figure", "triangle_3_4"],
        ["figure", "triangle_3_1"],
        ["figure", "square_1_4"],
        ["figure", "square_2_5"],
      ],
      answer: [
        [0, 5],
        [1, 4],
        [2, 3],
      ],
    },
  ];
  // 도넛 나누기A(vic_donutDevideDragA)
  var games_3_1 = [
    {
      name: "vic_donutDevideDragA",
      question: [8],
      answer: [4],
    },
    {
      name: "vic_donutDevideDragA",
      question: [10],
      answer: [5],
    },
  ];
  // 도넛 나누기B(vic_donutDevideDragB)
  var games_3_2 = [
    {
      name: "vic_donutDevideDragB",
      question: [9],
      answer: [3],
    },
    {
      name: "vic_donutDevideDragB",
      question: [12],
      answer: [4],
    },
    {
      name: "vic_donutDevideDragB",
      question: [15],
      answer: [5],
    },
  ];
  // 토끼굴(vic_rabbitcave)
  var games_3_3 = [
    {
      name: "vic_rabbitcave",
      question: [15, 3, 4, 5, 6, "/"],
      answer: [5],
    },
    {
      name: "vic_rabbitcave",
      question: [28, 4, 7, 9, 11, "/"],
      answer: [7],
    },
    {
      name: "vic_rabbitcave",
      question: [48, 8, 6, 7, 8, "/"],
      answer: [6],
    },
  ];
  // 미끄럼틀(vic_slide)
  var games_3_4 = [
    {
      name: "vic_slide",
      question: [21, 3, 6, 7, 8, "/"],
      answer: [7],
    },
    {
      name: "vic_slide",
      question: [30, 6, 1, 3, 5, "/"],
      answer: [5],
    },
    {
      name: "vic_slide",
      question: [63, 9, 7, 8, 9, "/"],
      answer: [7],
    },
  ];
  // 완두콩(vic_pea)
  var games_3_5 = [
    {
      name: "vic_pea",
      question: [18, 3, 4, 5, 6, "/"],
      answer: [6],
    },
    {
      name: "vic_pea",
      question: [36, 9, 3, 4, 5, "/"],
      answer: [4],
    },
    {
      name: "vic_pea",
      question: [54, 6, 7, 8, 9, "/"],
      answer: [9],
    },
  ];
  // 매쓰토이(mathToy) - 다른 게임으로 변경(1차 권고 수정)
  var games_3_6 = [
    {
      name: "vic_rabbitcave",
      question: [28, 7, 3, 4, 5, "/"],
      answer: [4],
    },
    {
      name: "vic_slide",
      question: [54, 9, 6, 7, 8, "/"],
      answer: [6],
    },
    {
      name: "vic_pea",
      question: [64, 8, 6, 7, 8, "/"],
      answer: [8],
    },
  ];
  // 세로셈 음료만들기(vendingmachine)
  var games_3_7 = [
    {
      name: "vendingmachine",
      question: [27, 8, 9, 10, 3, "/"],
      answer: [9],
    },
    {
      name: "vendingmachine",
      question: [32, 6, 7, 8, 4, "/"],
      answer: [8],
    },
    {
      name: "vendingmachine",
      question: [48, 5, 6, 7, 8, "/"],
      answer: [6],
    },
  ];
  // 가로셈_개구리(frog)
  var games_4_1 = [
    {
      name: "frog",
      question: [10, 3, 20, 30, 40, "x"],
      answer: [30],
    },
    {
      name: "frog",
      question: [30, 3, 70, 80, 90, "x"],
      answer: [90],
    },
    {
      name: "frog",
      question: [40, 2, 70, 80, 90, "x"],
      answer: [80],
    },
    {
      name: "frog",
      question: [20, 4, 70, 80, 90, "x"],
      answer: [80],
    },
    {
      name: "frog",
      question: [10, 6, 50, 60, 70, "x"],
      answer: [60],
    },
  ];
  // 세로셈블록(heightLengthBlock)
  var games_4_2 = [
    {
      name: "heightLengthBlock",
      question: [23, 3, 69, 79, 89, "*"],
      answer: [69],
    },
    {
      name: "heightLengthBlock",
      question: [11, 6, 66, 67, 68, "*"],
      answer: [66],
    },
    {
      name: "heightLengthBlock",
      question: [32, 2, 44, 54, 64, "*"],
      answer: [64],
    },
    {
      name: "heightLengthBlock",
      question: [21, 4, 82, 83, 84, "*"],
      answer: [84],
    },
  ];
  // 세로셈(vic_keypadCountClickV)
  var games_4_3 = [
    {
      name: "vic_keypadCountClickV",
      question: [16, 6, "*"],
      answer: [96],
    },
    {
      name: "vic_keypadCountClickV",
      question: [24, 3, "*"],
      answer: [72],
    },
    {
      name: "vic_keypadCountClickV",
      question: [92, 3, "*"],
      answer: [276],
    },
    {
      name: "vic_keypadCountClickV",
      question: [74, 2, "*"],
      answer: [148],
    },
    {
      name: "vic_keypadCountClickV",
      question: [73, 4, "*"],
      answer: [292],
    },
    {
      name: "vic_keypadCountClickV",
      question: [84, 6, "*"],
      answer: [504],
    },
  ];
  // 기차2(Train)
  var games_4_4 = [
    {
      name: "Train",
      question: [71, 9, 638, 639, 640, "*"],
      answer: [639],
    },
    {
      name: "Train",
      question: [15, 6, 70, 80, 90, "*"],
      answer: [90],
    },
    {
      name: "Train",
      question: [46, 2, 90, 91, 92, "*"],
      answer: [92],
    },
    {
      name: "Train",
      question: [46, 3, 128, 138, 148, "*"],
      answer: [138],
    },
    {
      name: "Train",
      question: [59, 4, 236, 246, 256, "*"],
      answer: [236],
    },
  ];
  // 길이 재기(rulerLength)
  var games_5_1 = [
    {
      name: "rulerLength",
      question: ["숟가락", [6, 7, 8], ["7cm 4mm", "7cm 5mm", "7cm 6mm"]],
      answer: ["7cm 6mm"],
    },
    {
      name: "rulerLength",
      question: ["크레파스", [8, 4, 5], ["5cm 4mm", "5cm 8mm", "4cm 8mm"]],
      answer: ["4cm 8mm"],
    },
    {
      name: "rulerLength",
      question: ["붓", [5, 7, 8], ["7cm 8mm", "8cm 7mm", "7cm 5mm"]],
      answer: ["7cm 5mm"],
    },
    {
      name: "rulerLength",
      question: ["기차", [7, 8, 9], ["9cm 7mm", "8cm 7mm", "7cm 9mm"]],
      answer: ["8cm 7mm"],
    },
  ];
  // 짝찾기(도형) 4X2(pairCard2)
  var games_5_2 = [
    {
      name: "pairCard2",
      question: [
        ["text", "7cm 6mm", ""],
        ["text", "58mm", ""],
        ["text", "4km 360m", ""],
        ["text", "4360m", ""],
        ["text", "5cm 8mm", ""],
        ["text", "76mm", ""],
        ["text", "6750m", ""],
        ["text", "6km 750m", ""],
      ],
      answer: [
        [0, 5],
        [1, 4],
        [2, 3],
        [6, 7],
      ],
    },
    {
      name: "pairCard2",
      question: [
        ["text", "3cm 7mm", ""],
        ["text", "89mm", ""],
        ["text", "5km 320m", ""],
        ["text", "5320m", ""],
        ["text", "8cm 9mm", ""],
        ["text", "37mm", ""],
        ["text", "3750m", ""],
        ["text", "3km 750m", ""],
      ],
      answer: [
        [0, 5],
        [1, 4],
        [2, 3],
        [6, 7],
      ],
    },
    {
      name: "pairCard2",
      question: [
        ["text", "7cm 4mm", ""],
        ["text", "98mm", ""],
        ["text", "6km 120m", ""],
        ["text", "6120m", ""],
        ["text", "9cm 8mm", ""],
        ["text", "74mm", ""],
        ["text", "7530m", ""],
        ["text", "7km 530m", ""],
      ],
      answer: [
        [0, 5],
        [1, 4],
        [2, 3],
        [6, 7],
      ],
    },
  ];
  // 바늘 시계 읽기(setDigitalClock_HMS)
  var games_5_3 = [
    {
      name: "setDigitalClock_HMS",
      question: [2, 50, 12, [["text", [2]], "readonly", 0], [["number", 60], "spin", 0], [["number", 60], "spin", 0]],
      answer: [2, 50, 12],
    },
    {
      name: "setDigitalClock_HMS",
      question: [9, 10, 40, [["text", [9]], "readonly", 0], [["number", 60], "spin", 0], [["number", 60], "spin", 0]],
      answer: [9, 10, 40],
    },
    {
      name: "setDigitalClock_HMS",
      question: [8, 30, 10, [["text", [8]], "readonly", 0], [["number", 60], "spin", 0], [["number", 60], "spin", 0]],
      answer: [8, 30, 10],
    },
  ];
  // 측정 세로셈(3)(verticalSumTime3)
  var games_5_4 = [
    {
      name: "verticalSumTime3",
      question: [
        ["plus", [2, "시간"], [25, "분"], [35, "초"], [4, "시간"], [30, "분"], [55, "초"], ["시간", "분", "초"]],
        [
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
        ],
      ],
      answer: [6, 5, 6, 3, 0],
    },
    {
      name: "verticalSumTime3",
      question: [
        ["plus", [3, "시간"], [10, "분"], [50, "초"], [2, "시간"], [5, "분"], [20, "초"], ["시간", "분", "초"]],
        [
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
        ],
      ],
      answer: [5, 1, 6, 1, 0],
    },
    {
      name: "verticalSumTime3",
      question: [
        ["plus", [8, "시간"], [5, "분"], [50, "초"], [1, "시간"], [10, "분"], [25, "초"], ["시간", "분", "초"]],
        [
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
        ],
      ],
      answer: [9, 1, 6, 1, 5],
    },
    {
      name: "verticalSumTime3",
      question: [
        ["minus", [9, "시간"], [10, "분"], [50, "초"], [4, "시간"], [56, "분"], [20, "초"], ["시간", "분", "초"]],
        [
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
        ],
      ],
      answer: [4, 1, 4, 3, 0],
    },
    {
      name: "verticalSumTime3",
      question: [
        ["minus", [3, "시간"], [40, "분"], [55, "초"], [1, "시간"], [56, "분"], [10, "초"], ["시간", "분", "초"]],
        [
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
        ],
      ],
      answer: [1, 4, 4, 4, 5],
    },
    {
      name: "verticalSumTime3",
      question: [
        ["minus", [9, "시간"], [19, "분"], [55, "초"], [2, "시간"], [45, "분"], [5, "초"], ["시간", "분", "초"]],
        [
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
        ],
      ],
      answer: [6, 3, 4, 5, 0],
    },
  ];
  // 시간의 계산(sumTime)
  var games_5_5 = [
    {
      name: "sumTime",
      question: ["digitalClock", 5, 40, 30, "3시간 10분 20초 후", [["number", 13], "spin", 0], [["number", 60], "spin", 0], [["number", 60], "spin", 0]],
      answer: [8, 50, 50],
    },
    {
      name: "sumTime",
      question: ["clock", 1, 10, 45, "6시간 30분 7초 후", [["number", 13], "spin", 0], [["number", 60], "spin", 0], [["number", 60], "spin", 0]],
      answer: [7, 40, 52],
    },
    {
      name: "sumTime",
      question: ["digitalClock", 10, 20, 20, "6시간 40분 20초 전", [["number", 13], "spin", 0], [["number", 60], "spin", 0], [["number", 60], "spin", 0]],
      answer: [3, 40, 00],
    },
    {
      name: "sumTime",
      question: ["clock", 9, 10, 5, "5시간 21분 5초 전", [["number", 13], "spin", 0], [["number", 60], "spin", 0], [["number", 60], "spin", 0]],
      answer: [3, 49, 00],
    },
  ];
  // 똑같이 나누기(divide_selection)
  var games_6_1 = [
    {
      name: "divide_selection",
      question: ["셋", 3, 4, 6],
      answer: [3],
    },
    {
      name: "divide_selection",
      question: ["여섯", 3, 4, 6],
      answer: [6],
    },
  ];
  // 그림보고 수쓰기_분수(fraction)
  var games_6_2 = [
    {
      name: "fraction",
      question: [
        [0, 4, 9],
        [0, 4, 9],
        [0, 5, 9],
        [0, 6, 9],
      ],
      answer: [[0, 4, 9]],
    },
    {
      name: "fraction",
      question: [
        [0, 7, 9],
        [0, 7, 9],
        [0, 8, 9],
        [0, 9, 10],
      ],
      answer: [[0, 7, 9]],
    },
  ];
  // 분수 알아보기(beakerfill)
  var games_6_3 = [
    {
      name: "beakerfill",
      question: [
        [0, 5, 7],
        [0, 1, 7],
      ],
      answer: [[0, 5, 7]],
    },
    {
      name: "beakerfill",
      question: [
        [0, 2, 5],
        [0, 1, 5],
      ],
      answer: [[0, 2, 5]],
    },
    {
      name: "beakerfill",
      question: [
        [0, 4, 10],
        [0, 1, 10],
      ],
      answer: [[0, 4, 10]],
    },
  ];
  // 분수크기비교(짝수)(fraction_compare)
  var games_6_4 = [
    {
      name: "fraction_compare",
      question: [5, 8, 2, 8],
      answer: [">"],
    },
    {
      name: "fraction_compare",
      question: [3, 9, 4, 9],
      answer: ["<"],
    },
    {
      name: "fraction_compare",
      question: [4, 5, 1, 5],
      answer: [">"],
    },
  ];
  // 시소(힌트)(7th_seesaw)
  var games_6_5 = [
    {
      name: "7th_seesaw",
      question: [
        [0, 1, 7],
        [0, 1, 30],
        [0, 9, 100],
        [0, 15, 100],
        [0, 18, 100],
      ],
      answer: [">"],
    },
    {
      name: "7th_seesaw",
      question: [
        [0, 1, 11],
        [0, 1, 10],
        [0, 9, 100],
        [0, 15, 100],
        [0, 18, 100],
      ],
      answer: ["<"],
    },
    {
      name: "7th_seesaw",
      question: [
        [0, 1, 3],
        [0, 1, 4],
        [0, 9, 100],
        [0, 15, 100],
        [0, 18, 100],
      ],
      answer: [">"],
    },
  ];
  // 옷걸기(소수)(hanger)
  var games_6_6 = [
    {
      name: "hanger",
      question: [0, 4, 7, 9],
      answer: [4, 7, 9],
    },
    {
      name: "hanger",
      question: [0, 1, 6, 8],
      answer: [1, 6, 8],
    },
  ];
  // 디지털 저울(digital_balance)
  var games_6_7 = [
    {
      name: "digital_balance",
      question: [5, 0.6, 3.6, 4.6, 5.6],
      answer: [5.6],
    },
    {
      name: "digital_balance",
      question: [8, 0.1, 6.1, 7.1, 8.1],
      answer: [8.1],
    },
  ];
  // 체중계(catScale)
  var games_6_8 = [
    {
      name: "catScale",
      question: [8.4, 9.6, "더 무거운 고양이는?"],
      answer: [9.6],
    },
    {
      name: "catScale",
      question: [4.5, 5.7, "더 무거운 고양이는?"],
      answer: [5.7],
    },
    {
      name: "catScale",
      question: [7.6, 8.8, "더 무거운 고양이는?"],
      answer: [8.8],
    },
  ];

  var gamesArray = [
    [].concat(games_1_1).concat(games_1_2).concat(games_1_3).concat(games_1_4).concat(games_1_5).concat(games_1_6),
    [].concat(games_2_1).concat(games_2_2).concat(games_2_3).concat(games_2_4),
    [].concat(games_3_1).concat(games_3_2).concat(games_3_3).concat(games_3_4).concat(games_3_5).concat(games_3_6).concat(games_3_7),
    [].concat(games_4_1).concat(games_4_2).concat(games_4_3).concat(games_4_4),
    [].concat(games_5_1).concat(games_5_2).concat(games_5_3).concat(games_5_4).concat(games_5_5),
    [].concat(games_6_1).concat(games_6_2).concat(games_6_3).concat(games_6_4).concat(games_6_5).concat(games_6_6).concat(games_6_7).concat(games_6_8),
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
    subject: "수학 3-1",
    title: "놀이 수학",
    lesson: [
      {
        title: "덧셈과 뺄셈",
        subTitle: "너도나도",
        games: gamesArray[0]
      },
      {
        title: "평면도형",
        subTitle: "재미있게",
        games: gamesArray[1]
      },
      {
        title: "나눗셈",
        subTitle: "너도나도",
        games: gamesArray[2]
      },
      {
        title: "곱셈",
        subTitle: "많이많이",
        games: gamesArray[3]
      },
      {
        title: "길이와 시간",
        subTitle: "풀어보니",
        games: gamesArray[4]
      },
      {
        title: "분수와 소수",
        subTitle: "실력쑥쑥",
        games: gamesArray[5]
      },
    ],
  };

  window.$SPECIALIZECONTENTS = contents;
})();
