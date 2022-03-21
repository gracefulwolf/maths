"use strict";

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}! function() {
    var o = "data-answer",
        n = "data-group",
        e = function() {
            function r(e) {
                _classCallCheck(this, r), this.QUIZ = e
            }
            return _createClass(r, [{
                key: "init",
                value: function() {
                    this.initGame(), this.initDragObjs(), this.initSvg(), this.initPopupOpenCallback()
                }
            }, {
                key: "initGame",
                value: function() {
                    var e = this,
                        t = this.QUIZ.container,
                        n = t.querySelectorAll(".js-dragLineArea"),
                        i = t.querySelectorAll(".js-dragLineObj");
                    this.game = initDragDrop({
                        elements: {
                            container: t,
                            areas: n,
                            objs: i
                        },
                        callbacks: {
                            start: r.startCallback,
                            move: r.moveCallback,
                            movedOut: r.movedOutCallback,
                            end: r.endCallback,
                            getZoomRate: function() {
                                return e.getZoomRate()
                            }
                        },
                        movedOutCorrPx: 20
                    }), (this.game.quiz = this).game.init()
                }
            }, {
                key: "initDragObjs",
                value: function() {
                    this.game.dragObjs.forEach(function(e) {
                        e.answeredCnt = 0
                    })
                }
            }, {
                key: "initSvg",
                value: function() {
                    var e = this.game,
                        t = this.QUIZ.container.querySelector(".js-svgContainer");
                    e.totalAnsweredCnt = 0, Object.defineProperties(e, {
                        svg: {
                            value: t
                        },
                        lineNow: {
                            get: function() {
                                return this._lineNow || null
                            },
                            set: function(e) {
                                this._lineNow = e
                            }
                        },
                        createLine: {
                            value: function() {
                                var e = document.createElementNS("http://www.w3.org/2000/svg", "line");
                                return this.svg.appendChild(e), this.lineNow = e
                            }
                        },
                        drawLine: {
                            value: function(e, t, n) {
                                var i = 2 < arguments.length && void 0 !== n ? n : this.lineNow;
                                if (!i) return !1;
                                var r = i.beginCoords || this.getLineBeginCoords(e),
                                    a = i.endCoords || this.getLineEndCoords(t);
                                return i.setAttribute("x1", r.x), i.setAttribute("y1", r.y), i.setAttribute("x2", a.x), i.setAttribute("y2", a.y), i
                            }
                        },
                        removeLine: {
                            value: function(e) {
                                var t = 0 < arguments.length && void 0 !== e ? e : this.lineNow;
                                if (!t) return !1;
                                this.svg.removeChild(t), this.lineNow && (this.lineNow = null)
                            }
                        },
                        getLineBeginCoords: {
                            value: function(e, t) {
                                var n = 0 < arguments.length && void 0 !== e ? e : this.movingObj,
                                    i = 1 < arguments.length && void 0 !== t ? t : this.lineNow;
                                if (!n && i) return !1;
                                var r = n.offsets;
                                return i.beginCoords = r
                            }
                        },
                        getLineEndCoords: {
                            value: function(e, t) {
                                var n = 0 < arguments.length && void 0 !== e ? e : this.movingObj,
                                    i = 1 < arguments.length && void 0 !== t ? t : this.lineNow;
                                if (!n && i) return !1;
                                var r = n.offsets;
                                return i.endCoords = r
                            }
                        },
                        getMatchingObjOrArea: {
                            value: function(e) {
                                var t = -1 < e.constructor.toString().indexOf("DragObj") ? "obj" : "area",
                                    n = e.name;
                                return this.getSameName(t, n)
                            }
                        },
                        getSameName: {
                            value: function(e, t) {
                                var n;
                                return ("obj" === e ? this.dropAreas : this.dragObjs).forEach(function(e) {
                                    t === e.name && (n = e)
                                }), n
                            }
                        },
                        checkAndDisableDragObjs: {
                            value: function(e) {
                                e.forEach(function(e) {
                                    a(e) && e.disable(!0)
                                })
                            }
                        }
                    })
                }
            }, {
                key: "initPopupOpenCallback",
                value: function() {
                    var t = this;
                    window.$popupCallBack || (window.$popupCallBack = {}), window.$popupCallBack.open = function(e) {
                        "pageChange" === e.Mode && t.popupOpenCallback()
                    }
                }
            }, {
                key: "endCorrect",
                value: function() {
                    var e, t, n = this.game,
                        i = n.movingObj,
                        r = n.droppedArea,
                        a = n.getMatchingObjOrArea(r);
                    i.answeredCnt++, a.answeredCnt++, n.totalAnsweredCnt++, n.checkAndDisableDragObjs([i, a]), n.getLineEndCoords(r), n.drawLine(), i.resetPosition(), (e = n, t = parseInt(e.container.element.getAttribute("data-total-complete-count") || "") || 0, e.totalAnsweredCnt === t) && (this.QUIZ.answerBtn && this.QUIZ.answerBtn.classList.add("reset"), this.QUIZ.container.classList.add("complete"))
                }
            }, {
                key: "endWrong",
                value: function() {
                    this.game.removeLine(), this.game.movingObj.resetPosition()
                }
            }, {
                key: "showAnswer",
                value: function() {
                    var n = this,
                        e = this.game,
                        t = e.dragObjs,
                        i = e.dropAreas;
                    t.forEach(function(t) {
                        t.disable(!0), i.forEach(function(e) {
                            e.disable(!0), n.checkAnswersAndDrawLines(t, e)
                        })
                    })
                }
            }, {
                key: "reset",
                value: function() {
                    var e = this.game,
                        t = this.QUIZ.answerBtn;
                    t && t.dataset.option && -1 < t.dataset.option.indexOf("resetOnly") && t.classList.add("reset"), this.QUIZ.container.classList.remove("complete"), this.game.totalAnsweredCnt = 0, this.resetAreas(), this.resetObjs(), this.resetSvg(), e.initDragObjsCoords(), e.setZoomRate()
                }
            }, {
                key: "resetObjs",
                value: function() {
                    this.game.dragObjs.forEach(function(e) {
                        e.answeredCnt = 0, e.disable(!1), e.element.classList.remove("dragLineComplete")
                    })
                }
            }, {
                key: "resetAreas",
                value: function() {
                    this.game.dropAreas.forEach(function(e) {
                        e.disable(!1)
                    })
                }
            }, {
                key: "resetSvg",
                value: function() {
                    for (var e, t = this.game, n = t.svg.querySelectorAll("line"), i = 0, r = n.length; i < r; i++) e = n[i], t.removeLine(e)
                }
            }, {
                key: "popupOpenCallback",
                value: function() {
                    var e = this.game;
                    this.reset(), e.initDragObjsCoords(), e.setZoomRate()
                }
            }, {
                key: "getZoomRate",
                value: function() {
                    if (!document.querySelector("html").classList.contains("noUI")) return {
                        x: 1,
                        y: 1
                    };
                    var e = document.getElementById("wrap").style.transform,
                        t = r.convertScaleStringToArray(e);
                    return {
                        x: t[0],
                        y: t[1]
                    }
                }
            }, {
                key: "checkAnswersAndDrawLines",
                value: function(e, t) {
                    var n = this.game,
                        i = s(e, t),
                        r = l(e, t);
                    i && !r && (a(e) || (n.createLine(), n.drawLine(e, t), e.answeredCnt++), n.container.element.classList.add("complete"))
                }
            }], [{
                key: "startCallback",
                value: function(e) {
                    e.movingObj && (e.createLine(), e.getLineBeginCoords())
                }
            }, {
                key: "moveCallback",
                value: function(e) {
                    e.getLineEndCoords(), e.drawLine()
                }
            }, {
                key: "movedOutCallback",
                value: function(e) {
                    e.removeLine()
                }
            }, {
                key: "endCallback",
                value: function(e) {
				window.$efSound = {
		    		click: $ts.createAudio.set("common/libs/media/click.mp3"),
		    		correct: $ts.createAudio.set("common/libs/media/correct.mp3"),
		    		incorrect: $ts.createAudio.set("common/libs/media/incorrect.mp3"),
		    		wrong: $ts.createAudio.set("common/libs/media/wrong.mp3"),
		    		checkSound: $ts.createAudio.set("common/libs/media/checkSound.mp3"),
		    		clap: $ts.createAudio.set("common/libs/media/clap.mp3"),
		    		animation: $ts.createAudio.set("common/libs/media/animationBG.mp3")
		    	};
					
                    var t = e.movingObj,
                        n = e.droppedArea,
                        i = e.quiz,
                        r = s(t, n),
                        a = l(t, n);
                    n && r && !a ? (window.$efSound.correct.play(), i.endCorrect()) : (window.$efSound.incorrect.play(), i.endWrong())
                }
            }, {
                key: "convertScaleStringToArray",
                value: function(e) {
                    var t = e.split(",")[0].split("(")[1];
                    return [t, t].map(function(e) {
                        return parseFloat(e.trim())
                    })
                }
            }]), r
        }();

    function s(e, t) {
        if (!t) return !1;
        var n = e.element.getAttribute(o) || "",
            i = switchStringNumListToArray(n, ","),
            r = t.element.getAttribute(o) || "",
            a = switchStringNumListToArray(r, ",");
        return i.some(function(t) {
            return a.some(function(e) {
                return t === e
            })
        })
    }

    function l(e, t) {
        return !!t && (parseInt(e.element.getAttribute(n)) || 0) === (parseInt(t.element.getAttribute(n)) || 0)
    }

    function a(e) {
        return (parseInt(e.element.getAttribute("data-complete-count")) || 1) <= e.answeredCnt
    }
    window.$dragLine = e
}();
