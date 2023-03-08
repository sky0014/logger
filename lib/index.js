"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.makeLogger = exports.createLogger = void 0;
function createLogger() {
    //log开关
    var enable = false;
    var prefix = [];
    function setEnable(value) {
        enable = value;
    }
    function wrap(array) {
        return array.map(function (v) { return "[".concat(v, "]"); });
    }
    function setPrefix(value) {
        if (typeof value === "string") {
            value = [value];
        }
        prefix = wrap(value);
    }
    function initLogger(_a) {
        var _b = _a === void 0 ? {
            enable: false,
            prefix: []
        } : _a, _c = _b.enable, enable = _c === void 0 ? false : _c, _d = _b.prefix, prefix = _d === void 0 ? [] : _d;
        setEnable(enable);
        setPrefix(prefix);
    }
    function customize(logFunc) {
        var tags = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            tags[_i - 1] = arguments[_i];
        }
        tags = wrap(tags);
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (enable) {
                logFunc.call.apply(logFunc, __spreadArray(__spreadArray(__spreadArray([console], prefix, false), tags, false), args, false));
            }
        };
    }
    function makeLogger() {
        var tags = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tags[_i] = arguments[_i];
        }
        return {
            log: customize.apply(void 0, __spreadArray([console.log], tags, false)),
            debug: customize.apply(void 0, __spreadArray([console.debug], tags, false)),
            info: customize.apply(void 0, __spreadArray([console.info], tags, false)),
            warn: customize.apply(void 0, __spreadArray([console.warn], tags, false)),
            error: customize.apply(void 0, __spreadArray([console.error], tags, false)),
            initLogger: initLogger,
            setEnable: setEnable,
            setPrefix: setPrefix,
            makeLogger: makeLogger
        };
    }
    return makeLogger();
}
exports.createLogger = createLogger;
var logger = createLogger();
exports.makeLogger = logger.makeLogger;
exports["default"] = logger;
