"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_detect_1 = __importDefault(require("mobile-detect"));
var defaultCallback = function (orientation) { return console.log(orientation); };
var property = { callback: defaultCallback };
var get = function () {
    var m = new mobile_detect_1.default(window.navigator.userAgent);
    if (m.tablet())
        return 'mobile';
    else if (m.mobile())
        return 'mobile';
    else
        return 'desktop';
};
var error = function () {
    console.warn('[lesca-sensor-orientation-change]: Desktop does not support orientation.');
};
var call = function () {
    var status;
    switch (window.orientation) {
        case -90:
        case 90:
            status = 'landscape';
            break;
        default:
            status = 'portrait';
    }
    property.callback(status);
};
var addEventListener = function (callback) {
    if (callback === void 0) { callback = defaultCallback; }
    property.callback = callback;
    if (get() === 'desktop') {
        error();
        return;
    }
    window.addEventListener('orientationchange', call);
    call();
};
var destroy = function () {
    window.removeEventListener('orientationchange', call);
};
var OrientationChange = { addEventListener: addEventListener, destroy: destroy };
exports.default = OrientationChange;
