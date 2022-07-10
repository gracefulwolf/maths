
window.PROGRESS = window.PROGRESS || {};
window.PROGRESS.settings = {
	storageName: 'TS-PROGRESS',
	showButton: '.js-progressButton',
	block: {
		classname: 'progress',
	},
	container: {
		classname: 'progressPopup',
	},
	title: {
		classname: 'title',
		text: '진도 보기'
	},
	closeButton: {
		classname: 'closeButton',
		text: 'MAIN',
	},
	list: {
		classname: 'list',
		head: {
			classname: 'head',
			children: {
				checkbox: {
					sort: false,
				},
				class: {
					text: '학급',
					sort: true,
				},
				ebookPage: {
					text: '교과서 페이지',
					sort: false,
				},
				date: {
					text: '일자',
					sort: true,
				},
			}
		},
		progress: {
			children: {
				checkbox: {
					classname: 'checkbox',
				},
				class: {
					classname: 'class',
					afterText: ' 반',
				},
				ebookPage: {
					classname: 'ebookPage',
					afterText: ' p',
				},
				date: {
					classname: 'data',
					type: 'yyyy-mm-dd',
				}
			}
		}
	},
	addListButton: {
		classname: 'addListButton',
		text: '진도 저장',
	},
	removeListButton: {
		classname: 'garbageButton',
	},
	toggleSelectButton: {
		classname: 'toggleSelectButton',
		text: '전체 선택/해제',
	},
	alert: {
		classname: 'progressAlert',
		closeButton: {
			classname: 'popCloseButton',
		},
		type: {
			add: {
				attr: 'add',
				text: '진도를 저장하시겠습니까?',
				input: {
					afterText: '반',
				},
				buttons: {
					correct: '예',
					incorrect: '아니요'
				}
			},
			close: {
				attr: 'close',
				text: '진도를 저장하시겠습니까?',
				input: {
					afterText: '반',
				},
				buttons: {
					correct: '저장',
					incorrect: '바로 종료'
				}
			},
			remove: {
				attr: 'remove',
				text: '진도를 삭제하시겠습니까?',
				buttons: {
					correct: '예',
					incorrect: '아니요'
				}
			},
			select: {
				attr: 'select',
				text: '진도를 선택해주세요.',
				buttons: {
					correct: '확인',
				}
			}
		}
	}
}