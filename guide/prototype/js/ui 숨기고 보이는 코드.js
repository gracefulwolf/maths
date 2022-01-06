// 해당하는 이벤트에 코드 삽입

// ui 숨기는 코드
if(parent.document.querySelector('iframe')){
  var parentDocument = parent.document.querySelector('iframe');
  parentDocument.parentNode.style.position = 'relative';
  parentDocument.parentNode.style.zIndex = 1000;
}

// ui 보이는 코드
if(parent.document.querySelector('iframe')){
  var parentDocument = parent.document.querySelector('iframe');
  parentDocument.parentNode.style.position = 'static';
  parentDocument.parentNode.style.zIndex = 1;
}

