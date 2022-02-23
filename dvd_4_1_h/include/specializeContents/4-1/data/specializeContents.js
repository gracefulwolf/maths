(function () {
  // 돼지 저금통(piggyBank) - 1000원만
  var games_1_1 = [
    {
      name: "piggyBank_v2",
      question: [10, "십천 원", "천만 원", "만 원"],
      answer: ["만 원"],
    },
  ];
  // 민들레(dandelion)
  var games_1_2 = [
    {
      name: "dandelion",
      question: ["십만", "억", "십억", "1000만이 <br>10개인 수"],
      answer: ["억"],
    },
  ];
  // 주차하기2(parking2)
  var games_1_3 = [
    {
      name: "parking2",
      question: ["이만 삼천사백오십육", "23456", "24686", "25676"],
      answer: ["23456"],
    },
    {
      name: "parking2",
      question: ["팔천구백사십이만", "89420000", "8942000", "894200"],
      answer: ["89420000"],
    },
    {
      name: "parking2",
      question: ["사천삼백팔십삼억", "438300000000", "43830000000", "4383000000"],
      answer: ["438300000000"],
    },
  ];
  // 그림보고 완성하기2(completeClick)
  var games_1_4 = [
    {
      name: "completeClick",
      question: [36512],
      answer: [30000, 6000, 500, 10, 2],
    },
  ];
  // 그림보고 완성하기2(completeClick) v2
  var games_1_4_1 = [
    {
      name: "completeClick_v2",
      question: [4215],
      answer: [4000, 200, 10, 5],
    },
  ];
  // 기차 연결 - 3열(Train3Row)
  var games_1_5 = [
    {
      name: "Train3Row",
      question: [9900, 9800, 10000, 9999, 9090, "A"],
      answer: [10000],
    },
  ];
  // 기차5열(Train5Row)
  var games_1_5_1 = [
    {
      name: "Train5Row",
      question: ["1650조", "1700조", "1850조", "1600조", "1750조", "1800조"],
      answer: ["1750조", "1800조"],
    },
  ];
  // 개구리 점프1(frogJump1)
  var games_1_6 = [
    {
      name: "frogJump1",
      question: [9990, 9999, 10000, 9900, "10 만큼 더 큰 수"],
      answer: [10000],
    },
    {
      name: "frogJump1",
      question: [39457, "삼만 구천<br>사백오십칠", "삼구사오칠", "삼구천<br>백오십칠", "바르게 <br>읽어보세요."],
      answer: ["삼만 구천<br>사백오십칠"],
    },
    {
      name: "frogJump1",
      question: [5700000, "오백칠십만", "오십칠만", "오만칠천", "바르게 <br>읽어보세요."],
      answer: ["오백칠십만"],
    },
    {
      name: "frogJump1",
      question: [150000000, "백오십만", "천오백만", "일억 오천만", "바르게 <br>읽어보세요."],
      answer: ["일억 오천만"],
    },
  ];
  // 레일(7th_shootingDrop)
  var games_1_7 = [
    {
      name: "7th_shootingDrop",
      question: ["십억의 자리 숫자", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0],
      answer: [4],
    },
    {
      name: "7th_shootingDrop",
      question: ["조의 자리 숫자", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0],
      answer: [1],
    },
  ];
  // 개구리 점프2(frogJump2)
  var games_1_8 = [
    {
      name: "frogJump2",
      question: [21000, 23000, 25000, 27000, 1000, 2000, 3000],
      answer: [2000],
    },
    {
      name: "frogJump2",
      question: ["240억", "440억", "640억", "840억", "200", "200만", "200억"],
      answer: ["200억"],
    },
  ];
  // 농구 (basketball)
  var games_1_9 = [
    {
      name: "basketball",
      question: ["1조 3720억", "1조 3250억"],
      answer: [">"],
    },
    {
      name: "basketball",
      question: ["54394502", "54762841", { fontSize: 32 }],
      answer: ["<"],
    },
  ];
  // 가격 비교(7th_comparePrice)
  var games_1_10 = [
    {
      name: "7th_comparePrice",
      // 냉장고, TV, 노트북, 책장, 책상, 의자, 자전거, 오토바이, 자동차, 비행기, 배, 바늘시계, 전자시계, 손목시계
      question: ["왼쪽부터 작은 순서로 옮겨 놓으세요.", "냉장고", 3457900, "오토바이", 379400, "자동차", 3624568],
      answer: [2, 1, 3],
    },
  ];

  // 그림보고 선택하기(pictureSelect)
  var games_2_1 = [
    {
      name: "pictureSelect",
      question: [["./images/41-2-06-1.svg", [330, 190], 200], ["./images/41-2-06-2.svg", [210, 460], 110], 0, 1, "각의 크기가 더 큰 각"],
      answer: [1],
    },
    {
      name: "pictureSelect",
      question: [["./images/41-2-01-1.svg", [400, 180], 200], ["./images/41-2-01-2.svg", [450, 460], 160], 0, 1, "각의 크기가 더 큰 각"],
      answer: [0],
    },
    {
      name: "pictureSelect",
      question: [["./images/41-2-12.svg", [350, 180], 200], ["./images/41-2-13.svg", [350, 430], 200], 0, 1, "각도를 올바르게 재는 그림"],
      answer: [0],
    },
  ];
  // 가격 비교(7th_comparePrice) 버전 2
  var games_2_2 = [
    {
      name: "7th_comparePrice_v2",
      // 냉장고, TV, 노트북, 책장, 책상, 의자, 자전거, 오토바이, 자동차, 비행기, 배, 바늘시계, 전자시계, 손목시계
      question: ["각도가 90°인 각을 그리는 순서대로 옮겨 보세요.", "41-2-23", 3457900, "41-2-24", 379400, "41-2-25", 3624568, "41-2-26", 3624568],
      answer: [1, 2, 3, 4],
    },
  ];
  // 문장완성(sentenceComplete)
  var games_2_3 = [
    {
      name: "sentenceComplete",
      question: ["각의 크기를 ", "라고 합니다.", "예각", "직각", "둔각", "각도"],
      answer: ["각도"],
    },
    {
      name: "sentenceComplete",
      question: ["직각의 크기는 ", "입니다.", "30°", "60°", "90°", "120°"],
      answer: ["90°"],
    },
    {
      name: "sentenceComplete",
      question: ["삼각형의 세 각의 크기의 합은<br>", "입니다.", "60°", "90°", "180°", "360°"],
      answer: ["180°"],
    },
    {
      name: "sentenceComplete",
      question: ["사각형의 네 각의 크기의 합은<br>", "입니다.", "60°", "90°", "180°", "360°"],
      answer: ["360°"],
    },
  ];
  // 분류하기2(categorize) v2
  var games_2_4 = [
    {
      name: "categorize_v2",
      question: [
        ["text", ["예각"], ["둔각"]],
        ["etc", "k41-2-30-1.svg"],
        ["etc", "k41-2-30-2.svg"],
        ["etc", "k41-2-30-3.svg"],
        ["etc", "k41-2-30-4.svg"],
        ["etc", "k41-2-30-5.svg"],
        ["etc", "k41-2-30-6.svg"],
        // ["figure", "square_4_5"],
        // ["figure", "square_1_2"],
      ],
      answer: [
        [3, 5],
        [1, 2],
      ],
    },
  ];
  // 오락기2(gameMachine2)
  var games_2_5 = [
    {
      name: "gameMachine2",
      question: ["50°", "예각", "둔각"],
      answer: ["예각"],
    },
    {
      name: "gameMachine2",
      question: ["100°", "예각", "둔각"],
      answer: ["둔각"],
    },
  ];
  // 가로셈_개구리(frog)
  var games_2_6 = [
    {
      name: "frog",
      question: ["40°", "70°", "100°", "110°", "120°", "+"],
      answer: ["110°"],
    },
    {
      name: "frog",
      question: ["65°", "30°", "85°", "90°", "95°", "+"],
      answer: ["95°"],
    },
    {
      name: "frog",
      question: ["130°", "70°", "60°", "50°", "40°", "-"],
      answer: ["60°"],
    },
    {
      name: "frog",
      question: ["120°", "35°", "75°", "85°", "95°", "-"],
      answer: ["85°"],
    },
  ];
  // 분류하여 세기1(circleCount)
  var games_2_7 = [
    {
      name: "circleCount",
      question: [["각도가 60°인 각을 그리려면 <br>점 ", "을 지나야 합니다."], ["etc", "k41-2-61"], "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ"],
      answer: ["ㄷ"],
    },
    {
      name: "circleCount",
      question: [["", ""], ["etc", "k41-2-46"], "20", "40", "60", "80"],
      answer: ["60"],
    },
    {
      name: "circleCount",
      question: [["", ""], ["etc", "k41-2-48"], "100", "110", "120", "130"],
      answer: ["130"],
    },
    {
      name: "circleCount",
      question: [["", ""], ["etc", "k41-2-56"], "140", "120", "100", "80"],
      answer: ["140"],
    },
    {
      name: "circleCount",
      question: [["", ""], ["etc", "k41-2-57"], "110", "130", "150", "170"],
      answer: ["150"],
    },
  ];

  // 버스 정류장(vic_busStop)
  var games_3_1 = [
    {
      name: "vic_busStop",
      question: ["154", "20", "", "308", "3080", "3060", "*", "/"],
      answer: ["3080"],
    },
    {
      name: "vic_busStop",
      question: ["412", "30", "", "7640", "12630", "12360", "*", "/"],
      answer: ["12360"],
    },
    {
      name: "vic_busStop",
      question: ["325", "21", "", "975", "6825", "6325", "*", "/"],
      answer: ["6825"],
    },
    {
      name: "vic_busStop",
      question: ["275", "24", "", "6120", "6240", "6600", "*", "/"],
      answer: ["6600"],
    },
  ];
  // 세로셈(verticalSum)
  var games_3_2 = [
    {
      name: "verticalSum",
      question: [
        ["multiplication", 210, 40],
        [
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
        ],
      ],

      answer: [8, 4, 0, 0],
    },
    {
      name: "verticalSum",
      question: [
        ["multiplication", 170, 60],
        [
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
        ],
      ],

      answer: [1, 0, 2, 0, 0],
    },
    {
      name: "verticalSum",
      question: [
        ["multiplication", 360, 12],
        [
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
        ],
      ],

      answer: [4, 3, 2, 0],
    },
    {
      name: "verticalSum",
      question: [
        ["multiplication", 156, 32],
        [
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
          [["number", 10], "spin", 0],
        ],
      ],

      answer: [4, 9, 9, 2],
    },
  ];
  // 나비와 꽃(butterfly)
  var games_3_3 = [
    {
      name: "butterfly",
      question: [252, 30, 7, 8, 9, 12],
      answer: [8, 12],
    },
    {
      name: "butterfly",
      question: [365, 70, 5, 10, 15, 20],
      answer: [5, 15],
    },
    {
      name: "butterfly",
      question: [99, 31, 3, 4, 5, 6],
      answer: [3, 6],
    },
    {
      name: "butterfly",
      question: [147, 23, 6, 7, 8, 9],
      answer: [6, 9],
    },
  ];
  // 털실 나누기(7th_divideWool)
  var games_3_4 = [
    {
      name: "7th_divideWool",
      question: [427, 40, [["number", [6, 8, 10]], "spin", 0], [["number", [16, 27, 28]], "spin", 0], "몫과 나머지를 구하세요."],
      answer: [10, 27],
    },
    {
      name: "7th_divideWool",
      question: [816, 20, [["number", [30, 40, 50]], "spin", 0], [["number", [12, 14, 16]], "spin", 0], "몫과 나머지를 구하세요."],
      answer: [40, 16],
    },
    {
      name: "7th_divideWool",
      question: [85, 12, [["number", [5, 6, 7]], "spin", 0], [["number", [1, 3, 5]], "spin", 0], "몫과 나머지를 구하세요."],
      answer: [7, 1],
    },
    {
      name: "7th_divideWool",
      question: [267, 53, [["number", [4, 5, 6]], "spin", 0], [["number", [1, 2, 3]], "spin", 0], "몫과 나머지를 구하세요."],
      answer: [5, 2],
    },
  ];
  // 로봇2(robot2)
  var games_3_5 = [
    {
      name: "robot2",
      question: [25, 928, 925, 3, 5, 22, 37],
      answer: [37, 3],
    },
    {
      name: "robot2",
      question: [53, 627, 583, 11, 22, 33, 44],
      answer: [11, 44],
    },
    {
      name: "robot2",
      question: [48, 954, 912, 15, 19, 42, 50],
      answer: [19, 42],
    },
    {
      name: "robot2",
      question: [16, 387, 384, 3, 24, 45, 67],
      answer: [24, 3],
    },
  ];

  // ox퀴즈(oxArrow)
  var games_4_1 = [
    {
      name: "oxArrow",
      question: ["도형을 밀면 모양이 변합니다.", "O", "X"],
      answer: ["X"],
    },
    {
      name: "oxArrow",
      question: ["도형을 밀면 민 방향과 길이만큼 <br>도형의 위치가 바뀝니다.", "O", "X"],
      answer: ["O"],
    },
    {
      name: "oxArrow",
      question: ["시계 방향으로 90°만큼 돌린 도형과 시계 <br>반대 방향으로 270°만큼 돌린 도형은 같습니다.", "O", "X"],
      answer: ["O"],
    },
    {
      name: "oxArrow",
      question: ["도형을 시계 방향으로 90°만큼 돌렸습니다.", "O", "X", { type: "image", source: "./images/k41-4-53.svg", height: 380 }],
      answer: ["O"],
    },
    {
      name: "oxArrow",
      question: ["모양을 시계 반대 <br>방향으로 180° <br>만큼 돌렸습니다.", "O", "X", { type: "image", source: "./images/41-4-26.png", height: 380 }],
      answer: ["O"],
    },
  ];
  // 문장완성(sentenceComplete)
  var games_4_2 = [
    {
      name: "sentenceComplete",
      question: ["오른쪽으로 뒤집은 도형은<br>", "쪽으로 뒤집은 도형과 같습니다.", "위", "아래", "왼"],
      answer: ["왼"],
    },
    {
      name: "sentenceComplete",
      question: ["위쪽으로 뒤집은 도형은<br>", "쪽으로 뒤집은 도형과 같습니다.", "아래", "오른", "왼"],
      answer: ["아래"],
    },
    {
      name: "sentenceComplete",
      question: ["시계 방향으로 180°만큼 돌린 도형은 <br>시계 반대 방향으로 ", "만큼 <br>돌린 도형과 같습니다.", "90°", "180°", "270°", "360°"],
      answer: ["180°"],
    },
    {
      name: "sentenceComplete",
      question: ["시계 방향으로 90°만큼 돌린 도형은 <br>시계 반대 방향으로 ", "만큼 <br>돌린 도형과 같습니다.", "90°", "180°", "270°", "360°"],
      answer: ["270°"],
    },
  ];
  // 분류하여 세기1(circleCount)
  var games_4_3 = [
    {
      name: "circleCount",
      question: [["나 도형을 왼쪽으로 ", "cm 밀면 <br>가 도형이 됩니다."], ["etc", "41-4-17"], "4", "5", "6", "7"],
      answer: ["6"],
    },
    {
      name: "circleCount",
      question: [["나 도형을 왼쪽으로 ", "cm 밀면 <br>가 도형이 됩니다."], ["etc", "41-4-54"], "4", "7", "10", "13"],
      answer: ["7"],
    },
    {
      name: "circleCount",
      question: [["가 도형을 ", " 쪽으로 뒤집으면 <br>나 도형이 됩니다."], ["etc", "4-1-4-1"], "위", "아래", "왼", "오른"],
      answer: ["왼"],
    },
    {
      name: "circleCount",
      question: [["가 도형을 ", " 쪽으로 뒤집으면 <br>나 도형이 됩니다."], ["etc", "4-1-4-2"], "위", "아래", "왼", "오른"],
      answer: ["위"],
    },
    {
      name: "circleCount",
      question: [["가 도형을 시계 방향으로 ", " 만큼 <br>돌리면 나 도형이 됩니다."], ["etc", "4-1-4-3"], "90°", "180°", "270°", "360°"],
      answer: ["90°"],
    },
    {
      name: "circleCount",
      question: [["가 도형을 시계 방향으로 ", " 만큼 <br>돌리면 나 도형이 됩니다."], ["etc", "4-1-4-4"], "90°", "180°", "270°", "360°"],
      answer: ["180°"],
    },
  ];
  // 평면도형 조작(rotateFigure) v2
  var games_4_4 = [
    {
      name: "rotateFigure_v2",
      question: [
        [7, 1, 0],
        [9, 2],
        ["", 180],
        ["", 90],
        ["", 90],
      ],
      answer: [1, 2],
    },
    // 정답 중복 문제...
    {
      name: "rotateFigure_v2",
      question: [
        [7, 2, 0],
        [9, 2],
        ["", 180],
        ["x", 180],
        ["y", 180],
      ],
      answer: [0, 2],
    },
    {
      name: "rotateFigure_v2",
      question: [
        [7, 3, 0],
        [9, 2],
        ["y", 180],
        ["", 180],
        ["x", -90],
        // ["y", 180],
      ],
      answer: [1, 0],
    },
    {
      name: "rotateFigure_v2",
      question: [
        [7, 4, 0],
        [9, 2],
        ["y", 0],
        ["x", 0],
        ["", 180],
        // ["y", 180],
      ],
      answer: [0, 1],
    },
    {
      name: "rotateFigure_v2",
      question: [
        [7, 5, 0],
        [9, 2],
        ["", 180],
        ["y", 180],
        ["y", 0],
        // ["y", 180],
      ],
      answer: [2, 1],
    },
  ];

  // 문장완성(sentenceComplete)
  var games_5_1 = [
    {
      name: "sentenceComplete",
      question: ["조사한 자료의 수량을 막대 모양으로 나타낸<br/>그래프를 ", "라고 합니다.", "표", "그래프", "그림그래프", "막대그래프"],
      answer: ["막대그래프"],
    },
    {
      name: "sentenceComplete",
      question: ["그래프의 가로는 ", "을/를 <br>나타냅니다.", "학생 수", "좋아하는 동물", "듣고 싶은 말", "합계", { type: "image", source: "./images/41-5-06.svg", position: "left", width: 1000, height: 380 }],
      answer: ["듣고 싶은 말"],
    },
    {
      name: "sentenceComplete",
      question: ["그래프의 세로는 ", "을/를 <br>나타냅니다.", "학생 수", "좋아하는 동물", "듣고 싶은 말", "합계", { type: "image", source: "./images/41-5-06.svg", position: "left", width: 1000, height: 380 }],
      answer: ["학생 수"],
    },
    {
      name: "sentenceComplete",
      question: ["학생 수를 그래프에서 ", "(으)로 <br>나타냈습니다.", "그림", "막대의 길이", "도형", { type: "image", source: "./images/41-5-06.svg", position: "left", width: 1050, height: 380 }],
      answer: ["막대의 길이"],
    },
    {
      name: "sentenceComplete",
      question: ["가장 많은 학생이 <br>듣고 싶은 말은 <br>", "입니다.", "넌 최고야", "고마워", "네가 좋아", "잘했어", { type: "image", source: "./images/41-5-06.svg", position: "left", width: 1100, height: 400 }],
      answer: ["고마워"],
    },
  ];
  // 자료의 정리 - 드래그 드랍(dataCategorize)
  var games_5_2 = [
    {
      name: "dataCategorize",
      question: ["text_1", "text_2", "text_3", 2, 5, 5],
      answer: [2, 5, 5],
    },
  ];
  // 자료의 정리 - 드래그 드랍(dataCategorize) v2
  var games_5_3 = [
    {
      name: "dataCategorize_v2",
      question: ["color_1", "color_2", "color_3", 7, 3, 5],
      answer: [7, 3, 5],
    },
  ];
  // ox퀴즈(oxArrow)
  var games_5_4 = [
    {
      name: "oxArrow",
      question: ["표를 막대그래프로 나타내면 수의 크고 작음을 한눈에 볼 수 있습니다.", "O", "X"],
      answer: ["O"],
    },
    {
      name: "oxArrow",
      question: ["표를 막대그래프로 나타낼 때 <br>눈금 한 칸의 크기는 정하지 않아도 됩니다.", "O", "X"],
      answer: ["X"],
    },
    {
      name: "oxArrow",
      question: ["가장 적은 학생이 <br>여행 가고 싶어 하는 장소는 <br>수목원입니다.", "O", "X", { type: "image", source: "./images/41-5-05.svg", width: 1040, height: 380 }],
      answer: ["X"],
    },
    {
      name: "oxArrow",
      question: ["박물관을 가고 싶어 하는 학생은 바다를 가고 싶어 하는 학생보다 14명 더 적습니다.", "O", "X", { type: "image", source: "./images/41-5-05.svg", width: 1150, height: 380 }],
      answer: ["O"],
    },
    {
      name: "oxArrow",
      question: ["가장 많은 학생이 <br>도서관을 이용한 <br>날은 화요일입니다.", "O", "X", { type: "image", source: "./images/41-5-12.svg", width: 900, height: 380 }],
      answer: ["X"],
    },
    /* 문제 삭제
    {
      name: "oxArrow",
      question: ["&nbsp;&nbsp;도서관 공사를 위해 <br>&nbsp;&nbsp;휴관을 한다면 <br>&nbsp;&nbsp;금요일에 하는 것이&nbsp;<br>&nbsp;&nbsp;좋습니다.", "O", "X", { type: "image", source: "./images/41-5-12.svg", height: 380 }],
      answer: ["O"],
    },*/
  ];
  // 문장완성(sentenceComplete)
  var games_5_5 = [
    {
      name: "sentenceComplete",
      question: ["막대의 길이는 ", "을/를 <br>나타냅니다.", "장소", "학생 수", "좋아하는 음식", "한 칸의 수", { type: "image", source: "./images/41-5-05.svg", position: "left", width: 1000, height: 380 }],
      answer: ["학생 수"],
    },
    {
      name: "sentenceComplete",
      question: ["가장 많은 학생이 <br>좋아하는 학교 행사는 <br>", "입니다.", "운동회", "학예회", "현장 체험 학습", "독서 행사", { type: "image", source: "./images/41-5-03.svg", position: "left", width: 860, height: 400 }],
      answer: ["현장 체험 학습"],
    },
    {
      name: "sentenceComplete",
      question: ["개를 좋아하는 학생은 <br>토끼를 좋아하는 학생보다 <br>", "명 더 많습니다.", "5", "10", "15", "20", { type: "image", source: "./images/41-5-08.svg", position: "left", width: 1050, height: 400 }],
      answer: ["10"],
    },
    {
      name: "sentenceComplete",
      question: ["토끼를 좋아하는 학생은 <br>햄스터를 좋아하는 학생보다 <br>", "명 더 많습니다.", "5", "10", "15", "20", { type: "image", source: "./images/41-5-08.svg", position: "left", width: 1100, height: 400 }],
      answer: ["5"],
    },
  ];
  // 원2(diameter) v2
  // var games_5_6 = [
  //   {
  //     name: "diameter_v2",
  //     question: [
  //       ["empty"],
  //       [[160, 55, 300 * 1.8, 220 * 1.8]],
  //       ["한", "가로", "세로"],
  //       [
  //         [203, 572],
  //         [203 + 114 * 1, 572],
  //         [203 + 114 * 2, 572],
  //       ],
  //       0.6,
  //       [
  //         [910, 120],
  //         [910, 120 + 170 * 1],
  //         [910, 120 + 170 * 2],
  //       ],
  //       // [
  //       //   "과자 판매량",
  //       //   [
  //       //     ["월(월)", "5", "6", "7", "8", "9"],
  //       //     ["판매량<br>(상자)", "", "", "", "", ""],
  //       //   ],
  //       //   [85, 460],
  //       //   { margin: 4, fontSize: 24 },
  //       // ],
  //     ],
  //     answer: ["가로", "세로", "한"],
  //   },
  // ];
  // 카드 옮기기(7th_moveBox_noHint)
  var games_5_7 = [
    {
      name: "7th_moveBox_noHint",
      question: ["자료를 수집하여 분석하는 방법을 왼쪽부터 차례대로 옮겨 놓으세요.", "자료<br>수집하기", "막대그래<br>프로 자료 <br>해석하기", "주제<br>정하기", "막대<br>그래프로<br>나타내기"],
      answer: ["주제<br>정하기", "자료<br>수집하기", "막대<br>그래프로<br>나타내기", "막대그래<br>프로 자료 <br>해석하기"],
    },
  ];

  // 퍼즐1(puzzle1)
  var games_6_1 = [
    {
      name: "puzzle1",
      question: [101, 107, 109, 116],
      answer: [107, 109, 116],
    },
  ];
  // 퍼즐1(puzzle1) v2
  var games_6_2 = [
    {
      name: "puzzle1_v2",
      question: [101, 18, 3, 108],
      answer: [18, 3, 108],
    },
  ];
  // 퍼즐2(puzzle2)
  var games_6_3 = [
    {
      name: "puzzle2",
      question: [11, 14, 34, 28, 17],
      answer: [14, 17, 28, 34],
    },
    {
      name: "puzzle2",
      question: [2121, 6464, 2424, 5353, 3232],
      answer: [2424, 3232, 5353, 6464],
    },
  ];
  // 거미줄_3*3(spider_1)
  var games_6_4 = [
    {
      name: "spider_1_1",
      question: [1, [7, 9, 11, 13]],
      answer: [9, 13],
    },
    {
      name: "spider_1_1",
      question: [2, [28, 29, 30, 31]],
      answer: [30, 28],
    },
    {
      name: "spider_1_1",
      question: [3, [4, 12, 32]],
      answer: [12],
    },
    {
      name: "spider_1_1",
      question: [4, [19, 35, 216]],
      answer: [216],
    },
  ];
  // 평면도형 조작(rotateFigure) v3
  var games_6_5 = [
    {
      name: "rotateFigure_v3",
      question: [
        [7, 6, 0],
        [9, 2],
        ["", 0],
        ["", 0],
        ["", 0],
      ],
      answer: [2],
    },
    {
      name: "rotateFigure_v3",
      question: [
        [7, 7, 0],
        [9, 2],
        ["", 0],
        ["", 0],
        ["", 0],
      ],
      answer: [1],
    },
    {
      name: "rotateFigure_v3",
      question: [
        [7, 8, 0],
        [9, 2],
        ["", 0],
        ["", 0],
        ["", 0],
      ],
      answer: [2],
    },
    {
      name: "rotateFigure_v3",
      question: [
        [7, 9, 0],
        [9, 2],
        ["", 0],
        ["", 0],
        ["", 0],
      ],
      answer: [1],
    },
  ];
  // 숫자카드 문자인식(numberCardKeypad) v2
  var games_6_6 = [
    {
      name: "numberCardKeypad_v2",
      question: [
        ["101 + 10 = 111", "201 + 11 = 212", "301 + 12 = 313", "401 + 13 = 414"],
        [
          [348, 391],
          [92, 72],
        ],
      ],
      answer: [414],
    },
    {
      name: "numberCardKeypad_v2",
      question: [
        ["121 - 25 = 96", "122 - 26 = 96", "123 - 27 = 96", "124 - 28 = 96"],
        [
          [245, 391],
          [64, 72],
        ],
      ],
      answer: [28],
    },
    {
      name: "numberCardKeypad_v2",
      question: [
        ["10 * 10 = 100", "10 * 20 = 200", "10 * 30 = 300", "10 * 40 = 400"],
        [
          [333, 308],
          [92, 72],
        ],
      ],
      answer: [300],
    },
    {
      name: "numberCardKeypad_v2",
      question: [
        ["15 * 2 = 30", "25 * 2 = 50", "35 * 2 = 70", "45 * 2 = 90"],
        [
          [130, 391],
          [64, 72],
        ],
      ],
      answer: [45],
    },
    {
      name: "numberCardKeypad_v2",
      question: [
        ["33 * 1 = 33", "33 * 101 = 3333", "33 * 10101 = 333333"],
        [
          [334, 275],
          [120, 72],
        ],
      ],
      answer: [3333],
    },
    {
      name: "numberCardKeypad_v2",
      question: [
        ["81 div 9 = 9", "9801 div 99 = 99", "998001 div 999 = 999", "99980001 div 9999 = 9999"],
        [
          [65, 319],
          [146, 64],
        ],
      ],
      answer: [998001],
    },
    {
      name: "numberCardKeypad_v2",
      question: [
        ["1 * 11 = 11", "121 * 11 = 1331", "12321 * 11 = 135531", "1234321 * 11 = 13577531"],
        [
          [28, 390],
          [152, 56],
        ],
      ],
      answer: [1234321],
    },
    {
      name: "numberCardKeypad_v2",
      question: [
        ["12345679 * 9 = 111111111", "12345679 * 18 = 222222222", "12345679 * 27 = 333333333", "12345679 * 36 = 444444444"],
        [
          [317, 388],
          [190, 48],
        ],
      ],
      answer: [444444444],
    },
  ];

  var gamesArray = [
    [].concat(games_1_1).concat(games_1_2).concat(games_1_3).concat(games_1_4).concat(games_1_4_1).concat(games_1_5).concat(games_1_5_1).concat(games_1_6).concat(games_1_7).concat(games_1_8).concat(games_1_9).concat(games_1_10),
    [].concat(games_2_1).concat(games_2_2).concat(games_2_3).concat(games_2_4).concat(games_2_5).concat(games_2_6).concat(games_2_7),
    [].concat(games_3_1).concat(games_3_2).concat(games_3_3).concat(games_3_4).concat(games_3_5),
    [].concat(games_4_1).concat(games_4_2).concat(games_4_3).concat(games_4_4),
    [].concat(games_5_1).concat(games_5_2).concat(games_5_3).concat(games_5_4).concat(games_5_5)/*.concat(games_5_6)*/.concat(games_5_7),
    [].concat(games_6_1).concat(games_6_2).concat(games_6_3).concat(games_6_4).concat(games_6_5).concat(games_6_6),
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
    subject: "수학 4-1",
    title: "놀이 수학",
    lesson: [
      {
        title: "큰 수",
        subTitle: "너도나도",
        games: gamesArray[0],
      },
      {
        title: "각도",
        subTitle: "재미있게",
        games: gamesArray[1],

      },
      {
        title: "곱셈과 나눗셈",
        subTitle: "너도나도",
        games: gamesArray[2],
      },
      {
        title: "평면도형의 이동",
        subTitle: "많이많이",
        games: gamesArray[3],
      },
      {
        title: "자료와 막대그래프",
        subTitle: "풀어보니",
        games: gamesArray[4],
      },
      {
        title: "규칙 찾기",
        subTitle: "실력쑥쑥",
        games: gamesArray[5],
      },
    ],
  };

  window.$SPECIALIZECONTENTS = contents;
})();
