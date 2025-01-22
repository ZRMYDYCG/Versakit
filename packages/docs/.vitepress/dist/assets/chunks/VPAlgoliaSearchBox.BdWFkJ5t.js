import {
  d as pi,
  ar as vi,
  Y as hi,
  k as di,
  w as yi,
  A as _i,
  o as gi,
  a as bi,
} from './framework.D5-Ddbi5.js'
import { B as Si } from './theme.BKnsVfWH.js'
/*! @docsearch/js 3.8.0 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */ function Un() {
  return (
    (Un = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e]
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
          }
          return t
        }),
    Un.apply(null, arguments)
  )
}
function A(t) {
  return (
    (A =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e
          }),
    A(t)
  )
}
var We,
  H,
  So,
  Gt,
  _r,
  Oo,
  Fn,
  er,
  Bn,
  Vn,
  wo,
  Ue = {},
  Eo = [],
  Oi = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  _n = Array.isArray
function Tt(t, e) {
  for (var n in e) t[n] = e[n]
  return t
}
function jo(t) {
  t && t.parentNode && t.parentNode.removeChild(t)
}
function Dt(t, e, n) {
  var r,
    o,
    i,
    a = {}
  for (i in e) i == 'key' ? (r = e[i]) : i == 'ref' ? (o = e[i]) : (a[i] = e[i])
  if (
    (arguments.length > 2 &&
      (a.children = arguments.length > 3 ? We.call(arguments, 2) : n),
    typeof t == 'function' && t.defaultProps != null)
  )
    for (i in t.defaultProps) a[i] === void 0 && (a[i] = t.defaultProps[i])
  return Ee(t, a, r, o, null)
}
function Ee(t, e, n, r, o) {
  var i = {
    type: t,
    props: e,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: o ?? ++So,
    __i: -1,
    __u: 0,
  }
  return o == null && H.vnode != null && H.vnode(i), i
}
function Rt(t) {
  return t.children
}
function Ct(t, e) {
  ;(this.props = t), (this.context = e)
}
function ue(t, e) {
  if (e == null) return t.__ ? ue(t.__, t.__i + 1) : null
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null) return n.__e
  return typeof t.type == 'function' ? ue(t) : null
}
function Po(t) {
  var e, n
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e
        break
      }
    return Po(t)
  }
}
function Kn(t) {
  ;((!t.__d && (t.__d = !0) && Gt.push(t) && !yn.__r++) ||
    _r !== H.debounceRendering) &&
    ((_r = H.debounceRendering) || Oo)(yn)
}
function yn() {
  var t, e, n, r, o, i, a, u
  for (Gt.sort(Fn); (t = Gt.shift()); )
    t.__d &&
      ((e = Gt.length),
      (r = void 0),
      (i = (o = (n = t).__v).__e),
      (a = []),
      (u = []),
      n.__P &&
        (((r = Tt({}, o)).__v = o.__v + 1),
        H.vnode && H.vnode(r),
        nr(
          n.__P,
          r,
          o,
          n.__n,
          n.__P.namespaceURI,
          32 & o.__u ? [i] : null,
          a,
          i ?? ue(o),
          !!(32 & o.__u),
          u,
        ),
        (r.__v = o.__v),
        (r.__.__k[r.__i] = r),
        Do(a, r, u),
        r.__e != i && Po(r)),
      Gt.length > e && Gt.sort(Fn))
  yn.__r = 0
}
function Io(t, e, n, r, o, i, a, u, f, m, b) {
  var l,
    v,
    s,
    S,
    g,
    y = (r && r.__k) || Eo,
    _ = e.length
  for (
    n.__d = f,
      (function (h, p, d) {
        var P,
          E,
          C,
          N,
          I,
          x = p.length,
          k = d.length,
          U = k,
          z = 0
        for (h.__k = [], P = 0; P < x; P++)
          (E = p[P]) != null && typeof E != 'boolean' && typeof E != 'function'
            ? ((N = P + z),
              ((E = h.__k[P] =
                typeof E == 'string' ||
                typeof E == 'number' ||
                typeof E == 'bigint' ||
                E.constructor == String
                  ? Ee(null, E, null, null, null)
                  : _n(E)
                    ? Ee(Rt, { children: E }, null, null, null)
                    : E.constructor === void 0 && E.__b > 0
                      ? Ee(E.type, E.props, E.key, E.ref ? E.ref : null, E.__v)
                      : E).__ = h),
              (E.__b = h.__b + 1),
              (C = null),
              (I = E.__i = wi(E, d, N, U)) !== -1 &&
                (U--, (C = d[I]) && (C.__u |= 131072)),
              C == null || C.__v === null
                ? (I == -1 && z--,
                  typeof E.type != 'function' && (E.__u |= 65536))
                : I !== N &&
                  (I == N - 1
                    ? z--
                    : I == N + 1
                      ? z++
                      : (I > N ? z-- : z++, (E.__u |= 65536))))
            : (E = h.__k[P] = null)
        if (U)
          for (P = 0; P < k; P++)
            (C = d[P]) != null &&
              !(131072 & C.__u) &&
              (C.__e == h.__d && (h.__d = ue(C)), Co(C, C))
      })(n, e, y),
      f = n.__d,
      l = 0;
    l < _;
    l++
  )
    (s = n.__k[l]) != null &&
      ((v = s.__i === -1 ? Ue : y[s.__i] || Ue),
      (s.__i = l),
      nr(t, s, v, o, i, a, u, f, m, b),
      (S = s.__e),
      s.ref &&
        v.ref != s.ref &&
        (v.ref && rr(v.ref, null, s), b.push(s.ref, s.__c || S, s)),
      g == null && S != null && (g = S),
      65536 & s.__u || v.__k === s.__k
        ? (f = ko(s, f, t))
        : typeof s.type == 'function' && s.__d !== void 0
          ? (f = s.__d)
          : S && (f = S.nextSibling),
      (s.__d = void 0),
      (s.__u &= -196609))
  ;(n.__d = f), (n.__e = g)
}
function ko(t, e, n) {
  var r, o
  if (typeof t.type == 'function') {
    for (r = t.__k, o = 0; r && o < r.length; o++)
      r[o] && ((r[o].__ = t), (e = ko(r[o], e, n)))
    return e
  }
  t.__e != e &&
    (e && t.type && !n.contains(e) && (e = ue(t)),
    n.insertBefore(t.__e, e || null),
    (e = t.__e))
  do e = e && e.nextSibling
  while (e != null && e.nodeType === 8)
  return e
}
function Lt(t, e) {
  return (
    (e = e || []),
    t == null ||
      typeof t == 'boolean' ||
      (_n(t)
        ? t.some(function (n) {
            Lt(n, e)
          })
        : e.push(t)),
    e
  )
}
function wi(t, e, n, r) {
  var o = t.key,
    i = t.type,
    a = n - 1,
    u = n + 1,
    f = e[n]
  if (f === null || (f && o == f.key && i === f.type && !(131072 & f.__u)))
    return n
  if (r > (f == null || 131072 & f.__u ? 0 : 1))
    for (; a >= 0 || u < e.length; ) {
      if (a >= 0) {
        if ((f = e[a]) && !(131072 & f.__u) && o == f.key && i === f.type)
          return a
        a--
      }
      if (u < e.length) {
        if ((f = e[u]) && !(131072 & f.__u) && o == f.key && i === f.type)
          return u
        u++
      }
    }
  return -1
}
function gr(t, e, n) {
  e[0] === '-'
    ? t.setProperty(e, n ?? '')
    : (t[e] =
        n == null ? '' : typeof n != 'number' || Oi.test(e) ? n : n + 'px')
}
function en(t, e, n, r, o) {
  var i
  t: if (e === 'style')
    if (typeof n == 'string') t.style.cssText = n
    else {
      if ((typeof r == 'string' && (t.style.cssText = r = ''), r))
        for (e in r) (n && e in n) || gr(t.style, e, '')
      if (n) for (e in n) (r && n[e] === r[e]) || gr(t.style, e, n[e])
    }
  else if (e[0] === 'o' && e[1] === 'n')
    (i = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, '$1'))),
      (e =
        e.toLowerCase() in t || e === 'onFocusOut' || e === 'onFocusIn'
          ? e.toLowerCase().slice(2)
          : e.slice(2)),
      t.l || (t.l = {}),
      (t.l[e + i] = n),
      n
        ? r
          ? (n.u = r.u)
          : ((n.u = er), t.addEventListener(e, i ? Vn : Bn, i))
        : t.removeEventListener(e, i ? Vn : Bn, i)
  else {
    if (o == 'http://www.w3.org/2000/svg')
      e = e.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's')
    else if (
      e != 'width' &&
      e != 'height' &&
      e != 'href' &&
      e != 'list' &&
      e != 'form' &&
      e != 'tabIndex' &&
      e != 'download' &&
      e != 'rowSpan' &&
      e != 'colSpan' &&
      e != 'role' &&
      e != 'popover' &&
      e in t
    )
      try {
        t[e] = n ?? ''
        break t
      } catch {}
    typeof n == 'function' ||
      (n == null || (n === !1 && e[4] !== '-')
        ? t.removeAttribute(e)
        : t.setAttribute(e, e == 'popover' && n == 1 ? '' : n))
  }
}
function br(t) {
  return function (e) {
    if (this.l) {
      var n = this.l[e.type + t]
      if (e.t == null) e.t = er++
      else if (e.t < n.u) return
      return n(H.event ? H.event(e) : e)
    }
  }
}
function nr(t, e, n, r, o, i, a, u, f, m) {
  var b,
    l,
    v,
    s,
    S,
    g,
    y,
    _,
    h,
    p,
    d,
    P,
    E,
    C,
    N,
    I,
    x = e.type
  if (e.constructor !== void 0) return null
  128 & n.__u && ((f = !!(32 & n.__u)), (i = [(u = e.__e = n.__e)])),
    (b = H.__b) && b(e)
  t: if (typeof x == 'function')
    try {
      if (
        ((_ = e.props),
        (h = 'prototype' in x && x.prototype.render),
        (p = (b = x.contextType) && r[b.__c]),
        (d = b ? (p ? p.props.value : b.__) : r),
        n.__c
          ? (y = (l = e.__c = n.__c).__ = l.__E)
          : (h
              ? (e.__c = l = new x(_, d))
              : ((e.__c = l = new Ct(_, d)),
                (l.constructor = x),
                (l.render = ji)),
            p && p.sub(l),
            (l.props = _),
            l.state || (l.state = {}),
            (l.context = d),
            (l.__n = r),
            (v = l.__d = !0),
            (l.__h = []),
            (l._sb = [])),
        h && l.__s == null && (l.__s = l.state),
        h &&
          x.getDerivedStateFromProps != null &&
          (l.__s == l.state && (l.__s = Tt({}, l.__s)),
          Tt(l.__s, x.getDerivedStateFromProps(_, l.__s))),
        (s = l.props),
        (S = l.state),
        (l.__v = e),
        v)
      )
        h &&
          x.getDerivedStateFromProps == null &&
          l.componentWillMount != null &&
          l.componentWillMount(),
          h && l.componentDidMount != null && l.__h.push(l.componentDidMount)
      else {
        if (
          (h &&
            x.getDerivedStateFromProps == null &&
            _ !== s &&
            l.componentWillReceiveProps != null &&
            l.componentWillReceiveProps(_, d),
          !l.__e &&
            ((l.shouldComponentUpdate != null &&
              l.shouldComponentUpdate(_, l.__s, d) === !1) ||
              e.__v === n.__v))
        ) {
          for (
            e.__v !== n.__v && ((l.props = _), (l.state = l.__s), (l.__d = !1)),
              e.__e = n.__e,
              e.__k = n.__k,
              e.__k.some(function (k) {
                k && (k.__ = e)
              }),
              P = 0;
            P < l._sb.length;
            P++
          )
            l.__h.push(l._sb[P])
          ;(l._sb = []), l.__h.length && a.push(l)
          break t
        }
        l.componentWillUpdate != null && l.componentWillUpdate(_, l.__s, d),
          h &&
            l.componentDidUpdate != null &&
            l.__h.push(function () {
              l.componentDidUpdate(s, S, g)
            })
      }
      if (
        ((l.context = d),
        (l.props = _),
        (l.__P = t),
        (l.__e = !1),
        (E = H.__r),
        (C = 0),
        h)
      ) {
        for (
          l.state = l.__s,
            l.__d = !1,
            E && E(e),
            b = l.render(l.props, l.state, l.context),
            N = 0;
          N < l._sb.length;
          N++
        )
          l.__h.push(l._sb[N])
        l._sb = []
      } else
        do
          (l.__d = !1),
            E && E(e),
            (b = l.render(l.props, l.state, l.context)),
            (l.state = l.__s)
        while (l.__d && ++C < 25)
      ;(l.state = l.__s),
        l.getChildContext != null && (r = Tt(Tt({}, r), l.getChildContext())),
        h &&
          !v &&
          l.getSnapshotBeforeUpdate != null &&
          (g = l.getSnapshotBeforeUpdate(s, S)),
        Io(
          t,
          _n(
            (I =
              b != null && b.type === Rt && b.key == null
                ? b.props.children
                : b),
          )
            ? I
            : [I],
          e,
          n,
          r,
          o,
          i,
          a,
          u,
          f,
          m,
        ),
        (l.base = e.__e),
        (e.__u &= -161),
        l.__h.length && a.push(l),
        y && (l.__E = l.__ = null)
    } catch (k) {
      if (((e.__v = null), f || i != null)) {
        for (e.__u |= f ? 160 : 128; u && u.nodeType === 8 && u.nextSibling; )
          u = u.nextSibling
        ;(i[i.indexOf(u)] = null), (e.__e = u)
      } else (e.__e = n.__e), (e.__k = n.__k)
      H.__e(k, e, n)
    }
  else
    i == null && e.__v === n.__v
      ? ((e.__k = n.__k), (e.__e = n.__e))
      : (e.__e = Ei(n.__e, e, n, r, o, i, a, f, m))
  ;(b = H.diffed) && b(e)
}
function Do(t, e, n) {
  e.__d = void 0
  for (var r = 0; r < n.length; r++) rr(n[r], n[++r], n[++r])
  H.__c && H.__c(e, t),
    t.some(function (o) {
      try {
        ;(t = o.__h),
          (o.__h = []),
          t.some(function (i) {
            i.call(o)
          })
      } catch (i) {
        H.__e(i, o.__v)
      }
    })
}
function Ei(t, e, n, r, o, i, a, u, f) {
  var m,
    b,
    l,
    v,
    s,
    S,
    g,
    y = n.props,
    _ = e.props,
    h = e.type
  if (
    (h === 'svg'
      ? (o = 'http://www.w3.org/2000/svg')
      : h === 'math'
        ? (o = 'http://www.w3.org/1998/Math/MathML')
        : o || (o = 'http://www.w3.org/1999/xhtml'),
    i != null)
  ) {
    for (m = 0; m < i.length; m++)
      if (
        (s = i[m]) &&
        'setAttribute' in s == !!h &&
        (h ? s.localName === h : s.nodeType === 3)
      ) {
        ;(t = s), (i[m] = null)
        break
      }
  }
  if (t == null) {
    if (h === null) return document.createTextNode(_)
    ;(t = document.createElementNS(o, h, _.is && _)),
      u && (H.__m && H.__m(e, i), (u = !1)),
      (i = null)
  }
  if (h === null) y === _ || (u && t.data === _) || (t.data = _)
  else {
    if (
      ((i = i && We.call(t.childNodes)), (y = n.props || Ue), !u && i != null)
    )
      for (y = {}, m = 0; m < t.attributes.length; m++)
        y[(s = t.attributes[m]).name] = s.value
    for (m in y)
      if (((s = y[m]), m != 'children')) {
        if (m == 'dangerouslySetInnerHTML') l = s
        else if (!(m in _)) {
          if (
            (m == 'value' && 'defaultValue' in _) ||
            (m == 'checked' && 'defaultChecked' in _)
          )
            continue
          en(t, m, null, s, o)
        }
      }
    for (m in _)
      (s = _[m]),
        m == 'children'
          ? (v = s)
          : m == 'dangerouslySetInnerHTML'
            ? (b = s)
            : m == 'value'
              ? (S = s)
              : m == 'checked'
                ? (g = s)
                : (u && typeof s != 'function') ||
                  y[m] === s ||
                  en(t, m, s, y[m], o)
    if (b)
      u ||
        (l && (b.__html === l.__html || b.__html === t.innerHTML)) ||
        (t.innerHTML = b.__html),
        (e.__k = [])
    else if (
      (l && (t.innerHTML = ''),
      Io(
        t,
        _n(v) ? v : [v],
        e,
        n,
        r,
        h === 'foreignObject' ? 'http://www.w3.org/1999/xhtml' : o,
        i,
        a,
        i ? i[0] : n.__k && ue(n, 0),
        u,
        f,
      ),
      i != null)
    )
      for (m = i.length; m--; ) jo(i[m])
    u ||
      ((m = 'value'),
      h === 'progress' && S == null
        ? t.removeAttribute('value')
        : S !== void 0 &&
          (S !== t[m] ||
            (h === 'progress' && !S) ||
            (h === 'option' && S !== y[m])) &&
          en(t, m, S, y[m], o),
      (m = 'checked'),
      g !== void 0 && g !== t[m] && en(t, m, g, y[m], o))
  }
  return t
}
function rr(t, e, n) {
  try {
    if (typeof t == 'function') {
      var r = typeof t.__u == 'function'
      r && t.__u(), (r && e == null) || (t.__u = t(e))
    } else t.current = e
  } catch (o) {
    H.__e(o, n)
  }
}
function Co(t, e, n) {
  var r, o
  if (
    (H.unmount && H.unmount(t),
    (r = t.ref) && ((r.current && r.current !== t.__e) || rr(r, null, e)),
    (r = t.__c) != null)
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount()
      } catch (i) {
        H.__e(i, e)
      }
    r.base = r.__P = null
  }
  if ((r = t.__k))
    for (o = 0; o < r.length; o++)
      r[o] && Co(r[o], e, n || typeof t.type != 'function')
  n || jo(t.__e), (t.__c = t.__ = t.__e = t.__d = void 0)
}
function ji(t, e, n) {
  return this.constructor(t, n)
}
function Fe(t, e, n) {
  var r, o, i, a
  H.__ && H.__(t, e),
    (o = (r = typeof n == 'function') ? null : (n && n.__k) || e.__k),
    (i = []),
    (a = []),
    nr(
      e,
      (t = ((!r && n) || e).__k = Dt(Rt, null, [t])),
      o || Ue,
      Ue,
      e.namespaceURI,
      !r && n ? [n] : o ? null : e.firstChild ? We.call(e.childNodes) : null,
      i,
      !r && n ? n : o ? o.__e : e.firstChild,
      r,
      a,
    ),
    Do(i, t, a)
}
function xo(t, e) {
  Fe(t, e, xo)
}
function Pi(t, e, n) {
  var r,
    o,
    i,
    a,
    u = Tt({}, t.props)
  for (i in (t.type && t.type.defaultProps && (a = t.type.defaultProps), e))
    i == 'key'
      ? (r = e[i])
      : i == 'ref'
        ? (o = e[i])
        : (u[i] = e[i] === void 0 && a !== void 0 ? a[i] : e[i])
  return (
    arguments.length > 2 &&
      (u.children = arguments.length > 3 ? We.call(arguments, 2) : n),
    Ee(t.type, u, r || t.key, o || t.ref, null)
  )
}
;(We = Eo.slice),
  (H = {
    __e: function (t, e, n, r) {
      for (var o, i, a; (e = e.__); )
        if ((o = e.__c) && !o.__)
          try {
            if (
              ((i = o.constructor) &&
                i.getDerivedStateFromError != null &&
                (o.setState(i.getDerivedStateFromError(t)), (a = o.__d)),
              o.componentDidCatch != null &&
                (o.componentDidCatch(t, r || {}), (a = o.__d)),
              a)
            )
              return (o.__E = o)
          } catch (u) {
            t = u
          }
      throw t
    },
  }),
  (So = 0),
  (Ct.prototype.setState = function (t, e) {
    var n
    ;(n =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = Tt({}, this.state))),
      typeof t == 'function' && (t = t(Tt({}, n), this.props)),
      t && Tt(n, t),
      t != null && this.__v && (e && this._sb.push(e), Kn(this))
  }),
  (Ct.prototype.forceUpdate = function (t) {
    this.__v && ((this.__e = !0), t && this.__h.push(t), Kn(this))
  }),
  (Ct.prototype.render = Rt),
  (Gt = []),
  (Oo =
    typeof Promise == 'function'
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (Fn = function (t, e) {
    return t.__v.__b - e.__v.__b
  }),
  (yn.__r = 0),
  (er = 0),
  (Bn = br(!1)),
  (Vn = br(!0)),
  (wo = 0)
var Bt,
  Z,
  Cn,
  Sr,
  le = 0,
  Ao = [],
  Y = H,
  Or = Y.__b,
  wr = Y.__r,
  Er = Y.diffed,
  jr = Y.__c,
  Pr = Y.unmount,
  Ir = Y.__
function se(t, e) {
  Y.__h && Y.__h(Z, t, le || e), (le = 0)
  var n = Z.__H || (Z.__H = { __: [], __h: [] })
  return t >= n.__.length && n.__.push({}), n.__[t]
}
function ze(t) {
  return (le = 1), or(Ho, t)
}
function or(t, e, n) {
  var r = se(Bt++, 2)
  if (
    ((r.t = t),
    !r.__c &&
      ((r.__ = [
        n ? n(e) : Ho(void 0, e),
        function (u) {
          var f = r.__N ? r.__N[0] : r.__[0],
            m = r.t(f, u)
          f !== m && ((r.__N = [m, r.__[1]]), r.__c.setState({}))
        },
      ]),
      (r.__c = Z),
      !Z.u))
  ) {
    var o = function (u, f, m) {
      if (!r.__c.__H) return !0
      var b = r.__c.__H.__.filter(function (v) {
        return !!v.__c
      })
      if (
        b.every(function (v) {
          return !v.__N
        })
      )
        return !i || i.call(this, u, f, m)
      var l = !1
      return (
        b.forEach(function (v) {
          if (v.__N) {
            var s = v.__[0]
            ;(v.__ = v.__N), (v.__N = void 0), s !== v.__[0] && (l = !0)
          }
        }),
        !(!l && r.__c.props === u) && (!i || i.call(this, u, f, m))
      )
    }
    Z.u = !0
    var i = Z.shouldComponentUpdate,
      a = Z.componentWillUpdate
    ;(Z.componentWillUpdate = function (u, f, m) {
      if (this.__e) {
        var b = i
        ;(i = void 0), o(u, f, m), (i = b)
      }
      a && a.call(this, u, f, m)
    }),
      (Z.shouldComponentUpdate = o)
  }
  return r.__N || r.__
}
function Je(t, e) {
  var n = se(Bt++, 3)
  !Y.__s && ir(n.__H, e) && ((n.__ = t), (n.i = e), Z.__H.__h.push(n))
}
function Qe(t, e) {
  var n = se(Bt++, 4)
  !Y.__s && ir(n.__H, e) && ((n.__ = t), (n.i = e), Z.__h.push(n))
}
function No(t) {
  return (
    (le = 5),
    gn(function () {
      return { current: t }
    }, [])
  )
}
function To(t, e, n) {
  ;(le = 6),
    Qe(
      function () {
        return typeof t == 'function'
          ? (t(e()),
            function () {
              return t(null)
            })
          : t
            ? ((t.current = e()),
              function () {
                return (t.current = null)
              })
            : void 0
      },
      n == null ? n : n.concat(t),
    )
}
function gn(t, e) {
  var n = se(Bt++, 7)
  return ir(n.__H, e) && ((n.__ = t()), (n.__H = e), (n.__h = t)), n.__
}
function Ro(t, e) {
  return (
    (le = 8),
    gn(function () {
      return t
    }, e)
  )
}
function Lo(t) {
  var e = Z.context[t.__c],
    n = se(Bt++, 9)
  return (
    (n.c = t),
    e ? (n.__ == null && ((n.__ = !0), e.sub(Z)), e.props.value) : t.__
  )
}
function qo(t, e) {
  Y.useDebugValue && Y.useDebugValue(e ? e(t) : t)
}
function Mo() {
  var t = se(Bt++, 11)
  if (!t.__) {
    for (var e = Z.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__
    var n = e.__m || (e.__m = [0, 0])
    t.__ = 'P' + n[0] + '-' + n[1]++
  }
  return t.__
}
function Ii() {
  for (var t; (t = Ao.shift()); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(pn), t.__H.__h.forEach(Wn), (t.__H.__h = [])
      } catch (e) {
        ;(t.__H.__h = []), Y.__e(e, t.__v)
      }
}
;(Y.__b = function (t) {
  ;(Z = null), Or && Or(t)
}),
  (Y.__ = function (t, e) {
    t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Ir && Ir(t, e)
  }),
  (Y.__r = function (t) {
    wr && wr(t), (Bt = 0)
    var e = (Z = t.__c).__H
    e &&
      (Cn === Z
        ? ((e.__h = []),
          (Z.__h = []),
          e.__.forEach(function (n) {
            n.__N && (n.__ = n.__N), (n.i = n.__N = void 0)
          }))
        : (e.__h.forEach(pn), e.__h.forEach(Wn), (e.__h = []), (Bt = 0))),
      (Cn = Z)
  }),
  (Y.diffed = function (t) {
    Er && Er(t)
    var e = t.__c
    e &&
      e.__H &&
      (e.__H.__h.length &&
        ((Ao.push(e) !== 1 && Sr === Y.requestAnimationFrame) ||
          ((Sr = Y.requestAnimationFrame) || ki)(Ii)),
      e.__H.__.forEach(function (n) {
        n.i && (n.__H = n.i), (n.i = void 0)
      })),
      (Cn = Z = null)
  }),
  (Y.__c = function (t, e) {
    e.some(function (n) {
      try {
        n.__h.forEach(pn),
          (n.__h = n.__h.filter(function (r) {
            return !r.__ || Wn(r)
          }))
      } catch (r) {
        e.some(function (o) {
          o.__h && (o.__h = [])
        }),
          (e = []),
          Y.__e(r, n.__v)
      }
    }),
      jr && jr(t, e)
  }),
  (Y.unmount = function (t) {
    Pr && Pr(t)
    var e,
      n = t.__c
    n &&
      n.__H &&
      (n.__H.__.forEach(function (r) {
        try {
          pn(r)
        } catch (o) {
          e = o
        }
      }),
      (n.__H = void 0),
      e && Y.__e(e, n.__v))
  })
var kr = typeof requestAnimationFrame == 'function'
function ki(t) {
  var e,
    n = function () {
      clearTimeout(r), kr && cancelAnimationFrame(e), setTimeout(t)
    },
    r = setTimeout(n, 100)
  kr && (e = requestAnimationFrame(n))
}
function pn(t) {
  var e = Z,
    n = t.__c
  typeof n == 'function' && ((t.__c = void 0), n()), (Z = e)
}
function Wn(t) {
  var e = Z
  ;(t.__c = t.__()), (Z = e)
}
function ir(t, e) {
  return (
    !t ||
    t.length !== e.length ||
    e.some(function (n, r) {
      return n !== t[r]
    })
  )
}
function Ho(t, e) {
  return typeof e == 'function' ? e(t) : e
}
function zn(t, e) {
  for (var n in t) if (n !== '__source' && !(n in e)) return !0
  for (var r in e) if (r !== '__source' && t[r] !== e[r]) return !0
  return !1
}
function Jn(t, e) {
  ;(this.props = t), (this.context = e)
}
;((Jn.prototype = new Ct()).isPureReactComponent = !0),
  (Jn.prototype.shouldComponentUpdate = function (t, e) {
    return zn(this.props, t) || zn(this.state, e)
  })
var Dr = H.__b
H.__b = function (t) {
  t.type && t.type.__f && t.ref && ((t.props.ref = t.ref), (t.ref = null)),
    Dr && Dr(t)
}
var Di =
    (typeof Symbol < 'u' && Symbol.for && Symbol.for('react.forward_ref')) ||
    3911,
  Cr = function (t, e) {
    return t == null ? null : Lt(Lt(t).map(e))
  },
  Ci = {
    map: Cr,
    forEach: Cr,
    count: function (t) {
      return t ? Lt(t).length : 0
    },
    only: function (t) {
      var e = Lt(t)
      if (e.length !== 1) throw 'Children.only'
      return e[0]
    },
    toArray: Lt,
  },
  xi = H.__e
H.__e = function (t, e, n, r) {
  if (t.then) {
    for (var o, i = e; (i = i.__); )
      if ((o = i.__c) && o.__c)
        return e.__e == null && ((e.__e = n.__e), (e.__k = n.__k)), o.__c(t, e)
  }
  xi(t, e, n, r)
}
var xr = H.unmount
function Uo(t, e, n) {
  return (
    t &&
      (t.__c &&
        t.__c.__H &&
        (t.__c.__H.__.forEach(function (r) {
          typeof r.__c == 'function' && r.__c()
        }),
        (t.__c.__H = null)),
      (t = (function (r, o) {
        for (var i in o) r[i] = o[i]
        return r
      })({}, t)).__c != null &&
        (t.__c.__P === n && (t.__c.__P = e), (t.__c = null)),
      (t.__k =
        t.__k &&
        t.__k.map(function (r) {
          return Uo(r, e, n)
        }))),
    t
  )
}
function Fo(t, e, n) {
  return (
    t &&
      n &&
      ((t.__v = null),
      (t.__k =
        t.__k &&
        t.__k.map(function (r) {
          return Fo(r, e, n)
        })),
      t.__c &&
        t.__c.__P === e &&
        (t.__e && n.appendChild(t.__e), (t.__c.__e = !0), (t.__c.__P = n))),
    t
  )
}
function vn() {
  ;(this.__u = 0), (this.t = null), (this.__b = null)
}
function Bo(t) {
  var e = t.__.__c
  return e && e.__a && e.__a(t)
}
function Oe() {
  ;(this.u = null), (this.o = null)
}
;(H.unmount = function (t) {
  var e = t.__c
  e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), xr && xr(t)
}),
  ((vn.prototype = new Ct()).__c = function (t, e) {
    var n = e.__c,
      r = this
    r.t == null && (r.t = []), r.t.push(n)
    var o = Bo(r.__v),
      i = !1,
      a = function () {
        i || ((i = !0), (n.__R = null), o ? o(u) : u())
      }
    n.__R = a
    var u = function () {
      if (!--r.__u) {
        if (r.state.__a) {
          var f = r.state.__a
          r.__v.__k[0] = Fo(f, f.__c.__P, f.__c.__O)
        }
        var m
        for (r.setState({ __a: (r.__b = null) }); (m = r.t.pop()); )
          m.forceUpdate()
      }
    }
    r.__u++ || 32 & e.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
      t.then(a, a)
  }),
  (vn.prototype.componentWillUnmount = function () {
    this.t = []
  }),
  (vn.prototype.render = function (t, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement('div'),
          r = this.__v.__k[0].__c
        this.__v.__k[0] = Uo(this.__b, n, (r.__O = r.__P))
      }
      this.__b = null
    }
    var o = e.__a && Dt(Rt, null, t.fallback)
    return o && (o.__u &= -33), [Dt(Rt, null, e.__a ? null : t.children), o]
  })
