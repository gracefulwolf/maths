
function log (logdata) {
	var console = window.console || { log : function () {} };
	// console.log(logdata);
}

var eventCheck = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;

log(eventCheck);

var gameManager = {
		eventSelector : {
		downEvent : eventCheck ? 'touchstart' : 'mousedown',
		moveEvent : eventCheck ? 'touchmove' : 'mousemove',
		upEvent : eventCheck ? 'touchend' : 'mouseup',
		outEvent : eventCheck ? 'touchleave' : 'mouseout'
	}
}
/*하트*/
// gameManager.iconName = 'heart';
/*별*/
gameManager.iconName = 'star';

function eventSelector (eventType, e) {
	console.log('eventSelector invoked');
	var eventMaster;

	if (eventType === 'downEvent') {
		switch (e.type) {
			case "mousedown":
				eventMaster = e;
				break;
			case "touchstart":
				// e.preventDefault();
				eventMaster = e.touches[0];
				break;
		}
	} else if (eventType === 'moveEvent') {
		switch (e.type) {
			case "mousemove":
				eventMaster = e;
				break;
			case "touchmove":
				eventMaster = e.touches[0];
				break;
		}
	} else if (eventType === 'upEvent') {
		switch (e.type) {
			case "mouseup":
				eventMaster = e;
				break;
			case "touchend":
				eventMaster = e.changedTouches[0];
				break;
		}
	} else if (eventType === 'outEvent') {
		switch (e.type) {
			case "mouseout":
				eventMaster = e;
				break;
			case "touchleave":
				eventMaster = e.touches[0];
				break;
		}
	}

	return eventMaster;
}
