if (typeof JSON !== "object") {
    JSON = {}
}
(function() {
    function f(n) {
        return n < 10 ? "0" + n : n
    }
    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function(key) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }
        ;
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) {
            return this.valueOf()
        }
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, rep;
    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
            var c = meta[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + string + '"'
    }
    function str(key, holder) {
        var i, k, v, length, mind = gap, partial, value = holder[key];
        if (value && typeof value === "object" && typeof value.toJSON === "function") {
            value = value.toJSON(key)
        }
        if (typeof rep === "function") {
            value = rep.call(holder, key, value)
        }
        switch (typeof value) {
        case "string":
            return quote(value);
        case "number":
            return isFinite(value) ? String(value) : "null";
        case "boolean":
        case "null":
            return String(value);
        case "object":
            if (!value) {
                return "null"
            }
            gap += indent;
            partial = [];
            if (Object.prototype.toString.apply(value) === "[object Array]") {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || "null"
                }
                v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                gap = mind;
                return v
            }
            if (rep && typeof rep === "object") {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === "string") {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": " : ":") + v)
                        }
                    }
                }
            } else {
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": " : ":") + v)
                        }
                    }
                }
            }
            v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
            gap = mind;
            return v
        }
    }
    if (typeof JSON.stringify !== "function") {
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else {
                if (typeof space === "string") {
                    indent = space
                }
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        }
    }
    if (typeof JSON.parse !== "function") {
        JSON.parse = function(text, reviver) {
            var j;
            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    }
}());
var hexcase = 0;
var b64pad = "";
var chrsz = 8;
function hex_md5(a) {
    a = encode_utf8(a);
    return binl2hex(core_md5(str2binl(a), a.length * chrsz))
}
function b64_md5(a) {
    a = encode_utf8(a);
    return binl2b64(core_md5(str2binl(a), a.length * chrsz))
}
function str_md5(a) {
    a = encode_utf8(a);
    return binl2str(core_md5(str2binl(a), a.length * chrsz))
}
function hex_hmac_md5(a, b) {
    return binl2hex(core_hmac_md5(a, b))
}
function b64_hmac_md5(a, b) {
    return binl2b64(core_hmac_md5(a, b))
}
function str_hmac_md5(a, b) {
    return binl2str(core_hmac_md5(a, b))
}
function md5_vm_test() {
    return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72"
}
function encode_utf8(a) {
    return unescape(encodeURIComponent(a))
}
function core_md5(p, k) {
    p[k >> 5] |= 128 << ((k) % 32);
    p[(((k + 64) >>> 9) << 4) + 14] = k;
    var o = 1732584193;
    var n = -271733879;
    var m = -1732584194;
    var l = 271733878;
    for (var g = 0; g < p.length; g += 16) {
        var j = o;
        var h = n;
        var f = m;
        var e = l;
        o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
        l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
        m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
        n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
        o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
        l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
        m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
        n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
        o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
        l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
        m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
        n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
        o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
        l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
        m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
        n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
        o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
        l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
        m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
        n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
        o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
        l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
        m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
        n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
        o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
        l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
        m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
        n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
        o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
        l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
        m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
        n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
        o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
        l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
        m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
        n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
        o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
        l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
        m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
        n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
        o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
        l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
        m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
        n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
        o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
        l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
        m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
        n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
        o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
        l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
        m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
        n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
        o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
        l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
        m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
        n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
        o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
        l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
        m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
        n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
        o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
        l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
        m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
        n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
        o = safe_add(o, j);
        n = safe_add(n, h);
        m = safe_add(m, f);
        l = safe_add(l, e)
    }
    return Array(o, n, m, l)
}
function md5_cmn(h, e, d, c, g, f) {
    return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
}
function md5_ff(g, f, k, j, e, i, h) {
    return md5_cmn((f & k) | ((~f) & j), g, f, e, i, h)
}
function md5_gg(g, f, k, j, e, i, h) {
    return md5_cmn((f & j) | (k & (~j)), g, f, e, i, h)
}
function md5_hh(g, f, k, j, e, i, h) {
    return md5_cmn(f ^ k ^ j, g, f, e, i, h)
}
function md5_ii(g, f, k, j, e, i, h) {
    return md5_cmn(k ^ (f | (~j)), g, f, e, i, h)
}
function core_hmac_md5(c, f) {
    var e = str2binl(c);
    if (e.length > 16) {
        e = core_md5(e, c.length * chrsz)
    }
    var a = Array(16)
      , d = Array(16);
    for (var b = 0; b < 16; b++) {
        a[b] = e[b] ^ 909522486;
        d[b] = e[b] ^ 1549556828
    }
    var g = core_md5(a.concat(str2binl(f)), 512 + f.length * chrsz);
    return core_md5(d.concat(g), 512 + 128)
}
function safe_add(a, d) {
    var c = (a & 65535) + (d & 65535);
    var b = (a >> 16) + (d >> 16) + (c >> 16);
    return (b << 16) | (c & 65535)
}
function bit_rol(a, b) {
    return (a << b) | (a >>> (32 - b))
}
function str2binl(d) {
    var c = Array();
    var a = (1 << chrsz) - 1;
    for (var b = 0; b < d.length * chrsz; b += chrsz) {
        c[b >> 5] |= (d.charCodeAt(b / chrsz) & a) << (b % 32)
    }
    return c
}
function binl2str(c) {
    var d = "";
    var a = (1 << chrsz) - 1;
    for (var b = 0; b < c.length * 32; b += chrsz) {
        d += String.fromCharCode((c[b >> 5] >>> (b % 32)) & a)
    }
    return d
}
function binl2hex(c) {
    var b = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var d = "";
    for (var a = 0; a < c.length * 4; a++) {
        d += b.charAt((c[a >> 2] >> ((a % 4) * 8 + 4)) & 15) + b.charAt((c[a >> 2] >> ((a % 4) * 8)) & 15)
    }
    return d
}
function binl2b64(d) {
    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var f = "";
    for (var b = 0; b < d.length * 4; b += 3) {
        var e = (((d[b >> 2] >> 8 * (b % 4)) & 255) << 16) | (((d[b + 1 >> 2] >> 8 * ((b + 1) % 4)) & 255) << 8) | ((d[b + 2 >> 2] >> 8 * ((b + 2) % 4)) & 255);
        for (var a = 0; a < 4; a++) {
            if (b * 8 + a * 6 > d.length * 32) {
                f += b64pad
            } else {
                f += c.charAt((e >> 6 * (3 - a)) & 63)
            }
        }
    }
    return f
}
var hexcase = 0;
var b64pad = "";
function hex_sha512(a) {
    return rstr2hex(rstr_sha512(str2rstr_utf8(a)))
}
function b64_sha512(a) {
    return rstr2b64(rstr_sha512(str2rstr_utf8(a)))
}
function any_sha512(a, b) {
    return rstr2any(rstr_sha512(str2rstr_utf8(a)), b)
}
function hex_hmac_sha512(a, b) {
    return rstr2hex(rstr_hmac_sha512(str2rstr_utf8(a), str2rstr_utf8(b)))
}
function b64_hmac_sha512(a, b) {
    return rstr2b64(rstr_hmac_sha512(str2rstr_utf8(a), str2rstr_utf8(b)))
}
function any_hmac_sha512(a, c, b) {
    return rstr2any(rstr_hmac_sha512(str2rstr_utf8(a), str2rstr_utf8(c)), b)
}
function sha512_vm_test() {
    return hex_sha512("abc").toLowerCase() == "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f"
}
function rstr_sha512(a) {
    return binb2rstr(binb_sha512(rstr2binb(a), a.length * 8))
}
function rstr_hmac_sha512(c, f) {
    var e = rstr2binb(c);
    if (e.length > 32) {
        e = binb_sha512(e, c.length * 8)
    }
    var a = Array(32)
      , d = Array(32);
    for (var b = 0; b < 32; b++) {
        a[b] = e[b] ^ 909522486;
        d[b] = e[b] ^ 1549556828
    }
    var g = binb_sha512(a.concat(rstr2binb(f)), 1024 + f.length * 8);
    return binb2rstr(binb_sha512(d.concat(g), 1024 + 512))
}
function rstr2hex(c) {
    try {
        hexcase
    } catch (g) {
        hexcase = 0
    }
    var f = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var b = "";
    var a;
    for (var d = 0; d < c.length; d++) {
        a = c.charCodeAt(d);
        b += f.charAt((a >>> 4) & 15) + f.charAt(a & 15)
    }
    return b
}
function rstr2b64(c) {
    try {
        b64pad
    } catch (h) {
        b64pad = ""
    }
    var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var b = "";
    var a = c.length;
    for (var f = 0; f < a; f += 3) {
        var k = (c.charCodeAt(f) << 16) | (f + 1 < a ? c.charCodeAt(f + 1) << 8 : 0) | (f + 2 < a ? c.charCodeAt(f + 2) : 0);
        for (var d = 0; d < 4; d++) {
            if (f * 8 + d * 6 > c.length * 8) {
                b += b64pad
            } else {
                b += g.charAt((k >>> 6 * (3 - d)) & 63)
            }
        }
    }
    return b
}
function rstr2any(m, c) {
    var b = c.length;
    var l, f, a, n, e;
    var k = Array(Math.ceil(m.length / 2));
    for (l = 0; l < k.length; l++) {
        k[l] = (m.charCodeAt(l * 2) << 8) | m.charCodeAt(l * 2 + 1)
    }
    var h = Math.ceil(m.length * 8 / (Math.log(c.length) / Math.log(2)));
    var g = Array(h);
    for (f = 0; f < h; f++) {
        e = Array();
        n = 0;
        for (l = 0; l < k.length; l++) {
            n = (n << 16) + k[l];
            a = Math.floor(n / b);
            n -= a * b;
            if (e.length > 0 || a > 0) {
                e[e.length] = a
            }
        }
        g[f] = n;
        k = e
    }
    var d = "";
    for (l = g.length - 1; l >= 0; l--) {
        d += c.charAt(g[l])
    }
    return d
}
function str2rstr_utf8(c) {
    var b = "";
    var d = -1;
    var a, e;
    while (++d < c.length) {
        a = c.charCodeAt(d);
        e = d + 1 < c.length ? c.charCodeAt(d + 1) : 0;
        if (55296 <= a && a <= 56319 && 56320 <= e && e <= 57343) {
            a = 65536 + ((a & 1023) << 10) + (e & 1023);
            d++
        }
        if (a <= 127) {
            b += String.fromCharCode(a)
        } else {
            if (a <= 2047) {
                b += String.fromCharCode(192 | ((a >>> 6) & 31), 128 | (a & 63))
            } else {
                if (a <= 65535) {
                    b += String.fromCharCode(224 | ((a >>> 12) & 15), 128 | ((a >>> 6) & 63), 128 | (a & 63))
                } else {
                    if (a <= 2097151) {
                        b += String.fromCharCode(240 | ((a >>> 18) & 7), 128 | ((a >>> 12) & 63), 128 | ((a >>> 6) & 63), 128 | (a & 63))
                    }
                }
            }
        }
    }
    return b
}
function str2rstr_utf16le(b) {
    var a = "";
    for (var c = 0; c < b.length; c++) {
        a += String.fromCharCode(b.charCodeAt(c) & 255, (b.charCodeAt(c) >>> 8) & 255)
    }
    return a
}
function str2rstr_utf16be(b) {
    var a = "";
    for (var c = 0; c < b.length; c++) {
        a += String.fromCharCode((b.charCodeAt(c) >>> 8) & 255, b.charCodeAt(c) & 255)
    }
    return a
}
function rstr2binb(b) {
    var a = Array(b.length >> 2);
    for (var c = 0; c < a.length; c++) {
        a[c] = 0
    }
    for (var c = 0; c < b.length * 8; c += 8) {
        a[c >> 5] |= (b.charCodeAt(c / 8) & 255) << (24 - c % 32)
    }
    return a
}
function binb2rstr(b) {
    var a = "";
    for (var c = 0; c < b.length * 32; c += 8) {
        a += String.fromCharCode((b[c >> 5] >>> (24 - c % 32)) & 255)
    }
    return a
}
var sha512_k;
function binb_sha512(p, A) {
    if (sha512_k == undefined) {
        sha512_k = new Array(new int64(1116352408,-685199838),new int64(1899447441,602891725),new int64(-1245643825,-330482897),new int64(-373957723,-2121671748),new int64(961987163,-213338824),new int64(1508970993,-1241133031),new int64(-1841331548,-1357295717),new int64(-1424204075,-630357736),new int64(-670586216,-1560083902),new int64(310598401,1164996542),new int64(607225278,1323610764),new int64(1426881987,-704662302),new int64(1925078388,-226784913),new int64(-2132889090,991336113),new int64(-1680079193,633803317),new int64(-1046744716,-815192428),new int64(-459576895,-1628353838),new int64(-272742522,944711139),new int64(264347078,-1953704523),new int64(604807628,2007800933),new int64(770255983,1495990901),new int64(1249150122,1856431235),new int64(1555081692,-1119749164),new int64(1996064986,-2096016459),new int64(-1740746414,-295247957),new int64(-1473132947,766784016),new int64(-1341970488,-1728372417),new int64(-1084653625,-1091629340),new int64(-958395405,1034457026),new int64(-710438585,-1828018395),new int64(113926993,-536640913),new int64(338241895,168717936),new int64(666307205,1188179964),new int64(773529912,1546045734),new int64(1294757372,1522805485),new int64(1396182291,-1651133473),new int64(1695183700,-1951439906),new int64(1986661051,1014477480),new int64(-2117940946,1206759142),new int64(-1838011259,344077627),new int64(-1564481375,1290863460),new int64(-1474664885,-1136513023),new int64(-1035236496,-789014639),new int64(-949202525,106217008),new int64(-778901479,-688958952),new int64(-694614492,1432725776),new int64(-200395387,1467031594),new int64(275423344,851169720),new int64(430227734,-1194143544),new int64(506948616,1363258195),new int64(659060556,-544281703),new int64(883997877,-509917016),new int64(958139571,-976659869),new int64(1322822218,-482243893),new int64(1537002063,2003034995),new int64(1747873779,-692930397),new int64(1955562222,1575990012),new int64(2024104815,1125592928),new int64(-2067236844,-1578062990),new int64(-1933114872,442776044),new int64(-1866530822,593698344),new int64(-1538233109,-561857047),new int64(-1090935817,-1295615723),new int64(-965641998,-479046869),new int64(-903397682,-366583396),new int64(-779700025,566280711),new int64(-354779690,-840897762),new int64(-176337025,-294727304),new int64(116418474,1914138554),new int64(174292421,-1563912026),new int64(289380356,-1090974290),new int64(460393269,320620315),new int64(685471733,587496836),new int64(852142971,1086792851),new int64(1017036298,365543100),new int64(1126000580,-1676669620),new int64(1288033470,-885112138),new int64(1501505948,-60457430),new int64(1607167915,987167468),new int64(1816402316,1246189591))
    }
    var q = new Array(new int64(1779033703,-205731576),new int64(-1150833019,-2067093701),new int64(1013904242,-23791573),new int64(-1521486534,1595750129),new int64(1359893119,-1377402159),new int64(-1694144372,725511199),new int64(528734635,-79577749),new int64(1541459225,327033209));
    var s = new int64(0,0)
      , r = new int64(0,0)
      , J = new int64(0,0)
      , I = new int64(0,0)
      , G = new int64(0,0)
      , F = new int64(0,0)
      , E = new int64(0,0)
      , D = new int64(0,0)
      , C = new int64(0,0)
      , B = new int64(0,0)
      , m = new int64(0,0)
      , l = new int64(0,0)
      , t = new int64(0,0)
      , o = new int64(0,0)
      , z = new int64(0,0)
      , w = new int64(0,0)
      , u = new int64(0,0);
    var v, y;
    var n = new Array(80);
    for (y = 0; y < 80; y++) {
        n[y] = new int64(0,0)
    }
    p[A >> 5] |= 128 << (24 - (A & 31));
    p[((A + 128 >> 10) << 5) + 31] = A;
    for (y = 0; y < p.length; y += 32) {
        int64copy(J, q[0]);
        int64copy(I, q[1]);
        int64copy(G, q[2]);
        int64copy(F, q[3]);
        int64copy(E, q[4]);
        int64copy(D, q[5]);
        int64copy(C, q[6]);
        int64copy(B, q[7]);
        for (v = 0; v < 16; v++) {
            n[v].h = p[y + 2 * v];
            n[v].l = p[y + 2 * v + 1]
        }
        for (v = 16; v < 80; v++) {
            int64rrot(z, n[v - 2], 19);
            int64revrrot(w, n[v - 2], 29);
            int64shr(u, n[v - 2], 6);
            l.l = z.l ^ w.l ^ u.l;
            l.h = z.h ^ w.h ^ u.h;
            int64rrot(z, n[v - 15], 1);
            int64rrot(w, n[v - 15], 8);
            int64shr(u, n[v - 15], 7);
            m.l = z.l ^ w.l ^ u.l;
            m.h = z.h ^ w.h ^ u.h;
            int64add4(n[v], l, n[v - 7], m, n[v - 16])
        }
        for (v = 0; v < 80; v++) {
            t.l = (E.l & D.l) ^ (~E.l & C.l);
            t.h = (E.h & D.h) ^ (~E.h & C.h);
            int64rrot(z, E, 14);
            int64rrot(w, E, 18);
            int64revrrot(u, E, 9);
            l.l = z.l ^ w.l ^ u.l;
            l.h = z.h ^ w.h ^ u.h;
            int64rrot(z, J, 28);
            int64revrrot(w, J, 2);
            int64revrrot(u, J, 7);
            m.l = z.l ^ w.l ^ u.l;
            m.h = z.h ^ w.h ^ u.h;
            o.l = (J.l & I.l) ^ (J.l & G.l) ^ (I.l & G.l);
            o.h = (J.h & I.h) ^ (J.h & G.h) ^ (I.h & G.h);
            int64add5(s, B, l, t, sha512_k[v], n[v]);
            int64add(r, m, o);
            int64copy(B, C);
            int64copy(C, D);
            int64copy(D, E);
            int64add(E, F, s);
            int64copy(F, G);
            int64copy(G, I);
            int64copy(I, J);
            int64add(J, s, r)
        }
        int64add(q[0], q[0], J);
        int64add(q[1], q[1], I);
        int64add(q[2], q[2], G);
        int64add(q[3], q[3], F);
        int64add(q[4], q[4], E);
        int64add(q[5], q[5], D);
        int64add(q[6], q[6], C);
        int64add(q[7], q[7], B)
    }
    var k = new Array(16);
    for (y = 0; y < 8; y++) {
        k[2 * y] = q[y].h;
        k[2 * y + 1] = q[y].l
    }
    return k
}
function int64(b, a) {
    this.h = b;
    this.l = a
}
function int64copy(b, a) {
    b.h = a.h;
    b.l = a.l
}
function int64rrot(c, a, b) {
    c.l = (a.l >>> b) | (a.h << (32 - b));
    c.h = (a.h >>> b) | (a.l << (32 - b))
}
function int64revrrot(c, a, b) {
    c.l = (a.h >>> b) | (a.l << (32 - b));
    c.h = (a.l >>> b) | (a.h << (32 - b))
}
function int64shr(c, a, b) {
    c.l = (a.l >>> b) | (a.h << (32 - b));
    c.h = (a.h >>> b)
}
function int64add(g, b, f) {
    var d = (b.l & 65535) + (f.l & 65535);
    var c = (b.l >>> 16) + (f.l >>> 16) + (d >>> 16);
    var a = (b.h & 65535) + (f.h & 65535) + (c >>> 16);
    var e = (b.h >>> 16) + (f.h >>> 16) + (a >>> 16);
    g.l = (d & 65535) | (c << 16);
    g.h = (a & 65535) | (e << 16)
}
function int64add4(j, m, l, k, i) {
    var h = (m.l & 65535) + (l.l & 65535) + (k.l & 65535) + (i.l & 65535);
    var g = (m.l >>> 16) + (l.l >>> 16) + (k.l >>> 16) + (i.l >>> 16) + (h >>> 16);
    var f = (m.h & 65535) + (l.h & 65535) + (k.h & 65535) + (i.h & 65535) + (g >>> 16);
    var e = (m.h >>> 16) + (l.h >>> 16) + (k.h >>> 16) + (i.h >>> 16) + (f >>> 16);
    j.l = (h & 65535) | (g << 16);
    j.h = (f & 65535) | (e << 16)
}
function int64add5(l, o, n, m, k, j) {
    var i = (o.l & 65535) + (n.l & 65535) + (m.l & 65535) + (k.l & 65535) + (j.l & 65535);
    var h = (o.l >>> 16) + (n.l >>> 16) + (m.l >>> 16) + (k.l >>> 16) + (j.l >>> 16) + (i >>> 16);
    var g = (o.h & 65535) + (n.h & 65535) + (m.h & 65535) + (k.h & 65535) + (j.h & 65535) + (h >>> 16);
    var f = (o.h >>> 16) + (n.h >>> 16) + (m.h >>> 16) + (k.h >>> 16) + (j.h >>> 16) + (g >>> 16);
    l.l = (i & 65535) | (h << 16);
    l.h = (g & 65535) | (f << 16)
}
(function(f) {
    f.sprintf = function(h) {
        return g(h, arguments, 1)
    }
    ;
    f.vsprintf = function(h, i) {
        if (i === undefined) {
            i = 0
        }
        return g(h[i], h, i + 1)
    }
    ;
    f.alertf = function() {
        return alert(f.vsprintf(arguments))
    }
    ;
    f.vlogf = function(h) {
        if ("console"in window) {
            console.info(f.vsprintf(h))
        }
    }
    ;
    f.verrorf = function(h) {
        if ("console"in window) {
            console.error(f.vsprintf(h))
        }
    }
    ;
    f.errorf = function() {
        f.verrorf(arguments)
    }
    ;
    f.logf = function() {
        f.vlogf(arguments)
    }
    ;
    FREGEXP = /^([^%]*)%([\-+])?(0)?(\d+)?(\.(\d+))?([doxXcsf])(.*)$/;
    HDIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    function a(h) {
        if (h === undefined || h === null) {
            return true
        }
        return (h === "") ? true : false
    }
    function d(h) {
        return Math.floor(h)
    }
    function e(m, k, l, h, j) {
        m = parseInt(m, 10);
        if (isNaN(m)) {
            return "NaN"
        }
        aval = (m < 0) ? -m : m;
        var i = "";
        if (aval === 0) {
            i = "0"
        } else {
            while (aval > 0) {
                i = HDIGITS[aval % k] + i;
                aval = d(aval / k)
            }
        }
        if (m < 0) {
            i = "-" + i
        }
        if (h == "-") {
            l = " "
        }
        return c(i, l, h, j, -1)
    }
    function b(o, l, n, h, j) {
        if (j === undefined) {
            if (parseInt(o, undefined) != o) {
                return "" + o
            }
            j = 5
        }
        var m = Math.pow(10, j);
        var i = "" + Math.round(o * m);
        var k = i.length - j;
        if (k === 0) {
            return "0." + i.substr(k, j)
        }
        return i.substr(0, k) + "." + i.substr(k, j)
    }
    function c(m, l, h, j, i) {
        var k;
        if (m === undefined) {
            return "(undefined)"
        }
        if (m === null) {
            return "(null)"
        }
        if ((k = j - m.length) > 0) {
            if (h == "-") {
                while (k > 0) {
                    m += l;
                    k--
                }
            } else {
                while (k > 0) {
                    m = l + m;
                    k--
                }
            }
        }
        if (i > 0) {
            return m.substr(0, i)
        }
        return m
    }
    function g(p, k, u) {
        var o = "";
        var s, r, w, t;
        w = p.split("\n");
        for (s = 0; s < w.length; s++) {
            if (s > 0) {
                o += "\n"
            }
            p = w[s];
            while ((t = FREGEXP.exec(p)) !== null) {
                var n = "";
                var q = " ";
                if (!a(t[1])) {
                    o += t[1]
                }
                if (!a(t[2])) {
                    n = t[2]
                }
                if (!a(t[3])) {
                    q = "0"
                }
                var j = t[4];
                var h = t[6];
                var v = t[7];
                p = t[8];
                if (u >= k.length) {
                    o += "[missing parameter for type '" + v + "']";
                    continue
                }
                var l = k[u++];
                switch (v) {
                case "d":
                    o += e(l, 10, q, n, j);
                    break;
                case "o":
                    o += e(l, 8, q, n, j);
                    break;
                case "x":
                    o += e(l, 16, q, n, j);
                    break;
                case "X":
                    o += e(l, 16, q, n, j).toUpperCase();
                    break;
                case "c":
                    o += String.fromCharCode(parseInt(l, 10));
                    break;
                case "s":
                    o += c(l, q, n, j, h);
                    break;
                case "f":
                    o += b(l, q, n, j, h);
                    break;
                default:
                    o += "[unknown format '" + v + "']";
                    break
                }
            }
            o += p
        }
        return o
    }
}
)(jQuery);
jQuery.cookie = function(d, e, b) {
    if (arguments.length > 1 && (e === null || typeof e !== "object")) {
        b = jQuery.extend({}, b);
        if (e === null) {
            b.expires = -1
        }
        if (typeof b.expires === "number") {
            var g = b.expires
              , c = b.expires = new Date();
            c.setDate(c.getDate() + g)
        }
        return (document.cookie = [encodeURIComponent(d), "=", b.raw ? String(e) : encodeURIComponent(String(e)), b.expires ? "; expires=" + b.expires.toUTCString() : "", b.path ? "; path=" + b.path : "", b.domain ? "; domain=" + b.domain : "", b.secure ? "; secure" : ""].join(""))
    }
    b = e || {};
    var a, f = b.raw ? function(h) {
        return h
    }
    : decodeURIComponent;
    return (a = new RegExp("(?:^|; )" + encodeURIComponent(d) + "=([^;]*)").exec(document.cookie)) ? f(a[1]) : null
}
;
(function($) {
    $.extend({
        metadata: {
            defaults: {
                type: "class",
                name: "metadata",
                cre: /({.*})/,
                single: "metadata"
            },
            setType: function(type, name) {
                this.defaults.type = type;
                this.defaults.name = name
            },
            get: function(elem, opts) {
                var settings = $.extend({}, this.defaults, opts);
                if (!settings.single.length) {
                    settings.single = "metadata"
                }
                var data = $.data(elem, settings.single);
                if (data) {
                    return data
                }
                data = "{}";
                if (settings.type == "class") {
                    var m = settings.cre.exec(elem.className);
                    if (m) {
                        data = m[1]
                    }
                } else {
                    if (settings.type == "elem") {
                        if (!elem.getElementsByTagName) {
                            return undefined
                        }
                        var e = elem.getElementsByTagName(settings.name);
                        if (e.length) {
                            data = $.trim(e[0].innerHTML)
                        }
                    } else {
                        if (elem.getAttribute != undefined) {
                            var attr = elem.getAttribute(settings.name);
                            if (attr) {
                                data = attr
                            }
                        }
                    }
                }
                if (data.indexOf("{") < 0) {
                    data = "{" + data + "}"
                }
                data = eval("(" + data + ")");
                $.data(elem, settings.single, data);
                return data
            }
        }
    });
    $.fn.metadata = function(opts) {
        return $.metadata.get(this[0], opts)
    }
}
)(jQuery);
jQuery.extend({
    random: function(a) {
        return Math.floor(a * (Math.random() % 1))
    },
    randomBetween: function(b, a) {
        return b + jQuery.random(a - b + 1)
    }
});
/*!
 * jQuery Form Plugin
 * version: 3.09 (16-APR-2012)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses:
 *    http://malsup.github.com/mit-license.txt
 *    http://malsup.github.com/gpl-license-v2.txt
 */