var Ar = function (t, e, n) {
  if (
    (++n[1] === n[0] && t.o.delete(e),
    t.props.revealOrder && (t.props.revealOrder[0] !== 't' || !t.o.size))
  )
    for (n = t.u; n; ) {
      for (; n.length > 3; ) n.pop()()
      if (n[1] < n[0]) break
      t.u = n = n[2]
    }
}
function Ai(t) {
  return (
    (this.getChildContext = function () {
      return t.context
    }),
    t.children
  )
}
function Ni(t) {
  var e = this,
    n = t.i
  ;(e.componentWillUnmount = function () {
    Fe(null, e.l), (e.l = null), (e.i = null)
  }),
    e.i && e.i !== n && e.componentWillUnmount(),
    e.l ||
      ((e.i = n),
      (e.l = {
        nodeType: 1,
        parentNode: n,
        childNodes: [],
        contains: function () {
          return !0
        },
        appendChild: function (r) {
          this.childNodes.push(r), e.i.appendChild(r)
        },
        insertBefore: function (r, o) {
          this.childNodes.push(r), e.i.appendChild(r)
        },
        removeChild: function (r) {
          this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1),
            e.i.removeChild(r)
        },
      })),
    Fe(Dt(Ai, { context: e.context }, t.__v), e.l)
}
function Vo(t, e) {
  var n = Dt(Ni, { __v: t, i: e })
  return (n.containerInfo = e), n
}
;((Oe.prototype = new Ct()).__a = function (t) {
  var e = this,
    n = Bo(e.__v),
    r = e.o.get(t)
  return (
    r[0]++,
    function (o) {
      var i = function () {
        e.props.revealOrder ? (r.push(o), Ar(e, t, r)) : o()
      }
      n ? n(i) : i()
    }
  )
}),
  (Oe.prototype.render = function (t) {
    ;(this.u = null), (this.o = new Map())
    var e = Lt(t.children)
    t.revealOrder && t.revealOrder[0] === 'b' && e.reverse()
    for (var n = e.length; n--; ) this.o.set(e[n], (this.u = [1, 0, this.u]))
    return t.children
  }),
  (Oe.prototype.componentDidUpdate = Oe.prototype.componentDidMount =
    function () {
      var t = this
      this.o.forEach(function (e, n) {
        Ar(t, n, e)
      })
    })
var Ko =
    (typeof Symbol < 'u' && Symbol.for && Symbol.for('react.element')) || 60103,
  Ti =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  Ri = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
  Li = /[A-Z0-9]/g,
  qi = typeof document < 'u',
  Mi = function (t) {
    return (
      typeof Symbol < 'u' && A(Symbol()) == 'symbol'
        ? /fil|che|rad/
        : /fil|che|ra/
    ).test(t)
  }
function Wo(t, e, n) {
  return (
    e.__k == null && (e.textContent = ''),
    Fe(t, e),
    typeof n == 'function' && n(),
    t ? t.__c : null
  )
}
;(Ct.prototype.isReactComponent = {}),
  [
    'componentWillMount',
    'componentWillReceiveProps',
    'componentWillUpdate',
  ].forEach(function (t) {
    Object.defineProperty(Ct.prototype, t, {
      configurable: !0,
      get: function () {
        return this['UNSAFE_' + t]
      },
      set: function (e) {
        Object.defineProperty(this, t, {
          configurable: !0,
          writable: !0,
          value: e,
        })
      },
    })
  })
var Nr = H.event
function Hi() {}
function Ui() {
  return this.cancelBubble
}
function Fi() {
  return this.defaultPrevented
}
H.event = function (t) {
  return (
    Nr && (t = Nr(t)),
    (t.persist = Hi),
    (t.isPropagationStopped = Ui),
    (t.isDefaultPrevented = Fi),
    (t.nativeEvent = t)
  )
}
var ar,
  Bi = {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this.class
    },
  },
  Tr = H.vnode
