document.addEventListener('DOMContentLoaded', function () {
  $prite.add({
    target: $ts.getEl('#spriteAniBox_1'),
    spriteId: 'sprite1',
    spriteList: [
      {
        name: 'girl_1',
        // circle: 'blue',
        top: 130,
        left: -25,
        width: 270,
        height: 360,
        thumbNail: 'common/contents/images/character/girl_1.png',
        spriteSheet: 'common/contents/images/character/girl_1_sprite.png',
        sound: './media/mp3/bom_0201_0102_1112_101/bom_0201_0102_1112_101_2.mp3',
        sheetWidth: 54000,
        sheetHeight: 360,
        endSheet: 0,
        delay: 40,
        callbacks: {
          start: function () {},
          end: function () {}
        }
      },
      {
        name: 'girl_2',
        // circle: 'green',
        top: 130,
        left: 250,
        width: 270,
        height: 360,
        thumbNail: 'common/contents/images/character/girl_2.png',
        spriteSheet: 'common/contents/images/character/girl_2_sprite.png',
        sound: './media/mp3/bom_0201_0102_1112_101/bom_0201_0102_1112_101_2.mp3',
        sheetWidth: 54000,
        sheetHeight: 360,
        endSheet: 0,
        delay: 40,
        callbacks: {
          start: function () {},
          end: function () {}
        }
      },
      {
        name: 'girl_3',
        // circle: 'green',
        top: 130,
        left: 530,
        width: 270,
        height: 360,
        thumbNail: 'common/contents/images/character/girl_3.png',
        spriteSheet: 'common/contents/images/character/girl_3_sprite.png',
        sound: './media/mp3/bom_0201_0102_1112_101/bom_0201_0102_1112_101_2.mp3',
        sheetWidth: 54000,
        sheetHeight: 360,
        endSheet: 0,
        delay: 40,
        callbacks: {
          start: function () {},
          end: function () {}
        }
      },
      {
        name: 'girl_4',
        // circle: 'green',
        top: 130,
        left: 810,
        width: 270,
        height: 360,
        thumbNail: 'common/contents/images/character/girl_4.png',
        spriteSheet: 'common/contents/images/character/girl_4_sprite.png',
        sound: './media/mp3/bom_0201_0102_1112_101/bom_0201_0102_1112_101_2.mp3',
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

  $prite.add({
    target: $ts.getEl('#spriteAniBox_2'),
    spriteId: 'sprite2',
    spriteList: [
      {
        name: 'boy_1',
        // circle: 'blue',
        top: 120,
        left: -55,
        width: 270,
        height: 360,
        thumbNail: 'common/contents/images/character/boy_1.png',
        spriteSheet: 'common/contents/images/character/boy_1_sprite.png',
        sound: './media/mp3/bom_0201_0102_1112_101/bom_0201_0102_1112_101_1.mp3',
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

      },
      {
        name: 'boy_2',
        // circle: 'green',
        top: 120,
        left: 230,
        width: 270,
        height: 360,
        thumbNail: 'common/contents/images/character/boy_2.png',
        spriteSheet: 'common/contents/images/character/boy_2_sprite.png',
        sound: './media/mp3/bom_0201_0102_1112_101/bom_0201_0102_1112_101_3.mp3',
        // textBubble: {
        //   text: '지구는 움직이지  않고 태양과 달이 지구 주위를 돕니다.',
        //   class: 'balloon bottom orange',
        //   top: 10,
        //   left: 560,
        //   width: 440,
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

      },
      {
        name: 'boy_3',
        // circle: 'green',
        top: 120,
        left: 510,
        width: 270,
        height: 360,
        thumbNail: 'common/contents/images/character/boy_3.png',
        spriteSheet: 'common/contents/images/character/boy_3_sprite.png',
        sound: './media/mp3/bom_0201_0102_1112_101/bom_0201_0102_1112_101_3.mp3',
        // textBubble: {
        //   text: '지구는 움직이지  않고 태양과 달이 지구 주위를 돕니다.',
        //   class: 'balloon bottom orange',
        //   top: 10,
        //   left: 560,
        //   width: 440,
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

      },
      {
        name: 'boy_4',
        // circle: 'green',
        top: 120,
        left: 810,
        width: 270,
        height: 360,
        thumbNail: 'common/contents/images/character/boy_4.png',
        spriteSheet: 'common/contents/images/character/boy_4_sprite.png',
        sound: './media/mp3/bom_0201_0102_1112_101/bom_0201_0102_1112_101_3.mp3',
        // textBubble: {
        //   text: '지구는 움직이지  않고 태양과 달이 지구 주위를 돕니다.',
        //   class: 'balloon bottom orange',
        //   top: 10,
        //   left: 560,
        //   width: 440,
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

  $prite.add({
    target: $ts.getEl('#spriteAniBox_3'),
    spriteId: 'sprite3',
    spriteList: [
      {
        name: 'girl_1',
        circle: 'deeppink',
        top: 60,
        left: 0,
        width: 270,
        height: 360,
        thumbNail: 'common/contents/images/character/girl_1.png',
        spriteSheet: 'common/contents/images/character/girl_1_sprite.png',
        sound: './media/mp3/bom_0201_0102_1112_101/bom_0201_0102_1112_101_2.mp3',
        sheetWidth: 54000,
        sheetHeight: 360,
        endSheet: 0,
        delay: 40,
        callbacks: {
          start: function () {},
          end: function () {}
        }
      },
      {
        name: 'girl_2',
        circle: 'orange',
        top: 60,
        left: 290,
        width: 270,
        height: 360,
        thumbNail: 'common/contents/images/character/girl_2.png',
        spriteSheet: 'common/contents/images/character/girl_2_sprite.png',
        sound: './media/mp3/bom_0201_0102_1112_101/bom_0201_0102_1112_101_2.mp3',
        sheetWidth: 54000,
        sheetHeight: 360,
        endSheet: 0,
        delay: 40,
        callbacks: {
          start: function () {},
          end: function () {}
        }
      },
      {
        name: 'girl_3',
        circle: 'purple',
        top: 60,
        left: 580,
        width: 270,
        height: 360,
        thumbNail: 'common/contents/images/character/girl_3.png',
        spriteSheet: 'common/contents/images/character/girl_3_sprite.png',
        sound: './media/mp3/bom_0201_0102_1112_101/bom_0201_0102_1112_101_2.mp3',
        sheetWidth: 54000,
        sheetHeight: 360,
        endSheet: 0,
        delay: 40,
        callbacks: {
          start: function () {},
          end: function () {}
        }
      },
      {
        name: 'girl_4',
        circle: 'green',
        top: 60,
        left: 870,
        width: 270,
        height: 360,
        thumbNail: 'common/contents/images/character/girl_4.png',
        spriteSheet: 'common/contents/images/character/girl_4_sprite.png',
        sound: './media/mp3/bom_0201_0102_1112_101/bom_0201_0102_1112_101_2.mp3',
        sheetWidth: 54000,
        sheetHeight: 360,
        endSheet: 0,
        delay: 40,
        callbacks: {
          start: function () {},
          end: function () {}
        }
      },
      {
        name: 'boy_1',
        circle: 'deeppink',
        top: 330,
        left: 0,
        width: 270,
        height: 360,
        thumbNail: 'common/contents/images/character/boy_1.png',
        spriteSheet: 'common/contents/images/character/boy_1_sprite.png',
        sound: './media/mp3/bom_0201_0102_1112_101/bom_0201_0102_1112_101_1.mp3',
        sheetWidth: 54000,
        sheetHeight: 360,
        endSheet: 0,
        delay: 40,
        callbacks: {
          start: function () {},
          end: function () {}
        }

      },
      {
        name: 'boy_2',
        circle: 'orange',
        top: 330,
        left: 290,
        width: 270,
        height: 360,
        thumbNail: 'common/contents/images/character/boy_2.png',
        spriteSheet: 'common/contents/images/character/boy_2_sprite.png',
        sound: './media/mp3/bom_0201_0102_1112_101/bom_0201_0102_1112_101_3.mp3',
        sheetWidth: 54000,
        sheetHeight: 360,
        endSheet: 0,
        delay: 40,
        callbacks: {
          start: function () {},
          end: function () {}
        }

      },
      {
        name: 'boy_3',
        circle: 'purple',
        top: 330,
        left: 580,
        width: 270,
        height: 360,
        thumbNail: 'common/contents/images/character/boy_3.png',
        spriteSheet: 'common/contents/images/character/boy_3_sprite.png',
        sound: './media/mp3/bom_0201_0102_1112_101/bom_0201_0102_1112_101_3.mp3',
        sheetWidth: 54000,
        sheetHeight: 360,
        endSheet: 0,
        delay: 40,
        callbacks: {
          start: function () {},
          end: function () {}
        }

      },
      {
        name: 'boy_4',
         circle: 'green',
        top: 330,
        left: 870,
        width: 270,
        height: 360,
        thumbNail: 'common/contents/images/character/boy_4.png',
        spriteSheet: 'common/contents/images/character/boy_4_sprite.png',
        sound: './media/mp3/bom_0201_0102_1112_101/bom_0201_0102_1112_101_3.mp3',
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
});
