const nextButton = document.querySelector('.js-nextStepButton');
const playResult = document.querySelector('#playResult');

window.addEventListener('click', event => {
	const tar = event.target;
	if (tar.classList.contains('js_selectTarget')){
		const playNumber = document.querySelector('.selectPlay--selected').dataset.playIndex;
		const targetNumber = tar.dataset.selectTarget;
		if(playNumber === targetNumber){
			window.efSound("correct");
			tar.parentNode.querySelectorAll('.js_selectTarget').forEach(obj=>{
				if (obj.dataset.selectTarget != targetNumber){
					obj.setAttribute('disabled','disabled');
				}
			});
			playResult.querySelector('.result' + targetNumber).classList.remove('hide');
			nextButton.classList.add('nextStepButton--show');
			nextButton.focus();
		}else{
			window.shake(tar);
			window.efSound("incorrect");
		}
	}
	if (tar.classList.contains('regameButton')) {
		console.log('regameButton')
		document.querySelectorAll('.js_selectTarget').forEach(obj=>{
			if(obj.hasAttribute('disabled')){
				obj.removeAttribute('disabled');
			}
			playResult.querySelectorAll('div').forEach((obj,index) => {
				if(index > 0){
					obj.classList.add('hide');
				}
			})
		})
	}
});