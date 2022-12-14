window.addEventListener("load", function(){
    setRootScale();
    window.addEventListener("resize", function(e) {
        setRootScale();
    });
});

var touchstart = "mousedown";
var touchmove = "mousemove";
var touchend = "mouseup";
var touchbool = false;

if( navigator.userAgent.match(/Android/i)|| navigator.userAgent.match(/webOS/i)|| navigator.userAgent.match(/iPhone/i)|| navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Macintosh/i) ||
	navigator.userAgent.match(/iPod/i)|| navigator.userAgent.match(/BlackBerry/i)|| navigator.userAgent.match(/Windows Phone/i) && 'ontouchend' in document) {

	touchstart = "touchstart";
	touchmove = "touchmove";
    touchend = "touchend";
    touchbool = true;
}

(function() {

    if (typeof window.CustomEvent === "function") {
        return false;
    }

    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();

var broadcaster = (function() {
    var listeners = {};

    return {
        on: function(eventName, handler, context) {
            var array = listeners[eventName];
            if (array === undefined) {
                array = listeners[eventName] = [];
            }
            array.push({ handler: handler, context: context });
        },

        off: function(eventName, handler, context) {
            var array = listeners[eventName];
            if (array === undefined) {
                return;
            }
            for (var i = 0; i < array.length; ++i) {
                var listener = array[i];
                if (listener["handler"] === handler && listener["context"] === context) {
                    array.splice(i, 1);
                    return;
                }
            }
        },

        trigger: function(eventName, data) {
            var array = listeners[eventName];
            if (array === undefined) {
                return;
            }
            for (var i = 0; i < array.length; ++i) {
                var listener = array[i];
                listener["handler"].call(listener["context"], data);
            }
        }
    };
}());

function Rectangle(e,t,n,r){this.x=e;this.y=t;this.width=n;this.height=r;this.toString=function(){return"(x="+this.x+", y="+this.y+", width="+this.width+", height="+this.height+")"};this.rectContainsPoint=function(e,t){return e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height};this.intersects=function(e){return this.x<=e.x+e.width&&e.x<=this.x+this.width&&this.y<=e.y+e.height&&e.y<=this.y+this.height};this.intersection=function(e){var t=Math.max(this.x,e.x);var n=Math.min(this.x+this.width,e.x+e.width);if(t<=n){var r=Math.max(this.y,e.y);var i=Math.min(this.y+this.height,e.y+e.height);if(r<=i){return new Rectangle(t,r,n-t,i-r)}}return null}}(function(e){function t(t){var n=e(t).is("img");if(!n&&!e(t).is("canvas"))return null;var r=n?document.createElement("canvas"):t;if(!r.getContext)return null;var i;if(n){r.setAttribute("width",e(t).outerWidth());r.setAttribute("height",e(t).outerHeight());i=r.getContext("2d");i.drawImage(t,0,0,e(t).outerWidth(),e(t).outerHeight())}return r}e.fn.getRect=function(){var e=this.offset();if(!e)return null;var t=e.left;var n=e.top;return new Rectangle(t,n,this.outerWidth(),this.outerHeight())};e.fn.hitTestPoint=function(n){var r=e.extend({x:0,y:0,transparency:false},n);var i=this.getRect();var s=i.rectContainsPoint(r.x,r.y);var o=this[0];if(!r.transparency||!e(o).is("img")&&!e(o).is("canvas"))return s;if(!s)return false;var u=t(o);if(u==null)return true;var a=u.getContext("2d");var f=a.getImageData(r.x-i.x,r.y-i.y,1,1);return f.data[3]!=0};e.fn.objectHitTest=function(n){var r=e.extend({object:null,transparency:false},n);if(r.object==null)return false;var i=this.getRect();var s=r.object.getRect();var o=i.intersects(s);var u=this[0];if(!r.transparency||!e(u).is("img")&&!e(u).is("canvas"))return o;if(!o)return false;var a=t(u);var f=t(r.object[0]);if(a==null||f==null)return true;var l=a.getContext("2d");var c=f.getContext("2d");var h=i.intersection(s);if(!h)return true;var p=l.getImageData(h.x-i.x,h.y-i.y,h.width>0?h.width:1,h.height>0?h.height:1);var d=c.getImageData(h.x-s.x,h.y-s.y,h.width>0?h.width:1,h.height>0?h.height:1);var v=p.data;var m=d.data;var g=p.width*p.height*4;for(var y=0;y<g;y+=4){if(v[y+3]!=0&&m[y+3]!=0)return true}return false}})(jQuery)

function setRootScale() {
    var root = document.querySelector('#wrap');
    var ratioX = window.innerWidth / 1280;
    var ratioY = window.innerHeight / 800;
    var ratio = ratioX > ratioY ? ratioY : ratioX;
    scale_ratio = ratio;
    var newLeftPos = Math.abs(Math.floor((1280 * ratio - window.innerWidth) / 2));
    var newTopPos = Math.abs(Math.floor((800 * ratio - window.innerHeight) / 2));
    root.setAttribute(
        "style",
        "left: " +
        newLeftPos +
        "px;" +
        "top: " +
        newTopPos +
        "px;" +
        "transform: scale(" +
        ratio +
        "," +
        ratio +
        "); -webkit-transform: scale(" +
        ratio +
        "," +
        ratio +
        "); -ms-transform: scale(" +
        ratio +
        "," +
        ratio +
        ");"
    );
    root.style.visibility = "visible";
    broadcaster.trigger("RESIZE_WINDOW", { windowRatio: ratio });
}