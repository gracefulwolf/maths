(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animation_atlas_", frames: [[0,0,1265,368],[0,370,946,156]]}
];


// symbols:



(lib._20200902_153336 = function() {
	this.initialize(ss["animation_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_35 = function() {
	this.initialize(ss["animation_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dfnfdnfdndm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ah8IwIAAxfID5AAIAARfg");
	var mask_graphics_1 = new cjs.Graphics().p("AmIIwIAAxfIMRAAIAARfg");
	var mask_graphics_2 = new cjs.Graphics().p("AqTIwIAAxfIUoAAIAARfg");
	var mask_graphics_3 = new cjs.Graphics().p("AufIwIAAxfIc/AAIAARfg");
	var mask_graphics_4 = new cjs.Graphics().p("AyrIwIAAxfMAlXAAAIAARfg");
	var mask_graphics_5 = new cjs.Graphics().p("A23IwIAAxfMAtvAAAIAARfg");
	var mask_graphics_6 = new cjs.Graphics().p("A7DIwIAAxfMA2HAAAIAARfg");
	var mask_graphics_7 = new cjs.Graphics().p("A/OIwIAAxfMA+dAAAIAARfg");
	var mask_graphics_8 = new cjs.Graphics().p("EgjaAIwIAAxfMBG1AAAIAARfg");
	var mask_graphics_9 = new cjs.Graphics().p("EgnmAIwIAAxfMBPNAAAIAARfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-255.45,y:0}).wait(1).to({graphics:mask_graphics_1,x:-228.675,y:0}).wait(1).to({graphics:mask_graphics_2,x:-201.9,y:0}).wait(1).to({graphics:mask_graphics_3,x:-175.125,y:0}).wait(1).to({graphics:mask_graphics_4,x:-148.35,y:0}).wait(1).to({graphics:mask_graphics_5,x:-121.55,y:0}).wait(1).to({graphics:mask_graphics_6,x:-94.775,y:0}).wait(1).to({graphics:mask_graphics_7,x:-68,y:0}).wait(1).to({graphics:mask_graphics_8,x:-41.225,y:0}).wait(1).to({graphics:mask_graphics_9,x:-14.45,y:0}).wait(1));

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_35();
	this.instance.parent = this;
	this.instance.setTransform(-236.5,-39,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-236.5,-39,473,78);


(lib.fbfdbdnn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.dfnfdnfdndm("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(241.5,88.45);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).wait(16));

	// Layer_6
	this.instance_1 = new lib.dfnfdnfdndm("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-238.5,88.45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).wait(28));

	// Layer_5
	this.instance_2 = new lib.dfnfdnfdndm("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(241.5,1.45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).wait(40));

	// Layer_4
	this.instance_3 = new lib.dfnfdnfdndm("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-238.5,1.45);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).wait(52));

	// Layer_3
	this.instance_4 = new lib.dfnfdnfdndm("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(241.5,-85.55);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).wait(64));

	// Layer_1
	this.instance_5 = new lib.dfnfdnfdndm("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-238.5,-85.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(75));

	// Layer_2
	this.instance_6 = new lib._20200902_153336();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-477,-138,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-477,-138,955,276);


// stage content:
(lib.animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(75));

	// Layer_1
	this.instance = new lib.fbfdbdnn("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(643.3,369,1,1,0,0,0,0.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(805.5,591,315,-84);
// library properties:
lib.properties = {
	id: '5FD875F89C0D9C48BACB2592D7CB2D33',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"animation/mm_31_3_05_03_01/images/animation_atlas_.png", id:"animation_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5FD875F89C0D9C48BACB2592D7CB2D33'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;