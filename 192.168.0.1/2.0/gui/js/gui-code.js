/*!
 * Copyright : (C) 2008,2009 SAGEM Communications - URD2
 *
 * This JavaScript file is the property of Sagem Communications
 * and may not be copied or used without prior written consent.
 *
 * vim: set fileencoding=utf-8
 */
jQuery.gui = {};
jQuery.gui.api = {};
jQuery.gui.opt = {
    GUI_VERSION_OPT: "2.0",
    GUI_LANGUAGES_OPT: "en:fr",
    GUI_DEFAULT_DATAMODEL_OPT: "gtw",
    GUI_DEFAULT_LANG_OPT: "fr",
    GUI_I18N_CGI_OPT: false,
    GUI_SAVE_LOGIN_OPT: true,
    XMO_REMOTE_HOST: "",
    GUI_AJAX_TIMEOUT_OPT: 30,
    GUI_COOKIE_NOEXPIRE_OPT: false,
    GUI_ACTIVATE_GUI_CONSOLE_OPT: false,
    GUI_ACTIVATE_SHA512ENCODE_OPT: 0,
    GUI_NO_XSS_FUNCTION_OPT: false,
    GUI_CHANGE_REQUEST_HEADER_OPT: false,
    GUI_CUSTOM_CHARSET_OPT: "utf-8",
    GUI_RESET_NOTIFICATION: false,
};
(function(b, a) {
    a.i18n = b.extend({}, {
        files: [],
        add: function(c) {
            this.files.push.apply(this.files, arguments)
        },
        load: function(f, e) {
            var c = function(j) {
                var g = j.catalog;
                for (var h in g) {
                    if (g.hasOwnProperty(h)) {
                        a.i18n[h] = g[h]
                    }
                }
            };
            for (i = 0; i < this.files.length; i++) {
                var d = this.files[i];
                if (e !== undefined) {
                    d = d.replace(/%P/g, e)
                }
                d = d.replace(/%L/g, f);
                b.ajax({
                    async: false,
                    type: "GET",
                    url: d,
                    success: c,
                    dataType: "json"
                })
            }
        },
        msg: function(f, d) {
            var e = this[f];
            if (e !== undefined) {
                var c = arguments;
                if (c.length > 1) {
                    c[0] = e;
                    return b.sprintf.apply(b, c)
                } else {
                    return e
                }
            } else {
                return b.sprintf(this.GUI_UNDEFINED_I18N_MSG, f)
            }
        },
        alert: function(e, d) {
            var c = arguments;
            c[0] = this.msg(e);
            a.alert.apply(a, c)
        }
    });
    b.fn.guiTranslate = function() {
        return this.each(function(c) {
            b(this).find("*[xmsg]").each(function(d) {
                var e = b(this);
                e.html(a.i18n.msg(e.attr("xmsg")))
            }).end().find("*[xtitle]").each(function(d) {
                var e = b(this);
                e.attr("title", a.i18n.msg(e.attr("xtitle")))
            }).end().find("*[xhref]").each(function(d) {
                var e = b(this);
                e.attr("href", a.i18n.msg(e.attr("xhref")))
            }).end().find("*[xvalue]").each(function(d) {
                var e = b(this);
                e.attr("value", a.i18n.msg(e.attr("xvalue")))
            })
        })
    }
    ;
    b.extend(a.i18n, {
        GUI_UNDEFINED_I18N_MSG: "Undefined (%s)"
    })
}(jQuery, jQuery.gui));
(function(b, a) {
    b.extend(a, {
        INTMIN: -2147483648,
        INTMAX: 2147483647,
        UINTMIN: 0,
        UINTMAX: 4294967295,
        cnf: function(c) {
            c.forceExtend = true;
            c.isGuiConf = true;
            return c
        },
        array: function(d, c) {
            if (arguments.length === 1 && a.isArray(d)) {
                c = d;
                d = null
            }
            c.forceExtend = true;
            c.isGuiArray = true;
            c.elementConf = a.cnf(d);
            c.compareElement = function(f, e) {
                return e.id === f.id
            }
            ;
            return c
        },
        max: function(d, c) {
            return d > c ? d : c
        },
        min: function(d, c) {
            return d < c ? d : c
        },
        url: function(c) {
            return c === undefined ? "" : 'url("/' + a.opt.GUI_VERSION_OPT + "/" + c + '")'
        },
        slice: function(f, j, d) {
            var e = []
              , h = arguments.length;
            if ((d !== undefined) && d < h) {
                h = d
            }
            for (var g = j; g < h; g++) {
                var c = f[g];
                if (a.isArray(c)) {
                    e = e.concat(c)
                } else {
                    e.push(c)
                }
            }
            return e
        },
        concat: function() {
            var d = []
              , f = arguments.length;
            for (var e = 0; e < f; e++) {
                var c = arguments[e];
                if (a.isArray(c)) {
                    d = d.concat(c)
                } else {
                    d.push(c)
                }
            }
            return d
        },
        typeOf: function(d) {
            var c = typeof d;
            if (c === "object") {
                if (d) {
                    if (typeof d.length === "number" && !d.propertyIsEnumerable("length") && typeof d.splice === "function") {
                        c = "array"
                    }
                } else {
                    c = "null"
                }
            }
            return c
        },
        isNull: function(c) {
            return this.typeOf(c) === "null"
        },
        isString: function(c) {
            return this.typeOf(c) === "string"
        },
        isNumber: function(c) {
            return (this.typeOf(c) === "number") && !isNaN(c)
        },
        isBoolean: function(c) {
            return this.typeOf(c) === "boolean"
        },
        isArray: function(c) {
            return this.typeOf(c) === "array"
        },
        isObject: function(d, c) {
            return (this.typeOf(d) === "object") && ((c === undefined) || (d.constructor === c))
        },
        isFunction: function(c) {
            return this.typeOf(c) === "function"
        },
        dump: function(c) {},
        callTrace: function(c, d) {},
        getMsg: function(c, d) {
            if (a.isObject(c)) {
                d = c.msg;
                c = c.type
            }
            if (c === "user") {
                return d
            } else {
                var e = a.messages[c];
                if ((e !== undefined) && a.isString(e[d])) {
                    return e[d]
                } else {
                    return a.messages.error.unknownMsg
                }
            }
        },
        alert: function(d, c) {
            alert(b.sprintf.apply(b, arguments))
        },
        messages: {
            error: {
                unknownMsg: "Unknown GUI message !",
                noLoginForm: "You must define a login form !",
                noRefreshPage: "You must define a refresh function"
            },
            warning: {},
            info: {
                loading: "Loading '%s'. Please wait..."
            },
            label: {}
        },
        pathValue: function(g, f, d) {
            var e = f.split(".");
            var h = g;
            while (e.length) {
                for (var c in h) {
                    if (c === e[0]) {
                        if (e.length === 1) {
                            if (d !== undefined) {
                                h[c] = d;
                                return
                            } else {
                                return h[c]
                            }
                        }
                        h = h[c];
                        break
                    }
                }
                e.shift()
            }
        },
        uiNamespace: "gui",
        uiWidget: function(e) {
            var j = {
                uiClasses: "",
                prototype: {},
                widgetDef: {
                    setter: "",
                    getter: "",
                    getterSetter: ""
                }
            }, k, h, d, c = function(o, p) {
                var l, n = {
                    setter: "",
                    getter: "",
                    getterSetter: ""
                };
                for (l in n) {
                    if (n.hasOwnProperty(l)) {
                        n[l] = o[l] + (p[l] ? (" " + p[l]) : "")
                    }
                }
                return n
            };
            for (var f = 1; b.isFunction(arguments[f]); f++) {
                b.extend(j.prototype, arguments[f].prototype);
                if (j.uiClasses) {
                    j.uiClasses += " "
                }
                j.uiClasses += arguments[f].uiClasses;
                d = c(j.widgetDef, arguments[f].widgetDef);
                b.extend(j.widgetDef, arguments[f].widgetDef, d)
            }
            h = arguments[f + 1];
            k = arguments[f];
            b.widget(this.uiNamespace + "." + e, b.extend(j.prototype, h));
            var g = b[this.uiNamespace][e];
            if (j.uiClasses) {
                g.uiClasses = j.uiClasses + " " + e
            } else {
                g.uiClasses = e
            }
            d = c(g, j.widgetDef);
            d = c(d, k);
            g.widgetDef = b.extend(j.widgetDef, k, d);
            b.extend(g, g.widgetDef)
        },
        access: function(c, d) {
            if (d.check === undefined) {
                d.check = function(e) {
                    return true
                }
            }
            b.fn[c] = function(e) {
                if (e !== undefined) {
                    if (d.check(e)) {
                        return this.each(function(g) {
                            if (this.gui && b.isFunction(this.gui[d.set])) {
                                this.gui[d.set](e)
                            }
                        })
                    } else {
                        return this
                    }
                } else {
                    if (this.length === 1) {
                        var f = this.get(0);
                        if (f.gui && b.isFunction(f.gui[d.get])) {
                            return f.gui[d.get]()
                        }
                    }
                }
            }
        },
        formatTime: function(k, e, f) {
            var n = Math.floor(k / 86400), j = Math.floor(k / 3600) % 24, c = Math.floor(k / 60) % 60, g = k % 60, l;
            if (n > 0) {
                l = f.replace("%j", String(n)).replace("%H", b.sprintf("%02d", j)).replace("%M", b.sprintf("%02d", c)).replace("%S", b.sprintf("%02d", g))
            } else {
                l = e.replace("%H", b.sprintf("%02d", j)).replace("%M", b.sprintf("%02d", c)).replace("%S", b.sprintf("%02d", g))
            }
            return l
        }
    }, {
        itemPath: [],
        init: function(d) {
            if (this.isString(d)) {
                d = {
                    language: arguments[0],
                    dataModel: arguments[1]
                }
            }
            var e = b.extend({
                language: this.opt.GUI_DEFAULT_LANG_OPT,
                dataModel: this.opt.GUI_DEFAULT_DATAMODEL_OPT,
                refreshPage: true
            }, d);
            this.dataModel = this.dataModels[e.dataModel];
            this.defaultClient = new this.api.Client();
            if (e.language !== null) {
                var g = b.cookie("lang", {
                    path: "/"
                }) || e.language;
                if (g) {
                    this.setLanguage(g, e.refreshPage)
                } else {
                    if (navigator.userLanguage) {
                        this.setLanguage(navigator.userLanguage, e.refreshPage)
                    } else {
                        if (navigator.language) {
                            this.setLanguage(navigator.language, e.refreshPage)
                        } else {
                            this.setLanguage(e.refreshPage)
                        }
                    }
                }
            }
            var c = this
              , f = window.location.search.slice(1, window.location.search.length).split("&");
            b.each(f, function() {
                var h = this.split("=");
                if (h[0] === "item") {
                    c.itemPath = h[1].split("/")
                }
            })
        },
        dataModels: [],
        dataModel: null,
        languages: [],
        language: null,
        setLanguage: function(d, c) {
            if (!a.isString(d)) {
                c = d;
                d = undefined
            }
            var e = this.languages[0];
            for (i = 0; i < this.languages.length; i++) {
                if (d === this.languages[i].lang) {
                    e = this.languages[i];
                    break
                }
            }
            c = (c === undefined ? true : c) && this.language && (this.language.lang !== e.lang);
            b.cookie("lang", e.lang, {
                path: "/",
                expires: 365
            });
            if ((this.language === null) || (this.language.lang !== e.lang)) {
                this.i18n.load(e.lang)
            }
            this.language = e;
            if (c) {
                a.refreshPage()
            }
        },
        openLoginForm: function() {},
        refreshPage: function() {
            a.i18n.alert("noRefreshPage")
        }
    });
    b.ajaxSetup({
        timeout: a.opt.GUI_AJAX_TIMEOUT_OPT * 1000
    });
    a.loadURL = function(d, c) {
        if (!a.isBoolean(d)) {
            c = d;
            d = true
        }
        if ((c !== undefined) && (!a.isString(c))) {
            c = b(c).attr("url")
        }
        return this.each(function(e) {
            var g = this;
            var f = c;
            if (f === undefined) {
                f = b(this).attr("url")
            }
            if (f === undefined) {
                f = this.id.toLowerCase() + ".gtpl"
            }
            if (a.opt.GUI_I18N_CGI_OPT) {
                f = "tpl/" + a.language.lang + "/" + f
            } else {
                f = "tpl/src/" + f
            }
            b(g).html("<div class='pageLoader'/>");
            b.ajax({
                async: d,
                url: f,
                success: function(h) {
                    a.currentTarget = g;
                    if (a.opt.GUI_I18N_CGI_OPT) {
                        b(g).html(h)
                    } else {
                        var j = '<script type="text/javascript">jQuery(function($){$($.gui.currentTarget).guiTranslate();});<\/script>';
                        b(g).html(j + h)
                    }
                    a.currentTarget = undefined
                },
                error: function(h, j, k) {
                    b(g).html("<div id='errorBox'><div id='errorMsg'>" + a.i18n.msg("ERROR_TPL_LABEL") + "</div></div>")
                }
            })
        })
    }
    ;
    jQuery.fn.guiLoadURL = a.loadURL;
    b.fn.guiResize = function(d, c) {
        if (b.browser.msie && (b.browser.version < 7)) {
            this.each(function(g) {
                var l = null;
                var k = null;
                if (d !== undefined) {
                    var j = b(this).css("left");
                    var f = b(this).css("right");
                    if ((j !== "auto") && (f !== "auto")) {
                        l = d - (Number(j.replace("px", "")) + Number(f.replace("px", "")));
                        b(this).width(l)
                    }
                }
                if (c !== undefined) {
                    var h = b(this).css("top");
                    var e = b(this).css("bottom");
                    if ((h !== "auto") && (e !== "auto")) {
                        k = c - (Number(h.replace("px", "")) + Number(e.replace("px", "")));
                        b(this).height(k)
                    }
                }
                if ((l !== null) || (k !== null)) {
                    b(this).children("div").guiResize(l, k)
                }
            })
        }
        return this
    }
    ;
    a.isConf = function(c) {
        return a.isObject(c) && c.isGuiConf
    }
    ;
    a.isConfArray = function(c) {
        return a.isArray(c) && c.isGuiArray
    }
    ;
    a.hashEncoder = function(c) {
        if (a.opt.GUI_ACTIVATE_SHA512ENCODE_OPT === 1) {
            return hex_sha512(c)
        } else {
            return hex_md5(c)
        }
    }
    ;
    a.extendFromDiv = function(d, f) {
        if (f) {
            var e = function(k) {
                if (k !== undefined) {
                    var g = b(f).attr(c);
                    var h = b(f).children("div." + c + ", div#" + c);
                    if (g === undefined && h.length === 1) {
                        g = b(h).text()
                    }
                    var j = a.typeOf(k);
                    if (k === null) {
                        if (h.length) {
                            d[c] = h
                        } else {
                            if (typeof g === "string") {
                                d[c] = g
                            }
                        }
                    } else {
                        if (j === "string") {
                            if (h.length) {
                                d[c] = h.html()
                            } else {
                                if (typeof g === "string") {
                                    d[c] = g
                                } else {
                                    if ((c === "text") && (d.text.length === 0)) {
                                        d.text = b(f).text()
                                    }
                                }
                            }
                        } else {
                            if (j === "boolean") {
                                if (typeof g === "string") {
                                    if (g.toLowerCase() === "true") {
                                        d[c] = true
                                    } else {
                                        if (g.toLowerCase() === "false") {
                                            d[c] = false
                                        } else {
                                            d[c] = Boolean(g)
                                        }
                                    }
                                }
                            } else {
                                if (j === "number") {
                                    if (typeof g === "string") {
                                        d[c] = Number(g)
                                    }
                                } else {
                                    if (a.isConf(k)) {
                                        if (h.length === 1) {
                                            a.extendFromDiv(d[c], h)
                                        }
                                    } else {
                                        if (a.isConfArray(k)) {
                                            b(h).children("div").each(function(m) {
                                                var l, n = k.length;
                                                for (l = 0; l < n; l++) {
                                                    if (k.compareElement(this, k[l])) {
                                                        a.extendFromDiv(k[l], this);
                                                        break
                                                    }
                                                }
                                                if (l === n) {
                                                    k.push(a.extend(this, k.elementConf))
                                                }
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    }
                    h.remove()
                }
            };
            for (var c in d) {
                if (d.hasOwnProperty(c)) {
                    e(d[c])
                }
            }
        }
        return d
    }
    ;
    a.extend = function(d) {
        var r = [], l = arguments.length, u;
        var q, s;
        var n, m, h;
        for (n = 1; n < l; n++) {
            s = a.typeOf(u = arguments[n]);
            if (s === "object") {
                r.push(u)
            } else {
                if (s === "array") {
                    for (m in u) {
                        if (u.hasOwnProperty(m)) {
                            q = u[m];
                            if (a.typeOf(q) === "object") {
                                r.push(q)
                            }
                        }
                    }
                }
            }
        }
        q = a.isConf(this) ? this : a.cnf({});
        for (n in r) {
            if (r.hasOwnProperty(n)) {
                u = r[n];
                for (var c in u) {
                    if (u.hasOwnProperty(c)) {
                        var g = u[c];
                        s = a.typeOf(g);
                        if (a.isConf(g)) {
                            if (a.isConf(q[c])) {
                                a.extend.call(q[c], null, g)
                            } else {
                                if (q[c] === undefined) {
                                    q[c] = a.extend(null, g)
                                }
                            }
                        } else {
                            if (a.isArray(g)) {
                                var o = q[c];
                                var f = 0, p, t;
                                if (a.isArray(o)) {
                                    f = o.length;
                                    p = o.elementConf;
                                    t = o.compareElement
                                } else {
                                    if (o === undefined) {
                                        p = g.elementConf;
                                        t = g.compareElement;
                                        o = q[c] = a.array(p, []);
                                        o.compareElement = t
                                    }
                                }
                                var e = g.length;
                                for (m = 0; m < e; m++) {
                                    for (h = 0; h < f; h++) {
                                        if (t(o[h], g[m])) {
                                            a.extend.call(o[h], null, g[m]);
                                            break
                                        }
                                    }
                                    if (h === f && a.typeOf(g[m]) === "object") {
                                        o.push(a.extend(null, p, g[m]))
                                    }
                                }
                            } else {
                                if (s === "null") {
                                    q[c] = null
                                } else {
                                    if (c !== "isGuiConfig" && g !== undefined) {
                                        q[c] = g
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return a.extendFromDiv(q, d)
    }
    ;
    b.fn.guiCookie = function(c, e) {
        if (e) {
            return this.each(function(h) {
                if (this.id) {
                    var g = this.id + "." + c;
                    b.cookie(g, e)
                }
            })
        } else {
            if (this.length === 1) {
                var f = this.get(0);
                if (f.id) {
                    var d = f.id + "." + c;
                    return b.cookie(d)
                }
            }
        }
    }
    ;
    b.QueryString = function(e) {
        var g, c = null, d, j = {};
        if (e === undefined) {
            c = window.location.search.substr(1)
        } else {
            d = e.indexOf("?");
            if (d === -1) {
                return {}
            }
            c = e.substring(d + 1)
        }
        g = c.split("&");
        if (g === "") {
            return {}
        }
        for (var f = 0; f < g.length; ++f) {
            var h = g[f].split("=");
            if (h.length !== 2) {
                continue
            }
            j[h[0]] = decodeURIComponent(h[1].replace(/\+/g, " "))
        }
        return j
    }
    ;
    a.fval = function(d) {
        if (d !== undefined) {
            if (typeof d === "string") {
                var c = (d.indexOf("http") === 0);
                if (!c) {
                    d = b("<div>").text(d).html()
                }
            } else {
                b.each(d, function(e, f) {
                    d[e] = a.fval(f)
                })
            }
        }
        return d
    }
    ;
    a.fec = function(c) {
        if (c !== undefined && typeof c === "string") {
            c = c.replace(/`|"|;|\$\(/g, "")
        }
        return c
    }
}(jQuery, jQuery.gui));
if (!window.console) {
    var console = {}
}
$.each(["log", "error", "warn", "info", "debug", "assert", "count", "dir", "dirxml", "trace", "group", "groupEnd", "time", "timeEnd", "profile", "profileEnd"], function(a, b) {
    if (!console[b]) {
        console[b] = function() {}
    }
});
(function(a) {
    a.languages.push({
        lang: "en",
        name: "English"
    })
}(jQuery.gui));
(function(a) {
    a.languages.push({
        lang: "fr",
        name: "Français"
    })
}(jQuery.gui));
jQuery.gui.dataModels.gtw = {
    name: "Internal",
    nss: [{
        name: "gtw",
        uri: "http://sagemcom.com/gateway-data"
    }]
};
jQuery.gui.dataModels.push(jQuery.gui.dataModels.gtw);
jQuery.gui.dataModels.tr181 = {
    name: "TR-181",
    nss: [{
        name: "tr181",
        uri: "http://sagemcom.com/tr181-data"
    }]
};
jQuery.gui.dataModels.push(jQuery.gui.dataModels.tr181);
