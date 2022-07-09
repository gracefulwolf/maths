/*
*	Class 구현
*/
(function ()
{

    var initializing = false, fnTest = /xyz/.test(function () {
        xyz;
    }) ? /\b_super\b/ : /.*/;
    this.Class = function () {
    };

    Class.extend = function (prop) {

        var _super = this.prototype;
        initializing = true;
        var prototype = new this();
        initializing = false;

        for (var name in prop) {
            prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name]) ? (function (name, fn) {
                return function () {
                    var tmp = this._super;
                    this._super = _super[name];
                    var ret = fn.apply(this, arguments);
                    this._super = tmp;
                    return ret;
                };
            })(name, prop[name]) : prop[name];
        };

        function Class() {
            if (!initializing && this.init)
                this.init.apply(this, arguments);
        };

        Class.prototype = prototype;
        Class.prototype.constructor = Class;
        Class.extend = arguments.callee;

        return Class;
	};

})();


/*	
 *	jQuery hitTest plugin
 *	Demo and documentation:
 *	http://e-smartdev.com/#!jsPluginList/hittestJQuery
 *	
 *	Copyright (c) 2012 Damien Corzani
 *	http://e-smartdev.com/
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
function Rectangle(e,t,n,r){this.x=e;this.y=t;this.width=n;this.height=r;this.toString=function(){return"(x="+this.x+", y="+this.y+", width="+this.width+", height="+this.height+")"};this.rectContainsPoint=function(e,t){return e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height};this.intersects=function(e){return this.x<=e.x+e.width&&e.x<=this.x+this.width&&this.y<=e.y+e.height&&e.y<=this.y+this.height};this.intersection=function(e){var t=Math.max(this.x,e.x);var n=Math.min(this.x+this.width,e.x+e.width);if(t<=n){var r=Math.max(this.y,e.y);var i=Math.min(this.y+this.height,e.y+e.height);if(r<=i){return new Rectangle(t,r,n-t,i-r)}}return null}}(function(e){function t(t){var n=e(t).is("img");if(!n&&!e(t).is("canvas"))return null;var r=n?document.createElement("canvas"):t;if(!r.getContext)return null;var i;if(n){r.setAttribute("width",e(t).outerWidth());r.setAttribute("height",e(t).outerHeight());i=r.getContext("2d");i.drawImage(t,0,0,e(t).outerWidth(),e(t).outerHeight())}return r}e.fn.getRect=function(){var e=this.offset();if(!e)return null;var t=e.left;var n=e.top;return new Rectangle(t,n,this.outerWidth(),this.outerHeight())};e.fn.hitTestPoint=function(n){var r=e.extend({x:0,y:0,transparency:false},n);var i=this.getRect();var s=i.rectContainsPoint(r.x,r.y);var o=this[0];if(!r.transparency||!e(o).is("img")&&!e(o).is("canvas"))return s;if(!s)return false;var u=t(o);if(u==null)return true;var a=u.getContext("2d");var f=a.getImageData(r.x-i.x,r.y-i.y,1,1);return f.data[3]!=0};e.fn.objectHitTest=function(n){var r=e.extend({object:null,transparency:false},n);if(r.object==null)return false;var i=this.getRect();var s=r.object.getRect();var o=i.intersects(s);var u=this[0];if(!r.transparency||!e(u).is("img")&&!e(u).is("canvas"))return o;if(!o)return false;var a=t(u);var f=t(r.object[0]);if(a==null||f==null)return true;var l=a.getContext("2d");var c=f.getContext("2d");var h=i.intersection(s);if(!h)return true;var p=l.getImageData(h.x-i.x,h.y-i.y,h.width>0?h.width:1,h.height>0?h.height:1);var d=c.getImageData(h.x-s.x,h.y-s.y,h.width>0?h.width:1,h.height>0?h.height:1);var v=p.data;var m=d.data;var g=p.width*p.height*4;for(var y=0;y<g;y+=4){if(v[y+3]!=0&&m[y+3]!=0)return true}return false}})(jQuery)