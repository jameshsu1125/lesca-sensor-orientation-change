import MobileDetect from 'mobile-detect';

const defaultCallback = (orientation: string) => console.log(orientation);
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
  let status;
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

const addEventListener = (callback = defaultCallback) => {
  property.callback = callback;

  if (get() === 'desktop') {
    error();
    return;
  }

  window.addEventListener('orientationchange', call);
  call();
};

const destory = () => {
  window.removeEventListener('orientationchange', call);
};

const OrientationChange = { addEventListener, destory };
export default OrientationChange;