H.vnode = function (t) {
  typeof t.type == 'string' &&
    (function (e) {
      var n = e.props,
        r = e.type,
        o = {},
        i = r.indexOf('-') === -1
      for (var a in n) {
        var u = n[a]
        if (
          !(
            (a === 'value' && 'defaultValue' in n && u == null) ||
            (qi && a === 'children' && r === 'noscript') ||
            a === 'class' ||
            a === 'className'
          )
        ) {
          var f = a.toLowerCase()
          a === 'defaultValue' && 'value' in n && n.value == null
            ? (a = 'value')
            : a === 'download' && u === !0
              ? (u = '')
              : f === 'translate' && u === 'no'
                ? (u = !1)
                : f[0] === 'o' && f[1] === 'n'
                  ? f === 'ondoubleclick'
                    ? (a = 'ondblclick')
                    : f !== 'onchange' ||
                        (r !== 'input' && r !== 'textarea') ||
                        Mi(n.type)
                      ? f === 'onfocus'
                        ? (a = 'onfocusin')
                        : f === 'onblur'
                          ? (a = 'onfocusout')
                          : Ri.test(a) && (a = f)
                      : (f = a = 'oninput')
                  : i && Ti.test(a)
                    ? (a = a.replace(Li, '-$&').toLowerCase())
                    : u === null && (u = void 0),
            f === 'oninput' && o[(a = f)] && (a = 'oninputCapture'),
            (o[a] = u)
        }
      }
      r == 'select' &&
        o.multiple &&
        Array.isArray(o.value) &&
        (o.value = Lt(n.children).forEach(function (m) {
          m.props.selected = o.value.indexOf(m.props.value) != -1
        })),
        r == 'select' &&
          o.defaultValue != null &&
          (o.value = Lt(n.children).forEach(function (m) {
            m.props.selected = o.multiple
              ? o.defaultValue.indexOf(m.props.value) != -1
              : o.defaultValue == m.props.value
          })),
        n.class && !n.className
          ? ((o.class = n.class), Object.defineProperty(o, 'className', Bi))
          : ((n.className && !n.class) || (n.class && n.className)) &&
            (o.class = o.className = n.className),
        (e.props = o)
    })(t),
    (t.$$typeof = Ko),
    Tr && Tr(t)
}
var Rr = H.__r
H.__r = function (t) {
  Rr && Rr(t), (ar = t.__c)
}
var Lr = H.diffed
H.diffed = function (t) {
  Lr && Lr(t)
  var e = t.props,
    n = t.__e
  n != null &&
    t.type === 'textarea' &&
    'value' in e &&
    e.value !== n.value &&
    (n.value = e.value == null ? '' : e.value),
    (ar = null)
}
var Vi = {
  ReactCurrentDispatcher: {
    current: {
      readContext: function (t) {
        return ar.__n[t.__c].props.value
      },
      useCallback: Ro,
      useContext: Lo,
      useDebugValue: qo,
      useDeferredValue: Jo,
      useEffect: Je,
      useId: Mo,
      useImperativeHandle: To,
      useInsertionEffect: $o,
      useLayoutEffect: Qe,
      useMemo: gn,
      useReducer: or,
      useRef: No,
      useState: ze,
      useSyncExternalStore: Zo,
      useTransition: Qo,
    },
  },
}
function nn(t) {
  return !!t && t.$$typeof === Ko
}
function zo(t) {
  t()
}
function Jo(t) {
  return t
}
function Qo() {
  return [!1, zo]
}
var $o = Qe
function Zo(t, e) {
  var n = e(),
    r = ze({ h: { __: n, v: e } }),
    o = r[0].h,
    i = r[1]
  return (
    Qe(
      function () {
        ;(o.__ = n), (o.v = e), xn(o) && i({ h: o })
      },
      [t, n, e],
    ),
    Je(
      function () {
        return (
          xn(o) && i({ h: o }),
          t(function () {
            xn(o) && i({ h: o })
          })
        )
      },
      [t],
    ),
    n
  )
}
function xn(t) {
  var e,
    n,
    r = t.v,
    o = t.__
  try {
    var i = r()
    return !(
      ((e = o) === (n = i) && (e !== 0 || 1 / e == 1 / n)) ||
      (e != e && n != n)
    )
  } catch {
    return !0
  }
}
var c = {
  useState: ze,
  useId: Mo,
  useReducer: or,
  useEffect: Je,
  useLayoutEffect: Qe,
  useInsertionEffect: $o,
  useTransition: Qo,
  useDeferredValue: Jo,
  useSyncExternalStore: Zo,
  startTransition: zo,
  useRef: No,
  useImperativeHandle: To,
  useMemo: gn,
  useCallback: Ro,
  useContext: Lo,
  useDebugValue: qo,
  version: '18.3.1',
  Children: Ci,
  render: Wo,
  hydrate: function (t, e, n) {
    return xo(t, e), typeof n == 'function' && n(), t ? t.__c : null
  },
  unmountComponentAtNode: function (t) {
    return !!t.__k && (Fe(null, t), !0)
  },
  createPortal: Vo,
  createElement: Dt,
  createContext: function (t, e) {
    var n = {
      __c: (e = '__cC' + wo++),
      __: t,
      Consumer: function (r, o) {
        return r.children(o)
      },
      Provider: function (r) {
        var o, i
        return (
          this.getChildContext ||
            ((o = new Set()),
            ((i = {})[e] = this),
            (this.getChildContext = function () {
              return i
            }),
            (this.componentWillUnmount = function () {
              o = null
            }),
            (this.shouldComponentUpdate = function (a) {
              this.props.value !== a.value &&
                o.forEach(function (u) {
                  ;(u.__e = !0), Kn(u)
                })
            }),
            (this.sub = function (a) {
              o.add(a)
              var u = a.componentWillUnmount
              a.componentWillUnmount = function () {
                o && o.delete(a), u && u.call(a)
              }
            })),
          r.children
        )
      },
    }
    return (n.Provider.__ = n.Consumer.contextType = n)
  },
  createFactory: function (t) {
    return Dt.bind(null, t)
  },
  cloneElement: function (t) {
    return nn(t) ? Pi.apply(null, arguments) : t
  },
  createRef: function () {
    return { current: null }
  },
  Fragment: Rt,
  isValidElement: nn,
  isElement: nn,
  isFragment: function (t) {
    return nn(t) && t.type === Rt
  },
  isMemo: function (t) {
    return (
      !!t &&
      !!t.displayName &&
      (typeof t.displayName == 'string' || t.displayName instanceof String) &&
      t.displayName.startsWith('Memo(')
    )
  },
  findDOMNode: function (t) {
    return (t && (t.base || (t.nodeType === 1 && t))) || null
  },
  Component: Ct,
  PureComponent: Jn,
  memo: function (t, e) {
    function n(o) {
      var i = this.props.ref,
        a = i == o.ref
      return (
        !a && i && (i.call ? i(null) : (i.current = null)),
        e ? !e(this.props, o) || !a : zn(this.props, o)
      )
    }
    function r(o) {
      return (this.shouldComponentUpdate = n), Dt(t, o)
    }
    return (
      (r.displayName = 'Memo(' + (t.displayName || t.name) + ')'),
      (r.prototype.isReactComponent = !0),
      (r.__f = !0),
      r
    )
  },
  forwardRef: function (t) {
    function e(n) {
      if (!('ref' in n)) return t(n, null)
      var r = n.ref
      delete n.ref
      var o = t(n, r)
      return (n.ref = r), o
    }
    return (
      (e.$$typeof = Di),
      (e.render = e),
      (e.prototype.isReactComponent = e.__f = !0),
      (e.displayName = 'ForwardRef(' + (t.displayName || t.name) + ')'),
      e
    )
  },
  flushSync: function (t, e) {
    return t(e)
  },
  unstable_batchedUpdates: function (t, e) {
    return t(e)
  },
  StrictMode: Rt,
  Suspense: vn,
  SuspenseList: Oe,
  lazy: function (t) {
    var e, n, r
    function o(i) {
      if (
        (e ||
          (e = t()).then(
            function (a) {
              n = a.default || a
            },
            function (a) {
              r = a
            },
          ),
        r)
      )
        throw r
      if (!n) throw e
      return Dt(n, i)
    }
    return (o.displayName = 'Lazy'), (o.__f = !0), o
  },
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Vi,
}
function Qn(t, e) {
  ;(e == null || e > t.length) && (e = t.length)
  for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n]
  return r
}
function qr(t, e, n, r, o, i, a) {
  try {
    var u = t[i](a),
      f = u.value
  } catch (m) {
    return void n(m)
  }
  u.done ? e(f) : Promise.resolve(f).then(r, o)
}
function An(t) {
  return function () {
    var e = this,
      n = arguments
    return new Promise(function (r, o) {
      var i = t.apply(e, n)
      function a(f) {
        qr(i, r, o, a, u, 'next', f)
      }
      function u(f) {
        qr(i, r, o, a, u, 'throw', f)
      }
      a(void 0)
    })
  }
}
function fe(t, e, n) {
  return (
    (e = Be(e)),
    (function (r, o) {
      if (o && (A(o) == 'object' || typeof o == 'function')) return o
      if (o !== void 0)
        throw new TypeError(
          'Derived constructors may only return object or undefined',
        )
      return (function (i) {
        if (i === void 0)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          )
        return i
      })(r)
    })(
      t,
      cr() ? Reflect.construct(e, n || [], Be(t).constructor) : e.apply(t, n),
    )
  )
}
function me(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function pe(t, e, n) {
  return Object.defineProperty(t, 'prototype', { writable: !1 }), t
}
function ve(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i) {
        if (A(i) != 'object' || !i) return i
        var a = i[Symbol.toPrimitive]
        if (a !== void 0) {
          var u = a.call(i, 'string')
          if (A(u) != 'object') return u
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return String(i)
      })(r)
      return A(o) == 'symbol' ? o : o + ''
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  )
}
function lt() {
  return (
    (lt = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e]
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
          }
          return t
        }),
    lt.apply(null, arguments)
  )
}
function Be(t) {
  return (
    (Be = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }),
    Be(t)
  )
}
function he(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError('Super expression must either be null or a function')
  ;(t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && Ve(t, e)
}
function cr() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    )
  } catch {}
  return (cr = function () {
    return !!t
  })()
}
function Mr(t, e) {
  var n = Object.keys(t)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t)
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function B(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? Mr(Object(n), !0).forEach(function (r) {
          ve(t, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Mr(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return t
}
function xt(t, e) {
  if (t == null) return {}
  var n,
    r,
    o = (function (a, u) {
      if (a == null) return {}
      var f = {}
      for (var m in a)
        if ({}.hasOwnProperty.call(a, m)) {
          if (u.includes(m)) continue
          f[m] = a[m]
        }
      return f
    })(t, e)
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t)
    for (r = 0; r < i.length; r++)
      (n = i[r]),
        e.includes(n) || ({}.propertyIsEnumerable.call(t, n) && (o[n] = t[n]))
  }
  return o
}
function Zt() {
  Zt = function () {
    return e
  }
  var t,
    e = {},
    n = Object.prototype,
    r = n.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (O, w, j) {
        O[w] = j.value
      },
    i = typeof Symbol == 'function' ? Symbol : {},
    a = i.iterator || '@@iterator',
    u = i.asyncIterator || '@@asyncIterator',
    f = i.toStringTag || '@@toStringTag'
  function m(O, w, j) {
    return (
      Object.defineProperty(O, w, {
        value: j,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      O[w]
    )
  }
  try {
    m({}, '')
  } catch {
    m = function (w, j, R) {
      return (w[j] = R)
    }
  }
  function b(O, w, j, R) {
    var D = w && w.prototype instanceof _ ? w : _,
      L = Object.create(D.prototype),
      W = new q(R || [])
    return o(L, '_invoke', { value: x(O, j, W) }), L
  }
  function l(O, w, j) {
    try {
      return { type: 'normal', arg: O.call(w, j) }
    } catch (R) {
      return { type: 'throw', arg: R }
    }
  }
  e.wrap = b
  var v = 'suspendedStart',
    s = 'suspendedYield',
    S = 'executing',
    g = 'completed',
    y = {}
  function _() {}
  function h() {}
  function p() {}
  var d = {}
  m(d, a, function () {
    return this
  })
  var P = Object.getPrototypeOf,
    E = P && P(P(ot([])))
  E && E !== n && r.call(E, a) && (d = E)
  var C = (p.prototype = _.prototype = Object.create(d))
  function N(O) {
    ;['next', 'throw', 'return'].forEach(function (w) {
      m(O, w, function (j) {
        return this._invoke(w, j)
      })
    })
  }
  function I(O, w) {
    function j(D, L, W, K) {
      var J = l(O[D], O, L)
      if (J.type !== 'throw') {
        var G = J.arg,
          st = G.value
        return st && A(st) == 'object' && r.call(st, '__await')
          ? w.resolve(st.__await).then(
              function (tt) {
                j('next', tt, W, K)
              },
              function (tt) {
                j('throw', tt, W, K)
              },
            )
          : w.resolve(st).then(
              function (tt) {
                ;(G.value = tt), W(G)
              },
              function (tt) {
                return j('throw', tt, W, K)
              },
            )
      }
      K(J.arg)
    }
    var R
    o(this, '_invoke', {
      value: function (D, L) {
        function W() {
          return new w(function (K, J) {
            j(D, L, K, J)
          })
        }
        return (R = R ? R.then(W, W) : W())
      },
    })
  }
  function x(O, w, j) {
    var R = v
    return function (D, L) {
      if (R === S) throw Error('Generator is already running')
      if (R === g) {
        if (D === 'throw') throw L
        return { value: t, done: !0 }
      }
      for (j.method = D, j.arg = L; ; ) {
        var W = j.delegate
        if (W) {
          var K = k(W, j)
          if (K) {
            if (K === y) continue
            return K
          }
        }
        if (j.method === 'next') j.sent = j._sent = j.arg
        else if (j.method === 'throw') {
          if (R === v) throw ((R = g), j.arg)
          j.dispatchException(j.arg)
        } else j.method === 'return' && j.abrupt('return', j.arg)
        R = S
        var J = l(O, w, j)
        if (J.type === 'normal') {
          if (((R = j.done ? g : s), J.arg === y)) continue
          return { value: J.arg, done: j.done }
        }
        J.type === 'throw' && ((R = g), (j.method = 'throw'), (j.arg = J.arg))
      }
    }
  }
  function k(O, w) {
    var j = w.method,
      R = O.iterator[j]
    if (R === t)
      return (
        (w.delegate = null),
        (j === 'throw' &&
          O.iterator.return &&
          ((w.method = 'return'),
          (w.arg = t),
          k(O, w),
          w.method === 'throw')) ||
          (j !== 'return' &&
            ((w.method = 'throw'),
            (w.arg = new TypeError(
              "The iterator does not provide a '" + j + "' method",
            )))),
        y
      )
    var D = l(R, O.iterator, w.arg)
    if (D.type === 'throw')
      return (w.method = 'throw'), (w.arg = D.arg), (w.delegate = null), y
    var L = D.arg
    return L
      ? L.done
        ? ((w[O.resultName] = L.value),
          (w.next = O.nextLoc),
          w.method !== 'return' && ((w.method = 'next'), (w.arg = t)),
          (w.delegate = null),
          y)
        : L
      : ((w.method = 'throw'),
        (w.arg = new TypeError('iterator result is not an object')),
        (w.delegate = null),
        y)
  }
  function U(O) {
    var w = { tryLoc: O[0] }
    1 in O && (w.catchLoc = O[1]),
      2 in O && ((w.finallyLoc = O[2]), (w.afterLoc = O[3])),
      this.tryEntries.push(w)
  }
  function z(O) {
    var w = O.completion || {}
    ;(w.type = 'normal'), delete w.arg, (O.completion = w)
  }
  function q(O) {
    ;(this.tryEntries = [{ tryLoc: 'root' }]),
      O.forEach(U, this),
      this.reset(!0)
  }
  function ot(O) {
    if (O || O === '') {
      var w = O[a]
      if (w) return w.call(O)
      if (typeof O.next == 'function') return O
      if (!isNaN(O.length)) {
        var j = -1,
          R = function D() {
            for (; ++j < O.length; )
              if (r.call(O, j)) return (D.value = O[j]), (D.done = !1), D
            return (D.value = t), (D.done = !0), D
          }
        return (R.next = R)
      }
    }
    throw new TypeError(A(O) + ' is not iterable')
  }
  return (
    (h.prototype = p),
    o(C, 'constructor', { value: p, configurable: !0 }),
    o(p, 'constructor', { value: h, configurable: !0 }),
    (h.displayName = m(p, f, 'GeneratorFunction')),
    (e.isGeneratorFunction = function (O) {
      var w = typeof O == 'function' && O.constructor
      return (
        !!w && (w === h || (w.displayName || w.name) === 'GeneratorFunction')
      )
    }),
    (e.mark = function (O) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(O, p)
          : ((O.__proto__ = p), m(O, f, 'GeneratorFunction')),
        (O.prototype = Object.create(C)),
        O
      )
    }),
    (e.awrap = function (O) {
      return { __await: O }
    }),
    N(I.prototype),
    m(I.prototype, u, function () {
      return this
    }),
    (e.AsyncIterator = I),
    (e.async = function (O, w, j, R, D) {
      D === void 0 && (D = Promise)
      var L = new I(b(O, w, j, R), D)
      return e.isGeneratorFunction(w)
        ? L
        : L.next().then(function (W) {
            return W.done ? W.value : L.next()
          })
    }),
    N(C),
    m(C, f, 'Generator'),
    m(C, a, function () {
      return this
    }),
    m(C, 'toString', function () {
      return '[object Generator]'
    }),
    (e.keys = function (O) {
      var w = Object(O),
        j = []
      for (var R in w) j.push(R)
      return (
        j.reverse(),
        function D() {
          for (; j.length; ) {
            var L = j.pop()
            if (L in w) return (D.value = L), (D.done = !1), D
          }
          return (D.done = !0), D
        }
      )
    }),
    (e.values = ot),
    (q.prototype = {
      constructor: q,
      reset: function (O) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = t),
          this.tryEntries.forEach(z),
          !O)
        )
          for (var w in this)
            w.charAt(0) === 't' &&
              r.call(this, w) &&
              !isNaN(+w.slice(1)) &&
              (this[w] = t)
      },
      stop: function () {
        this.done = !0
        var O = this.tryEntries[0].completion
        if (O.type === 'throw') throw O.arg
        return this.rval
      },
      dispatchException: function (O) {
        if (this.done) throw O
        var w = this
        function j(J, G) {
          return (
            (L.type = 'throw'),
            (L.arg = O),
            (w.next = J),
            G && ((w.method = 'next'), (w.arg = t)),
            !!G
          )
        }
        for (var R = this.tryEntries.length - 1; R >= 0; --R) {
          var D = this.tryEntries[R],
            L = D.completion
          if (D.tryLoc === 'root') return j('end')
          if (D.tryLoc <= this.prev) {
            var W = r.call(D, 'catchLoc'),
              K = r.call(D, 'finallyLoc')
            if (W && K) {
              if (this.prev < D.catchLoc) return j(D.catchLoc, !0)
              if (this.prev < D.finallyLoc) return j(D.finallyLoc)
            } else if (W) {
              if (this.prev < D.catchLoc) return j(D.catchLoc, !0)
            } else {
              if (!K) throw Error('try statement without catch or finally')
              if (this.prev < D.finallyLoc) return j(D.finallyLoc)
            }
          }
        }
      },
      abrupt: function (O, w) {
        for (var j = this.tryEntries.length - 1; j >= 0; --j) {
          var R = this.tryEntries[j]
          if (
            R.tryLoc <= this.prev &&
            r.call(R, 'finallyLoc') &&
            this.prev < R.finallyLoc
          ) {
            var D = R
            break
          }
        }
        D &&
          (O === 'break' || O === 'continue') &&
          D.tryLoc <= w &&
          w <= D.finallyLoc &&
          (D = null)
        var L = D ? D.completion : {}
        return (
          (L.type = O),
          (L.arg = w),
          D
            ? ((this.method = 'next'), (this.next = D.finallyLoc), y)
            : this.complete(L)
        )
      },
      complete: function (O, w) {
        if (O.type === 'throw') throw O.arg
        return (
          O.type === 'break' || O.type === 'continue'
            ? (this.next = O.arg)
            : O.type === 'return'
              ? ((this.rval = this.arg = O.arg),
                (this.method = 'return'),
                (this.next = 'end'))
              : O.type === 'normal' && w && (this.next = w),
          y
        )
      },
      finish: function (O) {
        for (var w = this.tryEntries.length - 1; w >= 0; --w) {
          var j = this.tryEntries[w]
          if (j.finallyLoc === O)
            return this.complete(j.completion, j.afterLoc), z(j), y
        }
      },
      catch: function (O) {
        for (var w = this.tryEntries.length - 1; w >= 0; --w) {
          var j = this.tryEntries[w]
          if (j.tryLoc === O) {
            var R = j.completion
            if (R.type === 'throw') {
              var D = R.arg
              z(j)
            }
            return D
          }
        }
        throw Error('illegal catch attempt')
      },
      delegateYield: function (O, w, j) {
        return (
          (this.delegate = { iterator: ot(O), resultName: w, nextLoc: j }),
          this.method === 'next' && (this.arg = t),
          y
        )
      },
    }),
    e
  )
}
function Ve(t, e) {
  return (
    (Ve = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n
        }),
    Ve(t, e)
  )
}
function ht(t, e) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n
    })(t) ||
    (function (n, r) {
      var o =
        n == null
          ? null
          : (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator']
      if (o != null) {
        var i,
          a,
          u,
          f,
          m = [],
          b = !0,
          l = !1
        try {
          if (((u = (o = o.call(n)).next), r === 0)) {
            if (Object(o) !== o) return
            b = !1
          } else
            for (
              ;
              !(b = (i = u.call(o)).done) && (m.push(i.value), m.length !== r);
              b = !0
            );
        } catch (v) {
          ;(l = !0), (a = v)
        } finally {
          try {
            if (!b && o.return != null && ((f = o.return()), Object(f) !== f))
              return
          } finally {
            if (l) throw a
          }
        }
        return m
      }
    })(t, e) ||
    Go(t, e) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    })()
  )
}
function je(t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return Qn(e)
    })(t) ||
    (function (e) {
      if (
        (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
        e['@@iterator'] != null
      )
        return Array.from(e)
    })(t) ||
    Go(t) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    })()
  )
}
function Go(t, e) {
  if (t) {
    if (typeof t == 'string') return Qn(t, e)
    var n = {}.toString.call(t).slice(8, -1)
    return (
      n === 'Object' && t.constructor && (n = t.constructor.name),
      n === 'Map' || n === 'Set'
        ? Array.from(t)
        : n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Qn(t, e)
          : void 0
    )
  }
}
function $n(t) {
  var e = typeof Map == 'function' ? new Map() : void 0
  return (
    ($n = function (n) {
      if (
        n === null ||
        !(function (o) {
          try {
            return Function.toString.call(o).indexOf('[native code]') !== -1
          } catch {
            return typeof o == 'function'
          }
        })(n)
      )
        return n
      if (typeof n != 'function')
        throw new TypeError(
          'Super expression must either be null or a function',
        )
      if (e !== void 0) {
        if (e.has(n)) return e.get(n)
        e.set(n, r)
      }
      function r() {
        return (function (o, i, a) {
          if (cr()) return Reflect.construct.apply(null, arguments)
          var u = [null]
          u.push.apply(u, i)
          var f = new (o.bind.apply(o, u))()
          return a && Ve(f, a.prototype), f
        })(n, arguments, Be(this).constructor)
      }
      return (
        (r.prototype = Object.create(n.prototype, {
          constructor: {
            value: r,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Ve(r, n)
      )
    }),
    $n(t)
  )
}
function Ki() {
  return c.createElement(
    'svg',
    { width: '15', height: '15', className: 'DocSearch-Control-Key-Icon' },
    c.createElement('path', {
      d: 'M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953',
      strokeWidth: '1.2',
      stroke: 'currentColor',
      fill: 'none',
      strokeLinecap: 'square',
    }),
  )
}
function Yo() {
  return c.createElement(
    'svg',
    {
      width: '20',
      height: '20',
      className: 'DocSearch-Search-Icon',
      viewBox: '0 0 20 20',
      'aria-hidden': 'true',
    },
    c.createElement('path', {
      d: 'M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
  )
}
var Wi = ['translations'],
  Nn = 'Ctrl',
  zi = c.forwardRef(function (t, e) {
    var n = t.translations,
      r = n === void 0 ? {} : n,
      o = xt(t, Wi),
      i = r.buttonText,
      a = i === void 0 ? 'Search' : i,
      u = r.buttonAriaLabel,
      f = u === void 0 ? 'Search' : u,
      m = ht(ze(null), 2),
      b = m[0],
      l = m[1]
    Je(function () {
      typeof navigator < 'u' &&
        (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? l('⌘') : l(Nn))
    }, [])
    var v = ht(
        b === Nn
          ? [Nn, 'Ctrl', c.createElement(Ki, null)]
          : ['Meta', 'Command', b],
        3,
      ),
      s = v[0],
      S = v[1],
      g = v[2]
    return c.createElement(
      'button',
      lt(
        {
          type: 'button',
          className: 'DocSearch DocSearch-Button',
          'aria-label': ''.concat(f, ' (').concat(S, '+K)'),
        },
        o,
        { ref: e },
      ),
      c.createElement(
        'span',
        { className: 'DocSearch-Button-Container' },
        c.createElement(Yo, null),
        c.createElement(
          'span',
          { className: 'DocSearch-Button-Placeholder' },
          a,
        ),
      ),
      c.createElement(
        'span',
        { className: 'DocSearch-Button-Keys' },
        b !== null &&
          c.createElement(
            c.Fragment,
            null,
            c.createElement(Hr, { reactsToKey: s }, g),
            c.createElement(Hr, { reactsToKey: 'k' }, 'K'),
          ),
      ),
    )
  })
function Hr(t) {
  var e = t.reactsToKey,
    n = t.children,
    r = ht(ze(!1), 2),
    o = r[0],
    i = r[1]
  return (
    Je(
      function () {
        if (e)
          return (
            window.addEventListener('keydown', a),
            window.addEventListener('keyup', u),
            function () {
              window.removeEventListener('keydown', a),
                window.removeEventListener('keyup', u)
            }
          )
        function a(f) {
          f.key === e && i(!0)
        }
        function u(f) {
          ;(f.key !== e && f.key !== 'Meta') || i(!1)
        }
      },
      [e],
    ),
    c.createElement(
      'kbd',
      {
        className: o
          ? 'DocSearch-Button-Key DocSearch-Button-Key--pressed'
          : 'DocSearch-Button-Key',
      },
      n,
    )
  )
}
function Xo(t, e) {
  var n = void 0
  return function () {
    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i]
    n && clearTimeout(n),
      (n = setTimeout(function () {
        return t.apply(void 0, o)
      }, e))
  }
}
function Ke(t) {
  return t.reduce(function (e, n) {
    return e.concat(n)
  }, [])
}
var Ji = 0
function Zn(t) {
  return t.collections.length === 0
    ? 0
    : t.collections.reduce(function (e, n) {
        return e + n.items.length
      }, 0)
}
function Ur(t) {
  return t !== Object(t)
}
function ti(t, e) {
  if (t === e) return !0
  if (Ur(t) || Ur(e) || typeof t == 'function' || typeof e == 'function')
    return t === e
  if (Object.keys(t).length !== Object.keys(e).length) return !1
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var o = r[n]
    if (!(o in e) || !ti(t[o], e[o])) return !1
  }
  return !0
}
var hn = function () {},
  Qi = [{ segment: 'autocomplete-core', version: '1.17.7' }]
function Fr(t) {
  var e = t.item,
    n = t.items,
    r = n === void 0 ? [] : n
  return {
    index: e.__autocomplete_indexName,
    items: [e],
    positions: [
      1 +
        r.findIndex(function (o) {
          return o.objectID === e.objectID
        }),
    ],
    queryID: e.__autocomplete_queryID,
    algoliaSource: ['autocomplete'],
  }
}
function Br(t, e) {
  ;(e == null || e > t.length) && (e = t.length)
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
  return r
}
var $i = ['items'],
  Zi = ['items']
function Pe(t) {
  return (
    (Pe =
      typeof Symbol == 'function' && A(Symbol.iterator) == 'symbol'
        ? function (e) {
            return A(e)
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : A(e)
          }),
    Pe(t)
  )
}
function rn(t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return Tn(e)
    })(t) ||
    (function (e) {
      if (
        (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
        e['@@iterator'] != null
      )
        return Array.from(e)
    })(t) ||
    (function (e, n) {
      if (e) {
        if (typeof e == 'string') return Tn(e, n)
        var r = Object.prototype.toString.call(e).slice(8, -1)
        return (
          r === 'Object' && e.constructor && (r = e.constructor.name),
          r === 'Map' || r === 'Set'
            ? Array.from(e)
            : r === 'Arguments' ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? Tn(e, n)
              : void 0
        )
      }
    })(t) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    })()
  )
}
function Tn(t, e) {
  ;(e == null || e > t.length) && (e = t.length)
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
  return r
}
function ei(t, e) {
  if (t == null) return {}
  var n,
    r,
    o = (function (a, u) {
      if (a == null) return {}
      var f,
        m,
        b = {},
        l = Object.keys(a)
      for (m = 0; m < l.length; m++)
        (f = l[m]), u.indexOf(f) >= 0 || (b[f] = a[f])
      return b
    })(t, e)
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t)
    for (r = 0; r < i.length; r++)
      (n = i[r]),
        e.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]))
  }
  return o
}
function Vr(t, e) {
  var n = Object.keys(t)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t)
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function ae(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? Vr(Object(n), !0).forEach(function (r) {
          Gi(t, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Vr(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return t
}
function Gi(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i) {
        if (Pe(i) !== 'object' || i === null) return i
        var a = i[Symbol.toPrimitive]
        if (a !== void 0) {
          var u = a.call(i, 'string')
          if (Pe(u) !== 'object') return u
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return String(i)
      })(r)
      return Pe(o) === 'symbol' ? o : String(o)
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  )
}
function on(t) {
  return t.map(function (e) {
    var n = e.items,
      r = ei(e, $i)
    return ae(
      ae({}, r),
      {},
      {
        objectIDs:
          (n == null
            ? void 0
            : n.map(function (o) {
                return o.objectID
              })) || r.objectIDs,
      },
    )
  })
}
function Yi(t) {
  var e = t.items.reduce(function (n, r) {
    var o
    return (
      (n[r.__autocomplete_indexName] = (
        (o = n[r.__autocomplete_indexName]) !== null && o !== void 0 ? o : []
      ).concat(r)),
      n
    )
  }, {})
  return Object.keys(e).map(function (n) {
    return { index: n, items: e[n], algoliaSource: ['autocomplete'] }
  })
}
function be(t) {
  return t.objectID && t.__autocomplete_indexName && t.__autocomplete_queryID
}
function Ie(t) {
  return (
    (Ie =
      typeof Symbol == 'function' && A(Symbol.iterator) == 'symbol'
        ? function (e) {
            return A(e)
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : A(e)
          }),
    Ie(t)
  )
}
function ce(t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return Rn(e)
    })(t) ||
    (function (e) {
      if (
        (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
        e['@@iterator'] != null
      )
        return Array.from(e)
    })(t) ||
    (function (e, n) {
      if (e) {
        if (typeof e == 'string') return Rn(e, n)
        var r = Object.prototype.toString.call(e).slice(8, -1)
        return (
          r === 'Object' && e.constructor && (r = e.constructor.name),
          r === 'Map' || r === 'Set'
            ? Array.from(e)
            : r === 'Arguments' ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? Rn(e, n)
              : void 0
        )
      }
    })(t) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    })()
  )
}
function Rn(t, e) {
  ;(e == null || e > t.length) && (e = t.length)
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
  return r
}
function Kr(t, e) {
  var n = Object.keys(t)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t)
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function wt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? Kr(Object(n), !0).forEach(function (r) {
          Xi(t, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Kr(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return t
}
function Xi(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i) {
        if (Ie(i) !== 'object' || i === null) return i
        var a = i[Symbol.toPrimitive]
        if (a !== void 0) {
          var u = a.call(i, 'string')
          if (Ie(u) !== 'object') return u
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return String(i)
      })(r)
      return Ie(o) === 'symbol' ? o : String(o)
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  )
}
var ni = '2.15.0',
  ta = 'https://cdn.jsdelivr.net/npm/search-insights@'.concat(
    ni,
    '/dist/search-insights.min.js',
  ),
  ea = Xo(function (t) {
    var e = t.onItemsChange,
      n = t.items,
      r = t.insights,
      o = t.state
    e({
      insights: r,
      insightsEvents: Yi({ items: n }).map(function (i) {
        return wt({ eventName: 'Items Viewed' }, i)
      }),
      state: o,
    })
  }, 400)
function Wr(t) {
  var e = (function (v) {
      return wt(
        {
          onItemsChange: function (s) {
            var S = s.insights,
              g = s.insightsEvents,
              y = s.state
            S.viewedObjectIDs.apply(
              S,
              ce(
                g.map(function (_) {
                  return wt(
                    wt({}, _),
                    {},
                    { algoliaSource: zr(_.algoliaSource, y.context) },
                  )
                }),
              ),
            )
          },
          onSelect: function (s) {
            var S = s.insights,
              g = s.insightsEvents,
              y = s.state
            S.clickedObjectIDsAfterSearch.apply(
              S,
              ce(
                g.map(function (_) {
                  return wt(
                    wt({}, _),
                    {},
                    { algoliaSource: zr(_.algoliaSource, y.context) },
                  )
                }),
              ),
            )
          },
          onActive: hn,
          __autocomplete_clickAnalytics: !0,
        },
        v,
      )
    })(t),
    n = e.insightsClient,
    r = e.insightsInitParams,
    o = e.onItemsChange,
    i = e.onSelect,
    a = e.onActive,
    u = e.__autocomplete_clickAnalytics,
    f = n
  if (
    (n ||
      (typeof window < 'u' &&
        (function () {
          var v = window,
            s = v.AlgoliaAnalyticsObject || 'aa'
          typeof s == 'string' && (f = v[s]),
            f ||
              ((v.AlgoliaAnalyticsObject = s),
              v[s] ||
                (v[s] = function () {
                  v[s].queue || (v[s].queue = [])
                  for (
                    var S = arguments.length, g = new Array(S), y = 0;
                    y < S;
                    y++
                  )
                    g[y] = arguments[y]
                  v[s].queue.push(g)
                }),
              (v[s].version = ni),
              (f = v[s]),
              (function (S) {
                var g =
                  '[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete'
                try {
                  var y = S.document.createElement('script')
                  ;(y.async = !0),
                    (y.src = ta),
                    (y.onerror = function () {
                      console.error(g)
                    }),
                    document.body.appendChild(y)
                } catch {
                  console.error(g)
                }
              })(v))
        })()),
    !f)
  )
    return {}
  r && f('init', wt({ partial: !0 }, r))
  var m = (function (v) {
      var s,
        S,
        g,
        y =
          ((s = (function (h) {
            return (
              (function (p) {
                if (Array.isArray(p)) return p
              })(h) ||
              (function (p) {
                var d =
                  p == null
                    ? null
                    : (typeof Symbol < 'u' && p[Symbol.iterator]) ||
                      p['@@iterator']
                if (d != null) {
                  var P,
                    E,
                    C,
                    N,
                    I = [],
                    x = !0,
                    k = !1
                  try {
                    for (
                      C = (d = d.call(p)).next;
                      !(x = (P = C.call(d)).done) &&
                      (I.push(P.value), I.length !== 2);
                      x = !0
                    );
                  } catch (U) {
                    ;(k = !0), (E = U)
                  } finally {
                    try {
                      if (
                        !x &&
                        d.return != null &&
                        ((N = d.return()), Object(N) !== N)
                      )
                        return
                    } finally {
                      if (k) throw E
                    }
                  }
                  return I
                }
              })(h) ||
              (function (p) {
                if (p) {
                  if (typeof p == 'string') return Br(p, 2)
                  var d = Object.prototype.toString.call(p).slice(8, -1)
                  return (
                    d === 'Object' && p.constructor && (d = p.constructor.name),
                    d === 'Map' || d === 'Set'
                      ? Array.from(p)
                      : d === 'Arguments' ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)
                        ? Br(p, 2)
                        : void 0
                  )
                }
              })(h) ||
              (function () {
                throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
              })()
            )
          })((v.version || '').split('.').map(Number))),
          (S = s[0]),
          (g = s[1]),
          S >= 3 || (S === 2 && g >= 4) || (S === 1 && g >= 10))
      function _(h, p, d) {
        if (y && d !== void 0) {
          var P = d[0].__autocomplete_algoliaCredentials,
            E = {
              'X-Algolia-Application-Id': P.appId,
              'X-Algolia-API-Key': P.apiKey,
            }
          v.apply(void 0, [h].concat(rn(p), [{ headers: E }]))
        } else v.apply(void 0, [h].concat(rn(p)))
      }
      return {
        init: function (h, p) {
          v('init', { appId: h, apiKey: p })
        },
        setAuthenticatedUserToken: function (h) {
          v('setAuthenticatedUserToken', h)
        },
        setUserToken: function (h) {
          v('setUserToken', h)
        },
        clickedObjectIDsAfterSearch: function () {
          for (var h = arguments.length, p = new Array(h), d = 0; d < h; d++)
            p[d] = arguments[d]
          p.length > 0 && _('clickedObjectIDsAfterSearch', on(p), p[0].items)
        },
        clickedObjectIDs: function () {
          for (var h = arguments.length, p = new Array(h), d = 0; d < h; d++)
            p[d] = arguments[d]
          p.length > 0 && _('clickedObjectIDs', on(p), p[0].items)
        },
        clickedFilters: function () {
          for (var h = arguments.length, p = new Array(h), d = 0; d < h; d++)
            p[d] = arguments[d]
          p.length > 0 && v.apply(void 0, ['clickedFilters'].concat(p))
        },
        convertedObjectIDsAfterSearch: function () {
          for (var h = arguments.length, p = new Array(h), d = 0; d < h; d++)
            p[d] = arguments[d]
          p.length > 0 && _('convertedObjectIDsAfterSearch', on(p), p[0].items)
        },
        convertedObjectIDs: function () {
          for (var h = arguments.length, p = new Array(h), d = 0; d < h; d++)
            p[d] = arguments[d]
          p.length > 0 && _('convertedObjectIDs', on(p), p[0].items)
        },
        convertedFilters: function () {
          for (var h = arguments.length, p = new Array(h), d = 0; d < h; d++)
            p[d] = arguments[d]
          p.length > 0 && v.apply(void 0, ['convertedFilters'].concat(p))
        },
        viewedObjectIDs: function () {
          for (var h = arguments.length, p = new Array(h), d = 0; d < h; d++)
            p[d] = arguments[d]
          p.length > 0 &&
            p
              .reduce(function (P, E) {
                var C = E.items,
                  N = ei(E, Zi)
                return [].concat(
                  rn(P),
                  rn(
                    (function (I) {
                      for (
                        var x =
                            arguments.length > 1 && arguments[1] !== void 0
                              ? arguments[1]
                              : 20,
                          k = [],
                          U = 0;
                        U < I.objectIDs.length;
                        U += x
                      )
                        k.push(
                          ae(
                            ae({}, I),
                            {},
                            { objectIDs: I.objectIDs.slice(U, U + x) },
                          ),
                        )
                      return k
                    })(
                      ae(
                        ae({}, N),
                        {},
                        {
                          objectIDs:
                            (C == null
                              ? void 0
                              : C.map(function (I) {
                                  return I.objectID
                                })) || N.objectIDs,
                        },
                      ),
                    ).map(function (I) {
                      return { items: C, payload: I }
                    }),
                  ),
                )
              }, [])
              .forEach(function (P) {
                var E = P.items
                return _('viewedObjectIDs', [P.payload], E)
              })
        },
        viewedFilters: function () {
          for (var h = arguments.length, p = new Array(h), d = 0; d < h; d++)
            p[d] = arguments[d]
          p.length > 0 && v.apply(void 0, ['viewedFilters'].concat(p))
        },
      }
    })(f),
    b = { current: [] },
    l = Xo(function (v) {
      var s = v.state
      if (s.isOpen) {
        var S = s.collections
          .reduce(function (g, y) {
            return [].concat(ce(g), ce(y.items))
          }, [])
          .filter(be)
        ti(
          b.current.map(function (g) {
            return g.objectID
          }),
          S.map(function (g) {
            return g.objectID
          }),
        ) ||
          ((b.current = S),
          S.length > 0 &&
            ea({ onItemsChange: o, items: S, insights: m, state: s }))
      }
    }, 0)
  return {
    name: 'aa.algoliaInsightsPlugin',
    subscribe: function (v) {
      var s = v.setContext,
        S = v.onSelect,
        g = v.onActive,
        y = !1
      function _(h) {
        s({
          algoliaInsightsPlugin: {
            __algoliaSearchParameters: wt(
              wt({}, u ? { clickAnalytics: !0 } : {}),
              h ? { userToken: na(h) } : {},
            ),
            insights: m,
          },
        })
      }
      f('addAlgoliaAgent', 'insights-plugin'),
        _(),
        f('onUserTokenChange', function (h) {
          y || _(h)
        }),
        f('getUserToken', null, function (h, p) {
          y || _(p)
        }),
        f('onAuthenticatedUserTokenChange', function (h) {
          h
            ? ((y = !0), _(h))
            : ((y = !1),
              f('getUserToken', null, function (p, d) {
                return _(d)
              }))
        }),
        f('getAuthenticatedUserToken', null, function (h, p) {
          p && ((y = !0), _(p))
        }),
        S(function (h) {
          var p = h.item,
            d = h.state,
            P = h.event,
            E = h.source
          be(p) &&
            i({
              state: d,
              event: P,
              insights: m,
              item: p,
              insightsEvents: [
                wt(
                  { eventName: 'Item Selected' },
                  Fr({ item: p, items: E.getItems().filter(be) }),
                ),
              ],
            })
        }),
        g(function (h) {
          var p = h.item,
            d = h.source,
            P = h.state,
            E = h.event
          be(p) &&
            a({
              state: P,
              event: E,
              insights: m,
              item: p,
              insightsEvents: [
                wt(
                  { eventName: 'Item Active' },
                  Fr({ item: p, items: d.getItems().filter(be) }),
                ),
              ],
            })
        })
    },
    onStateChange: function (v) {
      var s = v.state
      l({ state: s })
    },
    __autocomplete_pluginOptions: t,
  }
}
function zr() {
  var t,
    e = arguments.length > 1 ? arguments[1] : void 0
  return [].concat(
    ce(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []),
    ['autocomplete-internal'],
    ce(
      (t = e.algoliaInsightsPlugin) !== null &&
        t !== void 0 &&
        t.__automaticInsights
        ? ['autocomplete-automatic']
        : [],
    ),
  )
}
function na(t) {
  return typeof t == 'number' ? t.toString() : t
}
function dn(t, e) {
  var n = e
  return {
    then: function (r, o) {
      return dn(t.then(an(r, n, t), an(o, n, t)), n)
    },
    catch: function (r) {
      return dn(t.catch(an(r, n, t)), n)
    },
    finally: function (r) {
      return (
        r && n.onCancelList.push(r),
        dn(
          t.finally(
            an(
              r &&
                function () {
                  return (n.onCancelList = []), r()
                },
              n,
              t,
            ),
          ),
          n,
        )
      )
    },
    cancel: function () {
      n.isCanceled = !0
      var r = n.onCancelList
      ;(n.onCancelList = []),
        r.forEach(function (o) {
          o()
        })
    },
    isCanceled: function () {
      return n.isCanceled === !0
    },
  }
}
function Jr(t) {
  return dn(t, { isCanceled: !1, onCancelList: [] })
}
function an(t, e, n) {
  return t
    ? function (r) {
        return e.isCanceled ? r : t(r)
      }
    : n
}
function Qr(t, e, n, r) {
  if (!n) return null
  if (t < 0 && (e === null || (r !== null && e === 0))) return n + t
  var o = (e === null ? -1 : e) + t
  return o <= -1 || o >= n ? (r === null ? null : 0) : o
}
function $r(t, e) {
  var n = Object.keys(t)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t)
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function Zr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? $r(Object(n), !0).forEach(function (r) {
          ra(t, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : $r(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return t
}
function ra(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i) {
        if (ke(i) !== 'object' || i === null) return i
        var a = i[Symbol.toPrimitive]
        if (a !== void 0) {
          var u = a.call(i, 'string')
          if (ke(u) !== 'object') return u
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return String(i)
      })(r)
      return ke(o) === 'symbol' ? o : String(o)
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  )
}
function ke(t) {
  return (
    (ke =
      typeof Symbol == 'function' && A(Symbol.iterator) == 'symbol'
        ? function (e) {
            return A(e)
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : A(e)
          }),
    ke(t)
  )
}
function Yt(t) {
  var e = (function (o) {
    var i = o.collections
      .map(function (a) {
        return a.items.length
      })
      .reduce(function (a, u, f) {
        var m = (a[f - 1] || 0) + u
        return a.push(m), a
      }, [])
      .reduce(function (a, u) {
        return u <= o.activeItemId ? a + 1 : a
      }, 0)
    return o.collections[i]
  })(t)
  if (!e) return null
  var n =
      e.items[
        (function (o) {
          for (
            var i = o.state, a = o.collection, u = !1, f = 0, m = 0;
            u === !1;

          ) {
            var b = i.collections[f]
            if (b === a) {
              u = !0
              break
            }
            ;(m += b.items.length), f++
          }
          return i.activeItemId - m
        })({ state: t, collection: e })
      ],
    r = e.source
  return {
    item: n,
    itemInputValue: r.getItemInputValue({ item: n, state: t }),
    itemUrl: r.getItemUrl({ item: n, state: t }),
    source: r,
  }
}
function bt(t, e, n) {
  return [t, n == null ? void 0 : n.sourceId, e]
    .filter(Boolean)
    .join('-')
    .replace(/\s/g, '')
}
var oa = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i
function Gr(t) {
  return t.nativeEvent || t
}
function De(t) {
  return (
    (De =
      typeof Symbol == 'function' && A(Symbol.iterator) == 'symbol'
        ? function (e) {
            return A(e)
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : A(e)
          }),
    De(t)
  )
}
function Yr(t, e) {
  var n = Object.keys(t)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t)
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function ia(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i) {
        if (De(i) !== 'object' || i === null) return i
        var a = i[Symbol.toPrimitive]
        if (a !== void 0) {
          var u = a.call(i, 'string')
          if (De(u) !== 'object') return u
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return String(i)
      })(r)
      return De(o) === 'symbol' ? o : String(o)
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  )
}
function Ce(t) {
  return (
    (Ce =
      typeof Symbol == 'function' && A(Symbol.iterator) == 'symbol'
        ? function (e) {
            return A(e)
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : A(e)
          }),
    Ce(t)
  )
}
function Xr(t, e) {
  var n = Object.keys(t)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t)
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function cn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? Xr(Object(n), !0).forEach(function (r) {
          aa(t, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Xr(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return t
}
function aa(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i) {
        if (Ce(i) !== 'object' || i === null) return i
        var a = i[Symbol.toPrimitive]
        if (a !== void 0) {
          var u = a.call(i, 'string')
          if (Ce(u) !== 'object') return u
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return String(i)
      })(r)
      return Ce(o) === 'symbol' ? o : String(o)
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  )
}
function xe(t) {
  return (
    (xe =
      typeof Symbol == 'function' && A(Symbol.iterator) == 'symbol'
        ? function (e) {
            return A(e)
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : A(e)
          }),
    xe(t)
  )
}
function Ln(t, e) {
  ;(e == null || e > t.length) && (e = t.length)
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
  return r
}
function to(t, e) {
  var n = Object.keys(t)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t)
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function ne(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? to(Object(n), !0).forEach(function (r) {
          ca(t, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : to(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return t
}
function ca(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i) {
        if (xe(i) !== 'object' || i === null) return i
        var a = i[Symbol.toPrimitive]
        if (a !== void 0) {
          var u = a.call(i, 'string')
          if (xe(u) !== 'object') return u
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return String(i)
      })(r)
      return xe(o) === 'symbol' ? o : String(o)
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  )
}
function Ae(t) {
  return (
    (Ae =
      typeof Symbol == 'function' && A(Symbol.iterator) == 'symbol'
        ? function (e) {
            return A(e)
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : A(e)
          }),
    Ae(t)
  )
}
function eo(t, e) {
  var n = Object.keys(t)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t)
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function un(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? eo(Object(n), !0).forEach(function (r) {
          ri(t, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : eo(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return t
}
function ri(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i) {
        if (Ae(i) !== 'object' || i === null) return i
        var a = i[Symbol.toPrimitive]
        if (a !== void 0) {
          var u = a.call(i, 'string')
          if (Ae(u) !== 'object') return u
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return String(i)
      })(r)
      return Ae(o) === 'symbol' ? o : String(o)
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  )
}
function Ne(t) {
  return (
    (Ne =
      typeof Symbol == 'function' && A(Symbol.iterator) == 'symbol'
        ? function (e) {
            return A(e)
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : A(e)
          }),
    Ne(t)
  )
}
function no(t, e) {
  var n = Object.keys(t)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t)
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function re(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? no(Object(n), !0).forEach(function (r) {
          ua(t, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : no(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return t
}
function ua(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i) {
        if (Ne(i) !== 'object' || i === null) return i
        var a = i[Symbol.toPrimitive]
        if (a !== void 0) {
          var u = a.call(i, 'string')
          if (Ne(u) !== 'object') return u
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return String(i)
      })(r)
      return Ne(o) === 'symbol' ? o : String(o)
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  )
}
function oi(t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return qn(e)
    })(t) ||
    (function (e) {
      if (
        (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
        e['@@iterator'] != null
      )
        return Array.from(e)
    })(t) ||
    (function (e, n) {
      if (e) {
        if (typeof e == 'string') return qn(e, n)
        var r = Object.prototype.toString.call(e).slice(8, -1)
        return (
          r === 'Object' && e.constructor && (r = e.constructor.name),
          r === 'Map' || r === 'Set'
            ? Array.from(e)
            : r === 'Arguments' ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? qn(e, n)
              : void 0
        )
      }
    })(t) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    })()
  )
}
function qn(t, e) {
  ;(e == null || e > t.length) && (e = t.length)
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
  return r
}
function ln(t) {
  return !!t.execute
}
function la(t) {
  var e = t
    .reduce(function (n, r) {
      if (!ln(r)) return n.push(r), n
      var o = r.searchClient,
        i = r.execute,
        a = r.requesterId,
        u = r.requests,
        f = n.find(function (l) {
          return (
            ln(r) && ln(l) && l.searchClient === o && !!a && l.requesterId === a
          )
        })
      if (f) {
        var m
        ;(m = f.items).push.apply(m, oi(u))
      } else {
        var b = { execute: i, requesterId: a, items: u, searchClient: o }
        n.push(b)
      }
      return n
    }, [])
    .map(function (n) {
      if (!ln(n)) return Promise.resolve(n)
      var r = n,
        o = r.execute,
        i = r.items
      return o({ searchClient: r.searchClient, requests: i })
    })
  return Promise.all(e).then(function (n) {
    return Ke(n)
  })
}
function Te(t) {
  return (
    (Te =
      typeof Symbol == 'function' && A(Symbol.iterator) == 'symbol'
        ? function (e) {
            return A(e)
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : A(e)
          }),
    Te(t)
  )
}
var sa = ['event', 'nextState', 'props', 'query', 'refresh', 'store']
function ro(t, e) {
  var n = Object.keys(t)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t)
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function zt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? ro(Object(n), !0).forEach(function (r) {
          fa(t, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : ro(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return t
}
function fa(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i) {
        if (Te(i) !== 'object' || i === null) return i
        var a = i[Symbol.toPrimitive]
        if (a !== void 0) {
          var u = a.call(i, 'string')
          if (Te(u) !== 'object') return u
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return String(i)
      })(r)
      return Te(o) === 'symbol' ? o : String(o)
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  )
}
var oo,
  Mn,
  sn,
  Se = null,
  io =
    ((oo = -1),
    (Mn = -1),
    (sn = void 0),
    function (t) {
      var e = ++oo
      return Promise.resolve(t).then(function (n) {
        return sn && e < Mn ? sn : ((Mn = e), (sn = n), n)
      })
    })
function Jt(t) {
  var e = t.event,
    n = t.nextState,
    r = n === void 0 ? {} : n,
    o = t.props,
    i = t.query,
    a = t.refresh,
    u = t.store,
    f = (function (p, d) {
      if (p == null) return {}
      var P,
        E,
        C = (function (I, x) {
          if (I == null) return {}
          var k,
            U,
            z = {},
            q = Object.keys(I)
          for (U = 0; U < q.length; U++)
            (k = q[U]), x.indexOf(k) >= 0 || (z[k] = I[k])
          return z
        })(p, d)
      if (Object.getOwnPropertySymbols) {
        var N = Object.getOwnPropertySymbols(p)
        for (E = 0; E < N.length; E++)
          (P = N[E]),
            d.indexOf(P) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(p, P) &&
                (C[P] = p[P]))
      }
      return C
    })(t, sa)
  Se && o.environment.clearTimeout(Se)
  var m = f.setCollections,
    b = f.setIsOpen,
    l = f.setQuery,
    v = f.setActiveItemId,
    s = f.setStatus,
    S = f.setContext
  if ((l(i), v(o.defaultActiveItemId), !i && o.openOnFocus === !1)) {
    var g,
      y = u.getState().collections.map(function (p) {
        return zt(zt({}, p), {}, { items: [] })
      })
    s('idle'),
      m(y),
      b(
        (g = r.isOpen) !== null && g !== void 0
          ? g
          : o.shouldPanelOpen({ state: u.getState() }),
      )
    var _ = Jr(
      io(y).then(function () {
        return Promise.resolve()
      }),
    )
    return u.pendingRequests.add(_)
  }
  s('loading'),
    (Se = o.environment.setTimeout(function () {
      s('stalled')
    }, o.stallThreshold))
  var h = Jr(
    io(
      o
        .getSources(zt({ query: i, refresh: a, state: u.getState() }, f))
        .then(function (p) {
          return Promise.all(
            p.map(function (d) {
              return Promise.resolve(
                d.getItems(
                  zt({ query: i, refresh: a, state: u.getState() }, f),
                ),
              ).then(function (P) {
                return (function (E, C, N) {
                  if (((x = E), !!(x != null && x.execute))) {
                    var I =
                      E.requesterId === 'algolia'
                        ? Object.assign.apply(
                            Object,
                            [{}].concat(
                              oi(
                                Object.keys(N.context).map(function (k) {
                                  var U
                                  return (U = N.context[k]) === null ||
                                    U === void 0
                                    ? void 0
                                    : U.__algoliaSearchParameters
                                }),
                              ),
                            ),
                          )
                        : {}
                    return re(
                      re({}, E),
                      {},
                      {
                        requests: E.queries.map(function (k) {
                          return {
                            query:
                              E.requesterId === 'algolia'
                                ? re(
                                    re({}, k),
                                    {},
                                    { params: re(re({}, I), k.params) },
                                  )
                                : k,
                            sourceId: C,
                            transformResponse: E.transformResponse,
                          }
                        }),
                      },
                    )
                  }
                  var x
                  return { items: E, sourceId: C }
                })(P, d.sourceId, u.getState())
              })
            }),
          )
            .then(la)
            .then(function (d) {
              var P,
                E = d.some(function (C) {
                  return (function (N) {
                    return (
                      !Array.isArray(N) && !!(N != null && N._automaticInsights)
                    )
                  })(C.items)
                })
              return (
                E &&
                  S({
                    algoliaInsightsPlugin: zt(
                      zt(
                        {},
                        ((P = u.getState().context) === null || P === void 0
                          ? void 0
                          : P.algoliaInsightsPlugin) || {},
                      ),
                      {},
                      { __automaticInsights: E },
                    ),
                  }),
                (function (C, N, I) {
                  return N.map(function (x) {
                    var k,
                      U = C.filter(function (O) {
                        return O.sourceId === x.sourceId
                      }),
                      z = U.map(function (O) {
                        return O.items
                      }),
                      q = U[0].transformResponse,
                      ot = q
                        ? q({
                            results: (k = z),
                            hits: k
                              .map(function (O) {
                                return O.hits
                              })
                              .filter(Boolean),
                            facetHits: k
                              .map(function (O) {
                                var w
                                return (w = O.facetHits) === null ||
                                  w === void 0
                                  ? void 0
                                  : w.map(function (j) {
                                      return {
                                        label: j.value,
                                        count: j.count,
                                        _highlightResult: {
                                          label: { value: j.highlighted },
                                        },
                                      }
                                    })
                              })
                              .filter(Boolean),
                          })
                        : z
                    return (
                      x.onResolve({
                        source: x,
                        results: z,
                        items: ot,
                        state: I.getState(),
                      }),
                      ot.every(Boolean),
                      'The `getItems` function from source "'
                        .concat(
                          x.sourceId,
                          '" must return an array of items but returned ',
                        )
                        .concat(
                          JSON.stringify(void 0),
                          `.

Did you forget to return items?

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`,
                        ),
                      { source: x, items: ot }
                    )
                  })
                })(d, p, u)
              )
            })
            .then(function (d) {
              return (function (P) {
                var E = P.props,
                  C = P.state,
                  N = P.collections.reduce(function (x, k) {
                    return un(
                      un({}, x),
                      {},
                      ri(
                        {},
                        k.source.sourceId,
                        un(
                          un({}, k.source),
                          {},
                          {
                            getItems: function () {
                              return Ke(k.items)
                            },
                          },
                        ),
                      ),
                    )
                  }, {}),
                  I = E.plugins.reduce(
                    function (x, k) {
                      return k.reshape ? k.reshape(x) : x
                    },
                    { sourcesBySourceId: N, state: C },
                  ).sourcesBySourceId
                return Ke(
                  E.reshape({
                    sourcesBySourceId: I,
                    sources: Object.values(I),
                    state: C,
                  }),
                )
                  .filter(Boolean)
                  .map(function (x) {
                    return { source: x, items: x.getItems() }
                  })
              })({ collections: d, props: o, state: u.getState() })
            })
        }),
    ),
  )
    .then(function (p) {
      var d
      s('idle'), m(p)
      var P = o.shouldPanelOpen({ state: u.getState() })
      b(
        (d = r.isOpen) !== null && d !== void 0
          ? d
          : (o.openOnFocus && !i && P) || P,
      )
      var E = Yt(u.getState())
      if (u.getState().activeItemId !== null && E) {
        var C = E.item,
          N = E.itemInputValue,
          I = E.itemUrl,
          x = E.source
        x.onActive(
          zt(
            {
              event: e,
              item: C,
              itemInputValue: N,
              itemUrl: I,
              refresh: a,
              source: x,
              state: u.getState(),
            },
            f,
          ),
        )
      }
    })
    .finally(function () {
      s('idle'), Se && o.environment.clearTimeout(Se)
    })
  return u.pendingRequests.add(h)
}
function Re(t) {
  return (
    (Re =
      typeof Symbol == 'function' && A(Symbol.iterator) == 'symbol'
        ? function (e) {
            return A(e)
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : A(e)
          }),
    Re(t)
  )
}
var ma = ['event', 'props', 'refresh', 'store']
function ao(t, e) {
  var n = Object.keys(t)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t)
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function Qt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? ao(Object(n), !0).forEach(function (r) {
          pa(t, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : ao(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return t
}
function pa(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i) {
        if (Re(i) !== 'object' || i === null) return i
        var a = i[Symbol.toPrimitive]
        if (a !== void 0) {
          var u = a.call(i, 'string')
          if (Re(u) !== 'object') return u
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return String(i)
      })(r)
      return Re(o) === 'symbol' ? o : String(o)
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  )
}
function Le(t) {
  return (
    (Le =
      typeof Symbol == 'function' && A(Symbol.iterator) == 'symbol'
        ? function (e) {
            return A(e)
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : A(e)
          }),
    Le(t)
  )
}
var va = ['props', 'refresh', 'store'],
  ha = ['inputElement', 'formElement', 'panelElement'],
  da = ['inputElement'],
  ya = ['inputElement', 'maxLength'],
  _a = ['source'],
  ga = ['item', 'source']
function co(t, e) {
  var n = Object.keys(t)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t)
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function it(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? co(Object(n), !0).forEach(function (r) {
          ba(t, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : co(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return t
}
function ba(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i) {
        if (Le(i) !== 'object' || i === null) return i
        var a = i[Symbol.toPrimitive]
        if (a !== void 0) {
          var u = a.call(i, 'string')
          if (Le(u) !== 'object') return u
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return String(i)
      })(r)
      return Le(o) === 'symbol' ? o : String(o)
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  )
}
function oe(t, e) {
  if (t == null) return {}
  var n,
    r,
    o = (function (a, u) {
      if (a == null) return {}
      var f,
        m,
        b = {},
        l = Object.keys(a)
      for (m = 0; m < l.length; m++)
        (f = l[m]), u.indexOf(f) >= 0 || (b[f] = a[f])
      return b
    })(t, e)
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t)
    for (r = 0; r < i.length; r++)
      (n = i[r]),
        e.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]))
  }
  return o
}
function qe(t) {
  return (
    (qe =
      typeof Symbol == 'function' && A(Symbol.iterator) == 'symbol'
        ? function (e) {
            return A(e)
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : A(e)
          }),
    qe(t)
  )
}
function uo(t, e) {
  var n = Object.keys(t)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t)
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function Sa(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? uo(Object(n), !0).forEach(function (r) {
          ii(t, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : uo(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return t
}
function ii(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i) {
        if (qe(i) !== 'object' || i === null) return i
        var a = i[Symbol.toPrimitive]
        if (a !== void 0) {
          var u = a.call(i, 'string')
          if (qe(u) !== 'object') return u
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return String(i)
      })(r)
      return qe(o) === 'symbol' ? o : String(o)
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  )
}
function Oa(t) {
  var e,
    n,
    r,
    o,
    i = t.plugins,
    a = t.options,
    u =
      (e = (((n = a.__autocomplete_metadata) === null || n === void 0
        ? void 0
        : n.userAgents) || [])[0]) === null || e === void 0
        ? void 0
        : e.segment,
    f = u
      ? ii(
          {},
          u,
          Object.keys(
            ((r = a.__autocomplete_metadata) === null || r === void 0
              ? void 0
              : r.options) || {},
          ),
        )
      : {}
  return {
    plugins: i.map(function (m) {
      return {
        name: m.name,
        options: Object.keys(m.__autocomplete_pluginOptions || []),
      }
    }),
    options: Sa({ 'autocomplete-core': Object.keys(a) }, f),
    ua: Qi.concat(
      ((o = a.__autocomplete_metadata) === null || o === void 0
        ? void 0
        : o.userAgents) || [],
    ),
  }
}
function lo(t) {
  var e,
    n = t.state
  return n.isOpen === !1 || n.activeItemId === null
    ? null
    : ((e = Yt(n)) === null || e === void 0 ? void 0 : e.itemInputValue) || null
}
function Me(t) {
  return (
    (Me =
      typeof Symbol == 'function' && A(Symbol.iterator) == 'symbol'
        ? function (e) {
            return A(e)
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : A(e)
          }),
    Me(t)
  )
}
function so(t, e) {
  var n = Object.keys(t)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t)
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function V(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? so(Object(n), !0).forEach(function (r) {
          wa(t, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : so(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return t
}
function wa(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i) {
        if (Me(i) !== 'object' || i === null) return i
        var a = i[Symbol.toPrimitive]
        if (a !== void 0) {
          var u = a.call(i, 'string')
          if (Me(u) !== 'object') return u
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return String(i)
      })(r)
      return Me(o) === 'symbol' ? o : String(o)
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  )
}
var Ea = function (t, e) {
  switch (e.type) {
    case 'setActiveItemId':
    case 'mousemove':
      return V(V({}, t), {}, { activeItemId: e.payload })
    case 'setQuery':
      return V(V({}, t), {}, { query: e.payload, completion: null })
    case 'setCollections':
      return V(V({}, t), {}, { collections: e.payload })
    case 'setIsOpen':
      return V(V({}, t), {}, { isOpen: e.payload })
    case 'setStatus':
      return V(V({}, t), {}, { status: e.payload })
    case 'setContext':
      return V(V({}, t), {}, { context: V(V({}, t.context), e.payload) })
    case 'ArrowDown':
      var n = V(
        V({}, t),
        {},
        {
          activeItemId: e.payload.hasOwnProperty('nextActiveItemId')
            ? e.payload.nextActiveItemId
            : Qr(1, t.activeItemId, Zn(t), e.props.defaultActiveItemId),
        },
      )
      return V(V({}, n), {}, { completion: lo({ state: n }) })
    case 'ArrowUp':
      var r = V(
        V({}, t),
        {},
        {
          activeItemId: Qr(
            -1,
            t.activeItemId,
            Zn(t),
            e.props.defaultActiveItemId,
          ),
        },
      )
      return V(V({}, r), {}, { completion: lo({ state: r }) })
    case 'Escape':
      return t.isOpen
        ? V(V({}, t), {}, { activeItemId: null, isOpen: !1, completion: null })
        : V(
            V({}, t),
            {},
            { activeItemId: null, query: '', status: 'idle', collections: [] },
          )
    case 'submit':
      return V(V({}, t), {}, { activeItemId: null, isOpen: !1, status: 'idle' })
    case 'reset':
      return V(
        V({}, t),
        {},
        {
          activeItemId:
            e.props.openOnFocus === !0 ? e.props.defaultActiveItemId : null,
          status: 'idle',
          completion: null,
          query: '',
        },
      )
    case 'focus':
      return V(
        V({}, t),
        {},
        {
          activeItemId: e.props.defaultActiveItemId,
          isOpen:
            (e.props.openOnFocus || !!t.query) &&
            e.props.shouldPanelOpen({ state: t }),
        },
      )
    case 'blur':
      return e.props.debug
        ? t
        : V(V({}, t), {}, { isOpen: !1, activeItemId: null })
    case 'mouseleave':
      return V(V({}, t), {}, { activeItemId: e.props.defaultActiveItemId })
    default:
      return (
        'The reducer action '.concat(
          JSON.stringify(e.type),
          ' is not supported.',
        ),
        t
      )
  }
}
function He(t) {
  return (
    (He =
      typeof Symbol == 'function' && A(Symbol.iterator) == 'symbol'
        ? function (e) {
            return A(e)
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : A(e)
          }),
    He(t)
  )
}
function fo(t, e) {
  var n = Object.keys(t)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t)
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function $t(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? fo(Object(n), !0).forEach(function (r) {
          ja(t, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : fo(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return t
}
function ja(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i) {
        if (He(i) !== 'object' || i === null) return i
        var a = i[Symbol.toPrimitive]
        if (a !== void 0) {
          var u = a.call(i, 'string')
          if (He(u) !== 'object') return u
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return String(i)
      })(r)
      return He(o) === 'symbol' ? o : String(o)
    })(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  )
}
function Pa(t) {
  var e = [],
    n = (function (b, l) {
      var v,
        s = typeof window < 'u' ? window : {},
        S = b.plugins || []
      return ne(
        ne(
          {
            debug: !1,
            openOnFocus: !1,
            enterKeyHint: void 0,
            ignoreCompositionEvents: !1,
            placeholder: '',
            autoFocus: !1,
            defaultActiveItemId: null,
            stallThreshold: 300,
            insights: void 0,
            environment: s,
            shouldPanelOpen: function (g) {
              return Zn(g.state) > 0
            },
            reshape: function (g) {
              return g.sources
            },
          },
          b,
        ),
        {},
        {
          id:
            (v = b.id) !== null && v !== void 0
              ? v
              : 'autocomplete-'.concat(Ji++),
          plugins: S,
          initialState: ne(
            {
              activeItemId: null,
              query: '',
              completion: null,
              collections: [],
              isOpen: !1,
              status: 'idle',
              context: {},
            },
            b.initialState,
          ),
          onStateChange: function (g) {
            var y
            ;(y = b.onStateChange) === null || y === void 0 || y.call(b, g),
              S.forEach(function (_) {
                var h
                return (h = _.onStateChange) === null || h === void 0
                  ? void 0
                  : h.call(_, g)
              })
          },
          onSubmit: function (g) {
            var y
            ;(y = b.onSubmit) === null || y === void 0 || y.call(b, g),
              S.forEach(function (_) {
                var h
                return (h = _.onSubmit) === null || h === void 0
                  ? void 0
                  : h.call(_, g)
              })
          },
          onReset: function (g) {
            var y
            ;(y = b.onReset) === null || y === void 0 || y.call(b, g),
              S.forEach(function (_) {
                var h
                return (h = _.onReset) === null || h === void 0
                  ? void 0
                  : h.call(_, g)
              })
          },
          getSources: function (g) {
            return Promise.all(
              []
                .concat(
                  (function (y) {
                    return (
                      (function (_) {
                        if (Array.isArray(_)) return Ln(_)
                      })(y) ||
                      (function (_) {
                        if (
                          (typeof Symbol < 'u' && _[Symbol.iterator] != null) ||
                          _['@@iterator'] != null
                        )
                          return Array.from(_)
                      })(y) ||
                      (function (_, h) {
                        if (_) {
                          if (typeof _ == 'string') return Ln(_, h)
                          var p = Object.prototype.toString.call(_).slice(8, -1)
                          return (
                            p === 'Object' &&
                              _.constructor &&
                              (p = _.constructor.name),
                            p === 'Map' || p === 'Set'
                              ? Array.from(_)
                              : p === 'Arguments' ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    p,
                                  )
                                ? Ln(_, h)
                                : void 0
                          )
                        }
                      })(y) ||
                      (function () {
                        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                      })()
                    )
                  })(
                    S.map(function (y) {
                      return y.getSources
                    }),
                  ),
                  [b.getSources],
                )
                .filter(Boolean)
                .map(function (y) {
                  return (function (_, h) {
                    var p = []
                    return Promise.resolve(_(h)).then(function (d) {
                      return Promise.all(
                        d
                          .filter(function (P) {
                            return !!P
                          })
                          .map(function (P) {
                            if ((P.sourceId, p.includes(P.sourceId)))
                              throw new Error(
                                '[Autocomplete] The `sourceId` '.concat(
                                  JSON.stringify(P.sourceId),
                                  ' is not unique.',
                                ),
                              )
                            p.push(P.sourceId)
                            var E = {
                              getItemInputValue: function (N) {
                                return N.state.query
                              },
                              getItemUrl: function () {},
                              onSelect: function (N) {
                                ;(0, N.setIsOpen)(!1)
                              },
                              onActive: hn,
                              onResolve: hn,
                            }
                            Object.keys(E).forEach(function (N) {
                              E[N].__default = !0
                            })
                            var C = Zr(Zr({}, E), P)
                            return Promise.resolve(C)
                          }),
                      )
                    })
                  })(y, g)
                }),
            )
              .then(function (y) {
                return Ke(y)
              })
              .then(function (y) {
                return y.map(function (_) {
                  return ne(
                    ne({}, _),
                    {},
                    {
                      onSelect: function (h) {
                        _.onSelect(h),
                          l.forEach(function (p) {
                            var d
                            return (d = p.onSelect) === null || d === void 0
                              ? void 0
                              : d.call(p, h)
                          })
                      },
                      onActive: function (h) {
                        _.onActive(h),
                          l.forEach(function (p) {
                            var d
                            return (d = p.onActive) === null || d === void 0
                              ? void 0
                              : d.call(p, h)
                          })
                      },
                      onResolve: function (h) {
                        _.onResolve(h),
                          l.forEach(function (p) {
                            var d
                            return (d = p.onResolve) === null || d === void 0
                              ? void 0
                              : d.call(p, h)
                          })
                      },
                    },
                  )
                })
              })
          },
          navigator: ne(
            {
              navigate: function (g) {
                var y = g.itemUrl
                s.location.assign(y)
              },
              navigateNewTab: function (g) {
                var y = g.itemUrl,
                  _ = s.open(y, '_blank', 'noopener')
                _ == null || _.focus()
              },
              navigateNewWindow: function (g) {
                var y = g.itemUrl
                s.open(y, '_blank', 'noopener')
              },
            },
            b.navigator,
          ),
        },
      )
    })(t, e),
    r = (function (b, l, v) {
      var s,
        S = l.initialState
      return {
        getState: function () {
          return S
        },
        dispatch: function (g, y) {
          var _ = (function (h) {
            for (var p = 1; p < arguments.length; p++) {
              var d = arguments[p] != null ? arguments[p] : {}
              p % 2
                ? Yr(Object(d), !0).forEach(function (P) {
                    ia(h, P, d[P])
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      h,
                      Object.getOwnPropertyDescriptors(d),
                    )
                  : Yr(Object(d)).forEach(function (P) {
                      Object.defineProperty(
                        h,
                        P,
                        Object.getOwnPropertyDescriptor(d, P),
                      )
                    })
            }
            return h
          })({}, S)
          ;(S = b(S, { type: g, props: l, payload: y })),
            v({ state: S, prevState: _ })
        },
        pendingRequests:
          ((s = []),
          {
            add: function (g) {
              return (
                s.push(g),
                g.finally(function () {
                  s = s.filter(function (y) {
                    return y !== g
                  })
                })
              )
            },
            cancelAll: function () {
              s.forEach(function (g) {
                return g.cancel()
              })
            },
            isEmpty: function () {
              return s.length === 0
            },
          }),
      }
    })(Ea, n, function (b) {
      var l,
        v,
        s = b.prevState,
        S = b.state
      if (
        (n.onStateChange(
          $t({ prevState: s, state: S, refresh: a, navigator: n.navigator }, o),
        ),
        !f() &&
          (l = S.context) !== null &&
          l !== void 0 &&
          (v = l.algoliaInsightsPlugin) !== null &&
          v !== void 0 &&
          v.__automaticInsights &&
          n.insights !== !1)
      ) {
        var g = Wr({ __autocomplete_clickAnalytics: !1 })
        n.plugins.push(g), u([g])
      }
    }),
    o = (function (b) {
      var l = b.store
      return {
        setActiveItemId: function (v) {
          l.dispatch('setActiveItemId', v)
        },
        setQuery: function (v) {
          l.dispatch('setQuery', v)
        },
        setCollections: function (v) {
          var s = 0,
            S = v.map(function (g) {
              return cn(
                cn({}, g),
                {},
                {
                  items: Ke(g.items).map(function (y) {
                    return cn(cn({}, y), {}, { __autocomplete_id: s++ })
                  }),
                },
              )
            })
          l.dispatch('setCollections', S)
        },
        setIsOpen: function (v) {
          l.dispatch('setIsOpen', v)
        },
        setStatus: function (v) {
          l.dispatch('setStatus', v)
        },
        setContext: function (v) {
          l.dispatch('setContext', v)
        },
      }
    })({ store: r }),
    i = (function (b) {
      var l = b.props,
        v = b.refresh,
        s = b.store,
        S = oe(b, va)
      return {
        getEnvironmentProps: function (g) {
          var y = g.inputElement,
            _ = g.formElement,
            h = g.panelElement
          function p(d) {
            ;(!s.getState().isOpen && s.pendingRequests.isEmpty()) ||
              d.target === y ||
              ([_, h].some(function (P) {
                return (E = P) === (C = d.target) || E.contains(C)
                var E, C
              }) === !1 &&
                (s.dispatch('blur', null),
                l.debug || s.pendingRequests.cancelAll()))
          }
          return it(
            {
              onTouchStart: p,
              onMouseDown: p,
              onTouchMove: function (d) {
                s.getState().isOpen !== !1 &&
                  y === l.environment.document.activeElement &&
                  d.target !== y &&
                  y.blur()
              },
            },
            oe(g, ha),
          )
        },
        getRootProps: function (g) {
          return it(
            {
              role: 'combobox',
              'aria-expanded': s.getState().isOpen,
              'aria-haspopup': 'listbox',
              'aria-controls': s.getState().isOpen
                ? s
                    .getState()
                    .collections.map(function (y) {
                      var _ = y.source
                      return bt(l.id, 'list', _)
                    })
                    .join(' ')
                : void 0,
              'aria-labelledby': bt(l.id, 'label'),
            },
            g,
          )
        },
        getFormProps: function (g) {
          return (
            g.inputElement,
            it(
              {
                action: '',
                noValidate: !0,
                role: 'search',
                onSubmit: function (y) {
                  var _
                  y.preventDefault(),
                    l.onSubmit(
                      it({ event: y, refresh: v, state: s.getState() }, S),
                    ),
                    s.dispatch('submit', null),
                    (_ = g.inputElement) === null || _ === void 0 || _.blur()
                },
                onReset: function (y) {
                  var _
                  y.preventDefault(),
                    l.onReset(
                      it({ event: y, refresh: v, state: s.getState() }, S),
                    ),
                    s.dispatch('reset', null),
                    (_ = g.inputElement) === null || _ === void 0 || _.focus()
                },
              },
              oe(g, da),
            )
          )
        },
        getLabelProps: function (g) {
          return it({ htmlFor: bt(l.id, 'input'), id: bt(l.id, 'label') }, g)
        },
        getInputProps: function (g) {
          var y
          function _(I) {
            ;(l.openOnFocus || s.getState().query) &&
              Jt(
                it(
                  {
                    event: I,
                    props: l,
                    query: s.getState().completion || s.getState().query,
                    refresh: v,
                    store: s,
                  },
                  S,
                ),
              ),
              s.dispatch('focus', null)
          }
          var h = g || {}
          h.inputElement
          var p = h.maxLength,
            d = p === void 0 ? 512 : p,
            P = oe(h, ya),
            E = Yt(s.getState()),
            C = (function (I) {
              return !!(I && I.match(oa))
            })(
              ((y = l.environment.navigator) === null || y === void 0
                ? void 0
                : y.userAgent) || '',
            ),
            N =
              l.enterKeyHint || (E != null && E.itemUrl && !C ? 'go' : 'search')
          return it(
            {
              'aria-autocomplete': 'both',
              'aria-activedescendant':
                s.getState().isOpen && s.getState().activeItemId !== null
                  ? bt(
                      l.id,
                      'item-'.concat(s.getState().activeItemId),
                      E == null ? void 0 : E.source,
                    )
                  : void 0,
              'aria-controls': s.getState().isOpen
                ? s
                    .getState()
                    .collections.map(function (I) {
                      var x = I.source
                      return bt(l.id, 'list', x)
                    })
                    .join(' ')
                : void 0,
              'aria-labelledby': bt(l.id, 'label'),
              value: s.getState().completion || s.getState().query,
              id: bt(l.id, 'input'),
              autoComplete: 'off',
              autoCorrect: 'off',
              autoCapitalize: 'off',
              enterKeyHint: N,
              spellCheck: 'false',
              autoFocus: l.autoFocus,
              placeholder: l.placeholder,
              maxLength: d,
              type: 'search',
              onChange: function (I) {
                var x = I.currentTarget.value
                l.ignoreCompositionEvents && Gr(I).isComposing
                  ? S.setQuery(x)
                  : Jt(
                      it(
                        {
                          event: I,
                          props: l,
                          query: x.slice(0, d),
                          refresh: v,
                          store: s,
                        },
                        S,
                      ),
                    )
              },
              onCompositionEnd: function (I) {
                Jt(
                  it(
                    {
                      event: I,
                      props: l,
                      query: I.currentTarget.value.slice(0, d),
                      refresh: v,
                      store: s,
                    },
                    S,
                  ),
                )
              },
              onKeyDown: function (I) {
                Gr(I).isComposing ||
                  (function (x) {
                    var k = x.event,
                      U = x.props,
                      z = x.refresh,
                      q = x.store,
                      ot = (function (K, J) {
                        if (K == null) return {}
                        var G,
                          st,
                          tt = (function (Et, Vt) {
                            if (Et == null) return {}
                            var jt,
                              Xt,
                              qt = {},
                              $e = Object.keys(Et)
                            for (Xt = 0; Xt < $e.length; Xt++)
                              (jt = $e[Xt]),
                                Vt.indexOf(jt) >= 0 || (qt[jt] = Et[jt])
                            return qt
                          })(K, J)
                        if (Object.getOwnPropertySymbols) {
                          var de = Object.getOwnPropertySymbols(K)
                          for (st = 0; st < de.length; st++)
                            (G = de[st]),
                              J.indexOf(G) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                  K,
                                  G,
                                ) &&
                                  (tt[G] = K[G]))
                        }
                        return tt
                      })(x, ma)
                    if (k.key === 'ArrowUp' || k.key === 'ArrowDown') {
                      var O = function () {
                          var K = Yt(q.getState()),
                            J = U.environment.document.getElementById(
                              bt(
                                U.id,
                                'item-'.concat(q.getState().activeItemId),
                                K == null ? void 0 : K.source,
                              ),
                            )
                          J &&
                            (J.scrollIntoViewIfNeeded
                              ? J.scrollIntoViewIfNeeded(!1)
                              : J.scrollIntoView(!1))
                        },
                        w = function () {
                          var K = Yt(q.getState())
                          if (q.getState().activeItemId !== null && K) {
                            var J = K.item,
                              G = K.itemInputValue,
                              st = K.itemUrl,
                              tt = K.source
                            tt.onActive(
                              Qt(
                                {
                                  event: k,
                                  item: J,
                                  itemInputValue: G,
                                  itemUrl: st,
                                  refresh: z,
                                  source: tt,
                                  state: q.getState(),
                                },
                                ot,
                              ),
                            )
                          }
                        }
                      k.preventDefault(),
                        q.getState().isOpen === !1 &&
                        (U.openOnFocus || q.getState().query)
                          ? Jt(
                              Qt(
                                {
                                  event: k,
                                  props: U,
                                  query: q.getState().query,
                                  refresh: z,
                                  store: q,
                                },
                                ot,
                              ),
                            ).then(function () {
                              q.dispatch(k.key, {
                                nextActiveItemId: U.defaultActiveItemId,
                              }),
                                w(),
                                setTimeout(O, 0)
                            })
                          : (q.dispatch(k.key, {}), w(), O())
                    } else if (k.key === 'Escape')
                      k.preventDefault(),
                        q.dispatch(k.key, null),
                        q.pendingRequests.cancelAll()
                    else if (k.key === 'Tab')
                      q.dispatch('blur', null), q.pendingRequests.cancelAll()
                    else if (k.key === 'Enter') {
                      if (
                        q.getState().activeItemId === null ||
                        q.getState().collections.every(function (K) {
                          return K.items.length === 0
                        })
                      )
                        return void (U.debug || q.pendingRequests.cancelAll())
                      k.preventDefault()
                      var j = Yt(q.getState()),
                        R = j.item,
                        D = j.itemInputValue,
                        L = j.itemUrl,
                        W = j.source
                      if (k.metaKey || k.ctrlKey)
                        L !== void 0 &&
                          (W.onSelect(
                            Qt(
                              {
                                event: k,
                                item: R,
                                itemInputValue: D,
                                itemUrl: L,
                                refresh: z,
                                source: W,
                                state: q.getState(),
                              },
                              ot,
                            ),
                          ),
                          U.navigator.navigateNewTab({
                            itemUrl: L,
                            item: R,
                            state: q.getState(),
                          }))
                      else if (k.shiftKey)
                        L !== void 0 &&
                          (W.onSelect(
                            Qt(
                              {
                                event: k,
                                item: R,
                                itemInputValue: D,
                                itemUrl: L,
                                refresh: z,
                                source: W,
                                state: q.getState(),
                              },
                              ot,
                            ),
                          ),
                          U.navigator.navigateNewWindow({
                            itemUrl: L,
                            item: R,
                            state: q.getState(),
                          }))
                      else if (!k.altKey) {
                        if (L !== void 0)
                          return (
                            W.onSelect(
                              Qt(
                                {
                                  event: k,
                                  item: R,
                                  itemInputValue: D,
                                  itemUrl: L,
                                  refresh: z,
                                  source: W,
                                  state: q.getState(),
                                },
                                ot,
                              ),
                            ),
                            void U.navigator.navigate({
                              itemUrl: L,
                              item: R,
                              state: q.getState(),
                            })
                          )
                        Jt(
                          Qt(
                            {
                              event: k,
                              nextState: { isOpen: !1 },
                              props: U,
                              query: D,
                              refresh: z,
                              store: q,
                            },
                            ot,
                          ),
                        ).then(function () {
                          W.onSelect(
                            Qt(
                              {
                                event: k,
                                item: R,
                                itemInputValue: D,
                                itemUrl: L,
                                refresh: z,
                                source: W,
                                state: q.getState(),
                              },
                              ot,
                            ),
                          )
                        })
                      }
                    }
                  })(it({ event: I, props: l, refresh: v, store: s }, S))
              },
              onFocus: _,
              onBlur: hn,
              onClick: function (I) {
                g.inputElement !== l.environment.document.activeElement ||
                  s.getState().isOpen ||
                  _(I)
              },
            },
            P,
          )
        },
        getPanelProps: function (g) {
          return it(
            {
              onMouseDown: function (y) {
                y.preventDefault()
              },
              onMouseLeave: function () {
                s.dispatch('mouseleave', null)
              },
            },
            g,
          )
        },
        getListProps: function (g) {
          var y = g || {},
            _ = y.source,
            h = oe(y, _a)
          return it(
            {
              role: 'listbox',
              'aria-labelledby': bt(l.id, 'label'),
              id: bt(l.id, 'list', _),
            },
            h,
          )
        },
        getItemProps: function (g) {
          var y = g.item,
            _ = g.source,
            h = oe(g, ga)
          return it(
            {
              id: bt(l.id, 'item-'.concat(y.__autocomplete_id), _),
              role: 'option',
              'aria-selected':
                s.getState().activeItemId === y.__autocomplete_id,
              onMouseMove: function (p) {
                if (y.__autocomplete_id !== s.getState().activeItemId) {
                  s.dispatch('mousemove', y.__autocomplete_id)
                  var d = Yt(s.getState())
                  if (s.getState().activeItemId !== null && d) {
                    var P = d.item,
                      E = d.itemInputValue,
                      C = d.itemUrl,
                      N = d.source
                    N.onActive(
                      it(
                        {
                          event: p,
                          item: P,
                          itemInputValue: E,
                          itemUrl: C,
                          refresh: v,
                          source: N,
                          state: s.getState(),
                        },
                        S,
                      ),
                    )
                  }
                }
              },
              onMouseDown: function (p) {
                p.preventDefault()
              },
              onClick: function (p) {
                var d = _.getItemInputValue({ item: y, state: s.getState() }),
                  P = _.getItemUrl({ item: y, state: s.getState() })
                ;(P
                  ? Promise.resolve()
                  : Jt(
                      it(
                        {
                          event: p,
                          nextState: { isOpen: !1 },
                          props: l,
                          query: d,
                          refresh: v,
                          store: s,
                        },
                        S,
                      ),
                    )
                ).then(function () {
                  _.onSelect(
                    it(
                      {
                        event: p,
                        item: y,
                        itemInputValue: d,
                        itemUrl: P,
                        refresh: v,
                        source: _,
                        state: s.getState(),
                      },
                      S,
                    ),
                  )
                })
              },
            },
            h,
          )
        },
      }
    })($t({ props: n, refresh: a, store: r, navigator: n.navigator }, o))
  function a() {
    return Jt(
      $t(
        {
          event: new Event('input'),
          nextState: { isOpen: r.getState().isOpen },
          props: n,
          navigator: n.navigator,
          query: r.getState().query,
          refresh: a,
          store: r,
        },
        o,
      ),
    )
  }
  function u(b) {
    b.forEach(function (l) {
      var v
      return (v = l.subscribe) === null || v === void 0
        ? void 0
        : v.call(
            l,
            $t(
              $t({}, o),
              {},
              {
                navigator: n.navigator,
                refresh: a,
                onSelect: function (s) {
                  e.push({ onSelect: s })
                },
                onActive: function (s) {
                  e.push({ onActive: s })
                },
                onResolve: function (s) {
                  e.push({ onResolve: s })
                },
              },
            ),
          )
    })
  }
  function f() {
    return n.plugins.some(function (b) {
      return b.name === 'aa.algoliaInsightsPlugin'
    })
  }
  if (n.insights && !f()) {
    var m = typeof n.insights == 'boolean' ? {} : n.insights
    n.plugins.push(Wr(m))
  }
  return (
    u(n.plugins),
    (function (b) {
      var l,
        v,
        s = b.metadata,
        S = b.environment
      if (
        !(
          (l = S.navigator) === null ||
          l === void 0 ||
          (v = l.userAgent) === null ||
          v === void 0
        ) &&
        v.includes('Algolia Crawler')
      ) {
        var g = S.document.createElement('meta'),
          y = S.document.querySelector('head')
        ;(g.name = 'algolia:metadata'),
          setTimeout(function () {
            ;(g.content = JSON.stringify(s)), y.appendChild(g)
          }, 0)
      }
    })({
      metadata: Oa({ plugins: n.plugins, options: t }),
      environment: n.environment,
    }),
    $t($t({ refresh: a, navigator: n.navigator }, i), o)
  )
}
function Ia(t) {
  var e = t.translations,
    n = (e === void 0 ? {} : e).searchByText,
    r = n === void 0 ? 'Search by' : n
  return c.createElement(
    'a',
    {
      href: 'https://www.algolia.com/ref/docsearch/?utm_source='.concat(
        window.location.hostname,
        '&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch',
      ),
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    c.createElement('span', { className: 'DocSearch-Label' }, r),
    c.createElement(
      'svg',
      {
        width: '77',
        height: '19',
        'aria-label': 'Algolia',
        role: 'img',
        id: 'Layer_1',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 2196.2 500',
      },
      c.createElement(
        'defs',
        null,
        c.createElement(
          'style',
          null,
          '.cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}',
        ),
      ),
      c.createElement('path', {
        className: 'cls-2',
        d: 'M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z',
      }),
      c.createElement('rect', {
        className: 'cls-1',
        x: '1845.88',
        y: '104.73',
        width: '62.58',
        height: '277.9',
        rx: '5.9',
        ry: '5.9',
      }),
      c.createElement('path', {
        className: 'cls-2',
        d: 'M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z',
      }),
      c.createElement('path', {
        className: 'cls-2',
        d: 'M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z',
      }),
      c.createElement('path', {
        className: 'cls-2',
        d: 'M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z',
      }),
      c.createElement('path', {
        className: 'cls-2',
        d: 'M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z',
      }),
      c.createElement('path', {
        className: 'cls-2',
        d: 'M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z',
      }),
      c.createElement('path', {
        className: 'cls-2',
        d: 'M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z',
      }),
      c.createElement('path', {
        className: 'cls-1',
        d: 'M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z',
      }),
    ),
  )
}
function fn(t) {
  return c.createElement(
    'svg',
    { width: '15', height: '15', 'aria-label': t.ariaLabel, role: 'img' },
    c.createElement(
      'g',
      {
        fill: 'none',
        stroke: 'currentColor',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '1.2',
      },
      t.children,
    ),
  )
}
function ka(t) {
  var e = t.translations,
    n = e === void 0 ? {} : e,
    r = n.selectText,
    o = r === void 0 ? 'to select' : r,
    i = n.selectKeyAriaLabel,
    a = i === void 0 ? 'Enter key' : i,
    u = n.navigateText,
    f = u === void 0 ? 'to navigate' : u,
    m = n.navigateUpKeyAriaLabel,
    b = m === void 0 ? 'Arrow up' : m,
    l = n.navigateDownKeyAriaLabel,
    v = l === void 0 ? 'Arrow down' : l,
    s = n.closeText,
    S = s === void 0 ? 'to close' : s,
    g = n.closeKeyAriaLabel,
    y = g === void 0 ? 'Escape key' : g,
    _ = n.searchByText,
    h = _ === void 0 ? 'Search by' : _
  return c.createElement(
    c.Fragment,
    null,
    c.createElement(
      'div',
      { className: 'DocSearch-Logo' },
      c.createElement(Ia, { translations: { searchByText: h } }),
    ),
    c.createElement(
      'ul',
      { className: 'DocSearch-Commands' },
      c.createElement(
        'li',
        null,
        c.createElement(
          'kbd',
          { className: 'DocSearch-Commands-Key' },
          c.createElement(
            fn,
            { ariaLabel: a },
            c.createElement('path', {
              d: 'M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3',
            }),
          ),
        ),
        c.createElement('span', { className: 'DocSearch-Label' }, o),
      ),
      c.createElement(
        'li',
        null,
        c.createElement(
          'kbd',
          { className: 'DocSearch-Commands-Key' },
          c.createElement(
            fn,
            { ariaLabel: v },
            c.createElement('path', { d: 'M7.5 3.5v8M10.5 8.5l-3 3-3-3' }),
          ),
        ),
        c.createElement(
          'kbd',
          { className: 'DocSearch-Commands-Key' },
          c.createElement(
            fn,
            { ariaLabel: b },
            c.createElement('path', { d: 'M7.5 11.5v-8M10.5 6.5l-3-3-3 3' }),
          ),
        ),
        c.createElement('span', { className: 'DocSearch-Label' }, f),
      ),
      c.createElement(
        'li',
        null,
        c.createElement(
          'kbd',
          { className: 'DocSearch-Commands-Key' },
          c.createElement(
            fn,
            { ariaLabel: y },
            c.createElement('path', {
              d: 'M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956',
            }),
          ),
        ),
        c.createElement('span', { className: 'DocSearch-Label' }, S),
      ),
    ),
  )
}
function Da(t) {
  var e = t.hit,
    n = t.children
  return c.createElement('a', { href: e.url }, n)
}
function Ca() {
  return c.createElement(
    'svg',
    { viewBox: '0 0 38 38', stroke: 'currentColor', strokeOpacity: '.5' },
    c.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd' },
      c.createElement(
        'g',
        { transform: 'translate(1 1)', strokeWidth: '2' },
        c.createElement('circle', {
          strokeOpacity: '.3',
          cx: '18',
          cy: '18',
          r: '18',
        }),
        c.createElement(
          'path',
          { d: 'M36 18c0-9.94-8.06-18-18-18' },
          c.createElement('animateTransform', {
            attributeName: 'transform',
            type: 'rotate',
            from: '0 18 18',
            to: '360 18 18',
            dur: '1s',
            repeatCount: 'indefinite',
          }),
        ),
      ),
    ),
  )
}
function xa() {
  return c.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    c.createElement(
      'g',
      {
        stroke: 'currentColor',
        fill: 'none',
        fillRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      c.createElement('path', {
        d: 'M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0',
      }),
      c.createElement('path', {
        d: 'M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13',
      }),
    ),
  )
}
function Gn() {
  return c.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    c.createElement('path', {
      d: 'M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
  )
}
function Aa() {
  return c.createElement(
    'svg',
    {
      className: 'DocSearch-Hit-Select-Icon',
      width: '20',
      height: '20',
      viewBox: '0 0 20 20',
    },
    c.createElement(
      'g',
      {
        stroke: 'currentColor',
        fill: 'none',
        fillRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      c.createElement('path', { d: 'M18 3v4c0 2-2 4-4 4H2' }),
      c.createElement('path', { d: 'M8 17l-6-6 6-6' }),
    ),
  )
}
var Na = function () {
  return c.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    c.createElement('path', {
      d: 'M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinejoin: 'round',
    }),
  )
}
function Ta(t) {
  switch (t.type) {
    case 'lvl1':
      return c.createElement(Na, null)
    case 'content':
      return c.createElement(La, null)
    default:
      return c.createElement(Ra, null)
  }
}
function Ra() {
  return c.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    c.createElement('path', {
      d: 'M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
  )
}
function La() {
  return c.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    c.createElement('path', {
      d: 'M17 5H3h14zm0 5H3h14zm0 5H3h14z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinejoin: 'round',
    }),
  )
}
function mo() {
  return c.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    c.createElement('path', {
      d: 'M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinejoin: 'round',
    }),
  )
}
function qa() {
  return c.createElement(
    'svg',
    {
      width: '40',
      height: '40',
      viewBox: '0 0 20 20',
      fill: 'none',
      fillRule: 'evenodd',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    c.createElement('path', {
      d: 'M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0',
    }),
  )
}
function Ma() {
  return c.createElement(
    'svg',
    {
      width: '40',
      height: '40',
      viewBox: '0 0 20 20',
      fill: 'none',
      fillRule: 'evenodd',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    c.createElement('path', {
      d: 'M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2',
    }),
  )
}
function Ha(t) {
  var e = t.translations,
    n = e === void 0 ? {} : e,
    r = n.titleText,
    o = r === void 0 ? 'Unable to fetch results' : r,
    i = n.helpText,
    a = i === void 0 ? 'You might want to check your network connection.' : i
  return c.createElement(
    'div',
    { className: 'DocSearch-ErrorScreen' },
    c.createElement(
      'div',
      { className: 'DocSearch-Screen-Icon' },
      c.createElement(qa, null),
    ),
    c.createElement('p', { className: 'DocSearch-Title' }, o),
    c.createElement('p', { className: 'DocSearch-Help' }, a),
  )
}
var Ua = ['translations']
function Fa(t) {
  var e = t.translations,
    n = e === void 0 ? {} : e,
    r = xt(t, Ua),
    o = n.noResultsText,
    i = o === void 0 ? 'No results for' : o,
    a = n.suggestedQueryText,
    u = a === void 0 ? 'Try searching for' : a,
    f = n.reportMissingResultsText,
    m = f === void 0 ? 'Believe this query should return results?' : f,
    b = n.reportMissingResultsLinkText,
    l = b === void 0 ? 'Let us know.' : b,
    v = r.state.context.searchSuggestions
  return c.createElement(
    'div',
    { className: 'DocSearch-NoResults' },
    c.createElement(
      'div',
      { className: 'DocSearch-Screen-Icon' },
      c.createElement(Ma, null),
    ),
    c.createElement(
      'p',
      { className: 'DocSearch-Title' },
      i,
      ' "',
      c.createElement('strong', null, r.state.query),
      '"',
    ),
    v &&
      v.length > 0 &&
      c.createElement(
        'div',
        { className: 'DocSearch-NoResults-Prefill-List' },
        c.createElement('p', { className: 'DocSearch-Help' }, u, ':'),
        c.createElement(
          'ul',
          null,
          v.slice(0, 3).reduce(function (s, S) {
            return [].concat(je(s), [
              c.createElement(
                'li',
                { key: S },
                c.createElement(
                  'button',
                  {
                    className: 'DocSearch-Prefill',
                    key: S,
                    type: 'button',
                    onClick: function () {
                      r.setQuery(S.toLowerCase() + ' '),
                        r.refresh(),
                        r.inputRef.current.focus()
                    },
                  },
                  S,
                ),
              ),
            ])
          }, []),
        ),
      ),
    r.getMissingResultsUrl &&
      c.createElement(
        'p',
        { className: 'DocSearch-Help' },
        ''.concat(m, ' '),
        c.createElement(
          'a',
          {
            href: r.getMissingResultsUrl({ query: r.state.query }),
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          l,
        ),
      ),
  )
}
var Ba = ['hit', 'attribute', 'tagName']
function po(t, e) {
  return e.split('.').reduce(function (n, r) {
    return n != null && n[r] ? n[r] : null
  }, t)
}
function ie(t) {
  var e = t.hit,
    n = t.attribute,
    r = t.tagName
  return Dt(
    r === void 0 ? 'span' : r,
    B(
      B({}, xt(t, Ba)),
      {},
      {
        dangerouslySetInnerHTML: {
          __html: po(e, '_snippetResult.'.concat(n, '.value')) || po(e, n),
        },
      },
    ),
  )
}
function Yn(t) {
  return t.collection && t.collection.items.length !== 0
    ? c.createElement(
        'section',
        { className: 'DocSearch-Hits' },
        c.createElement('div', { className: 'DocSearch-Hit-source' }, t.title),
        c.createElement(
          'ul',
          t.getListProps(),
          t.collection.items.map(function (e, n) {
            return c.createElement(
              Va,
              lt(
                { key: [t.title, e.objectID].join(':'), item: e, index: n },
                t,
              ),
            )
          }),
        ),
      )
    : null
}
function Va(t) {
  var e = t.item,
    n = t.index,
    r = t.renderIcon,
    o = t.renderAction,
    i = t.getItemProps,
    a = t.onItemClick,
    u = t.collection,
    f = t.hitComponent,
    m = ht(c.useState(!1), 2),
    b = m[0],
    l = m[1],
    v = ht(c.useState(!1), 2),
    s = v[0],
    S = v[1],
    g = c.useRef(null),
    y = f
  return c.createElement(
    'li',
    lt(
      {
        className: [
          'DocSearch-Hit',
          e.__docsearch_parent && 'DocSearch-Hit--Child',
          b && 'DocSearch-Hit--deleting',
          s && 'DocSearch-Hit--favoriting',
        ]
          .filter(Boolean)
          .join(' '),
        onTransitionEnd: function () {
          g.current && g.current()
        },
      },
      i({
        item: e,
        source: u.source,
        onClick: function (_) {
          a(e, _)
        },
      }),
    ),
    c.createElement(
      y,
      { hit: e },
      c.createElement(
        'div',
        { className: 'DocSearch-Hit-Container' },
        r({ item: e, index: n }),
        e.hierarchy[e.type] &&
          e.type === 'lvl1' &&
          c.createElement(
            'div',
            { className: 'DocSearch-Hit-content-wrapper' },
            c.createElement(ie, {
              className: 'DocSearch-Hit-title',
              hit: e,
              attribute: 'hierarchy.lvl1',
            }),
            e.content &&
              c.createElement(ie, {
                className: 'DocSearch-Hit-path',
                hit: e,
                attribute: 'content',
              }),
          ),
        e.hierarchy[e.type] &&
          (e.type === 'lvl2' ||
            e.type === 'lvl3' ||
            e.type === 'lvl4' ||
            e.type === 'lvl5' ||
            e.type === 'lvl6') &&
          c.createElement(
            'div',
            { className: 'DocSearch-Hit-content-wrapper' },
            c.createElement(ie, {
              className: 'DocSearch-Hit-title',
              hit: e,
              attribute: 'hierarchy.'.concat(e.type),
            }),
            c.createElement(ie, {
              className: 'DocSearch-Hit-path',
              hit: e,
              attribute: 'hierarchy.lvl1',
            }),
          ),
        e.type === 'content' &&
          c.createElement(
            'div',
            { className: 'DocSearch-Hit-content-wrapper' },
            c.createElement(ie, {
              className: 'DocSearch-Hit-title',
              hit: e,
              attribute: 'content',
            }),
            c.createElement(ie, {
              className: 'DocSearch-Hit-path',
              hit: e,
              attribute: 'hierarchy.lvl1',
            }),
          ),
        o({
          item: e,
          runDeleteTransition: function (_) {
            l(!0), (g.current = _)
          },
          runFavoriteTransition: function (_) {
            S(!0), (g.current = _)
          },
        }),
      ),
    ),
  )
}
function vo(t, e, n) {
  return t.reduce(function (r, o) {
    var i = e(o)
    return (
      r.hasOwnProperty(i) || (r[i] = []),
      r[i].length < (n || 5) && r[i].push(o),
      r
    )
  }, {})
}
function ho(t) {
  return t
}
function mn(t) {
  return t.button === 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey
}
function Ka() {}
var ai = /(<mark>|<\/mark>)/g,
  Wa = RegExp(ai.source)
function ci(t) {
  var e,
    n,
    r = t
  if (!r.__docsearch_parent && !t._highlightResult) return t.hierarchy.lvl0
  var o = r.__docsearch_parent
    ? (e = r.__docsearch_parent) === null ||
      e === void 0 ||
      (e = e._highlightResult) === null ||
      e === void 0 ||
      (e = e.hierarchy) === null ||
      e === void 0
      ? void 0
      : e.lvl0
    : (n = t._highlightResult) === null ||
        n === void 0 ||
        (n = n.hierarchy) === null ||
        n === void 0
      ? void 0
      : n.lvl0
  return o
    ? o.value && Wa.test(o.value)
      ? o.value.replace(ai, '')
      : o.value
    : t.hierarchy.lvl0
}
function za(t) {
  return c.createElement(
    'div',
    { className: 'DocSearch-Dropdown-Container' },
    t.state.collections.map(function (e) {
      if (e.items.length === 0) return null
      var n = ci(e.items[0])
      return c.createElement(
        Yn,
        lt({}, t, {
          key: e.source.sourceId,
          title: n,
          collection: e,
          renderIcon: function (r) {
            var o,
              i = r.item,
              a = r.index
            return c.createElement(
              c.Fragment,
              null,
              i.__docsearch_parent &&
                c.createElement(
                  'svg',
                  { className: 'DocSearch-Hit-Tree', viewBox: '0 0 24 54' },
                  c.createElement(
                    'g',
                    {
                      stroke: 'currentColor',
                      fill: 'none',
                      fillRule: 'evenodd',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    },
                    i.__docsearch_parent !==
                      ((o = e.items[a + 1]) === null || o === void 0
                        ? void 0
                        : o.__docsearch_parent)
                      ? c.createElement('path', { d: 'M8 6v21M20 27H8.3' })
                      : c.createElement('path', { d: 'M8 6v42M20 27H8.3' }),
                  ),
                ),
              c.createElement(
                'div',
                { className: 'DocSearch-Hit-icon' },
                c.createElement(Ta, { type: i.type }),
              ),
            )
          },
          renderAction: function () {
            return c.createElement(
              'div',
              { className: 'DocSearch-Hit-action' },
              c.createElement(Aa, null),
            )
          },
        }),
      )
    }),
    t.resultsFooterComponent &&
      c.createElement(
        'section',
        { className: 'DocSearch-HitsFooter' },
        c.createElement(t.resultsFooterComponent, { state: t.state }),
      ),
  )
}
var Ja = ['translations']
function Qa(t) {
  var e = t.translations,
    n = e === void 0 ? {} : e,
    r = xt(t, Ja),
    o = n.recentSearchesTitle,
    i = o === void 0 ? 'Recent' : o,
    a = n.noRecentSearchesText,
    u = a === void 0 ? 'No recent searches' : a,
    f = n.saveRecentSearchButtonTitle,
    m = f === void 0 ? 'Save this search' : f,
    b = n.removeRecentSearchButtonTitle,
    l = b === void 0 ? 'Remove this search from history' : b,
    v = n.favoriteSearchesTitle,
    s = v === void 0 ? 'Favorite' : v,
    S = n.removeFavoriteSearchButtonTitle,
    g = S === void 0 ? 'Remove this search from favorites' : S
  return r.state.status === 'idle' && r.hasCollections === !1
    ? r.disableUserPersonalization
      ? null
      : c.createElement(
          'div',
          { className: 'DocSearch-StartScreen' },
          c.createElement('p', { className: 'DocSearch-Help' }, u),
        )
    : r.hasCollections === !1
      ? null
      : c.createElement(
          'div',
          { className: 'DocSearch-Dropdown-Container' },
          c.createElement(
            Yn,
            lt({}, r, {
              title: i,
              collection: r.state.collections[0],
              renderIcon: function () {
                return c.createElement(
                  'div',
                  { className: 'DocSearch-Hit-icon' },
                  c.createElement(xa, null),
                )
              },
              renderAction: function (y) {
                var _ = y.item,
                  h = y.runFavoriteTransition,
                  p = y.runDeleteTransition
                return c.createElement(
                  c.Fragment,
                  null,
                  c.createElement(
                    'div',
                    { className: 'DocSearch-Hit-action' },
                    c.createElement(
                      'button',
                      {
                        className: 'DocSearch-Hit-action-button',
                        title: m,
                        type: 'submit',
                        onClick: function (d) {
                          d.preventDefault(),
                            d.stopPropagation(),
                            h(function () {
                              r.favoriteSearches.add(_),
                                r.recentSearches.remove(_),
                                r.refresh()
                            })
                        },
                      },
                      c.createElement(mo, null),
                    ),
                  ),
                  c.createElement(
                    'div',
                    { className: 'DocSearch-Hit-action' },
                    c.createElement(
                      'button',
                      {
                        className: 'DocSearch-Hit-action-button',
                        title: l,
                        type: 'submit',
                        onClick: function (d) {
                          d.preventDefault(),
                            d.stopPropagation(),
                            p(function () {
                              r.recentSearches.remove(_), r.refresh()
                            })
                        },
                      },
                      c.createElement(Gn, null),
                    ),
                  ),
                )
              },
            }),
          ),
          c.createElement(
            Yn,
            lt({}, r, {
              title: s,
              collection: r.state.collections[1],
              renderIcon: function () {
                return c.createElement(
                  'div',
                  { className: 'DocSearch-Hit-icon' },
                  c.createElement(mo, null),
                )
              },
              renderAction: function (y) {
                var _ = y.item,
                  h = y.runDeleteTransition
                return c.createElement(
                  'div',
                  { className: 'DocSearch-Hit-action' },
                  c.createElement(
                    'button',
                    {
                      className: 'DocSearch-Hit-action-button',
                      title: g,
                      type: 'submit',
                      onClick: function (p) {
                        p.preventDefault(),
                          p.stopPropagation(),
                          h(function () {
                            r.favoriteSearches.remove(_), r.refresh()
                          })
                      },
                    },
                    c.createElement(Gn, null),
                  ),
                )
              },
            }),
          ),
        )
}
var $a = ['translations'],
  Za = c.memo(
    function (t) {
      var e = t.translations,
        n = e === void 0 ? {} : e,
        r = xt(t, $a)
      if (r.state.status === 'error')
        return c.createElement(Ha, {
          translations: n == null ? void 0 : n.errorScreen,
        })
      var o = r.state.collections.some(function (i) {
        return i.items.length > 0
      })
      return r.state.query
        ? o === !1
          ? c.createElement(
              Fa,
              lt({}, r, {
                translations: n == null ? void 0 : n.noResultsScreen,
              }),
            )
          : c.createElement(za, r)
        : c.createElement(
            Qa,
            lt({}, r, {
              hasCollections: o,
              translations: n == null ? void 0 : n.startScreen,
            }),
          )
    },
    function (t, e) {
      return e.state.status === 'loading' || e.state.status === 'stalled'
    },
  ),
  Ga = ['translations']
function Ya(t) {
  var e = t.translations,
    n = e === void 0 ? {} : e,
    r = xt(t, Ga),
    o = n.resetButtonTitle,
    i = o === void 0 ? 'Clear the query' : o,
    a = n.resetButtonAriaLabel,
    u = a === void 0 ? 'Clear the query' : a,
    f = n.cancelButtonText,
    m = f === void 0 ? 'Cancel' : f,
    b = n.cancelButtonAriaLabel,
    l = b === void 0 ? 'Cancel' : b,
    v = n.searchInputLabel,
    s = v === void 0 ? 'Search' : v,
    S = r.getFormProps({ inputElement: r.inputRef.current }).onReset
  return (
    c.useEffect(
      function () {
        r.autoFocus && r.inputRef.current && r.inputRef.current.focus()
      },
      [r.autoFocus, r.inputRef],
    ),
    c.useEffect(
      function () {
        r.isFromSelection && r.inputRef.current && r.inputRef.current.select()
      },
      [r.isFromSelection, r.inputRef],
    ),
    c.createElement(
      c.Fragment,
      null,
      c.createElement(
        'form',
        {
          className: 'DocSearch-Form',
          onSubmit: function (g) {
            g.preventDefault()
          },
          onReset: S,
        },
        c.createElement(
          'label',
          lt({ className: 'DocSearch-MagnifierLabel' }, r.getLabelProps()),
          c.createElement(Yo, null),
          c.createElement(
            'span',
            { className: 'DocSearch-VisuallyHiddenForAccessibility' },
            s,
          ),
        ),
        c.createElement(
          'div',
          { className: 'DocSearch-LoadingIndicator' },
          c.createElement(Ca, null),
        ),
        c.createElement(
          'input',
          lt(
            { className: 'DocSearch-Input', ref: r.inputRef },
            r.getInputProps({
              inputElement: r.inputRef.current,
              autoFocus: r.autoFocus,
              maxLength: 64,
            }),
          ),
        ),
        c.createElement(
          'button',
          {
            type: 'reset',
            title: i,
            className: 'DocSearch-Reset',
            'aria-label': u,
            hidden: !r.state.query,
          },
          c.createElement(Gn, null),
        ),
      ),
      c.createElement(
        'button',
        {
          className: 'DocSearch-Cancel',
          type: 'reset',
          'aria-label': l,
          onClick: r.onClose,
        },
        m,
      ),
    )
  )
}
var Xa = ['_highlightResult', '_snippetResult']
function yo(t) {
  var e = t.key,
    n = t.limit,
    r = n === void 0 ? 5 : n,
    o = (function (a) {
      return (function () {
        var u = '__TEST_KEY__'
        try {
          return localStorage.setItem(u, ''), localStorage.removeItem(u), !0
        } catch {
          return !1
        }
      })() === !1
        ? {
            setItem: function () {},
            getItem: function () {
              return []
            },
          }
        : {
            setItem: function (u) {
              return window.localStorage.setItem(a, JSON.stringify(u))
            },
            getItem: function () {
              var u = window.localStorage.getItem(a)
              return u ? JSON.parse(u) : []
            },
          }
    })(e),
    i = o.getItem().slice(0, r)
  return {
    add: function (a) {
      var u = a
      u._highlightResult, u._snippetResult
      var f = xt(u, Xa),
        m = i.findIndex(function (b) {
          return b.objectID === f.objectID
        })
      m > -1 && i.splice(m, 1), i.unshift(f), (i = i.slice(0, r)), o.setItem(i)
    },
    remove: function (a) {
      ;(i = i.filter(function (u) {
        return u.objectID !== a.objectID
      })),
        o.setItem(i)
    },
    getAll: function () {
      return i
    },
  }
}
function tc(t) {
  var e,
    n = 'algolia-client-js-'.concat(t.key)
  function r() {
    return e === void 0 && (e = t.localStorage || window.localStorage), e
  }
  function o() {
    return JSON.parse(r().getItem(n) || '{}')
  }
  function i(a) {
    r().setItem(n, JSON.stringify(a))
  }
  return {
    get: function (a, u) {
      var f =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : {
              miss: function () {
                return Promise.resolve()
              },
            }
      return Promise.resolve()
        .then(function () {
          var m, b, l
          return (
            (m = t.timeToLive ? 1e3 * t.timeToLive : null),
            (b = o()),
            i(
              (l = Object.fromEntries(
                Object.entries(b).filter(function (v) {
                  return ht(v, 2)[1].timestamp !== void 0
                }),
              )),
            ),
            m &&
              i(
                Object.fromEntries(
                  Object.entries(l).filter(function (v) {
                    var s = ht(v, 2)[1],
                      S = new Date().getTime()
                    return !(s.timestamp + m < S)
                  }),
                ),
              ),
            o()[JSON.stringify(a)]
          )
        })
        .then(function (m) {
          return Promise.all([m ? m.value : u(), m !== void 0])
        })
        .then(function (m) {
          var b = ht(m, 2),
            l = b[0],
            v = b[1]
          return Promise.all([l, v || f.miss(l)])
        })
        .then(function (m) {
          return ht(m, 1)[0]
        })
    },
    set: function (a, u) {
      return Promise.resolve().then(function () {
        var f = o()
        return (
          (f[JSON.stringify(a)] = {
            timestamp: new Date().getTime(),
            value: u,
          }),
          r().setItem(n, JSON.stringify(f)),
          u
        )
      })
    },
    delete: function (a) {
      return Promise.resolve().then(function () {
        var u = o()
        delete u[JSON.stringify(a)], r().setItem(n, JSON.stringify(u))
      })
    },
    clear: function () {
      return Promise.resolve().then(function () {
        r().removeItem(n)
      })
    },
  }
}
function we(t) {
  var e = je(t.caches),
    n = e.shift()
  return n === void 0
    ? {
        get: function (r, o) {
          var i =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : {
                  miss: function () {
                    return Promise.resolve()
                  },
                }
          return o()
            .then(function (a) {
              return Promise.all([a, i.miss(a)])
            })
            .then(function (a) {
              return ht(a, 1)[0]
            })
        },
        set: function (r, o) {
          return Promise.resolve(o)
        },
        delete: function (r) {
          return Promise.resolve()
        },
        clear: function () {
          return Promise.resolve()
        },
      }
    : {
        get: function (r, o) {
          var i =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : {
                  miss: function () {
                    return Promise.resolve()
                  },
                }
          return n.get(r, o, i).catch(function () {
            return we({ caches: e }).get(r, o, i)
          })
        },
        set: function (r, o) {
          return n.set(r, o).catch(function () {
            return we({ caches: e }).set(r, o)
          })
        },
        delete: function (r) {
          return n.delete(r).catch(function () {
            return we({ caches: e }).delete(r)
          })
        },
        clear: function () {
          return n.clear().catch(function () {
            return we({ caches: e }).clear()
          })
        },
      }
}
function Hn() {
  var t =
      arguments.length > 0 && arguments[0] !== void 0
        ? arguments[0]
        : { serializable: !0 },
    e = {}
  return {
    get: function (n, r) {
      var o =
          arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : {
                miss: function () {
                  return Promise.resolve()
                },
              },
        i = JSON.stringify(n)
      if (i in e)
        return Promise.resolve(t.serializable ? JSON.parse(e[i]) : e[i])
      var a = r()
      return a
        .then(function (u) {
          return o.miss(u)
        })
        .then(function () {
          return a
        })
    },
    set: function (n, r) {
      return (
        (e[JSON.stringify(n)] = t.serializable ? JSON.stringify(r) : r),
        Promise.resolve(r)
      )
    },
    delete: function (n) {
      return delete e[JSON.stringify(n)], Promise.resolve()
    },
    clear: function () {
      return (e = {}), Promise.resolve()
    },
  }
}
function ec(t) {
  var e = t.algoliaAgents,
    n = t.client,
    r = t.version,
    o = (function (i) {
      var a = {
        value: 'Algolia for JavaScript ('.concat(i, ')'),
        add: function (u) {
          var f = '; '
            .concat(u.segment)
            .concat(u.version !== void 0 ? ' ('.concat(u.version, ')') : '')
          return (
            a.value.indexOf(f) === -1 &&
              (a.value = ''.concat(a.value).concat(f)),
            a
          )
        },
      }
      return a
    })(r).add({ segment: n, version: r })
  return (
    e.forEach(function (i) {
      return o.add(i)
    }),
    o
  )
}
var _o = 12e4
function go(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'up',
    n = Date.now()
  return B(
    B({}, t),
    {},
    {
      status: e,
      lastUpdate: n,
      isUp: function () {
        return e === 'up' || Date.now() - n > _o
      },
      isTimedOut: function () {
        return e === 'timed out' && Date.now() - n <= _o
      },
    },
  )
}
var ui = (function () {
    function t(e, n) {
      var r
      return (
        me(this, t),
        ve((r = fe(this, t, [e])), 'name', 'AlgoliaError'),
        n && (r.name = n),
        r
      )
    }
    return he(t, $n(Error)), pe(t)
  })(),
  li = (function () {
    function t(e, n, r) {
      var o
      return (
        me(this, t),
        ve((o = fe(this, t, [e, r])), 'stackTrace', void 0),
        (o.stackTrace = n),
        o
      )
    }
    return he(t, ui), pe(t)
  })(),
  nc = (function () {
    function t(e) {
      return (
        me(this, t),
        fe(this, t, [
          'Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support.',
          e,
          'RetryError',
        ])
      )
    }
    return he(t, li), pe(t)
  })(),
  Xn = (function () {
    function t(e, n, r) {
      var o,
        i =
          arguments.length > 3 && arguments[3] !== void 0
            ? arguments[3]
            : 'ApiError'
      return (
        me(this, t),
        ve((o = fe(this, t, [e, r, i])), 'status', void 0),
        (o.status = n),
        o
      )
    }
    return he(t, li), pe(t)
  })(),
  rc = (function () {
    function t(e, n) {
      var r
      return (
        me(this, t),
        ve((r = fe(this, t, [e, 'DeserializationError'])), 'response', void 0),
        (r.response = n),
        r
      )
    }
    return he(t, ui), pe(t)
  })(),
  oc = (function () {
    function t(e, n, r, o) {
      var i
      return (
        me(this, t),
        ve((i = fe(this, t, [e, n, o, 'DetailedApiError'])), 'error', void 0),
        (i.error = r),
        i
      )
    }
    return he(t, Xn), pe(t)
  })()
function ic(t, e, n) {
  var r,
    o =
      ((r = n),
      Object.keys(r)
        .filter(function (a) {
          return r[a] !== void 0
        })
        .sort()
        .map(function (a) {
          return ''
            .concat(a, '=')
            .concat(
              encodeURIComponent(
                Object.prototype.toString.call(r[a]) === '[object Array]'
                  ? r[a].join(',')
                  : r[a],
              ).replace(/\+/g, '%20'),
            )
        })
        .join('&')),
    i = ''
      .concat(t.protocol, '://')
      .concat(t.url)
      .concat(t.port ? ':'.concat(t.port) : '', '/')
      .concat(e.charAt(0) === '/' ? e.substring(1) : e)
  return o.length && (i += '?'.concat(o)), i
}
function ac(t, e) {
  if (t.method !== 'GET' && (t.data !== void 0 || e.data !== void 0)) {
    var n = Array.isArray(t.data) ? t.data : B(B({}, t.data), e.data)
    return JSON.stringify(n)
  }
}
function cc(t, e, n) {
  var r = B(B(B({ Accept: 'application/json' }, t), e), n),
    o = {}
  return (
    Object.keys(r).forEach(function (i) {
      var a = r[i]
      o[i.toLowerCase()] = a
    }),
    o
  )
}
function uc(t) {
  try {
    return JSON.parse(t.content)
  } catch (e) {
    throw new rc(e.message, t)
  }
}
function lc(t, e) {
  var n = t.content,
    r = t.status
  try {
    var o = JSON.parse(n)
    return 'error' in o
      ? new oc(o.message, r, o.error, e)
      : new Xn(o.message, r, e)
  } catch {}
  return new Xn(n, r, e)
}
function sc(t) {
  return t.map(function (e) {
    return si(e)
  })
}
function si(t) {
  var e = t.request.headers['x-algolia-api-key']
    ? { 'x-algolia-api-key': '*****' }
    : {}
  return B(
    B({}, t),
    {},
    {
      request: B(
        B({}, t.request),
        {},
        { headers: B(B({}, t.request.headers), e) },
      ),
    },
  )
}
var fc = ['appId', 'apiKey', 'authMode', 'algoliaAgents'],
  mc = ['params'],
  bo = '5.12.0'
function pc(t) {
  return [
    {
      url: ''.concat(t, '-dsn.algolia.net'),
      accept: 'read',
      protocol: 'https',
    },
    { url: ''.concat(t, '.algolia.net'), accept: 'write', protocol: 'https' },
  ].concat(
    (function (e) {
      for (var n = e, r = e.length - 1; r > 0; r--) {
        var o = Math.floor(Math.random() * (r + 1)),
          i = e[r]
        ;(n[r] = e[o]), (n[o] = i)
      }
      return n
    })([
      {
        url: ''.concat(t, '-1.algolianet.com'),
        accept: 'readWrite',
        protocol: 'https',
      },
      {
        url: ''.concat(t, '-2.algolianet.com'),
        accept: 'readWrite',
        protocol: 'https',
      },
      {
        url: ''.concat(t, '-3.algolianet.com'),
        accept: 'readWrite',
        protocol: 'https',
      },
    ]),
  )
}
var tr = '3.8.0',
  vc = ['footer', 'searchBox']
function hc(t) {
  var e = t.appId,
    n = t.apiKey,
    r = t.indexName,
    o = t.placeholder,
    i = o === void 0 ? 'Search docs' : o,
    a = t.searchParameters,
    u = t.maxResultsPerGroup,
    f = t.onClose,
    m = f === void 0 ? Ka : f,
    b = t.transformItems,
    l = b === void 0 ? ho : b,
    v = t.hitComponent,
    s = v === void 0 ? Da : v,
    S = t.resultsFooterComponent,
    g =
      S === void 0
        ? function () {
            return null
          }
        : S,
    y = t.navigator,
    _ = t.initialScrollY,
    h = _ === void 0 ? 0 : _,
    p = t.transformSearchClient,
    d = p === void 0 ? ho : p,
    P = t.disableUserPersonalization,
    E = P !== void 0 && P,
    C = t.initialQuery,
    N = C === void 0 ? '' : C,
    I = t.translations,
    x = I === void 0 ? {} : I,
    k = t.getMissingResultsUrl,
    U = t.insights,
    z = U !== void 0 && U,
    q = x.footer,
    ot = x.searchBox,
    O = xt(x, vc),
    w = ht(
      c.useState({
        query: '',
        collections: [],
        completion: null,
        context: {},
        isOpen: !1,
        activeItemId: null,
        status: 'idle',
      }),
      2,
    ),
    j = w[0],
    R = w[1],
    D = c.useRef(null),
    L = c.useRef(null),
    W = c.useRef(null),
    K = c.useRef(null),
    J = c.useRef(null),
    G = c.useRef(10),
    st = c.useRef(
      typeof window < 'u' ? window.getSelection().toString().slice(0, 64) : '',
    ).current,
    tt = c.useRef(N || st).current,
    de = (function (F, Q, at) {
      return c.useMemo(
        function () {
          var mt = (function (dt, _t) {
            if (!dt || typeof dt != 'string')
              throw new Error('`appId` is missing.')
            if (!_t || typeof _t != 'string')
              throw new Error('`apiKey` is missing.')
            return (function (M) {
              var et = M.appId,
                X = M.apiKey,
                Pt = M.authMode,
                Mt = M.algoliaAgents,
                It = xt(M, fc),
                St = (function (T, $) {
                  var nt =
                      arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : 'WithinHeaders',
                    yt = {
                      'x-algolia-api-key': $,
                      'x-algolia-application-id': T,
                    }
                  return {
                    headers: function () {
                      return nt === 'WithinHeaders' ? yt : {}
                    },
                    queryParameters: function () {
                      return nt === 'WithinQueryParameters' ? yt : {}
                    },
                  }
                })(et, X, Pt),
                pt = (function (T) {
                  var $ = T.hosts,
                    nt = T.hostsCache,
                    yt = T.baseHeaders,
                    kt = T.logger,
                    Ht = T.baseQueryParameters,
                    Kt = T.algoliaAgent,
                    lr = T.timeouts,
                    sr = T.requester,
                    ye = T.requestsCache,
                    bn = T.responsesCache
                  function mi(gt) {
                    return fr.apply(this, arguments)
                  }
                  function fr() {
                    return (fr = An(
                      Zt().mark(function gt(ct) {
                        var rt, At, ut, vt, Ut
                        return Zt().wrap(function (Nt) {
                          for (;;)
                            switch ((Nt.prev = Nt.next)) {
                              case 0:
                                return (
                                  (Nt.next = 2),
                                  Promise.all(
                                    ct.map(function (ft) {
                                      return nt.get(ft, function () {
                                        return Promise.resolve(go(ft))
                                      })
                                    }),
                                  )
                                )
                              case 2:
                                return (
                                  (rt = Nt.sent),
                                  (At = rt.filter(function (ft) {
                                    return ft.isUp()
                                  })),
                                  (ut = rt.filter(function (ft) {
                                    return ft.isTimedOut()
                                  })),
                                  (vt = [].concat(je(At), je(ut))),
                                  (Ut = vt.length > 0 ? vt : ct),
                                  Nt.abrupt('return', {
                                    hosts: Ut,
                                    getTimeout: function (ft, te) {
                                      return (
                                        (ut.length === 0 && ft === 0
                                          ? 1
                                          : ut.length + 3 + ft) * te
                                      )
                                    },
                                  })
                                )
                              case 8:
                              case 'end':
                                return Nt.stop()
                            }
                        }, gt)
                      }),
                    )).apply(this, arguments)
                  }
                  function mr(gt, ct) {
                    return Sn.apply(this, arguments)
                  }
                  function Sn() {
                    return (
                      (Sn = An(
                        Zt().mark(function gt(ct, rt) {
                          var At,
                            ut,
                            vt,
                            Ut,
                            Nt,
                            ft,
                            te,
                            On,
                            Wt,
                            Ze,
                            wn,
                            pr,
                            En,
                            jn = arguments
                          return Zt().wrap(function (ee) {
                            for (;;)
                              switch ((ee.prev = ee.next)) {
                                case 0:
                                  if (
                                    ((At =
                                      !(jn.length > 2 && jn[2] !== void 0) ||
                                      jn[2]),
                                    (ut = []),
                                    (vt = ac(ct, rt)),
                                    (Ut = cc(yt, ct.headers, rt.headers)),
                                    (Nt =
                                      ct.method === 'GET'
                                        ? B(B({}, ct.data), rt.data)
                                        : {}),
                                    (ft = B(
                                      B(B({}, Ht), ct.queryParameters),
                                      Nt,
                                    )),
                                    Kt.value &&
                                      (ft['x-algolia-agent'] = Kt.value),
                                    rt && rt.queryParameters)
                                  )
                                    for (
                                      te = 0,
                                        On = Object.keys(rt.queryParameters);
                                      te < On.length;
                                      te++
                                    )
                                      (Wt = On[te]),
                                        rt.queryParameters[Wt] &&
                                        Object.prototype.toString.call(
                                          rt.queryParameters[Wt],
                                        ) !== '[object Object]'
                                          ? (ft[Wt] =
                                              rt.queryParameters[Wt].toString())
                                          : (ft[Wt] = rt.queryParameters[Wt])
                                  return (
                                    (Ze = 0),
                                    (wn = (function () {
                                      var _e = An(
                                        Zt().mark(function vr(Ge, Pn) {
                                          var ge, Ye, In, kn, Ft, hr
                                          return Zt().wrap(function (Ot) {
                                            for (;;)
                                              switch ((Ot.prev = Ot.next)) {
                                                case 0:
                                                  if (
                                                    (ge = Ge.pop()) !== void 0
                                                  ) {
                                                    Ot.next = 3
                                                    break
                                                  }
                                                  throw new nc(sc(ut))
                                                case 3:
                                                  return (
                                                    (Ye = B(
                                                      B({}, lr),
                                                      rt.timeouts,
                                                    )),
                                                    (In = {
                                                      data: vt,
                                                      headers: Ut,
                                                      method: ct.method,
                                                      url: ic(ge, ct.path, ft),
                                                      connectTimeout: Pn(
                                                        Ze,
                                                        Ye.connect,
                                                      ),
                                                      responseTimeout: Pn(
                                                        Ze,
                                                        At ? Ye.read : Ye.write,
                                                      ),
                                                    }),
                                                    (kn = function (tn) {
                                                      var yr = {
                                                        request: In,
                                                        response: tn,
                                                        host: ge,
                                                        triesLeft: Ge.length,
                                                      }
                                                      return ut.push(yr), yr
                                                    }),
                                                    (Ot.next = 8),
                                                    sr.send(In)
                                                  )
                                                case 8:
                                                  if (
                                                    ((Dn = (dr = Ft = Ot.sent)
                                                      .isTimedOut),
                                                    (Xe = dr.status),
                                                    !(
                                                      Dn ||
                                                      (function (tn) {
                                                        return (
                                                          !tn.isTimedOut &&
                                                          !~~tn.status
                                                        )
                                                      })({
                                                        isTimedOut: Dn,
                                                        status: Xe,
                                                      }) ||
                                                      (~~(Xe / 100) != 2 &&
                                                        ~~(Xe / 100) != 4)
                                                    ))
                                                  ) {
                                                    Ot.next = 16
                                                    break
                                                  }
                                                  return (
                                                    (hr = kn(Ft)),
                                                    Ft.isTimedOut && Ze++,
                                                    kt.info(
                                                      'Retryable failure',
                                                      si(hr),
                                                    ),
                                                    (Ot.next = 15),
                                                    nt.set(
                                                      ge,
                                                      go(
                                                        ge,
                                                        Ft.isTimedOut
                                                          ? 'timed out'
                                                          : 'down',
                                                      ),
                                                    )
                                                  )
                                                case 15:
                                                  return Ot.abrupt(
                                                    'return',
                                                    wn(Ge, Pn),
                                                  )
                                                case 16:
                                                  if (
                                                    ~~(Ft.status / 100) != 2
                                                  ) {
                                                    Ot.next = 18
                                                    break
                                                  }
                                                  return Ot.abrupt(
                                                    'return',
                                                    uc(Ft),
                                                  )
                                                case 18:
                                                  throw (kn(Ft), lc(Ft, ut))
                                                case 20:
                                                case 'end':
                                                  return Ot.stop()
                                              }
                                            var dr, Dn, Xe
                                          }, vr)
                                        }),
                                      )
                                      return function (vr, Ge) {
                                        return _e.apply(this, arguments)
                                      }
                                    })()),
                                    (pr = $.filter(function (_e) {
                                      return (
                                        _e.accept === 'readWrite' ||
                                        (At
                                          ? _e.accept === 'read'
                                          : _e.accept === 'write')
                                      )
                                    })),
                                    (ee.next = 13),
                                    mi(pr)
                                  )
                                case 13:
                                  return (
                                    (En = ee.sent),
                                    ee.abrupt(
                                      'return',
                                      wn(je(En.hosts).reverse(), En.getTimeout),
                                    )
                                  )
                                case 15:
                                case 'end':
                                  return ee.stop()
                              }
                          }, gt)
                        }),
                      )),
                      Sn.apply(this, arguments)
                    )
                  }
                  return {
                    hostsCache: nt,
                    requester: sr,
                    timeouts: lr,
                    logger: kt,
                    algoliaAgent: Kt,
                    baseHeaders: yt,
                    baseQueryParameters: Ht,
                    hosts: $,
                    request: function (gt) {
                      var ct =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : {},
                        rt = gt.useReadTransporter || gt.method === 'GET'
                      if (!rt) return mr(gt, ct, rt)
                      var At = function () {
                        return mr(gt, ct)
                      }
                      if ((ct.cacheable || gt.cacheable) !== !0) return At()
                      var ut = {
                        request: gt,
                        requestOptions: ct,
                        transporter: { queryParameters: Ht, headers: yt },
                      }
                      return bn.get(
                        ut,
                        function () {
                          return ye.get(ut, function () {
                            return ye
                              .set(ut, At())
                              .then(
                                function (vt) {
                                  return Promise.all([ye.delete(ut), vt])
                                },
                                function (vt) {
                                  return Promise.all([
                                    ye.delete(ut),
                                    Promise.reject(vt),
                                  ])
                                },
                              )
                              .then(function (vt) {
                                var Ut = ht(vt, 2)
                                return Ut[0], Ut[1]
                              })
                          })
                        },
                        {
                          miss: function (vt) {
                            return bn.set(ut, vt)
                          },
                        },
                      )
                    },
                    requestsCache: ye,
                    responsesCache: bn,
                  }
                })(
                  B(
                    B({ hosts: pc(et) }, It),
                    {},
                    {
                      algoliaAgent: ec({
                        algoliaAgents: Mt,
                        client: 'Lite',
                        version: bo,
                      }),
                      baseHeaders: B(
                        B({ 'content-type': 'text/plain' }, St.headers()),
                        It.baseHeaders,
                      ),
                      baseQueryParameters: B(
                        B({}, St.queryParameters()),
                        It.baseQueryParameters,
                      ),
                    },
                  ),
                )
              return {
                transporter: pt,
                appId: et,
                clearCache: function () {
                  return Promise.all([
                    pt.requestsCache.clear(),
                    pt.responsesCache.clear(),
                  ]).then(function () {})
                },
                get _ua() {
                  return pt.algoliaAgent.value
                },
                addAlgoliaAgent: function (T, $) {
                  pt.algoliaAgent.add({ segment: T, version: $ })
                },
                setClientApiKey: function (T) {
                  var $ = T.apiKey
                  Pt && Pt !== 'WithinHeaders'
                    ? (pt.baseQueryParameters['x-algolia-api-key'] = $)
                    : (pt.baseHeaders['x-algolia-api-key'] = $)
                },
                searchForHits: function (T, $) {
                  return this.search(T, $)
                },
                searchForFacets: function (T, $) {
                  return this.search(T, $)
                },
                customPost: function (T, $) {
                  var nt = T.path,
                    yt = T.parameters,
                    kt = T.body
                  if (!nt)
                    throw new Error(
                      'Parameter `path` is required when calling `customPost`.',
                    )
                  var Ht = {
                    method: 'POST',
                    path: '/{path}'.replace('{path}', nt),
                    queryParameters: yt || {},
                    headers: {},
                    data: kt || {},
                  }
                  return pt.request(Ht, $)
                },
                getRecommendations: function (T, $) {
                  if ((T && Array.isArray(T) && (T = { requests: T }), !T))
                    throw new Error(
                      'Parameter `getRecommendationsParams` is required when calling `getRecommendations`.',
                    )
                  if (!T.requests)
                    throw new Error(
                      'Parameter `getRecommendationsParams.requests` is required when calling `getRecommendations`.',
                    )
                  var nt = {
                    method: 'POST',
                    path: '/1/indexes/*/recommendations',
                    queryParameters: {},
                    headers: {},
                    data: T,
                    useReadTransporter: !0,
                    cacheable: !0,
                  }
                  return pt.request(nt, $)
                },
                search: function (T, $) {
                  if (T && Array.isArray(T)) {
                    var nt = {
                      requests: T.map(function (kt) {
                        var Ht = kt.params,
                          Kt = xt(kt, mc)
                        return Kt.type === 'facet'
                          ? B(B(B({}, Kt), Ht), {}, { type: 'facet' })
                          : B(
                              B(B({}, Kt), Ht),
                              {},
                              {
                                facet: void 0,
                                maxFacetHits: void 0,
                                facetQuery: void 0,
                              },
                            )
                      }),
                    }
                    T = nt
                  }
                  if (!T)
                    throw new Error(
                      'Parameter `searchMethodParams` is required when calling `search`.',
                    )
                  if (!T.requests)
                    throw new Error(
                      'Parameter `searchMethodParams.requests` is required when calling `search`.',
                    )
                  var yt = {
                    method: 'POST',
                    path: '/1/indexes/*/queries',
                    queryParameters: {},
                    headers: {},
                    data: T,
                    useReadTransporter: !0,
                    cacheable: !0,
                  }
                  return pt.request(yt, $)
                },
              }
            })(
              B(
                {
                  appId: dt,
                  apiKey: _t,
                  timeouts: { connect: 1e3, read: 2e3, write: 3e4 },
                  logger: {
                    debug: function (M, et) {
                      return Promise.resolve()
                    },
                    info: function (M, et) {
                      return Promise.resolve()
                    },
                    error: function (M, et) {
                      return Promise.resolve()
                    },
                  },
                  requester: {
                    send: function (M) {
                      return new Promise(function (et) {
                        var X = new XMLHttpRequest()
                        X.open(M.method, M.url, !0),
                          Object.keys(M.headers).forEach(function (St) {
                            return X.setRequestHeader(St, M.headers[St])
                          })
                        var Pt,
                          Mt = function (St, pt) {
                            return setTimeout(function () {
                              X.abort(),
                                et({ status: 0, content: pt, isTimedOut: !0 })
                            }, St)
                          },
                          It = Mt(M.connectTimeout, 'Connection timeout')
                        ;(X.onreadystatechange = function () {
                          X.readyState > X.OPENED &&
                            Pt === void 0 &&
                            (clearTimeout(It),
                            (Pt = Mt(M.responseTimeout, 'Socket timeout')))
                        }),
                          (X.onerror = function () {
                            X.status === 0 &&
                              (clearTimeout(It),
                              clearTimeout(Pt),
                              et({
                                content:
                                  X.responseText || 'Network request failed',
                                status: X.status,
                                isTimedOut: !1,
                              }))
                          }),
                          (X.onload = function () {
                            clearTimeout(It),
                              clearTimeout(Pt),
                              et({
                                content: X.responseText,
                                status: X.status,
                                isTimedOut: !1,
                              })
                          }),
                          X.send(M.data)
                      })
                    },
                  },
                  algoliaAgents: [{ segment: 'Browser' }],
                  authMode: 'WithinQueryParameters',
                  responsesCache: Hn(),
                  requestsCache: Hn({ serializable: !1 }),
                  hostsCache: we({
                    caches: [tc({ key: ''.concat(bo, '-').concat(dt) }), Hn()],
                  }),
                },
                void 0,
              ),
            )
          })(F, Q)
          return (
            mt.addAlgoliaAgent('docsearch', tr),
            /docsearch.js \(.*\)/.test(mt.transporter.algoliaAgent.value) ===
              !1 && mt.addAlgoliaAgent('docsearch-react', tr),
            at(mt)
          )
        },
        [F, Q, at],
      )
    })(e, n, d),
    Et = c.useRef(
      yo({ key: '__DOCSEARCH_FAVORITE_SEARCHES__'.concat(r), limit: 10 }),
    ).current,
    Vt = c.useRef(
      yo({
        key: '__DOCSEARCH_RECENT_SEARCHES__'.concat(r),
        limit: Et.getAll().length === 0 ? 7 : 4,
      }),
    ).current,
    jt = c.useCallback(
      function (F) {
        if (!E) {
          var Q = F.type === 'content' ? F.__docsearch_parent : F
          Q &&
            Et.getAll().findIndex(function (at) {
              return at.objectID === Q.objectID
            }) === -1 &&
            Vt.add(Q)
        }
      },
      [Et, Vt, E],
    ),
    Xt = c.useCallback(
      function (F) {
        if (j.context.algoliaInsightsPlugin && F.__autocomplete_id) {
          var Q = F,
            at = {
              eventName: 'Item Selected',
              index: Q.__autocomplete_indexName,
              items: [Q],
              positions: [F.__autocomplete_id],
              queryID: Q.__autocomplete_queryID,
            }
          j.context.algoliaInsightsPlugin.insights.clickedObjectIDsAfterSearch(
            at,
          )
        }
      },
      [j.context.algoliaInsightsPlugin],
    ),
    qt = c.useMemo(
      function () {
        return Pa({
          id: 'docsearch',
          defaultActiveItemId: 0,
          placeholder: i,
          openOnFocus: !0,
          initialState: { query: tt, context: { searchSuggestions: [] } },
          insights: z,
          navigator: y,
          onStateChange: function (F) {
            R(F.state)
          },
          getSources: function (F) {
            var Q = F.query,
              at = F.state,
              mt = F.setContext,
              dt = F.setStatus
            if (!Q)
              return E
                ? []
                : [
                    {
                      sourceId: 'recentSearches',
                      onSelect: function (M) {
                        var et = M.item,
                          X = M.event
                        jt(et), mn(X) || m()
                      },
                      getItemUrl: function (M) {
                        return M.item.url
                      },
                      getItems: function () {
                        return Vt.getAll()
                      },
                    },
                    {
                      sourceId: 'favoriteSearches',
                      onSelect: function (M) {
                        var et = M.item,
                          X = M.event
                        jt(et), mn(X) || m()
                      },
                      getItemUrl: function (M) {
                        return M.item.url
                      },
                      getItems: function () {
                        return Et.getAll()
                      },
                    },
                  ]
            var _t = !!z
            return de
              .search({
                requests: [
                  B(
                    {
                      query: Q,
                      indexName: r,
                      attributesToRetrieve: [
                        'hierarchy.lvl0',
                        'hierarchy.lvl1',
                        'hierarchy.lvl2',
                        'hierarchy.lvl3',
                        'hierarchy.lvl4',
                        'hierarchy.lvl5',
                        'hierarchy.lvl6',
                        'content',
                        'type',
                        'url',
                      ],
                      attributesToSnippet: [
                        'hierarchy.lvl1:'.concat(G.current),
                        'hierarchy.lvl2:'.concat(G.current),
                        'hierarchy.lvl3:'.concat(G.current),
                        'hierarchy.lvl4:'.concat(G.current),
                        'hierarchy.lvl5:'.concat(G.current),
                        'hierarchy.lvl6:'.concat(G.current),
                        'content:'.concat(G.current),
                      ],
                      snippetEllipsisText: '…',
                      highlightPreTag: '<mark>',
                      highlightPostTag: '</mark>',
                      hitsPerPage: 20,
                      clickAnalytics: _t,
                    },
                    a,
                  ),
                ],
              })
              .catch(function (M) {
                throw (M.name === 'RetryError' && dt('error'), M)
              })
              .then(function (M) {
                var et = M.results[0],
                  X = et.hits,
                  Pt = et.nbHits,
                  Mt = vo(
                    X,
                    function (St) {
                      return ci(St)
                    },
                    u,
                  )
                at.context.searchSuggestions.length < Object.keys(Mt).length &&
                  mt({ searchSuggestions: Object.keys(Mt) }),
                  mt({ nbHits: Pt })
                var It = {}
                return (
                  _t &&
                    (It = {
                      __autocomplete_indexName: r,
                      __autocomplete_queryID: et.queryID,
                      __autocomplete_algoliaCredentials: {
                        appId: e,
                        apiKey: n,
                      },
                    }),
                  Object.values(Mt).map(function (St, pt) {
                    return {
                      sourceId: 'hits'.concat(pt),
                      onSelect: function (T) {
                        var $ = T.item,
                          nt = T.event
                        jt($), mn(nt) || m()
                      },
                      getItemUrl: function (T) {
                        return T.item.url
                      },
                      getItems: function () {
                        return Object.values(
                          vo(
                            St,
                            function (T) {
                              return T.hierarchy.lvl1
                            },
                            u,
                          ),
                        )
                          .map(l)
                          .map(function (T) {
                            return T.map(function ($) {
                              var nt = null,
                                yt = T.find(function (kt) {
                                  return (
                                    kt.type === 'lvl1' &&
                                    kt.hierarchy.lvl1 === $.hierarchy.lvl1
                                  )
                                })
                              return (
                                $.type !== 'lvl1' && yt && (nt = yt),
                                B(B({}, $), {}, { __docsearch_parent: nt }, It)
                              )
                            })
                          })
                          .flat()
                      },
                    }
                  })
                )
              })
          },
        })
      },
      [r, a, u, de, m, Vt, Et, jt, tt, i, y, l, E, z, e, n],
    ),
    $e = qt.getEnvironmentProps,
    fi = qt.getRootProps,
    ur = qt.refresh
  return (
    (function (F) {
      var Q = F.getEnvironmentProps,
        at = F.panelElement,
        mt = F.formElement,
        dt = F.inputElement
      c.useEffect(
        function () {
          if (at && mt && dt) {
            var _t = Q({ panelElement: at, formElement: mt, inputElement: dt }),
              M = _t.onTouchStart,
              et = _t.onTouchMove
            return (
              window.addEventListener('touchstart', M),
              window.addEventListener('touchmove', et),
              function () {
                window.removeEventListener('touchstart', M),
                  window.removeEventListener('touchmove', et)
              }
            )
          }
        },
        [Q, at, mt, dt],
      )
    })({
      getEnvironmentProps: $e,
      panelElement: K.current,
      formElement: W.current,
      inputElement: J.current,
    }),
    (function (F) {
      var Q = F.container
      c.useEffect(
        function () {
          if (Q) {
            var at = Q.querySelectorAll(
                'a[href]:not([disabled]), button:not([disabled]), input:not([disabled])',
              ),
              mt = at[0],
              dt = at[at.length - 1]
            return (
              Q.addEventListener('keydown', _t),
              function () {
                Q.removeEventListener('keydown', _t)
              }
            )
          }
          function _t(M) {
            M.key === 'Tab' &&
              (M.shiftKey
                ? document.activeElement === mt &&
                  (M.preventDefault(), dt.focus())
                : document.activeElement === dt &&
                  (M.preventDefault(), mt.focus()))
          }
        },
        [Q],
      )
    })({ container: D.current }),
    c.useEffect(function () {
      return (
        document.body.classList.add('DocSearch--active'),
        function () {
          var F, Q
          document.body.classList.remove('DocSearch--active'),
            (F = (Q = window).scrollTo) === null ||
              F === void 0 ||
              F.call(Q, 0, h)
        }
      )
    }, []),
    c.useEffect(function () {
      window.matchMedia('(max-width: 768px)').matches && (G.current = 5)
    }, []),
    c.useEffect(
      function () {
        K.current && (K.current.scrollTop = 0)
      },
      [j.query],
    ),
    c.useEffect(
      function () {
        tt.length > 0 && (ur(), J.current && J.current.focus())
      },
      [tt, ur],
    ),
    c.useEffect(function () {
      function F() {
        if (L.current) {
          var Q = 0.01 * window.innerHeight
          L.current.style.setProperty('--docsearch-vh', ''.concat(Q, 'px'))
        }
      }
      return (
        F(),
        window.addEventListener('resize', F),
        function () {
          window.removeEventListener('resize', F)
        }
      )
    }, []),
    c.createElement(
      'div',
      lt({ ref: D }, fi({ 'aria-expanded': !0 }), {
        className: [
          'DocSearch',
          'DocSearch-Container',
          j.status === 'stalled' && 'DocSearch-Container--Stalled',
          j.status === 'error' && 'DocSearch-Container--Errored',
        ]
          .filter(Boolean)
          .join(' '),
        role: 'button',
        tabIndex: 0,
        onMouseDown: function (F) {
          F.target === F.currentTarget && m()
        },
      }),
      c.createElement(
        'div',
        { className: 'DocSearch-Modal', ref: L },
        c.createElement(
          'header',
          { className: 'DocSearch-SearchBar', ref: W },
          c.createElement(
            Ya,
            lt({}, qt, {
              state: j,
              autoFocus: tt.length === 0,
              inputRef: J,
              isFromSelection: !!tt && tt === st,
              translations: ot,
              onClose: m,
            }),
          ),
        ),
        c.createElement(
          'div',
          { className: 'DocSearch-Dropdown', ref: K },
          c.createElement(
            Za,
            lt({}, qt, {
              indexName: r,
              state: j,
              hitComponent: s,
              resultsFooterComponent: g,
              disableUserPersonalization: E,
              recentSearches: Vt,
              favoriteSearches: Et,
              inputRef: J,
              translations: O,
              getMissingResultsUrl: k,
              onItemClick: function (F, Q) {
                Xt(F), jt(F), mn(Q) || m()
              },
            }),
          ),
        ),
        c.createElement(
          'footer',
          { className: 'DocSearch-Footer' },
          c.createElement(ka, { translations: q }),
        ),
      ),
    )
  )
}
function dc(t) {
  var e,
    n,
    r = c.useRef(null),
    o = ht(c.useState(!1), 2),
    i = o[0],
    a = o[1],
    u = ht(c.useState((t == null ? void 0 : t.initialQuery) || void 0), 2),
    f = u[0],
    m = u[1],
    b = c.useCallback(
      function () {
        a(!0)
      },
      [a],
    ),
    l = c.useCallback(
      function () {
        a(!1), m(t == null ? void 0 : t.initialQuery)
      },
      [a, t.initialQuery],
    )
  return (
    (function (v) {
      var s = v.isOpen,
        S = v.onOpen,
        g = v.onClose,
        y = v.onInput,
        _ = v.searchButtonRef
      c.useEffect(
        function () {
          function h(p) {
            var d
            if (
              (p.code === 'Escape' && s) ||
              (((d = p.key) === null || d === void 0
                ? void 0
                : d.toLowerCase()) === 'k' &&
                (p.metaKey || p.ctrlKey)) ||
              (!(function (P) {
                var E = P.target,
                  C = E.tagName
                return (
                  E.isContentEditable ||
                  C === 'INPUT' ||
                  C === 'SELECT' ||
                  C === 'TEXTAREA'
                )
              })(p) &&
                p.key === '/' &&
                !s)
            )
              return (
                p.preventDefault(),
                void (s
                  ? g()
                  : document.body.classList.contains('DocSearch--active') ||
                    S())
              )
            _ &&
              _.current === document.activeElement &&
              y &&
              /[a-zA-Z0-9]/.test(String.fromCharCode(p.keyCode)) &&
              y(p)
          }
          return (
            window.addEventListener('keydown', h),
            function () {
              window.removeEventListener('keydown', h)
            }
          )
        },
        [s, S, g, y, _],
      )
    })({
      isOpen: i,
      onOpen: b,
      onClose: l,
      onInput: c.useCallback(
        function (v) {
          a(!0), m(v.key)
        },
        [a, m],
      ),
      searchButtonRef: r,
    }),
    c.createElement(
      c.Fragment,
      null,
      c.createElement(zi, {
        ref: r,
        translations:
          t == null || (e = t.translations) === null || e === void 0
            ? void 0
            : e.button,
        onClick: b,
      }),
      i &&
        Vo(
          c.createElement(
            hc,
            lt({}, t, {
              initialScrollY: window.scrollY,
              initialQuery: f,
              translations:
                t == null || (n = t.translations) === null || n === void 0
                  ? void 0
                  : n.modal,
              onClose: l,
            }),
          ),
          document.body,
        ),
    )
  )
}
function yc(t) {
  Wo(
    c.createElement(
      dc,
      Un({}, t, {
        transformSearchClient: function (e) {
          return (
            e.addAlgoliaAgent('docsearch.js', tr),
            t.transformSearchClient ? t.transformSearchClient(e) : e
          )
        },
      }),
    ),
    (function (e) {
      var n =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window
      return typeof e == 'string' ? n.document.querySelector(e) : e
    })(t.container, t.environment),
  )
}
const _c = { id: 'docsearch' },
  Sc = pi({
    __name: 'VPAlgoliaSearchBox',
    props: { algolia: {} },
    setup(t) {
      const e = t,
        n = vi(),
        r = hi(),
        { site: o, localeIndex: i, lang: a } = Si()
      di(u), yi(i, u)
      async function u() {
        var s, S
        await _i()
        const b = {
            ...e.algolia,
            ...((s = e.algolia.locales) == null ? void 0 : s[i.value]),
          },
          l =
            ((S = b.searchParameters) == null ? void 0 : S.facetFilters) ?? [],
          v = [
            ...(Array.isArray(l) ? l : [l]).filter(
              (g) => !g.startsWith('lang:'),
            ),
            `lang:${a.value}`,
          ]
        f({
          ...b,
          searchParameters: { ...b.searchParameters, facetFilters: v },
        })
      }
      function f(b) {
        const l = Object.assign({}, b, {
          container: '#docsearch',
          navigator: {
            navigate({ itemUrl: v }) {
              const { pathname: s } = new URL(window.location.origin + v)
              r.path === s
                ? window.location.assign(window.location.origin + v)
                : n.go(v)
            },
          },
          transformItems(v) {
            return v.map((s) => Object.assign({}, s, { url: m(s.url) }))
          },
          hitComponent({ hit: v, children: s }) {
            return {
              __v: null,
              type: 'a',
              ref: void 0,
              constructor: void 0,
              key: void 0,
              props: { href: v.url, children: s },
            }
          },
        })
        yc(l)
      }
      function m(b) {
        const { pathname: l, hash: v } = new URL(b, location.origin)
        return l.replace(/\.html$/, o.value.cleanUrls ? '' : '.html') + v
      }
      return (b, l) => (gi(), bi('div', _c))
    },
  })
export { Sc as default }
