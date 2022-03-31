var isRunning = false;
var pageIndex = 0;
var page = null;

var diceNum = 1;
var diceFile = ["./images/dice1/dice1_", "./images/dice1/dice1_", "./images/dice2/dice2_"];
var diceTotal = [22, 22, 21];

var count = diceTotal[pageIndex] - 1; //주사위 굴리는 애니메이션 횟수
var time = 0;

$(function(){
	console.log("document ready");
	page = $(".pages .page").eq(pageIndex);
});


$('#page2').css('display', 'none')
$('.diceCtnSelectBtn').on('click', function () {
	if(isRunning) return;

	var idx = $(this).index();
	reset();
	pageIndex = idx;
	page = $(".pages .page").eq(pageIndex);
	page.show();

	$('.diceCtnSelectBtn').removeClass("active");
	$(this).addClass("active");
});

function clear() {
	page.find('.diceAni').css('display', 'block')
	page.find('.diceImg').css('display', 'none')
}

function reset() {
	$('.diceImg').attr('idx', '');
	page.hide();
}

function throwDice() {

	count = count - 1; // 타이머 선택 숫자에서 -1씩 감산

	if (count != 0) {
		// 주사위 그림 <1>
		diceNum = diceNum + 1;
		if (diceNum == (diceTotal[pageIndex] - 1)) {
			diceNum = 1;
		}

		var strNum = '0000' + diceNum;
		strNum = strNum.substr(strNum.length - 4);
		// console.log("ani", strNum);

		var str = diceFile[pageIndex] + strNum + ".png";
		page.find('.diceAni').attr("src", str);
	}
	else if (count == 0) {
		clearInterval(time);

		console.log("끝");

		var random1 = Math.floor(Math.random() * 6);
		var random2 = Math.floor(Math.random() * 6);
		var random3 = Math.floor(Math.random() * 10);

		var sum = 0;
		if(pageIndex == 0)
		{
			sum = random1 + 1;
			page.find(".diceImg.zero").attr("idx", random1);
			page.find(".diceImg.zero").css('display', 'block');
		}
		else if(pageIndex == 1)
		{
			sum = (random1 + 1) + (random2 + 1);
			page.find(".diceImg.one").attr("idx", random1);
			page.find(".diceImg.one").css('display', 'block');
			
			page.find(".diceImg.two").attr("idx", random2);
			page.find(".diceImg.two").css('display', 'block');
		}
		else if(pageIndex == 2)
		{
			sum = random3 + 1;
			page.find(".diceImg.zero").attr("idx", random3);
			page.find(".diceImg.zero").css('display', 'block');
		}

		$('.diceAni').css('display', 'none');
		$('.totalNo').text(sum)

		console.log("결과 보이기");
		isRunning = false;
	}
}

$('.btn-run').on('click', function () {
	console.log(isRunning);
	if(isRunning) return;
	isRunning = true;

	console.log("주사위 굴리기");
	
	count = diceTotal[pageIndex] - 1;
	clearInterval(time);

	clear();
	time = setInterval(throwDice, 33);

	var audio = new Audio()
	audio.src = './sound/dice_ef.mp3'
	audio.play()

})