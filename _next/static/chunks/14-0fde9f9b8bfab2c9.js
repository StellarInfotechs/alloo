"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [14], {
        30622: function(t, e, n) {
            var i = n(2265),
                r = Symbol.for("react.element"),
                s = Symbol.for("react.fragment"),
                o = Object.prototype.hasOwnProperty,
                a = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                l = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function u(t, e, n) {
                var i, s = {},
                    u = null,
                    h = null;
                for (i in void 0 !== n && (u = "" + n), void 0 !== e.key && (u = "" + e.key), void 0 !== e.ref && (h = e.ref), e) o.call(e, i) && !l.hasOwnProperty(i) && (s[i] = e[i]);
                if (t && t.defaultProps)
                    for (i in e = t.defaultProps) void 0 === s[i] && (s[i] = e[i]);
                return {
                    $$typeof: r,
                    type: t,
                    key: u,
                    ref: h,
                    props: s,
                    _owner: a.current
                }
            }
            e.Fragment = s, e.jsx = u, e.jsxs = u
        },
        57437: function(t, e, n) {
            t.exports = n(30622)
        },
        57042: function(t, e, n) {
            e.Z = function() {
                for (var t, e, n = 0, i = ""; n < arguments.length;)(t = arguments[n++]) && (e = function t(e) {
                    var n, i, r = "";
                    if ("string" == typeof e || "number" == typeof e) r += e;
                    else if ("object" == typeof e) {
                        if (Array.isArray(e))
                            for (n = 0; n < e.length; n++) e[n] && (i = t(e[n])) && (r && (r += " "), r += i);
                        else
                            for (n in e) e[n] && (r && (r += " "), r += n)
                    }
                    return r
                }(t)) && (i && (i += " "), i += e);
                return i
            }
        },
        63836: function(t, e, n) {
            n.d(e, {
                y: function() {
                    return D
                }
            });
            var i = n(38267),
                r = n(97565),
                s = n(46567),
                o = n(19066),
                a = n(26977),
                l = n(927),
                u = n(90933),
                h = n(30484);
            let c = (0, o._)(.33, 1.53, .69, .99),
                d = (0, h.M)(c),
                f = (0, u.o)(d),
                p = {
                    linear: a.Z,
                    easeIn: i.YQ,
                    easeInOut: i.mZ,
                    easeOut: i.Vv,
                    circIn: l.Z7,
                    circInOut: l.X7,
                    circOut: l.Bn,
                    backIn: d,
                    backInOut: f,
                    backOut: c,
                    anticipate: t => (t *= 2) < 1 ? .5 * d(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                },
                m = t => {
                    if (Array.isArray(t)) {
                        (0, s.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, n, i, r] = t;
                        return (0, o._)(e, n, i, r)
                    }
                    return "string" == typeof t ? ((0, s.k)(void 0 !== p[t], `Invalid easing type '${t}'`), p[t]) : t
                };
            var v = n(3245),
                g = n(79448);

            function y({
                duration: t = 300,
                keyframes: e,
                times: n,
                ease: s = "easeInOut"
            }) {
                let o = (0, r.N)(s) ? s.map(m) : m(s),
                    a = {
                        done: !1,
                        value: e[0]
                    },
                    l = (n && n.length === e.length ? n : (0, g.Y)(e)).map(e => e * t),
                    u = (0, v.s)(l, e, {
                        ease: Array.isArray(o) ? o : e.map(() => o || i.mZ).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (a.value = u(e), a.done = e >= t, a)
                }
            }
            var x = n(63816),
                P = n(92252);

            function b({
                keyframes: t,
                velocity: e = 0,
                power: n = .8,
                timeConstant: i = 325,
                bounceDamping: r = 10,
                bounceStiffness: s = 500,
                modifyTarget: o,
                min: a,
                max: l,
                restDelta: u = .5,
                restSpeed: h
            }) {
                let c, d;
                let f = t[0],
                    p = {
                        done: !1,
                        value: f
                    },
                    m = t => void 0 !== a && t < a || void 0 !== l && t > l,
                    v = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l,
                    g = n * e,
                    y = f + g,
                    b = void 0 === o ? y : o(y);
                b !== y && (g = b - f);
                let w = t => -g * Math.exp(-t / i),
                    A = t => b + w(t),
                    T = t => {
                        let e = w(t),
                            n = A(t);
                        p.done = Math.abs(e) <= u, p.value = p.done ? b : n
                    },
                    S = t => {
                        m(p.value) && (c = t, d = (0, x.S)({
                            keyframes: [p.value, v(p.value)],
                            velocity: (0, P.P)(A, t, p.value),
                            damping: r,
                            stiffness: s,
                            restDelta: u,
                            restSpeed: h
                        }))
                    };
                return S(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (d || void 0 !== c || (e = !0, T(t), S(t)), void 0 !== c && t > c) ? d.next(t - c) : (e || T(t), p)
                    }
                }
            }
            var w = n(72363);
            let A = t => {
                let e = ({
                    timestamp: e
                }) => t(e);
                return {
                    start: () => w.Wi.update(e, !0),
                    stop: () => (0, w.Pn)(e),
                    now: () => w.frameData.isProcessing ? w.frameData.timestamp : performance.now()
                }
            };
            var T = n(43021),
                S = n(81356),
                C = n(41064);
            let V = {
                decay: b,
                inertia: b,
                tween: y,
                keyframes: y,
                spring: x.S
            };

            function D({
                autoplay: t = !0,
                delay: e = 0,
                driver: n = A,
                keyframes: i,
                type: r = "keyframes",
                repeat: s = 0,
                repeatDelay: o = 0,
                repeatType: a = "loop",
                onPlay: l,
                onStop: u,
                onComplete: h,
                onUpdate: c,
                ...d
            }) {
                let f, p, m, g, x, P = 1,
                    b = !1,
                    w = () => {
                        p = new Promise(t => {
                            f = t
                        })
                    };
                w();
                let D = V[r] || y;
                D !== y && "number" != typeof i[0] && (g = (0, v.s)([0, 100], i, {
                    clamp: !1
                }), i = [0, 100]);
                let E = D({ ...d,
                    keyframes: i
                });
                "mirror" === a && (x = D({ ...d,
                    keyframes: [...i].reverse(),
                    velocity: -(d.velocity || 0)
                }));
                let M = "idle",
                    R = null,
                    k = null,
                    L = null;
                null === E.calculatedDuration && s && (E.calculatedDuration = (0, C.i)(E));
                let {
                    calculatedDuration: j
                } = E, F = 1 / 0, B = 1 / 0;
                null !== j && (B = (F = j + o) * (s + 1) - o);
                let O = 0,
                    $ = t => {
                        if (null === k) return;
                        P > 0 && (k = Math.min(k, t)), P < 0 && (k = Math.min(t - B / P, k));
                        let n = (O = null !== R ? R : Math.round(t - k) * P) - e * (P >= 0 ? 1 : -1),
                            r = P >= 0 ? n < 0 : n > B;
                        O = Math.max(n, 0), "finished" === M && null === R && (O = B);
                        let l = O,
                            u = E;
                        if (s) {
                            let t = O / F,
                                e = Math.floor(t),
                                n = t % 1;
                            !n && t >= 1 && (n = 1), 1 === n && e--;
                            let i = !!((e = Math.min(e, s + 1)) % 2);
                            i && ("reverse" === a ? (n = 1 - n, o && (n -= o / F)) : "mirror" === a && (u = x));
                            let r = (0, T.u)(0, 1, n);
                            O > B && (r = "reverse" === a && i ? 1 : 0), l = r * F
                        }
                        let h = r ? {
                            done: !1,
                            value: i[0]
                        } : u.next(l);
                        g && (h.value = g(h.value));
                        let {
                            done: d
                        } = h;
                        r || null === j || (d = P >= 0 ? O >= B : O <= 0);
                        let f = null === R && ("finished" === M || "running" === M && d);
                        return c && c(h.value), f && U(), h
                    },
                    I = () => {
                        m && m.stop(), m = void 0
                    },
                    W = () => {
                        M = "idle", I(), f(), w(), k = L = null
                    },
                    U = () => {
                        M = "finished", h && h(), I(), f()
                    },
                    N = () => {
                        if (b) return;
                        m || (m = n($));
                        let t = m.now();
                        l && l(), null !== R ? k = t - R : k && "finished" !== M || (k = t), "finished" === M && w(), L = k, R = null, M = "running", m.start()
                    };
                t && N();
                let X = {
                    then: (t, e) => p.then(t, e),
                    get time() {
                        return (0, S.X)(O)
                    },
                    set time(newTime) {
                        O = newTime = (0, S.w)(newTime), null === R && m && 0 !== P ? k = m.now() - newTime / P : R = newTime
                    },
                    get duration() {
                        let t = null === E.calculatedDuration ? (0, C.i)(E) : E.calculatedDuration;
                        return (0, S.X)(t)
                    },
                    get speed() {
                        return P
                    },
                    set speed(newSpeed) {
                        if (newSpeed === P || !m) return;
                        P = newSpeed, X.time = (0, S.X)(O)
                    },
                    get state() {
                        return M
                    },
                    play: N,
                    pause: () => {
                        M = "paused", R = O
                    },
                    stop: () => {
                        b = !0, "idle" !== M && (M = "idle", u && u(), W())
                    },
                    cancel: () => {
                        null !== L && $(L), W()
                    },
                    complete: () => {
                        M = "finished"
                    },
                    sample: t => (k = 0, $(t))
                };
                return X
            }
        },
        63816: function(t, e, n) {
            n.d(e, {
                S: function() {
                    return c
                }
            });
            var i = n(81356),
                r = n(92252),
                s = n(46567),
                o = n(43021);

            function a(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let l = ["duration", "bounce"],
                u = ["stiffness", "damping", "mass"];

            function h(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function c({
                keyframes: t,
                restDelta: e,
                restSpeed: n,
                ...c
            }) {
                let d;
                let f = t[0],
                    p = t[t.length - 1],
                    m = {
                        done: !1,
                        value: f
                    },
                    {
                        stiffness: v,
                        damping: g,
                        mass: y,
                        velocity: x,
                        duration: P,
                        isResolvedFromDuration: b
                    } = function(t) {
                        let e = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!h(t, u) && h(t, l)) {
                            let n = function({
                                duration: t = 800,
                                bounce: e = .25,
                                velocity: n = 0,
                                mass: r = 1
                            }) {
                                let l, u;
                                (0, s.K)(t <= (0, i.w)(10), "Spring duration must be 10 seconds or less");
                                let h = 1 - e;
                                h = (0, o.u)(.05, 1, h), t = (0, o.u)(.01, 10, (0, i.X)(t)), h < 1 ? (l = e => {
                                    let i = e * h,
                                        r = i * t;
                                    return .001 - (i - n) / a(e, h) * Math.exp(-r)
                                }, u = e => {
                                    let i = e * h * t,
                                        r = Math.pow(h, 2) * Math.pow(e, 2) * t,
                                        s = a(Math.pow(e, 2), h);
                                    return (i * n + n - r) * Math.exp(-i) * (-l(e) + .001 > 0 ? -1 : 1) / s
                                }) : (l = e => -.001 + Math.exp(-e * t) * ((e - n) * t + 1), u = e => t * t * (n - e) * Math.exp(-e * t));
                                let c = function(t, e, n) {
                                    let i = n;
                                    for (let n = 1; n < 12; n++) i -= t(i) / e(i);
                                    return i
                                }(l, u, 5 / t);
                                if (t = (0, i.w)(t), isNaN(c)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: t
                                }; {
                                    let e = Math.pow(c, 2) * r;
                                    return {
                                        stiffness: e,
                                        damping: 2 * h * Math.sqrt(r * e),
                                        duration: t
                                    }
                                }
                            }(t);
                            (e = { ...e,
                                ...n,
                                velocity: 0,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return e
                    }(c),
                    w = x ? -(0, i.X)(x) : 0,
                    A = g / (2 * Math.sqrt(v * y)),
                    T = p - f,
                    S = (0, i.X)(Math.sqrt(v / y)),
                    C = 5 > Math.abs(T);
                if (n || (n = C ? .01 : 2), e || (e = C ? .005 : .5), A < 1) {
                    let t = a(S, A);
                    d = e => p - Math.exp(-A * S * e) * ((w + A * S * T) / t * Math.sin(t * e) + T * Math.cos(t * e))
                } else if (1 === A) d = t => p - Math.exp(-S * t) * (T + (w + S * T) * t);
                else {
                    let t = S * Math.sqrt(A * A - 1);
                    d = e => {
                        let n = Math.exp(-A * S * e),
                            i = Math.min(t * e, 300);
                        return p - n * ((w + A * S * T) * Math.sinh(i) + t * T * Math.cosh(i)) / t
                    }
                }
                return {
                    calculatedDuration: b && P || null,
                    next: t => {
                        let i = d(t);
                        if (b) m.done = t >= P;
                        else {
                            let s = w;
                            0 !== t && (s = A < 1 ? (0, r.P)(d, t, i) : 0);
                            let o = Math.abs(s) <= n,
                                a = Math.abs(p - i) <= e;
                            m.done = o && a
                        }
                        return m.value = m.done ? p : i, m
                    }
                }
            }
        },
        41064: function(t, e, n) {
            n.d(e, {
                E: function() {
                    return i
                },
                i: function() {
                    return r
                }
            });
            let i = 2e4;

            function r(t) {
                let e = 0,
                    n = t.next(e);
                for (; !n.done && e < i;) e += 50, n = t.next(e);
                return e >= i ? 1 / 0 : e
            }
        },
        92252: function(t, e, n) {
            n.d(e, {
                P: function() {
                    return r
                }
            });
            var i = n(69815);

            function r(t, e, n) {
                let r = Math.max(e - 5, 0);
                return (0, i.R)(n - t(r), e - r)
            }
        },
        81924: function(t, e, n) {
            n.d(e, {
                v: function() {
                    return V
                }
            });
            var i = n(46567),
                r = n(81356);
            let s = {
                    current: !1
                },
                o = t => Array.isArray(t) && "number" == typeof t[0],
                a = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
                l = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: a([0, .65, .55, 1]),
                    circOut: a([.55, 0, 1, .45]),
                    backIn: a([.31, .01, .66, -.59]),
                    backOut: a([.33, 1.53, .69, .99])
                };
            var u = n(63836),
                h = n(99648),
                c = n(26977),
                d = n(72363);
            let f = (0, h.X)(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
                p = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
                m = (t, e) => "spring" === e.type || "backgroundColor" === t || ! function t(e) {
                    return !!(!e || "string" == typeof e && l[e] || o(e) || Array.isArray(e) && e.every(t))
                }(e.ease);
            var v = n(49303);
            let g = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                y = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                x = {
                    type: "keyframes",
                    duration: .8
                },
                P = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                b = (t, {
                    keyframes: e
                }) => e.length > 2 ? x : v.G.has(t) ? t.startsWith("scale") ? y(e[1]) : g : P;
            var w = n(89155);
            let A = (t, e) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (w.P.test(e) || "0" === e) && !e.startsWith("url("));
            var T = n(19006),
                S = n(85243),
                C = n(37924);
            let V = (t, e, n, h = {}) => v => {
                let g = (0, C.e)(h, t) || {},
                    y = g.delay || h.delay || 0,
                    {
                        elapsed: x = 0
                    } = h;
                x -= (0, r.w)(y);
                let P = function(t, e, n, i) {
                        let r, s;
                        let o = A(e, n);
                        r = Array.isArray(n) ? [...n] : [null, n];
                        let a = void 0 !== i.from ? i.from : t.get(),
                            l = [];
                        for (let t = 0; t < r.length; t++) {
                            var u;
                            null === r[t] && (r[t] = 0 === t ? a : r[t - 1]), ("number" == typeof(u = r[t]) ? 0 === u : null !== u ? "none" === u || "0" === u || (0, S.W)(u) : void 0) && l.push(t), "string" == typeof r[t] && "none" !== r[t] && "0" !== r[t] && (s = r[t])
                        }
                        if (o && l.length && s)
                            for (let t = 0; t < l.length; t++) r[l[t]] = (0, T.T)(e, s);
                        return r
                    }(e, t, n, g),
                    w = P[0],
                    V = P[P.length - 1],
                    D = A(t, w),
                    E = A(t, V);
                (0, i.K)(D === E, `You are trying to animate ${t} from "${w}" to "${V}". ${w} is not an animatable value - to enable this animation set ${w} to a value animatable to ${V} via the \`style\` property.`);
                let M = {
                    keyframes: P,
                    velocity: e.getVelocity(),
                    ease: "easeOut",
                    ...g,
                    delay: -x,
                    onUpdate: t => {
                        e.set(t), g.onUpdate && g.onUpdate(t)
                    },
                    onComplete: () => {
                        v(), g.onComplete && g.onComplete()
                    }
                };
                if ((0, C.r)(g) || (M = { ...M,
                        ...b(t, M)
                    }), M.duration && (M.duration = (0, r.w)(M.duration)), M.repeatDelay && (M.repeatDelay = (0, r.w)(M.repeatDelay)), !D || !E || s.current || !1 === g.type) return function({
                    keyframes: t,
                    delay: e,
                    onUpdate: n,
                    onComplete: i
                }) {
                    let r = () => (n && n(t[t.length - 1]), i && i(), {
                        time: 0,
                        speed: 1,
                        duration: 0,
                        play: c.Z,
                        pause: c.Z,
                        stop: c.Z,
                        then: t => (t(), Promise.resolve()),
                        cancel: c.Z,
                        complete: c.Z
                    });
                    return e ? (0, u.y)({
                        keyframes: [0, 1],
                        duration: 0,
                        delay: e,
                        onComplete: r
                    }) : r()
                }(s.current ? { ...M,
                    delay: 0
                } : M);
                if (e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
                    let n = function(t, e, {
                        onUpdate: n,
                        onComplete: i,
                        ...s
                    }) {
                        let h, v;
                        if (!(f() && p.has(e) && !s.repeatDelay && "mirror" !== s.repeatType && 0 !== s.damping && "inertia" !== s.type)) return !1;
                        let g = !1,
                            y = () => {
                                v = new Promise(t => {
                                    h = t
                                })
                            };
                        y();
                        let {
                            keyframes: x,
                            duration: P = 300,
                            ease: b,
                            times: w
                        } = s;
                        if (m(e, s)) {
                            let t = (0, u.y)({ ...s,
                                    repeat: 0,
                                    delay: 0
                                }),
                                e = {
                                    done: !1,
                                    value: x[0]
                                },
                                n = [],
                                i = 0;
                            for (; !e.done && i < 2e4;) e = t.sample(i), n.push(e.value), i += 10;
                            w = void 0, x = n, P = i - 10, b = "linear"
                        }
                        let A = function(t, e, n, {
                            delay: i = 0,
                            duration: r,
                            repeat: s = 0,
                            repeatType: u = "loop",
                            ease: h,
                            times: c
                        } = {}) {
                            let d = {
                                [e]: n
                            };
                            c && (d.offset = c);
                            let f = function t(e) {
                                if (e) return o(e) ? a(e) : Array.isArray(e) ? e.map(t) : l[e]
                            }(h);
                            return Array.isArray(f) && (d.easing = f), t.animate(d, {
                                delay: i,
                                duration: r,
                                easing: Array.isArray(f) ? "linear" : f,
                                fill: "both",
                                iterations: s + 1,
                                direction: "reverse" === u ? "alternate" : "normal"
                            })
                        }(t.owner.current, e, x, { ...s,
                            duration: P,
                            ease: b,
                            times: w
                        });
                        s.syncStart && (A.startTime = d.frameData.isProcessing ? d.frameData.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
                        let T = () => A.cancel(),
                            S = () => {
                                d.Wi.update(T), h(), y()
                            };
                        return A.onfinish = () => {
                            t.set(function(t, {
                                repeat: e,
                                repeatType: n = "loop"
                            }) {
                                let i = e && "loop" !== n && e % 2 == 1 ? 0 : t.length - 1;
                                return t[i]
                            }(x, s)), i && i(), S()
                        }, {
                            then: (t, e) => v.then(t, e),
                            attachTimeline: t => (A.timeline = t, A.onfinish = null, c.Z),
                            get time() {
                                return (0, r.X)(A.currentTime || 0)
                            },
                            set time(newTime) {
                                A.currentTime = (0, r.w)(newTime)
                            },
                            get speed() {
                                return A.playbackRate
                            },
                            set speed(newSpeed) {
                                A.playbackRate = newSpeed
                            },
                            get duration() {
                                return (0, r.X)(P)
                            },
                            play: () => {
                                g || (A.play(), (0, d.Pn)(T))
                            },
                            pause: () => A.pause(),
                            stop: () => {
                                if (g = !0, "idle" === A.playState) return;
                                let {
                                    currentTime: e
                                } = A;
                                if (e) {
                                    let n = (0, u.y)({ ...s,
                                        autoplay: !1
                                    });
                                    t.setWithVelocity(n.sample(e - 10).value, n.sample(e).value, 10)
                                }
                                S()
                            },
                            complete: () => A.finish(),
                            cancel: S
                        }
                    }(e, t, M);
                    if (n) return n
                }
                return (0, u.y)(M)
            }
        },
        64854: function(t, e, n) {
            n.d(e, {
                D: function() {
                    return o
                }
            });
            var i = n(81924),
                r = n(74101),
                s = n(65735);

            function o(t, e, n) {
                let o = (0, s.i)(t) ? t : (0, r.BX)(t);
                return o.start((0, i.v)("", o, e, n)), o.animation
            }
        },
        68126: function(t, e, n) {
            n.d(e, {
                w: function() {
                    return u
                }
            });
            var i = n(49303);
            let r = "data-" + (0, n(27905).D)("framerAppearId");
            var s = n(81924),
                o = n(63227),
                a = n(27798),
                l = n(72363);

            function u(t, e, {
                delay: n = 0,
                transitionOverride: u,
                type: h
            } = {}) {
                let {
                    transition: c = t.getDefaultTransition(),
                    transitionEnd: d,
                    ...f
                } = t.makeTargetAnimatable(e), p = t.getValue("willChange");
                u && (c = u);
                let m = [],
                    v = h && t.animationState && t.animationState.getState()[h];
                for (let e in f) {
                    let a = t.getValue(e),
                        u = f[e];
                    if (!a || void 0 === u || v && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, n) {
                            let i = t.hasOwnProperty(n) && !0 !== e[n];
                            return e[n] = !1, i
                        }(v, e)) continue;
                    let h = {
                        delay: n,
                        elapsed: 0,
                        ...c
                    };
                    if (window.HandoffAppearAnimations && !a.hasAnimated) {
                        let n = t.getProps()[r];
                        n && (h.elapsed = window.HandoffAppearAnimations(n, e, a, l.Wi), h.syncStart = !0)
                    }
                    a.start((0, s.v)(e, a, u, t.shouldReduceMotion && i.G.has(e) ? {
                        type: !1
                    } : h));
                    let d = a.animation;
                    (0, o.L)(p) && (p.add(e), d.then(() => p.remove(e))), m.push(d)
                }
                return d && Promise.all(m).then(() => {
                    d && (0, a.CD)(t, d)
                }), m
            }
        },
        67866: function(t, e, n) {
            n.d(e, {
                H: function() {
                    return i
                }
            });

            function i(t) {
                return "object" == typeof t && "function" == typeof t.start
            }
        },
        10363: function(t, e, n) {
            n.d(e, {
                C: function() {
                    return i
                }
            });
            let i = t => Array.isArray(t)
        },
        37924: function(t, e, n) {
            function i({
                when: t,
                delay: e,
                delayChildren: n,
                staggerChildren: i,
                staggerDirection: r,
                repeat: s,
                repeatType: o,
                repeatDelay: a,
                from: l,
                elapsed: u,
                ...h
            }) {
                return !!Object.keys(h).length
            }

            function r(t, e) {
                return t[e] || t.default || t
            }
            n.d(e, {
                e: function() {
                    return r
                },
                r: function() {
                    return i
                }
            })
        },
        77196: function(t, e, n) {
            n.d(e, {
                oO: function() {
                    return s
                }
            });
            var i = n(2265),
                r = n(38243);

            function s() {
                let t = (0, i.useContext)(r.O);
                if (null === t) return [!0, null];
                let {
                    isPresent: e,
                    onExitComplete: n,
                    register: s
                } = t, o = (0, i.useId)();
                return (0, i.useEffect)(() => s(o), []), !e && n ? [!1, () => n && n(o)] : [!0]
            }
        },
        781: function(t, e, n) {
            n.d(e, {
                p: function() {
                    return i
                }
            });
            let i = (0, n(2265).createContext)({})
        },
        45968: function(t, e, n) {
            n.d(e, {
                _: function() {
                    return i
                }
            });
            let i = (0, n(2265).createContext)({
                transformPagePoint: t => t,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        38243: function(t, e, n) {
            n.d(e, {
                O: function() {
                    return i
                }
            });
            let i = (0, n(2265).createContext)(null)
        },
        927: function(t, e, n) {
            n.d(e, {
                Bn: function() {
                    return o
                },
                X7: function() {
                    return a
                },
                Z7: function() {
                    return s
                }
            });
            var i = n(90933),
                r = n(30484);
            let s = t => 1 - Math.sin(Math.acos(t)),
                o = (0, r.M)(s),
                a = (0, i.o)(o)
        },
        19066: function(t, e, n) {
            n.d(e, {
                _: function() {
                    return s
                }
            });
            var i = n(26977);
            let r = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;

            function s(t, e, n, s) {
                if (t === e && n === s) return i.Z;
                let o = e => (function(t, e, n, i, s) {
                    let o, a;
                    let l = 0;
                    do(o = r(a = e + (n - e) / 2, i, s) - t) > 0 ? n = a : e = a; while (Math.abs(o) > 1e-7 && ++l < 12);
                    return a
                })(e, 0, 1, t, n);
                return t => 0 === t || 1 === t ? t : r(o(t), e, s)
            }
        },
        38267: function(t, e, n) {
            n.d(e, {
                Vv: function() {
                    return s
                },
                YQ: function() {
                    return r
                },
                mZ: function() {
                    return o
                }
            });
            var i = n(19066);
            let r = (0, i._)(.42, 0, 1, 1),
                s = (0, i._)(0, 0, .58, 1),
                o = (0, i._)(.42, 0, .58, 1)
        },
        90933: function(t, e, n) {
            n.d(e, {
                o: function() {
                    return i
                }
            });
            let i = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
        },
        30484: function(t, e, n) {
            n.d(e, {
                M: function() {
                    return i
                }
            });
            let i = t => e => 1 - t(1 - e)
        },
        97565: function(t, e, n) {
            n.d(e, {
                N: function() {
                    return i
                }
            });
            let i = t => Array.isArray(t) && "number" != typeof t[0]
        },
        72363: function(t, e, n) {
            n.d(e, {
                Pn: function() {
                    return a
                },
                Wi: function() {
                    return o
                },
                frameData: function() {
                    return l
                },
                S6: function() {
                    return u
                }
            });
            var i = n(26977);
            class r {
                constructor() {
                    this.order = [], this.scheduled = new Set
                }
                add(t) {
                    if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0
                }
                remove(t) {
                    let e = this.order.indexOf(t); - 1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t))
                }
                clear() {
                    this.order.length = 0, this.scheduled.clear()
                }
            }
            let s = ["prepare", "read", "update", "preRender", "render", "postRender"],
                {
                    schedule: o,
                    cancel: a,
                    state: l,
                    steps: u
                } = function(t, e) {
                    let n = !1,
                        i = !0,
                        o = {
                            delta: 0,
                            timestamp: 0,
                            isProcessing: !1
                        },
                        a = s.reduce((t, e) => (t[e] = function(t) {
                            let e = new r,
                                n = new r,
                                i = 0,
                                s = !1,
                                o = !1,
                                a = new WeakSet,
                                l = {
                                    schedule: (t, r = !1, o = !1) => {
                                        let l = o && s,
                                            u = l ? e : n;
                                        return r && a.add(t), u.add(t) && l && s && (i = e.order.length), t
                                    },
                                    cancel: t => {
                                        n.remove(t), a.delete(t)
                                    },
                                    process: r => {
                                        if (s) {
                                            o = !0;
                                            return
                                        }
                                        if (s = !0, [e, n] = [n, e], n.clear(), i = e.order.length)
                                            for (let n = 0; n < i; n++) {
                                                let i = e.order[n];
                                                i(r), a.has(i) && (l.schedule(i), t())
                                            }
                                        s = !1, o && (o = !1, l.process(r))
                                    }
                                };
                            return l
                        }(() => n = !0), t), {}),
                        l = t => a[t].process(o),
                        u = () => {
                            let r = performance.now();
                            n = !1, o.delta = i ? 1e3 / 60 : Math.max(Math.min(r - o.timestamp, 40), 1), o.timestamp = r, o.isProcessing = !0, s.forEach(l), o.isProcessing = !1, n && e && (i = !1, t(u))
                        },
                        h = () => {
                            n = !0, i = !0, o.isProcessing || t(u)
                        };
                    return {
                        schedule: s.reduce((t, e) => {
                            let i = a[e];
                            return t[e] = (t, e = !1, r = !1) => (n || h(), i.schedule(t, e, r)), t
                        }, {}),
                        cancel: t => s.forEach(e => a[e].cancel(t)),
                        state: o,
                        steps: a
                    }
                }("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : i.Z, !0)
        },
        9001: function(t, e, n) {
            n.d(e, {
                A: function() {
                    return r
                }
            });
            let i = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                r = {};
            for (let t in i) r[t] = {
                isEnabled: e => i[t].some(t => !!e[t])
            }
        },
        41118: function(t, e, n) {
            n.d(e, {
                j: function() {
                    return s
                }
            });
            var i = n(611),
                r = n(49303);

            function s(t, {
                layout: e,
                layoutId: n
            }) {
                return r.G.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!i.P[t] || "opacity" === t)
            }
        },
        14902: function(t, e, n) {
            function i({
                top: t,
                left: e,
                right: n,
                bottom: i
            }) {
                return {
                    x: {
                        min: e,
                        max: n
                    },
                    y: {
                        min: t,
                        max: i
                    }
                }
            }

            function r({
                x: t,
                y: e
            }) {
                return {
                    top: e.min,
                    right: t.max,
                    bottom: e.max,
                    left: t.min
                }
            }

            function s(t, e) {
                if (!e) return t;
                let n = e({
                        x: t.left,
                        y: t.top
                    }),
                    i = e({
                        x: t.right,
                        y: t.bottom
                    });
                return {
                    top: n.y,
                    left: n.x,
                    bottom: i.y,
                    right: i.x
                }
            }
            n.d(e, {
                d7: function() {
                    return s
                },
                i8: function() {
                    return i
                },
                z2: function() {
                    return r
                }
            })
        },
        91841: function(t, e, n) {
            n.d(e, {
                D2: function() {
                    return m
                },
                YY: function() {
                    return u
                },
                am: function() {
                    return c
                },
                o2: function() {
                    return l
                },
                q2: function() {
                    return s
                }
            });
            var i = n(40007),
                r = n(10121);

            function s(t, e, n) {
                return n + e * (t - n)
            }

            function o(t, e, n, i, r) {
                return void 0 !== r && (t = i + r * (t - i)), i + n * (t - i) + e
            }

            function a(t, e = 0, n = 1, i, r) {
                t.min = o(t.min, e, n, i, r), t.max = o(t.max, e, n, i, r)
            }

            function l(t, {
                x: e,
                y: n
            }) {
                a(t.x, e.translate, e.scale, e.originPoint), a(t.y, n.translate, n.scale, n.originPoint)
            }

            function u(t, e, n, i = !1) {
                let s, o;
                let a = n.length;
                if (a) {
                    e.x = e.y = 1;
                    for (let u = 0; u < a; u++) {
                        o = (s = n[u]).projectionDelta;
                        let a = s.instance;
                        (!a || !a.style || "contents" !== a.style.display) && (i && s.options.layoutScroll && s.scroll && s !== s.root && m(t, {
                            x: -s.scroll.offset.x,
                            y: -s.scroll.offset.y
                        }), o && (e.x *= o.x.scale, e.y *= o.y.scale, l(t, o)), i && (0, r.ud)(s.latestValues) && m(t, s.latestValues))
                    }
                    e.x = h(e.x), e.y = h(e.y)
                }
            }

            function h(t) {
                return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
            }

            function c(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function d(t, e, [n, r, s]) {
                let o = void 0 !== e[s] ? e[s] : .5,
                    l = (0, i.C)(t.min, t.max, o);
                a(t, e[n], e[r], l, e.scale)
            }
            let f = ["x", "scaleX", "originX"],
                p = ["y", "scaleY", "originY"];

            function m(t, e) {
                d(t.x, e, f), d(t.y, e, p)
            }
        },
        84597: function(t, e, n) {
            n.d(e, {
                dO: function() {
                    return o
                },
                wc: function() {
                    return r
                }
            });
            let i = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                r = () => ({
                    x: i(),
                    y: i()
                }),
                s = () => ({
                    min: 0,
                    max: 0
                }),
                o = () => ({
                    x: s(),
                    y: s()
                })
        },
        611: function(t, e, n) {
            n.d(e, {
                B: function() {
                    return r
                },
                P: function() {
                    return i
                }
            });
            let i = {};

            function r(t) {
                Object.assign(i, t)
            }
        },
        10121: function(t, e, n) {
            function i(t) {
                return void 0 === t || 1 === t
            }

            function r({
                scale: t,
                scaleX: e,
                scaleY: n
            }) {
                return !i(t) || !i(e) || !i(n)
            }

            function s(t) {
                return r(t) || o(t) || t.z || t.rotate || t.rotateX || t.rotateY
            }

            function o(t) {
                var e, n;
                return (e = t.x) && "0%" !== e || (n = t.y) && "0%" !== n
            }
            n.d(e, {
                D_: function() {
                    return o
                },
                Lj: function() {
                    return r
                },
                ud: function() {
                    return s
                }
            })
        },
        83937: function(t, e, n) {
            n.d(e, {
                J: function() {
                    return s
                },
                z: function() {
                    return o
                }
            });
            var i = n(14902),
                r = n(91841);

            function s(t, e) {
                return (0, i.i8)((0, i.d7)(t.getBoundingClientRect(), e))
            }

            function o(t, e, n) {
                let i = s(t, n),
                    {
                        scroll: o
                    } = e;
                return o && ((0, r.am)(i.x, o.offset.x), (0, r.am)(i.y, o.offset.y)), i
            }
        },
        81923: function(t, e, n) {
            n.d(e, {
                J: function() {
                    return Z
                }
            });
            var i = n(27798),
                r = n(46567),
                s = n(44747),
                o = n(80417);
            let a = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function l(t, e, n = 1) {
                (0, r.k)(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                let [i, u] = function(t) {
                    let e = a.exec(t);
                    if (!e) return [, ];
                    let [, n, i] = e;
                    return [n, i]
                }(t);
                if (!i) return;
                let h = window.getComputedStyle(e).getPropertyValue(i);
                if (h) {
                    let t = h.trim();
                    return (0, s.P)(t) ? parseFloat(t) : t
                }
                return (0, o.tm)(u) ? l(u, e, n + 1) : u
            }
            var u = n(10363),
                h = n(49303),
                c = n(38824),
                d = n(16613),
                f = n(2980),
                p = n(43681);
            let m = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                v = t => m.has(t),
                g = t => Object.keys(t).some(v),
                y = t => t === f.Rx || t === p.px,
                x = (t, e) => parseFloat(t.split(", ")[e]),
                P = (t, e) => (n, {
                    transform: i
                }) => {
                    if ("none" === i || !i) return 0;
                    let r = i.match(/^matrix3d\((.+)\)$/);
                    if (r) return x(r[1], e); {
                        let e = i.match(/^matrix\((.+)\)$/);
                        return e ? x(e[1], t) : 0
                    }
                },
                b = new Set(["x", "y", "z"]),
                w = h._.filter(t => !b.has(t)),
                A = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: n = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: n = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: P(4, 13),
                    y: P(5, 14)
                };
            A.translateX = A.x, A.translateY = A.y;
            let T = (t, e, n) => {
                    let i = e.measureViewportBox(),
                        r = e.current,
                        s = getComputedStyle(r),
                        {
                            display: o
                        } = s,
                        a = {};
                    "none" === o && e.setStaticValue("display", t.display || "block"), n.forEach(t => {
                        a[t] = A[t](i, s)
                    }), e.render();
                    let l = e.measureViewportBox();
                    return n.forEach(n => {
                        let i = e.getValue(n);
                        i && i.jump(a[n]), t[n] = A[n](l, s)
                    }), t
                },
                S = (t, e, n = {}, i = {}) => {
                    e = { ...e
                    }, i = { ...i
                    };
                    let s = Object.keys(e).filter(v),
                        o = [],
                        a = !1,
                        l = [];
                    if (s.forEach(s => {
                            let h;
                            let d = t.getValue(s);
                            if (!t.hasValue(s)) return;
                            let f = n[s],
                                m = (0, c.C)(f),
                                v = e[s];
                            if ((0, u.C)(v)) {
                                let t = v.length,
                                    e = null === v[0] ? 1 : 0;
                                f = v[e], m = (0, c.C)(f);
                                for (let n = e; n < t && null !== v[n]; n++) h ? (0, r.k)((0, c.C)(v[n]) === h, "All keyframes must be of the same type") : (h = (0, c.C)(v[n]), (0, r.k)(h === m || y(m) && y(h), "Keyframes must be of the same dimension as the current value"))
                            } else h = (0, c.C)(v);
                            if (m !== h) {
                                if (y(m) && y(h)) {
                                    let t = d.get();
                                    "string" == typeof t && d.set(parseFloat(t)), "string" == typeof v ? e[s] = parseFloat(v) : Array.isArray(v) && h === p.px && (e[s] = v.map(parseFloat))
                                } else(null == m ? void 0 : m.transform) && (null == h ? void 0 : h.transform) && (0 === f || 0 === v) ? 0 === f ? d.set(h.transform(f)) : e[s] = m.transform(v) : (a || (o = function(t) {
                                    let e = [];
                                    return w.forEach(n => {
                                        let i = t.getValue(n);
                                        void 0 !== i && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0))
                                    }), e.length && t.render(), e
                                }(t), a = !0), l.push(s), i[s] = void 0 !== i[s] ? i[s] : e[s], d.jump(v))
                            }
                        }), !l.length) return {
                        target: e,
                        transitionEnd: i
                    }; {
                        let n = l.indexOf("height") >= 0 ? window.pageYOffset : null,
                            r = T(e, t, l);
                        return o.length && o.forEach(([e, n]) => {
                            t.getValue(e).set(n)
                        }), t.render(), d.j && null !== n && window.scrollTo({
                            top: n
                        }), {
                            target: r,
                            transitionEnd: i
                        }
                    }
                },
                C = (t, e, n, i) => {
                    var r, s;
                    let a = function(t, { ...e
                    }, n) {
                        let i = t.current;
                        if (!(i instanceof Element)) return {
                            target: e,
                            transitionEnd: n
                        };
                        for (let r in n && (n = { ...n
                            }), t.values.forEach(t => {
                                let e = t.get();
                                if (!(0, o.tm)(e)) return;
                                let n = l(e, i);
                                n && t.set(n)
                            }), e) {
                            let t = e[r];
                            if (!(0, o.tm)(t)) continue;
                            let s = l(t, i);
                            s && (e[r] = s, n || (n = {}), void 0 === n[r] && (n[r] = t))
                        }
                        return {
                            target: e,
                            transitionEnd: n
                        }
                    }(t, e, i);
                    return e = a.target, i = a.transitionEnd, r = e, s = i, g(r) ? S(t, r, n, s) : {
                        target: r,
                        transitionEnd: s
                    }
                };
            var V = n(84597),
                D = n(95503);
            let E = {
                    current: null
                },
                M = {
                    current: !1
                };
            var R = n(27026),
                k = n(74101),
                L = n(63227),
                j = n(65735),
                F = n(76049),
                B = n(13345),
                O = n(93331),
                $ = n(9001),
                I = n(75247),
                W = n(94900),
                U = n(72363);
            let N = Object.keys($.A),
                X = N.length,
                z = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
                H = I.V.length;
            class Y {
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: n,
                    reducedMotionConfig: i,
                    visualState: r
                }, s = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.scheduleRender = () => U.Wi.render(this.render, !1, !0);
                    let {
                        latestValues: o,
                        renderState: a
                    } = r;
                    this.latestValues = o, this.baseTarget = { ...o
                    }, this.initialValues = e.initial ? { ...o
                    } : {}, this.renderState = a, this.parent = t, this.props = e, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = s, this.isControllingVariants = (0, F.G)(e), this.isVariantNode = (0, F.M)(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: l,
                        ...u
                    } = this.scrapeMotionValuesFromProps(e, {});
                    for (let t in u) {
                        let e = u[t];
                        void 0 !== o[t] && (0, j.i)(e) && (e.set(o[t], !1), (0, L.L)(l) && l.add(t))
                    }
                }
                scrapeMotionValuesFromProps(t, e) {
                    return {}
                }
                mount(t) {
                    this.current = t, W.R.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), M.current || function() {
                        if (M.current = !0, d.j) {
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => E.current = t.matches;
                                t.addListener(e), e()
                            } else E.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || E.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in W.R.delete(this.current), this.projection && this.projection.unmount(), (0, U.Pn)(this.notifyUpdate), (0, U.Pn)(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let t in this.features) this.features[t].unmount();
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let n = h.G.has(t),
                        i = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && U.Wi.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        r = e.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(t, () => {
                        i(), r()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                loadFeatures({
                    children: t,
                    ...e
                }, n, i, r) {
                    let s, o;
                    for (let t = 0; t < X; t++) {
                        let n = N[t],
                            {
                                isEnabled: i,
                                Feature: r,
                                ProjectionNode: a,
                                MeasureLayout: l
                            } = $.A[n];
                        a && (s = a), i(e) && (!this.features[n] && r && (this.features[n] = new r(this)), l && (o = l))
                    }
                    if (!this.projection && s) {
                        this.projection = new s(this.latestValues, this.parent && this.parent.projection);
                        let {
                            layoutId: t,
                            layout: n,
                            drag: i,
                            dragConstraints: o,
                            layoutScroll: a,
                            layoutRoot: l
                        } = e;
                        this.projection.setOptions({
                            layoutId: t,
                            layout: n,
                            alwaysMeasureLayout: !!i || o && (0, D.I)(o),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" == typeof n ? n : "both",
                            initialPromotionConfig: r,
                            layoutScroll: a,
                            layoutRoot: l
                        })
                    }
                    return o
                }
                updateFeatures() {
                    for (let t in this.features) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, V.dO)()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                makeTargetAnimatable(t, e = !0) {
                    return this.makeTargetAnimatableFromInstance(t, this.props, e)
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < z.length; e++) {
                        let n = z[e];
                        this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
                        let i = t["on" + n];
                        i && (this.propEventSubscriptions[n] = this.on(n, i))
                    }
                    this.prevMotionValues = function(t, e, n) {
                        let {
                            willChange: i
                        } = e;
                        for (let r in e) {
                            let s = e[r],
                                o = n[r];
                            if ((0, j.i)(s)) t.addValue(r, s), (0, L.L)(i) && i.add(r);
                            else if ((0, j.i)(o)) t.addValue(r, (0, k.BX)(s, {
                                owner: t
                            })), (0, L.L)(i) && i.remove(r);
                            else if (o !== s) {
                                if (t.hasValue(r)) {
                                    let e = t.getValue(r);
                                    e.hasAnimated || e.set(s)
                                } else {
                                    let e = t.getStaticValue(r);
                                    t.addValue(r, (0, k.BX)(void 0 !== e ? e : s, {
                                        owner: t
                                    }))
                                }
                            }
                        }
                        for (let i in n) void 0 === e[i] && t.removeValue(i);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                getVariantContext(t = !1) {
                    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
                    if (!this.isControllingVariants) {
                        let t = this.parent && this.parent.getVariantContext() || {};
                        return void 0 !== this.props.initial && (t.initial = this.props.initial), t
                    }
                    let e = {};
                    for (let t = 0; t < H; t++) {
                        let n = I.V[t],
                            i = this.props[n];
                        ((0, B.$)(i) || !1 === i) && (e[n] = i)
                    }
                    return e
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    e !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, e)), this.values.set(t, e), this.latestValues[t] = e.get()
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let n = this.values.get(t);
                    return void 0 === n && void 0 !== e && (n = (0, k.BX)(e, {
                        owner: this
                    }), this.addValue(t, n)), n
                }
                readValue(t) {
                    var e;
                    return void 0 === this.latestValues[t] && this.current ? null !== (e = this.getBaseTargetFromProps(this.props, t)) && void 0 !== e ? e : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    let {
                        initial: n
                    } = this.props, i = "string" == typeof n || "object" == typeof n ? null === (e = (0, O.o)(this.props, n)) || void 0 === e ? void 0 : e[t] : void 0;
                    if (n && void 0 !== i) return i;
                    let r = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === r || (0, j.i)(r) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : r
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new R.L), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            }
            class Z extends Y {
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: n
                }) {
                    delete e[t], delete n[t]
                }
                makeTargetAnimatableFromInstance({
                    transition: t,
                    transitionEnd: e,
                    ...n
                }, {
                    transformValues: r
                }, s) {
                    let o = (0, i.P$)(n, t || {}, this);
                    if (r && (e && (e = r(e)), n && (n = r(n)), o && (o = r(o))), s) {
                        (0, i.GJ)(this, n, o);
                        let t = C(this, n, o, e);
                        e = t.transitionEnd, n = t.target
                    }
                    return {
                        transition: t,
                        transitionEnd: e,
                        ...n
                    }
                }
            }
        },
        95090: function(t, e, n) {
            n.d(e, {
                E: function() {
                    return ns
                }
            });
            var i, r = n(2265),
                s = n(45968);
            let o = (0, r.createContext)({});
            var a = n(38243),
                l = n(538);
            let u = (0, r.createContext)({
                strict: !1
            });
            var h = n(95503),
                c = n(13345),
                d = n(76049);

            function f(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            var p = n(9001),
                m = n(16613),
                v = n(781);
            let g = (0, r.createContext)({}),
                y = Symbol.for("motionComponentSymbol"),
                x = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function P(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (x.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
                return !1
            }
            var b = n(41118),
                w = n(65735),
                A = n(40458);
            let T = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function S(t, e, n) {
                for (let i in e)(0, w.i)(e[i]) || (0, b.j)(i, n) || (t[i] = e[i])
            }
            let C = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

            function V(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || C.has(t)
            }
            let D = t => !V(t);
            try {
                (i = require("@emotion/is-prop-valid").default) && (D = t => t.startsWith("on") ? !V(t) : i(t))
            } catch (t) {}
            var E = n(1524);
            let M = () => ({ ...T(),
                attrs: {}
            });
            var R = n(30922),
                k = n(58239),
                L = n(75625),
                j = n(67866),
                F = n(93331),
                B = n(10961),
                O = n(61832);

            function $(t) {
                let e = (0, w.i)(t) ? t.get() : t;
                return (0, O.p)(e) ? e.toValue() : e
            }
            let I = t => (e, n) => {
                let i = (0, r.useContext)(o),
                    s = (0, r.useContext)(a.O),
                    l = () => (function({
                        scrapeMotionValuesFromProps: t,
                        createRenderState: e,
                        onMount: n
                    }, i, r, s) {
                        let o = {
                            latestValues: function(t, e, n, i) {
                                let r = {},
                                    s = i(t, {});
                                for (let t in s) r[t] = $(s[t]);
                                let {
                                    initial: o,
                                    animate: a
                                } = t, l = (0, d.G)(t), u = (0, d.M)(t);
                                e && u && !l && !1 !== t.inherit && (void 0 === o && (o = e.initial), void 0 === a && (a = e.animate));
                                let h = !!n && !1 === n.initial,
                                    c = (h = h || !1 === o) ? a : o;
                                return c && "boolean" != typeof c && !(0, j.H)(c) && (Array.isArray(c) ? c : [c]).forEach(e => {
                                    let n = (0, F.o)(t, e);
                                    if (!n) return;
                                    let {
                                        transitionEnd: i,
                                        transition: s,
                                        ...o
                                    } = n;
                                    for (let t in o) {
                                        let e = o[t];
                                        if (Array.isArray(e)) {
                                            let t = h ? e.length - 1 : 0;
                                            e = e[t]
                                        }
                                        null !== e && (r[t] = e)
                                    }
                                    for (let t in i) r[t] = i[t]
                                }), r
                            }(i, r, s, t),
                            renderState: e()
                        };
                        return n && (o.mount = t => n(i, t, o)), o
                    })(t, e, i, s);
                return n ? l() : (0, B.h)(l)
            };
            var W = n(72363);
            let U = {
                    useVisualState: I({
                        scrapeMotionValuesFromProps: L.U,
                        createRenderState: M,
                        onMount: (t, e, {
                            renderState: n,
                            latestValues: i
                        }) => {
                            W.Wi.read(() => {
                                try {
                                    n.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                                } catch (t) {
                                    n.dimensions = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0
                                    }
                                }
                            }), W.Wi.render(() => {
                                (0, E.i)(n, i, {
                                    enableHardwareAcceleration: !1
                                }, (0, R.a)(e.tagName), t.transformTemplate), (0, k.K)(e, n)
                            })
                        }
                    })
                },
                N = {
                    useVisualState: I({
                        scrapeMotionValuesFromProps: n(63495).U,
                        createRenderState: T
                    })
                };

            function X(t, e, n, i = {
                passive: !0
            }) {
                return t.addEventListener(e, n, i), () => t.removeEventListener(e, n)
            }
            let z = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

            function H(t, e = "page") {
                return {
                    point: {
                        x: t[e + "X"],
                        y: t[e + "Y"]
                    }
                }
            }
            let Y = t => e => z(e) && t(e, H(e));

            function Z(t, e, n, i) {
                return X(t, e, Y(n), i)
            }
            var _ = n(44694);

            function G(t) {
                let e = null;
                return () => null === e && (e = t, () => {
                    e = null
                })
            }
            let q = G("dragHorizontal"),
                K = G("dragVertical");

            function J(t) {
                let e = !1;
                if ("y" === t) e = K();
                else if ("x" === t) e = q();
                else {
                    let t = q(),
                        n = K();
                    t && n ? e = () => {
                        t(), n()
                    } : (t && t(), n && n())
                }
                return e
            }

            function Q() {
                let t = J(!0);
                return !t || (t(), !1)
            }
            class tt {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }

            function te(t, e) {
                let n = "onHover" + (e ? "Start" : "End");
                return Z(t.current, "pointer" + (e ? "enter" : "leave"), (i, r) => {
                    if ("touch" === i.type || Q()) return;
                    let s = t.getProps();
                    t.animationState && s.whileHover && t.animationState.setActive("whileHover", e), s[n] && W.Wi.update(() => s[n](i, r))
                }, {
                    passive: !t.getProps()[n]
                })
            }
            class tn extends tt {
                mount() {
                    this.unmount = (0, _.z)(te(this.node, !0), te(this.node, !1))
                }
                unmount() {}
            }
            class ti extends tt {
                constructor() {
                    super(...arguments), this.isActive = !1
                }
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = (0, _.z)(X(this.node.current, "focus", () => this.onFocus()), X(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }
            let tr = (t, e) => !!e && (t === e || tr(t, e.parentElement));
            var ts = n(26977);

            function to(t, e) {
                if (!e) return;
                let n = new PointerEvent("pointer" + t);
                e(n, H(n))
            }
            class ta extends tt {
                constructor() {
                    super(...arguments), this.removeStartListeners = ts.Z, this.removeEndListeners = ts.Z, this.removeAccessibleListeners = ts.Z, this.startPointerPress = (t, e) => {
                        if (this.removeEndListeners(), this.isPressing) return;
                        let n = this.node.getProps(),
                            i = Z(window, "pointerup", (t, e) => {
                                if (!this.checkPressEnd()) return;
                                let {
                                    onTap: n,
                                    onTapCancel: i
                                } = this.node.getProps();
                                W.Wi.update(() => {
                                    tr(this.node.current, t.target) ? n && n(t, e) : i && i(t, e)
                                })
                            }, {
                                passive: !(n.onTap || n.onPointerUp)
                            }),
                            r = Z(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                                passive: !(n.onTapCancel || n.onPointerCancel)
                            });
                        this.removeEndListeners = (0, _.z)(i, r), this.startPress(t, e)
                    }, this.startAccessiblePress = () => {
                        let t = X(this.node.current, "keydown", t => {
                                "Enter" !== t.key || this.isPressing || (this.removeEndListeners(), this.removeEndListeners = X(this.node.current, "keyup", t => {
                                    "Enter" === t.key && this.checkPressEnd() && to("up", (t, e) => {
                                        let {
                                            onTap: n
                                        } = this.node.getProps();
                                        n && W.Wi.update(() => n(t, e))
                                    })
                                }), to("down", (t, e) => {
                                    this.startPress(t, e)
                                }))
                            }),
                            e = X(this.node.current, "blur", () => {
                                this.isPressing && to("cancel", (t, e) => this.cancelPress(t, e))
                            });
                        this.removeAccessibleListeners = (0, _.z)(t, e)
                    }
                }
                startPress(t, e) {
                    this.isPressing = !0;
                    let {
                        onTapStart: n,
                        whileTap: i
                    } = this.node.getProps();
                    i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && W.Wi.update(() => n(t, e))
                }
                checkPressEnd() {
                    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Q()
                }
                cancelPress(t, e) {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTapCancel: n
                    } = this.node.getProps();
                    n && W.Wi.update(() => n(t, e))
                }
                mount() {
                    let t = this.node.getProps(),
                        e = Z(this.node.current, "pointerdown", this.startPointerPress, {
                            passive: !(t.onTapStart || t.onPointerStart)
                        }),
                        n = X(this.node.current, "focus", this.startAccessiblePress);
                    this.removeStartListeners = (0, _.z)(e, n)
                }
                unmount() {
                    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                }
            }
            let tl = new WeakMap,
                tu = new WeakMap,
                th = t => {
                    let e = tl.get(t.target);
                    e && e(t)
                },
                tc = t => {
                    t.forEach(th)
                },
                td = {
                    some: 0,
                    all: 1
                };
            class tf extends tt {
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
                startObserver() {
                    this.unmount();
                    let {
                        viewport: t = {}
                    } = this.node.getProps(), {
                        root: e,
                        margin: n,
                        amount: i = "some",
                        once: r
                    } = t, s = {
                        root: e ? e.current : void 0,
                        rootMargin: n,
                        threshold: "number" == typeof i ? i : td[i]
                    };
                    return function(t, e, n) {
                        let i = function({
                            root: t,
                            ...e
                        }) {
                            let n = t || document;
                            tu.has(n) || tu.set(n, {});
                            let i = tu.get(n),
                                r = JSON.stringify(e);
                            return i[r] || (i[r] = new IntersectionObserver(tc, {
                                root: t,
                                ...e
                            })), i[r]
                        }(e);
                        return tl.set(t, n), i.observe(t), () => {
                            tl.delete(t), i.unobserve(t)
                        }
                    }(this.node.current, s, t => {
                        let {
                            isIntersecting: e
                        } = t;
                        if (this.isInView === e || (this.isInView = e, r && !e && this.hasEnteredView)) return;
                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {
                            onViewportEnter: n,
                            onViewportLeave: i
                        } = this.node.getProps(), s = e ? n : i;
                        s && s(t)
                    })
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: t,
                        prevProps: e
                    } = this.node;
                    ["amount", "margin", "root"].some(function({
                        viewport: t = {}
                    }, {
                        viewport: e = {}
                    } = {}) {
                        return n => t[n] !== e[n]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
            }
            var tp = n(10363);

            function tm(t, e) {
                if (!Array.isArray(e)) return !1;
                let n = e.length;
                if (n !== t.length) return !1;
                for (let i = 0; i < n; i++)
                    if (e[i] !== t[i]) return !1;
                return !0
            }
            var tv = n(32593),
                tg = n(75247),
                ty = n(68126);

            function tx(t, e, n = {}) {
                let i = (0, tv.x)(t, e, n.custom),
                    {
                        transition: r = t.getDefaultTransition() || {}
                    } = i || {};
                n.transitionOverride && (r = n.transitionOverride);
                let s = i ? () => Promise.all((0, ty.w)(t, i, n)) : () => Promise.resolve(),
                    o = t.variantChildren && t.variantChildren.size ? (i = 0) => {
                        let {
                            delayChildren: s = 0,
                            staggerChildren: o,
                            staggerDirection: a
                        } = r;
                        return function(t, e, n = 0, i = 0, r = 1, s) {
                            let o = [],
                                a = (t.variantChildren.size - 1) * i,
                                l = 1 === r ? (t = 0) => t * i : (t = 0) => a - t * i;
                            return Array.from(t.variantChildren).sort(tP).forEach((t, i) => {
                                t.notify("AnimationStart", e), o.push(tx(t, e, { ...s,
                                    delay: n + l(i)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(o)
                        }(t, e, s + i, o, a, n)
                    } : () => Promise.resolve(),
                    {
                        when: a
                    } = r;
                if (!a) return Promise.all([s(), o(n.delay)]); {
                    let [t, e] = "beforeChildren" === a ? [s, o] : [o, s];
                    return t().then(() => e())
                }
            }

            function tP(t, e) {
                return t.sortNodePosition(e)
            }
            let tb = [...tg.e].reverse(),
                tw = tg.e.length;

            function tA(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            class tT extends tt {
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(({
                                animation: e,
                                options: n
                            }) => (function(t, e, n = {}) {
                                let i;
                                if (t.notify("AnimationStart", e), Array.isArray(e)) i = Promise.all(e.map(e => tx(t, e, n)));
                                else if ("string" == typeof e) i = tx(t, e, n);
                                else {
                                    let r = "function" == typeof e ? (0, tv.x)(t, e, n.custom) : e;
                                    i = Promise.all((0, ty.w)(t, r, n))
                                }
                                return i.then(() => t.notify("AnimationComplete", e))
                            })(t, e, n))),
                            n = {
                                animate: tA(!0),
                                whileInView: tA(),
                                whileHover: tA(),
                                whileTap: tA(),
                                whileDrag: tA(),
                                whileFocus: tA(),
                                exit: tA()
                            },
                            i = !0,
                            r = (e, n) => {
                                let i = (0, tv.x)(t, n);
                                if (i) {
                                    let {
                                        transition: t,
                                        transitionEnd: n,
                                        ...r
                                    } = i;
                                    e = { ...e,
                                        ...r,
                                        ...n
                                    }
                                }
                                return e
                            };

                        function s(s, o) {
                            let a = t.getProps(),
                                l = t.getVariantContext(!0) || {},
                                u = [],
                                h = new Set,
                                d = {},
                                f = 1 / 0;
                            for (let e = 0; e < tw; e++) {
                                var p;
                                let m = tb[e],
                                    v = n[m],
                                    g = void 0 !== a[m] ? a[m] : l[m],
                                    y = (0, c.$)(g),
                                    x = m === o ? v.isActive : null;
                                !1 === x && (f = e);
                                let P = g === l[m] && g !== a[m] && y;
                                if (P && i && t.manuallyAnimateOnMount && (P = !1), v.protectedKeys = { ...d
                                    }, !v.isActive && null === x || !g && !v.prevProp || (0, j.H)(g) || "boolean" == typeof g) continue;
                                let b = (p = v.prevProp, "string" == typeof g ? g !== p : !!Array.isArray(g) && !tm(g, p)),
                                    w = b || m === o && v.isActive && !P && y || e > f && y,
                                    A = Array.isArray(g) ? g : [g],
                                    T = A.reduce(r, {});
                                !1 === x && (T = {});
                                let {
                                    prevResolvedValues: S = {}
                                } = v, C = { ...S,
                                    ...T
                                }, V = t => {
                                    w = !0, h.delete(t), v.needsAnimating[t] = !0
                                };
                                for (let t in C) {
                                    let e = T[t],
                                        n = S[t];
                                    d.hasOwnProperty(t) || (e !== n ? (0, tp.C)(e) && (0, tp.C)(n) ? !tm(e, n) || b ? V(t) : v.protectedKeys[t] = !0 : void 0 !== e ? V(t) : h.add(t) : void 0 !== e && h.has(t) ? V(t) : v.protectedKeys[t] = !0)
                                }
                                v.prevProp = g, v.prevResolvedValues = T, v.isActive && (d = { ...d,
                                    ...T
                                }), i && t.blockInitialAnimation && (w = !1), w && !P && u.push(...A.map(t => ({
                                    animation: t,
                                    options: {
                                        type: m,
                                        ...s
                                    }
                                })))
                            }
                            if (h.size) {
                                let e = {};
                                h.forEach(n => {
                                    let i = t.getBaseTarget(n);
                                    void 0 !== i && (e[n] = i)
                                }), u.push({
                                    animation: e
                                })
                            }
                            let m = !!u.length;
                            return i && !1 === a.initial && !t.manuallyAnimateOnMount && (m = !1), i = !1, m ? e(u) : Promise.resolve()
                        }
                        return {
                            animateChanges: s,
                            setActive: function(e, i, r) {
                                var o;
                                if (n[e].isActive === i) return Promise.resolve();
                                null === (o = t.variantChildren) || void 0 === o || o.forEach(t => {
                                    var n;
                                    return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, i)
                                }), n[e].isActive = i;
                                let a = s(r, e);
                                for (let t in n) n[t].protectedKeys = {};
                                return a
                            },
                            setAnimateFunction: function(n) {
                                e = n(t)
                            },
                            getState: () => n
                        }
                    }(t))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    this.unmount(), (0, j.H)(t) && (this.unmount = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {}
            }
            let tS = 0;
            class tC extends tt {
                constructor() {
                    super(...arguments), this.id = tS++
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: t,
                        onExitComplete: e,
                        custom: n
                    } = this.node.presenceContext, {
                        isPresent: i
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === i) return;
                    let r = this.node.animationState.setActive("exit", !t, {
                        custom: null != n ? n : this.node.getProps().custom
                    });
                    e && !t && r.then(() => e(this.id))
                }
                mount() {
                    let {
                        register: t
                    } = this.node.presenceContext || {};
                    t && (this.unmount = t(this.id))
                }
                unmount() {}
            }
            var tV = n(46567),
                tD = n(81356);
            let tE = (t, e) => Math.abs(t - e);
            class tM {
                constructor(t, e, {
                    transformPagePoint: n
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                            var t, e;
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let n = tL(this.lastMoveEventInfo, this.history),
                                i = null !== this.startEvent,
                                r = (t = n.offset, e = {
                                    x: 0,
                                    y: 0
                                }, Math.sqrt(tE(t.x, e.x) ** 2 + tE(t.y, e.y) ** 2) >= 3);
                            if (!i && !r) return;
                            let {
                                point: s
                            } = n, {
                                timestamp: o
                            } = W.frameData;
                            this.history.push({ ...s,
                                timestamp: o
                            });
                            let {
                                onStart: a,
                                onMove: l
                            } = this.handlers;
                            i || (a && a(this.lastMoveEvent, n), this.startEvent = this.lastMoveEvent), l && l(this.lastMoveEvent, n)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = tR(e, this.transformPagePoint), W.Wi.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let {
                                onEnd: n,
                                onSessionEnd: i
                            } = this.handlers, r = tL("pointercancel" === t.type ? this.lastMoveEventInfo : tR(e, this.transformPagePoint), this.history);
                            this.startEvent && n && n(t, r), i && i(t, r)
                        }, !z(t)) return;
                    this.handlers = e, this.transformPagePoint = n;
                    let i = tR(H(t), this.transformPagePoint),
                        {
                            point: r
                        } = i,
                        {
                            timestamp: s
                        } = W.frameData;
                    this.history = [{ ...r,
                        timestamp: s
                    }];
                    let {
                        onSessionStart: o
                    } = e;
                    o && o(t, tL(i, this.history)), this.removeListeners = (0, _.z)(Z(window, "pointermove", this.handlePointerMove), Z(window, "pointerup", this.handlePointerUp), Z(window, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, W.Pn)(this.updatePoint)
                }
            }

            function tR(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function tk(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function tL({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: tk(t, tj(e)),
                    offset: tk(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let n = t.length - 1,
                            i = null,
                            r = tj(t);
                        for (; n >= 0 && (i = t[n], !(r.timestamp - i.timestamp > (0, tD.w)(.1)));) n--;
                        if (!i) return {
                            x: 0,
                            y: 0
                        };
                        let s = (0, tD.X)(r.timestamp - i.timestamp);
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let o = {
                            x: (r.x - i.x) / s,
                            y: (r.y - i.y) / s
                        };
                        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
                    }(e, 0)
                }
            }

            function tj(t) {
                return t[t.length - 1]
            }
            var tF = n(42868),
                tB = n(40007);

            function tO(t) {
                return t.max - t.min
            }

            function t$(t, e = 0, n = .01) {
                return Math.abs(t - e) <= n
            }

            function tI(t, e, n, i = .5) {
                t.origin = i, t.originPoint = (0, tB.C)(e.min, e.max, t.origin), t.scale = tO(n) / tO(e), (t$(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = (0, tB.C)(n.min, n.max, t.origin) - t.originPoint, (t$(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function tW(t, e, n, i) {
                tI(t.x, e.x, n.x, i ? i.originX : void 0), tI(t.y, e.y, n.y, i ? i.originY : void 0)
            }

            function tU(t, e, n) {
                t.min = n.min + e.min, t.max = t.min + tO(e)
            }

            function tN(t, e, n) {
                t.min = e.min - n.min, t.max = t.min + tO(e)
            }

            function tX(t, e, n) {
                tN(t.x, e.x, n.x), tN(t.y, e.y, n.y)
            }
            var tz = n(43021);

            function tH(t, e, n) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
                }
            }

            function tY(t, e) {
                let n = e.min - t.min,
                    i = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), {
                    min: n,
                    max: i
                }
            }

            function tZ(t, e, n) {
                return {
                    min: t_(t, e),
                    max: t_(t, n)
                }
            }

            function t_(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            var tG = n(84597);

            function tq(t) {
                return [t("x"), t("y")]
            }
            var tK = n(83937),
                tJ = n(14902),
                tQ = n(43681),
                t0 = n(81924);
            let t1 = new WeakMap;
            class t2 {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, tG.dO)(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: n
                    } = this.visualElement;
                    n && !1 === n.isPresent || (this.panSession = new tM(t, {
                        onSessionStart: t => {
                            this.stopAnimation(), e && this.snapToCursor(H(t, "page").point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: n,
                                dragPropagation: i,
                                onDragStart: r
                            } = this.getProps();
                            if (n && !i && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = J(n), !this.openGlobalLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), tq(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (tQ.aQ.test(e)) {
                                    let {
                                        projection: n
                                    } = this.visualElement;
                                    if (n && n.layout) {
                                        let i = n.layout.layoutBox[t];
                                        if (i) {
                                            let t = tO(i);
                                            e = parseFloat(e) / 100 * t
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }), r && W.Wi.update(() => r(t, e), !1, !0);
                            let {
                                animationState: s
                            } = this.visualElement;
                            s && s.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: n,
                                dragDirectionLock: i,
                                onDirectionLock: r,
                                onDrag: s
                            } = this.getProps();
                            if (!n && !this.openGlobalLock) return;
                            let {
                                offset: o
                            } = e;
                            if (i && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let n = null;
                                    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
                                }(o), null !== this.currentDirection && r && r(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), s && s(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e)
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    }))
                }
                stop(t, e) {
                    let n = this.isDragging;
                    if (this.cancel(), !n) return;
                    let {
                        velocity: i
                    } = e;
                    this.startAnimation(i);
                    let {
                        onDragEnd: r
                    } = this.getProps();
                    r && W.Wi.update(() => r(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: n
                    } = this.getProps();
                    !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, n) {
                    let {
                        drag: i
                    } = this.getProps();
                    if (!n || !t3(t, i, this.currentDirection)) return;
                    let r = this.getAxisMotionValue(t),
                        s = this.originPoint[t] + n[t];
                    this.constraints && this.constraints[t] && (s = function(t, {
                        min: e,
                        max: n
                    }, i) {
                        return void 0 !== e && t < e ? t = i ? (0, tB.C)(e, t, i.min) : Math.max(t, e) : void 0 !== n && t > n && (t = i ? (0, tB.C)(n, t, i.max) : Math.min(t, n)), t
                    }(s, this.constraints[t], this.elastic[t])), r.set(s)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: t,
                        dragElastic: e
                    } = this.getProps(), {
                        layout: n
                    } = this.visualElement.projection || {}, i = this.constraints;
                    t && (0, h.I)(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = function(t, {
                        top: e,
                        left: n,
                        bottom: i,
                        right: r
                    }) {
                        return {
                            x: tH(t.x, n, r),
                            y: tH(t.y, e, i)
                        }
                    }(n.layoutBox, t) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: tZ(t, "left", "right"),
                            y: tZ(t, "top", "bottom")
                        }
                    }(e), i !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && tq(t => {
                        this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let n = {};
                            return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
                        }(n.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: n
                    } = this.getProps();
                    if (!e || !(0, h.I)(e)) return !1;
                    let i = e.current;
                    (0, tV.k)(null !== i, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: r
                    } = this.visualElement;
                    if (!r || !r.layout) return !1;
                    let s = (0, tK.z)(i, r.root, this.visualElement.getTransformPagePoint()),
                        o = {
                            x: tY((t = r.layout.layoutBox).x, s.x),
                            y: tY(t.y, s.y)
                        };
                    if (n) {
                        let t = n((0, tJ.z2)(o));
                        this.hasMutatedConstraints = !!t, t && (o = (0, tJ.i8)(t))
                    }
                    return o
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: n,
                        dragElastic: i,
                        dragTransition: r,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: o
                    } = this.getProps(), a = this.constraints || {};
                    return Promise.all(tq(o => {
                        if (!t3(o, e, this.currentDirection)) return;
                        let l = a && a[o] || {};
                        s && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: n ? t[o] : 0,
                            bounceStiffness: i ? 200 : 1e6,
                            bounceDamping: i ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...r,
                            ...l
                        };
                        return this.startAxisValueAnimation(o, u)
                    })).then(o)
                }
                startAxisValueAnimation(t, e) {
                    let n = this.getAxisMotionValue(t);
                    return n.start((0, t0.v)(t, n, 0, e))
                }
                stopAnimation() {
                    tq(t => this.getAxisMotionValue(t).stop())
                }
                getAxisMotionValue(t) {
                    let e = "_drag" + t.toUpperCase(),
                        n = this.visualElement.getProps();
                    return n[e] || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    tq(e => {
                        let {
                            drag: n
                        } = this.getProps();
                        if (!t3(e, n, this.currentDirection)) return;
                        let {
                            projection: i
                        } = this.visualElement, r = this.getAxisMotionValue(e);
                        if (i && i.layout) {
                            let {
                                min: n,
                                max: s
                            } = i.layout.layoutBox[e];
                            r.set(t[e] - (0, tB.C)(n, s, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: n
                    } = this.visualElement;
                    if (!(0, h.I)(e) || !n || !this.constraints) return;
                    this.stopAnimation();
                    let i = {
                        x: 0,
                        y: 0
                    };
                    tq(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e) {
                            let n = e.get();
                            i[t] = function(t, e) {
                                let n = .5,
                                    i = tO(t),
                                    r = tO(e);
                                return r > i ? n = (0, tF.Y)(e.min, e.max - i, t.min) : i > r && (n = (0, tF.Y)(t.min, t.max - r, e.min)), (0, tz.u)(0, 1, n)
                            }({
                                min: n,
                                max: n
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: r
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = r ? r({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), tq(e => {
                        if (!t3(e, t, null)) return;
                        let n = this.getAxisMotionValue(e),
                            {
                                min: r,
                                max: s
                            } = this.constraints[e];
                        n.set((0, tB.C)(r, s, i[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    t1.set(this.visualElement, this);
                    let t = Z(this.visualElement.current, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: n = !0
                            } = this.getProps();
                            e && n && this.start(t)
                        }),
                        e = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            (0, h.I)(t) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: n
                        } = this.visualElement,
                        i = n.addEventListener("measure", e);
                    n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), e();
                    let r = X(window, "resize", () => this.scalePositionWithinConstraints()),
                        s = n.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (tq(e => {
                                let n = this.getAxisMotionValue(e);
                                n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        r(), t(), i(), s && s()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: n = !1,
                            dragPropagation: i = !1,
                            dragConstraints: r = !1,
                            dragElastic: s = .35,
                            dragMomentum: o = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: n,
                        dragPropagation: i,
                        dragConstraints: r,
                        dragElastic: s,
                        dragMomentum: o
                    }
                }
            }

            function t3(t, e, n) {
                return (!0 === e || e === t) && (null === n || n === t)
            }
            class t5 extends tt {
                constructor(t) {
                    super(t), this.removeGroupControls = ts.Z, this.removeListeners = ts.Z, this.controls = new t2(t)
                }
                mount() {
                    let {
                        dragControls: t
                    } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ts.Z
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let t4 = t => (e, n) => {
                t && W.Wi.update(() => t(e, n))
            };
            class t9 extends tt {
                constructor() {
                    super(...arguments), this.removePointerDownListener = ts.Z
                }
                onPointerDown(t) {
                    this.session = new tM(t, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint()
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: t,
                        onPanStart: e,
                        onPan: n,
                        onPanEnd: i
                    } = this.node.getProps();
                    return {
                        onSessionStart: t4(t),
                        onStart: t4(e),
                        onMove: n,
                        onEnd: (t, e) => {
                            delete this.session, i && W.Wi.update(() => i(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = Z(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            var t6 = n(77196);
            let t8 = {
                hasAnimatedSinceResize: !0,
                hasEverUpdated: !1
            };

            function t7(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let et = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t) {
                        if (!tQ.px.test(t)) return t;
                        t = parseFloat(t)
                    }
                    let n = t7(t, e.target.x),
                        i = t7(t, e.target.y);
                    return `${n}% ${i}%`
                }
            };
            var ee = n(89155),
                en = n(611);
            class ei extends r.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: n,
                        layoutId: i
                    } = this.props, {
                        projection: r
                    } = t;
                    (0, en.B)(es), r && (e.group && e.group.add(r), n && n.register && i && n.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), r.setOptions({ ...r.options,
                        onExitComplete: () => this.safeToRemove()
                    })), t8.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: n,
                        drag: i,
                        isPresent: r
                    } = this.props, s = n.projection;
                    return s && (s.isPresent = r, i || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent === r || (r ? s.promote() : s.relegate() || W.Wi.postRender(() => {
                        let t = s.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), queueMicrotask(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: n
                    } = this.props, {
                        projection: i
                    } = t;
                    i && (i.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(i), n && n.deregister && n.deregister(i))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function er(t) {
                let [e, n] = (0, t6.oO)(), i = (0, r.useContext)(v.p);
                return r.createElement(ei, { ...t,
                    layoutGroup: i,
                    switchLayoutGroup: (0, r.useContext)(g),
                    isPresent: e,
                    safeToRemove: n
                })
            }
            let es = {
                borderRadius: { ...et,
                    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                },
                borderTopLeftRadius: et,
                borderTopRightRadius: et,
                borderBottomLeftRadius: et,
                borderBottomRightRadius: et,
                boxShadow: {
                    correct: (t, {
                        treeScale: e,
                        projectionDelta: n
                    }) => {
                        let i = ee.P.parse(t);
                        if (i.length > 5) return t;
                        let r = ee.P.createTransformer(t),
                            s = "number" != typeof i[0] ? 1 : 0,
                            o = n.x.scale * e.x,
                            a = n.y.scale * e.y;
                        i[0 + s] /= o, i[1 + s] /= a;
                        let l = (0, tB.C)(o, a, .5);
                        return "number" == typeof i[2 + s] && (i[2 + s] /= l), "number" == typeof i[3 + s] && (i[3 + s] /= l), r(i)
                    }
                }
            };
            var eo = n(27026),
                ea = n(927);
            let el = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                eu = el.length,
                eh = t => "string" == typeof t ? parseFloat(t) : t,
                ec = t => "number" == typeof t || tQ.px.test(t);

            function ed(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let ef = em(0, .5, ea.Bn),
                ep = em(.5, .95, ts.Z);

            function em(t, e, n) {
                return i => i < t ? 0 : i > e ? 1 : n((0, tF.Y)(t, e, i))
            }

            function ev(t, e) {
                t.min = e.min, t.max = e.max
            }

            function eg(t, e) {
                ev(t.x, e.x), ev(t.y, e.y)
            }
            var ey = n(91841);

            function ex(t, e, n, i, r) {
                return t -= e, t = (0, ey.q2)(t, 1 / n, i), void 0 !== r && (t = (0, ey.q2)(t, 1 / r, i)), t
            }

            function eP(t, e, [n, i, r], s, o) {
                ! function(t, e = 0, n = 1, i = .5, r, s = t, o = t) {
                    if (tQ.aQ.test(e) && (e = parseFloat(e), e = (0, tB.C)(o.min, o.max, e / 100) - o.min), "number" != typeof e) return;
                    let a = (0, tB.C)(s.min, s.max, i);
                    t === s && (a -= e), t.min = ex(t.min, e, n, a, r), t.max = ex(t.max, e, n, a, r)
                }(t, e[n], e[i], e[r], e.scale, s, o)
            }
            let eb = ["x", "scaleX", "originX"],
                ew = ["y", "scaleY", "originY"];

            function eA(t, e, n, i) {
                eP(t.x, e, eb, n ? n.x : void 0, i ? i.x : void 0), eP(t.y, e, ew, n ? n.y : void 0, i ? i.y : void 0)
            }
            var eT = n(37924);

            function eS(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function eC(t) {
                return eS(t.x) && eS(t.y)
            }

            function eV(t, e) {
                return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
            }

            function eD(t) {
                return tO(t.x) / tO(t.y)
            }
            var eE = n(77081);
            class eM {
                constructor() {
                    this.members = []
                }
                add(t) {
                    (0, eE.y4)(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if ((0, eE.cl)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let n = this.members.findIndex(e => t === e);
                    if (0 === n) return !1;
                    for (let t = n; t >= 0; t--) {
                        let n = this.members[t];
                        if (!1 !== n.isPresent) {
                            e = n;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let n = this.lead;
                    if (t !== n && (this.prevLead = n, this.lead = t, t.show(), n)) {
                        n.instance && n.scheduleRender(), t.scheduleRender(), t.resumeFrom = n, e && (t.resumeFrom.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: i
                        } = t.options;
                        !1 === i && n.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: n
                        } = t;
                        e.onExitComplete && e.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function eR(t, e, n) {
                let i = "",
                    r = t.x.translate / e.x,
                    s = t.y.translate / e.y;
                if ((r || s) && (i = `translate3d(${r}px, ${s}px, 0) `), (1 !== e.x || 1 !== e.y) && (i += `scale(${1/e.x}, ${1/e.y}) `), n) {
                    let {
                        rotate: t,
                        rotateX: e,
                        rotateY: r
                    } = n;
                    t && (i += `rotate(${t}deg) `), e && (i += `rotateX(${e}deg) `), r && (i += `rotateY(${r}deg) `)
                }
                let o = t.x.scale * e.x,
                    a = t.y.scale * e.y;
                return (1 !== o || 1 !== a) && (i += `scale(${o}, ${a})`), i || "none"
            }
            var ek = n(10121);
            let eL = (t, e) => t.depth - e.depth;
            class ej {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    (0, eE.y4)(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    (0, eE.cl)(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(eL), this.isDirty = !1, this.children.forEach(t)
                }
            }
            var eF = n(14457),
                eB = n(64854);
            let eO = ["", "X", "Y", "Z"],
                e$ = 0,
                eI = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                };

            function eW({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: n,
                checkIsScrollRoot: i,
                resetTransform: r
            }) {
                return class {
                    constructor(t = {}, n = null == e ? void 0 : e()) {
                        this.id = e$++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            eI.totalNodes = eI.resolvedTargetDeltas = eI.recalculatedProjection = 0, this.nodes.forEach(eX), this.nodes.forEach(eq), this.nodes.forEach(eK), this.nodes.forEach(ez), window.MotionDebug && window.MotionDebug.record(eI)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new ej)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new eo.L), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let n = this.eventHandlers.get(t);
                        n && n.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, n = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = (0, eF.v)(e), this.instance = e;
                        let {
                            layoutId: i,
                            layout: r,
                            visualElement: s
                        } = this.options;
                        if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), n && (r || i) && (this.isLayoutDirty = !0), t) {
                            let n;
                            let i = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, n && n(), n = function(t, e) {
                                    let n = performance.now(),
                                        i = ({
                                            timestamp: r
                                        }) => {
                                            let s = r - n;
                                            s >= e && ((0, W.Pn)(i), t(s - e))
                                        };
                                    return W.Wi.read(i, !0), () => (0, W.Pn)(i)
                                }(i, 250), t8.hasAnimatedSinceResize && (t8.hasAnimatedSinceResize = !1, this.nodes.forEach(eG))
                            })
                        }
                        i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && s && (i || r) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: n,
                            layout: i
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let r = this.options.transition || s.getDefaultTransition() || e3,
                                {
                                    onLayoutAnimationStart: o,
                                    onLayoutAnimationComplete: a
                                } = s.getProps(),
                                l = !this.targetLayout || !eV(this.targetLayout, i) || n,
                                u = !e && n;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                                let e = { ...(0, eT.e)(r, "layout"),
                                    onPlay: o,
                                    onComplete: a
                                };
                                (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || eG(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = i
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, W.Pn)(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(eJ), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: n
                        } = this.options;
                        if (void 0 === e && !n) return;
                        let i = this.getTransformTemplate();
                        this.prevTransformTemplateValue = i ? i(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(eY);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(eZ), this.isUpdating = !1, this.nodes.forEach(e_), this.nodes.forEach(eU), this.nodes.forEach(eN), this.clearAllSnapshots();
                        let t = performance.now();
                        W.frameData.delta = (0, tz.u)(0, 1e3 / 60, t - W.frameData.timestamp), W.frameData.timestamp = t, W.frameData.isProcessing = !0, W.S6.update.process(W.frameData), W.S6.preRender.process(W.frameData), W.S6.render.process(W.frameData), W.frameData.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(eH), this.sharedNodes.forEach(eQ)
                    }
                    scheduleUpdateProjection() {
                        W.Wi.preRender(this.updateProjection, !1, !0)
                    }
                    scheduleCheckAfterUnmount() {
                        W.Wi.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = (0, tG.dO)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: i(this.instance),
                            offset: n(this.instance)
                        })
                    }
                    resetTransform() {
                        if (!r) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform,
                            e = this.projectionDelta && !eC(this.projectionDelta),
                            n = this.getTransformTemplate(),
                            i = n ? n(this.latestValues, "") : void 0,
                            s = i !== this.prevTransformTemplateValue;
                        t && (e || (0, ek.ud)(this.latestValues) || s) && (r(this.instance, i), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let n = this.measurePageBox(),
                            i = this.removeElementScroll(n);
                        return t && (i = this.removeTransform(i)), e9((e = i).x), e9(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: n,
                            layoutBox: i,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return (0, tG.dO)();
                        let e = t.measureViewportBox(),
                            {
                                scroll: n
                            } = this.root;
                        return n && ((0, ey.am)(e.x, n.offset.x), (0, ey.am)(e.y, n.offset.y)), e
                    }
                    removeElementScroll(t) {
                        let e = (0, tG.dO)();
                        eg(e, t);
                        for (let n = 0; n < this.path.length; n++) {
                            let i = this.path[n],
                                {
                                    scroll: r,
                                    options: s
                                } = i;
                            if (i !== this.root && r && s.layoutScroll) {
                                if (r.isRoot) {
                                    eg(e, t);
                                    let {
                                        scroll: n
                                    } = this.root;
                                    n && ((0, ey.am)(e.x, -n.offset.x), (0, ey.am)(e.y, -n.offset.y))
                                }(0, ey.am)(e.x, r.offset.x), (0, ey.am)(e.y, r.offset.y)
                            }
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let n = (0, tG.dO)();
                        eg(n, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            !e && i.options.layoutScroll && i.scroll && i !== i.root && (0, ey.D2)(n, {
                                x: -i.scroll.offset.x,
                                y: -i.scroll.offset.y
                            }), (0, ek.ud)(i.latestValues) && (0, ey.D2)(n, i.latestValues)
                        }
                        return (0, ek.ud)(this.latestValues) && (0, ey.D2)(n, this.latestValues), n
                    }
                    removeTransform(t) {
                        let e = (0, tG.dO)();
                        eg(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let n = this.path[t];
                            if (!n.instance || !(0, ek.ud)(n.latestValues)) continue;
                            (0, ek.Lj)(n.latestValues) && n.updateSnapshot();
                            let i = (0, tG.dO)();
                            eg(i, n.measurePageBox()), eA(e, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, i)
                        }
                        return (0, ek.ud)(this.latestValues) && eA(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== W.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e, n, i, r;
                        let s = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                        let o = !!this.resumingFrom || this !== s;
                        if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget)) return;
                        let {
                            layout: a,
                            layoutId: l
                        } = this.options;
                        if (this.layout && (a || l)) {
                            if (this.resolvedRelativeTargetAt = W.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, tG.dO)(), this.relativeTargetOrigin = (0, tG.dO)(), tX(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), eg(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = (0, tG.dO)(), this.targetWithTransforms = (0, tG.dO)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), n = this.target, i = this.relativeTarget, r = this.relativeParent.target, tU(n.x, i.x, r.x), tU(n.y, i.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : eg(this.target, this.layout.layoutBox), (0, ey.o2)(this.target, this.targetDelta)) : eg(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, tG.dO)(), this.relativeTargetOrigin = (0, tG.dO)(), tX(this.relativeTargetOrigin, this.target, t.target), eg(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                eI.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || (0, ek.Lj)(this.parent.latestValues) || (0, ek.D_)(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            n = !!this.resumingFrom || this !== e,
                            i = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (i = !1), n && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1), this.resolvedRelativeTargetAt === W.frameData.timestamp && (i = !1), i) return;
                        let {
                            layout: r,
                            layoutId: s
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || s)) return;
                        eg(this.layoutCorrected, this.layout.layoutBox);
                        let o = this.treeScale.x,
                            a = this.treeScale.y;
                        (0, ey.YY)(this.layoutCorrected, this.treeScale, this.path, n), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox);
                        let {
                            target: l
                        } = e;
                        if (!l) {
                            this.projectionTransform && (this.projectionDelta = (0, tG.wc)(), this.projectionTransform = "none", this.scheduleRender());
                            return
                        }
                        this.projectionDelta || (this.projectionDelta = (0, tG.wc)(), this.projectionDeltaWithTransform = (0, tG.wc)());
                        let u = this.projectionTransform;
                        tW(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = eR(this.projectionDelta, this.treeScale), (this.projectionTransform !== u || this.treeScale.x !== o || this.treeScale.y !== a) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), eI.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        if (this.options.scheduleRender && this.options.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(t, e = !1) {
                        let n;
                        let i = this.snapshot,
                            r = i ? i.latestValues : {},
                            s = { ...this.latestValues
                            },
                            o = (0, tG.wc)();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = (0, tG.dO)(),
                            l = (i ? i.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            u = this.getStack(),
                            h = !u || u.members.length <= 1,
                            c = !!(l && !h && !0 === this.options.crossfade && !this.path.some(e2));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let i = e / 1e3;
                            if (e0(o.x, t.x, i), e0(o.y, t.y, i), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var u, d, f, p;
                                tX(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), f = this.relativeTarget, p = this.relativeTargetOrigin, e1(f.x, p.x, a.x, i), e1(f.y, p.y, a.y, i), n && (u = this.relativeTarget, d = n, u.x.min === d.x.min && u.x.max === d.x.max && u.y.min === d.y.min && u.y.max === d.y.max) && (this.isProjectionDirty = !1), n || (n = (0, tG.dO)()), eg(n, this.relativeTarget)
                            }
                            l && (this.animationValues = s, function(t, e, n, i, r, s) {
                                r ? (t.opacity = (0, tB.C)(0, void 0 !== n.opacity ? n.opacity : 1, ef(i)), t.opacityExit = (0, tB.C)(void 0 !== e.opacity ? e.opacity : 1, 0, ep(i))) : s && (t.opacity = (0, tB.C)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, i));
                                for (let r = 0; r < eu; r++) {
                                    let s = `border${el[r]}Radius`,
                                        o = ed(e, s),
                                        a = ed(n, s);
                                    (void 0 !== o || void 0 !== a) && (o || (o = 0), a || (a = 0), 0 === o || 0 === a || ec(o) === ec(a) ? (t[s] = Math.max((0, tB.C)(eh(o), eh(a), i), 0), (tQ.aQ.test(a) || tQ.aQ.test(o)) && (t[s] += "%")) : t[s] = a)
                                }(e.rotate || n.rotate) && (t.rotate = (0, tB.C)(e.rotate || 0, n.rotate || 0, i))
                            }(s, r, this.latestValues, i, c, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = i
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, W.Pn)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = W.Wi.update(() => {
                            t8.hasAnimatedSinceResize = !0, this.currentAnimation = (0, eB.D)(0, 1e3, { ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: n,
                                layout: i,
                                latestValues: r
                            } = t;
                        if (e && n && i) {
                            if (this !== t && this.layout && i && e6(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                                n = this.target || (0, tG.dO)();
                                let e = tO(this.layout.layoutBox.x);
                                n.x.min = t.target.x.min, n.x.max = n.x.min + e;
                                let i = tO(this.layout.layoutBox.y);
                                n.y.min = t.target.y.min, n.y.max = n.y.min + i
                            }
                            eg(e, n), (0, ey.D2)(e, r), tW(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new eM), this.sharedNodes.get(t).add(e);
                        let n = e.options.initialPromotionConfig;
                        e.promote({
                            transition: n ? n.transition : void 0,
                            preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: n
                    } = {}) {
                        let i = this.getStack();
                        i && i.promote(this, n), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: n
                            } = t;
                        if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (e = !0), !e) return;
                        let i = {};
                        for (let e = 0; e < eO.length; e++) {
                            let r = "rotate" + eO[e];
                            n[r] && (i[r] = n[r], t.setStaticValue(r, 0))
                        }
                        for (let e in t.render(), i) t.setStaticValue(e, i[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t = {}) {
                        var e, n;
                        let i = {};
                        if (!this.instance || this.isSVG) return i;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        i.visibility = "";
                        let r = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, i.opacity = "", i.pointerEvents = $(t.pointerEvents) || "", i.transform = r ? r(this.latestValues, "") : "none", i;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = $(t.pointerEvents) || ""), this.hasProjected && !(0, ek.ud)(this.latestValues) && (e.transform = r ? r({}, "") : "none", this.hasProjected = !1), e
                        }
                        let o = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), i.transform = eR(this.projectionDeltaWithTransform, this.treeScale, o), r && (i.transform = r(o, i.transform));
                        let {
                            x: a,
                            y: l
                        } = this.projectionDelta;
                        for (let t in i.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, s.animationValues ? i.opacity = s === this ? null !== (n = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : i.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, en.P) {
                            if (void 0 === o[t]) continue;
                            let {
                                correct: e,
                                applyTo: n
                            } = en.P[t], r = "none" === i.transform ? o[t] : e(o[t], s);
                            if (n) {
                                let t = n.length;
                                for (let e = 0; e < t; e++) i[n[e]] = r
                            } else i[t] = r
                        }
                        return this.options.layoutId && (i.pointerEvents = s === this ? $(t.pointerEvents) || "" : "none"), i
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(eY), this.root.sharedNodes.clear()
                    }
                }
            }

            function eU(t) {
                t.updateLayout()
            }

            function eN(t) {
                var e;
                let n = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: i
                    } = t.layout, {
                        animationType: r
                    } = t.options, s = n.source !== t.layout.source;
                    "size" === r ? tq(t => {
                        let i = s ? n.measuredBox[t] : n.layoutBox[t],
                            r = tO(i);
                        i.min = e[t].min, i.max = i.min + r
                    }) : e6(r, n.layoutBox, e) && tq(i => {
                        let r = s ? n.measuredBox[i] : n.layoutBox[i],
                            o = tO(e[i]);
                        r.max = r.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[i].max = t.relativeTarget[i].min + o)
                    });
                    let o = (0, tG.wc)();
                    tW(o, e, n.layoutBox);
                    let a = (0, tG.wc)();
                    s ? tW(a, t.applyTransform(i, !0), n.measuredBox) : tW(a, e, n.layoutBox);
                    let l = !eC(o),
                        u = !1;
                    if (!t.resumeFrom) {
                        let i = t.getClosestProjectingParent();
                        if (i && !i.resumeFrom) {
                            let {
                                snapshot: r,
                                layout: s
                            } = i;
                            if (r && s) {
                                let o = (0, tG.dO)();
                                tX(o, n.layoutBox, r.layoutBox);
                                let a = (0, tG.dO)();
                                tX(a, e, s.layoutBox), eV(o, a) || (u = !0), i.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = i)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: n,
                        delta: a,
                        layoutDelta: o,
                        hasLayoutChanged: l,
                        hasRelativeTargetChanged: u
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function eX(t) {
                eI.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function ez(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function eH(t) {
                t.clearSnapshot()
            }

            function eY(t) {
                t.clearMeasurements()
            }

            function eZ(t) {
                t.isLayoutDirty = !1
            }

            function e_(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function eG(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function eq(t) {
                t.resolveTargetDelta()
            }

            function eK(t) {
                t.calcProjection()
            }

            function eJ(t) {
                t.resetRotation()
            }

            function eQ(t) {
                t.removeLeadSnapshot()
            }

            function e0(t, e, n) {
                t.translate = (0, tB.C)(e.translate, 0, n), t.scale = (0, tB.C)(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function e1(t, e, n, i) {
                t.min = (0, tB.C)(e.min, n.min, i), t.max = (0, tB.C)(e.max, n.max, i)
            }

            function e2(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let e3 = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                e5 = t => "undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(t),
                e4 = e5("applewebkit/") && !e5("chrome/") ? Math.round : ts.Z;

            function e9(t) {
                t.min = e4(t.min), t.max = e4(t.max)
            }

            function e6(t, e, n) {
                return "position" === t || "preserve-aspect" === t && !t$(eD(e), eD(n), .2)
            }
            let e8 = eW({
                    attachResizeListener: (t, e) => X(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                e7 = {
                    current: void 0
                },
                nt = eW({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!e7.current) {
                            let t = new e8({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), e7.current = t
                        }
                        return e7.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                });
            var ne = n(94478),
                nn = n(72210);
            let ni = (t, e) => P(t) ? new nn.e(e, {
                    enableHardwareAcceleration: !1
                }) : new ne.W(e, {
                    enableHardwareAcceleration: !0
                }),
                nr = {
                    animation: {
                        Feature: tT
                    },
                    exit: {
                        Feature: tC
                    },
                    inView: {
                        Feature: tf
                    },
                    tap: {
                        Feature: ta
                    },
                    focus: {
                        Feature: ti
                    },
                    hover: {
                        Feature: tn
                    },
                    pan: {
                        Feature: t9
                    },
                    drag: {
                        Feature: t5,
                        ProjectionNode: nt,
                        MeasureLayout: er
                    },
                    layout: {
                        ProjectionNode: nt,
                        MeasureLayout: er
                    }
                },
                ns = function(t) {
                    function e(e, n = {}) {
                        return function({
                            preloadedFeatures: t,
                            createVisualElement: e,
                            useRender: n,
                            useVisualState: i,
                            Component: x
                        }) {
                            t && function(t) {
                                for (let e in t) p.A[e] = { ...p.A[e],
                                    ...t[e]
                                }
                            }(t);
                            let P = (0, r.forwardRef)(function(p, y) {
                                var P;
                                let b;
                                let w = { ...(0, r.useContext)(s._),
                                        ...p,
                                        layoutId: function({
                                            layoutId: t
                                        }) {
                                            let e = (0, r.useContext)(v.p).id;
                                            return e && void 0 !== t ? e + "-" + t : t
                                        }(p)
                                    },
                                    {
                                        isStatic: A
                                    } = w,
                                    T = function(t) {
                                        let {
                                            initial: e,
                                            animate: n
                                        } = function(t, e) {
                                            if ((0, d.G)(t)) {
                                                let {
                                                    initial: e,
                                                    animate: n
                                                } = t;
                                                return {
                                                    initial: !1 === e || (0, c.$)(e) ? e : void 0,
                                                    animate: (0, c.$)(n) ? n : void 0
                                                }
                                            }
                                            return !1 !== t.inherit ? e : {}
                                        }(t, (0, r.useContext)(o));
                                        return (0, r.useMemo)(() => ({
                                            initial: e,
                                            animate: n
                                        }), [f(e), f(n)])
                                    }(p),
                                    S = i(p, A);
                                if (!A && m.j) {
                                    T.visualElement = function(t, e, n, i) {
                                        let {
                                            visualElement: h
                                        } = (0, r.useContext)(o), c = (0, r.useContext)(u), d = (0, r.useContext)(a.O), f = (0, r.useContext)(s._).reducedMotion, p = (0, r.useRef)();
                                        i = i || c.renderer, !p.current && i && (p.current = i(t, {
                                            visualState: e,
                                            parent: h,
                                            props: n,
                                            presenceContext: d,
                                            blockInitialAnimation: !!d && !1 === d.initial,
                                            reducedMotionConfig: f
                                        }));
                                        let m = p.current;
                                        (0, r.useInsertionEffect)(() => {
                                            m && m.update(n, d)
                                        });
                                        let v = (0, r.useRef)(!!window.HandoffAppearAnimations);
                                        return (0, l.L)(() => {
                                            m && (m.render(), v.current && m.animationState && m.animationState.animateChanges())
                                        }), (0, r.useEffect)(() => {
                                            m && (m.updateFeatures(), !v.current && m.animationState && m.animationState.animateChanges(), window.HandoffAppearAnimations = void 0, v.current = !1)
                                        }), m
                                    }(x, S, w, e);
                                    let n = (0, r.useContext)(g),
                                        i = (0, r.useContext)(u).strict;
                                    T.visualElement && (b = T.visualElement.loadFeatures(w, i, t, n))
                                }
                                return r.createElement(o.Provider, {
                                    value: T
                                }, b && T.visualElement ? r.createElement(b, {
                                    visualElement: T.visualElement,
                                    ...w
                                }) : null, n(x, p, (P = T.visualElement, (0, r.useCallback)(t => {
                                    t && S.mount && S.mount(t), P && (t ? P.mount(t) : P.unmount()), y && ("function" == typeof y ? y(t) : (0, h.I)(y) && (y.current = t))
                                }, [P])), S, A, T.visualElement))
                            });
                            return P[y] = x, P
                        }(t(e, n))
                    }
                    if ("undefined" == typeof Proxy) return e;
                    let n = new Map;
                    return new Proxy(e, {
                        get: (t, i) => (n.has(i) || n.set(i, e(i)), n.get(i))
                    })
                }((t, e) => (function(t, {
                    forwardMotionProps: e = !1
                }, n, i) {
                    return { ...P(t) ? U : N,
                        preloadedFeatures: n,
                        useRender: function(t = !1) {
                            return (e, n, i, {
                                latestValues: s
                            }, o) => {
                                let a = (P(e) ? function(t, e, n, i) {
                                        let s = (0, r.useMemo)(() => {
                                            let n = M();
                                            return (0, E.i)(n, e, {
                                                enableHardwareAcceleration: !1
                                            }, (0, R.a)(i), t.transformTemplate), { ...n.attrs,
                                                style: { ...n.style
                                                }
                                            }
                                        }, [e]);
                                        if (t.style) {
                                            let e = {};
                                            S(e, t.style, t), s.style = { ...e,
                                                ...s.style
                                            }
                                        }
                                        return s
                                    } : function(t, e, n) {
                                        let i = {},
                                            s = function(t, e, n) {
                                                let i = t.style || {},
                                                    s = {};
                                                return S(s, i, t), Object.assign(s, function({
                                                    transformTemplate: t
                                                }, e, n) {
                                                    return (0, r.useMemo)(() => {
                                                        let i = T();
                                                        return (0, A.r)(i, e, {
                                                            enableHardwareAcceleration: !n
                                                        }, t), Object.assign({}, i.vars, i.style)
                                                    }, [e])
                                                }(t, e, n)), t.transformValues ? t.transformValues(s) : s
                                            }(t, e, n);
                                        return t.drag && !1 !== t.dragListener && (i.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0), i.style = s, i
                                    })(n, s, o, e),
                                    l = { ... function(t, e, n) {
                                            let i = {};
                                            for (let r in t)("values" !== r || "object" != typeof t.values) && (D(r) || !0 === n && V(r) || !e && !V(r) || t.draggable && r.startsWith("onDrag")) && (i[r] = t[r]);
                                            return i
                                        }(n, "string" == typeof e, t),
                                        ...a,
                                        ref: i
                                    },
                                    {
                                        children: u
                                    } = n,
                                    h = (0, r.useMemo)(() => (0, w.i)(u) ? u.get() : u, [u]);
                                return (0, r.createElement)(e, { ...l,
                                    children: h
                                })
                            }
                        }(e),
                        createVisualElement: i,
                        Component: t
                    }
                })(t, e, nr, ni))
        },
        27905: function(t, e, n) {
            n.d(e, {
                D: function() {
                    return i
                }
            });
            let i = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        },
        80417: function(t, e, n) {
            n.d(e, {
                Xp: function() {
                    return o
                },
                f9: function() {
                    return r
                },
                tm: function() {
                    return s
                }
            });
            let i = t => e => "string" == typeof e && e.startsWith(t),
                r = i("--"),
                s = i("var(--"),
                o = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
        },
        14457: function(t, e, n) {
            n.d(e, {
                v: function() {
                    return i
                }
            });

            function i(t) {
                return t instanceof SVGElement && "svg" !== t.tagName
            }
        },
        19006: function(t, e, n) {
            n.d(e, {
                T: function() {
                    return o
                }
            });
            var i = n(89155),
                r = n(34875),
                s = n(95008);

            function o(t, e) {
                let n = (0, s.A)(t);
                return n !== r.h && (n = i.P), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
            }
        },
        95008: function(t, e, n) {
            n.d(e, {
                A: function() {
                    return o
                }
            });
            var i = n(2199),
                r = n(34875);
            let s = { ...n(83002).j,
                    color: i.$,
                    backgroundColor: i.$,
                    outlineColor: i.$,
                    fill: i.$,
                    stroke: i.$,
                    borderColor: i.$,
                    borderTopColor: i.$,
                    borderRightColor: i.$,
                    borderBottomColor: i.$,
                    borderLeftColor: i.$,
                    filter: r.h,
                    WebkitFilter: r.h
                },
                o = t => s[t]
        },
        38824: function(t, e, n) {
            n.d(e, {
                $: function() {
                    return o
                },
                C: function() {
                    return a
                }
            });
            var i = n(2980),
                r = n(43681),
                s = n(88598);
            let o = [i.Rx, r.px, r.aQ, r.RW, r.vw, r.vh, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                a = t => o.find((0, s.l)(t))
        },
        83002: function(t, e, n) {
            n.d(e, {
                j: function() {
                    return o
                }
            });
            var i = n(2980),
                r = n(43681);
            let s = { ...i.Rx,
                    transform: Math.round
                },
                o = {
                    borderWidth: r.px,
                    borderTopWidth: r.px,
                    borderRightWidth: r.px,
                    borderBottomWidth: r.px,
                    borderLeftWidth: r.px,
                    borderRadius: r.px,
                    radius: r.px,
                    borderTopLeftRadius: r.px,
                    borderTopRightRadius: r.px,
                    borderBottomRightRadius: r.px,
                    borderBottomLeftRadius: r.px,
                    width: r.px,
                    maxWidth: r.px,
                    height: r.px,
                    maxHeight: r.px,
                    size: r.px,
                    top: r.px,
                    right: r.px,
                    bottom: r.px,
                    left: r.px,
                    padding: r.px,
                    paddingTop: r.px,
                    paddingRight: r.px,
                    paddingBottom: r.px,
                    paddingLeft: r.px,
                    margin: r.px,
                    marginTop: r.px,
                    marginRight: r.px,
                    marginBottom: r.px,
                    marginLeft: r.px,
                    rotate: r.RW,
                    rotateX: r.RW,
                    rotateY: r.RW,
                    rotateZ: r.RW,
                    scale: i.bA,
                    scaleX: i.bA,
                    scaleY: i.bA,
                    scaleZ: i.bA,
                    skew: r.RW,
                    skewX: r.RW,
                    skewY: r.RW,
                    distance: r.px,
                    translateX: r.px,
                    translateY: r.px,
                    translateZ: r.px,
                    x: r.px,
                    y: r.px,
                    z: r.px,
                    perspective: r.px,
                    transformPerspective: r.px,
                    opacity: i.Fq,
                    originX: r.$C,
                    originY: r.$C,
                    originZ: r.px,
                    zIndex: s,
                    fillOpacity: i.Fq,
                    strokeOpacity: i.Fq,
                    numOctaves: s
                }
        },
        88598: function(t, e, n) {
            n.d(e, {
                l: function() {
                    return i
                }
            });
            let i = t => e => e.test(t)
        },
        94478: function(t, e, n) {
            n.d(e, {
                W: function() {
                    return d
                }
            });
            var i = n(40458),
                r = n(80417),
                s = n(49303),
                o = n(63495),
                a = n(82449),
                l = n(95008),
                u = n(83937),
                h = n(81923),
                c = n(65735);
            class d extends h.J {
                readValueFromInstance(t, e) {
                    if (s.G.has(e)) {
                        let t = (0, l.A)(e);
                        return t && t.default || 0
                    } {
                        let n = window.getComputedStyle(t),
                            i = ((0, r.f9)(e) ? n.getPropertyValue(e) : n[e]) || 0;
                        return "string" == typeof i ? i.trim() : i
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return (0, u.J)(t, e)
                }
                build(t, e, n, r) {
                    (0, i.r)(t, e, n, r.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e) {
                    return (0, o.U)(t, e)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    (0, c.i)(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
                renderInstance(t, e, n, i) {
                    (0, a.N)(t, e, n, i)
                }
            }
        },
        40458: function(t, e, n) {
            n.d(e, {
                r: function() {
                    return u
                }
            });
            var i = n(49303);
            let r = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                s = i._.length;
            var o = n(80417);
            let a = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
            var l = n(83002);

            function u(t, e, n, u) {
                let {
                    style: h,
                    vars: c,
                    transform: d,
                    transformOrigin: f
                } = t, p = !1, m = !1, v = !0;
                for (let t in e) {
                    let n = e[t];
                    if ((0, o.f9)(t)) {
                        c[t] = n;
                        continue
                    }
                    let r = l.j[t],
                        s = a(n, r);
                    if (i.G.has(t)) {
                        if (p = !0, d[t] = s, !v) continue;
                        n !== (r.default || 0) && (v = !1)
                    } else t.startsWith("origin") ? (m = !0, f[t] = s) : h[t] = s
                }
                if (!e.transform && (p || u ? h.transform = function(t, {
                        enableHardwareAcceleration: e = !0,
                        allowTransformNone: n = !0
                    }, o, a) {
                        let l = "";
                        for (let e = 0; e < s; e++) {
                            let n = i._[e];
                            if (void 0 !== t[n]) {
                                let e = r[n] || n;
                                l += `${e}(${t[n]}) `
                            }
                        }
                        return e && !t.z && (l += "translateZ(0)"), l = l.trim(), a ? l = a(t, o ? "" : l) : n && o && (l = "none"), l
                    }(t.transform, n, v, u) : h.transform && (h.transform = "none")), m) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: n = 0
                    } = f;
                    h.transformOrigin = `${t} ${e} ${n}`
                }
            }
        },
        82449: function(t, e, n) {
            n.d(e, {
                N: function() {
                    return i
                }
            });

            function i(t, {
                style: e,
                vars: n
            }, i, r) {
                for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(i)), n) t.style.setProperty(s, n[s])
            }
        },
        63495: function(t, e, n) {
            n.d(e, {
                U: function() {
                    return s
                }
            });
            var i = n(41118),
                r = n(65735);

            function s(t, e) {
                let {
                    style: n
                } = t, s = {};
                for (let o in n)((0, r.i)(n[o]) || e.style && (0, r.i)(e.style[o]) || (0, i.j)(o, t)) && (s[o] = n[o]);
                return s
            }
        },
        49303: function(t, e, n) {
            n.d(e, {
                G: function() {
                    return r
                },
                _: function() {
                    return i
                }
            });
            let i = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                r = new Set(i)
        },
        94900: function(t, e, n) {
            n.d(e, {
                R: function() {
                    return i
                }
            });
            let i = new WeakMap
        },
        72210: function(t, e, n) {
            n.d(e, {
                e: function() {
                    return f
                }
            });
            var i = n(75625),
                r = n(81923),
                s = n(1524),
                o = n(27905),
                a = n(70888),
                l = n(49303),
                u = n(58239),
                h = n(95008),
                c = n(84597),
                d = n(30922);
            class f extends r.J {
                constructor() {
                    super(...arguments), this.isSVGTag = !1
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (l.G.has(e)) {
                        let t = (0, h.A)(e);
                        return t && t.default || 0
                    }
                    return e = a.s.has(e) ? e : (0, o.D)(e), t.getAttribute(e)
                }
                measureInstanceViewportBox() {
                    return (0, c.dO)()
                }
                scrapeMotionValuesFromProps(t, e) {
                    return (0, i.U)(t, e)
                }
                build(t, e, n, i) {
                    (0, s.i)(t, e, n, this.isSVGTag, i.transformTemplate)
                }
                renderInstance(t, e, n, i) {
                    (0, u.K)(t, e, n, i)
                }
                mount(t) {
                    this.isSVGTag = (0, d.a)(t.tagName), super.mount(t)
                }
            }
        },
        1524: function(t, e, n) {
            n.d(e, {
                i: function() {
                    return l
                }
            });
            var i = n(40458),
                r = n(43681);

            function s(t, e, n) {
                return "string" == typeof t ? t : r.px.transform(e + n * t)
            }
            let o = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                a = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function l(t, {
                attrX: e,
                attrY: n,
                attrScale: l,
                originX: u,
                originY: h,
                pathLength: c,
                pathSpacing: d = 1,
                pathOffset: f = 0,
                ...p
            }, m, v, g) {
                if ((0, i.r)(t, p, m, g), v) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: y,
                    style: x,
                    dimensions: P
                } = t;
                y.transform && (P && (x.transform = y.transform), delete y.transform), P && (void 0 !== u || void 0 !== h || x.transform) && (x.transformOrigin = function(t, e, n) {
                    let i = s(e, t.x, t.width),
                        r = s(n, t.y, t.height);
                    return `${i} ${r}`
                }(P, void 0 !== u ? u : .5, void 0 !== h ? h : .5)), void 0 !== e && (y.x = e), void 0 !== n && (y.y = n), void 0 !== l && (y.scale = l), void 0 !== c && function(t, e, n = 1, i = 0, s = !0) {
                    t.pathLength = 1;
                    let l = s ? o : a;
                    t[l.offset] = r.px.transform(-i);
                    let u = r.px.transform(e),
                        h = r.px.transform(n);
                    t[l.array] = `${u} ${h}`
                }(y, c, d, f, !1)
            }
        },
        70888: function(t, e, n) {
            n.d(e, {
                s: function() {
                    return i
                }
            });
            let i = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
        },
        30922: function(t, e, n) {
            n.d(e, {
                a: function() {
                    return i
                }
            });
            let i = t => "string" == typeof t && "svg" === t.toLowerCase()
        },
        58239: function(t, e, n) {
            n.d(e, {
                K: function() {
                    return o
                }
            });
            var i = n(27905),
                r = n(82449),
                s = n(70888);

            function o(t, e, n, o) {
                for (let n in (0, r.N)(t, e, void 0, o), e.attrs) t.setAttribute(s.s.has(n) ? n : (0, i.D)(n), e.attrs[n])
            }
        },
        75625: function(t, e, n) {
            n.d(e, {
                U: function() {
                    return o
                }
            });
            var i = n(65735),
                r = n(63495),
                s = n(49303);

            function o(t, e) {
                let n = (0, r.U)(t, e);
                for (let r in t)((0, i.i)(t[r]) || (0, i.i)(e[r])) && (n[-1 !== s._.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r] = t[r]);
                return n
            }
        },
        76049: function(t, e, n) {
            n.d(e, {
                G: function() {
                    return o
                },
                M: function() {
                    return a
                }
            });
            var i = n(67866),
                r = n(13345),
                s = n(75247);

            function o(t) {
                return (0, i.H)(t.animate) || s.V.some(e => (0, r.$)(t[e]))
            }

            function a(t) {
                return !!(o(t) || t.variants)
            }
        },
        13345: function(t, e, n) {
            n.d(e, {
                $: function() {
                    return i
                }
            });

            function i(t) {
                return "string" == typeof t || Array.isArray(t)
            }
        },
        32593: function(t, e, n) {
            n.d(e, {
                x: function() {
                    return r
                }
            });
            var i = n(93331);

            function r(t, e, n) {
                let r = t.getProps();
                return (0, i.o)(r, e, void 0 !== n ? n : r.custom, function(t) {
                    let e = {};
                    return t.values.forEach((t, n) => e[n] = t.get()), e
                }(t), function(t) {
                    let e = {};
                    return t.values.forEach((t, n) => e[n] = t.getVelocity()), e
                }(t))
            }
        },
        93331: function(t, e, n) {
            n.d(e, {
                o: function() {
                    return i
                }
            });

            function i(t, e, n, i = {}, r = {}) {
                return "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)), e
            }
        },
        27798: function(t, e, n) {
            n.d(e, {
                GJ: function() {
                    return v
                },
                P$: function() {
                    return g
                },
                CD: function() {
                    return m
                }
            });
            var i = n(44747),
                r = n(85243),
                s = n(61832),
                o = n(74101),
                a = n(89155),
                l = n(19006),
                u = n(2199),
                h = n(38824),
                c = n(88598);
            let d = [...h.$, u.$, a.P],
                f = t => d.find((0, c.l)(t));
            var p = n(32593);

            function m(t, e) {
                let n = (0, p.x)(t, e),
                    {
                        transitionEnd: i = {},
                        transition: r = {},
                        ...a
                    } = n ? t.makeTargetAnimatable(n, !1) : {};
                for (let e in a = { ...a,
                        ...i
                    }) {
                    let n = (0, s.Y)(a[e]);
                    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, (0, o.BX)(n))
                }
            }

            function v(t, e, n) {
                var s, u;
                let h = Object.keys(e).filter(e => !t.hasValue(e)),
                    c = h.length;
                if (c)
                    for (let d = 0; d < c; d++) {
                        let c = h[d],
                            p = e[c],
                            m = null;
                        Array.isArray(p) && (m = p[0]), null === m && (m = null !== (u = null !== (s = n[c]) && void 0 !== s ? s : t.readValue(c)) && void 0 !== u ? u : e[c]), null != m && ("string" == typeof m && ((0, i.P)(m) || (0, r.W)(m)) ? m = parseFloat(m) : !f(m) && a.P.test(p) && (m = (0, l.T)(c, p)), t.addValue(c, (0, o.BX)(m, {
                            owner: t
                        })), void 0 === n[c] && (n[c] = m), null !== m && t.setBaseTarget(c, m))
                    }
            }

            function g(t, e, n) {
                let i = {};
                for (let r in t) {
                    let t = function(t, e) {
                        if (e) return (e[t] || e.default || e).from
                    }(r, e);
                    if (void 0 !== t) i[r] = t;
                    else {
                        let t = n.getValue(r);
                        t && (i[r] = t.get())
                    }
                }
                return i
            }
        },
        75247: function(t, e, n) {
            n.d(e, {
                V: function() {
                    return r
                },
                e: function() {
                    return i
                }
            });
            let i = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                r = ["initial", ...i]
        },
        77081: function(t, e, n) {
            function i(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function r(t, e) {
                let n = t.indexOf(e);
                n > -1 && t.splice(n, 1)
            }
            n.d(e, {
                cl: function() {
                    return r
                },
                y4: function() {
                    return i
                }
            })
        },
        43021: function(t, e, n) {
            n.d(e, {
                u: function() {
                    return i
                }
            });
            let i = (t, e, n) => Math.min(Math.max(n, t), e)
        },
        46567: function(t, e, n) {
            n.d(e, {
                K: function() {
                    return r
                },
                k: function() {
                    return s
                }
            });
            var i = n(26977);
            let r = i.Z,
                s = i.Z
        },
        3245: function(t, e, n) {
            n.d(e, {
                s: function() {
                    return C
                }
            });
            var i = n(46567),
                r = n(2199),
                s = n(43021),
                o = n(40007);

            function a(t, e, n) {
                return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? t + (e - t) * 6 * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
            }
            var l = n(93257),
                u = n(72808),
                h = n(26002);
            let c = (t, e, n) => {
                    let i = t * t;
                    return Math.sqrt(Math.max(0, n * (e * e - i) + i))
                },
                d = [l.$, u.m, h.J],
                f = t => d.find(e => e.test(t));

            function p(t) {
                let e = f(t);
                (0, i.k)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
                let n = e.parse(t);
                return e === h.J && (n = function({
                    hue: t,
                    saturation: e,
                    lightness: n,
                    alpha: i
                }) {
                    t /= 360, n /= 100;
                    let r = 0,
                        s = 0,
                        o = 0;
                    if (e /= 100) {
                        let i = n < .5 ? n * (1 + e) : n + e - n * e,
                            l = 2 * n - i;
                        r = a(l, i, t + 1 / 3), s = a(l, i, t), o = a(l, i, t - 1 / 3)
                    } else r = s = o = n;
                    return {
                        red: Math.round(255 * r),
                        green: Math.round(255 * s),
                        blue: Math.round(255 * o),
                        alpha: i
                    }
                }(n)), n
            }
            let m = (t, e) => {
                let n = p(t),
                    i = p(e),
                    r = { ...n
                    };
                return t => (r.red = c(n.red, i.red, t), r.green = c(n.green, i.green, t), r.blue = c(n.blue, i.blue, t), r.alpha = (0, o.C)(n.alpha, i.alpha, t), u.m.transform(r))
            };
            var v = n(44694),
                g = n(89155);
            let y = (t, e) => n => `${n>0?e:t}`;

            function x(t, e) {
                return "number" == typeof t ? n => (0, o.C)(t, e, n) : r.$.test(t) ? m(t, e) : t.startsWith("var(") ? y(t, e) : w(t, e)
            }
            let P = (t, e) => {
                    let n = [...t],
                        i = n.length,
                        r = t.map((t, n) => x(t, e[n]));
                    return t => {
                        for (let e = 0; e < i; e++) n[e] = r[e](t);
                        return n
                    }
                },
                b = (t, e) => {
                    let n = { ...t,
                            ...e
                        },
                        i = {};
                    for (let r in n) void 0 !== t[r] && void 0 !== e[r] && (i[r] = x(t[r], e[r]));
                    return t => {
                        for (let e in i) n[e] = i[e](t);
                        return n
                    }
                },
                w = (t, e) => {
                    let n = g.P.createTransformer(e),
                        r = (0, g.V)(t),
                        s = (0, g.V)(e);
                    return r.numVars === s.numVars && r.numColors === s.numColors && r.numNumbers >= s.numNumbers ? (0, v.z)(P(r.values, s.values), n) : ((0, i.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), y(t, e))
                };
            var A = n(42868),
                T = n(26977);
            let S = (t, e) => n => (0, o.C)(t, e, n);

            function C(t, e, {
                clamp: n = !0,
                ease: o,
                mixer: a
            } = {}) {
                let l = t.length;
                if ((0, i.k)(l === e.length, "Both input and output ranges must be the same length"), 1 === l) return () => e[0];
                t[0] > t[l - 1] && (t = [...t].reverse(), e = [...e].reverse());
                let u = function(t, e, n) {
                        let i = [],
                            s = n || function(t) {
                                if ("number" == typeof t);
                                else if ("string" == typeof t) return r.$.test(t) ? m : w;
                                else if (Array.isArray(t)) return P;
                                else if ("object" == typeof t) return b;
                                return S
                            }(t[0]),
                            o = t.length - 1;
                        for (let n = 0; n < o; n++) {
                            let r = s(t[n], t[n + 1]);
                            if (e) {
                                let t = Array.isArray(e) ? e[n] || T.Z : e;
                                r = (0, v.z)(t, r)
                            }
                            i.push(r)
                        }
                        return i
                    }(e, o, a),
                    h = u.length,
                    c = e => {
                        let n = 0;
                        if (h > 1)
                            for (; n < t.length - 2 && !(e < t[n + 1]); n++);
                        let i = (0, A.Y)(t[n], t[n + 1], e);
                        return u[n](i)
                    };
                return n ? e => c((0, s.u)(t[0], t[l - 1], e)) : c
            }
        },
        16613: function(t, e, n) {
            n.d(e, {
                j: function() {
                    return i
                }
            });
            let i = "undefined" != typeof document
        },
        44747: function(t, e, n) {
            n.d(e, {
                P: function() {
                    return i
                }
            });
            let i = t => /^\-?\d*\.?\d+$/.test(t)
        },
        95503: function(t, e, n) {
            n.d(e, {
                I: function() {
                    return i
                }
            });

            function i(t) {
                return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }
        },
        85243: function(t, e, n) {
            n.d(e, {
                W: function() {
                    return i
                }
            });
            let i = t => /^0[^.\s]+$/.test(t)
        },
        99648: function(t, e, n) {
            n.d(e, {
                X: function() {
                    return i
                }
            });

            function i(t) {
                let e;
                return () => (void 0 === e && (e = t()), e)
            }
        },
        40007: function(t, e, n) {
            n.d(e, {
                C: function() {
                    return i
                }
            });
            let i = (t, e, n) => -n * t + n * e + t
        },
        26977: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return i
                }
            });
            let i = t => t
        },
        79448: function(t, e, n) {
            n.d(e, {
                Y: function() {
                    return r
                }
            });
            var i = n(84233);

            function r(t) {
                let e = [0];
                return (0, i.c)(e, t.length - 1), e
            }
        },
        84233: function(t, e, n) {
            n.d(e, {
                c: function() {
                    return s
                }
            });
            var i = n(40007),
                r = n(42868);

            function s(t, e) {
                let n = t[t.length - 1];
                for (let s = 1; s <= e; s++) {
                    let o = (0, r.Y)(0, e, s);
                    t.push((0, i.C)(n, 1, o))
                }
            }
        },
        44694: function(t, e, n) {
            n.d(e, {
                z: function() {
                    return r
                }
            });
            let i = (t, e) => n => e(t(n)),
                r = (...t) => t.reduce(i)
        },
        42868: function(t, e, n) {
            n.d(e, {
                Y: function() {
                    return i
                }
            });
            let i = (t, e, n) => {
                let i = e - t;
                return 0 === i ? 1 : (n - t) / i
            }
        },
        61832: function(t, e, n) {
            n.d(e, {
                Y: function() {
                    return s
                },
                p: function() {
                    return r
                }
            });
            var i = n(10363);
            let r = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                s = t => (0, i.C)(t) ? t[t.length - 1] || 0 : t
        },
        27026: function(t, e, n) {
            n.d(e, {
                L: function() {
                    return r
                }
            });
            var i = n(77081);
            class r {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return (0, i.y4)(this.subscriptions, t), () => (0, i.cl)(this.subscriptions, t)
                }
                notify(t, e, n) {
                    let i = this.subscriptions.length;
                    if (i) {
                        if (1 === i) this.subscriptions[0](t, e, n);
                        else
                            for (let r = 0; r < i; r++) {
                                let i = this.subscriptions[r];
                                i && i(t, e, n)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
        },
        81356: function(t, e, n) {
            n.d(e, {
                X: function() {
                    return r
                },
                w: function() {
                    return i
                }
            });
            let i = t => 1e3 * t,
                r = t => t / 1e3
        },
        10961: function(t, e, n) {
            n.d(e, {
                h: function() {
                    return r
                }
            });
            var i = n(2265);

            function r(t) {
                let e = (0, i.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        538: function(t, e, n) {
            n.d(e, {
                L: function() {
                    return r
                }
            });
            var i = n(2265);
            let r = n(16613).j ? i.useLayoutEffect : i.useEffect
        },
        69815: function(t, e, n) {
            n.d(e, {
                R: function() {
                    return i
                }
            });

            function i(t, e) {
                return e ? 1e3 / e * t : 0
            }
        },
        74101: function(t, e, n) {
            n.d(e, {
                BX: function() {
                    return u
                },
                S1: function() {
                    return a
                }
            });
            var i = n(27026),
                r = n(69815),
                s = n(72363);
            let o = t => !isNaN(parseFloat(t)),
                a = {
                    current: void 0
                };
            class l {
                constructor(t, e = {}) {
                    this.version = "10.16.5", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        this.prev = this.current, this.current = t;
                        let {
                            delta: n,
                            timestamp: i
                        } = s.frameData;
                        this.lastUpdated !== i && (this.timeDelta = n, this.lastUpdated = i, s.Wi.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.scheduleVelocityCheck = () => s.Wi.postRender(this.velocityCheck), this.velocityCheck = ({
                        timestamp: t
                    }) => {
                        t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = o(this.current), this.owner = e.owner
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new i.L);
                    let n = this.events[t].add(e);
                    return "change" === t ? () => {
                        n(), s.Wi.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : n
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, n) {
                    this.set(e), this.prev = t, this.timeDelta = n
                }
                jump(t) {
                    this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return a.current && a.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    return this.canTrackVelocity ? (0, r.R)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function u(t, e) {
                return new l(t, e)
            }
        },
        93257: function(t, e, n) {
            n.d(e, {
                $: function() {
                    return r
                }
            });
            var i = n(72808);
            let r = {
                test: (0, n(50686).i)("#"),
                parse: function(t) {
                    let e = "",
                        n = "",
                        i = "",
                        r = "";
                    return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), r = t.substring(4, 5), e += e, n += n, i += i, r += r), {
                        red: parseInt(e, 16),
                        green: parseInt(n, 16),
                        blue: parseInt(i, 16),
                        alpha: r ? parseInt(r, 16) / 255 : 1
                    }
                },
                transform: i.m.transform
            }
        },
        26002: function(t, e, n) {
            n.d(e, {
                J: function() {
                    return a
                }
            });
            var i = n(2980),
                r = n(43681),
                s = n(2038),
                o = n(50686);
            let a = {
                test: (0, o.i)("hsl", "hue"),
                parse: (0, o.d)("hue", "saturation", "lightness"),
                transform: ({
                    hue: t,
                    saturation: e,
                    lightness: n,
                    alpha: o = 1
                }) => "hsla(" + Math.round(t) + ", " + r.aQ.transform((0, s.Nw)(e)) + ", " + r.aQ.transform((0, s.Nw)(n)) + ", " + (0, s.Nw)(i.Fq.transform(o)) + ")"
            }
        },
        2199: function(t, e, n) {
            n.d(e, {
                $: function() {
                    return a
                }
            });
            var i = n(2038),
                r = n(93257),
                s = n(26002),
                o = n(72808);
            let a = {
                test: t => o.m.test(t) || r.$.test(t) || s.J.test(t),
                parse: t => o.m.test(t) ? o.m.parse(t) : s.J.test(t) ? s.J.parse(t) : r.$.parse(t),
                transform: t => (0, i.HD)(t) ? t : t.hasOwnProperty("red") ? o.m.transform(t) : s.J.transform(t)
            }
        },
        72808: function(t, e, n) {
            n.d(e, {
                m: function() {
                    return u
                }
            });
            var i = n(43021),
                r = n(2980),
                s = n(2038),
                o = n(50686);
            let a = t => (0, i.u)(0, 255, t),
                l = { ...r.Rx,
                    transform: t => Math.round(a(t))
                },
                u = {
                    test: (0, o.i)("rgb", "red"),
                    parse: (0, o.d)("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: n,
                        alpha: i = 1
                    }) => "rgba(" + l.transform(t) + ", " + l.transform(e) + ", " + l.transform(n) + ", " + (0, s.Nw)(r.Fq.transform(i)) + ")"
                }
        },
        50686: function(t, e, n) {
            n.d(e, {
                d: function() {
                    return s
                },
                i: function() {
                    return r
                }
            });
            var i = n(2038);
            let r = (t, e) => n => !!((0, i.HD)(n) && i.mj.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
                s = (t, e, n) => r => {
                    if (!(0, i.HD)(r)) return r;
                    let [s, o, a, l] = r.match(i.KP);
                    return {
                        [t]: parseFloat(s),
                        [e]: parseFloat(o),
                        [n]: parseFloat(a),
                        alpha: void 0 !== l ? parseFloat(l) : 1
                    }
                }
        },
        34875: function(t, e, n) {
            n.d(e, {
                h: function() {
                    return l
                }
            });
            var i = n(89155),
                r = n(2038);
            let s = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function o(t) {
                let [e, n] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [i] = n.match(r.KP) || [];
                if (!i) return t;
                let o = n.replace(i, ""),
                    a = s.has(e) ? 1 : 0;
                return i !== n && (a *= 100), e + "(" + a + o + ")"
            }
            let a = /([a-z-]*)\(.*?\)/g,
                l = { ...i.P,
                    getAnimatableNone: t => {
                        let e = t.match(a);
                        return e ? e.map(o).join(" ") : t
                    }
                }
        },
        89155: function(t, e, n) {
            n.d(e, {
                P: function() {
                    return v
                },
                V: function() {
                    return d
                }
            });
            var i = n(80417),
                r = n(26977),
                s = n(2199),
                o = n(2980),
                a = n(2038);
            let l = {
                    regex: i.Xp,
                    countKey: "Vars",
                    token: "${v}",
                    parse: r.Z
                },
                u = {
                    regex: a.dA,
                    countKey: "Colors",
                    token: "${c}",
                    parse: s.$.parse
                },
                h = {
                    regex: a.KP,
                    countKey: "Numbers",
                    token: "${n}",
                    parse: o.Rx.parse
                };

            function c(t, {
                regex: e,
                countKey: n,
                token: i,
                parse: r
            }) {
                let s = t.tokenised.match(e);
                s && (t["num" + n] = s.length, t.tokenised = t.tokenised.replace(e, i), t.values.push(...s.map(r)))
            }

            function d(t) {
                let e = t.toString(),
                    n = {
                        value: e,
                        tokenised: e,
                        values: [],
                        numVars: 0,
                        numColors: 0,
                        numNumbers: 0
                    };
                return n.value.includes("var(--") && c(n, l), c(n, u), c(n, h), n
            }

            function f(t) {
                return d(t).values
            }

            function p(t) {
                let {
                    values: e,
                    numColors: n,
                    numVars: i,
                    tokenised: r
                } = d(t), o = e.length;
                return t => {
                    let e = r;
                    for (let r = 0; r < o; r++) e = r < i ? e.replace(l.token, t[r]) : r < i + n ? e.replace(u.token, s.$.transform(t[r])) : e.replace(h.token, (0, a.Nw)(t[r]));
                    return e
                }
            }
            let m = t => "number" == typeof t ? 0 : t,
                v = {
                    test: function(t) {
                        var e, n;
                        return isNaN(t) && (0, a.HD)(t) && ((null === (e = t.match(a.KP)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (n = t.match(a.dA)) || void 0 === n ? void 0 : n.length) || 0) > 0
                    },
                    parse: f,
                    createTransformer: p,
                    getAnimatableNone: function(t) {
                        let e = f(t);
                        return p(t)(e.map(m))
                    }
                }
        },
        2980: function(t, e, n) {
            n.d(e, {
                Fq: function() {
                    return s
                },
                Rx: function() {
                    return r
                },
                bA: function() {
                    return o
                }
            });
            var i = n(43021);
            let r = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                s = { ...r,
                    transform: t => (0, i.u)(0, 1, t)
                },
                o = { ...r,
                    default: 1
                }
        },
        43681: function(t, e, n) {
            n.d(e, {
                $C: function() {
                    return h
                },
                RW: function() {
                    return s
                },
                aQ: function() {
                    return o
                },
                px: function() {
                    return a
                },
                vh: function() {
                    return l
                },
                vw: function() {
                    return u
                }
            });
            var i = n(2038);
            let r = t => ({
                    test: e => (0, i.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                s = r("deg"),
                o = r("%"),
                a = r("px"),
                l = r("vh"),
                u = r("vw"),
                h = { ...o,
                    parse: t => o.parse(t) / 100,
                    transform: t => o.transform(100 * t)
                }
        },
        2038: function(t, e, n) {
            n.d(e, {
                HD: function() {
                    return a
                },
                KP: function() {
                    return r
                },
                Nw: function() {
                    return i
                },
                dA: function() {
                    return s
                },
                mj: function() {
                    return o
                }
            });
            let i = t => Math.round(1e5 * t) / 1e5,
                r = /(-)?([\d]*\.?[\d])+/g,
                s = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
                o = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

            function a(t) {
                return "string" == typeof t
            }
        },
        63227: function(t, e, n) {
            n.d(e, {
                L: function() {
                    return r
                }
            });
            var i = n(65735);

            function r(t) {
                return !!((0, i.i)(t) && t.add)
            }
        },
        65735: function(t, e, n) {
            n.d(e, {
                i: function() {
                    return i
                }
            });
            let i = t => !!(t && t.getVelocity)
        }
    }
]);