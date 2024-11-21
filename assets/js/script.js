
gsap.registerPlugin(ScrollTrigger);
let speed = 100;

let scene1 = gsap.timeline();
ScrollTrigger.create({
    animation: scene1,
    trigger: ".kv-h",
    start: "top top",
    end: "45% 100%",
    scrub: 3,
});

// hills animation 
scene1.to("#main-world__r-cloud", { y: 0 * speed, x: 1 * speed, scale: 1.5, ease: "power1.in" }, 0);
scene1.to("#main-world__l-cloud", { y: 0 * speed, x: -1 * speed, scale: 1.5, ease: "power1.in" }, 0);
scene1.to("#main-world__people", { y: 6 * speed, x: 1 * speed, ease: "power1.in" }, 0);
scene1.to("#main-world__l-m-leaf", { y: 4 * speed, x: -6 * speed, rotation: -15, ease: "power1.in" }, 0.1);
scene1.to("#main-world__r-m-leaf", { y: 4 * speed, x: 6 * speed, rotation: 20, ease: "power1.in" }, 0.1);
scene1.to("#main-world__l-f-leaf", { y: 2.3 * speed, x: -6 * speed, ease: "power1.in" }, 0.1);
scene1.to("#main-world__r-f-leaf", { y: 5 * speed, x: 6 * speed, ease: "power1.in" }, 0.1);
scene1.to("#main-world__bg", { scale: 1.25 }, 0);


// MouseEvent
var dc = Object.defineProperty;
var fc = (n, e, t) => e in n ? dc(n, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : n[e] = t;
var ie = (n, e, t) => (fc(n, typeof e != "symbol" ? e + "" : e, t),
    t);
(function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        i(r);
    new MutationObserver(r => {
        for (const s of r)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && i(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(r) {
        const s = {};
        return r.integrity && (s.integrity = r.integrity),
            r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
            r.crossOrigin === "use-credentials" ? s.credentials = "include" : r.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
            s
    }
    function i(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const s = t(r);
        fetch(r.href, s)
    }
}
)();
const Pr = class Pr {
    static canUseWebP(e, t = "lossy") {
        const i = {
            lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"
        }
            , r = new Image;
        r.onload = function () {
            const s = r.width > 0 && r.height > 0;
            e(s)
        }
            ,
            r.onerror = function () {
                e(!1)
            }
            ,
            r.src = "data:image/webp;base64," + i[t]
    }
    static rad(e) {
        return e * this.RAD
    }
    static r(e, t) {
        return Math.random() * (t - e) + e
    }
    static el(e) {
        let t = document.getElementById(e);
        return t || (t = null),
            t
    }
    static find(e, t) {
        if (e)
            return Array.from(e.querySelectorAll(t))
    }
    static find1st(e, t) {
        if (e)
            return e.querySelector(t)
    }
    static selector(e) {
        return document.querySelector(e)
    }
    static selectorAll(e) {
        return Array.from(document.querySelectorAll(e))
    }
    static addClass(e, t) {
        e && (e.classList ? e.classList.add(t) : e.setAttribute("class", t))
    }
    static removeClass(e, t) {
        e && (e.classList ? e.classList.remove(t) : e.setAttribute("class", ""))
    }
    static hasClass(e, t) {
        if (e)
            return e.classList.contains(t)
    }
    static getPageSize() {
        let e = {};
        return e.sx = document.documentElement.scrollLeft || document.body.scrollLeft,
            e.sy = document.documentElement.scrollTop || document.body.scrollTop,
            e.ww = document.documentElement.clientWidth || document.body.clientWidth || document.body.scrollWidth,
            e.wh = document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight,
            e.dw = document.documentElement.scrollWidth || document.body.scrollWidth,
            e.dh = document.documentElement.scrollHeight || document.body.scrollHeight,
            e
    }
    static getPosition(e) {
        let t = e.getBoundingClientRect()
            , i = t.left
            , r = t.top
            , s = document.documentElement
            , o = document.body
            , a = s.scrollLeft || o.scrollLeft
            , l = s.scrollTop || o.scrollTop
            , c = i + a >> 0
            , u = r + l >> 0;
        return {
            x: c,
            y: u
        }
    }
    static getRect(e) {
        let t = Pr.getPosition(e);
        return t.width = e.offsetWidth,
            t.height = e.offsetHeight,
            t
    }
    static getW(e) {
        if (e)
            return e.offsetWidth
    }
    static getH(e) {
        if (e)
            return e.offsetHeight
    }
    static delayedCall(e, t) {
        return setTimeout(e, t * 1e3)
    }
    static killDelayedCall(e) {
        clearTimeout(e)
    }
    static shuffle(e) {
        let t, i, r;
        if (e = e.slice(),
            t = e.length,
            t === 0)
            return e;
        for (; --t;)
            i = Math.floor(Math.random() * (t + 1)),
                r = e[t],
                e[t] = e[i],
                e[i] = r;
        return e
    }
}
    ;
ie(Pr, "RAD", Math.PI / 180),
    ie(Pr, "findAll", Pr.find);
let w = Pr, hn, hc = function () { }, La = ["log"], Bo = La.length, Yo = window.console = window.console || {};
for (; Bo--;)
    hn = La[Bo],
        Yo[hn] || (Yo[hn] = hc);
function pc(n) {
    return {
        all: n = n || new Map,
        on: function (e, t) {
            var i = n.get(e);
            i ? i.push(t) : n.set(e, [t])
        },
        off: function (e, t) {
            var i = n.get(e);
            i && (t ? i.splice(i.indexOf(t) >>> 0, 1) : n.set(e, []))
        },
        emit: function (e, t) {
            var i = n.get(e);
            i && i.slice().map(function (r) {
                r(t)
            }),
                (i = n.get("*")) && i.slice().map(function (r) {
                    r(e, t)
                })
        }
    }
}
class F {
}
ie(F, "ee", pc());
let Ho = -1, dt;
const W = class W {
    constructor() {
        try {
            let o = Object.defineProperty({}, "passive", {
                get: () => {
                    W.isSupportPassive = !0
                }
            });
            window.addEventListener("test", o, o),
                window.removeEventListener("test", o, o)
        } catch {
            W.isSupportPassive = !1
        }
        if (document.readyState === W.COMPLETE)
            F.ee.emit("viewEvent", W.READY);
        else {
            let o = () => {
                document.removeEventListener(W.READY, o, !1),
                    F.ee.emit("viewEvent", W.READY)
            }
                ;
            document.addEventListener(W.READY, o, !1)
        }
        let e = () => {
            window.removeEventListener(W.LOAD, e),
                F.ee.emit("viewEvent", W.LOAD)
        }
            ;
        window.addEventListener(W.LOAD, e, !1);
        let t = () => {
            dt = w.getPageSize(),
                dt.isPortrait = W.isPortrait,
                F.ee.emit("viewEvent", W.SCROLL)
        }
            ;
        window.addEventListener(W.SCROLL, t, W.passive());
        let i = () => {
            clearTimeout(Ho),
                Ho = setTimeout(() => {
                    dt = w.getPageSize(),
                        dt.isPortrait = W.isPortrait,
                        F.ee.emit("viewEvent", W.RESIZE)
                }
                    , 1e3 / 30)
        }
            ;
        window.addEventListener(W.RESIZE, i, !1);
        const r = window.matchMedia("(orientation: portrait)")
            , s = o => {
                W.isPortrait = !!o.matches,
                    dt = w.getPageSize(),
                    dt.isPortrait = W.isPortrait,
                    F.ee.emit("viewEvent", W.ROTATE)
            }
            ;
        r.addListener(s),
            s(r)
    }
    static passive() {
        return W.isSupportPassive ? {
            passive: !0
        } : !1
    }
    static setScrollTarget(e) {
        let t = () => {
            dt = w.getPageSize(),
                dt.sy = e.scrollTop,
                dt.isPortrait = W.isPortrait,
                F.ee.emit("viewEvent", W.SCROLL)
        }
            ;
        e.addEventListener(W.SCROLL, t, W.passive())
    }
    static scroll() {
        dt = w.getPageSize(),
            dt.isPortrait = W.isPortrait,
            F.ee.emit("viewEvent", W.SCROLL)
    }
    static resize() {
        dt = w.getPageSize(),
            dt.isPortrait = W.isPortrait,
            F.ee.emit("viewEvent", W.RESIZE)
    }
    static get size() {
        return dt
    }
    static add(e) {
        F.ee.on("viewEvent", e)
    }
    static remove(e) {
        F.ee.removeListener("viewEvent", e)
    }
}
    ;
ie(W, "READY", "DOMContentLoaded"),
    ie(W, "DOMContentLoaded", "DOMContentLoaded"),
    ie(W, "LOAD", "load"),
    ie(W, "UNLOAD", "unload"),
    ie(W, "COMPLETE", "complete"),
    ie(W, "RESIZE", "resize"),
    ie(W, "SCROLL", "scroll"),
    ie(W, "ROTATE", "rotate"),
    ie(W, "ENABLE", "enable"),
    ie(W, "DISABLE", "disable"),
    ie(W, "isSupportPassive", !1),
    ie(W, "isPortrait", !1);
let se = W;
new se;
const Zt = class Zt {
    static init() {
        this.timerInt = -1,
            this.isInitDom = !1,
            F.ee.on(Zt.SHOW, () => {
                this.show()
            }
            ),
            F.ee.on(Zt.HIDE, () => {
                this.hide()
            }
            ),
            F.ee.on(Zt.TIMER, e => {
                this.timer(e)
            }
            )
    }
    static createEl() {
        this.isInitDom || (this.isInitDom = !0,
            this.cover = w.selector(".js-disable-cover"),
            this.cover || (this.cover = document.createElement("div"),
                document.body.appendChild(this.cover),
                w.addClass(this.cover, "js-disable-cover"),
                this.cover.style.position = "fixed",
                this.cover.style.top = 0,
                this.cover.style.left = 0,
                this.cover.style.width = "100%",
                this.cover.style.height = "100%",
                this.cover.style.background = "rgba(0,0,0,0)",
                this.cover.style.zIndex = 99999,
                this.cover.style.display = "none"))
    }
    static show() {
        this.createEl(),
            this.cover.style.display = "block"
    }
    static hide() {
        this.createEl(),
            this.cover.style.display = "none"
    }
    static timer(e) {
        F.ee.emit(Zt.SHOW),
            clearTimeout(this.timerInt),
            this.timerInt = setTimeout(Zt.timerDone, e * 1e3)
    }
    static timerDone() {
        F.ee.emit(Zt.HIDE)
    }
}
    ;
ie(Zt, "SHOW", "disable-cover-show"),
    ie(Zt, "HIDE", "disable-cover-hide"),
    ie(Zt, "TIMER", "disable-cover-timer");
let zn = Zt;
class mc {
    static init() {
        w.selectorAll("[data-inview]").forEach((e, t) => {
            const r = {
                rootMargin: e.dataset.inviewRootMargin || "0% 0% 0% 0%",
                threshold: [0, 1]
            }
                , s = new IntersectionObserver(l => {
                    l.forEach(c => {
                        const u = c.target;
                        c.isIntersecting && (w.addClass(u, "-inview"),
                            u.dataset.inviewUnobserve === "true" && s.unobserve(u))
                    }
                    )
                }
                    , r)
                , o = {
                    rootMargin: "0% 0%",
                    threshold: 0
                }
                , a = new IntersectionObserver(l => {
                    l.forEach(c => {
                        const u = c.target;
                        c.isIntersecting || c.boundingClientRect.top > 0 && c.intersectionRatio === 0 && w.removeClass(u, "-inview")
                    }
                    )
                }
                    , o);
            s.observe(e),
                a.observe(e)
        }
        )
    }
}
class $o {
    static getUserAgent() {
        const e = navigator.userAgent;
        return e.indexOf("iPhone") != -1 ? "IPHONE" : e.indexOf("Android") != -1 ? "ANDROID" : e.indexOf("iPad") != -1 ? "IPAD" : "PC"
    }
    static isSP() {
        const e = navigator.userAgent;
        return e.indexOf("iPhone") > -1 && e.indexOf("iPad") === -1 || e.indexOf("iPod") > -1 || e.indexOf("Android") > -1 && e.indexOf("Mobile") > -1
    }
    static isTablet() {
        const e = navigator.userAgent;
        return e.indexOf("iPad") > -1 || e.indexOf("Android") > -1 && e.indexOf("Mobile") === -1 || e.indexOf("Macintosh") > -1 && "ontouchend" in document
    }
    static getBrowser() {
        const e = navigator.userAgent.toLowerCase();
        navigator.appVersion.toLowerCase();
        let t = "unknown";
        return e.indexOf("msie") != -1 ? t = "ie" : e.indexOf("trident/7") != -1 ? t = "ie11" : e.indexOf("edge/") != -1 ? t = "edge-legacy" : e.indexOf("edg/") != -1 ? t = "edge-chromium" : e.indexOf("chrome") != -1 ? t = "chrome" : e.indexOf("safari") != -1 ? t = "safari" : e.indexOf("firefox") != -1 && (t = "firefox"),
            t
    }
}
const Ue = class Ue {
    static scroller() {
        return this.isSPView ? ".l-container" : window
    }
    static init() {
        (Ue.isSP || Ue.isTablet) && (Ue.isTouch = !0),
            this.setViewFlag(),
            this.isSafari && document.body.classList.add("-safari")
    }
    static setViewFlag() {
        Ue.isPCView = se.size.ww >= 768,
            Ue.isSPView = !Ue.isPCView
    }
}
    ;
ie(Ue, "isPCView"),
    ie(Ue, "isSPView"),
    ie(Ue, "isSP", $o.isSP()),
    ie(Ue, "isTablet", $o.isTablet()),
    ie(Ue, "isTouch", !1),
    ie(Ue, "isWebP", !1),
    ie(Ue, "ext_jpg"),
    ie(Ue, "ext_png");
let ae = Ue;
ae.init();
const bt = class bt {
    constructor(e, t, i = null, r = null, s = bt.BTN_END) {
        if (!e) {
            console.warn("no btn element.");
            return
        }
        this.el = e,
            this.clickFunc = t,
            this.enterFunc = i,
            this.leaveFunc = r,
            this.timing = s,
            this.isTouchDevice = ae.isTouch,
            this.START = this.isTouchDevice ? "touchstart" : "mousedown",
            this.MOVE = this.isTouchDevice ? "touchmove" : "mousemove",
            this.END = this.isTouchDevice ? "touchend" : "mouseup",
            this.isEnable = !0,
            this.isMove = !1,
            this.isLeave = !1,
            this.startX = 0,
            this.startY = 0,
            this.el_styl = this.el.style,
            this.onStart = this.onStart.bind(this),
            this.onMove = this.onMove.bind(this),
            this.onEnd = this.onEnd.bind(this),
            this.onEnter = this.onEnter.bind(this),
            this.onLeave = this.onLeave.bind(this),
            this.el_styl.cursor = "pointer",
            this.isTouchDevice ? (this.el.addEventListener(this.START, this.onStart, se.passive()),
                this.el.addEventListener(this.MOVE, this.onMove, se.passive()),
                this.el.addEventListener(this.END, this.onEnd)) : (this.el.addEventListener(this.START, this.onStart),
                    this.el.addEventListener(this.MOVE, this.onMove),
                    this.el.addEventListener(this.END, this.onEnd),
                    this.el.addEventListener(bt.BTN_ENTER, this.onEnter),
                    this.el.addEventListener(bt.BTN_LEAVE, this.onLeave))
    }
    set enable(e) {
        this.isEnable = e,
            this.el_styl.cursor = this.isEnable ? "pointer" : "auto"
    }
    onStart(e) {
        if (this.isEnable) {
            if (this.isMove = !1,
                this.isLeave = !1,
                this.isTouchDevice) {
                let t = e.changedTouches[0];
                this.startX = t.clientX,
                    this.startY = t.clientY
            }
            this.timing === bt.BTN_START && this.clickFunc()
        }
    }
    onMove(e) {
        if (this.isEnable && this.isTouchDevice) {
            let t = e.changedTouches[0]
                , i = t.clientX
                , r = t.clientY;
            Math.abs(this.startX - i) > 20 && (this.isMove = !0),
                Math.abs(this.startY - r) > 20 && (this.isMove = !0)
        }
    }
    onEnd(e) {
        this.isEnable && (this.isMove || this.isLeave || this.timing === bt.BTN_END && this.clickFunc())
    }
    onEnter(e) {
        this.isEnable && this.enterFunc && this.enterFunc()
    }
    onLeave(e) {
        this.isEnable && (this.isLeave = !0,
            this.leaveFunc && this.leaveFunc())
    }
    reset() {
        this.el_styl.cursor = "auto",
            this.el.removeEventListener(this.START, this.onStart),
            this.el.removeEventListener(this.MOVE, this.onMove),
            this.el.removeEventListener(this.END, this.onEnd),
            this.isTouchDevice || (this.el.removeEventListener(bt.BTN_ENTER, this.onEnter),
                this.el.removeEventListener(bt.BTN_LEAVE, this.onLeave))
    }
}
    ;
ie(bt, "BTN_START", "start"),
    ie(bt, "BTN_END", "end"),
    ie(bt, "BTN_ENTER", "mouseenter"),
    ie(bt, "BTN_LEAVE", "mouseleave");
let cs = bt;
class gc {
    constructor() {
        this.nav = w.selector(".p-nav"),
            this.header = w.selector(".p-header"),
            this.btn_toggle = w.selector(".p-header__toggle"),
            new cs(this.btn_toggle, () => {
                this.toggleTrigg()
            }
            ),
            this.isOpen = !1
    }
    toggleTrigg() {
        this.isOpen ? this.hide() : this.show()
    }
    show() {
        if (this.isOpen)
            return;
        this.isOpen = !0,
            w.addClass(this.btn_toggle, "-close1"),
            w.addClass(this.nav, "-show"),
            w.addClass(this.header, "-hide");
        let e = 1.2;
        F.ee.emit("disable-cover-timer", e),
            F.ee.emit("kill-scroll", !0)
    }
    hide() {
        if (!this.isOpen)
            return;
        this.isOpen = !1,
            w.addClass(this.btn_toggle, "-close2"),
            w.addClass(this.nav, "-hide"),
            w.addClass(this.header, "-show");
        let e = 0;
        e += 1.2,
            w.delayedCall(() => {
                w.removeClass(this.header, "-show"),
                    w.removeClass(this.header, "-hide"),
                    w.removeClass(this.btn_toggle, "-close1"),
                    w.removeClass(this.btn_toggle, "-close2"),
                    w.removeClass(this.nav, "-show"),
                    w.removeClass(this.nav, "-hide")
            }
                , e),
            F.ee.emit("disable-cover-timer", e),
            F.ee.emit("kill-scroll", !1)
    }
}
class _c {
    constructor() {
        w.selectorAll("[data-js-hover]").forEach((e, t) => {
            e.__int = -1,
                new cs(e, () => { }
                    , () => {
                        w.killDelayedCall(e.__int),
                            e.__int = w.delayedCall(() => {
                                w.removeClass(e, "-mouse-out")
                            }
                                , 1 / 60),
                            w.addClass(e, "-mouse-enter")
                    }
                    , () => {
                        w.removeClass(e, "-mouse-enter"),
                            w.addClass(e, "-mouse-out");
                        let i = 1;
                        w.killDelayedCall(e.__int),
                            e.__int = w.delayedCall(() => {
                                w.removeClass(e, "-mouse-out")
                            }
                                , i)
                    }
                )
        }
        )
    }
}
function mi(n) {
    if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n
}
function Da(n, e) {
    n.prototype = Object.create(e.prototype),
        n.prototype.constructor = n,
        n.__proto__ = e
}
/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var At = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, Ir = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, ho, Ke, we, Vt = 1e8, ue = 1 / Vt, Fn = Math.PI * 2, vc = Fn / 4, wc = 0, Ia = Math.sqrt, yc = Math.cos, Tc = Math.sin, Re = function (e) {
    return typeof e == "string"
}, ye = function (e) {
    return typeof e == "function"
}, Si = function (e) {
    return typeof e == "number"
}, po = function (e) {
    return typeof e > "u"
}, di = function (e) {
    return typeof e == "object"
}, pt = function (e) {
    return e !== !1
}, mo = function () {
    return typeof window < "u"
}, Ts = function (e) {
    return ye(e) || Re(e)
}, Ra = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function () { }
    , Ze = Array.isArray, Nn = /(?:-?\.?\d|\.)+/gi, za = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, br = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, pn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Fa = /[+-]=-?[.\d]+/, Na = /[^,'"\[\]\s]+/gi, Sc = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, me, Rt, Vn, go, Lt = {}, qs = {}, Va, Ba = function (e) {
        return (qs = ur(e, Lt)) && _t
    }, _o = function (e, t) {
        return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
    }, Us = function (e, t) {
        return !t && console.warn(e)
    }, Ya = function (e, t) {
        return e && (Lt[e] = t) && qs && (qs[e] = t) || Lt
    }, us = function () {
        return 0
    }, bc = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    }, zs = {
        suppressEvents: !0,
        kill: !1
    }, xc = {
        suppressEvents: !0
    }, vo = {}, Ii = [], Bn = {}, Ha, Pt = {}, mn = {}, Go = 30, Fs = [], wo = "", yo = function (e) {
        var t = e[0], i, r;
        if (di(t) || ye(t) || (e = [e]),
            !(i = (t._gsap || {}).harness)) {
            for (r = Fs.length; r-- && !Fs[r].targetTest(t);)
                ;
            i = Fs[r]
        }
        for (r = e.length; r--;)
            e[r] && (e[r]._gsap || (e[r]._gsap = new fl(e[r], i))) || e.splice(r, 1);
        return e
    }, rr = function (e) {
        return e._gsap || yo(Bt(e))[0]._gsap
    }, $a = function (e, t, i) {
        return (i = e[t]) && ye(i) ? e[t]() : po(i) && e.getAttribute && e.getAttribute(t) || i
    }, mt = function (e, t) {
        return (e = e.split(",")).forEach(t) || e
    }, be = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0
    }, He = function (e) {
        return Math.round(e * 1e7) / 1e7 || 0
    }, Mr = function (e, t) {
        var i = t.charAt(0)
            , r = parseFloat(t.substr(2));
        return e = parseFloat(e),
            i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
    }, Ec = function (e, t) {
        for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i;)
            ;
        return r < i
    }, js = function () {
        var e = Ii.length, t = Ii.slice(0), i, r;
        for (Bn = {},
            Ii.length = 0,
            i = 0; i < e; i++)
            r = t[i],
                r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
    }, Ga = function (e, t, i, r) {
        Ii.length && !Ke && js(),
            e.render(t, i, r || Ke && t < 0 && (e._initted || e._startAt)),
            Ii.length && !Ke && js()
    }, Wa = function (e) {
        var t = parseFloat(e);
        return (t || t === 0) && (e + "").match(Na).length < 2 ? t : Re(e) ? e.trim() : e
    }, Xa = function (e) {
        return e
    }, $t = function (e, t) {
        for (var i in t)
            i in e || (e[i] = t[i]);
        return e
    }, Cc = function (e) {
        return function (t, i) {
            for (var r in i)
                r in t || r === "duration" && e || r === "ease" || (t[r] = i[r])
        }
    }, ur = function (e, t) {
        for (var i in t)
            e[i] = t[i];
        return e
    }, Wo = function n(e, t) {
        for (var i in t)
            i !== "__proto__" && i !== "constructor" && i !== "prototype" && (e[i] = di(t[i]) ? n(e[i] || (e[i] = {}), t[i]) : t[i]);
        return e
    }, Ks = function (e, t) {
        var i = {}, r;
        for (r in e)
            r in t || (i[r] = e[r]);
        return i
    }, Qr = function (e) {
        var t = e.parent || me
            , i = e.keyframes ? Cc(Ze(e.keyframes)) : $t;
        if (pt(e.inherit))
            for (; t;)
                i(e, t.vars.defaults),
                    t = t.parent || t._dp;
        return e
    }, Pc = function (e, t) {
        for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i];)
            ;
        return i < 0
    }, qa = function (e, t, i, r, s) {
        i === void 0 && (i = "_first"),
            r === void 0 && (r = "_last");
        var o = e[r], a;
        if (s)
            for (a = t[s]; o && o[s] > a;)
                o = o._prev;
        return o ? (t._next = o._next,
            o._next = t) : (t._next = e[i],
                e[i] = t),
            t._next ? t._next._prev = t : e[r] = t,
            t._prev = o,
            t.parent = t._dp = e,
            t
    }, ln = function (e, t, i, r) {
        i === void 0 && (i = "_first"),
            r === void 0 && (r = "_last");
        var s = t._prev
            , o = t._next;
        s ? s._next = o : e[i] === t && (e[i] = o),
            o ? o._prev = s : e[r] === t && (e[r] = s),
            t._next = t._prev = t.parent = null
    }, Fi = function (e, t) {
        e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
            e._act = 0
    }, sr = function (e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
            for (var i = e; i;)
                i._dirty = 1,
                    i = i.parent;
        return e
    }, Mc = function (e) {
        for (var t = e.parent; t && t.parent;)
            t._dirty = 1,
                t.totalDuration(),
                t = t.parent;
        return e
    }, Yn = function (e, t, i, r) {
        return e._startAt && (Ke ? e._startAt.revert(zs) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r))
    }, Oc = function n(e) {
        return !e || e._ts && n(e.parent)
    }, Xo = function (e) {
        return e._repeat ? Rr(e._tTime, e = e.duration() + e._rDelay) * e : 0
    }, Rr = function (e, t) {
        var i = Math.floor(e /= t);
        return e && i === e ? i - 1 : i
    }, Zs = function (e, t) {
        return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    }, cn = function (e) {
        return e._end = He(e._start + (e._tDur / Math.abs(e._ts || e._rts || ue) || 0))
    }, un = function (e, t) {
        var i = e._dp;
        return i && i.smoothChildTiming && e._ts && (e._start = He(i._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)),
            cn(e),
            i._dirty || sr(i, e)),
            e
    }, Ua = function (e, t) {
        var i;
        if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (i = Zs(e.rawTime(), t),
            (!t._dur || vs(0, t.totalDuration(), i) - t._tTime > ue) && t.render(i, !0)),
            sr(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (i = e; i._dp;)
                    i.rawTime() >= 0 && i.totalTime(i._tTime),
                        i = i._dp;
            e._zTime = -ue
        }
    }, oi = function (e, t, i, r) {
        return t.parent && Fi(t),
            t._start = He((Si(i) ? i : i || e !== me ? It(e, i, t) : e._time) + t._delay),
            t._end = He(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
            qa(e, t, "_first", "_last", e._sort ? "_start" : 0),
            Hn(t) || (e._recent = t),
            r || Ua(e, t),
            e._ts < 0 && un(e, e._tTime),
            e
    }, ja = function (e, t) {
        return (Lt.ScrollTrigger || _o("scrollTrigger", t)) && Lt.ScrollTrigger.create(t, e)
    }, Ka = function (e, t, i, r, s) {
        if (So(e, t, s),
            !e._initted)
            return 1;
        if (!i && e._pt && !Ke && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Ha !== Ot.frame)
            return Ii.push(e),
                e._lazy = [s, r],
                1
    }, kc = function n(e) {
        var t = e.parent;
        return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t))
    }, Hn = function (e) {
        var t = e.data;
        return t === "isFromStart" || t === "isStart"
    }, Ac = function (e, t, i, r) {
        var s = e.ratio, o = t < 0 || !t && (!e._start && kc(e) && !(!e._initted && Hn(e)) || (e._ts < 0 || e._dp._ts < 0) && !Hn(e)) ? 0 : 1, a = e._rDelay, l = 0, c, u, f;
        if (a && e._repeat && (l = vs(0, e._tDur, t),
            u = Rr(l, a),
            e._yoyo && u & 1 && (o = 1 - o),
            u !== Rr(e._tTime, a) && (s = 1 - o,
                e.vars.repeatRefresh && e._initted && e.invalidate())),
            o !== s || Ke || r || e._zTime === ue || !t && e._zTime) {
            if (!e._initted && Ka(e, t, r, i, l))
                return;
            for (f = e._zTime,
                e._zTime = t || (i ? ue : 0),
                i || (i = t && !f),
                e.ratio = o,
                e._from && (o = 1 - o),
                e._time = 0,
                e._tTime = l,
                c = e._pt; c;)
                c.r(o, c.d),
                    c = c._next;
            t < 0 && Yn(e, t, i, !0),
                e._onUpdate && !i && Yt(e, "onUpdate"),
                l && e._repeat && !i && e.parent && Yt(e, "onRepeat"),
                (t >= e._tDur || t < 0) && e.ratio === o && (o && Fi(e, 1),
                    !i && !Ke && (Yt(e, o ? "onComplete" : "onReverseComplete", !0),
                        e._prom && e._prom()))
        } else
            e._zTime || (e._zTime = t)
    }, Lc = function (e, t, i) {
        var r;
        if (i > t)
            for (r = e._first; r && r._start <= i;) {
                if (r.data === "isPause" && r._start > t)
                    return r;
                r = r._next
            }
        else
            for (r = e._last; r && r._start >= i;) {
                if (r.data === "isPause" && r._start < t)
                    return r;
                r = r._prev
            }
    }, zr = function (e, t, i, r) {
        var s = e._repeat
            , o = He(t) || 0
            , a = e._tTime / e._tDur;
        return a && !r && (e._time *= o / e._dur),
            e._dur = o,
            e._tDur = s ? s < 0 ? 1e10 : He(o * (s + 1) + e._rDelay * s) : o,
            a > 0 && !r && un(e, e._tTime = e._tDur * a),
            e.parent && cn(e),
            i || sr(e.parent, e),
            e
    }, qo = function (e) {
        return e instanceof ht ? sr(e) : zr(e, e._dur)
    }, Dc = {
        _start: 0,
        endTime: us,
        totalDuration: us
    }, It = function n(e, t, i) {
        var r = e.labels, s = e._recent || Dc, o = e.duration() >= Vt ? s.endTime(!1) : e._dur, a, l, c;
        return Re(t) && (isNaN(t) || t in r) ? (l = t.charAt(0),
            c = t.substr(-1) === "%",
            a = t.indexOf("="),
            l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")),
                (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (c ? (a < 0 ? s : i).totalDuration() / 100 : 1)) : a < 0 ? (t in r || (r[t] = o),
                    r[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)),
                        c && i && (l = l / 100 * (Ze(i) ? i[0] : i).totalDuration()),
                        a > 1 ? n(e, t.substr(0, a - 1), i) + l : o + l)) : t == null ? o : +t
    }, Jr = function (e, t, i) {
        var r = Si(t[1]), s = (r ? 2 : 1) + (e < 2 ? 0 : 1), o = t[s], a, l;
        if (r && (o.duration = t[1]),
            o.parent = i,
            e) {
            for (a = o,
                l = i; l && !("immediateRender" in a);)
                a = l.vars.defaults || {},
                    l = pt(l.vars.inherit) && l.parent;
            o.immediateRender = pt(a.immediateRender),
                e < 2 ? o.runBackwards = 1 : o.startAt = t[s - 1]
        }
        return new Me(t[0], o, t[s + 1])
    }, Bi = function (e, t) {
        return e || e === 0 ? t(e) : t
    }, vs = function (e, t, i) {
        return i < e ? e : i > t ? t : i
    }, je = function (e, t) {
        return !Re(e) || !(t = Sc.exec(e)) ? "" : t[1]
    }, Ic = function (e, t, i) {
        return Bi(i, function (r) {
            return vs(e, t, r)
        })
    }, $n = [].slice, Za = function (e, t) {
        return e && di(e) && "length" in e && (!t && !e.length || e.length - 1 in e && di(e[0])) && !e.nodeType && e !== Rt
    }, Rc = function (e, t, i) {
        return i === void 0 && (i = []),
            e.forEach(function (r) {
                var s;
                return Re(r) && !t || Za(r, 1) ? (s = i).push.apply(s, Bt(r)) : i.push(r)
            }) || i
    }, Bt = function (e, t, i) {
        return we && !t && we.selector ? we.selector(e) : Re(e) && !i && (Vn || !Fr()) ? $n.call((t || go).querySelectorAll(e), 0) : Ze(e) ? Rc(e, i) : Za(e) ? $n.call(e, 0) : e ? [e] : []
    }, Gn = function (e) {
        return e = Bt(e)[0] || Us("Invalid scope") || {},
            function (t) {
                var i = e.current || e.nativeElement || e;
                return Bt(t, i.querySelectorAll ? i : i === e ? Us("Invalid scope") || go.createElement("div") : e)
            }
    }, Qa = function (e) {
        return e.sort(function () {
            return .5 - Math.random()
        })
    }, Ja = function (e) {
        if (ye(e))
            return e;
        var t = di(e) ? e : {
            each: e
        }
            , i = nr(t.ease)
            , r = t.from || 0
            , s = parseFloat(t.base) || 0
            , o = {}
            , a = r > 0 && r < 1
            , l = isNaN(r) || a
            , c = t.axis
            , u = r
            , f = r;
        return Re(r) ? u = f = {
            center: .5,
            edges: .5,
            end: 1
        }[r] || 0 : !a && l && (u = r[0],
            f = r[1]),
            function (h, d, m) {
                var p = (m || t).length, g = o[p], _, T, S, v, x, C, b, M, E;
                if (!g) {
                    if (E = t.grid === "auto" ? 0 : (t.grid || [1, Vt])[1],
                        !E) {
                        for (b = -Vt; b < (b = m[E++].getBoundingClientRect().left) && E < p;)
                            ;
                        E--
                    }
                    for (g = o[p] = [],
                        _ = l ? Math.min(E, p) * u - .5 : r % E,
                        T = E === Vt ? 0 : l ? p * f / E - .5 : r / E | 0,
                        b = 0,
                        M = Vt,
                        C = 0; C < p; C++)
                        S = C % E - _,
                            v = T - (C / E | 0),
                            g[C] = x = c ? Math.abs(c === "y" ? v : S) : Ia(S * S + v * v),
                            x > b && (b = x),
                            x < M && (M = x);
                    r === "random" && Qa(g),
                        g.max = b - M,
                        g.min = M,
                        g.v = p = (parseFloat(t.amount) || parseFloat(t.each) * (E > p ? p - 1 : c ? c === "y" ? p / E : E : Math.max(E, p / E)) || 0) * (r === "edges" ? -1 : 1),
                        g.b = p < 0 ? s - p : s,
                        g.u = je(t.amount || t.each) || 0,
                        i = i && p < 0 ? cl(i) : i
                }
                return p = (g[h] - g.min) / g.max || 0,
                    He(g.b + (i ? i(p) : p) * g.v) + g.u
            }
    }, Wn = function (e) {
        var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function (i) {
            var r = He(Math.round(parseFloat(i) / e) * e * t);
            return (r - r % 1) / t + (Si(i) ? 0 : je(i))
        }
    }, el = function (e, t) {
        var i = Ze(e), r, s;
        return !i && di(e) && (r = i = e.radius || Vt,
            e.values ? (e = Bt(e.values),
                (s = !Si(e[0])) && (r *= r)) : e = Wn(e.increment)),
            Bi(t, i ? ye(e) ? function (o) {
                return s = e(o),
                    Math.abs(s - o) <= r ? s : o
            }
                : function (o) {
                    for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), c = Vt, u = 0, f = e.length, h, d; f--;)
                        s ? (h = e[f].x - a,
                            d = e[f].y - l,
                            h = h * h + d * d) : h = Math.abs(e[f] - a),
                            h < c && (c = h,
                                u = f);
                    return u = !r || c <= r ? e[u] : o,
                        s || u === o || Si(o) ? u : u + je(o)
                }
                : Wn(e))
    }, tl = function (e, t, i, r) {
        return Bi(Ze(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
            return Ze(e) ? e[~~(Math.random() * e.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((e - i / 2 + Math.random() * (t - e + i * .99)) / i) * i * r) / r
        })
    }, zc = function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
        return function (r) {
            return t.reduce(function (s, o) {
                return o(s)
            }, r)
        }
    }, Fc = function (e, t) {
        return function (i) {
            return e(parseFloat(i)) + (t || je(i))
        }
    }, Nc = function (e, t, i) {
        return rl(e, t, 0, 1, i)
    }, il = function (e, t, i) {
        return Bi(i, function (r) {
            return e[~~t(r)]
        })
    }, Vc = function n(e, t, i) {
        var r = t - e;
        return Ze(e) ? il(e, n(0, e.length), t) : Bi(i, function (s) {
            return (r + (s - e) % r) % r + e
        })
    }, Bc = function n(e, t, i) {
        var r = t - e
            , s = r * 2;
        return Ze(e) ? il(e, n(0, e.length - 1), t) : Bi(i, function (o) {
            return o = (s + (o - e) % s) % s || 0,
                e + (o > r ? s - o : o)
        })
    }, ds = function (e) {
        for (var t = 0, i = "", r, s, o, a; ~(r = e.indexOf("random(", t));)
            o = e.indexOf(")", r),
                a = e.charAt(r + 7) === "[",
                s = e.substr(r + 7, o - r - 7).match(a ? Na : Nn),
                i += e.substr(t, r - t) + tl(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5),
                t = o + 1;
        return i + e.substr(t, e.length - t)
    }, rl = function (e, t, i, r, s) {
        var o = t - e
            , a = r - i;
        return Bi(s, function (l) {
            return i + ((l - e) / o * a || 0)
        })
    }, Yc = function n(e, t, i, r) {
        var s = isNaN(e + t) ? 0 : function (d) {
            return (1 - d) * e + d * t
        }
            ;
        if (!s) {
            var o = Re(e), a = {}, l, c, u, f, h;
            if (i === !0 && (r = 1) && (i = null),
                o)
                e = {
                    p: e
                },
                    t = {
                        p: t
                    };
            else if (Ze(e) && !Ze(t)) {
                for (u = [],
                    f = e.length,
                    h = f - 2,
                    c = 1; c < f; c++)
                    u.push(n(e[c - 1], e[c]));
                f--,
                    s = function (m) {
                        m *= f;
                        var p = Math.min(h, ~~m);
                        return u[p](m - p)
                    }
                    ,
                    i = t
            } else
                r || (e = ur(Ze(e) ? [] : {}, e));
            if (!u) {
                for (l in t)
                    To.call(a, e, l, "get", t[l]);
                s = function (m) {
                    return Eo(m, a) || (o ? e.p : e)
                }
            }
        }
        return Bi(i, s)
    }, Uo = function (e, t, i) {
        var r = e.labels, s = Vt, o, a, l;
        for (o in r)
            a = r[o] - t,
                a < 0 == !!i && a && s > (a = Math.abs(a)) && (l = o,
                    s = a);
        return l
    }, Yt = function (e, t, i) {
        var r = e.vars, s = r[t], o = we, a = e._ctx, l, c, u;
        if (s)
            return l = r[t + "Params"],
                c = r.callbackScope || e,
                i && Ii.length && js(),
                a && (we = a),
                u = l ? s.apply(c, l) : s.call(c),
                we = o,
                u
    }, qr = function (e) {
        return Fi(e),
            e.scrollTrigger && e.scrollTrigger.kill(!!Ke),
            e.progress() < 1 && Yt(e, "onInterrupt"),
            e
    }, xr, sl = [], nl = function (e) {
        if (mo() && e) {
            e = !e.name && e.default || e;
            var t = e.name
                , i = ye(e)
                , r = t && !i && e.init ? function () {
                    this._props = []
                }
                    : e
                , s = {
                    init: us,
                    render: Eo,
                    add: To,
                    kill: ru,
                    modifier: iu,
                    rawVars: 0
                }
                , o = {
                    targetTest: 0,
                    get: 0,
                    getSetter: xo,
                    aliases: {},
                    register: 0
                };
            if (Fr(),
                e !== r) {
                if (Pt[t])
                    return;
                $t(r, $t(Ks(e, s), o)),
                    ur(r.prototype, ur(s, Ks(e, o))),
                    Pt[r.prop = t] = r,
                    e.targetTest && (Fs.push(r),
                        vo[t] = 1),
                    t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
            }
            Ya(t, r),
                e.register && e.register(_t, r, gt)
        } else
            e && sl.push(e)
    }, ce = 255, Ur = {
        aqua: [0, ce, ce],
        lime: [0, ce, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, ce],
        navy: [0, 0, 128],
        white: [ce, ce, ce],
        olive: [128, 128, 0],
        yellow: [ce, ce, 0],
        orange: [ce, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [ce, 0, 0],
        pink: [ce, 192, 203],
        cyan: [0, ce, ce],
        transparent: [ce, ce, ce, 0]
    }, gn = function (e, t, i) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0,
            (e * 6 < 1 ? t + (i - t) * e * 6 : e < .5 ? i : e * 3 < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) * ce + .5 | 0
    }, ol = function (e, t, i) {
        var r = e ? Si(e) ? [e >> 16, e >> 8 & ce, e & ce] : 0 : Ur.black, s, o, a, l, c, u, f, h, d, m;
        if (!r) {
            if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
                Ur[e])
                r = Ur[e];
            else if (e.charAt(0) === "#") {
                if (e.length < 6 && (s = e.charAt(1),
                    o = e.charAt(2),
                    a = e.charAt(3),
                    e = "#" + s + s + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
                    e.length === 9)
                    return r = parseInt(e.substr(1, 6), 16),
                        [r >> 16, r >> 8 & ce, r & ce, parseInt(e.substr(7), 16) / 255];
                e = parseInt(e.substr(1), 16),
                    r = [e >> 16, e >> 8 & ce, e & ce]
            } else if (e.substr(0, 3) === "hsl") {
                if (r = m = e.match(Nn),
                    !t)
                    l = +r[0] % 360 / 360,
                        c = +r[1] / 100,
                        u = +r[2] / 100,
                        o = u <= .5 ? u * (c + 1) : u + c - u * c,
                        s = u * 2 - o,
                        r.length > 3 && (r[3] *= 1),
                        r[0] = gn(l + 1 / 3, s, o),
                        r[1] = gn(l, s, o),
                        r[2] = gn(l - 1 / 3, s, o);
                else if (~e.indexOf("="))
                    return r = e.match(za),
                        i && r.length < 4 && (r[3] = 1),
                        r
            } else
                r = e.match(Nn) || Ur.transparent;
            r = r.map(Number)
        }
        return t && !m && (s = r[0] / ce,
            o = r[1] / ce,
            a = r[2] / ce,
            f = Math.max(s, o, a),
            h = Math.min(s, o, a),
            u = (f + h) / 2,
            f === h ? l = c = 0 : (d = f - h,
                c = u > .5 ? d / (2 - f - h) : d / (f + h),
                l = f === s ? (o - a) / d + (o < a ? 6 : 0) : f === o ? (a - s) / d + 2 : (s - o) / d + 4,
                l *= 60),
            r[0] = ~~(l + .5),
            r[1] = ~~(c * 100 + .5),
            r[2] = ~~(u * 100 + .5)),
            i && r.length < 4 && (r[3] = 1),
            r
    }, al = function (e) {
        var t = []
            , i = []
            , r = -1;
        return e.split(Ri).forEach(function (s) {
            var o = s.match(br) || [];
            t.push.apply(t, o),
                i.push(r += o.length + 1)
        }),
            t.c = i,
            t
    }, jo = function (e, t, i) {
        var r = "", s = (e + r).match(Ri), o = t ? "hsla(" : "rgba(", a = 0, l, c, u, f;
        if (!s)
            return e;
        if (s = s.map(function (h) {
            return (h = ol(h, t, 1)) && o + (t ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")"
        }),
            i && (u = al(e),
                l = i.c,
                l.join(r) !== u.c.join(r)))
            for (c = e.replace(Ri, "1").split(br),
                f = c.length - 1; a < f; a++)
                r += c[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (u.length ? u : s.length ? s : i).shift());
        if (!c)
            for (c = e.split(Ri),
                f = c.length - 1; a < f; a++)
                r += c[a] + s[a];
        return r + c[f]
    }, Ri = function () {
        var n = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
        for (e in Ur)
            n += "|" + e + "\\b";
        return new RegExp(n + ")", "gi")
    }(), Hc = /hsl[a]?\(/, ll = function (e) {
        var t = e.join(" "), i;
        if (Ri.lastIndex = 0,
            Ri.test(t))
            return i = Hc.test(t),
                e[1] = jo(e[1], i),
                e[0] = jo(e[0], i, al(e[1])),
                !0
    }, fs, Ot = function () {
        var n = Date.now, e = 500, t = 33, i = n(), r = i, s = 1e3 / 240, o = s, a = [], l, c, u, f, h, d, m = function p(g) {
            var _ = n() - r, T = g === !0, S, v, x, C;
            if (_ > e && (i += _ - t),
                r += _,
                x = r - i,
                S = x - o,
                (S > 0 || T) && (C = ++f.frame,
                    h = x - f.time * 1e3,
                    f.time = x = x / 1e3,
                    o += S + (S >= s ? 4 : s - S),
                    v = 1),
                T || (l = c(p)),
                v)
                for (d = 0; d < a.length; d++)
                    a[d](x, h, C, g)
        };
        return f = {
            time: 0,
            frame: 0,
            tick: function () {
                m(!0)
            },
            deltaRatio: function (g) {
                return h / (1e3 / (g || 60))
            },
            wake: function () {
                Va && (!Vn && mo() && (Rt = Vn = window,
                    go = Rt.document || {},
                    Lt.gsap = _t,
                    (Rt.gsapVersions || (Rt.gsapVersions = [])).push(_t.version),
                    Ba(qs || Rt.GreenSockGlobals || !Rt.gsap && Rt || {}),
                    u = Rt.requestAnimationFrame,
                    sl.forEach(nl)),
                    l && f.sleep(),
                    c = u || function (g) {
                        return setTimeout(g, o - f.time * 1e3 + 1 | 0)
                    }
                    ,
                    fs = 1,
                    m(2))
            },
            sleep: function () {
                (u ? Rt.cancelAnimationFrame : clearTimeout)(l),
                    fs = 0,
                    c = us
            },
            lagSmoothing: function (g, _) {
                e = g || 1 / 0,
                    t = Math.min(_ || 33, e)
            },
            fps: function (g) {
                s = 1e3 / (g || 240),
                    o = f.time * 1e3 + s
            },
            add: function (g, _, T) {
                var S = _ ? function (v, x, C, b) {
                    g(v, x, C, b),
                        f.remove(S)
                }
                    : g;
                return f.remove(g),
                    a[T ? "unshift" : "push"](S),
                    Fr(),
                    S
            },
            remove: function (g, _) {
                ~(_ = a.indexOf(g)) && a.splice(_, 1) && d >= _ && d--
            },
            _listeners: a
        },
            f
    }(), Fr = function () {
        return !fs && Ot.wake()
    }, Z = {}, $c = /^[\d.\-M][\d.\-,\s]/, Gc = /["']/g, Wc = function (e) {
        for (var t = {}, i = e.substr(1, e.length - 3).split(":"), r = i[0], s = 1, o = i.length, a, l, c; s < o; s++)
            l = i[s],
                a = s !== o - 1 ? l.lastIndexOf(",") : l.length,
                c = l.substr(0, a),
                t[r] = isNaN(c) ? c.replace(Gc, "").trim() : +c,
                r = l.substr(a + 1).trim();
        return t
    }, Xc = function (e) {
        var t = e.indexOf("(") + 1
            , i = e.indexOf(")")
            , r = e.indexOf("(", t);
        return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i)
    }, qc = function (e) {
        var t = (e + "").split("(")
            , i = Z[t[0]];
        return i && t.length > 1 && i.config ? i.config.apply(null, ~e.indexOf("{") ? [Wc(t[1])] : Xc(e).split(",").map(Wa)) : Z._CE && $c.test(e) ? Z._CE("", e) : i
    }, cl = function (e) {
        return function (t) {
            return 1 - e(1 - t)
        }
    }, ul = function n(e, t) {
        for (var i = e._first, r; i;)
            i instanceof ht ? n(i, t) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== t && (i.timeline ? n(i.timeline, t) : (r = i._ease,
                i._ease = i._yEase,
                i._yEase = r,
                i._yoyo = t)),
                i = i._next
    }, nr = function (e, t) {
        return e && (ye(e) ? e : Z[e] || qc(e)) || t
    }, pr = function (e, t, i, r) {
        i === void 0 && (i = function (l) {
            return 1 - t(1 - l)
        }
        ),
            r === void 0 && (r = function (l) {
                return l < .5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2
            }
            );
        var s = {
            easeIn: t,
            easeOut: i,
            easeInOut: r
        }, o;
        return mt(e, function (a) {
            Z[a] = Lt[a] = s,
                Z[o = a.toLowerCase()] = i;
            for (var l in s)
                Z[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Z[a + "." + l] = s[l]
        }),
            s
    }, dl = function (e) {
        return function (t) {
            return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
        }
    }, _n = function n(e, t, i) {
        var r = t >= 1 ? t : 1
            , s = (i || (e ? .3 : .45)) / (t < 1 ? t : 1)
            , o = s / Fn * (Math.asin(1 / r) || 0)
            , a = function (u) {
                return u === 1 ? 1 : r * Math.pow(2, -10 * u) * Tc((u - o) * s) + 1
            }
            , l = e === "out" ? a : e === "in" ? function (c) {
                return 1 - a(1 - c)
            }
                : dl(a);
        return s = Fn / s,
            l.config = function (c, u) {
                return n(e, c, u)
            }
            ,
            l
    }, vn = function n(e, t) {
        t === void 0 && (t = 1.70158);
        var i = function (o) {
            return o ? --o * o * ((t + 1) * o + t) + 1 : 0
        }
            , r = e === "out" ? i : e === "in" ? function (s) {
                return 1 - i(1 - s)
            }
                : dl(i);
        return r.config = function (s) {
            return n(e, s)
        }
            ,
            r
    };
mt("Linear,Quad,Cubic,Quart,Quint,Strong", function (n, e) {
    var t = e < 5 ? e + 1 : e;
    pr(n + ",Power" + (t - 1), e ? function (i) {
        return Math.pow(i, t)
    }
        : function (i) {
            return i
        }
        , function (i) {
            return 1 - Math.pow(1 - i, t)
        }, function (i) {
            return i < .5 ? Math.pow(i * 2, t) / 2 : 1 - Math.pow((1 - i) * 2, t) / 2
        })
});
Z.Linear.easeNone = Z.none = Z.Linear.easeIn;
pr("Elastic", _n("in"), _n("out"), _n());
(function (n, e) {
    var t = 1 / e
        , i = 2 * t
        , r = 2.5 * t
        , s = function (a) {
            return a < t ? n * a * a : a < i ? n * Math.pow(a - 1.5 / e, 2) + .75 : a < r ? n * (a -= 2.25 / e) * a + .9375 : n * Math.pow(a - 2.625 / e, 2) + .984375
        };
    pr("Bounce", function (o) {
        return 1 - s(1 - o)
    }, s)
}
)(7.5625, 2.75);
pr("Expo", function (n) {
    return n ? Math.pow(2, 10 * (n - 1)) : 0
});
pr("Circ", function (n) {
    return -(Ia(1 - n * n) - 1)
});
pr("Sine", function (n) {
    return n === 1 ? 1 : -yc(n * vc) + 1
});
pr("Back", vn("in"), vn("out"), vn());
Z.SteppedEase = Z.steps = Lt.SteppedEase = {
    config: function (e, t) {
        e === void 0 && (e = 1);
        var i = 1 / e
            , r = e + (t ? 0 : 1)
            , s = t ? 1 : 0
            , o = 1 - ue;
        return function (a) {
            return ((r * vs(0, o, a) | 0) + s) * i
        }
    }
};
Ir.ease = Z["quad.out"];
mt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (n) {
    return wo += n + "," + n + "Params,"
});
var fl = function (e, t) {
    this.id = wc++,
        e._gsap = this,
        this.target = e,
        this.harness = t,
        this.get = t ? t.get : $a,
        this.set = t ? t.getSetter : xo
}
    , hs = function () {
        function n(t) {
            this.vars = t,
                this._delay = +t.delay || 0,
                (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
                    this._yoyo = !!t.yoyo || !!t.yoyoEase),
                this._ts = 1,
                zr(this, +t.duration, 1, 1),
                this.data = t.data,
                we && (this._ctx = we,
                    we.data.push(this)),
                fs || Ot.wake()
        }
        var e = n.prototype;
        return e.delay = function (i) {
            return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay),
                this._delay = i,
                this) : this._delay
        }
            ,
            e.duration = function (i) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
            }
            ,
            e.totalDuration = function (i) {
                return arguments.length ? (this._dirty = 0,
                    zr(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }
            ,
            e.totalTime = function (i, r) {
                if (Fr(),
                    !arguments.length)
                    return this._tTime;
                var s = this._dp;
                if (s && s.smoothChildTiming && this._ts) {
                    for (un(this, i),
                        !s._dp || s.parent || Ua(s, this); s && s.parent;)
                        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0),
                            s = s.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && oi(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === ue || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i),
                    Ga(this, i, r)),
                    this
            }
            ,
            e.time = function (i, r) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + Xo(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time
            }
            ,
            e.totalProgress = function (i, r) {
                return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
            }
            ,
            e.progress = function (i, r) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + Xo(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
            }
            ,
            e.iteration = function (i, r) {
                var s = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (i - 1) * s, r) : this._repeat ? Rr(this._tTime, s) + 1 : 1
            }
            ,
            e.timeScale = function (i) {
                if (!arguments.length)
                    return this._rts === -ue ? 0 : this._rts;
                if (this._rts === i)
                    return this;
                var r = this.parent && this._ts ? Zs(this.parent._time, this) : this._tTime;
                return this._rts = +i || 0,
                    this._ts = this._ps || i === -ue ? 0 : this._rts,
                    this.totalTime(vs(-Math.abs(this._delay), this._tDur, r), !0),
                    cn(this),
                    Mc(this)
            }
            ,
            e.paused = function (i) {
                return arguments.length ? (this._ps !== i && (this._ps = i,
                    i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
                        this._ts = this._act = 0) : (Fr(),
                            this._ts = this._rts,
                            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ue && (this._tTime -= ue)))),
                    this) : this._ps
            }
            ,
            e.startTime = function (i) {
                if (arguments.length) {
                    this._start = i;
                    var r = this.parent || this._dp;
                    return r && (r._sort || !this.parent) && oi(r, this, i - this._delay),
                        this
                }
                return this._start
            }
            ,
            e.endTime = function (i) {
                return this._start + (pt(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }
            ,
            e.rawTime = function (i) {
                var r = this.parent || this._dp;
                return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Zs(r.rawTime(i), this) : this._tTime : this._tTime
            }
            ,
            e.revert = function (i) {
                i === void 0 && (i = xc);
                var r = Ke;
                return Ke = i,
                    (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i),
                        this.totalTime(-.01, i.suppressEvents)),
                    this.data !== "nested" && i.kill !== !1 && this.kill(),
                    Ke = r,
                    this
            }
            ,
            e.globalTime = function (i) {
                for (var r = this, s = arguments.length ? i : r.rawTime(); r;)
                    s = r._start + s / (r._ts || 1),
                        r = r._dp;
                return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(i) : s
            }
            ,
            e.repeat = function (i) {
                return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i,
                    qo(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
            }
            ,
            e.repeatDelay = function (i) {
                if (arguments.length) {
                    var r = this._time;
                    return this._rDelay = i,
                        qo(this),
                        r ? this.time(r) : this
                }
                return this._rDelay
            }
            ,
            e.yoyo = function (i) {
                return arguments.length ? (this._yoyo = i,
                    this) : this._yoyo
            }
            ,
            e.seek = function (i, r) {
                return this.totalTime(It(this, i), pt(r))
            }
            ,
            e.restart = function (i, r) {
                return this.play().totalTime(i ? -this._delay : 0, pt(r))
            }
            ,
            e.play = function (i, r) {
                return i != null && this.seek(i, r),
                    this.reversed(!1).paused(!1)
            }
            ,
            e.reverse = function (i, r) {
                return i != null && this.seek(i || this.totalDuration(), r),
                    this.reversed(!0).paused(!1)
            }
            ,
            e.pause = function (i, r) {
                return i != null && this.seek(i, r),
                    this.paused(!0)
            }
            ,
            e.resume = function () {
                return this.paused(!1)
            }
            ,
            e.reversed = function (i) {
                return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -ue : 0)),
                    this) : this._rts < 0
            }
            ,
            e.invalidate = function () {
                return this._initted = this._act = 0,
                    this._zTime = -ue,
                    this
            }
            ,
            e.isActive = function () {
                var i = this.parent || this._dp, r = this._start, s;
                return !!(!i || this._ts && this._initted && i.isActive() && (s = i.rawTime(!0)) >= r && s < this.endTime(!0) - ue)
            }
            ,
            e.eventCallback = function (i, r, s) {
                var o = this.vars;
                return arguments.length > 1 ? (r ? (o[i] = r,
                    s && (o[i + "Params"] = s),
                    i === "onUpdate" && (this._onUpdate = r)) : delete o[i],
                    this) : o[i]
            }
            ,
            e.then = function (i) {
                var r = this;
                return new Promise(function (s) {
                    var o = ye(i) ? i : Xa
                        , a = function () {
                            var c = r.then;
                            r.then = null,
                                ye(o) && (o = o(r)) && (o.then || o === r) && (r.then = c),
                                s(o),
                                r.then = c
                        };
                    r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? a() : r._prom = a
                }
                )
            }
            ,
            e.kill = function () {
                qr(this)
            }
            ,
            n
    }();
$t(hs.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -ue,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var ht = function (n) {
    Da(e, n);
    function e(i, r) {
        var s;
        return i === void 0 && (i = {}),
            s = n.call(this, i) || this,
            s.labels = {},
            s.smoothChildTiming = !!i.smoothChildTiming,
            s.autoRemoveChildren = !!i.autoRemoveChildren,
            s._sort = pt(i.sortChildren),
            me && oi(i.parent || me, mi(s), r),
            i.reversed && s.reverse(),
            i.paused && s.paused(!0),
            i.scrollTrigger && ja(mi(s), i.scrollTrigger),
            s
    }
    var t = e.prototype;
    return t.to = function (r, s, o) {
        return Jr(0, arguments, this),
            this
    }
        ,
        t.from = function (r, s, o) {
            return Jr(1, arguments, this),
                this
        }
        ,
        t.fromTo = function (r, s, o, a) {
            return Jr(2, arguments, this),
                this
        }
        ,
        t.set = function (r, s, o) {
            return s.duration = 0,
                s.parent = this,
                Qr(s).repeatDelay || (s.repeat = 0),
                s.immediateRender = !!s.immediateRender,
                new Me(r, s, It(this, o), 1),
                this
        }
        ,
        t.call = function (r, s, o) {
            return oi(this, Me.delayedCall(0, r, s), o)
        }
        ,
        t.staggerTo = function (r, s, o, a, l, c, u) {
            return o.duration = s,
                o.stagger = o.stagger || a,
                o.onComplete = c,
                o.onCompleteParams = u,
                o.parent = this,
                new Me(r, o, It(this, l)),
                this
        }
        ,
        t.staggerFrom = function (r, s, o, a, l, c, u) {
            return o.runBackwards = 1,
                Qr(o).immediateRender = pt(o.immediateRender),
                this.staggerTo(r, s, o, a, l, c, u)
        }
        ,
        t.staggerFromTo = function (r, s, o, a, l, c, u, f) {
            return a.startAt = o,
                Qr(a).immediateRender = pt(a.immediateRender),
                this.staggerTo(r, s, a, l, c, u, f)
        }
        ,
        t.render = function (r, s, o) {
            var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, u = r <= 0 ? 0 : He(r), f = this._zTime < 0 != r < 0 && (this._initted || !c), h, d, m, p, g, _, T, S, v, x, C, b;
            if (this !== me && u > l && r >= 0 && (u = l),
                u !== this._tTime || o || f) {
                if (a !== this._time && c && (u += this._time - a,
                    r += this._time - a),
                    h = u,
                    v = this._start,
                    S = this._ts,
                    _ = !S,
                    f && (c || (a = this._zTime),
                        (r || !s) && (this._zTime = r)),
                    this._repeat) {
                    if (C = this._yoyo,
                        g = c + this._rDelay,
                        this._repeat < -1 && r < 0)
                        return this.totalTime(g * 100 + r, s, o);
                    if (h = He(u % g),
                        u === l ? (p = this._repeat,
                            h = c) : (p = ~~(u / g),
                                p && p === u / g && (h = c,
                                    p--),
                                h > c && (h = c)),
                        x = Rr(this._tTime, g),
                        !a && this._tTime && x !== p && this._tTime - x * g - this._dur <= 0 && (x = p),
                        C && p & 1 && (h = c - h,
                            b = 1),
                        p !== x && !this._lock) {
                        var M = C && x & 1
                            , E = M === (C && p & 1);
                        if (p < x && (M = !M),
                            a = M ? 0 : u % c ? c : u,
                            this._lock = 1,
                            this.render(a || (b ? 0 : He(p * g)), s, !c)._lock = 0,
                            this._tTime = u,
                            !s && this.parent && Yt(this, "onRepeat"),
                            this.vars.repeatRefresh && !b && (this.invalidate()._lock = 1),
                            a && a !== this._time || _ !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                            return this;
                        if (c = this._dur,
                            l = this._tDur,
                            E && (this._lock = 2,
                                a = M ? c : -1e-4,
                                this.render(a, !0),
                                this.vars.repeatRefresh && !b && this.invalidate()),
                            this._lock = 0,
                            !this._ts && !_)
                            return this;
                        ul(this, b)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (T = Lc(this, He(a), He(h)),
                    T && (u -= h - (h = T._start))),
                    this._tTime = u,
                    this._time = h,
                    this._act = !S,
                    this._initted || (this._onUpdate = this.vars.onUpdate,
                        this._initted = 1,
                        this._zTime = r,
                        a = 0),
                    !a && h && !s && !p && (Yt(this, "onStart"),
                        this._tTime !== u))
                    return this;
                if (h >= a && r >= 0)
                    for (d = this._first; d;) {
                        if (m = d._next,
                            (d._act || h >= d._start) && d._ts && T !== d) {
                            if (d.parent !== this)
                                return this.render(r, s, o);
                            if (d.render(d._ts > 0 ? (h - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (h - d._start) * d._ts, s, o),
                                h !== this._time || !this._ts && !_) {
                                T = 0,
                                    m && (u += this._zTime = -ue);
                                break
                            }
                        }
                        d = m
                    }
                else {
                    d = this._last;
                    for (var A = r < 0 ? r : h; d;) {
                        if (m = d._prev,
                            (d._act || A <= d._end) && d._ts && T !== d) {
                            if (d.parent !== this)
                                return this.render(r, s, o);
                            if (d.render(d._ts > 0 ? (A - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (A - d._start) * d._ts, s, o || Ke && (d._initted || d._startAt)),
                                h !== this._time || !this._ts && !_) {
                                T = 0,
                                    m && (u += this._zTime = A ? -ue : ue);
                                break
                            }
                        }
                        d = m
                    }
                }
                if (T && !s && (this.pause(),
                    T.render(h >= a ? 0 : -ue)._zTime = h >= a ? 1 : -1,
                    this._ts))
                    return this._start = v,
                        cn(this),
                        this.render(r, s, o);
                this._onUpdate && !s && Yt(this, "onUpdate", !0),
                    (u === l && this._tTime >= this.totalDuration() || !u && a) && (v === this._start || Math.abs(S) !== Math.abs(this._ts)) && (this._lock || ((r || !c) && (u === l && this._ts > 0 || !u && this._ts < 0) && Fi(this, 1),
                        !s && !(r < 0 && !a) && (u || a || !l) && (Yt(this, u === l && r >= 0 ? "onComplete" : "onReverseComplete", !0),
                            this._prom && !(u < l && this.timeScale() > 0) && this._prom())))
            }
            return this
        }
        ,
        t.add = function (r, s) {
            var o = this;
            if (Si(s) || (s = It(this, s, r)),
                !(r instanceof hs)) {
                if (Ze(r))
                    return r.forEach(function (a) {
                        return o.add(a, s)
                    }),
                        this;
                if (Re(r))
                    return this.addLabel(r, s);
                if (ye(r))
                    r = Me.delayedCall(0, r);
                else
                    return this
            }
            return this !== r ? oi(this, r, s) : this
        }
        ,
        t.getChildren = function (r, s, o, a) {
            r === void 0 && (r = !0),
                s === void 0 && (s = !0),
                o === void 0 && (o = !0),
                a === void 0 && (a = -Vt);
            for (var l = [], c = this._first; c;)
                c._start >= a && (c instanceof Me ? s && l.push(c) : (o && l.push(c),
                    r && l.push.apply(l, c.getChildren(!0, s, o)))),
                    c = c._next;
            return l
        }
        ,
        t.getById = function (r) {
            for (var s = this.getChildren(1, 1, 1), o = s.length; o--;)
                if (s[o].vars.id === r)
                    return s[o]
        }
        ,
        t.remove = function (r) {
            return Re(r) ? this.removeLabel(r) : ye(r) ? this.killTweensOf(r) : (ln(this, r),
                r === this._recent && (this._recent = this._last),
                sr(this))
        }
        ,
        t.totalTime = function (r, s) {
            return arguments.length ? (this._forcing = 1,
                !this._dp && this._ts && (this._start = He(Ot.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))),
                n.prototype.totalTime.call(this, r, s),
                this._forcing = 0,
                this) : this._tTime
        }
        ,
        t.addLabel = function (r, s) {
            return this.labels[r] = It(this, s),
                this
        }
        ,
        t.removeLabel = function (r) {
            return delete this.labels[r],
                this
        }
        ,
        t.addPause = function (r, s, o) {
            var a = Me.delayedCall(0, s || us, o);
            return a.data = "isPause",
                this._hasPause = 1,
                oi(this, a, It(this, r))
        }
        ,
        t.removePause = function (r) {
            var s = this._first;
            for (r = It(this, r); s;)
                s._start === r && s.data === "isPause" && Fi(s),
                    s = s._next
        }
        ,
        t.killTweensOf = function (r, s, o) {
            for (var a = this.getTweensOf(r, o), l = a.length; l--;)
                Mi !== a[l] && a[l].kill(r, s);
            return this
        }
        ,
        t.getTweensOf = function (r, s) {
            for (var o = [], a = Bt(r), l = this._first, c = Si(s), u; l;)
                l instanceof Me ? Ec(l._targets, a) && (c ? (!Mi || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (u = l.getTweensOf(a, s)).length && o.push.apply(o, u),
                    l = l._next;
            return o
        }
        ,
        t.tweenTo = function (r, s) {
            s = s || {};
            var o = this, a = It(o, r), l = s, c = l.startAt, u = l.onStart, f = l.onStartParams, h = l.immediateRender, d, m = Me.to(o, $t({
                ease: s.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration: s.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale()) || ue,
                onStart: function () {
                    if (o.pause(),
                        !d) {
                        var g = s.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale());
                        m._dur !== g && zr(m, g, 0, 1).render(m._time, !0, !0),
                            d = 1
                    }
                    u && u.apply(m, f || [])
                }
            }, s));
            return h ? m.render(0) : m
        }
        ,
        t.tweenFromTo = function (r, s, o) {
            return this.tweenTo(s, $t({
                startAt: {
                    time: It(this, r)
                }
            }, o))
        }
        ,
        t.recent = function () {
            return this._recent
        }
        ,
        t.nextLabel = function (r) {
            return r === void 0 && (r = this._time),
                Uo(this, It(this, r))
        }
        ,
        t.previousLabel = function (r) {
            return r === void 0 && (r = this._time),
                Uo(this, It(this, r), 1)
        }
        ,
        t.currentLabel = function (r) {
            return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + ue)
        }
        ,
        t.shiftChildren = function (r, s, o) {
            o === void 0 && (o = 0);
            for (var a = this._first, l = this.labels, c; a;)
                a._start >= o && (a._start += r,
                    a._end += r),
                    a = a._next;
            if (s)
                for (c in l)
                    l[c] >= o && (l[c] += r);
            return sr(this)
        }
        ,
        t.invalidate = function (r) {
            var s = this._first;
            for (this._lock = 0; s;)
                s.invalidate(r),
                    s = s._next;
            return n.prototype.invalidate.call(this, r)
        }
        ,
        t.clear = function (r) {
            r === void 0 && (r = !0);
            for (var s = this._first, o; s;)
                o = s._next,
                    this.remove(s),
                    s = o;
            return this._dp && (this._time = this._tTime = this._pTime = 0),
                r && (this.labels = {}),
                sr(this)
        }
        ,
        t.totalDuration = function (r) {
            var s = 0, o = this, a = o._last, l = Vt, c, u, f;
            if (arguments.length)
                return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -r : r));
            if (o._dirty) {
                for (f = o.parent; a;)
                    c = a._prev,
                        a._dirty && a.totalDuration(),
                        u = a._start,
                        u > l && o._sort && a._ts && !o._lock ? (o._lock = 1,
                            oi(o, a, u - a._delay, 1)._lock = 0) : l = u,
                        u < 0 && a._ts && (s -= u,
                            (!f && !o._dp || f && f.smoothChildTiming) && (o._start += u / o._ts,
                                o._time -= u,
                                o._tTime -= u),
                            o.shiftChildren(-u, !1, -1 / 0),
                            l = 0),
                        a._end > s && a._ts && (s = a._end),
                        a = c;
                zr(o, o === me && o._time > s ? o._time : s, 1, 1),
                    o._dirty = 0
            }
            return o._tDur
        }
        ,
        e.updateRoot = function (r) {
            if (me._ts && (Ga(me, Zs(r, me)),
                Ha = Ot.frame),
                Ot.frame >= Go) {
                Go += At.autoSleep || 120;
                var s = me._first;
                if ((!s || !s._ts) && At.autoSleep && Ot._listeners.length < 2) {
                    for (; s && !s._ts;)
                        s = s._next;
                    s || Ot.sleep()
                }
            }
        }
        ,
        e
}(hs);
$t(ht.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Uc = function (e, t, i, r, s, o, a) {
    var l = new gt(this._pt, e, t, 0, 1, vl, null, s), c = 0, u = 0, f, h, d, m, p, g, _, T;
    for (l.b = i,
        l.e = r,
        i += "",
        r += "",
        (_ = ~r.indexOf("random(")) && (r = ds(r)),
        o && (T = [i, r],
            o(T, e, t),
            i = T[0],
            r = T[1]),
        h = i.match(pn) || []; f = pn.exec(r);)
        m = f[0],
            p = r.substring(c, f.index),
            d ? d = (d + 1) % 5 : p.substr(-5) === "rgba(" && (d = 1),
            m !== h[u++] && (g = parseFloat(h[u - 1]) || 0,
                l._pt = {
                    _next: l._pt,
                    p: p || u === 1 ? p : ",",
                    s: g,
                    c: m.charAt(1) === "=" ? Mr(g, m) - g : parseFloat(m) - g,
                    m: d && d < 4 ? Math.round : 0
                },
                c = pn.lastIndex);
    return l.c = c < r.length ? r.substring(c, r.length) : "",
        l.fp = a,
        (Fa.test(r) || _) && (l.e = 0),
        this._pt = l,
        l
}, To = function (e, t, i, r, s, o, a, l, c, u) {
    ye(r) && (r = r(s || 0, e, o));
    var f = e[t], h = i !== "get" ? i : ye(f) ? c ? e[t.indexOf("set") || !ye(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : f, d = ye(f) ? c ? Jc : gl : bo, m;
    if (Re(r) && (~r.indexOf("random(") && (r = ds(r)),
        r.charAt(1) === "=" && (m = Mr(h, r) + (je(h) || 0),
            (m || m === 0) && (r = m))),
        !u || h !== r || Xn)
        return !isNaN(h * r) && r !== "" ? (m = new gt(this._pt, e, t, +h || 0, r - (h || 0), typeof f == "boolean" ? tu : _l, 0, d),
            c && (m.fp = c),
            a && m.modifier(a, this, e),
            this._pt = m) : (!f && !(t in e) && _o(t, r),
                Uc.call(this, e, t, h, r, d, l || At.stringFilter, c))
}, jc = function (e, t, i, r, s) {
    if (ye(e) && (e = es(e, s, t, i, r)),
        !di(e) || e.style && e.nodeType || Ze(e) || Ra(e))
        return Re(e) ? es(e, s, t, i, r) : e;
    var o = {}, a;
    for (a in e)
        o[a] = es(e[a], s, t, i, r);
    return o
}, hl = function (e, t, i, r, s, o) {
    var a, l, c, u;
    if (Pt[e] && (a = new Pt[e]).init(s, a.rawVars ? t[e] : jc(t[e], r, s, o, i), i, r, o) !== !1 && (i._pt = l = new gt(i._pt, s, e, 0, 1, a.render, a, 0, a.priority),
        i !== xr))
        for (c = i._ptLookup[i._targets.indexOf(s)],
            u = a._props.length; u--;)
            c[a._props[u]] = l;
    return a
}, Mi, Xn, So = function n(e, t, i) {
    var r = e.vars, s = r.ease, o = r.startAt, a = r.immediateRender, l = r.lazy, c = r.onUpdate, u = r.onUpdateParams, f = r.callbackScope, h = r.runBackwards, d = r.yoyoEase, m = r.keyframes, p = r.autoRevert, g = e._dur, _ = e._startAt, T = e._targets, S = e.parent, v = S && S.data === "nested" ? S.vars.targets : T, x = e._overwrite === "auto" && !ho, C = e.timeline, b, M, E, A, k, O, D, I, B, H, L, V, $;
    if (C && (!m || !s) && (s = "none"),
        e._ease = nr(s, Ir.ease),
        e._yEase = d ? cl(nr(d === !0 ? s : d, Ir.ease)) : 0,
        d && e._yoyo && !e._repeat && (d = e._yEase,
            e._yEase = e._ease,
            e._ease = d),
        e._from = !C && !!r.runBackwards,
        !C || m && !r.stagger) {
        if (I = T[0] ? rr(T[0]).harness : 0,
            V = I && r[I.prop],
            b = Ks(r, vo),
            _ && (_._zTime < 0 && _.progress(1),
                t < 0 && h && a && !p ? _.render(-1, !0) : _.revert(h && g ? zs : bc),
                _._lazy = 0),
            o) {
            if (Fi(e._startAt = Me.set(T, $t({
                data: "isStart",
                overwrite: !1,
                parent: S,
                immediateRender: !0,
                lazy: !_ && pt(l),
                startAt: null,
                delay: 0,
                onUpdate: c,
                onUpdateParams: u,
                callbackScope: f,
                stagger: 0
            }, o))),
                e._startAt._dp = 0,
                e._startAt._sat = e,
                t < 0 && (Ke || !a && !p) && e._startAt.revert(zs),
                a && g && t <= 0 && i <= 0) {
                t && (e._zTime = t);
                return
            }
        } else if (h && g && !_) {
            if (t && (a = !1),
                E = $t({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: a && !_ && pt(l),
                    immediateRender: a,
                    stagger: 0,
                    parent: S
                }, b),
                V && (E[I.prop] = V),
                Fi(e._startAt = Me.set(T, E)),
                e._startAt._dp = 0,
                e._startAt._sat = e,
                t < 0 && (Ke ? e._startAt.revert(zs) : e._startAt.render(-1, !0)),
                e._zTime = t,
                !a)
                n(e._startAt, ue, ue);
            else if (!t)
                return
        }
        for (e._pt = e._ptCache = 0,
            l = g && pt(l) || l && !g,
            M = 0; M < T.length; M++) {
            if (k = T[M],
                D = k._gsap || yo(T)[M]._gsap,
                e._ptLookup[M] = H = {},
                Bn[D.id] && Ii.length && js(),
                L = v === T ? M : v.indexOf(k),
                I && (B = new I).init(k, V || b, e, L, v) !== !1 && (e._pt = A = new gt(e._pt, k, B.name, 0, 1, B.render, B, 0, B.priority),
                    B._props.forEach(function (y) {
                        H[y] = A
                    }),
                    B.priority && (O = 1)),
                !I || V)
                for (E in b)
                    Pt[E] && (B = hl(E, b, e, L, k, v)) ? B.priority && (O = 1) : H[E] = A = To.call(e, k, E, "get", b[E], L, v, 0, r.stringFilter);
            e._op && e._op[M] && e.kill(k, e._op[M]),
                x && e._pt && (Mi = e,
                    me.killTweensOf(k, H, e.globalTime(t)),
                    $ = !e.parent,
                    Mi = 0),
                e._pt && l && (Bn[D.id] = 1)
        }
        O && wl(e),
            e._onInit && e._onInit(e)
    }
    e._onUpdate = c,
        e._initted = (!e._op || e._pt) && !$,
        m && t <= 0 && C.render(Vt, !0, !0)
}, Kc = function (e, t, i, r, s, o, a) {
    var l = (e._pt && e._ptCache || (e._ptCache = {}))[t], c, u, f, h;
    if (!l)
        for (l = e._ptCache[t] = [],
            f = e._ptLookup,
            h = e._targets.length; h--;) {
            if (c = f[h][t],
                c && c.d && c.d._pt)
                for (c = c.d._pt; c && c.p !== t && c.fp !== t;)
                    c = c._next;
            if (!c)
                return Xn = 1,
                    e.vars[t] = "+=0",
                    So(e, a),
                    Xn = 0,
                    1;
            l.push(c)
        }
    for (h = l.length; h--;)
        u = l[h],
            c = u._pt || u,
            c.s = (r || r === 0) && !s ? r : c.s + (r || 0) + o * c.c,
            c.c = i - c.s,
            u.e && (u.e = be(i) + je(u.e)),
            u.b && (u.b = c.s + je(u.b))
}, Zc = function (e, t) {
    var i = e[0] ? rr(e[0]).harness : 0, r = i && i.aliases, s, o, a, l;
    if (!r)
        return t;
    s = ur({}, t);
    for (o in r)
        if (o in s)
            for (l = r[o].split(","),
                a = l.length; a--;)
                s[l[a]] = s[o];
    return s
}, Qc = function (e, t, i, r) {
    var s = t.ease || r || "power1.inOut", o, a;
    if (Ze(t))
        a = i[e] || (i[e] = []),
            t.forEach(function (l, c) {
                return a.push({
                    t: c / (t.length - 1) * 100,
                    v: l,
                    e: s
                })
            });
    else
        for (o in t)
            a = i[o] || (i[o] = []),
                o === "ease" || a.push({
                    t: parseFloat(e),
                    v: t[o],
                    e: s
                })
}, es = function (e, t, i, r, s) {
    return ye(e) ? e.call(t, i, r, s) : Re(e) && ~e.indexOf("random(") ? ds(e) : e
}, pl = wo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", ml = {};
mt(pl + ",id,stagger,delay,duration,paused,scrollTrigger", function (n) {
    return ml[n] = 1
});
var Me = function (n) {
    Da(e, n);
    function e(i, r, s, o) {
        var a;
        typeof r == "number" && (s.duration = r,
            r = s,
            s = null),
            a = n.call(this, o ? r : Qr(r)) || this;
        var l = a.vars, c = l.duration, u = l.delay, f = l.immediateRender, h = l.stagger, d = l.overwrite, m = l.keyframes, p = l.defaults, g = l.scrollTrigger, _ = l.yoyoEase, T = r.parent || me, S = (Ze(i) || Ra(i) ? Si(i[0]) : "length" in r) ? [i] : Bt(i), v, x, C, b, M, E, A, k;
        if (a._targets = S.length ? yo(S) : Us("GSAP target " + i + " not found. https://greensock.com", !At.nullTargetWarn) || [],
            a._ptLookup = [],
            a._overwrite = d,
            m || h || Ts(c) || Ts(u)) {
            if (r = a.vars,
                v = a.timeline = new ht({
                    data: "nested",
                    defaults: p || {},
                    targets: T && T.data === "nested" ? T.vars.targets : S
                }),
                v.kill(),
                v.parent = v._dp = mi(a),
                v._start = 0,
                h || Ts(c) || Ts(u)) {
                if (b = S.length,
                    A = h && Ja(h),
                    di(h))
                    for (M in h)
                        ~pl.indexOf(M) && (k || (k = {}),
                            k[M] = h[M]);
                for (x = 0; x < b; x++)
                    C = Ks(r, ml),
                        C.stagger = 0,
                        _ && (C.yoyoEase = _),
                        k && ur(C, k),
                        E = S[x],
                        C.duration = +es(c, mi(a), x, E, S),
                        C.delay = (+es(u, mi(a), x, E, S) || 0) - a._delay,
                        !h && b === 1 && C.delay && (a._delay = u = C.delay,
                            a._start += u,
                            C.delay = 0),
                        v.to(E, C, A ? A(x, E, S) : 0),
                        v._ease = Z.none;
                v.duration() ? c = u = 0 : a.timeline = 0
            } else if (m) {
                Qr($t(v.vars.defaults, {
                    ease: "none"
                })),
                    v._ease = nr(m.ease || r.ease || "none");
                var O = 0, D, I, B;
                if (Ze(m))
                    m.forEach(function (H) {
                        return v.to(S, H, ">")
                    }),
                        v.duration();
                else {
                    C = {};
                    for (M in m)
                        M === "ease" || M === "easeEach" || Qc(M, m[M], C, m.easeEach);
                    for (M in C)
                        for (D = C[M].sort(function (H, L) {
                            return H.t - L.t
                        }),
                            O = 0,
                            x = 0; x < D.length; x++)
                            I = D[x],
                                B = {
                                    ease: I.e,
                                    duration: (I.t - (x ? D[x - 1].t : 0)) / 100 * c
                                },
                                B[M] = I.v,
                                v.to(S, B, O),
                                O += B.duration;
                    v.duration() < c && v.to({}, {
                        duration: c - v.duration()
                    })
                }
            }
            c || a.duration(c = v.duration())
        } else
            a.timeline = 0;
        return d === !0 && !ho && (Mi = mi(a),
            me.killTweensOf(S),
            Mi = 0),
            oi(T, mi(a), s),
            r.reversed && a.reverse(),
            r.paused && a.paused(!0),
            (f || !c && !m && a._start === He(T._time) && pt(f) && Oc(mi(a)) && T.data !== "nested") && (a._tTime = -ue,
                a.render(Math.max(0, -u) || 0)),
            g && ja(mi(a), g),
            a
    }
    var t = e.prototype;
    return t.render = function (r, s, o) {
        var a = this._time, l = this._tDur, c = this._dur, u = r < 0, f = r > l - ue && !u ? l : r < ue ? 0 : r, h, d, m, p, g, _, T, S, v;
        if (!c)
            Ac(this, r, s, o);
        else if (f !== this._tTime || !r || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u) {
            if (h = f,
                S = this.timeline,
                this._repeat) {
                if (p = c + this._rDelay,
                    this._repeat < -1 && u)
                    return this.totalTime(p * 100 + r, s, o);
                if (h = He(f % p),
                    f === l ? (m = this._repeat,
                        h = c) : (m = ~~(f / p),
                            m && m === f / p && (h = c,
                                m--),
                            h > c && (h = c)),
                    _ = this._yoyo && m & 1,
                    _ && (v = this._yEase,
                        h = c - h),
                    g = Rr(this._tTime, p),
                    h === a && !o && this._initted)
                    return this._tTime = f,
                        this;
                m !== g && (S && this._yEase && ul(S, _),
                    this.vars.repeatRefresh && !_ && !this._lock && (this._lock = o = 1,
                        this.render(He(p * m), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Ka(this, u ? r : h, o, s, f))
                    return this._tTime = 0,
                        this;
                if (a !== this._time)
                    return this;
                if (c !== this._dur)
                    return this.render(r, s, o)
            }
            if (this._tTime = f,
                this._time = h,
                !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                this.ratio = T = (v || this._ease)(h / c),
                this._from && (this.ratio = T = 1 - T),
                h && !a && !s && !m && (Yt(this, "onStart"),
                    this._tTime !== f))
                return this;
            for (d = this._pt; d;)
                d.r(T, d.d),
                    d = d._next;
            S && S.render(r < 0 ? r : !h && _ ? -ue : S._dur * S._ease(h / this._dur), s, o) || this._startAt && (this._zTime = r),
                this._onUpdate && !s && (u && Yn(this, r, s, o),
                    Yt(this, "onUpdate")),
                this._repeat && m !== g && this.vars.onRepeat && !s && this.parent && Yt(this, "onRepeat"),
                (f === this._tDur || !f) && this._tTime === f && (u && !this._onUpdate && Yn(this, r, !0, !0),
                    (r || !c) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && Fi(this, 1),
                    !s && !(u && !a) && (f || a || _) && (Yt(this, f === l ? "onComplete" : "onReverseComplete", !0),
                        this._prom && !(f < l && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
        ,
        t.targets = function () {
            return this._targets
        }
        ,
        t.invalidate = function (r) {
            return (!r || !this.vars.runBackwards) && (this._startAt = 0),
                this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
                this._ptLookup = [],
                this.timeline && this.timeline.invalidate(r),
                n.prototype.invalidate.call(this, r)
        }
        ,
        t.resetTo = function (r, s, o, a) {
            fs || Ot.wake(),
                this._ts || this.play();
            var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
            return this._initted || So(this, l),
                c = this._ease(l / this._dur),
                Kc(this, r, s, o, a, c, l) ? this.resetTo(r, s, o, a) : (un(this, 0),
                    this.parent || qa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
                    this.render(0))
        }
        ,
        t.kill = function (r, s) {
            if (s === void 0 && (s = "all"),
                !r && (!s || s === "all"))
                return this._lazy = this._pt = 0,
                    this.parent ? qr(this) : this;
            if (this.timeline) {
                var o = this.timeline.totalDuration();
                return this.timeline.killTweensOf(r, s, Mi && Mi.vars.overwrite !== !0)._first || qr(this),
                    this.parent && o !== this.timeline.totalDuration() && zr(this, this._dur * this.timeline._tDur / o, 0, 1),
                    this
            }
            var a = this._targets, l = r ? Bt(r) : a, c = this._ptLookup, u = this._pt, f, h, d, m, p, g, _;
            if ((!s || s === "all") && Pc(a, l))
                return s === "all" && (this._pt = 0),
                    qr(this);
            for (f = this._op = this._op || [],
                s !== "all" && (Re(s) && (p = {},
                    mt(s, function (T) {
                        return p[T] = 1
                    }),
                    s = p),
                    s = Zc(a, s)),
                _ = a.length; _--;)
                if (~l.indexOf(a[_])) {
                    h = c[_],
                        s === "all" ? (f[_] = s,
                            m = h,
                            d = {}) : (d = f[_] = f[_] || {},
                                m = s);
                    for (p in m)
                        g = h && h[p],
                            g && ((!("kill" in g.d) || g.d.kill(p) === !0) && ln(this, g, "_pt"),
                                delete h[p]),
                            d !== "all" && (d[p] = 1)
                }
            return this._initted && !this._pt && u && qr(this),
                this
        }
        ,
        e.to = function (r, s) {
            return new e(r, s, arguments[2])
        }
        ,
        e.from = function (r, s) {
            return Jr(1, arguments)
        }
        ,
        e.delayedCall = function (r, s, o, a) {
            return new e(s, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: r,
                onComplete: s,
                onReverseComplete: s,
                onCompleteParams: o,
                onReverseCompleteParams: o,
                callbackScope: a
            })
        }
        ,
        e.fromTo = function (r, s, o) {
            return Jr(2, arguments)
        }
        ,
        e.set = function (r, s) {
            return s.duration = 0,
                s.repeatDelay || (s.repeat = 0),
                new e(r, s)
        }
        ,
        e.killTweensOf = function (r, s, o) {
            return me.killTweensOf(r, s, o)
        }
        ,
        e
}(hs);
$t(Me.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
mt("staggerTo,staggerFrom,staggerFromTo", function (n) {
    Me[n] = function () {
        var e = new ht
            , t = $n.call(arguments, 0);
        return t.splice(n === "staggerFromTo" ? 5 : 4, 0, 0),
            e[n].apply(e, t)
    }
});
var bo = function (e, t, i) {
    return e[t] = i
}
    , gl = function (e, t, i) {
        return e[t](i)
    }
    , Jc = function (e, t, i, r) {
        return e[t](r.fp, i)
    }
    , eu = function (e, t, i) {
        return e.setAttribute(t, i)
    }
    , xo = function (e, t) {
        return ye(e[t]) ? gl : po(e[t]) && e.setAttribute ? eu : bo
    }
    , _l = function (e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
    }
    , tu = function (e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t)
    }
    , vl = function (e, t) {
        var i = t._pt
            , r = "";
        if (!e && t.b)
            r = t.b;
        else if (e === 1 && t.e)
            r = t.e;
        else {
            for (; i;)
                r = i.p + (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) + r,
                    i = i._next;
            r += t.c
        }
        t.set(t.t, t.p, r, t)
    }
    , Eo = function (e, t) {
        for (var i = t._pt; i;)
            i.r(e, i.d),
                i = i._next
    }
    , iu = function (e, t, i, r) {
        for (var s = this._pt, o; s;)
            o = s._next,
                s.p === r && s.modifier(e, t, i),
                s = o
    }
    , ru = function (e) {
        for (var t = this._pt, i, r; t;)
            r = t._next,
                t.p === e && !t.op || t.op === e ? ln(this, t, "_pt") : t.dep || (i = 1),
                t = r;
        return !i
    }
    , su = function (e, t, i, r) {
        r.mSet(e, t, r.m.call(r.tween, i, r.mt), r)
    }
    , wl = function (e) {
        for (var t = e._pt, i, r, s, o; t;) {
            for (i = t._next,
                r = s; r && r.pr > t.pr;)
                r = r._next;
            (t._prev = r ? r._prev : o) ? t._prev._next = t : s = t,
                (t._next = r) ? r._prev = t : o = t,
                t = i
        }
        e._pt = s
    }
    , gt = function () {
        function n(t, i, r, s, o, a, l, c, u) {
            this.t = i,
                this.s = s,
                this.c = o,
                this.p = r,
                this.r = a || _l,
                this.d = l || this,
                this.set = c || bo,
                this.pr = u || 0,
                this._next = t,
                t && (t._prev = this)
        }
        var e = n.prototype;
        return e.modifier = function (i, r, s) {
            this.mSet = this.mSet || this.set,
                this.set = su,
                this.m = i,
                this.mt = s,
                this.tween = r
        }
            ,
            n
    }();
mt(wo + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (n) {
    return vo[n] = 1
});
Lt.TweenMax = Lt.TweenLite = Me;
Lt.TimelineLite = Lt.TimelineMax = ht;
me = new ht({
    sortChildren: !1,
    defaults: Ir,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
At.stringFilter = ll;
var or = []
    , Ns = {}
    , nu = []
    , Ko = 0
    , ou = 0
    , wn = function (e) {
        return (Ns[e] || nu).map(function (t) {
            return t()
        })
    }
    , qn = function () {
        var e = Date.now()
            , t = [];
        e - Ko > 2 && (wn("matchMediaInit"),
            or.forEach(function (i) {
                var r = i.queries, s = i.conditions, o, a, l, c;
                for (a in r)
                    o = Rt.matchMedia(r[a]).matches,
                        o && (l = 1),
                        o !== s[a] && (s[a] = o,
                            c = 1);
                c && (i.revert(),
                    l && t.push(i))
            }),
            wn("matchMediaRevert"),
            t.forEach(function (i) {
                return i.onMatch(i)
            }),
            Ko = e,
            wn("matchMedia"))
    }
    , yl = function () {
        function n(t, i) {
            this.selector = i && Gn(i),
                this.data = [],
                this._r = [],
                this.isReverted = !1,
                this.id = ou++,
                t && this.add(t)
        }
        var e = n.prototype;
        return e.add = function (i, r, s) {
            ye(i) && (s = r,
                r = i,
                i = ye);
            var o = this
                , a = function () {
                    var c = we, u = o.selector, f;
                    return c && c !== o && c.data.push(o),
                        s && (o.selector = Gn(s)),
                        we = o,
                        f = r.apply(o, arguments),
                        ye(f) && o._r.push(f),
                        we = c,
                        o.selector = u,
                        o.isReverted = !1,
                        f
                };
            return o.last = a,
                i === ye ? a(o) : i ? o[i] = a : a
        }
            ,
            e.ignore = function (i) {
                var r = we;
                we = null,
                    i(this),
                    we = r
            }
            ,
            e.getTweens = function () {
                var i = [];
                return this.data.forEach(function (r) {
                    return r instanceof n ? i.push.apply(i, r.getTweens()) : r instanceof Me && !(r.parent && r.parent.data === "nested") && i.push(r)
                }),
                    i
            }
            ,
            e.clear = function () {
                this._r.length = this.data.length = 0
            }
            ,
            e.kill = function (i, r) {
                var s = this;
                if (i) {
                    var o = this.getTweens();
                    this.data.forEach(function (l) {
                        l.data === "isFlip" && (l.revert(),
                            l.getChildren(!0, !0, !1).forEach(function (c) {
                                return o.splice(o.indexOf(c), 1)
                            }))
                    }),
                        o.map(function (l) {
                            return {
                                g: l.globalTime(0),
                                t: l
                            }
                        }).sort(function (l, c) {
                            return c.g - l.g || -1 / 0
                        }).forEach(function (l) {
                            return l.t.revert(i)
                        }),
                        this.data.forEach(function (l) {
                            return !(l instanceof Me) && l.revert && l.revert(i)
                        }),
                        this._r.forEach(function (l) {
                            return l(i, s)
                        }),
                        this.isReverted = !0
                } else
                    this.data.forEach(function (l) {
                        return l.kill && l.kill()
                    });
                if (this.clear(),
                    r)
                    for (var a = or.length; a--;)
                        or[a].id === this.id && or.splice(a, 1)
            }
            ,
            e.revert = function (i) {
                this.kill(i || {})
            }
            ,
            n
    }()
    , au = function () {
        function n(t) {
            this.contexts = [],
                this.scope = t
        }
        var e = n.prototype;
        return e.add = function (i, r, s) {
            di(i) || (i = {
                matches: i
            });
            var o = new yl(0, s || this.scope), a = o.conditions = {}, l, c, u;
            we && !o.selector && (o.selector = we.selector),
                this.contexts.push(o),
                r = o.add("onMatch", r),
                o.queries = i;
            for (c in i)
                c === "all" ? u = 1 : (l = Rt.matchMedia(i[c]),
                    l && (or.indexOf(o) < 0 && or.push(o),
                        (a[c] = l.matches) && (u = 1),
                        l.addListener ? l.addListener(qn) : l.addEventListener("change", qn)));
            return u && r(o),
                this
        }
            ,
            e.revert = function (i) {
                this.kill(i || {})
            }
            ,
            e.kill = function (i) {
                this.contexts.forEach(function (r) {
                    return r.kill(i, !0)
                })
            }
            ,
            n
    }()
    , Qs = {
        registerPlugin: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            t.forEach(function (r) {
                return nl(r)
            })
        },
        timeline: function (e) {
            return new ht(e)
        },
        getTweensOf: function (e, t) {
            return me.getTweensOf(e, t)
        },
        getProperty: function (e, t, i, r) {
            Re(e) && (e = Bt(e)[0]);
            var s = rr(e || {}).get
                , o = i ? Xa : Wa;
            return i === "native" && (i = ""),
                e && (t ? o((Pt[t] && Pt[t].get || s)(e, t, i, r)) : function (a, l, c) {
                    return o((Pt[a] && Pt[a].get || s)(e, a, l, c))
                }
                )
        },
        quickSetter: function (e, t, i) {
            if (e = Bt(e),
                e.length > 1) {
                var r = e.map(function (u) {
                    return _t.quickSetter(u, t, i)
                })
                    , s = r.length;
                return function (u) {
                    for (var f = s; f--;)
                        r[f](u)
                }
            }
            e = e[0] || {};
            var o = Pt[t]
                , a = rr(e)
                , l = a.harness && (a.harness.aliases || {})[t] || t
                , c = o ? function (u) {
                    var f = new o;
                    xr._pt = 0,
                        f.init(e, i ? u + i : u, xr, 0, [e]),
                        f.render(1, f),
                        xr._pt && Eo(1, xr)
                }
                    : a.set(e, l);
            return o ? c : function (u) {
                return c(e, l, i ? u + i : u, a, 1)
            }
        },
        quickTo: function (e, t, i) {
            var r, s = _t.to(e, ur((r = {},
                r[t] = "+=0.1",
                r.paused = !0,
                r), i || {})), o = function (l, c, u) {
                    return s.resetTo(t, l, c, u)
                };
            return o.tween = s,
                o
        },
        isTweening: function (e) {
            return me.getTweensOf(e, !0).length > 0
        },
        defaults: function (e) {
            return e && e.ease && (e.ease = nr(e.ease, Ir.ease)),
                Wo(Ir, e || {})
        },
        config: function (e) {
            return Wo(At, e || {})
        },
        registerEffect: function (e) {
            var t = e.name
                , i = e.effect
                , r = e.plugins
                , s = e.defaults
                , o = e.extendTimeline;
            (r || "").split(",").forEach(function (a) {
                return a && !Pt[a] && !Lt[a] && Us(t + " effect requires " + a + " plugin.")
            }),
                mn[t] = function (a, l, c) {
                    return i(Bt(a), $t(l || {}, s), c)
                }
                ,
                o && (ht.prototype[t] = function (a, l, c) {
                    return this.add(mn[t](a, di(l) ? l : (c = l) && {}, this), c)
                }
                )
        },
        registerEase: function (e, t) {
            Z[e] = nr(t)
        },
        parseEase: function (e, t) {
            return arguments.length ? nr(e, t) : Z
        },
        getById: function (e) {
            return me.getById(e)
        },
        exportRoot: function (e, t) {
            e === void 0 && (e = {});
            var i = new ht(e), r, s;
            for (i.smoothChildTiming = pt(e.smoothChildTiming),
                me.remove(i),
                i._dp = 0,
                i._time = i._tTime = me._time,
                r = me._first; r;)
                s = r._next,
                    (t || !(!r._dur && r instanceof Me && r.vars.onComplete === r._targets[0])) && oi(i, r, r._start - r._delay),
                    r = s;
            return oi(me, i, 0),
                i
        },
        context: function (e, t) {
            return e ? new yl(e, t) : we
        },
        matchMedia: function (e) {
            return new au(e)
        },
        matchMediaRefresh: function () {
            return or.forEach(function (e) {
                var t = e.conditions, i, r;
                for (r in t)
                    t[r] && (t[r] = !1,
                        i = 1);
                i && e.revert()
            }) || qn()
        },
        addEventListener: function (e, t) {
            var i = Ns[e] || (Ns[e] = []);
            ~i.indexOf(t) || i.push(t)
        },
        removeEventListener: function (e, t) {
            var i = Ns[e]
                , r = i && i.indexOf(t);
            r >= 0 && i.splice(r, 1)
        },
        utils: {
            wrap: Vc,
            wrapYoyo: Bc,
            distribute: Ja,
            random: tl,
            snap: el,
            normalize: Nc,
            getUnit: je,
            clamp: Ic,
            splitColor: ol,
            toArray: Bt,
            selector: Gn,
            mapRange: rl,
            pipe: zc,
            unitize: Fc,
            interpolate: Yc,
            shuffle: Qa
        },
        install: Ba,
        effects: mn,
        ticker: Ot,
        updateRoot: ht.updateRoot,
        plugins: Pt,
        globalTimeline: me,
        core: {
            PropTween: gt,
            globals: Ya,
            Tween: Me,
            Timeline: ht,
            Animation: hs,
            getCache: rr,
            _removeLinkedListItem: ln,
            reverting: function () {
                return Ke
            },
            context: function (e) {
                return e && we && (we.data.push(e),
                    e._ctx = we),
                    we
            },
            suppressOverwrites: function (e) {
                return ho = e
            }
        }
    };
mt("to,from,fromTo,delayedCall,set,killTweensOf", function (n) {
    return Qs[n] = Me[n]
});
Ot.add(ht.updateRoot);
xr = Qs.to({}, {
    duration: 0
});
var lu = function (e, t) {
    for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t;)
        i = i._next;
    return i
}
    , cu = function (e, t) {
        var i = e._targets, r, s, o;
        for (r in t)
            for (s = i.length; s--;)
                o = e._ptLookup[s][r],
                    o && (o = o.d) && (o._pt && (o = lu(o, r)),
                        o && o.modifier && o.modifier(t[r], e, i[s], r))
    }
    , yn = function (e, t) {
        return {
            name: e,
            rawVars: 1,
            init: function (r, s, o) {
                o._onInit = function (a) {
                    var l, c;
                    if (Re(s) && (l = {},
                        mt(s, function (u) {
                            return l[u] = 1
                        }),
                        s = l),
                        t) {
                        l = {};
                        for (c in s)
                            l[c] = t(s[c]);
                        s = l
                    }
                    cu(a, s)
                }
            }
        }
    }
    , _t = Qs.registerPlugin({
        name: "attr",
        init: function (e, t, i, r, s) {
            var o, a, l;
            this.tween = i;
            for (o in t)
                l = e.getAttribute(o) || "",
                    a = this.add(e, "setAttribute", (l || 0) + "", t[o], r, s, 0, 0, o),
                    a.op = o,
                    a.b = l,
                    this._props.push(o)
        },
        render: function (e, t) {
            for (var i = t._pt; i;)
                Ke ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d),
                    i = i._next
        }
    }, {
        name: "endArray",
        init: function (e, t) {
            for (var i = t.length; i--;)
                this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1)
        }
    }, yn("roundProps", Wn), yn("modifiers"), yn("snap", el)) || Qs;
Me.version = ht.version = _t.version = "3.12.2";
Va = 1;
mo() && Fr();
Z.Power0;
Z.Power1;
Z.Power2;
Z.Power3;
Z.Power4;
Z.Linear;
Z.Quad;
Z.Cubic;
Z.Quart;
Z.Quint;
Z.Strong;
Z.Elastic;
Z.Back;
Z.SteppedEase;
Z.Bounce;
Z.Sine;
Z.Expo;
Z.Circ;
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Zo, Oi, Or, Co, tr, Qo, Po, uu = function () {
    return typeof window < "u"
}, bi = {}, Qi = 180 / Math.PI, kr = Math.PI / 180, vr = Math.atan2, Jo = 1e8, Mo = /([A-Z])/g, du = /(left|right|width|margin|padding|x)/i, fu = /[\s,\(]\S/, ai = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, Un = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, hu = function (e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, pu = function (e, t) {
    return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
}, mu = function (e, t) {
    var i = t.s + t.c * e;
    t.set(t.t, t.p, ~~(i + (i < 0 ? -.5 : .5)) + t.u, t)
}, Tl = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t)
}, Sl = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
}, gu = function (e, t, i) {
    return e.style[t] = i
}, _u = function (e, t, i) {
    return e.style.setProperty(t, i)
}, vu = function (e, t, i) {
    return e._gsap[t] = i
}, wu = function (e, t, i) {
    return e._gsap.scaleX = e._gsap.scaleY = i
}, yu = function (e, t, i, r, s) {
    var o = e._gsap;
    o.scaleX = o.scaleY = i,
        o.renderTransform(s, o)
}, Tu = function (e, t, i, r, s) {
    var o = e._gsap;
    o[t] = i,
        o.renderTransform(s, o)
}, ge = "transform", Jt = ge + "Origin", Su = function n(e, t) {
    var i = this
        , r = this.target
        , s = r.style;
    if (e in bi && s) {
        if (this.tfm = this.tfm || {},
            e !== "transform")
            e = ai[e] || e,
                ~e.indexOf(",") ? e.split(",").forEach(function (o) {
                    return i.tfm[o] = gi(r, o)
                }) : this.tfm[e] = r._gsap.x ? r._gsap[e] : gi(r, e);
        else
            return ai.transform.split(",").forEach(function (o) {
                return n.call(i, o, t)
            });
        if (this.props.indexOf(ge) >= 0)
            return;
        r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"),
            this.props.push(Jt, t, "")),
            e = ge
    }
    (s || t) && this.props.push(e, t, s[e])
}, bl = function (e) {
    e.translate && (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"))
}, bu = function () {
    var e = this.props, t = this.target, i = t.style, r = t._gsap, s, o;
    for (s = 0; s < e.length; s += 3)
        e[s + 1] ? t[e[s]] = e[s + 2] : e[s + 2] ? i[e[s]] = e[s + 2] : i.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(Mo, "-$1").toLowerCase());
    if (this.tfm) {
        for (o in this.tfm)
            r[o] = this.tfm[o];
        r.svg && (r.renderTransform(),
            t.setAttribute("data-svg-origin", this.svgo || "")),
            s = Po(),
            (!s || !s.isStart) && !i[ge] && (bl(i),
                r.uncache = 1)
    }
}, xl = function (e, t) {
    var i = {
        target: e,
        props: [],
        revert: bu,
        save: Su
    };
    return e._gsap || _t.core.getCache(e),
        t && t.split(",").forEach(function (r) {
            return i.save(r)
        }),
        i
}, El, jn = function (e, t) {
    var i = Oi.createElementNS ? Oi.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Oi.createElement(e);
    return i.style ? i : Oi.createElement(e)
}, li = function n(e, t, i) {
    var r = getComputedStyle(e);
    return r[t] || r.getPropertyValue(t.replace(Mo, "-$1").toLowerCase()) || r.getPropertyValue(t) || !i && n(e, Nr(t) || t, 1) || ""
}, ea = "O,Moz,ms,Ms,Webkit".split(","), Nr = function (e, t, i) {
    var r = t || tr
        , s = r.style
        , o = 5;
    if (e in s && !i)
        return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(ea[o] + e in s);)
        ;
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? ea[o] : "") + e
}, Kn = function () {
    uu() && window.document && (Zo = window,
        Oi = Zo.document,
        Or = Oi.documentElement,
        tr = jn("div") || {
            style: {}
        },
        jn("div"),
        ge = Nr(ge),
        Jt = ge + "Origin",
        tr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        El = !!Nr("perspective"),
        Po = _t.core.reverting,
        Co = 1)
}, Tn = function n(e) {
    var t = jn("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, r = this.nextSibling, s = this.style.cssText, o;
    if (Or.appendChild(t),
        t.appendChild(this),
        this.style.display = "block",
        e)
        try {
            o = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = n
        } catch { }
    else
        this._gsapBBox && (o = this._gsapBBox());
    return i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
        Or.removeChild(t),
        this.style.cssText = s,
        o
}, ta = function (e, t) {
    for (var i = t.length; i--;)
        if (e.hasAttribute(t[i]))
            return e.getAttribute(t[i])
}, Cl = function (e) {
    var t;
    try {
        t = e.getBBox()
    } catch {
        t = Tn.call(e, !0)
    }
    return t && (t.width || t.height) || e.getBBox === Tn || (t = Tn.call(e, !0)),
        t && !t.width && !t.x && !t.y ? {
            x: +ta(e, ["x", "cx", "x1"]) || 0,
            y: +ta(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : t
}, Pl = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Cl(e))
}, ps = function (e, t) {
    if (t) {
        var i = e.style;
        t in bi && t !== Jt && (t = ge),
            i.removeProperty ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
                i.removeProperty(t.replace(Mo, "-$1").toLowerCase())) : i.removeAttribute(t)
    }
}, ki = function (e, t, i, r, s, o) {
    var a = new gt(e._pt, t, i, 0, 1, o ? Sl : Tl);
    return e._pt = a,
        a.b = r,
        a.e = s,
        e._props.push(i),
        a
}, ia = {
    deg: 1,
    rad: 1,
    turn: 1
}, xu = {
    grid: 1,
    flex: 1
}, Ni = function n(e, t, i, r) {
    var s = parseFloat(i) || 0, o = (i + "").trim().substr((s + "").length) || "px", a = tr.style, l = du.test(t), c = e.tagName.toLowerCase() === "svg", u = (c ? "client" : "offset") + (l ? "Width" : "Height"), f = 100, h = r === "px", d = r === "%", m, p, g, _;
    return r === o || !s || ia[r] || ia[o] ? s : (o !== "px" && !h && (s = n(e, t, i, "px")),
        _ = e.getCTM && Pl(e),
        (d || o === "%") && (bi[t] || ~t.indexOf("adius")) ? (m = _ ? e.getBBox()[l ? "width" : "height"] : e[u],
            be(d ? s / m * f : s / 100 * m)) : (a[l ? "width" : "height"] = f + (h ? o : r),
                p = ~t.indexOf("adius") || r === "em" && e.appendChild && !c ? e : e.parentNode,
                _ && (p = (e.ownerSVGElement || {}).parentNode),
                (!p || p === Oi || !p.appendChild) && (p = Oi.body),
                g = p._gsap,
                g && d && g.width && l && g.time === Ot.time && !g.uncache ? be(s / g.width * f) : ((d || o === "%") && !xu[li(p, "display")] && (a.position = li(e, "position")),
                    p === e && (a.position = "static"),
                    p.appendChild(tr),
                    m = tr[u],
                    p.removeChild(tr),
                    a.position = "absolute",
                    l && d && (g = rr(p),
                        g.time = Ot.time,
                        g.width = p[u]),
                    be(h ? m * s / f : m && s ? f / m * s : 0))))
}, gi = function (e, t, i, r) {
    var s;
    return Co || Kn(),
        t in ai && t !== "transform" && (t = ai[t],
            ~t.indexOf(",") && (t = t.split(",")[0])),
        bi[t] && t !== "transform" ? (s = gs(e, r),
            s = t !== "transformOrigin" ? s[t] : s.svg ? s.origin : en(li(e, Jt)) + " " + s.zOrigin + "px") : (s = e.style[t],
                (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) && (s = Js[t] && Js[t](e, t, i) || li(e, t) || $a(e, t) || (t === "opacity" ? 1 : 0))),
        i && !~(s + "").trim().indexOf(" ") ? Ni(e, t, s, i) + i : s
}, Eu = function (e, t, i, r) {
    if (!i || i === "none") {
        var s = Nr(t, e, 1)
            , o = s && li(e, s, 1);
        o && o !== i ? (t = s,
            i = o) : t === "borderColor" && (i = li(e, "borderTopColor"))
    }
    var a = new gt(this._pt, e.style, t, 0, 1, vl), l = 0, c = 0, u, f, h, d, m, p, g, _, T, S, v, x;
    if (a.b = i,
        a.e = r,
        i += "",
        r += "",
        r === "auto" && (e.style[t] = r,
            r = li(e, t) || r,
            e.style[t] = i),
        u = [i, r],
        ll(u),
        i = u[0],
        r = u[1],
        h = i.match(br) || [],
        x = r.match(br) || [],
        x.length) {
        for (; f = br.exec(r);)
            g = f[0],
                T = r.substring(l, f.index),
                m ? m = (m + 1) % 5 : (T.substr(-5) === "rgba(" || T.substr(-5) === "hsla(") && (m = 1),
                g !== (p = h[c++] || "") && (d = parseFloat(p) || 0,
                    v = p.substr((d + "").length),
                    g.charAt(1) === "=" && (g = Mr(d, g) + v),
                    _ = parseFloat(g),
                    S = g.substr((_ + "").length),
                    l = br.lastIndex - S.length,
                    S || (S = S || At.units[t] || v,
                        l === r.length && (r += S,
                            a.e += S)),
                    v !== S && (d = Ni(e, t, p, S) || 0),
                    a._pt = {
                        _next: a._pt,
                        p: T || c === 1 ? T : ",",
                        s: d,
                        c: _ - d,
                        m: m && m < 4 || t === "zIndex" ? Math.round : 0
                    });
        a.c = l < r.length ? r.substring(l, r.length) : ""
    } else
        a.r = t === "display" && r === "none" ? Sl : Tl;
    return Fa.test(r) && (a.e = 0),
        this._pt = a,
        a
}, ra = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, Cu = function (e) {
    var t = e.split(" ")
        , i = t[0]
        , r = t[1] || "50%";
    return (i === "top" || i === "bottom" || r === "left" || r === "right") && (e = i,
        i = r,
        r = e),
        t[0] = ra[i] || i,
        t[1] = ra[r] || r,
        t.join(" ")
}, Pu = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
        var i = t.t, r = i.style, s = t.u, o = i._gsap, a, l, c;
        if (s === "all" || s === !0)
            r.cssText = "",
                l = 1;
        else
            for (s = s.split(","),
                c = s.length; --c > -1;)
                a = s[c],
                    bi[a] && (l = 1,
                        a = a === "transformOrigin" ? Jt : ge),
                    ps(i, a);
        l && (ps(i, ge),
            o && (o.svg && i.removeAttribute("transform"),
                gs(i, 1),
                o.uncache = 1,
                bl(r)))
    }
}, Js = {
    clearProps: function (e, t, i, r, s) {
        if (s.data !== "isFromStart") {
            var o = e._pt = new gt(e._pt, t, i, 0, 0, Pu);
            return o.u = r,
                o.pr = -10,
                o.tween = s,
                e._props.push(i),
                1
        }
    }
}, ms = [1, 0, 0, 1, 0, 0], Ml = {}, Ol = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
}, sa = function (e) {
    var t = li(e, ge);
    return Ol(t) ? ms : t.substr(7).match(za).map(be)
}, Oo = function (e, t) {
    var i = e._gsap || rr(e), r = e.style, s = sa(e), o, a, l, c;
    return i.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix,
        s = [l.a, l.b, l.c, l.d, l.e, l.f],
        s.join(",") === "1,0,0,1,0,0" ? ms : s) : (s === ms && !e.offsetParent && e !== Or && !i.svg && (l = r.display,
            r.display = "block",
            o = e.parentNode,
            (!o || !e.offsetParent) && (c = 1,
                a = e.nextElementSibling,
                Or.appendChild(e)),
            s = sa(e),
            l ? r.display = l : ps(e, "display"),
            c && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : Or.removeChild(e))),
            t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s)
}, Zn = function (e, t, i, r, s, o) {
    var a = e._gsap, l = s || Oo(e, !0), c = a.xOrigin || 0, u = a.yOrigin || 0, f = a.xOffset || 0, h = a.yOffset || 0, d = l[0], m = l[1], p = l[2], g = l[3], _ = l[4], T = l[5], S = t.split(" "), v = parseFloat(S[0]) || 0, x = parseFloat(S[1]) || 0, C, b, M, E;
    i ? l !== ms && (b = d * g - m * p) && (M = v * (g / b) + x * (-p / b) + (p * T - g * _) / b,
        E = v * (-m / b) + x * (d / b) - (d * T - m * _) / b,
        v = M,
        x = E) : (C = Cl(e),
            v = C.x + (~S[0].indexOf("%") ? v / 100 * C.width : v),
            x = C.y + (~(S[1] || S[0]).indexOf("%") ? x / 100 * C.height : x)),
        r || r !== !1 && a.smooth ? (_ = v - c,
            T = x - u,
            a.xOffset = f + (_ * d + T * p) - _,
            a.yOffset = h + (_ * m + T * g) - T) : a.xOffset = a.yOffset = 0,
        a.xOrigin = v,
        a.yOrigin = x,
        a.smooth = !!r,
        a.origin = t,
        a.originIsAbsolute = !!i,
        e.style[Jt] = "0px 0px",
        o && (ki(o, a, "xOrigin", c, v),
            ki(o, a, "yOrigin", u, x),
            ki(o, a, "xOffset", f, a.xOffset),
            ki(o, a, "yOffset", h, a.yOffset)),
        e.setAttribute("data-svg-origin", v + " " + x)
}, gs = function (e, t) {
    var i = e._gsap || new fl(e);
    if ("x" in i && !t && !i.uncache)
        return i;
    var r = e.style, s = i.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(e), c = li(e, Jt) || "0", u, f, h, d, m, p, g, _, T, S, v, x, C, b, M, E, A, k, O, D, I, B, H, L, V, $, y, ne, ze, vt, _e, Fe;
    return u = f = h = p = g = _ = T = S = v = 0,
        d = m = 1,
        i.svg = !!(e.getCTM && Pl(e)),
        l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (r[ge] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[ge] !== "none" ? l[ge] : "")),
            r.scale = r.rotate = r.translate = "none"),
        b = Oo(e, i.svg),
        i.svg && (i.uncache ? (V = e.getBBox(),
            c = i.xOrigin - V.x + "px " + (i.yOrigin - V.y) + "px",
            L = "") : L = !t && e.getAttribute("data-svg-origin"),
            Zn(e, L || c, !!L || i.originIsAbsolute, i.smooth !== !1, b)),
        x = i.xOrigin || 0,
        C = i.yOrigin || 0,
        b !== ms && (k = b[0],
            O = b[1],
            D = b[2],
            I = b[3],
            u = B = b[4],
            f = H = b[5],
            b.length === 6 ? (d = Math.sqrt(k * k + O * O),
                m = Math.sqrt(I * I + D * D),
                p = k || O ? vr(O, k) * Qi : 0,
                T = D || I ? vr(D, I) * Qi + p : 0,
                T && (m *= Math.abs(Math.cos(T * kr))),
                i.svg && (u -= x - (x * k + C * D),
                    f -= C - (x * O + C * I))) : (Fe = b[6],
                        vt = b[7],
                        y = b[8],
                        ne = b[9],
                        ze = b[10],
                        _e = b[11],
                        u = b[12],
                        f = b[13],
                        h = b[14],
                        M = vr(Fe, ze),
                        g = M * Qi,
                        M && (E = Math.cos(-M),
                            A = Math.sin(-M),
                            L = B * E + y * A,
                            V = H * E + ne * A,
                            $ = Fe * E + ze * A,
                            y = B * -A + y * E,
                            ne = H * -A + ne * E,
                            ze = Fe * -A + ze * E,
                            _e = vt * -A + _e * E,
                            B = L,
                            H = V,
                            Fe = $),
                        M = vr(-D, ze),
                        _ = M * Qi,
                        M && (E = Math.cos(-M),
                            A = Math.sin(-M),
                            L = k * E - y * A,
                            V = O * E - ne * A,
                            $ = D * E - ze * A,
                            _e = I * A + _e * E,
                            k = L,
                            O = V,
                            D = $),
                        M = vr(O, k),
                        p = M * Qi,
                        M && (E = Math.cos(M),
                            A = Math.sin(M),
                            L = k * E + O * A,
                            V = B * E + H * A,
                            O = O * E - k * A,
                            H = H * E - B * A,
                            k = L,
                            B = V),
                        g && Math.abs(g) + Math.abs(p) > 359.9 && (g = p = 0,
                            _ = 180 - _),
                        d = be(Math.sqrt(k * k + O * O + D * D)),
                        m = be(Math.sqrt(H * H + Fe * Fe)),
                        M = vr(B, H),
                        T = Math.abs(M) > 2e-4 ? M * Qi : 0,
                        v = _e ? 1 / (_e < 0 ? -_e : _e) : 0),
            i.svg && (L = e.getAttribute("transform"),
                i.forceCSS = e.setAttribute("transform", "") || !Ol(li(e, ge)),
                L && e.setAttribute("transform", L))),
        Math.abs(T) > 90 && Math.abs(T) < 270 && (s ? (d *= -1,
            T += p <= 0 ? 180 : -180,
            p += p <= 0 ? 180 : -180) : (m *= -1,
                T += T <= 0 ? 180 : -180)),
        t = t || i.uncache,
        i.x = u - ((i.xPercent = u && (!t && i.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetWidth * i.xPercent / 100 : 0) + o,
        i.y = f - ((i.yPercent = f && (!t && i.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * i.yPercent / 100 : 0) + o,
        i.z = h + o,
        i.scaleX = be(d),
        i.scaleY = be(m),
        i.rotation = be(p) + a,
        i.rotationX = be(g) + a,
        i.rotationY = be(_) + a,
        i.skewX = T + a,
        i.skewY = S + a,
        i.transformPerspective = v + o,
        (i.zOrigin = parseFloat(c.split(" ")[2]) || 0) && (r[Jt] = en(c)),
        i.xOffset = i.yOffset = 0,
        i.force3D = At.force3D,
        i.renderTransform = i.svg ? Ou : El ? kl : Mu,
        i.uncache = 0,
        i
}, en = function (e) {
    return (e = e.split(" "))[0] + " " + e[1]
}, Sn = function (e, t, i) {
    var r = je(t);
    return be(parseFloat(t) + parseFloat(Ni(e, "x", i + "px", r))) + r
}, Mu = function (e, t) {
    t.z = "0px",
        t.rotationY = t.rotationX = "0deg",
        t.force3D = 0,
        kl(e, t)
}, Ki = "0deg", Gr = "0px", Zi = ") ", kl = function (e, t) {
    var i = t || this
        , r = i.xPercent
        , s = i.yPercent
        , o = i.x
        , a = i.y
        , l = i.z
        , c = i.rotation
        , u = i.rotationY
        , f = i.rotationX
        , h = i.skewX
        , d = i.skewY
        , m = i.scaleX
        , p = i.scaleY
        , g = i.transformPerspective
        , _ = i.force3D
        , T = i.target
        , S = i.zOrigin
        , v = ""
        , x = _ === "auto" && e && e !== 1 || _ === !0;
    if (S && (f !== Ki || u !== Ki)) {
        var C = parseFloat(u) * kr, b = Math.sin(C), M = Math.cos(C), E;
        C = parseFloat(f) * kr,
            E = Math.cos(C),
            o = Sn(T, o, b * E * -S),
            a = Sn(T, a, -Math.sin(C) * -S),
            l = Sn(T, l, M * E * -S + S)
    }
    g !== Gr && (v += "perspective(" + g + Zi),
        (r || s) && (v += "translate(" + r + "%, " + s + "%) "),
        (x || o !== Gr || a !== Gr || l !== Gr) && (v += l !== Gr || x ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Zi),
        c !== Ki && (v += "rotate(" + c + Zi),
        u !== Ki && (v += "rotateY(" + u + Zi),
        f !== Ki && (v += "rotateX(" + f + Zi),
        (h !== Ki || d !== Ki) && (v += "skew(" + h + ", " + d + Zi),
        (m !== 1 || p !== 1) && (v += "scale(" + m + ", " + p + Zi),
        T.style[ge] = v || "translate(0, 0)"
}, Ou = function (e, t) {
    var i = t || this, r = i.xPercent, s = i.yPercent, o = i.x, a = i.y, l = i.rotation, c = i.skewX, u = i.skewY, f = i.scaleX, h = i.scaleY, d = i.target, m = i.xOrigin, p = i.yOrigin, g = i.xOffset, _ = i.yOffset, T = i.forceCSS, S = parseFloat(o), v = parseFloat(a), x, C, b, M, E;
    l = parseFloat(l),
        c = parseFloat(c),
        u = parseFloat(u),
        u && (u = parseFloat(u),
            c += u,
            l += u),
        l || c ? (l *= kr,
            c *= kr,
            x = Math.cos(l) * f,
            C = Math.sin(l) * f,
            b = Math.sin(l - c) * -h,
            M = Math.cos(l - c) * h,
            c && (u *= kr,
                E = Math.tan(c - u),
                E = Math.sqrt(1 + E * E),
                b *= E,
                M *= E,
                u && (E = Math.tan(u),
                    E = Math.sqrt(1 + E * E),
                    x *= E,
                    C *= E)),
            x = be(x),
            C = be(C),
            b = be(b),
            M = be(M)) : (x = f,
                M = h,
                C = b = 0),
        (S && !~(o + "").indexOf("px") || v && !~(a + "").indexOf("px")) && (S = Ni(d, "x", o, "px"),
            v = Ni(d, "y", a, "px")),
        (m || p || g || _) && (S = be(S + m - (m * x + p * b) + g),
            v = be(v + p - (m * C + p * M) + _)),
        (r || s) && (E = d.getBBox(),
            S = be(S + r / 100 * E.width),
            v = be(v + s / 100 * E.height)),
        E = "matrix(" + x + "," + C + "," + b + "," + M + "," + S + "," + v + ")",
        d.setAttribute("transform", E),
        T && (d.style[ge] = E)
}, ku = function (e, t, i, r, s) {
    var o = 360, a = Re(s), l = parseFloat(s) * (a && ~s.indexOf("rad") ? Qi : 1), c = l - r, u = r + c + "deg", f, h;
    return a && (f = s.split("_")[1],
        f === "short" && (c %= o,
            c !== c % (o / 2) && (c += c < 0 ? o : -o)),
        f === "cw" && c < 0 ? c = (c + o * Jo) % o - ~~(c / o) * o : f === "ccw" && c > 0 && (c = (c - o * Jo) % o - ~~(c / o) * o)),
        e._pt = h = new gt(e._pt, t, i, r, c, hu),
        h.e = u,
        h.u = "deg",
        e._props.push(i),
        h
}, na = function (e, t) {
    for (var i in t)
        e[i] = t[i];
    return e
}, Au = function (e, t, i) {
    var r = na({}, i._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = i.style, a, l, c, u, f, h, d, m;
    r.svg ? (c = i.getAttribute("transform"),
        i.setAttribute("transform", ""),
        o[ge] = t,
        a = gs(i, 1),
        ps(i, ge),
        i.setAttribute("transform", c)) : (c = getComputedStyle(i)[ge],
            o[ge] = t,
            a = gs(i, 1),
            o[ge] = c);
    for (l in bi)
        c = r[l],
            u = a[l],
            c !== u && s.indexOf(l) < 0 && (d = je(c),
                m = je(u),
                f = d !== m ? Ni(i, l, c, m) : parseFloat(c),
                h = parseFloat(u),
                e._pt = new gt(e._pt, a, l, f, h - f, Un),
                e._pt.u = m || 0,
                e._props.push(l));
    na(a, r)
};
mt("padding,margin,Width,Radius", function (n, e) {
    var t = "Top"
        , i = "Right"
        , r = "Bottom"
        , s = "Left"
        , o = (e < 3 ? [t, i, r, s] : [t + s, t + i, r + i, r + s]).map(function (a) {
            return e < 2 ? n + a : "border" + a + n
        });
    Js[e > 1 ? "border" + n : n] = function (a, l, c, u, f) {
        var h, d;
        if (arguments.length < 4)
            return h = o.map(function (m) {
                return gi(a, m, c)
            }),
                d = h.join(" "),
                d.split(h[0]).length === 5 ? h[0] : d;
        h = (u + "").split(" "),
            d = {},
            o.forEach(function (m, p) {
                return d[m] = h[p] = h[p] || h[(p - 1) / 2 | 0]
            }),
            a.init(l, d, f)
    }
});
var Al = {
    name: "css",
    register: Kn,
    targetTest: function (e) {
        return e.style && e.nodeType
    },
    init: function (e, t, i, r, s) {
        var o = this._props, a = e.style, l = i.vars.startAt, c, u, f, h, d, m, p, g, _, T, S, v, x, C, b, M;
        Co || Kn(),
            this.styles = this.styles || xl(e),
            M = this.styles.props,
            this.tween = i;
        for (p in t)
            if (p !== "autoRound" && (u = t[p],
                !(Pt[p] && hl(p, t, i, r, e, s)))) {
                if (d = typeof u,
                    m = Js[p],
                    d === "function" && (u = u.call(i, r, e, s),
                        d = typeof u),
                    d === "string" && ~u.indexOf("random(") && (u = ds(u)),
                    m)
                    m(this, e, p, u, i) && (b = 1);
                else if (p.substr(0, 2) === "--")
                    c = (getComputedStyle(e).getPropertyValue(p) + "").trim(),
                        u += "",
                        Ri.lastIndex = 0,
                        Ri.test(c) || (g = je(c),
                            _ = je(u)),
                        _ ? g !== _ && (c = Ni(e, p, c, _) + _) : g && (u += g),
                        this.add(a, "setProperty", c, u, r, s, 0, 0, p),
                        o.push(p),
                        M.push(p, 0, a[p]);
                else if (d !== "undefined") {
                    if (l && p in l ? (c = typeof l[p] == "function" ? l[p].call(i, r, e, s) : l[p],
                        Re(c) && ~c.indexOf("random(") && (c = ds(c)),
                        je(c + "") || (c += At.units[p] || je(gi(e, p)) || ""),
                        (c + "").charAt(1) === "=" && (c = gi(e, p))) : c = gi(e, p),
                        h = parseFloat(c),
                        T = d === "string" && u.charAt(1) === "=" && u.substr(0, 2),
                        T && (u = u.substr(2)),
                        f = parseFloat(u),
                        p in ai && (p === "autoAlpha" && (h === 1 && gi(e, "visibility") === "hidden" && f && (h = 0),
                            M.push("visibility", 0, a.visibility),
                            ki(this, a, "visibility", h ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)),
                            p !== "scale" && p !== "transform" && (p = ai[p],
                                ~p.indexOf(",") && (p = p.split(",")[0]))),
                        S = p in bi,
                        S) {
                        if (this.styles.save(p),
                            v || (x = e._gsap,
                                x.renderTransform && !t.parseTransform || gs(e, t.parseTransform),
                                C = t.smoothOrigin !== !1 && x.smooth,
                                v = this._pt = new gt(this._pt, a, ge, 0, 1, x.renderTransform, x, 0, -1),
                                v.dep = 1),
                            p === "scale")
                            this._pt = new gt(this._pt, x, "scaleY", x.scaleY, (T ? Mr(x.scaleY, T + f) : f) - x.scaleY || 0, Un),
                                this._pt.u = 0,
                                o.push("scaleY", p),
                                p += "X";
                        else if (p === "transformOrigin") {
                            M.push(Jt, 0, a[Jt]),
                                u = Cu(u),
                                x.svg ? Zn(e, u, 0, C, 0, this) : (_ = parseFloat(u.split(" ")[2]) || 0,
                                    _ !== x.zOrigin && ki(this, x, "zOrigin", x.zOrigin, _),
                                    ki(this, a, p, en(c), en(u)));
                            continue
                        } else if (p === "svgOrigin") {
                            Zn(e, u, 1, C, 0, this);
                            continue
                        } else if (p in Ml) {
                            ku(this, x, p, h, T ? Mr(h, T + u) : u);
                            continue
                        } else if (p === "smoothOrigin") {
                            ki(this, x, "smooth", x.smooth, u);
                            continue
                        } else if (p === "force3D") {
                            x[p] = u;
                            continue
                        } else if (p === "transform") {
                            Au(this, u, e);
                            continue
                        }
                    } else
                        p in a || (p = Nr(p) || p);
                    if (S || (f || f === 0) && (h || h === 0) && !fu.test(u) && p in a)
                        g = (c + "").substr((h + "").length),
                            f || (f = 0),
                            _ = je(u) || (p in At.units ? At.units[p] : g),
                            g !== _ && (h = Ni(e, p, c, _)),
                            this._pt = new gt(this._pt, S ? x : a, p, h, (T ? Mr(h, T + f) : f) - h, !S && (_ === "px" || p === "zIndex") && t.autoRound !== !1 ? mu : Un),
                            this._pt.u = _ || 0,
                            g !== _ && _ !== "%" && (this._pt.b = c,
                                this._pt.r = pu);
                    else if (p in a)
                        Eu.call(this, e, p, c, T ? T + u : u);
                    else if (p in e)
                        this.add(e, p, c || e[p], T ? T + u : u, r, s);
                    else if (p !== "parseTransform") {
                        _o(p, u);
                        continue
                    }
                    S || (p in a ? M.push(p, 0, a[p]) : M.push(p, 1, c || e[p])),
                        o.push(p)
                }
            }
        b && wl(this)
    },
    render: function (e, t) {
        if (t.tween._time || !Po())
            for (var i = t._pt; i;)
                i.r(e, i.d),
                    i = i._next;
        else
            t.styles.revert()
    },
    get: gi,
    aliases: ai,
    getSetter: function (e, t, i) {
        var r = ai[t];
        return r && r.indexOf(",") < 0 && (t = r),
            t in bi && t !== Jt && (e._gsap.x || gi(e, "x")) ? i && Qo === i ? t === "scale" ? wu : vu : (Qo = i || {}) && (t === "scale" ? yu : Tu) : e.style && !po(e.style[t]) ? gu : ~t.indexOf("-") ? _u : xo(e, t)
    },
    core: {
        _removeProperty: ps,
        _getMatrix: Oo
    }
};
_t.utils.checkPrefix = Nr;
_t.core.getStyleSaver = xl;
(function (n, e, t, i) {
    var r = mt(n + "," + e + "," + t, function (s) {
        bi[s] = 1
    });
    mt(e, function (s) {
        At.units[s] = "deg",
            Ml[s] = 1
    }),
        ai[r[13]] = n + "," + e,
        mt(i, function (s) {
            var o = s.split(":");
            ai[o[1]] = r[o[0]]
        })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
mt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (n) {
    At.units[n] = "px"
});
_t.registerPlugin(Al);
var J = _t.registerPlugin(Al) || _t;
J.core.Tween;
function oa(n, e) {
    for (var t = 0; t < e.length; t++) {
        var i = e[t];
        i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(n, i.key, i)
    }
}
function Lu(n, e, t) {
    return e && oa(n.prototype, e),
        t && oa(n, t),
        n
}
/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var $e, Qn, kt, Ai, Li, Ar, Ll, Ji, ts, Dl, vi, Kt, Il, Rl = function () {
    return $e || typeof window < "u" && ($e = window.gsap) && $e.registerPlugin && $e
}, zl = 1, Er = [], j = [], ci = [], is = Date.now, Jn = function (e, t) {
    return t
}, Du = function () {
    var e = ts.core
        , t = e.bridge || {}
        , i = e._scrollers
        , r = e._proxies;
    i.push.apply(i, j),
        r.push.apply(r, ci),
        j = i,
        ci = r,
        Jn = function (o, a) {
            return t[o](a)
        }
}, zi = function (e, t) {
    return ~ci.indexOf(e) && ci[ci.indexOf(e) + 1][t]
}, rs = function (e) {
    return !!~Dl.indexOf(e)
}, it = function (e, t, i, r, s) {
    return e.addEventListener(t, i, {
        passive: !r,
        capture: !!s
    })
}, tt = function (e, t, i, r) {
    return e.removeEventListener(t, i, !!r)
}, Ss = "scrollLeft", bs = "scrollTop", eo = function () {
    return vi && vi.isPressed || j.cache++
}, tn = function (e, t) {
    var i = function r(s) {
        if (s || s === 0) {
            zl && (kt.history.scrollRestoration = "manual");
            var o = vi && vi.isPressed;
            s = r.v = Math.round(s) || (vi && vi.iOS ? 1 : 0),
                e(s),
                r.cacheID = j.cache,
                o && Jn("ss", s)
        } else
            (t || j.cache !== r.cacheID || Jn("ref")) && (r.cacheID = j.cache,
                r.v = e());
        return r.v + r.offset
    };
    return i.offset = 0,
        e && i
}, ot = {
    s: Ss,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: tn(function (n) {
        return arguments.length ? kt.scrollTo(n, Ae.sc()) : kt.pageXOffset || Ai[Ss] || Li[Ss] || Ar[Ss] || 0
    })
}, Ae = {
    s: bs,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: ot,
    sc: tn(function (n) {
        return arguments.length ? kt.scrollTo(ot.sc(), n) : kt.pageYOffset || Ai[bs] || Li[bs] || Ar[bs] || 0
    })
}, ft = function (e, t) {
    return (t && t._ctx && t._ctx.selector || $e.utils.toArray)(e)[0] || (typeof e == "string" && $e.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
}, Vi = function (e, t) {
    var i = t.s
        , r = t.sc;
    rs(e) && (e = Ai.scrollingElement || Li);
    var s = j.indexOf(e)
        , o = r === Ae.sc ? 1 : 2;
    !~s && (s = j.push(e) - 1),
        j[s + o] || it(e, "scroll", eo);
    var a = j[s + o]
        , l = a || (j[s + o] = tn(zi(e, i), !0) || (rs(e) ? r : tn(function (c) {
            return arguments.length ? e[i] = c : e[i]
        })));
    return l.target = e,
        a || (l.smooth = $e.getProperty(e, "scrollBehavior") === "smooth"),
        l
}, to = function (e, t, i) {
    var r = e
        , s = e
        , o = is()
        , a = o
        , l = t || 50
        , c = Math.max(500, l * 3)
        , u = function (m, p) {
            var g = is();
            p || g - o > l ? (s = r,
                r = m,
                a = o,
                o = g) : i ? r += m : r = s + (m - s) / (g - a) * (o - a)
        }
        , f = function () {
            s = r = i ? 0 : r,
                a = o = 0
        }
        , h = function (m) {
            var p = a
                , g = s
                , _ = is();
            return (m || m === 0) && m !== r && u(m),
                o === a || _ - a > c ? 0 : (r + (i ? g : -g)) / ((i ? _ : o) - p) * 1e3
        };
    return {
        update: u,
        reset: f,
        getVelocity: h
    }
}, Wr = function (e, t) {
    return t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
}, aa = function (e) {
    var t = Math.max.apply(Math, e)
        , i = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(i) ? t : i
}, Fl = function () {
    ts = $e.core.globals().ScrollTrigger,
        ts && ts.core && Du()
}, Nl = function (e) {
    return $e = e || Rl(),
        $e && typeof document < "u" && document.body && (kt = window,
            Ai = document,
            Li = Ai.documentElement,
            Ar = Ai.body,
            Dl = [kt, Ai, Li, Ar],
            $e.utils.clamp,
            Il = $e.core.context || function () { }
            ,
            Ji = "onpointerenter" in Ar ? "pointer" : "mouse",
            Ll = Oe.isTouch = kt.matchMedia && kt.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in kt || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
            Kt = Oe.eventTypes = ("ontouchstart" in Li ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Li ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
            setTimeout(function () {
                return zl = 0
            }, 500),
            Fl(),
            Qn = 1),
        Qn
};
ot.op = Ae;
j.cache = 0;
var Oe = function () {
    function n(t) {
        this.init(t)
    }
    var e = n.prototype;
    return e.init = function (i) {
        Qn || Nl($e) || console.warn("Please gsap.registerPlugin(Observer)"),
            ts || Fl();
        var r = i.tolerance
            , s = i.dragMinimum
            , o = i.type
            , a = i.target
            , l = i.lineHeight
            , c = i.debounce
            , u = i.preventDefault
            , f = i.onStop
            , h = i.onStopDelay
            , d = i.ignore
            , m = i.wheelSpeed
            , p = i.event
            , g = i.onDragStart
            , _ = i.onDragEnd
            , T = i.onDrag
            , S = i.onPress
            , v = i.onRelease
            , x = i.onRight
            , C = i.onLeft
            , b = i.onUp
            , M = i.onDown
            , E = i.onChangeX
            , A = i.onChangeY
            , k = i.onChange
            , O = i.onToggleX
            , D = i.onToggleY
            , I = i.onHover
            , B = i.onHoverEnd
            , H = i.onMove
            , L = i.ignoreCheck
            , V = i.isNormalizer
            , $ = i.onGestureStart
            , y = i.onGestureEnd
            , ne = i.onWheel
            , ze = i.onEnable
            , vt = i.onDisable
            , _e = i.onClick
            , Fe = i.scrollSpeed
            , Qe = i.capture
            , xe = i.allowClicks
            , Je = i.lockAxis
            , Ge = i.onLockAxis;
        this.target = a = ft(a) || Li,
            this.vars = i,
            d && (d = $e.utils.toArray(d)),
            r = r || 1e-9,
            s = s || 0,
            m = m || 1,
            Fe = Fe || 1,
            o = o || "wheel,touch,pointer",
            c = c !== !1,
            l || (l = parseFloat(kt.getComputedStyle(Ar).lineHeight) || 22);
        var xi, lt, ei, re, Ee, ct, wt, P = this, yt = 0, fi = 0, Yi = Vi(a, ot), Ce = Vi(a, Ae), Hi = Yi(), $i = Ce(), Br = ~o.indexOf("touch") && !~o.indexOf("pointer") && Kt[0] === "pointerdown", Ne = rs(a), Te = a.ownerDocument || Ai, Gt = [0, 0, 0], Wt = [0, 0, 0], Gi = 0, hi = function () {
            return Gi = is()
        }, ti = function (N, oe) {
            return (P.event = N) && d && ~d.indexOf(N.target) || oe && Br && N.pointerType !== "touch" || L && L(N, oe)
        }, ut = function () {
            P._vx.reset(),
                P._vy.reset(),
                lt.pause(),
                f && f(P)
        }, Wi = function () {
            var N = P.deltaX = aa(Gt)
                , oe = P.deltaY = aa(Wt)
                , ve = Math.abs(N) >= r
                , R = Math.abs(oe) >= r;
            k && (ve || R) && k(P, N, oe, Gt, Wt),
                ve && (x && P.deltaX > 0 && x(P),
                    C && P.deltaX < 0 && C(P),
                    E && E(P),
                    O && P.deltaX < 0 != yt < 0 && O(P),
                    yt = P.deltaX,
                    Gt[0] = Gt[1] = Gt[2] = 0),
                R && (M && P.deltaY > 0 && M(P),
                    b && P.deltaY < 0 && b(P),
                    A && A(P),
                    D && P.deltaY < 0 != fi < 0 && D(P),
                    fi = P.deltaY,
                    Wt[0] = Wt[1] = Wt[2] = 0),
                (re || ei) && (H && H(P),
                    ei && (T(P),
                        ei = !1),
                    re = !1),
                ct && !(ct = !1) && Ge && Ge(P),
                Ee && (ne(P),
                    Ee = !1),
                xi = 0
        }, mr = function (N, oe, ve) {
            Gt[ve] += N,
                Wt[ve] += oe,
                P._vx.update(N),
                P._vy.update(oe),
                c ? xi || (xi = requestAnimationFrame(Wi)) : Wi()
        }, gr = function (N, oe) {
            Je && !wt && (P.axis = wt = Math.abs(N) > Math.abs(oe) ? "x" : "y",
                ct = !0),
                wt !== "y" && (Gt[2] += N,
                    P._vx.update(N, !0)),
                wt !== "x" && (Wt[2] += oe,
                    P._vy.update(oe, !0)),
                c ? xi || (xi = requestAnimationFrame(Wi)) : Wi()
        }, Xi = function (N) {
            if (!ti(N, 1)) {
                N = Wr(N, u);
                var oe = N.clientX
                    , ve = N.clientY
                    , R = oe - P.x
                    , Q = ve - P.y
                    , Y = P.isDragging;
                P.x = oe,
                    P.y = ve,
                    (Y || Math.abs(P.startX - oe) >= s || Math.abs(P.startY - ve) >= s) && (T && (ei = !0),
                        Y || (P.isDragging = !0),
                        gr(R, Q),
                        Y || g && g(P))
            }
        }, Ei = P.onPress = function (X) {
            ti(X, 1) || X && X.button || (P.axis = wt = null,
                lt.pause(),
                P.isPressed = !0,
                X = Wr(X),
                yt = fi = 0,
                P.startX = P.x = X.clientX,
                P.startY = P.y = X.clientY,
                P._vx.reset(),
                P._vy.reset(),
                it(V ? a : Te, Kt[1], Xi, u, !0),
                P.deltaX = P.deltaY = 0,
                S && S(P))
        }
            , Ci = P.onRelease = function (X) {
                if (!ti(X, 1)) {
                    tt(V ? a : Te, Kt[1], Xi, !0);
                    var N = !isNaN(P.y - P.startY)
                        , oe = P.isDragging && (Math.abs(P.x - P.startX) > 3 || Math.abs(P.y - P.startY) > 3)
                        , ve = Wr(X);
                    !oe && N && (P._vx.reset(),
                        P._vy.reset(),
                        u && xe && $e.delayedCall(.08, function () {
                            if (is() - Gi > 300 && !X.defaultPrevented) {
                                if (X.target.click)
                                    X.target.click();
                                else if (Te.createEvent) {
                                    var R = Te.createEvent("MouseEvents");
                                    R.initMouseEvent("click", !0, !0, kt, 1, ve.screenX, ve.screenY, ve.clientX, ve.clientY, !1, !1, !1, !1, 0, null),
                                        X.target.dispatchEvent(R)
                                }
                            }
                        })),
                        P.isDragging = P.isGesturing = P.isPressed = !1,
                        f && !V && lt.restart(!0),
                        _ && oe && _(P),
                        v && v(P, oe)
                }
            }
            , ee = function (N) {
                return N.touches && N.touches.length > 1 && (P.isGesturing = !0) && $(N, P.isDragging)
            }, qi = function () {
                return (P.isGesturing = !1) || y(P)
            }, Xt = function (N) {
                if (!ti(N)) {
                    var oe = Yi()
                        , ve = Ce();
                    mr((oe - Hi) * Fe, (ve - $i) * Fe, 1),
                        Hi = oe,
                        $i = ve,
                        f && lt.restart(!0)
                }
            }, qt = function (N) {
                if (!ti(N)) {
                    N = Wr(N, u),
                        ne && (Ee = !0);
                    var oe = (N.deltaMode === 1 ? l : N.deltaMode === 2 ? kt.innerHeight : 1) * m;
                    mr(N.deltaX * oe, N.deltaY * oe, 0),
                        f && !V && lt.restart(!0)
                }
            }, Ut = function (N) {
                if (!ti(N)) {
                    var oe = N.clientX
                        , ve = N.clientY
                        , R = oe - P.x
                        , Q = ve - P.y;
                    P.x = oe,
                        P.y = ve,
                        re = !0,
                        (R || Q) && gr(R, Q)
                }
            }, Ui = function (N) {
                P.event = N,
                    I(P)
            }, _r = function (N) {
                P.event = N,
                    B(P)
            }, pi = function (N) {
                return ti(N) || Wr(N, u) && _e(P)
            };
        lt = P._dc = $e.delayedCall(h || .25, ut).pause(),
            P.deltaX = P.deltaY = 0,
            P._vx = to(0, 50, !0),
            P._vy = to(0, 50, !0),
            P.scrollX = Yi,
            P.scrollY = Ce,
            P.isDragging = P.isGesturing = P.isPressed = !1,
            Il(this),
            P.enable = function (X) {
                return P.isEnabled || (it(Ne ? Te : a, "scroll", eo),
                    o.indexOf("scroll") >= 0 && it(Ne ? Te : a, "scroll", Xt, u, Qe),
                    o.indexOf("wheel") >= 0 && it(a, "wheel", qt, u, Qe),
                    (o.indexOf("touch") >= 0 && Ll || o.indexOf("pointer") >= 0) && (it(a, Kt[0], Ei, u, Qe),
                        it(Te, Kt[2], Ci),
                        it(Te, Kt[3], Ci),
                        xe && it(a, "click", hi, !1, !0),
                        _e && it(a, "click", pi),
                        $ && it(Te, "gesturestart", ee),
                        y && it(Te, "gestureend", qi),
                        I && it(a, Ji + "enter", Ui),
                        B && it(a, Ji + "leave", _r),
                        H && it(a, Ji + "move", Ut)),
                    P.isEnabled = !0,
                    X && X.type && Ei(X),
                    ze && ze(P)),
                    P
            }
            ,
            P.disable = function () {
                P.isEnabled && (Er.filter(function (X) {
                    return X !== P && rs(X.target)
                }).length || tt(Ne ? Te : a, "scroll", eo),
                    P.isPressed && (P._vx.reset(),
                        P._vy.reset(),
                        tt(V ? a : Te, Kt[1], Xi, !0)),
                    tt(Ne ? Te : a, "scroll", Xt, Qe),
                    tt(a, "wheel", qt, Qe),
                    tt(a, Kt[0], Ei, Qe),
                    tt(Te, Kt[2], Ci),
                    tt(Te, Kt[3], Ci),
                    tt(a, "click", hi, !0),
                    tt(a, "click", pi),
                    tt(Te, "gesturestart", ee),
                    tt(Te, "gestureend", qi),
                    tt(a, Ji + "enter", Ui),
                    tt(a, Ji + "leave", _r),
                    tt(a, Ji + "move", Ut),
                    P.isEnabled = P.isPressed = P.isDragging = !1,
                    vt && vt(P))
            }
            ,
            P.kill = P.revert = function () {
                P.disable();
                var X = Er.indexOf(P);
                X >= 0 && Er.splice(X, 1),
                    vi === P && (vi = 0)
            }
            ,
            Er.push(P),
            V && rs(a) && (vi = P),
            P.enable(p)
    }
        ,
        Lu(n, [{
            key: "velocityX",
            get: function () {
                return this._vx.getVelocity()
            }
        }, {
            key: "velocityY",
            get: function () {
                return this._vy.getVelocity()
            }
        }]),
        n
}();
Oe.version = "3.12.2";
Oe.create = function (n) {
    return new Oe(n)
}
    ;
Oe.register = Nl;
Oe.getAll = function () {
    return Er.slice()
}
    ;
Oe.getById = function (n) {
    return Er.filter(function (e) {
        return e.vars.id === n
    })[0]
}
    ;
Rl() && $e.registerPlugin(Oe);
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var z, Tr, K, pe, Qt, de, Vl, rn, sn, Cr, Vs, xs, qe, dn, io, rt, la, ca, Sr, Bl, bn, Yl, xt, Hl, $l, Gl, Pi, ro, ko, Lr, Ao, xn, Es = 1, nt = Date.now, En = nt(), Ht = 0, jr = 0, ua = function (e, t, i) {
    var r = Ct(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return i["_" + t + "Clamp"] = r,
        r ? e.substr(6, e.length - 7) : e
}, da = function (e, t) {
    return t && (!Ct(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
}, Iu = function n() {
    return jr && requestAnimationFrame(n)
}, fa = function () {
    return dn = 1
}, ha = function () {
    return dn = 0
}, ni = function (e) {
    return e
}, Kr = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, Wl = function () {
    return typeof window < "u"
}, Xl = function () {
    return z || Wl() && (z = window.gsap) && z.registerPlugin && z
}, dr = function (e) {
    return !!~Vl.indexOf(e)
}, ql = function (e) {
    return (e === "Height" ? Ao : K["inner" + e]) || Qt["client" + e] || de["client" + e]
}, Ul = function (e) {
    return zi(e, "getBoundingClientRect") || (dr(e) ? function () {
        return Ws.width = K.innerWidth,
            Ws.height = Ao,
            Ws
    }
        : function () {
            return _i(e)
        }
    )
}, Ru = function (e, t, i) {
    var r = i.d
        , s = i.d2
        , o = i.a;
    return (o = zi(e, "getBoundingClientRect")) ? function () {
        return o()[r]
    }
        : function () {
            return (t ? ql(s) : e["client" + s]) || 0
        }
}, zu = function (e, t) {
    return !t || ~ci.indexOf(e) ? Ul(e) : function () {
        return Ws
    }
}, wi = function (e, t) {
    var i = t.s
        , r = t.d2
        , s = t.d
        , o = t.a;
    return Math.max(0, (i = "scroll" + r) && (o = zi(e, i)) ? o() - Ul(e)()[s] : dr(e) ? (Qt[i] || de[i]) - ql(r) : e[i] - e["offset" + r])
}, Cs = function (e, t) {
    for (var i = 0; i < Sr.length; i += 3)
        (!t || ~t.indexOf(Sr[i + 1])) && e(Sr[i], Sr[i + 1], Sr[i + 2])
}, Ct = function (e) {
    return typeof e == "string"
}, at = function (e) {
    return typeof e == "function"
}, Bs = function (e) {
    return typeof e == "number"
}, er = function (e) {
    return typeof e == "object"
}, Xr = function (e, t, i) {
    return e && e.progress(t ? 0 : 1) && i && e.pause()
}, Cn = function (e, t) {
    if (e.enabled) {
        var i = t(e);
        i && i.totalTime && (e.callbackAnimation = i)
    }
}, wr = Math.abs, jl = "left", Kl = "top", Lo = "right", Do = "bottom", ar = "width", lr = "height", ss = "Right", ns = "Left", os = "Top", as = "Bottom", Pe = "padding", Ft = "margin", Vr = "Width", Io = "Height", Ye = "px", Nt = function (e) {
    return K.getComputedStyle(e)
}, Fu = function (e) {
    var t = Nt(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative"
}, pa = function (e, t) {
    for (var i in t)
        i in e || (e[i] = t[i]);
    return e
}, _i = function (e, t) {
    var i = t && Nt(e)[io] !== "matrix(1, 0, 0, 1, 0, 0)" && z.to(e, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
        , r = e.getBoundingClientRect();
    return i && i.progress(0).kill(),
        r
}, so = function (e, t) {
    var i = t.d2;
    return e["offset" + i] || e["client" + i] || 0
}, Zl = function (e) {
    var t = [], i = e.labels, r = e.duration(), s;
    for (s in i)
        t.push(i[s] / r);
    return t
}, Nu = function (e) {
    return function (t) {
        return z.utils.snap(Zl(e), t)
    }
}, Ro = function (e) {
    var t = z.utils.snap(e)
        , i = Array.isArray(e) && e.slice(0).sort(function (r, s) {
            return r - s
        });
    return i ? function (r, s, o) {
        o === void 0 && (o = .001);
        var a;
        if (!s)
            return t(r);
        if (s > 0) {
            for (r -= o,
                a = 0; a < i.length; a++)
                if (i[a] >= r)
                    return i[a];
            return i[a - 1]
        } else
            for (a = i.length,
                r += o; a--;)
                if (i[a] <= r)
                    return i[a];
        return i[0]
    }
        : function (r, s, o) {
            o === void 0 && (o = .001);
            var a = t(r);
            return !s || Math.abs(a - r) < o || a - r < 0 == s < 0 ? a : t(s < 0 ? r - e : r + e)
        }
}, Vu = function (e) {
    return function (t, i) {
        return Ro(Zl(e))(t, i.direction)
    }
}, Ps = function (e, t, i, r) {
    return i.split(",").forEach(function (s) {
        return e(t, s, r)
    })
}, Ie = function (e, t, i, r, s) {
    return e.addEventListener(t, i, {
        passive: !r,
        capture: !!s
    })
}, De = function (e, t, i, r) {
    return e.removeEventListener(t, i, !!r)
}, Ms = function (e, t, i) {
    i = i && i.wheelHandler,
        i && (e(t, "wheel", i),
            e(t, "touchmove", i))
}, ma = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, Os = {
    toggleActions: "play",
    anticipatePin: 0
}, nn = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, Ys = function (e, t) {
    if (Ct(e)) {
        var i = e.indexOf("=")
            , r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (r *= t / 100),
            e = e.substr(0, i - 1)),
            e = r + (e in nn ? nn[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
    }
    return e
}, ks = function (e, t, i, r, s, o, a, l) {
    var c = s.startColor
        , u = s.endColor
        , f = s.fontSize
        , h = s.indent
        , d = s.fontWeight
        , m = pe.createElement("div")
        , p = dr(i) || zi(i, "pinType") === "fixed"
        , g = e.indexOf("scroller") !== -1
        , _ = p ? de : i
        , T = e.indexOf("start") !== -1
        , S = T ? c : u
        , v = "border-color:" + S + ";font-size:" + f + ";color:" + S + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return v += "position:" + ((g || l) && p ? "fixed;" : "absolute;"),
        (g || l || !p) && (v += (r === Ae ? Lo : Do) + ":" + (o + parseFloat(h)) + "px;"),
        a && (v += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
        m._isStart = T,
        m.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        m.style.cssText = v,
        m.innerText = t || t === 0 ? e + "-" + t : e,
        _.children[0] ? _.insertBefore(m, _.children[0]) : _.appendChild(m),
        m._offset = m["offset" + r.op.d2],
        Hs(m, 0, r, T),
        m
}, Hs = function (e, t, i, r) {
    var s = {
        display: "block"
    }
        , o = i[r ? "os2" : "p2"]
        , a = i[r ? "p2" : "os2"];
    e._isFlipped = r,
        s[i.a + "Percent"] = r ? -100 : 0,
        s[i.a] = r ? "1px" : 0,
        s["border" + o + Vr] = 1,
        s["border" + a + Vr] = 0,
        s[i.p] = t + "px",
        z.set(e, s)
}, q = [], no = {}, _s, ga = function () {
    return nt() - Ht > 34 && (_s || (_s = requestAnimationFrame(Ti)))
}, yr = function () {
    (!xt || !xt.isPressed || xt.startX > de.clientWidth) && (j.cache++,
        xt ? _s || (_s = requestAnimationFrame(Ti)) : Ti(),
        Ht || hr("scrollStart"),
        Ht = nt())
}, Pn = function () {
    Gl = K.innerWidth,
        $l = K.innerHeight
}, Zr = function () {
    j.cache++,
        !qe && !Yl && !pe.fullscreenElement && !pe.webkitFullscreenElement && (!Hl || Gl !== K.innerWidth || Math.abs(K.innerHeight - $l) > K.innerHeight * .25) && rn.restart(!0)
}, fr = {}, Bu = [], Ql = function n() {
    return De(G, "scrollEnd", n) || ir(!0)
}, hr = function (e) {
    return fr[e] && fr[e].map(function (t) {
        return t()
    }) || Bu
}, Et = [], Jl = function (e) {
    for (var t = 0; t < Et.length; t += 5)
        (!e || Et[t + 4] && Et[t + 4].query === e) && (Et[t].style.cssText = Et[t + 1],
            Et[t].getBBox && Et[t].setAttribute("transform", Et[t + 2] || ""),
            Et[t + 3].uncache = 1)
}, zo = function (e, t) {
    var i;
    for (rt = 0; rt < q.length; rt++)
        i = q[rt],
            i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
    t && Jl(t),
        t || hr("revert")
}, ec = function (e, t) {
    j.cache++,
        (t || !st) && j.forEach(function (i) {
            return at(i) && i.cacheID++ && (i.rec = 0)
        }),
        Ct(e) && (K.history.scrollRestoration = ko = e)
}, st, cr = 0, _a, Yu = function () {
    if (_a !== cr) {
        var e = _a = cr;
        requestAnimationFrame(function () {
            return e === cr && ir(!0)
        })
    }
}, tc = function () {
    de.appendChild(Lr),
        Ao = Lr.offsetHeight || K.innerHeight,
        de.removeChild(Lr)
}, ir = function (e, t) {
    if (Ht && !e) {
        Ie(G, "scrollEnd", Ql);
        return
    }
    tc(),
        st = G.isRefreshing = !0,
        j.forEach(function (r) {
            return at(r) && ++r.cacheID && (r.rec = r())
        });
    var i = hr("refreshInit");
    Bl && G.sort(),
        t || zo(),
        j.forEach(function (r) {
            at(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"),
                r(0))
        }),
        q.slice(0).forEach(function (r) {
            return r.refresh()
        }),
        q.forEach(function (r, s) {
            if (r._subPinOffset && r.pin) {
                var o = r.vars.horizontal ? "offsetWidth" : "offsetHeight"
                    , a = r.pin[o];
                r.revert(!0, 1),
                    r.adjustPinSpacing(r.pin[o] - a),
                    r.refresh()
            }
        }),
        q.forEach(function (r) {
            var s = wi(r.scroller, r._dir);
            (r.vars.end === "max" || r._endClamp && r.end > s) && r.setPositions(r.start, Math.max(r.start + 1, s), !0)
        }),
        i.forEach(function (r) {
            return r && r.render && r.render(-1)
        }),
        j.forEach(function (r) {
            at(r) && (r.smooth && requestAnimationFrame(function () {
                return r.target.style.scrollBehavior = "smooth"
            }),
                r.rec && r(r.rec))
        }),
        ec(ko, 1),
        rn.pause(),
        cr++,
        st = 2,
        Ti(2),
        q.forEach(function (r) {
            return at(r.vars.onRefresh) && r.vars.onRefresh(r)
        }),
        st = G.isRefreshing = !1,
        hr("refresh")
}, oo = 0, $s = 1, ls, Ti = function (e) {
    if (!st || e === 2) {
        G.isUpdating = !0,
            ls && ls.update(0);
        var t = q.length
            , i = nt()
            , r = i - En >= 50
            , s = t && q[0].scroll();
        if ($s = oo > s ? -1 : 1,
            st || (oo = s),
            r && (Ht && !dn && i - Ht > 200 && (Ht = 0,
                hr("scrollEnd")),
                Vs = En,
                En = i),
            $s < 0) {
            for (rt = t; rt-- > 0;)
                q[rt] && q[rt].update(0, r);
            $s = 1
        } else
            for (rt = 0; rt < t; rt++)
                q[rt] && q[rt].update(0, r);
        G.isUpdating = !1
    }
    _s = 0
}, ao = [jl, Kl, Do, Lo, Ft + as, Ft + ss, Ft + os, Ft + ns, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Gs = ao.concat([ar, lr, "boxSizing", "max" + Vr, "max" + Io, "position", Ft, Pe, Pe + os, Pe + ss, Pe + as, Pe + ns]), Hu = function (e, t, i) {
    Dr(i);
    var r = e._gsap;
    if (r.spacerIsNative)
        Dr(r.spacerState);
    else if (e._gsap.swappedIn) {
        var s = t.parentNode;
        s && (s.insertBefore(e, t),
            s.removeChild(t))
    }
    e._gsap.swappedIn = !1
}, Mn = function (e, t, i, r) {
    if (!e._gsap.swappedIn) {
        for (var s = ao.length, o = t.style, a = e.style, l; s--;)
            l = ao[s],
                o[l] = i[l];
        o.position = i.position === "absolute" ? "absolute" : "relative",
            i.display === "inline" && (o.display = "inline-block"),
            a[Do] = a[Lo] = "auto",
            o.flexBasis = i.flexBasis || "auto",
            o.overflow = "visible",
            o.boxSizing = "border-box",
            o[ar] = so(e, ot) + Ye,
            o[lr] = so(e, Ae) + Ye,
            o[Pe] = a[Ft] = a[Kl] = a[jl] = "0",
            Dr(r),
            a[ar] = a["max" + Vr] = i[ar],
            a[lr] = a["max" + Io] = i[lr],
            a[Pe] = i[Pe],
            e.parentNode !== t && (e.parentNode.insertBefore(t, e),
                t.appendChild(e)),
            e._gsap.swappedIn = !0
    }
}, $u = /([A-Z])/g, Dr = function (e) {
    if (e) {
        var t = e.t.style, i = e.length, r = 0, s, o;
        for ((e.t._gsap || z.core.getCache(e.t)).uncache = 1; r < i; r += 2)
            o = e[r + 1],
                s = e[r],
                o ? t[s] = o : t[s] && t.removeProperty(s.replace($u, "-$1").toLowerCase())
    }
}, As = function (e) {
    for (var t = Gs.length, i = e.style, r = [], s = 0; s < t; s++)
        r.push(Gs[s], i[Gs[s]]);
    return r.t = e,
        r
}, Gu = function (e, t, i) {
    for (var r = [], s = e.length, o = i ? 8 : 0, a; o < s; o += 2)
        a = e[o],
            r.push(a, a in t ? t[a] : e[o + 1]);
    return r.t = e.t,
        r
}, Ws = {
    left: 0,
    top: 0
}, va = function (e, t, i, r, s, o, a, l, c, u, f, h, d, m) {
    at(e) && (e = e(l)),
        Ct(e) && e.substr(0, 3) === "max" && (e = h + (e.charAt(4) === "=" ? Ys("0" + e.substr(3), i) : 0));
    var p = d ? d.time() : 0, g, _, T;
    if (d && d.seek(0),
        isNaN(e) || (e = +e),
        Bs(e))
        d && (e = z.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, h, e)),
            a && Hs(a, i, r, !0);
    else {
        at(t) && (t = t(l));
        var S = (e || "0").split(" "), v, x, C, b;
        T = ft(t, l) || de,
            v = _i(T) || {},
            (!v || !v.left && !v.top) && Nt(T).display === "none" && (b = T.style.display,
                T.style.display = "block",
                v = _i(T),
                b ? T.style.display = b : T.style.removeProperty("display")),
            x = Ys(S[0], v[r.d]),
            C = Ys(S[1] || "0", i),
            e = v[r.p] - c[r.p] - u + x + s - C,
            a && Hs(a, C, r, i - C < 20 || a._isStart && C > 20),
            i -= i - C
    }
    if (m && (l[m] = e || -.001,
        e < 0 && (e = 0)),
        o) {
        var M = e + i
            , E = o._isStart;
        g = "scroll" + r.d2,
            Hs(o, M, r, E && M > 20 || !E && (f ? Math.max(de[g], Qt[g]) : o.parentNode[g]) <= M + 1),
            f && (c = _i(a),
                f && (o.style[r.op.p] = c[r.op.p] - r.op.m - o._offset + Ye))
    }
    return d && T && (g = _i(T),
        d.seek(h),
        _ = _i(T),
        d._caScrollDist = g[r.p] - _[r.p],
        e = e / d._caScrollDist * h),
        d && d.seek(p),
        d ? e : Math.round(e)
}, Wu = /(webkit|moz|length|cssText|inset)/i, wa = function (e, t, i, r) {
    if (e.parentNode !== t) {
        var s = e.style, o, a;
        if (t === de) {
            e._stOrig = s.cssText,
                a = Nt(e);
            for (o in a)
                !+o && !Wu.test(o) && a[o] && typeof s[o] == "string" && o !== "0" && (s[o] = a[o]);
            s.top = i,
                s.left = r
        } else
            s.cssText = e._stOrig;
        z.core.getCache(e).uncache = 1,
            t.appendChild(e)
    }
}, ic = function (e, t, i) {
    var r = t
        , s = r;
    return function (o) {
        var a = Math.round(e());
        return a !== r && a !== s && Math.abs(a - r) > 3 && Math.abs(a - s) > 3 && (o = a,
            i && i()),
            s = r,
            r = o,
            o
    }
}, Ls = function (e, t, i) {
    var r = {};
    r[t.p] = "+=" + i,
        z.set(e, r)
}, ya = function (e, t) {
    var i = Vi(e, t)
        , r = "_scroll" + t.p2
        , s = function o(a, l, c, u, f) {
            var h = o.tween
                , d = l.onComplete
                , m = {};
            c = c || i();
            var p = ic(i, c, function () {
                h.kill(),
                    o.tween = 0
            });
            return f = u && f || 0,
                u = u || a - c,
                h && h.kill(),
                l[r] = a,
                l.modifiers = m,
                m[r] = function () {
                    return p(c + u * h.ratio + f * h.ratio * h.ratio)
                }
                ,
                l.onUpdate = function () {
                    j.cache++,
                        Ti()
                }
                ,
                l.onComplete = function () {
                    o.tween = 0,
                        d && d.call(h)
                }
                ,
                h = o.tween = z.to(e, l),
                h
        };
    return e[r] = i,
        i.wheelHandler = function () {
            return s.tween && s.tween.kill() && (s.tween = 0)
        }
        ,
        Ie(e, "wheel", i.wheelHandler),
        G.isTouch && Ie(e, "touchmove", i.wheelHandler),
        s
}, G = function () {
    function n(t, i) {
        Tr || n.register(z) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            ro(this),
            this.init(t, i)
    }
    var e = n.prototype;
    return e.init = function (i, r) {
        if (this.progress = this.start = 0,
            this.vars && this.kill(!0, !0),
            !jr) {
            this.update = this.refresh = this.kill = ni;
            return
        }
        i = pa(Ct(i) || Bs(i) || i.nodeType ? {
            trigger: i
        } : i, Os);
        var s = i, o = s.onUpdate, a = s.toggleClass, l = s.id, c = s.onToggle, u = s.onRefresh, f = s.scrub, h = s.trigger, d = s.pin, m = s.pinSpacing, p = s.invalidateOnRefresh, g = s.anticipatePin, _ = s.onScrubComplete, T = s.onSnapComplete, S = s.once, v = s.snap, x = s.pinReparent, C = s.pinSpacer, b = s.containerAnimation, M = s.fastScrollEnd, E = s.preventOverlaps, A = i.horizontal || i.containerAnimation && i.horizontal !== !1 ? ot : Ae, k = !f && f !== 0, O = ft(i.scroller || K), D = z.core.getCache(O), I = dr(O), B = ("pinType" in i ? i.pinType : zi(O, "pinType") || I && "fixed") === "fixed", H = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack], L = k && i.toggleActions.split(" "), V = "markers" in i ? i.markers : Os.markers, $ = I ? 0 : parseFloat(Nt(O)["border" + A.p2 + Vr]) || 0, y = this, ne = i.onRefreshInit && function () {
            return i.onRefreshInit(y)
        }
            , ze = Ru(O, I, A), vt = zu(O, I), _e = 0, Fe = 0, Qe = 0, xe = Vi(O, A), Je, Ge, xi, lt, ei, re, Ee, ct, wt, P, yt, fi, Yi, Ce, Hi, $i, Br, Ne, Te, Gt, Wt, Gi, hi, ti, ut, Wi, mr, gr, Xi, Ei, Ci, ee, qi, Xt, qt, Ut, Ui, _r, pi;
        if (y._startClamp = y._endClamp = !1,
            y._dir = A,
            g *= 45,
            y.scroller = O,
            y.scroll = b ? b.time.bind(b) : xe,
            lt = xe(),
            y.vars = i,
            r = r || i.animation,
            "refreshPriority" in i && (Bl = 1,
                i.refreshPriority === -9999 && (ls = y)),
            D.tweenScroll = D.tweenScroll || {
                top: ya(O, Ae),
                left: ya(O, ot)
            },
            y.tweenTo = Je = D.tweenScroll[A.p],
            y.scrubDuration = function (R) {
                qi = Bs(R) && R,
                    qi ? ee ? ee.duration(R) : ee = z.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        duration: qi,
                        paused: !0,
                        onComplete: function () {
                            return _ && _(y)
                        }
                    }) : (ee && ee.progress(1).kill(),
                        ee = 0)
            }
            ,
            r && (r.vars.lazy = !1,
                r._initted && !y.isReverted || r.vars.immediateRender !== !1 && i.immediateRender !== !1 && r.duration() && r.render(0, !0, !0),
                y.animation = r.pause(),
                r.scrollTrigger = y,
                y.scrubDuration(f),
                Ei = 0,
                l || (l = r.vars.id)),
            v && ((!er(v) || v.push) && (v = {
                snapTo: v
            }),
                "scrollBehavior" in de.style && z.set(I ? [de, Qt] : O, {
                    scrollBehavior: "auto"
                }),
                j.forEach(function (R) {
                    return at(R) && R.target === (I ? pe.scrollingElement || Qt : O) && (R.smooth = !1)
                }),
                xi = at(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? Nu(r) : v.snapTo === "labelsDirectional" ? Vu(r) : v.directional !== !1 ? function (R, Q) {
                    return Ro(v.snapTo)(R, nt() - Fe < 500 ? 0 : Q.direction)
                }
                    : z.utils.snap(v.snapTo),
                Xt = v.duration || {
                    min: .1,
                    max: 2
                },
                Xt = er(Xt) ? Cr(Xt.min, Xt.max) : Cr(Xt, Xt),
                qt = z.delayedCall(v.delay || qi / 2 || .1, function () {
                    var R = xe()
                        , Q = nt() - Fe < 500
                        , Y = Je.tween;
                    if ((Q || Math.abs(y.getVelocity()) < 10) && !Y && !dn && _e !== R) {
                        var U = (R - re) / Ce
                            , Le = r && !k ? r.totalProgress() : U
                            , te = Q ? 0 : (Le - Ci) / (nt() - Vs) * 1e3 || 0
                            , Se = z.utils.clamp(-U, 1 - U, wr(te / 2) * te / .185)
                            , et = U + (v.inertia === !1 ? 0 : Se)
                            , Ve = Cr(0, 1, xi(et, y))
                            , fe = Math.round(re + Ve * Ce)
                            , le = v
                            , jt = le.onStart
                            , he = le.onInterrupt
                            , Tt = le.onComplete;
                        if (R <= Ee && R >= re && fe !== R) {
                            if (Y && !Y._initted && Y.data <= wr(fe - R))
                                return;
                            v.inertia === !1 && (Se = Ve - U),
                                Je(fe, {
                                    duration: Xt(wr(Math.max(wr(et - Le), wr(Ve - Le)) * .185 / te / .05 || 0)),
                                    ease: v.ease || "power3",
                                    data: wr(fe - R),
                                    onInterrupt: function () {
                                        return qt.restart(!0) && he && he(y)
                                    },
                                    onComplete: function () {
                                        y.update(),
                                            _e = xe(),
                                            Ei = Ci = r && !k ? r.totalProgress() : y.progress,
                                            T && T(y),
                                            Tt && Tt(y)
                                    }
                                }, R, Se * Ce, fe - R - Se * Ce),
                                jt && jt(y, Je.tween)
                        }
                    } else
                        y.isActive && _e !== R && qt.restart(!0)
                }).pause()),
            l && (no[l] = y),
            h = y.trigger = ft(h || d !== !0 && d),
            pi = h && h._gsap && h._gsap.stRevert,
            pi && (pi = pi(y)),
            d = d === !0 ? h : ft(d),
            Ct(a) && (a = {
                targets: h,
                className: a
            }),
            d && (m === !1 || m === Ft || (m = !m && d.parentNode && d.parentNode.style && Nt(d.parentNode).display === "flex" ? !1 : Pe),
                y.pin = d,
                Ge = z.core.getCache(d),
                Ge.spacer ? Hi = Ge.pinState : (C && (C = ft(C),
                    C && !C.nodeType && (C = C.current || C.nativeElement),
                    Ge.spacerIsNative = !!C,
                    C && (Ge.spacerState = As(C))),
                    Ge.spacer = Ne = C || pe.createElement("div"),
                    Ne.classList.add("pin-spacer"),
                    l && Ne.classList.add("pin-spacer-" + l),
                    Ge.pinState = Hi = As(d)),
                i.force3D !== !1 && z.set(d, {
                    force3D: !0
                }),
                y.spacer = Ne = Ge.spacer,
                Xi = Nt(d),
                ti = Xi[m + A.os2],
                Gt = z.getProperty(d),
                Wt = z.quickSetter(d, A.a, Ye),
                Mn(d, Ne, Xi),
                Br = As(d)),
            V) {
            fi = er(V) ? pa(V, ma) : ma,
                P = ks("scroller-start", l, O, A, fi, 0),
                yt = ks("scroller-end", l, O, A, fi, 0, P),
                Te = P["offset" + A.op.d2];
            var X = ft(zi(O, "content") || O);
            ct = this.markerStart = ks("start", l, X, A, fi, Te, 0, b),
                wt = this.markerEnd = ks("end", l, X, A, fi, Te, 0, b),
                b && (_r = z.quickSetter([ct, wt], A.a, Ye)),
                !B && !(ci.length && zi(O, "fixedMarkers") === !0) && (Fu(I ? de : O),
                    z.set([P, yt], {
                        force3D: !0
                    }),
                    Wi = z.quickSetter(P, A.a, Ye),
                    gr = z.quickSetter(yt, A.a, Ye))
        }
        if (b) {
            var N = b.vars.onUpdate
                , oe = b.vars.onUpdateParams;
            b.eventCallback("onUpdate", function () {
                y.update(0, 0, 1),
                    N && N.apply(b, oe || [])
            })
        }
        if (y.previous = function () {
            return q[q.indexOf(y) - 1]
        }
            ,
            y.next = function () {
                return q[q.indexOf(y) + 1]
            }
            ,
            y.revert = function (R, Q) {
                if (!Q)
                    return y.kill(!0);
                var Y = R !== !1 || !y.enabled
                    , U = qe;
                Y !== y.isReverted && (Y && (Ut = Math.max(xe(), y.scroll.rec || 0),
                    Qe = y.progress,
                    Ui = r && r.progress()),
                    ct && [ct, wt, P, yt].forEach(function (Le) {
                        return Le.style.display = Y ? "none" : "block"
                    }),
                    Y && (qe = y,
                        y.update(Y)),
                    d && (!x || !y.isActive) && (Y ? Hu(d, Ne, Hi) : Mn(d, Ne, Nt(d), ut)),
                    Y || y.update(Y),
                    qe = U,
                    y.isReverted = Y)
            }
            ,
            y.refresh = function (R, Q, Y, U) {
                if (!((qe || !y.enabled) && !Q)) {
                    if (d && R && Ht) {
                        Ie(n, "scrollEnd", Ql);
                        return
                    }
                    !st && ne && ne(y),
                        qe = y,
                        Je.tween && !Y && (Je.tween.kill(),
                            Je.tween = 0),
                        ee && ee.pause(),
                        p && r && r.revert({
                            kill: !1
                        }).invalidate(),
                        y.isReverted || y.revert(!0, !0),
                        y._subPinOffset = !1;
                    var Le = ze(), te = vt(), Se = b ? b.duration() : wi(O, A), et = Ce <= .01, Ve = 0, fe = U || 0, le = er(Y) ? Y.end : i.end, jt = i.endTrigger || h, he = er(Y) ? Y.start : i.start || (i.start === 0 || !h ? 0 : d ? "0 0" : "0 100%"), Tt = y.pinnedContainer = i.pinnedContainer && ft(i.pinnedContainer, y), ii = h && Math.max(0, q.indexOf(y)) || 0, St = ii, Be, We, ji, ws, Xe, ke, ri, fn, Vo, Yr, si, Hr, ys;
                    for (V && er(Y) && (Hr = z.getProperty(P, A.p),
                        ys = z.getProperty(yt, A.p)); St--;)
                        ke = q[St],
                            ke.end || ke.refresh(0, 1) || (qe = y),
                            ri = ke.pin,
                            ri && (ri === h || ri === d || ri === Tt) && !ke.isReverted && (Yr || (Yr = []),
                                Yr.unshift(ke),
                                ke.revert(!0, !0)),
                            ke !== q[St] && (ii--,
                                St--);
                    for (at(he) && (he = he(y)),
                        he = ua(he, "start", y),
                        re = va(he, h, Le, A, xe(), ct, P, y, te, $, B, Se, b, y._startClamp && "_startClamp") || (d ? -.001 : 0),
                        at(le) && (le = le(y)),
                        Ct(le) && !le.indexOf("+=") && (~le.indexOf(" ") ? le = (Ct(he) ? he.split(" ")[0] : "") + le : (Ve = Ys(le.substr(2), Le),
                            le = Ct(he) ? he : (b ? z.utils.mapRange(0, b.duration(), b.scrollTrigger.start, b.scrollTrigger.end, re) : re) + Ve,
                            jt = h)),
                        le = ua(le, "end", y),
                        Ee = Math.max(re, va(le || (jt ? "100% 0" : Se), jt, Le, A, xe() + Ve, wt, yt, y, te, $, B, Se, b, y._endClamp && "_endClamp")) || -.001,
                        Ve = 0,
                        St = ii; St--;)
                        ke = q[St],
                            ri = ke.pin,
                            ri && ke.start - ke._pinPush <= re && !b && ke.end > 0 && (Be = ke.end - (y._startClamp ? Math.max(0, ke.start) : ke.start),
                                (ri === h && ke.start - ke._pinPush < re || ri === Tt) && isNaN(he) && (Ve += Be * (1 - ke.progress)),
                                ri === d && (fe += Be));
                    if (re += Ve,
                        Ee += Ve,
                        y._startClamp && (y._startClamp += Ve),
                        y._endClamp && !st && (y._endClamp = Ee || -.001,
                            Ee = Math.min(Ee, wi(O, A))),
                        Ce = Ee - re || (re -= .01) && .001,
                        et && (Qe = z.utils.clamp(0, 1, z.utils.normalize(re, Ee, Ut))),
                        y._pinPush = fe,
                        ct && Ve && (Be = {},
                            Be[A.a] = "+=" + Ve,
                            Tt && (Be[A.p] = "-=" + xe()),
                            z.set([ct, wt], Be)),
                        d)
                        Be = Nt(d),
                            ws = A === Ae,
                            ji = xe(),
                            Gi = parseFloat(Gt(A.a)) + fe,
                            !Se && Ee > 1 && (si = (I ? pe.scrollingElement || Qt : O).style,
                                si = {
                                    style: si,
                                    value: si["overflow" + A.a.toUpperCase()]
                                },
                                I && Nt(de)["overflow" + A.a.toUpperCase()] !== "scroll" && (si.style["overflow" + A.a.toUpperCase()] = "scroll")),
                            Mn(d, Ne, Be),
                            Br = As(d),
                            We = _i(d, !0),
                            fn = B && Vi(O, ws ? ot : Ae)(),
                            m && (ut = [m + A.os2, Ce + fe + Ye],
                                ut.t = Ne,
                                St = m === Pe ? so(d, A) + Ce + fe : 0,
                                St && ut.push(A.d, St + Ye),
                                Dr(ut),
                                Tt && q.forEach(function ($r) {
                                    $r.pin === Tt && $r.vars.pinSpacing !== !1 && ($r._subPinOffset = !0)
                                }),
                                B && xe(Ut)),
                            B && (Xe = {
                                top: We.top + (ws ? ji - re : fn) + Ye,
                                left: We.left + (ws ? fn : ji - re) + Ye,
                                boxSizing: "border-box",
                                position: "fixed"
                            },
                                Xe[ar] = Xe["max" + Vr] = Math.ceil(We.width) + Ye,
                                Xe[lr] = Xe["max" + Io] = Math.ceil(We.height) + Ye,
                                Xe[Ft] = Xe[Ft + os] = Xe[Ft + ss] = Xe[Ft + as] = Xe[Ft + ns] = "0",
                                Xe[Pe] = Be[Pe],
                                Xe[Pe + os] = Be[Pe + os],
                                Xe[Pe + ss] = Be[Pe + ss],
                                Xe[Pe + as] = Be[Pe + as],
                                Xe[Pe + ns] = Be[Pe + ns],
                                $i = Gu(Hi, Xe, x),
                                st && xe(0)),
                            r ? (Vo = r._initted,
                                bn(1),
                                r.render(r.duration(), !0, !0),
                                hi = Gt(A.a) - Gi + Ce + fe,
                                mr = Math.abs(Ce - hi) > 1,
                                B && mr && $i.splice($i.length - 2, 2),
                                r.render(0, !0, !0),
                                Vo || r.invalidate(!0),
                                r.parent || r.totalTime(r.totalTime()),
                                bn(0)) : hi = Ce,
                            si && (si.value ? si.style["overflow" + A.a.toUpperCase()] = si.value : si.style.removeProperty("overflow-" + A.a));
                    else if (h && xe() && !b)
                        for (We = h.parentNode; We && We !== de;)
                            We._pinOffset && (re -= We._pinOffset,
                                Ee -= We._pinOffset),
                                We = We.parentNode;
                    Yr && Yr.forEach(function ($r) {
                        return $r.revert(!1, !0)
                    }),
                        y.start = re,
                        y.end = Ee,
                        lt = ei = st ? Ut : xe(),
                        !b && !st && (lt < Ut && xe(Ut),
                            y.scroll.rec = 0),
                        y.revert(!1, !0),
                        Fe = nt(),
                        qt && (_e = -1,
                            qt.restart(!0)),
                        qe = 0,
                        r && k && (r._initted || Ui) && r.progress() !== Ui && r.progress(Ui || 0, !0).render(r.time(), !0, !0),
                        (et || Qe !== y.progress || b) && (r && !k && r.totalProgress(b && re < -.001 && !Qe ? z.utils.normalize(re, Ee, 0) : Qe, !0),
                            y.progress = et || (lt - re) / Ce === Qe ? 0 : Qe),
                        d && m && (Ne._pinOffset = Math.round(y.progress * hi)),
                        ee && ee.invalidate(),
                        isNaN(Hr) || (Hr -= z.getProperty(P, A.p),
                            ys -= z.getProperty(yt, A.p),
                            Ls(P, A, Hr),
                            Ls(ct, A, Hr - (U || 0)),
                            Ls(yt, A, ys),
                            Ls(wt, A, ys - (U || 0))),
                        et && !st && y.update(),
                        u && !st && !Yi && (Yi = !0,
                            u(y),
                            Yi = !1)
                }
            }
            ,
            y.getVelocity = function () {
                return (xe() - ei) / (nt() - Vs) * 1e3 || 0
            }
            ,
            y.endAnimation = function () {
                Xr(y.callbackAnimation),
                    r && (ee ? ee.progress(1) : r.paused() ? k || Xr(r, y.direction < 0, 1) : Xr(r, r.reversed()))
            }
            ,
            y.labelToScroll = function (R) {
                return r && r.labels && (re || y.refresh() || re) + r.labels[R] / r.duration() * Ce || 0
            }
            ,
            y.getTrailing = function (R) {
                var Q = q.indexOf(y)
                    , Y = y.direction > 0 ? q.slice(0, Q).reverse() : q.slice(Q + 1);
                return (Ct(R) ? Y.filter(function (U) {
                    return U.vars.preventOverlaps === R
                }) : Y).filter(function (U) {
                    return y.direction > 0 ? U.end <= re : U.start >= Ee
                })
            }
            ,
            y.update = function (R, Q, Y) {
                if (!(b && !Y && !R)) {
                    var U = st === !0 ? Ut : y.scroll(), Le = R ? 0 : (U - re) / Ce, te = Le < 0 ? 0 : Le > 1 ? 1 : Le || 0, Se = y.progress, et, Ve, fe, le, jt, he, Tt, ii;
                    if (Q && (ei = lt,
                        lt = b ? xe() : U,
                        v && (Ci = Ei,
                            Ei = r && !k ? r.totalProgress() : te)),
                        g && !te && d && !qe && !Es && Ht && re < U + (U - ei) / (nt() - Vs) * g && (te = 1e-4),
                        te !== Se && y.enabled) {
                        if (et = y.isActive = !!te && te < 1,
                            Ve = !!Se && Se < 1,
                            he = et !== Ve,
                            jt = he || !!te != !!Se,
                            y.direction = te > Se ? 1 : -1,
                            y.progress = te,
                            jt && !qe && (fe = te && !Se ? 0 : te === 1 ? 1 : Se === 1 ? 2 : 3,
                                k && (le = !he && L[fe + 1] !== "none" && L[fe + 1] || L[fe],
                                    ii = r && (le === "complete" || le === "reset" || le in r))),
                            E && (he || ii) && (ii || f || !r) && (at(E) ? E(y) : y.getTrailing(E).forEach(function (ji) {
                                return ji.endAnimation()
                            })),
                            k || (ee && !qe && !Es ? (ee._dp._time - ee._start !== ee._time && ee.render(ee._dp._time - ee._start),
                                ee.resetTo ? ee.resetTo("totalProgress", te, r._tTime / r._tDur) : (ee.vars.totalProgress = te,
                                    ee.invalidate().restart())) : r && r.totalProgress(te, !!(qe && (Fe || R)))),
                            d) {
                            if (R && m && (Ne.style[m + A.os2] = ti),
                                !B)
                                Wt(Kr(Gi + hi * te));
                            else if (jt) {
                                if (Tt = !R && te > Se && Ee + 1 > U && U + 1 >= wi(O, A),
                                    x)
                                    if (!R && (et || Tt)) {
                                        var St = _i(d, !0)
                                            , Be = U - re;
                                        wa(d, de, St.top + (A === Ae ? Be : 0) + Ye, St.left + (A === Ae ? 0 : Be) + Ye)
                                    } else
                                        wa(d, Ne);
                                Dr(et || Tt ? $i : Br),
                                    mr && te < 1 && et || Wt(Gi + (te === 1 && !Tt ? hi : 0))
                            }
                        }
                        v && !Je.tween && !qe && !Es && qt.restart(!0),
                            a && (he || S && te && (te < 1 || !xn)) && sn(a.targets).forEach(function (ji) {
                                return ji.classList[et || S ? "add" : "remove"](a.className)
                            }),
                            o && !k && !R && o(y),
                            jt && !qe ? (k && (ii && (le === "complete" ? r.pause().totalProgress(1) : le === "reset" ? r.restart(!0).pause() : le === "restart" ? r.restart(!0) : r[le]()),
                                o && o(y)),
                                (he || !xn) && (c && he && Cn(y, c),
                                    H[fe] && Cn(y, H[fe]),
                                    S && (te === 1 ? y.kill(!1, 1) : H[fe] = 0),
                                    he || (fe = te === 1 ? 1 : 3,
                                        H[fe] && Cn(y, H[fe]))),
                                M && !et && Math.abs(y.getVelocity()) > (Bs(M) ? M : 2500) && (Xr(y.callbackAnimation),
                                    ee ? ee.progress(1) : Xr(r, le === "reverse" ? 1 : !te, 1))) : k && o && !qe && o(y)
                    }
                    if (gr) {
                        var We = b ? U / b.duration() * (b._caScrollDist || 0) : U;
                        Wi(We + (P._isFlipped ? 1 : 0)),
                            gr(We)
                    }
                    _r && _r(-U / b.duration() * (b._caScrollDist || 0))
                }
            }
            ,
            y.enable = function (R, Q) {
                y.enabled || (y.enabled = !0,
                    Ie(O, "resize", Zr),
                    I || Ie(O, "scroll", yr),
                    ne && Ie(n, "refreshInit", ne),
                    R !== !1 && (y.progress = Qe = 0,
                        lt = ei = _e = xe()),
                    Q !== !1 && y.refresh())
            }
            ,
            y.getTween = function (R) {
                return R && Je ? Je.tween : ee
            }
            ,
            y.setPositions = function (R, Q, Y, U) {
                if (b) {
                    var Le = b.scrollTrigger
                        , te = b.duration()
                        , Se = Le.end - Le.start;
                    R = Le.start + Se * R / te,
                        Q = Le.start + Se * Q / te
                }
                y.refresh(!1, !1, {
                    start: da(R, Y && !!y._startClamp),
                    end: da(Q, Y && !!y._endClamp)
                }, U),
                    y.update()
            }
            ,
            y.adjustPinSpacing = function (R) {
                if (ut && R) {
                    var Q = ut.indexOf(A.d) + 1;
                    ut[Q] = parseFloat(ut[Q]) + R + Ye,
                        ut[1] = parseFloat(ut[1]) + R + Ye,
                        Dr(ut)
                }
            }
            ,
            y.disable = function (R, Q) {
                if (y.enabled && (R !== !1 && y.revert(!0, !0),
                    y.enabled = y.isActive = !1,
                    Q || ee && ee.pause(),
                    Ut = 0,
                    Ge && (Ge.uncache = 1),
                    ne && De(n, "refreshInit", ne),
                    qt && (qt.pause(),
                        Je.tween && Je.tween.kill() && (Je.tween = 0)),
                    !I)) {
                    for (var Y = q.length; Y--;)
                        if (q[Y].scroller === O && q[Y] !== y)
                            return;
                    De(O, "resize", Zr),
                        I || De(O, "scroll", yr)
                }
            }
            ,
            y.kill = function (R, Q) {
                y.disable(R, Q),
                    ee && !Q && ee.kill(),
                    l && delete no[l];
                var Y = q.indexOf(y);
                Y >= 0 && q.splice(Y, 1),
                    Y === rt && $s > 0 && rt--,
                    Y = 0,
                    q.forEach(function (U) {
                        return U.scroller === y.scroller && (Y = 1)
                    }),
                    Y || st || (y.scroll.rec = 0),
                    r && (r.scrollTrigger = null,
                        R && r.revert({
                            kill: !1
                        }),
                        Q || r.kill()),
                    ct && [ct, wt, P, yt].forEach(function (U) {
                        return U.parentNode && U.parentNode.removeChild(U)
                    }),
                    ls === y && (ls = 0),
                    d && (Ge && (Ge.uncache = 1),
                        Y = 0,
                        q.forEach(function (U) {
                            return U.pin === d && Y++
                        }),
                        Y || (Ge.spacer = 0)),
                    i.onKill && i.onKill(y)
            }
            ,
            q.push(y),
            y.enable(!1, !1),
            pi && pi(y),
            r && r.add && !Ce) {
            var ve = y.update;
            y.update = function () {
                y.update = ve,
                    re || Ee || y.refresh()
            }
                ,
                z.delayedCall(.01, y.update),
                Ce = .01,
                re = Ee = 0
        } else
            y.refresh();
        d && Yu()
    }
        ,
        n.register = function (i) {
            return Tr || (z = i || Xl(),
                Wl() && window.document && n.enable(),
                Tr = jr),
                Tr
        }
        ,
        n.defaults = function (i) {
            if (i)
                for (var r in i)
                    Os[r] = i[r];
            return Os
        }
        ,
        n.disable = function (i, r) {
            jr = 0,
                q.forEach(function (o) {
                    return o[r ? "kill" : "disable"](i)
                }),
                De(K, "wheel", yr),
                De(pe, "scroll", yr),
                clearInterval(xs),
                De(pe, "touchcancel", ni),
                De(de, "touchstart", ni),
                Ps(De, pe, "pointerdown,touchstart,mousedown", fa),
                Ps(De, pe, "pointerup,touchend,mouseup", ha),
                rn.kill(),
                Cs(De);
            for (var s = 0; s < j.length; s += 3)
                Ms(De, j[s], j[s + 1]),
                    Ms(De, j[s], j[s + 2])
        }
        ,
        n.enable = function () {
            if (K = window,
                pe = document,
                Qt = pe.documentElement,
                de = pe.body,
                z && (sn = z.utils.toArray,
                    Cr = z.utils.clamp,
                    ro = z.core.context || ni,
                    bn = z.core.suppressOverwrites || ni,
                    ko = K.history.scrollRestoration || "auto",
                    oo = K.pageYOffset,
                    z.core.globals("ScrollTrigger", n),
                    de)) {
                jr = 1,
                    Lr = document.createElement("div"),
                    Lr.style.height = "100vh",
                    Lr.style.position = "absolute",
                    tc(),
                    Iu(),
                    Oe.register(z),
                    n.isTouch = Oe.isTouch,
                    Pi = Oe.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
                    Ie(K, "wheel", yr),
                    Vl = [K, pe, Qt, de],
                    z.matchMedia ? (n.matchMedia = function (l) {
                        var c = z.matchMedia(), u;
                        for (u in l)
                            c.add(u, l[u]);
                        return c
                    }
                        ,
                        z.addEventListener("matchMediaInit", function () {
                            return zo()
                        }),
                        z.addEventListener("matchMediaRevert", function () {
                            return Jl()
                        }),
                        z.addEventListener("matchMedia", function () {
                            ir(0, 1),
                                hr("matchMedia")
                        }),
                        z.matchMedia("(orientation: portrait)", function () {
                            return Pn(),
                                Pn
                        })) : console.warn("Requires GSAP 3.11.0 or later"),
                    Pn(),
                    Ie(pe, "scroll", yr);
                var i = de.style, r = i.borderTopStyle, s = z.core.Animation.prototype, o, a;
                for (s.revert || Object.defineProperty(s, "revert", {
                    value: function () {
                        return this.time(-.01, !0)
                    }
                }),
                    i.borderTopStyle = "solid",
                    o = _i(de),
                    Ae.m = Math.round(o.top + Ae.sc()) || 0,
                    ot.m = Math.round(o.left + ot.sc()) || 0,
                    r ? i.borderTopStyle = r : i.removeProperty("border-top-style"),
                    xs = setInterval(ga, 250),
                    z.delayedCall(.5, function () {
                        return Es = 0
                    }),
                    Ie(pe, "touchcancel", ni),
                    Ie(de, "touchstart", ni),
                    Ps(Ie, pe, "pointerdown,touchstart,mousedown", fa),
                    Ps(Ie, pe, "pointerup,touchend,mouseup", ha),
                    io = z.utils.checkPrefix("transform"),
                    Gs.push(io),
                    Tr = nt(),
                    rn = z.delayedCall(.2, ir).pause(),
                    Sr = [pe, "visibilitychange", function () {
                        var l = K.innerWidth
                            , c = K.innerHeight;
                        pe.hidden ? (la = l,
                            ca = c) : (la !== l || ca !== c) && Zr()
                    }
                        , pe, "DOMContentLoaded", ir, K, "load", ir, K, "resize", Zr],
                    Cs(Ie),
                    q.forEach(function (l) {
                        return l.enable(0, 1)
                    }),
                    a = 0; a < j.length; a += 3)
                    Ms(De, j[a], j[a + 1]),
                        Ms(De, j[a], j[a + 2])
            }
        }
        ,
        n.config = function (i) {
            "limitCallbacks" in i && (xn = !!i.limitCallbacks);
            var r = i.syncInterval;
            r && clearInterval(xs) || (xs = r) && setInterval(ga, r),
                "ignoreMobileResize" in i && (Hl = n.isTouch === 1 && i.ignoreMobileResize),
                "autoRefreshEvents" in i && (Cs(De) || Cs(Ie, i.autoRefreshEvents || "none"),
                    Yl = (i.autoRefreshEvents + "").indexOf("resize") === -1)
        }
        ,
        n.scrollerProxy = function (i, r) {
            var s = ft(i)
                , o = j.indexOf(s)
                , a = dr(s);
            ~o && j.splice(o, a ? 6 : 2),
                r && (a ? ci.unshift(K, r, de, r, Qt, r) : ci.unshift(s, r))
        }
        ,
        n.clearMatchMedia = function (i) {
            q.forEach(function (r) {
                return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0)
            })
        }
        ,
        n.isInViewport = function (i, r, s) {
            var o = (Ct(i) ? ft(i) : i).getBoundingClientRect()
                , a = o[s ? ar : lr] * r || 0;
            return s ? o.right - a > 0 && o.left + a < K.innerWidth : o.bottom - a > 0 && o.top + a < K.innerHeight
        }
        ,
        n.positionInViewport = function (i, r, s) {
            Ct(i) && (i = ft(i));
            var o = i.getBoundingClientRect()
                , a = o[s ? ar : lr]
                , l = r == null ? a / 2 : r in nn ? nn[r] * a : ~r.indexOf("%") ? parseFloat(r) * a / 100 : parseFloat(r) || 0;
            return s ? (o.left + l) / K.innerWidth : (o.top + l) / K.innerHeight
        }
        ,
        n.killAll = function (i) {
            if (q.slice(0).forEach(function (s) {
                return s.vars.id !== "ScrollSmoother" && s.kill()
            }),
                i !== !0) {
                var r = fr.killAll || [];
                fr = {},
                    r.forEach(function (s) {
                        return s()
                    })
            }
        }
        ,
        n
}();
G.version = "3.12.2";
G.saveStyles = function (n) {
    return n ? sn(n).forEach(function (e) {
        if (e && e.style) {
            var t = Et.indexOf(e);
            t >= 0 && Et.splice(t, 5),
                Et.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), z.core.getCache(e), ro())
        }
    }) : Et
}
    ;
G.revert = function (n, e) {
    return zo(!n, e)
}
    ;
G.create = function (n, e) {
    return new G(n, e)
}
    ;
G.refresh = function (n) {
    return n ? Zr() : (Tr || G.register()) && ir(!0)
}
    ;
G.update = function (n) {
    return ++j.cache && Ti(n === !0 ? 2 : 0)
}
    ;
G.clearScrollMemory = ec;
G.maxScroll = function (n, e) {
    return wi(n, e ? ot : Ae)
}
    ;
G.getScrollFunc = function (n, e) {
    return Vi(ft(n), e ? ot : Ae)
}
    ;
G.getById = function (n) {
    return no[n]
}
    ;
G.getAll = function () {
    return q.filter(function (n) {
        return n.vars.id !== "ScrollSmoother"
    })
}
    ;
G.isScrolling = function () {
    return !!Ht
}
    ;
G.snapDirectional = Ro;
G.addEventListener = function (n, e) {
    var t = fr[n] || (fr[n] = []);
    ~t.indexOf(e) || t.push(e)
}
    ;
G.removeEventListener = function (n, e) {
    var t = fr[n]
        , i = t && t.indexOf(e);
    i >= 0 && t.splice(i, 1)
}
    ;
G.batch = function (n, e) {
    var t = [], i = {}, r = e.interval || .016, s = e.batchMax || 1e9, o = function (c, u) {
        var f = []
            , h = []
            , d = z.delayedCall(r, function () {
                u(f, h),
                    f = [],
                    h = []
            }).pause();
        return function (m) {
            f.length || d.restart(!0),
                f.push(m.trigger),
                h.push(m),
                s <= f.length && d.progress(1)
        }
    }, a;
    for (a in e)
        i[a] = a.substr(0, 2) === "on" && at(e[a]) && a !== "onRefreshInit" ? o(a, e[a]) : e[a];
    return at(s) && (s = s(),
        Ie(G, "refresh", function () {
            return s = e.batchMax()
        })),
        sn(n).forEach(function (l) {
            var c = {};
            for (a in i)
                c[a] = i[a];
            c.trigger = l,
                t.push(G.create(c))
        }),
        t
}
    ;
var Ta = function (e, t, i, r) {
    return t > r ? e(r) : t < 0 && e(0),
        i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
}, On = function n(e, t) {
    t === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = t === !0 ? "auto" : t ? "pan-" + t + (Oe.isTouch ? " pinch-zoom" : "") : "none",
        e === Qt && n(de, t)
}, Ds = {
    auto: 1,
    scroll: 1
}, Xu = function (e) {
    var t = e.event, i = e.target, r = e.axis, s = (t.changedTouches ? t.changedTouches[0] : t).target, o = s._gsap || z.core.getCache(s), a = nt(), l;
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (; s && s !== de && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !(Ds[(l = Nt(s)).overflowY] || Ds[l.overflowX]));)
            s = s.parentNode;
        o._isScroll = s && s !== i && !dr(s) && (Ds[(l = Nt(s)).overflowY] || Ds[l.overflowX]),
            o._isScrollT = a
    }
    (o._isScroll || r === "x") && (t.stopPropagation(),
        t._gsapAllow = !0)
}, rc = function (e, t, i, r) {
    return Oe.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: r = r && Xu,
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
            return i && Ie(pe, Oe.eventTypes[0], ba, !1, !0)
        },
        onDisable: function () {
            return De(pe, Oe.eventTypes[0], ba, !0)
        }
    })
}, qu = /(input|label|select|textarea)/i, Sa, ba = function (e) {
    var t = qu.test(e.target.tagName);
    (t || Sa) && (e._gsapAllow = !0,
        Sa = t)
}, Uu = function (e) {
    er(e) || (e = {}),
        e.preventDefault = e.isNormalizer = e.allowClicks = !0,
        e.type || (e.type = "wheel,touch"),
        e.debounce = !!e.debounce,
        e.id = e.id || "normalizer";
    var t = e, i = t.normalizeScrollX, r = t.momentum, s = t.allowNestedScroll, o = t.onRelease, a, l, c = ft(e.target) || Qt, u = z.core.globals().ScrollSmoother, f = u && u.get(), h = Pi && (e.content && ft(e.content) || f && e.content !== !1 && !f.smooth() && f.content()), d = Vi(c, Ae), m = Vi(c, ot), p = 1, g = (Oe.isTouch && K.visualViewport ? K.visualViewport.scale * K.visualViewport.width : K.outerWidth) / K.innerWidth, _ = 0, T = at(r) ? function () {
        return r(a)
    }
        : function () {
            return r || 2.8
        }
        , S, v, x = rc(c, e.type, !0, s), C = function () {
            return v = !1
        }, b = ni, M = ni, E = function () {
            l = wi(c, Ae),
                M = Cr(Pi ? 1 : 0, l),
                i && (b = Cr(0, wi(c, ot))),
                S = cr
        }, A = function () {
            h._gsap.y = Kr(parseFloat(h._gsap.y) + d.offset) + "px",
                h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)",
                d.offset = d.cacheID = 0
        }, k = function () {
            if (v) {
                requestAnimationFrame(C);
                var V = Kr(a.deltaY / 2)
                    , $ = M(d.v - V);
                if (h && $ !== d.v + d.offset) {
                    d.offset = $ - d.v;
                    var y = Kr((parseFloat(h && h._gsap.y) || 0) - d.offset);
                    h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)",
                        h._gsap.y = y + "px",
                        d.cacheID = j.cache,
                        Ti()
                }
                return !0
            }
            d.offset && A(),
                v = !0
        }, O, D, I, B, H = function () {
            E(),
                O.isActive() && O.vars.scrollY > l && (d() > l ? O.progress(1) && d(l) : O.resetTo("scrollY", l))
        };
    return h && z.set(h, {
        y: "+=0"
    }),
        e.ignoreCheck = function (L) {
            return Pi && L.type === "touchmove" && k() || p > 1.05 && L.type !== "touchstart" || a.isGesturing || L.touches && L.touches.length > 1
        }
        ,
        e.onPress = function () {
            v = !1;
            var L = p;
            p = Kr((K.visualViewport && K.visualViewport.scale || 1) / g),
                O.pause(),
                L !== p && On(c, p > 1.01 ? !0 : i ? !1 : "x"),
                D = m(),
                I = d(),
                E(),
                S = cr
        }
        ,
        e.onRelease = e.onGestureStart = function (L, V) {
            if (d.offset && A(),
                !V)
                B.restart(!0);
            else {
                j.cache++;
                var $ = T(), y, ne;
                i && (y = m(),
                    ne = y + $ * .05 * -L.velocityX / .227,
                    $ *= Ta(m, y, ne, wi(c, ot)),
                    O.vars.scrollX = b(ne)),
                    y = d(),
                    ne = y + $ * .05 * -L.velocityY / .227,
                    $ *= Ta(d, y, ne, wi(c, Ae)),
                    O.vars.scrollY = M(ne),
                    O.invalidate().duration($).play(.01),
                    (Pi && O.vars.scrollY >= l || y >= l - 1) && z.to({}, {
                        onUpdate: H,
                        duration: $
                    })
            }
            o && o(L)
        }
        ,
        e.onWheel = function () {
            O._ts && O.pause(),
                nt() - _ > 1e3 && (S = 0,
                    _ = nt())
        }
        ,
        e.onChange = function (L, V, $, y, ne) {
            if (cr !== S && E(),
                V && i && m(b(y[2] === V ? D + (L.startX - L.x) : m() + V - y[1])),
                $) {
                d.offset && A();
                var ze = ne[2] === $
                    , vt = ze ? I + L.startY - L.y : d() + $ - ne[1]
                    , _e = M(vt);
                ze && vt !== _e && (I += _e - vt),
                    d(_e)
            }
            ($ || V) && Ti()
        }
        ,
        e.onEnable = function () {
            On(c, i ? !1 : "x"),
                G.addEventListener("refresh", H),
                Ie(K, "resize", H),
                d.smooth && (d.target.style.scrollBehavior = "auto",
                    d.smooth = m.smooth = !1),
                x.enable()
        }
        ,
        e.onDisable = function () {
            On(c, !0),
                De(K, "resize", H),
                G.removeEventListener("refresh", H),
                x.kill()
        }
        ,
        e.lockAxis = e.lockAxis !== !1,
        a = new Oe(e),
        a.iOS = Pi,
        Pi && !d() && d(1),
        Pi && z.ticker.add(ni),
        B = a._dc,
        O = z.to(a, {
            ease: "power4",
            paused: !0,
            scrollX: i ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: ic(d, d(), function () {
                    return O.pause()
                })
            },
            onUpdate: Ti,
            onComplete: B.vars.onComplete
        }),
        a
};
G.sort = function (n) {
    return q.sort(n || function (e, t) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (t.start + (t.vars.refreshPriority || 0) * -1e6)
    }
    )
}
    ;
G.observe = function (n) {
    return new Oe(n)
}
    ;
G.normalizeScroll = function (n) {
    if (typeof n > "u")
        return xt;
    if (n === !0 && xt)
        return xt.enable();
    if (n === !1)
        return xt && xt.kill();
    var e = n instanceof Oe ? n : Uu(n);
    return xt && xt.target === e.target && xt.kill(),
        dr(e.target) && (xt = e),
        e
}
    ;
G.core = {
    _getVelocityProp: to,
    _inputObserver: rc,
    _scrollers: j,
    _proxies: ci,
    bridge: {
        ss: function () {
            Ht || hr("scrollStart"),
                Ht = nt()
        },
        ref: function () {
            return qe
        }
    }
};
Xl() && z.registerPlugin(G);
class ju {
    constructor() {
        this.splitText(),
            this.svgStroke(),
            se.add(this.listen.bind(this))
    }
    listen(e) {
        switch (e) {
            case se.LOAD:
                let t = .1;
                w.delayedCall(() => {
                    this.parallax()
                }
                    , t);
                break
        }
    }
    splitText() {
        w.selectorAll("[data-text-motion='split']").forEach((t, i) => {
            this.splitTextSetting(t)
        }
        )
    }
    splitTextSetting(e) {
        const t = w.find(e, "span");
        t.forEach((s, o) => {
            s.innerHTML = s.textContent.replace(/\S/g, "<span>$&</span>")
        }
        );
        const i = new IntersectionObserver(s => {
            s.forEach(o => {
                const a = o.target;
                o.isIntersecting && o.boundingClientRect.top > 0 && (t.forEach((l, c) => {
                    let u = w.find(l, "span");
                    u = w.shuffle(u),
                        u.forEach((f, h) => {
                            f.style.transitionDelay = `${c * .2 + h * .05}s`
                        }
                        )
                }
                ),
                    w.addClass(a, "-show"))
            }
            )
        }
            , {
                rootMargin: "0% 0% 0% 0%",
                threshold: 0
            })
            , r = new IntersectionObserver(s => {
                s.forEach(o => {
                    const a = o.target;
                    o.isIntersecting || o.boundingClientRect.top > 0 && o.intersectionRatio === 0 && (w.removeClass(a, "-show"),
                        t.forEach((l, c) => {
                            w.find(l, "span").forEach((f, h) => {
                                f.style.transitionDelay = "0s"
                            }
                            )
                        }
                        ))
                }
                )
            }
                , {
                    rootMargin: "0% 0% 0% 0%",
                    threshold: 0
                });
        i.observe(e),
            r.observe(e)
    }
    svgStroke() {
        w.selectorAll("path[data-clip-path]").forEach(t => {
            const i = t.dataset.clipPath
                , r = document.getElementById(i)
                , s = t.cloneNode(!0);
            s.removeAttribute("class"),
                s.removeAttribute("data-clip-path"),
                r.appendChild(s),
                t.style.clipPath = `url(#${i})`
        }
        )
    }
    parallax() {
        J.registerPlugin(G);
        let e = !1;
        w.selectorAll("[data-parallax-pc]").forEach(i => {
            const r = i.dataset.parallaxPc.split(",")
                , s = i.dataset.parallaxSp.split(",");
            J.fromTo(w.find1st(i, "img"), {
                y: ae.isSPView ? `${s[0]}%` : `${r[0]}%`
            }, {
                y: ae.isSPView ? `${s[1]}%` : `${r[1]}%`,
                ease: "linear",
                scrollTrigger: {
                    trigger: i,
                    start: "top bottom",
                    end: "bottom top",
                    markers: e,
                    scrub: !0,
                    scroller: ae.scroller()
                }
            })
        }
        )
    }
}
class Ku {
    constructor() {
        this.modal = w.selector(".p-modal-player"),
            this.modal && F.ee.on("movie-thumb-ready", () => {
                this.ready()
            }
            )
    }
    ready() {
        this.modal_close = w.selector(".p-modal-player__close"),
            this.modal_close.addEventListener("click", this.hideTrigg),
            this.modal_bg = w.selector(".p-modal-player__bg"),
            this.modal_bg.addEventListener("click", this.hideTrigg),
            w.selectorAll("[data-movie-id]").forEach((i, r) => {
                i.addEventListener("click", () => {
                    if (w.hasClass(i, "swiper-slide-next")) {
                        F.ee.emit("slide-next"),
                            F.ee.emit("disable-cover-timer", .6);
                        return
                    } else if (w.hasClass(i, "swiper-slide-prev")) {
                        F.ee.emit("slide-prev"),
                            F.ee.emit("disable-cover-timer", .6);
                        return
                    } else if (!w.hasClass(i, "swiper-slide-active"))
                        return;
                    F.ee.emit("show-movie", i.dataset.movieId)
                }
                )
            }
            ),
            F.ee.on("show-movie", i => {
                this.show(i)
            }
            ),
            F.ee.on("hide-movie", () => {
                this.hide()
            }
            );
        let e = document.createElement("script");
        e.src = "https://www.youtube.com/iframe_api";
        let t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t)
    }
    show(e) {
        switch (e) {
            case "1":
                this.movieId = "rB0MR0tyuwA";
                break;
            case "2":
                this.movieId = "lTwnUcldF7A";
                break;
            case "3":
                this.movieId = "_zcBasAvqbU";
                break;
            case "4":
                this.movieId = "-b8jJKoIm4k";
                break;
            case "5":
                this.movieId = "E71C1EGEO0E";
                break
        }
        if (!this.player)
            this.playerInit();
        else {
            let i = .3;
            w.delayedCall(() => {
                this.player.loadVideoById(this.movieId)
            }
                , i)
        }
        F.ee.emit("kill-scroll", !0),
            w.removeClass(this.modal, "-hide"),
            w.delayedCall(() => {
                w.addClass(this.modal, "-show")
            }
                , 1 / 30);
        let t = .5;
        F.ee.emit("disable-cover-timer", t)
    }
    hide() {
        F.ee.emit("kill-scroll", !1);
        let e = 0;
        w.addClass(this.modal, "-hide"),
            e += .2,
            w.delayedCall(() => {
                this.player && this.player.stopVideo()
            }
                , e),
            e += .3,
            w.delayedCall(() => {
                w.removeClass(this.modal, "-hide"),
                    w.removeClass(this.modal, "-show")
            }
                , e),
            F.ee.emit("disable-cover-timer", e)
    }
    hideTrigg() {
        F.ee.emit("hide-movie")
    }
    playerInit() {
        this.isInit || (this.player = new YT.Player("modal-movie-player", {
            videoId: this.movieId,
            playerVars: {
                rel: 0,
                showinfo: 0,
                modestbranding: 1,
                playsinline: 1
            },
            events: {
                onReady: e => {
                    this.isInit = !0,
                        e.target.playVideo()
                }
                ,
                onStateChange: e => {
                    var t = e.data;
                    t == YT.PlayerState.ENDED
                }
            }
        }))
    }
}
class Zu {
    constructor() {
        this.header = w.selector(".p-header"),
            this.detact_target = w.selector(".p-header__logo"),
            this.areas = w.selectorAll("[data-nav-white-area]"),
            this.top_kv_area = w.selector("[data-nav-logo-show-area]"),
            this.scroll = this.scroll.bind(this),
            this.container = w.selector(".l-container"),
            this.container.addEventListener("scroll", () => {
                this.scroll()
            }
            ),
            this.scrollCount = 0,
            this.scroll(!0),
            se.add(this.listen.bind(this)),
            this.isLoopLogoInview = !1,
            this.loop_kv = w.selector(".p-kv-loop .p-main-world__logo__inner"),
            this.loop_kv && new IntersectionObserver(t => {
                t.forEach(i => {
                    i.isIntersecting ? this.isLoopLogoInview = !0 : this.isLoopLogoInview = !1
                }
                )
            }
                , {
                    rootMargin: "0% 0%",
                    threshold: 0
                }).observe(this.loop_kv)
    }
    listen(e) {
        switch (e) {
            case se.SCROLL:
                this.scroll();
                break;
            case se.RESIZE:
                this.scroll();
                break
        }
    }
    scroll(e = !1) {
        if (!e && (this.scrollCount++,
            this.scrollCount % 10 !== 0))
            return;
        let t = !1;
        if (this.areas.forEach(i => {
            this.detectCollision(this.detact_target, i) && (t = !0)
        }
        ),
            this.header.dataset.colorWhite = t,
            this.top_kv_area) {
            let i = this.detectCollision(this.detact_target, this.top_kv_area);
            (ae.isSPView ? this.container.scrollTop : se.size.sy) > window.innerHeight * 2 && (i = !0),
                this.isLoopLogoInview && (i = !1),
                this.header.dataset.showLogo = i
        }
    }
    detectCollision(e, t) {
        const i = e.getBoundingClientRect()
            , r = t.getBoundingClientRect();
        return !(i.top > r.bottom || i.bottom < r.top)
    }
}
class Qu {
    constructor() {
        new gc,
            new _c,
            new ju,
            new Ku,
            new Zu
    }
}
class Ju {
    constructor() {
        this.el = w.selector(".p-kv"),
            this.el && (J.registerPlugin(G),
                this.inner = w.selector(".p-kv__inner"),
                this.scrolltarget1 = w.selector(".p-kv__scrolltarget1"),
                this.scrolltarget2 = w.selector(".p-kv__scrolltarget2"),
                this.statement = w.selector(".p-top-statement"),
                this.cover = w.selector(".p-kv__cover"),
                this.cover_white = w.selector(".p-kv__cover__white"),
                this.cover_green = w.selector(".p-kv__cover__green"),
                this.world = w.find1st(this.el, ".p-main-world"),
                this.sky1 = w.find1st(this.el, ".p-main-world__sky"),
                this.ground = w.find1st(this.el, ".p-main-world__ground"),
                this.ground1 = w.find1st(this.el, ".p-main-world__ground1"),
                this.ground2 = w.find1st(this.el, ".p-main-world__ground2"),
                this.ground3 = w.find1st(this.el, ".p-main-world__ground3"),
                this.bird = w.find1st(this.el, ".p-main-world__bird"),
                this.front_r1a = w.find1st(this.el, ".p-main-world__r1a"),
                this.front_r1b = w.find1st(this.el, ".p-main-world__r1b"),
                this.front_r2 = w.find1st(this.el, ".p-main-world__r2"),
                this.front_r3 = w.find1st(this.el, ".p-main-world__r3"),
                this.front_r4 = w.find1st(this.el, ".p-main-world__r4"),
                this.front_l1 = w.find1st(this.el, ".p-main-world__l1"),
                this.front_l2 = w.find1st(this.el, ".p-main-world__l2"),
                this.front_l3 = w.find1st(this.el, ".p-main-world__l3"),
                this.front_l4 = w.find1st(this.el, ".p-main-world__l4"),
                this.logo = w.find1st(this.el, ".p-main-world__logo"),
                this.logo_inner = w.find1st(this.el, ".p-main-world__logo__inner"),
                se.add(this.listen.bind(this)),
                F.ee.on("start", () => {
                    this.start()
                }
                ))
    }
    listen(e) {
        switch (e) {
            case se.RESIZE:
                this.resize();
                break
        }
    }
    resize() { }
    start() {
        w.addClass(this.logo_inner, "-inview");
        let e = !1;
        J.to(this.scrolltarget1, {
            scrollTrigger: {
                trigger: this.scrolltarget1,
                start: "top top",
                end: "bottom bottom",
                markers: e,
                scrub: !0,
                scroller: ae.scroller(),
                onUpdate: i => { }
                ,
                onLeave: () => {
                    w.addClass(this.cover_green, "-show"),
                        w.addClass(this.statement, "-bg"),
                        w.addClass(this.el, "-none"),
                        w.addClass(this.logo_inner, "-stable")
                }
                ,
                onEnterBack: () => {
                    w.removeClass(this.cover_green, "-show"),
                        w.removeClass(this.statement, "-bg"),
                        w.removeClass(this.el, "-none")
                }
            }
        });
        const t = {
            trigger: this.scrolltarget1,
            start: "top top",
            end: "bottom bottom",
            markers: e,
            scrub: !0,
            scroller: ae.scroller()
        };
        J.to(this.front_r1a, {
            scale: 2,
            x: "100%",
            y: "50%",
            ease: "linear",
            scrollTrigger: t
        }),
            J.to(this.front_r1b, {
                scale: 2,
                x: "120%",
                y: "150%",
                ease: "linear",
                scrollTrigger: t
            }),
            J.to(this.front_r2, {
                scale: 2,
                x: "150%",
                y: "-50%",
                ease: "linear",
                scrollTrigger: t
            }),
            J.to(this.front_r3, {
                scale: 2,
                x: "150%",
                y: "30%",
                ease: "linear",
                scrollTrigger: t
            }),
            J.to(this.front_r4, {
                scale: 1.5,
                x: "40%",
                y: "-30%",
                ease: "linear",
                scrollTrigger: t
            }),
            J.to(this.front_l1, {
                scale: 2,
                x: "-100%",
                y: "50%",
                ease: "linear",
                scrollTrigger: t
            }),
            J.to(this.front_l2, {
                scale: 2,
                x: "-150%",
                y: "100%",
                ease: "linear",
                scrollTrigger: t
            }),
            J.to(this.front_l3, {
                scale: 2,
                x: "-200%",
                y: "30%",
                ease: "linear",
                scrollTrigger: t
            }),
            J.to(this.front_l4, {
                scale: 1.5,
                x: "-40%",
                y: "-30%",
                ease: "linear",
                scrollTrigger: t
            }),
            J.to(this.logo, {
                scale: ae.isSPView ? 1.5 : 1.8,
                autoAlpha: -.5,
                ease: "linear",
                scrollTrigger: t
            }),
            J.to(this.ground1, {
                scale: 2,
                ease: "linear",
                scrollTrigger: t
            }),
            J.to(this.ground2, {
                scale: 1.75,
                ease: "linear",
                scrollTrigger: t
            }),
            J.to(this.ground3, {
                scale: 1.5,
                ease: "linear",
                scrollTrigger: t
            }),
            J.to(this.sky1, {
                scale: 1.15,
                ease: "linear",
                scrollTrigger: t
            }),
            J.to(this.bird, {
                scale: 1.35,
                ease: "linear",
                scrollTrigger: t
            }),
            J.to(this.cover_white, {
                autoAlpha: 1,
                ease: "power1.in",
                scrollTrigger: t
            }),
            J.to(this.cover, {
                autoAlpha: 0,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: this.scrolltarget2,
                    start: "top bottom",
                    end: "bottom 50%",
                    markers: e,
                    scrub: !0,
                    scroller: ae.scroller()
                }
            })
    }
}
class ed {
    constructor() {
        this.el = w.selector(".p-top-statement"),
            this.el && (J.registerPlugin(G),
                F.ee.on("start", () => {
                    this.start()
                }
                ),
                F.ee.on("reset-inview", () => {
                    this.reset()
                }
                ))
    }
    start() {
        this.catch = w.selector(".p-top-statement__catch"),
            this.catch_span = w.selectorAll(".p-top-statement__catch span"),
            this.catch_span.forEach((o, a) => {
                o.innerHTML = o.textContent.replace(/\S/g, "<span>$&</span>")
            }
            );
        const e = new IntersectionObserver(o => {
            o.forEach(a => {
                const l = a.target;
                a.isIntersecting && a.boundingClientRect.top > 0 && (this.catch_span.forEach((c, u) => {
                    let f = w.find(c, "span");
                    f = w.shuffle(f),
                        f.forEach((h, d) => {
                            h.style.transitionDelay = `${u * .2 + d * .04}s`
                        }
                        )
                }
                ),
                    w.addClass(l, "-show"))
            }
            )
        }
            , {
                rootMargin: "0% 0% 0% 0%",
                threshold: 0
            })
            , t = new IntersectionObserver(o => {
                o.forEach(a => {
                    const l = a.target;
                    a.isIntersecting || a.boundingClientRect.top > 0 && a.intersectionRatio === 0 && (w.removeClass(l, "-show"),
                        this.catch_span.forEach((c, u) => {
                            w.find(c, "span").forEach((h, d) => {
                                h.style.transitionDelay = "0s"
                            }
                            )
                        }
                        ))
                }
                )
            }
                , {
                    rootMargin: "0% 0% 0% 0%",
                    threshold: 0
                });
        e.observe(this.catch),
            t.observe(this.catch),
            this.hand = w.selector(".p-top-statement__hand"),
            this.hand_inview = w.find1st(this.hand, ".inview"),
            this.hand_hand_r = w.find1st(this.hand, ".hand-r"),
            this.hand_hand_l = w.find1st(this.hand, ".hand-l"),
            this.hand_plant = w.find1st(this.hand, ".plant"),
            this.hand_plant1 = w.find1st(this.hand, ".plant1"),
            this.hand_plant2 = w.find1st(this.hand, ".plant2"),
            this.hand_plant3 = w.find1st(this.hand, ".plant3"),
            this.hand_seed = w.find1st(this.hand, ".seed"),
            this.previousY = 0,
            this.previousRatio = 0,
            new IntersectionObserver(o => {
                o.forEach(a => {
                    const l = a.boundingClientRect.y
                        , c = a.intersectionRatio
                        , u = a.isIntersecting;
                    let f = "";
                    l < this.previousY ? c > this.previousRatio && u ? f = "down-enter" : f = "down-leave" : l > this.previousY && u && (c < this.previousRatio ? f = "up-leave" : f = "up-enter"),
                        this.previousY = l,
                        this.previousRatio = c,
                        a.isIntersecting && a.boundingClientRect.top > 0 && f === "down-enter" && this.tl1.progress() < .1 && (this.tl1.progress(0),
                            this.tl1.play())
                }
                )
            }
                , {
                    rootMargin: ae.isSPView ? "0% 0% -10% 0%" : "0% 0% -50% 0%",
                    threshold: 0
                }).observe(this.hand_inview),
            new IntersectionObserver(o => {
                o.forEach(a => {
                    a.isIntersecting || a.boundingClientRect.top > 0 && a.intersectionRatio === 0 && this.tl1 && (this.tl1.pause(),
                        this.tl1.progress(0))
                }
                )
            }
                , {
                    rootMargin: "0% 0%",
                    threshold: 0
                }).observe(this.hand);
        let s = .9;
        this.tl1 = J.timeline({
            pause: !0
        }),
            this.tl1.fromTo(this.hand_hand_l, {
                x: "-100%",
                y: "-50%"
            }, {
                x: "0%",
                y: "0%",
                ease: "sine.out",
                duration: s
            }),
            this.tl1.fromTo(this.hand_hand_r, {
                x: "100%",
                y: "-50%"
            }, {
                x: "0%",
                y: "0%",
                ease: "sine.out",
                duration: s
            }, "<"),
            this.tl1.fromTo(this.hand_seed, {
                y: "-130%",
                autoAlpha: 0
            }, {
                y: "0%",
                autoAlpha: 1,
                ease: "sine.out",
                duration: s * 1.2
            }, "<"),
            this.tl1.fromTo(this.hand_plant, {
                autoAlpha: 0,
                scale: .9
            }, {
                autoAlpha: 1,
                scale: 1,
                duration: s * .5,
                ease: "power2.out"
            }),
            this.tl1.to(this.hand_plant1, {
                delay: .1,
                autoAlpha: 0,
                ease: "power2.out"
            }),
            this.tl1.fromTo(this.hand_plant2, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: "power1.out"
            }, "<")
    }
    reset() {
        w.removeClass(this.catch, "-show"),
            this.catch_span && (this.catch_span.forEach((e, t) => {
                w.find(e, "span").forEach((r, s) => {
                    r.style.transitionDelay = "0s"
                }
                )
            }
            ),
                this.tl1 && (this.tl1.pause(),
                    this.tl1.progress(0)),
                this.previousY = window.innerHeight,
                this.previousRatio = 0)
    }
}
class td {
    constructor() {
        this.el = w.selector(".p-top-activity"),
            this.el && (J.registerPlugin(G),
                this.inner2 = w.selector(".p-top-activity__inner2"),
                this.item_wrapper = w.selector(".p-top-activity__inner .item-wrapper"),
                this.items = w.selectorAll(".p-top-activity__inner .item"),
                this.h2 = w.selector(".p-top-activity__inner h2"),
                F.ee.on("start", () => {
                    this.setWaveTw(),
                        this.setScrollTw(),
                        se.add(this.listen.bind(this))
                }
                ))
    }
    listen(e) {
        switch (e) {
            case se.RESIZE:
                this.resize();
                break
        }
    }
    resize() {
        this.setScrollTw()
    }
    setWaveTw() {
        const e = "linear"
            , t = []
            , i = [];
        this.items.forEach((r, s) => {
            s % 2 === 0 ? t.push(r) : i.push(r)
        }
        ),
            this.waveTw1 = J.timeline({
                paused: !0
            }),
            this.waveTw1.to(t, {
                duration: 1,
                ease: e,
                y: "5%"
            }),
            this.waveTw1.to(t, {
                duration: 1,
                ease: e,
                y: "0%"
            }),
            this.waveTw2 = J.timeline({
                paused: !0
            }),
            this.waveTw2.to(i, {
                duration: 1,
                ease: e,
                y: "-5%"
            }),
            this.waveTw2.to(i, {
                duration: 1,
                ease: e,
                y: "0%"
            })
    }
    setScrollTw() {
        let e = !1;
        const t = this.items.length;
        let i, r, s, o, a, l, c, u;
        const f = this.items[0].getBoundingClientRect()
            , h = this.items[1].getBoundingClientRect()
            , d = this.items[t - 1].getBoundingClientRect();
        if (i = this.items[0].clientWidth,
            r = h.left - (f.left + f.width),
            s = d.left + d.width - f.left,
            o = this.inner2.offsetWidth,
            ae.isSPView ? (a = 0,
                l = o - s + 37 / 390 * window.innerWidth >> 0,
                c = Math.abs(a - l),
                u = Math.abs(c * 1.5) >> 0) : (a = Math.max(window.innerWidth - i * 3.5 - r * 3 - (window.innerWidth - o) * .5, 210),
                    l = o - s >> 0,
                    c = Math.abs(a - l),
                    u = Math.abs(c * 1.5) >> 0),
            this.scrollTw) {
            this.scrollTw.clear(),
                this.scrollTw.fromTo(this.item_wrapper, {
                    x: a
                }, {
                    x: l,
                    duration: 1,
                    ease: "linear"
                }),
                this.scrollTw.fromTo(this.h2, {
                    y: 0
                }, {
                    y: ae.isSPView ? 0 : "-22%",
                    duration: 1,
                    ease: "sine.in"
                }, "<");
            return
        }
        this.scrollTw = J.timeline({
            scrollTrigger: {
                trigger: this.el,
                start: "center center",
                end: `+=${u}`,
                markers: e,
                scrub: !0,
                pin: !0,
                pinType: "fixed",
                scroller: ae.scroller(),
                onUpdate: m => {
                    this.waveTw1.progress(m.progress * .5),
                        this.waveTw2.progress(m.progress * .5)
                }
            }
        }),
            this.scrollTw.fromTo(this.item_wrapper, {
                x: a
            }, {
                x: l,
                duration: 1,
                ease: "linear"
            }),
            this.scrollTw.fromTo(this.h2, {
                y: 0
            }, {
                y: ae.isSPView ? 0 : "-22%",
                duration: 1,
                ease: "sine.in"
            }, "<")
    }
}
class id {
    static url() {
        const e = `https://journal.botanistofficial.com/wp-json/wp/v2/posts?categories=80&per_page=100&${Date.now()}`
            , t = "/json/posts.json";
        let i = !1;
        const r = window.location.hostname;
        return (r.indexOf("localhost") > -1 || r.indexOf("192.168") > -1) && (i = !0),
            i ? t : e
    }
}
class lo {
    static send(e, t, i, r = !1) {
        this.url = e,
            this.success = t,
            this.error = i,
            r || (this.retryCount = 0),
            fetch(e).then(s => s.json()).then(s => {
                this.success(s)
            }
            ).catch(s => {
                console.log(`--> [error1] ${s}`),
                    this.retry()
            }
            )
    }
    static retry() {
        console.log("retry"),
            ++this.retryCount <= 2 ? (clearTimeout(this.retryInt),
                this.retryInt = setTimeout(() => {
                    this.send(this.url, this.success, this.error, !0)
                }
                    , 3 * 1e3)) : this.error()
    }
}
ie(lo, "retryCount", 0),
    ie(lo, "retryInt", -1);
class rd {
    constructor() {
        this.el = w.selector(".p-top-journal"),
            this.el && (this.success = this.success.bind(this),
                this.error = this.error.bind(this),
                lo.send(id.url(), this.success, this.error))
    }
    success(e) {
        this.wrapper = w.selector(".p-top-journal .item-wrapper"),
            this.jsonData = e,
            this.jsonData = w.shuffle(this.jsonData),
            this.addCount = 0,
            this.setJsonSrc(),
            this.shuffleBtn = w.selector(".p-top-journal__shuffle .area"),
            new cs(this.shuffleBtn, () => {
                this.setJsonSrc(),
                    F.ee.emit("disable-cover-timer", .5)
            }
            )
    }
    error() { }
    setJsonSrc() {
        for (this.wrapper.classList.remove("-show"); this.wrapper.firstChild;)
            this.wrapper.removeChild(this.wrapper.firstChild);
        for (let e = 0; e < 4; e++) {
            const t = this.jsonData[this.addCount % this.jsonData.length];
            this.addCount++;
            const i = t.modified.split("T")[0]
                , r = i.replace(/-/g, ".")
                , s = document.createElement("div");
            s.classList.add("item"),
                s.dataset.hoverImgScaleUp = "";
            const o = document.createElement("a");
            o.setAttribute("target", "_blank"),
                o.setAttribute("rel", "noopener"),
                o.setAttribute("href", t.link),
                s.appendChild(o);
            const a = document.createElement("div");
            a.classList.add("item__thumb"),
                o.appendChild(a);
            const l = document.createElement("div");
            a.appendChild(l);
            const c = document.createElement("img");
            c.setAttribute("alt", ""),
                l.appendChild(c),
                c.addEventListener("load", () => {
                    a.classList.add("-loaded")
                }
                ),
                c.src = t.yoast_head_json.og_image[0].url;
            const u = document.createElement("div");
            u.classList.add("item__txt"),
                o.appendChild(u);
            const f = document.createElement("p");
            f.innerHTML = t.title.rendered,
                u.appendChild(f);
            const h = document.createElement("time");
            h.setAttribute("datetime", i),
                h.innerHTML = r,
                u.appendChild(h),
                this.wrapper.appendChild(s)
        }
        w.delayedCall(() => {
            this.wrapper.classList.add("-show")
        }
            , 1 / 30)
    }
}
class sd {
    constructor() {
        this.el = w.selector(".p-top-nature"),
            this.el && (J.registerPlugin(G),
                F.ee.on("start", () => {
                    this.start()
                }
                ),
                F.ee.on("reset-inview", () => {
                    this.reset()
                }
                ))
    }
    start() {
        this.inner = w.selector(".p-top-nature__inner"),
            this.tree1 = w.selector(".p-top-nature .tree1"),
            this.tree2 = w.selector(".p-top-nature .tree2"),
            this.tree3 = w.selector(".p-top-nature .tree3"),
            this.tree4 = w.selector(".p-top-nature .tree4"),
            this.previousY = 0,
            this.previousRatio = 0,
            new IntersectionObserver(r => {
                r.forEach(s => {
                    const o = s.boundingClientRect.y
                        , a = s.intersectionRatio
                        , l = s.isIntersecting;
                    let c = "";
                    o < this.previousY ? a > this.previousRatio && l ? c = "down-enter" : c = "down-leave" : o > this.previousY && l && (a < this.previousRatio ? c = "up-leave" : c = "up-enter"),
                        this.previousY = o,
                        this.previousRatio = a,
                        s.isIntersecting && s.boundingClientRect.top > 0 && c === "down-enter" && this.tl1.progress() < .1 && (this.tl1.progress(0),
                            this.tl1.play())
                }
                )
            }
                , {
                    rootMargin: ae.isSPView ? "0% 0% -70% 0%" : "0% 0% -50% 0%",
                    threshold: 0
                }).observe(this.inner),
            new IntersectionObserver(r => {
                r.forEach(s => {
                    s.isIntersecting || s.boundingClientRect.top > 0 && s.intersectionRatio === 0 && this.tl1 && (this.tl1.pause(),
                        this.tl1.progress(0))
                }
                )
            }
                , {
                    rootMargin: "0% 0%",
                    threshold: 0
                }).observe(this.tree3);
        let i = .6;
        this.tl1 = J.timeline({
            pause: !0
        }),
            this.tl1.to(this.tree1, {
                autoAlpha: 1,
                ease: "sine.out",
                duration: i
            }),
            this.tl1.to(this.tree1, {
                autoAlpha: 0,
                ease: "sine.out",
                duration: i
            }),
            this.tl1.fromTo(this.tree2, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: "sine.out",
                duration: i
            }, "<"),
            this.tl1.to(this.tree2, {
                autoAlpha: 0,
                ease: "sine.out",
                duration: i
            }),
            this.tl1.fromTo(this.tree3, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: "sine.out",
                duration: i
            }, "<"),
            this.tl1.fromTo(this.tree4, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: "sine.out",
                duration: i
            })
    }
    reset() {
        this.tl1 && (this.tl1.pause(),
            this.tl1.progress(0)),
            this.previousY = window.innerHeight,
            this.previousRatio = 0
    }
}
class nd {
    constructor() {
        this.el = w.selector(".p-top-past"),
            this.el && (J.registerPlugin(G),
                F.ee.on("start", () => {
                    this.start()
                }
                ))
    }
    start() {
        let e = !1;
        this.people = w.find(this.el, ".p-top-past__people"),
            this.people.forEach((t, i) => {
                const r = w.find1st(t, "img");
                this.tl1 = J.timeline({
                    pause: !0,
                    scrollTrigger: {
                        trigger: t,
                        start: "top bottom",
                        end: "bottom 30%",
                        markers: e,
                        scrub: !0,
                        scroller: ae.scroller()
                    }
                }),
                    this.tl1.fromTo(r, {
                        x: ae.isSPView ? "-10%" : "-18%",
                        y: ae.isSPView ? "8%" : "12%"
                    }, {
                        x: "-3%",
                        y: "3%",
                        duration: 1,
                        ease: "sine.out"
                    }),
                    this.tl1.to(r, {
                        x: "0%",
                        y: "0%",
                        duration: .7,
                        ease: "linear"
                    })
            }
            )
    }
}
class od {
    constructor() {
        new Ju,
            new ed,
            new td,
            new rd,
            new sd,
            new nd
    }
}
class ad {
    constructor() {
        this.kv = w.selector(".p-sdgs-kv"),
            this.kv && (this.inner = w.selector(".p-sdgs-kv__inner"),
                se.add(this.listen.bind(this)))
    }
    listen(e) {
        switch (e) {
            case se.LOAD:
                this.loaded();
                break
        }
    }
    loaded() {
        w.addClass(this.inner, "-inview")
    }
}
function xa(n) {
    return n !== null && typeof n == "object" && "constructor" in n && n.constructor === Object
}
function Fo(n, e) {
    n === void 0 && (n = {}),
        e === void 0 && (e = {}),
        Object.keys(e).forEach(t => {
            typeof n[t] > "u" ? n[t] = e[t] : xa(e[t]) && xa(n[t]) && Object.keys(e[t]).length > 0 && Fo(n[t], e[t])
        }
        )
}
const sc = {
    body: {},
    addEventListener() { },
    removeEventListener() { },
    activeElement: {
        blur() { },
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() { }
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() { },
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function ui() {
    const n = typeof document < "u" ? document : {};
    return Fo(n, sc),
        n
}
const ld = {
    document: sc,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() { },
        pushState() { },
        go() { },
        back() { }
    },
    CustomEvent: function () {
        return this
    },
    addEventListener() { },
    removeEventListener() { },
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() { },
    Date() { },
    screen: {},
    setTimeout() { },
    clearTimeout() { },
    matchMedia() {
        return {}
    },
    requestAnimationFrame(n) {
        return typeof setTimeout > "u" ? (n(),
            null) : setTimeout(n, 0)
    },
    cancelAnimationFrame(n) {
        typeof setTimeout > "u" || clearTimeout(n)
    }
};
function Dt() {
    const n = typeof window < "u" ? window : {};
    return Fo(n, ld),
        n
}
function cd(n) {
    const e = n;
    Object.keys(e).forEach(t => {
        try {
            e[t] = null
        } catch { }
        try {
            delete e[t]
        } catch { }
    }
    )
}
function co(n, e) {
    return e === void 0 && (e = 0),
        setTimeout(n, e)
}
function on() {
    return Date.now()
}
function ud(n) {
    const e = Dt();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(n, null)),
        !t && n.currentStyle && (t = n.currentStyle),
        t || (t = n.style),
        t
}
function dd(n, e) {
    e === void 0 && (e = "x");
    const t = Dt();
    let i, r, s;
    const o = ud(n);
    return t.WebKitCSSMatrix ? (r = o.transform || o.webkitTransform,
        r.split(",").length > 6 && (r = r.split(", ").map(a => a.replace(",", ".")).join(", ")),
        s = new t.WebKitCSSMatrix(r === "none" ? "" : r)) : (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
            i = s.toString().split(",")),
        e === "x" && (t.WebKitCSSMatrix ? r = s.m41 : i.length === 16 ? r = parseFloat(i[12]) : r = parseFloat(i[4])),
        e === "y" && (t.WebKitCSSMatrix ? r = s.m42 : i.length === 16 ? r = parseFloat(i[13]) : r = parseFloat(i[5])),
        r || 0
}
function Is(n) {
    return typeof n == "object" && n !== null && n.constructor && Object.prototype.toString.call(n).slice(8, -1) === "Object"
}
function fd(n) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? n instanceof HTMLElement : n && (n.nodeType === 1 || n.nodeType === 11)
}
function Mt() {
    const n = Object(arguments.length <= 0 ? void 0 : arguments[0])
        , e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
        const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        if (i != null && !fd(i)) {
            const r = Object.keys(Object(i)).filter(s => e.indexOf(s) < 0);
            for (let s = 0, o = r.length; s < o; s += 1) {
                const a = r[s]
                    , l = Object.getOwnPropertyDescriptor(i, a);
                l !== void 0 && l.enumerable && (Is(n[a]) && Is(i[a]) ? i[a].__swiper__ ? n[a] = i[a] : Mt(n[a], i[a]) : !Is(n[a]) && Is(i[a]) ? (n[a] = {},
                    i[a].__swiper__ ? n[a] = i[a] : Mt(n[a], i[a])) : n[a] = i[a])
            }
        }
    }
    return n
}
function Rs(n, e, t) {
    n.style.setProperty(e, t)
}
function nc(n) {
    let { swiper: e, targetPosition: t, side: i } = n;
    const r = Dt()
        , s = -e.translate;
    let o = null, a;
    const l = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none",
        r.cancelAnimationFrame(e.cssModeFrameID);
    const c = t > s ? "next" : "prev"
        , u = (h, d) => c === "next" && h >= d || c === "prev" && h <= d
        , f = () => {
            a = new Date().getTime(),
                o === null && (o = a);
            const h = Math.max(Math.min((a - o) / l, 1), 0)
                , d = .5 - Math.cos(h * Math.PI) / 2;
            let m = s + d * (t - s);
            if (u(m, t) && (m = t),
                e.wrapperEl.scrollTo({
                    [i]: m
                }),
                u(m, t)) {
                e.wrapperEl.style.overflow = "hidden",
                    e.wrapperEl.style.scrollSnapType = "",
                    setTimeout(() => {
                        e.wrapperEl.style.overflow = "",
                            e.wrapperEl.scrollTo({
                                [i]: m
                            })
                    }
                    ),
                    r.cancelAnimationFrame(e.cssModeFrameID);
                return
            }
            e.cssModeFrameID = r.requestAnimationFrame(f)
        }
        ;
    f()
}
function No(n) {
    return n.querySelector(".swiper-slide-transform") || n.shadowRoot && n.shadowRoot.querySelector(".swiper-slide-transform") || n
}
function yi(n, e) {
    return e === void 0 && (e = ""),
        [...n.children].filter(t => t.matches(e))
}
function oc(n, e) {
    e === void 0 && (e = []);
    const t = document.createElement(n);
    return t.classList.add(...Array.isArray(e) ? e : [e]),
        t
}
function hd(n, e) {
    const t = [];
    for (; n.previousElementSibling;) {
        const i = n.previousElementSibling;
        e ? i.matches(e) && t.push(i) : t.push(i),
            n = i
    }
    return t
}
function pd(n, e) {
    const t = [];
    for (; n.nextElementSibling;) {
        const i = n.nextElementSibling;
        e ? i.matches(e) && t.push(i) : t.push(i),
            n = i
    }
    return t
}
function Di(n, e) {
    return Dt().getComputedStyle(n, null).getPropertyValue(e)
}
function Ea(n) {
    let e = n, t;
    if (e) {
        for (t = 0; (e = e.previousSibling) !== null;)
            e.nodeType === 1 && (t += 1);
        return t
    }
}
function md(n, e) {
    const t = [];
    let i = n.parentElement;
    for (; i;)
        e ? i.matches(e) && t.push(i) : t.push(i),
            i = i.parentElement;
    return t
}
function Ca(n, e, t) {
    const i = Dt();
    return t ? n[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(n, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(n, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : n.offsetWidth
}
let kn;
function gd() {
    const n = Dt()
        , e = ui();
    return {
        smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
        touch: !!("ontouchstart" in n || n.DocumentTouch && e instanceof n.DocumentTouch)
    }
}
function ac() {
    return kn || (kn = gd()),
        kn
}
let An;
function _d(n) {
    let { userAgent: e } = n === void 0 ? {} : n;
    const t = ac()
        , i = Dt()
        , r = i.navigator.platform
        , s = e || i.navigator.userAgent
        , o = {
            ios: !1,
            android: !1
        }
        , a = i.screen.width
        , l = i.screen.height
        , c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
    let u = s.match(/(iPad).*OS\s([\d_]+)/);
    const f = s.match(/(iPod)(.*OS\s([\d_]+))?/)
        , h = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
        , d = r === "Win32";
    let m = r === "MacIntel";
    const p = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !u && m && t.touch && p.indexOf(`${a}x${l}`) >= 0 && (u = s.match(/(Version)\/([\d.]+)/),
        u || (u = [0, 1, "13_0_0"]),
        m = !1),
        c && !d && (o.os = "android",
            o.android = !0),
        (u || h || f) && (o.os = "ios",
            o.ios = !0),
        o
}
function vd(n) {
    return n === void 0 && (n = {}),
        An || (An = _d(n)),
        An
}
let Ln;
function wd() {
    const n = Dt();
    let e = !1;
    function t() {
        const i = n.navigator.userAgent.toLowerCase();
        return i.indexOf("safari") >= 0 && i.indexOf("chrome") < 0 && i.indexOf("android") < 0
    }
    if (t()) {
        const i = String(n.navigator.userAgent);
        if (i.includes("Version/")) {
            const [r, s] = i.split("Version/")[1].split(" ")[0].split(".").map(o => Number(o));
            e = r < 16 || r === 16 && s < 2
        }
    }
    return {
        isSafari: e || t(),
        needPerspectiveFix: e,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent)
    }
}
function yd() {
    return Ln || (Ln = wd()),
        Ln
}
function Td(n) {
    let { swiper: e, on: t, emit: i } = n;
    const r = Dt();
    let s = null
        , o = null;
    const a = () => {
        !e || e.destroyed || !e.initialized || (i("beforeResize"),
            i("resize"))
    }
        , l = () => {
            !e || e.destroyed || !e.initialized || (s = new ResizeObserver(f => {
                o = r.requestAnimationFrame(() => {
                    const { width: h, height: d } = e;
                    let m = h
                        , p = d;
                    f.forEach(g => {
                        let { contentBoxSize: _, contentRect: T, target: S } = g;
                        S && S !== e.el || (m = T ? T.width : (_[0] || _).inlineSize,
                            p = T ? T.height : (_[0] || _).blockSize)
                    }
                    ),
                        (m !== h || p !== d) && a()
                }
                )
            }
            ),
                s.observe(e.el))
        }
        , c = () => {
            o && r.cancelAnimationFrame(o),
                s && s.unobserve && e.el && (s.unobserve(e.el),
                    s = null)
        }
        , u = () => {
            !e || e.destroyed || !e.initialized || i("orientationchange")
        }
        ;
    t("init", () => {
        if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
            l();
            return
        }
        r.addEventListener("resize", a),
            r.addEventListener("orientationchange", u)
    }
    ),
        t("destroy", () => {
            c(),
                r.removeEventListener("resize", a),
                r.removeEventListener("orientationchange", u)
        }
        )
}
function Sd(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = []
        , o = Dt()
        , a = function (u, f) {
            f === void 0 && (f = {});
            const h = o.MutationObserver || o.WebkitMutationObserver
                , d = new h(m => {
                    if (e.__preventObserver__)
                        return;
                    if (m.length === 1) {
                        r("observerUpdate", m[0]);
                        return
                    }
                    const p = function () {
                        r("observerUpdate", m[0])
                    };
                    o.requestAnimationFrame ? o.requestAnimationFrame(p) : o.setTimeout(p, 0)
                }
                );
            d.observe(u, {
                attributes: typeof f.attributes > "u" ? !0 : f.attributes,
                childList: typeof f.childList > "u" ? !0 : f.childList,
                characterData: typeof f.characterData > "u" ? !0 : f.characterData
            }),
                s.push(d)
        }
        , l = () => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const u = md(e.hostEl);
                    for (let f = 0; f < u.length; f += 1)
                        a(u[f])
                }
                a(e.hostEl, {
                    childList: e.params.observeSlideChildren
                }),
                    a(e.wrapperEl, {
                        attributes: !1
                    })
            }
        }
        , c = () => {
            s.forEach(u => {
                u.disconnect()
            }
            ),
                s.splice(0, s.length)
        }
        ;
    t({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
        i("init", l),
        i("destroy", c)
}
var bd = {
    on(n, e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function")
            return i;
        const r = t ? "unshift" : "push";
        return n.split(" ").forEach(s => {
            i.eventsListeners[s] || (i.eventsListeners[s] = []),
                i.eventsListeners[s][r](e)
        }
        ),
            i
    },
    once(n, e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function")
            return i;
        function r() {
            i.off(n, r),
                r.__emitterProxy && delete r.__emitterProxy;
            for (var s = arguments.length, o = new Array(s), a = 0; a < s; a++)
                o[a] = arguments[a];
            e.apply(i, o)
        }
        return r.__emitterProxy = e,
            i.on(n, r, t)
    },
    onAny(n, e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || typeof n != "function")
            return t;
        const i = e ? "unshift" : "push";
        return t.eventsAnyListeners.indexOf(n) < 0 && t.eventsAnyListeners[i](n),
            t
    },
    offAny(n) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
            return e;
        const t = e.eventsAnyListeners.indexOf(n);
        return t >= 0 && e.eventsAnyListeners.splice(t, 1),
            e
    },
    off(n, e) {
        const t = this;
        return !t.eventsListeners || t.destroyed || !t.eventsListeners || n.split(" ").forEach(i => {
            typeof e > "u" ? t.eventsListeners[i] = [] : t.eventsListeners[i] && t.eventsListeners[i].forEach((r, s) => {
                (r === e || r.__emitterProxy && r.__emitterProxy === e) && t.eventsListeners[i].splice(s, 1)
            }
            )
        }
        ),
            t
    },
    emit() {
        const n = this;
        if (!n.eventsListeners || n.destroyed || !n.eventsListeners)
            return n;
        let e, t, i;
        for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++)
            s[o] = arguments[o];
        return typeof s[0] == "string" || Array.isArray(s[0]) ? (e = s[0],
            t = s.slice(1, s.length),
            i = n) : (e = s[0].events,
                t = s[0].data,
                i = s[0].context || n),
            t.unshift(i),
            (Array.isArray(e) ? e : e.split(" ")).forEach(l => {
                n.eventsAnyListeners && n.eventsAnyListeners.length && n.eventsAnyListeners.forEach(c => {
                    c.apply(i, [l, ...t])
                }
                ),
                    n.eventsListeners && n.eventsListeners[l] && n.eventsListeners[l].forEach(c => {
                        c.apply(i, t)
                    }
                    )
            }
            ),
            n
    }
};
function xd() {
    const n = this;
    let e, t;
    const i = n.el;
    typeof n.params.width < "u" && n.params.width !== null ? e = n.params.width : e = i.clientWidth,
        typeof n.params.height < "u" && n.params.height !== null ? t = n.params.height : t = i.clientHeight,
        !(e === 0 && n.isHorizontal() || t === 0 && n.isVertical()) && (e = e - parseInt(Di(i, "padding-left") || 0, 10) - parseInt(Di(i, "padding-right") || 0, 10),
            t = t - parseInt(Di(i, "padding-top") || 0, 10) - parseInt(Di(i, "padding-bottom") || 0, 10),
            Number.isNaN(e) && (e = 0),
            Number.isNaN(t) && (t = 0),
            Object.assign(n, {
                width: e,
                height: t,
                size: n.isHorizontal() ? e : t
            }))
}
function Ed() {
    const n = this;
    function e(k) {
        return n.isHorizontal() ? k : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[k]
    }
    function t(k, O) {
        return parseFloat(k.getPropertyValue(e(O)) || 0)
    }
    const i = n.params
        , { wrapperEl: r, slidesEl: s, size: o, rtlTranslate: a, wrongRTL: l } = n
        , c = n.virtual && i.virtual.enabled
        , u = c ? n.virtual.slides.length : n.slides.length
        , f = yi(s, `.${n.params.slideClass}, swiper-slide`)
        , h = c ? n.virtual.slides.length : f.length;
    let d = [];
    const m = []
        , p = [];
    let g = i.slidesOffsetBefore;
    typeof g == "function" && (g = i.slidesOffsetBefore.call(n));
    let _ = i.slidesOffsetAfter;
    typeof _ == "function" && (_ = i.slidesOffsetAfter.call(n));
    const T = n.snapGrid.length
        , S = n.slidesGrid.length;
    let v = i.spaceBetween
        , x = -g
        , C = 0
        , b = 0;
    if (typeof o > "u")
        return;
    typeof v == "string" && v.indexOf("%") >= 0 ? v = parseFloat(v.replace("%", "")) / 100 * o : typeof v == "string" && (v = parseFloat(v)),
        n.virtualSize = -v,
        f.forEach(k => {
            a ? k.style.marginLeft = "" : k.style.marginRight = "",
                k.style.marginBottom = "",
                k.style.marginTop = ""
        }
        ),
        i.centeredSlides && i.cssMode && (Rs(r, "--swiper-centered-offset-before", ""),
            Rs(r, "--swiper-centered-offset-after", ""));
    const M = i.grid && i.grid.rows > 1 && n.grid;
    M && n.grid.initSlides(h);
    let E;
    const A = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter(k => typeof i.breakpoints[k].slidesPerView < "u").length > 0;
    for (let k = 0; k < h; k += 1) {
        E = 0;
        let O;
        if (f[k] && (O = f[k]),
            M && n.grid.updateSlide(k, O, h, e),
            !(f[k] && Di(O, "display") === "none")) {
            if (i.slidesPerView === "auto") {
                A && (f[k].style[e("width")] = "");
                const D = getComputedStyle(O)
                    , I = O.style.transform
                    , B = O.style.webkitTransform;
                if (I && (O.style.transform = "none"),
                    B && (O.style.webkitTransform = "none"),
                    i.roundLengths)
                    E = n.isHorizontal() ? Ca(O, "width", !0) : Ca(O, "height", !0);
                else {
                    const H = t(D, "width")
                        , L = t(D, "padding-left")
                        , V = t(D, "padding-right")
                        , $ = t(D, "margin-left")
                        , y = t(D, "margin-right")
                        , ne = D.getPropertyValue("box-sizing");
                    if (ne && ne === "border-box")
                        E = H + $ + y;
                    else {
                        const { clientWidth: ze, offsetWidth: vt } = O;
                        E = H + L + V + $ + y + (vt - ze)
                    }
                }
                I && (O.style.transform = I),
                    B && (O.style.webkitTransform = B),
                    i.roundLengths && (E = Math.floor(E))
            } else
                E = (o - (i.slidesPerView - 1) * v) / i.slidesPerView,
                    i.roundLengths && (E = Math.floor(E)),
                    f[k] && (f[k].style[e("width")] = `${E}px`);
            f[k] && (f[k].swiperSlideSize = E),
                p.push(E),
                i.centeredSlides ? (x = x + E / 2 + C / 2 + v,
                    C === 0 && k !== 0 && (x = x - o / 2 - v),
                    k === 0 && (x = x - o / 2 - v),
                    Math.abs(x) < 1 / 1e3 && (x = 0),
                    i.roundLengths && (x = Math.floor(x)),
                    b % i.slidesPerGroup === 0 && d.push(x),
                    m.push(x)) : (i.roundLengths && (x = Math.floor(x)),
                        (b - Math.min(n.params.slidesPerGroupSkip, b)) % n.params.slidesPerGroup === 0 && d.push(x),
                        m.push(x),
                        x = x + E + v),
                n.virtualSize += E + v,
                C = E,
                b += 1
        }
    }
    if (n.virtualSize = Math.max(n.virtualSize, o) + _,
        a && l && (i.effect === "slide" || i.effect === "coverflow") && (r.style.width = `${n.virtualSize + v}px`),
        i.setWrapperSize && (r.style[e("width")] = `${n.virtualSize + v}px`),
        M && n.grid.updateWrapperSize(E, d, e),
        !i.centeredSlides) {
        const k = [];
        for (let O = 0; O < d.length; O += 1) {
            let D = d[O];
            i.roundLengths && (D = Math.floor(D)),
                d[O] <= n.virtualSize - o && k.push(D)
        }
        d = k,
            Math.floor(n.virtualSize - o) - Math.floor(d[d.length - 1]) > 1 && d.push(n.virtualSize - o)
    }
    if (c && i.loop) {
        const k = p[0] + v;
        if (i.slidesPerGroup > 1) {
            const O = Math.ceil((n.virtual.slidesBefore + n.virtual.slidesAfter) / i.slidesPerGroup)
                , D = k * i.slidesPerGroup;
            for (let I = 0; I < O; I += 1)
                d.push(d[d.length - 1] + D)
        }
        for (let O = 0; O < n.virtual.slidesBefore + n.virtual.slidesAfter; O += 1)
            i.slidesPerGroup === 1 && d.push(d[d.length - 1] + k),
                m.push(m[m.length - 1] + k),
                n.virtualSize += k
    }
    if (d.length === 0 && (d = [0]),
        v !== 0) {
        const k = n.isHorizontal() && a ? "marginLeft" : e("marginRight");
        f.filter((O, D) => !i.cssMode || i.loop ? !0 : D !== f.length - 1).forEach(O => {
            O.style[k] = `${v}px`
        }
        )
    }
    if (i.centeredSlides && i.centeredSlidesBounds) {
        let k = 0;
        p.forEach(D => {
            k += D + (v || 0)
        }
        ),
            k -= v;
        const O = k - o;
        d = d.map(D => D <= 0 ? -g : D > O ? O + _ : D)
    }
    if (i.centerInsufficientSlides) {
        let k = 0;
        if (p.forEach(O => {
            k += O + (v || 0)
        }
        ),
            k -= v,
            k < o) {
            const O = (o - k) / 2;
            d.forEach((D, I) => {
                d[I] = D - O
            }
            ),
                m.forEach((D, I) => {
                    m[I] = D + O
                }
                )
        }
    }
    if (Object.assign(n, {
        slides: f,
        snapGrid: d,
        slidesGrid: m,
        slidesSizesGrid: p
    }),
        i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
        Rs(r, "--swiper-centered-offset-before", `${-d[0]}px`),
            Rs(r, "--swiper-centered-offset-after", `${n.size / 2 - p[p.length - 1] / 2}px`);
        const k = -n.snapGrid[0]
            , O = -n.slidesGrid[0];
        n.snapGrid = n.snapGrid.map(D => D + k),
            n.slidesGrid = n.slidesGrid.map(D => D + O)
    }
    if (h !== u && n.emit("slidesLengthChange"),
        d.length !== T && (n.params.watchOverflow && n.checkOverflow(),
            n.emit("snapGridLengthChange")),
        m.length !== S && n.emit("slidesGridLengthChange"),
        i.watchSlidesProgress && n.updateSlidesOffset(),
        !c && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
        const k = `${i.containerModifierClass}backface-hidden`
            , O = n.el.classList.contains(k);
        h <= i.maxBackfaceHiddenSlides ? O || n.el.classList.add(k) : O && n.el.classList.remove(k)
    }
}
function Cd(n) {
    const e = this
        , t = []
        , i = e.virtual && e.params.virtual.enabled;
    let r = 0, s;
    typeof n == "number" ? e.setTransition(n) : n === !0 && e.setTransition(e.params.speed);
    const o = a => i ? e.slides[e.getSlideIndexByData(a)] : e.slides[a];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)
            (e.visibleSlides || []).forEach(a => {
                t.push(a)
            }
            );
        else
            for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
                const a = e.activeIndex + s;
                if (a > e.slides.length && !i)
                    break;
                t.push(o(a))
            }
    else
        t.push(o(e.activeIndex));
    for (s = 0; s < t.length; s += 1)
        if (typeof t[s] < "u") {
            const a = t[s].offsetHeight;
            r = a > r ? a : r
        }
    (r || r === 0) && (e.wrapperEl.style.height = `${r}px`)
}
function Pd() {
    const n = this
        , e = n.slides
        , t = n.isElement ? n.isHorizontal() ? n.wrapperEl.offsetLeft : n.wrapperEl.offsetTop : 0;
    for (let i = 0; i < e.length; i += 1)
        e[i].swiperSlideOffset = (n.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - n.cssOverflowAdjustment()
}
function Md(n) {
    n === void 0 && (n = this && this.translate || 0);
    const e = this
        , t = e.params
        , { slides: i, rtlTranslate: r, snapGrid: s } = e;
    if (i.length === 0)
        return;
    typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let o = -n;
    r && (o = n),
        i.forEach(l => {
            l.classList.remove(t.slideVisibleClass)
        }
        ),
        e.visibleSlidesIndexes = [],
        e.visibleSlides = [];
    let a = t.spaceBetween;
    typeof a == "string" && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * e.size : typeof a == "string" && (a = parseFloat(a));
    for (let l = 0; l < i.length; l += 1) {
        const c = i[l];
        let u = c.swiperSlideOffset;
        t.cssMode && t.centeredSlides && (u -= i[0].swiperSlideOffset);
        const f = (o + (t.centeredSlides ? e.minTranslate() : 0) - u) / (c.swiperSlideSize + a)
            , h = (o - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - u) / (c.swiperSlideSize + a)
            , d = -(o - u)
            , m = d + e.slidesSizesGrid[l];
        (d >= 0 && d < e.size - 1 || m > 1 && m <= e.size || d <= 0 && m >= e.size) && (e.visibleSlides.push(c),
            e.visibleSlidesIndexes.push(l),
            i[l].classList.add(t.slideVisibleClass)),
            c.progress = r ? -f : f,
            c.originalProgress = r ? -h : h
    }
}
function Od(n) {
    const e = this;
    if (typeof n > "u") {
        const u = e.rtlTranslate ? -1 : 1;
        n = e && e.translate && e.translate * u || 0
    }
    const t = e.params
        , i = e.maxTranslate() - e.minTranslate();
    let { progress: r, isBeginning: s, isEnd: o, progressLoop: a } = e;
    const l = s
        , c = o;
    if (i === 0)
        r = 0,
            s = !0,
            o = !0;
    else {
        r = (n - e.minTranslate()) / i;
        const u = Math.abs(n - e.minTranslate()) < 1
            , f = Math.abs(n - e.maxTranslate()) < 1;
        s = u || r <= 0,
            o = f || r >= 1,
            u && (r = 0),
            f && (r = 1)
    }
    if (t.loop) {
        const u = e.getSlideIndexByData(0)
            , f = e.getSlideIndexByData(e.slides.length - 1)
            , h = e.slidesGrid[u]
            , d = e.slidesGrid[f]
            , m = e.slidesGrid[e.slidesGrid.length - 1]
            , p = Math.abs(n);
        p >= h ? a = (p - h) / m : a = (p + m - d) / m,
            a > 1 && (a -= 1)
    }
    Object.assign(e, {
        progress: r,
        progressLoop: a,
        isBeginning: s,
        isEnd: o
    }),
        (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(n),
        s && !l && e.emit("reachBeginning toEdge"),
        o && !c && e.emit("reachEnd toEdge"),
        (l && !s || c && !o) && e.emit("fromEdge"),
        e.emit("progress", r)
}
function kd() {
    const n = this
        , { slides: e, params: t, slidesEl: i, activeIndex: r } = n
        , s = n.virtual && t.virtual.enabled
        , o = l => yi(i, `.${t.slideClass}${l}, swiper-slide${l}`)[0];
    e.forEach(l => {
        l.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass)
    }
    );
    let a;
    if (s)
        if (t.loop) {
            let l = r - n.virtual.slidesBefore;
            l < 0 && (l = n.virtual.slides.length + l),
                l >= n.virtual.slides.length && (l -= n.virtual.slides.length),
                a = o(`[data-swiper-slide-index="${l}"]`)
        } else
            a = o(`[data-swiper-slide-index="${r}"]`);
    else
        a = e[r];
    if (a) {
        a.classList.add(t.slideActiveClass);
        let l = pd(a, `.${t.slideClass}, swiper-slide`)[0];
        t.loop && !l && (l = e[0]),
            l && l.classList.add(t.slideNextClass);
        let c = hd(a, `.${t.slideClass}, swiper-slide`)[0];
        t.loop && !c === 0 && (c = e[e.length - 1]),
            c && c.classList.add(t.slidePrevClass)
    }
    n.emitSlidesClasses()
}
const Xs = (n, e) => {
    if (!n || n.destroyed || !n.params)
        return;
    const t = () => n.isElement ? "swiper-slide" : `.${n.params.slideClass}`
        , i = e.closest(t());
    if (i) {
        let r = i.querySelector(`.${n.params.lazyPreloaderClass}`);
        !r && n.isElement && (r = i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`)),
            r && r.remove()
    }
}
    , Dn = (n, e) => {
        if (!n.slides[e])
            return;
        const t = n.slides[e].querySelector('[loading="lazy"]');
        t && t.removeAttribute("loading")
    }
    , uo = n => {
        if (!n || n.destroyed || !n.params)
            return;
        let e = n.params.lazyPreloadPrevNext;
        const t = n.slides.length;
        if (!t || !e || e < 0)
            return;
        e = Math.min(e, t);
        const i = n.params.slidesPerView === "auto" ? n.slidesPerViewDynamic() : Math.ceil(n.params.slidesPerView)
            , r = n.activeIndex;
        if (n.params.grid && n.params.grid.rows > 1) {
            const o = r
                , a = [o - e];
            a.push(...Array.from({
                length: e
            }).map((l, c) => o + i + c)),
                n.slides.forEach((l, c) => {
                    a.includes(l.column) && Dn(n, c)
                }
                );
            return
        }
        const s = r + i - 1;
        if (n.params.rewind || n.params.loop)
            for (let o = r - e; o <= s + e; o += 1) {
                const a = (o % t + t) % t;
                (a < r || a > s) && Dn(n, a)
            }
        else
            for (let o = Math.max(r - e, 0); o <= Math.min(s + e, t - 1); o += 1)
                o !== r && (o > s || o < r) && Dn(n, o)
    }
    ;
function Ad(n) {
    const { slidesGrid: e, params: t } = n
        , i = n.rtlTranslate ? n.translate : -n.translate;
    let r;
    for (let s = 0; s < e.length; s += 1)
        typeof e[s + 1] < "u" ? i >= e[s] && i < e[s + 1] - (e[s + 1] - e[s]) / 2 ? r = s : i >= e[s] && i < e[s + 1] && (r = s + 1) : i >= e[s] && (r = s);
    return t.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0),
        r
}
function Ld(n) {
    const e = this
        , t = e.rtlTranslate ? e.translate : -e.translate
        , { snapGrid: i, params: r, activeIndex: s, realIndex: o, snapIndex: a } = e;
    let l = n, c;
    const u = h => {
        let d = h - e.virtual.slidesBefore;
        return d < 0 && (d = e.virtual.slides.length + d),
            d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
            d
    }
        ;
    if (typeof l > "u" && (l = Ad(e)),
        i.indexOf(t) >= 0)
        c = i.indexOf(t);
    else {
        const h = Math.min(r.slidesPerGroupSkip, l);
        c = h + Math.floor((l - h) / r.slidesPerGroup)
    }
    if (c >= i.length && (c = i.length - 1),
        l === s) {
        c !== a && (e.snapIndex = c,
            e.emit("snapIndexChange")),
            e.params.loop && e.virtual && e.params.virtual.enabled && (e.realIndex = u(l));
        return
    }
    let f;
    e.virtual && r.virtual.enabled && r.loop ? f = u(l) : e.slides[l] ? f = parseInt(e.slides[l].getAttribute("data-swiper-slide-index") || l, 10) : f = l,
        Object.assign(e, {
            previousSnapIndex: a,
            snapIndex: c,
            previousRealIndex: o,
            realIndex: f,
            previousIndex: s,
            activeIndex: l
        }),
        e.initialized && uo(e),
        e.emit("activeIndexChange"),
        e.emit("snapIndexChange"),
        o !== f && e.emit("realIndexChange"),
        (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange")
}
function Dd(n) {
    const e = this
        , t = e.params
        , i = n.closest(`.${t.slideClass}, swiper-slide`);
    let r = !1, s;
    if (i) {
        for (let o = 0; o < e.slides.length; o += 1)
            if (e.slides[o] === i) {
                r = !0,
                    s = o;
                break
            }
    }
    if (i && r)
        e.clickedSlide = i,
            e.virtual && e.params.virtual.enabled ? e.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : e.clickedIndex = s;
    else {
        e.clickedSlide = void 0,
            e.clickedIndex = void 0;
        return
    }
    t.slideToClickedSlide && e.clickedIndex !== void 0 && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide()
}
var Id = {
    updateSize: xd,
    updateSlides: Ed,
    updateAutoHeight: Cd,
    updateSlidesOffset: Pd,
    updateSlidesProgress: Md,
    updateProgress: Od,
    updateSlidesClasses: kd,
    updateActiveIndex: Ld,
    updateClickedSlide: Dd
};
function Rd(n) {
    n === void 0 && (n = this.isHorizontal() ? "x" : "y");
    const e = this
        , { params: t, rtlTranslate: i, translate: r, wrapperEl: s } = e;
    if (t.virtualTranslate)
        return i ? -r : r;
    if (t.cssMode)
        return r;
    let o = dd(s, n);
    return o += e.cssOverflowAdjustment(),
        i && (o = -o),
        o || 0
}
function zd(n, e) {
    const t = this
        , { rtlTranslate: i, params: r, wrapperEl: s, progress: o } = t;
    let a = 0
        , l = 0;
    const c = 0;
    t.isHorizontal() ? a = i ? -n : n : l = n,
        r.roundLengths && (a = Math.floor(a),
            l = Math.floor(l)),
        t.previousTranslate = t.translate,
        t.translate = t.isHorizontal() ? a : l,
        r.cssMode ? s[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -a : -l : r.virtualTranslate || (t.isHorizontal() ? a -= t.cssOverflowAdjustment() : l -= t.cssOverflowAdjustment(),
            s.style.transform = `translate3d(${a}px, ${l}px, ${c}px)`);
    let u;
    const f = t.maxTranslate() - t.minTranslate();
    f === 0 ? u = 0 : u = (n - t.minTranslate()) / f,
        u !== o && t.updateProgress(n),
        t.emit("setTranslate", t.translate, e)
}
function Fd() {
    return -this.snapGrid[0]
}
function Nd() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function Vd(n, e, t, i, r) {
    n === void 0 && (n = 0),
        e === void 0 && (e = this.params.speed),
        t === void 0 && (t = !0),
        i === void 0 && (i = !0);
    const s = this
        , { params: o, wrapperEl: a } = s;
    if (s.animating && o.preventInteractionOnTransition)
        return !1;
    const l = s.minTranslate()
        , c = s.maxTranslate();
    let u;
    if (i && n > l ? u = l : i && n < c ? u = c : u = n,
        s.updateProgress(u),
        o.cssMode) {
        const f = s.isHorizontal();
        if (e === 0)
            a[f ? "scrollLeft" : "scrollTop"] = -u;
        else {
            if (!s.support.smoothScroll)
                return nc({
                    swiper: s,
                    targetPosition: -u,
                    side: f ? "left" : "top"
                }),
                    !0;
            a.scrollTo({
                [f ? "left" : "top"]: -u,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (s.setTransition(0),
        s.setTranslate(u),
        t && (s.emit("beforeTransitionStart", e, r),
            s.emit("transitionEnd"))) : (s.setTransition(e),
                s.setTranslate(u),
                t && (s.emit("beforeTransitionStart", e, r),
                    s.emit("transitionStart")),
                s.animating || (s.animating = !0,
                    s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function (h) {
                        !s || s.destroyed || h.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd),
                            s.onTranslateToWrapperTransitionEnd = null,
                            delete s.onTranslateToWrapperTransitionEnd,
                            t && s.emit("transitionEnd"))
                    }
                    ),
                    s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))),
        !0
}
var Bd = {
    getTranslate: Rd,
    setTranslate: zd,
    minTranslate: Fd,
    maxTranslate: Nd,
    translateTo: Vd
};
function Yd(n, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${n}ms`,
        t.wrapperEl.style.transitionDelay = n === 0 ? "0ms" : ""),
        t.emit("setTransition", n, e)
}
function lc(n) {
    let { swiper: e, runCallbacks: t, direction: i, step: r } = n;
    const { activeIndex: s, previousIndex: o } = e;
    let a = i;
    if (a || (s > o ? a = "next" : s < o ? a = "prev" : a = "reset"),
        e.emit(`transition${r}`),
        t && s !== o) {
        if (a === "reset") {
            e.emit(`slideResetTransition${r}`);
            return
        }
        e.emit(`slideChangeTransition${r}`),
            a === "next" ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`)
    }
}
function Hd(n, e) {
    n === void 0 && (n = !0);
    const t = this
        , { params: i } = t;
    i.cssMode || (i.autoHeight && t.updateAutoHeight(),
        lc({
            swiper: t,
            runCallbacks: n,
            direction: e,
            step: "Start"
        }))
}
function $d(n, e) {
    n === void 0 && (n = !0);
    const t = this
        , { params: i } = t;
    t.animating = !1,
        !i.cssMode && (t.setTransition(0),
            lc({
                swiper: t,
                runCallbacks: n,
                direction: e,
                step: "End"
            }))
}
var Gd = {
    setTransition: Yd,
    transitionStart: Hd,
    transitionEnd: $d
};
function Wd(n, e, t, i, r) {
    n === void 0 && (n = 0),
        e === void 0 && (e = this.params.speed),
        t === void 0 && (t = !0),
        typeof n == "string" && (n = parseInt(n, 10));
    const s = this;
    let o = n;
    o < 0 && (o = 0);
    const { params: a, snapGrid: l, slidesGrid: c, previousIndex: u, activeIndex: f, rtlTranslate: h, wrapperEl: d, enabled: m } = s;
    if (s.animating && a.preventInteractionOnTransition || !m && !i && !r)
        return !1;
    const p = Math.min(s.params.slidesPerGroupSkip, o);
    let g = p + Math.floor((o - p) / s.params.slidesPerGroup);
    g >= l.length && (g = l.length - 1);
    const _ = -l[g];
    if (a.normalizeSlideIndex)
        for (let S = 0; S < c.length; S += 1) {
            const v = -Math.floor(_ * 100)
                , x = Math.floor(c[S] * 100)
                , C = Math.floor(c[S + 1] * 100);
            typeof c[S + 1] < "u" ? v >= x && v < C - (C - x) / 2 ? o = S : v >= x && v < C && (o = S + 1) : v >= x && (o = S)
        }
    if (s.initialized && o !== f && (!s.allowSlideNext && (h ? _ > s.translate && _ > s.minTranslate() : _ < s.translate && _ < s.minTranslate()) || !s.allowSlidePrev && _ > s.translate && _ > s.maxTranslate() && (f || 0) !== o))
        return !1;
    o !== (u || 0) && t && s.emit("beforeSlideChangeStart"),
        s.updateProgress(_);
    let T;
    if (o > f ? T = "next" : o < f ? T = "prev" : T = "reset",
        h && -_ === s.translate || !h && _ === s.translate)
        return s.updateActiveIndex(o),
            a.autoHeight && s.updateAutoHeight(),
            s.updateSlidesClasses(),
            a.effect !== "slide" && s.setTranslate(_),
            T !== "reset" && (s.transitionStart(t, T),
                s.transitionEnd(t, T)),
            !1;
    if (a.cssMode) {
        const S = s.isHorizontal()
            , v = h ? _ : -_;
        if (e === 0) {
            const x = s.virtual && s.params.virtual.enabled;
            x && (s.wrapperEl.style.scrollSnapType = "none",
                s._immediateVirtual = !0),
                x && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0,
                    requestAnimationFrame(() => {
                        d[S ? "scrollLeft" : "scrollTop"] = v
                    }
                    )) : d[S ? "scrollLeft" : "scrollTop"] = v,
                x && requestAnimationFrame(() => {
                    s.wrapperEl.style.scrollSnapType = "",
                        s._immediateVirtual = !1
                }
                )
        } else {
            if (!s.support.smoothScroll)
                return nc({
                    swiper: s,
                    targetPosition: v,
                    side: S ? "left" : "top"
                }),
                    !0;
            d.scrollTo({
                [S ? "left" : "top"]: v,
                behavior: "smooth"
            })
        }
        return !0
    }
    return s.setTransition(e),
        s.setTranslate(_),
        s.updateActiveIndex(o),
        s.updateSlidesClasses(),
        s.emit("beforeTransitionStart", e, i),
        s.transitionStart(t, T),
        e === 0 ? s.transitionEnd(t, T) : s.animating || (s.animating = !0,
            s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (v) {
                !s || s.destroyed || v.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                    s.onSlideToWrapperTransitionEnd = null,
                    delete s.onSlideToWrapperTransitionEnd,
                    s.transitionEnd(t, T))
            }
            ),
            s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)),
        !0
}
function Xd(n, e, t, i) {
    n === void 0 && (n = 0),
        e === void 0 && (e = this.params.speed),
        t === void 0 && (t = !0),
        typeof n == "string" && (n = parseInt(n, 10));
    const r = this;
    let s = n;
    return r.params.loop && (r.virtual && r.params.virtual.enabled ? s = s + r.virtual.slidesBefore : s = r.getSlideIndexByData(s)),
        r.slideTo(s, e, t, i)
}
function qd(n, e, t) {
    n === void 0 && (n = this.params.speed),
        e === void 0 && (e = !0);
    const i = this
        , { enabled: r, params: s, animating: o } = i;
    if (!r)
        return i;
    let a = s.slidesPerGroup;
    s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const l = i.activeIndex < s.slidesPerGroupSkip ? 1 : a
        , c = i.virtual && s.virtual.enabled;
    if (s.loop) {
        if (o && !c && s.loopPreventsSliding)
            return !1;
        i.loopFix({
            direction: "next"
        }),
            i._clientLeft = i.wrapperEl.clientLeft
    }
    return s.rewind && i.isEnd ? i.slideTo(0, n, e, t) : i.slideTo(i.activeIndex + l, n, e, t)
}
function Ud(n, e, t) {
    n === void 0 && (n = this.params.speed),
        e === void 0 && (e = !0);
    const i = this
        , { params: r, snapGrid: s, slidesGrid: o, rtlTranslate: a, enabled: l, animating: c } = i;
    if (!l)
        return i;
    const u = i.virtual && r.virtual.enabled;
    if (r.loop) {
        if (c && !u && r.loopPreventsSliding)
            return !1;
        i.loopFix({
            direction: "prev"
        }),
            i._clientLeft = i.wrapperEl.clientLeft
    }
    const f = a ? i.translate : -i.translate;
    function h(_) {
        return _ < 0 ? -Math.floor(Math.abs(_)) : Math.floor(_)
    }
    const d = h(f)
        , m = s.map(_ => h(_));
    let p = s[m.indexOf(d) - 1];
    if (typeof p > "u" && r.cssMode) {
        let _;
        s.forEach((T, S) => {
            d >= T && (_ = S)
        }
        ),
            typeof _ < "u" && (p = s[_ > 0 ? _ - 1 : _])
    }
    let g = 0;
    if (typeof p < "u" && (g = o.indexOf(p),
        g < 0 && (g = i.activeIndex - 1),
        r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (g = g - i.slidesPerViewDynamic("previous", !0) + 1,
            g = Math.max(g, 0))),
        r.rewind && i.isBeginning) {
        const _ = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
        return i.slideTo(_, n, e, t)
    }
    return i.slideTo(g, n, e, t)
}
function jd(n, e, t) {
    n === void 0 && (n = this.params.speed),
        e === void 0 && (e = !0);
    const i = this;
    return i.slideTo(i.activeIndex, n, e, t)
}
function Kd(n, e, t, i) {
    n === void 0 && (n = this.params.speed),
        e === void 0 && (e = !0),
        i === void 0 && (i = .5);
    const r = this;
    let s = r.activeIndex;
    const o = Math.min(r.params.slidesPerGroupSkip, s)
        , a = o + Math.floor((s - o) / r.params.slidesPerGroup)
        , l = r.rtlTranslate ? r.translate : -r.translate;
    if (l >= r.snapGrid[a]) {
        const c = r.snapGrid[a]
            , u = r.snapGrid[a + 1];
        l - c > (u - c) * i && (s += r.params.slidesPerGroup)
    } else {
        const c = r.snapGrid[a - 1]
            , u = r.snapGrid[a];
        l - c <= (u - c) * i && (s -= r.params.slidesPerGroup)
    }
    return s = Math.max(s, 0),
        s = Math.min(s, r.slidesGrid.length - 1),
        r.slideTo(s, n, e, t)
}
function Zd() {
    const n = this
        , { params: e, slidesEl: t } = n
        , i = e.slidesPerView === "auto" ? n.slidesPerViewDynamic() : e.slidesPerView;
    let r = n.clickedIndex, s;
    const o = n.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
        if (n.animating)
            return;
        s = parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
            e.centeredSlides ? r < n.loopedSlides - i / 2 || r > n.slides.length - n.loopedSlides + i / 2 ? (n.loopFix(),
                r = n.getSlideIndex(yi(t, `${o}[data-swiper-slide-index="${s}"]`)[0]),
                co(() => {
                    n.slideTo(r)
                }
                )) : n.slideTo(r) : r > n.slides.length - i ? (n.loopFix(),
                    r = n.getSlideIndex(yi(t, `${o}[data-swiper-slide-index="${s}"]`)[0]),
                    co(() => {
                        n.slideTo(r)
                    }
                    )) : n.slideTo(r)
    } else
        n.slideTo(r)
}
var Qd = {
    slideTo: Wd,
    slideToLoop: Xd,
    slideNext: qd,
    slidePrev: Ud,
    slideReset: jd,
    slideToClosest: Kd,
    slideToClickedSlide: Zd
};
function Jd(n) {
    const e = this
        , { params: t, slidesEl: i } = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
        return;
    yi(i, `.${t.slideClass}, swiper-slide`).forEach((s, o) => {
        s.setAttribute("data-swiper-slide-index", o)
    }
    ),
        e.loopFix({
            slideRealIndex: n,
            direction: t.centeredSlides ? void 0 : "next"
        })
}
function ef(n) {
    let { slideRealIndex: e, slideTo: t = !0, direction: i, setTranslate: r, activeSlideIndex: s, byController: o, byMousewheel: a } = n === void 0 ? {} : n;
    const l = this;
    if (!l.params.loop)
        return;
    l.emit("beforeLoopFix");
    const { slides: c, allowSlidePrev: u, allowSlideNext: f, slidesEl: h, params: d } = l;
    if (l.allowSlidePrev = !0,
        l.allowSlideNext = !0,
        l.virtual && d.virtual.enabled) {
        t && (!d.centeredSlides && l.snapIndex === 0 ? l.slideTo(l.virtual.slides.length, 0, !1, !0) : d.centeredSlides && l.snapIndex < d.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
            l.allowSlidePrev = u,
            l.allowSlideNext = f,
            l.emit("loopFix");
        return
    }
    const m = d.slidesPerView === "auto" ? l.slidesPerViewDynamic() : Math.ceil(parseFloat(d.slidesPerView, 10));
    let p = d.loopedSlides || m;
    p % d.slidesPerGroup !== 0 && (p += d.slidesPerGroup - p % d.slidesPerGroup),
        l.loopedSlides = p;
    const g = []
        , _ = [];
    let T = l.activeIndex;
    typeof s > "u" ? s = l.getSlideIndex(l.slides.filter(b => b.classList.contains(d.slideActiveClass))[0]) : T = s;
    const S = i === "next" || !i
        , v = i === "prev" || !i;
    let x = 0
        , C = 0;
    if (s < p) {
        x = Math.max(p - s, d.slidesPerGroup);
        for (let b = 0; b < p - s; b += 1) {
            const M = b - Math.floor(b / c.length) * c.length;
            g.push(c.length - M - 1)
        }
    } else if (s > l.slides.length - p * 2) {
        C = Math.max(s - (l.slides.length - p * 2), d.slidesPerGroup);
        for (let b = 0; b < C; b += 1) {
            const M = b - Math.floor(b / c.length) * c.length;
            _.push(M)
        }
    }
    if (v && g.forEach(b => {
        l.slides[b].swiperLoopMoveDOM = !0,
            h.prepend(l.slides[b]),
            l.slides[b].swiperLoopMoveDOM = !1
    }
    ),
        S && _.forEach(b => {
            l.slides[b].swiperLoopMoveDOM = !0,
                h.append(l.slides[b]),
                l.slides[b].swiperLoopMoveDOM = !1
        }
        ),
        l.recalcSlides(),
        d.slidesPerView === "auto" && l.updateSlides(),
        d.watchSlidesProgress && l.updateSlidesOffset(),
        t) {
        if (g.length > 0 && v)
            if (typeof e > "u") {
                const b = l.slidesGrid[T]
                    , E = l.slidesGrid[T + x] - b;
                a ? l.setTranslate(l.translate - E) : (l.slideTo(T + x, 0, !1, !0),
                    r && (l.touches[l.isHorizontal() ? "startX" : "startY"] += E,
                        l.touchEventsData.currentTranslate = l.translate))
            } else
                r && (l.slideToLoop(e, 0, !1, !0),
                    l.touchEventsData.currentTranslate = l.translate);
        else if (_.length > 0 && S)
            if (typeof e > "u") {
                const b = l.slidesGrid[T]
                    , E = l.slidesGrid[T - C] - b;
                a ? l.setTranslate(l.translate - E) : (l.slideTo(T - C, 0, !1, !0),
                    r && (l.touches[l.isHorizontal() ? "startX" : "startY"] += E,
                        l.touchEventsData.currentTranslate = l.translate))
            } else
                l.slideToLoop(e, 0, !1, !0)
    }
    if (l.allowSlidePrev = u,
        l.allowSlideNext = f,
        l.controller && l.controller.control && !o) {
        const b = {
            slideRealIndex: e,
            direction: i,
            setTranslate: r,
            activeSlideIndex: s,
            byController: !0
        };
        Array.isArray(l.controller.control) ? l.controller.control.forEach(M => {
            !M.destroyed && M.params.loop && M.loopFix({
                ...b,
                slideTo: M.params.slidesPerView === d.slidesPerView ? t : !1
            })
        }
        ) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({
            ...b,
            slideTo: l.controller.control.params.slidesPerView === d.slidesPerView ? t : !1
        })
    }
    l.emit("loopFix")
}
function tf() {
    const n = this
        , { params: e, slidesEl: t } = n;
    if (!e.loop || n.virtual && n.params.virtual.enabled)
        return;
    n.recalcSlides();
    const i = [];
    n.slides.forEach(r => {
        const s = typeof r.swiperSlideIndex > "u" ? r.getAttribute("data-swiper-slide-index") * 1 : r.swiperSlideIndex;
        i[s] = r
    }
    ),
        n.slides.forEach(r => {
            r.removeAttribute("data-swiper-slide-index")
        }
        ),
        i.forEach(r => {
            t.append(r)
        }
        ),
        n.recalcSlides(),
        n.slideTo(n.realIndex, 0)
}
var rf = {
    loopCreate: Jd,
    loopFix: ef,
    loopDestroy: tf
};
function sf(n) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
        return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
        t.style.cursor = "move",
        t.style.cursor = n ? "grabbing" : "grab",
        e.isElement && requestAnimationFrame(() => {
            e.__preventObserver__ = !1
        }
        )
}
function nf() {
    const n = this;
    n.params.watchOverflow && n.isLocked || n.params.cssMode || (n.isElement && (n.__preventObserver__ = !0),
        n[n.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
        n.isElement && requestAnimationFrame(() => {
            n.__preventObserver__ = !1
        }
        ))
}
var of = {
    setGrabCursor: sf,
    unsetGrabCursor: nf
};
function af(n, e) {
    e === void 0 && (e = this);
    function t(i) {
        if (!i || i === ui() || i === Dt())
            return null;
        i.assignedSlot && (i = i.assignedSlot);
        const r = i.closest(n);
        return !r && !i.getRootNode ? null : r || t(i.getRootNode().host)
    }
    return t(e)
}
function lf(n) {
    const e = this
        , t = ui()
        , i = Dt()
        , r = e.touchEventsData;
    r.evCache.push(n);
    const { params: s, touches: o, enabled: a } = e;
    if (!a || !s.simulateTouch && n.pointerType === "mouse" || e.animating && s.preventInteractionOnTransition)
        return;
    !e.animating && s.cssMode && s.loop && e.loopFix();
    let l = n;
    l.originalEvent && (l = l.originalEvent);
    let c = l.target;
    if (s.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(c) || "which" in l && l.which === 3 || "button" in l && l.button > 0 || r.isTouched && r.isMoved)
        return;
    const u = !!s.noSwipingClass && s.noSwipingClass !== ""
        , f = n.composedPath ? n.composedPath() : n.path;
    u && l.target && l.target.shadowRoot && f && (c = f[0]);
    const h = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`
        , d = !!(l.target && l.target.shadowRoot);
    if (s.noSwiping && (d ? af(h, c) : c.closest(h))) {
        e.allowClick = !0;
        return
    }
    if (s.swipeHandler && !c.closest(s.swipeHandler))
        return;
    o.currentX = l.pageX,
        o.currentY = l.pageY;
    const m = o.currentX
        , p = o.currentY
        , g = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection
        , _ = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
    if (g && (m <= _ || m >= i.innerWidth - _))
        if (g === "prevent")
            n.preventDefault();
        else
            return;
    Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
        o.startX = m,
        o.startY = p,
        r.touchStartTime = on(),
        e.allowClick = !0,
        e.updateSize(),
        e.swipeDirection = void 0,
        s.threshold > 0 && (r.allowThresholdMove = !1);
    let T = !0;
    c.matches(r.focusableElements) && (T = !1,
        c.nodeName === "SELECT" && (r.isTouched = !1)),
        t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== c && t.activeElement.blur();
    const S = T && e.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || S) && !c.isContentEditable && l.preventDefault(),
        s.freeMode && s.freeMode.enabled && e.freeMode && e.animating && !s.cssMode && e.freeMode.onTouchStart(),
        e.emit("touchStart", l)
}
function cf(n) {
    const e = ui()
        , t = this
        , i = t.touchEventsData
        , { params: r, touches: s, rtlTranslate: o, enabled: a } = t;
    if (!a || !r.simulateTouch && n.pointerType === "mouse")
        return;
    let l = n;
    if (l.originalEvent && (l = l.originalEvent),
        !i.isTouched) {
        i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l);
        return
    }
    const c = i.evCache.findIndex(C => C.pointerId === l.pointerId);
    c >= 0 && (i.evCache[c] = l);
    const u = i.evCache.length > 1 ? i.evCache[0] : l
        , f = u.pageX
        , h = u.pageY;
    if (l.preventedByNestedSwiper) {
        s.startX = f,
            s.startY = h;
        return
    }
    if (!t.allowTouchMove) {
        l.target.matches(i.focusableElements) || (t.allowClick = !1),
            i.isTouched && (Object.assign(s, {
                startX: f,
                startY: h,
                prevX: t.touches.currentX,
                prevY: t.touches.currentY,
                currentX: f,
                currentY: h
            }),
                i.touchStartTime = on());
        return
    }
    if (r.touchReleaseOnEdges && !r.loop) {
        if (t.isVertical()) {
            if (h < s.startY && t.translate <= t.maxTranslate() || h > s.startY && t.translate >= t.minTranslate()) {
                i.isTouched = !1,
                    i.isMoved = !1;
                return
            }
        } else if (f < s.startX && t.translate <= t.maxTranslate() || f > s.startX && t.translate >= t.minTranslate())
            return
    }
    if (e.activeElement && l.target === e.activeElement && l.target.matches(i.focusableElements)) {
        i.isMoved = !0,
            t.allowClick = !1;
        return
    }
    if (i.allowTouchCallbacks && t.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
        return;
    s.currentX = f,
        s.currentY = h;
    const d = s.currentX - s.startX
        , m = s.currentY - s.startY;
    if (t.params.threshold && Math.sqrt(d ** 2 + m ** 2) < t.params.threshold)
        return;
    if (typeof i.isScrolling > "u") {
        let C;
        t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? i.isScrolling = !1 : d * d + m * m >= 25 && (C = Math.atan2(Math.abs(m), Math.abs(d)) * 180 / Math.PI,
            i.isScrolling = t.isHorizontal() ? C > r.touchAngle : 90 - C > r.touchAngle)
    }
    if (i.isScrolling && t.emit("touchMoveOpposite", l),
        typeof i.startMoving > "u" && (s.currentX !== s.startX || s.currentY !== s.startY) && (i.startMoving = !0),
        i.isScrolling || t.zoom && t.params.zoom && t.params.zoom.enabled && i.evCache.length > 1) {
        i.isTouched = !1;
        return
    }
    if (!i.startMoving)
        return;
    t.allowClick = !1,
        !r.cssMode && l.cancelable && l.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && l.stopPropagation();
    let p = t.isHorizontal() ? d : m
        , g = t.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
    r.oneWayMovement && (p = Math.abs(p) * (o ? 1 : -1),
        g = Math.abs(g) * (o ? 1 : -1)),
        s.diff = p,
        p *= r.touchRatio,
        o && (p = -p,
            g = -g);
    const _ = t.touchesDirection;
    t.swipeDirection = p > 0 ? "prev" : "next",
        t.touchesDirection = g > 0 ? "prev" : "next";
    const T = t.params.loop && !r.cssMode;
    if (!i.isMoved) {
        if (T && t.loopFix({
            direction: t.swipeDirection
        }),
            i.startTranslate = t.getTranslate(),
            t.setTransition(0),
            t.animating) {
            const C = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0
            });
            t.wrapperEl.dispatchEvent(C)
        }
        i.allowMomentumBounce = !1,
            r.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0),
            t.emit("sliderFirstMove", l)
    }
    let S;
    i.isMoved && _ !== t.touchesDirection && T && Math.abs(p) >= 1 && (t.loopFix({
        direction: t.swipeDirection,
        setTranslate: !0
    }),
        S = !0),
        t.emit("sliderMove", l),
        i.isMoved = !0,
        i.currentTranslate = p + i.startTranslate;
    let v = !0
        , x = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (x = 0),
        p > 0 ? (T && !S && i.currentTranslate > (r.centeredSlides ? t.minTranslate() - t.size / 2 : t.minTranslate()) && t.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }),
            i.currentTranslate > t.minTranslate() && (v = !1,
                r.resistance && (i.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + p) ** x))) : p < 0 && (T && !S && i.currentTranslate < (r.centeredSlides ? t.maxTranslate() + t.size / 2 : t.maxTranslate()) && t.loopFix({
                    direction: "next",
                    setTranslate: !0,
                    activeSlideIndex: t.slides.length - (r.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
                }),
                    i.currentTranslate < t.maxTranslate() && (v = !1,
                        r.resistance && (i.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - p) ** x))),
        v && (l.preventedByNestedSwiper = !0),
        !t.allowSlideNext && t.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
        !t.allowSlidePrev && t.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
        !t.allowSlidePrev && !t.allowSlideNext && (i.currentTranslate = i.startTranslate),
        r.threshold > 0)
        if (Math.abs(p) > r.threshold || i.allowThresholdMove) {
            if (!i.allowThresholdMove) {
                i.allowThresholdMove = !0,
                    s.startX = s.currentX,
                    s.startY = s.currentY,
                    i.currentTranslate = i.startTranslate,
                    s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY;
                return
            }
        } else {
            i.currentTranslate = i.startTranslate;
            return
        }
    !r.followFinger || r.cssMode || ((r.freeMode && r.freeMode.enabled && t.freeMode || r.watchSlidesProgress) && (t.updateActiveIndex(),
        t.updateSlidesClasses()),
        r.freeMode && r.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
        t.updateProgress(i.currentTranslate),
        t.setTranslate(i.currentTranslate))
}
function uf(n) {
    const e = this
        , t = e.touchEventsData
        , i = t.evCache.findIndex(S => S.pointerId === n.pointerId);
    if (i >= 0 && t.evCache.splice(i, 1),
        ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(n.type) && !(["pointercancel", "contextmenu"].includes(n.type) && (e.browser.isSafari || e.browser.isWebView)))
        return;
    const { params: r, touches: s, rtlTranslate: o, slidesGrid: a, enabled: l } = e;
    if (!l || !r.simulateTouch && n.pointerType === "mouse")
        return;
    let c = n;
    if (c.originalEvent && (c = c.originalEvent),
        t.allowTouchCallbacks && e.emit("touchEnd", c),
        t.allowTouchCallbacks = !1,
        !t.isTouched) {
        t.isMoved && r.grabCursor && e.setGrabCursor(!1),
            t.isMoved = !1,
            t.startMoving = !1;
        return
    }
    r.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const u = on()
        , f = u - t.touchStartTime;
    if (e.allowClick) {
        const S = c.path || c.composedPath && c.composedPath();
        e.updateClickedSlide(S && S[0] || c.target),
            e.emit("tap click", c),
            f < 300 && u - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", c)
    }
    if (t.lastClickTime = on(),
        co(() => {
            e.destroyed || (e.allowClick = !0)
        }
        ),
        !t.isTouched || !t.isMoved || !e.swipeDirection || s.diff === 0 || t.currentTranslate === t.startTranslate) {
        t.isTouched = !1,
            t.isMoved = !1,
            t.startMoving = !1;
        return
    }
    t.isTouched = !1,
        t.isMoved = !1,
        t.startMoving = !1;
    let h;
    if (r.followFinger ? h = o ? e.translate : -e.translate : h = -t.currentTranslate,
        r.cssMode)
        return;
    if (r.freeMode && r.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: h
        });
        return
    }
    let d = 0
        , m = e.slidesSizesGrid[0];
    for (let S = 0; S < a.length; S += S < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
        const v = S < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        typeof a[S + v] < "u" ? h >= a[S] && h < a[S + v] && (d = S,
            m = a[S + v] - a[S]) : h >= a[S] && (d = S,
                m = a[a.length - 1] - a[a.length - 2])
    }
    let p = null
        , g = null;
    r.rewind && (e.isBeginning ? g = r.virtual && r.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (p = 0));
    const _ = (h - a[d]) / m
        , T = d < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    if (f > r.longSwipesMs) {
        if (!r.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (_ >= r.longSwipesRatio ? e.slideTo(r.rewind && e.isEnd ? p : d + T) : e.slideTo(d)),
            e.swipeDirection === "prev" && (_ > 1 - r.longSwipesRatio ? e.slideTo(d + T) : g !== null && _ < 0 && Math.abs(_) > r.longSwipesRatio ? e.slideTo(g) : e.slideTo(d))
    } else {
        if (!r.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (c.target === e.navigation.nextEl || c.target === e.navigation.prevEl) ? c.target === e.navigation.nextEl ? e.slideTo(d + T) : e.slideTo(d) : (e.swipeDirection === "next" && e.slideTo(p !== null ? p : d + T),
            e.swipeDirection === "prev" && e.slideTo(g !== null ? g : d))
    }
}
function Pa() {
    const n = this
        , { params: e, el: t } = n;
    if (t && t.offsetWidth === 0)
        return;
    e.breakpoints && n.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: r, snapGrid: s } = n
        , o = n.virtual && n.params.virtual.enabled;
    n.allowSlideNext = !0,
        n.allowSlidePrev = !0,
        n.updateSize(),
        n.updateSlides(),
        n.updateSlidesClasses();
    const a = o && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && n.isEnd && !n.isBeginning && !n.params.centeredSlides && !a ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.params.loop && !o ? n.slideToLoop(n.realIndex, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0),
        n.autoplay && n.autoplay.running && n.autoplay.paused && (clearTimeout(n.autoplay.resizeTimeout),
            n.autoplay.resizeTimeout = setTimeout(() => {
                n.autoplay && n.autoplay.running && n.autoplay.paused && n.autoplay.resume()
            }
                , 500)),
        n.allowSlidePrev = r,
        n.allowSlideNext = i,
        n.params.watchOverflow && s !== n.snapGrid && n.checkOverflow()
}
function df(n) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && n.preventDefault(),
        e.params.preventClicksPropagation && e.animating && (n.stopPropagation(),
            n.stopImmediatePropagation())))
}
function ff() {
    const n = this
        , { wrapperEl: e, rtlTranslate: t, enabled: i } = n;
    if (!i)
        return;
    n.previousTranslate = n.translate,
        n.isHorizontal() ? n.translate = -e.scrollLeft : n.translate = -e.scrollTop,
        n.translate === 0 && (n.translate = 0),
        n.updateActiveIndex(),
        n.updateSlidesClasses();
    let r;
    const s = n.maxTranslate() - n.minTranslate();
    s === 0 ? r = 0 : r = (n.translate - n.minTranslate()) / s,
        r !== n.progress && n.updateProgress(t ? -n.translate : n.translate),
        n.emit("setTranslate", n.translate, !1)
}
function hf(n) {
    const e = this;
    Xs(e, n.target),
        !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}
let Ma = !1;
function pf() { }
const cc = (n, e) => {
    const t = ui()
        , { params: i, el: r, wrapperEl: s, device: o } = n
        , a = !!i.nested
        , l = e === "on" ? "addEventListener" : "removeEventListener"
        , c = e;
    r[l]("pointerdown", n.onTouchStart, {
        passive: !1
    }),
        t[l]("pointermove", n.onTouchMove, {
            passive: !1,
            capture: a
        }),
        t[l]("pointerup", n.onTouchEnd, {
            passive: !0
        }),
        t[l]("pointercancel", n.onTouchEnd, {
            passive: !0
        }),
        t[l]("pointerout", n.onTouchEnd, {
            passive: !0
        }),
        t[l]("pointerleave", n.onTouchEnd, {
            passive: !0
        }),
        t[l]("contextmenu", n.onTouchEnd, {
            passive: !0
        }),
        (i.preventClicks || i.preventClicksPropagation) && r[l]("click", n.onClick, !0),
        i.cssMode && s[l]("scroll", n.onScroll),
        i.updateOnWindowResize ? n[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Pa, !0) : n[c]("observerUpdate", Pa, !0),
        r[l]("load", n.onLoad, {
            capture: !0
        })
}
    ;
function mf() {
    const n = this
        , e = ui()
        , { params: t } = n;
    n.onTouchStart = lf.bind(n),
        n.onTouchMove = cf.bind(n),
        n.onTouchEnd = uf.bind(n),
        t.cssMode && (n.onScroll = ff.bind(n)),
        n.onClick = df.bind(n),
        n.onLoad = hf.bind(n),
        Ma || (e.addEventListener("touchstart", pf),
            Ma = !0),
        cc(n, "on")
}
function gf() {
    cc(this, "off")
}
var _f = {
    attachEvents: mf,
    detachEvents: gf
};
const Oa = (n, e) => n.grid && e.grid && e.grid.rows > 1;
function vf() {
    const n = this
        , { realIndex: e, initialized: t, params: i, el: r } = n
        , s = i.breakpoints;
    if (!s || s && Object.keys(s).length === 0)
        return;
    const o = n.getBreakpoint(s, n.params.breakpointsBase, n.el);
    if (!o || n.currentBreakpoint === o)
        return;
    const l = (o in s ? s[o] : void 0) || n.originalParams
        , c = Oa(n, i)
        , u = Oa(n, l)
        , f = i.enabled;
    c && !u ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`),
        n.emitContainerClasses()) : !c && u && (r.classList.add(`${i.containerModifierClass}grid`),
            (l.grid.fill && l.grid.fill === "column" || !l.grid.fill && i.grid.fill === "column") && r.classList.add(`${i.containerModifierClass}grid-column`),
            n.emitContainerClasses()),
        ["navigation", "pagination", "scrollbar"].forEach(p => {
            if (typeof l[p] > "u")
                return;
            const g = i[p] && i[p].enabled
                , _ = l[p] && l[p].enabled;
            g && !_ && n[p].disable(),
                !g && _ && n[p].enable()
        }
        );
    const h = l.direction && l.direction !== i.direction
        , d = i.loop && (l.slidesPerView !== i.slidesPerView || h);
    h && t && n.changeDirection(),
        Mt(n.params, l);
    const m = n.params.enabled;
    Object.assign(n, {
        allowTouchMove: n.params.allowTouchMove,
        allowSlideNext: n.params.allowSlideNext,
        allowSlidePrev: n.params.allowSlidePrev
    }),
        f && !m ? n.disable() : !f && m && n.enable(),
        n.currentBreakpoint = o,
        n.emit("_beforeBreakpoint", l),
        d && t && (n.loopDestroy(),
            n.loopCreate(e),
            n.updateSlides()),
        n.emit("breakpoint", l)
}
function wf(n, e, t) {
    if (e === void 0 && (e = "window"),
        !n || e === "container" && !t)
        return;
    let i = !1;
    const r = Dt()
        , s = e === "window" ? r.innerHeight : t.clientHeight
        , o = Object.keys(n).map(a => {
            if (typeof a == "string" && a.indexOf("@") === 0) {
                const l = parseFloat(a.substr(1));
                return {
                    value: s * l,
                    point: a
                }
            }
            return {
                value: a,
                point: a
            }
        }
        );
    o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
    for (let a = 0; a < o.length; a += 1) {
        const { point: l, value: c } = o[a];
        e === "window" ? r.matchMedia(`(min-width: ${c}px)`).matches && (i = l) : c <= t.clientWidth && (i = l)
    }
    return i || "max"
}
var yf = {
    setBreakpoint: vf,
    getBreakpoint: wf
};
function Tf(n, e) {
    const t = [];
    return n.forEach(i => {
        typeof i == "object" ? Object.keys(i).forEach(r => {
            i[r] && t.push(e + r)
        }
        ) : typeof i == "string" && t.push(e + i)
    }
    ),
        t
}
function Sf() {
    const n = this
        , { classNames: e, params: t, rtl: i, el: r, device: s } = n
        , o = Tf(["initialized", t.direction, {
            "free-mode": n.params.freeMode && t.freeMode.enabled
        }, {
                autoheight: t.autoHeight
            }, {
                rtl: i
            }, {
                grid: t.grid && t.grid.rows > 1
            }, {
                "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
            }, {
                android: s.android
            }, {
                ios: s.ios
            }, {
                "css-mode": t.cssMode
            }, {
                centered: t.cssMode && t.centeredSlides
            }, {
                "watch-progress": t.watchSlidesProgress
            }], t.containerModifierClass);
    e.push(...o),
        r.classList.add(...e),
        n.emitContainerClasses()
}
function bf() {
    const n = this
        , { el: e, classNames: t } = n;
    e.classList.remove(...t),
        n.emitContainerClasses()
}
var xf = {
    addClasses: Sf,
    removeClasses: bf
};
function Ef() {
    const n = this
        , { isLocked: e, params: t } = n
        , { slidesOffsetBefore: i } = t;
    if (i) {
        const r = n.slides.length - 1
            , s = n.slidesGrid[r] + n.slidesSizesGrid[r] + i * 2;
        n.isLocked = n.size > s
    } else
        n.isLocked = n.snapGrid.length === 1;
    t.allowSlideNext === !0 && (n.allowSlideNext = !n.isLocked),
        t.allowSlidePrev === !0 && (n.allowSlidePrev = !n.isLocked),
        e && e !== n.isLocked && (n.isEnd = !1),
        e !== n.isLocked && n.emit(n.isLocked ? "lock" : "unlock")
}
var Cf = {
    checkOverflow: Ef
}
    , ka = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopedSlides: null,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
function Pf(n, e) {
    return function (i) {
        i === void 0 && (i = {});
        const r = Object.keys(i)[0]
            , s = i[r];
        if (typeof s != "object" || s === null) {
            Mt(e, i);
            return
        }
        if (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 && n[r] === !0 && (n[r] = {
            auto: !0
        }),
            !(r in n && "enabled" in s)) {
            Mt(e, i);
            return
        }
        n[r] === !0 && (n[r] = {
            enabled: !0
        }),
            typeof n[r] == "object" && !("enabled" in n[r]) && (n[r].enabled = !0),
            n[r] || (n[r] = {
                enabled: !1
            }),
            Mt(e, i)
    }
}
const In = {
    eventsEmitter: bd,
    update: Id,
    translate: Bd,
    transition: Gd,
    slide: Qd,
    loop: rf,
    grabCursor: of,
    events: _f,
    breakpoints: yf,
    checkOverflow: Cf,
    classes: xf
}
    , Rn = {};
class zt {
    constructor() {
        let e, t;
        for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++)
            r[s] = arguments[s];
        r.length === 1 && r[0].constructor && Object.prototype.toString.call(r[0]).slice(8, -1) === "Object" ? t = r[0] : [e, t] = r,
            t || (t = {}),
            t = Mt({}, t),
            e && !t.el && (t.el = e);
        const o = ui();
        if (t.el && typeof t.el == "string" && o.querySelectorAll(t.el).length > 1) {
            const u = [];
            return o.querySelectorAll(t.el).forEach(f => {
                const h = Mt({}, t, {
                    el: f
                });
                u.push(new zt(h))
            }
            ),
                u
        }
        const a = this;
        a.__swiper__ = !0,
            a.support = ac(),
            a.device = vd({
                userAgent: t.userAgent
            }),
            a.browser = yd(),
            a.eventsListeners = {},
            a.eventsAnyListeners = [],
            a.modules = [...a.__modules__],
            t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
        const l = {};
        a.modules.forEach(u => {
            u({
                params: t,
                swiper: a,
                extendParams: Pf(t, l),
                on: a.on.bind(a),
                once: a.once.bind(a),
                off: a.off.bind(a),
                emit: a.emit.bind(a)
            })
        }
        );
        const c = Mt({}, ka, l);
        return a.params = Mt({}, c, Rn, t),
            a.originalParams = Mt({}, a.params),
            a.passedParams = Mt({}, t),
            a.params && a.params.on && Object.keys(a.params.on).forEach(u => {
                a.on(u, a.params.on[u])
            }
            ),
            a.params && a.params.onAny && a.onAny(a.params.onAny),
            Object.assign(a, {
                enabled: a.params.enabled,
                el: e,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal() {
                    return a.params.direction === "horizontal"
                },
                isVertical() {
                    return a.params.direction === "vertical"
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                },
                allowSlideNext: a.params.allowSlideNext,
                allowSlidePrev: a.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: a.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    evCache: []
                },
                allowClick: !0,
                allowTouchMove: a.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }),
            a.emit("_swiper"),
            a.params.init && a.init(),
            a
    }
    getSlideIndex(e) {
        const { slidesEl: t, params: i } = this
            , r = yi(t, `.${i.slideClass}, swiper-slide`)
            , s = Ea(r[0]);
        return Ea(e) - s
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter(t => t.getAttribute("data-swiper-slide-index") * 1 === e)[0])
    }
    recalcSlides() {
        const e = this
            , { slidesEl: t, params: i } = e;
        e.slides = yi(t, `.${i.slideClass}, swiper-slide`)
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0,
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"))
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1,
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"))
    }
    setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const r = i.minTranslate()
            , o = (i.maxTranslate() - r) * e + r;
        i.translateTo(o, typeof t > "u" ? 0 : t),
            i.updateActiveIndex(),
            i.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = e.el.className.split(" ").filter(i => i.indexOf("swiper") === 0 || i.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", t.join(" "))
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(i => i.indexOf("swiper-slide") === 0 || i.indexOf(t.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = [];
        e.slides.forEach(i => {
            const r = e.getSlideClasses(i);
            t.push({
                slideEl: i,
                classNames: r
            }),
                e.emit("_slideClass", i, r)
        }
        ),
            e.emit("_slideClasses", t)
    }
    slidesPerViewDynamic(e, t) {
        e === void 0 && (e = "current"),
            t === void 0 && (t = !1);
        const i = this
            , { params: r, slides: s, slidesGrid: o, slidesSizesGrid: a, size: l, activeIndex: c } = i;
        let u = 1;
        if (r.centeredSlides) {
            let f = s[c] ? s[c].swiperSlideSize : 0, h;
            for (let d = c + 1; d < s.length; d += 1)
                s[d] && !h && (f += s[d].swiperSlideSize,
                    u += 1,
                    f > l && (h = !0));
            for (let d = c - 1; d >= 0; d -= 1)
                s[d] && !h && (f += s[d].swiperSlideSize,
                    u += 1,
                    f > l && (h = !0))
        } else if (e === "current")
            for (let f = c + 1; f < s.length; f += 1)
                (t ? o[f] + a[f] - o[c] < l : o[f] - o[c] < l) && (u += 1);
        else
            for (let f = c - 1; f >= 0; f -= 1)
                o[c] - o[f] < l && (u += 1);
        return u
    }
    update() {
        const e = this;
        if (!e || e.destroyed)
            return;
        const { snapGrid: t, params: i } = e;
        i.breakpoints && e.setBreakpoint(),
            [...e.el.querySelectorAll('[loading="lazy"]')].forEach(o => {
                o.complete && Xs(e, o)
            }
            ),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses();
        function r() {
            const o = e.rtlTranslate ? e.translate * -1 : e.translate
                , a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
            e.setTranslate(a),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
        }
        let s;
        if (i.freeMode && i.freeMode.enabled && !i.cssMode)
            r(),
                i.autoHeight && e.updateAutoHeight();
        else {
            if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
                const o = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
                s = e.slideTo(o.length - 1, 0, !1, !0)
            } else
                s = e.slideTo(e.activeIndex, 0, !1, !0);
            s || r()
        }
        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update")
    }
    changeDirection(e, t) {
        t === void 0 && (t = !0);
        const i = this
            , r = i.params.direction;
        return e || (e = r === "horizontal" ? "vertical" : "horizontal"),
            e === r || e !== "horizontal" && e !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${r}`),
                i.el.classList.add(`${i.params.containerModifierClass}${e}`),
                i.emitContainerClasses(),
                i.params.direction = e,
                i.slides.forEach(s => {
                    e === "vertical" ? s.style.width = "" : s.style.height = ""
                }
                ),
                i.emit("changeDirection"),
                t && i.update()),
            i
    }
    changeLanguageDirection(e) {
        const t = this;
        t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl",
            t.rtlTranslate = t.params.direction === "horizontal" && t.rtl,
            t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
                t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
                    t.el.dir = "ltr"),
            t.update())
    }
    mount(e) {
        const t = this;
        if (t.mounted)
            return !0;
        let i = e || t.params.el;
        if (typeof i == "string" && (i = document.querySelector(i)),
            !i)
            return !1;
        i.swiper = t,
            i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === "SWIPER-CONTAINER" && (t.isElement = !0);
        const r = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let o = (() => i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(r()) : yi(i, r())[0])();
        return !o && t.params.createElements && (o = oc("div", t.params.wrapperClass),
            i.append(o),
            yi(i, `.${t.params.slideClass}`).forEach(a => {
                o.append(a)
            }
            )),
            Object.assign(t, {
                el: i,
                wrapperEl: o,
                slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : o,
                hostEl: t.isElement ? i.parentNode.host : i,
                mounted: !0,
                rtl: i.dir.toLowerCase() === "rtl" || Di(i, "direction") === "rtl",
                rtlTranslate: t.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || Di(i, "direction") === "rtl"),
                wrongRTL: Di(o, "display") === "-webkit-box"
            }),
            !0
    }
    init(e) {
        const t = this;
        if (t.initialized || t.mount(e) === !1)
            return t;
        t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
            t.params.loop && t.loopCreate(),
            t.attachEvents();
        const r = [...t.el.querySelectorAll('[loading="lazy"]')];
        return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            r.forEach(s => {
                s.complete ? Xs(t, s) : s.addEventListener("load", o => {
                    Xs(t, o.target)
                }
                )
            }
            ),
            uo(t),
            t.initialized = !0,
            uo(t),
            t.emit("init"),
            t.emit("afterInit"),
            t
    }
    destroy(e, t) {
        e === void 0 && (e = !0),
            t === void 0 && (t = !0);
        const i = this
            , { params: r, el: s, wrapperEl: o, slides: a } = i;
        return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"),
            i.initialized = !1,
            i.detachEvents(),
            r.loop && i.loopDestroy(),
            t && (i.removeClasses(),
                s.removeAttribute("style"),
                o.removeAttribute("style"),
                a && a.length && a.forEach(l => {
                    l.classList.remove(r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass),
                        l.removeAttribute("style"),
                        l.removeAttribute("data-swiper-slide-index")
                }
                )),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach(l => {
                i.off(l)
            }
            ),
            e !== !1 && (i.el.swiper = null,
                cd(i)),
            i.destroyed = !0),
            null
    }
    static extendDefaults(e) {
        Mt(Rn, e)
    }
    static get extendedDefaults() {
        return Rn
    }
    static get defaults() {
        return ka
    }
    static installModule(e) {
        zt.prototype.__modules__ || (zt.prototype.__modules__ = []);
        const t = zt.prototype.__modules__;
        typeof e == "function" && t.indexOf(e) < 0 && t.push(e)
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach(t => zt.installModule(t)),
            zt) : (zt.installModule(e),
                zt)
    }
}
Object.keys(In).forEach(n => {
    Object.keys(In[n]).forEach(e => {
        zt.prototype[e] = In[n][e]
    }
    )
}
);
zt.use([Td, Sd]);
function Mf(n) {
    let { swiper: e, extendParams: t, on: i, emit: r, params: s } = n;
    e.autoplay = {
        running: !1,
        paused: !1,
        timeLeft: 0
    },
        t({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        });
    let o, a, l = s && s.autoplay ? s.autoplay.delay : 3e3, c = s && s.autoplay ? s.autoplay.delay : 3e3, u, f = new Date().getTime, h, d, m, p, g, _;
    function T(L) {
        !e || e.destroyed || !e.wrapperEl || L.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", T),
            E())
    }
    const S = () => {
        if (e.destroyed || !e.autoplay.running)
            return;
        e.autoplay.paused ? h = !0 : h && (c = u,
            h = !1);
        const L = e.autoplay.paused ? u : f + c - new Date().getTime();
        e.autoplay.timeLeft = L,
            r("autoplayTimeLeft", L, L / l),
            a = requestAnimationFrame(() => {
                S()
            }
            )
    }
        , v = () => {
            let L;
            return e.virtual && e.params.virtual.enabled ? L = e.slides.filter($ => $.classList.contains("swiper-slide-active"))[0] : L = e.slides[e.activeIndex],
                L ? parseInt(L.getAttribute("data-swiper-autoplay"), 10) : void 0
        }
        , x = L => {
            if (e.destroyed || !e.autoplay.running)
                return;
            cancelAnimationFrame(a),
                S();
            let V = typeof L > "u" ? e.params.autoplay.delay : L;
            l = e.params.autoplay.delay,
                c = e.params.autoplay.delay;
            const $ = v();
            !Number.isNaN($) && $ > 0 && typeof L > "u" && (V = $,
                l = $,
                c = $),
                u = V;
            const y = e.params.speed
                , ne = () => {
                    !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(y, !0, !0),
                        r("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, y, !0, !0),
                            r("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(y, !0, !0),
                                r("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, y, !0, !0),
                                    r("autoplay")),
                        e.params.cssMode && (f = new Date().getTime(),
                            requestAnimationFrame(() => {
                                x()
                            }
                            )))
                }
                ;
            return V > 0 ? (clearTimeout(o),
                o = setTimeout(() => {
                    ne()
                }
                    , V)) : requestAnimationFrame(() => {
                        ne()
                    }
                    ),
                V
        }
        , C = () => {
            e.autoplay.running = !0,
                x(),
                r("autoplayStart")
        }
        , b = () => {
            e.autoplay.running = !1,
                clearTimeout(o),
                cancelAnimationFrame(a),
                r("autoplayStop")
        }
        , M = (L, V) => {
            if (e.destroyed || !e.autoplay.running)
                return;
            clearTimeout(o),
                L || (_ = !0);
            const $ = () => {
                r("autoplayPause"),
                    e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", T) : E()
            }
                ;
            if (e.autoplay.paused = !0,
                V) {
                g && (u = e.params.autoplay.delay),
                    g = !1,
                    $();
                return
            }
            u = (u || e.params.autoplay.delay) - (new Date().getTime() - f),
                !(e.isEnd && u < 0 && !e.params.loop) && (u < 0 && (u = 0),
                    $())
        }
        , E = () => {
            e.isEnd && u < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (f = new Date().getTime(),
                _ ? (_ = !1,
                    x(u)) : x(),
                e.autoplay.paused = !1,
                r("autoplayResume"))
        }
        , A = () => {
            if (e.destroyed || !e.autoplay.running)
                return;
            const L = ui();
            L.visibilityState === "hidden" && (_ = !0,
                M(!0)),
                L.visibilityState === "visible" && E()
        }
        , k = L => {
            L.pointerType === "mouse" && (_ = !0,
                !(e.animating || e.autoplay.paused) && M(!0))
        }
        , O = L => {
            L.pointerType === "mouse" && e.autoplay.paused && E()
        }
        , D = () => {
            e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", k),
                e.el.addEventListener("pointerleave", O))
        }
        , I = () => {
            e.el.removeEventListener("pointerenter", k),
                e.el.removeEventListener("pointerleave", O)
        }
        , B = () => {
            ui().addEventListener("visibilitychange", A)
        }
        , H = () => {
            ui().removeEventListener("visibilitychange", A)
        }
        ;
    i("init", () => {
        e.params.autoplay.enabled && (D(),
            B(),
            f = new Date().getTime(),
            C())
    }
    ),
        i("destroy", () => {
            I(),
                H(),
                e.autoplay.running && b()
        }
        ),
        i("beforeTransitionStart", (L, V, $) => {
            e.destroyed || !e.autoplay.running || ($ || !e.params.autoplay.disableOnInteraction ? M(!0, !0) : b())
        }
        ),
        i("sliderFirstMove", () => {
            if (!(e.destroyed || !e.autoplay.running)) {
                if (e.params.autoplay.disableOnInteraction) {
                    b();
                    return
                }
                d = !0,
                    m = !1,
                    _ = !1,
                    p = setTimeout(() => {
                        _ = !0,
                            m = !0,
                            M(!0)
                    }
                        , 200)
            }
        }
        ),
        i("touchEnd", () => {
            if (!(e.destroyed || !e.autoplay.running || !d)) {
                if (clearTimeout(p),
                    clearTimeout(o),
                    e.params.autoplay.disableOnInteraction) {
                    m = !1,
                        d = !1;
                    return
                }
                m && e.params.cssMode && E(),
                    m = !1,
                    d = !1
            }
        }
        ),
        i("slideChange", () => {
            e.destroyed || !e.autoplay.running || (g = !0)
        }
        ),
        Object.assign(e.autoplay, {
            start: C,
            stop: b,
            pause: M,
            resume: E
        })
}
function Of(n) {
    const { effect: e, swiper: t, on: i, setTranslate: r, setTransition: s, overwriteParams: o, perspective: a, recreateShadows: l, getEffectParams: c } = n;
    i("beforeInit", () => {
        if (t.params.effect !== e)
            return;
        t.classNames.push(`${t.params.containerModifierClass}${e}`),
            a && a() && t.classNames.push(`${t.params.containerModifierClass}3d`);
        const f = o ? o() : {};
        Object.assign(t.params, f),
            Object.assign(t.originalParams, f)
    }
    ),
        i("setTranslate", () => {
            t.params.effect === e && r()
        }
        ),
        i("setTransition", (f, h) => {
            t.params.effect === e && s(h)
        }
        ),
        i("transitionEnd", () => {
            if (t.params.effect === e && l) {
                if (!c || !c().slideShadows)
                    return;
                t.slides.forEach(f => {
                    f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(h => h.remove())
                }
                ),
                    l()
            }
        }
        );
    let u;
    i("virtualUpdate", () => {
        t.params.effect === e && (t.slides.length || (u = !0),
            requestAnimationFrame(() => {
                u && t.slides && t.slides.length && (r(),
                    u = !1)
            }
            ))
    }
    )
}
function kf(n, e) {
    const t = No(e);
    return t !== e && (t.style.backfaceVisibility = "hidden",
        t.style["-webkit-backface-visibility"] = "hidden"),
        t
}
function Aa(n, e, t) {
    const i = `swiper-slide-shadow${t ? `-${t}` : ""}${n ? ` swiper-slide-shadow-${n}` : ""}`
        , r = No(e);
    let s = r.querySelector(`.${i.split(" ").join(".")}`);
    return s || (s = oc("div", i.split(" ")),
        r.append(s)),
        s
}
function Af(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0
        }
    }),
        Of({
            effect: "coverflow",
            swiper: e,
            on: i,
            setTranslate: () => {
                const { width: o, height: a, slides: l, slidesSizesGrid: c } = e
                    , u = e.params.coverflowEffect
                    , f = e.isHorizontal()
                    , h = e.translate
                    , d = f ? -h + o / 2 : -h + a / 2
                    , m = f ? u.rotate : -u.rotate
                    , p = u.depth;
                for (let g = 0, _ = l.length; g < _; g += 1) {
                    const T = l[g]
                        , S = c[g]
                        , v = T.swiperSlideOffset
                        , x = (d - v - S / 2) / S
                        , C = typeof u.modifier == "function" ? u.modifier(x) : x * u.modifier;
                    let b = f ? m * C : 0
                        , M = f ? 0 : m * C
                        , E = -p * Math.abs(C)
                        , A = u.stretch;
                    typeof A == "string" && A.indexOf("%") !== -1 && (A = parseFloat(u.stretch) / 100 * S);
                    let k = f ? 0 : A * C
                        , O = f ? A * C : 0
                        , D = 1 - (1 - u.scale) * Math.abs(C);
                    Math.abs(O) < .001 && (O = 0),
                        Math.abs(k) < .001 && (k = 0),
                        Math.abs(E) < .001 && (E = 0),
                        Math.abs(b) < .001 && (b = 0),
                        Math.abs(M) < .001 && (M = 0),
                        Math.abs(D) < .001 && (D = 0);
                    const I = `translate3d(${O}px,${k}px,${E}px)  rotateX(${M}deg) rotateY(${b}deg) scale(${D})`
                        , B = kf(u, T);
                    if (B.style.transform = I,
                        T.style.zIndex = -Math.abs(Math.round(C)) + 1,
                        u.slideShadows) {
                        let H = f ? T.querySelector(".swiper-slide-shadow-left") : T.querySelector(".swiper-slide-shadow-top")
                            , L = f ? T.querySelector(".swiper-slide-shadow-right") : T.querySelector(".swiper-slide-shadow-bottom");
                        H || (H = Aa("coverflow", T, f ? "left" : "top")),
                            L || (L = Aa("coverflow", T, f ? "right" : "bottom")),
                            H && (H.style.opacity = C > 0 ? C : 0),
                            L && (L.style.opacity = -C > 0 ? -C : 0)
                    }
                }
            }
            ,
            setTransition: o => {
                e.slides.map(l => No(l)).forEach(l => {
                    l.style.transitionDuration = `${o}ms`,
                        l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c => {
                            c.style.transitionDuration = `${o}ms`
                        }
                        )
                }
                )
            }
            ,
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0
            })
        })
}
class Lf {
    constructor() {
        this.kv = w.selector(".p-protection-kv"),
            this.kv && (this.inner = w.selector(".p-protection-kv__inner"),
                se.add(this.listen.bind(this)))
    }
    listen(e) {
        switch (e) {
            case se.LOAD:
                this.kvSetting(),
                    this.slideSetting();
                break
        }
    }
    kvSetting() {
        w.addClass(this.inner, "-inview"),
            this.tree1 = w.selector(".p-protection-kv .tree1"),
            this.tree2 = w.selector(".p-protection-kv .tree2"),
            this.tree3 = w.selector(".p-protection-kv .tree3"),
            this.tree4 = w.selector(".p-protection-kv .tree4");
        let e = .6;
        this.tl1 = J.timeline({
            pause: !0
        }),
            this.tl1.to(this.tree1, {
                autoAlpha: 1,
                delay: .7,
                ease: "sine.out",
                duration: e
            }),
            this.tl1.to(this.tree1, {
                autoAlpha: 0,
                ease: "sine.out",
                duration: e
            }),
            this.tl1.fromTo(this.tree2, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: "sine.out",
                duration: e
            }, "<"),
            this.tl1.to(this.tree2, {
                autoAlpha: 0,
                ease: "sine.out",
                duration: e
            }),
            this.tl1.fromTo(this.tree3, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: "sine.out",
                duration: e
            }, "<"),
            this.tl1.fromTo(this.tree4, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: "sine.out",
                duration: e
            })
    }
    slideSetting() {
        w.selectorAll(".p-protection-movie__slide .swiper-slide").forEach((i, r) => {
            const s = i.cloneNode(!0);
            i.parentNode.appendChild(s)
        }
        );
        const t = new zt(".p-protection-movie__slide .swiper", {
            modules: [Af, Mf],
            init: !1,
            effect: "coverflow",
            grabCursor: !0,
            centeredSlides: !0,
            slidesPerView: "auto",
            speed: 700,
            loop: !0,
            autoplay: {
                delay: 3e3,
                disableOnInteraction: !1
            },
            spaceBetween: 15 / 390 * window.innerWidth,
            coverflowEffect: {
                depth: 1,
                modifier: 1,
                rotate: 15,
                stretch: 0,
                slideShadows: !1
            },
            breakpoints: {
                768: {
                    spaceBetween: 70
                }
            }
        });
        t.on("init", function () {
            F.ee.emit("movie-thumb-ready"),
                F.ee.on("slide-next", () => {
                    t.slideNext()
                }
                ),
                F.ee.on("slide-prev", () => {
                    t.slidePrev()
                }
                ),
                F.ee.on("show-movie", () => {
                    t.autoplay.stop()
                }
                ),
                F.ee.on("hide-movie", () => {
                    t.autoplay.start()
                }
                ),
                new IntersectionObserver(r => {
                    r.forEach(s => {
                        s.target,
                            s.isIntersecting ? t.autoplay.start() : t.autoplay.stop()
                    }
                    )
                }
                    , {
                        rootMargin: "0% 0%",
                        threshold: 0
                    }).observe(w.selector(".p-protection-movie__inner"))
        }),
            t.init()
    }
}
class Df {
    constructor() {
        this.kv = w.selector(".p-action-kv"),
            this.kv && (J.registerPlugin(G),
                this.inner = w.selector(".p-action-kv__inner"),
                this.year_sticky = w.selector(".p-action-history__list .year-sticky"),
                this.year_sticky_inner = w.selector(".p-action-history__list .year-sticky__inner"),
                se.add(this.listen.bind(this)))
    }
}
class Nf {
    constructor() {
        this.setTabletViewport(),
            this.setLoadHandler(),
            se.add(this.listen.bind(this))
    }
    listen(e) {
        switch (e) {
            case se.READY:
                this.ready();
                break;
            case se.RESIZE:
                this.resize(),
                    this.rotate();
                break;
            case se.LOAD:
                this.loaded();
                break
        }
    }
    ready() {
        this.maxH = window.innerHeight,
            this.html = document.documentElement,
            this.contentsType = document.body.dataset.contentsType,
            this.isTop = this.contentsType === "top",
            zn.init(),
            se.resize(),
            se.scroll(),
            new od,
            new ad,
            new Lf,
            new Df,
            new Qu,
            this.scrollTrigger(),
            w.canUseWebP(e => {
                e || document.body.classList.add("no-webp")
            }
            )
    }
    loaded() {
        F.ee.emit("ready", "dom")
    }
    setLoadHandler() {
        this.isLoaded = !1;
        let e = {
            dom: !1
        };
        F.ee.on("ready", t => {
            if (e[t] = !0,
                e.dom) {
                if (this.isLoaded)
                    return;
                this.isLoaded = !0,
                    se.resize(),
                    se.scroll(),
                    w.delayedCall(() => {
                        mc.init(),
                            F.ee.emit("start")
                    }
                        , 1 / 30)
            }
        }
        )
    }

    resize() {
        window.innerHeight > this.maxH && (this.maxH = window.innerHeight),
            ae.setViewFlag(),
            document.documentElement.style.setProperty("--vh", `${se.size.wh}px`),
            document.documentElement.style.setProperty("--ih", `${window.innerHeight}px`),
            document.documentElement.style.setProperty("--maxh", `${this.maxH}px`)
    }
    rotate() {
        if (!ae.isTablet)
            return;
        let e = document.body;
        se.size.isPortrait ? (w.removeClass(e, "-landscape"),
            w.addClass(e, "-portrait")) : (w.removeClass(e, "-portrait"),
                w.addClass(e, "-landscape")),
            ae.setViewFlag()
    }
    setTabletViewport() {
        ae.isTablet && (w.addClass(document.body, "-tablet"),
            document.querySelector("meta[name='viewport']").setAttribute("content", "width=1366"))
    }
}
new Nf;
