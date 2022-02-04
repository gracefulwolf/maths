(function () {
	var paperDotLength = [5, 5];

	function createElement(container, i, j) {
		var dot = document.createElement("div");
		dot.classList.add("js-dragObj");
		dot.classList.add("dragObj");
		dot.classList.add("horizon_" + (i + 1));
		dot.classList.add("vertical_" + (j + 1));
		dot.setAttribute("data-type", "drag");
		dot.setAttribute("data-index", "1");
		container.appendChild(dot);

		return dot;
	}

	function createDot(container, dotLength) {
		for (var i = 0; i < dotLength[0]; i++) {
			for (var j = 0; j < dotLength[1]; j++) {
				createElement(container, i, j);
			}
		}
	}

	function setDrawLine(container, dotLength) {
		createDot(container, dotLength);

		return new DrawLine({
			container: container,
			resetButton: container.querySelector(".js-quizButton"),
			lineWidth: 6,
			callback: {
				start: function (DrawLine) { },
				move: function (DrawLine) { },
				end: function (DrawLine) { },
				out: function (DrawLine) { },
				correct: function (DrawLine) {
					var startObj = DrawLine.DRAGDROP.startObj;
					var savedLines = DrawLine.savedLines;

					startObj.resetPosition();
				},
				incorrect: function (DrawLine) { },
			},
		});
	}

	window.addEventListener("load", function () {

		var section = document.querySelector(".contentsArea > section");
		var drawLine = setDrawLine(
			document.querySelector(".js-drawLine"),
			paperDotLength
		);
		var drawLine2 = setDrawLine(
			document.querySelector(".js-drawLine2"),
			paperDotLength
		);

		window.$callBack.sliderMove = function (SLIDER) {
			section.className = "page" + (SLIDER.idx + 1);
			drawLine.reset();
			drawLine2.reset();
		};


		this.document.querySelector('.exBtn').addEventListener('click', function(){
			drawLine.reset();
			drawLine2.reset();
		});
		
		setTimeout(function () {
			drawLine.reset();
			drawLine2.reset();
		}, 100);
	});
})();
