(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [914], {
        76391: function() {
            "undefined" == typeof window || ("SVGPathSeg" in window || (window.SVGPathSeg = function(t, e, n) {
                this.pathSegType = t, this.pathSegTypeAsLetter = e, this._owningPathSegList = n
            }, window.SVGPathSeg.prototype.classname = "SVGPathSeg", window.SVGPathSeg.PATHSEG_UNKNOWN = 0, window.SVGPathSeg.PATHSEG_CLOSEPATH = 1, window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2, window.SVGPathSeg.PATHSEG_MOVETO_REL = 3, window.SVGPathSeg.PATHSEG_LINETO_ABS = 4, window.SVGPathSeg.PATHSEG_LINETO_REL = 5, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9, window.SVGPathSeg.PATHSEG_ARC_ABS = 10, window.SVGPathSeg.PATHSEG_ARC_REL = 11, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19, window.SVGPathSeg.prototype._segmentChanged = function() {
                this._owningPathSegList && this._owningPathSegList.segmentChanged(this)
            }, window.SVGPathSegClosePath = function(t) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", t)
            }, window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegClosePath.prototype.toString = function() {
                return "[object SVGPathSegClosePath]"
            }, window.SVGPathSegClosePath.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter
            }, window.SVGPathSegClosePath.prototype.clone = function() {
                return new window.SVGPathSegClosePath(void 0)
            }, window.SVGPathSegMovetoAbs = function(t, e, n) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", t), this._x = e, this._y = n
            }, window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegMovetoAbs.prototype.toString = function() {
                return "[object SVGPathSegMovetoAbs]"
            }, window.SVGPathSegMovetoAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
            }, window.SVGPathSegMovetoAbs.prototype.clone = function() {
                return new window.SVGPathSegMovetoAbs(void 0, this._x, this._y)
            }, Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegMovetoRel = function(t, e, n) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", t), this._x = e, this._y = n
            }, window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegMovetoRel.prototype.toString = function() {
                return "[object SVGPathSegMovetoRel]"
            }, window.SVGPathSegMovetoRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
            }, window.SVGPathSegMovetoRel.prototype.clone = function() {
                return new window.SVGPathSegMovetoRel(void 0, this._x, this._y)
            }, Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegLinetoAbs = function(t, e, n) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", t), this._x = e, this._y = n
            }, window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoAbs.prototype.toString = function() {
                return "[object SVGPathSegLinetoAbs]"
            }, window.SVGPathSegLinetoAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
            }, window.SVGPathSegLinetoAbs.prototype.clone = function() {
                return new window.SVGPathSegLinetoAbs(void 0, this._x, this._y)
            }, Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegLinetoRel = function(t, e, n) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", t), this._x = e, this._y = n
            }, window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoRel.prototype.toString = function() {
                return "[object SVGPathSegLinetoRel]"
            }, window.SVGPathSegLinetoRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
            }, window.SVGPathSegLinetoRel.prototype.clone = function() {
                return new window.SVGPathSegLinetoRel(void 0, this._x, this._y)
            }, Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegCurvetoCubicAbs = function(t, e, n, i, r, o, h) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", t), this._x = e, this._y = n, this._x1 = i, this._y1 = r, this._x2 = o, this._y2 = h
            }, window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicAbs.prototype.toString = function() {
                return "[object SVGPathSegCurvetoCubicAbs]"
            }, window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
            }, window.SVGPathSegCurvetoCubicAbs.prototype.clone = function() {
                return new window.SVGPathSegCurvetoCubicAbs(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2)
            }, Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", {
                get: function() {
                    return this._x1
                },
                set: function(t) {
                    this._x1 = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", {
                get: function() {
                    return this._y1
                },
                set: function(t) {
                    this._y1 = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", {
                get: function() {
                    return this._x2
                },
                set: function(t) {
                    this._x2 = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", {
                get: function() {
                    return this._y2
                },
                set: function(t) {
                    this._y2 = t, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegCurvetoCubicRel = function(t, e, n, i, r, o, h) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", t), this._x = e, this._y = n, this._x1 = i, this._y1 = r, this._x2 = o, this._y2 = h
            }, window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicRel.prototype.toString = function() {
                return "[object SVGPathSegCurvetoCubicRel]"
            }, window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
            }, window.SVGPathSegCurvetoCubicRel.prototype.clone = function() {
                return new window.SVGPathSegCurvetoCubicRel(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2)
            }, Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", {
                get: function() {
                    return this._x1
                },
                set: function(t) {
                    this._x1 = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", {
                get: function() {
                    return this._y1
                },
                set: function(t) {
                    this._y1 = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", {
                get: function() {
                    return this._x2
                },
                set: function(t) {
                    this._x2 = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", {
                get: function() {
                    return this._y2
                },
                set: function(t) {
                    this._y2 = t, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegCurvetoQuadraticAbs = function(t, e, n, i, r) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", t), this._x = e, this._y = n, this._x1 = i, this._y1 = r
            }, window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function() {
                return "[object SVGPathSegCurvetoQuadraticAbs]"
            }, window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y
            }, window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function() {
                return new window.SVGPathSegCurvetoQuadraticAbs(void 0, this._x, this._y, this._x1, this._y1)
            }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", {
                get: function() {
                    return this._x1
                },
                set: function(t) {
                    this._x1 = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", {
                get: function() {
                    return this._y1
                },
                set: function(t) {
                    this._y1 = t, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegCurvetoQuadraticRel = function(t, e, n, i, r) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", t), this._x = e, this._y = n, this._x1 = i, this._y1 = r
            }, window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function() {
                return "[object SVGPathSegCurvetoQuadraticRel]"
            }, window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y
            }, window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function() {
                return new window.SVGPathSegCurvetoQuadraticRel(void 0, this._x, this._y, this._x1, this._y1)
            }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", {
                get: function() {
                    return this._x1
                },
                set: function(t) {
                    this._x1 = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", {
                get: function() {
                    return this._y1
                },
                set: function(t) {
                    this._y1 = t, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegArcAbs = function(t, e, n, i, r, o, h, s) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", t), this._x = e, this._y = n, this._r1 = i, this._r2 = r, this._angle = o, this._largeArcFlag = h, this._sweepFlag = s
            }, window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegArcAbs.prototype.toString = function() {
                return "[object SVGPathSegArcAbs]"
            }, window.SVGPathSegArcAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y
            }, window.SVGPathSegArcAbs.prototype.clone = function() {
                return new window.SVGPathSegArcAbs(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag)
            }, Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", {
                get: function() {
                    return this._r1
                },
                set: function(t) {
                    this._r1 = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", {
                get: function() {
                    return this._r2
                },
                set: function(t) {
                    this._r2 = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", {
                get: function() {
                    return this._angle
                },
                set: function(t) {
                    this._angle = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", {
                get: function() {
                    return this._largeArcFlag
                },
                set: function(t) {
                    this._largeArcFlag = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", {
                get: function() {
                    return this._sweepFlag
                },
                set: function(t) {
                    this._sweepFlag = t, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegArcRel = function(t, e, n, i, r, o, h, s) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", t), this._x = e, this._y = n, this._r1 = i, this._r2 = r, this._angle = o, this._largeArcFlag = h, this._sweepFlag = s
            }, window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegArcRel.prototype.toString = function() {
                return "[object SVGPathSegArcRel]"
            }, window.SVGPathSegArcRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y
            }, window.SVGPathSegArcRel.prototype.clone = function() {
                return new window.SVGPathSegArcRel(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag)
            }, Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", {
                get: function() {
                    return this._r1
                },
                set: function(t) {
                    this._r1 = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", {
                get: function() {
                    return this._r2
                },
                set: function(t) {
                    this._r2 = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", {
                get: function() {
                    return this._angle
                },
                set: function(t) {
                    this._angle = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", {
                get: function() {
                    return this._largeArcFlag
                },
                set: function(t) {
                    this._largeArcFlag = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", {
                get: function() {
                    return this._sweepFlag
                },
                set: function(t) {
                    this._sweepFlag = t, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegLinetoHorizontalAbs = function(t, e) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", t), this._x = e
            }, window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function() {
                return "[object SVGPathSegLinetoHorizontalAbs]"
            }, window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x
            }, window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function() {
                return new window.SVGPathSegLinetoHorizontalAbs(void 0, this._x)
            }, Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegLinetoHorizontalRel = function(t, e) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", t), this._x = e
            }, window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoHorizontalRel.prototype.toString = function() {
                return "[object SVGPathSegLinetoHorizontalRel]"
            }, window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x
            }, window.SVGPathSegLinetoHorizontalRel.prototype.clone = function() {
                return new window.SVGPathSegLinetoHorizontalRel(void 0, this._x)
            }, Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegLinetoVerticalAbs = function(t, e) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", t), this._y = e
            }, window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoVerticalAbs.prototype.toString = function() {
                return "[object SVGPathSegLinetoVerticalAbs]"
            }, window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._y
            }, window.SVGPathSegLinetoVerticalAbs.prototype.clone = function() {
                return new window.SVGPathSegLinetoVerticalAbs(void 0, this._y)
            }, Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegLinetoVerticalRel = function(t, e) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", t), this._y = e
            }, window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoVerticalRel.prototype.toString = function() {
                return "[object SVGPathSegLinetoVerticalRel]"
            }, window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._y
            }, window.SVGPathSegLinetoVerticalRel.prototype.clone = function() {
                return new window.SVGPathSegLinetoVerticalRel(void 0, this._y)
            }, Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegCurvetoCubicSmoothAbs = function(t, e, n, i, r) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", t), this._x = e, this._y = n, this._x2 = i, this._y2 = r
            }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function() {
                return "[object SVGPathSegCurvetoCubicSmoothAbs]"
            }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
            }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function() {
                return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, this._x, this._y, this._x2, this._y2)
            }, Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", {
                get: function() {
                    return this._x2
                },
                set: function(t) {
                    this._x2 = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", {
                get: function() {
                    return this._y2
                },
                set: function(t) {
                    this._y2 = t, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegCurvetoCubicSmoothRel = function(t, e, n, i, r) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", t), this._x = e, this._y = n, this._x2 = i, this._y2 = r
            }, window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function() {
                return "[object SVGPathSegCurvetoCubicSmoothRel]"
            }, window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
            }, window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function() {
                return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, this._x, this._y, this._x2, this._y2)
            }, Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", {
                get: function() {
                    return this._x2
                },
                set: function(t) {
                    this._x2 = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", {
                get: function() {
                    return this._y2
                },
                set: function(t) {
                    this._y2 = t, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegCurvetoQuadraticSmoothAbs = function(t, e, n) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", t), this._x = e, this._y = n
            }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function() {
                return "[object SVGPathSegCurvetoQuadraticSmoothAbs]"
            }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
            }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function() {
                return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, this._x, this._y)
            }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegCurvetoQuadraticSmoothRel = function(t, e, n) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", t), this._x = e, this._y = n
            }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function() {
                return "[object SVGPathSegCurvetoQuadraticSmoothRel]"
            }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
            }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function() {
                return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, this._x, this._y)
            }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathElement.prototype.createSVGPathSegClosePath = function() {
                return new window.SVGPathSegClosePath(void 0)
            }, window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function(t, e) {
                return new window.SVGPathSegMovetoAbs(void 0, t, e)
            }, window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function(t, e) {
                return new window.SVGPathSegMovetoRel(void 0, t, e)
            }, window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function(t, e) {
                return new window.SVGPathSegLinetoAbs(void 0, t, e)
            }, window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function(t, e) {
                return new window.SVGPathSegLinetoRel(void 0, t, e)
            }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function(t, e, n, i, r, o) {
                return new window.SVGPathSegCurvetoCubicAbs(void 0, t, e, n, i, r, o)
            }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function(t, e, n, i, r, o) {
                return new window.SVGPathSegCurvetoCubicRel(void 0, t, e, n, i, r, o)
            }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function(t, e, n, i) {
                return new window.SVGPathSegCurvetoQuadraticAbs(void 0, t, e, n, i)
            }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function(t, e, n, i) {
                return new window.SVGPathSegCurvetoQuadraticRel(void 0, t, e, n, i)
            }, window.SVGPathElement.prototype.createSVGPathSegArcAbs = function(t, e, n, i, r, o, h) {
                return new window.SVGPathSegArcAbs(void 0, t, e, n, i, r, o, h)
            }, window.SVGPathElement.prototype.createSVGPathSegArcRel = function(t, e, n, i, r, o, h) {
                return new window.SVGPathSegArcRel(void 0, t, e, n, i, r, o, h)
            }, window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function(t) {
                return new window.SVGPathSegLinetoHorizontalAbs(void 0, t)
            }, window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function(t) {
                return new window.SVGPathSegLinetoHorizontalRel(void 0, t)
            }, window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function(t) {
                return new window.SVGPathSegLinetoVerticalAbs(void 0, t)
            }, window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function(t) {
                return new window.SVGPathSegLinetoVerticalRel(void 0, t)
            }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function(t, e, n, i) {
                return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, t, e, n, i)
            }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function(t, e, n, i) {
                return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, t, e, n, i)
            }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function(t, e) {
                return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, t, e)
            }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function(t, e) {
                return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, t, e)
            }, "getPathSegAtLength" in window.SVGPathElement.prototype || (window.SVGPathElement.prototype.getPathSegAtLength = function(t) {
                if (void 0 === t || !isFinite(t)) throw "Invalid arguments.";
                var e = document.createElementNS("http://www.w3.org/2000/svg", "path");
                e.setAttribute("d", this.getAttribute("d"));
                var n = e.pathSegList.numberOfItems - 1;
                if (n <= 0) return 0;
                do {
                    if (e.pathSegList.removeItem(n), t > e.getTotalLength()) break;
                    n--
                } while (n > 0);
                return n
            })), "SVGPathSegList" in window && "appendItem" in window.SVGPathSegList.prototype || (window.SVGPathSegList = function(t) {
                this._pathElement = t, this._list = this._parsePath(this._pathElement.getAttribute("d")), this._mutationObserverConfig = {
                    attributes: !0,
                    attributeFilter: ["d"]
                }, this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig)
            }, window.SVGPathSegList.prototype.classname = "SVGPathSegList", Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", {
                get: function() {
                    return this._checkPathSynchronizedToList(), this._list.length
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegList.prototype, "length", {
                get: function() {
                    return this._checkPathSynchronizedToList(), this._list.length
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
                get: function() {
                    return this._pathSegList || (this._pathSegList = new window.SVGPathSegList(this)), this._pathSegList
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", {
                get: function() {
                    return this.pathSegList
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", {
                get: function() {
                    return this.pathSegList
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", {
                get: function() {
                    return this.pathSegList
                },
                enumerable: !0
            }), window.SVGPathSegList.prototype._checkPathSynchronizedToList = function() {
                this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords())
            }, window.SVGPathSegList.prototype._updateListFromPathMutations = function(t) {
                if (this._pathElement) {
                    var e = !1;
                    t.forEach(function(t) {
                        "d" == t.attributeName && (e = !0)
                    }), e && (this._list = this._parsePath(this._pathElement.getAttribute("d")))
                }
            }, window.SVGPathSegList.prototype._writeListToPath = function() {
                this._pathElementMutationObserver.disconnect(), this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig)
            }, window.SVGPathSegList.prototype.segmentChanged = function(t) {
                this._writeListToPath()
            }, window.SVGPathSegList.prototype.clear = function() {
                this._checkPathSynchronizedToList(), this._list.forEach(function(t) {
                    t._owningPathSegList = null
                }), this._list = [], this._writeListToPath()
            }, window.SVGPathSegList.prototype.initialize = function(t) {
                return this._checkPathSynchronizedToList(), this._list = [t], t._owningPathSegList = this, this._writeListToPath(), t
            }, window.SVGPathSegList.prototype._checkValidIndex = function(t) {
                if (isNaN(t) || t < 0 || t >= this.numberOfItems) throw "INDEX_SIZE_ERR"
            }, window.SVGPathSegList.prototype.getItem = function(t) {
                return this._checkPathSynchronizedToList(), this._checkValidIndex(t), this._list[t]
            }, window.SVGPathSegList.prototype.insertItemBefore = function(t, e) {
                return this._checkPathSynchronizedToList(), e > this.numberOfItems && (e = this.numberOfItems), t._owningPathSegList && (t = t.clone()), this._list.splice(e, 0, t), t._owningPathSegList = this, this._writeListToPath(), t
            }, window.SVGPathSegList.prototype.replaceItem = function(t, e) {
                return this._checkPathSynchronizedToList(), t._owningPathSegList && (t = t.clone()), this._checkValidIndex(e), this._list[e] = t, t._owningPathSegList = this, this._writeListToPath(), t
            }, window.SVGPathSegList.prototype.removeItem = function(t) {
                this._checkPathSynchronizedToList(), this._checkValidIndex(t);
                var e = this._list[t];
                return this._list.splice(t, 1), this._writeListToPath(), e
            }, window.SVGPathSegList.prototype.appendItem = function(t) {
                return this._checkPathSynchronizedToList(), t._owningPathSegList && (t = t.clone()), this._list.push(t), t._owningPathSegList = this, this._writeListToPath(), t
            }, window.SVGPathSegList._pathSegArrayAsString = function(t) {
                var e = "",
                    n = !0;
                return t.forEach(function(t) {
                    n ? (n = !1, e += t._asPathString()) : e += " " + t._asPathString()
                }), e
            }, window.SVGPathSegList.prototype._parsePath = function(t) {
                if (!t || 0 == t.length) return [];
                var e = this,
                    n = function() {
                        this.pathSegList = []
                    };
                n.prototype.appendSegment = function(t) {
                    this.pathSegList.push(t)
                };
                var i = function(t) {
                    this._string = t, this._currentIndex = 0, this._endIndex = this._string.length, this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN, this._skipOptionalSpaces()
                };
                i.prototype._isCurrentSpace = function() {
                    var t = this._string[this._currentIndex];
                    return t <= " " && (" " == t || "\n" == t || "	" == t || "\r" == t || "\f" == t)
                }, i.prototype._skipOptionalSpaces = function() {
                    for (; this._currentIndex < this._endIndex && this._isCurrentSpace();) this._currentIndex++;
                    return this._currentIndex < this._endIndex
                }, i.prototype._skipOptionalSpacesOrDelimiter = function() {
                    return (!(this._currentIndex < this._endIndex) || !!this._isCurrentSpace() || "," == this._string.charAt(this._currentIndex)) && (this._skipOptionalSpaces() && this._currentIndex < this._endIndex && "," == this._string.charAt(this._currentIndex) && (this._currentIndex++, this._skipOptionalSpaces()), this._currentIndex < this._endIndex)
                }, i.prototype.hasMoreData = function() {
                    return this._currentIndex < this._endIndex
                }, i.prototype.peekSegmentType = function() {
                    var t = this._string[this._currentIndex];
                    return this._pathSegTypeFromChar(t)
                }, i.prototype._pathSegTypeFromChar = function(t) {
                    switch (t) {
                        case "Z":
                        case "z":
                            return window.SVGPathSeg.PATHSEG_CLOSEPATH;
                        case "M":
                            return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
                        case "m":
                            return window.SVGPathSeg.PATHSEG_MOVETO_REL;
                        case "L":
                            return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                        case "l":
                            return window.SVGPathSeg.PATHSEG_LINETO_REL;
                        case "C":
                            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                        case "c":
                            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                        case "Q":
                            return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                        case "q":
                            return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                        case "A":
                            return window.SVGPathSeg.PATHSEG_ARC_ABS;
                        case "a":
                            return window.SVGPathSeg.PATHSEG_ARC_REL;
                        case "H":
                            return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                        case "h":
                            return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                        case "V":
                            return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                        case "v":
                            return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                        case "S":
                            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                        case "s":
                            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                        case "T":
                            return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                        case "t":
                            return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                        default:
                            return window.SVGPathSeg.PATHSEG_UNKNOWN
                    }
                }, i.prototype._nextCommandHelper = function(t, e) {
                    return ("+" == t || "-" == t || "." == t || t >= "0" && t <= "9") && e != window.SVGPathSeg.PATHSEG_CLOSEPATH ? e == window.SVGPathSeg.PATHSEG_MOVETO_ABS ? window.SVGPathSeg.PATHSEG_LINETO_ABS : e == window.SVGPathSeg.PATHSEG_MOVETO_REL ? window.SVGPathSeg.PATHSEG_LINETO_REL : e : window.SVGPathSeg.PATHSEG_UNKNOWN
                }, i.prototype.initialCommandIsMoveTo = function() {
                    if (!this.hasMoreData()) return !0;
                    var t = this.peekSegmentType();
                    return t == window.SVGPathSeg.PATHSEG_MOVETO_ABS || t == window.SVGPathSeg.PATHSEG_MOVETO_REL
                }, i.prototype._parseNumber = function() {
                    var t = 0,
                        e = 0,
                        n = 1,
                        i = 0,
                        r = 1,
                        o = 1,
                        h = this._currentIndex;
                    if (this._skipOptionalSpaces(), this._currentIndex < this._endIndex && "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : this._currentIndex < this._endIndex && "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, r = -1), !(this._currentIndex == this._endIndex || ("0" > this._string.charAt(this._currentIndex) || this._string.charAt(this._currentIndex) > "9") && "." != this._string.charAt(this._currentIndex))) {
                        for (var s = this._currentIndex; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && "9" >= this._string.charAt(this._currentIndex);) this._currentIndex++;
                        if (this._currentIndex != s)
                            for (var a = this._currentIndex - 1, S = 1; a >= s;) e += S * (this._string.charAt(a--) - "0"), S *= 10;
                        if (this._currentIndex < this._endIndex && "." == this._string.charAt(this._currentIndex)) {
                            if (this._currentIndex++, this._currentIndex >= this._endIndex || "0" > this._string.charAt(this._currentIndex) || this._string.charAt(this._currentIndex) > "9") return;
                            for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && "9" >= this._string.charAt(this._currentIndex);) n *= 10, i += (this._string.charAt(this._currentIndex) - "0") / n, this._currentIndex += 1
                        }
                        if (this._currentIndex != h && this._currentIndex + 1 < this._endIndex && ("e" == this._string.charAt(this._currentIndex) || "E" == this._string.charAt(this._currentIndex)) && "x" != this._string.charAt(this._currentIndex + 1) && "m" != this._string.charAt(this._currentIndex + 1)) {
                            if (this._currentIndex++, "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, o = -1), this._currentIndex >= this._endIndex || "0" > this._string.charAt(this._currentIndex) || this._string.charAt(this._currentIndex) > "9") return;
                            for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && "9" >= this._string.charAt(this._currentIndex);) t *= 10, t += this._string.charAt(this._currentIndex) - "0", this._currentIndex++
                        }
                        var u = e + i;
                        if (u *= r, t && (u *= Math.pow(10, o * t)), h != this._currentIndex) return this._skipOptionalSpacesOrDelimiter(), u
                    }
                }, i.prototype._parseArcFlag = function() {
                    if (!(this._currentIndex >= this._endIndex)) {
                        var t = !1,
                            e = this._string.charAt(this._currentIndex++);
                        if ("0" == e) t = !1;
                        else {
                            if ("1" != e) return;
                            t = !0
                        }
                        return this._skipOptionalSpacesOrDelimiter(), t
                    }
                }, i.prototype.parseSegment = function() {
                    var t = this._string[this._currentIndex],
                        n = this._pathSegTypeFromChar(t);
                    if (n == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                        if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN || (n = this._nextCommandHelper(t, this._previousCommand)) == window.SVGPathSeg.PATHSEG_UNKNOWN) return null
                    } else this._currentIndex++;
                    switch (this._previousCommand = n, n) {
                        case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                            return new window.SVGPathSegMovetoRel(e, this._parseNumber(), this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                            return new window.SVGPathSegMovetoAbs(e, this._parseNumber(), this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_LINETO_REL:
                            return new window.SVGPathSegLinetoRel(e, this._parseNumber(), this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                            return new window.SVGPathSegLinetoAbs(e, this._parseNumber(), this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                            return new window.SVGPathSegLinetoHorizontalRel(e, this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                            return new window.SVGPathSegLinetoHorizontalAbs(e, this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                            return new window.SVGPathSegLinetoVerticalRel(e, this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                            return new window.SVGPathSegLinetoVerticalAbs(e, this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                            return this._skipOptionalSpaces(), new window.SVGPathSegClosePath(e);
                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                            var i = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                x2: this._parseNumber(),
                                y2: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegCurvetoCubicRel(e, i.x, i.y, i.x1, i.y1, i.x2, i.y2);
                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                            var i = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                x2: this._parseNumber(),
                                y2: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegCurvetoCubicAbs(e, i.x, i.y, i.x1, i.y1, i.x2, i.y2);
                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                            var i = {
                                x2: this._parseNumber(),
                                y2: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegCurvetoCubicSmoothRel(e, i.x, i.y, i.x2, i.y2);
                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                            var i = {
                                x2: this._parseNumber(),
                                y2: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegCurvetoCubicSmoothAbs(e, i.x, i.y, i.x2, i.y2);
                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                            var i = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegCurvetoQuadraticRel(e, i.x, i.y, i.x1, i.y1);
                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                            var i = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegCurvetoQuadraticAbs(e, i.x, i.y, i.x1, i.y1);
                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                            return new window.SVGPathSegCurvetoQuadraticSmoothRel(e, this._parseNumber(), this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                            return new window.SVGPathSegCurvetoQuadraticSmoothAbs(e, this._parseNumber(), this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_ARC_REL:
                            var i = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                arcAngle: this._parseNumber(),
                                arcLarge: this._parseArcFlag(),
                                arcSweep: this._parseArcFlag(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegArcRel(e, i.x, i.y, i.x1, i.y1, i.arcAngle, i.arcLarge, i.arcSweep);
                        case window.SVGPathSeg.PATHSEG_ARC_ABS:
                            var i = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                arcAngle: this._parseNumber(),
                                arcLarge: this._parseArcFlag(),
                                arcSweep: this._parseArcFlag(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegArcAbs(e, i.x, i.y, i.x1, i.y1, i.arcAngle, i.arcLarge, i.arcSweep);
                        default:
                            throw "Unknown path seg type."
                    }
                };
                var r = new n,
                    o = new i(t);
                if (!o.initialCommandIsMoveTo()) return [];
                for (; o.hasMoreData();) {
                    var h = o.parseSegment();
                    if (!h) return [];
                    r.appendSegment(h)
                }
                return r.pathSegList
            }))
        },
        59503: function(t) {
            function e(t, e, n, i) {
                var r = e[0] - t[0],
                    o = e[1] - t[1],
                    h = i[0] - n[0],
                    s = i[1] - n[1];
                if (h * o - s * r == 0) return !1;
                var a = (r * (n[1] - t[1]) + o * (t[0] - n[0])) / (h * o - s * r),
                    S = (h * (t[1] - n[1]) + s * (n[0] - t[0])) / (s * r - h * o);
                return a >= 0 && a <= 1 && S >= 0 && S <= 1
            }

            function n(t, e, n) {
                return (e[0] - t[0]) * (n[1] - t[1]) - (n[0] - t[0]) * (e[1] - t[1])
            }

            function i(t, e, i) {
                return 0 >= n(t, e, i)
            }
            t.exports = {
                decomp: function(t) {
                    var e = function t(e) {
                        for (var r = [], o = [], a = [], c = [], d = Number.MAX_VALUE, p = 0; p < e.length; ++p)
                            if (S(e, p)) {
                                for (var P = 0; P < e.length; ++P)
                                    if (function(t, e, r) {
                                            if (n(s(t, e + 1), s(t, e), s(t, r)) >= 0 && i(s(t, e - 1), s(t, e), s(t, r))) return !1;
                                            a = h(s(t, e), s(t, r));
                                            for (var o, a, S = 0; S !== t.length; ++S)
                                                if ((S + 1) % t.length !== e && S !== e && n(s(t, e), s(t, r), s(t, S + 1)) >= 0 && i(s(t, e), s(t, r), s(t, S)) && ([][0] = s(t, e), [][1] = s(t, r), [][0] = s(t, S), [][1] = s(t, S + 1), o = function(t, e, n) {
                                                        n = n || 0;
                                                        var i, r, o, h, s, a, S, u = [0, 0];
                                                        return i = t[1][1] - t[0][1], r = t[0][0] - t[1][0], o = i * t[0][0] + r * t[0][1], h = e[1][1] - e[0][1], s = e[0][0] - e[1][0], a = h * e[0][0] + s * e[0][1], g(S = i * s - h * r, 0, n) || (u[0] = (s * o - r * a) / S, u[1] = (i * a - h * o) / S), u
                                                    }(u, w), h(s(t, e), o) < a)) return !1;
                                            return !0
                                        }(e, p, P)) {
                                        o = t(_(e, p, P, c)), a = t(_(e, P, p, c));
                                        for (var G = 0; G < a.length; G++) o.push(a[G]);
                                        o.length < d && (r = o, d = o.length, r.push([s(e, p), s(e, P)]))
                                    }
                            }
                        return r
                    }(t);
                    return e.length > 0 ? function t(e, n) {
                        if (0 === n.length) return [e];
                        if (n instanceof Array && n.length && n[0] instanceof Array && 2 === n[0].length && n[0][0] instanceof Array) {
                            for (var i = [e], r = 0; r < n.length; r++)
                                for (var o = n[r], h = 0; h < i.length; h++) {
                                    var s = t(i[h], o);
                                    if (s) {
                                        i.splice(h, 1), i.push(s[0], s[1]);
                                        break
                                    }
                                }
                            return i
                        }
                        var o = n,
                            r = e.indexOf(o[0]),
                            h = e.indexOf(o[1]);
                        return -1 !== r && -1 !== h && [_(e, r, h), _(e, h, r)]
                    }(t, e) : [t]
                },
                quickDecomp: function t(r, o, u, w, _, g, d) {
                    g = g || 100, d = d || 0, _ = _ || 25, o = void 0 !== o ? o : [], u = u || [], w = w || [];
                    var p = [0, 0],
                        P = [0, 0],
                        G = [0, 0],
                        V = 0,
                        l = 0,
                        y = 0,
                        A = 0,
                        b = 0,
                        f = 0,
                        C = 0,
                        m = [],
                        x = [];
                    if (r.length < 3) return o;
                    if (++d > g) return console.warn("quickDecomp: max level (" + g + ") reached."), o;
                    for (var v = 0; v < r.length; ++v)
                        if (S(r, v)) {
                            u.push(r[v]), V = l = Number.MAX_VALUE;
                            for (var E = 0; E < r.length; ++E) n(s(r, v - 1), s(r, v), s(r, E)) > 0 && i(s(r, v - 1), s(r, v), s(r, E - 1)) && (G = c(s(r, v - 1), s(r, v), s(r, E), s(r, E - 1)), 0 > n(s(r, v + 1), s(r, v), G) && (y = h(r[v], G)) < l && (l = y, P = G, f = E)), n(s(r, v + 1), s(r, v), s(r, E + 1)) > 0 && i(s(r, v + 1), s(r, v), s(r, E)) && (G = c(s(r, v + 1), s(r, v), s(r, E), s(r, E + 1)), n(s(r, v - 1), s(r, v), G) > 0 && (y = h(r[v], G)) < V && (V = y, p = G, b = E));
                            if (f === (b + 1) % r.length) G[0] = (P[0] + p[0]) / 2, G[1] = (P[1] + p[1]) / 2, w.push(G), v < b ? (a(m, r, v, b + 1), m.push(G), x.push(G), 0 !== f && a(x, r, f, r.length), a(x, r, 0, v + 1)) : (0 !== v && a(m, r, v, r.length), a(m, r, 0, b + 1), m.push(G), x.push(G), a(x, r, f, v + 1));
                            else {
                                if (f > b && (b += r.length), A = Number.MAX_VALUE, b < f) return o;
                                for (var E = f; E <= b; ++E) n(s(r, v - 1), s(r, v), s(r, E)) >= 0 && i(s(r, v + 1), s(r, v), s(r, E)) && (y = h(s(r, v), s(r, E))) < A && function(t, n, i) {
                                    for (var r = 0; r !== t.length; ++r)
                                        if (r !== n && r !== i && (r + 1) % t.length !== n && (r + 1) % t.length !== i && e(s(t, n), s(t, i), s(t, r), s(t, r + 1))) return !1;
                                    return !0
                                }(r, v, E) && (A = y, C = E % r.length);
                                v < C ? (a(m, r, v, C + 1), 0 !== C && a(x, r, C, r.length), a(x, r, 0, v + 1)) : (0 !== v && a(m, r, v, r.length), a(m, r, 0, C + 1), a(x, r, C, v + 1))
                            }
                            return m.length < x.length ? (t(m, o, u, w, _, g, d), t(x, o, u, w, _, g, d)) : (t(x, o, u, w, _, g, d), t(m, o, u, w, _, g, d)), o
                        }
                    return o.push(r), o
                },
                isSimple: function(t) {
                    var n;
                    for (n = 0; n < t.length - 1; n++)
                        for (var i = 0; i < n - 1; i++)
                            if (e(t[n], t[n + 1], t[i], t[i + 1])) return !1;
                    for (n = 1; n < t.length - 2; n++)
                        if (e(t[0], t[t.length - 1], t[n], t[n + 1])) return !1;
                    return !0
                },
                removeCollinearPoints: function(t, e) {
                    for (var i, h, a, S = 0, u = t.length - 1; t.length > 3 && u >= 0; --u) i = s(t, u - 1), h = s(t, u), a = s(t, u + 1), (e ? (r[0] = h[0] - i[0], r[1] = h[1] - i[1], o[0] = a[0] - h[0], o[1] = a[1] - h[1], Math.acos((r[0] * o[0] + r[1] * o[1]) / (Math.sqrt(r[0] * r[0] + r[1] * r[1]) * Math.sqrt(o[0] * o[0] + o[1] * o[1]))) < e) : 0 === n(i, h, a)) && (t.splice(u % t.length, 1), S++);
                    return S
                },
                removeDuplicatePoints: function(t, e) {
                    for (var n, i = t.length - 1; i >= 1; --i)
                        for (var r = t[i], o = i - 1; o >= 0; --o)
                            if (n = t[o], g(r[0], n[0], e) && g(r[1], n[1], e)) {
                                t.splice(i, 1);
                                continue
                            }
                },
                makeCCW: function(t) {
                    for (var e = 0, i = 1; i < t.length; ++i)(t[i][1] < t[e][1] || t[i][1] === t[e][1] && t[i][0] > t[e][0]) && (e = i);
                    return !(n(s(t, e - 1), s(t, e), s(t, e + 1)) > 0) && (function(t) {
                        for (var e = [], n = t.length, i = 0; i !== n; i++) e.push(t.pop());
                        for (var i = 0; i !== n; i++) t[i] = e[i]
                    }(t), !0)
                }
            };
            var r = [],
                o = [];

            function h(t, e) {
                var n = e[0] - t[0],
                    i = e[1] - t[1];
                return n * n + i * i
            }

            function s(t, e) {
                var n = t.length;
                return t[e < 0 ? e % n + n : e % n]
            }

            function a(t, e, n, i) {
                for (var r = n; r < i; r++) t.push(e[r])
            }

            function S(t, e) {
                return 0 > n(s(t, e - 1), s(t, e), s(t, e + 1))
            }
            var u = [],
                w = [];

            function _(t, e, n, i) {
                var r = i || [];
                if (r.length = 0, e < n)
                    for (var o = e; o <= n; o++) r.push(t[o]);
                else {
                    for (var o = 0; o <= n; o++) r.push(t[o]);
                    for (var o = e; o < t.length; o++) r.push(t[o])
                }
                return r
            }

            function c(t, e, n, i, r) {
                r = r || 0;
                var o = e[1] - t[1],
                    h = t[0] - e[0],
                    s = o * t[0] + h * t[1],
                    a = i[1] - n[1],
                    S = n[0] - i[0],
                    u = a * n[0] + S * n[1],
                    w = o * S - a * h;
                return g(w, 0, r) ? [0, 0] : [(S * s - h * u) / w, (o * u - a * s) / w]
            }

            function g(t, e, n) {
                return Math.abs(t - e) <= (n = n || 0)
            }
        }
    }
]);