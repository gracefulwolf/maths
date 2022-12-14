"use strict";
function openGateInit() {
  var t,
    e,
    n,
    a,
    i = $ts.getEl(".gate_container [data-open-btn]")[0];
  ($ts.getEl(".checkContainer").length ||
    $ts.getEl(".isActiveContainer").length) &&
    ((t = $ts.getEl(".checkContainer").length
      ? $ts.getEl(".checkContainer .gate_container")[0]
      : $ts.getEl(".isActiveContainer .gate_container")[0]),
    (e = $ts.ce({ tag: "div", class: "gate_ani", parent: t })),
    (n = $ts.ce({ tag: "div", id: "animation_container", parent: e })),
    $ts.ce({ tag: "canvas", id: "canvas", parent: n }),
    $ts.ce({
      tag: "div",
      class: "gate_ani_cover",
      id: "dom_overlay_container",
      parent: n,
    }),
    (a = $ts.getEl(".checkContainer").length
      ? "commonConfirm_Main"
      : "isActive_Main"),
    $ts.loadScriptFile(
      "../common/contents/js/createjs-2015.11.26.min.js",
      function () {
        $ts.loadScriptFile("../common/contents/js/" + a + ".js", function () {
          $ts.loadScriptFile(
            "../common/contents/js/canvasMain.js",
            function () {
              init();
            }
          );
        });
      }
    )),
    i.addEventListener("click", $efSound.click),
    i.addEventListener("click", openGateEvent);
}
function openGateEvent() {
  var t, e;
  $ts.getEl("[data-open-gate]")[0].classList.add("on"),
    $ts.getEl(".gate_container")[0].classList.add("off"),
    $ts.getEl("#wrap.fishing") &&
      ((t = $pm.array.inPage.quiz),
      (e = document.querySelectorAll(".js-dropArea")),
      (dragCount = 0),
      t.forEach(function (t) {
        t.reset(),
          t.QUIZ.answerBtn && t.QUIZ.answerBtn.classList.remove("reset");
      }),
      e.forEach(function (t) {
        t.classList.remove("complete");
        t.childNodes[0];
        console.log("drag", $pm.array.inPage.quiz);
      }));
}
