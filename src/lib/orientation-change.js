module.exports = {
	init({ callback }) {
		this.cb = callback || this.on;
		if (this.get() === 'desktop') return;

		if (window.DeviceOrientationEvent) {
			this.f = this.call.bind(this);
			this.f();
			window.addEventListener('orientationchange', this.f);
		} else this.error();
	},
	call(e) {
		let angle;
		if (window.orientation != undefined) angle = window.orientation;
		else angle = screen.orientation.angle;
		this.cb(angle);
	},
	error() {
		console.log('orientationchnage not support!');
	},
	on(ang) {
		console.log(ang);
	},
	destory() {
		window.removeEventListener('orientationchange', this.f);
	},
	get() {
		let MobileDetect = require('mobile-detect'),
			m = new MobileDetect(window.navigator.userAgent);
		if (m.tablet()) return 'mobile';
		else if (m.mobile()) return 'mobile';
		else return 'desktop';
	},
};
