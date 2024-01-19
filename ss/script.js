/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var tb = Object.create;
  var cn = Object.defineProperty;
  var rb = Object.getOwnPropertyDescriptor;
  var nb = Object.getOwnPropertyNames;
  var ib = Object.getPrototypeOf,
    ob = Object.prototype.hasOwnProperty;
  var me = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    ke = (e, t) => {
      for (var r in t) cn(e, r, { get: t[r], enumerable: !0 });
    },
    Ns = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of nb(t))
          !ob.call(e, i) &&
            i !== r &&
            cn(e, i, {
              get: () => t[i],
              enumerable: !(n = rb(t, i)) || n.enumerable,
            });
      return e;
    };
  var fe = (e, t, r) => (
    (r = e != null ? tb(ib(e)) : {}),
    Ns(
      t || !e || !e.__esModule
        ? cn(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
    nt = (e) => Ns(cn({}, "__esModule", { value: !0 }), e);
  var Mi = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(f, w) {
        var R = new T.Bare();
        return R.init(f, w);
      }
      function r(f) {
        return f.replace(/[A-Z]/g, function (w) {
          return "-" + w.toLowerCase();
        });
      }
      function n(f) {
        var w = parseInt(f.slice(1), 16),
          R = (w >> 16) & 255,
          D = (w >> 8) & 255,
          A = 255 & w;
        return [R, D, A];
      }
      function i(f, w, R) {
        return (
          "#" + ((1 << 24) | (f << 16) | (w << 8) | R).toString(16).slice(1)
        );
      }
      function o() { }
      function a(f, w) {
        d("Type warning: Expected: [" + f + "] Got: [" + typeof w + "] " + w);
      }
      function s(f, w, R) {
        d("Units do not match [" + f + "]: " + w + ", " + R);
      }
      function u(f, w, R) {
        if ((w !== void 0 && (R = w), f === void 0)) return R;
        var D = R;
        return (
          De.test(f) || !Xe.test(f)
            ? (D = parseInt(f, 10))
            : Xe.test(f) && (D = 1e3 * parseFloat(f)),
          0 > D && (D = 0),
          D === D ? D : R
        );
      }
      function d(f) {
        oe.debug && window && window.console.warn(f);
      }
      function m(f) {
        for (var w = -1, R = f ? f.length : 0, D = []; ++w < R;) {
          var A = f[w];
          A && D.push(A);
        }
        return D;
      }
      var v = (function (f, w, R) {
        function D(ae) {
          return typeof ae == "object";
        }
        function A(ae) {
          return typeof ae == "function";
        }
        function k() { }
        function te(ae, ge) {
          function Q() {
            var Le = new se();
            return A(Le.init) && Le.init.apply(Le, arguments), Le;
          }
          function se() { }
          ge === R && ((ge = ae), (ae = Object)), (Q.Bare = se);
          var ue,
            be = (k[f] = ae[f]),
            rt = (se[f] = Q[f] = new k());
          return (
            (rt.constructor = Q),
            (Q.mixin = function (Le) {
              return (se[f] = Q[f] = te(Q, Le)[f]), Q;
            }),
            (Q.open = function (Le) {
              if (
                ((ue = {}),
                  A(Le) ? (ue = Le.call(Q, rt, be, Q, ae)) : D(Le) && (ue = Le),
                  D(ue))
              )
                for (var Ir in ue) w.call(ue, Ir) && (rt[Ir] = ue[Ir]);
              return A(rt.init) || (rt.init = ae), Q;
            }),
            Q.open(ge)
          );
        }
        return te;
      })("prototype", {}.hasOwnProperty),
        y = {
          ease: [
            "ease",
            function (f, w, R, D) {
              var A = (f /= D) * f,
                k = A * f;
              return (
                w +
                R * (-2.75 * k * A + 11 * A * A + -15.5 * k + 8 * A + 0.25 * f)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (f, w, R, D) {
              var A = (f /= D) * f,
                k = A * f;
              return w + R * (-1 * k * A + 3 * A * A + -3 * k + 2 * A);
            },
          ],
          "ease-out": [
            "ease-out",
            function (f, w, R, D) {
              var A = (f /= D) * f,
                k = A * f;
              return (
                w +
                R * (0.3 * k * A + -1.6 * A * A + 2.2 * k + -1.8 * A + 1.9 * f)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (f, w, R, D) {
              var A = (f /= D) * f,
                k = A * f;
              return w + R * (2 * k * A + -5 * A * A + 2 * k + 2 * A);
            },
          ],
          linear: [
            "linear",
            function (f, w, R, D) {
              return (R * f) / D + w;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (f, w, R, D) {
              return R * (f /= D) * f + w;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (f, w, R, D) {
              return -R * (f /= D) * (f - 2) + w;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (f, w, R, D) {
              return (f /= D / 2) < 1
                ? (R / 2) * f * f + w
                : (-R / 2) * (--f * (f - 2) - 1) + w;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (f, w, R, D) {
              return R * (f /= D) * f * f + w;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (f, w, R, D) {
              return R * ((f = f / D - 1) * f * f + 1) + w;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (f, w, R, D) {
              return (f /= D / 2) < 1
                ? (R / 2) * f * f * f + w
                : (R / 2) * ((f -= 2) * f * f + 2) + w;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (f, w, R, D) {
              return R * (f /= D) * f * f * f + w;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (f, w, R, D) {
              return -R * ((f = f / D - 1) * f * f * f - 1) + w;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (f, w, R, D) {
              return (f /= D / 2) < 1
                ? (R / 2) * f * f * f * f + w
                : (-R / 2) * ((f -= 2) * f * f * f - 2) + w;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (f, w, R, D) {
              return R * (f /= D) * f * f * f * f + w;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (f, w, R, D) {
              return R * ((f = f / D - 1) * f * f * f * f + 1) + w;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (f, w, R, D) {
              return (f /= D / 2) < 1
                ? (R / 2) * f * f * f * f * f + w
                : (R / 2) * ((f -= 2) * f * f * f * f + 2) + w;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (f, w, R, D) {
              return -R * Math.cos((f / D) * (Math.PI / 2)) + R + w;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (f, w, R, D) {
              return R * Math.sin((f / D) * (Math.PI / 2)) + w;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (f, w, R, D) {
              return (-R / 2) * (Math.cos((Math.PI * f) / D) - 1) + w;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (f, w, R, D) {
              return f === 0 ? w : R * Math.pow(2, 10 * (f / D - 1)) + w;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (f, w, R, D) {
              return f === D
                ? w + R
                : R * (-Math.pow(2, (-10 * f) / D) + 1) + w;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (f, w, R, D) {
              return f === 0
                ? w
                : f === D
                  ? w + R
                  : (f /= D / 2) < 1
                    ? (R / 2) * Math.pow(2, 10 * (f - 1)) + w
                    : (R / 2) * (-Math.pow(2, -10 * --f) + 2) + w;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (f, w, R, D) {
              return -R * (Math.sqrt(1 - (f /= D) * f) - 1) + w;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (f, w, R, D) {
              return R * Math.sqrt(1 - (f = f / D - 1) * f) + w;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (f, w, R, D) {
              return (f /= D / 2) < 1
                ? (-R / 2) * (Math.sqrt(1 - f * f) - 1) + w
                : (R / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + w;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (f, w, R, D, A) {
              return (
                A === void 0 && (A = 1.70158),
                R * (f /= D) * f * ((A + 1) * f - A) + w
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (f, w, R, D, A) {
              return (
                A === void 0 && (A = 1.70158),
                R * ((f = f / D - 1) * f * ((A + 1) * f + A) + 1) + w
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (f, w, R, D, A) {
              return (
                A === void 0 && (A = 1.70158),
                (f /= D / 2) < 1
                  ? (R / 2) * f * f * (((A *= 1.525) + 1) * f - A) + w
                  : (R / 2) *
                  ((f -= 2) * f * (((A *= 1.525) + 1) * f + A) + 2) +
                  w
              );
            },
          ],
        },
        _ = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        b = document,
        O = window,
        q = "bkwld-tram",
        x = /[\-\.0-9]/g,
        E = /[A-Z]/,
        C = "number",
        M = /^(rgb|#)/,
        F = /(em|cm|mm|in|pt|pc|px)$/,
        P = /(em|cm|mm|in|pt|pc|px|%)$/,
        j = /(deg|rad|turn)$/,
        K = "unitless",
        Y = /(all|none) 0s ease 0s/,
        J = /^(width|height)$/,
        H = " ",
        S = b.createElement("a"),
        h = ["Webkit", "Moz", "O", "ms"],
        L = ["-webkit-", "-moz-", "-o-", "-ms-"],
        U = function (f) {
          if (f in S.style) return { dom: f, css: f };
          var w,
            R,
            D = "",
            A = f.split("-");
          for (w = 0; w < A.length; w++)
            D += A[w].charAt(0).toUpperCase() + A[w].slice(1);
          for (w = 0; w < h.length; w++)
            if (((R = h[w] + D), R in S.style))
              return { dom: R, css: L[w] + f };
        },
        X = (t.support = {
          bind: Function.prototype.bind,
          transform: U("transform"),
          transition: U("transition"),
          backface: U("backface-visibility"),
          timing: U("transition-timing-function"),
        });
      if (X.transition) {
        var ee = X.timing.dom;
        if (((S.style[ee] = y["ease-in-back"][0]), !S.style[ee]))
          for (var re in _) y[re][0] = _[re];
      }
      var V = (t.frame = (function () {
        var f =
          O.requestAnimationFrame ||
          O.webkitRequestAnimationFrame ||
          O.mozRequestAnimationFrame ||
          O.oRequestAnimationFrame ||
          O.msRequestAnimationFrame;
        return f && X.bind
          ? f.bind(O)
          : function (w) {
            O.setTimeout(w, 16);
          };
      })()),
        z = (t.now = (function () {
          var f = O.performance,
            w = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
          return w && X.bind
            ? w.bind(f)
            : Date.now ||
            function () {
              return +new Date();
            };
        })()),
        p = v(function (f) {
          function w(ne, ce) {
            var Ee = m(("" + ne).split(H)),
              pe = Ee[0];
            ce = ce || {};
            var Ne = $[pe];
            if (!Ne) return d("Unsupported property: " + pe);
            if (!ce.weak || !this.props[pe]) {
              var je = Ne[0],
                Fe = this.props[pe];
              return (
                Fe || (Fe = this.props[pe] = new je.Bare()),
                Fe.init(this.$el, Ee, Ne, ce),
                Fe
              );
            }
          }
          function R(ne, ce, Ee) {
            if (ne) {
              var pe = typeof ne;
              if (
                (ce ||
                  (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  pe == "number" && ce)
              )
                return (
                  (this.timer = new ie({
                    duration: ne,
                    context: this,
                    complete: k,
                  })),
                  void (this.active = !0)
                );
              if (pe == "string" && ce) {
                switch (ne) {
                  case "hide":
                    Q.call(this);
                    break;
                  case "stop":
                    te.call(this);
                    break;
                  case "redraw":
                    se.call(this);
                    break;
                  default:
                    w.call(this, ne, Ee && Ee[1]);
                }
                return k.call(this);
              }
              if (pe == "function") return void ne.call(this, this);
              if (pe == "object") {
                var Ne = 0;
                rt.call(
                  this,
                  ne,
                  function (Te, eb) {
                    Te.span > Ne && (Ne = Te.span), Te.stop(), Te.animate(eb);
                  },
                  function (Te) {
                    "wait" in Te && (Ne = u(Te.wait, 0));
                  }
                ),
                  be.call(this),
                  Ne > 0 &&
                  ((this.timer = new ie({ duration: Ne, context: this })),
                    (this.active = !0),
                    ce && (this.timer.complete = k));
                var je = this,
                  Fe = !1,
                  un = {};
                V(function () {
                  rt.call(je, ne, function (Te) {
                    Te.active && ((Fe = !0), (un[Te.name] = Te.nextStyle));
                  }),
                    Fe && je.$el.css(un);
                });
              }
            }
          }
          function D(ne) {
            (ne = u(ne, 0)),
              this.active
                ? this.queue.push({ options: ne })
                : ((this.timer = new ie({
                  duration: ne,
                  context: this,
                  complete: k,
                })),
                  (this.active = !0));
          }
          function A(ne) {
            return this.active
              ? (this.queue.push({ options: ne, args: arguments }),
                void (this.timer.complete = k))
              : d(
                "No active transition timer. Use start() or wait() before then()."
              );
          }
          function k() {
            if (
              (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
            ) {
              var ne = this.queue.shift();
              R.call(this, ne.options, !0, ne.args);
            }
          }
          function te(ne) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ce;
            typeof ne == "string"
              ? ((ce = {}), (ce[ne] = 1))
              : (ce = typeof ne == "object" && ne != null ? ne : this.props),
              rt.call(this, ce, Le),
              be.call(this);
          }
          function ae(ne) {
            te.call(this, ne), rt.call(this, ne, Ir, Z_);
          }
          function ge(ne) {
            typeof ne != "string" && (ne = "block"),
              (this.el.style.display = ne);
          }
          function Q() {
            te.call(this), (this.el.style.display = "none");
          }
          function se() {
            this.el.offsetHeight;
          }
          function ue() {
            te.call(this),
              e.removeData(this.el, q),
              (this.$el = this.el = null);
          }
          function be() {
            var ne,
              ce,
              Ee = [];
            this.upstream && Ee.push(this.upstream);
            for (ne in this.props)
              (ce = this.props[ne]), ce.active && Ee.push(ce.string);
            (Ee = Ee.join(",")),
              this.style !== Ee &&
              ((this.style = Ee), (this.el.style[X.transition.dom] = Ee));
          }
          function rt(ne, ce, Ee) {
            var pe,
              Ne,
              je,
              Fe,
              un = ce !== Le,
              Te = {};
            for (pe in ne)
              (je = ne[pe]),
                pe in de
                  ? (Te.transform || (Te.transform = {}),
                    (Te.transform[pe] = je))
                  : (E.test(pe) && (pe = r(pe)),
                    pe in $ ? (Te[pe] = je) : (Fe || (Fe = {}), (Fe[pe] = je)));
            for (pe in Te) {
              if (((je = Te[pe]), (Ne = this.props[pe]), !Ne)) {
                if (!un) continue;
                Ne = w.call(this, pe);
              }
              ce.call(this, Ne, je);
            }
            Ee && Fe && Ee.call(this, Fe);
          }
          function Le(ne) {
            ne.stop();
          }
          function Ir(ne, ce) {
            ne.set(ce);
          }
          function Z_(ne) {
            this.$el.css(ne);
          }
          function Be(ne, ce) {
            f[ne] = function () {
              return this.children
                ? J_.call(this, ce, arguments)
                : (this.el && ce.apply(this, arguments), this);
            };
          }
          function J_(ne, ce) {
            var Ee,
              pe = this.children.length;
            for (Ee = 0; pe > Ee; Ee++) ne.apply(this.children[Ee], ce);
            return this;
          }
          (f.init = function (ne) {
            if (
              ((this.$el = e(ne)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                oe.keepInherited && !oe.fallback)
            ) {
              var ce = B(this.el, "transition");
              ce && !Y.test(ce) && (this.upstream = ce);
            }
            X.backface &&
              oe.hideBackface &&
              g(this.el, X.backface.css, "hidden");
          }),
            Be("add", w),
            Be("start", R),
            Be("wait", D),
            Be("then", A),
            Be("next", k),
            Be("stop", te),
            Be("set", ae),
            Be("show", ge),
            Be("hide", Q),
            Be("redraw", se),
            Be("destroy", ue);
        }),
        T = v(p, function (f) {
          function w(R, D) {
            var A = e.data(R, q) || e.data(R, q, new p.Bare());
            return A.el || A.init(R), D ? A.start(D) : A;
          }
          f.init = function (R, D) {
            var A = e(R);
            if (!A.length) return this;
            if (A.length === 1) return w(A[0], D);
            var k = [];
            return (
              A.each(function (te, ae) {
                k.push(w(ae, D));
              }),
              (this.children = k),
              this
            );
          };
        }),
        I = v(function (f) {
          function w() {
            var k = this.get();
            this.update("auto");
            var te = this.get();
            return this.update(k), te;
          }
          function R(k, te, ae) {
            return te !== void 0 && (ae = te), k in y ? k : ae;
          }
          function D(k) {
            var te = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(k);
            return (te ? i(te[1], te[2], te[3]) : k).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var A = { duration: 500, ease: "ease", delay: 0 };
          (f.init = function (k, te, ae, ge) {
            (this.$el = k), (this.el = k[0]);
            var Q = te[0];
            ae[2] && (Q = ae[2]),
              Z[Q] && (Q = Z[Q]),
              (this.name = Q),
              (this.type = ae[1]),
              (this.duration = u(te[1], this.duration, A.duration)),
              (this.ease = R(te[2], this.ease, A.ease)),
              (this.delay = u(te[3], this.delay, A.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = J.test(this.name)),
              (this.unit = ge.unit || this.unit || oe.defaultUnit),
              (this.angle = ge.angle || this.angle || oe.defaultAngle),
              oe.fallback || ge.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    H +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? H + y[this.ease][0] : "") +
                    (this.delay ? H + this.delay + "ms" : "")));
          }),
            (f.set = function (k) {
              (k = this.convert(k, this.type)), this.update(k), this.redraw();
            }),
            (f.transition = function (k) {
              (this.active = !0),
                (k = this.convert(k, this.type)),
                this.auto &&
                (this.el.style[this.name] == "auto" &&
                  (this.update(this.get()), this.redraw()),
                  k == "auto" && (k = w.call(this))),
                (this.nextStyle = k);
            }),
            (f.fallback = function (k) {
              var te =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (k = this.convert(k, this.type)),
                this.auto &&
                (te == "auto" && (te = this.convert(this.get(), this.type)),
                  k == "auto" && (k = w.call(this))),
                (this.tween = new N({
                  from: te,
                  to: k,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (f.get = function () {
              return B(this.el, this.name);
            }),
            (f.update = function (k) {
              g(this.el, this.name, k);
            }),
            (f.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                  (this.nextStyle = null),
                  g(this.el, this.name, this.get()));
              var k = this.tween;
              k && k.context && k.destroy();
            }),
            (f.convert = function (k, te) {
              if (k == "auto" && this.auto) return k;
              var ae,
                ge = typeof k == "number",
                Q = typeof k == "string";
              switch (te) {
                case C:
                  if (ge) return k;
                  if (Q && k.replace(x, "") === "") return +k;
                  ae = "number(unitless)";
                  break;
                case M:
                  if (Q) {
                    if (k === "" && this.original) return this.original;
                    if (te.test(k))
                      return k.charAt(0) == "#" && k.length == 7 ? k : D(k);
                  }
                  ae = "hex or rgb string";
                  break;
                case F:
                  if (ge) return k + this.unit;
                  if (Q && te.test(k)) return k;
                  ae = "number(px) or string(unit)";
                  break;
                case P:
                  if (ge) return k + this.unit;
                  if (Q && te.test(k)) return k;
                  ae = "number(px) or string(unit or %)";
                  break;
                case j:
                  if (ge) return k + this.angle;
                  if (Q && te.test(k)) return k;
                  ae = "number(deg) or string(angle)";
                  break;
                case K:
                  if (ge || (Q && P.test(k))) return k;
                  ae = "number(unitless) or string(unit or %)";
              }
              return a(ae, k), k;
            }),
            (f.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        l = v(I, function (f, w) {
          f.init = function () {
            w.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), M));
          };
        }),
        G = v(I, function (f, w) {
          (f.init = function () {
            w.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (f.get = function () {
              return this.$el[this.name]();
            }),
            (f.update = function (R) {
              this.$el[this.name](R);
            });
        }),
        W = v(I, function (f, w) {
          function R(D, A) {
            var k, te, ae, ge, Q;
            for (k in D)
              (ge = de[k]),
                (ae = ge[0]),
                (te = ge[1] || k),
                (Q = this.convert(D[k], ae)),
                A.call(this, te, Q, ae);
          }
          (f.init = function () {
            w.init.apply(this, arguments),
              this.current ||
              ((this.current = {}),
                de.perspective &&
                oe.perspective &&
                ((this.current.perspective = oe.perspective),
                  g(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (f.set = function (D) {
              R.call(this, D, function (A, k) {
                this.current[A] = k;
              }),
                g(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (f.transition = function (D) {
              var A = this.values(D);
              this.tween = new le({
                current: this.current,
                values: A,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var k,
                te = {};
              for (k in this.current) te[k] = k in A ? A[k] : this.current[k];
              (this.active = !0), (this.nextStyle = this.style(te));
            }),
            (f.fallback = function (D) {
              var A = this.values(D);
              this.tween = new le({
                current: this.current,
                values: A,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (f.update = function () {
              g(this.el, this.name, this.style(this.current));
            }),
            (f.style = function (D) {
              var A,
                k = "";
              for (A in D) k += A + "(" + D[A] + ") ";
              return k;
            }),
            (f.values = function (D) {
              var A,
                k = {};
              return (
                R.call(this, D, function (te, ae, ge) {
                  (k[te] = ae),
                    this.current[te] === void 0 &&
                    ((A = 0),
                      ~te.indexOf("scale") && (A = 1),
                      (this.current[te] = this.convert(A, ge)));
                }),
                k
              );
            });
        }),
        N = v(function (f) {
          function w(Q) {
            ae.push(Q) === 1 && V(R);
          }
          function R() {
            var Q,
              se,
              ue,
              be = ae.length;
            if (be)
              for (V(R), se = z(), Q = be; Q--;)
                (ue = ae[Q]), ue && ue.render(se);
          }
          function D(Q) {
            var se,
              ue = e.inArray(Q, ae);
            ue >= 0 &&
              ((se = ae.slice(ue + 1)),
                (ae.length = ue),
                se.length && (ae = ae.concat(se)));
          }
          function A(Q) {
            return Math.round(Q * ge) / ge;
          }
          function k(Q, se, ue) {
            return i(
              Q[0] + ue * (se[0] - Q[0]),
              Q[1] + ue * (se[1] - Q[1]),
              Q[2] + ue * (se[2] - Q[2])
            );
          }
          var te = { ease: y.ease[1], from: 0, to: 1 };
          (f.init = function (Q) {
            (this.duration = Q.duration || 0), (this.delay = Q.delay || 0);
            var se = Q.ease || te.ease;
            y[se] && (se = y[se][1]),
              typeof se != "function" && (se = te.ease),
              (this.ease = se),
              (this.update = Q.update || o),
              (this.complete = Q.complete || o),
              (this.context = Q.context || this),
              (this.name = Q.name);
            var ue = Q.from,
              be = Q.to;
            ue === void 0 && (ue = te.from),
              be === void 0 && (be = te.to),
              (this.unit = Q.unit || ""),
              typeof ue == "number" && typeof be == "number"
                ? ((this.begin = ue), (this.change = be - ue))
                : this.format(be, ue),
              (this.value = this.begin + this.unit),
              (this.start = z()),
              Q.autoplay !== !1 && this.play();
          }),
            (f.play = function () {
              this.active ||
                (this.start || (this.start = z()), (this.active = !0), w(this));
            }),
            (f.stop = function () {
              this.active && ((this.active = !1), D(this));
            }),
            (f.render = function (Q) {
              var se,
                ue = Q - this.start;
              if (this.delay) {
                if (ue <= this.delay) return;
                ue -= this.delay;
              }
              if (ue < this.duration) {
                var be = this.ease(ue, 0, 1, this.duration);
                return (
                  (se = this.startRGB
                    ? k(this.startRGB, this.endRGB, be)
                    : A(this.begin + be * this.change)),
                  (this.value = se + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (se = this.endHex || this.begin + this.change),
                (this.value = se + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (f.format = function (Q, se) {
              if (((se += ""), (Q += ""), Q.charAt(0) == "#"))
                return (
                  (this.startRGB = n(se)),
                  (this.endRGB = n(Q)),
                  (this.endHex = Q),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ue = se.replace(x, ""),
                  be = Q.replace(x, "");
                ue !== be && s("tween", se, Q), (this.unit = ue);
              }
              (se = parseFloat(se)),
                (Q = parseFloat(Q)),
                (this.begin = this.value = se),
                (this.change = Q - se);
            }),
            (f.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ae = [],
            ge = 1e3;
        }),
        ie = v(N, function (f) {
          (f.init = function (w) {
            (this.duration = w.duration || 0),
              (this.complete = w.complete || o),
              (this.context = w.context),
              this.play();
          }),
            (f.render = function (w) {
              var R = w - this.start;
              R < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        le = v(N, function (f, w) {
          (f.init = function (R) {
            (this.context = R.context),
              (this.update = R.update),
              (this.tweens = []),
              (this.current = R.current);
            var D, A;
            for (D in R.values)
              (A = R.values[D]),
                this.current[D] !== A &&
                this.tweens.push(
                  new N({
                    name: D,
                    from: this.current[D],
                    to: A,
                    duration: R.duration,
                    delay: R.delay,
                    ease: R.ease,
                    autoplay: !1,
                  })
                );
            this.play();
          }),
            (f.render = function (R) {
              var D,
                A,
                k = this.tweens.length,
                te = !1;
              for (D = k; D--;)
                (A = this.tweens[D]),
                  A.context &&
                  (A.render(R), (this.current[A.name] = A.value), (te = !0));
              return te
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (f.destroy = function () {
              if ((w.destroy.call(this), this.tweens)) {
                var R,
                  D = this.tweens.length;
                for (R = D; R--;) this.tweens[R].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        oe = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !X.transition,
          agentTests: [],
        });
      (t.fallback = function (f) {
        if (!X.transition) return (oe.fallback = !0);
        oe.agentTests.push("(" + f + ")");
        var w = new RegExp(oe.agentTests.join("|"), "i");
        oe.fallback = w.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (f) {
          return new N(f);
        }),
        (t.delay = function (f, w, R) {
          return new ie({ complete: w, duration: f, context: R });
        }),
        (e.fn.tram = function (f) {
          return t.call(null, this, f);
        });
      var g = e.style,
        B = e.css,
        Z = { transform: X.transform && X.transform.css },
        $ = {
          color: [l, M],
          background: [l, M, "background-color"],
          "outline-color": [l, M],
          "border-color": [l, M],
          "border-top-color": [l, M],
          "border-right-color": [l, M],
          "border-bottom-color": [l, M],
          "border-left-color": [l, M],
          "border-width": [I, F],
          "border-top-width": [I, F],
          "border-right-width": [I, F],
          "border-bottom-width": [I, F],
          "border-left-width": [I, F],
          "border-spacing": [I, F],
          "letter-spacing": [I, F],
          margin: [I, F],
          "margin-top": [I, F],
          "margin-right": [I, F],
          "margin-bottom": [I, F],
          "margin-left": [I, F],
          padding: [I, F],
          "padding-top": [I, F],
          "padding-right": [I, F],
          "padding-bottom": [I, F],
          "padding-left": [I, F],
          "outline-width": [I, F],
          opacity: [I, C],
          top: [I, P],
          right: [I, P],
          bottom: [I, P],
          left: [I, P],
          "font-size": [I, P],
          "text-indent": [I, P],
          "word-spacing": [I, P],
          width: [I, P],
          "min-width": [I, P],
          "max-width": [I, P],
          height: [I, P],
          "min-height": [I, P],
          "max-height": [I, P],
          "line-height": [I, K],
          "scroll-top": [G, C, "scrollTop"],
          "scroll-left": [G, C, "scrollLeft"],
        },
        de = {};
      X.transform &&
        (($.transform = [W]),
          (de = {
            x: [P, "translateX"],
            y: [P, "translateY"],
            rotate: [j],
            rotateX: [j],
            rotateY: [j],
            scale: [C],
            scaleX: [C],
            scaleY: [C],
            skew: [j],
            skewX: [j],
            skewY: [j],
          })),
        X.transform &&
        X.backface &&
        ((de.z = [P, "translateZ"]),
          (de.rotateZ = [j]),
          (de.scaleZ = [C]),
          (de.perspective = [F]));
      var De = /ms/,
        Xe = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Ms = c((YV, Ps) => {
    "use strict";
    var ab = window.$,
      sb = Mi() && ab.tram;
    Ps.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        d = n.hasOwnProperty,
        m = r.forEach,
        v = r.map,
        y = r.reduce,
        _ = r.reduceRight,
        b = r.filter,
        O = r.every,
        q = r.some,
        x = r.indexOf,
        E = r.lastIndexOf,
        C = Array.isArray,
        M = Object.keys,
        F = i.bind,
        P =
          (e.each =
            e.forEach =
            function (h, L, U) {
              if (h == null) return h;
              if (m && h.forEach === m) h.forEach(L, U);
              else if (h.length === +h.length) {
                for (var X = 0, ee = h.length; X < ee; X++)
                  if (L.call(U, h[X], X, h) === t) return;
              } else
                for (var re = e.keys(h), X = 0, ee = re.length; X < ee; X++)
                  if (L.call(U, h[re[X]], re[X], h) === t) return;
              return h;
            });
      (e.map = e.collect =
        function (h, L, U) {
          var X = [];
          return h == null
            ? X
            : v && h.map === v
              ? h.map(L, U)
              : (P(h, function (ee, re, V) {
                X.push(L.call(U, ee, re, V));
              }),
                X);
        }),
        (e.find = e.detect =
          function (h, L, U) {
            var X;
            return (
              j(h, function (ee, re, V) {
                if (L.call(U, ee, re, V)) return (X = ee), !0;
              }),
              X
            );
          }),
        (e.filter = e.select =
          function (h, L, U) {
            var X = [];
            return h == null
              ? X
              : b && h.filter === b
                ? h.filter(L, U)
                : (P(h, function (ee, re, V) {
                  L.call(U, ee, re, V) && X.push(ee);
                }),
                  X);
          });
      var j =
        (e.some =
          e.any =
          function (h, L, U) {
            L || (L = e.identity);
            var X = !1;
            return h == null
              ? X
              : q && h.some === q
                ? h.some(L, U)
                : (P(h, function (ee, re, V) {
                  if (X || (X = L.call(U, ee, re, V))) return t;
                }),
                  !!X);
          });
      (e.contains = e.include =
        function (h, L) {
          return h == null
            ? !1
            : x && h.indexOf === x
              ? h.indexOf(L) != -1
              : j(h, function (U) {
                return U === L;
              });
        }),
        (e.delay = function (h, L) {
          var U = a.call(arguments, 2);
          return setTimeout(function () {
            return h.apply(null, U);
          }, L);
        }),
        (e.defer = function (h) {
          return e.delay.apply(e, [h, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (h) {
          var L, U, X;
          return function () {
            L ||
              ((L = !0),
                (U = arguments),
                (X = this),
                sb.frame(function () {
                  (L = !1), h.apply(X, U);
                }));
          };
        }),
        (e.debounce = function (h, L, U) {
          var X,
            ee,
            re,
            V,
            z,
            p = function () {
              var T = e.now() - V;
              T < L
                ? (X = setTimeout(p, L - T))
                : ((X = null), U || ((z = h.apply(re, ee)), (re = ee = null)));
            };
          return function () {
            (re = this), (ee = arguments), (V = e.now());
            var T = U && !X;
            return (
              X || (X = setTimeout(p, L)),
              T && ((z = h.apply(re, ee)), (re = ee = null)),
              z
            );
          };
        }),
        (e.defaults = function (h) {
          if (!e.isObject(h)) return h;
          for (var L = 1, U = arguments.length; L < U; L++) {
            var X = arguments[L];
            for (var ee in X) h[ee] === void 0 && (h[ee] = X[ee]);
          }
          return h;
        }),
        (e.keys = function (h) {
          if (!e.isObject(h)) return [];
          if (M) return M(h);
          var L = [];
          for (var U in h) e.has(h, U) && L.push(U);
          return L;
        }),
        (e.has = function (h, L) {
          return d.call(h, L);
        }),
        (e.isObject = function (h) {
          return h === Object(h);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var K = /(.)^/,
        Y = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        J = /\\|'|\r|\n|\u2028|\u2029/g,
        H = function (h) {
          return "\\" + Y[h];
        },
        S = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (h, L, U) {
          !L && U && (L = U), (L = e.defaults({}, L, e.templateSettings));
          var X = RegExp(
            [
              (L.escape || K).source,
              (L.interpolate || K).source,
              (L.evaluate || K).source,
            ].join("|") + "|$",
            "g"
          ),
            ee = 0,
            re = "__p+='";
          h.replace(X, function (T, I, l, G, W) {
            return (
              (re += h.slice(ee, W).replace(J, H)),
              (ee = W + T.length),
              I
                ? (re +=
                  `'+
((__t=(` +
                  I +
                  `))==null?'':_.escape(__t))+
'`)
                : l
                  ? (re +=
                    `'+
((__t=(` +
                    l +
                    `))==null?'':__t)+
'`)
                  : G &&
                  (re +=
                    `';
` +
                    G +
                    `
__p+='`),
              T
            );
          }),
            (re += `';
`);
          var V = L.variable;
          if (V) {
            if (!S.test(V))
              throw new Error("variable is not a bare identifier: " + V);
          } else
            (re =
              `with(obj||{}){
` +
              re +
              `}
`),
              (V = "obj");
          re =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            re +
            `return __p;
`;
          var z;
          try {
            z = new Function(L.variable || "obj", "_", re);
          } catch (T) {
            throw ((T.source = re), T);
          }
          var p = function (T) {
            return z.call(this, T, e);
          };
          return (
            (p.source =
              "function(" +
              V +
              `){
` +
              re +
              "}"),
            p
          );
        }),
        e
      );
    })();
  });
  var Re = c(($V, Ws) => {
    "use strict";
    var ve = {},
      Xt = {},
      Bt = [],
      Di = window.Webflow || [],
      _t = window.jQuery,
      Ke = _t(window),
      ub = _t(document),
      it = _t.isFunction,
      ze = (ve._ = Ms()),
      Ds = (ve.tram = Mi() && _t.tram),
      fn = !1,
      Fi = !1;
    Ds.config.hideBackface = !1;
    Ds.config.keepInherited = !0;
    ve.define = function (e, t, r) {
      Xt[e] && ks(Xt[e]);
      var n = (Xt[e] = t(_t, ze, r) || {});
      return Fs(n), n;
    };
    ve.require = function (e) {
      return Xt[e];
    };
    function Fs(e) {
      ve.env() &&
        (it(e.design) && Ke.on("__wf_design", e.design),
          it(e.preview) && Ke.on("__wf_preview", e.preview)),
        it(e.destroy) && Ke.on("__wf_destroy", e.destroy),
        e.ready && it(e.ready) && cb(e);
    }
    function cb(e) {
      if (fn) {
        e.ready();
        return;
      }
      ze.contains(Bt, e.ready) || Bt.push(e.ready);
    }
    function ks(e) {
      it(e.design) && Ke.off("__wf_design", e.design),
        it(e.preview) && Ke.off("__wf_preview", e.preview),
        it(e.destroy) && Ke.off("__wf_destroy", e.destroy),
        e.ready && it(e.ready) && lb(e);
    }
    function lb(e) {
      Bt = ze.filter(Bt, function (t) {
        return t !== e.ready;
      });
    }
    ve.push = function (e) {
      if (fn) {
        it(e) && e();
        return;
      }
      Di.push(e);
    };
    ve.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var ln = navigator.userAgent.toLowerCase(),
      Gs = (ve.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      fb = (ve.env.chrome =
        /chrome/.test(ln) &&
        /Google/.test(navigator.vendor) &&
        parseInt(ln.match(/chrome\/(\d+)\./)[1], 10)),
      db = (ve.env.ios = /(ipod|iphone|ipad)/.test(ln));
    ve.env.safari = /safari/.test(ln) && !fb && !db;
    var qi;
    Gs &&
      ub.on("touchstart mousedown", function (e) {
        qi = e.target;
      });
    ve.validClick = Gs
      ? function (e) {
        return e === qi || _t.contains(e, qi);
      }
      : function () {
        return !0;
      };
    var Us = "resize.webflow orientationchange.webflow load.webflow",
      pb = "scroll.webflow " + Us;
    ve.resize = ki(Ke, Us);
    ve.scroll = ki(Ke, pb);
    ve.redraw = ki();
    function ki(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = ze.throttle(function (i) {
          ze.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (ze.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = ze.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ve.location = function (e) {
      window.location = e;
    };
    ve.env() && (ve.location = function () { });
    ve.ready = function () {
      (fn = !0), Fi ? vb() : ze.each(Bt, qs), ze.each(Di, qs), ve.resize.up();
    };
    function qs(e) {
      it(e) && e();
    }
    function vb() {
      (Fi = !1), ze.each(Xt, Fs);
    }
    var Lt;
    ve.load = function (e) {
      Lt.then(e);
    };
    function Vs() {
      Lt && (Lt.reject(), Ke.off("load", Lt.resolve)),
        (Lt = new _t.Deferred()),
        Ke.on("load", Lt.resolve);
    }
    ve.destroy = function (e) {
      (e = e || {}),
        (Fi = !0),
        Ke.triggerHandler("__wf_destroy"),
        e.domready != null && (fn = e.domready),
        ze.each(Xt, ks),
        ve.resize.off(),
        ve.scroll.off(),
        ve.redraw.off(),
        (Bt = []),
        (Di = []),
        Lt.state() === "pending" && Vs();
    };
    _t(ve.ready);
    Vs();
    Ws.exports = window.Webflow = ve;
  });
  var Bs = c((QV, Xs) => {
    "use strict";
    var Hs = Re();
    Hs.define(
      "brand",
      (Xs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          d;
        t.ready = function () {
          var _ = n.attr("data-wf-status"),
            b = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(b) && a.hostname !== b && (_ = !0),
            _ &&
            !s &&
            ((d = d || v()),
              y(),
              setTimeout(y, 500),
              e(r).off(u, m).on(u, m));
        };
        function m() {
          var _ =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(d).attr("style", _ ? "display: none !important;" : "");
        }
        function v() {
          var _ = e('<a class="w-webflow-badge"></a>').attr(
            "href",
            "https://webflow.com?utm_campaign=brandjs"
          ),
            b = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            O = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return _.append(b, O), _[0];
        }
        function y() {
          var _ = i.children(o),
            b = _.length && _.get(0) === d,
            O = Hs.env("editor");
          if (b) {
            O && _.remove();
            return;
          }
          _.length && _.remove(), O || i.append(d);
        }
        return t;
      })
    );
  });
  var zs = c((ZV, js) => {
    "use strict";
    var Gi = Re();
    Gi.define(
      "edit",
      (js.exports = function (e, t, r) {
        if (
          ((r = r || {}),
            (Gi.env("test") || Gi.env("frame")) && !r.fixture && !gb())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          d = r.load || y,
          m = !1;
        try {
          m =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch { }
        m
          ? d()
          : a.search
            ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            d()
            : i.on(s, v).triggerHandler(s);
        function v() {
          u || (/\?edit/.test(a.hash) && d());
        }
        function y() {
          (u = !0),
            (window.WebflowEditor = !0),
            i.off(s, v),
            E(function (M) {
              e.ajax({
                url: x("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: _(M),
              });
            });
        }
        function _(M) {
          return function (F) {
            if (!F) {
              console.error("Could not load editor data");
              return;
            }
            (F.thirdPartyCookiesSupported = M),
              b(q(F.bugReporterScriptPath), function () {
                b(q(F.scriptPath), function () {
                  window.WebflowEditor(F);
                });
              });
          };
        }
        function b(M, F) {
          e.ajax({ type: "GET", url: M, dataType: "script", cache: !0 }).then(
            F,
            O
          );
        }
        function O(M, F, P) {
          throw (console.error("Could not load editor script: " + F), P);
        }
        function q(M) {
          return M.indexOf("//") >= 0
            ? M
            : x("https://editor-api.webflow.com" + M);
        }
        function x(M) {
          return M.replace(/([^:])\/\//g, "$1/");
        }
        function E(M) {
          var F = window.document.createElement("iframe");
          (F.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (F.style.display = "none"),
            (F.sandbox = "allow-scripts allow-same-origin");
          var P = function (j) {
            j.data === "WF_third_party_cookies_unsupported"
              ? (C(F, P), M(!1))
              : j.data === "WF_third_party_cookies_supported" &&
              (C(F, P), M(!0));
          };
          (F.onerror = function () {
            C(F, P), M(!1);
          }),
            window.addEventListener("message", P, !1),
            window.document.body.appendChild(F);
        }
        function C(M, F) {
          window.removeEventListener("message", F, !1), M.remove();
        }
        return n;
      })
    );
    function gb() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Ys = c((JV, Ks) => {
    "use strict";
    var hb = Re();
    hb.define(
      "focus-visible",
      (Ks.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(C) {
            return !!(
              C &&
              C !== document &&
              C.nodeName !== "HTML" &&
              C.nodeName !== "BODY" &&
              "classList" in C &&
              "contains" in C.classList
            );
          }
          function u(C) {
            var M = C.type,
              F = C.tagName;
            return !!(
              (F === "INPUT" && a[M] && !C.readOnly) ||
              (F === "TEXTAREA" && !C.readOnly) ||
              C.isContentEditable
            );
          }
          function d(C) {
            C.getAttribute("data-wf-focus-visible") ||
              C.setAttribute("data-wf-focus-visible", "true");
          }
          function m(C) {
            C.getAttribute("data-wf-focus-visible") &&
              C.removeAttribute("data-wf-focus-visible");
          }
          function v(C) {
            C.metaKey ||
              C.altKey ||
              C.ctrlKey ||
              (s(r.activeElement) && d(r.activeElement), (n = !0));
          }
          function y() {
            n = !1;
          }
          function _(C) {
            s(C.target) && (n || u(C.target)) && d(C.target);
          }
          function b(C) {
            s(C.target) &&
              C.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
                window.clearTimeout(o),
                (o = window.setTimeout(function () {
                  i = !1;
                }, 100)),
                m(C.target));
          }
          function O() {
            document.visibilityState === "hidden" && (i && (n = !0), q());
          }
          function q() {
            document.addEventListener("mousemove", E),
              document.addEventListener("mousedown", E),
              document.addEventListener("mouseup", E),
              document.addEventListener("pointermove", E),
              document.addEventListener("pointerdown", E),
              document.addEventListener("pointerup", E),
              document.addEventListener("touchmove", E),
              document.addEventListener("touchstart", E),
              document.addEventListener("touchend", E);
          }
          function x() {
            document.removeEventListener("mousemove", E),
              document.removeEventListener("mousedown", E),
              document.removeEventListener("mouseup", E),
              document.removeEventListener("pointermove", E),
              document.removeEventListener("pointerdown", E),
              document.removeEventListener("pointerup", E),
              document.removeEventListener("touchmove", E),
              document.removeEventListener("touchstart", E),
              document.removeEventListener("touchend", E);
          }
          function E(C) {
            (C.target.nodeName && C.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), x());
          }
          document.addEventListener("keydown", v, !0),
            document.addEventListener("mousedown", y, !0),
            document.addEventListener("pointerdown", y, !0),
            document.addEventListener("touchstart", y, !0),
            document.addEventListener("visibilitychange", O, !0),
            q(),
            r.addEventListener("focus", _, !0),
            r.addEventListener("blur", b, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Zs = c((eW, Qs) => {
    "use strict";
    var $s = Re();
    $s.define(
      "focus",
      (Qs.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
              a.stopPropagation(),
              a.stopImmediatePropagation(),
              e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
              setTimeout(() => {
                for (t = !1, a.target.focus(); e.length > 0;) {
                  var s = e.pop();
                  s.target.dispatchEvent(new MouseEvent(s.type, s));
                }
              }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            $s.env.safari &&
            (document.addEventListener("mousedown", i, !0),
              document.addEventListener("mouseup", r, !0),
              document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var tu = c((tW, eu) => {
    "use strict";
    var Ui = window.jQuery,
      ot = {},
      dn = [],
      Js = ".w-ix",
      pn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Ui(t).triggerHandler(ot.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Ui(t).triggerHandler(ot.types.OUTRO));
        },
      };
    ot.triggers = {};
    ot.types = { INTRO: "w-ix-intro" + Js, OUTRO: "w-ix-outro" + Js };
    ot.init = function () {
      for (var e = dn.length, t = 0; t < e; t++) {
        var r = dn[t];
        r[0](0, r[1]);
      }
      (dn = []), Ui.extend(ot.triggers, pn);
    };
    ot.async = function () {
      for (var e in pn) {
        var t = pn[e];
        pn.hasOwnProperty(e) &&
          (ot.triggers[e] = function (r, n) {
            dn.push([t, n]);
          });
      }
    };
    ot.async();
    eu.exports = ot;
  });
  var jt = c((rW, iu) => {
    "use strict";
    var Vi = tu();
    function ru(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var mb = window.jQuery,
      vn = {},
      nu = ".w-ix",
      yb = {
        reset: function (e, t) {
          Vi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Vi.triggers.intro(e, t), ru(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Vi.triggers.outro(e, t), ru(t, "COMPONENT_INACTIVE");
        },
      };
    vn.triggers = {};
    vn.types = { INTRO: "w-ix-intro" + nu, OUTRO: "w-ix-outro" + nu };
    mb.extend(vn.triggers, yb);
    iu.exports = vn;
  });
  var ou = c((nW, pt) => {
    function Wi(e) {
      return (
        (pt.exports = Wi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
              return typeof t;
            }
            : function (t) {
              return t &&
                typeof Symbol == "function" &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
        (pt.exports.__esModule = !0),
        (pt.exports.default = pt.exports),
        Wi(e)
      );
    }
    (pt.exports = Wi),
      (pt.exports.__esModule = !0),
      (pt.exports.default = pt.exports);
  });
  var gn = c((iW, wr) => {
    var Eb = ou().default;
    function au(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (au = function (i) {
        return i ? r : t;
      })(e);
    }
    function _b(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (Eb(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = au(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (wr.exports = _b),
      (wr.exports.__esModule = !0),
      (wr.exports.default = wr.exports);
  });
  var su = c((oW, Or) => {
    function bb(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Or.exports = bb),
      (Or.exports.__esModule = !0),
      (Or.exports.default = Or.exports);
  });
  var ye = c((aW, uu) => {
    var hn = function (e) {
      return e && e.Math == Math && e;
    };
    uu.exports =
      hn(typeof globalThis == "object" && globalThis) ||
      hn(typeof window == "object" && window) ||
      hn(typeof self == "object" && self) ||
      hn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var zt = c((sW, cu) => {
    cu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Nt = c((uW, lu) => {
    var Tb = zt();
    lu.exports = !Tb(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var mn = c((cW, fu) => {
    var xr = Function.prototype.call;
    fu.exports = xr.bind
      ? xr.bind(xr)
      : function () {
        return xr.apply(xr, arguments);
      };
  });
  var gu = c((vu) => {
    "use strict";
    var du = {}.propertyIsEnumerable,
      pu = Object.getOwnPropertyDescriptor,
      Ib = pu && !du.call({ 1: 2 }, 1);
    vu.f = Ib
      ? function (t) {
        var r = pu(this, t);
        return !!r && r.enumerable;
      }
      : du;
  });
  var Hi = c((fW, hu) => {
    hu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Ye = c((dW, yu) => {
    var mu = Function.prototype,
      Xi = mu.bind,
      Bi = mu.call,
      wb = Xi && Xi.bind(Bi);
    yu.exports = Xi
      ? function (e) {
        return e && wb(Bi, e);
      }
      : function (e) {
        return (
          e &&
          function () {
            return Bi.apply(e, arguments);
          }
        );
      };
  });
  var bu = c((pW, _u) => {
    var Eu = Ye(),
      Ob = Eu({}.toString),
      xb = Eu("".slice);
    _u.exports = function (e) {
      return xb(Ob(e), 8, -1);
    };
  });
  var Iu = c((vW, Tu) => {
    var Ab = ye(),
      Sb = Ye(),
      Rb = zt(),
      Cb = bu(),
      ji = Ab.Object,
      Lb = Sb("".split);
    Tu.exports = Rb(function () {
      return !ji("z").propertyIsEnumerable(0);
    })
      ? function (e) {
        return Cb(e) == "String" ? Lb(e, "") : ji(e);
      }
      : ji;
  });
  var zi = c((gW, wu) => {
    var Nb = ye(),
      Pb = Nb.TypeError;
    wu.exports = function (e) {
      if (e == null) throw Pb("Can't call method on " + e);
      return e;
    };
  });
  var Ar = c((hW, Ou) => {
    var Mb = Iu(),
      qb = zi();
    Ou.exports = function (e) {
      return Mb(qb(e));
    };
  });
  var at = c((mW, xu) => {
    xu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Kt = c((yW, Au) => {
    var Db = at();
    Au.exports = function (e) {
      return typeof e == "object" ? e !== null : Db(e);
    };
  });
  var Sr = c((EW, Su) => {
    var Ki = ye(),
      Fb = at(),
      kb = function (e) {
        return Fb(e) ? e : void 0;
      };
    Su.exports = function (e, t) {
      return arguments.length < 2 ? kb(Ki[e]) : Ki[e] && Ki[e][t];
    };
  });
  var Cu = c((_W, Ru) => {
    var Gb = Ye();
    Ru.exports = Gb({}.isPrototypeOf);
  });
  var Nu = c((bW, Lu) => {
    var Ub = Sr();
    Lu.exports = Ub("navigator", "userAgent") || "";
  });
  var Gu = c((TW, ku) => {
    var Fu = ye(),
      Yi = Nu(),
      Pu = Fu.process,
      Mu = Fu.Deno,
      qu = (Pu && Pu.versions) || (Mu && Mu.version),
      Du = qu && qu.v8,
      $e,
      yn;
    Du &&
      (($e = Du.split(".")),
        (yn = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1])));
    !yn &&
      Yi &&
      (($e = Yi.match(/Edge\/(\d+)/)),
        (!$e || $e[1] >= 74) &&
        (($e = Yi.match(/Chrome\/(\d+)/)), $e && (yn = +$e[1])));
    ku.exports = yn;
  });
  var $i = c((IW, Vu) => {
    var Uu = Gu(),
      Vb = zt();
    Vu.exports =
      !!Object.getOwnPropertySymbols &&
      !Vb(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Uu && Uu < 41)
        );
      });
  });
  var Qi = c((wW, Wu) => {
    var Wb = $i();
    Wu.exports = Wb && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Zi = c((OW, Hu) => {
    var Hb = ye(),
      Xb = Sr(),
      Bb = at(),
      jb = Cu(),
      zb = Qi(),
      Kb = Hb.Object;
    Hu.exports = zb
      ? function (e) {
        return typeof e == "symbol";
      }
      : function (e) {
        var t = Xb("Symbol");
        return Bb(t) && jb(t.prototype, Kb(e));
      };
  });
  var Bu = c((xW, Xu) => {
    var Yb = ye(),
      $b = Yb.String;
    Xu.exports = function (e) {
      try {
        return $b(e);
      } catch {
        return "Object";
      }
    };
  });
  var zu = c((AW, ju) => {
    var Qb = ye(),
      Zb = at(),
      Jb = Bu(),
      eT = Qb.TypeError;
    ju.exports = function (e) {
      if (Zb(e)) return e;
      throw eT(Jb(e) + " is not a function");
    };
  });
  var Yu = c((SW, Ku) => {
    var tT = zu();
    Ku.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : tT(r);
    };
  });
  var Qu = c((RW, $u) => {
    var rT = ye(),
      Ji = mn(),
      eo = at(),
      to = Kt(),
      nT = rT.TypeError;
    $u.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && eo((r = e.toString)) && !to((n = Ji(r, e)))) ||
        (eo((r = e.valueOf)) && !to((n = Ji(r, e)))) ||
        (t !== "string" && eo((r = e.toString)) && !to((n = Ji(r, e))))
      )
        return n;
      throw nT("Can't convert object to primitive value");
    };
  });
  var Ju = c((CW, Zu) => {
    Zu.exports = !1;
  });
  var En = c((LW, tc) => {
    var ec = ye(),
      iT = Object.defineProperty;
    tc.exports = function (e, t) {
      try {
        iT(ec, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        ec[e] = t;
      }
      return t;
    };
  });
  var _n = c((NW, nc) => {
    var oT = ye(),
      aT = En(),
      rc = "__core-js_shared__",
      sT = oT[rc] || aT(rc, {});
    nc.exports = sT;
  });
  var ro = c((PW, oc) => {
    var uT = Ju(),
      ic = _n();
    (oc.exports = function (e, t) {
      return ic[e] || (ic[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: uT ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var sc = c((MW, ac) => {
    var cT = ye(),
      lT = zi(),
      fT = cT.Object;
    ac.exports = function (e) {
      return fT(lT(e));
    };
  });
  var bt = c((qW, uc) => {
    var dT = Ye(),
      pT = sc(),
      vT = dT({}.hasOwnProperty);
    uc.exports =
      Object.hasOwn ||
      function (t, r) {
        return vT(pT(t), r);
      };
  });
  var no = c((DW, cc) => {
    var gT = Ye(),
      hT = 0,
      mT = Math.random(),
      yT = gT((1).toString);
    cc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + yT(++hT + mT, 36);
    };
  });
  var io = c((FW, vc) => {
    var ET = ye(),
      _T = ro(),
      lc = bt(),
      bT = no(),
      fc = $i(),
      pc = Qi(),
      Yt = _T("wks"),
      Pt = ET.Symbol,
      dc = Pt && Pt.for,
      TT = pc ? Pt : (Pt && Pt.withoutSetter) || bT;
    vc.exports = function (e) {
      if (!lc(Yt, e) || !(fc || typeof Yt[e] == "string")) {
        var t = "Symbol." + e;
        fc && lc(Pt, e)
          ? (Yt[e] = Pt[e])
          : pc && dc
            ? (Yt[e] = dc(t))
            : (Yt[e] = TT(t));
      }
      return Yt[e];
    };
  });
  var yc = c((kW, mc) => {
    var IT = ye(),
      wT = mn(),
      gc = Kt(),
      hc = Zi(),
      OT = Yu(),
      xT = Qu(),
      AT = io(),
      ST = IT.TypeError,
      RT = AT("toPrimitive");
    mc.exports = function (e, t) {
      if (!gc(e) || hc(e)) return e;
      var r = OT(e, RT),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = wT(r, e, t)), !gc(n) || hc(n))
        )
          return n;
        throw ST("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), xT(e, t);
    };
  });
  var oo = c((GW, Ec) => {
    var CT = yc(),
      LT = Zi();
    Ec.exports = function (e) {
      var t = CT(e, "string");
      return LT(t) ? t : t + "";
    };
  });
  var so = c((UW, bc) => {
    var NT = ye(),
      _c = Kt(),
      ao = NT.document,
      PT = _c(ao) && _c(ao.createElement);
    bc.exports = function (e) {
      return PT ? ao.createElement(e) : {};
    };
  });
  var uo = c((VW, Tc) => {
    var MT = Nt(),
      qT = zt(),
      DT = so();
    Tc.exports =
      !MT &&
      !qT(function () {
        return (
          Object.defineProperty(DT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var co = c((wc) => {
    var FT = Nt(),
      kT = mn(),
      GT = gu(),
      UT = Hi(),
      VT = Ar(),
      WT = oo(),
      HT = bt(),
      XT = uo(),
      Ic = Object.getOwnPropertyDescriptor;
    wc.f = FT
      ? Ic
      : function (t, r) {
        if (((t = VT(t)), (r = WT(r)), XT))
          try {
            return Ic(t, r);
          } catch { }
        if (HT(t, r)) return UT(!kT(GT.f, t, r), t[r]);
      };
  });
  var Rr = c((HW, xc) => {
    var Oc = ye(),
      BT = Kt(),
      jT = Oc.String,
      zT = Oc.TypeError;
    xc.exports = function (e) {
      if (BT(e)) return e;
      throw zT(jT(e) + " is not an object");
    };
  });
  var Cr = c((Rc) => {
    var KT = ye(),
      YT = Nt(),
      $T = uo(),
      Ac = Rr(),
      QT = oo(),
      ZT = KT.TypeError,
      Sc = Object.defineProperty;
    Rc.f = YT
      ? Sc
      : function (t, r, n) {
        if ((Ac(t), (r = QT(r)), Ac(n), $T))
          try {
            return Sc(t, r, n);
          } catch { }
        if ("get" in n || "set" in n) throw ZT("Accessors not supported");
        return "value" in n && (t[r] = n.value), t;
      };
  });
  var bn = c((BW, Cc) => {
    var JT = Nt(),
      eI = Cr(),
      tI = Hi();
    Cc.exports = JT
      ? function (e, t, r) {
        return eI.f(e, t, tI(1, r));
      }
      : function (e, t, r) {
        return (e[t] = r), e;
      };
  });
  var fo = c((jW, Lc) => {
    var rI = Ye(),
      nI = at(),
      lo = _n(),
      iI = rI(Function.toString);
    nI(lo.inspectSource) ||
      (lo.inspectSource = function (e) {
        return iI(e);
      });
    Lc.exports = lo.inspectSource;
  });
  var Mc = c((zW, Pc) => {
    var oI = ye(),
      aI = at(),
      sI = fo(),
      Nc = oI.WeakMap;
    Pc.exports = aI(Nc) && /native code/.test(sI(Nc));
  });
  var po = c((KW, Dc) => {
    var uI = ro(),
      cI = no(),
      qc = uI("keys");
    Dc.exports = function (e) {
      return qc[e] || (qc[e] = cI(e));
    };
  });
  var Tn = c((YW, Fc) => {
    Fc.exports = {};
  });
  var Hc = c(($W, Wc) => {
    var lI = Mc(),
      Vc = ye(),
      vo = Ye(),
      fI = Kt(),
      dI = bn(),
      go = bt(),
      ho = _n(),
      pI = po(),
      vI = Tn(),
      kc = "Object already initialized",
      yo = Vc.TypeError,
      gI = Vc.WeakMap,
      In,
      Lr,
      wn,
      hI = function (e) {
        return wn(e) ? Lr(e) : In(e, {});
      },
      mI = function (e) {
        return function (t) {
          var r;
          if (!fI(t) || (r = Lr(t)).type !== e)
            throw yo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    lI || ho.state
      ? ((Tt = ho.state || (ho.state = new gI())),
        (Gc = vo(Tt.get)),
        (mo = vo(Tt.has)),
        (Uc = vo(Tt.set)),
        (In = function (e, t) {
          if (mo(Tt, e)) throw new yo(kc);
          return (t.facade = e), Uc(Tt, e, t), t;
        }),
        (Lr = function (e) {
          return Gc(Tt, e) || {};
        }),
        (wn = function (e) {
          return mo(Tt, e);
        }))
      : ((Mt = pI("state")),
        (vI[Mt] = !0),
        (In = function (e, t) {
          if (go(e, Mt)) throw new yo(kc);
          return (t.facade = e), dI(e, Mt, t), t;
        }),
        (Lr = function (e) {
          return go(e, Mt) ? e[Mt] : {};
        }),
        (wn = function (e) {
          return go(e, Mt);
        }));
    var Tt, Gc, mo, Uc, Mt;
    Wc.exports = { set: In, get: Lr, has: wn, enforce: hI, getterFor: mI };
  });
  var jc = c((QW, Bc) => {
    var Eo = Nt(),
      yI = bt(),
      Xc = Function.prototype,
      EI = Eo && Object.getOwnPropertyDescriptor,
      _o = yI(Xc, "name"),
      _I = _o && function () { }.name === "something",
      bI = _o && (!Eo || (Eo && EI(Xc, "name").configurable));
    Bc.exports = { EXISTS: _o, PROPER: _I, CONFIGURABLE: bI };
  });
  var Qc = c((ZW, $c) => {
    var TI = ye(),
      zc = at(),
      II = bt(),
      Kc = bn(),
      wI = En(),
      OI = fo(),
      Yc = Hc(),
      xI = jc().CONFIGURABLE,
      AI = Yc.get,
      SI = Yc.enforce,
      RI = String(String).split("String");
    ($c.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        u;
      if (
        (zc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!II(r, "name") || (xI && r.name !== s)) && Kc(r, "name", s),
            (u = SI(r)),
            u.source || (u.source = RI.join(typeof s == "string" ? s : ""))),
          e === TI)
      ) {
        o ? (e[t] = r) : wI(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Kc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (zc(this) && AI(this).source) || OI(this);
    });
  });
  var bo = c((JW, Zc) => {
    var CI = Math.ceil,
      LI = Math.floor;
    Zc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? LI : CI)(t);
    };
  });
  var el = c((eH, Jc) => {
    var NI = bo(),
      PI = Math.max,
      MI = Math.min;
    Jc.exports = function (e, t) {
      var r = NI(e);
      return r < 0 ? PI(r + t, 0) : MI(r, t);
    };
  });
  var rl = c((tH, tl) => {
    var qI = bo(),
      DI = Math.min;
    tl.exports = function (e) {
      return e > 0 ? DI(qI(e), 9007199254740991) : 0;
    };
  });
  var il = c((rH, nl) => {
    var FI = rl();
    nl.exports = function (e) {
      return FI(e.length);
    };
  });
  var To = c((nH, al) => {
    var kI = Ar(),
      GI = el(),
      UI = il(),
      ol = function (e) {
        return function (t, r, n) {
          var i = kI(t),
            o = UI(i),
            a = GI(n, o),
            s;
          if (e && r != r) {
            for (; o > a;) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    al.exports = { includes: ol(!0), indexOf: ol(!1) };
  });
  var wo = c((iH, ul) => {
    var VI = Ye(),
      Io = bt(),
      WI = Ar(),
      HI = To().indexOf,
      XI = Tn(),
      sl = VI([].push);
    ul.exports = function (e, t) {
      var r = WI(e),
        n = 0,
        i = [],
        o;
      for (o in r) !Io(XI, o) && Io(r, o) && sl(i, o);
      for (; t.length > n;) Io(r, (o = t[n++])) && (~HI(i, o) || sl(i, o));
      return i;
    };
  });
  var On = c((oH, cl) => {
    cl.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var fl = c((ll) => {
    var BI = wo(),
      jI = On(),
      zI = jI.concat("length", "prototype");
    ll.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return BI(t, zI);
      };
  });
  var pl = c((dl) => {
    dl.f = Object.getOwnPropertySymbols;
  });
  var gl = c((uH, vl) => {
    var KI = Sr(),
      YI = Ye(),
      $I = fl(),
      QI = pl(),
      ZI = Rr(),
      JI = YI([].concat);
    vl.exports =
      KI("Reflect", "ownKeys") ||
      function (t) {
        var r = $I.f(ZI(t)),
          n = QI.f;
        return n ? JI(r, n(t)) : r;
      };
  });
  var ml = c((cH, hl) => {
    var ew = bt(),
      tw = gl(),
      rw = co(),
      nw = Cr();
    hl.exports = function (e, t) {
      for (var r = tw(t), n = nw.f, i = rw.f, o = 0; o < r.length; o++) {
        var a = r[o];
        ew(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var El = c((lH, yl) => {
    var iw = zt(),
      ow = at(),
      aw = /#|\.prototype\./,
      Nr = function (e, t) {
        var r = uw[sw(e)];
        return r == lw ? !0 : r == cw ? !1 : ow(t) ? iw(t) : !!t;
      },
      sw = (Nr.normalize = function (e) {
        return String(e).replace(aw, ".").toLowerCase();
      }),
      uw = (Nr.data = {}),
      cw = (Nr.NATIVE = "N"),
      lw = (Nr.POLYFILL = "P");
    yl.exports = Nr;
  });
  var bl = c((fH, _l) => {
    var Oo = ye(),
      fw = co().f,
      dw = bn(),
      pw = Qc(),
      vw = En(),
      gw = ml(),
      hw = El();
    _l.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        u,
        d,
        m;
      if (
        (n
          ? (a = Oo)
          : i
            ? (a = Oo[r] || vw(r, {}))
            : (a = (Oo[r] || {}).prototype),
          a)
      )
        for (s in t) {
          if (
            ((d = t[s]),
              e.noTargetGet ? ((m = fw(a, s)), (u = m && m.value)) : (u = a[s]),
              (o = hw(n ? s : r + (i ? "." : "#") + s, e.forced)),
              !o && u !== void 0)
          ) {
            if (typeof d == typeof u) continue;
            gw(d, u);
          }
          (e.sham || (u && u.sham)) && dw(d, "sham", !0), pw(a, s, d, e);
        }
    };
  });
  var Il = c((dH, Tl) => {
    var mw = wo(),
      yw = On();
    Tl.exports =
      Object.keys ||
      function (t) {
        return mw(t, yw);
      };
  });
  var Ol = c((pH, wl) => {
    var Ew = Nt(),
      _w = Cr(),
      bw = Rr(),
      Tw = Ar(),
      Iw = Il();
    wl.exports = Ew
      ? Object.defineProperties
      : function (t, r) {
        bw(t);
        for (var n = Tw(r), i = Iw(r), o = i.length, a = 0, s; o > a;)
          _w.f(t, (s = i[a++]), n[s]);
        return t;
      };
  });
  var Al = c((vH, xl) => {
    var ww = Sr();
    xl.exports = ww("document", "documentElement");
  });
  var ql = c((gH, Ml) => {
    var Ow = Rr(),
      xw = Ol(),
      Sl = On(),
      Aw = Tn(),
      Sw = Al(),
      Rw = so(),
      Cw = po(),
      Rl = ">",
      Cl = "<",
      Ao = "prototype",
      So = "script",
      Nl = Cw("IE_PROTO"),
      xo = function () { },
      Pl = function (e) {
        return Cl + So + Rl + e + Cl + "/" + So + Rl;
      },
      Ll = function (e) {
        e.write(Pl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      Lw = function () {
        var e = Rw("iframe"),
          t = "java" + So + ":",
          r;
        return (
          (e.style.display = "none"),
          Sw.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Pl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      xn,
      An = function () {
        try {
          xn = new ActiveXObject("htmlfile");
        } catch { }
        An =
          typeof document < "u"
            ? document.domain && xn
              ? Ll(xn)
              : Lw()
            : Ll(xn);
        for (var e = Sl.length; e--;) delete An[Ao][Sl[e]];
        return An();
      };
    Aw[Nl] = !0;
    Ml.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((xo[Ao] = Ow(t)), (n = new xo()), (xo[Ao] = null), (n[Nl] = t))
            : (n = An()),
          r === void 0 ? n : xw(n, r)
        );
      };
  });
  var Fl = c((hH, Dl) => {
    var Nw = io(),
      Pw = ql(),
      Mw = Cr(),
      Ro = Nw("unscopables"),
      Co = Array.prototype;
    Co[Ro] == null && Mw.f(Co, Ro, { configurable: !0, value: Pw(null) });
    Dl.exports = function (e) {
      Co[Ro][e] = !0;
    };
  });
  var kl = c(() => {
    "use strict";
    var qw = bl(),
      Dw = To().includes,
      Fw = Fl();
    qw(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return Dw(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    Fw("includes");
  });
  var Ul = c((EH, Gl) => {
    var kw = ye(),
      Gw = Ye();
    Gl.exports = function (e, t) {
      return Gw(kw[e].prototype[t]);
    };
  });
  var Wl = c((_H, Vl) => {
    kl();
    var Uw = Ul();
    Vl.exports = Uw("Array", "includes");
  });
  var Xl = c((bH, Hl) => {
    var Vw = Wl();
    Hl.exports = Vw;
  });
  var jl = c((TH, Bl) => {
    var Ww = Xl();
    Bl.exports = Ww;
  });
  var Lo = c((IH, zl) => {
    var Hw =
      typeof global == "object" && global && global.Object === Object && global;
    zl.exports = Hw;
  });
  var Qe = c((wH, Kl) => {
    var Xw = Lo(),
      Bw = typeof self == "object" && self && self.Object === Object && self,
      jw = Xw || Bw || Function("return this")();
    Kl.exports = jw;
  });
  var $t = c((OH, Yl) => {
    var zw = Qe(),
      Kw = zw.Symbol;
    Yl.exports = Kw;
  });
  var Jl = c((xH, Zl) => {
    var $l = $t(),
      Ql = Object.prototype,
      Yw = Ql.hasOwnProperty,
      $w = Ql.toString,
      Pr = $l ? $l.toStringTag : void 0;
    function Qw(e) {
      var t = Yw.call(e, Pr),
        r = e[Pr];
      try {
        e[Pr] = void 0;
        var n = !0;
      } catch { }
      var i = $w.call(e);
      return n && (t ? (e[Pr] = r) : delete e[Pr]), i;
    }
    Zl.exports = Qw;
  });
  var tf = c((AH, ef) => {
    var Zw = Object.prototype,
      Jw = Zw.toString;
    function eO(e) {
      return Jw.call(e);
    }
    ef.exports = eO;
  });
  var It = c((SH, of) => {
    var rf = $t(),
      tO = Jl(),
      rO = tf(),
      nO = "[object Null]",
      iO = "[object Undefined]",
      nf = rf ? rf.toStringTag : void 0;
    function oO(e) {
      return e == null
        ? e === void 0
          ? iO
          : nO
        : nf && nf in Object(e)
          ? tO(e)
          : rO(e);
    }
    of.exports = oO;
  });
  var No = c((RH, af) => {
    function aO(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    af.exports = aO;
  });
  var Po = c((CH, sf) => {
    var sO = No(),
      uO = sO(Object.getPrototypeOf, Object);
    sf.exports = uO;
  });
  var vt = c((LH, uf) => {
    function cO(e) {
      return e != null && typeof e == "object";
    }
    uf.exports = cO;
  });
  var Mo = c((NH, lf) => {
    var lO = It(),
      fO = Po(),
      dO = vt(),
      pO = "[object Object]",
      vO = Function.prototype,
      gO = Object.prototype,
      cf = vO.toString,
      hO = gO.hasOwnProperty,
      mO = cf.call(Object);
    function yO(e) {
      if (!dO(e) || lO(e) != pO) return !1;
      var t = fO(e);
      if (t === null) return !0;
      var r = hO.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && cf.call(r) == mO;
    }
    lf.exports = yO;
  });
  var ff = c((qo) => {
    "use strict";
    Object.defineProperty(qo, "__esModule", { value: !0 });
    qo.default = EO;
    function EO(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var df = c((Fo, Do) => {
    "use strict";
    Object.defineProperty(Fo, "__esModule", { value: !0 });
    var _O = ff(),
      bO = TO(_O);
    function TO(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Qt;
    typeof self < "u"
      ? (Qt = self)
      : typeof window < "u"
        ? (Qt = window)
        : typeof global < "u"
          ? (Qt = global)
          : typeof Do < "u"
            ? (Qt = Do)
            : (Qt = Function("return this")());
    var IO = (0, bO.default)(Qt);
    Fo.default = IO;
  });
  var ko = c((Mr) => {
    "use strict";
    Mr.__esModule = !0;
    Mr.ActionTypes = void 0;
    Mr.default = hf;
    var wO = Mo(),
      OO = gf(wO),
      xO = df(),
      pf = gf(xO);
    function gf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var vf = (Mr.ActionTypes = { INIT: "@@redux/INIT" });
    function hf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
          typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(hf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function d() {
        s === a && (s = a.slice());
      }
      function m() {
        return o;
      }
      function v(O) {
        if (typeof O != "function")
          throw new Error("Expected listener to be a function.");
        var q = !0;
        return (
          d(),
          s.push(O),
          function () {
            if (q) {
              (q = !1), d();
              var E = s.indexOf(O);
              s.splice(E, 1);
            }
          }
        );
      }
      function y(O) {
        if (!(0, OO.default)(O))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof O.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, O));
        } finally {
          u = !1;
        }
        for (var q = (a = s), x = 0; x < q.length; x++) q[x]();
        return O;
      }
      function _(O) {
        if (typeof O != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = O), y({ type: vf.INIT });
      }
      function b() {
        var O,
          q = v;
        return (
          (O = {
            subscribe: function (E) {
              if (typeof E != "object")
                throw new TypeError("Expected the observer to be an object.");
              function C() {
                E.next && E.next(m());
              }
              C();
              var M = q(C);
              return { unsubscribe: M };
            },
          }),
          (O[pf.default] = function () {
            return this;
          }),
          O
        );
      }
      return (
        y({ type: vf.INIT }),
        (n = { dispatch: y, subscribe: v, getState: m, replaceReducer: _ }),
        (n[pf.default] = b),
        n
      );
    }
  });
  var Uo = c((Go) => {
    "use strict";
    Go.__esModule = !0;
    Go.default = AO;
    function AO(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch { }
    }
  });
  var Ef = c((Vo) => {
    "use strict";
    Vo.__esModule = !0;
    Vo.default = NO;
    var mf = ko(),
      SO = Mo(),
      DH = yf(SO),
      RO = Uo(),
      FH = yf(RO);
    function yf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function CO(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function LO(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: mf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
            t +
            '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
            t +
            '" returned undefined when probed with a random type. ' +
            ("Don't try to handle " +
              mf.ActionTypes.INIT +
              ' or other actions in "redux/*" ') +
            "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function NO(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        LO(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var d =
          arguments.length <= 0 || arguments[0] === void 0
            ? {}
            : arguments[0],
          m = arguments[1];
        if (s) throw s;
        if (!1) var v;
        for (var y = !1, _ = {}, b = 0; b < o.length; b++) {
          var O = o[b],
            q = r[O],
            x = d[O],
            E = q(x, m);
          if (typeof E > "u") {
            var C = CO(O, m);
            throw new Error(C);
          }
          (_[O] = E), (y = y || E !== x);
        }
        return y ? _ : d;
      };
    }
  });
  var bf = c((Wo) => {
    "use strict";
    Wo.__esModule = !0;
    Wo.default = PO;
    function _f(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function PO(e, t) {
      if (typeof e == "function") return _f(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
          (e === null ? "null" : typeof e) +
          '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = _f(a, t));
      }
      return n;
    }
  });
  var Xo = c((Ho) => {
    "use strict";
    Ho.__esModule = !0;
    Ho.default = MO;
    function MO() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var Tf = c((Bo) => {
    "use strict";
    Bo.__esModule = !0;
    var qO =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Bo.default = GO;
    var DO = Xo(),
      FO = kO(DO);
    function kO(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function GO() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            u = s.dispatch,
            d = [],
            m = {
              getState: s.getState,
              dispatch: function (y) {
                return u(y);
              },
            };
          return (
            (d = t.map(function (v) {
              return v(m);
            })),
            (u = FO.default.apply(void 0, d)(s.dispatch)),
            qO({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var jo = c((We) => {
    "use strict";
    We.__esModule = !0;
    We.compose =
      We.applyMiddleware =
      We.bindActionCreators =
      We.combineReducers =
      We.createStore =
      void 0;
    var UO = ko(),
      VO = Zt(UO),
      WO = Ef(),
      HO = Zt(WO),
      XO = bf(),
      BO = Zt(XO),
      jO = Tf(),
      zO = Zt(jO),
      KO = Xo(),
      YO = Zt(KO),
      $O = Uo(),
      WH = Zt($O);
    function Zt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    We.createStore = VO.default;
    We.combineReducers = HO.default;
    We.bindActionCreators = BO.default;
    We.applyMiddleware = zO.default;
    We.compose = YO.default;
  });
  var Ze,
    zo,
    st,
    QO,
    ZO,
    Ko,
    JO,
    If = me(() => {
      "use strict";
      (Ze = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (zo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (st = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (QO = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (ZO = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (Ko = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (JO = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var He,
    ex,
    Yo = me(() => {
      "use strict";
      (He = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (ex = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var tx,
    wf = me(() => {
      "use strict";
      tx = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var rx,
    nx,
    ix,
    ox,
    ax,
    sx,
    ux,
    $o,
    Of = me(() => {
      "use strict";
      Yo();
      ({
        TRANSFORM_MOVE: rx,
        TRANSFORM_SCALE: nx,
        TRANSFORM_ROTATE: ix,
        TRANSFORM_SKEW: ox,
        STYLE_SIZE: ax,
        STYLE_FILTER: sx,
        STYLE_FONT_VARIATION: ux,
      } = He),
        ($o = {
          [rx]: !0,
          [nx]: !0,
          [ix]: !0,
          [ox]: !0,
          [ax]: !0,
          [sx]: !0,
          [ux]: !0,
        });
    });
  var Ie = {};
  ke(Ie, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => Ox,
    IX2_ANIMATION_FRAME_CHANGED: () => Ex,
    IX2_CLEAR_REQUESTED: () => hx,
    IX2_ELEMENT_STATE_CHANGED: () => wx,
    IX2_EVENT_LISTENER_ADDED: () => mx,
    IX2_EVENT_STATE_CHANGED: () => yx,
    IX2_INSTANCE_ADDED: () => bx,
    IX2_INSTANCE_REMOVED: () => Ix,
    IX2_INSTANCE_STARTED: () => Tx,
    IX2_MEDIA_QUERIES_DEFINED: () => Ax,
    IX2_PARAMETER_CHANGED: () => _x,
    IX2_PLAYBACK_REQUESTED: () => vx,
    IX2_PREVIEW_REQUESTED: () => px,
    IX2_RAW_DATA_IMPORTED: () => cx,
    IX2_SESSION_INITIALIZED: () => lx,
    IX2_SESSION_STARTED: () => fx,
    IX2_SESSION_STOPPED: () => dx,
    IX2_STOP_REQUESTED: () => gx,
    IX2_TEST_FRAME_RENDERED: () => Sx,
    IX2_VIEWPORT_WIDTH_CHANGED: () => xx,
  });
  var cx,
    lx,
    fx,
    dx,
    px,
    vx,
    gx,
    hx,
    mx,
    yx,
    Ex,
    _x,
    bx,
    Tx,
    Ix,
    wx,
    Ox,
    xx,
    Ax,
    Sx,
    xf = me(() => {
      "use strict";
      (cx = "IX2_RAW_DATA_IMPORTED"),
        (lx = "IX2_SESSION_INITIALIZED"),
        (fx = "IX2_SESSION_STARTED"),
        (dx = "IX2_SESSION_STOPPED"),
        (px = "IX2_PREVIEW_REQUESTED"),
        (vx = "IX2_PLAYBACK_REQUESTED"),
        (gx = "IX2_STOP_REQUESTED"),
        (hx = "IX2_CLEAR_REQUESTED"),
        (mx = "IX2_EVENT_LISTENER_ADDED"),
        (yx = "IX2_EVENT_STATE_CHANGED"),
        (Ex = "IX2_ANIMATION_FRAME_CHANGED"),
        (_x = "IX2_PARAMETER_CHANGED"),
        (bx = "IX2_INSTANCE_ADDED"),
        (Tx = "IX2_INSTANCE_STARTED"),
        (Ix = "IX2_INSTANCE_REMOVED"),
        (wx = "IX2_ELEMENT_STATE_CHANGED"),
        (Ox = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (xx = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (Ax = "IX2_MEDIA_QUERIES_DEFINED"),
        (Sx = "IX2_TEST_FRAME_RENDERED");
    });
  var Ce = {};
  ke(Ce, {
    ABSTRACT_NODE: () => xA,
    AUTO: () => gA,
    BACKGROUND: () => cA,
    BACKGROUND_COLOR: () => uA,
    BAR_DELIMITER: () => yA,
    BORDER_COLOR: () => lA,
    BOUNDARY_SELECTOR: () => Px,
    CHILDREN: () => EA,
    COLON_DELIMITER: () => mA,
    COLOR: () => fA,
    COMMA_DELIMITER: () => hA,
    CONFIG_UNIT: () => Vx,
    CONFIG_VALUE: () => Fx,
    CONFIG_X_UNIT: () => kx,
    CONFIG_X_VALUE: () => Mx,
    CONFIG_Y_UNIT: () => Gx,
    CONFIG_Y_VALUE: () => qx,
    CONFIG_Z_UNIT: () => Ux,
    CONFIG_Z_VALUE: () => Dx,
    DISPLAY: () => dA,
    FILTER: () => iA,
    FLEX: () => pA,
    FONT_VARIATION_SETTINGS: () => oA,
    HEIGHT: () => sA,
    HTML_ELEMENT: () => wA,
    IMMEDIATE_CHILDREN: () => _A,
    IX2_ID_DELIMITER: () => Rx,
    OPACITY: () => nA,
    PARENT: () => TA,
    PLAIN_OBJECT: () => OA,
    PRESERVE_3D: () => IA,
    RENDER_GENERAL: () => SA,
    RENDER_PLUGIN: () => CA,
    RENDER_STYLE: () => RA,
    RENDER_TRANSFORM: () => AA,
    ROTATE_X: () => Qx,
    ROTATE_Y: () => Zx,
    ROTATE_Z: () => Jx,
    SCALE_3D: () => $x,
    SCALE_X: () => zx,
    SCALE_Y: () => Kx,
    SCALE_Z: () => Yx,
    SIBLINGS: () => bA,
    SKEW: () => eA,
    SKEW_X: () => tA,
    SKEW_Y: () => rA,
    TRANSFORM: () => Wx,
    TRANSLATE_3D: () => jx,
    TRANSLATE_X: () => Hx,
    TRANSLATE_Y: () => Xx,
    TRANSLATE_Z: () => Bx,
    WF_PAGE: () => Cx,
    WIDTH: () => aA,
    WILL_CHANGE: () => vA,
    W_MOD_IX: () => Nx,
    W_MOD_JS: () => Lx,
  });
  var Rx,
    Cx,
    Lx,
    Nx,
    Px,
    Mx,
    qx,
    Dx,
    Fx,
    kx,
    Gx,
    Ux,
    Vx,
    Wx,
    Hx,
    Xx,
    Bx,
    jx,
    zx,
    Kx,
    Yx,
    $x,
    Qx,
    Zx,
    Jx,
    eA,
    tA,
    rA,
    nA,
    iA,
    oA,
    aA,
    sA,
    uA,
    cA,
    lA,
    fA,
    dA,
    pA,
    vA,
    gA,
    hA,
    mA,
    yA,
    EA,
    _A,
    bA,
    TA,
    IA,
    wA,
    OA,
    xA,
    AA,
    SA,
    RA,
    CA,
    Af = me(() => {
      "use strict";
      (Rx = "|"),
        (Cx = "data-wf-page"),
        (Lx = "w-mod-js"),
        (Nx = "w-mod-ix"),
        (Px = ".w-dyn-item"),
        (Mx = "xValue"),
        (qx = "yValue"),
        (Dx = "zValue"),
        (Fx = "value"),
        (kx = "xUnit"),
        (Gx = "yUnit"),
        (Ux = "zUnit"),
        (Vx = "unit"),
        (Wx = "transform"),
        (Hx = "translateX"),
        (Xx = "translateY"),
        (Bx = "translateZ"),
        (jx = "translate3d"),
        (zx = "scaleX"),
        (Kx = "scaleY"),
        (Yx = "scaleZ"),
        ($x = "scale3d"),
        (Qx = "rotateX"),
        (Zx = "rotateY"),
        (Jx = "rotateZ"),
        (eA = "skew"),
        (tA = "skewX"),
        (rA = "skewY"),
        (nA = "opacity"),
        (iA = "filter"),
        (oA = "font-variation-settings"),
        (aA = "width"),
        (sA = "height"),
        (uA = "backgroundColor"),
        (cA = "background"),
        (lA = "borderColor"),
        (fA = "color"),
        (dA = "display"),
        (pA = "flex"),
        (vA = "willChange"),
        (gA = "AUTO"),
        (hA = ","),
        (mA = ":"),
        (yA = "|"),
        (EA = "CHILDREN"),
        (_A = "IMMEDIATE_CHILDREN"),
        (bA = "SIBLINGS"),
        (TA = "PARENT"),
        (IA = "preserve-3d"),
        (wA = "HTML_ELEMENT"),
        (OA = "PLAIN_OBJECT"),
        (xA = "ABSTRACT_NODE"),
        (AA = "RENDER_TRANSFORM"),
        (SA = "RENDER_GENERAL"),
        (RA = "RENDER_STYLE"),
        (CA = "RENDER_PLUGIN");
    });
  var Sf = {};
  ke(Sf, {
    ActionAppliesTo: () => ex,
    ActionTypeConsts: () => He,
    EventAppliesTo: () => zo,
    EventBasedOn: () => st,
    EventContinuousMouseAxes: () => QO,
    EventLimitAffectedElements: () => ZO,
    EventTypeConsts: () => Ze,
    IX2EngineActionTypes: () => Ie,
    IX2EngineConstants: () => Ce,
    InteractionTypeConsts: () => tx,
    QuickEffectDirectionConsts: () => JO,
    QuickEffectIds: () => Ko,
    ReducedMotionTypes: () => $o,
  });
  var Ge = me(() => {
    "use strict";
    If();
    Yo();
    wf();
    Of();
    xf();
    Af();
  });
  var LA,
    Rf,
    Cf = me(() => {
      "use strict";
      Ge();
      ({ IX2_RAW_DATA_IMPORTED: LA } = Ie),
        (Rf = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case LA:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Jt = c((_e) => {
    "use strict";
    Object.defineProperty(_e, "__esModule", { value: !0 });
    var NA =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
          return typeof e;
        }
        : function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        };
    _e.clone = Rn;
    _e.addLast = Pf;
    _e.addFirst = Mf;
    _e.removeLast = qf;
    _e.removeFirst = Df;
    _e.insert = Ff;
    _e.removeAt = kf;
    _e.replaceAt = Gf;
    _e.getIn = Cn;
    _e.set = Ln;
    _e.setIn = Nn;
    _e.update = Vf;
    _e.updateIn = Wf;
    _e.merge = Hf;
    _e.mergeDeep = Xf;
    _e.mergeIn = Bf;
    _e.omit = jf;
    _e.addDefaults = zf;
    var Lf = "INVALID_ARGS";
    function Nf(e) {
      throw new Error(e);
    }
    function Qo(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var PA = {}.hasOwnProperty;
    function Rn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Qo(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Ue(e, t, r) {
      var n = r;
      n == null && Nf(Lf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var d = a[u];
        if (d != null) {
          var m = Qo(d);
          if (m.length)
            for (var v = 0; v <= m.length; v++) {
              var y = m[v];
              if (!(e && n[y] !== void 0)) {
                var _ = d[y];
                t && Sn(n[y]) && Sn(_) && (_ = Ue(e, t, n[y], _)),
                  !(_ === void 0 || _ === n[y]) &&
                  (i || ((i = !0), (n = Rn(n))), (n[y] = _));
              }
            }
        }
      }
      return n;
    }
    function Sn(e) {
      var t = typeof e > "u" ? "undefined" : NA(e);
      return e != null && (t === "object" || t === "function");
    }
    function Pf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Mf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function qf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Df(e) {
      return e.length ? e.slice(1) : e;
    }
    function Ff(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function kf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Gf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Cn(e, t) {
      if ((!Array.isArray(t) && Nf(Lf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Ln(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Rn(i);
      return (o[t] = r), o;
    }
    function Uf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          Sn(e) && Sn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Uf(a, t, r, n + 1);
      }
      return Ln(e, o, i);
    }
    function Nn(e, t, r) {
      return t.length ? Uf(e, t, r, 0) : r;
    }
    function Vf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Ln(e, t, i);
    }
    function Wf(e, t, r) {
      var n = Cn(e, t),
        i = r(n);
      return Nn(e, t, i);
    }
    function Hf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ue.call.apply(Ue, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Ue(!1, !1, e, t, r, n, i, o);
    }
    function Xf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ue.call.apply(Ue, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Ue(!1, !0, e, t, r, n, i, o);
    }
    function Bf(e, t, r, n, i, o, a) {
      var s = Cn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
        d = arguments.length,
        m = Array(d > 7 ? d - 7 : 0),
        v = 7;
        v < d;
        v++
      )
        m[v - 7] = arguments[v];
      return (
        m.length
          ? (u = Ue.call.apply(Ue, [null, !1, !1, s, r, n, i, o, a].concat(m)))
          : (u = Ue(!1, !1, s, r, n, i, o, a)),
        Nn(e, t, u)
      );
    }
    function jf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (PA.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = Qo(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function zf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ue.call.apply(Ue, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Ue(!0, !1, e, t, r, n, i, o);
    }
    var MA = {
      clone: Rn,
      addLast: Pf,
      addFirst: Mf,
      removeLast: qf,
      removeFirst: Df,
      insert: Ff,
      removeAt: kf,
      replaceAt: Gf,
      getIn: Cn,
      set: Ln,
      setIn: Nn,
      update: Vf,
      updateIn: Wf,
      merge: Hf,
      mergeDeep: Xf,
      mergeIn: Bf,
      omit: jf,
      addDefaults: zf,
    };
    _e.default = MA;
  });
  var Yf,
    qA,
    DA,
    FA,
    kA,
    GA,
    Kf,
    $f,
    Qf = me(() => {
      "use strict";
      Ge();
      (Yf = fe(Jt())),
        ({
          IX2_PREVIEW_REQUESTED: qA,
          IX2_PLAYBACK_REQUESTED: DA,
          IX2_STOP_REQUESTED: FA,
          IX2_CLEAR_REQUESTED: kA,
        } = Ie),
        (GA = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Kf = Object.create(null, {
          [qA]: { value: "preview" },
          [DA]: { value: "playback" },
          [FA]: { value: "stop" },
          [kA]: { value: "clear" },
        })),
        ($f = (e = GA, t) => {
          if (t.type in Kf) {
            let r = [Kf[t.type]];
            return (0, Yf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Pe,
    UA,
    VA,
    WA,
    HA,
    XA,
    BA,
    jA,
    zA,
    KA,
    YA,
    Zf,
    $A,
    Jf,
    ed = me(() => {
      "use strict";
      Ge();
      (Pe = fe(Jt())),
        ({
          IX2_SESSION_INITIALIZED: UA,
          IX2_SESSION_STARTED: VA,
          IX2_TEST_FRAME_RENDERED: WA,
          IX2_SESSION_STOPPED: HA,
          IX2_EVENT_LISTENER_ADDED: XA,
          IX2_EVENT_STATE_CHANGED: BA,
          IX2_ANIMATION_FRAME_CHANGED: jA,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: zA,
          IX2_VIEWPORT_WIDTH_CHANGED: KA,
          IX2_MEDIA_QUERIES_DEFINED: YA,
        } = Ie),
        (Zf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        ($A = 20),
        (Jf = (e = Zf, t) => {
          switch (t.type) {
            case UA: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Pe.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case VA:
              return (0, Pe.set)(e, "active", !0);
            case WA: {
              let {
                payload: { step: r = $A },
              } = t;
              return (0, Pe.set)(e, "tick", e.tick + r);
            }
            case HA:
              return Zf;
            case jA: {
              let {
                payload: { now: r },
              } = t;
              return (0, Pe.set)(e, "tick", r);
            }
            case XA: {
              let r = (0, Pe.addLast)(e.eventListeners, t.payload);
              return (0, Pe.set)(e, "eventListeners", r);
            }
            case BA: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Pe.setIn)(e, ["eventState", r], n);
            }
            case zA: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Pe.setIn)(e, ["playbackState", r], n);
            }
            case KA: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: d } = n[a];
                if (r >= u && r <= d) {
                  o = s;
                  break;
                }
              }
              return (0, Pe.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case YA:
              return (0, Pe.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var rd = c((aX, td) => {
    function QA() {
      (this.__data__ = []), (this.size = 0);
    }
    td.exports = QA;
  });
  var Pn = c((sX, nd) => {
    function ZA(e, t) {
      return e === t || (e !== e && t !== t);
    }
    nd.exports = ZA;
  });
  var qr = c((uX, id) => {
    var JA = Pn();
    function eS(e, t) {
      for (var r = e.length; r--;) if (JA(e[r][0], t)) return r;
      return -1;
    }
    id.exports = eS;
  });
  var ad = c((cX, od) => {
    var tS = qr(),
      rS = Array.prototype,
      nS = rS.splice;
    function iS(e) {
      var t = this.__data__,
        r = tS(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : nS.call(t, r, 1), --this.size, !0;
    }
    od.exports = iS;
  });
  var ud = c((lX, sd) => {
    var oS = qr();
    function aS(e) {
      var t = this.__data__,
        r = oS(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    sd.exports = aS;
  });
  var ld = c((fX, cd) => {
    var sS = qr();
    function uS(e) {
      return sS(this.__data__, e) > -1;
    }
    cd.exports = uS;
  });
  var dd = c((dX, fd) => {
    var cS = qr();
    function lS(e, t) {
      var r = this.__data__,
        n = cS(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    fd.exports = lS;
  });
  var Dr = c((pX, pd) => {
    var fS = rd(),
      dS = ad(),
      pS = ud(),
      vS = ld(),
      gS = dd();
    function er(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    er.prototype.clear = fS;
    er.prototype.delete = dS;
    er.prototype.get = pS;
    er.prototype.has = vS;
    er.prototype.set = gS;
    pd.exports = er;
  });
  var gd = c((vX, vd) => {
    var hS = Dr();
    function mS() {
      (this.__data__ = new hS()), (this.size = 0);
    }
    vd.exports = mS;
  });
  var md = c((gX, hd) => {
    function yS(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    hd.exports = yS;
  });
  var Ed = c((hX, yd) => {
    function ES(e) {
      return this.__data__.get(e);
    }
    yd.exports = ES;
  });
  var bd = c((mX, _d) => {
    function _S(e) {
      return this.__data__.has(e);
    }
    _d.exports = _S;
  });
  var ut = c((yX, Td) => {
    function bS(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Td.exports = bS;
  });
  var Zo = c((EX, Id) => {
    var TS = It(),
      IS = ut(),
      wS = "[object AsyncFunction]",
      OS = "[object Function]",
      xS = "[object GeneratorFunction]",
      AS = "[object Proxy]";
    function SS(e) {
      if (!IS(e)) return !1;
      var t = TS(e);
      return t == OS || t == xS || t == wS || t == AS;
    }
    Id.exports = SS;
  });
  var Od = c((_X, wd) => {
    var RS = Qe(),
      CS = RS["__core-js_shared__"];
    wd.exports = CS;
  });
  var Sd = c((bX, Ad) => {
    var Jo = Od(),
      xd = (function () {
        var e = /[^.]+$/.exec((Jo && Jo.keys && Jo.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function LS(e) {
      return !!xd && xd in e;
    }
    Ad.exports = LS;
  });
  var ea = c((TX, Rd) => {
    var NS = Function.prototype,
      PS = NS.toString;
    function MS(e) {
      if (e != null) {
        try {
          return PS.call(e);
        } catch { }
        try {
          return e + "";
        } catch { }
      }
      return "";
    }
    Rd.exports = MS;
  });
  var Ld = c((IX, Cd) => {
    var qS = Zo(),
      DS = Sd(),
      FS = ut(),
      kS = ea(),
      GS = /[\\^$.*+?()[\]{}|]/g,
      US = /^\[object .+?Constructor\]$/,
      VS = Function.prototype,
      WS = Object.prototype,
      HS = VS.toString,
      XS = WS.hasOwnProperty,
      BS = RegExp(
        "^" +
        HS.call(XS)
          .replace(GS, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
      );
    function jS(e) {
      if (!FS(e) || DS(e)) return !1;
      var t = qS(e) ? BS : US;
      return t.test(kS(e));
    }
    Cd.exports = jS;
  });
  var Pd = c((wX, Nd) => {
    function zS(e, t) {
      return e?.[t];
    }
    Nd.exports = zS;
  });
  var wt = c((OX, Md) => {
    var KS = Ld(),
      YS = Pd();
    function $S(e, t) {
      var r = YS(e, t);
      return KS(r) ? r : void 0;
    }
    Md.exports = $S;
  });
  var Mn = c((xX, qd) => {
    var QS = wt(),
      ZS = Qe(),
      JS = QS(ZS, "Map");
    qd.exports = JS;
  });
  var Fr = c((AX, Dd) => {
    var e0 = wt(),
      t0 = e0(Object, "create");
    Dd.exports = t0;
  });
  var Gd = c((SX, kd) => {
    var Fd = Fr();
    function r0() {
      (this.__data__ = Fd ? Fd(null) : {}), (this.size = 0);
    }
    kd.exports = r0;
  });
  var Vd = c((RX, Ud) => {
    function n0(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Ud.exports = n0;
  });
  var Hd = c((CX, Wd) => {
    var i0 = Fr(),
      o0 = "__lodash_hash_undefined__",
      a0 = Object.prototype,
      s0 = a0.hasOwnProperty;
    function u0(e) {
      var t = this.__data__;
      if (i0) {
        var r = t[e];
        return r === o0 ? void 0 : r;
      }
      return s0.call(t, e) ? t[e] : void 0;
    }
    Wd.exports = u0;
  });
  var Bd = c((LX, Xd) => {
    var c0 = Fr(),
      l0 = Object.prototype,
      f0 = l0.hasOwnProperty;
    function d0(e) {
      var t = this.__data__;
      return c0 ? t[e] !== void 0 : f0.call(t, e);
    }
    Xd.exports = d0;
  });
  var zd = c((NX, jd) => {
    var p0 = Fr(),
      v0 = "__lodash_hash_undefined__";
    function g0(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = p0 && t === void 0 ? v0 : t),
        this
      );
    }
    jd.exports = g0;
  });
  var Yd = c((PX, Kd) => {
    var h0 = Gd(),
      m0 = Vd(),
      y0 = Hd(),
      E0 = Bd(),
      _0 = zd();
    function tr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    tr.prototype.clear = h0;
    tr.prototype.delete = m0;
    tr.prototype.get = y0;
    tr.prototype.has = E0;
    tr.prototype.set = _0;
    Kd.exports = tr;
  });
  var Zd = c((MX, Qd) => {
    var $d = Yd(),
      b0 = Dr(),
      T0 = Mn();
    function I0() {
      (this.size = 0),
        (this.__data__ = {
          hash: new $d(),
          map: new (T0 || b0)(),
          string: new $d(),
        });
    }
    Qd.exports = I0;
  });
  var ep = c((qX, Jd) => {
    function w0(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Jd.exports = w0;
  });
  var kr = c((DX, tp) => {
    var O0 = ep();
    function x0(e, t) {
      var r = e.__data__;
      return O0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    tp.exports = x0;
  });
  var np = c((FX, rp) => {
    var A0 = kr();
    function S0(e) {
      var t = A0(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    rp.exports = S0;
  });
  var op = c((kX, ip) => {
    var R0 = kr();
    function C0(e) {
      return R0(this, e).get(e);
    }
    ip.exports = C0;
  });
  var sp = c((GX, ap) => {
    var L0 = kr();
    function N0(e) {
      return L0(this, e).has(e);
    }
    ap.exports = N0;
  });
  var cp = c((UX, up) => {
    var P0 = kr();
    function M0(e, t) {
      var r = P0(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    up.exports = M0;
  });
  var qn = c((VX, lp) => {
    var q0 = Zd(),
      D0 = np(),
      F0 = op(),
      k0 = sp(),
      G0 = cp();
    function rr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    rr.prototype.clear = q0;
    rr.prototype.delete = D0;
    rr.prototype.get = F0;
    rr.prototype.has = k0;
    rr.prototype.set = G0;
    lp.exports = rr;
  });
  var dp = c((WX, fp) => {
    var U0 = Dr(),
      V0 = Mn(),
      W0 = qn(),
      H0 = 200;
    function X0(e, t) {
      var r = this.__data__;
      if (r instanceof U0) {
        var n = r.__data__;
        if (!V0 || n.length < H0 - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new W0(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    fp.exports = X0;
  });
  var ta = c((HX, pp) => {
    var B0 = Dr(),
      j0 = gd(),
      z0 = md(),
      K0 = Ed(),
      Y0 = bd(),
      $0 = dp();
    function nr(e) {
      var t = (this.__data__ = new B0(e));
      this.size = t.size;
    }
    nr.prototype.clear = j0;
    nr.prototype.delete = z0;
    nr.prototype.get = K0;
    nr.prototype.has = Y0;
    nr.prototype.set = $0;
    pp.exports = nr;
  });
  var gp = c((XX, vp) => {
    var Q0 = "__lodash_hash_undefined__";
    function Z0(e) {
      return this.__data__.set(e, Q0), this;
    }
    vp.exports = Z0;
  });
  var mp = c((BX, hp) => {
    function J0(e) {
      return this.__data__.has(e);
    }
    hp.exports = J0;
  });
  var Ep = c((jX, yp) => {
    var eR = qn(),
      tR = gp(),
      rR = mp();
    function Dn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new eR(); ++t < r;) this.add(e[t]);
    }
    Dn.prototype.add = Dn.prototype.push = tR;
    Dn.prototype.has = rR;
    yp.exports = Dn;
  });
  var bp = c((zX, _p) => {
    function nR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    _p.exports = nR;
  });
  var Ip = c((KX, Tp) => {
    function iR(e, t) {
      return e.has(t);
    }
    Tp.exports = iR;
  });
  var ra = c((YX, wp) => {
    var oR = Ep(),
      aR = bp(),
      sR = Ip(),
      uR = 1,
      cR = 2;
    function lR(e, t, r, n, i, o) {
      var a = r & uR,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var d = o.get(e),
        m = o.get(t);
      if (d && m) return d == t && m == e;
      var v = -1,
        y = !0,
        _ = r & cR ? new oR() : void 0;
      for (o.set(e, t), o.set(t, e); ++v < s;) {
        var b = e[v],
          O = t[v];
        if (n) var q = a ? n(O, b, v, t, e, o) : n(b, O, v, e, t, o);
        if (q !== void 0) {
          if (q) continue;
          y = !1;
          break;
        }
        if (_) {
          if (
            !aR(t, function (x, E) {
              if (!sR(_, E) && (b === x || i(b, x, r, n, o))) return _.push(E);
            })
          ) {
            y = !1;
            break;
          }
        } else if (!(b === O || i(b, O, r, n, o))) {
          y = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), y;
    }
    wp.exports = lR;
  });
  var xp = c(($X, Op) => {
    var fR = Qe(),
      dR = fR.Uint8Array;
    Op.exports = dR;
  });
  var Sp = c((QX, Ap) => {
    function pR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    Ap.exports = pR;
  });
  var Cp = c((ZX, Rp) => {
    function vR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Rp.exports = vR;
  });
  var qp = c((JX, Mp) => {
    var Lp = $t(),
      Np = xp(),
      gR = Pn(),
      hR = ra(),
      mR = Sp(),
      yR = Cp(),
      ER = 1,
      _R = 2,
      bR = "[object Boolean]",
      TR = "[object Date]",
      IR = "[object Error]",
      wR = "[object Map]",
      OR = "[object Number]",
      xR = "[object RegExp]",
      AR = "[object Set]",
      SR = "[object String]",
      RR = "[object Symbol]",
      CR = "[object ArrayBuffer]",
      LR = "[object DataView]",
      Pp = Lp ? Lp.prototype : void 0,
      na = Pp ? Pp.valueOf : void 0;
    function NR(e, t, r, n, i, o, a) {
      switch (r) {
        case LR:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case CR:
          return !(e.byteLength != t.byteLength || !o(new Np(e), new Np(t)));
        case bR:
        case TR:
        case OR:
          return gR(+e, +t);
        case IR:
          return e.name == t.name && e.message == t.message;
        case xR:
        case SR:
          return e == t + "";
        case wR:
          var s = mR;
        case AR:
          var u = n & ER;
          if ((s || (s = yR), e.size != t.size && !u)) return !1;
          var d = a.get(e);
          if (d) return d == t;
          (n |= _R), a.set(e, t);
          var m = hR(s(e), s(t), n, i, o, a);
          return a.delete(e), m;
        case RR:
          if (na) return na.call(e) == na.call(t);
      }
      return !1;
    }
    Mp.exports = NR;
  });
  var Fn = c((e5, Dp) => {
    function PR(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
      return e;
    }
    Dp.exports = PR;
  });
  var Oe = c((t5, Fp) => {
    var MR = Array.isArray;
    Fp.exports = MR;
  });
  var ia = c((r5, kp) => {
    var qR = Fn(),
      DR = Oe();
    function FR(e, t, r) {
      var n = t(e);
      return DR(e) ? n : qR(n, r(e));
    }
    kp.exports = FR;
  });
  var Up = c((n5, Gp) => {
    function kR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Gp.exports = kR;
  });
  var oa = c((i5, Vp) => {
    function GR() {
      return [];
    }
    Vp.exports = GR;
  });
  var aa = c((o5, Hp) => {
    var UR = Up(),
      VR = oa(),
      WR = Object.prototype,
      HR = WR.propertyIsEnumerable,
      Wp = Object.getOwnPropertySymbols,
      XR = Wp
        ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              UR(Wp(e), function (t) {
                return HR.call(e, t);
              }));
        }
        : VR;
    Hp.exports = XR;
  });
  var Bp = c((a5, Xp) => {
    function BR(e, t) {
      for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
      return n;
    }
    Xp.exports = BR;
  });
  var zp = c((s5, jp) => {
    var jR = It(),
      zR = vt(),
      KR = "[object Arguments]";
    function YR(e) {
      return zR(e) && jR(e) == KR;
    }
    jp.exports = YR;
  });
  var Gr = c((u5, $p) => {
    var Kp = zp(),
      $R = vt(),
      Yp = Object.prototype,
      QR = Yp.hasOwnProperty,
      ZR = Yp.propertyIsEnumerable,
      JR = Kp(
        (function () {
          return arguments;
        })()
      )
        ? Kp
        : function (e) {
          return $R(e) && QR.call(e, "callee") && !ZR.call(e, "callee");
        };
    $p.exports = JR;
  });
  var Zp = c((c5, Qp) => {
    function eC() {
      return !1;
    }
    Qp.exports = eC;
  });
  var kn = c((Ur, ir) => {
    var tC = Qe(),
      rC = Zp(),
      tv = typeof Ur == "object" && Ur && !Ur.nodeType && Ur,
      Jp = tv && typeof ir == "object" && ir && !ir.nodeType && ir,
      nC = Jp && Jp.exports === tv,
      ev = nC ? tC.Buffer : void 0,
      iC = ev ? ev.isBuffer : void 0,
      oC = iC || rC;
    ir.exports = oC;
  });
  var Gn = c((l5, rv) => {
    var aC = 9007199254740991,
      sC = /^(?:0|[1-9]\d*)$/;
    function uC(e, t) {
      var r = typeof e;
      return (
        (t = t ?? aC),
        !!t &&
        (r == "number" || (r != "symbol" && sC.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
      );
    }
    rv.exports = uC;
  });
  var Un = c((f5, nv) => {
    var cC = 9007199254740991;
    function lC(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= cC;
    }
    nv.exports = lC;
  });
  var ov = c((d5, iv) => {
    var fC = It(),
      dC = Un(),
      pC = vt(),
      vC = "[object Arguments]",
      gC = "[object Array]",
      hC = "[object Boolean]",
      mC = "[object Date]",
      yC = "[object Error]",
      EC = "[object Function]",
      _C = "[object Map]",
      bC = "[object Number]",
      TC = "[object Object]",
      IC = "[object RegExp]",
      wC = "[object Set]",
      OC = "[object String]",
      xC = "[object WeakMap]",
      AC = "[object ArrayBuffer]",
      SC = "[object DataView]",
      RC = "[object Float32Array]",
      CC = "[object Float64Array]",
      LC = "[object Int8Array]",
      NC = "[object Int16Array]",
      PC = "[object Int32Array]",
      MC = "[object Uint8Array]",
      qC = "[object Uint8ClampedArray]",
      DC = "[object Uint16Array]",
      FC = "[object Uint32Array]",
      he = {};
    he[RC] =
      he[CC] =
      he[LC] =
      he[NC] =
      he[PC] =
      he[MC] =
      he[qC] =
      he[DC] =
      he[FC] =
      !0;
    he[vC] =
      he[gC] =
      he[AC] =
      he[hC] =
      he[SC] =
      he[mC] =
      he[yC] =
      he[EC] =
      he[_C] =
      he[bC] =
      he[TC] =
      he[IC] =
      he[wC] =
      he[OC] =
      he[xC] =
      !1;
    function kC(e) {
      return pC(e) && dC(e.length) && !!he[fC(e)];
    }
    iv.exports = kC;
  });
  var sv = c((p5, av) => {
    function GC(e) {
      return function (t) {
        return e(t);
      };
    }
    av.exports = GC;
  });
  var cv = c((Vr, or) => {
    var UC = Lo(),
      uv = typeof Vr == "object" && Vr && !Vr.nodeType && Vr,
      Wr = uv && typeof or == "object" && or && !or.nodeType && or,
      VC = Wr && Wr.exports === uv,
      sa = VC && UC.process,
      WC = (function () {
        try {
          var e = Wr && Wr.require && Wr.require("util").types;
          return e || (sa && sa.binding && sa.binding("util"));
        } catch { }
      })();
    or.exports = WC;
  });
  var Vn = c((v5, dv) => {
    var HC = ov(),
      XC = sv(),
      lv = cv(),
      fv = lv && lv.isTypedArray,
      BC = fv ? XC(fv) : HC;
    dv.exports = BC;
  });
  var ua = c((g5, pv) => {
    var jC = Bp(),
      zC = Gr(),
      KC = Oe(),
      YC = kn(),
      $C = Gn(),
      QC = Vn(),
      ZC = Object.prototype,
      JC = ZC.hasOwnProperty;
    function eL(e, t) {
      var r = KC(e),
        n = !r && zC(e),
        i = !r && !n && YC(e),
        o = !r && !n && !i && QC(e),
        a = r || n || i || o,
        s = a ? jC(e.length, String) : [],
        u = s.length;
      for (var d in e)
        (t || JC.call(e, d)) &&
          !(
            a &&
            (d == "length" ||
              (i && (d == "offset" || d == "parent")) ||
              (o &&
                (d == "buffer" || d == "byteLength" || d == "byteOffset")) ||
              $C(d, u))
          ) &&
          s.push(d);
      return s;
    }
    pv.exports = eL;
  });
  var Wn = c((h5, vv) => {
    var tL = Object.prototype;
    function rL(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || tL;
      return e === r;
    }
    vv.exports = rL;
  });
  var hv = c((m5, gv) => {
    var nL = No(),
      iL = nL(Object.keys, Object);
    gv.exports = iL;
  });
  var Hn = c((y5, mv) => {
    var oL = Wn(),
      aL = hv(),
      sL = Object.prototype,
      uL = sL.hasOwnProperty;
    function cL(e) {
      if (!oL(e)) return aL(e);
      var t = [];
      for (var r in Object(e)) uL.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    mv.exports = cL;
  });
  var qt = c((E5, yv) => {
    var lL = Zo(),
      fL = Un();
    function dL(e) {
      return e != null && fL(e.length) && !lL(e);
    }
    yv.exports = dL;
  });
  var Hr = c((_5, Ev) => {
    var pL = ua(),
      vL = Hn(),
      gL = qt();
    function hL(e) {
      return gL(e) ? pL(e) : vL(e);
    }
    Ev.exports = hL;
  });
  var bv = c((b5, _v) => {
    var mL = ia(),
      yL = aa(),
      EL = Hr();
    function _L(e) {
      return mL(e, EL, yL);
    }
    _v.exports = _L;
  });
  var wv = c((T5, Iv) => {
    var Tv = bv(),
      bL = 1,
      TL = Object.prototype,
      IL = TL.hasOwnProperty;
    function wL(e, t, r, n, i, o) {
      var a = r & bL,
        s = Tv(e),
        u = s.length,
        d = Tv(t),
        m = d.length;
      if (u != m && !a) return !1;
      for (var v = u; v--;) {
        var y = s[v];
        if (!(a ? y in t : IL.call(t, y))) return !1;
      }
      var _ = o.get(e),
        b = o.get(t);
      if (_ && b) return _ == t && b == e;
      var O = !0;
      o.set(e, t), o.set(t, e);
      for (var q = a; ++v < u;) {
        y = s[v];
        var x = e[y],
          E = t[y];
        if (n) var C = a ? n(E, x, y, t, e, o) : n(x, E, y, e, t, o);
        if (!(C === void 0 ? x === E || i(x, E, r, n, o) : C)) {
          O = !1;
          break;
        }
        q || (q = y == "constructor");
      }
      if (O && !q) {
        var M = e.constructor,
          F = t.constructor;
        M != F &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof M == "function" &&
            M instanceof M &&
            typeof F == "function" &&
            F instanceof F
          ) &&
          (O = !1);
      }
      return o.delete(e), o.delete(t), O;
    }
    Iv.exports = wL;
  });
  var xv = c((I5, Ov) => {
    var OL = wt(),
      xL = Qe(),
      AL = OL(xL, "DataView");
    Ov.exports = AL;
  });
  var Sv = c((w5, Av) => {
    var SL = wt(),
      RL = Qe(),
      CL = SL(RL, "Promise");
    Av.exports = CL;
  });
  var Cv = c((O5, Rv) => {
    var LL = wt(),
      NL = Qe(),
      PL = LL(NL, "Set");
    Rv.exports = PL;
  });
  var ca = c((x5, Lv) => {
    var ML = wt(),
      qL = Qe(),
      DL = ML(qL, "WeakMap");
    Lv.exports = DL;
  });
  var Xn = c((A5, kv) => {
    var la = xv(),
      fa = Mn(),
      da = Sv(),
      pa = Cv(),
      va = ca(),
      Fv = It(),
      ar = ea(),
      Nv = "[object Map]",
      FL = "[object Object]",
      Pv = "[object Promise]",
      Mv = "[object Set]",
      qv = "[object WeakMap]",
      Dv = "[object DataView]",
      kL = ar(la),
      GL = ar(fa),
      UL = ar(da),
      VL = ar(pa),
      WL = ar(va),
      Dt = Fv;
    ((la && Dt(new la(new ArrayBuffer(1))) != Dv) ||
      (fa && Dt(new fa()) != Nv) ||
      (da && Dt(da.resolve()) != Pv) ||
      (pa && Dt(new pa()) != Mv) ||
      (va && Dt(new va()) != qv)) &&
      (Dt = function (e) {
        var t = Fv(e),
          r = t == FL ? e.constructor : void 0,
          n = r ? ar(r) : "";
        if (n)
          switch (n) {
            case kL:
              return Dv;
            case GL:
              return Nv;
            case UL:
              return Pv;
            case VL:
              return Mv;
            case WL:
              return qv;
          }
        return t;
      });
    kv.exports = Dt;
  });
  var jv = c((S5, Bv) => {
    var ga = ta(),
      HL = ra(),
      XL = qp(),
      BL = wv(),
      Gv = Xn(),
      Uv = Oe(),
      Vv = kn(),
      jL = Vn(),
      zL = 1,
      Wv = "[object Arguments]",
      Hv = "[object Array]",
      Bn = "[object Object]",
      KL = Object.prototype,
      Xv = KL.hasOwnProperty;
    function YL(e, t, r, n, i, o) {
      var a = Uv(e),
        s = Uv(t),
        u = a ? Hv : Gv(e),
        d = s ? Hv : Gv(t);
      (u = u == Wv ? Bn : u), (d = d == Wv ? Bn : d);
      var m = u == Bn,
        v = d == Bn,
        y = u == d;
      if (y && Vv(e)) {
        if (!Vv(t)) return !1;
        (a = !0), (m = !1);
      }
      if (y && !m)
        return (
          o || (o = new ga()),
          a || jL(e) ? HL(e, t, r, n, i, o) : XL(e, t, u, r, n, i, o)
        );
      if (!(r & zL)) {
        var _ = m && Xv.call(e, "__wrapped__"),
          b = v && Xv.call(t, "__wrapped__");
        if (_ || b) {
          var O = _ ? e.value() : e,
            q = b ? t.value() : t;
          return o || (o = new ga()), i(O, q, r, n, o);
        }
      }
      return y ? (o || (o = new ga()), BL(e, t, r, n, i, o)) : !1;
    }
    Bv.exports = YL;
  });
  var ha = c((R5, Yv) => {
    var $L = jv(),
      zv = vt();
    function Kv(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!zv(e) && !zv(t))
          ? e !== e && t !== t
          : $L(e, t, r, n, Kv, i);
    }
    Yv.exports = Kv;
  });
  var Qv = c((C5, $v) => {
    var QL = ta(),
      ZL = ha(),
      JL = 1,
      eN = 2;
    function tN(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--;) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o;) {
        s = r[i];
        var u = s[0],
          d = e[u],
          m = s[1];
        if (a && s[2]) {
          if (d === void 0 && !(u in e)) return !1;
        } else {
          var v = new QL();
          if (n) var y = n(d, m, u, e, t, v);
          if (!(y === void 0 ? ZL(m, d, JL | eN, n, v) : y)) return !1;
        }
      }
      return !0;
    }
    $v.exports = tN;
  });
  var ma = c((L5, Zv) => {
    var rN = ut();
    function nN(e) {
      return e === e && !rN(e);
    }
    Zv.exports = nN;
  });
  var eg = c((N5, Jv) => {
    var iN = ma(),
      oN = Hr();
    function aN(e) {
      for (var t = oN(e), r = t.length; r--;) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, iN(i)];
      }
      return t;
    }
    Jv.exports = aN;
  });
  var ya = c((P5, tg) => {
    function sN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    tg.exports = sN;
  });
  var ng = c((M5, rg) => {
    var uN = Qv(),
      cN = eg(),
      lN = ya();
    function fN(e) {
      var t = cN(e);
      return t.length == 1 && t[0][2]
        ? lN(t[0][0], t[0][1])
        : function (r) {
          return r === e || uN(r, e, t);
        };
    }
    rg.exports = fN;
  });
  var Xr = c((q5, ig) => {
    var dN = It(),
      pN = vt(),
      vN = "[object Symbol]";
    function gN(e) {
      return typeof e == "symbol" || (pN(e) && dN(e) == vN);
    }
    ig.exports = gN;
  });
  var jn = c((D5, og) => {
    var hN = Oe(),
      mN = Xr(),
      yN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      EN = /^\w*$/;
    function _N(e, t) {
      if (hN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        mN(e)
        ? !0
        : EN.test(e) || !yN.test(e) || (t != null && e in Object(t));
    }
    og.exports = _N;
  });
  var ug = c((F5, sg) => {
    var ag = qn(),
      bN = "Expected a function";
    function Ea(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(bN);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (Ea.Cache || ag)()), r;
    }
    Ea.Cache = ag;
    sg.exports = Ea;
  });
  var lg = c((k5, cg) => {
    var TN = ug(),
      IN = 500;
    function wN(e) {
      var t = TN(e, function (n) {
        return r.size === IN && r.clear(), n;
      }),
        r = t.cache;
      return t;
    }
    cg.exports = wN;
  });
  var dg = c((G5, fg) => {
    var ON = lg(),
      xN =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      AN = /\\(\\)?/g,
      SN = ON(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(xN, function (r, n, i, o) {
            t.push(i ? o.replace(AN, "$1") : n || r);
          }),
          t
        );
      });
    fg.exports = SN;
  });
  var _a = c((U5, pg) => {
    function RN(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;)
        i[r] = t(e[r], r, e);
      return i;
    }
    pg.exports = RN;
  });
  var Eg = c((V5, yg) => {
    var vg = $t(),
      CN = _a(),
      LN = Oe(),
      NN = Xr(),
      PN = 1 / 0,
      gg = vg ? vg.prototype : void 0,
      hg = gg ? gg.toString : void 0;
    function mg(e) {
      if (typeof e == "string") return e;
      if (LN(e)) return CN(e, mg) + "";
      if (NN(e)) return hg ? hg.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -PN ? "-0" : t;
    }
    yg.exports = mg;
  });
  var bg = c((W5, _g) => {
    var MN = Eg();
    function qN(e) {
      return e == null ? "" : MN(e);
    }
    _g.exports = qN;
  });
  var Br = c((H5, Tg) => {
    var DN = Oe(),
      FN = jn(),
      kN = dg(),
      GN = bg();
    function UN(e, t) {
      return DN(e) ? e : FN(e, t) ? [e] : kN(GN(e));
    }
    Tg.exports = UN;
  });
  var sr = c((X5, Ig) => {
    var VN = Xr(),
      WN = 1 / 0;
    function HN(e) {
      if (typeof e == "string" || VN(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -WN ? "-0" : t;
    }
    Ig.exports = HN;
  });
  var zn = c((B5, wg) => {
    var XN = Br(),
      BN = sr();
    function jN(e, t) {
      t = XN(t, e);
      for (var r = 0, n = t.length; e != null && r < n;) e = e[BN(t[r++])];
      return r && r == n ? e : void 0;
    }
    wg.exports = jN;
  });
  var Kn = c((j5, Og) => {
    var zN = zn();
    function KN(e, t, r) {
      var n = e == null ? void 0 : zN(e, t);
      return n === void 0 ? r : n;
    }
    Og.exports = KN;
  });
  var Ag = c((z5, xg) => {
    function YN(e, t) {
      return e != null && t in Object(e);
    }
    xg.exports = YN;
  });
  var Rg = c((K5, Sg) => {
    var $N = Br(),
      QN = Gr(),
      ZN = Oe(),
      JN = Gn(),
      eP = Un(),
      tP = sr();
    function rP(e, t, r) {
      t = $N(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i;) {
        var a = tP(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && eP(i) && JN(a, i) && (ZN(e) || QN(e)));
    }
    Sg.exports = rP;
  });
  var Lg = c((Y5, Cg) => {
    var nP = Ag(),
      iP = Rg();
    function oP(e, t) {
      return e != null && iP(e, t, nP);
    }
    Cg.exports = oP;
  });
  var Pg = c(($5, Ng) => {
    var aP = ha(),
      sP = Kn(),
      uP = Lg(),
      cP = jn(),
      lP = ma(),
      fP = ya(),
      dP = sr(),
      pP = 1,
      vP = 2;
    function gP(e, t) {
      return cP(e) && lP(t)
        ? fP(dP(e), t)
        : function (r) {
          var n = sP(r, e);
          return n === void 0 && n === t ? uP(r, e) : aP(t, n, pP | vP);
        };
    }
    Ng.exports = gP;
  });
  var Yn = c((Q5, Mg) => {
    function hP(e) {
      return e;
    }
    Mg.exports = hP;
  });
  var ba = c((Z5, qg) => {
    function mP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    qg.exports = mP;
  });
  var Fg = c((J5, Dg) => {
    var yP = zn();
    function EP(e) {
      return function (t) {
        return yP(t, e);
      };
    }
    Dg.exports = EP;
  });
  var Gg = c((eB, kg) => {
    var _P = ba(),
      bP = Fg(),
      TP = jn(),
      IP = sr();
    function wP(e) {
      return TP(e) ? _P(IP(e)) : bP(e);
    }
    kg.exports = wP;
  });
  var Ot = c((tB, Ug) => {
    var OP = ng(),
      xP = Pg(),
      AP = Yn(),
      SP = Oe(),
      RP = Gg();
    function CP(e) {
      return typeof e == "function"
        ? e
        : e == null
          ? AP
          : typeof e == "object"
            ? SP(e)
              ? xP(e[0], e[1])
              : OP(e)
            : RP(e);
    }
    Ug.exports = CP;
  });
  var Ta = c((rB, Vg) => {
    var LP = Ot(),
      NP = qt(),
      PP = Hr();
    function MP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!NP(t)) {
          var o = LP(r, 3);
          (t = PP(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Vg.exports = MP;
  });
  var Ia = c((nB, Wg) => {
    function qP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Wg.exports = qP;
  });
  var Xg = c((iB, Hg) => {
    var DP = /\s/;
    function FP(e) {
      for (var t = e.length; t-- && DP.test(e.charAt(t)););
      return t;
    }
    Hg.exports = FP;
  });
  var jg = c((oB, Bg) => {
    var kP = Xg(),
      GP = /^\s+/;
    function UP(e) {
      return e && e.slice(0, kP(e) + 1).replace(GP, "");
    }
    Bg.exports = UP;
  });
  var $n = c((aB, Yg) => {
    var VP = jg(),
      zg = ut(),
      WP = Xr(),
      Kg = 0 / 0,
      HP = /^[-+]0x[0-9a-f]+$/i,
      XP = /^0b[01]+$/i,
      BP = /^0o[0-7]+$/i,
      jP = parseInt;
    function zP(e) {
      if (typeof e == "number") return e;
      if (WP(e)) return Kg;
      if (zg(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = zg(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = VP(e);
      var r = XP.test(e);
      return r || BP.test(e) ? jP(e.slice(2), r ? 2 : 8) : HP.test(e) ? Kg : +e;
    }
    Yg.exports = zP;
  });
  var Zg = c((sB, Qg) => {
    var KP = $n(),
      $g = 1 / 0,
      YP = 17976931348623157e292;
    function $P(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = KP(e)), e === $g || e === -$g)) {
        var t = e < 0 ? -1 : 1;
        return t * YP;
      }
      return e === e ? e : 0;
    }
    Qg.exports = $P;
  });
  var wa = c((uB, Jg) => {
    var QP = Zg();
    function ZP(e) {
      var t = QP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Jg.exports = ZP;
  });
  var th = c((cB, eh) => {
    var JP = Ia(),
      eM = Ot(),
      tM = wa(),
      rM = Math.max;
    function nM(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : tM(r);
      return i < 0 && (i = rM(n + i, 0)), JP(e, eM(t, 3), i);
    }
    eh.exports = nM;
  });
  var Oa = c((lB, rh) => {
    var iM = Ta(),
      oM = th(),
      aM = iM(oM);
    rh.exports = aM;
  });
  var oh = {};
  ke(oh, {
    ELEMENT_MATCHES: () => sM,
    FLEX_PREFIXED: () => xa,
    IS_BROWSER_ENV: () => Je,
    TRANSFORM_PREFIXED: () => xt,
    TRANSFORM_STYLE_PREFIXED: () => Zn,
    withBrowser: () => Qn,
  });
  var ih,
    Je,
    Qn,
    sM,
    xa,
    xt,
    nh,
    Zn,
    Jn = me(() => {
      "use strict";
      (ih = fe(Oa())),
        (Je = typeof window < "u"),
        (Qn = (e, t) => (Je ? e() : t)),
        (sM = Qn(() =>
          (0, ih.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (xa = Qn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (xt = Qn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (nh = xt.split("transform")[0]),
        (Zn = nh ? nh + "TransformStyle" : "transformStyle");
    });
  var Aa = c((fB, lh) => {
    var uM = 4,
      cM = 0.001,
      lM = 1e-7,
      fM = 10,
      jr = 11,
      ei = 1 / (jr - 1),
      dM = typeof Float32Array == "function";
    function ah(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function sh(e, t) {
      return 3 * t - 6 * e;
    }
    function uh(e) {
      return 3 * e;
    }
    function ti(e, t, r) {
      return ((ah(t, r) * e + sh(t, r)) * e + uh(t)) * e;
    }
    function ch(e, t, r) {
      return 3 * ah(t, r) * e * e + 2 * sh(t, r) * e + uh(t);
    }
    function pM(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = ti(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > lM && ++s < fM);
      return a;
    }
    function vM(e, t, r, n) {
      for (var i = 0; i < uM; ++i) {
        var o = ch(t, r, n);
        if (o === 0) return t;
        var a = ti(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    lh.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = dM ? new Float32Array(jr) : new Array(jr);
      if (t !== r || n !== i)
        for (var a = 0; a < jr; ++a) o[a] = ti(a * ei, t, n);
      function s(u) {
        for (var d = 0, m = 1, v = jr - 1; m !== v && o[m] <= u; ++m) d += ei;
        --m;
        var y = (u - o[m]) / (o[m + 1] - o[m]),
          _ = d + y * ei,
          b = ch(_, t, n);
        return b >= cM ? vM(u, _, t, n) : b === 0 ? _ : pM(u, d, d + ei, t, n);
      }
      return function (d) {
        return t === r && n === i
          ? d
          : d === 0
            ? 0
            : d === 1
              ? 1
              : ti(s(d), r, i);
      };
    };
  });
  var Kr = {};
  ke(Kr, {
    bounce: () => $M,
    bouncePast: () => QM,
    ease: () => gM,
    easeIn: () => hM,
    easeInOut: () => yM,
    easeOut: () => mM,
    inBack: () => VM,
    inCirc: () => FM,
    inCubic: () => TM,
    inElastic: () => XM,
    inExpo: () => MM,
    inOutBack: () => HM,
    inOutCirc: () => GM,
    inOutCubic: () => wM,
    inOutElastic: () => jM,
    inOutExpo: () => DM,
    inOutQuad: () => bM,
    inOutQuart: () => AM,
    inOutQuint: () => CM,
    inOutSine: () => PM,
    inQuad: () => EM,
    inQuart: () => OM,
    inQuint: () => SM,
    inSine: () => LM,
    outBack: () => WM,
    outBounce: () => UM,
    outCirc: () => kM,
    outCubic: () => IM,
    outElastic: () => BM,
    outExpo: () => qM,
    outQuad: () => _M,
    outQuart: () => xM,
    outQuint: () => RM,
    outSine: () => NM,
    swingFrom: () => KM,
    swingFromTo: () => zM,
    swingTo: () => YM,
  });
  function EM(e) {
    return Math.pow(e, 2);
  }
  function _M(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function bM(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function TM(e) {
    return Math.pow(e, 3);
  }
  function IM(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function wM(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function OM(e) {
    return Math.pow(e, 4);
  }
  function xM(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function AM(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function SM(e) {
    return Math.pow(e, 5);
  }
  function RM(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function CM(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function LM(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function NM(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function PM(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function MM(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function qM(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function DM(e) {
    return e === 0
      ? 0
      : e === 1
        ? 1
        : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function FM(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function kM(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function GM(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function UM(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function VM(e) {
    let t = gt;
    return e * e * ((t + 1) * e - t);
  }
  function WM(e) {
    let t = gt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function HM(e) {
    let t = gt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function XM(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          -(
            n *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r)
          ));
  }
  function BM(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function jM(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
        ? 1
        : (r || (r = 0.3 * 1.5),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          e < 1
            ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
            : n *
            Math.pow(2, -10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r) *
            0.5 +
            1);
  }
  function zM(e) {
    let t = gt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function KM(e) {
    let t = gt;
    return e * e * ((t + 1) * e - t);
  }
  function YM(e) {
    let t = gt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function $M(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function QM(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var zr,
    gt,
    gM,
    hM,
    mM,
    yM,
    Sa = me(() => {
      "use strict";
      (zr = fe(Aa())),
        (gt = 1.70158),
        (gM = (0, zr.default)(0.25, 0.1, 0.25, 1)),
        (hM = (0, zr.default)(0.42, 0, 1, 1)),
        (mM = (0, zr.default)(0, 0, 0.58, 1)),
        (yM = (0, zr.default)(0.42, 0, 0.58, 1));
    });
  var dh = {};
  ke(dh, {
    applyEasing: () => JM,
    createBezierEasing: () => ZM,
    optimizeFloat: () => Yr,
  });
  function Yr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function ZM(e) {
    return (0, fh.default)(...e);
  }
  function JM(e, t, r) {
    return t === 0
      ? 0
      : t === 1
        ? 1
        : Yr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Kr[e] ? Kr[e](t) : t);
  }
  var fh,
    Ra = me(() => {
      "use strict";
      Sa();
      fh = fe(Aa());
    });
  var gh = {};
  ke(gh, {
    createElementState: () => vh,
    ixElements: () => pq,
    mergeActionState: () => Ca,
  });
  function vh(e, t, r, n, i) {
    let o =
      r === eq ? (0, ur.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, ur.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Ca(e, t, r, n, i) {
    let o = gq(i);
    return (0, ur.mergeIn)(e, [t, dq, r], n, o);
  }
  function gq(e) {
    let { config: t } = e;
    return vq.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var ur,
    pB,
    eq,
    vB,
    tq,
    rq,
    nq,
    iq,
    oq,
    aq,
    sq,
    uq,
    cq,
    lq,
    fq,
    ph,
    dq,
    pq,
    vq,
    hh = me(() => {
      "use strict";
      ur = fe(Jt());
      Ge();
      ({
        HTML_ELEMENT: pB,
        PLAIN_OBJECT: eq,
        ABSTRACT_NODE: vB,
        CONFIG_X_VALUE: tq,
        CONFIG_Y_VALUE: rq,
        CONFIG_Z_VALUE: nq,
        CONFIG_VALUE: iq,
        CONFIG_X_UNIT: oq,
        CONFIG_Y_UNIT: aq,
        CONFIG_Z_UNIT: sq,
        CONFIG_UNIT: uq,
      } = Ce),
        ({
          IX2_SESSION_STOPPED: cq,
          IX2_INSTANCE_ADDED: lq,
          IX2_ELEMENT_STATE_CHANGED: fq,
        } = Ie),
        (ph = {}),
        (dq = "refState"),
        (pq = (e = ph, t = {}) => {
          switch (t.type) {
            case cq:
              return ph;
            case lq: {
              let {
                elementId: r,
                element: n,
                origin: i,
                actionItem: o,
                refType: a,
              } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (
                (0, ur.getIn)(u, [r, n]) !== n && (u = vh(u, n, a, r, o)),
                Ca(u, r, s, i, o)
              );
            }
            case fq: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Ca(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      vq = [
        [tq, oq],
        [rq, aq],
        [nq, sq],
        [iq, uq],
      ];
    });
  var mh = c((xe) => {
    "use strict";
    Object.defineProperty(xe, "__esModule", { value: !0 });
    xe.renderPlugin =
      xe.getPluginOrigin =
      xe.getPluginDuration =
      xe.getPluginDestination =
      xe.getPluginConfig =
      xe.createPluginInstance =
      xe.clearPlugin =
      void 0;
    var hq = (e) => e.value;
    xe.getPluginConfig = hq;
    var mq = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    xe.getPluginDuration = mq;
    var yq = (e) => e || { value: 0 };
    xe.getPluginOrigin = yq;
    var Eq = (e) => ({ value: e.value });
    xe.getPluginDestination = Eq;
    var _q = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    xe.createPluginInstance = _q;
    var bq = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    xe.renderPlugin = bq;
    var Tq = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    xe.clearPlugin = Tq;
  });
  var Eh = c((Ae) => {
    "use strict";
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    Ae.renderPlugin =
      Ae.getPluginOrigin =
      Ae.getPluginDuration =
      Ae.getPluginDestination =
      Ae.getPluginConfig =
      Ae.createPluginInstance =
      Ae.clearPlugin =
      void 0;
    var Iq = (e) => document.querySelector(`[data-w-id="${e}"]`),
      wq = () => window.Webflow.require("spline"),
      Oq = (e, t) => e.filter((r) => !t.includes(r)),
      xq = (e, t) => e.value[t];
    Ae.getPluginConfig = xq;
    var Aq = () => null;
    Ae.getPluginDuration = Aq;
    var yh = Object.freeze({
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,
    }),
      Sq = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = Oq(n, o);
          return a.length ? a.reduce((u, d) => ((u[d] = yh[d]), u), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = yh[a]), o), {});
      };
    Ae.getPluginOrigin = Sq;
    var Rq = (e) => e.value;
    Ae.getPluginDestination = Rq;
    var Cq = (e, t) => {
      var r, n;
      let i =
        t == null ||
          (r = t.config) === null ||
          r === void 0 ||
          (n = r.target) === null ||
          n === void 0
          ? void 0
          : n.pluginElement;
      return i ? Iq(i) : null;
    };
    Ae.createPluginInstance = Cq;
    var Lq = (e, t, r) => {
      let n = wq(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = o && s.findObjectById(o);
          if (!u) return;
          let { PLUGIN_SPLINE: d } = t;
          d.positionX != null && (u.position.x = d.positionX),
            d.positionY != null && (u.position.y = d.positionY),
            d.positionZ != null && (u.position.z = d.positionZ),
            d.rotationX != null && (u.rotation.x = d.rotationX),
            d.rotationY != null && (u.rotation.y = d.rotationY),
            d.rotationZ != null && (u.rotation.z = d.rotationZ),
            d.scaleX != null && (u.scale.x = d.scaleX),
            d.scaleY != null && (u.scale.y = d.scaleY),
            d.scaleZ != null && (u.scale.z = d.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    Ae.renderPlugin = Lq;
    var Nq = () => null;
    Ae.clearPlugin = Nq;
  });
  var bh = c((we) => {
    "use strict";
    Object.defineProperty(we, "__esModule", { value: !0 });
    we.getPluginOrigin =
      we.getPluginDuration =
      we.getPluginDestination =
      we.getPluginConfig =
      we.createPluginInstance =
      we.clearPlugin =
      void 0;
    we.normalizeColor = _h;
    we.renderPlugin = void 0;
    function _h(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase();
      if (o.startsWith("#")) {
        let a = o.substring(1);
        a.length === 3
          ? ((t = parseInt(a[0] + a[0], 16)),
            (r = parseInt(a[1] + a[1], 16)),
            (n = parseInt(a[2] + a[2], 16)))
          : a.length === 6 &&
          ((t = parseInt(a.substring(0, 2), 16)),
            (r = parseInt(a.substring(2, 4), 16)),
            (n = parseInt(a.substring(4, 6), 16)));
      } else if (o.startsWith("rgba")) {
        let a = o.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10)),
          (i = parseFloat(a[3]));
      } else if (o.startsWith("rgb")) {
        let a = o.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10));
      } else if (o.startsWith("hsla")) {
        let a = o.match(/hsla\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          u = parseFloat(a[1].replace("%", "")) / 100,
          d = parseFloat(a[2].replace("%", "")) / 100;
        i = parseFloat(a[3]);
        let m = (1 - Math.abs(2 * d - 1)) * u,
          v = m * (1 - Math.abs(((s / 60) % 2) - 1)),
          y = d - m / 2,
          _,
          b,
          O;
        s >= 0 && s < 60
          ? ((_ = m), (b = v), (O = 0))
          : s >= 60 && s < 120
            ? ((_ = v), (b = m), (O = 0))
            : s >= 120 && s < 180
              ? ((_ = 0), (b = m), (O = v))
              : s >= 180 && s < 240
                ? ((_ = 0), (b = v), (O = m))
                : s >= 240 && s < 300
                  ? ((_ = v), (b = 0), (O = m))
                  : ((_ = m), (b = 0), (O = v)),
          (t = Math.round((_ + y) * 255)),
          (r = Math.round((b + y) * 255)),
          (n = Math.round((O + y) * 255));
      } else if (o.startsWith("hsl")) {
        let a = o.match(/hsl\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          u = parseFloat(a[1].replace("%", "")) / 100,
          d = parseFloat(a[2].replace("%", "")) / 100,
          m = (1 - Math.abs(2 * d - 1)) * u,
          v = m * (1 - Math.abs(((s / 60) % 2) - 1)),
          y = d - m / 2,
          _,
          b,
          O;
        s >= 0 && s < 60
          ? ((_ = m), (b = v), (O = 0))
          : s >= 60 && s < 120
            ? ((_ = v), (b = m), (O = 0))
            : s >= 120 && s < 180
              ? ((_ = 0), (b = m), (O = v))
              : s >= 180 && s < 240
                ? ((_ = 0), (b = v), (O = m))
                : s >= 240 && s < 300
                  ? ((_ = v), (b = 0), (O = m))
                  : ((_ = m), (b = 0), (O = v)),
          (t = Math.round((_ + y) * 255)),
          (r = Math.round((b + y) * 255)),
          (n = Math.round((O + y) * 255));
      }
      return (
        (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
        { red: t, green: r, blue: n, alpha: i }
      );
    }
    var Pq = (e, t) => e.value[t];
    we.getPluginConfig = Pq;
    var Mq = () => null;
    we.getPluginDuration = Mq;
    var qq = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null) return _h(i);
    };
    we.getPluginOrigin = qq;
    var Dq = (e) => e.value;
    we.getPluginDestination = Dq;
    var Fq = () => null;
    we.createPluginInstance = Fq;
    var kq = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: u, blue: d, alpha: m } = o,
        v;
      a != null && (v = a + i),
        s != null &&
        d != null &&
        u != null &&
        m != null &&
        (v = `rgba(${s}, ${u}, ${d}, ${m})`),
        v != null && document.documentElement.style.setProperty(n, v);
    };
    we.renderPlugin = kq;
    var Gq = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    we.clearPlugin = Gq;
  });
  var Th = c((ri) => {
    "use strict";
    var Na = gn().default;
    Object.defineProperty(ri, "__esModule", { value: !0 });
    ri.pluginMethodMap = void 0;
    var La = (Ge(), nt(Sf)),
      Uq = Na(mh()),
      Vq = Na(Eh()),
      Wq = Na(bh()),
      Hq = new Map([
        [La.ActionTypeConsts.PLUGIN_LOTTIE, { ...Uq }],
        [La.ActionTypeConsts.PLUGIN_SPLINE, { ...Vq }],
        [La.ActionTypeConsts.PLUGIN_VARIABLE, { ...Wq }],
      ]);
    ri.pluginMethodMap = Hq;
  });
  var Ih = {};
  ke(Ih, {
    clearPlugin: () => ka,
    createPluginInstance: () => Bq,
    getPluginConfig: () => Ma,
    getPluginDestination: () => Da,
    getPluginDuration: () => Xq,
    getPluginOrigin: () => qa,
    isPluginType: () => Ft,
    renderPlugin: () => Fa,
  });
  function Ft(e) {
    return Pa.pluginMethodMap.has(e);
  }
  var Pa,
    kt,
    Ma,
    qa,
    Xq,
    Da,
    Bq,
    Fa,
    ka,
    Ga = me(() => {
      "use strict";
      Jn();
      Pa = fe(Th());
      (kt = (e) => (t) => {
        if (!Je) return () => null;
        let r = Pa.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Ma = kt("getPluginConfig")),
        (qa = kt("getPluginOrigin")),
        (Xq = kt("getPluginDuration")),
        (Da = kt("getPluginDestination")),
        (Bq = kt("createPluginInstance")),
        (Fa = kt("renderPlugin")),
        (ka = kt("clearPlugin"));
    });
  var Oh = c((_B, wh) => {
    function jq(e, t) {
      return e == null || e !== e ? t : e;
    }
    wh.exports = jq;
  });
  var Ah = c((bB, xh) => {
    function zq(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
      return r;
    }
    xh.exports = zq;
  });
  var Rh = c((TB, Sh) => {
    function Kq(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--;) {
          var u = a[e ? s : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    Sh.exports = Kq;
  });
  var Lh = c((IB, Ch) => {
    var Yq = Rh(),
      $q = Yq();
    Ch.exports = $q;
  });
  var Ua = c((wB, Nh) => {
    var Qq = Lh(),
      Zq = Hr();
    function Jq(e, t) {
      return e && Qq(e, t, Zq);
    }
    Nh.exports = Jq;
  });
  var Mh = c((OB, Ph) => {
    var e1 = qt();
    function t1(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!e1(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    Ph.exports = t1;
  });
  var Va = c((xB, qh) => {
    var r1 = Ua(),
      n1 = Mh(),
      i1 = n1(r1);
    qh.exports = i1;
  });
  var Fh = c((AB, Dh) => {
    function o1(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    Dh.exports = o1;
  });
  var Gh = c((SB, kh) => {
    var a1 = Ah(),
      s1 = Va(),
      u1 = Ot(),
      c1 = Fh(),
      l1 = Oe();
    function f1(e, t, r) {
      var n = l1(e) ? a1 : c1,
        i = arguments.length < 3;
      return n(e, u1(t, 4), r, i, s1);
    }
    kh.exports = f1;
  });
  var Vh = c((RB, Uh) => {
    var d1 = Ia(),
      p1 = Ot(),
      v1 = wa(),
      g1 = Math.max,
      h1 = Math.min;
    function m1(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
        ((i = v1(r)), (i = r < 0 ? g1(n + i, 0) : h1(i, n - 1))),
        d1(e, p1(t, 3), i, !0)
      );
    }
    Uh.exports = m1;
  });
  var Hh = c((CB, Wh) => {
    var y1 = Ta(),
      E1 = Vh(),
      _1 = y1(E1);
    Wh.exports = _1;
  });
  function Xh(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function T1(e, t) {
    if (Xh(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!b1.call(t, r[i]) || !Xh(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var b1,
    Wa,
    Bh = me(() => {
      "use strict";
      b1 = Object.prototype.hasOwnProperty;
      Wa = T1;
    });
  var um = {};
  ke(um, {
    cleanupHTMLElement: () => ED,
    clearAllStyles: () => yD,
    clearObjectCache: () => G1,
    getActionListProgress: () => bD,
    getAffectedElements: () => za,
    getComputedStyle: () => z1,
    getDestinationValues: () => eD,
    getElementId: () => H1,
    getInstanceId: () => V1,
    getInstanceOrigin: () => $1,
    getItemConfigByKey: () => J1,
    getMaxDurationItemIndex: () => sm,
    getNamespacedParameterId: () => wD,
    getRenderType: () => im,
    getStyleProp: () => tD,
    mediaQueriesEqual: () => xD,
    observeStore: () => j1,
    reduceListToGroup: () => TD,
    reifyState: () => X1,
    renderHTMLElement: () => rD,
    shallowEqual: () => Wa,
    shouldAllowMediaQuery: () => OD,
    shouldNamespaceEventParameter: () => ID,
    stringifyTarget: () => AD,
  });
  function G1() {
    ni.clear();
  }
  function V1() {
    return "i" + U1++;
  }
  function H1(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + W1++;
  }
  function X1({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, si.default)(
      e,
      (a, s) => {
        let { eventTypeId: u } = s;
        return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
      },
      {}
    ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function j1({ store: e, select: t, onChange: r, comparator: n = B1 }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let d = t(i());
      if (d == null) {
        a();
        return;
      }
      n(d, s) || ((s = d), r(s, e));
    }
    return a;
  }
  function Kh(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function za({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (S, h) =>
          S.concat(
            za({
              config: { target: h },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
      getValidDocument: a,
      getQuerySelector: s,
      queryDocument: u,
      getChildElements: d,
      getSiblingElements: m,
      matchSelector: v,
      elementContains: y,
      isSiblingNode: _,
    } = i,
      { target: b } = e;
    if (!b) return [];
    let {
      id: O,
      objectId: q,
      selector: x,
      selectorGuids: E,
      appliesTo: C,
      useEventTarget: M,
    } = Kh(b);
    if (q) return [ni.has(q) ? ni.get(q) : ni.set(q, {}).get(q)];
    if (C === zo.PAGE) {
      let S = a(O);
      return S ? [S] : [];
    }
    let P = (t?.action?.config?.affectedElements ?? {})[O || x] || {},
      j = !!(P.id || P.selector),
      K,
      Y,
      J,
      H = t && s(Kh(t.target));
    if (
      (j
        ? ((K = P.limitAffectedElements), (Y = H), (J = s(P)))
        : (Y = J = s({ id: O, selector: x, selectorGuids: E })),
        t && M)
    ) {
      let S = r && (J || M === !0) ? [r] : u(H);
      if (J) {
        if (M === D1) return u(J).filter((h) => S.some((L) => y(h, L)));
        if (M === jh) return u(J).filter((h) => S.some((L) => y(L, h)));
        if (M === zh) return u(J).filter((h) => S.some((L) => _(L, h)));
      }
      return S;
    }
    return Y == null || J == null
      ? []
      : Je && n
        ? u(J).filter((S) => n.contains(S))
        : K === jh
          ? u(Y, J)
          : K === q1
            ? d(u(Y)).filter(v(J))
            : K === zh
              ? m(u(Y)).filter(v(J))
              : u(J);
  }
  function z1({ element: e, actionItem: t }) {
    if (!Je) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case pr:
      case vr:
      case gr:
      case hr:
      case ci:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function $1(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Ft(a)) return qa(a)(t[a], n);
    switch (n.actionTypeId) {
      case lr:
      case fr:
      case dr:
      case Jr:
        return t[n.actionTypeId] || Ka[n.actionTypeId];
      case en:
        return K1(t[n.actionTypeId], n.config.filters);
      case tn:
        return Y1(t[n.actionTypeId], n.config.fontVariations);
      case tm:
        return { value: (0, ht.default)(parseFloat(o(e, oi)), 1) };
      case pr: {
        let s = o(e, ct),
          u = o(e, lt),
          d,
          m;
        return (
          n.config.widthUnit === At
            ? (d = Yh.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (d = (0, ht.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === At
            ? (m = Yh.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (m = (0, ht.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: d, heightValue: m }
        );
      }
      case vr:
      case gr:
      case hr:
        return gD({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case ci:
        return { value: (0, ht.default)(o(e, ai), r.display) };
      case k1:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function eD({ element: e, actionItem: t, elementApi: r }) {
    if (Ft(t.actionTypeId)) return Da(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case lr:
      case fr:
      case dr:
      case Jr: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case pr: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: d } = t.config;
        if (!Je) return { widthValue: u, heightValue: d };
        if (a === At) {
          let m = n(e, ct);
          i(e, ct, ""), (u = o(e, "offsetWidth")), i(e, ct, m);
        }
        if (s === At) {
          let m = n(e, lt);
          i(e, lt, ""), (d = o(e, "offsetHeight")), i(e, lt, m);
        }
        return { widthValue: u, heightValue: d };
      }
      case vr:
      case gr:
      case hr: {
        let { rValue: n, gValue: i, bValue: o, aValue: a } = t.config;
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case en:
        return t.config.filters.reduce(Q1, {});
      case tn:
        return t.config.fontVariations.reduce(Z1, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function im(e) {
    if (/^TRANSFORM_/.test(e)) return Jh;
    if (/^STYLE_/.test(e)) return Ba;
    if (/^GENERAL_/.test(e)) return Xa;
    if (/^PLUGIN_/.test(e)) return em;
  }
  function tD(e, t) {
    return e === Ba ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function rD(e, t, r, n, i, o, a, s, u) {
    switch (s) {
      case Jh:
        return sD(e, t, r, i, a);
      case Ba:
        return hD(e, t, r, i, o, a);
      case Xa:
        return mD(e, i, a);
      case em: {
        let { actionTypeId: d } = i;
        if (Ft(d)) return Fa(d)(u, t, i);
      }
    }
  }
  function sD(e, t, r, n, i) {
    let o = aD
      .map((s) => {
        let u = Ka[s],
          {
            xValue: d = u.xValue,
            yValue: m = u.yValue,
            zValue: v = u.zValue,
            xUnit: y = "",
            yUnit: _ = "",
            zUnit: b = "",
          } = t[s] || {};
        switch (s) {
          case lr:
            return `${O1}(${d}${y}, ${m}${_}, ${v}${b})`;
          case fr:
            return `${x1}(${d}${y}, ${m}${_}, ${v}${b})`;
          case dr:
            return `${A1}(${d}${y}) ${S1}(${m}${_}) ${R1}(${v}${b})`;
          case Jr:
            return `${C1}(${d}${y}, ${m}${_})`;
          default:
            return "";
        }
      })
      .join(" "),
      { setStyle: a } = i;
    Gt(e, xt, i), a(e, xt, o), lD(n, r) && a(e, Zn, L1);
  }
  function uD(e, t, r, n) {
    let i = (0, si.default)(t, (a, s, u) => `${a} ${u}(${s}${oD(u, r)})`, ""),
      { setStyle: o } = n;
    Gt(e, $r, n), o(e, $r, i);
  }
  function cD(e, t, r, n) {
    let i = (0, si.default)(
      t,
      (a, s, u) => (a.push(`"${u}" ${s}`), a),
      []
    ).join(", "),
      { setStyle: o } = n;
    Gt(e, Qr, n), o(e, Qr, i);
  }
  function lD({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === lr && n !== void 0) ||
      (e === fr && n !== void 0) ||
      (e === dr && (t !== void 0 || r !== void 0))
    );
  }
  function vD(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function gD({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = ja[t],
      o = n(e, i),
      a = dD.test(o) ? o : r[i],
      s = vD(pD, a).split(Zr);
    return {
      rValue: (0, ht.default)(parseInt(s[0], 10), 255),
      gValue: (0, ht.default)(parseInt(s[1], 10), 255),
      bValue: (0, ht.default)(parseInt(s[2], 10), 255),
      aValue: (0, ht.default)(parseFloat(s[3]), 1),
    };
  }
  function hD(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case pr: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: d, heightValue: m } = r;
        d !== void 0 && (s === At && (s = "px"), Gt(e, ct, o), a(e, ct, d + s)),
          m !== void 0 &&
          (u === At && (u = "px"), Gt(e, lt, o), a(e, lt, m + u));
        break;
      }
      case en: {
        uD(e, r, n.config, o);
        break;
      }
      case tn: {
        cD(e, r, n.config, o);
        break;
      }
      case vr:
      case gr:
      case hr: {
        let s = ja[n.actionTypeId],
          u = Math.round(r.rValue),
          d = Math.round(r.gValue),
          m = Math.round(r.bValue),
          v = r.aValue;
        Gt(e, s, o),
          a(e, s, v >= 1 ? `rgb(${u},${d},${m})` : `rgba(${u},${d},${m},${v})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        Gt(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function mD(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case ci: {
        let { value: i } = t.config;
        i === N1 && Je ? n(e, ai, xa) : n(e, ai, i);
        return;
      }
    }
  }
  function Gt(e, t, r) {
    if (!Je) return;
    let n = nm[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, cr);
    if (!a) {
      o(e, cr, n);
      return;
    }
    let s = a.split(Zr).map(rm);
    s.indexOf(n) === -1 && o(e, cr, s.concat(n).join(Zr));
  }
  function om(e, t, r) {
    if (!Je) return;
    let n = nm[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, cr);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        cr,
        a
          .split(Zr)
          .map(rm)
          .filter((s) => s !== n)
          .join(Zr)
      );
  }
  function yD({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        d = i[u];
      d && $h({ actionList: d, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        $h({ actionList: i[o], elementApi: t });
      });
  }
  function $h({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        Qh({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
      i.forEach((o) => {
        let { continuousActionGroups: a } = o;
        a.forEach((s) => {
          Qh({ actionGroup: s, event: t, elementApi: r });
        });
      });
  }
  function Qh({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      Ft(o)
        ? (s = (u) => ka(o)(u, i))
        : (s = am({ effect: _D, actionTypeId: o, elementApi: r })),
        za({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function ED(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === pr) {
      let { config: a } = t;
      a.widthUnit === At && n(e, ct, ""), a.heightUnit === At && n(e, lt, "");
    }
    i(e, cr) && am({ effect: om, actionTypeId: o, elementApi: r })(e);
  }
  function _D(e, t, r) {
    let { setStyle: n } = r;
    om(e, t, r), n(e, t, ""), t === xt && n(e, Zn, "");
  }
  function sm(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function bD(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, d) => {
        if (n && d === 0) return;
        let { actionItems: m } = u,
          v = m[sm(m)],
          { config: y, actionTypeId: _ } = v;
        i.id === v.id && (s = a + o);
        let b = im(_) === Xa ? 0 : y.duration;
        a += y.delay + b;
      }),
      a > 0 ? Yr(s / a) : 0
    );
  }
  function TD({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, ui.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
      i.some((s) => {
        let { continuousActionGroups: u } = s;
        return u.some(({ actionItems: d }) => d.some(a));
      }),
      (0, ui.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function ID(e, { basedOn: t }) {
    return (
      (e === Ze.SCROLLING_IN_VIEW && (t === st.ELEMENT || t == null)) ||
      (e === Ze.MOUSE_MOVE && t === st.ELEMENT)
    );
  }
  function wD(e, t) {
    return e + F1 + t;
  }
  function OD(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function xD(e, t) {
    return Wa(e && e.sort(), t && t.sort());
  }
  function AD(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Ha + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Ha + r + Ha + n;
  }
  var ht,
    si,
    ii,
    ui,
    I1,
    w1,
    O1,
    x1,
    A1,
    S1,
    R1,
    C1,
    L1,
    N1,
    oi,
    $r,
    Qr,
    ct,
    lt,
    Zh,
    P1,
    M1,
    jh,
    q1,
    zh,
    D1,
    ai,
    cr,
    At,
    Zr,
    F1,
    Ha,
    Jh,
    Xa,
    Ba,
    em,
    lr,
    fr,
    dr,
    Jr,
    tm,
    en,
    tn,
    pr,
    vr,
    gr,
    hr,
    ci,
    k1,
    rm,
    ja,
    nm,
    ni,
    U1,
    W1,
    B1,
    Yh,
    K1,
    Y1,
    Q1,
    Z1,
    J1,
    Ka,
    nD,
    iD,
    oD,
    aD,
    fD,
    dD,
    pD,
    am,
    cm = me(() => {
      "use strict";
      (ht = fe(Oh())), (si = fe(Gh())), (ii = fe(Hh())), (ui = fe(Jt()));
      Ge();
      Bh();
      Ra();
      Ga();
      Jn();
      ({
        BACKGROUND: I1,
        TRANSFORM: w1,
        TRANSLATE_3D: O1,
        SCALE_3D: x1,
        ROTATE_X: A1,
        ROTATE_Y: S1,
        ROTATE_Z: R1,
        SKEW: C1,
        PRESERVE_3D: L1,
        FLEX: N1,
        OPACITY: oi,
        FILTER: $r,
        FONT_VARIATION_SETTINGS: Qr,
        WIDTH: ct,
        HEIGHT: lt,
        BACKGROUND_COLOR: Zh,
        BORDER_COLOR: P1,
        COLOR: M1,
        CHILDREN: jh,
        IMMEDIATE_CHILDREN: q1,
        SIBLINGS: zh,
        PARENT: D1,
        DISPLAY: ai,
        WILL_CHANGE: cr,
        AUTO: At,
        COMMA_DELIMITER: Zr,
        COLON_DELIMITER: F1,
        BAR_DELIMITER: Ha,
        RENDER_TRANSFORM: Jh,
        RENDER_GENERAL: Xa,
        RENDER_STYLE: Ba,
        RENDER_PLUGIN: em,
      } = Ce),
        ({
          TRANSFORM_MOVE: lr,
          TRANSFORM_SCALE: fr,
          TRANSFORM_ROTATE: dr,
          TRANSFORM_SKEW: Jr,
          STYLE_OPACITY: tm,
          STYLE_FILTER: en,
          STYLE_FONT_VARIATION: tn,
          STYLE_SIZE: pr,
          STYLE_BACKGROUND_COLOR: vr,
          STYLE_BORDER: gr,
          STYLE_TEXT_COLOR: hr,
          GENERAL_DISPLAY: ci,
          OBJECT_VALUE: k1,
        } = He),
        (rm = (e) => e.trim()),
        (ja = Object.freeze({ [vr]: Zh, [gr]: P1, [hr]: M1 })),
        (nm = Object.freeze({
          [xt]: w1,
          [Zh]: I1,
          [oi]: oi,
          [$r]: $r,
          [ct]: ct,
          [lt]: lt,
          [Qr]: Qr,
        })),
        (ni = new Map());
      U1 = 1;
      W1 = 1;
      B1 = (e, t) => e === t;
      (Yh = /px/),
        (K1 = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = nD[n.type]), r),
            e || {}
          )),
        (Y1 = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
              (r[n.type] = iD[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (Q1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (Z1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (J1 = (e, t, r) => {
          if (Ft(e)) return Ma(e)(r, t);
          switch (e) {
            case en: {
              let n = (0, ii.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case tn: {
              let n = (0, ii.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Ka = {
        [lr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [fr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [dr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Jr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (nD = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (iD = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (oD = (e, t) => {
          let r = (0, ii.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (aD = Object.keys(Ka));
      (fD = "\\(([^)]+)\\)"), (dD = /^rgb/), (pD = RegExp(`rgba?${fD}`));
      am =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
          (n) => {
            switch (t) {
              case lr:
              case fr:
              case dr:
              case Jr:
                e(n, xt, r);
                break;
              case en:
                e(n, $r, r);
                break;
              case tn:
                e(n, Qr, r);
                break;
              case tm:
                e(n, oi, r);
                break;
              case pr:
                e(n, ct, r), e(n, lt, r);
                break;
              case vr:
              case gr:
              case hr:
                e(n, ja[t], r);
                break;
              case ci:
                e(n, ai, r);
                break;
            }
          };
    });
  var Ut = c((Me) => {
    "use strict";
    var mr = gn().default;
    Object.defineProperty(Me, "__esModule", { value: !0 });
    Me.IX2VanillaUtils =
      Me.IX2VanillaPlugins =
      Me.IX2ElementsReducer =
      Me.IX2Easings =
      Me.IX2EasingUtils =
      Me.IX2BrowserSupport =
      void 0;
    var SD = mr((Jn(), nt(oh)));
    Me.IX2BrowserSupport = SD;
    var RD = mr((Sa(), nt(Kr)));
    Me.IX2Easings = RD;
    var CD = mr((Ra(), nt(dh)));
    Me.IX2EasingUtils = CD;
    var LD = mr((hh(), nt(gh)));
    Me.IX2ElementsReducer = LD;
    var ND = mr((Ga(), nt(Ih)));
    Me.IX2VanillaPlugins = ND;
    var PD = mr((cm(), nt(um)));
    Me.IX2VanillaUtils = PD;
  });
  var fi,
    mt,
    MD,
    qD,
    DD,
    FD,
    kD,
    GD,
    li,
    lm,
    UD,
    VD,
    Ya,
    WD,
    HD,
    XD,
    BD,
    fm,
    dm = me(() => {
      "use strict";
      Ge();
      (fi = fe(Ut())),
        (mt = fe(Jt())),
        ({
          IX2_RAW_DATA_IMPORTED: MD,
          IX2_SESSION_STOPPED: qD,
          IX2_INSTANCE_ADDED: DD,
          IX2_INSTANCE_STARTED: FD,
          IX2_INSTANCE_REMOVED: kD,
          IX2_ANIMATION_FRAME_CHANGED: GD,
        } = Ie),
        ({
          optimizeFloat: li,
          applyEasing: lm,
          createBezierEasing: UD,
        } = fi.IX2EasingUtils),
        ({ RENDER_GENERAL: VD } = Ce),
        ({
          getItemConfigByKey: Ya,
          getRenderType: WD,
          getStyleProp: HD,
        } = fi.IX2VanillaUtils),
        (XD = (e, t) => {
          let {
            position: r,
            parameterId: n,
            actionGroups: i,
            destinationKeys: o,
            smoothing: a,
            restingValue: s,
            actionTypeId: u,
            customEasingFn: d,
            skipMotion: m,
            skipToValue: v,
          } = e,
            { parameters: y } = t.payload,
            _ = Math.max(1 - a, 0.01),
            b = y[n];
          b == null && ((_ = 1), (b = s));
          let O = Math.max(b, 0) || 0,
            q = li(O - r),
            x = m ? v : li(r + q * _),
            E = x * 100;
          if (x === r && e.current) return e;
          let C, M, F, P;
          for (let K = 0, { length: Y } = i; K < Y; K++) {
            let { keyframe: J, actionItems: H } = i[K];
            if ((K === 0 && (C = H[0]), E >= J)) {
              C = H[0];
              let S = i[K + 1],
                h = S && E !== J;
              (M = h ? S.actionItems[0] : null),
                h && ((F = J / 100), (P = (S.keyframe - J) / 100));
            }
          }
          let j = {};
          if (C && !M)
            for (let K = 0, { length: Y } = o; K < Y; K++) {
              let J = o[K];
              j[J] = Ya(u, J, C.config);
            }
          else if (C && M && F !== void 0 && P !== void 0) {
            let K = (x - F) / P,
              Y = C.config.easing,
              J = lm(Y, K, d);
            for (let H = 0, { length: S } = o; H < S; H++) {
              let h = o[H],
                L = Ya(u, h, C.config),
                ee = (Ya(u, h, M.config) - L) * J + L;
              j[h] = ee;
            }
          }
          return (0, mt.merge)(e, { position: x, current: j });
        }),
        (BD = (e, t) => {
          let {
            active: r,
            origin: n,
            start: i,
            immediate: o,
            renderType: a,
            verbose: s,
            actionItem: u,
            destination: d,
            destinationKeys: m,
            pluginDuration: v,
            instanceDelay: y,
            customEasingFn: _,
            skipMotion: b,
          } = e,
            O = u.config.easing,
            { duration: q, delay: x } = u.config;
          v != null && (q = v),
            (x = y ?? x),
            a === VD ? (q = 0) : (o || b) && (q = x = 0);
          let { now: E } = t.payload;
          if (r && n) {
            let C = E - (i + x);
            if (s) {
              let K = E - i,
                Y = q + x,
                J = li(Math.min(Math.max(0, K / Y), 1));
              e = (0, mt.set)(e, "verboseTimeElapsed", Y * J);
            }
            if (C < 0) return e;
            let M = li(Math.min(Math.max(0, C / q), 1)),
              F = lm(O, M, _),
              P = {},
              j = null;
            return (
              m.length &&
              (j = m.reduce((K, Y) => {
                let J = d[Y],
                  H = parseFloat(n[Y]) || 0,
                  h = (parseFloat(J) - H) * F + H;
                return (K[Y] = h), K;
              }, {})),
              (P.current = j),
              (P.position = M),
              M === 1 && ((P.active = !1), (P.complete = !0)),
              (0, mt.merge)(e, P)
            );
          }
          return e;
        }),
        (fm = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case MD:
              return t.payload.ixInstances || Object.freeze({});
            case qD:
              return Object.freeze({});
            case DD: {
              let {
                instanceId: r,
                elementId: n,
                actionItem: i,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: d,
                isCarrier: m,
                origin: v,
                destination: y,
                immediate: _,
                verbose: b,
                continuous: O,
                parameterId: q,
                actionGroups: x,
                smoothing: E,
                restingValue: C,
                pluginInstance: M,
                pluginDuration: F,
                instanceDelay: P,
                skipMotion: j,
                skipToValue: K,
              } = t.payload,
                { actionTypeId: Y } = i,
                J = WD(Y),
                H = HD(J, Y),
                S = Object.keys(y).filter(
                  (L) => y[L] != null && typeof y[L] != "string"
                ),
                { easing: h } = i.config;
              return (0, mt.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: v,
                destination: y,
                destinationKeys: S,
                immediate: _,
                verbose: b,
                current: null,
                actionItem: i,
                actionTypeId: Y,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: d,
                renderType: J,
                isCarrier: m,
                styleProp: H,
                continuous: O,
                parameterId: q,
                actionGroups: x,
                smoothing: E,
                restingValue: C,
                pluginInstance: M,
                pluginDuration: F,
                instanceDelay: P,
                skipMotion: j,
                skipToValue: K,
                customEasingFn:
                  Array.isArray(h) && h.length === 4 ? UD(h) : void 0,
              });
            }
            case FD: {
              let { instanceId: r, time: n } = t.payload;
              return (0, mt.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case kD: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case GD: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  u = s.continuous ? XD : BD;
                r = (0, mt.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var jD,
    zD,
    KD,
    pm,
    vm = me(() => {
      "use strict";
      Ge();
      ({
        IX2_RAW_DATA_IMPORTED: jD,
        IX2_SESSION_STOPPED: zD,
        IX2_PARAMETER_CHANGED: KD,
      } = Ie),
        (pm = (e = {}, t) => {
          switch (t.type) {
            case jD:
              return t.payload.ixParameters || {};
            case zD:
              return {};
            case KD: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var mm = {};
  ke(mm, { default: () => $D });
  var gm,
    hm,
    YD,
    $D,
    ym = me(() => {
      "use strict";
      gm = fe(jo());
      Cf();
      Qf();
      ed();
      hm = fe(Ut());
      dm();
      vm();
      ({ ixElements: YD } = hm.IX2ElementsReducer),
        ($D = (0, gm.combineReducers)({
          ixData: Rf,
          ixRequest: $f,
          ixSession: Jf,
          ixElements: YD,
          ixInstances: fm,
          ixParameters: pm,
        }));
    });
  var _m = c((zB, Em) => {
    var QD = It(),
      ZD = Oe(),
      JD = vt(),
      eF = "[object String]";
    function tF(e) {
      return typeof e == "string" || (!ZD(e) && JD(e) && QD(e) == eF);
    }
    Em.exports = tF;
  });
  var Tm = c((KB, bm) => {
    var rF = ba(),
      nF = rF("length");
    bm.exports = nF;
  });
  var wm = c((YB, Im) => {
    var iF = "\\ud800-\\udfff",
      oF = "\\u0300-\\u036f",
      aF = "\\ufe20-\\ufe2f",
      sF = "\\u20d0-\\u20ff",
      uF = oF + aF + sF,
      cF = "\\ufe0e\\ufe0f",
      lF = "\\u200d",
      fF = RegExp("[" + lF + iF + uF + cF + "]");
    function dF(e) {
      return fF.test(e);
    }
    Im.exports = dF;
  });
  var Pm = c(($B, Nm) => {
    var xm = "\\ud800-\\udfff",
      pF = "\\u0300-\\u036f",
      vF = "\\ufe20-\\ufe2f",
      gF = "\\u20d0-\\u20ff",
      hF = pF + vF + gF,
      mF = "\\ufe0e\\ufe0f",
      yF = "[" + xm + "]",
      $a = "[" + hF + "]",
      Qa = "\\ud83c[\\udffb-\\udfff]",
      EF = "(?:" + $a + "|" + Qa + ")",
      Am = "[^" + xm + "]",
      Sm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Rm = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      _F = "\\u200d",
      Cm = EF + "?",
      Lm = "[" + mF + "]?",
      bF = "(?:" + _F + "(?:" + [Am, Sm, Rm].join("|") + ")" + Lm + Cm + ")*",
      TF = Lm + Cm + bF,
      IF = "(?:" + [Am + $a + "?", $a, Sm, Rm, yF].join("|") + ")",
      Om = RegExp(Qa + "(?=" + Qa + ")|" + IF + TF, "g");
    function wF(e) {
      for (var t = (Om.lastIndex = 0); Om.test(e);) ++t;
      return t;
    }
    Nm.exports = wF;
  });
  var qm = c((QB, Mm) => {
    var OF = Tm(),
      xF = wm(),
      AF = Pm();
    function SF(e) {
      return xF(e) ? AF(e) : OF(e);
    }
    Mm.exports = SF;
  });
  var Fm = c((ZB, Dm) => {
    var RF = Hn(),
      CF = Xn(),
      LF = qt(),
      NF = _m(),
      PF = qm(),
      MF = "[object Map]",
      qF = "[object Set]";
    function DF(e) {
      if (e == null) return 0;
      if (LF(e)) return NF(e) ? PF(e) : e.length;
      var t = CF(e);
      return t == MF || t == qF ? e.size : RF(e).length;
    }
    Dm.exports = DF;
  });
  var Gm = c((JB, km) => {
    var FF = "Expected a function";
    function kF(e) {
      if (typeof e != "function") throw new TypeError(FF);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    km.exports = kF;
  });
  var Za = c((ej, Um) => {
    var GF = wt(),
      UF = (function () {
        try {
          var e = GF(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch { }
      })();
    Um.exports = UF;
  });
  var Ja = c((tj, Wm) => {
    var Vm = Za();
    function VF(e, t, r) {
      t == "__proto__" && Vm
        ? Vm(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Wm.exports = VF;
  });
  var Xm = c((rj, Hm) => {
    var WF = Ja(),
      HF = Pn(),
      XF = Object.prototype,
      BF = XF.hasOwnProperty;
    function jF(e, t, r) {
      var n = e[t];
      (!(BF.call(e, t) && HF(n, r)) || (r === void 0 && !(t in e))) &&
        WF(e, t, r);
    }
    Hm.exports = jF;
  });
  var zm = c((nj, jm) => {
    var zF = Xm(),
      KF = Br(),
      YF = Gn(),
      Bm = ut(),
      $F = sr();
    function QF(e, t, r, n) {
      if (!Bm(e)) return e;
      t = KF(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
        var u = $F(t[i]),
          d = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != a) {
          var m = s[u];
          (d = n ? n(m, u, s) : void 0),
            d === void 0 && (d = Bm(m) ? m : YF(t[i + 1]) ? [] : {});
        }
        zF(s, u, d), (s = s[u]);
      }
      return e;
    }
    jm.exports = QF;
  });
  var Ym = c((ij, Km) => {
    var ZF = zn(),
      JF = zm(),
      e2 = Br();
    function t2(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i;) {
        var a = t[n],
          s = ZF(e, a);
        r(s, a) && JF(o, e2(a, e), s);
      }
      return o;
    }
    Km.exports = t2;
  });
  var Qm = c((oj, $m) => {
    var r2 = Fn(),
      n2 = Po(),
      i2 = aa(),
      o2 = oa(),
      a2 = Object.getOwnPropertySymbols,
      s2 = a2
        ? function (e) {
          for (var t = []; e;) r2(t, i2(e)), (e = n2(e));
          return t;
        }
        : o2;
    $m.exports = s2;
  });
  var Jm = c((aj, Zm) => {
    function u2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    Zm.exports = u2;
  });
  var ty = c((sj, ey) => {
    var c2 = ut(),
      l2 = Wn(),
      f2 = Jm(),
      d2 = Object.prototype,
      p2 = d2.hasOwnProperty;
    function v2(e) {
      if (!c2(e)) return f2(e);
      var t = l2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !p2.call(e, n))) || r.push(n);
      return r;
    }
    ey.exports = v2;
  });
  var ny = c((uj, ry) => {
    var g2 = ua(),
      h2 = ty(),
      m2 = qt();
    function y2(e) {
      return m2(e) ? g2(e, !0) : h2(e);
    }
    ry.exports = y2;
  });
  var oy = c((cj, iy) => {
    var E2 = ia(),
      _2 = Qm(),
      b2 = ny();
    function T2(e) {
      return E2(e, b2, _2);
    }
    iy.exports = T2;
  });
  var sy = c((lj, ay) => {
    var I2 = _a(),
      w2 = Ot(),
      O2 = Ym(),
      x2 = oy();
    function A2(e, t) {
      if (e == null) return {};
      var r = I2(x2(e), function (n) {
        return [n];
      });
      return (
        (t = w2(t)),
        O2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    ay.exports = A2;
  });
  var cy = c((fj, uy) => {
    var S2 = Ot(),
      R2 = Gm(),
      C2 = sy();
    function L2(e, t) {
      return C2(e, R2(S2(t)));
    }
    uy.exports = L2;
  });
  var fy = c((dj, ly) => {
    var N2 = Hn(),
      P2 = Xn(),
      M2 = Gr(),
      q2 = Oe(),
      D2 = qt(),
      F2 = kn(),
      k2 = Wn(),
      G2 = Vn(),
      U2 = "[object Map]",
      V2 = "[object Set]",
      W2 = Object.prototype,
      H2 = W2.hasOwnProperty;
    function X2(e) {
      if (e == null) return !0;
      if (
        D2(e) &&
        (q2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          F2(e) ||
          G2(e) ||
          M2(e))
      )
        return !e.length;
      var t = P2(e);
      if (t == U2 || t == V2) return !e.size;
      if (k2(e)) return !N2(e).length;
      for (var r in e) if (H2.call(e, r)) return !1;
      return !0;
    }
    ly.exports = X2;
  });
  var py = c((pj, dy) => {
    var B2 = Ja(),
      j2 = Ua(),
      z2 = Ot();
    function K2(e, t) {
      var r = {};
      return (
        (t = z2(t, 3)),
        j2(e, function (n, i, o) {
          B2(r, i, t(n, i, o));
        }),
        r
      );
    }
    dy.exports = K2;
  });
  var gy = c((vj, vy) => {
    function Y2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    vy.exports = Y2;
  });
  var my = c((gj, hy) => {
    var $2 = Yn();
    function Q2(e) {
      return typeof e == "function" ? e : $2;
    }
    hy.exports = Q2;
  });
  var Ey = c((hj, yy) => {
    var Z2 = gy(),
      J2 = Va(),
      ek = my(),
      tk = Oe();
    function rk(e, t) {
      var r = tk(e) ? Z2 : J2;
      return r(e, ek(t));
    }
    yy.exports = rk;
  });
  var by = c((mj, _y) => {
    var nk = Qe(),
      ik = function () {
        return nk.Date.now();
      };
    _y.exports = ik;
  });
  var wy = c((yj, Iy) => {
    var ok = ut(),
      es = by(),
      Ty = $n(),
      ak = "Expected a function",
      sk = Math.max,
      uk = Math.min;
    function ck(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        d = 0,
        m = !1,
        v = !1,
        y = !0;
      if (typeof e != "function") throw new TypeError(ak);
      (t = Ty(t) || 0),
        ok(r) &&
        ((m = !!r.leading),
          (v = "maxWait" in r),
          (o = v ? sk(Ty(r.maxWait) || 0, t) : o),
          (y = "trailing" in r ? !!r.trailing : y));
      function _(P) {
        var j = n,
          K = i;
        return (n = i = void 0), (d = P), (a = e.apply(K, j)), a;
      }
      function b(P) {
        return (d = P), (s = setTimeout(x, t)), m ? _(P) : a;
      }
      function O(P) {
        var j = P - u,
          K = P - d,
          Y = t - j;
        return v ? uk(Y, o - K) : Y;
      }
      function q(P) {
        var j = P - u,
          K = P - d;
        return u === void 0 || j >= t || j < 0 || (v && K >= o);
      }
      function x() {
        var P = es();
        if (q(P)) return E(P);
        s = setTimeout(x, O(P));
      }
      function E(P) {
        return (s = void 0), y && n ? _(P) : ((n = i = void 0), a);
      }
      function C() {
        s !== void 0 && clearTimeout(s), (d = 0), (n = u = i = s = void 0);
      }
      function M() {
        return s === void 0 ? a : E(es());
      }
      function F() {
        var P = es(),
          j = q(P);
        if (((n = arguments), (i = this), (u = P), j)) {
          if (s === void 0) return b(u);
          if (v) return clearTimeout(s), (s = setTimeout(x, t)), _(u);
        }
        return s === void 0 && (s = setTimeout(x, t)), a;
      }
      return (F.cancel = C), (F.flush = M), F;
    }
    Iy.exports = ck;
  });
  var xy = c((Ej, Oy) => {
    var lk = wy(),
      fk = ut(),
      dk = "Expected a function";
    function pk(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(dk);
      return (
        fk(r) &&
        ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        lk(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    Oy.exports = pk;
  });
  var Sy = {};
  ke(Sy, {
    actionListPlaybackChanged: () => Er,
    animationFrameChanged: () => pi,
    clearRequested: () => kk,
    elementStateChanged: () => us,
    eventListenerAdded: () => di,
    eventStateChanged: () => os,
    instanceAdded: () => as,
    instanceRemoved: () => ss,
    instanceStarted: () => vi,
    mediaQueriesDefined: () => ls,
    parameterChanged: () => yr,
    playbackRequested: () => Dk,
    previewRequested: () => qk,
    rawDataImported: () => ts,
    sessionInitialized: () => rs,
    sessionStarted: () => ns,
    sessionStopped: () => is,
    stopRequested: () => Fk,
    testFrameRendered: () => Gk,
    viewportWidthChanged: () => cs,
  });
  var Ay,
    vk,
    gk,
    hk,
    mk,
    yk,
    Ek,
    _k,
    bk,
    Tk,
    Ik,
    wk,
    Ok,
    xk,
    Ak,
    Sk,
    Rk,
    Ck,
    Lk,
    Nk,
    Pk,
    Mk,
    ts,
    rs,
    ns,
    is,
    qk,
    Dk,
    Fk,
    kk,
    di,
    Gk,
    os,
    pi,
    yr,
    as,
    vi,
    ss,
    us,
    Er,
    cs,
    ls,
    gi = me(() => {
      "use strict";
      Ge();
      (Ay = fe(Ut())),
        ({
          IX2_RAW_DATA_IMPORTED: vk,
          IX2_SESSION_INITIALIZED: gk,
          IX2_SESSION_STARTED: hk,
          IX2_SESSION_STOPPED: mk,
          IX2_PREVIEW_REQUESTED: yk,
          IX2_PLAYBACK_REQUESTED: Ek,
          IX2_STOP_REQUESTED: _k,
          IX2_CLEAR_REQUESTED: bk,
          IX2_EVENT_LISTENER_ADDED: Tk,
          IX2_TEST_FRAME_RENDERED: Ik,
          IX2_EVENT_STATE_CHANGED: wk,
          IX2_ANIMATION_FRAME_CHANGED: Ok,
          IX2_PARAMETER_CHANGED: xk,
          IX2_INSTANCE_ADDED: Ak,
          IX2_INSTANCE_STARTED: Sk,
          IX2_INSTANCE_REMOVED: Rk,
          IX2_ELEMENT_STATE_CHANGED: Ck,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: Lk,
          IX2_VIEWPORT_WIDTH_CHANGED: Nk,
          IX2_MEDIA_QUERIES_DEFINED: Pk,
        } = Ie),
        ({ reifyState: Mk } = Ay.IX2VanillaUtils),
        (ts = (e) => ({ type: vk, payload: { ...Mk(e) } })),
        (rs = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: gk,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (ns = () => ({ type: hk })),
        (is = () => ({ type: mk })),
        (qk = ({ rawData: e, defer: t }) => ({
          type: yk,
          payload: { defer: t, rawData: e },
        })),
        (Dk = ({
          actionTypeId: e = He.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: Ek,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (Fk = (e) => ({ type: _k, payload: { actionListId: e } })),
        (kk = () => ({ type: bk })),
        (di = (e, t) => ({
          type: Tk,
          payload: { target: e, listenerParams: t },
        })),
        (Gk = (e = 1) => ({ type: Ik, payload: { step: e } })),
        (os = (e, t) => ({ type: wk, payload: { stateKey: e, newState: t } })),
        (pi = (e, t) => ({ type: Ok, payload: { now: e, parameters: t } })),
        (yr = (e, t) => ({ type: xk, payload: { key: e, value: t } })),
        (as = (e) => ({ type: Ak, payload: { ...e } })),
        (vi = (e, t) => ({ type: Sk, payload: { instanceId: e, time: t } })),
        (ss = (e) => ({ type: Rk, payload: { instanceId: e } })),
        (us = (e, t, r, n) => ({
          type: Ck,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (Er = ({ actionListId: e, isPlaying: t }) => ({
          type: Lk,
          payload: { actionListId: e, isPlaying: t },
        })),
        (cs = ({ width: e, mediaQueries: t }) => ({
          type: Nk,
          payload: { width: e, mediaQueries: t },
        })),
        (ls = () => ({ type: Pk }));
    });
  var qe = {};
  ke(qe, {
    elementContains: () => ps,
    getChildElements: () => Yk,
    getClosestElement: () => rn,
    getProperty: () => Xk,
    getQuerySelector: () => ds,
    getRefType: () => vs,
    getSiblingElements: () => $k,
    getStyle: () => Hk,
    getValidDocument: () => jk,
    isSiblingNode: () => Kk,
    matchSelector: () => Bk,
    queryDocument: () => zk,
    setStyle: () => Wk,
  });
  function Wk(e, t, r) {
    e.style[t] = r;
  }
  function Hk(e, t) {
    return e.style[t];
  }
  function Xk(e, t) {
    return e[t];
  }
  function Bk(e) {
    return (t) => t[fs](e);
  }
  function ds({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Ry) !== -1) {
        let n = e.split(Ry),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(Ly)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function jk(e) {
    return e == null || e === document.documentElement.getAttribute(Ly)
      ? document
      : null;
  }
  function zk(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function ps(e, t) {
    return e.contains(t);
  }
  function Kk(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function Yk(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function $k(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null;)
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function vs(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? Uk
        : Vk
      : null;
  }
  var Cy,
    fs,
    Ry,
    Uk,
    Vk,
    Ly,
    rn,
    Ny = me(() => {
      "use strict";
      Cy = fe(Ut());
      Ge();
      ({ ELEMENT_MATCHES: fs } = Cy.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Ry,
          HTML_ELEMENT: Uk,
          PLAIN_OBJECT: Vk,
          WF_PAGE: Ly,
        } = Ce);
      rn = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
            if (r[fs] && r[fs](t)) return r;
            r = r.parentNode;
          } while (r != null);
          return null;
        };
    });
  var gs = c((Tj, My) => {
    var Qk = ut(),
      Py = Object.create,
      Zk = (function () {
        function e() { }
        return function (t) {
          if (!Qk(t)) return {};
          if (Py) return Py(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    My.exports = Zk;
  });
  var hi = c((Ij, qy) => {
    function Jk() { }
    qy.exports = Jk;
  });
  var yi = c((wj, Dy) => {
    var eG = gs(),
      tG = hi();
    function mi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    mi.prototype = eG(tG.prototype);
    mi.prototype.constructor = mi;
    Dy.exports = mi;
  });
  var Uy = c((Oj, Gy) => {
    var Fy = $t(),
      rG = Gr(),
      nG = Oe(),
      ky = Fy ? Fy.isConcatSpreadable : void 0;
    function iG(e) {
      return nG(e) || rG(e) || !!(ky && e && e[ky]);
    }
    Gy.exports = iG;
  });
  var Hy = c((xj, Wy) => {
    var oG = Fn(),
      aG = Uy();
    function Vy(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = aG), i || (i = []); ++o < a;) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? Vy(s, t - 1, r, n, i)
            : oG(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    Wy.exports = Vy;
  });
  var By = c((Aj, Xy) => {
    var sG = Hy();
    function uG(e) {
      var t = e == null ? 0 : e.length;
      return t ? sG(e, 1) : [];
    }
    Xy.exports = uG;
  });
  var zy = c((Sj, jy) => {
    function cG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    jy.exports = cG;
  });
  var $y = c((Rj, Yy) => {
    var lG = zy(),
      Ky = Math.max;
    function fG(e, t, r) {
      return (
        (t = Ky(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = Ky(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t;) s[i] = n[i];
          return (s[t] = r(a)), lG(e, this, s);
        }
      );
    }
    Yy.exports = fG;
  });
  var Zy = c((Cj, Qy) => {
    function dG(e) {
      return function () {
        return e;
      };
    }
    Qy.exports = dG;
  });
  var tE = c((Lj, eE) => {
    var pG = Zy(),
      Jy = Za(),
      vG = Yn(),
      gG = Jy
        ? function (e, t) {
          return Jy(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: pG(t),
            writable: !0,
          });
        }
        : vG;
    eE.exports = gG;
  });
  var nE = c((Nj, rE) => {
    var hG = 800,
      mG = 16,
      yG = Date.now;
    function EG(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = yG(),
          i = mG - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= hG) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    rE.exports = EG;
  });
  var oE = c((Pj, iE) => {
    var _G = tE(),
      bG = nE(),
      TG = bG(_G);
    iE.exports = TG;
  });
  var sE = c((Mj, aE) => {
    var IG = By(),
      wG = $y(),
      OG = oE();
    function xG(e) {
      return OG(wG(e, void 0, IG), e + "");
    }
    aE.exports = xG;
  });
  var lE = c((qj, cE) => {
    var uE = ca(),
      AG = uE && new uE();
    cE.exports = AG;
  });
  var dE = c((Dj, fE) => {
    function SG() { }
    fE.exports = SG;
  });
  var hs = c((Fj, vE) => {
    var pE = lE(),
      RG = dE(),
      CG = pE
        ? function (e) {
          return pE.get(e);
        }
        : RG;
    vE.exports = CG;
  });
  var hE = c((kj, gE) => {
    var LG = {};
    gE.exports = LG;
  });
  var ms = c((Gj, yE) => {
    var mE = hE(),
      NG = Object.prototype,
      PG = NG.hasOwnProperty;
    function MG(e) {
      for (
        var t = e.name + "", r = mE[t], n = PG.call(mE, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    yE.exports = MG;
  });
  var _i = c((Uj, EE) => {
    var qG = gs(),
      DG = hi(),
      FG = 4294967295;
    function Ei(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = FG),
        (this.__views__ = []);
    }
    Ei.prototype = qG(DG.prototype);
    Ei.prototype.constructor = Ei;
    EE.exports = Ei;
  });
  var bE = c((Vj, _E) => {
    function kG(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
      return t;
    }
    _E.exports = kG;
  });
  var IE = c((Wj, TE) => {
    var GG = _i(),
      UG = yi(),
      VG = bE();
    function WG(e) {
      if (e instanceof GG) return e.clone();
      var t = new UG(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = VG(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    TE.exports = WG;
  });
  var xE = c((Hj, OE) => {
    var HG = _i(),
      wE = yi(),
      XG = hi(),
      BG = Oe(),
      jG = vt(),
      zG = IE(),
      KG = Object.prototype,
      YG = KG.hasOwnProperty;
    function bi(e) {
      if (jG(e) && !BG(e) && !(e instanceof HG)) {
        if (e instanceof wE) return e;
        if (YG.call(e, "__wrapped__")) return zG(e);
      }
      return new wE(e);
    }
    bi.prototype = XG.prototype;
    bi.prototype.constructor = bi;
    OE.exports = bi;
  });
  var SE = c((Xj, AE) => {
    var $G = _i(),
      QG = hs(),
      ZG = ms(),
      JG = xE();
    function eU(e) {
      var t = ZG(e),
        r = JG[t];
      if (typeof r != "function" || !(t in $G.prototype)) return !1;
      if (e === r) return !0;
      var n = QG(r);
      return !!n && e === n[0];
    }
    AE.exports = eU;
  });
  var NE = c((Bj, LE) => {
    var RE = yi(),
      tU = sE(),
      rU = hs(),
      ys = ms(),
      nU = Oe(),
      CE = SE(),
      iU = "Expected a function",
      oU = 8,
      aU = 32,
      sU = 128,
      uU = 256;
    function cU(e) {
      return tU(function (t) {
        var r = t.length,
          n = r,
          i = RE.prototype.thru;
        for (e && t.reverse(); n--;) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(iU);
          if (i && !a && ys(o) == "wrapper") var a = new RE([], !0);
        }
        for (n = a ? n : r; ++n < r;) {
          o = t[n];
          var s = ys(o),
            u = s == "wrapper" ? rU(o) : void 0;
          u &&
            CE(u[0]) &&
            u[1] == (sU | oU | aU | uU) &&
            !u[4].length &&
            u[9] == 1
            ? (a = a[ys(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && CE(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var d = arguments,
            m = d[0];
          if (a && d.length == 1 && nU(m)) return a.plant(m).value();
          for (var v = 0, y = r ? t[v].apply(this, d) : m; ++v < r;)
            y = t[v].call(this, y);
          return y;
        };
      });
    }
    LE.exports = cU;
  });
  var ME = c((jj, PE) => {
    var lU = NE(),
      fU = lU();
    PE.exports = fU;
  });
  var DE = c((zj, qE) => {
    function dU(e, t, r) {
      return (
        e === e &&
        (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    qE.exports = dU;
  });
  var kE = c((Kj, FE) => {
    var pU = DE(),
      Es = $n();
    function vU(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = Es(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = Es(t)), (t = t === t ? t : 0)),
        pU(Es(e), t, r)
      );
    }
    FE.exports = vU;
  });
  var zE,
    KE,
    YE,
    $E,
    gU,
    hU,
    mU,
    yU,
    EU,
    _U,
    bU,
    TU,
    IU,
    wU,
    OU,
    xU,
    AU,
    SU,
    RU,
    QE,
    ZE,
    CU,
    LU,
    NU,
    JE,
    PU,
    MU,
    e_,
    qU,
    _s,
    t_,
    GE,
    UE,
    r_,
    on,
    DU,
    ft,
    n_,
    FU,
    Ve,
    et,
    an,
    i_,
    bs,
    VE,
    Ts,
    kU,
    nn,
    GU,
    UU,
    VU,
    o_,
    WE,
    WU,
    HE,
    HU,
    XU,
    BU,
    XE,
    Ti,
    Ii,
    BE,
    jE,
    a_,
    s_ = me(() => {
      "use strict";
      (zE = fe(ME())), (KE = fe(Kn())), (YE = fe(kE()));
      Ge();
      Is();
      gi();
      ($E = fe(Ut())),
        ({
          MOUSE_CLICK: gU,
          MOUSE_SECOND_CLICK: hU,
          MOUSE_DOWN: mU,
          MOUSE_UP: yU,
          MOUSE_OVER: EU,
          MOUSE_OUT: _U,
          DROPDOWN_CLOSE: bU,
          DROPDOWN_OPEN: TU,
          SLIDER_ACTIVE: IU,
          SLIDER_INACTIVE: wU,
          TAB_ACTIVE: OU,
          TAB_INACTIVE: xU,
          NAVBAR_CLOSE: AU,
          NAVBAR_OPEN: SU,
          MOUSE_MOVE: RU,
          PAGE_SCROLL_DOWN: QE,
          SCROLL_INTO_VIEW: ZE,
          SCROLL_OUT_OF_VIEW: CU,
          PAGE_SCROLL_UP: LU,
          SCROLLING_IN_VIEW: NU,
          PAGE_FINISH: JE,
          ECOMMERCE_CART_CLOSE: PU,
          ECOMMERCE_CART_OPEN: MU,
          PAGE_START: e_,
          PAGE_SCROLL: qU,
        } = Ze),
        (_s = "COMPONENT_ACTIVE"),
        (t_ = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: GE } = Ce),
        ({ getNamespacedParameterId: UE } = $E.IX2VanillaUtils),
        (r_ = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (on = r_(({ element: e, nativeEvent: t }) => e === t.target)),
        (DU = r_(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (ft = (0, zE.default)([on, DU])),
        (n_ = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !kU[i.eventTypeId]) return i;
          }
          return null;
        }),
        (FU = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!n_(e, n);
        }),
        (Ve = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            d = n_(e, u);
          return (
            d &&
            _r({
              store: e,
              eventId: u,
              eventTarget: r,
              eventStateKey: u + GE + n.split(GE)[1],
              actionListId: (0, KE.default)(d, "action.config.actionListId"),
            }),
            _r({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            sn({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (an = { handler: et(ft, Ve) }),
        (i_ = { ...an, types: [_s, t_].join(" ") }),
        (bs = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (VE = "mouseover mouseout"),
        (Ts = { types: bs }),
        (kU = { PAGE_START: e_, PAGE_FINISH: JE }),
        (nn = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, YE.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (GU = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (UU = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (VU = (e) => {
          let {
            element: t,
            event: { config: r },
          } = e,
            { clientWidth: n, clientHeight: i } = nn(),
            o = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return GU(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: i - u,
          });
        }),
        (o_ = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [_s, t_].indexOf(n) !== -1 ? n === _s : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (WE = (e) => (t, r) => {
          let n = { elementHovered: UU(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (WU = (e) => (t, r) => {
          let n = { ...r, elementVisible: VU(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (HE =
          (e) =>
            (t, r = {}) => {
              let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = nn(),
                {
                  event: { config: a, eventTypeId: s },
                } = t,
                { scrollOffsetValue: u, scrollOffsetUnit: d } = a,
                m = d === "PX",
                v = i - o,
                y = Number((n / v).toFixed(2));
              if (r && r.percentTop === y) return r;
              let _ = (m ? u : (o * (u || 0)) / 100) / v,
                b,
                O,
                q = 0;
              r &&
                ((b = y > r.percentTop),
                  (O = r.scrollingDown !== b),
                  (q = O ? y : r.anchorTop));
              let x = s === QE ? y >= q + _ : y <= q - _,
                E = {
                  ...r,
                  percentTop: y,
                  inBounds: x,
                  anchorTop: q,
                  scrollingDown: b,
                };
              return (r && x && (O || E.inBounds !== r.inBounds) && e(t, E)) || E;
            }),
        (HU = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (XU = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (BU = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (XE =
          (e) =>
            (t, r = { clickCount: 0 }) => {
              let n = { clickCount: (r.clickCount % 2) + 1 };
              return (n.clickCount !== r.clickCount && e(t, n)) || n;
            }),
        (Ti = (e = !0) => ({
          ...i_,
          handler: et(
            e ? ft : on,
            o_((t, r) => (r.isActive ? an.handler(t, r) : r))
          ),
        })),
        (Ii = (e = !0) => ({
          ...i_,
          handler: et(
            e ? ft : on,
            o_((t, r) => (r.isActive ? r : an.handler(t, r)))
          ),
        })),
        (BE = {
          ...Ts,
          handler: WU((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === ZE) === r
                ? (Ve(e), { ...t, triggered: !0 })
                : t;
          }),
        }),
        (jE = 0.05),
        (a_ = {
          [IU]: Ti(),
          [wU]: Ii(),
          [TU]: Ti(),
          [bU]: Ii(),
          [SU]: Ti(!1),
          [AU]: Ii(!1),
          [OU]: Ti(),
          [xU]: Ii(),
          [MU]: { types: "ecommerce-cart-open", handler: et(ft, Ve) },
          [PU]: { types: "ecommerce-cart-close", handler: et(ft, Ve) },
          [gU]: {
            types: "click",
            handler: et(
              ft,
              XE((e, { clickCount: t }) => {
                FU(e) ? t === 1 && Ve(e) : Ve(e);
              })
            ),
          },
          [hU]: {
            types: "click",
            handler: et(
              ft,
              XE((e, { clickCount: t }) => {
                t === 2 && Ve(e);
              })
            ),
          },
          [mU]: { ...an, types: "mousedown" },
          [yU]: { ...an, types: "mouseup" },
          [EU]: {
            types: VE,
            handler: et(
              ft,
              WE((e, t) => {
                t.elementHovered && Ve(e);
              })
            ),
          },
          [_U]: {
            types: VE,
            handler: et(
              ft,
              WE((e, t) => {
                t.elementHovered || Ve(e);
              })
            ),
          },
          [RU]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                basedOn: a,
                selectedAxis: s,
                continuousParameterGroupId: u,
                reverse: d,
                restingState: m = 0,
              } = r,
                {
                  clientX: v = o.clientX,
                  clientY: y = o.clientY,
                  pageX: _ = o.pageX,
                  pageY: b = o.pageY,
                } = n,
                O = s === "X_AXIS",
                q = n.type === "mouseout",
                x = m / 100,
                E = u,
                C = !1;
              switch (a) {
                case st.VIEWPORT: {
                  x = O
                    ? Math.min(v, window.innerWidth) / window.innerWidth
                    : Math.min(y, window.innerHeight) / window.innerHeight;
                  break;
                }
                case st.PAGE: {
                  let {
                    scrollLeft: M,
                    scrollTop: F,
                    scrollWidth: P,
                    scrollHeight: j,
                  } = nn();
                  x = O ? Math.min(M + _, P) / P : Math.min(F + b, j) / j;
                  break;
                }
                case st.ELEMENT:
                default: {
                  E = UE(i, u);
                  let M = n.type.indexOf("mouse") === 0;
                  if (M && ft({ element: t, nativeEvent: n }) !== !0) break;
                  let F = t.getBoundingClientRect(),
                    { left: P, top: j, width: K, height: Y } = F;
                  if (!M && !HU({ left: v, top: y }, F)) break;
                  (C = !0), (x = O ? (v - P) / K : (y - j) / Y);
                  break;
                }
              }
              return (
                q && (x > 1 - jE || x < jE) && (x = Math.round(x)),
                (a !== st.ELEMENT || C || C !== o.elementHovered) &&
                ((x = d ? 1 - x : x), e.dispatch(yr(E, x))),
                {
                  elementHovered: C,
                  clientX: v,
                  clientY: y,
                  pageX: _,
                  pageY: b,
                }
              );
            },
          },
          [qU]: {
            types: bs,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = nn(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(yr(r, s));
            },
          },
          [NU]: {
            types: bs,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                scrollLeft: o,
                scrollTop: a,
                scrollWidth: s,
                scrollHeight: u,
                clientHeight: d,
              } = nn(),
                {
                  basedOn: m,
                  selectedAxis: v,
                  continuousParameterGroupId: y,
                  startsEntering: _,
                  startsExiting: b,
                  addEndOffset: O,
                  addStartOffset: q,
                  addOffsetValue: x = 0,
                  endOffsetValue: E = 0,
                } = r,
                C = v === "X_AXIS";
              if (m === st.VIEWPORT) {
                let M = C ? o / s : a / u;
                return (
                  M !== i.scrollPercent && t.dispatch(yr(y, M)),
                  { scrollPercent: M }
                );
              } else {
                let M = UE(n, y),
                  F = e.getBoundingClientRect(),
                  P = (q ? x : 0) / 100,
                  j = (O ? E : 0) / 100;
                (P = _ ? P : 1 - P), (j = b ? j : 1 - j);
                let K = F.top + Math.min(F.height * P, d),
                  J = F.top + F.height * j - K,
                  H = Math.min(d + J, u),
                  h = Math.min(Math.max(0, d - K), H) / H;
                return (
                  h !== i.scrollPercent && t.dispatch(yr(M, h)),
                  { scrollPercent: h }
                );
              }
            },
          },
          [ZE]: BE,
          [CU]: BE,
          [QE]: {
            ...Ts,
            handler: HE((e, t) => {
              t.scrollingDown && Ve(e);
            }),
          },
          [LU]: {
            ...Ts,
            handler: HE((e, t) => {
              t.scrollingDown || Ve(e);
            }),
          },
          [JE]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(on, XU(Ve)),
          },
          [e_]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(on, BU(Ve)),
          },
        });
    });
  var w_ = {};
  ke(w_, {
    observeRequests: () => fV,
    startActionGroup: () => sn,
    startEngine: () => Ri,
    stopActionGroup: () => _r,
    stopAllActionGroups: () => b_,
    stopEngine: () => Ci,
  });
  function fV(e) {
    Vt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: vV }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: gV }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: hV }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: mV });
  }
  function dV(e) {
    Vt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Ci(e),
          m_({ store: e, elementApi: qe }),
          Ri({ store: e, allowEvents: !0 }),
          y_();
      },
    });
  }
  function pV(e, t) {
    let r = Vt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function vV({ rawData: e, defer: t }, r) {
    let n = () => {
      Ri({ store: r, rawData: e, allowEvents: !0 }), y_();
    };
    t ? setTimeout(n, 0) : n();
  }
  function y_() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function gV(e, t) {
    let {
      actionTypeId: r,
      actionListId: n,
      actionItemId: i,
      eventId: o,
      allowEvents: a,
      immediate: s,
      testManual: u,
      verbose: d = !0,
    } = e,
      { rawData: m } = e;
    if (n && i && m && s) {
      let v = m.actionLists[n];
      v && (m = eV({ actionList: v, actionItemId: i, rawData: m }));
    }
    if (
      (Ri({ store: t, rawData: m, allowEvents: a, testManual: u }),
        (n && r === He.GENERAL_START_ACTION) || ws(r))
    ) {
      _r({ store: t, actionListId: n }),
        __({ store: t, actionListId: n, eventId: o });
      let v = sn({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: d,
      });
      d && v && t.dispatch(Er({ actionListId: n, isPlaying: !s }));
    }
  }
  function hV({ actionListId: e }, t) {
    e ? _r({ store: t, actionListId: e }) : b_({ store: t }), Ci(t);
  }
  function mV(e, t) {
    Ci(t), m_({ store: t, elementApi: qe });
  }
  function Ri({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(ts(t)),
      i.active ||
      (e.dispatch(
        rs({
          hasBoundaryNodes: !!document.querySelector(Oi),
          reducedMotion:
            document.body.hasAttribute("data-wf-ix-vacation") &&
            window.matchMedia("(prefers-reduced-motion)").matches,
        })
      ),
        r &&
        (IV(e), yV(), e.getState().ixSession.hasDefinedMediaQueries && dV(e)),
        e.dispatch(ns()),
        EV(e, n));
  }
  function yV() {
    let { documentElement: e } = document;
    e.className.indexOf(u_) === -1 && (e.className += ` ${u_}`);
  }
  function EV(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(pi(n, o)), t ? pV(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Ci(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(_V), iV(), e.dispatch(is());
    }
  }
  function _V({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function bV({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: d, ixSession: m } = e.getState(),
      { events: v } = d,
      y = v[n],
      { eventTypeId: _ } = y,
      b = {},
      O = {},
      q = [],
      { continuousActionGroups: x } = a,
      { id: E } = a;
    tV(_, i) && (E = rV(t, E));
    let C = m.hasBoundaryNodes && r ? rn(r, Oi) : null;
    x.forEach((M) => {
      let { keyframe: F, actionItems: P } = M;
      P.forEach((j) => {
        let { actionTypeId: K } = j,
          { target: Y } = j.config;
        if (!Y) return;
        let J = Y.boundaryMode ? C : null,
          H = oV(Y) + Os + K;
        if (((O[H] = TV(O[H], F, j)), !b[H])) {
          b[H] = !0;
          let { config: S } = j;
          xi({
            config: S,
            event: y,
            eventTarget: r,
            elementRoot: J,
            elementApi: qe,
          }).forEach((h) => {
            q.push({ element: h, key: H });
          });
        }
      });
    }),
      q.forEach(({ element: M, key: F }) => {
        let P = O[F],
          j = (0, yt.default)(P, "[0].actionItems[0]", {}),
          { actionTypeId: K } = j,
          Y = Si(K) ? As(K)(M, j) : null,
          J = xs({ element: M, actionItem: j, elementApi: qe }, Y);
        Ss({
          store: e,
          element: M,
          eventId: n,
          actionListId: o,
          actionItem: j,
          destination: J,
          continuous: !0,
          parameterId: E,
          actionGroups: P,
          smoothing: s,
          restingValue: u,
          pluginInstance: Y,
        });
      });
  }
  function TV(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function IV(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    E_(e),
      (0, br.default)(r, (i, o) => {
        let a = a_[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        RV({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && OV(e);
  }
  function OV(e) {
    let t = () => {
      E_(e);
    };
    wV.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(di(window, [r, t]));
    }),
      t();
  }
  function E_(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(cs({ width: n, mediaQueries: i }));
    }
  }
  function RV({ logic: e, store: t, events: r }) {
    CV(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = xV(r, SV);
    if (!(0, f_.default)(s)) return;
    (0, br.default)(s, (v, y) => {
      let _ = r[y],
        { action: b, id: O, mediaQueries: q = o.mediaQueryKeys } = _,
        { actionListId: x } = b.config;
      aV(q, o.mediaQueryKeys) || t.dispatch(ls()),
        b.actionTypeId === He.GENERAL_CONTINUOUS_ACTION &&
        (Array.isArray(_.config) ? _.config : [_.config]).forEach((C) => {
          let { continuousParameterGroupId: M } = C,
            F = (0, yt.default)(a, `${x}.continuousParameterGroups`, []),
            P = (0, l_.default)(F, ({ id: Y }) => Y === M),
            j = (C.smoothing || 0) / 100,
            K = (C.restingState || 0) / 100;
          P &&
            v.forEach((Y, J) => {
              let H = O + Os + J;
              bV({
                store: t,
                eventStateKey: H,
                eventTarget: Y,
                eventId: O,
                eventConfig: C,
                actionListId: x,
                parameterGroup: P,
                smoothing: j,
                restingValue: K,
              });
            });
        }),
        (b.actionTypeId === He.GENERAL_START_ACTION || ws(b.actionTypeId)) &&
        __({ store: t, actionListId: x, eventId: O });
    });
    let u = (v) => {
      let { ixSession: y } = t.getState();
      AV(s, (_, b, O) => {
        let q = r[b],
          x = y.eventState[O],
          { action: E, mediaQueries: C = o.mediaQueryKeys } = q;
        if (!Ai(C, y.mediaQueryKey)) return;
        let M = (F = {}) => {
          let P = i(
            {
              store: t,
              element: _,
              event: q,
              eventConfig: F,
              nativeEvent: v,
              eventStateKey: O,
            },
            x
          );
          sV(P, x) || t.dispatch(os(O, P));
        };
        E.actionTypeId === He.GENERAL_CONTINUOUS_ACTION
          ? (Array.isArray(q.config) ? q.config : [q.config]).forEach(M)
          : M();
      });
    },
      d = (0, g_.default)(u, lV),
      m = ({ target: v = document, types: y, throttle: _ }) => {
        y.split(" ")
          .filter(Boolean)
          .forEach((b) => {
            let O = _ ? d : u;
            v.addEventListener(b, O), t.dispatch(di(v, [b, O]));
          });
      };
    Array.isArray(n) ? n.forEach(m) : typeof n == "string" && m(e);
  }
  function CV(e) {
    if (!cV) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = ds(o);
      t[a] ||
        ((i === Ze.MOUSE_CLICK || i === Ze.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
            (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function __({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let d = (0, yt.default)(u, "actionItemGroups[0].actionItems", []),
        m = (0, yt.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!Ai(m, i.mediaQueryKey)) return;
      d.forEach((v) => {
        let { config: y, actionTypeId: _ } = v,
          b =
            y?.target?.useEventTarget === !0 && y?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : y,
          O = xi({ config: b, event: s, elementApi: qe }),
          q = Si(_);
        O.forEach((x) => {
          let E = q ? As(_)(x, v) : null;
          Ss({
            destination: xs({ element: x, actionItem: v, elementApi: qe }, E),
            immediate: !0,
            store: e,
            element: x,
            eventId: r,
            actionItem: v,
            actionListId: t,
            pluginInstance: E,
          });
        });
      });
    }
  }
  function b_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, br.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        Rs(r, e), i && e.dispatch(Er({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function _r({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? rn(r, Oi) : null;
    (0, br.default)(o, (u) => {
      let d = (0, yt.default)(u, "actionItem.config.target.boundaryMode"),
        m = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && m) {
        if (s && d && !ps(s, u.element)) return;
        Rs(u, e),
          u.verbose && e.dispatch(Er({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function sn({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: d } = e.getState(),
      { events: m } = u,
      v = m[t] || {},
      { mediaQueries: y = u.mediaQueryKeys } = v,
      _ = (0, yt.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: b, useFirstGroupAsInitialState: O } = _;
    if (!b || !b.length) return !1;
    o >= b.length && (0, yt.default)(v, "config.loop") && (o = 0),
      o === 0 && O && o++;
    let x =
      (o === 0 || (o === 1 && O)) && ws(v.action?.actionTypeId)
        ? v.config.delay
        : void 0,
      E = (0, yt.default)(b, [o, "actionItems"], []);
    if (!E.length || !Ai(y, d.mediaQueryKey)) return !1;
    let C = d.hasBoundaryNodes && r ? rn(r, Oi) : null,
      M = QU(E),
      F = !1;
    return (
      E.forEach((P, j) => {
        let { config: K, actionTypeId: Y } = P,
          J = Si(Y),
          { target: H } = K;
        if (!H) return;
        let S = H.boundaryMode ? C : null;
        xi({
          config: K,
          event: v,
          eventTarget: r,
          elementRoot: S,
          elementApi: qe,
        }).forEach((L, U) => {
          let X = J ? As(Y)(L, P) : null,
            ee = J ? uV(Y)(L, P) : null;
          F = !0;
          let re = M === j && U === 0,
            V = ZU({ element: L, actionItem: P }),
            z = xs({ element: L, actionItem: P, elementApi: qe }, X);
          Ss({
            store: e,
            element: L,
            actionItem: P,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: re,
            computedStyle: V,
            destination: z,
            immediate: a,
            verbose: s,
            pluginInstance: X,
            pluginDuration: ee,
            instanceDelay: x,
          });
        });
      }),
      F
    );
  }
  function Ss(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: d,
        eventId: m,
      } = n,
      v = !u,
      y = YU(),
      { ixElements: _, ixSession: b, ixData: O } = t.getState(),
      q = KU(_, i),
      { refState: x } = _[q] || {},
      E = vs(i),
      C = b.reducedMotion && $o[o.actionTypeId],
      M;
    if (C && u)
      switch (O.events[m]?.eventTypeId) {
        case Ze.MOUSE_MOVE:
        case Ze.MOUSE_MOVE_IN_VIEWPORT:
          M = d;
          break;
        default:
          M = 0.5;
          break;
      }
    let F = JU(i, x, r, o, qe, s);
    if (
      (t.dispatch(
        as({
          instanceId: y,
          elementId: q,
          origin: F,
          refType: E,
          skipMotion: C,
          skipToValue: M,
          ...n,
        })
      ),
        T_(document.body, "ix2-animation-started", y),
        a)
    ) {
      LV(t, y);
      return;
    }
    Vt({ store: t, select: ({ ixInstances: P }) => P[y], onChange: I_ }),
      v && t.dispatch(vi(y, b.tick));
  }
  function Rs(e, t) {
    T_(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === h_ && nV(o, n, qe), t.dispatch(ss(e.id));
  }
  function T_(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function LV(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(vi(t, 0)), e.dispatch(pi(performance.now(), r));
    let { ixInstances: n } = e.getState();
    I_(n[t], e);
  }
  function I_(e, t) {
    let {
      active: r,
      continuous: n,
      complete: i,
      elementId: o,
      actionItem: a,
      actionTypeId: s,
      renderType: u,
      current: d,
      groupIndex: m,
      eventId: v,
      eventTarget: y,
      eventStateKey: _,
      actionListId: b,
      isCarrier: O,
      styleProp: q,
      verbose: x,
      pluginInstance: E,
    } = e,
      { ixData: C, ixSession: M } = t.getState(),
      { events: F } = C,
      P = F[v] || {},
      { mediaQueries: j = C.mediaQueryKeys } = P;
    if (Ai(j, M.mediaQueryKey) && (n || r || i)) {
      if (d || (u === zU && i)) {
        t.dispatch(us(o, s, d, a));
        let { ixElements: K } = t.getState(),
          { ref: Y, refType: J, refState: H } = K[o] || {},
          S = H && H[s];
        (J === h_ || Si(s)) && $U(Y, H, S, v, a, q, qe, u, E);
      }
      if (i) {
        if (O) {
          let K = sn({
            store: t,
            eventId: v,
            eventTarget: y,
            eventStateKey: _,
            actionListId: b,
            groupIndex: m + 1,
            verbose: x,
          });
          x && !K && t.dispatch(Er({ actionListId: b, isPlaying: !1 }));
        }
        Rs(e, t);
      }
    }
  }
  var l_,
    yt,
    f_,
    d_,
    p_,
    v_,
    br,
    g_,
    wi,
    jU,
    ws,
    Os,
    Oi,
    h_,
    zU,
    u_,
    xi,
    KU,
    xs,
    Vt,
    YU,
    $U,
    m_,
    QU,
    ZU,
    JU,
    eV,
    tV,
    rV,
    Ai,
    nV,
    iV,
    oV,
    aV,
    sV,
    Si,
    As,
    uV,
    c_,
    cV,
    lV,
    wV,
    xV,
    AV,
    SV,
    Is = me(() => {
      "use strict";
      (l_ = fe(Oa())),
        (yt = fe(Kn())),
        (f_ = fe(Fm())),
        (d_ = fe(cy())),
        (p_ = fe(fy())),
        (v_ = fe(py())),
        (br = fe(Ey())),
        (g_ = fe(xy()));
      Ge();
      wi = fe(Ut());
      gi();
      Ny();
      s_();
      (jU = Object.keys(Ko)),
        (ws = (e) => jU.includes(e)),
        ({
          COLON_DELIMITER: Os,
          BOUNDARY_SELECTOR: Oi,
          HTML_ELEMENT: h_,
          RENDER_GENERAL: zU,
          W_MOD_IX: u_,
        } = Ce),
        ({
          getAffectedElements: xi,
          getElementId: KU,
          getDestinationValues: xs,
          observeStore: Vt,
          getInstanceId: YU,
          renderHTMLElement: $U,
          clearAllStyles: m_,
          getMaxDurationItemIndex: QU,
          getComputedStyle: ZU,
          getInstanceOrigin: JU,
          reduceListToGroup: eV,
          shouldNamespaceEventParameter: tV,
          getNamespacedParameterId: rV,
          shouldAllowMediaQuery: Ai,
          cleanupHTMLElement: nV,
          clearObjectCache: iV,
          stringifyTarget: oV,
          mediaQueriesEqual: aV,
          shallowEqual: sV,
        } = wi.IX2VanillaUtils),
        ({
          isPluginType: Si,
          createPluginInstance: As,
          getPluginDuration: uV,
        } = wi.IX2VanillaPlugins),
        (c_ = navigator.userAgent),
        (cV = c_.match(/iPad/i) || c_.match(/iPhone/)),
        (lV = 12);
      wV = ["resize", "orientationchange"];
      (xV = (e, t) => (0, d_.default)((0, v_.default)(e, t), p_.default)),
        (AV = (e, t) => {
          (0, br.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + Os + o;
              t(i, n, a);
            });
          });
        }),
        (SV = (e) => {
          let t = { target: e.target, targets: e.targets };
          return xi({ config: t, elementApi: qe });
        });
    });
  var x_ = c((Et) => {
    "use strict";
    var NV = gn().default,
      PV = su().default;
    Object.defineProperty(Et, "__esModule", { value: !0 });
    Et.actions = void 0;
    Et.destroy = O_;
    Et.init = kV;
    Et.setEnv = FV;
    Et.store = void 0;
    jl();
    var MV = jo(),
      qV = PV((ym(), nt(mm))),
      Cs = (Is(), nt(w_)),
      DV = NV((gi(), nt(Sy)));
    Et.actions = DV;
    var Li = (0, MV.createStore)(qV.default);
    Et.store = Li;
    function FV(e) {
      e() && (0, Cs.observeRequests)(Li);
    }
    function kV(e) {
      O_(), (0, Cs.startEngine)({ store: Li, rawData: e, allowEvents: !0 });
    }
    function O_() {
      (0, Cs.stopEngine)(Li);
    }
  });
  var C_ = c((nz, R_) => {
    "use strict";
    var A_ = Re(),
      S_ = x_();
    S_.setEnv(A_.env);
    A_.define(
      "ix2",
      (R_.exports = function () {
        return S_;
      })
    );
  });
  var N_ = c((iz, L_) => {
    "use strict";
    var Tr = Re();
    Tr.define(
      "links",
      (L_.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = Tr.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          d = /index\.(html|php)$/,
          m = /\/$/,
          v,
          y;
        r.ready = r.design = r.preview = _;
        function _() {
          (i = o && Tr.env("design")),
            (y = Tr.env("slug") || a.pathname || ""),
            Tr.scroll.off(O),
            (v = []);
          for (var x = document.links, E = 0; E < x.length; ++E) b(x[E]);
          v.length && (Tr.scroll.on(O), O());
        }
        function b(x) {
          var E =
            (i && x.getAttribute("href-disabled")) || x.getAttribute("href");
          if (((s.href = E), !(E.indexOf(":") >= 0))) {
            var C = e(x);
            if (
              s.hash.length > 1 &&
              s.host + s.pathname === a.host + a.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
              var M = e(s.hash);
              M.length && v.push({ link: C, sec: M, active: !1 });
              return;
            }
            if (!(E === "#" || E === "")) {
              var F = s.href === a.href || E === y || (d.test(E) && m.test(y));
              q(C, u, F);
            }
          }
        }
        function O() {
          var x = n.scrollTop(),
            E = n.height();
          t.each(v, function (C) {
            var M = C.link,
              F = C.sec,
              P = F.offset().top,
              j = F.outerHeight(),
              K = E * 0.5,
              Y = F.is(":visible") && P + j - K >= x && P + K <= x + E;
            C.active !== Y && ((C.active = Y), q(M, u, Y));
          });
        }
        function q(x, E, C) {
          var M = x.hasClass(E);
          (C && M) || (!C && !M) || (C ? x.addClass(E) : x.removeClass(E));
        }
        return r;
      })
    );
  });
  var M_ = c((oz, P_) => {
    "use strict";
    var Ni = Re();
    Ni.define(
      "scroll",
      (P_.exports = function (e) {
        var t = {
          WF_CLICK_EMPTY: "click.wf-empty-link",
          WF_CLICK_SCROLL: "click.wf-scroll",
        },
          r = window.location,
          n = b() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (S) {
              window.setTimeout(S, 15);
            },
          u = Ni.env("editor") ? ".w-editor-body" : "body",
          d =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          m = 'a[href="#"]',
          v = 'a[href*="#"]:not(.w-tab-link):not(' + m + ")",
          y = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          _ = document.createElement("style");
        _.appendChild(document.createTextNode(y));
        function b() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var O = /^#[a-zA-Z0-9][\w:.-]*$/;
        function q(S) {
          return O.test(S.hash) && S.host + S.pathname === r.host + r.pathname;
        }
        let x =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function E() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            x.matches
          );
        }
        function C(S, h) {
          var L;
          switch (h) {
            case "add":
              (L = S.attr("tabindex")),
                L
                  ? S.attr("data-wf-tabindex-swap", L)
                  : S.attr("tabindex", "-1");
              break;
            case "remove":
              (L = S.attr("data-wf-tabindex-swap")),
                L
                  ? (S.attr("tabindex", L),
                    S.removeAttr("data-wf-tabindex-swap"))
                  : S.removeAttr("tabindex");
              break;
          }
          S.toggleClass("wf-force-outline-none", h === "add");
        }
        function M(S) {
          var h = S.currentTarget;
          if (
            !(
              Ni.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(h.className))
            )
          ) {
            var L = q(h) ? h.hash : "";
            if (L !== "") {
              var U = e(L);
              U.length &&
                (S && (S.preventDefault(), S.stopPropagation()),
                  F(L, S),
                  window.setTimeout(
                    function () {
                      P(U, function () {
                        C(U, "add"),
                          U.get(0).focus({ preventScroll: !0 }),
                          C(U, "remove");
                      });
                    },
                    S ? 0 : 300
                  ));
            }
          }
        }
        function F(S) {
          if (
            r.hash !== S &&
            n &&
            n.pushState &&
            !(Ni.env.chrome && r.protocol === "file:")
          ) {
            var h = n.state && n.state.hash;
            h !== S && n.pushState({ hash: S }, "", S);
          }
        }
        function P(S, h) {
          var L = i.scrollTop(),
            U = j(S);
          if (L !== U) {
            var X = K(S, L, U),
              ee = Date.now(),
              re = function () {
                var V = Date.now() - ee;
                window.scroll(0, Y(L, U, V, X)),
                  V <= X ? s(re) : typeof h == "function" && h();
              };
            s(re);
          }
        }
        function j(S) {
          var h = e(d),
            L = h.css("position") === "fixed" ? h.outerHeight() : 0,
            U = S.offset().top - L;
          if (S.data("scroll") === "mid") {
            var X = i.height() - L,
              ee = S.outerHeight();
            ee < X && (U -= Math.round((X - ee) / 2));
          }
          return U;
        }
        function K(S, h, L) {
          if (E()) return 0;
          var U = 1;
          return (
            a.add(S).each(function (X, ee) {
              var re = parseFloat(ee.getAttribute("data-scroll-time"));
              !isNaN(re) && re >= 0 && (U = re);
            }),
            (472.143 * Math.log(Math.abs(h - L) + 125) - 2e3) * U
          );
        }
        function Y(S, h, L, U) {
          return L > U ? h : S + (h - S) * J(L / U);
        }
        function J(S) {
          return S < 0.5
            ? 4 * S * S * S
            : (S - 1) * (2 * S - 2) * (2 * S - 2) + 1;
        }
        function H() {
          var { WF_CLICK_EMPTY: S, WF_CLICK_SCROLL: h } = t;
          o.on(h, v, M),
            o.on(S, m, function (L) {
              L.preventDefault();
            }),
            document.head.insertBefore(_, document.head.firstChild);
        }
        return { ready: H };
      })
    );
  });
  var D_ = c((az, q_) => {
    "use strict";
    var GV = Re();
    GV.define(
      "touch",
      (q_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            d,
            m;
          o.addEventListener("touchstart", v, !1),
            o.addEventListener("touchmove", y, !1),
            o.addEventListener("touchend", _, !1),
            o.addEventListener("touchcancel", b, !1),
            o.addEventListener("mousedown", v, !1),
            o.addEventListener("mousemove", y, !1),
            o.addEventListener("mouseup", _, !1),
            o.addEventListener("mouseout", b, !1);
          function v(q) {
            var x = q.touches;
            (x && x.length > 1) ||
              ((a = !0),
                x ? ((s = !0), (d = x[0].clientX)) : (d = q.clientX),
                (m = d));
          }
          function y(q) {
            if (a) {
              if (s && q.type === "mousemove") {
                q.preventDefault(), q.stopPropagation();
                return;
              }
              var x = q.touches,
                E = x ? x[0].clientX : q.clientX,
                C = E - m;
              (m = E),
                Math.abs(C) > u &&
                r &&
                String(r()) === "" &&
                (i("swipe", q, { direction: C > 0 ? "right" : "left" }), b());
            }
          }
          function _(q) {
            if (a && ((a = !1), s && q.type === "mouseup")) {
              q.preventDefault(), q.stopPropagation(), (s = !1);
              return;
            }
          }
          function b() {
            a = !1;
          }
          function O() {
            o.removeEventListener("touchstart", v, !1),
              o.removeEventListener("touchmove", y, !1),
              o.removeEventListener("touchend", _, !1),
              o.removeEventListener("touchcancel", b, !1),
              o.removeEventListener("mousedown", v, !1),
              o.removeEventListener("mousemove", y, !1),
              o.removeEventListener("mouseup", _, !1),
              o.removeEventListener("mouseout", b, !1),
              (o = null);
          }
          this.destroy = O;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var G_ = c((sz, k_) => {
    "use strict";
    var Wt = Re(),
      UV = jt(),
      tt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      F_ = !0,
      VV = /^#[a-zA-Z0-9\-_]+$/;
    Wt.define(
      "dropdown",
      (k_.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          i = Wt.env(),
          o = !1,
          a,
          s = Wt.env.touch,
          u = ".w-dropdown",
          d = "w--open",
          m = UV.triggers,
          v = 900,
          y = "focusout" + u,
          _ = "keydown" + u,
          b = "mouseenter" + u,
          O = "mousemove" + u,
          q = "mouseleave" + u,
          x = (s ? "click" : "mouseup") + u,
          E = "w-close" + u,
          C = "setting" + u,
          M = e(document),
          F;
        (n.ready = P),
          (n.design = function () {
            o && h(), (o = !1), P();
          }),
          (n.preview = function () {
            (o = !0), P();
          });
        function P() {
          (a = i && Wt.env("design")), (F = M.find(u)), F.each(j);
        }
        function j(l, G) {
          var W = e(G),
            N = e.data(G, u);
          N ||
            (N = e.data(G, u, {
              open: !1,
              el: W,
              config: {},
              selectedIdx: -1,
            })),
            (N.toggle = N.el.children(".w-dropdown-toggle")),
            (N.list = N.el.children(".w-dropdown-list")),
            (N.links = N.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (N.complete = X(N)),
            (N.mouseLeave = re(N)),
            (N.mouseUpOutside = U(N)),
            (N.mouseMoveOutside = V(N)),
            K(N);
          var ie = N.toggle.attr("id"),
            le = N.list.attr("id");
          ie || (ie = "w-dropdown-toggle-" + l),
            le || (le = "w-dropdown-list-" + l),
            N.toggle.attr("id", ie),
            N.toggle.attr("aria-controls", le),
            N.toggle.attr("aria-haspopup", "menu"),
            N.toggle.attr("aria-expanded", "false"),
            N.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            N.toggle.prop("tagName") !== "BUTTON" &&
            (N.toggle.attr("role", "button"),
              N.toggle.attr("tabindex") || N.toggle.attr("tabindex", "0")),
            N.list.attr("id", le),
            N.list.attr("aria-labelledby", ie),
            N.links.each(function (g, B) {
              B.hasAttribute("tabindex") || B.setAttribute("tabindex", "0"),
                VV.test(B.hash) && B.addEventListener("click", S.bind(null, N));
            }),
            N.el.off(u),
            N.toggle.off(u),
            N.nav && N.nav.off(u);
          var oe = J(N, F_);
          a && N.el.on(C, Y(N)),
            a ||
            (i && ((N.hovering = !1), S(N)),
              N.config.hover && N.toggle.on(b, ee(N)),
              N.el.on(E, oe),
              N.el.on(_, z(N)),
              N.el.on(y, I(N)),
              N.toggle.on(x, oe),
              N.toggle.on(_, T(N)),
              (N.nav = N.el.closest(".w-nav")),
              N.nav.on(E, oe));
        }
        function K(l) {
          var G = Number(l.el.css("z-index"));
          (l.manageZ = G === v || G === v + 1),
            (l.config = {
              hover: l.el.attr("data-hover") === "true" && !s,
              delay: l.el.attr("data-delay"),
            });
        }
        function Y(l) {
          return function (G, W) {
            (W = W || {}),
              K(l),
              W.open === !0 && H(l, !0),
              W.open === !1 && S(l, { immediate: !0 });
          };
        }
        function J(l, G) {
          return r(function (W) {
            if (l.open || (W && W.type === "w-close"))
              return S(l, { forceClose: G });
            H(l);
          });
        }
        function H(l) {
          if (!l.open) {
            L(l),
              (l.open = !0),
              l.list.addClass(d),
              l.toggle.addClass(d),
              l.toggle.attr("aria-expanded", "true"),
              m.intro(0, l.el[0]),
              Wt.redraw.up(),
              l.manageZ && l.el.css("z-index", v + 1);
            var G = Wt.env("editor");
            a || M.on(x, l.mouseUpOutside),
              l.hovering && !G && l.el.on(q, l.mouseLeave),
              l.hovering && G && M.on(O, l.mouseMoveOutside),
              window.clearTimeout(l.delayId);
          }
        }
        function S(l, { immediate: G, forceClose: W } = {}) {
          if (l.open && !(l.config.hover && l.hovering && !W)) {
            l.toggle.attr("aria-expanded", "false"), (l.open = !1);
            var N = l.config;
            if (
              (m.outro(0, l.el[0]),
                M.off(x, l.mouseUpOutside),
                M.off(O, l.mouseMoveOutside),
                l.el.off(q, l.mouseLeave),
                window.clearTimeout(l.delayId),
                !N.delay || G)
            )
              return l.complete();
            l.delayId = window.setTimeout(l.complete, N.delay);
          }
        }
        function h() {
          M.find(u).each(function (l, G) {
            e(G).triggerHandler(E);
          });
        }
        function L(l) {
          var G = l.el[0];
          F.each(function (W, N) {
            var ie = e(N);
            ie.is(G) || ie.has(G).length || ie.triggerHandler(E);
          });
        }
        function U(l) {
          return (
            l.mouseUpOutside && M.off(x, l.mouseUpOutside),
            r(function (G) {
              if (l.open) {
                var W = e(G.target);
                if (!W.closest(".w-dropdown-toggle").length) {
                  var N = e.inArray(l.el[0], W.parents(u)) === -1,
                    ie = Wt.env("editor");
                  if (N) {
                    if (ie) {
                      var le =
                        W.parents().length === 1 &&
                        W.parents("svg").length === 1,
                        oe = W.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (le || oe) return;
                    }
                    S(l);
                  }
                }
              }
            })
          );
        }
        function X(l) {
          return function () {
            l.list.removeClass(d),
              l.toggle.removeClass(d),
              l.manageZ && l.el.css("z-index", "");
          };
        }
        function ee(l) {
          return function () {
            (l.hovering = !0), H(l);
          };
        }
        function re(l) {
          return function () {
            (l.hovering = !1), l.links.is(":focus") || S(l);
          };
        }
        function V(l) {
          return r(function (G) {
            if (l.open) {
              var W = e(G.target),
                N = e.inArray(l.el[0], W.parents(u)) === -1;
              if (N) {
                var ie = W.parents(".w-editor-bem-EditorHoverControls").length,
                  le = W.parents(".w-editor-bem-RTToolbar").length,
                  oe = e(".w-editor-bem-EditorOverlay"),
                  g =
                    oe.find(".w-editor-edit-outline").length ||
                    oe.find(".w-editor-bem-RTToolbar").length;
                if (ie || le || g) return;
                (l.hovering = !1), S(l);
              }
            }
          });
        }
        function z(l) {
          return function (G) {
            if (!(a || !l.open))
              switch (
              ((l.selectedIdx = l.links.index(document.activeElement)),
                G.keyCode)
              ) {
                case tt.HOME:
                  return l.open
                    ? ((l.selectedIdx = 0), p(l), G.preventDefault())
                    : void 0;
                case tt.END:
                  return l.open
                    ? ((l.selectedIdx = l.links.length - 1),
                      p(l),
                      G.preventDefault())
                    : void 0;
                case tt.ESCAPE:
                  return S(l), l.toggle.focus(), G.stopPropagation();
                case tt.ARROW_RIGHT:
                case tt.ARROW_DOWN:
                  return (
                    (l.selectedIdx = Math.min(
                      l.links.length - 1,
                      l.selectedIdx + 1
                    )),
                    p(l),
                    G.preventDefault()
                  );
                case tt.ARROW_LEFT:
                case tt.ARROW_UP:
                  return (
                    (l.selectedIdx = Math.max(-1, l.selectedIdx - 1)),
                    p(l),
                    G.preventDefault()
                  );
              }
          };
        }
        function p(l) {
          l.links[l.selectedIdx] && l.links[l.selectedIdx].focus();
        }
        function T(l) {
          var G = J(l, F_);
          return function (W) {
            if (!a) {
              if (!l.open)
                switch (W.keyCode) {
                  case tt.ARROW_UP:
                  case tt.ARROW_DOWN:
                    return W.stopPropagation();
                }
              switch (W.keyCode) {
                case tt.SPACE:
                case tt.ENTER:
                  return G(), W.stopPropagation(), W.preventDefault();
              }
            }
          };
        }
        function I(l) {
          return r(function (G) {
            var { relatedTarget: W, target: N } = G,
              ie = l.el[0],
              le = ie.contains(W) || ie.contains(N);
            return le || S(l), G.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var U_ = c((Ls) => {
    "use strict";
    Object.defineProperty(Ls, "__esModule", { value: !0 });
    Ls.default = WV;
    function WV(e, t, r, n, i, o, a, s, u, d, m, v, y) {
      return function (_) {
        e(_);
        var b = _.form,
          O = {
            name: b.attr("data-name") || b.attr("name") || "Untitled Form",
            pageId: b.attr("data-wf-page-id") || "",
            elementId: b.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              b.html()
            ),
            trackingCookies: n(),
          };
        let q = b.attr("data-wf-flow");
        q && (O.wfFlow = q), i(_);
        var x = o(b, O.fields);
        if (x) return a(x);
        if (((O.fileUploads = s(b)), u(_), !d)) {
          m(_);
          return;
        }
        v.ajax({
          url: y,
          type: "POST",
          data: O,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (E) {
            E && E.code === 200 && (_.success = !0), m(_);
          })
          .fail(function () {
            m(_);
          });
      };
    }
  });
  var W_ = c((cz, V_) => {
    "use strict";
    var Pi = Re();
    Pi.define(
      "forms",
      (V_.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          u,
          d = /e(-)?mail/i,
          m = /^\S+@\S+$/,
          v = window.alert,
          y = Pi.env(),
          _,
          b,
          O,
          q = /list-manage[1-9]?.com/i,
          x = t.debounce(function () {
            v(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
          function () {
            E(), !y && !_ && M();
          };
        function E() {
          (u = e("html").attr("data-wf-site")),
            (b = "https://webflow.com/api/v1/form/" + u),
            a &&
            b.indexOf("https://webflow.com") >= 0 &&
            (b = b.replace(
              "https://webflow.com",
              "https://formdata.webflow.com"
            )),
            (O = `${b}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(C);
        }
        function C(V, z) {
          var p = e(z),
            T = e.data(z, s);
          T || (T = e.data(z, s, { form: p })), F(T);
          var I = p.closest("div.w-form");
          (T.done = I.find("> .w-form-done")),
            (T.fail = I.find("> .w-form-fail")),
            (T.fileUploads = I.find(".w-file-upload")),
            T.fileUploads.each(function (W) {
              X(W, T);
            });
          var l =
            T.form.attr("aria-label") || T.form.attr("data-name") || "Form";
          T.done.attr("aria-label") || T.form.attr("aria-label", l),
            T.done.attr("tabindex", "-1"),
            T.done.attr("role", "region"),
            T.done.attr("aria-label") ||
            T.done.attr("aria-label", l + " success"),
            T.fail.attr("tabindex", "-1"),
            T.fail.attr("role", "region"),
            T.fail.attr("aria-label") ||
            T.fail.attr("aria-label", l + " failure");
          var G = (T.action = p.attr("action"));
          if (
            ((T.handler = null),
              (T.redirect = p.attr("data-redirect")),
              q.test(G))
          ) {
            T.handler = h;
            return;
          }
          if (!G) {
            if (u) {
              T.handler = (() => {
                let W = U_().default;
                return W(F, o, Pi, J, U, j, v, K, P, u, L, e, b);
              })();
              return;
            }
            x();
          }
        }
        function M() {
          (_ = !0),
            n.on("submit", s + " form", function (W) {
              var N = e.data(this, s);
              N.handler && ((N.evt = W), N.handler(N));
            });
          let V = ".w-checkbox-input",
            z = ".w-radio-input",
            p = "w--redirected-checked",
            T = "w--redirected-focus",
            I = "w--redirected-focus-visible",
            l = ":focus-visible, [data-wf-focus-visible]",
            G = [
              ["checkbox", V],
              ["radio", z],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + V + ")",
            (W) => {
              e(W.target).siblings(V).toggleClass(p);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (W) => {
              e(`input[name="${W.target.name}"]:not(${V})`).map((ie, le) =>
                e(le).siblings(z).removeClass(p)
              );
              let N = e(W.target);
              N.hasClass("w-radio-input") || N.siblings(z).addClass(p);
            }),
            G.forEach(([W, N]) => {
              n.on(
                "focus",
                s + ` form input[type="${W}"]:not(` + N + ")",
                (ie) => {
                  e(ie.target).siblings(N).addClass(T),
                    e(ie.target).filter(l).siblings(N).addClass(I);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${W}"]:not(` + N + ")",
                  (ie) => {
                    e(ie.target).siblings(N).removeClass(`${T} ${I}`);
                  }
                );
            });
        }
        function F(V) {
          var z = (V.btn = V.form.find(':input[type="submit"]'));
          (V.wait = V.btn.attr("data-wait") || null),
            (V.success = !1),
            z.prop("disabled", !1),
            V.label && z.val(V.label);
        }
        function P(V) {
          var z = V.btn,
            p = V.wait;
          z.prop("disabled", !0), p && ((V.label = z.val()), z.val(p));
        }
        function j(V, z) {
          var p = null;
          return (
            (z = z || {}),
            V.find(':input:not([type="submit"]):not([type="file"])').each(
              function (T, I) {
                var l = e(I),
                  G = l.attr("type"),
                  W =
                    l.attr("data-name") || l.attr("name") || "Field " + (T + 1),
                  N = l.val();
                if (G === "checkbox") N = l.is(":checked");
                else if (G === "radio") {
                  if (z[W] === null || typeof z[W] == "string") return;
                  N =
                    V.find(
                      'input[name="' + l.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof N == "string" && (N = e.trim(N)),
                  (z[W] = N),
                  (p = p || H(l, G, W, N));
              }
            ),
            p
          );
        }
        function K(V) {
          var z = {};
          return (
            V.find(':input[type="file"]').each(function (p, T) {
              var I = e(T),
                l = I.attr("data-name") || I.attr("name") || "File " + (p + 1),
                G = I.attr("data-value");
              typeof G == "string" && (G = e.trim(G)), (z[l] = G);
            }),
            z
          );
        }
        let Y = { _mkto_trk: "marketo" };
        function J() {
          return document.cookie.split("; ").reduce(function (z, p) {
            let T = p.split("="),
              I = T[0];
            if (I in Y) {
              let l = Y[I],
                G = T.slice(1).join("=");
              z[l] = G;
            }
            return z;
          }, {});
        }
        function H(V, z, p, T) {
          var I = null;
          return (
            z === "password"
              ? (I = "Passwords cannot be submitted.")
              : V.attr("required")
                ? T
                  ? d.test(V.attr("type")) &&
                  (m.test(T) ||
                    (I = "Please enter a valid email address for: " + p))
                  : (I = "Please fill out the required field: " + p)
                : p === "g-recaptcha-response" &&
                !T &&
                (I = "Please confirm you\u2019re not a robot."),
            I
          );
        }
        function S(V) {
          U(V), L(V);
        }
        function h(V) {
          F(V);
          var z = V.form,
            p = {};
          if (/^https/.test(o.href) && !/^https/.test(V.action)) {
            z.attr("method", "post");
            return;
          }
          U(V);
          var T = j(z, p);
          if (T) return v(T);
          P(V);
          var I;
          t.each(p, function (N, ie) {
            d.test(ie) && (p.EMAIL = N),
              /^((full[ _-]?)?name)$/i.test(ie) && (I = N),
              /^(first[ _-]?name)$/i.test(ie) && (p.FNAME = N),
              /^(last[ _-]?name)$/i.test(ie) && (p.LNAME = N);
          }),
            I &&
            !p.FNAME &&
            ((I = I.split(" ")),
              (p.FNAME = I[0]),
              (p.LNAME = p.LNAME || I[1]));
          var l = V.action.replace("/post?", "/post-json?") + "&c=?",
            G = l.indexOf("u=") + 2;
          G = l.substring(G, l.indexOf("&", G));
          var W = l.indexOf("id=") + 3;
          (W = l.substring(W, l.indexOf("&", W))),
            (p["b_" + G + "_" + W] = ""),
            e
              .ajax({ url: l, data: p, dataType: "jsonp" })
              .done(function (N) {
                (V.success = N.result === "success" || /already/.test(N.msg)),
                  V.success || console.info("MailChimp error: " + N.msg),
                  L(V);
              })
              .fail(function () {
                L(V);
              });
        }
        function L(V) {
          var z = V.form,
            p = V.redirect,
            T = V.success;
          if (T && p) {
            Pi.location(p);
            return;
          }
          V.done.toggle(T),
            V.fail.toggle(!T),
            T ? V.done.focus() : V.fail.focus(),
            z.toggle(!T),
            F(V);
        }
        function U(V) {
          V.evt && V.evt.preventDefault(), (V.evt = null);
        }
        function X(V, z) {
          if (!z.fileUploads || !z.fileUploads[V]) return;
          var p,
            T = e(z.fileUploads[V]),
            I = T.find("> .w-file-upload-default"),
            l = T.find("> .w-file-upload-uploading"),
            G = T.find("> .w-file-upload-success"),
            W = T.find("> .w-file-upload-error"),
            N = I.find(".w-file-upload-input"),
            ie = I.find(".w-file-upload-label"),
            le = ie.children(),
            oe = W.find(".w-file-upload-error-msg"),
            g = G.find(".w-file-upload-file"),
            B = G.find(".w-file-remove-link"),
            Z = g.find(".w-file-upload-file-name"),
            $ = oe.attr("data-w-size-error"),
            de = oe.attr("data-w-type-error"),
            De = oe.attr("data-w-generic-error");
          if (
            (y ||
              ie.on("click keydown", function (A) {
                (A.type === "keydown" && A.which !== 13 && A.which !== 32) ||
                  (A.preventDefault(), N.click());
              }),
              ie.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
              B.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
              y)
          )
            N.on("click", function (A) {
              A.preventDefault();
            }),
              ie.on("click", function (A) {
                A.preventDefault();
              }),
              le.on("click", function (A) {
                A.preventDefault();
              });
          else {
            B.on("click keydown", function (A) {
              if (A.type === "keydown") {
                if (A.which !== 13 && A.which !== 32) return;
                A.preventDefault();
              }
              N.removeAttr("data-value"),
                N.val(""),
                Z.html(""),
                I.toggle(!0),
                G.toggle(!1),
                ie.focus();
            }),
              N.on("change", function (A) {
                (p = A.target && A.target.files && A.target.files[0]),
                  p &&
                  (I.toggle(!1),
                    W.toggle(!1),
                    l.toggle(!0),
                    l.focus(),
                    Z.text(p.name),
                    D() || P(z),
                    (z.fileUploads[V].uploading = !0),
                    ee(p, w));
              });
            var Xe = ie.outerHeight();
            N.height(Xe), N.width(1);
          }
          function f(A) {
            var k = A.responseJSON && A.responseJSON.msg,
              te = De;
            typeof k == "string" && k.indexOf("InvalidFileTypeError") === 0
              ? (te = de)
              : typeof k == "string" &&
              k.indexOf("MaxFileSizeError") === 0 &&
              (te = $),
              oe.text(te),
              N.removeAttr("data-value"),
              N.val(""),
              l.toggle(!1),
              I.toggle(!0),
              W.toggle(!0),
              W.focus(),
              (z.fileUploads[V].uploading = !1),
              D() || F(z);
          }
          function w(A, k) {
            if (A) return f(A);
            var te = k.fileName,
              ae = k.postData,
              ge = k.fileId,
              Q = k.s3Url;
            N.attr("data-value", ge), re(Q, ae, p, te, R);
          }
          function R(A) {
            if (A) return f(A);
            l.toggle(!1),
              G.css("display", "inline-block"),
              G.focus(),
              (z.fileUploads[V].uploading = !1),
              D() || F(z);
          }
          function D() {
            var A = (z.fileUploads && z.fileUploads.toArray()) || [];
            return A.some(function (k) {
              return k.uploading;
            });
          }
        }
        function ee(V, z) {
          var p = new URLSearchParams({ name: V.name, size: V.size });
          e.ajax({ type: "GET", url: `${O}?${p}`, crossDomain: !0 })
            .done(function (T) {
              z(null, T);
            })
            .fail(function (T) {
              z(T);
            });
        }
        function re(V, z, p, T, I) {
          var l = new FormData();
          for (var G in z) l.append(G, z[G]);
          l.append("file", p, T),
            e
              .ajax({
                type: "POST",
                url: V,
                data: l,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                I(null);
              })
              .fail(function (W) {
                I(W);
              });
        }
        return r;
      })
    );
  });
  var X_ = c((lz, H_) => {
    "use strict";
    var St = Re(),
      HV = jt(),
      Se = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    St.define(
      "navbar",
      (H_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          u,
          d,
          m,
          v = St.env(),
          y = '<div class="w-nav-overlay" data-wf-ignore />',
          _ = ".w-nav",
          b = "w--open",
          O = "w--nav-dropdown-open",
          q = "w--nav-dropdown-toggle-open",
          x = "w--nav-dropdown-list-open",
          E = "w--nav-link-open",
          C = HV.triggers,
          M = e();
        (r.ready = r.design = r.preview = F),
          (r.destroy = function () {
            (M = e()), P(), u && u.length && u.each(J);
          });
        function F() {
          (d = v && St.env("design")),
            (m = St.env("editor")),
            (s = e(document.body)),
            (u = o.find(_)),
            u.length && (u.each(Y), P(), j());
        }
        function P() {
          St.resize.off(K);
        }
        function j() {
          St.resize.on(K);
        }
        function K() {
          u.each(I);
        }
        function Y(g, B) {
          var Z = e(B),
            $ = e.data(B, _);
          $ ||
            ($ = e.data(B, _, {
              open: !1,
              el: Z,
              config: {},
              selectedIdx: -1,
            })),
            ($.menu = Z.find(".w-nav-menu")),
            ($.links = $.menu.find(".w-nav-link")),
            ($.dropdowns = $.menu.find(".w-dropdown")),
            ($.dropdownToggle = $.menu.find(".w-dropdown-toggle")),
            ($.dropdownList = $.menu.find(".w-dropdown-list")),
            ($.button = Z.find(".w-nav-button")),
            ($.container = Z.find(".w-container")),
            ($.overlayContainerId = "w-nav-overlay-" + g),
            ($.outside = p($));
          var de = Z.find(".w-nav-brand");
          de &&
            de.attr("href") === "/" &&
            de.attr("aria-label") == null &&
            de.attr("aria-label", "home"),
            $.button.attr("style", "-webkit-user-select: text;"),
            $.button.attr("aria-label") == null &&
            $.button.attr("aria-label", "menu"),
            $.button.attr("role", "button"),
            $.button.attr("tabindex", "0"),
            $.button.attr("aria-controls", $.overlayContainerId),
            $.button.attr("aria-haspopup", "menu"),
            $.button.attr("aria-expanded", "false"),
            $.el.off(_),
            $.button.off(_),
            $.menu.off(_),
            h($),
            d
              ? (H($), $.el.on("setting" + _, L($)))
              : (S($),
                $.button.on("click" + _, V($)),
                $.menu.on("click" + _, "a", z($)),
                $.button.on("keydown" + _, U($)),
                $.el.on("keydown" + _, X($))),
            I(g, B);
        }
        function J(g, B) {
          var Z = e.data(B, _);
          Z && (H(Z), e.removeData(B, _));
        }
        function H(g) {
          g.overlay && (oe(g, !0), g.overlay.remove(), (g.overlay = null));
        }
        function S(g) {
          g.overlay ||
            ((g.overlay = e(y).appendTo(g.el)),
              g.overlay.attr("id", g.overlayContainerId),
              (g.parent = g.menu.parent()),
              oe(g, !0));
        }
        function h(g) {
          var B = {},
            Z = g.config || {},
            $ = (B.animation = g.el.attr("data-animation") || "default");
          (B.animOver = /^over/.test($)),
            (B.animDirect = /left$/.test($) ? -1 : 1),
            Z.animation !== $ && g.open && t.defer(re, g),
            (B.easing = g.el.attr("data-easing") || "ease"),
            (B.easing2 = g.el.attr("data-easing2") || "ease");
          var de = g.el.attr("data-duration");
          (B.duration = de != null ? Number(de) : 400),
            (B.docHeight = g.el.attr("data-doc-height")),
            (g.config = B);
        }
        function L(g) {
          return function (B, Z) {
            Z = Z || {};
            var $ = i.width();
            h(g),
              Z.open === !0 && ie(g, !0),
              Z.open === !1 && oe(g, !0),
              g.open &&
              t.defer(function () {
                $ !== i.width() && re(g);
              });
          };
        }
        function U(g) {
          return function (B) {
            switch (B.keyCode) {
              case Se.SPACE:
              case Se.ENTER:
                return V(g)(), B.preventDefault(), B.stopPropagation();
              case Se.ESCAPE:
                return oe(g), B.preventDefault(), B.stopPropagation();
              case Se.ARROW_RIGHT:
              case Se.ARROW_DOWN:
              case Se.HOME:
              case Se.END:
                return g.open
                  ? (B.keyCode === Se.END
                    ? (g.selectedIdx = g.links.length - 1)
                    : (g.selectedIdx = 0),
                    ee(g),
                    B.preventDefault(),
                    B.stopPropagation())
                  : (B.preventDefault(), B.stopPropagation());
            }
          };
        }
        function X(g) {
          return function (B) {
            if (g.open)
              switch (
              ((g.selectedIdx = g.links.index(document.activeElement)),
                B.keyCode)
              ) {
                case Se.HOME:
                case Se.END:
                  return (
                    B.keyCode === Se.END
                      ? (g.selectedIdx = g.links.length - 1)
                      : (g.selectedIdx = 0),
                    ee(g),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case Se.ESCAPE:
                  return (
                    oe(g),
                    g.button.focus(),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case Se.ARROW_LEFT:
                case Se.ARROW_UP:
                  return (
                    (g.selectedIdx = Math.max(-1, g.selectedIdx - 1)),
                    ee(g),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case Se.ARROW_RIGHT:
                case Se.ARROW_DOWN:
                  return (
                    (g.selectedIdx = Math.min(
                      g.links.length - 1,
                      g.selectedIdx + 1
                    )),
                    ee(g),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
              }
          };
        }
        function ee(g) {
          if (g.links[g.selectedIdx]) {
            var B = g.links[g.selectedIdx];
            B.focus(), z(B);
          }
        }
        function re(g) {
          g.open && (oe(g, !0), ie(g, !0));
        }
        function V(g) {
          return a(function () {
            g.open ? oe(g) : ie(g);
          });
        }
        function z(g) {
          return function (B) {
            var Z = e(this),
              $ = Z.attr("href");
            if (!St.validClick(B.currentTarget)) {
              B.preventDefault();
              return;
            }
            $ && $.indexOf("#") === 0 && g.open && oe(g);
          };
        }
        function p(g) {
          return (
            g.outside && o.off("click" + _, g.outside),
            function (B) {
              var Z = e(B.target);
              (m && Z.closest(".w-editor-bem-EditorOverlay").length) || T(g, Z);
            }
          );
        }
        var T = a(function (g, B) {
          if (g.open) {
            var Z = B.closest(".w-nav-menu");
            g.menu.is(Z) || oe(g);
          }
        });
        function I(g, B) {
          var Z = e.data(B, _),
            $ = (Z.collapsed = Z.button.css("display") !== "none");
          if ((Z.open && !$ && !d && oe(Z, !0), Z.container.length)) {
            var de = G(Z);
            Z.links.each(de), Z.dropdowns.each(de);
          }
          Z.open && le(Z);
        }
        var l = "max-width";
        function G(g) {
          var B = g.container.css(l);
          return (
            B === "none" && (B = ""),
            function (Z, $) {
              ($ = e($)), $.css(l, ""), $.css(l) === "none" && $.css(l, B);
            }
          );
        }
        function W(g, B) {
          B.setAttribute("data-nav-menu-open", "");
        }
        function N(g, B) {
          B.removeAttribute("data-nav-menu-open");
        }
        function ie(g, B) {
          if (g.open) return;
          (g.open = !0),
            g.menu.each(W),
            g.links.addClass(E),
            g.dropdowns.addClass(O),
            g.dropdownToggle.addClass(q),
            g.dropdownList.addClass(x),
            g.button.addClass(b);
          var Z = g.config,
            $ = Z.animation;
          ($ === "none" || !n.support.transform || Z.duration <= 0) && (B = !0);
          var de = le(g),
            De = g.menu.outerHeight(!0),
            Xe = g.menu.outerWidth(!0),
            f = g.el.height(),
            w = g.el[0];
          if (
            (I(0, w),
              C.intro(0, w),
              St.redraw.up(),
              d || o.on("click" + _, g.outside),
              B)
          ) {
            A();
            return;
          }
          var R = "transform " + Z.duration + "ms " + Z.easing;
          if (
            (g.overlay &&
              ((M = g.menu.prev()), g.overlay.show().append(g.menu)),
              Z.animOver)
          ) {
            n(g.menu)
              .add(R)
              .set({ x: Z.animDirect * Xe, height: de })
              .start({ x: 0 })
              .then(A),
              g.overlay && g.overlay.width(Xe);
            return;
          }
          var D = f + De;
          n(g.menu).add(R).set({ y: -D }).start({ y: 0 }).then(A);
          function A() {
            g.button.attr("aria-expanded", "true");
          }
        }
        function le(g) {
          var B = g.config,
            Z = B.docHeight ? o.height() : s.height();
          return (
            B.animOver
              ? g.menu.height(Z)
              : g.el.css("position") !== "fixed" && (Z -= g.el.outerHeight(!0)),
            g.overlay && g.overlay.height(Z),
            Z
          );
        }
        function oe(g, B) {
          if (!g.open) return;
          (g.open = !1), g.button.removeClass(b);
          var Z = g.config;
          if (
            ((Z.animation === "none" ||
              !n.support.transform ||
              Z.duration <= 0) &&
              (B = !0),
              C.outro(0, g.el[0]),
              o.off("click" + _, g.outside),
              B)
          ) {
            n(g.menu).stop(), w();
            return;
          }
          var $ = "transform " + Z.duration + "ms " + Z.easing2,
            de = g.menu.outerHeight(!0),
            De = g.menu.outerWidth(!0),
            Xe = g.el.height();
          if (Z.animOver) {
            n(g.menu)
              .add($)
              .start({ x: De * Z.animDirect })
              .then(w);
            return;
          }
          var f = Xe + de;
          n(g.menu).add($).start({ y: -f }).then(w);
          function w() {
            g.menu.height(""),
              n(g.menu).set({ x: 0, y: 0 }),
              g.menu.each(N),
              g.links.removeClass(E),
              g.dropdowns.removeClass(O),
              g.dropdownToggle.removeClass(q),
              g.dropdownList.removeClass(x),
              g.overlay &&
              g.overlay.children().length &&
              (M.length ? g.menu.insertAfter(M) : g.menu.prependTo(g.parent),
                g.overlay.attr("style", "").hide()),
              g.el.triggerHandler("w-close"),
              g.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var z_ = c((fz, j_) => {
    "use strict";
    var Rt = Re(),
      XV = jt(),
      dt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      B_ =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    Rt.define(
      "slider",
      (j_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          a,
          s = Rt.env(),
          u = ".w-slider",
          d = '<div class="w-slider-dot" data-wf-ignore />',
          m =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          v = "w-slider-force-show",
          y = XV.triggers,
          _,
          b = !1;
        (r.ready = function () {
          (a = Rt.env("design")), O();
        }),
          (r.design = function () {
            (a = !0), setTimeout(O, 1e3);
          }),
          (r.preview = function () {
            (a = !1), O();
          }),
          (r.redraw = function () {
            (b = !0), O(), (b = !1);
          }),
          (r.destroy = q);
        function O() {
          (o = i.find(u)), o.length && (o.each(C), !_ && (q(), x()));
        }
        function q() {
          Rt.resize.off(E), Rt.redraw.off(r.redraw);
        }
        function x() {
          Rt.resize.on(E), Rt.redraw.on(r.redraw);
        }
        function E() {
          o.filter(":visible").each(X);
        }
        function C(p, T) {
          var I = e(T),
            l = e.data(T, u);
          l ||
            (l = e.data(T, u, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: I,
              config: {},
            })),
            (l.mask = I.children(".w-slider-mask")),
            (l.left = I.children(".w-slider-arrow-left")),
            (l.right = I.children(".w-slider-arrow-right")),
            (l.nav = I.children(".w-slider-nav")),
            (l.slides = l.mask.children(".w-slide")),
            l.slides.each(y.reset),
            b && (l.maskWidth = 0),
            I.attr("role") === void 0 && I.attr("role", "region"),
            I.attr("aria-label") === void 0 && I.attr("aria-label", "carousel");
          var G = l.mask.attr("id");
          if (
            (G || ((G = "w-slider-mask-" + p), l.mask.attr("id", G)),
              !a && !l.ariaLiveLabel && (l.ariaLiveLabel = e(m).appendTo(l.mask)),
              l.left.attr("role", "button"),
              l.left.attr("tabindex", "0"),
              l.left.attr("aria-controls", G),
              l.left.attr("aria-label") === void 0 &&
              l.left.attr("aria-label", "previous slide"),
              l.right.attr("role", "button"),
              l.right.attr("tabindex", "0"),
              l.right.attr("aria-controls", G),
              l.right.attr("aria-label") === void 0 &&
              l.right.attr("aria-label", "next slide"),
              !n.support.transform)
          ) {
            l.left.hide(), l.right.hide(), l.nav.hide(), (_ = !0);
            return;
          }
          l.el.off(u),
            l.left.off(u),
            l.right.off(u),
            l.nav.off(u),
            M(l),
            a
              ? (l.el.on("setting" + u, h(l)), S(l), (l.hasTimer = !1))
              : (l.el.on("swipe" + u, h(l)),
                l.left.on("click" + u, K(l)),
                l.right.on("click" + u, Y(l)),
                l.left.on("keydown" + u, j(l, K)),
                l.right.on("keydown" + u, j(l, Y)),
                l.nav.on("keydown" + u, "> div", h(l)),
                l.config.autoplay &&
                !l.hasTimer &&
                ((l.hasTimer = !0), (l.timerCount = 1), H(l)),
                l.el.on("mouseenter" + u, P(l, !0, "mouse")),
                l.el.on("focusin" + u, P(l, !0, "keyboard")),
                l.el.on("mouseleave" + u, P(l, !1, "mouse")),
                l.el.on("focusout" + u, P(l, !1, "keyboard"))),
            l.nav.on("click" + u, "> div", h(l)),
            s ||
            l.mask
              .contents()
              .filter(function () {
                return this.nodeType === 3;
              })
              .remove();
          var W = I.filter(":hidden");
          W.addClass(v);
          var N = I.parents(":hidden");
          N.addClass(v), b || X(p, T), W.removeClass(v), N.removeClass(v);
        }
        function M(p) {
          var T = {};
          (T.crossOver = 0),
            (T.animation = p.el.attr("data-animation") || "slide"),
            T.animation === "outin" &&
            ((T.animation = "cross"), (T.crossOver = 0.5)),
            (T.easing = p.el.attr("data-easing") || "ease");
          var I = p.el.attr("data-duration");
          if (
            ((T.duration = I != null ? parseInt(I, 10) : 500),
              F(p.el.attr("data-infinite")) && (T.infinite = !0),
              F(p.el.attr("data-disable-swipe")) && (T.disableSwipe = !0),
              F(p.el.attr("data-hide-arrows"))
                ? (T.hideArrows = !0)
                : p.config.hideArrows && (p.left.show(), p.right.show()),
              F(p.el.attr("data-autoplay")))
          ) {
            (T.autoplay = !0),
              (T.delay = parseInt(p.el.attr("data-delay"), 10) || 2e3),
              (T.timerMax = parseInt(p.el.attr("data-autoplay-limit"), 10));
            var l = "mousedown" + u + " touchstart" + u;
            a ||
              p.el.off(l).one(l, function () {
                S(p);
              });
          }
          var G = p.right.width();
          (T.edge = G ? G + 40 : 100), (p.config = T);
        }
        function F(p) {
          return p === "1" || p === "true";
        }
        function P(p, T, I) {
          return function (l) {
            if (T) p.hasFocus[I] = T;
            else if (
              e.contains(p.el.get(0), l.relatedTarget) ||
              ((p.hasFocus[I] = T),
                (p.hasFocus.mouse && I === "keyboard") ||
                (p.hasFocus.keyboard && I === "mouse"))
            )
              return;
            T
              ? (p.ariaLiveLabel.attr("aria-live", "polite"),
                p.hasTimer && S(p))
              : (p.ariaLiveLabel.attr("aria-live", "off"), p.hasTimer && H(p));
          };
        }
        function j(p, T) {
          return function (I) {
            switch (I.keyCode) {
              case dt.SPACE:
              case dt.ENTER:
                return T(p)(), I.preventDefault(), I.stopPropagation();
            }
          };
        }
        function K(p) {
          return function () {
            U(p, { index: p.index - 1, vector: -1 });
          };
        }
        function Y(p) {
          return function () {
            U(p, { index: p.index + 1, vector: 1 });
          };
        }
        function J(p, T) {
          var I = null;
          T === p.slides.length && (O(), ee(p)),
            t.each(p.anchors, function (l, G) {
              e(l.els).each(function (W, N) {
                e(N).index() === T && (I = G);
              });
            }),
            I != null && U(p, { index: I, immediate: !0 });
        }
        function H(p) {
          S(p);
          var T = p.config,
            I = T.timerMax;
          (I && p.timerCount++ > I) ||
            (p.timerId = window.setTimeout(function () {
              p.timerId == null || a || (Y(p)(), H(p));
            }, T.delay));
        }
        function S(p) {
          window.clearTimeout(p.timerId), (p.timerId = null);
        }
        function h(p) {
          return function (T, I) {
            I = I || {};
            var l = p.config;
            if (a && T.type === "setting") {
              if (I.select === "prev") return K(p)();
              if (I.select === "next") return Y(p)();
              if ((M(p), ee(p), I.select == null)) return;
              J(p, I.select);
              return;
            }
            if (T.type === "swipe")
              return l.disableSwipe || Rt.env("editor")
                ? void 0
                : I.direction === "left"
                  ? Y(p)()
                  : I.direction === "right"
                    ? K(p)()
                    : void 0;
            if (p.nav.has(T.target).length) {
              var G = e(T.target).index();
              if (
                (T.type === "click" && U(p, { index: G }), T.type === "keydown")
              )
                switch (T.keyCode) {
                  case dt.ENTER:
                  case dt.SPACE: {
                    U(p, { index: G }), T.preventDefault();
                    break;
                  }
                  case dt.ARROW_LEFT:
                  case dt.ARROW_UP: {
                    L(p.nav, Math.max(G - 1, 0)), T.preventDefault();
                    break;
                  }
                  case dt.ARROW_RIGHT:
                  case dt.ARROW_DOWN: {
                    L(p.nav, Math.min(G + 1, p.pages)), T.preventDefault();
                    break;
                  }
                  case dt.HOME: {
                    L(p.nav, 0), T.preventDefault();
                    break;
                  }
                  case dt.END: {
                    L(p.nav, p.pages), T.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function L(p, T) {
          var I = p.children().eq(T).focus();
          p.children().not(I);
        }
        function U(p, T) {
          T = T || {};
          var I = p.config,
            l = p.anchors;
          p.previous = p.index;
          var G = T.index,
            W = {};
          G < 0
            ? ((G = l.length - 1),
              I.infinite &&
              ((W.x = -p.endX), (W.from = 0), (W.to = l[0].width)))
            : G >= l.length &&
            ((G = 0),
              I.infinite &&
              ((W.x = l[l.length - 1].width),
                (W.from = -l[l.length - 1].x),
                (W.to = W.from - W.x))),
            (p.index = G);
          var N = p.nav
            .children()
            .eq(G)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          p.nav
            .children()
            .not(N)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            I.hideArrows &&
            (p.index === l.length - 1 ? p.right.hide() : p.right.show(),
              p.index === 0 ? p.left.hide() : p.left.show());
          var ie = p.offsetX || 0,
            le = (p.offsetX = -l[p.index].x),
            oe = { x: le, opacity: 1, visibility: "" },
            g = e(l[p.index].els),
            B = e(l[p.previous] && l[p.previous].els),
            Z = p.slides.not(g),
            $ = I.animation,
            de = I.easing,
            De = Math.round(I.duration),
            Xe = T.vector || (p.index > p.previous ? 1 : -1),
            f = "opacity " + De + "ms " + de,
            w = "transform " + De + "ms " + de;
          if (
            (g.find(B_).removeAttr("tabindex"),
              g.removeAttr("aria-hidden"),
              g.find("*").removeAttr("aria-hidden"),
              Z.find(B_).attr("tabindex", "-1"),
              Z.attr("aria-hidden", "true"),
              Z.find("*").attr("aria-hidden", "true"),
              a || (g.each(y.intro), Z.each(y.outro)),
              T.immediate && !b)
          ) {
            n(g).set(oe), A();
            return;
          }
          if (p.index === p.previous) return;
          if (
            (a || p.ariaLiveLabel.text(`Slide ${G + 1} of ${l.length}.`),
              $ === "cross")
          ) {
            var R = Math.round(De - De * I.crossOver),
              D = Math.round(De - R);
            (f = "opacity " + R + "ms " + de),
              n(B).set({ visibility: "" }).add(f).start({ opacity: 0 }),
              n(g)
                .set({ visibility: "", x: le, opacity: 0, zIndex: p.depth++ })
                .add(f)
                .wait(D)
                .then({ opacity: 1 })
                .then(A);
            return;
          }
          if ($ === "fade") {
            n(B).set({ visibility: "" }).stop(),
              n(g)
                .set({ visibility: "", x: le, opacity: 0, zIndex: p.depth++ })
                .add(f)
                .start({ opacity: 1 })
                .then(A);
            return;
          }
          if ($ === "over") {
            (oe = { x: p.endX }),
              n(B).set({ visibility: "" }).stop(),
              n(g)
                .set({
                  visibility: "",
                  zIndex: p.depth++,
                  x: le + l[p.index].width * Xe,
                })
                .add(w)
                .start({ x: le })
                .then(A);
            return;
          }
          I.infinite && W.x
            ? (n(p.slides.not(B))
              .set({ visibility: "", x: W.x })
              .add(w)
              .start({ x: le }),
              n(B).set({ visibility: "", x: W.from }).add(w).start({ x: W.to }),
              (p.shifted = B))
            : (I.infinite &&
              p.shifted &&
              (n(p.shifted).set({ visibility: "", x: ie }),
                (p.shifted = null)),
              n(p.slides).set({ visibility: "" }).add(w).start({ x: le }));
          function A() {
            (g = e(l[p.index].els)),
              (Z = p.slides.not(g)),
              $ !== "slide" && (oe.visibility = "hidden"),
              n(Z).set(oe);
          }
        }
        function X(p, T) {
          var I = e.data(T, u);
          if (I) {
            if (V(I)) return ee(I);
            a && z(I) && ee(I);
          }
        }
        function ee(p) {
          var T = 1,
            I = 0,
            l = 0,
            G = 0,
            W = p.maskWidth,
            N = W - p.config.edge;
          N < 0 && (N = 0),
            (p.anchors = [{ els: [], x: 0, width: 0 }]),
            p.slides.each(function (le, oe) {
              l - I > N &&
                (T++,
                  (I += W),
                  (p.anchors[T - 1] = { els: [], x: l, width: 0 })),
                (G = e(oe).outerWidth(!0)),
                (l += G),
                (p.anchors[T - 1].width += G),
                p.anchors[T - 1].els.push(oe);
              var g = le + 1 + " of " + p.slides.length;
              e(oe).attr("aria-label", g), e(oe).attr("role", "group");
            }),
            (p.endX = l),
            a && (p.pages = null),
            p.nav.length && p.pages !== T && ((p.pages = T), re(p));
          var ie = p.index;
          ie >= T && (ie = T - 1), U(p, { immediate: !0, index: ie });
        }
        function re(p) {
          var T = [],
            I,
            l = p.el.attr("data-nav-spacing");
          l && (l = parseFloat(l) + "px");
          for (var G = 0, W = p.pages; G < W; G++)
            (I = e(d)),
              I.attr("aria-label", "Show slide " + (G + 1) + " of " + W)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              p.nav.hasClass("w-num") && I.text(G + 1),
              l != null && I.css({ "margin-left": l, "margin-right": l }),
              T.push(I);
          p.nav.empty().append(T);
        }
        function V(p) {
          var T = p.mask.width();
          return p.maskWidth !== T ? ((p.maskWidth = T), !0) : !1;
        }
        function z(p) {
          var T = 0;
          return (
            p.slides.each(function (I, l) {
              T += e(l).outerWidth(!0);
            }),
            p.slidesWidth !== T ? ((p.slidesWidth = T), !0) : !1
          );
        }
        return r;
      })
    );
  });
  var Y_ = c((dz, K_) => {
    "use strict";
    var Ct = Re(),
      BV = jt();
    Ct.define(
      "tabs",
      (K_.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          a = Ct.env,
          s = a.safari,
          u = a(),
          d = "data-w-tab",
          m = "data-w-pane",
          v = ".w-tabs",
          y = "w--current",
          _ = "w--tab-active",
          b = BV.triggers,
          O = !1;
        (t.ready = t.design = t.preview = q),
          (t.redraw = function () {
            (O = !0), q(), (O = !1);
          }),
          (t.destroy = function () {
            (i = n.find(v)), i.length && (i.each(C), x());
          });
        function q() {
          (o = u && Ct.env("design")),
            (i = n.find(v)),
            i.length &&
            (i.each(M), Ct.env("preview") && !O && i.each(C), x(), E());
        }
        function x() {
          Ct.redraw.off(t.redraw);
        }
        function E() {
          Ct.redraw.on(t.redraw);
        }
        function C(H, S) {
          var h = e.data(S, v);
          h &&
            (h.links && h.links.each(b.reset),
              h.panes && h.panes.each(b.reset));
        }
        function M(H, S) {
          var h = v.substr(1) + "-" + H,
            L = e(S),
            U = e.data(S, v);
          if (
            (U || (U = e.data(S, v, { el: L, config: {} })),
              (U.current = null),
              (U.tabIdentifier = h + "-" + d),
              (U.paneIdentifier = h + "-" + m),
              (U.menu = L.children(".w-tab-menu")),
              (U.links = U.menu.children(".w-tab-link")),
              (U.content = L.children(".w-tab-content")),
              (U.panes = U.content.children(".w-tab-pane")),
              U.el.off(v),
              U.links.off(v),
              U.menu.attr("role", "tablist"),
              U.links.attr("tabindex", "-1"),
              F(U),
              !o)
          ) {
            U.links.on("click" + v, j(U)), U.links.on("keydown" + v, K(U));
            var X = U.links.filter("." + y),
              ee = X.attr(d);
            ee && Y(U, { tab: ee, immediate: !0 });
          }
        }
        function F(H) {
          var S = {};
          S.easing = H.el.attr("data-easing") || "ease";
          var h = parseInt(H.el.attr("data-duration-in"), 10);
          h = S.intro = h === h ? h : 0;
          var L = parseInt(H.el.attr("data-duration-out"), 10);
          (L = S.outro = L === L ? L : 0),
            (S.immediate = !h && !L),
            (H.config = S);
        }
        function P(H) {
          var S = H.current;
          return Array.prototype.findIndex.call(
            H.links,
            (h) => h.getAttribute(d) === S,
            null
          );
        }
        function j(H) {
          return function (S) {
            S.preventDefault();
            var h = S.currentTarget.getAttribute(d);
            h && Y(H, { tab: h });
          };
        }
        function K(H) {
          return function (S) {
            var h = P(H),
              L = S.key,
              U = {
                ArrowLeft: h - 1,
                ArrowUp: h - 1,
                ArrowRight: h + 1,
                ArrowDown: h + 1,
                End: H.links.length - 1,
                Home: 0,
              };
            if (L in U) {
              S.preventDefault();
              var X = U[L];
              X === -1 && (X = H.links.length - 1),
                X === H.links.length && (X = 0);
              var ee = H.links[X],
                re = ee.getAttribute(d);
              re && Y(H, { tab: re });
            }
          };
        }
        function Y(H, S) {
          S = S || {};
          var h = H.config,
            L = h.easing,
            U = S.tab;
          if (U !== H.current) {
            H.current = U;
            var X;
            H.links.each(function (I, l) {
              var G = e(l);
              if (S.immediate || h.immediate) {
                var W = H.panes[I];
                l.id || (l.id = H.tabIdentifier + "-" + I),
                  W.id || (W.id = H.paneIdentifier + "-" + I),
                  (l.href = "#" + W.id),
                  l.setAttribute("role", "tab"),
                  l.setAttribute("aria-controls", W.id),
                  l.setAttribute("aria-selected", "false"),
                  W.setAttribute("role", "tabpanel"),
                  W.setAttribute("aria-labelledby", l.id);
              }
              l.getAttribute(d) === U
                ? ((X = l),
                  G.addClass(y)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(b.intro))
                : G.hasClass(y) &&
                G.removeClass(y)
                  .attr({ tabindex: "-1", "aria-selected": "false" })
                  .each(b.outro);
            });
            var ee = [],
              re = [];
            H.panes.each(function (I, l) {
              var G = e(l);
              l.getAttribute(d) === U
                ? ee.push(l)
                : G.hasClass(_) && re.push(l);
            });
            var V = e(ee),
              z = e(re);
            if (S.immediate || h.immediate) {
              V.addClass(_).each(b.intro),
                z.removeClass(_),
                O || Ct.redraw.up();
              return;
            } else {
              var p = window.scrollX,
                T = window.scrollY;
              X.focus(), window.scrollTo(p, T);
            }
            z.length && h.outro
              ? (z.each(b.outro),
                r(z)
                  .add("opacity " + h.outro + "ms " + L, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => J(h, z, V)))
              : J(h, z, V);
          }
        }
        function J(H, S, h) {
          if (
            (S.removeClass(_).css({
              opacity: "",
              transition: "",
              transform: "",
              width: "",
              height: "",
            }),
              h.addClass(_).each(b.intro),
              Ct.redraw.up(),
              !H.intro)
          )
            return r(h).set({ opacity: 1 });
          r(h)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + H.intro + "ms " + H.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  var Q_ = c((pz, $_) => {
    "use strict";
    var Ht = Re();
    Ht.define(
      "maps",
      ($_.exports = function (e, t) {
        var r = {},
          n = e(document),
          i = null,
          o,
          a = ".w-widget-map",
          s = "AIzaSyA2b5BEflJ7QQ1GNNY8W858pHKAJG3EOV4";
        (r.ready = function () {
          Ht.env() || u();
        }),
          (r.destroy = d);
        function u() {
          if (((o = n.find(a)), !o.length)) return;
          i === null
            ? (e.getScript(
              "https://maps.googleapis.com/maps/api/js?v=3.31&sensor=false&callback=_wf_maps_loaded&key=" +
              s
            ),
              (window._wf_maps_loaded = q))
            : q();
          function q() {
            (window._wf_maps_loaded = function () { }),
              (i = window.google),
              o.each(v),
              d(),
              m();
          }
        }
        function d() {
          Ht.resize.off(y), Ht.redraw.off(y);
        }
        function m() {
          Ht.resize.on(y), Ht.redraw.on(y);
        }
        function v(q, x) {
          var E = e(x).data();
          O(x, E);
        }
        function y() {
          o.each(_);
        }
        function _(q, x) {
          var E = O(x);
          i.maps.event.trigger(E.map, "resize"), E.setMapPosition();
        }
        var b = "w-widget-map";
        function O(q, x) {
          var E = e.data(q, b);
          if (E) return E;
          var C = typeof x.widgetTooltip == "string" && x.widgetTooltip !== "",
            M = e(q),
            F = M.attr("title"),
            P = "Map pin";
          F && x.widgetTooltip
            ? (P = `Map pin on ${F} showing location of ${x.widgetTooltip}`)
            : F && !x.widgetTooltip
              ? (P = `Map pin on ${F}`)
              : !F &&
              x.widgetTooltip &&
              (P = `Map pin showing location of ${x.widgetTooltip}`),
            (E = e.data(q, b, {
              latLng: "51.511214,-0.119824",
              tooltip: "",
              style: "roadmap",
              zoom: 12,
              marker: new i.maps.Marker({ draggable: !1, title: P }),
              infowindow: new i.maps.InfoWindow({ disableAutoPan: !0 }),
            })),
            typeof x.widgetLatlng == "string" &&
            x.widgetLatlng.length !== "" &&
            (E.latLng = x.widgetLatlng);
          var j = E.latLng.split(","),
            K = new i.maps.LatLng(j[0], j[1]);
          E.latLngObj = K;
          var Y = !(Ht.env.touch && !x.enableTouch);
          if (
            ((E.map = new i.maps.Map(q, {
              center: E.latLngObj,
              zoom: E.zoom,
              maxZoom: 20,
              mapTypeControl: !1,
              panControl: !1,
              streetViewControl: !1,
              scrollwheel: x.enableScroll,
              draggable: Y,
              zoomControl: !0,
              zoomControlOptions: { style: i.maps.ZoomControlStyle.SMALL },
              mapTypeId: E.style,
            })),
              E.marker.setMap(E.map),
              (E.setMapPosition = function () {
                E.map.setCenter(E.latLngObj);
                var h = 0,
                  L = 0,
                  U = M.css([
                    "paddingTop",
                    "paddingRight",
                    "paddingBottom",
                    "paddingLeft",
                  ]);
                (h -= parseInt(U.paddingLeft, 10)),
                  (h += parseInt(U.paddingRight, 10)),
                  (L -= parseInt(U.paddingTop, 10)),
                  (L += parseInt(U.paddingBottom, 10)),
                  (h || L) && E.map.panBy(h, L),
                  M.css("position", "");
              }),
              i.maps.event.addListener(E.map, "tilesloaded", function () {
                i.maps.event.clearListeners(E.map, "tilesloaded"),
                  E.setMapPosition();
              }),
              E.setMapPosition(),
              E.marker.setPosition(E.latLngObj),
              E.infowindow.setPosition(E.latLngObj),
              C)
          ) {
            var J = x.widgetTooltip;
            (E.tooltip = J),
              E.infowindow.setContent(J),
              E.infowindowOpen ||
              (E.infowindow.open(E.map, E.marker), (E.infowindowOpen = !0));
          }
          var H = x.widgetStyle;
          H && E.map.setMapTypeId(H);
          var S = x.widgetZoom;
          return (
            S != null && ((E.zoom = S), E.map.setZoom(Number(S))),
            i.maps.event.addListener(E.marker, "click", function () {
              window.open(
                "https://maps.google.com/?z=" + E.zoom + "&daddr=" + E.latLng
              );
            }),
            E
          );
        }
        return r;
      })
    );
  });
  Bs();
  zs();
  Ys();
  Zs();
  jt();
  C_();
  N_();
  M_();
  D_();
  G_();
  W_();
  X_();
  z_();
  Y_();
  Q_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a2824686627563caf92d0e|1966d3b2-8018-5bef-8c30-3a9bdd1d531a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a2824686627563caf92d0e|1966d3b2-8018-5bef-8c30-3a9bdd1d531a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-p",
          smoothing: 95,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1671621434990,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|3907d24a-a78b-5b7b-0c27-90ba91a63216",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|3907d24a-a78b-5b7b-0c27-90ba91a63216",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649057581434,
    },
    "e-6": {
      id: "e-6",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-64",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|3907d24a-a78b-5b7b-0c27-90ba91a63216",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|3907d24a-a78b-5b7b-0c27-90ba91a63216",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649057581435,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|d071b62e-6c7c-59a8-e49f-26b0abe0fa21",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|d071b62e-6c7c-59a8-e49f-26b0abe0fa21",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671699027496,
    },
    "e-8": {
      id: "e-8",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-7",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|d071b62e-6c7c-59a8-e49f-26b0abe0fa21",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|d071b62e-6c7c-59a8-e49f-26b0abe0fa21",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671699027496,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|5e63c50c-f9e5-ac50-dd6d-286074032e50",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|5e63c50c-f9e5-ac50-dd6d-286074032e50",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671699027899,
    },
    "e-10": {
      id: "e-10",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-9",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|5e63c50c-f9e5-ac50-dd6d-286074032e50",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|5e63c50c-f9e5-ac50-dd6d-286074032e50",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671699027899,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|c93b74f6-1a09-27c9-9f32-14b3b720cef8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|c93b74f6-1a09-27c9-9f32-14b3b720cef8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671699028242,
    },
    "e-12": {
      id: "e-12",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-11",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|c93b74f6-1a09-27c9-9f32-14b3b720cef8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|c93b74f6-1a09-27c9-9f32-14b3b720cef8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671699028242,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|0a633352-48f2-22bf-e754-35c8602a8b0a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|0a633352-48f2-22bf-e754-35c8602a8b0a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671699375077,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-13",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|0a633352-48f2-22bf-e754-35c8602a8b0a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|0a633352-48f2-22bf-e754-35c8602a8b0a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671699375077,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63a4011390ad16a53f97bc50|55c6a85c-4a39-aed2-4fe5-117343d2c7cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|55c6a85c-4a39-aed2-4fe5-117343d2c7cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-p",
          smoothing: 90,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1671699636244,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-17",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|91743bc3-4d72-45ce-ec40-9f86581d446f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|91743bc3-4d72-45ce-ec40-9f86581d446f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671701877075,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-16",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|91743bc3-4d72-45ce-ec40-9f86581d446f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|91743bc3-4d72-45ce-ec40-9f86581d446f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671701877075,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-19",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|91743bc3-4d72-45ce-ec40-9f86581d4477",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|91743bc3-4d72-45ce-ec40-9f86581d4477",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671701877075,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-18",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|91743bc3-4d72-45ce-ec40-9f86581d4477",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|91743bc3-4d72-45ce-ec40-9f86581d4477",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671701877075,
    },
    "e-20": {
      id: "e-20",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-21",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|91743bc3-4d72-45ce-ec40-9f86581d447f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|91743bc3-4d72-45ce-ec40-9f86581d447f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671701877075,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-20",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|91743bc3-4d72-45ce-ec40-9f86581d447f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|91743bc3-4d72-45ce-ec40-9f86581d447f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671701877075,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-23",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|91743bc3-4d72-45ce-ec40-9f86581d4487",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|91743bc3-4d72-45ce-ec40-9f86581d4487",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671701877075,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-22",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|91743bc3-4d72-45ce-ec40-9f86581d4487",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|91743bc3-4d72-45ce-ec40-9f86581d4487",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671701877075,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-25",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|91743bc3-4d72-45ce-ec40-9f86581d448f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|91743bc3-4d72-45ce-ec40-9f86581d448f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671701877075,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|91743bc3-4d72-45ce-ec40-9f86581d448f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|91743bc3-4d72-45ce-ec40-9f86581d448f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671701877075,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-27",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|bc427e8e-c48c-f592-8e03-a1e2f71cbdb1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|bc427e8e-c48c-f592-8e03-a1e2f71cbdb1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671701921609,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-26",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|bc427e8e-c48c-f592-8e03-a1e2f71cbdb1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|bc427e8e-c48c-f592-8e03-a1e2f71cbdb1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671701921609,
    },
    "e-28": {
      id: "e-28",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-29",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd1d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd1d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671707045259,
    },
    "e-29": {
      id: "e-29",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-28",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd1d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd1d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671707045259,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-31",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd25",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd25",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671707045259,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd25",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd25",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671707045259,
    },
    "e-32": {
      id: "e-32",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-33",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd2d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd2d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671707045259,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd2d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd2d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671707045259,
    },
    "e-34": {
      id: "e-34",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-35",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd35",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd35",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671707045259,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-34",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd35",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd35",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671707045259,
    },
    "e-36": {
      id: "e-36",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd3d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd3d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671707045259,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd3d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd3d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671707045259,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-39",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd45",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd45",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671707045259,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-38",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd45",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a438c05b9cd7df3e3d7678|fd51eff2-19ca-a590-4174-b1de538acd45",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671707045259,
    },
    "e-40": {
      id: "e-40",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-41",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|881b6e60-7cbf-ca49-7b98-3bda028fff9e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|881b6e60-7cbf-ca49-7b98-3bda028fff9e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671772936025,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-40",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|881b6e60-7cbf-ca49-7b98-3bda028fff9e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|881b6e60-7cbf-ca49-7b98-3bda028fff9e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671772936025,
    },
    "e-42": {
      id: "e-42",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-43",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|881b6e60-7cbf-ca49-7b98-3bda028fffa6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|881b6e60-7cbf-ca49-7b98-3bda028fffa6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671772936025,
    },
    "e-43": {
      id: "e-43",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-42",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|881b6e60-7cbf-ca49-7b98-3bda028fffa6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|881b6e60-7cbf-ca49-7b98-3bda028fffa6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671772936025,
    },
    "e-44": {
      id: "e-44",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-45",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|881b6e60-7cbf-ca49-7b98-3bda028fffae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|881b6e60-7cbf-ca49-7b98-3bda028fffae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671772936025,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-44",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|881b6e60-7cbf-ca49-7b98-3bda028fffae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|881b6e60-7cbf-ca49-7b98-3bda028fffae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671772936025,
    },
    "e-46": {
      id: "e-46",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-47",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|881b6e60-7cbf-ca49-7b98-3bda028fffb6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|881b6e60-7cbf-ca49-7b98-3bda028fffb6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671772936025,
    },
    "e-47": {
      id: "e-47",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-46",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|881b6e60-7cbf-ca49-7b98-3bda028fffb6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|881b6e60-7cbf-ca49-7b98-3bda028fffb6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671772936025,
    },
    "e-48": {
      id: "e-48",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-49",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|881b6e60-7cbf-ca49-7b98-3bda028fffbe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|881b6e60-7cbf-ca49-7b98-3bda028fffbe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671772936025,
    },
    "e-49": {
      id: "e-49",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-48",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|881b6e60-7cbf-ca49-7b98-3bda028fffbe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|881b6e60-7cbf-ca49-7b98-3bda028fffbe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671772936025,
    },
    "e-50": {
      id: "e-50",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-51",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|1cac4cb6-8eb6-5b34-64a6-3b76e9a07026",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|1cac4cb6-8eb6-5b34-64a6-3b76e9a07026",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671773126173,
    },
    "e-51": {
      id: "e-51",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-50",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|1cac4cb6-8eb6-5b34-64a6-3b76e9a07026",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|1cac4cb6-8eb6-5b34-64a6-3b76e9a07026",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671773126173,
    },
    "e-52": {
      id: "e-52",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-53",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|1cac4cb6-8eb6-5b34-64a6-3b76e9a0702e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|1cac4cb6-8eb6-5b34-64a6-3b76e9a0702e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671773126173,
    },
    "e-53": {
      id: "e-53",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-52",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|1cac4cb6-8eb6-5b34-64a6-3b76e9a0702e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|1cac4cb6-8eb6-5b34-64a6-3b76e9a0702e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671773126173,
    },
    "e-54": {
      id: "e-54",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-55",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|1cac4cb6-8eb6-5b34-64a6-3b76e9a07036",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|1cac4cb6-8eb6-5b34-64a6-3b76e9a07036",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671773126173,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-54",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|1cac4cb6-8eb6-5b34-64a6-3b76e9a07036",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|1cac4cb6-8eb6-5b34-64a6-3b76e9a07036",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671773126173,
    },
    "e-56": {
      id: "e-56",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-57",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|1cac4cb6-8eb6-5b34-64a6-3b76e9a0703e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|1cac4cb6-8eb6-5b34-64a6-3b76e9a0703e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671773126173,
    },
    "e-57": {
      id: "e-57",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-56",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|1cac4cb6-8eb6-5b34-64a6-3b76e9a0703e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|1cac4cb6-8eb6-5b34-64a6-3b76e9a0703e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671773126173,
    },
    "e-58": {
      id: "e-58",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-59",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|1cac4cb6-8eb6-5b34-64a6-3b76e9a07046",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|1cac4cb6-8eb6-5b34-64a6-3b76e9a07046",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671773126173,
    },
    "e-59": {
      id: "e-59",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-58",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|1cac4cb6-8eb6-5b34-64a6-3b76e9a07046",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|1cac4cb6-8eb6-5b34-64a6-3b76e9a07046",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671773126173,
    },
    "e-60": {
      id: "e-60",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-61",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|2448522e-c4ad-6596-16a3-063458f67c1f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|2448522e-c4ad-6596-16a3-063458f67c1f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671773128572,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-60",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|2448522e-c4ad-6596-16a3-063458f67c1f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|2448522e-c4ad-6596-16a3-063458f67c1f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671773128572,
    },
    "e-62": {
      id: "e-62",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-63",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|2448522e-c4ad-6596-16a3-063458f67c27",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|2448522e-c4ad-6596-16a3-063458f67c27",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671773128572,
    },
    "e-63": {
      id: "e-63",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-62",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|2448522e-c4ad-6596-16a3-063458f67c27",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|2448522e-c4ad-6596-16a3-063458f67c27",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671773128572,
    },
    "e-64": {
      id: "e-64",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-65",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|2448522e-c4ad-6596-16a3-063458f67c2f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|2448522e-c4ad-6596-16a3-063458f67c2f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671773128572,
    },
    "e-65": {
      id: "e-65",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-64",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|2448522e-c4ad-6596-16a3-063458f67c2f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|2448522e-c4ad-6596-16a3-063458f67c2f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671773128572,
    },
    "e-66": {
      id: "e-66",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-67",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|2448522e-c4ad-6596-16a3-063458f67c37",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|2448522e-c4ad-6596-16a3-063458f67c37",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671773128572,
    },
    "e-67": {
      id: "e-67",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-66",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|2448522e-c4ad-6596-16a3-063458f67c37",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|2448522e-c4ad-6596-16a3-063458f67c37",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671773128572,
    },
    "e-68": {
      id: "e-68",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-69",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|2448522e-c4ad-6596-16a3-063458f67c3f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|2448522e-c4ad-6596-16a3-063458f67c3f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671773128572,
    },
    "e-69": {
      id: "e-69",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-68",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a53a596ccbdb403c59bca3|2448522e-c4ad-6596-16a3-063458f67c3f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a53a596ccbdb403c59bca3|2448522e-c4ad-6596-16a3-063458f67c3f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671773128572,
    },
    "e-70": {
      id: "e-70",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-71",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a96981a014a529700eca1d|0f0bf674-ccf1-a8f6-405f-98f0c8cc27d6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a96981a014a529700eca1d|0f0bf674-ccf1-a8f6-405f-98f0c8cc27d6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672047483377,
    },
    "e-71": {
      id: "e-71",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-70",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a96981a014a529700eca1d|0f0bf674-ccf1-a8f6-405f-98f0c8cc27d6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a96981a014a529700eca1d|0f0bf674-ccf1-a8f6-405f-98f0c8cc27d6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672047483378,
    },
    "e-72": {
      id: "e-72",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-73",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|41a8ebfd-494e-e018-fa58-7d8be35a3e10",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|41a8ebfd-494e-e018-fa58-7d8be35a3e10",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672048194952,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-72",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a4011390ad16a53f97bc50|41a8ebfd-494e-e018-fa58-7d8be35a3e10",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50|41a8ebfd-494e-e018-fa58-7d8be35a3e10",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672048194952,
    },
    "e-75": {
      id: "e-75",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-158",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522a6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522a6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672288289150,
    },
    "e-76": {
      id: "e-76",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-157",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522a6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522a6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672288289150,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-78",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522ae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522ae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672288289150,
    },
    "e-78": {
      id: "e-78",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-77",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522ae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522ae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672288289150,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-80",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522b6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522b6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672288289150,
    },
    "e-80": {
      id: "e-80",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-79",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522b6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522b6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672288289150,
    },
    "e-81": {
      id: "e-81",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-82",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522be",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522be",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672288289150,
    },
    "e-82": {
      id: "e-82",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-81",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522be",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522be",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672288289150,
    },
    "e-83": {
      id: "e-83",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-84",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672288289150,
    },
    "e-84": {
      id: "e-84",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-83",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672288289150,
    },
    "e-85": {
      id: "e-85",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-86",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522ce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672288289150,
    },
    "e-86": {
      id: "e-86",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-85",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522ce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad0f5aa2e57b5428c89fb0|f9018732-bece-09b1-d054-9c54291522ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672288289150,
    },
    "e-87": {
      id: "e-87",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-88",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604a6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604a6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672644078038,
    },
    "e-88": {
      id: "e-88",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-87",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604a6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604a6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672644078038,
    },
    "e-89": {
      id: "e-89",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-90",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604ae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604ae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672644078038,
    },
    "e-90": {
      id: "e-90",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-89",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604ae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604ae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672644078038,
    },
    "e-91": {
      id: "e-91",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-92",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604b6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604b6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672644078038,
    },
    "e-92": {
      id: "e-92",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-91",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604b6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604b6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672644078038,
    },
    "e-93": {
      id: "e-93",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-94",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604be",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604be",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672644078038,
    },
    "e-94": {
      id: "e-94",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-93",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604be",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604be",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672644078038,
    },
    "e-95": {
      id: "e-95",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-96",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672644078038,
    },
    "e-96": {
      id: "e-96",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-95",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672644078038,
    },
    "e-97": {
      id: "e-97",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-98",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604ce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672644078038,
    },
    "e-98": {
      id: "e-98",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-97",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604ce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63ad828b111f58a6ab49aad3|e3bdaad4-3166-709b-0f90-69bbcfc604ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672644078038,
    },
    "e-99": {
      id: "e-99",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-100",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b3cd9e1f032ebfcf4c7c5f|0f0bf674-ccf1-a8f6-405f-98f0c8cc27d6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b3cd9e1f032ebfcf4c7c5f|0f0bf674-ccf1-a8f6-405f-98f0c8cc27d6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672727969629,
    },
    "e-100": {
      id: "e-100",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-99",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b3cd9e1f032ebfcf4c7c5f|0f0bf674-ccf1-a8f6-405f-98f0c8cc27d6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b3cd9e1f032ebfcf4c7c5f|0f0bf674-ccf1-a8f6-405f-98f0c8cc27d6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672727969629,
    },
    "e-101": {
      id: "e-101",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-102",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b3cd9e1f032ebfcf4c7c5f|7d98658c-2a89-9af9-8546-235f27a37449",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b3cd9e1f032ebfcf4c7c5f|7d98658c-2a89-9af9-8546-235f27a37449",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672728120008,
    },
    "e-102": {
      id: "e-102",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-101",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b3cd9e1f032ebfcf4c7c5f|7d98658c-2a89-9af9-8546-235f27a37449",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b3cd9e1f032ebfcf4c7c5f|7d98658c-2a89-9af9-8546-235f27a37449",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672728120008,
    },
    "e-105": {
      id: "e-105",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-106",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b3d09a0b8014ba85a9d0e4|0f0bf674-ccf1-a8f6-405f-98f0c8cc27d6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b3d09a0b8014ba85a9d0e4|0f0bf674-ccf1-a8f6-405f-98f0c8cc27d6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672728733544,
    },
    "e-106": {
      id: "e-106",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-105",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b3d09a0b8014ba85a9d0e4|0f0bf674-ccf1-a8f6-405f-98f0c8cc27d6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b3d09a0b8014ba85a9d0e4|0f0bf674-ccf1-a8f6-405f-98f0c8cc27d6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672728733544,
    },
    "e-107": {
      id: "e-107",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-108",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a426cc6b52565827521001|722fd3c6-10b7-8c50-57d0-90cd86ac2cdf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a426cc6b52565827521001|722fd3c6-10b7-8c50-57d0-90cd86ac2cdf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672729534140,
    },
    "e-108": {
      id: "e-108",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-107",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a426cc6b52565827521001|722fd3c6-10b7-8c50-57d0-90cd86ac2cdf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a426cc6b52565827521001|722fd3c6-10b7-8c50-57d0-90cd86ac2cdf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672729534140,
    },
    "e-109": {
      id: "e-109",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-110",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57160",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57160",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825107588,
    },
    "e-110": {
      id: "e-110",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-109",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57160",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57160",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825107588,
    },
    "e-111": {
      id: "e-111",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-112",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57168",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57168",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825107588,
    },
    "e-112": {
      id: "e-112",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-111",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57168",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57168",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825107588,
    },
    "e-113": {
      id: "e-113",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-114",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57170",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57170",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825107588,
    },
    "e-114": {
      id: "e-114",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-113",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57170",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57170",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825107588,
    },
    "e-115": {
      id: "e-115",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-116",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57178",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57178",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825107588,
    },
    "e-116": {
      id: "e-116",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-115",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57178",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57178",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825107588,
    },
    "e-117": {
      id: "e-117",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-118",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57180",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57180",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825107588,
    },
    "e-118": {
      id: "e-118",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-117",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57180",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57180",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825107588,
    },
    "e-119": {
      id: "e-119",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-120",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57188",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57188",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825107588,
    },
    "e-120": {
      id: "e-120",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-119",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57188",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b4f80064a9587cde2bf695|7b7adb42-50b6-17c3-e24f-b0214dd57188",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825107588,
    },
    "e-143": {
      id: "e-143",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-144",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71aa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71aa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825730161,
    },
    "e-144": {
      id: "e-144",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-143",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71aa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71aa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825730161,
    },
    "e-145": {
      id: "e-145",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-146",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71b2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71b2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825730161,
    },
    "e-146": {
      id: "e-146",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-145",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71b2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71b2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825730161,
    },
    "e-147": {
      id: "e-147",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-148",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71ba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825730161,
    },
    "e-148": {
      id: "e-148",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-147",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71ba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825730161,
    },
    "e-149": {
      id: "e-149",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-150",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71c2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71c2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825730161,
    },
    "e-150": {
      id: "e-150",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-149",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71c2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71c2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825730161,
    },
    "e-151": {
      id: "e-151",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-152",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71ca",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71ca",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825730161,
    },
    "e-152": {
      id: "e-152",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-151",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71ca",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71ca",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825730161,
    },
    "e-153": {
      id: "e-153",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-154",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71d2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71d2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825730161,
    },
    "e-154": {
      id: "e-154",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-153",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71d2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b54a6dfcbe522f833e8179|9908aa18-30f3-b3b0-7895-4683e7cf71d2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825730161,
    },
    "e-155": {
      id: "e-155",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-156",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b54a6dfcbe522f833e8179|68bea476-a12d-860a-dd33-921829ba7244",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b54a6dfcbe522f833e8179|68bea476-a12d-860a-dd33-921829ba7244",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825801787,
    },
    "e-156": {
      id: "e-156",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-155",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b54a6dfcbe522f833e8179|68bea476-a12d-860a-dd33-921829ba7244",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b54a6dfcbe522f833e8179|68bea476-a12d-860a-dd33-921829ba7244",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672825801787,
    },
    "e-159": {
      id: "e-159",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-160",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63a2824686627563caf92d0e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a2824686627563caf92d0e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672902753668,
    },
    "e-161": {
      id: "e-161",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-162",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63a3d64aed59558a530805b9",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a3d64aed59558a530805b9",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672908526378,
    },
    "e-163": {
      id: "e-163",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-164",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63a4011390ad16a53f97bc50",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a4011390ad16a53f97bc50",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672911463803,
    },
    "e-165": {
      id: "e-165",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-166",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63b4f80064a9587cde2bf695",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b4f80064a9587cde2bf695",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672912063299,
    },
    "e-167": {
      id: "e-167",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-168",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "63a3d64aed59558a530805b9",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a3d64aed59558a530805b9",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672987046459,
    },
    "e-171": {
      id: "e-171",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-172",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63b54a6dfcbe522f833e8179",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b54a6dfcbe522f833e8179",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1673065154024,
    },
    "e-173": {
      id: "e-173",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-174",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63a987bcf1c7f6fd4ee9f7b2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a987bcf1c7f6fd4ee9f7b2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1673067502044,
    },
    "e-175": {
      id: "e-175",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-176",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b07",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b07",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1673239046169,
    },
    "e-176": {
      id: "e-176",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-175",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b07",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b07",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1673239046169,
    },
    "e-177": {
      id: "e-177",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-178",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b0f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b0f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1673239046169,
    },
    "e-178": {
      id: "e-178",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-177",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b0f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b0f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1673239046169,
    },
    "e-179": {
      id: "e-179",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-180",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b17",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b17",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1673239046169,
    },
    "e-180": {
      id: "e-180",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-179",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b17",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b17",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1673239046169,
    },
    "e-181": {
      id: "e-181",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-182",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b1f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b1f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1673239046169,
    },
    "e-182": {
      id: "e-182",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-181",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b1f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b1f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1673239046169,
    },
    "e-183": {
      id: "e-183",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-184",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b27",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b27",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1673239046169,
    },
    "e-184": {
      id: "e-184",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-183",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b27",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b27",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1673239046169,
    },
    "e-185": {
      id: "e-185",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-186",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b2f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b2f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1673239046169,
    },
    "e-186": {
      id: "e-186",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-185",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b2f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b3adb4d81a37a679530d61|f37c6bb9-add5-3f14-9b89-2886fbc71b2f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1673239046169,
    },
    "e-187": {
      id: "e-187",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-188",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63b3adb4d81a37a679530d61",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63b3adb4d81a37a679530d61",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1673240845473,
    },
    "e-189": {
      id: "e-189",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-190",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "db8d24bf-79cd-75b5-3bc9-7f0ad94b06d9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "db8d24bf-79cd-75b5-3bc9-7f0ad94b06d9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672458904171,
    },
    "e-190": {
      id: "e-190",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-189",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "db8d24bf-79cd-75b5-3bc9-7f0ad94b06d9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "db8d24bf-79cd-75b5-3bc9-7f0ad94b06d9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1672458904172,
    },
    "e-191": {
      id: "e-191",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: {
          actionListId: "slideInBottomRight",
          autoStopEventId: "e-192",
        },
      },
      mediaQueries: ["main", "tiny"],
      target: {
        id: "63a3d64aed59558a530805b9|da3ee0d4-b8b2-7a55-4934-a64a0eab7dfa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a3d64aed59558a530805b9|da3ee0d4-b8b2-7a55-4934-a64a0eab7dfa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: -30,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "BOTTOM_RIGHT",
        effectIn: true,
      },
      createdOn: 1674709304474,
    },
    "e-193": {
      id: "e-193",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: {
          actionListId: "slideInBottomRight",
          autoStopEventId: "e-194",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63a3d64aed59558a530805b9|da3ee0d4-b8b2-7a55-4934-a64a0eab7df9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a3d64aed59558a530805b9|da3ee0d4-b8b2-7a55-4934-a64a0eab7df9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: -20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "BOTTOM_RIGHT",
        effectIn: true,
      },
      createdOn: 1674709503897,
    },
    "e-195": {
      id: "e-195",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-196" },
      },
      mediaQueries: ["main"],
      target: {
        id: "63a3d64aed59558a530805b9|da3ee0d4-b8b2-7a55-4934-a64a0eab7dfb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a3d64aed59558a530805b9|da3ee0d4-b8b2-7a55-4934-a64a0eab7dfb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: -5,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1674709540009,
    },
    "e-197": {
      id: "e-197",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-198" },
      },
      mediaQueries: ["main"],
      target: {
        id: "63a3d64aed59558a530805b9|da3ee0d4-b8b2-7a55-4934-a64a0eab7dfe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a3d64aed59558a530805b9|da3ee0d4-b8b2-7a55-4934-a64a0eab7dfe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1674709558195,
    },
    "e-199": {
      id: "e-199",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTopRight", autoStopEventId: "e-200" },
      },
      mediaQueries: ["main", "tiny"],
      target: {
        id: "63a3d64aed59558a530805b9|da3ee0d4-b8b2-7a55-4934-a64a0eab7dfc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a3d64aed59558a530805b9|da3ee0d4-b8b2-7a55-4934-a64a0eab7dfc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "TOP_RIGHT",
        effectIn: true,
      },
      createdOn: 1674709612825,
    },
    "e-201": {
      id: "e-201",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-202" },
      },
      mediaQueries: ["main"],
      target: {
        id: "63a3d64aed59558a530805b9|d887a8aa-ba14-8e8d-8ed1-24ff5c72739e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a3d64aed59558a530805b9|d887a8aa-ba14-8e8d-8ed1-24ff5c72739e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1674709629289,
    },
    "e-203": {
      id: "e-203",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-204" },
      },
      mediaQueries: ["main"],
      target: {
        id: "63a3d64aed59558a530805b9|d887a8aa-ba14-8e8d-8ed1-24ff5c7273a0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a3d64aed59558a530805b9|d887a8aa-ba14-8e8d-8ed1-24ff5c7273a0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1674709641664,
    },
    "e-205": {
      id: "e-205",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-206" },
      },
      mediaQueries: ["main"],
      target: {
        id: "63a3d64aed59558a530805b9|d887a8aa-ba14-8e8d-8ed1-24ff5c72739f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a3d64aed59558a530805b9|d887a8aa-ba14-8e8d-8ed1-24ff5c72739f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1674709666322,
    },
    "e-207": {
      id: "e-207",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTopLeft", autoStopEventId: "e-208" },
      },
      mediaQueries: ["main"],
      target: {
        id: "63a3d64aed59558a530805b9|d887a8aa-ba14-8e8d-8ed1-24ff5c7273a1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a3d64aed59558a530805b9|d887a8aa-ba14-8e8d-8ed1-24ff5c7273a1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "TOP_LEFT",
        effectIn: true,
      },
      createdOn: 1674709680273,
    },
    "e-209": {
      id: "e-209",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTopLeft", autoStopEventId: "e-210" },
      },
      mediaQueries: ["main"],
      target: {
        id: "63a3d64aed59558a530805b9|d887a8aa-ba14-8e8d-8ed1-24ff5c7273a2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a3d64aed59558a530805b9|d887a8aa-ba14-8e8d-8ed1-24ff5c7273a2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "TOP_LEFT",
        effectIn: true,
      },
      createdOn: 1674709695937,
    },
    "e-211": {
      id: "e-211",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-212" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a3d64aed59558a530805b9|6c9dc106-837c-5b2a-164e-b011d773e13c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a3d64aed59558a530805b9|6c9dc106-837c-5b2a-164e-b011d773e13c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1674710168714,
    },
    "e-213": {
      id: "e-213",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-214" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a3d64aed59558a530805b9|93bd65e4-bd38-9345-9ee8-07e25ea6abdf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a3d64aed59558a530805b9|93bd65e4-bd38-9345-9ee8-07e25ea6abdf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1674710193265,
    },
    "e-215": {
      id: "e-215",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-216" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63a3d64aed59558a530805b9|89ec5356-c32a-0e03-eda8-47e0bca8e694",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63a3d64aed59558a530805b9|89ec5356-c32a-0e03-eda8-47e0bca8e694",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1674710214473,
    },
    "e-217": {
      id: "e-217",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-218",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "f952be59-b82e-ec7a-2119-a8fc8c566d1e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "f952be59-b82e-ec7a-2119-a8fc8c566d1e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1675508485315,
    },
    "e-218": {
      id: "e-218",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-217",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "f952be59-b82e-ec7a-2119-a8fc8c566d1e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "f952be59-b82e-ec7a-2119-a8fc8c566d1e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1675508485319,
    },
    "e-219": {
      id: "e-219",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-220",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e5e9e5f149f39e34875652",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e5e9e5f149f39e34875652",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676014280667,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "Integrations Scroll",
      continuousParameterGroups: [
        {
          id: "a-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".integrations-icon-left.one",
                      selectorGuids: [
                        "51cc1d62-5663-1698-16f7-734de0ca4798",
                        "e75e8661-2cfe-fa4f-6d5a-6c633e013320",
                      ],
                    },
                    yValue: -30,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".integrations-icon-left.two",
                      selectorGuids: [
                        "51cc1d62-5663-1698-16f7-734de0ca4798",
                        "e29c7f26-0841-322c-2526-d443c8b54b88",
                      ],
                    },
                    yValue: -20,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".integrations-icon-left.three",
                      selectorGuids: [
                        "51cc1d62-5663-1698-16f7-734de0ca4798",
                        "3bb3e34d-c4d0-ae20-0976-2af6fa3b2c8d",
                      ],
                    },
                    yValue: -30,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-11",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".integrations-icon-right.one",
                      selectorGuids: [
                        "3054a74a-a8f9-b34d-214e-5ef0e238bd32",
                        "5b9ec6f7-2a88-211e-9875-57c8d4e8e3b6",
                      ],
                    },
                    yValue: -30,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-13",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".integrations-icon-right.two",
                      selectorGuids: [
                        "3054a74a-a8f9-b34d-214e-5ef0e238bd32",
                        "7c09123e-4d91-31da-aaeb-0500edfcddf0",
                      ],
                    },
                    yValue: -20,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-15",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {},
                    xValue: -10,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-17",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {},
                    xValue: 10,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".integrations-icon-left.one",
                      selectorGuids: [
                        "51cc1d62-5663-1698-16f7-734de0ca4798",
                        "e75e8661-2cfe-fa4f-6d5a-6c633e013320",
                      ],
                    },
                    yValue: -10,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".integrations-icon-left.two",
                      selectorGuids: [
                        "51cc1d62-5663-1698-16f7-734de0ca4798",
                        "e29c7f26-0841-322c-2526-d443c8b54b88",
                      ],
                    },
                    yValue: -30,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".integrations-icon-left.three",
                      selectorGuids: [
                        "51cc1d62-5663-1698-16f7-734de0ca4798",
                        "3bb3e34d-c4d0-ae20-0976-2af6fa3b2c8d",
                      ],
                    },
                    yValue: -10,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-12",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".integrations-icon-right.one",
                      selectorGuids: [
                        "3054a74a-a8f9-b34d-214e-5ef0e238bd32",
                        "5b9ec6f7-2a88-211e-9875-57c8d4e8e3b6",
                      ],
                    },
                    yValue: -10,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-14",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".integrations-icon-right.two",
                      selectorGuids: [
                        "3054a74a-a8f9-b34d-214e-5ef0e238bd32",
                        "7c09123e-4d91-31da-aaeb-0500edfcddf0",
                      ],
                    },
                    yValue: -30,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-16",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {},
                    xValue: 0,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-18",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {},
                    xValue: 0,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1671621445478,
    },
    "a-4": {
      id: "a-4",
      title: "ðŸª— Accordion [Open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-content",
                  selectorGuids: ["9c48c6a6-cb28-9af2-2ef9-ec0127b397cb"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-content",
                  selectorGuids: ["9c48c6a6-cb28-9af2-2ef9-ec0127b397cb"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-4-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "inOutSine",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-icon",
                  selectorGuids: ["9c48c6a6-cb28-9af2-2ef9-ec0127b397ca"],
                },
                zValue: 180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-4-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-heading",
                  selectorGuids: ["9c48c6a6-cb28-9af2-2ef9-ec0127b397c9"],
                },
                globalSwatchId: "a5253029",
                rValue: 180,
                bValue: 92,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1649057594510,
    },
    "a-5": {
      id: "a-5",
      title: "ðŸª— Accordion [Close]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-content",
                  selectorGuids: ["9c48c6a6-cb28-9af2-2ef9-ec0127b397cb"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-5-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "inOutSine",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-icon",
                  selectorGuids: ["9c48c6a6-cb28-9af2-2ef9-ec0127b397ca"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-5-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-heading",
                  selectorGuids: ["9c48c6a6-cb28-9af2-2ef9-ec0127b397c9"],
                },
                globalSwatchId: "bb3cd350",
                rValue: 245,
                bValue: 243,
                gValue: 243,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1649057930494,
    },
    "a-6": {
      id: "a-6",
      title: "Blog Image Zoom [In]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-hover-border",
                  selectorGuids: ["4a6de22d-5a23-7a3b-8bf0-ca654443e3cf"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-6-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-hover-border",
                  selectorGuids: ["4a6de22d-5a23-7a3b-8bf0-ca654443e3cf"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-6-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-image",
                  selectorGuids: ["05ceeac8-9a4c-6c64-29a9-f1dcf7941b85"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-6-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-image",
                  selectorGuids: ["05ceeac8-9a4c-6c64-29a9-f1dcf7941b85"],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1672047486769,
    },
    "a-7": {
      id: "a-7",
      title: "Blog Image Zoom [Out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-hover-border",
                  selectorGuids: ["4a6de22d-5a23-7a3b-8bf0-ca654443e3cf"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-image",
                  selectorGuids: ["05ceeac8-9a4c-6c64-29a9-f1dcf7941b85"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1672047486769,
    },
    "a-10": {
      id: "a-10",
      title: "Client Logo Move",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 30000,
                target: {
                  selector: ".grid-client",
                  selectorGuids: ["03500f8d-bb49-3b2f-9bc7-4ba723265897"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-10-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".grid-client",
                  selectorGuids: ["03500f8d-bb49-3b2f-9bc7-4ba723265897"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1672902758587,
    },
    "a-11": {
      id: "a-11",
      title: "Testimonial Marquee",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 30000,
                target: {
                  selector: ".testimonial-marquee",
                  selectorGuids: ["147338d4-0673-bb24-4c66-1dea0aaec6b2"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".testimonial-marquee",
                  selectorGuids: ["147338d4-0673-bb24-4c66-1dea0aaec6b2"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1672987050464,
    },
    "a-12": {
      id: "a-12",
      title: "Dropdown [Open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "db8d24bf-79cd-75b5-3bc9-7f0ad94b06de",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "db8d24bf-79cd-75b5-3bc9-7f0ad94b06de",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "db8d24bf-79cd-75b5-3bc9-7f0ad94b06de",
                },
                yValue: -15,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "db8d24bf-79cd-75b5-3bc9-7f0ad94b06de",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1672458602386,
    },
    "a-13": {
      id: "a-13",
      title: "Dropdown [Close]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "db8d24bf-79cd-75b5-3bc9-7f0ad94b06de",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-13-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "db8d24bf-79cd-75b5-3bc9-7f0ad94b06de",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1672458602386,
    },
    "a-14": {
      id: "a-14",
      title: "Navbar [Open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-button-divider-top",
                  selectorGuids: ["cb5fcab0-2eac-53b6-72eb-1beee618320e"],
                },
                zValue: -45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-14-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-button-divider-bottom",
                  selectorGuids: ["b63e10e4-7096-f555-0c45-f3323fd9ce84"],
                },
                zValue: 45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-14-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-button-divider-top",
                  selectorGuids: ["cb5fcab0-2eac-53b6-72eb-1beee618320e"],
                },
                yValue: 4,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-button-divider-bottom",
                  selectorGuids: ["b63e10e4-7096-f555-0c45-f3323fd9ce84"],
                },
                yValue: -3,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1675508491308,
    },
    "a-15": {
      id: "a-15",
      title: "Navbar [Close]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-button-divider-top",
                  selectorGuids: ["cb5fcab0-2eac-53b6-72eb-1beee618320e"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-15-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-button-divider-bottom",
                  selectorGuids: ["b63e10e4-7096-f555-0c45-f3323fd9ce84"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-15-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-button-divider-top",
                  selectorGuids: ["cb5fcab0-2eac-53b6-72eb-1beee618320e"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-button-divider-bottom",
                  selectorGuids: ["b63e10e4-7096-f555-0c45-f3323fd9ce84"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1675508491308,
    },
    "a-16": {
      id: "a-16",
      title: "Intro Hero Image Move",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 30000,
                target: {
                  selector: ".intro-hero-image-move",
                  selectorGuids: ["24bda3d7-09be-51ac-5387-3d0011d5cb2a"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".intro-hero-image-move",
                  selectorGuids: ["24bda3d7-09be-51ac-5387-3d0011d5cb2a"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1676014284529,
    },
    slideInBottomRight: {
      id: "slideInBottomRight",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 100,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    slideInRight: {
      id: "slideInRight",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    slideInTopRight: {
      id: "slideInTopRight",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 100,
                yValue: -100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    slideInLeft: {
      id: "slideInLeft",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: -100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    slideInTopLeft: {
      id: "slideInTopLeft",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: -100,
                yValue: -100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
