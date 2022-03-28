// {volume[학기], part[단원], chapter[차시], section[코너/상단탭], tab(하단탭)}
var PAGE_DEPTH = { vi: 0, pi: 5, ci: 3, si: 4, ti: 0 };
// 상단 탭 -- 안 넣으면 PAGE_DEPTH.si 값으로 처리 됨
// var NAV_TAB_INDEX = 0;

function initPage() {
	console.log('initPage');
    var corner = $('.content-container > .content').data('instance');
    
    // let solvers = document.querySelectorAll('.btn-answer-part');

    // for (let i = 0; i < solvers.length; i++) {
    //     const solve = solvers[i];

    //     solve.addEventListener('click', function(e) {
    //         let active = this.closest('.btns-answer-part').querySelectorAll('.active');

    //         if (active.length == 2) {
    //             this.closest('.quiz-content').querySelector('.btn-ex').click();
    //         }
    //     })
        
    // }
}
