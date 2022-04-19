import MobileDetect from 'mobile-detect';

const defaultCallback = (e) => {
  console.log(e);
};

const property = { callback: defaultCallback };

const get = () => {
  const m = new MobileDetect(window.navigator.userAgent);
  if (m.tablet()) return 'mobile';
  else if (m.mobile()) return 'mobile';
  else return 'desktop';
};

const error = () => {
  console.warn('[lesca-sensor-orientation-change]: desktop not support orientation.');
};

const call = () => {
  let a = 'portrait';
  if (window.innerWidth > window.innerHeight) a = 'landscape';
  property.callback(a);
};

const addListener = (callback = defaultCallback) => {
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

const destory = () => {
  window.removeEventListener('orientationchange', call);
};

const OrientationChange = { addListener, destory };
export default OrientationChange;
