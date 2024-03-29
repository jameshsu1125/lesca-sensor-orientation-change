import MobileDetect from 'mobile-detect';

const defaultCallback = (orientation: 'landscape' | 'portrait') => console.log(orientation);
const property = { callback: defaultCallback };

const get = () => {
  const m = new MobileDetect(window.navigator.userAgent);
  if (m.tablet()) return 'mobile';
  else if (m.mobile()) return 'mobile';
  else return 'desktop';
};

const error = () => {
  console.warn('[lesca-sensor-orientation-change]: Desktop does not support orientation.');
};

const call = () => {
  let status: 'landscape' | 'portrait' = 'landscape';
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

const destroy = () => {
  window.removeEventListener('orientationchange', call);
};

const OrientationChange = { addEventListener, destroy };
export default OrientationChange;