(function(e) {
    var c = {};
    c.fileapi = e("<input type='file'/>").get(0).files !== undefined;
    c.formdata = window.FormData !== undefined;
    e.fn.ajaxSubmit = function(g) {
        if (!this.length) {
            d("ajaxSubmit: skipping submit process - no element selected");
            return this
        }
        var f, w, i, l = this;
        if (typeof g == "function") {
            g = {
                success: g
            }
        }
        f = this.attr("method");
        w = this.attr("action");
        i = (typeof w === "string") ? e.trim(w) : "";
        i = i || window.location.href || "";
        if (i) {
            i = (i.match(/^([^#]+)/) || [])[1]
        }
        g = e.extend(true, {
            url: i,
            success: e.ajaxSettings.success,
            type: f || "GET",
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, g);
        var r = {};
        this.trigger("form-pre-serialize", [this, g, r]);
        if (r.veto) {
            d("ajaxSubmit: submit vetoed via form-pre-serialize trigger");
            return this
        }
        if (g.beforeSerialize && g.beforeSerialize(this, g) === false) {
            d("ajaxSubmit: submit aborted via beforeSerialize callback");
            return this
        }
        var j = g.traditional;
        if (j === undefined) {
            j = e.ajaxSettings.traditional
        }
        var o = [];
        var z, A = this.formToArray(g.semantic, o);
        if (g.data) {
            g.extraData = g.data;
            z = e.param(g.data, j)
        }
        if (g.beforeSubmit && g.beforeSubmit(A, this, g) === false) {
            d("ajaxSubmit: submit aborted via beforeSubmit callback");
            return this
        }
        this.trigger("form-submit-validate", [A, this, g, r]);
        if (r.veto) {
            d("ajaxSubmit: submit vetoed via form-submit-validate trigger");
            return this
        }
        var u = e.param(A, j);
        if (z) {
            u = (u ? (u + "&" + z) : z)
        }
        if (g.type.toUpperCase() == "GET") {
            g.url += (g.url.indexOf("?") >= 0 ? "&" : "?") + u;
            g.data = null
        } else {
            g.data = u
        }
        var C = [];
        if (g.resetForm) {
            C.push(function() {
                l.resetForm()
            })
        }
        if (g.clearForm) {
            C.push(function() {
                l.clearForm(g.includeHidden)
            })
        }
        if (!g.dataType && g.target) {
            var h = g.success || function() {}
            ;
            C.push(function(q) {
                var k = g.replaceTarget ? "replaceWith" : "html";
                e(g.target)[k](q).each(h, arguments)
            })
        } else {
            if (g.success) {
                C.push(g.success)
            }
        }
        g.success = function(F, q, G) {
            var E = g.context || g;
            for (var D = 0, k = C.length; D < k; D++) {
                C[D].apply(E, [F, q, G || l, l])
            }
        }
        ;
        var y = e("input:file:enabled[value]", this);
        var m = y.length > 0;
        var x = "multipart/form-data";
        var t = (l.attr("enctype") == x || l.attr("encoding") == x);
        var s = c.fileapi && c.formdata;
        d("fileAPI :" + s);
        var n = (m || t) && !s;
        if (g.iframe !== false && (g.iframe || n)) {
            if (g.closeKeepAlive) {
                e.get(g.closeKeepAlive, function() {
                    B(A)
                })
            } else {
                B(A)
            }
        } else {
            if ((m || t) && s) {
                p(A)
            } else {
                e.ajax(g)
            }
        }
        for (var v = 0; v < o.length; v++) {
            o[v] = null
        }
        this.trigger("form-submit-notify", [this, g]);
        return this;
        function p(q) {
            var k = new FormData();
            for (var D = 0; D < q.length; D++) {
                k.append(q[D].name, q[D].value)
            }
            if (g.extraData) {
                for (var G in g.extraData) {
                    if (g.extraData.hasOwnProperty(G)) {
                        k.append(G, g.extraData[G])
                    }
                }
            }
            g.data = null;
            var F = e.extend(true, {}, e.ajaxSettings, g, {
                contentType: false,
                processData: false,
                cache: false,
                type: "POST"
            });
            if (g.uploadProgress) {
                F.xhr = function() {
                    var H = jQuery.ajaxSettings.xhr();
                    if (H.upload) {
                        H.upload.onprogress = function(L) {
                            var K = 0;
                            var I = L.loaded || L.position;
                            var J = L.total;
                            if (L.lengthComputable) {
                                K = Math.ceil(I / J * 100)
                            }
                            g.uploadProgress(L, I, J, K)
                        }
                    }
                    return H
                }
            }
            F.data = null;
            var E = F.beforeSend;
            F.beforeSend = function(I, H) {
                H.data = k;
                if (E) {
                    E.call(H, I, g)
                }
            }
            ;
            e.ajax(F)
        }
        function B(ab) {
            var G = l[0], F, X, R, Z, U, I, M, K, L, V, Y, P;
            var J = !!e.fn.prop;
            if (e(":input[name=submit],:input[id=submit]", G).length) {
                alert('Error: Form elements must not have name or id of "submit".');
                return
            }
            if (ab) {
                for (X = 0; X < o.length; X++) {
                    F = e(o[X]);
                    if (J) {
                        F.prop("disabled", false)
                    } else {
                        F.removeAttr("disabled")
                    }
                }
            }
            R = e.extend(true, {}, e.ajaxSettings, g);
            R.context = R.context || R;
            U = "jqFormIO" + (new Date().getTime());
            if (R.iframeTarget) {
                I = e(R.iframeTarget);
                V = I.attr("name");
                if (!V) {
                    I.attr("name", U)
                } else {
                    U = V
                }
            } else {
                I = e('<iframe name="' + U + '" src="' + R.iframeSrc + '" />');
                I.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })
            }
            M = I[0];
            K = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function(ae) {
                    var af = (ae === "timeout" ? "timeout" : "aborted");
                    d("aborting upload... " + af);
                    this.aborted = 1;
                    I.attr("src", R.iframeSrc);
                    K.error = af;
                    if (R.error) {
                        R.error.call(R.context, K, af, ae)
                    }
                    if (Z) {
                        e.event.trigger("ajaxError", [K, R, af])
                    }
                    if (R.complete) {
                        R.complete.call(R.context, K, af)
                    }
                }
            };
            Z = R.global;
            if (Z && 0 === e.active++) {
                e.event.trigger("ajaxStart")
            }
            if (Z) {
                e.event.trigger("ajaxSend", [K, R])
            }
            if (R.beforeSend && R.beforeSend.call(R.context, K, R) === false) {
                if (R.global) {
                    e.active--
                }
                return
            }
            if (K.aborted) {
                return
            }
            L = G.clk;
            if (L) {
                V = L.name;
                if (V && !L.disabled) {
                    R.extraData = R.extraData || {};
                    R.extraData[V] = L.value;
                    if (L.type == "image") {
                        R.extraData[V + ".x"] = G.clk_x;
                        R.extraData[V + ".y"] = G.clk_y
                    }
                }
            }
            var Q = 1;
            var N = 2;
            function O(af) {
                var ae = af.contentWindow ? af.contentWindow.document : af.contentDocument ? af.contentDocument : af.document;
                return ae
            }
            var E = e("meta[name=csrf-token]").attr("content");
            var D = e("meta[name=csrf-param]").attr("content");
            if (D && E) {
                R.extraData = R.extraData || {};
                R.extraData[D] = E
            }
            function W() {
                var ag = l.attr("target")
                  , ae = l.attr("action");
                G.setAttribute("target", U);
                if (!f) {
                    G.setAttribute("method", "POST")
                }
                if (ae != R.url) {
                    G.setAttribute("action", R.url)
                }
                if (!R.skipEncodingOverride && (!f || /post/i.test(f))) {
                    l.attr({
                        encoding: "multipart/form-data",
                        enctype: "multipart/form-data"
                    })
                }
                if (R.timeout) {
                    P = setTimeout(function() {
                        Y = true;
                        T(Q)
                    }, R.timeout)
                }
                function ah() {
                    try {
                        var aj = O(M).readyState;
                        d("state = " + aj);
                        if (aj && aj.toLowerCase() == "uninitialized") {
                            setTimeout(ah, 50)
                        }
                    } catch (ak) {
                        d("Server abort: ", ak, " (", ak.name, ")");
                        T(N);
                        if (P) {
                            clearTimeout(P)
                        }
                        P = undefined
                    }
                }
                var af = [];
                try {
                    if (R.extraData) {
                        for (var ai in R.extraData) {
                            if (R.extraData.hasOwnProperty(ai)) {
                                af.push(e('<input type="hidden" name="' + ai + '">').attr("value", R.extraData[ai]).appendTo(G)[0])
                            }
                        }
                    }
                    if (!R.iframeTarget) {
                        I.appendTo("body");
                        if (M.attachEvent) {
                            M.attachEvent("onload", T)
                        } else {
                            M.addEventListener("load", T, false)
                        }
                    }
                    setTimeout(ah, 15);
                    G.submit()
                } finally {
                    G.setAttribute("action", ae);
                    if (ag) {
                        G.setAttribute("target", ag)
                    } else {
                        l.removeAttr("target")
                    }
                    e(af).remove()
                }
            }
            if (R.forceSync) {
                W()
            } else {
                setTimeout(W, 10)
            }
            var ac, ad, aa = 50, H;
            function T(aj) {
                if (K.aborted || H) {
                    return
                }
                try {
                    ad = O(M)
                } catch (am) {
                    d("cannot access response document: ", am);
                    aj = N
                }
                if (aj === Q && K) {
                    K.abort("timeout");
                    return
                } else {
                    if (aj == N && K) {
                        K.abort("server abort");
                        return
                    }
                }
                if (!ad || ad.location.href == R.iframeSrc) {
                    if (!Y) {
                        return
                    }
                }
                if (M.detachEvent) {
                    M.detachEvent("onload", T)
                } else {
                    M.removeEventListener("load", T, false)
                }
                var ah = "success", al;
                try {
                    if (Y) {
                        throw "timeout"
                    }
                    var ag = R.dataType == "xml" || ad.XMLDocument || e.isXMLDoc(ad);
                    d("isXml=" + ag);
                    if (!ag && window.opera && (ad.body === null || !ad.body.innerHTML)) {
                        if (--aa) {
                            d("requeing onLoad callback, DOM not available");
                            setTimeout(T, 250);
                            return
                        }
                    }
                    var an = ad.body ? ad.body : ad.documentElement;
                    K.responseText = an ? an.innerHTML : null;
                    K.responseXML = ad.XMLDocument ? ad.XMLDocument : ad;
                    if (ag) {
                        R.dataType = "xml"
                    }
                    K.getResponseHeader = function(aq) {
                        var ap = {
                            "content-type": R.dataType
                        };
                        return ap[aq]
                    }
                    ;
                    if (an) {
                        K.status = Number(an.getAttribute("status")) || K.status;
                        K.statusText = an.getAttribute("statusText") || K.statusText
                    }
                    var ae = (R.dataType || "").toLowerCase();
                    var ak = /(json|script|text)/.test(ae);
                    if (ak || R.textarea) {
                        var ai = ad.getElementsByTagName("textarea")[0];
                        if (ai) {
                            K.responseText = ai.value;
                            K.status = Number(ai.getAttribute("status")) || K.status;
                            K.statusText = ai.getAttribute("statusText") || K.statusText
                        } else {
                            if (ak) {
                                var af = ad.getElementsByTagName("pre")[0];
                                var ao = ad.getElementsByTagName("body")[0];
                                if (af) {
                                    K.responseText = af.textContent ? af.textContent : af.innerText
                                } else {
                                    if (ao) {
                                        K.responseText = ao.textContent ? ao.textContent : ao.innerText
                                    }
                                }
                            }
                        }
                    } else {
                        if (ae == "xml" && !K.responseXML && K.responseText) {
                            K.responseXML = S(K.responseText)
                        }
                    }
                    try {
                        ac = k(K, ae, R)
                    } catch (aj) {
                        ah = "parsererror";
                        K.error = al = (aj || ah)
                    }
                } catch (aj) {
                    d("error caught: ", aj);
                    ah = "error";
                    K.error = al = (aj || ah)
                }
                if (K.aborted) {
                    d("upload aborted");
                    ah = null
                }
                if (K.status) {
                    ah = (K.status >= 200 && K.status < 300 || K.status === 304) ? "success" : "error"
                }
                if (ah === "success") {
                    if (R.success) {
                        R.success.call(R.context, ac, "success", K)
                    }
                    if (Z) {
                        e.event.trigger("ajaxSuccess", [K, R])
                    }
                } else {
                    if (ah) {
                        if (al === undefined) {
                            al = K.statusText
                        }
                        if (R.error) {
                            R.error.call(R.context, K, ah, al)
                        }
                        if (Z) {
                            e.event.trigger("ajaxError", [K, R, al])
                        }
                    }
                }
                if (Z) {
                    e.event.trigger("ajaxComplete", [K, R])
                }
                if (Z && !--e.active) {
                    e.event.trigger("ajaxStop")
                }
                if (R.complete) {
                    R.complete.call(R.context, K, ah)
                }
                H = true;
                if (R.timeout) {
                    clearTimeout(P)
                }
                setTimeout(function() {
                    if (!R.iframeTarget) {
                        I.remove()
                    }
                    K.responseXML = null
                }, 100)
            }
            var S = e.parseXML || function(ae, af) {
                if (window.ActiveXObject) {
                    af = new ActiveXObject("Microsoft.XMLDOM");
                    af.async = "false";
                    af.loadXML(ae)
                } else {
                    af = (new DOMParser()).parseFromString(ae, "text/xml")
                }
                return (af && af.documentElement && af.documentElement.nodeName != "parsererror") ? af : null
            }
            ;
            var q = e.parseJSON || function(ae) {
                return window["eval"]("(" + ae + ")")
            }
            ;
            var k = function(aj, ah, ag) {
                var af = aj.getResponseHeader("content-type") || ""
                  , ae = ah === "xml" || !ah && af.indexOf("xml") >= 0
                  , ai = ae ? aj.responseXML : aj.responseText;
                if (ae && ai.documentElement.nodeName === "parsererror") {
                    if (e.error) {
                        e.error("parsererror")
                    }
                }
                if (ag && ag.dataFilter) {
                    ai = ag.dataFilter(ai, ah)
                }
                if (typeof ai === "string") {
                    if (ah === "json" || !ah && af.indexOf("json") >= 0) {
                        ai = q(ai)
                    } else {
                        if (ah === "script" || !ah && af.indexOf("javascript") >= 0) {
                            e.globalEval(ai)
                        }
                    }
                }
                return ai
            }
        }
    }
    ;
    e.fn.ajaxForm = function(f) {
        f = f || {};
        f.delegation = f.delegation && e.isFunction(e.fn.on);
        if (!f.delegation && this.length === 0) {
            var g = {
                s: this.selector,
                c: this.context
            };
            if (!e.isReady && g.s) {
                d("DOM not ready, queuing ajaxForm");
                e(function() {
                    e(g.s, g.c).ajaxForm(f)
                });
                return this
            }
            d("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)"));
            return this
        }
        if (f.delegation) {
            e(document).off("submit.form-plugin", this.selector, b).off("click.form-plugin", this.selector, a).on("submit.form-plugin", this.selector, f, b).on("click.form-plugin", this.selector, f, a);
            return this
        }
        return this.ajaxFormUnbind().bind("submit.form-plugin", f, b).bind("click.form-plugin", f, a)
    }
    ;
    function b(g) {
        var f = g.data;
        if (!g.isDefaultPrevented()) {
            g.preventDefault();
            e(this).ajaxSubmit(f)
        }
    }
    function a(j) {
        var i = j.target;
        var g = e(i);
        if (!(g.is(":submit,input:image"))) {
            var f = g.closest(":submit");
            if (f.length === 0) {
                return
            }
            i = f[0]
        }
        var h = this;
        h.clk = i;
        if (i.type == "image") {
            if (j.offsetX !== undefined) {
                h.clk_x = j.offsetX;
                h.clk_y = j.offsetY
            } else {
                if (typeof e.fn.offset == "function") {
                    var k = g.offset();
                    h.clk_x = j.pageX - k.left;
                    h.clk_y = j.pageY - k.top
                } else {
                    h.clk_x = j.pageX - i.offsetLeft;
                    h.clk_y = j.pageY - i.offsetTop
                }
            }
        }
        setTimeout(function() {
            h.clk = h.clk_x = h.clk_y = null
        }, 100)
    }
    e.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }
    ;
    e.fn.formToArray = function(w, f) {
        var u = [];
        if (this.length === 0) {
            return u
        }
        var k = this[0];
        var o = w ? k.getElementsByTagName("*") : k.elements;
        if (!o) {
            return u
        }
        var q, p, m, x, l, s, h;
        for (q = 0,
        s = o.length; q < s; q++) {
            l = o[q];
            m = l.name;
            if (!m) {
                continue
            }
            if (w && k.clk && l.type == "image") {
                if (!l.disabled && k.clk == l) {
                    u.push({
                        name: m,
                        value: e(l).val(),
                        type: l.type
                    });
                    u.push({
                        name: m + ".x",
                        value: k.clk_x
                    }, {
                        name: m + ".y",
                        value: k.clk_y
                    })
                }
                continue
            }
            x = e.fieldValue(l, true);
            if (x && x.constructor == Array) {
                if (f) {
                    f.push(l)
                }
                for (p = 0,
                h = x.length; p < h; p++) {
                    u.push({
                        name: m,
                        value: x[p]
                    })
                }
            } else {
                if (c.fileapi && l.type == "file" && !l.disabled) {
                    if (f) {
                        f.push(l)
                    }
                    var g = l.files;
                    if (g.length) {
                        for (p = 0; p < g.length; p++) {
                            u.push({
                                name: m,
                                value: g[p],
                                type: l.type
                            })
                        }
                    } else {
                        u.push({
                            name: m,
                            value: "",
                            type: l.type
                        })
                    }
                } else {
                    if (x !== null && typeof x != "undefined") {
                        if (f) {
                            f.push(l)
                        }
                        u.push({
                            name: m,
                            value: x,
                            type: l.type,
                            required: l.required
                        })
                    }
                }
            }
        }
        if (!w && k.clk) {
            var r = e(k.clk)
              , t = r[0];
            m = t.name;
            if (m && !t.disabled && t.type == "image") {
                u.push({
                    name: m,
                    value: r.val()
                });
                u.push({
                    name: m + ".x",
                    value: k.clk_x
                }, {
                    name: m + ".y",
                    value: k.clk_y
                })
            }
        }
        return u
    }
    ;
    e.fn.formSerialize = function(f) {
        return e.param(this.formToArray(f))
    }
    ;
    e.fn.fieldSerialize = function(g) {
        var f = [];
        this.each(function() {
            var l = this.name;
            if (!l) {
                return
            }
            var j = e.fieldValue(this, g);
            if (j && j.constructor == Array) {
                for (var k = 0, h = j.length; k < h; k++) {
                    f.push({
                        name: l,
                        value: j[k]
                    })
                }
            } else {
                if (j !== null && typeof j != "undefined") {
                    f.push({
                        name: this.name,
                        value: j
                    })
                }
            }
        });
        return e.param(f)
    }
    ;
    e.fn.fieldValue = function(l) {
        for (var k = [], h = 0, f = this.length; h < f; h++) {
            var j = this[h];
            var g = e.fieldValue(j, l);
            if (g === null || typeof g == "undefined" || (g.constructor == Array && !g.length)) {
                continue
            }
            if (g.constructor == Array) {
                e.merge(k, g)
            } else {
                k.push(g)
            }
        }
        return k
    }
    ;
    e.fieldValue = function(f, m) {
        var h = f.name
          , s = f.type
          , u = f.tagName.toLowerCase();
        if (m === undefined) {
            m = true
        }
        if (m && (!h || f.disabled || s == "reset" || s == "button" || (s == "checkbox" || s == "radio") && !f.checked || (s == "submit" || s == "image") && f.form && f.form.clk != f || u == "select" && f.selectedIndex == -1)) {
            return null
        }
        if (u == "select") {
            var o = f.selectedIndex;
            if (o < 0) {
                return null
            }
            var q = []
              , g = f.options;
            var k = (s == "select-one");
            var p = (k ? o + 1 : g.length);
            for (var j = (k ? o : 0); j < p; j++) {
                var l = g[j];
                if (l.selected) {
                    var r = l.value;
                    if (!r) {
                        r = (l.attributes && l.attributes.value && !(l.attributes.value.specified)) ? l.text : l.value
                    }
                    if (k) {
                        return r
                    }
                    q.push(r)
                }
            }
            return q
        }
        return e(f).val()
    }
    ;
    e.fn.clearForm = function(f) {
        return this.each(function() {
            e("input,select,textarea", this).clearFields(f)
        })
    }
    ;
    e.fn.clearFields = e.fn.clearInputs = function(f) {
        var g = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var i = this.type
              , h = this.tagName.toLowerCase();
            if (g.test(i) || h == "textarea") {
                this.value = ""
            } else {
                if (i == "checkbox" || i == "radio") {
                    this.checked = false
                } else {
                    if (h == "select") {
                        this.selectedIndex = -1
                    } else {
                        if (f) {
                            if ((f === true && /hidden/.test(i)) || (typeof f == "string" && e(this).is(f))) {
                                this.value = ""
                            }
                        }
                    }
                }
            }
        })
    }
    ;
    e.fn.resetForm = function() {
        return this.each(function() {
            if (typeof this.reset == "function" || (typeof this.reset == "object" && !this.reset.nodeType)) {
                this.reset()
            }
        })
    }
    ;
    e.fn.enable = function(f) {
        if (f === undefined) {
            f = true
        }
        return this.each(function() {
            this.disabled = !f
        })
    }
    ;
    e.fn.selected = function(f) {
        if (f === undefined) {
            f = true
        }
        return this.each(function() {
            var g = this.type;
            if (g == "checkbox" || g == "radio") {
                this.checked = f
            } else {
                if (this.tagName.toLowerCase() == "option") {
                    var h = e(this).parent("select");
                    if (f && h[0] && h[0].type == "select-one") {
                        h.find("option").selected(false)
                    }
                    this.selected = f
                }
            }
        })
    }
    ;
    e.fn.ajaxSubmit.debug = false;
    function d() {
        if (!e.fn.ajaxSubmit.debug) {
            return
        }
        var f = "[jquery.form] " + Array.prototype.join.call(arguments, "");
        if (window.console && window.console.log) {
            window.console.log(f)
        } else {
            if (window.opera && window.opera.postError) {
                window.opera.postError(f)
            }
        }
    }
}
)(jQuery);
(function(i, f) {
    var t = i.fn.domManip, h = "_tmplitem", u = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /, p = {}, e = {}, y, x = {
        key: 0,
        data: {}
    }, w = 0, q = 0, g = [];
    function k(B, A, D, E) {
        var C = {
            data: E || (A ? A.data : {}),
            _wrap: A ? A._wrap : null,
            tmpl: null,
            parent: A || null,
            nodes: [],
            calls: c,
            nest: b,
            wrap: n,
            html: r,
            update: z
        };
        if (B) {
            i.extend(C, B, {
                nodes: [],
                parent: A
            })
        }
        if (D) {
            C.tmpl = D;
            C._ctnt = C._ctnt || C.tmpl(i, C);
            C.key = ++w;
            (g.length ? e : p)[w] = C
        }
        return C
    }
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(A, B) {
        i.fn[A] = function(C) {
            var F = [], I = i(C), E, G, D, J, H = this.length === 1 && this[0].parentNode;
            y = p || {};
            if (H && H.nodeType === 11 && H.childNodes.length === 1 && I.length === 1) {
                I[B](this[0]);
                F = this
            } else {
                for (G = 0,
                D = I.length; G < D; G++) {
                    q = G;
                    E = (G > 0 ? this.clone(true) : this).get();
                    i.fn[B].apply(i(I[G]), E);
                    F = F.concat(E)
                }
                q = 0;
                F = this.pushStack(F, A, I.selector)
            }
            J = y;
            y = null;
            i.tmpl.complete(J);
            return F
        }
    });
    i.fn.extend({
        tmpl: function(C, B, A) {
            return i.tmpl(this[0], C, B, A)
        },
        tmplItem: function() {
            return i.tmplItem(this[0])
        },
        template: function(A) {
            return i.template(A, this[0])
        },
        domManip: function(C, G, H, B) {
            if (C[0] && C[0].nodeType) {
                var F = i.makeArray(arguments), E = C.length, D = 0, A;
                while (D < E && !(A = i.data(C[D++], "tmplItem"))) {}
                if (E > 1) {
                    F[0] = [i.makeArray(C)]
                }
                if (A && q) {
                    F[2] = function(I) {
                        i.tmpl.afterManip(this, I, H)
                    }
                }
                t.apply(this, F)
            } else {
                t.apply(this, arguments)
            }
            q = 0;
            if (!y) {
                i.tmpl.complete(p)
            }
            return this
        }
    });
    i.extend({
        tmpl: function(C, F, E, B) {
            var D, A = !B;
            if (A) {
                B = x;
                C = i.template[C] || i.template(null, C);
                e = {}
            } else {
                if (!C) {
                    C = B.tmpl;
                    p[B.key] = B;
                    B.nodes = [];
                    if (B.wrapped) {
                        s(B, B.wrapped)
                    }
                    return i(m(B, null, B.tmpl(i, B)))
                }
            }
            if (!C) {
                return []
            }
            if (typeof F === "function") {
                F = F.call(B || {})
            }
            if (E && E.wrapped) {
                s(E, E.wrapped)
            }
            D = i.isArray(F) ? i.map(F, function(G) {
                return G ? k(E, B, C, G) : null
            }) : [k(E, B, C, F)];
            return A ? i(m(B, null, D)) : D
        },
        tmplItem: function(B) {
            var A;
            if (B instanceof i) {
                B = B[0]
            }
            while (B && B.nodeType === 1 && !(A = i.data(B, "tmplItem")) && (B = B.parentNode)) {}
            return A || x
        },
        template: function(B, A) {
            if (A) {
                if (typeof A === "string") {
                    A = l(A)
                } else {
                    if (A instanceof i) {
                        A = A[0] || {}
                    }
                }
                if (A.nodeType) {
                    A = i.data(A, "tmpl") || i.data(A, "tmpl", l(A.innerHTML))
                }
                return typeof B === "string" ? (i.template[B] = A) : A
            }
            return B ? (typeof B !== "string" ? i.template(null, B) : (i.template[B] || i.template(null, u.test(B) ? B : i(B)))) : null
        },
        encode: function(A) {
            return ("" + A).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
        }
    });
    i.extend(i.tmpl, {
        tag: {
            tmpl: {
                _default: {
                    $2: "null"
                },
                open: "if($notnull_1){_=_.concat($item.nest($1,$2));}"
            },
            wrap: {
                _default: {
                    $2: "null"
                },
                open: "$item.calls(_,$1,$2);_=[];",
                close: "call=$item.calls();_=call._.concat($item.wrap(call,_));"
            },
            each: {
                _default: {
                    $2: "$index, $value"
                },
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}"
            },
            "if": {
                open: "if(($notnull_1) && $1a){",
                close: "}"
            },
            "else": {
                _default: {
                    $1: "true"
                },
                open: "}else if(($notnull_1) && $1a){"
            },
            html: {
                open: "if($notnull_1){_.push($1a);}"
            },
            "=": {
                _default: {
                    $1: "$data"
                },
                open: "if($notnull_1){_.push($.encode($1a));}"
            },
            "!": {
                open: ""
            }
        },
        complete: function(A) {
            p = {}
        },
        afterManip: function v(C, A, D) {
            var B = A.nodeType === 11 ? i.makeArray(A.childNodes) : A.nodeType === 1 ? [A] : [];
            D.call(C, A);
            o(B);
            q++
        }
    });
    function m(A, E, C) {
        var D, B = C ? i.map(C, function(F) {
            return (typeof F === "string") ? (A.key ? F.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + h + '="' + A.key + '" $2') : F) : m(F, A, F._ctnt)
        }) : A;
        if (E) {
            return B
        }
        B = B.join("");
        B.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function(G, H, F, I) {
            D = i(F).get();
            o(D);
            if (H) {
                D = a(H).concat(D)
            }
            if (I) {
                D = D.concat(a(I))
            }
        });
        return D ? D : a(B)
    }
    function a(B) {
        var A = document.createElement("div");
        A.innerHTML = B;
        return i.makeArray(A.childNodes)
    }
    function l(A) {
        return new Function("jQuery","$item","var $=jQuery,call,_=[],$data=$item.data;with($data){_.push('" + i.trim(A).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function(I, C, G, D, E, J, F) {
            var L = i.tmpl.tag[G], B, H, K;
            if (!L) {
                throw "Template command not found: " + G
            }
            B = L._default || [];
            if (J && !/\w$/.test(E)) {
                E += J;
                J = ""
            }
            if (E) {
                E = j(E);
                F = F ? ("," + j(F) + ")") : (J ? ")" : "");
                H = J ? (E.indexOf(".") > -1 ? E + J : ("(" + E + ").call($item" + F)) : E;
                K = J ? H : "(typeof(" + E + ")==='function'?(" + E + ").call($item):(" + E + "))"
            } else {
                K = H = B.$1 || "null"
            }
            D = j(D);
            return "');" + L[C ? "close" : "open"].split("$notnull_1").join(E ? "typeof(" + E + ")!=='undefined' && (" + E + ")!=null" : "true").split("$1a").join(K).split("$1").join(H).split("$2").join(D ? D.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g, function(N, M, O, P) {
                P = P ? ("," + P + ")") : (O ? ")" : "");
                return P ? ("(" + M + ").call($item" + P) : N
            }) : (B.$2 || "")) + "_.push('"
        }) + "');}return _;")
    }
    function s(B, A) {
        B._wrap = m(B, true, i.isArray(A) ? A : [u.test(A) ? A : i(A).html()]).join("")
    }
    function j(A) {
        return A ? A.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
    }
    function d(A) {
        var B = document.createElement("div");
        B.appendChild(A.cloneNode(true));
        return B.innerHTML
    }
    function o(G) {
        var I = "_" + q, B, A, E = {}, F, D, C;
        for (F = 0,
        D = G.length; F < D; F++) {
            if ((B = G[F]).nodeType !== 1) {
                continue
            }
            A = B.getElementsByTagName("*");
            for (C = A.length - 1; C >= 0; C--) {
                H(A[C])
            }
            H(B)
        }
        function H(O) {
            var L, N = O, M, J, K;
            if ((K = O.getAttribute(h))) {
                while (N.parentNode && (N = N.parentNode).nodeType === 1 && !(L = N.getAttribute(h))) {}
                if (L !== K) {
                    N = N.parentNode ? (N.nodeType === 11 ? 0 : (N.getAttribute(h) || 0)) : 0;
                    if (!(J = p[K])) {
                        J = e[K];
                        J = k(J, p[N] || e[N], null, true);
                        J.key = ++w;
                        p[w] = J
                    }
                    if (q) {
                        P(K)
                    }
                }
                O.removeAttribute(h)
            } else {
                if (q && (J = i.data(O, "tmplItem"))) {
                    P(J.key);
                    p[J.key] = J;
                    N = i.data(O.parentNode, "tmplItem");
                    N = N ? N.key : 0
                }
            }
            if (J) {
                M = J;
                while (M && M.key != N) {
                    M.nodes.push(O);
                    M = M.parent
                }
                delete J._ctnt;
                delete J._wrap;
                i.data(O, "tmplItem", J)
            }
            function P(Q) {
                Q = Q + I;
                J = E[Q] = (E[Q] || k(J, p[J.parent.key + I] || J.parent, null, true))
            }
        }
    }
    function c(C, A, D, B) {
        if (!C) {
            return g.pop()
        }
        g.push({
            _: C,
            tmpl: A,
            item: this,
            data: D,
            options: B
        })
    }
    function b(A, C, B) {
        return i.tmpl(i.template(A), C, B, this)
    }
    function n(C, A) {
        var B = C.options || {};
        B.wrapped = A;
        return i.tmpl(i.template(C.tmpl), C.data, B, C.item)
    }
    function r(B, C) {
        var A = this._wrap;
        return i.map(i(i.isArray(A) ? A.join("") : A).filter(B || "*"), function(D) {
            return C ? D.innerText || D.textContent : D.outerHTML || d(D)
        })
    }
    function z() {
        var A = this.nodes;
        i.tmpl(null, null, null, this).insertBefore(A[0]);
        i(A).remove()
    }
}
)(jQuery);
(function(b) {
    b.fn.jcarousel = function(d) {
        return this.each(function() {
            new a(this,d)
        })
    }
    ;
    var c = {
        vertical: false,
        start: 1,
        offset: 1,
        size: null,
        scroll: 3,
        visible: null,
        animation: "normal",
        easing: "swing",
        auto: 0,
        wrap: null,
        initCallback: null,
        reloadCallback: null,
        itemLoadCallback: null,
        itemFirstInCallback: null,
        itemFirstOutCallback: null,
        itemLastInCallback: null,
        itemLastOutCallback: null,
        itemVisibleInCallback: null,
        itemVisibleOutCallback: null,
        buttonNextHTML: "<div></div>",
        buttonPrevHTML: "<div></div>",
        buttonNextEvent: "click",
        buttonPrevEvent: "click",
        buttonNextCallback: null,
        buttonPrevCallback: null
    };
    b.jcarousel = function(h, f) {
        this.options = b.extend({}, c, f || {});
        this.locked = false;
        this.container = null;
        this.clip = null;
        this.list = null;
        this.buttonNext = null;
        this.buttonPrev = null;
        this.wh = !this.options.vertical ? "width" : "height";
        this.lt = !this.options.vertical ? "left" : "top";
        var m = ""
          , k = h.className.split(" ");
        for (var g = 0; g < k.length; g++) {
            if (k[g].indexOf("jcarousel-skin") != -1) {
                b(h).removeClass(k[g]);
                var m = k[g];
                break
            }
        }
        if (h.nodeName == "UL" || h.nodeName == "OL") {
            this.list = b(h);
            this.container = this.list.parent();
            if (this.container.hasClass("jcarousel-clip")) {
                if (!this.container.parent().hasClass("jcarousel-container")) {
                    this.container = this.container.wrap("<div></div>")
                }
                this.container = this.container.parent()
            } else {
                if (!this.container.hasClass("jcarousel-container")) {
                    this.container = this.list.wrap("<div></div>").parent()
                }
            }
        } else {
            this.container = b(h);
            this.list = b(h).find(">ul,>ol,div>ul,div>ol")
        }
        if (m != "" && this.container.parent()[0].className.indexOf("jcarousel-skin") == -1) {
            this.container.wrap('<div class=" ' + m + '"></div>')
        }
        this.clip = this.list.parent();
        if (!this.clip.length || !this.clip.hasClass("jcarousel-clip")) {
            this.clip = this.list.wrap("<div></div>").parent()
        }
        this.buttonPrev = b(".jcarousel-prev", this.container);
        if (this.buttonPrev.size() == 0 && this.options.buttonPrevHTML != null) {
            this.buttonPrev = this.clip.before(this.options.buttonPrevHTML).prev()
        }
        this.buttonPrev.addClass(this.className("jcarousel-prev"));
        this.buttonNext = b(".jcarousel-next", this.container);
        if (this.buttonNext.size() == 0 && this.options.buttonNextHTML != null) {
            this.buttonNext = this.clip.before(this.options.buttonNextHTML).prev()
        }
        this.buttonNext.addClass(this.className("jcarousel-next"));
        this.clip.addClass(this.className("jcarousel-clip"));
        this.list.addClass(this.className("jcarousel-list"));
        this.container.addClass(this.className("jcarousel-container"));
        var j = this.options.visible != null ? Math.ceil(this.clipping() / this.options.visible) : null;
        var l = this.list.children("li");
        var n = this;
        if (l.size() > 0) {
            var d = 0
              , g = this.options.offset;
            l.each(function() {
                n.format(this, g++);
                d += n.dimension(this, j)
            });
            this.list.css(this.wh, d + "px");
            if (!f || f.size === undefined) {
                this.options.size = l.size()
            }
        }
        this.container.css("display", "block");
        this.buttonNext.css("display", "block");
        this.buttonPrev.css("display", "block");
        this.funcNext = function() {
            n.next()
        }
        ;
        this.funcPrev = function() {
            n.prev()
        }
        ;
        this.funcResize = function() {
            n.reload()
        }
        ;
        if (this.options.initCallback != null) {
            this.options.initCallback(this, "init")
        }
        if (b.browser.safari) {
            this.buttons(false, false);
            b(window).bind("load", function() {
                n.setup()
            })
        } else {
            this.setup()
        }
    }
    ;
    var a = b.jcarousel;
    a.fn = a.prototype = {
        jcarousel: "0.2.3"
    };
    a.fn.extend = a.extend = b.extend;
    a.fn.extend({
        setup: function() {
            this.first = null;
            this.last = null;
            this.prevFirst = null;
            this.prevLast = null;
            this.animating = false;
            this.timer = null;
            this.tail = null;
            this.inTail = false;
            if (this.locked) {
                return
            }
            this.list.css(this.lt, this.pos(this.options.offset) + "px");
            var d = this.pos(this.options.start);
            this.prevFirst = this.prevLast = null;
            this.animate(d, false);
            b(window).unbind("resize", this.funcResize).bind("resize", this.funcResize)
        },
        reset: function() {
            this.list.empty();
            this.list.css(this.lt, "0px");
            this.list.css(this.wh, "10px");
            if (this.options.initCallback != null) {
                this.options.initCallback(this, "reset")
            }
            this.setup()
        },
        reload: function() {
            if (this.tail != null && this.inTail) {
                this.list.css(this.lt, a.intval(this.list.css(this.lt)) + this.tail)
            }
            this.tail = null;
            this.inTail = false;
            if (this.options.reloadCallback != null) {
                this.options.reloadCallback(this)
            }
            if (this.options.visible != null) {
                var f = this;
                var g = Math.ceil(this.clipping() / this.options.visible)
                  , e = 0
                  , d = 0;
                b("li", this.list).each(function(h) {
                    e += f.dimension(this, g);
                    if (h + 1 < f.first) {
                        d = e
                    }
                });
                this.list.css(this.wh, e + "px");
                this.list.css(this.lt, -d + "px")
            }
            this.scroll(this.first, false)
        },
        lock: function() {
            this.locked = true;
            this.buttons()
        },
        unlock: function() {
            this.locked = false;
            this.buttons()
        },
        size: function(d) {
            if (d != undefined) {
                this.options.size = d;
                if (!this.locked) {
                    this.buttons()
                }
            }
            return this.options.size
        },
        has: function(f, g) {
            if (g == undefined || !g) {
                g = f
            }
            if (this.options.size !== null && g > this.options.size) {
                g = this.options.size
            }
            for (var d = f; d <= g; d++) {
                var h = this.get(d);
                if (!h.length || h.hasClass("jcarousel-item-placeholder")) {
                    return false
                }
            }
            return true
        },
        get: function(d) {
            return b(".jcarousel-item-" + d, this.list)
        },
        add: function(h, o) {
            var k = this.get(h)
              , f = 0
              , n = 0;
            if (k.length == 0) {
                var m, k = this.create(h), g = a.intval(h);
                while (m = this.get(--g)) {
                    if (g <= 0 || m.length) {
                        g <= 0 ? this.list.prepend(k) : m.after(k);
                        break
                    }
                }
            } else {
                f = this.dimension(k)
            }
            k.removeClass(this.className("jcarousel-item-placeholder"));
            typeof o == "string" ? k.html(o) : k.empty().append(o);
            var l = this.options.visible != null ? Math.ceil(this.clipping() / this.options.visible) : null;
            var d = this.dimension(k, l) - f;
            if (h > 0 && h < this.first) {
                this.list.css(this.lt, a.intval(this.list.css(this.lt)) - d + "px")
            }
            this.list.css(this.wh, a.intval(this.list.css(this.wh)) + d + "px");
            return k
        },
        remove: function(f) {
            var g = this.get(f);
            if (!g.length || (f >= this.first && f <= this.last)) {
                return
            }
            var h = this.dimension(g);
            if (f < this.first) {
                this.list.css(this.lt, a.intval(this.list.css(this.lt)) + h + "px")
            }
            g.remove();
            this.list.css(this.wh, a.intval(this.list.css(this.wh)) - h + "px")
        },
        next: function() {
            this.stopAuto();
            if (this.tail != null && !this.inTail) {
                this.scrollTail(false)
            } else {
                this.scroll(((this.options.wrap == "both" || this.options.wrap == "last") && this.options.size != null && this.last == this.options.size) ? 1 : this.first + this.options.scroll)
            }
        },
        prev: function() {
            this.stopAuto();
            if (this.tail != null && this.inTail) {
                this.scrollTail(true)
            } else {
                this.scroll(((this.options.wrap == "both" || this.options.wrap == "first") && this.options.size != null && this.first == 1) ? this.options.size : this.first - this.options.scroll)
            }
        },
        scrollTail: function(d) {
            if (this.locked || this.animating || !this.tail) {
                return
            }
            var e = a.intval(this.list.css(this.lt));
            !d ? e -= this.tail : e += this.tail;
            this.inTail = !d;
            this.prevFirst = this.first;
            this.prevLast = this.last;
            this.animate(e)
        },
        scroll: function(e, d) {
            if (this.locked || this.animating) {
                return
            }
            this.animate(this.pos(e), d)
        },
        pos: function(A) {
            if (this.locked || this.animating) {
                return
            }
            A = a.intval(A);
            if (this.options.wrap != "circular") {
                A = A < 1 ? 1 : (this.options.size && A > this.options.size ? this.options.size : A)
            }
            var w = this.first > A;
            var h = a.intval(this.list.css(this.lt));
            var B = this.options.wrap != "circular" && this.first <= 1 ? 1 : this.first;
            var E = w ? this.get(B) : this.get(this.last);
            var z = w ? B : B - 1;
            var C = null
              , y = 0
              , t = false
              , D = 0;
            while (w ? --z >= A : ++z < A) {
                C = this.get(z);
                t = !C.length;
                if (C.length == 0) {
                    C = this.create(z).addClass(this.className("jcarousel-item-placeholder"));
                    E[w ? "before" : "after"](C)
                }
                E = C;
                D = this.dimension(C);
                if (t) {
                    y += D
                }
                if (this.first != null && (this.options.wrap == "circular" || (z >= 1 && (this.options.size == null || z <= this.options.size)))) {
                    h = w ? h + D : h - D
                }
            }
            var q = this.clipping();
            var s = [];
            var g = 0
              , z = A
              , r = 0;
            var E = this.get(A - 1);
            while (++g) {
                C = this.get(z);
                t = !C.length;
                if (C.length == 0) {
                    C = this.create(z).addClass(this.className("jcarousel-item-placeholder"));
                    E.length == 0 ? this.list.prepend(C) : E[w ? "before" : "after"](C)
                }
                E = C;
                var D = this.dimension(C);
                if (D == 0) {
                    return 0
                }
                if (this.options.wrap != "circular" && this.options.size !== null && z > this.options.size) {
                    s.push(C)
                } else {
                    if (t) {
                        y += D
                    }
                }
                r += D;
                if (r >= q) {
                    break
                }
                z++
            }
            for (var o = 0; o < s.length; o++) {
                s[o].remove()
            }
            if (y > 0) {
                this.list.css(this.wh, this.dimension(this.list) + y + "px");
                if (w) {
                    h -= y;
                    this.list.css(this.lt, a.intval(this.list.css(this.lt)) - y + "px")
                }
            }
            var n = A + g - 1;
            if (this.options.wrap != "circular" && this.options.size && n > this.options.size) {
                n = this.options.size
            }
            if (z > n) {
                g = 0,
                z = n,
                r = 0;
                while (++g) {
                    var C = this.get(z--);
                    if (!C.length) {
                        break
                    }
                    r += this.dimension(C);
                    if (r >= q) {
                        break
                    }
                }
            }
            var k = n - g + 1;
            if (this.options.wrap != "circular" && k < 1) {
                k = 1
            }
            if (this.inTail && w) {
                h += this.tail;
                this.inTail = false
            }
            this.tail = null;
            if (this.options.wrap != "circular" && n == this.options.size && (n - g + 1) >= 1) {
                var u = a.margin(this.get(n), !this.options.vertical ? "marginRight" : "marginBottom");
                if ((r - u) > q) {
                    this.tail = r - q - u
                }
            }
            while (A-- > k) {
                h += this.dimension(this.get(A))
            }
            this.prevFirst = this.first;
            this.prevLast = this.last;
            this.first = k;
            this.last = n;
            return h
        },
        animate: function(g, d) {
            if (this.locked || this.animating) {
                return
            }
            this.animating = true;
            var e = this;
            var f = function() {
                e.animating = false;
                if (g == 0) {
                    e.list.css(e.lt, 0)
                }
                if (e.options.wrap == "both" || e.options.wrap == "last" || e.options.size == null || e.last < e.options.size) {
                    e.startAuto()
                }
                e.buttons();
                e.notify("onAfterAnimation")
            };
            this.notify("onBeforeAnimation");
            if (!this.options.animation || d == false) {
                this.list.css(this.lt, g + "px");
                f()
            } else {
                var h = !this.options.vertical ? {
                    left: g
                } : {
                    top: g
                };
                this.list.animate(h, this.options.animation, this.options.easing, f)
            }
        },
        startAuto: function(e) {
            if (e != undefined) {
                this.options.auto = e
            }
            if (this.options.auto == 0) {
                return this.stopAuto()
            }
            if (this.timer != null) {
                return
            }
            var d = this;
            this.timer = setTimeout(function() {
                d.next()
            }, this.options.auto * 1000)
        },
        stopAuto: function() {
            if (this.timer == null) {
                return
            }
            clearTimeout(this.timer);
            this.timer = null
        },
        buttons: function(f, e) {
            if (f == undefined || f == null) {
                var f = !this.locked && this.options.size !== 0 && ((this.options.wrap && this.options.wrap != "first") || this.options.size == null || this.last < this.options.size);
                if (!this.locked && (!this.options.wrap || this.options.wrap == "first") && this.options.size != null && this.last >= this.options.size) {
                    f = this.tail != null && !this.inTail
                }
            }
            if (e == undefined || e == null) {
                var e = !this.locked && this.options.size !== 0 && ((this.options.wrap && this.options.wrap != "last") || this.first > 1);
                if (!this.locked && (!this.options.wrap || this.options.wrap == "last") && this.options.size != null && this.first == 1) {
                    e = this.tail != null && this.inTail
                }
            }
            var d = this;
            this.buttonNext[f ? "bind" : "unbind"](this.options.buttonNextEvent, this.funcNext)[f ? "removeClass" : "addClass"](this.className("jcarousel-next-disabled")).attr("disabled", f ? false : true);
            this.buttonPrev[e ? "bind" : "unbind"](this.options.buttonPrevEvent, this.funcPrev)[e ? "removeClass" : "addClass"](this.className("jcarousel-prev-disabled")).attr("disabled", e ? false : true);
            if (this.buttonNext.length > 0 && (this.buttonNext[0].jcarouselstate == undefined || this.buttonNext[0].jcarouselstate != f) && this.options.buttonNextCallback != null) {
                this.buttonNext.each(function() {
                    d.options.buttonNextCallback(d, this, f)
                });
                this.buttonNext[0].jcarouselstate = f
            }
            if (this.buttonPrev.length > 0 && (this.buttonPrev[0].jcarouselstate == undefined || this.buttonPrev[0].jcarouselstate != e) && this.options.buttonPrevCallback != null) {
                this.buttonPrev.each(function() {
                    d.options.buttonPrevCallback(d, this, e)
                });
                this.buttonPrev[0].jcarouselstate = e
            }
        },
        notify: function(d) {
            var e = this.prevFirst == null ? "init" : (this.prevFirst < this.first ? "next" : "prev");
            this.callback("itemLoadCallback", d, e);
            if (this.prevFirst !== this.first) {
                this.callback("itemFirstInCallback", d, e, this.first);
                this.callback("itemFirstOutCallback", d, e, this.prevFirst)
            }
            if (this.prevLast !== this.last) {
                this.callback("itemLastInCallback", d, e, this.last);
                this.callback("itemLastOutCallback", d, e, this.prevLast)
            }
            this.callback("itemVisibleInCallback", d, e, this.first, this.last, this.prevFirst, this.prevLast);
            this.callback("itemVisibleOutCallback", d, e, this.prevFirst, this.prevLast, this.first, this.last)
        },
        callback: function(h, l, d, j, g, f, e) {
            if (this.options[h] == undefined || (typeof this.options[h] != "object" && l != "onAfterAnimation")) {
                return
            }
            var m = typeof this.options[h] == "object" ? this.options[h][l] : this.options[h];
            if (!b.isFunction(m)) {
                return
            }
            var n = this;
            if (j === undefined) {
                m(n, d, l)
            } else {
                if (g === undefined) {
                    this.get(j).each(function() {
                        m(n, this, j, d, l)
                    })
                } else {
                    for (var k = j; k <= g; k++) {
                        if (k !== null && !(k >= f && k <= e)) {
                            this.get(k).each(function() {
                                m(n, this, k, d, l)
                            })
                        }
                    }
                }
            }
        },
        create: function(d) {
            return this.format("<li></li>", d)
        },
        format: function(g, f) {
            var d = b(g).addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-" + f));
            d.attr("jcarouselindex", f);
            return d
        },
        className: function(d) {
            return d + " " + d + (!this.options.vertical ? "-horizontal" : "-vertical")
        },
        dimension: function(i, j) {
            var h = i.jquery != undefined ? i[0] : i;
            var g = !this.options.vertical ? h.offsetWidth + a.margin(h, "marginLeft") + a.margin(h, "marginRight") : h.offsetHeight + a.margin(h, "marginTop") + a.margin(h, "marginBottom");
            if (j == undefined || g == j) {
                return g
            }
            var f = !this.options.vertical ? j - a.margin(h, "marginLeft") - a.margin(h, "marginRight") : j - a.margin(h, "marginTop") - a.margin(h, "marginBottom");
            b(h).css(this.wh, f + "px");
            return this.dimension(h)
        },
        clipping: function() {
            return !this.options.vertical ? this.clip[0].offsetWidth - a.intval(this.clip.css("borderLeftWidth")) - a.intval(this.clip.css("borderRightWidth")) : this.clip[0].offsetHeight - a.intval(this.clip.css("borderTopWidth")) - a.intval(this.clip.css("borderBottomWidth"))
        },
        index: function(d, e) {
            if (e == undefined) {
                e = this.options.size
            }
            return Math.round((((d - 1) / e) - Math.floor((d - 1) / e)) * e) + 1
        }
    });
    a.extend({
        defaults: function(e) {
            return b.extend(c, e || {})
        },
        margin: function(i, h) {
            if (!i) {
                return 0
            }
            var g = i.jquery != undefined ? i[0] : i;
            if (h == "marginRight" && b.browser.safari) {
                var f = {
                    display: "block",
                    "float": "none",
                    width: "auto"
                }, d, j;
                b.swap(g, f, function() {
                    d = g.offsetWidth
                });
                f.marginRight = 0;
                b.swap(g, f, function() {
                    j = g.offsetWidth
                });
                return j - d
            }
            return a.intval(b.css(g, h))
        },
        intval: function(d) {
            d = parseInt(d);
            return isNaN(d) ? 0 : d
        }
    })
}
)(jQuery);
