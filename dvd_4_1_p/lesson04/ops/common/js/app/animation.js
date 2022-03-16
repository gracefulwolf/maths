/*
*	CCAnimation
* <div class="app-ccAnimation" data-ui="app-ccAnimation" data-option='{}'></div>
*/
$(function() {
	$("*[data-ui='app-ccAnimation']").each(function ( i )
	{
		let option = $(this).attr("data-option") ? $.parseJSON($(this).attr("data-option")) : {};
		$(this).ccAnimation(option);
	});
});
(function ($){
	'use strict';

	var CCAnimation = CCAnimation || (function ()
	{
		var instance;
		var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

		function initFn ()
		{
			var owner = this;

			if(this.options.left) this.element.css("left", this.options.left);
			if(this.options.top) this.element.css("top", this.options.top);

			init.call(this);
		}

		function setReady() 
		{
			var owner = instance;

			this.exportRoot = exportRoot;

			if(owner.options.buttons)
			{
				for(var i = 0; i < owner.options.buttons.length; i++)
				{
					var button = $(owner.options.buttons[i]);
					button.css("pointer-events", "auto");
				}
			}

			owner.element.addClass("ready");
			owner.element.trigger("ON_READY");
		}

		function init() {
			canvas = this.element.find("canvas")[0];
			canvas.setAttribute("width", this.options.width);
			canvas.setAttribute("height", this.options.height);

			// anim_container = this.element[0];
			// dom_overlay_container = document.getElementById("dom_overlay_container");
			var comp=AdobeAn.getComposition("5FD875F89C0D9C48BACB2592D7CB2D33");
			var lib=comp.getLibrary();
			createjs.MotionGuidePlugin.install();
			var loader = new createjs.LoadQueue(false);
			loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
			loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
			var lib=comp.getLibrary();
			loader.loadManifest(lib.properties.manifest);
		}
		function handleFileLoad(evt, comp) {
			var images=comp.getImages();	
			if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
		}
		function handleComplete(evt,comp) {
			//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
			var lib=comp.getLibrary();
			var ss=comp.getSpriteSheet();
			var queue = evt.target;
			var ssMetadata = lib.ssMetadata;
			for(var i=0; i<ssMetadata.length; i++) {
				ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
			}
			exportRoot = new lib.animation();
			stage = new lib.Stage(canvas);	
			//Registers the "tick" event listener.
			fnStartAnimation = function() {
				stage.addChild(exportRoot);
				createjs.Ticker.setFPS(lib.properties.fps);
				createjs.Ticker.addEventListener("tick", stage);
			}	    
			//Code to support hidpi screens and responsive scaling.
			// AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
			AdobeAn.compositionLoaded(lib.properties.id);
			fnStartAnimation();

			instance.start();
		}

		function onTickClip( e ) {
			var owner = instance;
			
			if(owner.nowMc == null) 
			{
				return;
			}
			// owner.nowMc.removeEventListener( "tick", onTickClip );
			
			// console.log(owner.nowMc.currentFrame, owner.nowMc.totalFrames - 1);
			if( owner.nowMc.currentFrame == owner.nowMc.totalFrames - 1 ) {
				if(owner.nowOption.endStop) owner.nowMc.stop();
				if(owner.nowOption.onComplete) owner.nowOption.onComplete(owner.nowMc);
				console.log("cc animation finish");

				owner.nowMc.removeEventListener( "tick", onTickClip );
				owner.nowMc = null;
				owner.nowOption = null;
			}
		}

		return Class.extend({

			init : function (element, options)
			{
				this.element = element;
				this.options = options;

				instance = this;
				this.exportRoot = null;
				this.nowMc = null;
				this.nowOption = {};

				initFn.call(this);
				
			},

			start : function ()
			{
				setReady.call(this);
			},

			/**
			 * @param {*} targetName 
			 * @param {*} option {startFrame, endStop, onComplete}
			 */
			play : function(targetName, option) {
				var owner = this;

				this.reset();

				var mc = (targetName) ? exportRoot[targetName] : exportRoot;
				if(option.startFrame != null) 	mc.gotoAndPlay(option.startFrame);
				else							mc.play();

				mc.addEventListener("tick", onTickClip);

				owner.nowMc = mc;
				owner.nowOption = option;
			},

			stop : function() {
				var owner = this;
				if(owner.nowMc != null)
				{
					owner.nowMc.removeEventListener( "tick", onTickClip );
					owner.nowMc.gotoAndStop(0);

					owner.nowMc = null;
					owner.nowOption = null;
				}

			},

			/**
			 * @param {*} targetName (null / string)
			 * @param {*} frame (0 ~ )
			 */
			gotoAndStop : function (targetName, frame) {
				this.reset();

				var mc = (targetName) ? exportRoot[targetName] : exportRoot;
				mc.gotoAndStop(frame);
			},

			/**
			 * @param {*} targetName (null / string)
			 */
			nextFrame : function (targetName) {
				this.reset();

				var mc = (targetName) ? exportRoot[targetName] : exportRoot;
				var frame = mc.currentFrame+1;
				mc.gotoAndStop(frame);
			},

			dispose : function () {
			},

			reset : function() {
				var owner = this;

				if(owner.nowMc != null) 
				{
					if(owner.nowOption.endStop) owner.nowMc.gotoAndStop(0);
					if(owner.nowOption.onComplete) owner.nowOption.onComplete(owner.nowMc);
					console.log("cc animation finish");

					owner.nowMc.removeEventListener( "tick", onTickClip );
					owner.nowMc = null;
					owner.nowOption = null;
				}
			},

			// reStart : function () {
			// 	this.dispose();
			// 	this.init(this.element, this.options);
			// 	this.start();
			// }
		});

	})();

	// 메인 기본 옵션
	CCAnimation.DEFAULT = {autoStart:true};

    function Plugin(option, params)
    {
        return this.each(function ()
        {
            var $this = $(this);
            var data = $this.data('ui.ccAnimation');
            var options =  $.extend({}, CCAnimation.DEFAULT, typeof option == "object" && option);
            if (!data) $this.data('ui.ccAnimation', (data = new CCAnimation($this, options)));
			if (typeof option == 'string') data[option](params);
			$this.data('instance', data);
        });
    }

	window.CCAnimation = CCAnimation;

    $.fn.ccAnimation = Plugin;
    $.fn.ccAnimation.Constructor = CCAnimation;

})(jQuery);

/* 
var sounds = {};
function setCCAudio(lib)
{
	for(var i = 0; i < lib.properties.manifest.length; i++)
	{
		var src = lib.properties.manifest[i].src;
		var id = lib.properties.manifest[i].id;
		if(src.indexOf("sounds/") > -1)
		{
			sounds[id] = src;
		}
	}
}

var ccAudio = null;
function playSound(id, loop) {
	console.log("-------------- playSound:", id);
	// return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
	var src = sounds[id];
	var audio = new Audio();
	ccAudio = audio;
	audio.src = src;
	audio.play();
}
*/