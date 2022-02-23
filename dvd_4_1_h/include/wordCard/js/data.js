
var wordCardData = {
  grade_3_1: [
    {
      level : 1,
      levelName : '',
      chrtImg:'',
      listWord : []
    },
    {
      level : 2,
      levelName : '평면도형',
      chrtImg:'../',
      listWord : [
        {
          title: '선분',
          page : 34,
          means : '두 점을 이은 곧은 선',
          example : ['두 점을 이은 선을 선분이라고 합니다.','점 ㄱ과 점 ㄴ을 이은 선분을 선분 ㄱㄴ 또는 선분 ㄴㄱ이라고 합니다.','선분 ㄱㄴ과 무엇이 다른지 말해 보세요.'],
          referenceImg :'3-1/ref_3_1_2_1.svg'
        },
        {
          title: '반직선',
          page : 35,
          means : '한 점에서 시작하여 한쪽으로 끝없이 늘인 곧은 선',
          example : ['점 ㄱ에서 시작하여 점 ㄴ을 지나는 반직선을 반직선 ㄱㄴ이라고 합니다.','점 ㄴ에서 시작하여 점 ㄱ을 지나는 반직선을 반직선 ㄴㄱ이라고 합니다.'],
          referenceImg :'3-1/ref_3_1_2_2.svg'
        },
        {
          title: '직선',
          page : 35,
          means : '선분을 양쪽으로 끝없이 늘인 곧은 선',
          example : ['점 ㄱ과  점 ㄴ을 지나는 직선을 직선 ㄱㄴ 또는 직선 ㄴㄱ이라고 합니다.','직선을 그어 보세요.'],
          referenceImg :'3-1/ref_3_1_2_3.svg'
        },
        {
          title: '각',
          page : 36,
          means : '한 점에서 그은 두 반직선으로 이루어진 도형',
          example : ['한 점에서 그은 두 반직선으로 이루어진 도형을 각이라고 합니다.','그림의 각을 각 ㄱㄴㄷ 또는 각 ㄷㄴㄱ이라고 합니다.','각 ㄱㄴㄷ을 완성해 봅시다.'],
          referenceImg :'3-1/ref_3_1_2_4.svg'
        },
        {
          title: '(각의) 꼭짓점',
          page : 36,
          means : '그림에서 점 ㄴ',
          example : ['그림에서 점 ㄴ을 각의 꼭짓점이라고 합니다.','각에서 각의 꼭짓점은 반직선의 시작점입니다.','각에서 각의 꼭짓점은 1개입니다.'],
          referenceImg :'3-1/ref_3_1_2_5.svg'
        },
        {
          title: '(각의) 변',
          page : 36,
          means : '그림에서 반직선 ㄴㄱ과 반직선 ㄴㄷ',
          example : ['그림에서 반직선 ㄴㄱ과 반직선 ㄴㄷ을 각의 변이라 하고, 이 변을 변 ㄴㄱ과 변 ㄴㄷ이라고 합니다.','각에서 각의 변은 2개입니다.'],
          referenceImg :'3-1/ref_3_1_2_6.svg'
        },
        {
          title: '직각',
          page : 38,
          means : '그림과 같이 종이를 두 번 접었을 때 생기는 각',
          example : ["그림과 같이 종이를 두 번 접었을 때 생기는 각을 직각이라고 합니다.","직각 ㄱㄴㄷ을 나타낼 때에는 꼭짓점 ㄴ에 <img style='top:-2px;margin-left:6px;' src='../img/3-1/img_3_1_2_1.svg'>표시를 합니다."],
          referenceImg :'3-1/ref_3_1_2_7.svg'
        },
        {
          title: '직각삼각형',
          page : 41,
          means : '한 각이 직각인 삼각형',
          example : ['한 각이 직각인 삼각형을 직각삼각형이라고 합니다.','도형판에 직각삼각형을 만들어 보세요.','만든 직각삼각형을 그려 보세요.'],
          referenceImg :'3-1/ref_3_1_2_8.svg'
        },
        {
          title: '직사각형',
          page : 43,
          means : '네 각이 모두 직각인 사각형',
          example : ['네 각이 모두 직각인 사각형을 직사각형이라고 합니다.','칠교판으로 여러 가지 직사각형을 만들어 보세요.','직사각형을 찾아 표시해 보세요.'],
          referenceImg :'3-1/ref_3_1_2_9.svg'
        },
        {
          title: '정사각형',
          page : 45,
          means : '네 각이 모두 직각이고 네 변의 길이가 모두 같은 사각형',
          example : ['네 각이 모두 직각이고 네 변의 길이가 모두 같은 사각형을 정사각형이라고 합니다.','정사각형을 찾아 표시해 보세요.'],
          referenceImg :'3-1/ref_3_1_2_10.svg'
        }
      ]
    },
    {
      level : 3,
      levelName : '나눗셈',
      chrtImg:'../',
      listWord : [
        {
          title: '나눗셈식',
          page : 56,
          means : '<span style="letter-spacing: -1px;">“12를 4로 나누면 3이 됩니다.” 이것을 나타낸 12÷4=3과 같은 식</span>',
          example : ['과자 12개를 넷이서 똑같이 나누어 먹으면 한 명이 3개씩 먹게 되는데, 12÷4=3과 같은 식을 나눗셈식이라고 합니다.','나눗셈식 12÷4=3은 “12 나누기 4는 3과 같습니다.”라고 읽습니다.'],
          referenceImg : '3-1/ref_3_1_3_1.svg'
        },
        {
          title: '나누어지는 수',
          page : 56,
          means : '12÷4=3에서 12',
          example : ['12÷4=3에서 12를 나누어지는 수라고 합니다.','15÷3=5에서 15를 나누어지는 수라고 합니다.','16÷8=2에서 16을 나누어지는 수라고 합니다.'],
          referenceImg :'3-1/ref_3_1_3_2.svg'
        },
        {
          title: '나누는 수',
          page : 56,
          means : '12÷4=3에서 4',
          example : ['12÷4=3에서 4를 나누는 수라고 합니다.','15÷3=5에서 3을 나누는 수라고 합니다.','16÷8=2에서 8을 나누는 수라고 합니다.'],
          referenceImg :'3-1/ref_3_1_3_3.svg'
        },
        {
          title: '몫',
          page : 56,
          means : '12÷4=3에서 3',
          example : ['12÷4=3에서 3은 12를 4로 나눈 몫이라고 합니다.','15÷3=5에서 5는 15를 3으로 나눈 몫이라고 합니다.','16÷8=2에서 2는 16을 8로 나눈 몫이라고 합니다.'],
          referenceImg :'3-1/ref_3_1_3_4.svg'
        },
      ]
    },
    {
      level : 4,
      levelName : '',
      chrtImg:'../',
      listWord : []
    },
    {
      level : 5,
      levelName : '길이와 시간',
      chrtImg:'../',
      listWord : [
        {
          title: '1 밀리미터(1 mm)',
          page : 98,
          means : '1 cm를 10칸으로 똑같이 나누었을 때 작은 눈금 한 칸의 길이',
          example : ['1 cm를 10칸으로 똑같이 나누었을 때 작은 눈금 한 칸의 길이를 1 mm라고 씁니다.','1 mm는 1 밀리미터라고 읽습니다.'],
          referenceImg :'3-1/ref_3_1_5_1.svg'
        },
        {
          title: '1 킬로미터(1 km)',
          page : 100,
          means : '1000 m',
          example : ['1000 m를 1 km라고 씁니다.','1 km는 1 킬로미터라고 읽습니다.'],
          referenceImg :'3-1/ref_3_1_5_2.svg'
        },
        {
          title: '1초',
          page : 106,
          means : '초바늘이 작은 눈금 한 칸을 가는 동안 걸리는 시간',
          example : ['초바늘이 작은 눈금 한 칸을 가는 동안 걸리는 시간을 1초라고 합니다.','10초를 어림하여 손을 들어 보세요.'],
          referenceImg :'3-1/ref_3_1_5_3.png'
        },
        {
          title: '60초',
          page : 106,
          means : '초바늘이 시계를 한 바퀴 도는 데 걸리는 시간',
          example : ['초바늘이 시계를 한 바퀴 도는 데 걸리는 시간은 60초입니다.','60초는 1분입니다.'],
          referenceImg :'3-1/ref_3_1_5_4.png'
        },
      ]
    },
    {
      level : 6,
      levelName : '분수와 소수',
      chrtImg:'../',
      listWord : [
        {
          title: '분수',
          page : 125,
          means : "<img class='bunsu means' src='../img/3-1/img_3_1_6_1.svg'>과 같은 수",
          example : ["<img class='bunsu' src='../img/3-1/img_3_1_6_1.svg'>과 같은 수를 분수라고 합니다.","전체를 똑같이 <ins class='imageNum num_2'></ins>로 나눈 것 중의 <ins class='imageNum num_1'></ins>을 <img class='bunsu' src='../img/3-1/img_3_1_6_2.svg'>이라 쓰고 <ins class='imageNum num_2'></ins>분의 <ins class='imageNum num_1'></ins>이라고 읽습니다.","전체를 똑같이 <ins class='imageNum num_4'></ins>로 나눈 것 중의 <ins class='imageNum num_3'></ins>을 <img class='bunsu' src='../img/3-1/img_3_1_6_3.svg'>이라 쓰고 <ins class='imageNum num_4'></ins>분의 <ins class='imageNum num_3'></ins>이라고 읽습니다."],
          referenceImg :''
        },
        {
          title: '분모',
          page : 125,
          means : "<img class='bunsu means' src='../img/3-1/img_3_1_6_2.svg'>에서 <ins class='imageNum num_2 means'></ins>",
          example : ["<img class='bunsu' src='../img/3-1/img_3_1_6_2.svg'>에서 <ins class='imageNum num_2'></ins>를 분모라고 합니다.","<img class='bunsu' src='../img/3-1/img_3_1_6_3.svg'>에서 <ins class='imageNum num_4'></ins>를 분모라고 합니다."],
          referenceImg :'3-1/ref_3_1_6_1.png'
        },
        {
          title: '분자',
          page : 125,
          means : "<img class='bunsu means' src='../img/3-1/img_3_1_6_2.svg'>에서 <ins class='imageNum num_1 means'></ins>",
          example : ["<img class='bunsu' src='../img/3-1/img_3_1_6_2.svg'>에서 <ins class='imageNum num_1'></ins>을 분자라고 합니다.","<img class='bunsu' src='../img/3-1/img_3_1_6_3.svg'>에서 <ins class='imageNum num_3'></ins>을 분자라고 합니다."],
          referenceImg :'3-1/ref_3_1_6_2.png'
        },
        {
          title: '단위분수',
          page : 130,
          means : '분자가 <ins class="imageNum num_1 means"></ins>인 분수',
          example : ["분자가 <ins class='imageNum num_1'></ins>인 분수를 단위분수라고 합니다.","<img class='bunsu' src='../img/3-1/img_3_1_6_4.svg'>은 단위분수입니다."],
          referenceImg :''
        },
        {
          title: '소수',
          page : 132,
          means : "<ins class='imageNum means num_0'></ins><span class='dot'>.</span><ins class='imageNum means num_1'></ins>, <ins class='imageNum means num_0'></ins><span class='dot'>.</span><ins class='imageNum means num_2'></ins>, <ins class='imageNum means num_0'></ins><span class='dot'>.</span><ins class='imageNum means num_3'></ins>과 같은 수",
          example : ["<ins class='imageNum num_0'></ins><span class='dot'>.</span><ins class='imageNum num_1'></ins>, <ins class='imageNum num_0'></ins><span class='dot'>.</span><ins class='imageNum num_2'></ins>, <ins class='imageNum num_0'></ins><span class='dot'>.</span><ins class='imageNum num_3'></ins>과 같은 수를 소수라고 합니다.","분수 <img class='bunsu' src='../img/3-1/img_3_1_6_5.svg'>을 <ins class='imageNum num_0'></ins><span class='dot'>.</span><ins class='imageNum num_1'></ins>이라 쓰고 영 점 일이라고 읽습니다.","소수 <ins class='imageNum num_0'></ins><span class='dot'>.</span><ins class='imageNum num_1'></ins>은 분수 <img class='bunsu' src='../img/3-1/img_3_1_6_5.svg'>과 같습니다."],
          referenceImg :''
        },
        {
          title: '소수점',
          page : 132,
          means : "<ins class='imageNum means num_0'></ins><span class='dot'>.</span><ins class='imageNum means num_1'></ins>, <ins class='imageNum means num_0'></ins><span class='dot'>.</span><ins class='imageNum means num_2'></ins>, <ins class='imageNum means num_0'></ins><span class='dot'>.</span><ins class='imageNum means num_3'></ins>과 같은 수에서 점(‘.’)",
          example : ["<ins class='imageNum num_0'></ins><span class='dot'>.</span><ins class='imageNum num_1'></ins>, <ins class='imageNum num_0'></ins><span class='dot'>.</span><ins class='imageNum num_2'></ins>, <ins class='imageNum num_0'></ins><span class='dot'>.</span><ins class='imageNum num_3'></ins>과 같은 수에서 ‘.’을 소수점이라고 합니다.","<ins class='imageNum num_2'></ins><span class='dot'>.</span><ins class='imageNum num_3'></ins>, <ins class='imageNum num_5'></ins><span class='dot'>.</span><ins class='imageNum num_1'></ins>, <ins class='imageNum num_7'></ins><span class='dot'>.</span><ins class='imageNum num_4'></ins>와 같은 수에서 ‘.’을 소수점이라고 합니다."],
          referenceImg :''
        },
      ]
    }
  ],
  grade_3_2: [
    {
      level : 1,
      levelName : '',
      chrtImg:'',
      listWord : []
    },
    {
      level : 2,
      levelName : '나눗셈',
      chrtImg:'../',
      listWord : [
        {
          title: '몫',
          page : 42,
          means : '17을 5로 나누면 몫은 3이고 2가 남는데, 이 때 3',
          example : ['17을 5로 나누면 몫은 3이고 2가 남는데, 이 때 3을 몫이라고 합니다.','15÷4의 몫은 3입니다. '],
          referenceImg :''
        },
        {
          title: '나머지',
          page : 42,
          means : '17을 5로 나누면 몫은 3이고 2가 남는데, 이 때 2',
          example : ['17을 5로 나누면 몫은 3이고 2가 남는데, 이 때 2를 나머지라고 합니다.','15÷4를 계산하면 나머지는 3입니다.'],
          referenceImg :'3-2/ref_3_2_2_1.svg'
        },
        {
          title: '나누어떨어진다',
          page : 42,
          means : '나머지가 없는 것',
          example : ['15÷3의 몫은 5이고, 나머지가 없습니다. <br/>나머지가 없으면 나누어떨어진다고 합니다. ','나머지가 없으면 나머지가 0이라고 말할 수 있습니다. <br/>나머지가 0일 때, 나누어떨어진다고 합니다.','50÷2는 나누어떨어집니다.'],
          referenceImg :''
        }
      ]
    },
    {
      level : 3,
      levelName : '원',
      chrtImg:'../',
      listWord : [
        {
          title: '원의 중심',
          page : 63,
          means : '두 지름이 만나는 점</span>',
          example : ['두 지름이 만나는 점 ㅇ을 원의 중심이라고 합니다.','원을 완전히 포개지도록 반으로 두 번 접으면 두 선분이 생깁니다. <br/>이 두 선분이 만나는 점을 원의 중심이라고 합니다.','원의 가장 안쪽에 있는 점이 원의 중심입니다.'],
          referenceImg : '3-2/ref_3_2_3_1.svg'
        },
        {
          title: '반지름',
          page : 63,
          means : '원의 중심과 원 위의 한 점을 이은 선분',
          example : [' 원의 중심 ㅇ과 원 위의 한 점을 이은 선분을 원의 반지름이라고 합니다.','그림에서 선분 ㅇㄱ과 선분 ㅇㄴ은 원의 반지름입니다.','원의 중심에서 원 위의 한 점에 선분을 그으면 반지름이 됩니다.'],
          referenceImg :'3-2/ref_3_2_3_2.svg'
        },
        {
          title: '지름',
          page : 63,
          means : '원을 완전히 포개지도록 반으로 접어서 생기는 선분',
          example : ['원 위의 두 점을 이은 선분 중 원의 중심을 지나는 선분을 지름이라고 합니다.','그림에서 선분 ㄱㄴ은 원의 지름입니다.'],
          referenceImg :'3-2/ref_3_2_3_3.svg'
        }
      ]
    },
    {
      level : 4,
      levelName : '분수',
      chrtImg:'../',
      listWord : [
        {
          title: '진분수',
          page : 89,
          means : "분자가 분모보다 작은 분수",
          example : ["분자가 분모보다 작은 분수를 진분수라고 합니다.","<img class='bunsu' src='../img/3-2/img_3_2_4_1.svg'>과 같은 분수는 진분수입니다.","진분수는 1보다 작습니다.","단위분수는 진분수입니다."],
          referenceImg :''
        },
        {
          title: '가분수',
          page : 89,
          means : "분자가 분모와 같거나 분모보다 큰 분수",
          example : [" 분자가 분모와 같거나 분모보다 큰 분수를 가분수라고 합니다.","<img class='bunsu' src='../img/3-2/img_3_2_4_2.svg'>와 같은 분수는 가분수입니다.","가분수는 1과 같거나 1보다 큽니다.","분모와 분자가 같은 분수는 가분수입니다."],
          referenceImg :''
        },
        {
          title: '자연수',
          page : 89,
          means : "1, 2, 3과 같은 수",
          example : ["1, 2, 3과 같은 수를 자연수라고 합니다.","10은 자연수입니다.","<img class='bunsu' src='../img/3-2/img_3_2_4_3.svg'>는 <ins class='imageNum num_1'></ins>과 같습니다."],
          referenceImg :''
        },
        {
          title: '대분수',
          page : 90,
          means : "자연수와 진분수로 이루어진 분수",
          example : ["자연수와 진분수로 이루어진 분수를 대분수라고 합니다.","<ins class='imageNum num_1'></ins>과 <img class='bunsu' src='../img/3-2/img_3_2_4_5.svg'>은 <img class='bunsu' src='../img/3-2/img_3_2_4_4.svg'>이라 쓰고, <ins class='imageNum num_1'></ins>과 <ins class='imageNum num_5'></ins>분의 <ins class='imageNum num_3'></ins>이라고 읽습니다.","<img class='bunsu' src='../img/3-2/img_3_2_4_4.svg'>과 같이 자연수와 진분수로 이루어진 분수는 대분수입니다.","대분수는 가분수로 고칠 수 있습니다."],
          referenceImg :''
        }
      ]
    },
    {
      level : 5,
      levelName : '들이와 무게',
      chrtImg:'../',
      listWord : [
        {
          title: '1 밀리리터(1 <unit>mL</unit>)',
          page : 106,
          means : '들이의 단위',
          example : ['들이의 단위에는 밀리리터가 있습니다.','1 밀리리터는 1 <unit>mL</unit>라고 씁니다.'],
          referenceImg :'3-2/ref_3_2_5_1.svg'
        },
        {
          title: '1 리터(1 <unit>L</unit>)',
          page : 109,
          means : '1000 <unit>mL</unit>',
          example : ['1000 <unit>mL</unit>를 1 <unit>L</unit>라고 씁니다.','1 <unit>L</unit>는 1 리터라고 읽습니다.','1 <unit>L</unit>는 1000 <unit>mL</unit>입니다.'],
          referenceImg :'3-2/ref_3_2_5_2.svg'
        },
        {
          title: '1 그램(1 <unit>g</unit>)',
          page : 116,
          means : '무게의 단위',
          example : ['무게의 단위에는 그램이 있습니다.','1 그램은 1 <unit>g</unit>이라고 씁니다.'],
          referenceImg :''
        },
        {
          title: '1 킬로그램(1 <unit>kg</unit>)',
          page : 119,
          means : '1000 <unit>g</unit>',
          example : ['1000 <unit>g</unit>을 1 <unit>kg</unit>이라고 씁니다.','1 <unit>kg</unit>은 1 킬로그램이라고 읽습니다.','1 <unit>kg</unit>은 1000 <unit>g</unit>입니다.'],
          referenceImg :''
        },
        {
          title: '1 톤(1 <unit>t</unit>)',
          page : 121,
          means : '1000 <unit>kg</unit>',
          example : ['1000 <unit>kg</unit>을 1 <unit>t</unit>이라고 씁니다.','1 <unit>t</unit>은 1 톤이라고 읽습니다.','1 <unit>t</unit>은 1000 <unit>kg</unit>입니다.'],
          referenceImg :''
        }
      ]
    },
    {
      level : 6,
      levelName : '<span style="word-break: keep-all;">자료와 그림그래프</span>',
      chrtImg:'../',
      listWord : [
        {
          title: '그림그래프',
          page : 136,
          means : "자료를 그림으로 나타낸 그래프",
          example : ["자료를 그림으로 나타낸 그래프를 그림그래프라고 합니다.","그림그래프에서는 수를 그림으로 나타냅니다."],
          referenceImg :'3-2/ref_3_2_6_1.svg'
        },
      ]
    }
  ],
  grade_4_1: [
    {
      level : 1,
      levelName : '큰 수',
      chrtImg:'../',
      listWord : [
        {
          title: '10000(1만)',
          page : 10,
          means : '1000이 10개인 수',
          example : ['1000이 10개인 수를 10000 또는 1만이라고 씁니다.','만 또는 일만이라고 읽습니다.'],
          referenceImg :''
        },
        {
          title: '100000000(1억)',
          page : 17,
          means : '1000만이 10개인 수',
          example : ['1000만이 10개인 수를 100000000 또는 1억이라고 씁니다.','억 또는 일억이라고 읽습니다.','1억이 4383개인 수를 438300000000 또는 4383억이라 쓰고, <br/>사천삼백팔십삼억이라고 읽습니다.'],
          referenceImg :''
        },
        {
          title: '1000000000000(1조)',
          page : 18,
          means : '1000억이 10개인 수',
          example : ['1000억이 10개인 수를 1000000000000 또는 1조라고 씁니다.','조 또는 일조라고 읽습니다.','1조가 2459개인 수를 2459000000000000 또는 2459조라 쓰고, <br/>이천사백오십구조라고 읽습니다.'],
          referenceImg :''
        }
      ]
    },
    {
      level : 2,
      levelName : '각도',
      chrtImg:'../',
      listWord : [
        {
          title: '각도',
          page : 38,
          means : '각의 크기',
          example : ['각의 크기를 각도라고 합니다.','각도기를 사용하여 각도를 잴 수 있습니다.'],
          referenceImg :'4-1/ref_4_1_2_1.svg'
        },
        {
          title: '1도(1°)',
          page : 38,
          means : '직각의 크기를 똑같이 90으로 나눈 것 중 하나',
          example : ['직각의 크기를 똑같이 90으로 나눈 것 중 하나를 1도라고 합니다.','1도는 1°라고 씁니다.'],
          referenceImg :'4-1/ref_4_1_2_2.svg'
        },
        {
          title: '90°',
          page : 38,
          means : '직각',
          example : ['직각의 크기는 90°입니다.','직각삼각형은 한 각의 크기가 90˚인 삼각형입니다.'],
          referenceImg :'4-1/ref_4_1_2_3.svg'
        },
        {
          title: '예각',
          page : 44,
          means : '각도가 0°보다 크고 직각보다 작은 각',
          example : ['각도가 0°보다 크고 직각보다 작은 각을 예각이라고 합니다.','70°는 예각입니다.','100°는 예각이 아닙니다.'],
          referenceImg :'4-1/ref_4_1_2_4.svg'
        },
        {
          title: '둔각',
          page : 44,
          means : '각도가 직각보다 크고 180°보다 작은 각',
          example : ['각도가 직각보다 크고 180°보다 작은 각을 둔각이라고 합니다.','100°는 둔각입니다.','70°는 둔각이 아닙니다.'],
          referenceImg :'4-1/ref_4_1_2_5.svg'
        },
      ]
    },
    {
      level : 3,
      levelName : '',
      chrtImg:'',
      listWord : []
    },
    {
      level : 4,
      levelName : '',
      chrtImg:'',
      listWord : []
    },
    {
      level : 5,
      levelName : '<span style="word-break: keep-all;">자료와 막대그래프</span>',
      chrtImg:'../',
      listWord : [
        {
          title: '막대그래프',
          page : 113,
          means : '조사한 자료의 수량을 막대 모양으로 나타낸 그래프',
          example : ['참고 그림의 그래프와 같이 조사한 자료의 수량을 막대 모양으로 나타낸 그래프를 막대그래프라고 합니다.','막대그래프에서는 막대를 가로 또는 세로로 나타낼 수 있습니다.'],
          referenceImg :'4-1/ref_4_1_5_1.svg'
        }
      ]
    },
    {
      level : 6,
      levelName : '',
      chrtImg:'',
      listWord : []
    }
  ],
  grade_4_2: [
    {
      level : 1,
      levelName : '',
      chrtImg:'',
      listWord : []
    },
    {
      level : 2,
      levelName : '삼각형',
      chrtImg:'../',
      listWord : [
        {
          title: '이등변삼각형',
          page : 33,
          means : '두 변의 길이가 같은 삼각형',
          example : ['두 변의 길이가 같은 삼각형을 이등변삼각형이라고 합니다.','이등변삼각형에서 한 각이 60°이면 정삼각형이 됩니다.'],
          referenceImg :'4-2/ref_4_2_2_1.svg'
        },
        {
          title: '정삼각형',
          page : 33,
          means : '세 변의 길이가 같은 삼각형',
          example : ['세 변의 길이가 같은 삼각형을 정삼각형이라고 합니다.','정삼각형은 이등변삼각형입니다.'],
          referenceImg :'4-2/ref_4_2_2_2.svg'
        },
        {
          title: '예각삼각형',
          page : 39,
          means : '세 각이 모두 예각인 삼각형',
          example : ['세 각이 모두 예각인 삼각형을 예각삼각형이라고 합니다.','세 각 중 하나라도 예각이 아니면 예각삼각형이 아닙니다.'],
          referenceImg :'4-2/ref_4_2_2_3.svg'
        },
        {
          title: '둔각삼각형',
          page : 39,
          means : '한 각이 둔각인 삼각형',
          example : ['한 각이 둔각인 삼각형을 둔각삼각형이라고 합니다.','둔각삼각형은 한 각의 크기가 90˚보다 큽니다.'],
          referenceImg :'4-2/ref_4_2_2_4.svg'
        }
      ]
    },
    {
      level : 3,
      levelName : '',
      chrtImg:'',
      listWord : []
    },
    {
      level : 4,
      levelName : '사각형',
      chrtImg:'../',
      listWord : [
        {
          title: '수직',
          page : 82,
          means : '두 직선이 만나서 이루는 각이 직각일 때 두 직선은 서로 수직',
          example : ['두 직선이 만나서 이루는 각이 직각일 때 두 직선은 서로 수직이라고 합니다.','직각으로 만나는 두 직선은 서로 수직입니다.'],
          referenceImg :'4-2/ref_4_2_4_1.svg'
        },
        {
          title: '수선',
          page : 82,
          means : '두 직선이 서로 수직으로 만나면 한 직선은 다른 직선에 대한 수선',
          example : ['<span style="letter-spacing: 0;">두 직선이 서로 수직으로 만나면 한 직선을 다른 직선에 대한 수선이라고 합니다.</span>'],
          referenceImg :'4-2/ref_4_2_4_2.svg'
        },
        {
          title: '평행',
          page : 86,
          means : '한 직선에 수직인 두 직선을 그었을 때 그 두 직선은 서로 만나지 않습니다. 이와 같이 서로 만나지 않는 두 직선을 평행하다고 함',
          example : ['직사각형에서 서로 마주 보는 두 변은 평행합니다.','삼각형에는 평행한 변이 없습니다.'],
          referenceImg :'4-2/ref_4_2_4_3.svg'
        },
        {
          title: '평행선',
          page : 86,
          means : '평행한 두 직선',
          example : ['평행선은 서로 만나지 않습니다.','직사각형에는 평행선이 있습니다.','삼각자를 사용하면 평행선을 그릴 수 있습니다.'],
          referenceImg :'4-2/ref_4_2_4_4.svg'
        },
        {
          title: '평행선 사이의 거리',
          page : 90,
          means : '<span style="letter-spacing: -1.5px;">평행선의 한 직선에서 다른 직선에 수선을 그었을 때, 이 수선의 길이</span>',
          example : ['평행선의 한 직선에서 다른 직선에 수선을 긋습니다. 이때 이 수선의 길이를 평행선 사이의 거리라고 합니다.','평행선 사이의 거리는 두 직선의 가장 가까운 거리입니다.'],
          referenceImg :'4-2/ref_4_2_4_5.svg'
        },
        {
          title: '사다리꼴',
          page : 93,
          means : '평행한 변이 있는 사각형',
          example : ['평행한 변이 있는 사각형을 사다리꼴이라고 합니다.','사다리꼴에는 평행한 변이 적어도 한 쌍 있습니다.'],
          referenceImg :'4-2/ref_4_2_4_6.svg'
        },
        {
          title: '평행사변형',
          page : 94,
          means : '마주 보는 두 쌍의 변이 서로 평행한 사각형',
          example : ['마주 보는 두 쌍의 변이 서로 평행한 사각형을 평행사변형이라고 합니다.','평행사변형에는 평행한 변이 있습니다.'],
          referenceImg :'4-2/ref_4_2_4_7.svg'
        },
        {
          title: '마름모',
          page : 96,
          means : '네 변의 길이가 모두 같은 사각형',
          example : ['네 변의 길이가 모두 같은 사각형을 마름모라고 합니다.','마름모에는 평행한 변이 있습니다.'],
          referenceImg :'4-2/ref_4_2_4_8.svg'
        }
      ]
    },
    {
      level : 5,
      levelName : '<span style="word-break: keep-all;">자료와 꺾은선그래프</span>',
      chrtImg:'../',
      listWord : [
        {
          title: '꺾은선그래프',
          page : 111,
          means : '수량을 점으로 표시하고, 그 점들을 선분으로 이어 그린 그래프',
          example : ['수량을 점으로 표시하고, 그 점들을 선분으로 이어 그린 그래프를 꺾은선그래프라고 합니다.','꺾은선그래프로 나타내면 대체로 어떻게 변하고 있는지 알 수 있습니다.'],
          referenceImg :'4-2/ref_4_2_5_1.svg'
        }
      ]
    },
    {
      level : 6,
      levelName : '다각형',
      chrtImg:'../',
      listWord : [
        {
          title: '다각형',
          page : 132,
          means : '선분으로만 둘러싸인 도형',
          example : ['선분으로만 둘러싸인 도형을 다각형이라고 합니다.','삼각형, 사각형, 오각형 등을 다각형이라고 합니다.','원은 다각형이 아닙니다.'],
          referenceImg :'4-2/ref_4_2_6_1.svg'
        },
        {
          title: '정다각형',
          page : 137,
          means : '변의 길이가 모두 같고, 각의 크기가 모두 같은 다각형',
          example : ['변의 길이가 모두 같고, 각의 크기가 모두 같은 다각형을 정다각형이라고 합니다.','정삼각형, 정사각형은 정다각형입니다.'],
          referenceImg :'4-2/ref_4_2_6_2.svg'
        },
        {
          title: '대각선',
          page : 138,
          means : '다각형에서 이웃하지 않는 두 꼭짓점을 이은 선분',
          example : ['다각형에서 이웃하지 않는 두 꼭짓점을 이은 선분을 대각선이라고 합니다.','사각형에는 대각선을 2개 그을 수 있습니다.','삼각형에는 대각선을 그을 수 없습니다.'],
          referenceImg :'4-2/ref_4_2_6_3.svg'
        }
      ]
    }
  ]
}

