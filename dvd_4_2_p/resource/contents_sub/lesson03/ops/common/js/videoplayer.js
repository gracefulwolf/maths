/*
*	VideoPlayer
*/
(function ($){
	'use strict';

	var VideoPlayer = VideoPlayer || (function ()
	{
		var volume = 1;
		var volume_min = 0.15;

		function initVideo()
		{
			var owner = this;

			$(window).on("ON_MEDIA_STOP", function(){
				owner.dispose();
			});

			this.element.prepend($(VideoPlayer.innerHtml));

			this.element.find(".video-cont").on("ON_LOADEDMETADATA", function(e, event){
				console.log(event.currentTarget.duration);
				var time  = Math.floor(event.currentTarget.duration);
				var ss = $.pad(time%60, 2);
				var mm = $.pad(Math.floor(time/60), 2);
				owner.element.find(".time-duration").html(mm + ":" + ss);

			});
			var src = "./video/" + this.options.fileName + ".mp4";
			this.videoControl = new VideoControl( this.element.find(".video-cont"), src, {
				onUpdate:$.proxy(onUpdate, this),
				onFinish:$.proxy(onFinish, this)
			});
			$(this.videoControl.video).attr("poster", "./video/" + this.options.fileName + ".png");
			this.video = this.videoControl.video;

			setControls.call(this);

			// 모바일 아닌 기기에서만 모든 버튼 hover 기능 적용. 
			if(!isMobile)
			{
				this.element.find("*[class*='btn-']").each(function(i){
					$(this).on("mouseenter", function(e){
						$(this).addClass("hover");
					});
					$(this).on("mouseleave", function(e){
						$(this).removeClass("hover");
					});
				});
			}
		}

		function setControls() {
			var owner = this;

			// center
			this.element.find(".btn-center").on("click", function () {
				owner.togglePlay();
			});
			// center btn & repeat progress on front
			this.element.find(".video-cont").append(this.element.find(".repeat-progress"));
			this.element.find(".video-cont").append(this.element.find(".btn-center"));

			// controls
			this.element.find(".btn-play").on("click", function(){
				owner.togglePlay();
			});
			this.element.find(".btn-stop").on("click", function(){
				owner.stop();
				owner.playRange.setPer(0);
			});

			// volume
			// this.element.find(".vol-progress").on("mouseenter", function (e) {
			// 	owner.element.find(".vol-progress .progress-cont").addClass("active");
			// });
			// this.element.find(".vol-progress").on("mouseleave", function (e) {
			// 	owner.element.find(".vol-progress .progress-cont").removeClass("active");
			// });
			// this.element.find(".btn-vol").on("click", function () {
			// 	// owner.toggleMute();
			// 	if(owner.element.find(".vol-progress .progress-cont").hasClass("active"))
			// 	{
			// 		owner.element.find(".vol-progress .progress-cont").removeClass("active");
			// 	}
			// 	else
			// 	{
			// 		owner.element.find(".vol-progress .progress-cont").addClass("active");
			// 	}
			// });

			// mute
			this.element.find(".btn-mute").on("click", function () {
				owner.toggleMute();
			});

			// subtitle
			this.element.find(".btn-subtitle").on("click", function () {
				owner.toggleSubtitle();
			});

			// script
			this.element.find(".btn-script").on("click", function () {
				GlobalAudio.play("button");
				owner.showScript();
			});

			// zoom
			if(this.options.zoomMode == VideoPlayer.FULLSCALE)
			{
				// console.log("zoomMode: ", this.options.zoomMode);
				this.element.find(".btn-zoom").on("click", function () {
					owner.toggleZoom();
				});
			}
			else
			{
				console.log("fullscreenEnabled: ", document.fullscreenEnabled);
				// if(document.fullscreenEnabled != true || isMobile)
				// {
				// 	this.element.addClass("fullscreenDisabled");
				// 	// this.element.find(".btn-zoom").hide();
				// }
				// else
				// {
					this.element.find(".btn-zoom").on("click", function () {
						owner.toggleZoom();
					});
	
					document.addEventListener("fullscreenchange", function(){
						var fullscreenElement = getFullScreenEelment();
						if(fullscreenElement == null)
						{
							owner.element.removeClass("fullscreen");
							// owner.video.controls = false;
						}
						else
						{
							// owner.video.controls = true;
						}
					});
				// }
			}
		}

		function getFullScreenEelment() {
			var element = null;
			if(document.fullscreenElement != null) element = document.fullscreenElement;
			if(document.webkitFullscreenElement  != null) element = document.webkitFullscreenElement ;
			if(document.mozFullScreenElement  != null) element = document.mozFullScreenElement ;
			if(document.msFullscreenElement  != null) element = document.msFullscreenElement ;
			return element;
		}

		function onUpdate(video, per)
		{
			var owner = this;

			this.playRange.setPer(per);

			var currentTime = this.video.currentTime;

			var time  = Math.floor(this.video.currentTime);
			var ss = $.pad(time%60, 2);
			var mm = $.pad(Math.floor(time/60), 2);
			this.element.find(".time").html(mm + ":" + ss);

			this.element.trigger("ON_UPDATE");

		}

		function onFinish(video)
		{
			var owner = this;
			// console.log("finish");
			
			this.stop();
			this.video.currentTime = 0;
			this.playRange.reset();

			owner.reset();
			owner.end();
		}

		return Class.extend({

			init : function (element, options)
			{
				this.element = element;
				this.options = options;
				this.eventId = "." + Date.now();

				this.videoControl = null;
				this.video = null;

				this.data = null;
			},

			setData : function (data)
			{
				var owner = this;

				initVideo.call(this);

				// range bar
				this.element.find("*[data-ui='rangeBar']").each(function ( i )
				{
					var option = {target: owner.element};
					var direct = $(this).attr("data-direction");
					if(direct) option.direction = direct;
					var dotWid = $(this).attr("data-dotWid");
					if(dotWid) option.dotWid = dotWid;
					$(this).rangeBar(option);
				});
				
				// range event 추가
				this.playRange = this.element.find(".play-progress .progress-cont").data("instance");
				// this.volumeRange = this.element.find(".vol-progress .progress-cont").data("instance");
				
				this.playRange.setPer(0);
				this.playRange.element.on("onProgress", function(e, data){
					owner.seekPer(data.per);
					owner.element.trigger("ON_PROGRESS");
				});
				
				
			},

			play : function() {
				this.videoControl.play();
				this.element.find(".btn-play").addClass("active");
				this.element.find(".btn-center").addClass("active");

				this.element.trigger("ON_PLAY");
			},

			pause : function() {
				this.videoControl.pause();
				this.element.find(".btn-play").removeClass("active");
				this.element.find(".btn-center").removeClass("active");

				this.element.trigger("ON_PAUSE");
			},

			stop : function() {
				this.videoControl.stop();
				this.element.find(".btn-play").removeClass("active");
				this.element.find(".btn-center").removeClass("active");

				this.element.trigger("ON_STOP");
			},

			seek : function(time) {
				if(!this.video.duration) return;
				this.video.currentTime = time;
			},

			seekPer : function(per) {
				if(!this.video.duration) return;
				this.seek( (this.video.duration * per).toFixed(3) );

				var time  = Math.floor(this.video.currentTime);
				var ss = $.pad(time%60, 2);
				var mm = $.pad(Math.floor(time/60), 2);
				this.element.find(".time").html(mm + ":" + ss);
			},

			volume : function(vol) {
				volume = vol;
				this.videoControl.volume(volume);
				
				if(volume > 0.05)
				{
					// SetGlobalVolume(volume);
					this.element.find(".btn-vol").removeClass("active");
				}
				else
				{
					// SetGlobalMute(true);
					this.element.find(".btn-vol").addClass("active");
				}
			},

			togglePlay : function() {
				if(this.video.paused)	this.play();
				else					this.pause();
			},

			toggleZoom : function() {
				// if(!document.fullscreenEnabled) return;
				var elem = this.element[0];
				var fullscreen = this.element.hasClass("fullscreen");
				if(fullscreen)  
				{
					this.element.removeClass("fullscreen");
					closeFullscreen();
				}
				else
				{
					this.element.addClass("fullscreen");
					openFullscreen(elem);
				}
				this.element.find(".btn-zoom").removeClass("hover");
			},

			toggleMute : function() {
				if(this.element.find(".btn-mute").hasClass("active"))
				{
					this.element.find(".btn-mute").removeClass("active");
					var vol = GetGlobalVolume();
					if(vol < volume_min) vol = volume_min;
					this.volume(vol);
					// this.volumeRange.setPer(volume);
				}
				else
				{
					this.volume(0);
					// SetGlobalMute(true);

					this.element.find(".btn-mute").addClass("active");
					// this.volumeRange.setPer(0);
				}
			},

			globalMuteCheck : function() {
				return;
				// 글로벌 뮤트 체크
				if(GetGlobalMute())
				{
					this.volume(0);
					this.volumeRange.setPer(0);
					this.element.find(".btn-vol").addClass("active");
				}
				else
				{
					this.volume(GetGlobalVolume());
					this.volumeRange.setPer(volume);
				}
			},

			reset : function ()
			{
				var owner = this;

				this.stop();
				this.playRange.setPer(0);
				// this.element.find(".vol-progress .progress-cont").removeClass("active");
			},

			end : function ()
			{
			},

			restart : function() {
				this.globalMuteCheck();
			},

			dispose : function ()
			{
				this.reset();
			}	
		});

	})();

	// 기본 옵션
	VideoPlayer.FULLSCALE = "fullscale";
	VideoPlayer.FULLSCREEN = "fullscreen";

	VideoPlayer.DEFAULT = { fileName:null, rollplay: false, zoomMode: VideoPlayer.FULLSCREEN, repeatDelay: null, videoFrame: null};

    function Plugin(option, params)
    {
        return this.each(function ()
        {
            var $this = $(this);
            var data = $this.data('ui.videoPlayer');
            var options =  $.extend({}, VideoPlayer.DEFAULT, typeof option == "object" && option);
            if (!data) $this.data('ui.videoPlayer', (data = new VideoPlayer($this, options)));
			if (typeof option == 'string') data[option](params);
			$this.data('instance', data);
        });
    }

    $.fn.videoPlayer = Plugin;
    $.fn.videoPlayer.Constructor = VideoPlayer;

	VideoPlayer.innerHtml = ''
	+'<div class="video-cont">'
		+'<div class="btn-center"></div>'
	+'</div>'
	+'<div class="video-controlbox">'
		+'<div class="video-controls">'
			+'<div class="times">'
				+'<div class="time">00:00</div>'
				+'<div class="time-slash"></div>'
				+'<div class="time-duration">00:00</div>'
			+'</div>'
			+'<div class="button btn-play"></div>'
			+'<div class="button btn-stop"></div>'
			+'<div class="button btn-mute"></div>'
			+'<div class="button btn-zoom"></div>'
			+'<div class="progress-box play-progress">'
				+'<div class="progress-cont" data-ui="rangeBar">'
					+'<div class="bars">'
						+'<div class="bg"></div>'
						+'<div class="bar"></div>'
					+'</div>'
					+'<div class="dot"></div>'
				+'</div>'
			+'</div>'
		+'</div>'
	+'</div>'


	/** 
	<!-- 
	<div class="vol-progress">
		<div class="progress-cont" data-ui="rangeBar" data-direction="vertical">
			<div class="area"></div>
			<div class="box"></div>
			<div class="bars">
				<div class="bg"></div>
				<div class="bar"></div>
			</div>
			<div class="dot"></div>
		</div>
		<div class="btn-vol btn1"></div>
	</div>
	-->	
	*/              

})(jQuery);