/*
 * jQuery Superfish Menu Plugin
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */
!function(e, s) {
    "use strict";
    var o = function() {
        var o = {
            bcClass: "sf-breadcrumb",
            menuClass: "sf-js-enabled",
            anchorClass: "sf-with-ul",
            menuArrowClass: "sf-arrows"
        }
          , t = function() {
            var s = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);
            return s && e("html").css("cursor", "pointer").on("click", e.noop),
            s
        }()
          , n = function() {
            var e = document.documentElement.style;
            return "behavior"in e && "fill"in e && /iemobile/i.test(navigator.userAgent)
        }()
          , i = function() {
            return !!s.PointerEvent
        }()
          , r = function(e, s) {
            var t = o.menuClass;
            s.cssArrows && (t += " " + o.menuArrowClass),
            e.toggleClass(t)
        }
          , a = function(s, t) {
            return s.find("li." + t.pathClass).slice(0, t.pathLevels).addClass(t.hoverClass + " " + o.bcClass).filter(function() {
                return e(this).children(t.popUpSelector).hide().show().length
            }).removeClass(t.pathClass)
        }
          , l = function(e) {
            e.children("a").toggleClass(o.anchorClass)
        }
          , h = function(e) {
            var s = e.css("ms-touch-action")
              , o = e.css("touch-action");
            o = o || s,
            o = "pan-y" === o ? "auto" : "pan-y",
            e.css({
                "ms-touch-action": o,
                "touch-action": o
            })
        }
          , u = function(s, o) {
            var r = "li:has(" + o.popUpSelector + ")";
            e.fn.hoverIntent && !o.disableHI ? s.hoverIntent(c, f, r) : s.on("mouseenter.superfish", r, c).on("mouseleave.superfish", r, f);
            var a = "MSPointerDown.superfish";
            i && (a = "pointerdown.superfish"),
            t || (a += " touchend.superfish"),
            n && (a += " mousedown.superfish"),
            s.on("focusin.superfish", "li", c).on("focusout.superfish", "li", f).on(a, "a", o, p)
        }
          , p = function(s) {
            var o = e(this)
              , t = m(o)
              , n = o.siblings(s.data.popUpSelector);
            return t.onHandleTouch.call(n) === !1 ? this : void (n.length > 0 && n.is(":hidden") && (o.one("click.superfish", !1),
            "MSPointerDown" === s.type || "pointerdown" === s.type ? o.trigger("focus") : e.proxy(c, o.parent("li"))()))
        }
          , c = function() {
            var s = e(this)
              , o = m(s);
            clearTimeout(o.sfTimer),
            s.siblings().superfish("hide").end().superfish("show")
        }
          , f = function() {
            var s = e(this)
              , o = m(s);
            t ? e.proxy(d, s, o)() : (clearTimeout(o.sfTimer),
            o.sfTimer = setTimeout(e.proxy(d, s, o), o.delay))
        }
          , d = function(s) {
            s.retainPath = e.inArray(this[0], s.$path) > -1,
            this.superfish("hide"),
            this.parents("." + s.hoverClass).length || (s.onIdle.call(v(this)),
            s.$path.length && e.proxy(c, s.$path)())
        }
          , v = function(e) {
            return e.closest("." + o.menuClass)
        }
          , m = function(e) {
            return v(e).data("sf-options")
        };
        return {
            hide: function(s) {
                if (this.length) {
                    var o = this
                      , t = m(o);
                    if (!t)
                        return this;
                    var n = t.retainPath === !0 ? t.$path : ""
                      , i = o.find("li." + t.hoverClass).add(this).not(n).removeClass(t.hoverClass).children(t.popUpSelector)
                      , r = t.speedOut;
                    if (s && (i.show(),
                    r = 0),
                    t.retainPath = !1,
                    t.onBeforeHide.call(i) === !1)
                        return this;
                    i.stop(!0, !0).animate(t.animationOut, r, "easeOutQuad", function() {
                        var s = e(this);
                        t.onHide.call(s)
                    })
                }
                return this
            },
            show: function() {
                var e = m(this);
                if (!e)
                    return this;
                var s = this.addClass(e.hoverClass)
                  , o = s.children(e.popUpSelector);
                return e.onBeforeShow.call(o) === !1 ? this : (o.stop(!0, !0).animate(e.animation, e.speed, "easeOutQuad", function() {
                    e.onShow.call(o)
                }),
                this)
            },
            destroy: function() {
                return this.each(function() {
                    var s, t = e(this), n = t.data("sf-options");
                    return n ? (s = t.find(n.popUpSelector).parent("li"),
                    clearTimeout(n.sfTimer),
                    r(t, n),
                    l(s),
                    h(t),
                    t.off(".superfish").off(".hoverIntent"),
                    s.children(n.popUpSelector).attr("style", function(e, s) {
                        return s.replace(/display[^;]+;?/g, "")
                    }),
                    n.$path.removeClass(n.hoverClass + " " + o.bcClass).addClass(n.pathClass),
                    t.find("." + n.hoverClass).removeClass(n.hoverClass),
                    n.onDestroy.call(t),
                    void t.removeData("sf-options")) : !1
                })
            },
            init: function(s) {
                return this.each(function() {
                    var t = e(this);
                    if (t.data("sf-options"))
                        return !1;
                    var n = e.extend({}, e.fn.superfish.defaults, s)
                      , i = t.find(n.popUpSelector).parent("li");
                    n.$path = a(t, n),
                    t.data("sf-options", n),
                    r(t, n),
                    l(i),
                    h(t),
                    u(t, n),
                    i.not("." + o.bcClass).superfish("hide", !0),
                    n.onInit.call(this)
                })
            }
        }
    }();
    e.fn.superfish = function(s, t) {
        return o[s] ? o[s].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof s && s ? e.error("Method " + s + " does not exist on jQuery.fn.superfish") : o.init.apply(this, arguments)
    }
    ,
    e.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: e.noop,
        onBeforeShow: e.noop,
        onShow: e.noop,
        onBeforeHide: e.noop,
        onHide: e.noop,
        onIdle: e.noop,
        onDestroy: e.noop,
        onHandleTouch: e.noop
    }
}(jQuery, window);
