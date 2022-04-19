"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mobileDetect = _interopRequireDefault(require("mobile-detect"));

var defaultCallback = function defaultCallback(e) {
  console.log(e);
};

var property = {
  callback: defaultCallback
};

var get = function get() {
  var m = new _mobileDetect["default"](window.navigator.userAgent);
  if (m.tablet()) return 'mobile';else if (m.mobile()) return 'mobile';else return 'desktop';
};

var error = function error() {
  console.warn('[lesca-sensor-orientation-change]: desktop not support orientation.');
};

var call = function call() {
  var a = 'portrait';
  if (window.innerWidth > window.innerHeight) a = 'landscape';
  property.callback(a);
};

var addListener = function addListener() {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultCallback;
  property.callback = callback;

  if (get() === 'desktop') {
    error();
    return;
  }

  if (window.DeviceOrientationEvent) {
    call();
    window.onresize = call;
  } else error();
};

var destory = function destory() {
  window.removeEventListener('orientationchange', call);
};

var OrientationChange = {
  addListener: addListener,
  destory: destory
};
var _default = OrientationChange;
exports["default"] = _default;