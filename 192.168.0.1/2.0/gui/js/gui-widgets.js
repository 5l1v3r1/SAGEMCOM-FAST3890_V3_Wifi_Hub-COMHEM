(function(b, a) {
    b.widget("xmo.objset", {
        options: {
            itemClass: "gui-objset",
            client: a.defaultClient,
            xpath: "",
            items: b([])
        },
        _create: function() {
            var c = this.options;
            this.element.addClass(c.itemClass);
            this._resetRequest = null;
            c.client.addPage(this)
        },
        destroy: function() {
            var c = this.options;
            c.client.removePage(this);
            this.reset();
            b.Widget.prototype.destroy.call(this)
        },
        add: function(c) {
            var d = this.options;
            d.items = b(d.items.add(c))
        },
        remove: function(d) {
            var c = this
              , e = this.options;
            if (e.client.isConnected()) {
                if (this._resetRequest === null) {
                    this._resetRequest = this._newRequest()
                }
                b(d).item("getResetActions", c._resetRequest)
            }
            e.items = b(e.items.not(d))
        },
        reset: function() {
            var c = this.options;
            c.items.item("option", "objset", null);
            this.remove(c.items);
            this.resetNotifications()
        },
        _newRequest: function(c) {
            var d = this.options;
            return d.client.newRequest(c)
        },
        load: function(c, f, e) {
            if ((c !== undefined) && !b.isFunction(c)) {
                e = c;
                c = undefined
            } else {
                if ((f !== undefined) && !b.isFunction(f)) {
                    e = f;
                    f = undefined
                }
            }
            var i = this.options
              , d = this
              , h = this._newRequest(e)
              , g = b.extend({}, e);
            i.items.item("getLoadActions", h, e);
            if (h.actions.length) {
                h.send(function() {
                    d._trigger("load", null, null);
                    if (c) {
                        c.apply(this, arguments)
                    }
                }, f)
            }
        },
        reload: function() {
            var d = this.options
              , c = this;
            d.items.item("option", {
                loaded: false,
                subscribed: false
            });
            c.load()
        },
        submit: function(c, e, d) {
            if (!this.isValid()) {
                return
            }
            if ((c !== undefined) && !b.isFunction(c)) {
                d = c;
                c = undefined
            } else {
                if ((e !== undefined) && !b.isFunction(e)) {
                    d = e;
                    e = undefined
                }
            }
            var g = this.options
              , f = this._newRequest(d);
            g.items.item("getPostActions", f);
            f.send(c, e)
        },
        resetValues: function() {
            var c = this.options;
            c.items.item("reset");
            this.element.change()
        },
        subscribeForNotification: function(c) {
            var e = this.options
              , d = this._newRequest(c);
            e.items.item("getNotifyActions", d);
            if (d.actions.length) {
                d.send()
            }
        },
        resetNotifications: function(d, c) {
            var f = this.options;
            if (!b.isFunction(d)) {
                c = d;
                d = undefined
            }
            if (f.client.isConnected()) {
                var e = this._resetRequest;
                if ((e !== null) && e.actions.length) {
                    e.send()
                }
            }
            this._resetRequest = null
        },
        modified: function() {
            var d = this.options
              , c = [];
            d.items.each(function(e) {
                var f = b(this).item("modified");
                if (f) {
                    c.push(this)
                }
            });
            return (c.length > 0)
        },
        isValid: function() {
            var d = this.options
              , c = true;
            d.items.each(function(e) {
                if (!b(this).item("isValid")) {
                    c = false
                }
            });
            return c
        }
    });
    b.widget("xmo.dataobjset", b.xmo.objset, {
        options: {
            client: null,
            data: {}
        },
        _create: function() {
            this._super()
        },
        destroy: function() {
            this._super()
        },
        _newRequest: function(c) {
            return new a.api.DataRequest(this.options.data,c)
        }
    })
}(jQuery, jQuery.gui));
(function(b, a) {
    b.widget("xmo.item", {
        options: {
            xmoRole: "item",
            connected: true,
            sessionOption: null,
            readOnly: false,
            writeOnly: false,
            notify: false,
            notifTimer: 0,
            autoSubscribe: false,
            objset: null,
            xpath: "",
            capability: null,
            itemClass: "xmo-item",
            parentItem: "",
            defValue: "",
            modified: null,
            disabled: false,
            checked: false,
            confirmFirst: null,
            html: null,
            customHtml: null,
            htmlReplace: false,
            text: null,
            help: "",
            values: [],
            description: false,
            loading: false,
            loaded: false,
            subscribing: false,
            subscribed: false,
            rpc: false
        },
        _create: function() {
            var f = this.options
              , d = this
              , e = this.element
              , c = b.xmo.item.prototype.widgetFullName;
            this._super();
            if (!e.data(c)) {
                e.data(b.xmo.status.prototype.widgetName, this);
                e.data(c, this)
            }
            this._current = null;
            this._events = [];
            if ((f.capability !== null) && (f.capability.constructor !== a.api.Capability)) {
                f.capability = new a.api.Capability(f.capability)
            }
            if (f.connected && !f.xpath) {
                f.connected = false
            }
            this._initHtml();
            this.element.addClass(f.itemClass);
            if (f.help.length) {
                this.element.attr("title", f.help)
            }
            if ((f.objset === null) && f.connected) {
                f.objset = this.element.parents(".gui-objset").eq(0)
            } else {
                f.objset = b(f.objset)
            }
            if (f.objset.length) {
                f.objset.objset("add", this.element)
            } else {
                f.objset = null;
                if (f.connected) {
                    f.connected = false
                }
            }
            f.parentItem = b((f.parentItem !== "") ? f.parentItem : []);
            if (f.customHtml) {
                this.element.append(f.customHtml)
            }
        },
        _getCreateOptions: function() {
            var d = this.element
              , c = {};
            b.each(this.options, function(e) {
                var f = d.jqmData(e.replace(/[A-Z]/g, function(g) {
                    return "-" + g.toLowerCase()
                }));
                if (f !== undefined) {
                    c[e] = f
                }
            });
            return c
        },
        _extendOptions: function() {
            a.extend.call(this.options, this.element)
        },
        _registerClasses: function(d) {
            var c = this;
            b.each(this._uiClasses, d ? function(e, f) {
                c.element.data(f, c)
            }
            : function(e, f) {
                c.element.removeData(f)
            }
            )
        },
        modified: function(c) {
            var f = this.options;
            if (f.writeOnly && this._getValue() === this.options.defValue) {
                return false
            }
            if (c === undefined) {
                if (f.readOnly || !(f.loading || f.loaded || f.writeOnly)) {
                    return false
                } else {
                    if (f.modified !== null) {
                        return f.modified
                    } else {
                        var e = this.value()
                          , d = f.capability ? f.capability.getEnum(this._current) : undefined;
                        return (String(e) !== String(this._current)) && (!d || (e !== d.name))
                    }
                }
            } else {
                f.modified = (c === null) ? c : Boolean(c)
            }
        },
        _setData: function(c, d) {
            var e = this.options;
            b.Widget.prototype._setData.call(this, c, d);
            if (c === "objset") {
                if (d === null) {
                    e.connected = false
                }
            } else {
                if (c === "xpath") {
                    if (!d) {
                        e.connected = false
                    }
                }
            }
        },
        _initHtml: function(c) {
            var d = this.options, e;
            c = (c === undefined) ? d.html : c;
            if ((c !== null) && c.length) {
                e = !a.isString(c);
                if (d.htmlReplace) {
                    if (e) {
                        c = c.clone()
                    }
                    newElement = b(c);
                    this.element.replaceWith(newElement);
                    this._registerClasses(false);
                    this.element = newElement
                } else {
                    if (e) {
                        c = c.children().clone()
                    }
                    this.element.html(c)
                }
            }
        },
        _initRPC: function() {
            var c = this
              , d = this.options;
            if (a.isArray(d.capability.interfaces)) {
                b.each(d.capability.interfaces, function(e) {
                    var f = this;
                    b.each(this.commands, function(h) {
                        var j = this
                          , g = f.name + f["major-version"] + "." + f["minor-version"] + "_" + j.name;
                        c[g] = function(n, i, l, k) {
                            if (a.isFunction(n)) {
                                k = l;
                                l = i;
                                i = n;
                                n = null
                            }
                            var o = b.extend({
                                rpcEventFunc: null
                            }, k);
                            var m = d.objset.objset("newRequest");
                            m.remoteCall(d.xpath, j.name, n, o.rpcEventFunc, i, l);
                            m.send()
                        }
                    })
                })
            }
        },
        xpath: function(d) {
            var e = this.options;
            d = (d !== undefined) ? d : e.xpath;
            if (d && (d.charAt(0) !== "/")) {
                if (e.parentItem.length) {
                    d = e.parentItem.guiItem("xpath") + "/" + d
                } else {
                    if (e.objset !== null) {
                        var c = e.objset.objset("option", "xpath");
                        if (c) {
                            d = c + "/" + d
                        }
                    }
                }
            }
            return d
        },
        _toGuiValue: function(g, e, k) {
            var j = this.options;
            if (j.values) {
                var f, d;
                for (var c = 0; c < j.values.length; c++) {
                    var h = j.values[c];
                    if (!h.guiValue) {
                        h.guiValue = {}
                    }
                    if ((h.value === g) || (k && (h.value === k.name))) {
                        d = h.guiValue
                    }
                    if (h.isDefault) {
                        f = h.guiValue
                    }
                    if (h.guiValue.cssClass) {
                        e.push(h.guiValue.cssClass)
                    }
                }
                if (d) {
                    return d
                }
                return f
            }
        },
        _fromGuiValue: function(d) {
            var e = this.options;
            if (e.values) {
                for (var c = 0; c < e.values.length; c++) {
                    if (e.values[c].guiValue.value === d) {
                        return e.values[c].value
                    }
                }
            }
            return d
        },
        _setValue: function(e, d, c) {
            this._value = e
        },
        _getValue: function() {
            return this._value
        },
        _reset: function() {
            this.value(this._current);
            this.options.modified = null
        },
        _isValid: function(d, c) {
            return true
        },
        _showError: function(c) {
            if (c) {
                a.alert(c.msg)
            }
        },
        destroy: function() {
            if (this.options.objset) {
                this.options.objset.objset("remove", this.element)
            }
            b.Widget.prototype.destroy.call(this)
        },
        value: function(f) {
            var g = this.options;
            if (f === undefined) {
                var e = {
                    value: this._fromGuiValue(this._getValue()),
                    current: this._current,
                    capability: g.capability,
                    xpath: g.xpath
                };
                this._trigger("getvalue", null, e);
                return e.value
            } else {
                if (!g.loaded && Boolean(this.options.writeOnly)) {
                    g.defValue = this._current = f
                }
                var d = {
                    value: f,
                    current: this._current,
                    capability: g.capability,
                    xpath: g.xpath
                };
                d.value_enum = d.capability ? d.capability.getEnum(f) : undefined;
                d.translate = this._toGuiValue(d.value, d.classes, d.value_enum);
                if (this._trigger("beforevalue", null, d)) {
                    var c = d.translate;
                    if (c && c.cssClass) {
                        this.element.removeClass(d.classes.join(" "));
                        this.element.addClass(c.cssClass)
                    }
                    if (c && (c.value !== "") && (c.value !== undefined)) {
                        d.value = c.value
                    } else {
                        if (d.value_enum) {
                            d.value = this.options.description ? d.value_enum.description : d.value_enum.name
                        }
                    }
                    this._setValue(d.value, d.capability, d.xpath);
                    this._trigger("value", null, d)
                }
            }
        },
        current: function(f, d, c) {
            var g = this.options;
            if (f === undefined) {
                return this._current
            } else {
                var e = {
                    value: f,
                    capability: d,
                    xpath: c
                };
                this._trigger("beforecurrent", null, e);
                if (e.capability !== undefined) {
                    g.capability = e.capability;
                    this._initRPC()
                }
                if (e.xpath !== undefined) {
                    g.xpath = e.xpath
                }
                this._current = e.value;
                g.modified = null;
                g.loaded = true;
                if (a.isObject(e.value)) {
                    this.value(b.extend(true, {}, e.value))
                } else {
                    this.value(e.value)
                }
                this._trigger("current", null, e)
            }
        },
        reset: function() {
            var d = this.options;
            if (Boolean(d.connected)) {
                var c = {
                    value: this._current,
                    capability: d.capability,
                    xpath: d.xpath
                };
                if (this._trigger("reset", null, c)) {
                    this._current = c.value;
                    d.capability = c.capability;
                    d.xpath = c.xpath;
                    this._reset()
                }
            }
        },
        isValid: function() {
            var c = new b.Event(this.widgetEventPrefix + "check")
              , d = {
                value: this.value(),
                error: {}
            };
            this._trigger("check", c, d);
            if ((d.error.code !== undefined) || !this._isValid(d.value, d.error)) {
                this.showError(d.error);
                return false
            }
            this.showError();
            return true
        },
        showError: function(c) {
            if (this._trigger("error", null, c)) {
                this._showError(c)
            }
        },
        getLoadActions: function(f, d) {
            var h = b.extend({}, this.options, d);
            if (h.autoSubscribe && h.notify) {
                this.getNotifyActions(f, d)
            } else {
                var e = new b.Event(this.widgetEventPrefix + "beforeload")
                  , g = {
                    request: f,
                    options: h
                };
                this._trigger("beforeload", e, g);
                if (h.connected && !(h.writeOnly || h.loading || h.loaded)) {
                    var c = this;
                    if (h.rpc) {
                        b.extend(true, h, {
                            sessionOptions: {
                                "capability-flags": {
                                    "interface": true
                                }
                            }
                        })
                    }
                    c.options.loading = true;
                    f.getValue(c.xpath(), function(m, j, i) {
                        var k = new b.Event(c.widgetEventPrefix + "beforeloaded")
                          , l = {
                            value: m,
                            capability: j,
                            xpath: i
                        };
                        c._trigger("beforeloaded", k, l);
                        if (!k.isDefaultPrevented()) {
                            c.current(l.value, l.capability, l.xpath);
                            c.options.loading = false;
                            c.options.loaded = true;
                            c._trigger("loaded", null, l)
                        }
                    }, function() {
                        c.options.loading = false
                    }, h)
                }
            }
        },
        getPostActions: function(f, d) {
            var h = b.extend({}, this.options, d);
            var e = new b.Event(this.widgetEventPrefix + "postactions")
              , g = {
                request: f,
                options: h
            };
            this._trigger("postactions", e, g);
            if (this.modified()) {
                var c = this
                  , e = new b.Event(this.widgetEventPrefix + "beforesubmit")
                  , g = {
                    value: this.value(),
                    error: {}
                };
                this._trigger("beforesubmit", e, g);
                if (!e.isDefaultPrevented()) {
                    f.setValue(this.xpath(), g.value, function() {
                        c.current(g.value);
                        if (g.value !== c.value()) {
                            c.value(g.value)
                        }
                        c._trigger("submit", null, g)
                    }, h)
                }
            }
        },
        getNotifyActions: function(e, d) {
            var f = b.extend({}, this.options, d);
            if (f.connected && f.notify && !(f.subscribing || f.subscribed)) {
                var c = this;
                c.options.subscribing = true;
                if (f.notifTimer > 0) {
                    this._events.push(e.onPeriodicValue(this.xpath(), function(i, h, g) {
                        c.current(i, h, g)
                    }, function() {
                        c.options.subscribing = false;
                        c.options.subscribed = true
                    }, {
                        refreshTimer: f.notifTimer,
                        notifyCurrentValue: f.autoSubscribe
                    }))
                } else {
                    this._events.push(e.onValueChange(this.xpath(), function(i, h, g) {
                        c.current(i, h, g)
                    }, function() {
                        c.options.subscribing = false;
                        c.options.subscribed = true
                    }, {
                        notifyCurrentValue: f.autoSubscribe
                    }))
                }
            }
        },
        getResetActions: function(f, d) {
            var g = b.extend({}, this.options, d);
            if (g.subscribed) {
                var c = this
                  , e = this._events.length;
                b.each(this._events, function(h) {
                    f.deleteNotification(this, function() {
                        e -= 1;
                        c.options.subscribed = (e > 0)
                    })
                });
                this._events = []
            }
        }
    })
}(jQuery, jQuery.gui));
(function(b, a) {
    b.widget("xmo.status", b.xmo.item, {
        options: {
            itemClass: "xmo-item xmo-status",
            readOnly: true,
            notify: true,
            defaultValue: "",
            textTarget: ".gui-status-text",
            noText: false,
            select: "select",
            statusClasses: {},
            classTarget: "",
            hasLabel: false,
            label: null
        },
        _create: function() {
            var d = this.options
              , c = this;
            this._super();
            if (d.noText) {
                this.status = this.select = b()
            } else {
                this.status = this.element.find("*").andSelf().filter(d.textTarget);
                if (!this.status.length) {
                    this.status = this.element.siblings().find("*").andSelf().filter(d.textTarget)
                }
                this.select = this.element.find(d.select);
                if (this.select.length) {
                    if (!this.status.length) {
                        this.status = b("<p></p>");
                        this.select.before(this.status)
                    }
                    this.select.hide().change(function() {
                        var e = c.select.children("option:selected");
                        c.status.text(e.text());
                        c._setClass(e.val())
                    })
                }
                if (!this.status.length) {
                    this.status = this.element
                }
            }
            if (d.classTarget.jquery) {
                this.classTarget = d.classTarget
            } else {
                if (d.classTarget) {
                    this.classTarget = this.element.parents().andSelf().filter(d.classTarget);
                    if (!this.classTarget.length) {
                        this.status = this.element.siblings().find("*").andSelf().filter(d.classTarget);
                        if (!this.classTarget.length) {
                            this.classTarget = this.element
                        }
                    }
                } else {
                    this.classTarget = this.element
                }
            }
        },
        _setValue: function(e, d, c) {
            var f = this.options;
            e = "" + e;
            if (f.defaultValue && !e) {
                e = f.defaultValue
            }
            if (this.select.length) {
                this.select.val(e).change()
            } else {
                this.status.text(e);
                this._setClass(e)
            }
        },
        _setClass: function(d) {
            var e = this.options
              , c = e.statusClasses[d];
            d = "" + d;
            if (this._currentClass) {
                this.classTarget.removeClass(this._currentClass);
                this._currentClass = ""
            }
            if (c) {
                this.classTarget.addClass(c);
                this._currentClass = c
            }
        },
        _getValue: function() {
            if (this.select.length) {
                return this.select.val()
            } else {
                return this.status.text()
            }
        },
        destroy: function() {
            this._super()
        }
    });
    b.widget("xmo.statistic", b.xmo.status, {
        options: {
            itemClass: "xmo-item xmo-statistic",
            notifTimer: 5
        },
        _create: function() {
            var d = this.options
              , c = this;
            this._super()
        },
        destroy: function() {
            this._super()
        }
    });
    b.widget("xmo.timestatus", b.xmo.status, {
        options: {
            itemClass: "xmo-item xmo-status xmo-time-status",
            shortFormat: "%H:%M:%S",
            longFormat: "%j day(s) %H:%M:%S"
        },
        _create: function() {
            var d = this.options
              , c = this;
            this._super()
        },
        _setValue: function(e, d, c) {
            var g = this.options, f;
            this._super(a.formatTime(e, g.shortFormat, g.longFormat), d, c)
        },
        destroy: function() {
            this._super()
        }
    })
}(jQuery, jQuery.gui));
(function(b, a) {
    b.widget("xmo.input", b.xmo.item, {
        options: {
            saveToCookie: true,
            getFromCookie: true,
            cookie: {
                expire: 30
            },
            itemClass: "xmo-item xmo-input",
            defValue: "",
            maxLength: 0,
            inputType: "text",
            inputSelector: "input",
            hasLabel: false,
            label: null
        },
        _create: function() {
            var d = this.options
              , c = this;
            this._super();
            var e = this.element.attr("id");
            if (this.element.filter(d.inputSelector).length) {
                this.input = this.element
            } else {
                this.input = this.element.find(d.inputSelector);
                if (b.browser.msie) {
                    this.input.change(function() {
                        c.element.change()
                    })
                }
            }
        },
        _initHtml: function(c) {
            var d = this.options;
            if (d.html) {
                a.guiItem.prototype._initHtml.call(this, b.sprintf(d.html, d.inputType))
            }
        },
        _setValue: function(e, d, c) {
            this.input.val(e)
        },
        _getValue: function() {
            if (this.input) {
                return this.input.val()
            } else {
                return this.element.val()
            }
        },
        destroy: function() {
            this._super()
        },
        select: function(f, d) {
            var e = this.options
              , c = this;
            d = d === undefined ? true : !!d
        }
    })
}(jQuery, jQuery.gui));
(function(b, a) {
    b.widget("xmo.select", b.xmo.input, {
        options: {
            itemClass: "xmo-item xmo-select",
            defValue: "",
            defIndex: 0,
            inputSelector: "select",
            multiple: false,
            listSize: 0,
            optionsXpath: "",
            optionsLoaded: false,
            selectOptions: [],
            valueList: null,
            firstTime: true,
            unique: true
        },
        _create: function() {
            var f = this.options
              , c = this;
            var e = f.connected;
            this._super();
            if (e && f.optionsXpath) {
                f.connected = true
            }
            if (f.multiple) {
                this.input.attr("multiple", "multiple")
            }
            if (f.listSize) {
                this.input.attr("size", f.listSize)
            }
            var d = f.selectOptions.length;
            b.each(f.selectOptions, function(g) {
                c.addOption(this, g)
            });
            this.element.bind("gui_value", function(g, h) {
                h.value_enum = undefined
            })
        },
        addOption: function(g, c) {
            var j = this.options
              , e = new b.Event(this.widgetEventPrefix + "beforeoption");
            this._trigger("beforeoption", e, g);
            if (!e.isDefaultPrevented()) {
                var h = "" + g.text
                  , f = "" + g.value
                  , d = "";
                if (g.selected || (f === j.defValue) || (!f.length && (h === j.defValue)) || (c === j.defIndex)) {
                    d = ' selected="selected"'
                }
                if (f.length) {
                    f = ' value="' + f + '"'
                }
                this.input.append("<option" + f + d + ">" + h + "</option>").change();
                this._trigger("option", null, g)
            }
        },
        getLoadActions: function(e, d) {
            var c = this
              , f = b.extend({}, this.options, d);
            if (!f.optionsLoaded && f.optionsXpath) {
                var c = this;
                e.getValue(f.optionsXpath, function(j, h, g) {
                    var i = {
                        text: j,
                        value: j,
                        capability: h,
                        xpath: g
                    };
                    c.addOption(i);
                    c.options.optionsLoaded = true
                }, f)
            }
            this._superApply(arguments)
        },
        _setValue: function(f, d, c) {
            var h = this.options;
            if ((this.input.children("option").length === 0) && d && (h.optionsXpath === "" && !h.valueList)) {
                var e, g = d.getEnumValues();
                b.each(g, function(j) {
                    var k = {
                        text: h.description ? this.description : this.name,
                        value: this.value,
                        selected: (f === this.value)
                    };
                    self.addOption(k, j)
                })
            }
            if ((h.selectOptions.length === 0) && (h.valueList)) {
                if (h.firstTime) {
                    h.firstTime = false;
                    this.input.children("option").remove()
                }
                if (h.unique) {
                    if (this.input.find("option[value='" + f + "']").length === 0) {
                        this.input.append("<option value='" + f + "'>" + f + "</option>")
                    }
                } else {
                    this.input.append("<option value='" + f + "'>" + f + "</option>")
                }
            } else {
                if (a.isBoolean(f)) {
                    f = f ? "true" : "false"
                }
                this.input.find('option[value="' + f + '"]').prop("selected", true);
                if (this.input.attr("data-role") == "slider") {
                    this.input.slider().slider("refresh")
                } else {
                    this.input.selectmenu().selectmenu("refresh")
                }
            }
        },
        removeGuiValue: function(c) {
            var d = this.options;
            if ((d.selectOptions.length === 0) && (d.valueList)) {
                this.input.find("option[value=" + c + "]").remove()
            }
        },
        _getValue: function() {
            var d = this._super()
              , c = Number(d);
            if (!isNaN(c)) {
                return c
            }
            return d
        },
        destroy: function() {
            this._super()
        }
    })
}(jQuery, jQuery.gui));
(function(b, a) {
    b.widget("xmo.radio", b.xmo.input, {
        options: {
            itemClass: "xmo-item xmo-radio"
        },
        _create: function() {
            var d = this.options
              , c = this;
            this._super()
        },
        _setValue: function(f, e, d) {
            var c = this.input.filter("[value=" + f + "]").prop("checked", true);
            this.input.not(c).prop("checked", false);
            c.change()
        },
        _getValue: function() {
            return this.input.filter(":checked").val()
        },
        destroy: function() {
            this._super()
        }
    })
}(jQuery, jQuery.gui));
(function(b, a) {
    b.widget("xmo.object", b.xmo.item, {
        options: {
            itemClass: "xmo-item xmo-object"
        },
        _create: function() {
            var d = this.options
              , c = this;
            this._super()
        },
        destroy: function() {},
        _setValue: function(e, d, c) {
            this._superApply(arguments);
            this.element.change()
        },
        modified: function(d) {
            if (d === undefined) {
                var c = this
                  , e = this.value()
                  , d = false;
                b.each(this._current, function(f, g) {
                    if (e[f] !== g) {
                        d = true;
                        return false
                    }
                });
                return d
            }
        },
        getPostActions: function(e, l) {
            var d = b.extend({}, this.options, l);
            var c = new b.Event(this.widgetEventPrefix + "postactions")
              , g = {
                request: e,
                options: d
            };
            this._trigger("postactions", c, g);
            if (this.modified()) {
                var k = this
                  , c = new b.Event(this.widgetEventPrefix + "beforesubmit")
                  , g = {
                    value: this.value(),
                    error: {}
                };
                this._trigger("beforesubmit", c, g);
                if (!c.isDefaultPrevented()) {
                    var k = this
                      , j = g.value
                      , h = this._current
                      , f = 0;
                    b.each(h, function(i, m) {
                        if (j[i] !== m) {
                            f++;
                            e.setValue(k.xpath() + "/" + i, j[i], function() {
                                h[i] = j[i];
                                if (--f == 0) {
                                    k._trigger("submit", null, g)
                                }
                            }, d)
                        }
                    })
                }
            }
        }
    })
}(jQuery, jQuery.gui));
(function(b, a) {
    b.widget("xmo.array", b.xmo.item, {
        options: {
            itemClass: "xmo-item xmo-array",
            notify: true,
            elements: "",
            elementOptions: {},
            capability: null
        },
        _create: function() {
            var c = this.options;
            this._super();
            this._containerXPath = c.xpath;
            if (c.elements) {
                c.xpath = c.elements
            } else {
                c.xpath += "/child::node()"
            }
            this._clean();
            this._current = []
        },
        destroy: function() {
            this._clean();
            this._super()
        },
        _clean: function() {
            if (this._items !== undefined) {
                b.each(this._items, function(c, d) {
                    d.element.unbind("remove", d._arrayremove)
                })
            }
            this._items = [];
            this._addedItems = [];
            this._deletedItems = []
        },
        _each: function(c, h, g) {
            var d = this
              , e = [];
            if (c === undefined) {
                c = -1
            }
            if (b.isArray(c)) {
                for (var f = 0; f < c.length; f++) {
                    e = e.concat(d._each(c[f], h))
                }
            } else {
                if (a.isNumber(c)) {
                    if ((c < 0) || (c >= this._items.length)) {
                        if (g) {
                            h.call(this, -1);
                            e.push(-1)
                        } else {
                            b.each(d._items, function(j, k) {
                                h.call(k, j);
                                e.push(j)
                            })
                        }
                    }
                } else {
                    b(c, d.element).each(function() {
                        var i = this;
                        b.each(d._items, function(j, k) {
                            if (k.element.is(i)) {
                                h.call(k, j);
                                e.push(j)
                            }
                        })
                    })
                }
            }
            return e
        },
        modified: function(c) {
            var d = this.options;
            if (c === undefined) {
                if ((!d.connected) || d.readOnly) {
                    return false
                } else {
                    if (d.modified !== null) {
                        return d.modified
                    } else {
                        if ((this._addedItems.length > 0) || (this._deletedItems.length > 0)) {
                            return true
                        }
                        c = false;
                        b.each(this._items, function(e, f) {
                            c = f.modified();
                            if (c) {
                                return false
                            }
                        });
                        return c
                    }
                }
            } else {
                d.modified = (c === null) ? c : Boolean(c)
            }
        },
        _setValue: function(c) {},
        _getValue: function() {
            var c = [];
            b.each(this._items, function(d, e) {
                c.push(e.value())
            });
            return c
        },
        _reset: function() {
            var d = this.options
              , c = this;
            this._clean();
            b.each(this._current, function(e) {
                c._setValue(this)
            })
        },
        _newItem: function(e, h, d, c) {
            var g = b("<div>").item({
                connected: false
            })
              , f = g.data("xmo-item");
            f.current(h, d, c);
            if (this._items[e]) {
                this._items[e].element.before(g)
            } else {
                this.element.append(g)
            }
            return f
        },
        _insertItem: function(j, l, d, k) {
            var n = this
              , e = this.options;
            var c = new b.Event("arraybeforeinsert");
            data = {
                index: j,
                value: l,
                capability: d,
                xpath: k,
                item: null
            };
            n._trigger("beforeinsert", c, data);
            if (!c.isDefaultPrevented()) {
                var f = this._items.length, m;
                if (data.item === null) {
                    data.item = this._newItem(j, l, d, k)
                }
                n._trigger("insert", null, data);
                m = data.item;
                if (m !== null) {
                    if (j === -1) {
                        j = f
                    }
                    this._items.splice(j, 0, m);
                    if (!k) {
                        for (var h = 0, g = this._addedItems.length; h < g; h++) {
                            if (j < b.inArray(this._addedItems[h], this._items)) {
                                this._addedItems.splice(h, 0, m);
                                break
                            }
                        }
                        if (h === g) {
                            this._addedItems.push(m)
                        }
                        n.element.change()
                    } else {
                        this._current.push(m.current())
                    }
                    m._arrayremove = function(o) {
                        var i = b.inArray(m, n._items);
                        if (i >= 0) {
                            n._removeItem(i, true)
                        }
                    }
                    ;
                    m.element.bind("remove", m._arrayremove);
                    return j
                }
            }
            return -1
        },
        _removeItem: function(d, h) {
            var g = this._items[d]
              , c = g.xpath();
            var f = new b.Event("arraybeforeremove");
            data = {
                index: d,
                item: g
            };
            this._trigger("beforeremove", f, data);
            if (!f.isDefaultPrevented()) {
                g.element.unbind("remove", g._arrayremove);
                this._items.splice(d, 1);
                var e = b.inArray(g, this._addedItems);
                if (e >= 0) {
                    this._addedItems.splice(e, 1)
                } else {
                    this._deletedItems.push({
                        value: g.current(),
                        capability: g.options.capability,
                        xpath: g.xpath()
                    })
                }
                if (!h) {
                    g.element.remove()
                }
                this.element.change()
            }
        },
        current: function(g, f, d) {
            var c = this;
            if (g === undefined) {
                return this._current
            } else {
                if (b.isArray(g)) {
                    this._clean();
                    this._current = g;
                    b.each(g, function(j) {
                        var h = c._insertItem(j, g, f, d)
                    })
                } else {
                    this._current.push(g);
                    var e = c._insertItem(-1, g, f, d)
                }
            }
        },
        getPostActions: function(f, d) {
            var h = b.extend({}, this.options, d)
              , e = new b.Event(this.widgetEventPrefix + "postactions")
              , g = {
                request: f,
                options: h
            };
            this._trigger("postactions", e, g);
            if (h.connected && !h.readOnly) {
                var c = this
                  , e = new b.Event(this.widgetEventPrefix + "beforesubmit")
                  , g = {
                    value: this.value(),
                    items: c._items,
                    addedItems: c._addedItems,
                    deletedItems: c._deletedItems,
                    error: {}
                };
                this._trigger("beforesubmit", e, g);
                if (!e.isDefaultPrevented()) {
                    b.each(g.items, function(j, k) {
                        if (b.inArray(k, g.addedItems) === -1) {
                            k.getPostActions(f, d)
                        }
                    });
                    b.each(g.deletedItems, function(k, j) {
                        f.deleteElement(j.xpath, function() {
                            c._deletedItems.splice(b.inArray(j, g._deletedItems), 1);
                            c._current.splice(b.inArray(j.value, c._current), 1)
                        }, d)
                    });
                    if (this._containerXPath) {
                        b.each(g.addedItems, function(k, l) {
                            var j = l.options.capability
                              , m = l.value()
                              , n = {};
                            n[j.getName()] = m;
                            n.index = b.inArray(l, c._items);
                            f.addChild(c.xpath(c._containerXPath), n, function(o, i) {
                                c._addedItems.splice(b.inArray(l, c._addedItems), 1);
                                c._current.splice(b.inArray(l, c._items), 0, m);
                                l.current(m, j, i.xpath)
                            }, d)
                        })
                    }
                }
            }
        },
        getNotifyActions: function(e, d) {
            var f = b.extend({}, this.options, d);
            if (f.connected && f.notify && this._containerXPath && !(f.subscribing || f.subscribed)) {
                var c = this;
                c.options.subscribing = 2;
                this._events.push(e.onAddChild(c.xpath(c._containerXPath), function(j, h, g) {
                    var i = true;
                    b.each(c._current, function(k, l) {
                        if (l.uid === j.uid) {
                            i = false;
                            return false
                        }
                    });
                    if (i) {
                        c._insertItem(-1, j, h, g)
                    }
                }, function() {
                    c.options.subscribing -= 1;
                    c.options.subscribed = true
                }, {
                    notifyCurrentValue: f.autoSubscribe
                }));
                this._events.push(e.onDeleteChild(c.xpath(c._containerXPath), function(h, g) {
                    b.each(c._items, function(j, k) {
                        if (k.options.xpath === g) {
                            c._removeItem(j);
                            return false
                        }
                    })
                }, function() {
                    c.options.subscribing -= 1;
                    c.options.subscribed = true
                }))
            }
        },
        insert: function(c, g, f, e) {
            var d = this
              , h = this.options;
            if (f === undefined) {
                f = h.capability
            }
            this._each(c, function(k) {
                var j = d._insertItem(k, g, f, e)
            }, true)
        },
        add: function(e, d, c) {
            this.insert(-1, e, d, c)
        },
        remove: function(c) {
            var d = this;
            this._each(c, function(e) {
                var f = {
                    index: e,
                    element: this
                };
                if (d._trigger("remove", null, f)) {
                    d._removeItem(e)
                }
            })
        }
    })
}(jQuery, jQuery.gui));
(function(b, a) {
    b.widget("gui.selecthost", {
        options: {
            input: "input",
            hosts: "#ConnectedDevices",
            sorted: false,
            defaultValue: null,
            defaultIndex: -1
        },
        _create: function() {
            var e = this.options, d = this, c;
            this._super();
            this._input = this.element.siblings(e.input);
            if (!this._input.length) {
                this._input = this.element.parents(".ui-page").find(e.input)
            }
            this._hosts = this.element.siblings(e.hosts);
            if (!this._hosts.length) {
                this._hosts = b(e.hosts)
            }
            this.element.add(this._input).addClass("gui-selecthost");
            this.element.selectmenu().change(function(f) {
                d._input.val(d.element.val())
            });
            c = this._hosts.item("value");
            if (b.isArray(c)) {
                b.each(c, function(f, g) {
                    var h = {
                        host: g,
                        value: g.uid,
                        text: g.uid
                    };
                    d._selectOption(h, f)
                })
            }
            this._hosts.bind("arrayinsert", function(g, h) {
                var f = {
                    host: h.value,
                    value: h.value.uid,
                    text: h.value.uid
                };
                d._selectOption(f, h.index)
            })
        },
        _getCreateOptions: function() {
            var d = this.element
              , c = {};
            b.each(this.options, function(e) {
                var f = d.jqmData(e.replace(/[A-Z]/g, function(g) {
                    return "-" + g.toLowerCase()
                }));
                if (f !== undefined) {
                    c[e] = f
                }
            });
            return c
        },
        addSelectOption: function(h, i, f) {
            var c, g, d, e;
            i = "" + i;
            h = "" + h;
            f = f ? " selected" : "";
            if (h.length) {
                h = " value='" + h + "'"
            }
            g = b("<option" + h + f + ">" + i + "</option>");
            if (this.options.sorted) {
                c = this.element.children().not("[data-placeholder=true]");
                c.each(function(j, k) {
                    var l = b(k);
                    if (i < l.text()) {
                        l.before(g);
                        e = true;
                        return false
                    }
                })
            }
            if (!e) {
                this.element.append(g)
            }
            this.element.selectmenu();
            this.element.selectmenu("refresh")
        },
        _selectOption: function(e, c) {
            var f = this.options
              , d = new b.Event(this.widgetEventPrefix + "beforeoption");
            if (e.selected || (e.value === f.defaultValue) || (!e.value.length && (e.text === f.defaultValue)) || (c === f.defaultIndex)) {
                e.selected = true
            }
            this._trigger("beforeoption", d, e);
            if (!d.isDefaultPrevented()) {
                this.addSelectOption(e.value, e.text, e.selected);
                this._trigger("option", null, e)
            }
        },
        destroy: function() {
            this._super()
        }
    })
}(jQuery, jQuery.gui));