var dataArr = [
  {grade : 
    [3,
      [
  {semester : 
    [1,
      [
        {
          level : 1,
          levelName : '',
          chrtImg:'',
          listWord : []
        },
        {
          level : 2,
          levelName : '평면도형',
          chrtImg:'../',
          listWord : [
            ['선분',
              [
                {
                  page : 34,
                  means : '두 점을 이은 곧은 선',
                  example : ['두 점을 이은 선을 선분이라고 합니다.','점 ㄱ과 점 ㄴ을 이은 선분을 선분 ㄱㄴ 또는 선분 ㄴㄱ이라고 합니다.','선분 ㄱㄴ과 무엇이 다른지 말해 보세요.'],
                  referenceImg :'3-1/ref_3_1_2_1.svg'
                }
              ]
            ],
            ['반직선',
              [
                {
                  page : 35,
                  means : '한 점에서 시작하여 한쪽으로 끝없이 늘인 곧은 선',
                  example : ['점 ㄱ에서 시작하여 점 ㄴ을 지나는 반직선을 반직선 ㄱㄴ이라고 합니다.','점 ㄴ에서 시작하여 점 ㄱ을 지나는 반직선을 반직선 ㄴㄱ이라고 합니다.'],
                  referenceImg :'3-1/ref_3_1_2_2.svg'
                }
              ]
            ],
            ['직선',
              [
                {
                  page : 35,
                  means : '선분을 양쪽으로 끝없이 늘인 곧은 선',
                  example : ['점 ㄱ과  점 ㄴ을 지나는 직선을 직선 ㄱㄴ 또는 직선 ㄴㄱ이라고 합니다.','직선을 그어 보세요.'],
                  referenceImg :'3-1/ref_3_1_2_3.svg'
                }
              ]
            ],
            ['각',
              [
                {
                  page : 36,
                  means : '한 점에서 그은 두 반직선으로 이루어진 도형',
                  example : ['한 점에서 그은 두 반직선으로 이루어진 도형을 각이라고 합니다.','그림의 각을 각 ㄱㄴㄷ 또는 각 ㄷㄴㄱ이라고 합니다.','각 ㄱㄴㄷ을 완성해 봅시다.'],
                  referenceImg :'3-1/ref_3_1_2_4.svg'
                }
              ]
            ],
            ['(각의) 꼭짓점',
              [
                {
                  page : 36,
                  means : '그림에서 점 ㄴ',
                  example : ['그림에서 점 ㄴ을 각의 꼭짓점이라고 합니다.','각에서 각의 꼭짓점은 반직선의 시작점입니다.','각에서 각의 꼭짓점은 1개입니다.'],
                  referenceImg :'3-1/ref_3_1_2_5.svg'
                }
              ]
            ],
            ['(각의) 변',
              [
                {
                  page : 36,
                  means : '그림에서 반직선 ㄴㄱ과 반직선 ㄴㄷ',
                  example : ['그림에서 반직선 ㄴㄱ과 반직선 ㄴㄷ을 각의 변이라 하고, 이 변을 변 ㄴㄱ과 변 ㄴㄷ이라고 합니다.','각에서 각의 변은 2개입니다.'],
                  referenceImg :'3-1/ref_3_1_2_6.svg'
                }
              ]
            ],
            ['직각',
              [
                {
                  page : 38,
                  means : '그림과 같이 종이를 두 번 접었을 때 생기는 각',
                  example : ["그림과 같이 종이를 두 번 접었을 때 생기는 각을 직각이라고 합니다.","직각 ㄱㄴㄷ을 나타낼 때에는 꼭짓점 ㄴ에 <img style='top:-2px;margin-left:6px;' src='../img/3-1/img_3_1_2_1.svg'>표시를 합니다."],
                  referenceImg :'3-1/ref_3_1_2_7.svg'
                }
              ]
            ],
            ['직각삼각형',
              [
                {
                  page : 41,
                  means : '한 각이 직각인 삼각형',
                  example : ['한 각이 직각인 삼각형을 직각삼각형이라고 합니다.','도형판에 직각삼각형을 만들어 보세요.','만든 직각삼각형을 그려 보세요.'],
                  referenceImg :'3-1/ref_3_1_2_8.svg'
                }
              ]
            ],
            ['직사각형',
              [
                {
                  page : 43,
                  means : '네 각이 모두 직각인 사각형',
                  example : ['네 각이 모두 직각인 사각형을 직사각형이라고 합니다.','칠교판으로 여러 가지 직사각형을 만들어 보세요.','직사각형을 찾아 표시해 보세요.'],
                  referenceImg :'3-1/ref_3_1_2_9.svg'
                }
              ]
            ],
            ['정사각형',
              [
                {
                  page : 45,
                  means : '네 각이 모두 직각이고 네 변의 길이가 모두 같은 사각형',
                  example : ['네 각이 모두 직각이고 네 변의 길이가 모두 같은 사각형을 정사각형이라고 합니다.','정사각형을 찾아 표시해 보세요.'],
                  referenceImg :'3-1/ref_3_1_2_10.svg'
                }
              ]
            ]
          ]
        },
        {
          level : 3,
          levelName : '나눗셈',
          chrtImg:'../',
          listWord : [
            ['나눗셈식',
              [
                {
                  page : 56,
                  means : '<span style="letter-spacing: -1px;">“12를 4로 나누면 3이 됩니다.” 이것을 나타낸 12÷4=3과 같은 식</span>',
                  example : ['과자 12개를 넷이서 똑같이 나누어 먹으면 한 명이 3개씩 먹게 되는데, 12÷4=3과 같은 식을 나눗셈식이라고 합니다.','나눗셈식 12÷4=3은 “12 나누기 4는 3과 같습니다.”라고 읽습니다.'],
                  referenceImg :'3-1/ref_3_1_3_1.svg'
                }
              ]
            ],
            ['나누어지는 수',
              [
                {
                  page : 56,
                  means : '12÷4=3에서 12',
                  example : ['12÷4=3에서 12를 나누어지는 수라고 합니다.','15÷3=5에서 15를 나누어지는 수라고 합니다.','16÷8=2에서 16을 나누어지는 수라고 합니다.'],
                  referenceImg :'3-1/ref_3_1_3_2.svg'
                }
              ]
            ],
            ['나누는 수',
              [
                {
                  page : 56,
                  means : '12÷4=3에서 4',
                  example : ['12÷4=3에서 4를 나누는 수라고 합니다.','15÷3=5에서 3을 나누는 수라고 합니다.','16÷8=2에서 8을 나누는 수라고 합니다.'],
                  referenceImg :'3-1/ref_3_1_3_3.svg'
                }
              ]
            ],
            ['몫',
              [
                {
                  page : 56,
                  means : '12÷4=3에서 3',
                  example : ['12÷4=3에서 3은 12를 4로 나눈 몫이라고 합니다.','15÷3=5에서 5는 15를 3으로 나눈 몫이라고 합니다.','16÷8=2에서 2는 16을 8로 나눈 몫이라고 합니다.'],
                  referenceImg :'3-1/ref_3_1_3_4.svg'
                }
              ]
            ]
          ]
        },
        {
          level : 4,
          levelName : '',
          chrtImg:'../',
          listWord : ''
        },
{
  level : 5,
  levelName : '길이와 시간',
  chrtImg:'../',
  listWord : [
    ['1 밀리미터(1 mm)',
      [
        {
          page : 98,
          means : '1 cm를 10칸으로 똑같이 나누었을 때 작은 눈금 한 칸의 길이',
          example : ['1 cm를 10칸으로 똑같이 나누었을 때 작은 눈금 한 칸의 길이를 1 mm라고 씁니다.','1 mm는 1 밀리미터라고 읽습니다.'],
          referenceImg :'3-1/ref_3_1_5_1.svg'
        }
      ]
    ],
    ['1 킬로미터(1 km)',
      [
        {
          page : 100,
          means : '1000 m',
          example : ['1000 m를 1 km라고 씁니다.','1 km는 1 킬로미터라고 읽습니다.'],
          referenceImg :'3-1/ref_3_1_5_2.svg'
        }
      ]
    ],
    ['1초',
      [
        {
          page : 106,
          means : '초바늘이 작은 눈금 한 칸을 가는 동안 걸리는 시간',
          example : ['초바늘이 작은 눈금 한 칸을 가는 동안 걸리는 시간을 1초라고 합니다.','10초를 어림하여 손을 들어 보세요.'],
          referenceImg :'3-1/ref_3_1_5_3.png'
        }
      ]
    ],
    ['60초',
      [
        {
          page : 106,
          means : '초바늘이 시계를 한 바퀴 도는 데 걸리는 시간',
          example : ['초바늘이 시계를 한 바퀴 도는 데 걸리는 시간은 60초입니다.','60초는 1분입니다.'],
          referenceImg :'3-1/ref_3_1_5_4.png'
        }
      ]
    ]
  ]
},
{
  level : 6,
  levelName : '분수와 소수',
  chrtImg:'../',
  listWord : [
    ['분수',
      [
        {
          page : 125,
          means : "<img class='bunsu means' src='../img/3-1/img_3_1_6_1.svg'>과 같은 수",
          example : ["<img class='bunsu' src='../img/3-1/img_3_1_6_1.svg'>과 같은 수를 분수라고 합니다.","전체를 똑같이 <ins class='imageNum num_2'></ins>로 나눈 것 중의 <ins class='imageNum num_1'></ins>을 <img class='bunsu' src='../img/3-1/img_3_1_6_2.svg'>이라 쓰고 <ins class='imageNum num_2'></ins>분의 <ins class='imageNum num_1'></ins>이라고 읽습니다.","전체를 똑같이 <ins class='imageNum num_4'></ins>로 나눈 것 중의 <ins class='imageNum num_3'></ins>을 <img class='bunsu' src='../img/3-1/img_3_1_6_3.svg'>이라 쓰고 <ins class='imageNum num_4'></ins>분의 <ins class='imageNum num_3'></ins>이라고 읽습니다."],
          referenceImg :''
        }
      ]
    ],
    ['분모',
      [
        {
          page : 125,
          means : "<img class='bunsu means' src='../img/3-1/img_3_1_6_2.svg'>에서 <ins class='imageNum num_2 means'></ins>",
          example : ["<img class='bunsu' src='../img/3-1/img_3_1_6_2.svg'>에서 <ins class='imageNum num_2'></ins>를 분모라고 합니다.","<img class='bunsu' src='../img/3-1/img_3_1_6_3.svg'>에서 <ins class='imageNum num_4'></ins>를 분모라고 합니다."],
          referenceImg :'3-1/ref_3_1_6_1.png'
        }
      ]
    ],
    ['분자',
      [
        {
          page : 125,
          means : "<img class='bunsu means' src='../img/3-1/img_3_1_6_2.svg'>에서 <ins class='imageNum num_1 means'></ins>",
          example : ["<img class='bunsu' src='../img/3-1/img_3_1_6_2.svg'>에서 <ins class='imageNum num_1'></ins>을 분자라고 합니다.","<img class='bunsu' src='../img/3-1/img_3_1_6_3.svg'>에서 <ins class='imageNum num_3'></ins>을 분자라고 합니다."],
          referenceImg :'3-1/ref_3_1_6_2.png'
        }
      ]
    ],
    ['단위분수',
      [
        {
          page : 130,
          means : '분자가 <ins class="imageNum num_1 means"></ins>인 분수',
          example : ["분자가 <ins class='imageNum num_1'></ins>인 분수를 단위분수라고 합니다.","<img class='bunsu' src='../img/3-1/img_3_1_6_4.svg'>은 단위분수입니다."],
          referenceImg :''
        }
      ]
    ],
    ['소수',
      [
        {
          page : 132,
          means : "<ins class='imageNum means num_0'></ins><span class='dot'>.</span><ins class='imageNum means num_1'></ins>, <ins class='imageNum means num_0'></ins><span class='dot'>.</span><ins class='imageNum means num_2'></ins>, <ins class='imageNum means num_0'></ins><span class='dot'>.</span><ins class='imageNum means num_3'></ins>과 같은 수",
          example : ["<ins class='imageNum num_0'></ins><span class='dot'>.</span><ins class='imageNum num_1'></ins>, <ins class='imageNum num_0'></ins><span class='dot'>.</span><ins class='imageNum num_2'></ins>, <ins class='imageNum num_0'></ins><span class='dot'>.</span><ins class='imageNum num_3'></ins>과 같은 수를 소수라고 합니다.","분수 <img class='bunsu' src='../img/3-1/img_3_1_6_5.svg'>을 <ins class='imageNum num_0'></ins><span class='dot'>.</span><ins class='imageNum num_1'></ins>이라 쓰고 영 점 일이라고 읽습니다.","소수 <ins class='imageNum num_0'></ins><span class='dot'>.</span><ins class='imageNum num_1'></ins>은 분수 <img class='bunsu' src='../img/3-1/img_3_1_6_5.svg'>과 같습니다."],
          referenceImg :''
        }
      ]
    ],
    ['소수점',
      [
        {
          page : 132,
          means : "<ins class='imageNum means num_0'></ins><span class='dot'>.</span><ins class='imageNum means num_1'></ins>, <ins class='imageNum means num_0'></ins><span class='dot'>.</span><ins class='imageNum means num_2'></ins>, <ins class='imageNum means num_0'></ins><span class='dot'>.</span><ins class='imageNum means num_3'></ins>과 같은 수에서 점(‘.’)",
          example : ["<ins class='imageNum num_0'></ins><span class='dot'>.</span><ins class='imageNum num_1'></ins>, <ins class='imageNum num_0'></ins><span class='dot'>.</span><ins class='imageNum num_2'></ins>, <ins class='imageNum num_0'></ins><span class='dot'>.</span><ins class='imageNum num_3'></ins>과 같은 수에서 ‘.’을 소수점이라고 합니다.","<ins class='imageNum num_2'></ins><span class='dot'>.</span><ins class='imageNum num_3'></ins>, <ins class='imageNum num_5'></ins><span class='dot'>.</span><ins class='imageNum num_1'></ins>, <ins class='imageNum num_7'></ins><span class='dot'>.</span><ins class='imageNum num_4'></ins>와 같은 수에서 ‘.’을 소수점이라고 합니다."],
          referenceImg :''
        }
      ]
    ]
  ]
              }
            ]
          ]
        }
      ]
    ]
  }
];