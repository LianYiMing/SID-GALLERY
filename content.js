((twod)=>{
    (()=>{
        "use strict";
        const e = e=>{
            const t = Object.call
              , n = t.bind(t)
              , o = Object.getOwnPropertyDescriptor;
            return {
                __proto__: null,
                sourceWindow: e,
                F_c: n,
                F_a: Object.apply,
                F_b: Object.bind,
                F_tS: Function.toString,
                A_fE: [].forEach,
                A_so: [].some,
                A_sh: [].shift,
                A_j: [].join,
                A_po: [].pop,
                A_f: [].filter,
                A_iO: [].indexOf,
                A_iA: Array.isArray,
                O_a: Object.assign,
                O_k: Object.keys,
                O_v: Object.values,
                O_dP: Object.defineProperties,
                O_dPy: Object.defineProperty,
                O_hOP: Object.hasOwnProperty,
                O_gOPN: Object.getOwnPropertyNames,
                O_gOPD: o,
                O_gOPDs: Object.getOwnPropertyDescriptors,
                O_gPO: Object.getPrototypeOf,
                O_tS: {}.toString,
                J_p: JSON.parse,
                J_s: JSON.stringify,
                M_f: Math.floor,
                M_r: Math.random,
                M_m: Math.max,
                M_i: MutationEvent.prototype.initMutationEvent,
                M_pA: MutationEvent.prototype.ADDITION,
                M_pAT: MutationEvent.AT_TARGET,
                N_tS: (0).toString,
                N_MSI: Number.MAX_SAFE_INTEGER,
                P_t: Promise.prototype.then,
                P_c: Promise.prototype.catch,
                R_rABS: FileReader.prototype.readAsBinaryString,
                R_rAT: FileReader.prototype.readAsText,
                R_r: o(FileReader.prototype, "result").get,
                R_enq: e.ReadableStreamDefaultController ? e.ReadableStreamDefaultController.prototype.enqueue : null,
                R_cl: e.ReadableStreamDefaultController ? e.ReadableStreamDefaultController.prototype.close : null,
                S_fCC: String.fromCharCode,
                S_sl: "".slice,
                S_su: "".substr,
                S_sp_nr: "".split,
                S_iO: "".indexOf,
                S_tr: "".trim,
                S_r_nr: "".replace,
                S_rA_nr: "".replaceAll,
                S_cCA: "".charCodeAt,
                S_tLC: "".toLowerCase,
                S_tUC: "".toUpperCase,
                Y_tST: Symbol.toStringTag,
                D_pFS: DOMParser.prototype.parseFromString,
                U_cOU: URL.createObjectURL,
                U_rOU: URL.revokeObjectURL,
                X_o: XMLHttpRequest.prototype.open,
                X_pSD: XMLHttpRequest.prototype.DONE,
                X_pSH: XMLHttpRequest.prototype.HEADERS_RECEIVED,
                X_pSL: XMLHttpRequest.prototype.LOADING,
                X_pSO: XMLHttpRequest.prototype.OPENED,
                X_pSU: XMLHttpRequest.prototype.UNSENT,
                X_s: XMLHttpRequest.prototype.send,
                D_n: Date.now,
                I_tS: e=>"" + e,
                E_r: Element.prototype.remove,
                E_s: Element.prototype.setAttribute,
                D_cS: o(Document.prototype, "currentScript").get,
                D_gRS: o(Document.prototype, "readyState").get,
                D_cE: Document.prototype.createElementNS,
                D_gEBT: Document.prototype.getElementsByTagName,
                M_aN: o(MutationEvent.prototype, "attrName").get,
                M_rN: o(MutationEvent.prototype, "relatedNode").get,
                C_d: o(CustomEvent.prototype, "detail").get,
                W_aEL: addEventListener,
                W_rEL: removeEventListener,
                parseInt,
                parseFloat,
                CustomEvent,
                CompositionEvent,
                KeyboardEvent,
                MouseEvent,
                MutationEvent,
                MutationObserver,
                console: Object.assign({}, console),
                Error,
                Uint8Array,
                Blob,
                ReadableStream,
                Number,
                String,
                Proxy,
                Window,
                FileReader,
                DOMParser,
                XMLHttpRequest,
                Function,
                RegExp,
                Promise,
                encodeURIComponent,
                decodeURIComponent,
                encodeURI,
                decodeURI,
                escape,
                unescape,
                atob,
                btoa,
                setTimeout,
                clearTimeout,
                setInterval,
                clearInterval,
                postMessage,
                dispatchEvent,
                alert,
                prompt,
                confirm,
                close,
                getElementById: e.Document.prototype.getElementById,
                createEvent: e.Document.prototype.createEvent,
                createElement: e.Document.prototype.createElement
            }
        }
          , t = "vault"in twod;
        if (t && void 0 === twod.vault)
            throw "Invalid vault";
        const n = twod.vault = twod.vault || e(twod.unsafeWindow)
          , {F_c: o, F_a: s, F_b: r, F_tS: i, A_fE: a, A_so: c, A_sh: d, A_j: l, A_po: u, A_f: p, A_iO: m, A_iA: g, O_a: f, O_k: _, O_v: v, O_dP: h, O_dPy: b, O_hOP: w, O_gOPN: y, O_gOPD: M, O_gOPDs: E, O_gPO: L, O_tS: O, J_p: S, J_s: x, M_f: R, M_r: I, M_m: D, M_i: C, M_pA: P, M_pAT: j, N_tS: T, N_MSI: A, P_t: $, P_c: U, R_rABS: N, R_rAT: B, R_r: F, R_enq: X, R_cl: k, S_fCC: q, S_sl: W, S_su: H, S_iO: J, S_sp_nr: G, S_tr: K, S_rA_nr: z, S_cCA: V, S_tLC: Y, S_tUC: Z, Y_tST: Q, D_pFS: ee, D_cS: te, D_gRS: ne, D_cE: oe, D_gEBT: se, E_r: re, E_s: ie, M_aN: ae, M_rN: ce, C_d: de, U_cOU: le, U_rOU: ue, X_o: pe, X_s: me, X_pSD: ge, X_pSH: fe, X_pSL: _e, X_pSO: ve, X_pSU: he, D_n: be, I_tS: we, W_aEL: ye, W_rEL: Me, parseInt: Ee, parseFloat: Le, console: Oe, encodeURIComponent: Se, decodeURIComponent: xe, encodeURI: Re, decodeURI: Ie, escape: De, unescape: Ce, atob: Pe, btoa: je, postMessage: Te, dispatchEvent: Ae, alert: $e, prompt: Ue, confirm: Ne, close: Be, getElementById: Fe, createEvent: Xe, createElement: ke, CustomEvent: qe, CompositionEvent: We, KeyboardEvent: He, MouseEvent: Je, MutationEvent: Ge, MutationObserver: Ke, Uint8Array: ze, FileReader: Ve, DOMParser: Ye, XMLHttpRequest: Ze, Function: Qe, RegExp: et, Promise: tt, Blob: nt, ReadableStream: ot, Number: st, String: rt, Proxy: it, Window: at} = n
          , ct = o
          , dt = s
          , lt = _
          , ut = v
          , pt = f
          , mt = b
          , gt = y
          , ft = M
          , _t = L
          , vt = g
          , ht = I
          , bt = D
          , wt = (e,t,n)=>ct(dt, e, t, n)
          , yt = e=>pt({
            __proto__: null
        }, e)
          , Mt = (e,t,n)=>(mt(e, t, yt({
            value: n,
            configurable: !0,
            enumerable: !0,
            writable: !0
        })),
        e)
          , Et = (e,t)=>Ft(e, t) ? e[t] : void 0
          , Lt = (e,t)=>{
            const n = ft(e, t);
            return n ? yt(n).value : void 0
        }
          , Ot = (e,t)=>{
            const n = (e,t,o)=>{
                const s = ft(e, t)
                  , r = s ? yt(s) : void 0;
                let i;
                return r ? r.enumerable ? r.value : void 0 : --o >= 0 && (i = _t(e)) ? n(i, t, o) : void 0
            }
            ;
            return n(e, t, 5)
        }
          , St = e=>{
            const t = (t,...n)=>wt(e, t, n);
            return Mt(t, "wrappedJSObject", e),
            t
        }
          , xt = ()=>e=>St(e)
          , Rt = St(r)
          , It = S
          , Dt = e=>{
            const t = (e,n)=>{
                let o;
                if (null === e)
                    o = "null";
                else if ("object" == typeof e) {
                    if (n) {
                        if (-1 != Ut(n, e))
                            throw "Converting circular structure to JSON";
                        Mt(n, n.length, e)
                    } else
                        n = [e];
                    if (vt(e)) {
                        let s = "";
                        for (let o = 0; o < e.length; o++) {
                            let r;
                            r = Ft(e, o) ? Et(e, o) : Ot(e, o);
                            const i = t(r, n);
                            s += `${o ? "," : ""}${void 0 === i ? "null" : i}`
                        }
                        o = `[${s}]`
                    } else {
                        let s = "";
                        Nt(lt(e), (o=>{
                            const r = t(e[o], n);
                            void 0 !== r && (s += `${s ? "," : ""}${x(o)}: ${r}`)
                        }
                        )),
                        o = `{${s}}`
                    }
                    n.length -= 1
                } else
                    o = x(e);
                return o
            }
            ;
            return t(e)
        }
          , Ct = xt()(c)
          , Pt = xt()(d)
          , jt = (xt()(u),
        xt()(p),
        (e,t,n)=>{
            const o = e.length;
            let s = t || 0;
            if (s >= o)
                return [];
            s < 0 && (s = bt(0, o + s));
            let r = void 0 === n ? o : n;
            r < 0 && (r = bt(0, o + r)),
            r > o && (r = o);
            const i = yt({});
            for (let t = s; t < r; t++)
                i[t] = Lt(e, t);
            return ut(i)
        }
        )
          , Tt = xt()(l)
          , At = (e,...t)=>{
            let n = e.length;
            const o = yt(e);
            for (let e = 0; e < t.length; e++) {
                const s = t[e]
                  , r = vt(s) ? s : [s];
                for (let e = 0; e < r.length; e++)
                    o[n + e] = Lt(r, e);
                n += r.length
            }
            return ut(o)
        }
          , $t = (e,t)=>{
            let n = e.length || 0;
            return Mt(e, n, t),
            n++,
            e.length = n
        }
          , Ut = xt()(m)
          , Nt = xt()(a)
          , Bt = (e,t)=>{
            const n = [];
            return Nt(e, (e=>{
                $t(n, t(e))
            }
            )),
            n
        }
          , Ft = xt()(w)
          , Xt = xt()(G)
          , kt = xt()(W)
          , qt = St(O)
          , Wt = _t({})
          , Ht = e=>{
            const t = yt(e)
              , n = gt(t);
            for (let e = 0; e < n.length; e++) {
                const o = n[e]
                  , s = t[o];
                null !== s && "object" == typeof s && _t(s) === Wt && (t[o] = Ht(s))
            }
            return t
        }
          , Jt = e=>{
            const t = Xt(qt(e), " ");
            return kt(Tt(jt(t, 1), " "), 0, -1)
        }
          , Gt = xt()(i)
          , Kt = xt()(C)
          , zt = P
          , Vt = xt()(T)
          , Yt = xt()($)
          , Zt = (xt()(U),
        xt()(N),
        xt()(B),
        xt()(F),
        X && xt()(X),
        k && xt()(k),
        q)
          , Qt = xt()(H)
          , en = xt()(J)
          , tn = (xt()(K),
        xt()(z || function(e, t) {
            return Tt(Xt(this, e), t)
        }
        ))
          , nn = xt()(V)
          , on = (xt()(Y),
        xt()(Z),
        St(ee),
        St(te),
        St(ne))
          , sn = St(oe)
          , rn = St(se)
          , an = (St(re),
        St(ie),
        St(ae))
          , cn = St(ce)
          , dn = St(de)
          , ln = ue
          , un = (xt()(pe),
        xt()(me),
        be)
          , pn = qe
          , mn = Ke
          , gn = nt
          , fn = function(e, t) {
            return Lt(e, t)
        }
          , _n = yt({
            addEventListener: !1,
            Array: !0,
            Blob: !0,
            close: !1,
            CustomEvent: !0,
            Date: !0,
            DOMParser: !0,
            Error: !0,
            Event: !0,
            FileReader: !0,
            KeyboardEvent: !0,
            location: !0,
            Math: !0,
            MouseEvent: !0,
            MutationEvent: !0,
            Number: !0,
            Object: !0,
            Promise: !0,
            ReadableStream: !0,
            removeEventListener: !1,
            Uint8Array: !0,
            XMLHttpRequest: !0
        })
          , vn = (()=>{
            const e = yt({
                getElementById: Fe,
                createEvent: Xe,
                createElement: ke,
                dispatchEvent: Ae,
                addEventListener,
                removeEventListener
            })
              , t = yt({});
            return Nt(lt(e), (n=>{
                try {
                    const o = e[n];
                    t[n] = function(...e) {
                        return wt(o, wn.document, e)
                    }
                } catch (e) {
                    t[n] = ((e,t)=>{
                        if (Mn.error(`Tampermonkey sandbox preparation ${t ? "(" + t + ") " : ""}failed. This usually is caused by a third-party extension.`, e),
                        t)
                            return ()=>{}
                    }
                    )(e, `document.${n}`)
                }
            }
            )),
            t
        }
        )()
          , hn = yt({
            top: !0,
            location: !0
        })
          , bn = twod
          , {unsafeWindow: wn, unsafeThis: yn} = bn;
        twod.bridges = twod.bridges || yt({});
        const Mn = twod.console = twod.console || yt({})
          , En = yt({
            addEventListener: Rt(ye, wn),
            removeEventListener: Rt(Me, wn)
        });
        Nt(lt(hn), (async e=>{
            if (!En[e])
                try {
                    const t = wn[e];
                    if (null == t)
                        return;
                    En[e] = t
                } catch (e) {}
        }
        )),
        Nt(lt(_n), (async e=>{
            if (!En[e])
                try {
                    let t = Lt(wn, e);
                    if (void 0 === t && (yn === wn || void 0 === (t = Lt(yn, e))))
                        return;
                    const n = _n[e];
                    En[e] = !1 === n && "function" == typeof t ? Rt(t, yn) : t
                } catch (e) {}
        }
        ));
        const Ln = e=>{
            let t, n = [], o = !1;
            e((e=>{
                if (!o) {
                    if (n.length) {
                        const t = n;
                        n = [],
                        Nt(t, (t=>t(e)))
                    } else
                        t = e;
                    o = !0
                }
            }
            ));
            const s = yt({
                then: e=>(o ? e(t) : $t(n, e),
                s)
            });
            return s
        }
          , On = ()=>Vt(un() + 19831206 * ht() + 1, 36)
          , Sn = e=>Ln((t=>{
            const n = on(wn.document);
            "interactive" == n || "complete" == n ? (e && e(),
            t()) : En.addEventListener("DOMContentLoaded", (()=>{
                e && e(),
                t()
            }
            ), yt({
                capture: !0,
                once: !0
            }))
        }
        ))
          , xn = (()=>{
            const {console: e, bridges: t} = twod
              , n = yt({});
            let o;
            const s = (e,t)=>{
                let o = []
                  , s = [];
                const r = ()=>{
                    o = [],
                    s = [],
                    i = null,
                    delete n[e]
                }
                ;
                let i = yt({
                    postMessage: n=>{
                        t.send("port.message", yt({
                            response_id: e,
                            value: n
                        }))
                    }
                    ,
                    onMessage: yt({
                        addListener: e=>{
                            $t(o, e)
                        }
                    }),
                    onDisconnect: yt({
                        addListener: e=>{
                            $t(s, e)
                        }
                    }),
                    disconnect: ()=>{
                        t.send("port.message", yt({
                            response_id: e,
                            disconnect: !0
                        })),
                        r()
                    }
                });
                return n[e] = yt({
                    message: e=>{
                        o && Nt(o, (t=>t(e)))
                    }
                    ,
                    disconnect: ()=>{
                        s && Nt(s, (e=>e())),
                        r()
                    }
                }),
                i
            }
            ;
            return yt({
                message: (t,r)=>{
                    let i;
                    if (t.connect) {
                        if (!t.destination || !t.response_id)
                            throw "invalid message";
                        o && o(t.destination, s(t.response_id, r))
                    } else {
                        if (!t.response_id)
                            throw "invalid message";
                        if (!(i = n[t.response_id]))
                            return void e.warn("ports: unkown id", t.response_id, t);
                        t.disconnect ? i.disconnect() : i.message(t.value)
                    }
                }
                ,
                connect: e=>{
                    const n = On();
                    return t.first.send("port.message", yt({
                        response_id: n,
                        connect: !0,
                        destination: e
                    })),
                    s(n, t.first)
                }
                ,
                onConnect: yt({
                    addListener: e=>{
                        o = e
                    }
                })
            })
        }
        )()
          , {setInterval: Rn, setTimeout: In, clearInterval: Dn, clearTimeout: Cn, console: Pn, cloneInto: jn} = wn
          , Tn = Object.assign({}, Pn)
          , An = Rn.bind(wn)
          , $n = In.bind(wn)
          , Un = Dn.bind(wn)
          , Nn = (Cn.bind(wn),
        yn == wn.top)
          , {arrayBuffer: Bn, blob: Fn} = wn.Response.prototype
          , {arrayBuffer: Xn} = wn.Blob.prototype
          , {then: kn} = wn.Promise.prototype
          , {fetch: qn, location: Wn, document: Hn, Response: Jn} = wn
          , Gn = St(Bn)
          , Kn = St(Fn)
          , zn = St(Xn)
          , Vn = jn
          , Yn = (e,t)=>{
            const n = sn(wn.document, "http://www.w3.org/1999/xhtml", e);
            return "string" == typeof t ? n.append(t) : t && Nt(lt(t), (e=>{
                "textContent" == e ? n.textContent = t[e] : n.setAttribute(e, t[e])
            }
            )),
            n
        }
          , Zn = e=>{
            const t = wn.document;
            if (t.body || "text/xml" == t.contentType)
                e();
            else {
                let t = !1;
                const n = ()=>{
                    t = !0,
                    Zn(e)
                }
                  , o = yt({
                    capture: !0,
                    once: !0
                });
                En.addEventListener("DOMNodeInserted", n, o),
                Sn((()=>{
                    t || (En.removeEventListener("DOMNodeInserted", n, o),
                    e())
                }
                ))
            }
        }
          , Qn = (yt({
            encode: e=>Ce(Se(e)),
            decode: e=>xe(De(e))
        }),
        yt({
            encode: e=>{
                let t = "";
                for (let n = 0; n < e.length; n++)
                    t += Zt(255 & nn(e, n));
                return je(t)
            }
            ,
            decode: e=>Pe(e)
        }),
        e=>void 0 !== Lt(e, "objUrl"))
          , eo = e=>void 0 !== Lt(e, "blob")
          , to = e=>void 0 !== Lt(e, "dataUri")
          , no = ["chrome"];
        let oo, so, ro, io, ao, co;
        ao = ()=>{
            if (void 0 !== so)
                return so;
            try {
                so = -1 != navigator.userAgent.indexOf("Mac OS X")
            } catch (e) {}
            return so
        }
        ,
        io = ()=>{
            if (void 0 !== oo)
                return oo;
            try {
                const e = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
                e && (oo = parseInt(e[2]))
            } catch (e) {}
            return oo
        }
        ,
        co = ()=>{
            if (void 0 !== ro)
                return ro;
            try {
                ro = -1 != navigator.userAgent.search(/Android|Mobile/)
            } catch (e) {}
            return ro
        }
        ;
        const lo = (io(),
        !1)
          , uo = ["chrome-extension:"]
          , po = globalThis
          , {chrome: mo, browser: go} = po
          , fo = ([].concat(["chrome"]),
        function(e) {
            {
                const t = document.createElementNS(document.lookupNamespaceURI(null) || "http://www.w3.org/1999/xhtml", "script");
                t.textContent = e,
                (document.head || document.body || document.documentElement || document).appendChild(t);
                const n = t.parentNode;
                n && n.removeChild(t)
            }
        }
        )
          , _o = (()=>{
            const e = {
                getInternalPathRegexp: function(e, t) {
                    const n = new RegExp("(\\" + ["/", ".", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"].join("|\\") + ")","g")
                      , o = uo[0] + "//" + _o.id + "/";
                    return new RegExp(o.replace(n, "\\$1") + "([a-zA-Z" + (e ? "\\/" : "") + "]*)" + (t || "").replace(n, "\\$1"))
                },
                getInternalPageRegexp: function() {
                    return _o.getInternalPathRegexp(!1, ".html")
                }
            };
            return Object.defineProperty(e, "lastError", {
                get: ()=>mo.runtime.lastError,
                enumerable: !0
            }),
            Object.defineProperty(e, "id", {
                get: ()=>mo.runtime.id,
                enumerable: !0
            }),
            Object.defineProperty(e, "short_id", {
                get: ()=>e.id.replace(/[^0-9a-zA-Z]/g, "").substr(0, 4),
                enumerable: !0
            }),
            e
        }
        )()
          , vo = (()=>{
            const e = {
                getURL: function(e) {
                    return mo.runtime.getURL(e)
                },
                sendMessage: function(e, t) {
                    return mo.runtime.sendMessage(e, t)
                },
                onMessage: {
                    addListener: function(e) {
                        return mo.runtime.onMessage.addListener(e)
                    }
                },
                connect: function(e) {
                    return mo.runtime.connect({
                        name: e
                    })
                }
            };
            let t;
            return Object.defineProperty(e, "inIncognitoContext", {
                get: ()=>(void 0 === t && (t = mo.extension.inIncognitoContext),
                t),
                set: e=>{
                    t = e
                }
                ,
                enumerable: !0
            }),
            e
        }
        )();
        let ho;
        const {console: bo} = twod
          , wo = yt({
            setInterval: e=>{
                let t;
                e.onMessage.addListener((n=>{
                    "setInterval" == n.method && (t = An(e.postMessage, n.t))
                }
                )),
                e.onDisconnect.addListener((()=>{
                    t && Un(t),
                    t = null
                }
                ))
            }
            ,
            registerMenuCommand: e=>{
                const t = vo.connect("registerMenuCommand");
                t.onMessage.addListener((n=>{
                    if (null !== t) {
                        const {method: t, event: o} = n;
                        e.postMessage(yt({
                            method: t,
                            event: o
                        }))
                    }
                }
                )),
                t.onDisconnect.addListener((()=>{
                    e.disconnect()
                }
                )),
                e.onMessage.addListener((e=>{
                    if ("register" !== e.method)
                        return;
                    const {name: n, uuid: o, accessKey: s} = e
                      , r = Tt([ho, n, o], "#");
                    t.postMessage(yt({
                        method: "registerMenuCommand",
                        name: n,
                        uuid: o,
                        menuId: r,
                        accessKey: s
                    }))
                }
                )),
                e.onDisconnect.addListener((()=>{
                    t.disconnect()
                }
                ))
            }
            ,
            openInTab: e=>{
                const t = vo.connect("openInTab");
                t.onMessage.addListener((t=>{
                    e.postMessage(t)
                }
                )),
                t.onDisconnect.addListener((()=>{
                    e.disconnect()
                }
                )),
                e.onMessage.addListener((e=>{
                    if ("openTab" == e.method) {
                        let n = e.url;
                        const {active: o, loadInBackground: s, insert: r, incognito: i, setParent: a} = "boolean" == typeof e.options || void 0 === e.options ? yt({
                            loadInBackground: e.options
                        }) : e.options
                          , c = void 0 === o ? void 0 !== s && !s : o
                          , d = void 0 === r || r;
                        n && "//" == Qt(n, 0, 2) && (n = Wn.protocol + n),
                        t.postMessage(yt({
                            method: "openInTab",
                            details: yt({
                                url: n,
                                options: yt({
                                    active: !!c,
                                    insert: !!d,
                                    incognito: !!i,
                                    setParent: !i && !!a
                                })
                            }),
                            uuid: e.uuid
                        }))
                    } else
                        void 0 !== e.name ? t.postMessage(yt({
                            name: e.name,
                            uuid: e.uuid
                        })) : e.focus ? t.postMessage(yt({
                            focus: !0,
                            uuid: e.uuid
                        })) : e.close && t.postMessage(yt({
                            close: !0,
                            uuid: e.uuid
                        }))
                }
                )),
                e.onDisconnect.addListener((()=>{
                    t.disconnect()
                }
                ))
            }
            ,
            download: e=>{
                const t = vo.connect("download");
                t.onMessage.addListener((t=>{
                    e.postMessage(t)
                }
                )),
                t.onDisconnect.addListener((()=>{
                    e.disconnect()
                }
                )),
                e.onMessage.addListener((e=>{
                    if (e.cancel)
                        t.postMessage(yt({
                            cancel: !0,
                            id: ho,
                            uuid: e.uuid
                        }));
                    else {
                        let {url: n, ...o} = e.details;
                        n && "/" === Qt(n, 0, 1) && (n = Wn.origin + n),
                        t.postMessage(yt({
                            method: "download",
                            details: yt({
                                ...o,
                                from: yt({
                                    url: n
                                })
                            }),
                            id: ho,
                            uuid: e.uuid
                        }))
                    }
                }
                )),
                e.onDisconnect.addListener((()=>{
                    t.disconnect()
                }
                ))
            }
            ,
            webRequest: e=>{
                const t = vo.connect("webRequest");
                t.onMessage.addListener((t=>{
                    e.postMessage(t)
                }
                )),
                t.onDisconnect.addListener((()=>{
                    e.disconnect()
                }
                )),
                e.onMessage.addListener((e=>{
                    t.postMessage(yt({
                        method: "webRequest",
                        rules: e.rules,
                        uuid: e.uuid
                    }))
                }
                )),
                e.onDisconnect.addListener((()=>{
                    t.disconnect()
                }
                ))
            }
            ,
            xhr: e=>{
                let t, n;
                const o = []
                  , s = async e=>{
                    if (e && $t(o, e),
                    n)
                        await n,
                        s();
                    else {
                        const e = Pt(o);
                        e && e()
                    }
                }
                  , r = vo.connect("xhr");
                r.onMessage.addListener((t=>{
                    s((()=>{
                        const {onpartial: o, data: s, ...r} = t;
                        let i;
                        if (o && s) {
                            const {tfd: t} = s;
                            if (t) {
                                const s = (e=>e && (eo(e) || Qn(e) || to(e)) ? (e=>{
                                    let t, n, o;
                                    if (Qn(e))
                                        t = e.objUrl.url;
                                    else if (eo(e))
                                        n = e.blob;
                                    else {
                                        if (!to(e))
                                            throw "incompatible TransferableData";
                                        o = e.dataUri
                                    }
                                    return yt({
                                        toBlob: ()=>Ln((e=>{
                                            if (n)
                                                e(n);
                                            else if (t)
                                                try {
                                                    Yt(qn(t), (t=>{
                                                        Yt(Kn(t), (t=>{
                                                            e(t)
                                                        }
                                                        ))
                                                    }
                                                    ))
                                                } catch (t) {
                                                    e(void 0)
                                                }
                                            else {
                                                if (!o)
                                                    throw "incompatible Transferable";
                                                e((e=>{
                                                    let t;
                                                    const n = Xt(e, ",")
                                                      , o = fn(n, 0)
                                                      , s = fn(n, 1);
                                                    t = -1 != en(o, "base64") ? Pe(s) : Ce(s);
                                                    const r = fn(Xt(o, ":"), 1)
                                                      , i = fn(Xt(r, ";"), 0);
                                                    return new gn([t],yt({
                                                        type: i
                                                    }))
                                                }
                                                )(o))
                                            }
                                        }
                                        )),
                                        dispose: ()=>{
                                            t && ln(t),
                                            t = n = o = void 0
                                        }
                                    })
                                }
                                )(e) : void 0)(t);
                                if (!s)
                                    return;
                                return void (n = Ln((async t=>{
                                    const a = ()=>{
                                        n = null,
                                        t(),
                                        s && s.dispose()
                                    }
                                    ;
                                    try {
                                        const t = await s.toBlob();
                                        if (!t)
                                            return void a();
                                        const n = t.type;
                                        let c;
                                        if (c = "arrayBuffer"in t ? await zn(t) : await Gn(new Jn(t)),
                                        !c)
                                            return void a();
                                        i = yt({
                                            nada: yt({
                                                buffer: c,
                                                type: n
                                            })
                                        }),
                                        e.postMessage(yt({
                                            ...r,
                                            onpartial: o,
                                            data: i
                                        })),
                                        a()
                                    } catch (e) {
                                        bo.warn(e),
                                        a()
                                    }
                                }
                                )))
                            }
                            i = s
                        } else
                            i = s;
                        e.postMessage(yt({
                            ...r,
                            onpartial: o,
                            data: i
                        }))
                    }
                    ))
                }
                )),
                r.onDisconnect.addListener((()=>{
                    s((async()=>{
                        e.disconnect()
                    }
                    ))
                }
                )),
                e.onMessage.addListener((e=>{
                    t = t || e.details,
                    r.postMessage(e)
                }
                )),
                e.onDisconnect.addListener((()=>{
                    r.disconnect()
                }
                ))
            }
            ,
            onurlchange: e=>{
                const t = vo.connect("onurlchange");
                let n = ()=>{
                    e.postMessage(yt({
                        url: wn.document.location.href
                    }))
                }
                ;
                const o = ()=>{
                    n && (En.removeEventListener("hashchange", n),
                    n = null)
                }
                ;
                En.addEventListener("hashchange", n),
                t.onMessage.addListener((t=>{
                    e.postMessage(t)
                }
                )),
                t.onDisconnect.addListener((()=>{
                    e.disconnect(),
                    o()
                }
                )),
                e.onMessage.addListener((e=>{
                    t.postMessage(e)
                }
                )),
                e.onDisconnect.addListener((()=>{
                    t.disconnect(),
                    o()
                }
                ))
            }
            ,
            values: e=>{
                const t = vo.connect("values");
                t.onMessage.addListener((t=>{
                    e.postMessage(t)
                }
                )),
                t.onDisconnect.addListener((()=>{
                    e.disconnect()
                }
                )),
                e.onMessage.addListener((e=>{
                    t.postMessage(e)
                }
                )),
                e.onDisconnect.addListener((()=>{
                    t.disconnect()
                }
                ))
            }
        })
          , yo = yt({
            setTimeout: ({args: e, cb: t})=>{
                $n(t, e.t)
            }
            ,
            setClipboard: ({args: e, cb: t})=>{
                const {content: n, info: o, uuid: s} = e;
                let r, i;
                "object" == typeof o ? (o.type && (r = o.type),
                o.mimetype && (i = o.mimetype)) : "string" == typeof o && (r = o);
                const a = i || ("html" == r ? "text/html" : "text/plain");
                lo ? vo.sendMessage(yt({
                    method: "clipboard",
                    mimetype: a,
                    content: n,
                    uuid: s
                }), (()=>t())) : (wn.document.addEventListener("copy", (e=>{
                    e.stopImmediatePropagation(),
                    e.preventDefault(),
                    e.clipboardData && e.clipboardData.setData(a, n)
                }
                ), yt({
                    capture: !0,
                    once: !0
                })),
                wn.document.execCommand("copy"),
                t())
            }
            ,
            notification: ({args: e, cb: t})=>{
                e.method = "notification",
                vo.sendMessage(e, (e=>t(e)))
            }
            ,
            closeTab: ({args: {uuid: e}, cb: t})=>{
                vo.sendMessage(yt({
                    method: "closeTab",
                    uuid: e,
                    id: ho
                }), (e=>{
                    e && e.error && bo.warn(e.error),
                    t(e)
                }
                ))
            }
            ,
            focusTab: ({args: {uuid: e}, cb: t})=>{
                vo.sendMessage(yt({
                    method: "focusTab",
                    uuid: e,
                    id: ho
                }), (e=>{
                    e && e.error && bo.warn(e.error),
                    t(e)
                }
                ))
            }
            ,
            addElement: async({args: e, node: t, cb: n})=>{
                try {
                    const o = Yn(e.tag, yt({
                        ...e.properties || yt({}),
                        ...e.id ? yt({
                            id: e.id
                        }) : yt({})
                    }));
                    let s;
                    if (t)
                        s = t;
                    else {
                        const e = wn.document;
                        if (s = e.head || e.body || e.documentElement,
                        !s) {
                            const e = wn.document;
                            s = await Ln((t=>Sn((()=>t(e.head || e.body)))))
                        }
                    }
                    s.appendChild(o),
                    n()
                } catch (e) {
                    bo.warn("content: error adding script", e)
                }
            }
            ,
            tabs: ({args: e, cb: t})=>{
                e.method = "tabs",
                vo.sendMessage(e, (e=>e && t(e.data)))
            }
            ,
            cookie: ({args: e, cb: t})=>{
                e.method = "cookie",
                vo.sendMessage(e, (e=>e && t(e.data)))
            }
        })
          , Mo = yt({
            init: ()=>{
                ho = twod.contextId
            }
            ,
            processMessage: ({method: e, args: t, node: n},o)=>{
                let s;
                if (s = yo[e])
                    return s(yt({
                        args: t,
                        node: n,
                        cb: o
                    }));
                o()
            }
            ,
            processConnect: (e,t)=>{
                let n;
                if (n = wo[e])
                    return n(t)
            }
        })
          , Eo = ["GM_info", "GM.info"]
          , Lo = ["unsafeWindow", ...Eo]
          , Oo = e=>tn(tn(e, '"', '\\"'), "'", "\\'")
          , So = (e,t,n,o,s,r)=>{
            const {console: i} = twod
              , {measure_scripts: a, top_level_await: c, enforce_strict_mode: d, version: l, inIncognitoContext: u, isFirstPartyIsolation: p, downloadMode: m, container: g} = e
              , f = yt({
                version: l,
                inIncognitoContext: u,
                isFirstPartyIsolation: p,
                downloadMode: m,
                container: g
            });
            Nt(t, (e=>{
                const {source_url: t, script: l, code: u, storage: p} = e
                  , {name: m, options: {run_at: g}, grant: _} = l
                  , {requires: v, ...h} = l
                  , b = !l.options.unwrap
                  , w = yt({
                    ...f,
                    sandboxMode: s
                });
                let y;
                const M = Tt(Bt(v, (e=>Et(e, "textContent") || "")), "\n");
                if (b) {
                    let e = "";
                    const s = ["define", "module", "exports"]
                      , g = Bt(s, (()=>"undefined"))
                      , f = -1 !== Ut(l.grant, "none");
                    let v;
                    v = f ? Eo : At(_, Lo),
                    Nt(v, (e=>{
                        const t = fn(Xt(e, "."), 0);
                        "window" !== t && -1 === Ut(s, t) && ($t(s, t),
                        $t(g, `p.${t}`))
                    }
                    ));
                    const b = Tt([`with (${f ? "this.s" : "this"}) {`, "(async (u, { p, r, s }) => {", "try {", a ? `console.time("${e = `SCRIPT RUN TIME[${Oo(m)}]`}");\n` : "", "r(u, s, [", Tt(g, ","), "]);", a ? `console.timeEnd("${e}");\n` : "", "} catch (e) {", "if (e.message && e.stack) {", "console.error(\"ERROR: Execution of script '", Oo(m), "' failed! \" + e.message);", "console.log(e.stack);", "} else {", "console.error(e);", "}", "}", "})", "(", (c ? "async " : "") + "function(", Tt(s, ","), ") {", d ? '"use strict";\n' : "\n", M, u, "\n", `}, ${f ? "this" : "seed"})`, "}", "\n", t ? `//# sourceURL=${t}\n` : ""], "");
                    y = ()=>{
                        r && i.debug(`env: run "${m}" now`);
                        const e = `__f__${On()}`
                          , t = yt({
                            storage: p,
                            script: h
                        })
                          , s = `window["${e}"] = function(){${b}}`;
                        o.send("script", yt({
                            id: e,
                            bundle: t,
                            flags: w
                        })),
                        n(s)
                    }
                } else
                    y = ()=>{
                        r && i.debug(`env: run @unwrap "${m}" now`);
                        const e = Tt([M, u, "\n", t ? `//# sourceURL=${t}\n` : ""], "");
                        n(e)
                    }
                    ;
                var E;
                "document-start" == g ? (r && i.debug(`env: run "${m}" ASAP -> document-start`),
                y()) : "document-body" == g ? (r && i.debug(`env: schedule "${m}" for document-body`),
                Zn(y)) : "context-menu" == g ? (r && i.debug(`env: run "${m}" ASAP -> context-menu`),
                y()) : "document-end" == g ? (r && i.debug(`env: schedule "${m}" for document-end`),
                Sn(y)) : (r && i.debug(`env: schedule "${m}" for document-idle`),
                E = y,
                Sn((()=>{
                    $n((()=>E()), 1)
                }
                )))
            }
            ))
        }
          , xo = mo.userScripts && mo.userScripts.onBeforeScript ? {
            supported: !0,
            onBeforeScript: {
                addListener: e=>mo.userScripts.onBeforeScript.addListener(e)
            }
        } : {
            supported: !1
        }
          , Ro = ({sendPrefix: e, listenPrefix: t, send: n, onMessage: o})=>{
            if (void 0 === n || void 0 === o)
                throw "invalid args";
            let s, r, i = 1;
            const a = yt({})
              , c = e=>{
                e && (s = e)
            }
              , d = e=>{
                const t = ++i;
                return a[i] = e,
                t
            }
            ;
            o(((o,i)=>o == `${t}_${s}` ? (t=>{
                const {m: o, r: i, a: c} = t;
                if ("message.response" == o) {
                    if (null == i)
                        throw "Invalid Message";
                    ((e,t)=>{
                        let n;
                        e && (n = a[e]) && (n(t),
                        delete a[e])
                    }
                    )(i, c)
                } else if (r) {
                    const a = i ? t=>{
                        n(`${e}_${s}`, yt({
                            m: "message.response",
                            a: t,
                            r: i
                        }))
                    }
                    : ()=>{}
                    ;
                    r(yt({
                        method: o,
                        args: c,
                        node: "MutationEvent" === Jt(t) ? cn(t) : void 0
                    }), a)
                }
            }
            )(i) : null));
            const l = yt({
                init: async e=>{
                    s ? c() : c(e)
                }
                ,
                refresh: ()=>null,
                switchId: e=>{
                    s && l.cleanup(),
                    c(e)
                }
                ,
                send: (t,o,r,i)=>{
                    let a, c;
                    "function" != typeof r && null !== r ? (a = r,
                    c = i) : c = r,
                    n(`${e}_${s}`, yt({
                        m: t,
                        a: o,
                        r: c ? d(c) : null,
                        n: a
                    }))
                }
                ,
                sendToId: (t,o,s)=>{
                    n(`${e}_${t}`, yt({
                        m: o,
                        a: s,
                        r: null
                    }))
                }
                ,
                setMessageListener: e=>{
                    r = e
                }
                ,
                cleanup: ()=>null
            });
            return l
        }
          , Io = xo
          , Do = xo.supported && !wn.pagejs;
        let Co;
        const Po = (e,t)=>{
            try {
                Co(e),
                t && t(!0)
            } catch (e) {
                t && t(!1)
            }
        }
          , jo = "u" + On()
          , {bridges: To} = twod;
        let Ao = [];
        const $o = e=>{
            Io.onBeforeScript.addListener((o=>{
                const s = (e,n)=>{
                    Nt(t, (t=>t(e, n)))
                }
                  , r = e=>$t(n, yt({
                    listener: e,
                    clone: o.export
                }));
                mt(o.global, "pagejs", yt({
                    set: o.export((t=>{
                        delete o.global.pagejs;
                        const n = o.metadata;
                        Nt(Ao, (e=>e(t, n))),
                        Ao = [],
                        n.js && (t(o.export(yt({
                            unsafeWindow: o.global,
                            unsafeThis: o.global.window,
                            pageWindow: void 0,
                            contextId: jo,
                            fSend: s,
                            fOnMessage: r
                        }))),
                        To.js.sendToId(jo, "commid", yt({
                            id: e
                        })))
                    }
                    )),
                    configurable: !0
                })),
                Co = o.global.eval
            }
            ));
            const t = []
              , n = []
              , o = (e,t)=>{
                Nt(n, (({listener: n, clone: o})=>n(e, o(t))))
            }
              , s = e=>$t(t, e);
            return yt({
                createBridge: ()=>{
                    const t = Ro(yt({
                        sendPrefix: "2S",
                        listenPrefix: "2U",
                        cloneInto: Vn,
                        send: o,
                        onMessage: s
                    }));
                    return t.init(e),
                    t
                }
            })
        }
          , Uo = e=>{
            let t = n=>{
                delete wn.pagejs,
                t = void 0,
                e(n)
            }
            ;
            mt(wn, "pagejs", yt({
                set: t,
                configurable: !0
            })),
            $n((()=>{
                t && t()
            }
            ), 1)
        }
          , No = (e,t)=>{
            const n = (e,t)=>{
                Nt(s, (n=>n(e, t)))
            }
              , o = e=>$t(r, yt({
                listener: e,
                clone: e=>e
            }))
              , s = []
              , r = []
              , i = (e,t)=>{
                Nt(r, (({listener: n, clone: o})=>n(e, o(t))))
            }
              , a = e=>$t(s, e)
              , c = "c" + On();
            let d;
            return yt({
                createBridge: ()=>(d = Ro(yt({
                    sendPrefix: "2S",
                    listenPrefix: "2U",
                    send: i,
                    onMessage: a
                })),
                d.init(e),
                d),
                inject: ()=>{
                    t(yt({
                        unsafeWindow: wn,
                        unsafeThis: yn,
                        pageWindow: void 0,
                        contextId: c,
                        fSend: n,
                        fOnMessage: o
                    })),
                    d.sendToId(c, "commid", yt({
                        id: e
                    }))
                }
            })
        }
          , Bo = (e,t)=>{
            let n, o = !1;
            try {
                n = (0,
                eval)(e),
                o = !0
            } catch (e) {}
            return t && t(o),
            n
        }
        ;
        let Fo = !1;
        const Xo = location.pathname + location.search
          , ko = "TM_" + _o.short_id + window.btoa(Xo.length + Xo).substr(0, 255).replace(/[#=/]/g, "_")
          , qo = ()=>{
            let e, t, n, o;
            try {
                o = document.cookie.split(";")
            } catch (e) {
                return
            }
            for (e = 0; e < o.length; e++)
                if (t = o[e].substr(0, o[e].indexOf("=")),
                n = o[e].substr(o[e].indexOf("=") + 1),
                t = t.replace(/^\s+|\s+$/g, ""),
                0 === t.indexOf(ko)) {
                    document.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                    const e = xe(n);
                    if (0 !== e.indexOf("blob:"))
                        continue;
                    let o;
                    try {
                        if (0 !== (new URL(e).origin + "/").indexOf(vo.getURL("/")))
                            continue;
                        if (o = new XMLHttpRequest,
                        o.open("GET", e, !1),
                        o.send(null),
                        200 === o.status || 0 === o.status)
                            return JSON.parse(o.responseText)
                    } catch (e) {
                        console.warn("content: unable to decode " + (o && o.responseText || "unknown"))
                    }
                }
        }
          , Wo = document.contentType && "text/html" != document.contentType;
        let Ho = !1;
        const Jo = (e,t)=>{
            const {contextId: n, bridges: o, console: s} = twod;
            Ln((t=>{
                const o = e=>{
                    let o = 1;
                    const r = ()=>{
                        Fo && s.log('content: send "prepare" message'),
                        vo.sendMessage({
                            method: "prepare",
                            id: n,
                            topframe: Nn,
                            types: Do ? ["js"] : ["dom", "raw"],
                            url: window.location.href
                        }, (n=>{
                            if (!Ho) {
                                if (!n)
                                    return Fo && s.log("content: _early_ execution, connection to bg failed -> retry!"),
                                    window.setTimeout(r, o),
                                    void (o *= 2);
                                Ho = !0,
                                lt(n.contexters).length || lt(n.scripts).length || n.external_connect ? (e && e(),
                                t({
                                    info: n,
                                    type: "complete" == on(wn.document) ? "late" : "normal"
                                })) : t({
                                    info: n
                                })
                            }
                        }
                        ))
                    }
                    ;
                    !function(e) {
                        const t = ()=>"prerender" !== document.webkitVisibilityState
                          , n = ()=>{
                            t() && (document.removeEventListener("webkitvisibilitychange", n, !1),
                            e())
                        }
                        ;
                        t() ? e() : document.addEventListener("webkitvisibilitychange", n, !1)
                    }(r)
                }
                  , r = ()=>{
                    let r;
                    if (Fo && s.log("content: Started (" + n + ", " + window.location.origin + window.location.pathname + ")", yn.tm_info),
                    (r = qo()) || (r = yn.tm_info)) {
                        if (delete yn.tm_info,
                        lt(r.contexters).length || lt(r.scripts).length || r.external_connect) {
                            if (r.contexters.raw || r.scripts.raw) {
                                if (!e.raw)
                                    throw "raw inject missing";
                                e.raw()
                            }
                            t({
                                info: r,
                                type: "sync"
                            })
                        } else
                            t({
                                info: r
                            });
                        vo.sendMessage({
                            method: "prepare",
                            url: window.location.href,
                            cleanup: !0
                        }, (()=>null))
                    } else
                        Wo ? o((()=>{
                            e.raw && e.raw()
                        }
                        )) : (e.raw && e.raw(),
                        o())
                }
                ;
                Wo ? window.setTimeout((()=>r()), 1) : r()
            }
            )).then((({info: r, type: i})=>{
                const {external_connect: a} = r;
                if (a && o.first.send("external.connect"),
                i) {
                    Fo = Fo || r.logLevel >= 60;
                    const a = r.scripts;
                    if (a.js) {
                        if (!e.js)
                            throw "js inject missing";
                        e.js()
                    }
                    if (a.dom) {
                        if (!e.dom)
                            throw "dom inject missing";
                        e.dom()
                    }
                    if (Sn((()=>{
                        Fo && s.log("content: DOMContentLoaded"),
                        Nt(lt(o), (e=>o[e].send("DOMContentLoaded")))
                    }
                    )),
                    c = ()=>{
                        Fo && s.log("content: load"),
                        Nt(lt(o), (e=>o[e].send("load")))
                    }
                    ,
                    "complete" == on(wn.document) ? c() : En.addEventListener("load", (()=>c()), yt({
                        capture: !0,
                        once: !0
                    })),
                    Fo) {
                        const e = (a.dom || []).length + (a.js || []).length + (a.raw || []).length;
                        s.log("content: " + (i || "normal") + " start event processing for " + n + " (" + e + " to run)")
                    }
                    Go(r),
                    t()
                } else
                    t();
                var c
            }
            ))
        }
          , Go = e=>{
            const {bridges: t} = twod
              , {scripts: n, ...o} = e;
            n.js && So(o, n.js, Po, t.js, "js", Fo),
            n.dom && (Nt(no, (e=>yn[e] = void 0)),
            So(o, n.dom, Bo, t.dom, "dom", Fo)),
            n.raw && So(o, n.raw, fo, t.raw, "raw", Fo)
        }
          , Ko = async()=>{
            const {contextId: e} = twod
              , {location: t} = wn;
            wn.document.addEventListener("mouseenter", (()=>{
                vo.sendMessage(yt({
                    method: "contextmenu",
                    url: t.href,
                    id: e
                }), (()=>{}
                ))
            }
            ), !1)
        }
          , {createEvent: zo} = vn
          , Vo = ({sendPrefix: e, listenPrefix: n, cloneInto: o})=>{
            let s, r, i, a = 1;
            const c = yt({});
            let d = !1
              , l = [];
            const u = e=>{
                const t = ++a;
                return c[a] = e,
                t
            }
              , p = (e,t)=>{
                const {m: n, a: s, r, n: i} = t
                  , a = ((e,t,n)=>{
                    let s;
                    var r;
                    return n ? (s = zo("MutationEvent"),
                    Kt(s, e, !1, !1, n || null, void 0, void 0, Dt(t), zt)) : s = new pn(e,yt({
                        detail: (r = t,
                        o ? o(r, wn.document) : r)
                    })),
                    s
                }
                )(e, yt({
                    m: n,
                    a: s,
                    r
                }), i);
                wt(Ae, wn, [a])
            }
              , m = t=>{
                const {m: n, r: o, a} = Ht("CustomEvent" == Jt(u = t) ? dn(u) : It(an(u)));
                var u;
                if ("bridge.onpurge" == n)
                    (async()=>{
                        await null,
                        i !== wn.document.documentElement && _.refresh()
                    }
                    )();
                else if ("unlock" == n) {
                    d = !1;
                    const e = l;
                    l = [],
                    Nt(e, (e=>e()))
                } else if ("message.response" == n) {
                    if (null == o)
                        throw "Invalid Message";
                    ((e,t)=>{
                        let n;
                        e && (n = c[e]) && (n(t),
                        delete c[e])
                    }
                    )(o, a)
                } else if (s) {
                    const i = o ? t=>{
                        p(`${e}_${r}`, yt({
                            m: "message.response",
                            a: t,
                            r: o
                        }))
                    }
                    : ()=>{}
                    ;
                    s(yt({
                        method: n,
                        args: a,
                        node: "MutationEvent" === Jt(t) ? cn(t) : void 0
                    }), i)
                }
            }
              , g = e=>{
                e && (r = e),
                r && (i = wn.document.documentElement,
                En.addEventListener(`${n}_${r}`, m, !0))
            }
            ;
            let f = ()=>{}
            ;
            const _ = yt({
                init: async n=>{
                    r ? g() : g(n),
                    await Sn(),
                    t ? (i = wn.document.documentElement,
                    f = ()=>{
                        i !== wn.document.documentElement && (_.refresh(),
                        p(`${e}_${r}`, yt({
                            m: "unlock",
                            a: void 0,
                            r: null
                        })))
                    }
                    ) : Ln((e=>{
                        if (t)
                            throw "not supported";
                        {
                            const t = new mn((n=>{
                                Ct(n, (e=>((e,t)=>{
                                    for (let n = 0, o = e.length; n < o; n++)
                                        if (fn(e, n) === t)
                                            return !0;
                                    return !1
                                }
                                )(e.addedNodes, wn.document.documentElement))) && (e(wn.document),
                                t.disconnect())
                            }
                            ));
                            t.observe(wn.document, yt({
                                childList: !0
                            }))
                        }
                    }
                    )).then((()=>{
                        d = !0,
                        _.send("bridge.onpurge"),
                        _.refresh()
                    }
                    ))
                }
                ,
                refresh: ()=>{
                    const e = r;
                    e && (_.cleanup(),
                    _.init(e))
                }
                ,
                switchId: e=>{
                    r && _.cleanup(),
                    g(e)
                }
                ,
                send: (n,o,s,i)=>{
                    let a, c;
                    "function" != typeof s && null !== s ? (a = s,
                    c = i) : c = s,
                    t && f();
                    const m = ()=>p(`${e}_${r}`, yt({
                        m: n,
                        a: o,
                        r: c ? u(c) : null,
                        n: a
                    }));
                    d ? $t(l, m) : m()
                }
                ,
                sendToId: (t,n,o)=>{
                    p(`${e}_${t}`, yt({
                        m: n,
                        a: o,
                        r: null
                    }))
                }
                ,
                setMessageListener: e=>{
                    s = e
                }
                ,
                cleanup: ()=>{
                    r && (En.removeEventListener(`${n}_${r}`, m, !0),
                    i = void 0,
                    r = void 0)
                }
            });
            return _
        }
          , Yo = (e,t,n)=>{
            ((e,t)=>{
                const n = fn(rn(wn.document, "*"), 0) || wn.document
                  , o = Yn("div")
                  , s = o.attachShadow(yt({
                    mode: "closed"
                }));
                s.appendChild(Yn("style", ":host { display: none }"));
                const r = Yn("iframe", yt({
                    sandbox: "allow-scripts allow-same-origin",
                    style: "display: none",
                    src: "javascript:void 0"
                }));
                let i = ()=>{
                    if (null === i)
                        return;
                    i = null;
                    let n = !1;
                    try {
                        const t = r.contentDocument;
                        if (t) {
                            const o = Yn("script", yt({
                                textContent: e
                            }));
                            fn(t.getElementsByTagName("*"), 0).appendChild(o),
                            n = !0
                        }
                    } catch (e) {}
                    t(o, n),
                    r.remove(),
                    o.remove()
                }
                ;
                r.addEventListener("load", i, yt({
                    once: !0,
                    capture: !0
                })),
                s.appendChild(r),
                n.appendChild(o),
                i && i()
            }
            )(e, ((e,o)=>{
                const s = Yn("script", yt({
                    textContent: t(o)
                }));
                e.appendChild(s),
                n()
            }
            ))
        }
        ;
        let Zo;
        (async t=>{
            const {unsafeWindow: n, bridges: o} = twod
              , {location: s} = n;
            if (!yt({
                "http:": !0,
                "https:": !0,
                "file:": !0
            })[n.location.protocol])
                return;
            if (void 0 !== t._content)
                return;
            t._content = !0;
            const r = twod.contextId = On();
            let i;
            const a = yt({});
            pt(twod.console, Tn),
            Ln((e=>{
                if (Do) {
                    const {createBridge: t} = $o(r);
                    $t(Ao, ((n,s)=>{
                        Zo = i = n,
                        s.js && (o.js = t(),
                        a.js = ()=>null),
                        e(s)
                    }
                    ))
                } else
                    Ln((e=>{
                        Zo = i = n.pagejs,
                        delete n.pagejs,
                        Zo ? e() : Uo((t=>{
                            if (!t)
                                throw "pagejs missing";
                            Zo = i = t,
                            e()
                        }
                        ))
                    }
                    )).then((()=>{
                        e(yt({
                            js: !1,
                            raw: !0,
                            dom: !0
                        }))
                    }
                    ))
            }
            )).then((({dom: t, raw: c})=>{
                if (t) {
                    const e = Do ? Bo(`() => ${i};`)() : i
                      , {createBridge: t, inject: n} = No(r, e);
                    a.dom = n,
                    o.dom = t()
                }
                if (c) {
                    const {createBridge: t, inject: n} = ((t,n)=>{
                        let o;
                        return yt({
                            createBridge: ()=>(o = Vo(yt({
                                sendPrefix: "2P",
                                listenPrefix: "2C",
                                cloneInto: Vn
                            })),
                            o),
                            inject: ()=>{
                                o.init(t);
                                const s = On()
                                  , r = "(" + Gt(((e,t)=>{
                                    window.parent[e] = t(window)
                                }
                                )) + ')("' + s + '", ' + Gt(e) + ")";
                                Yo(r, (e=>`(${n})({ unsafeWindow: typeof globalThis === "undefined" ? window : globalThis, unsafeThis: window, vault: ${e ? `window["${s}"]` : "null"}, contextId: "${s}", __proto__: null });\n`), (()=>{
                                    o.sendToId(s, "commid", yt({
                                        id: t
                                    }))
                                }
                                ))
                            }
                        })
                    }
                    )(r, i);
                    a.raw = n,
                    o.raw = t()
                }
                o.first = o.js || o.raw || o.dom,
                vo.onMessage.addListener(((e,t,r)=>{
                    "executeScript" == e.method ? (e.url && 0 !== en(s.href, e.url) || void 0 !== e.topframe && e.topframe != Nn || Go(e.info),
                    r(yt({}))) : Nn && ("loadUrl" == e.method ? (n.location = e.url,
                    r(yt({}))) : "reload" == e.method ? (s.reload(),
                    r(yt({}))) : "setForeignAttr" == e.method ? (o.first.send(e.method, e),
                    r(yt({}))) : Tn.log("content: unknown method " + Dt(e)))
                }
                )),
                xn.onConnect.addListener(((e,t)=>{
                    Mo.processConnect(e, t)
                }
                )),
                Mo.init(),
                Nt(lt(o), (e=>{
                    if ("first" == e)
                        return;
                    const t = o[e];
                    t.setMessageListener(((n,o)=>{
                        const {method: s, args: r} = n;
                        if ("port.message" == s)
                            xn.message(r, t);
                        else if ("csp" == s)
                            "raw" == e ? fo(r.src) : "dom" == e ? Bo(r.src) : Po(r.src);
                        else if ("external.message" == s)
                            vo.sendMessage(yt({
                                method: "externalMessage",
                                request: r
                            }), (e=>{
                                o(e)
                            }
                            ));
                        else if ("console" == s) {
                            const e = r
                              , t = fn(e, 0)
                              , n = fn(e, 1)
                              , o = Tn[t] || Tn.log;
                            o && wt(o, Tn, At(["injected:"], Bt(n, (e=>"string" == typeof e ? It(e) : e))))
                        } else
                            Mo.processMessage(n, o)
                    }
                    ))
                }
                )),
                Jo(a, (()=>Zo = void 0)),
                Ko()
            }
            ))
        }
        )(window)
    }
    )();
}
)({
    __proto__: null,
    unsafeWindow: typeof globalThis === "undefined" ? window : globalThis,
    unsafeThis: window
})
