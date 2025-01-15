var yi = {};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const W = yi.NODE_ENV !== "production" ? Object.freeze({}) : {}, Nt = yi.NODE_ENV !== "production" ? Object.freeze([]) : [], Z = () => {
}, Hr = () => !1, qt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), pn = (e) => e.startsWith("onUpdate:"), J = Object.assign, po = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Lr = Object.prototype.hasOwnProperty, H = (e, t) => Lr.call(e, t), T = Array.isArray, ft = (e) => Dn(e) === "[object Map]", Oi = (e) => Dn(e) === "[object Set]", A = (e) => typeof e == "function", Y = (e) => typeof e == "string", it = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", ho = (e) => (q(e) || A(e)) && A(e.then) && A(e.catch), vi = Object.prototype.toString, Dn = (e) => vi.call(e), go = (e) => Dn(e).slice(8, -1), wi = (e) => Dn(e) === "[object Object]", mo = (e) => Y(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, It = /* @__PURE__ */ Ke(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ur = /* @__PURE__ */ Ke(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), xn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Br = /-(\w)/g, ve = xn(
  (e) => e.replace(Br, (t, n) => n ? n.toUpperCase() : "")
), Wr = /\B([A-Z])/g, tt = xn(
  (e) => e.replace(Wr, "-$1").toLowerCase()
), Vn = xn((e) => e.charAt(0).toUpperCase() + e.slice(1)), lt = xn(
  (e) => e ? `on${Vn(e)}` : ""
), ut = (e, t) => !Object.is(e, t), Ct = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, hn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Kr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Lo;
const Gt = () => Lo || (Lo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function _o(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], i = Y(o) ? Jr(o) : _o(o);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (Y(e) || q(e))
    return e;
}
const kr = /;(?![^(]*\))/g, qr = /:([^]+)/, Gr = /\/\*[^]*?\*\//g;
function Jr(e) {
  const t = {};
  return e.replace(Gr, "").split(kr).forEach((n) => {
    if (n) {
      const o = n.split(qr);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Eo(e) {
  let t = "";
  if (Y(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = Eo(e[n]);
      o && (t += o + " ");
    }
  else if (q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Yr = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", zr = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Qr = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Xr = /* @__PURE__ */ Ke(Yr), Zr = /* @__PURE__ */ Ke(zr), es = /* @__PURE__ */ Ke(Qr), ts = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ns = /* @__PURE__ */ Ke(ts);
function Di(e) {
  return !!e || e === "";
}
const xi = (e) => !!(e && e.__v_isRef === !0), Vi = (e) => Y(e) ? e : e == null ? "" : T(e) || q(e) && (e.toString === vi || !A(e.toString)) ? xi(e) ? Vi(e.value) : JSON.stringify(e, Ci, 2) : String(e), Ci = (e, t) => xi(t) ? Ci(e, t.value) : ft(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, i], r) => (n[Hn(o, r) + " =>"] = i, n),
    {}
  )
} : Oi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Hn(n))
} : it(t) ? Hn(t) : q(t) && !T(t) && !wi(t) ? String(t) : t, Hn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    it(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var G = {};
function xe(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let he;
class os {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = he, !t && he && (this.index = (he.scopes || (he.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = he;
      try {
        return he = this, t();
      } finally {
        he = n;
      }
    } else G.NODE_ENV !== "production" && xe("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    he = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    he = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function is() {
  return he;
}
let L;
const Ln = /* @__PURE__ */ new WeakSet();
class Si {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, he && he.active && he.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ln.has(this) && (Ln.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || $i(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Uo(this), Ai(this);
    const t = L, n = we;
    L = this, we = !0;
    try {
      return this.fn();
    } finally {
      G.NODE_ENV !== "production" && L !== this && xe(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Mi(this), L = t, we = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        yo(t);
      this.deps = this.depsTail = void 0, Uo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ln.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    zn(this) && this.run();
  }
  get dirty() {
    return zn(this);
  }
}
let Ti = 0, Pt, Rt;
function $i(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Rt, Rt = e;
    return;
  }
  e.next = Pt, Pt = e;
}
function No() {
  Ti++;
}
function bo() {
  if (--Ti > 0)
    return;
  if (Rt) {
    let t = Rt;
    for (Rt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Pt; ) {
    let t = Pt;
    for (Pt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ai(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Mi(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const i = o.prevDep;
    o.version === -1 ? (o === n && (n = i), yo(o), rs(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = i;
  }
  e.deps = t, e.depsTail = n;
}
function zn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ii(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ii(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Lt))
    return;
  e.globalVersion = Lt;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !zn(e)) {
    e.flags &= -3;
    return;
  }
  const n = L, o = we;
  L = e, we = !0;
  try {
    Ai(e);
    const i = e.fn(e._value);
    (t.version === 0 || ut(i, e._value)) && (e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    L = n, we = o, Mi(e), e.flags &= -3;
  }
}
function yo(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: i } = e;
  if (o && (o.nextSub = i, e.prevSub = void 0), i && (i.prevSub = o, e.nextSub = void 0), G.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      yo(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function rs(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let we = !0;
const Pi = [];
function ke() {
  Pi.push(we), we = !1;
}
function qe() {
  const e = Pi.pop();
  we = e === void 0 ? !0 : e;
}
function Uo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = L;
    L = void 0;
    try {
      t();
    } finally {
      L = n;
    }
  }
}
let Lt = 0;
class ss {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ri {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, G.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!L || !we || L === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== L)
      n = this.activeLink = new ss(L, this), L.deps ? (n.prevDep = L.depsTail, L.depsTail.nextDep = n, L.depsTail = n) : L.deps = L.depsTail = n, ji(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = L.depsTail, n.nextDep = void 0, L.depsTail.nextDep = n, L.depsTail = n, L.deps === n && (L.deps = o);
    }
    return G.NODE_ENV !== "production" && L.onTrack && L.onTrack(
      J(
        {
          effect: L
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Lt++, this.notify(t);
  }
  notify(t) {
    No();
    try {
      if (G.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            J(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      bo();
    }
  }
}
function ji(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        ji(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), G.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const gn = /* @__PURE__ */ new WeakMap(), at = Symbol(
  G.NODE_ENV !== "production" ? "Object iterate" : ""
), Qn = Symbol(
  G.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Ut = Symbol(
  G.NODE_ENV !== "production" ? "Array iterate" : ""
);
function X(e, t, n) {
  if (we && L) {
    let o = gn.get(e);
    o || gn.set(e, o = /* @__PURE__ */ new Map());
    let i = o.get(n);
    i || (o.set(n, i = new Ri()), i.map = o, i.key = n), G.NODE_ENV !== "production" ? i.track({
      target: e,
      type: t,
      key: n
    }) : i.track();
  }
}
function Ae(e, t, n, o, i, r) {
  const s = gn.get(e);
  if (!s) {
    Lt++;
    return;
  }
  const c = (u) => {
    u && (G.NODE_ENV !== "production" ? u.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: i,
      oldTarget: r
    }) : u.trigger());
  };
  if (No(), t === "clear")
    s.forEach(c);
  else {
    const u = T(e), h = u && mo(n);
    if (u && n === "length") {
      const p = Number(o);
      s.forEach((a, _) => {
        (_ === "length" || _ === Ut || !it(_) && _ >= p) && c(a);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && c(s.get(n)), h && c(s.get(Ut)), t) {
        case "add":
          u ? h && c(s.get("length")) : (c(s.get(at)), ft(e) && c(s.get(Qn)));
          break;
        case "delete":
          u || (c(s.get(at)), ft(e) && c(s.get(Qn)));
          break;
        case "set":
          ft(e) && c(s.get(at));
          break;
      }
  }
  bo();
}
function ls(e, t) {
  const n = gn.get(e);
  return n && n.get(t);
}
function _t(e) {
  const t = P(e);
  return t === e ? t : (X(t, "iterate", Ut), Ee(e) ? t : t.map(ge));
}
function Oo(e) {
  return X(e = P(e), "iterate", Ut), e;
}
const cs = {
  __proto__: null,
  [Symbol.iterator]() {
    return Un(this, Symbol.iterator, ge);
  },
  concat(...e) {
    return _t(this).concat(
      ...e.map((t) => T(t) ? _t(t) : t)
    );
  },
  entries() {
    return Un(this, "entries", (e) => (e[1] = ge(e[1]), e));
  },
  every(e, t) {
    return Fe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Fe(this, "filter", e, t, (n) => n.map(ge), arguments);
  },
  find(e, t) {
    return Fe(this, "find", e, t, ge, arguments);
  },
  findIndex(e, t) {
    return Fe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Fe(this, "findLast", e, t, ge, arguments);
  },
  findLastIndex(e, t) {
    return Fe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Fe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Bn(this, "includes", e);
  },
  indexOf(...e) {
    return Bn(this, "indexOf", e);
  },
  join(e) {
    return _t(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Bn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Fe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return St(this, "pop");
  },
  push(...e) {
    return St(this, "push", e);
  },
  reduce(e, ...t) {
    return Bo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Bo(this, "reduceRight", e, t);
  },
  shift() {
    return St(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Fe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return St(this, "splice", e);
  },
  toReversed() {
    return _t(this).toReversed();
  },
  toSorted(e) {
    return _t(this).toSorted(e);
  },
  toSpliced(...e) {
    return _t(this).toSpliced(...e);
  },
  unshift(...e) {
    return St(this, "unshift", e);
  },
  values() {
    return Un(this, "values", ge);
  }
};
function Un(e, t, n) {
  const o = Oo(e), i = o[t]();
  return o !== e && !Ee(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.value && (r.value = n(r.value)), r;
  }), i;
}
const fs = Array.prototype;
function Fe(e, t, n, o, i, r) {
  const s = Oo(e), c = s !== e && !Ee(e), u = s[t];
  if (u !== fs[t]) {
    const a = u.apply(e, r);
    return c ? ge(a) : a;
  }
  let h = n;
  s !== e && (c ? h = function(a, _) {
    return n.call(this, ge(a), _, e);
  } : n.length > 2 && (h = function(a, _) {
    return n.call(this, a, _, e);
  }));
  const p = u.call(s, h, o);
  return c && i ? i(p) : p;
}
function Bo(e, t, n, o) {
  const i = Oo(e);
  let r = n;
  return i !== e && (Ee(e) ? n.length > 3 && (r = function(s, c, u) {
    return n.call(this, s, c, u, e);
  }) : r = function(s, c, u) {
    return n.call(this, s, ge(c), u, e);
  }), i[t](r, ...o);
}
function Bn(e, t, n) {
  const o = P(e);
  X(o, "iterate", Ut);
  const i = o[t](...n);
  return (i === -1 || i === !1) && Bt(n[0]) ? (n[0] = P(n[0]), o[t](...n)) : i;
}
function St(e, t, n = []) {
  ke(), No();
  const o = P(e)[t].apply(e, n);
  return bo(), qe(), o;
}
const us = /* @__PURE__ */ Ke("__proto__,__v_isRef,__isVue"), Fi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(it)
);
function as(e) {
  it(e) || (e = String(e));
  const t = P(this);
  return X(t, "has", e), t.hasOwnProperty(e);
}
class Hi {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (i ? r ? ki : Ki : r ? Wi : Bi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const s = T(t);
    if (!i) {
      let u;
      if (s && (u = cs[n]))
        return u;
      if (n === "hasOwnProperty")
        return as;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Q(t) ? t : o
    );
    return (it(n) ? Fi.has(n) : us(n)) || (i || X(t, "get", n), r) ? c : Q(c) ? s && mo(n) ? c : c.value : q(c) ? i ? qi(c) : Sn(c) : c;
  }
}
class Li extends Hi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, i) {
    let r = t[n];
    if (!this._isShallow) {
      const u = nt(r);
      if (!Ee(o) && !nt(o) && (r = P(r), o = P(o)), !T(t) && Q(r) && !Q(o))
        return u ? !1 : (r.value = o, !0);
    }
    const s = T(t) && mo(n) ? Number(n) < t.length : H(t, n), c = Reflect.set(
      t,
      n,
      o,
      Q(t) ? t : i
    );
    return t === P(i) && (s ? ut(o, r) && Ae(t, "set", n, o, r) : Ae(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = H(t, n), i = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && Ae(t, "delete", n, void 0, i), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!it(n) || !Fi.has(n)) && X(t, "has", n), o;
  }
  ownKeys(t) {
    return X(
      t,
      "iterate",
      T(t) ? "length" : at
    ), Reflect.ownKeys(t);
  }
}
class Ui extends Hi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return G.NODE_ENV !== "production" && xe(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return G.NODE_ENV !== "production" && xe(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const ds = /* @__PURE__ */ new Li(), ps = /* @__PURE__ */ new Ui(), hs = /* @__PURE__ */ new Li(!0), gs = /* @__PURE__ */ new Ui(!0), Xn = (e) => e, en = (e) => Reflect.getPrototypeOf(e);
function ms(e, t, n) {
  return function(...o) {
    const i = this.__v_raw, r = P(i), s = ft(r), c = e === "entries" || e === Symbol.iterator && s, u = e === "keys" && s, h = i[e](...o), p = n ? Xn : t ? Zn : ge;
    return !t && X(
      r,
      "iterate",
      u ? Qn : at
    ), {
      // iterator protocol
      next() {
        const { value: a, done: _ } = h.next();
        return _ ? { value: a, done: _ } : {
          value: c ? [p(a[0]), p(a[1])] : p(a),
          done: _
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function tn(e) {
  return function(...t) {
    if (G.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      xe(
        `${Vn(e)} operation ${n}failed: target is readonly.`,
        P(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function _s(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, s = P(r), c = P(i);
      e || (ut(i, c) && X(s, "get", i), X(s, "get", c));
      const { has: u } = en(s), h = t ? Xn : e ? Zn : ge;
      if (u.call(s, i))
        return h(r.get(i));
      if (u.call(s, c))
        return h(r.get(c));
      r !== s && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && X(P(i), "iterate", at), Reflect.get(i, "size", i);
    },
    has(i) {
      const r = this.__v_raw, s = P(r), c = P(i);
      return e || (ut(i, c) && X(s, "has", i), X(s, "has", c)), i === c ? r.has(i) : r.has(i) || r.has(c);
    },
    forEach(i, r) {
      const s = this, c = s.__v_raw, u = P(c), h = t ? Xn : e ? Zn : ge;
      return !e && X(u, "iterate", at), c.forEach((p, a) => i.call(r, h(p), h(a), s));
    }
  };
  return J(
    n,
    e ? {
      add: tn("add"),
      set: tn("set"),
      delete: tn("delete"),
      clear: tn("clear")
    } : {
      add(i) {
        !t && !Ee(i) && !nt(i) && (i = P(i));
        const r = P(this);
        return en(r).has.call(r, i) || (r.add(i), Ae(r, "add", i, i)), this;
      },
      set(i, r) {
        !t && !Ee(r) && !nt(r) && (r = P(r));
        const s = P(this), { has: c, get: u } = en(s);
        let h = c.call(s, i);
        h ? G.NODE_ENV !== "production" && Wo(s, c, i) : (i = P(i), h = c.call(s, i));
        const p = u.call(s, i);
        return s.set(i, r), h ? ut(r, p) && Ae(s, "set", i, r, p) : Ae(s, "add", i, r), this;
      },
      delete(i) {
        const r = P(this), { has: s, get: c } = en(r);
        let u = s.call(r, i);
        u ? G.NODE_ENV !== "production" && Wo(r, s, i) : (i = P(i), u = s.call(r, i));
        const h = c ? c.call(r, i) : void 0, p = r.delete(i);
        return u && Ae(r, "delete", i, void 0, h), p;
      },
      clear() {
        const i = P(this), r = i.size !== 0, s = G.NODE_ENV !== "production" ? ft(i) ? new Map(i) : new Set(i) : void 0, c = i.clear();
        return r && Ae(
          i,
          "clear",
          void 0,
          void 0,
          s
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = ms(i, e, t);
  }), n;
}
function Cn(e, t) {
  const n = _s(e, t);
  return (o, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? o : Reflect.get(
    H(n, i) && i in o ? n : o,
    i,
    r
  );
}
const Es = {
  get: /* @__PURE__ */ Cn(!1, !1)
}, Ns = {
  get: /* @__PURE__ */ Cn(!1, !0)
}, bs = {
  get: /* @__PURE__ */ Cn(!0, !1)
}, ys = {
  get: /* @__PURE__ */ Cn(!0, !0)
};
function Wo(e, t, n) {
  const o = P(n);
  if (o !== n && t.call(e, o)) {
    const i = go(e);
    xe(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Bi = /* @__PURE__ */ new WeakMap(), Wi = /* @__PURE__ */ new WeakMap(), Ki = /* @__PURE__ */ new WeakMap(), ki = /* @__PURE__ */ new WeakMap();
function Os(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function vs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Os(go(e));
}
function Sn(e) {
  return nt(e) ? e : Tn(
    e,
    !1,
    ds,
    Es,
    Bi
  );
}
function ws(e) {
  return Tn(
    e,
    !1,
    hs,
    Ns,
    Wi
  );
}
function qi(e) {
  return Tn(
    e,
    !0,
    ps,
    bs,
    Ki
  );
}
function Ie(e) {
  return Tn(
    e,
    !0,
    gs,
    ys,
    ki
  );
}
function Tn(e, t, n, o, i) {
  if (!q(e))
    return G.NODE_ENV !== "production" && xe(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const s = vs(e);
  if (s === 0)
    return e;
  const c = new Proxy(
    e,
    s === 2 ? o : n
  );
  return i.set(e, c), c;
}
function bt(e) {
  return nt(e) ? bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function nt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ee(e) {
  return !!(e && e.__v_isShallow);
}
function Bt(e) {
  return e ? !!e.__v_raw : !1;
}
function P(e) {
  const t = e && e.__v_raw;
  return t ? P(t) : e;
}
function Ds(e) {
  return !H(e, "__v_skip") && Object.isExtensible(e) && hn(e, "__v_skip", !0), e;
}
const ge = (e) => q(e) ? Sn(e) : e, Zn = (e) => q(e) ? qi(e) : e;
function Q(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Gi(e) {
  return Q(e) ? e.value : e;
}
const xs = {
  get: (e, t, n) => t === "__v_raw" ? e : Gi(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const i = e[t];
    return Q(i) && !Q(n) ? (i.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Ji(e) {
  return bt(e) ? e : new Proxy(e, xs);
}
function Vs(e) {
  G.NODE_ENV !== "production" && !Bt(e) && xe("toRefs() expects a reactive object but received a plain one.");
  const t = T(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Ss(e, n);
  return t;
}
class Cs {
  constructor(t, n, o) {
    this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return ls(P(this._object), this._key);
  }
}
function Ss(e, t, n) {
  const o = e[t];
  return Q(o) ? o : new Cs(e, t, n);
}
class Ts {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ri(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Lt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    L !== this)
      return $i(this, !0), !0;
  }
  get value() {
    const t = G.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Ii(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : G.NODE_ENV !== "production" && xe("Write operation failed: computed value is readonly");
  }
}
function $s(e, t, n = !1) {
  let o, i;
  A(e) ? o = e : (o = e.get, i = e.set);
  const r = new Ts(o, i, n);
  return G.NODE_ENV !== "production" && t && !n && (r.onTrack = t.onTrack, r.onTrigger = t.onTrigger), r;
}
const nn = {}, mn = /* @__PURE__ */ new WeakMap();
let ct;
function As(e, t = !1, n = ct) {
  if (n) {
    let o = mn.get(n);
    o || mn.set(n, o = []), o.push(e);
  } else G.NODE_ENV !== "production" && !t && xe(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Ms(e, t, n = W) {
  const { immediate: o, deep: i, once: r, scheduler: s, augmentJob: c, call: u } = n, h = (C) => {
    (n.onWarn || xe)(
      "Invalid watch source: ",
      C,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (C) => i ? C : Ee(C) || i === !1 || i === 0 ? Ze(C, 1) : Ze(C);
  let a, _, D, S, I = !1, ne = !1;
  if (Q(e) ? (_ = () => e.value, I = Ee(e)) : bt(e) ? (_ = () => p(e), I = !0) : T(e) ? (ne = !0, I = e.some((C) => bt(C) || Ee(C)), _ = () => e.map((C) => {
    if (Q(C))
      return C.value;
    if (bt(C))
      return p(C);
    if (A(C))
      return u ? u(C, 2) : C();
    G.NODE_ENV !== "production" && h(C);
  })) : A(e) ? t ? _ = u ? () => u(e, 2) : e : _ = () => {
    if (D) {
      ke();
      try {
        D();
      } finally {
        qe();
      }
    }
    const C = ct;
    ct = a;
    try {
      return u ? u(e, 3, [S]) : e(S);
    } finally {
      ct = C;
    }
  } : (_ = Z, G.NODE_ENV !== "production" && h(e)), t && i) {
    const C = _, ee = i === !0 ? 1 / 0 : i;
    _ = () => Ze(C(), ee);
  }
  const K = is(), z = () => {
    a.stop(), K && K.active && po(K.effects, a);
  };
  if (r && t) {
    const C = t;
    t = (...ee) => {
      C(...ee), z();
    };
  }
  let U = ne ? new Array(e.length).fill(nn) : nn;
  const ue = (C) => {
    if (!(!(a.flags & 1) || !a.dirty && !C))
      if (t) {
        const ee = a.run();
        if (i || I || (ne ? ee.some((Ne, oe) => ut(Ne, U[oe])) : ut(ee, U))) {
          D && D();
          const Ne = ct;
          ct = a;
          try {
            const oe = [
              ee,
              // pass undefined as the old value when it's changed for the first time
              U === nn ? void 0 : ne && U[0] === nn ? [] : U,
              S
            ];
            u ? u(t, 3, oe) : (
              // @ts-expect-error
              t(...oe)
            ), U = ee;
          } finally {
            ct = Ne;
          }
        }
      } else
        a.run();
  };
  return c && c(ue), a = new Si(_), a.scheduler = s ? () => s(ue, !1) : ue, S = (C) => As(C, !1, a), D = a.onStop = () => {
    const C = mn.get(a);
    if (C) {
      if (u)
        u(C, 4);
      else
        for (const ee of C) ee();
      mn.delete(a);
    }
  }, G.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? o ? ue(!0) : U = a.run() : s ? s(ue.bind(null, !0), !0) : a.run(), z.pause = a.pause.bind(a), z.resume = a.resume.bind(a), z.stop = z, z;
}
function Ze(e, t = 1 / 0, n) {
  if (t <= 0 || !q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Q(e))
    Ze(e.value, t, n);
  else if (T(e))
    for (let o = 0; o < e.length; o++)
      Ze(e[o], t, n);
  else if (Oi(e) || ft(e))
    e.forEach((o) => {
      Ze(o, t, n);
    });
  else if (wi(e)) {
    for (const o in e)
      Ze(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && Ze(e[o], t, n);
  }
  return e;
}
var d = {};
const dt = [];
function on(e) {
  dt.push(e);
}
function rn() {
  dt.pop();
}
let Wn = !1;
function v(e, ...t) {
  if (Wn) return;
  Wn = !0, ke();
  const n = dt.length ? dt[dt.length - 1].component : null, o = n && n.appContext.config.warnHandler, i = Is();
  if (o)
    vt(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var s, c;
          return (c = (s = r.toString) == null ? void 0 : s.call(r)) != null ? c : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: r }) => `at <${Pn(n, r.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    i.length && r.push(`
`, ...Ps(i)), console.warn(...r);
  }
  qe(), Wn = !1;
}
function Is() {
  let e = dt[dt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Ps(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Rs(n));
  }), t;
}
function Rs({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, i = ` at <${Pn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [i, ...js(e.props), r] : [i + r];
}
function js(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Yi(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Yi(e, t, n) {
  return Y(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Q(t) ? (t = Yi(e, P(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : A(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = P(t), n ? t : [`${e}=`, t]);
}
const vo = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function vt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (i) {
    Jt(i, t, n);
  }
}
function Re(e, t, n, o) {
  if (A(e)) {
    const i = vt(e, t, n, o);
    return i && ho(i) && i.catch((r) => {
      Jt(r, t, n);
    }), i;
  }
  if (T(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Re(e[r], t, n, o));
    return i;
  } else d.NODE_ENV !== "production" && v(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Jt(e, t, n, o = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || W;
  if (t) {
    let c = t.parent;
    const u = t.proxy, h = d.NODE_ENV !== "production" ? vo[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const p = c.ec;
      if (p) {
        for (let a = 0; a < p.length; a++)
          if (p[a](e, u, h) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      ke(), vt(r, null, 10, [
        e,
        u,
        h
      ]), qe();
      return;
    }
  }
  Fs(e, n, i, o, s);
}
function Fs(e, t, n, o = !0, i = !1) {
  if (d.NODE_ENV !== "production") {
    const r = vo[t];
    if (n && on(n), v(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && rn(), o)
      throw e;
    console.error(e);
  } else {
    if (i)
      throw e;
    console.error(e);
  }
}
const le = [];
let Te = -1;
const yt = [];
let Qe = null, Et = 0;
const zi = /* @__PURE__ */ Promise.resolve();
let _n = null;
const Hs = 100;
function Ls(e) {
  const t = _n || zi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Us(e) {
  let t = Te + 1, n = le.length;
  for (; t < n; ) {
    const o = t + n >>> 1, i = le[o], r = Wt(i);
    r < e || r === e && i.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function $n(e) {
  if (!(e.flags & 1)) {
    const t = Wt(e), n = le[le.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Wt(n) ? le.push(e) : le.splice(Us(t), 0, e), e.flags |= 1, Qi();
  }
}
function Qi() {
  _n || (_n = zi.then(er));
}
function Xi(e) {
  T(e) ? yt.push(...e) : Qe && e.id === -1 ? Qe.splice(Et + 1, 0, e) : e.flags & 1 || (yt.push(e), e.flags |= 1), Qi();
}
function Ko(e, t, n = Te + 1) {
  for (d.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < le.length; n++) {
    const o = le[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || d.NODE_ENV !== "production" && wo(t, o))
        continue;
      le.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Zi(e) {
  if (yt.length) {
    const t = [...new Set(yt)].sort(
      (n, o) => Wt(n) - Wt(o)
    );
    if (yt.length = 0, Qe) {
      Qe.push(...t);
      return;
    }
    for (Qe = t, d.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Et = 0; Et < Qe.length; Et++) {
      const n = Qe[Et];
      d.NODE_ENV !== "production" && wo(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Qe = null, Et = 0;
  }
}
const Wt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function er(e) {
  d.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = d.NODE_ENV !== "production" ? (n) => wo(e, n) : Z;
  try {
    for (Te = 0; Te < le.length; Te++) {
      const n = le[Te];
      if (n && !(n.flags & 8)) {
        if (d.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), vt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Te < le.length; Te++) {
      const n = le[Te];
      n && (n.flags &= -2);
    }
    Te = -1, le.length = 0, Zi(e), _n = null, (le.length || yt.length) && er(e);
  }
}
function wo(e, t) {
  const n = e.get(t) || 0;
  if (n > Hs) {
    const o = t.i, i = o && Ir(o.type);
    return Jt(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Pe = !1;
const sn = /* @__PURE__ */ new Map();
d.NODE_ENV !== "production" && (Gt().__VUE_HMR_RUNTIME__ = {
  createRecord: Kn(tr),
  rerender: Kn(Ks),
  reload: Kn(ks)
});
const gt = /* @__PURE__ */ new Map();
function Bs(e) {
  const t = e.type.__hmrId;
  let n = gt.get(t);
  n || (tr(t, e.type), n = gt.get(t)), n.instances.add(e);
}
function Ws(e) {
  gt.get(e.type.__hmrId).instances.delete(e);
}
function tr(e, t) {
  return gt.has(e) ? !1 : (gt.set(e, {
    initialDef: En(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function En(e) {
  return Pr(e) ? e.__vccOpts : e;
}
function Ks(e, t) {
  const n = gt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, En(o.type).render = t), o.renderCache = [], Pe = !0, o.update(), Pe = !1;
  }));
}
function ks(e, t) {
  const n = gt.get(e);
  if (!n) return;
  t = En(t), ko(n.initialDef, t);
  const o = [...n.instances];
  for (let i = 0; i < o.length; i++) {
    const r = o[i], s = En(r.type);
    let c = sn.get(s);
    c || (s !== n.initialDef && ko(s, t), sn.set(s, c = /* @__PURE__ */ new Set())), c.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (c.add(r), r.ceReload(t.styles), c.delete(r)) : r.parent ? $n(() => {
      Pe = !0, r.parent.update(), Pe = !1, c.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(s);
  }
  Xi(() => {
    sn.clear();
  });
}
function ko(e, t) {
  J(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Kn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Me, At = [], eo = !1;
function Yt(e, ...t) {
  Me ? Me.emit(e, ...t) : eo || At.push({ event: e, args: t });
}
function nr(e, t) {
  var n, o;
  Me = e, Me ? (Me.enabled = !0, At.forEach(({ event: i, args: r }) => Me.emit(i, ...r)), At = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    nr(r, t);
  }), setTimeout(() => {
    Me || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, eo = !0, At = []);
  }, 3e3)) : (eo = !0, At = []);
}
function qs(e, t) {
  Yt("app:init", e, t, {
    Fragment: $e,
    Text: zt,
    Comment: De,
    Static: un
  });
}
function Gs(e) {
  Yt("app:unmount", e);
}
const Js = /* @__PURE__ */ Do(
  "component:added"
  /* COMPONENT_ADDED */
), or = /* @__PURE__ */ Do(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ys = /* @__PURE__ */ Do(
  "component:removed"
  /* COMPONENT_REMOVED */
), zs = (e) => {
  Me && typeof Me.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Me.cleanupBuffer(e) && Ys(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Do(e) {
  return (t) => {
    Yt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Qs = /* @__PURE__ */ ir(
  "perf:start"
  /* PERFORMANCE_START */
), Xs = /* @__PURE__ */ ir(
  "perf:end"
  /* PERFORMANCE_END */
);
function ir(e) {
  return (t, n, o) => {
    Yt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Zs(e, t, n) {
  Yt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let me = null, rr = null;
function Nn(e) {
  const t = me;
  return me = e, rr = e && e.type.__scopeId || null, t;
}
function el(e, t = me, n) {
  if (!t || e._n)
    return e;
  const o = (...i) => {
    o._d && ni(-1);
    const r = Nn(t);
    let s;
    try {
      s = e(...i);
    } finally {
      Nn(r), o._d && ni(1);
    }
    return d.NODE_ENV !== "production" && or(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function sr(e) {
  Ur(e) && v("Do not use built-in directive ids as custom directive id: " + e);
}
function rt(e, t, n, o) {
  const i = e.dirs, r = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const c = i[s];
    r && (c.oldValue = r[s].value);
    let u = c.dir[o];
    u && (ke(), Re(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), qe());
  }
}
const tl = Symbol("_vte"), nl = (e) => e.__isTeleport;
function xo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, xo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ol(e, t) {
  return A(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    J({ name: e.name }, t, { setup: e })
  ) : e;
}
function lr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const il = /* @__PURE__ */ new WeakSet();
function bn(e, t, n, o, i = !1) {
  if (T(e)) {
    e.forEach(
      (S, I) => bn(
        S,
        t && (T(t) ? t[I] : t),
        n,
        o,
        i
      )
    );
    return;
  }
  if (jt(o) && !i) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && bn(e, t, n, o.component.subTree);
    return;
  }
  const r = o.shapeFlag & 4 ? Mo(o.component) : o.el, s = i ? null : r, { i: c, r: u } = e;
  if (d.NODE_ENV !== "production" && !c) {
    v(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const h = t && t.r, p = c.refs === W ? c.refs = {} : c.refs, a = c.setupState, _ = P(a), D = a === W ? () => !1 : (S) => d.NODE_ENV !== "production" && (H(_, S) && !Q(_[S]) && v(
    `Template ref "${S}" used on a non-ref value. It will not work in the production build.`
  ), il.has(_[S])) ? !1 : H(_, S);
  if (h != null && h !== u && (Y(h) ? (p[h] = null, D(h) && (a[h] = null)) : Q(h) && (h.value = null)), A(u))
    vt(u, c, 12, [s, p]);
  else {
    const S = Y(u), I = Q(u);
    if (S || I) {
      const ne = () => {
        if (e.f) {
          const K = S ? D(u) ? a[u] : p[u] : u.value;
          i ? T(K) && po(K, r) : T(K) ? K.includes(r) || K.push(r) : S ? (p[u] = [r], D(u) && (a[u] = p[u])) : (u.value = [r], e.k && (p[e.k] = u.value));
        } else S ? (p[u] = s, D(u) && (a[u] = s)) : I ? (u.value = s, e.k && (p[e.k] = s)) : d.NODE_ENV !== "production" && v("Invalid template ref type:", u, `(${typeof u})`);
      };
      s ? (ne.id = -1, pe(ne, n)) : ne();
    } else d.NODE_ENV !== "production" && v("Invalid template ref type:", u, `(${typeof u})`);
  }
}
Gt().requestIdleCallback;
Gt().cancelIdleCallback;
const jt = (e) => !!e.type.__asyncLoader, Vo = (e) => e.type.__isKeepAlive;
function rl(e, t) {
  cr(e, "a", t);
}
function sl(e, t) {
  cr(e, "da", t);
}
function cr(e, t, n = te) {
  const o = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (An(t, o, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Vo(i.parent.vnode) && ll(o, t, n, i), i = i.parent;
  }
}
function ll(e, t, n, o) {
  const i = An(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  fr(() => {
    po(o[t], i);
  }, n);
}
function An(e, t, n = te, o = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      ke();
      const c = Qt(n), u = Re(t, n, e, s);
      return c(), qe(), u;
    });
    return o ? i.unshift(r) : i.push(r), r;
  } else if (d.NODE_ENV !== "production") {
    const i = lt(vo[e].replace(/ hook$/, ""));
    v(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ge = (e) => (t, n = te) => {
  (!kt || e === "sp") && An(e, (...o) => t(...o), n);
}, cl = Ge("bm"), fl = Ge("m"), ul = Ge(
  "bu"
), al = Ge("u"), dl = Ge(
  "bum"
), fr = Ge("um"), pl = Ge(
  "sp"
), hl = Ge("rtg"), gl = Ge("rtc");
function ml(e, t = te) {
  An("ec", e, t);
}
const _l = Symbol.for("v-ndc"), to = (e) => e ? Ar(e) ? Mo(e) : to(e.parent) : null, pt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ J(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => d.NODE_ENV !== "production" ? Ie(e.props) : e.props,
    $attrs: (e) => d.NODE_ENV !== "production" ? Ie(e.attrs) : e.attrs,
    $slots: (e) => d.NODE_ENV !== "production" ? Ie(e.slots) : e.slots,
    $refs: (e) => d.NODE_ENV !== "production" ? Ie(e.refs) : e.refs,
    $parent: (e) => to(e.parent),
    $root: (e) => to(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => So(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      $n(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ls.bind(e.proxy)),
    $watch: (e) => zl.bind(e)
  })
), Co = (e) => e === "_" || e === "$", kn = (e, t) => e !== W && !e.__isScriptSetup && H(e, t), ur = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: i, props: r, accessCache: s, type: c, appContext: u } = e;
    if (d.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let h;
    if (t[0] !== "$") {
      const D = s[t];
      if (D !== void 0)
        switch (D) {
          case 1:
            return o[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (kn(o, t))
          return s[t] = 1, o[t];
        if (i !== W && H(i, t))
          return s[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && H(h, t)
        )
          return s[t] = 3, r[t];
        if (n !== W && H(n, t))
          return s[t] = 4, n[t];
        no && (s[t] = 0);
      }
    }
    const p = pt[t];
    let a, _;
    if (p)
      return t === "$attrs" ? (X(e.attrs, "get", ""), d.NODE_ENV !== "production" && vn()) : d.NODE_ENV !== "production" && t === "$slots" && X(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (a = c.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== W && H(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      _ = u.config.globalProperties, H(_, t)
    )
      return _[t];
    d.NODE_ENV !== "production" && me && (!Y(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== W && Co(t[0]) && H(i, t) ? v(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === me && v(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: i, ctx: r } = e;
    return kn(i, t) ? (i[t] = n, !0) : d.NODE_ENV !== "production" && i.__isScriptSetup && H(i, t) ? (v(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== W && H(o, t) ? (o[t] = n, !0) : H(e.props, t) ? (d.NODE_ENV !== "production" && v(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (d.NODE_ENV !== "production" && v(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (d.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: i, propsOptions: r }
  }, s) {
    let c;
    return !!n[s] || e !== W && H(e, s) || kn(t, s) || (c = r[0]) && H(c, s) || H(o, s) || H(pt, s) || H(i.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
d.NODE_ENV !== "production" && (ur.ownKeys = (e) => (v(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function El(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(pt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => pt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Z
    });
  }), t;
}
function Nl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Z
    });
  });
}
function bl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(P(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Co(o[0])) {
        v(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Z
      });
    }
  });
}
function qo(e) {
  return T(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function yl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? v(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let no = !0;
function Ol(e) {
  const t = So(e), n = e.proxy, o = e.ctx;
  no = !1, t.beforeCreate && Go(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: s,
    watch: c,
    provide: u,
    inject: h,
    // lifecycle
    created: p,
    beforeMount: a,
    mounted: _,
    beforeUpdate: D,
    updated: S,
    activated: I,
    deactivated: ne,
    beforeDestroy: K,
    beforeUnmount: z,
    destroyed: U,
    unmounted: ue,
    render: C,
    renderTracked: ee,
    renderTriggered: Ne,
    errorCaptured: oe,
    serverPrefetch: ce,
    // public API
    expose: je,
    inheritAttrs: Je,
    // assets
    components: be,
    directives: Xt,
    filters: Io
  } = t, Ye = d.NODE_ENV !== "production" ? yl() : null;
  if (d.NODE_ENV !== "production") {
    const [j] = e.propsOptions;
    if (j)
      for (const R in j)
        Ye("Props", R);
  }
  if (h && vl(h, o, Ye), s)
    for (const j in s) {
      const R = s[j];
      A(R) ? (d.NODE_ENV !== "production" ? Object.defineProperty(o, j, {
        value: R.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[j] = R.bind(n), d.NODE_ENV !== "production" && Ye("Methods", j)) : d.NODE_ENV !== "production" && v(
        `Method "${j}" has type "${typeof R}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    d.NODE_ENV !== "production" && !A(i) && v(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const j = i.call(n, n);
    if (d.NODE_ENV !== "production" && ho(j) && v(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !q(j))
      d.NODE_ENV !== "production" && v("data() should return an object.");
    else if (e.data = Sn(j), d.NODE_ENV !== "production")
      for (const R in j)
        Ye("Data", R), Co(R[0]) || Object.defineProperty(o, R, {
          configurable: !0,
          enumerable: !0,
          get: () => j[R],
          set: Z
        });
  }
  if (no = !0, r)
    for (const j in r) {
      const R = r[j], Ve = A(R) ? R.bind(n, n) : A(R.get) ? R.get.bind(n, n) : Z;
      d.NODE_ENV !== "production" && Ve === Z && v(`Computed property "${j}" has no getter.`);
      const Rn = !A(R) && A(R.set) ? R.set.bind(n) : d.NODE_ENV !== "production" ? () => {
        v(
          `Write operation failed: computed property "${j}" is readonly.`
        );
      } : Z, wt = wc({
        get: Ve,
        set: Rn
      });
      Object.defineProperty(o, j, {
        enumerable: !0,
        configurable: !0,
        get: () => wt.value,
        set: (mt) => wt.value = mt
      }), d.NODE_ENV !== "production" && Ye("Computed", j);
    }
  if (c)
    for (const j in c)
      ar(c[j], o, n, j);
  if (u) {
    const j = A(u) ? u.call(n) : u;
    Reflect.ownKeys(j).forEach((R) => {
      Sl(R, j[R]);
    });
  }
  p && Go(p, e, "c");
  function fe(j, R) {
    T(R) ? R.forEach((Ve) => j(Ve.bind(n))) : R && j(R.bind(n));
  }
  if (fe(cl, a), fe(fl, _), fe(ul, D), fe(al, S), fe(rl, I), fe(sl, ne), fe(ml, oe), fe(gl, ee), fe(hl, Ne), fe(dl, z), fe(fr, ue), fe(pl, ce), T(je))
    if (je.length) {
      const j = e.exposed || (e.exposed = {});
      je.forEach((R) => {
        Object.defineProperty(j, R, {
          get: () => n[R],
          set: (Ve) => n[R] = Ve
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === Z && (e.render = C), Je != null && (e.inheritAttrs = Je), be && (e.components = be), Xt && (e.directives = Xt), ce && lr(e);
}
function vl(e, t, n = Z) {
  T(e) && (e = oo(e));
  for (const o in e) {
    const i = e[o];
    let r;
    q(i) ? "default" in i ? r = ln(
      i.from || o,
      i.default,
      !0
    ) : r = ln(i.from || o) : r = ln(i), Q(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[o] = r, d.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Go(e, t, n) {
  Re(
    T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ar(e, t, n, o) {
  let i = o.includes(".") ? wr(n, o) : () => n[o];
  if (Y(e)) {
    const r = t[e];
    A(r) ? fn(i, r) : d.NODE_ENV !== "production" && v(`Invalid watch handler specified by key "${e}"`, r);
  } else if (A(e))
    fn(i, e.bind(n));
  else if (q(e))
    if (T(e))
      e.forEach((r) => ar(r, t, n, o));
    else {
      const r = A(e.handler) ? e.handler.bind(n) : t[e.handler];
      A(r) ? fn(i, r, e) : d.NODE_ENV !== "production" && v(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else d.NODE_ENV !== "production" && v(`Invalid watch option: "${o}"`, e);
}
function So(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, c = r.get(t);
  let u;
  return c ? u = c : !i.length && !n && !o ? u = t : (u = {}, i.length && i.forEach(
    (h) => yn(u, h, s, !0)
  ), yn(u, t, s)), q(t) && r.set(t, u), u;
}
function yn(e, t, n, o = !1) {
  const { mixins: i, extends: r } = t;
  r && yn(e, r, n, !0), i && i.forEach(
    (s) => yn(e, s, n, !0)
  );
  for (const s in t)
    if (o && s === "expose")
      d.NODE_ENV !== "production" && v(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = wl[s] || n && n[s];
      e[s] = c ? c(e[s], t[s]) : t[s];
    }
  return e;
}
const wl = {
  data: Jo,
  props: Yo,
  emits: Yo,
  // objects
  methods: Mt,
  computed: Mt,
  // lifecycle
  beforeCreate: se,
  created: se,
  beforeMount: se,
  mounted: se,
  beforeUpdate: se,
  updated: se,
  beforeDestroy: se,
  beforeUnmount: se,
  destroyed: se,
  unmounted: se,
  activated: se,
  deactivated: se,
  errorCaptured: se,
  serverPrefetch: se,
  // assets
  components: Mt,
  directives: Mt,
  // watch
  watch: xl,
  // provide / inject
  provide: Jo,
  inject: Dl
};
function Jo(e, t) {
  return t ? e ? function() {
    return J(
      A(e) ? e.call(this, this) : e,
      A(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Dl(e, t) {
  return Mt(oo(e), oo(t));
}
function oo(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Mt(e, t) {
  return e ? J(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Yo(e, t) {
  return e ? T(e) && T(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : J(
    /* @__PURE__ */ Object.create(null),
    qo(e),
    qo(t ?? {})
  ) : t;
}
function xl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = J(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = se(e[o], t[o]);
  return n;
}
function dr() {
  return {
    app: null,
    config: {
      isNativeTag: Hr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Vl = 0;
function Cl(e, t) {
  return function(o, i = null) {
    A(o) || (o = J({}, o)), i != null && !q(i) && (d.NODE_ENV !== "production" && v("root props passed to app.mount() must be an object."), i = null);
    const r = dr(), s = /* @__PURE__ */ new WeakSet(), c = [];
    let u = !1;
    const h = r.app = {
      _uid: Vl++,
      _component: o,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: si,
      get config() {
        return r.config;
      },
      set config(p) {
        d.NODE_ENV !== "production" && v(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...a) {
        return s.has(p) ? d.NODE_ENV !== "production" && v("Plugin has already been applied to target app.") : p && A(p.install) ? (s.add(p), p.install(h, ...a)) : A(p) ? (s.add(p), p(h, ...a)) : d.NODE_ENV !== "production" && v(
          'A plugin must either be a function or an object with an "install" function.'
        ), h;
      },
      mixin(p) {
        return r.mixins.includes(p) ? d.NODE_ENV !== "production" && v(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : r.mixins.push(p), h;
      },
      component(p, a) {
        return d.NODE_ENV !== "production" && co(p, r.config), a ? (d.NODE_ENV !== "production" && r.components[p] && v(`Component "${p}" has already been registered in target app.`), r.components[p] = a, h) : r.components[p];
      },
      directive(p, a) {
        return d.NODE_ENV !== "production" && sr(p), a ? (d.NODE_ENV !== "production" && r.directives[p] && v(`Directive "${p}" has already been registered in target app.`), r.directives[p] = a, h) : r.directives[p];
      },
      mount(p, a, _) {
        if (u)
          d.NODE_ENV !== "production" && v(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          d.NODE_ENV !== "production" && p.__vue_app__ && v(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const D = h._ceVNode || ht(o, i);
          return D.appContext = r, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), d.NODE_ENV !== "production" && (r.reload = () => {
            e(
              ot(D),
              p,
              _
            );
          }), a && t ? t(D, p) : e(D, p, _), u = !0, h._container = p, p.__vue_app__ = h, d.NODE_ENV !== "production" && (h._instance = D.component, qs(h, si)), Mo(D.component);
        }
      },
      onUnmount(p) {
        d.NODE_ENV !== "production" && typeof p != "function" && v(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), c.push(p);
      },
      unmount() {
        u ? (Re(
          c,
          h._instance,
          16
        ), e(null, h._container), d.NODE_ENV !== "production" && (h._instance = null, Gs(h)), delete h._container.__vue_app__) : d.NODE_ENV !== "production" && v("Cannot unmount an app that is not mounted.");
      },
      provide(p, a) {
        return d.NODE_ENV !== "production" && p in r.provides && v(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ), r.provides[p] = a, h;
      },
      runWithContext(p) {
        const a = Ot;
        Ot = h;
        try {
          return p();
        } finally {
          Ot = a;
        }
      }
    };
    return h;
  };
}
let Ot = null;
function Sl(e, t) {
  if (!te)
    d.NODE_ENV !== "production" && v("provide() can only be used inside setup().");
  else {
    let n = te.provides;
    const o = te.parent && te.parent.provides;
    o === n && (n = te.provides = Object.create(o)), n[e] = t;
  }
}
function ln(e, t, n = !1) {
  const o = te || me;
  if (o || Ot) {
    const i = Ot ? Ot._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && A(t) ? t.call(o && o.proxy) : t;
    d.NODE_ENV !== "production" && v(`injection "${String(e)}" not found.`);
  } else d.NODE_ENV !== "production" && v("inject() can only be used inside setup() or functional components.");
}
const pr = {}, hr = () => Object.create(pr), gr = (e) => Object.getPrototypeOf(e) === pr;
function Tl(e, t, n, o = !1) {
  const i = {}, r = hr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), mr(e, t, i, r);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  d.NODE_ENV !== "production" && Er(t || {}, i, e), n ? e.props = o ? i : ws(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function $l(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Al(e, t, n, o) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, c = P(i), [u] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(d.NODE_ENV !== "production" && $l(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const p = e.vnode.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        let _ = p[a];
        if (Mn(e.emitsOptions, _))
          continue;
        const D = t[_];
        if (u)
          if (H(r, _))
            D !== r[_] && (r[_] = D, h = !0);
          else {
            const S = ve(_);
            i[S] = io(
              u,
              c,
              S,
              D,
              e,
              !1
            );
          }
        else
          D !== r[_] && (r[_] = D, h = !0);
      }
    }
  } else {
    mr(e, t, i, r) && (h = !0);
    let p;
    for (const a in c)
      (!t || // for camelCase
      !H(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = tt(a)) === a || !H(t, p))) && (u ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[p] !== void 0) && (i[a] = io(
        u,
        c,
        a,
        void 0,
        e,
        !0
      )) : delete i[a]);
    if (r !== c)
      for (const a in r)
        (!t || !H(t, a)) && (delete r[a], h = !0);
  }
  h && Ae(e.attrs, "set", ""), d.NODE_ENV !== "production" && Er(t || {}, i, e);
}
function mr(e, t, n, o) {
  const [i, r] = e.propsOptions;
  let s = !1, c;
  if (t)
    for (let u in t) {
      if (It(u))
        continue;
      const h = t[u];
      let p;
      i && H(i, p = ve(u)) ? !r || !r.includes(p) ? n[p] = h : (c || (c = {}))[p] = h : Mn(e.emitsOptions, u) || (!(u in o) || h !== o[u]) && (o[u] = h, s = !0);
    }
  if (r) {
    const u = P(n), h = c || W;
    for (let p = 0; p < r.length; p++) {
      const a = r[p];
      n[a] = io(
        i,
        u,
        a,
        h[a],
        e,
        !H(h, a)
      );
    }
  }
  return s;
}
function io(e, t, n, o, i, r) {
  const s = e[n];
  if (s != null) {
    const c = H(s, "default");
    if (c && o === void 0) {
      const u = s.default;
      if (s.type !== Function && !s.skipFactory && A(u)) {
        const { propsDefaults: h } = i;
        if (n in h)
          o = h[n];
        else {
          const p = Qt(i);
          o = h[n] = u.call(
            null,
            t
          ), p();
        }
      } else
        o = u;
      i.ce && i.ce._setProp(n, o);
    }
    s[
      0
      /* shouldCast */
    ] && (r && !c ? o = !1 : s[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === tt(n)) && (o = !0));
  }
  return o;
}
const Ml = /* @__PURE__ */ new WeakMap();
function _r(e, t, n = !1) {
  const o = n ? Ml : t.propsCache, i = o.get(e);
  if (i)
    return i;
  const r = e.props, s = {}, c = [];
  let u = !1;
  if (!A(e)) {
    const p = (a) => {
      u = !0;
      const [_, D] = _r(a, t, !0);
      J(s, _), D && c.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !u)
    return q(e) && o.set(e, Nt), Nt;
  if (T(r))
    for (let p = 0; p < r.length; p++) {
      d.NODE_ENV !== "production" && !Y(r[p]) && v("props must be strings when using array syntax.", r[p]);
      const a = ve(r[p]);
      zo(a) && (s[a] = W);
    }
  else if (r) {
    d.NODE_ENV !== "production" && !q(r) && v("invalid props options", r);
    for (const p in r) {
      const a = ve(p);
      if (zo(a)) {
        const _ = r[p], D = s[a] = T(_) || A(_) ? { type: _ } : J({}, _), S = D.type;
        let I = !1, ne = !0;
        if (T(S))
          for (let K = 0; K < S.length; ++K) {
            const z = S[K], U = A(z) && z.name;
            if (U === "Boolean") {
              I = !0;
              break;
            } else U === "String" && (ne = !1);
          }
        else
          I = A(S) && S.name === "Boolean";
        D[
          0
          /* shouldCast */
        ] = I, D[
          1
          /* shouldCastTrue */
        ] = ne, (I || H(D, "default")) && c.push(a);
      }
    }
  }
  const h = [s, c];
  return q(e) && o.set(e, h), h;
}
function zo(e) {
  return e[0] !== "$" && !It(e) ? !0 : (d.NODE_ENV !== "production" && v(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Il(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Er(e, t, n) {
  const o = P(t), i = n.propsOptions[0], r = Object.keys(e).map((s) => ve(s));
  for (const s in i) {
    let c = i[s];
    c != null && Pl(
      s,
      o[s],
      c,
      d.NODE_ENV !== "production" ? Ie(o) : o,
      !r.includes(s)
    );
  }
}
function Pl(e, t, n, o, i) {
  const { type: r, required: s, validator: c, skipCheck: u } = n;
  if (s && i) {
    v('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (r != null && r !== !0 && !u) {
      let h = !1;
      const p = T(r) ? r : [r], a = [];
      for (let _ = 0; _ < p.length && !h; _++) {
        const { valid: D, expectedType: S } = jl(t, p[_]);
        a.push(S || ""), h = D;
      }
      if (!h) {
        v(Fl(e, t, a));
        return;
      }
    }
    c && !c(t, o) && v('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Rl = /* @__PURE__ */ Ke(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function jl(e, t) {
  let n;
  const o = Il(t);
  if (o === "null")
    n = e === null;
  else if (Rl(o)) {
    const i = typeof e;
    n = i === o.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else o === "Object" ? n = q(e) : o === "Array" ? n = T(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Fl(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Vn).join(" | ")}`;
  const i = n[0], r = go(t), s = Qo(t, i), c = Qo(t, r);
  return n.length === 1 && Xo(i) && !Hl(i, r) && (o += ` with value ${s}`), o += `, got ${r} `, Xo(r) && (o += `with value ${c}.`), o;
}
function Qo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Xo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Hl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Nr = (e) => e[0] === "_" || e === "$stable", To = (e) => T(e) ? e.map(Oe) : [Oe(e)], Ll = (e, t, n) => {
  if (t._n)
    return t;
  const o = el((...i) => (d.NODE_ENV !== "production" && te && (!n || n.root === te.root) && v(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), To(t(...i))), n);
  return o._c = !1, o;
}, br = (e, t, n) => {
  const o = e._ctx;
  for (const i in e) {
    if (Nr(i)) continue;
    const r = e[i];
    if (A(r))
      t[i] = Ll(i, r, o);
    else if (r != null) {
      d.NODE_ENV !== "production" && v(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const s = To(r);
      t[i] = () => s;
    }
  }
}, yr = (e, t) => {
  d.NODE_ENV !== "production" && !Vo(e.vnode) && v(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = To(t);
  e.slots.default = () => n;
}, ro = (e, t, n) => {
  for (const o in t)
    (n || o !== "_") && (e[o] = t[o]);
}, Ul = (e, t, n) => {
  const o = e.slots = hr();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (ro(o, t, n), n && hn(o, "_", i, !0)) : br(t, o);
  } else t && yr(e, t);
}, Bl = (e, t, n) => {
  const { vnode: o, slots: i } = e;
  let r = !0, s = W;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? d.NODE_ENV !== "production" && Pe ? (ro(i, t, n), Ae(e, "set", "$slots")) : n && c === 1 ? r = !1 : ro(i, t, n) : (r = !t.$stable, br(t, i)), s = t;
  } else t && (yr(e, t), s = { default: 1 });
  if (r)
    for (const c in i)
      !Nr(c) && s[c] == null && delete i[c];
};
let Tt, et;
function He(e, t) {
  e.appContext.config.performance && On() && et.mark(`vue-${t}-${e.uid}`), d.NODE_ENV !== "production" && Qs(e, t, On() ? et.now() : Date.now());
}
function Le(e, t) {
  if (e.appContext.config.performance && On()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    et.mark(o), et.measure(
      `<${Pn(e, e.type)}> ${t}`,
      n,
      o
    ), et.clearMarks(n), et.clearMarks(o);
  }
  d.NODE_ENV !== "production" && Xs(e, t, On() ? et.now() : Date.now());
}
function On() {
  return Tt !== void 0 || (typeof window < "u" && window.performance ? (Tt = !0, et = window.performance) : Tt = !1), Tt;
}
function Wl() {
  const e = [];
  if (d.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const pe = oc;
function Kl(e) {
  return kl(e);
}
function kl(e, t) {
  Wl();
  const n = Gt();
  n.__VUE__ = !0, d.NODE_ENV !== "production" && nr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: i,
    patchProp: r,
    createElement: s,
    createText: c,
    createComment: u,
    setText: h,
    setElementText: p,
    parentNode: a,
    nextSibling: _,
    setScopeId: D = Z,
    insertStaticContent: S
  } = e, I = (l, f, g, N = null, m = null, E = null, w = void 0, O = null, y = d.NODE_ENV !== "production" && Pe ? !1 : !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !$t(l, f) && (N = Zt(l), ze(l, m, E, !0), l = null), f.patchFlag === -2 && (y = !1, f.dynamicChildren = null);
    const { type: b, ref: $, shapeFlag: x } = f;
    switch (b) {
      case zt:
        ne(l, f, g, N);
        break;
      case De:
        K(l, f, g, N);
        break;
      case un:
        l == null ? z(f, g, N, w) : d.NODE_ENV !== "production" && U(l, f, g, w);
        break;
      case $e:
        Xt(
          l,
          f,
          g,
          N,
          m,
          E,
          w,
          O,
          y
        );
        break;
      default:
        x & 1 ? ee(
          l,
          f,
          g,
          N,
          m,
          E,
          w,
          O,
          y
        ) : x & 6 ? Io(
          l,
          f,
          g,
          N,
          m,
          E,
          w,
          O,
          y
        ) : x & 64 || x & 128 ? b.process(
          l,
          f,
          g,
          N,
          m,
          E,
          w,
          O,
          y,
          xt
        ) : d.NODE_ENV !== "production" && v("Invalid VNode type:", b, `(${typeof b})`);
    }
    $ != null && m && bn($, l && l.ref, E, f || l, !f);
  }, ne = (l, f, g, N) => {
    if (l == null)
      o(
        f.el = c(f.children),
        g,
        N
      );
    else {
      const m = f.el = l.el;
      f.children !== l.children && h(m, f.children);
    }
  }, K = (l, f, g, N) => {
    l == null ? o(
      f.el = u(f.children || ""),
      g,
      N
    ) : f.el = l.el;
  }, z = (l, f, g, N) => {
    [l.el, l.anchor] = S(
      l.children,
      f,
      g,
      N,
      l.el,
      l.anchor
    );
  }, U = (l, f, g, N) => {
    if (f.children !== l.children) {
      const m = _(l.anchor);
      C(l), [f.el, f.anchor] = S(
        f.children,
        g,
        m,
        N
      );
    } else
      f.el = l.el, f.anchor = l.anchor;
  }, ue = ({ el: l, anchor: f }, g, N) => {
    let m;
    for (; l && l !== f; )
      m = _(l), o(l, g, N), l = m;
    o(f, g, N);
  }, C = ({ el: l, anchor: f }) => {
    let g;
    for (; l && l !== f; )
      g = _(l), i(l), l = g;
    i(f);
  }, ee = (l, f, g, N, m, E, w, O, y) => {
    f.type === "svg" ? w = "svg" : f.type === "math" && (w = "mathml"), l == null ? Ne(
      f,
      g,
      N,
      m,
      E,
      w,
      O,
      y
    ) : je(
      l,
      f,
      m,
      E,
      w,
      O,
      y
    );
  }, Ne = (l, f, g, N, m, E, w, O) => {
    let y, b;
    const { props: $, shapeFlag: x, transition: V, dirs: M } = l;
    if (y = l.el = s(
      l.type,
      E,
      $ && $.is,
      $
    ), x & 8 ? p(y, l.children) : x & 16 && ce(
      l.children,
      y,
      null,
      N,
      m,
      qn(l, E),
      w,
      O
    ), M && rt(l, null, N, "created"), oe(y, l, l.scopeId, w, N), $) {
      for (const k in $)
        k !== "value" && !It(k) && r(y, k, null, $[k], E, N);
      "value" in $ && r(y, "value", null, $.value, E), (b = $.onVnodeBeforeMount) && Se(b, N, l);
    }
    d.NODE_ENV !== "production" && (hn(y, "__vnode", l, !0), hn(y, "__vueParentComponent", N, !0)), M && rt(l, null, N, "beforeMount");
    const F = ql(m, V);
    F && V.beforeEnter(y), o(y, f, g), ((b = $ && $.onVnodeMounted) || F || M) && pe(() => {
      b && Se(b, N, l), F && V.enter(y), M && rt(l, null, N, "mounted");
    }, m);
  }, oe = (l, f, g, N, m) => {
    if (g && D(l, g), N)
      for (let E = 0; E < N.length; E++)
        D(l, N[E]);
    if (m) {
      let E = m.subTree;
      if (d.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && (E = $o(E.children) || E), f === E || Vr(E.type) && (E.ssContent === f || E.ssFallback === f)) {
        const w = m.vnode;
        oe(
          l,
          w,
          w.scopeId,
          w.slotScopeIds,
          m.parent
        );
      }
    }
  }, ce = (l, f, g, N, m, E, w, O, y = 0) => {
    for (let b = y; b < l.length; b++) {
      const $ = l[b] = O ? Xe(l[b]) : Oe(l[b]);
      I(
        null,
        $,
        f,
        g,
        N,
        m,
        E,
        w,
        O
      );
    }
  }, je = (l, f, g, N, m, E, w) => {
    const O = f.el = l.el;
    d.NODE_ENV !== "production" && (O.__vnode = f);
    let { patchFlag: y, dynamicChildren: b, dirs: $ } = f;
    y |= l.patchFlag & 16;
    const x = l.props || W, V = f.props || W;
    let M;
    if (g && st(g, !1), (M = V.onVnodeBeforeUpdate) && Se(M, g, f, l), $ && rt(f, l, g, "beforeUpdate"), g && st(g, !0), d.NODE_ENV !== "production" && Pe && (y = 0, w = !1, b = null), (x.innerHTML && V.innerHTML == null || x.textContent && V.textContent == null) && p(O, ""), b ? (Je(
      l.dynamicChildren,
      b,
      O,
      g,
      N,
      qn(f, m),
      E
    ), d.NODE_ENV !== "production" && cn(l, f)) : w || Ve(
      l,
      f,
      O,
      null,
      g,
      N,
      qn(f, m),
      E,
      !1
    ), y > 0) {
      if (y & 16)
        be(O, x, V, g, m);
      else if (y & 2 && x.class !== V.class && r(O, "class", null, V.class, m), y & 4 && r(O, "style", x.style, V.style, m), y & 8) {
        const F = f.dynamicProps;
        for (let k = 0; k < F.length; k++) {
          const B = F[k], ae = x[B], ie = V[B];
          (ie !== ae || B === "value") && r(O, B, ae, ie, m, g);
        }
      }
      y & 1 && l.children !== f.children && p(O, f.children);
    } else !w && b == null && be(O, x, V, g, m);
    ((M = V.onVnodeUpdated) || $) && pe(() => {
      M && Se(M, g, f, l), $ && rt(f, l, g, "updated");
    }, N);
  }, Je = (l, f, g, N, m, E, w) => {
    for (let O = 0; O < f.length; O++) {
      const y = l[O], b = f[O], $ = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === $e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !$t(y, b) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 70) ? a(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      I(
        y,
        b,
        $,
        null,
        N,
        m,
        E,
        w,
        !0
      );
    }
  }, be = (l, f, g, N, m) => {
    if (f !== g) {
      if (f !== W)
        for (const E in f)
          !It(E) && !(E in g) && r(
            l,
            E,
            f[E],
            null,
            m,
            N
          );
      for (const E in g) {
        if (It(E)) continue;
        const w = g[E], O = f[E];
        w !== O && E !== "value" && r(l, E, O, w, m, N);
      }
      "value" in g && r(l, "value", f.value, g.value, m);
    }
  }, Xt = (l, f, g, N, m, E, w, O, y) => {
    const b = f.el = l ? l.el : c(""), $ = f.anchor = l ? l.anchor : c("");
    let { patchFlag: x, dynamicChildren: V, slotScopeIds: M } = f;
    d.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Pe || x & 2048) && (x = 0, y = !1, V = null), M && (O = O ? O.concat(M) : M), l == null ? (o(b, g, N), o($, g, N), ce(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      g,
      $,
      m,
      E,
      w,
      O,
      y
    )) : x > 0 && x & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (Je(
      l.dynamicChildren,
      V,
      g,
      m,
      E,
      w,
      O
    ), d.NODE_ENV !== "production" ? cn(l, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || m && f === m.subTree) && cn(
        l,
        f,
        !0
        /* shallow */
      )
    )) : Ve(
      l,
      f,
      g,
      $,
      m,
      E,
      w,
      O,
      y
    );
  }, Io = (l, f, g, N, m, E, w, O, y) => {
    f.slotScopeIds = O, l == null ? f.shapeFlag & 512 ? m.ctx.activate(
      f,
      g,
      N,
      w,
      y
    ) : Ye(
      f,
      g,
      N,
      m,
      E,
      w,
      y
    ) : fe(l, f, y);
  }, Ye = (l, f, g, N, m, E, w) => {
    const O = l.component = hc(
      l,
      N,
      m
    );
    if (d.NODE_ENV !== "production" && O.type.__hmrId && Bs(O), d.NODE_ENV !== "production" && (on(l), He(O, "mount")), Vo(l) && (O.ctx.renderer = xt), d.NODE_ENV !== "production" && He(O, "init"), _c(O, !1, w), d.NODE_ENV !== "production" && Le(O, "init"), O.asyncDep) {
      if (d.NODE_ENV !== "production" && Pe && (l.el = null), m && m.registerDep(O, j, w), !l.el) {
        const y = O.subTree = ht(De);
        K(null, y, f, g);
      }
    } else
      j(
        O,
        l,
        f,
        g,
        m,
        E,
        w
      );
    d.NODE_ENV !== "production" && (rn(), Le(O, "mount"));
  }, fe = (l, f, g) => {
    const N = f.component = l.component;
    if (tc(l, f, g))
      if (N.asyncDep && !N.asyncResolved) {
        d.NODE_ENV !== "production" && on(f), R(N, f, g), d.NODE_ENV !== "production" && rn();
        return;
      } else
        N.next = f, N.update();
    else
      f.el = l.el, N.vnode = f;
  }, j = (l, f, g, N, m, E, w) => {
    const O = () => {
      if (l.isMounted) {
        let { next: x, bu: V, u: M, parent: F, vnode: k } = l;
        {
          const de = Or(l);
          if (de) {
            x && (x.el = k.el, R(l, x, w)), de.asyncDep.then(() => {
              l.isUnmounted || O();
            });
            return;
          }
        }
        let B = x, ae;
        d.NODE_ENV !== "production" && on(x || l.vnode), st(l, !1), x ? (x.el = k.el, R(l, x, w)) : x = k, V && Ct(V), (ae = x.props && x.props.onVnodeBeforeUpdate) && Se(ae, F, x, k), st(l, !0), d.NODE_ENV !== "production" && He(l, "render");
        const ie = Gn(l);
        d.NODE_ENV !== "production" && Le(l, "render");
        const ye = l.subTree;
        l.subTree = ie, d.NODE_ENV !== "production" && He(l, "patch"), I(
          ye,
          ie,
          // parent may have changed if it's in a teleport
          a(ye.el),
          // anchor may have changed if it's in a fragment
          Zt(ye),
          l,
          m,
          E
        ), d.NODE_ENV !== "production" && Le(l, "patch"), x.el = ie.el, B === null && nc(l, ie.el), M && pe(M, m), (ae = x.props && x.props.onVnodeUpdated) && pe(
          () => Se(ae, F, x, k),
          m
        ), d.NODE_ENV !== "production" && or(l), d.NODE_ENV !== "production" && rn();
      } else {
        let x;
        const { el: V, props: M } = f, { bm: F, m: k, parent: B, root: ae, type: ie } = l, ye = jt(f);
        if (st(l, !1), F && Ct(F), !ye && (x = M && M.onVnodeBeforeMount) && Se(x, B, f), st(l, !0), V && jo) {
          const de = () => {
            d.NODE_ENV !== "production" && He(l, "render"), l.subTree = Gn(l), d.NODE_ENV !== "production" && Le(l, "render"), d.NODE_ENV !== "production" && He(l, "hydrate"), jo(
              V,
              l.subTree,
              l,
              m,
              null
            ), d.NODE_ENV !== "production" && Le(l, "hydrate");
          };
          ye && ie.__asyncHydrate ? ie.__asyncHydrate(
            V,
            l,
            de
          ) : de();
        } else {
          ae.ce && ae.ce._injectChildStyle(ie), d.NODE_ENV !== "production" && He(l, "render");
          const de = l.subTree = Gn(l);
          d.NODE_ENV !== "production" && Le(l, "render"), d.NODE_ENV !== "production" && He(l, "patch"), I(
            null,
            de,
            g,
            N,
            l,
            m,
            E
          ), d.NODE_ENV !== "production" && Le(l, "patch"), f.el = de.el;
        }
        if (k && pe(k, m), !ye && (x = M && M.onVnodeMounted)) {
          const de = f;
          pe(
            () => Se(x, B, de),
            m
          );
        }
        (f.shapeFlag & 256 || B && jt(B.vnode) && B.vnode.shapeFlag & 256) && l.a && pe(l.a, m), l.isMounted = !0, d.NODE_ENV !== "production" && Js(l), f = g = N = null;
      }
    };
    l.scope.on();
    const y = l.effect = new Si(O);
    l.scope.off();
    const b = l.update = y.run.bind(y), $ = l.job = y.runIfDirty.bind(y);
    $.i = l, $.id = l.uid, y.scheduler = () => $n($), st(l, !0), d.NODE_ENV !== "production" && (y.onTrack = l.rtc ? (x) => Ct(l.rtc, x) : void 0, y.onTrigger = l.rtg ? (x) => Ct(l.rtg, x) : void 0), b();
  }, R = (l, f, g) => {
    f.component = l;
    const N = l.vnode.props;
    l.vnode = f, l.next = null, Al(l, f.props, N, g), Bl(l, f.children, g), ke(), Ko(l), qe();
  }, Ve = (l, f, g, N, m, E, w, O, y = !1) => {
    const b = l && l.children, $ = l ? l.shapeFlag : 0, x = f.children, { patchFlag: V, shapeFlag: M } = f;
    if (V > 0) {
      if (V & 128) {
        wt(
          b,
          x,
          g,
          N,
          m,
          E,
          w,
          O,
          y
        );
        return;
      } else if (V & 256) {
        Rn(
          b,
          x,
          g,
          N,
          m,
          E,
          w,
          O,
          y
        );
        return;
      }
    }
    M & 8 ? ($ & 16 && Dt(b, m, E), x !== b && p(g, x)) : $ & 16 ? M & 16 ? wt(
      b,
      x,
      g,
      N,
      m,
      E,
      w,
      O,
      y
    ) : Dt(b, m, E, !0) : ($ & 8 && p(g, ""), M & 16 && ce(
      x,
      g,
      N,
      m,
      E,
      w,
      O,
      y
    ));
  }, Rn = (l, f, g, N, m, E, w, O, y) => {
    l = l || Nt, f = f || Nt;
    const b = l.length, $ = f.length, x = Math.min(b, $);
    let V;
    for (V = 0; V < x; V++) {
      const M = f[V] = y ? Xe(f[V]) : Oe(f[V]);
      I(
        l[V],
        M,
        g,
        null,
        m,
        E,
        w,
        O,
        y
      );
    }
    b > $ ? Dt(
      l,
      m,
      E,
      !0,
      !1,
      x
    ) : ce(
      f,
      g,
      N,
      m,
      E,
      w,
      O,
      y,
      x
    );
  }, wt = (l, f, g, N, m, E, w, O, y) => {
    let b = 0;
    const $ = f.length;
    let x = l.length - 1, V = $ - 1;
    for (; b <= x && b <= V; ) {
      const M = l[b], F = f[b] = y ? Xe(f[b]) : Oe(f[b]);
      if ($t(M, F))
        I(
          M,
          F,
          g,
          null,
          m,
          E,
          w,
          O,
          y
        );
      else
        break;
      b++;
    }
    for (; b <= x && b <= V; ) {
      const M = l[x], F = f[V] = y ? Xe(f[V]) : Oe(f[V]);
      if ($t(M, F))
        I(
          M,
          F,
          g,
          null,
          m,
          E,
          w,
          O,
          y
        );
      else
        break;
      x--, V--;
    }
    if (b > x) {
      if (b <= V) {
        const M = V + 1, F = M < $ ? f[M].el : N;
        for (; b <= V; )
          I(
            null,
            f[b] = y ? Xe(f[b]) : Oe(f[b]),
            g,
            F,
            m,
            E,
            w,
            O,
            y
          ), b++;
      }
    } else if (b > V)
      for (; b <= x; )
        ze(l[b], m, E, !0), b++;
    else {
      const M = b, F = b, k = /* @__PURE__ */ new Map();
      for (b = F; b <= V; b++) {
        const re = f[b] = y ? Xe(f[b]) : Oe(f[b]);
        re.key != null && (d.NODE_ENV !== "production" && k.has(re.key) && v(
          "Duplicate keys found during update:",
          JSON.stringify(re.key),
          "Make sure keys are unique."
        ), k.set(re.key, b));
      }
      let B, ae = 0;
      const ie = V - F + 1;
      let ye = !1, de = 0;
      const Vt = new Array(ie);
      for (b = 0; b < ie; b++) Vt[b] = 0;
      for (b = M; b <= x; b++) {
        const re = l[b];
        if (ae >= ie) {
          ze(re, m, E, !0);
          continue;
        }
        let Ce;
        if (re.key != null)
          Ce = k.get(re.key);
        else
          for (B = F; B <= V; B++)
            if (Vt[B - F] === 0 && $t(re, f[B])) {
              Ce = B;
              break;
            }
        Ce === void 0 ? ze(re, m, E, !0) : (Vt[Ce - F] = b + 1, Ce >= de ? de = Ce : ye = !0, I(
          re,
          f[Ce],
          g,
          null,
          m,
          E,
          w,
          O,
          y
        ), ae++);
      }
      const Fo = ye ? Gl(Vt) : Nt;
      for (B = Fo.length - 1, b = ie - 1; b >= 0; b--) {
        const re = F + b, Ce = f[re], Ho = re + 1 < $ ? f[re + 1].el : N;
        Vt[b] === 0 ? I(
          null,
          Ce,
          g,
          Ho,
          m,
          E,
          w,
          O,
          y
        ) : ye && (B < 0 || b !== Fo[B] ? mt(Ce, g, Ho, 2) : B--);
      }
    }
  }, mt = (l, f, g, N, m = null) => {
    const { el: E, type: w, transition: O, children: y, shapeFlag: b } = l;
    if (b & 6) {
      mt(l.component.subTree, f, g, N);
      return;
    }
    if (b & 128) {
      l.suspense.move(f, g, N);
      return;
    }
    if (b & 64) {
      w.move(l, f, g, xt);
      return;
    }
    if (w === $e) {
      o(E, f, g);
      for (let x = 0; x < y.length; x++)
        mt(y[x], f, g, N);
      o(l.anchor, f, g);
      return;
    }
    if (w === un) {
      ue(l, f, g);
      return;
    }
    if (N !== 2 && b & 1 && O)
      if (N === 0)
        O.beforeEnter(E), o(E, f, g), pe(() => O.enter(E), m);
      else {
        const { leave: x, delayLeave: V, afterLeave: M } = O, F = () => o(E, f, g), k = () => {
          x(E, () => {
            F(), M && M();
          });
        };
        V ? V(E, F, k) : k();
      }
    else
      o(E, f, g);
  }, ze = (l, f, g, N = !1, m = !1) => {
    const {
      type: E,
      props: w,
      ref: O,
      children: y,
      dynamicChildren: b,
      shapeFlag: $,
      patchFlag: x,
      dirs: V,
      cacheIndex: M
    } = l;
    if (x === -2 && (m = !1), O != null && bn(O, null, g, l, !0), M != null && (f.renderCache[M] = void 0), $ & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const F = $ & 1 && V, k = !jt(l);
    let B;
    if (k && (B = w && w.onVnodeBeforeUnmount) && Se(B, f, l), $ & 6)
      Fr(l.component, g, N);
    else {
      if ($ & 128) {
        l.suspense.unmount(g, N);
        return;
      }
      F && rt(l, null, f, "beforeUnmount"), $ & 64 ? l.type.remove(
        l,
        f,
        g,
        xt,
        N
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== $e || x > 0 && x & 64) ? Dt(
        b,
        f,
        g,
        !1,
        !0
      ) : (E === $e && x & 384 || !m && $ & 16) && Dt(y, f, g), N && jn(l);
    }
    (k && (B = w && w.onVnodeUnmounted) || F) && pe(() => {
      B && Se(B, f, l), F && rt(l, null, f, "unmounted");
    }, g);
  }, jn = (l) => {
    const { type: f, el: g, anchor: N, transition: m } = l;
    if (f === $e) {
      d.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && m && !m.persisted ? l.children.forEach((w) => {
        w.type === De ? i(w.el) : jn(w);
      }) : jr(g, N);
      return;
    }
    if (f === un) {
      C(l);
      return;
    }
    const E = () => {
      i(g), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (l.shapeFlag & 1 && m && !m.persisted) {
      const { leave: w, delayLeave: O } = m, y = () => w(g, E);
      O ? O(l.el, E, y) : y();
    } else
      E();
  }, jr = (l, f) => {
    let g;
    for (; l !== f; )
      g = _(l), i(l), l = g;
    i(f);
  }, Fr = (l, f, g) => {
    d.NODE_ENV !== "production" && l.type.__hmrId && Ws(l);
    const { bum: N, scope: m, job: E, subTree: w, um: O, m: y, a: b } = l;
    Zo(y), Zo(b), N && Ct(N), m.stop(), E && (E.flags |= 8, ze(w, l, f, g)), O && pe(O, f), pe(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), d.NODE_ENV !== "production" && zs(l);
  }, Dt = (l, f, g, N = !1, m = !1, E = 0) => {
    for (let w = E; w < l.length; w++)
      ze(l[w], f, g, N, m);
  }, Zt = (l) => {
    if (l.shapeFlag & 6)
      return Zt(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const f = _(l.anchor || l.el), g = f && f[tl];
    return g ? _(g) : f;
  };
  let Fn = !1;
  const Po = (l, f, g) => {
    l == null ? f._vnode && ze(f._vnode, null, null, !0) : I(
      f._vnode || null,
      l,
      f,
      null,
      null,
      null,
      g
    ), f._vnode = l, Fn || (Fn = !0, Ko(), Zi(), Fn = !1);
  }, xt = {
    p: I,
    um: ze,
    m: mt,
    r: jn,
    mt: Ye,
    mc: ce,
    pc: Ve,
    pbc: Je,
    n: Zt,
    o: e
  };
  let Ro, jo;
  return {
    render: Po,
    hydrate: Ro,
    createApp: Cl(Po, Ro)
  };
}
function qn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function st({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ql(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function cn(e, t, n = !1) {
  const o = e.children, i = t.children;
  if (T(o) && T(i))
    for (let r = 0; r < o.length; r++) {
      const s = o[r];
      let c = i[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = i[r] = Xe(i[r]), c.el = s.el), !n && c.patchFlag !== -2 && cn(s, c)), c.type === zt && (c.el = s.el), d.NODE_ENV !== "production" && c.type === De && !c.el && (c.el = s.el);
    }
}
function Gl(e) {
  const t = e.slice(), n = [0];
  let o, i, r, s, c;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const h = e[o];
    if (h !== 0) {
      if (i = n[n.length - 1], e[i] < h) {
        t[o] = i, n.push(o);
        continue;
      }
      for (r = 0, s = n.length - 1; r < s; )
        c = r + s >> 1, e[n[c]] < h ? r = c + 1 : s = c;
      h < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, s = n[r - 1]; r-- > 0; )
    n[r] = s, s = t[s];
  return n;
}
function Or(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Or(t);
}
function Zo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Jl = Symbol.for("v-scx"), Yl = () => {
  {
    const e = ln(Jl);
    return e || d.NODE_ENV !== "production" && v(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function fn(e, t, n) {
  return d.NODE_ENV !== "production" && !A(t) && v(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), vr(e, t, n);
}
function vr(e, t, n = W) {
  const { immediate: o, deep: i, flush: r, once: s } = n;
  d.NODE_ENV !== "production" && !t && (o !== void 0 && v(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && v(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && v(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = J({}, n);
  d.NODE_ENV !== "production" && (c.onWarn = v);
  const u = t && o || !t && r !== "post";
  let h;
  if (kt) {
    if (r === "sync") {
      const D = Yl();
      h = D.__watcherHandles || (D.__watcherHandles = []);
    } else if (!u) {
      const D = () => {
      };
      return D.stop = Z, D.resume = Z, D.pause = Z, D;
    }
  }
  const p = te;
  c.call = (D, S, I) => Re(D, p, S, I);
  let a = !1;
  r === "post" ? c.scheduler = (D) => {
    pe(D, p && p.suspense);
  } : r !== "sync" && (a = !0, c.scheduler = (D, S) => {
    S ? D() : $n(D);
  }), c.augmentJob = (D) => {
    t && (D.flags |= 4), a && (D.flags |= 2, p && (D.id = p.uid, D.i = p));
  };
  const _ = Ms(e, t, c);
  return kt && (h ? h.push(_) : u && _()), _;
}
function zl(e, t, n) {
  const o = this.proxy, i = Y(e) ? e.includes(".") ? wr(o, e) : () => o[e] : e.bind(o, o);
  let r;
  A(t) ? r = t : (r = t.handler, n = t);
  const s = Qt(this), c = vr(i, r.bind(o), n);
  return s(), c;
}
function wr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let i = 0; i < n.length && o; i++)
      o = o[n[i]];
    return o;
  };
}
const Ql = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ve(t)}Modifiers`] || e[`${tt(t)}Modifiers`];
function Xl(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || W;
  if (d.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [a]
    } = e;
    if (p)
      if (!(t in p))
        (!a || !(lt(ve(t)) in a)) && v(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${lt(ve(t))}" prop.`
        );
      else {
        const _ = p[t];
        A(_) && (_(...n) || v(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const r = t.startsWith("update:"), s = r && Ql(o, t.slice(7));
  if (s && (s.trim && (i = n.map((p) => Y(p) ? p.trim() : p)), s.number && (i = n.map(Kr))), d.NODE_ENV !== "production" && Zs(e, t, i), d.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[lt(p)] && v(
      `Event "${p}" is emitted in component ${Pn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${tt(
        t
      )}" instead of "${t}".`
    );
  }
  let c, u = o[c = lt(t)] || // also try camelCase event handler (#2249)
  o[c = lt(ve(t))];
  !u && r && (u = o[c = lt(tt(t))]), u && Re(
    u,
    e,
    6,
    i
  );
  const h = o[c + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Re(
      h,
      e,
      6,
      i
    );
  }
}
function Dr(e, t, n = !1) {
  const o = t.emitsCache, i = o.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let s = {}, c = !1;
  if (!A(e)) {
    const u = (h) => {
      const p = Dr(h, t, !0);
      p && (c = !0, J(s, p));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !c ? (q(e) && o.set(e, null), null) : (T(r) ? r.forEach((u) => s[u] = null) : J(s, r), q(e) && o.set(e, s), s);
}
function Mn(e, t) {
  return !e || !qt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, tt(t)) || H(e, t));
}
let so = !1;
function vn() {
  so = !0;
}
function Gn(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: i,
    propsOptions: [r],
    slots: s,
    attrs: c,
    emit: u,
    render: h,
    renderCache: p,
    props: a,
    data: _,
    setupState: D,
    ctx: S,
    inheritAttrs: I
  } = e, ne = Nn(e);
  let K, z;
  d.NODE_ENV !== "production" && (so = !1);
  try {
    if (n.shapeFlag & 4) {
      const C = i || o, ee = d.NODE_ENV !== "production" && D.__isScriptSetup ? new Proxy(C, {
        get(Ne, oe, ce) {
          return v(
            `Property '${String(
              oe
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Ne, oe, ce);
        }
      }) : C;
      K = Oe(
        h.call(
          ee,
          C,
          p,
          d.NODE_ENV !== "production" ? Ie(a) : a,
          D,
          _,
          S
        )
      ), z = c;
    } else {
      const C = t;
      d.NODE_ENV !== "production" && c === a && vn(), K = Oe(
        C.length > 1 ? C(
          d.NODE_ENV !== "production" ? Ie(a) : a,
          d.NODE_ENV !== "production" ? {
            get attrs() {
              return vn(), Ie(c);
            },
            slots: s,
            emit: u
          } : { attrs: c, slots: s, emit: u }
        ) : C(
          d.NODE_ENV !== "production" ? Ie(a) : a,
          null
        )
      ), z = t.props ? c : Zl(c);
    }
  } catch (C) {
    Ft.length = 0, Jt(C, e, 1), K = ht(De);
  }
  let U = K, ue;
  if (d.NODE_ENV !== "production" && K.patchFlag > 0 && K.patchFlag & 2048 && ([U, ue] = xr(K)), z && I !== !1) {
    const C = Object.keys(z), { shapeFlag: ee } = U;
    if (C.length) {
      if (ee & 7)
        r && C.some(pn) && (z = ec(
          z,
          r
        )), U = ot(U, z, !1, !0);
      else if (d.NODE_ENV !== "production" && !so && U.type !== De) {
        const Ne = Object.keys(c), oe = [], ce = [];
        for (let je = 0, Je = Ne.length; je < Je; je++) {
          const be = Ne[je];
          qt(be) ? pn(be) || oe.push(be[2].toLowerCase() + be.slice(3)) : ce.push(be);
        }
        ce.length && v(
          `Extraneous non-props attributes (${ce.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), oe.length && v(
          `Extraneous non-emits event listeners (${oe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (d.NODE_ENV !== "production" && !ei(U) && v(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), U = ot(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition && (d.NODE_ENV !== "production" && !ei(U) && v(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), xo(U, n.transition)), d.NODE_ENV !== "production" && ue ? ue(U) : K = U, Nn(ne), K;
}
const xr = (e) => {
  const t = e.children, n = e.dynamicChildren, o = $o(t, !1);
  if (o) {
    if (d.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return xr(o);
  } else return [e, void 0];
  const i = t.indexOf(o), r = n ? n.indexOf(o) : -1, s = (c) => {
    t[i] = c, n && (r > -1 ? n[r] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [Oe(o), s];
};
function $o(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (In(i)) {
      if (i.type !== De || i.children === "v-if") {
        if (n)
          return;
        if (n = i, d.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return $o(n.children);
      }
    } else
      return;
  }
  return n;
}
const Zl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || qt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ec = (e, t) => {
  const n = {};
  for (const o in e)
    (!pn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, ei = (e) => e.shapeFlag & 7 || e.type === De;
function tc(e, t, n) {
  const { props: o, children: i, component: r } = e, { props: s, children: c, patchFlag: u } = t, h = r.emitsOptions;
  if (d.NODE_ENV !== "production" && (i || c) && Pe || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? ti(o, s, h) : !!s;
    if (u & 8) {
      const p = t.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        const _ = p[a];
        if (s[_] !== o[_] && !Mn(h, _))
          return !0;
      }
    }
  } else
    return (i || c) && (!c || !c.$stable) ? !0 : o === s ? !1 : o ? s ? ti(o, s, h) : !0 : !!s;
  return !1;
}
function ti(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < o.length; i++) {
    const r = o[i];
    if (t[r] !== e[r] && !Mn(n, r))
      return !0;
  }
  return !1;
}
function nc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Vr = (e) => e.__isSuspense;
function oc(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : Xi(e);
}
const $e = Symbol.for("v-fgt"), zt = Symbol.for("v-txt"), De = Symbol.for("v-cmt"), un = Symbol.for("v-stc"), Ft = [];
let _e = null;
function ic(e = !1) {
  Ft.push(_e = e ? null : []);
}
function rc() {
  Ft.pop(), _e = Ft[Ft.length - 1] || null;
}
let Kt = 1;
function ni(e, t = !1) {
  Kt += e, e < 0 && _e && t && (_e.hasOnce = !0);
}
function sc(e) {
  return e.dynamicChildren = Kt > 0 ? _e || Nt : null, rc(), Kt > 0 && _e && _e.push(e), e;
}
function lc(e, t, n, o, i, r) {
  return sc(
    Sr(
      e,
      t,
      n,
      o,
      i,
      r,
      !0
    )
  );
}
function In(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function $t(e, t) {
  if (d.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = sn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const cc = (...e) => Tr(
  ...e
), Cr = ({ key: e }) => e ?? null, an = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Y(e) || Q(e) || A(e) ? { i: me, r: e, k: t, f: !!n } : e : null);
function Sr(e, t = null, n = null, o = 0, i = null, r = e === $e ? 0 : 1, s = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Cr(t),
    ref: t && an(t),
    scopeId: rr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: me
  };
  return c ? (Ao(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= Y(n) ? 8 : 16), d.NODE_ENV !== "production" && u.key !== u.key && v("VNode created with invalid key (NaN). VNode type:", u.type), Kt > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  _e && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && _e.push(u), u;
}
const ht = d.NODE_ENV !== "production" ? cc : Tr;
function Tr(e, t = null, n = null, o = 0, i = null, r = !1) {
  if ((!e || e === _l) && (d.NODE_ENV !== "production" && !e && v(`Invalid vnode type when creating vnode: ${e}.`), e = De), In(e)) {
    const c = ot(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ao(c, n), Kt > 0 && !r && _e && (c.shapeFlag & 6 ? _e[_e.indexOf(e)] = c : _e.push(c)), c.patchFlag = -2, c;
  }
  if (Pr(e) && (e = e.__vccOpts), t) {
    t = fc(t);
    let { class: c, style: u } = t;
    c && !Y(c) && (t.class = Eo(c)), q(u) && (Bt(u) && !T(u) && (u = J({}, u)), t.style = _o(u));
  }
  const s = Y(e) ? 1 : Vr(e) ? 128 : nl(e) ? 64 : q(e) ? 4 : A(e) ? 2 : 0;
  return d.NODE_ENV !== "production" && s & 4 && Bt(e) && (e = P(e), v(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Sr(
    e,
    t,
    n,
    o,
    i,
    s,
    r,
    !0
  );
}
function fc(e) {
  return e ? Bt(e) || gr(e) ? J({}, e) : e : null;
}
function ot(e, t, n = !1, o = !1) {
  const { props: i, ref: r, patchFlag: s, children: c, transition: u } = e, h = t ? ac(i || {}, t) : i, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Cr(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? T(r) ? r.concat(an(t)) : [r, an(t)] : an(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: d.NODE_ENV !== "production" && s === -1 && T(c) ? c.map($r) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== $e ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ot(e.ssContent),
    ssFallback: e.ssFallback && ot(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && o && xo(
    p,
    u.clone(p)
  ), p;
}
function $r(e) {
  const t = ot(e);
  return T(e.children) && (t.children = e.children.map($r)), t;
}
function uc(e = " ", t = 0) {
  return ht(zt, null, e, t);
}
function Oe(e) {
  return e == null || typeof e == "boolean" ? ht(De) : T(e) ? ht(
    $e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : In(e) ? Xe(e) : ht(zt, null, String(e));
}
function Xe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ot(e);
}
function Ao(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Ao(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !gr(t) ? t._ctx = me : i === 3 && me && (me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else A(t) ? (t = { default: t, _ctx: me }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [uc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ac(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const i in o)
      if (i === "class")
        t.class !== o.class && (t.class = Eo([t.class, o.class]));
      else if (i === "style")
        t.style = _o([t.style, o.style]);
      else if (qt(i)) {
        const r = t[i], s = o[i];
        s && r !== s && !(T(r) && r.includes(s)) && (t[i] = r ? [].concat(r, s) : s);
      } else i !== "" && (t[i] = o[i]);
  }
  return t;
}
function Se(e, t, n, o = null) {
  Re(e, t, 7, [
    n,
    o
  ]);
}
const dc = dr();
let pc = 0;
function hc(e, t, n) {
  const o = e.type, i = (t ? t.appContext : e.appContext) || dc, r = {
    uid: pc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new os(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: _r(o, i),
    emitsOptions: Dr(o, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: W,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: W,
    data: W,
    props: W,
    attrs: W,
    slots: W,
    refs: W,
    setupState: W,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return d.NODE_ENV !== "production" ? r.ctx = El(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Xl.bind(null, r), e.ce && e.ce(r), r;
}
let te = null;
const gc = () => te || me;
let wn, lo;
{
  const e = Gt(), t = (n, o) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(o), (r) => {
      i.length > 1 ? i.forEach((s) => s(r)) : i[0](r);
    };
  };
  wn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => te = n
  ), lo = t(
    "__VUE_SSR_SETTERS__",
    (n) => kt = n
  );
}
const Qt = (e) => {
  const t = te;
  return wn(e), e.scope.on(), () => {
    e.scope.off(), wn(t);
  };
}, oi = () => {
  te && te.scope.off(), wn(null);
}, mc = /* @__PURE__ */ Ke("slot,component");
function co(e, { isNativeTag: t }) {
  (mc(e) || t(e)) && v(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ar(e) {
  return e.vnode.shapeFlag & 4;
}
let kt = !1;
function _c(e, t = !1, n = !1) {
  t && lo(t);
  const { props: o, children: i } = e.vnode, r = Ar(e);
  Tl(e, o, r, t), Ul(e, i, n);
  const s = r ? Ec(e, t) : void 0;
  return t && lo(!1), s;
}
function Ec(e, t) {
  var n;
  const o = e.type;
  if (d.NODE_ENV !== "production") {
    if (o.name && co(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let s = 0; s < r.length; s++)
        co(r[s], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let s = 0; s < r.length; s++)
        sr(r[s]);
    }
    o.compilerOptions && Nc() && v(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ur), d.NODE_ENV !== "production" && Nl(e);
  const { setup: i } = o;
  if (i) {
    ke();
    const r = e.setupContext = i.length > 1 ? yc(e) : null, s = Qt(e), c = vt(
      i,
      e,
      0,
      [
        d.NODE_ENV !== "production" ? Ie(e.props) : e.props,
        r
      ]
    ), u = ho(c);
    if (qe(), s(), (u || e.sp) && !jt(e) && lr(e), u) {
      if (c.then(oi, oi), t)
        return c.then((h) => {
          ii(e, h, t);
        }).catch((h) => {
          Jt(h, e, 0);
        });
      if (e.asyncDep = c, d.NODE_ENV !== "production" && !e.suspense) {
        const h = (n = o.name) != null ? n : "Anonymous";
        v(
          `Component <${h}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ii(e, c, t);
  } else
    Mr(e, t);
}
function ii(e, t, n) {
  A(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) ? (d.NODE_ENV !== "production" && In(t) && v(
    "setup() should not return VNodes directly - return a render function instead."
  ), d.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ji(t), d.NODE_ENV !== "production" && bl(e)) : d.NODE_ENV !== "production" && t !== void 0 && v(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Mr(e, n);
}
let fo;
const Nc = () => !fo;
function Mr(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && fo && !o.render) {
      const i = o.template || So(e).template;
      if (i) {
        d.NODE_ENV !== "production" && He(e, "compile");
        const { isCustomElement: r, compilerOptions: s } = e.appContext.config, { delimiters: c, compilerOptions: u } = o, h = J(
          J(
            {
              isCustomElement: r,
              delimiters: c
            },
            s
          ),
          u
        );
        o.render = fo(i, h), d.NODE_ENV !== "production" && Le(e, "compile");
      }
    }
    e.render = o.render || Z;
  }
  {
    const i = Qt(e);
    ke();
    try {
      Ol(e);
    } finally {
      qe(), i();
    }
  }
  d.NODE_ENV !== "production" && !o.render && e.render === Z && !t && (o.template ? v(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : v("Component is missing template or render function: ", o));
}
const ri = d.NODE_ENV !== "production" ? {
  get(e, t) {
    return vn(), X(e, "get", ""), e[t];
  },
  set() {
    return v("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return v("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return X(e, "get", ""), e[t];
  }
};
function bc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return X(e, "get", "$slots"), t[n];
    }
  });
}
function yc(e) {
  const t = (n) => {
    if (d.NODE_ENV !== "production" && (e.exposed && v("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (T(n) ? o = "array" : Q(n) && (o = "ref")), o !== "object" && v(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (d.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, ri));
      },
      get slots() {
        return o || (o = bc(e));
      },
      get emit() {
        return (i, ...r) => e.emit(i, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, ri),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Mo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ji(Ds(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in pt)
        return pt[n](e);
    },
    has(t, n) {
      return n in t || n in pt;
    }
  })) : e.proxy;
}
const Oc = /(?:^|[-_])(\w)/g, vc = (e) => e.replace(Oc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ir(e, t = !0) {
  return A(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Pn(e, t, n = !1) {
  let o = Ir(t);
  if (!o && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (o = i[1]);
  }
  if (!o && e && e.parent) {
    const i = (r) => {
      for (const s in r)
        if (r[s] === t)
          return s;
    };
    o = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return o ? vc(o) : n ? "App" : "Anonymous";
}
function Pr(e) {
  return A(e) && "__vccOpts" in e;
}
const wc = (e, t) => {
  const n = $s(e, t, kt);
  if (d.NODE_ENV !== "production") {
    const o = gc();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Dc() {
  if (d.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(a) {
      return q(a) ? a.__isVue ? ["div", e, "VueInstance"] : Q(a) ? [
        "div",
        {},
        ["span", e, p(a)],
        "<",
        // avoid debugger accessing value affecting behavior
        c("_value" in a ? a._value : a),
        ">"
      ] : bt(a) ? [
        "div",
        {},
        ["span", e, Ee(a) ? "ShallowReactive" : "Reactive"],
        "<",
        c(a),
        `>${nt(a) ? " (readonly)" : ""}`
      ] : nt(a) ? [
        "div",
        {},
        ["span", e, Ee(a) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(a),
        ">"
      ] : null : null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...r(a.$)
        ];
    }
  };
  function r(a) {
    const _ = [];
    a.type.props && a.props && _.push(s("props", P(a.props))), a.setupState !== W && _.push(s("setup", a.setupState)), a.data !== W && _.push(s("data", P(a.data)));
    const D = u(a, "computed");
    D && _.push(s("computed", D));
    const S = u(a, "inject");
    return S && _.push(s("injected", S)), _.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), _;
  }
  function s(a, _) {
    return _ = J({}, _), Object.keys(_).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(_).map((D) => [
          "div",
          {},
          ["span", o, D + ": "],
          c(_[D], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(a, _ = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : q(a) ? ["object", { object: _ ? P(a) : a }] : ["span", n, String(a)];
  }
  function u(a, _) {
    const D = a.type;
    if (A(D))
      return;
    const S = {};
    for (const I in a.ctx)
      h(D, I, _) && (S[I] = a.ctx[I]);
    return S;
  }
  function h(a, _, D) {
    const S = a[D];
    if (T(S) && S.includes(_) || q(S) && _ in S || a.extends && h(a.extends, _, D) || a.mixins && a.mixins.some((I) => h(I, _, D)))
      return !0;
  }
  function p(a) {
    return Ee(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const si = "3.5.13", Be = d.NODE_ENV !== "production" ? v : Z;
var We = {};
let uo;
const li = typeof window < "u" && window.trustedTypes;
if (li)
  try {
    uo = /* @__PURE__ */ li.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    We.NODE_ENV !== "production" && Be(`Error creating trusted types policy: ${e}`);
  }
const Rr = uo ? (e) => uo.createHTML(e) : (e) => e, xc = "http://www.w3.org/2000/svg", Vc = "http://www.w3.org/1998/Math/MathML", Ue = typeof document < "u" ? document : null, ci = Ue && /* @__PURE__ */ Ue.createElement("template"), Cc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const i = t === "svg" ? Ue.createElementNS(xc, e) : t === "mathml" ? Ue.createElementNS(Vc, e) : n ? Ue.createElement(e, { is: n }) : Ue.createElement(e);
    return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i;
  },
  createText: (e) => Ue.createTextNode(e),
  createComment: (e) => Ue.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ue.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, i, r) {
    const s = n ? n.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      ci.innerHTML = Rr(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const c = ci.content;
      if (o === "svg" || o === "mathml") {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Sc = Symbol("_vtc");
function Tc(e, t, n) {
  const o = e[Sc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const fi = Symbol("_vod"), $c = Symbol("_vsh"), Ac = Symbol(We.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Mc = /(^|;)\s*display\s*:/;
function Ic(e, t, n) {
  const o = e.style, i = Y(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (Y(t))
        for (const s of t.split(";")) {
          const c = s.slice(0, s.indexOf(":")).trim();
          n[c] == null && dn(o, c, "");
        }
      else
        for (const s in t)
          n[s] == null && dn(o, s, "");
    for (const s in n)
      s === "display" && (r = !0), dn(o, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = o[Ac];
      s && (n += ";" + s), o.cssText = n, r = Mc.test(n);
    }
  } else t && e.removeAttribute("style");
  fi in e && (e[fi] = r ? o.display : "", e[$c] && (o.display = "none"));
}
const Pc = /[^\\];\s*$/, ui = /\s*!important$/;
function dn(e, t, n) {
  if (T(n))
    n.forEach((o) => dn(e, t, o));
  else if (n == null && (n = ""), We.NODE_ENV !== "production" && Pc.test(n) && Be(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Rc(e, t);
    ui.test(n) ? e.setProperty(
      tt(o),
      n.replace(ui, ""),
      "important"
    ) : e[o] = n;
  }
}
const ai = ["Webkit", "Moz", "ms"], Jn = {};
function Rc(e, t) {
  const n = Jn[t];
  if (n)
    return n;
  let o = ve(t);
  if (o !== "filter" && o in e)
    return Jn[t] = o;
  o = Vn(o);
  for (let i = 0; i < ai.length; i++) {
    const r = ai[i] + o;
    if (r in e)
      return Jn[t] = r;
  }
  return t;
}
const di = "http://www.w3.org/1999/xlink";
function pi(e, t, n, o, i, r = ns(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(di, t.slice(6, t.length)) : e.setAttributeNS(di, t, n) : n == null || r && !Di(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : it(n) ? String(n) : n
  );
}
function hi(e, t, n, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Rr(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const c = r === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (c !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = Di(n) : n == null && c === "string" ? (n = "", s = !0) : c === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch (c) {
    We.NODE_ENV !== "production" && !s && Be(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      c
    );
  }
  s && e.removeAttribute(i || t);
}
function jc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Fc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const gi = Symbol("_vei");
function Hc(e, t, n, o, i = null) {
  const r = e[gi] || (e[gi] = {}), s = r[t];
  if (o && s)
    s.value = We.NODE_ENV !== "production" ? _i(o, t) : o;
  else {
    const [c, u] = Lc(t);
    if (o) {
      const h = r[t] = Wc(
        We.NODE_ENV !== "production" ? _i(o, t) : o,
        i
      );
      jc(e, c, h, u);
    } else s && (Fc(e, c, s, u), r[t] = void 0);
  }
}
const mi = /(?:Once|Passive|Capture)$/;
function Lc(e) {
  let t;
  if (mi.test(e)) {
    t = {};
    let o;
    for (; o = e.match(mi); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : tt(e.slice(2)), t];
}
let Yn = 0;
const Uc = /* @__PURE__ */ Promise.resolve(), Bc = () => Yn || (Uc.then(() => Yn = 0), Yn = Date.now());
function Wc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Re(
      Kc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Bc(), n;
}
function _i(e, t) {
  return A(e) || T(e) ? e : (Be(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Z);
}
function Kc(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (i) => !i._stopped && o && o(i)
    );
  } else
    return t;
}
const Ei = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, kc = (e, t, n, o, i, r) => {
  const s = i === "svg";
  t === "class" ? Tc(e, o, s) : t === "style" ? Ic(e, n, o) : qt(t) ? pn(t) || Hc(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : qc(e, t, o, s)) ? (hi(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && pi(e, t, o, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Y(o)) ? hi(e, ve(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), pi(e, t, o, s));
};
function qc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ei(t) && A(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Ei(t) && Y(n) ? !1 : t in e;
}
const Gc = /* @__PURE__ */ J({ patchProp: kc }, Cc);
let Ni;
function Jc() {
  return Ni || (Ni = Kl(Gc));
}
const Yc = (...e) => {
  const t = Jc().createApp(...e);
  We.NODE_ENV !== "production" && (Qc(t), Xc(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const i = Zc(o);
    if (!i) return;
    const r = t._component;
    !A(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, !1, zc(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
};
function zc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Qc(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Xr(t) || Zr(t) || es(t),
    writable: !1
  });
}
function Xc(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Be(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Be(o), n;
      },
      set() {
        Be(o);
      }
    });
  }
}
function Zc(e) {
  if (Y(e)) {
    const t = document.querySelector(e);
    return We.NODE_ENV !== "production" && !t && Be(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return We.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Be(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var ef = {};
function tf() {
  Dc();
}
ef.NODE_ENV !== "production" && tf();
const ao = {
  counter: 0
}, nf = "https://raw.githubusercontent.com/adproqwq/LiteLoaderQQNT-Manifest-JsonSchema/main/manifest.schema.json", of = 4, rf = "extension", sf = "敲死那个粉色头像", lf = "liteLoader-taptaptap", cf = "敲一敲，身体好", ff = "0.0.1", uf = [
  {
    name: "Nyaruhodo",
    link: "https://github.com/nyaruhodoo"
  }
], af = [], df = [
  "win32",
  "linux",
  "darwin"
], pf = {
  renderer: "./out/renderer/index.js",
  main: "./out/main/index.js",
  preload: "./out/preload/index.js"
}, Ht = {
  $schema: nf,
  manifest_version: of,
  type: rf,
  name: sf,
  slug: lf,
  description: cf,
  version: ff,
  authors: uf,
  dependencies: af,
  platform: df,
  injects: pf
};
class bi {
  /**
   * 初始化插件配置
   */
  static async getConfig() {
    const t = await LiteLoader.api.config.get(Ht.slug, ao);
    return this.mergeConfig(t, ao);
  }
  /**
   * 更新插件配置
   */
  static async updateConfig(t) {
    await LiteLoader.api.config.set(Ht.slug, t), this.log("Config已更新", JSON.stringify(t, null, 2));
  }
  /**
   * 合并配置项
   */
  static mergeConfig(t, n) {
    const o = structuredClone(n);
    for (const [i, r] of Object.entries(t))
      if (Object.hasOwn(o, i) && Object.prototype.toString.call(r) === Object.prototype.toString.call(o[i])) {
        if (Array.isArray(r)) {
          o[i] = [.../* @__PURE__ */ new Set([...r, ...o[i]])];
          continue;
        }
        if (typeof r == "object" && r) {
          o[i] = this.mergeConfig(r, o[i]);
          continue;
        }
        o[i] = r;
      }
    return o;
  }
  /**
   * 带有插件标识的Log
   */
  static log(...t) {
    console.log(`${Ht.slug}:`, ...t);
  }
  /**
   * 生成随机整数
   */
  static randomInteger(t, n) {
    const o = t + Math.random() * (n + 1 - t);
    return Math.floor(o);
  }
  /**
   * 返回一个指定时间后决议为 resolve 的 promise
   */
  static wait(t) {
    if (!(t <= 0))
      return new Promise((n) => setTimeout(n, t));
  }
}
const hf = { "data-l-hx2boh3": "" }, gf = /* @__PURE__ */ ol({
  __name: "App",
  setup(e) {
    ((r, s) => {
      let c = document.getElementById("hx2boh3");
      c || (c = document.createElement("style"), c.id = "hx2boh3", document.head.appendChild(c), c.innerHTML = s);
    })("hx2boh3", "");
    const n = window[Ht.slug];
    let o = Sn(ao);
    const { counter: i } = Vs(o);
    return (async () => {
      const r = await bi.getConfig();
      for (const s in r)
        o[s] = r[s];
    })(), fn(o, (r) => {
      const s = JSON.parse(JSON.stringify(r));
      bi.updateConfig(s), n.configUpdate(s), new BroadcastChannel(Ht.slug).postMessage(s);
    }), (r, s) => (ic(), lc("span", hf, "你一共敲了她 " + Vi(Gi(i)) + " 次", 1));
  }
}), mf = "" + new URL("index.css", import.meta.url).href, _f = (e) => {
  const t = document.createElement("link");
  t.rel = "stylesheet", t.href = mf, document.head.append(t), Yc(gf).mount(e);
};
export {
  _f as onSettingWindowCreated
};
