[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca-sensor-oc --save
```

# Usage

```javascript
import OC from 'lesca-sensor-oc';

OC.init({
	callback: (e) => {
		console.log(e); // 0, 90, -90
	},
});
```

# Methods

| method           | options  |           description            | default |
| :--------------- | :------: | :------------------------------: | ------: |
| init({callback}) | callback | get angle when orentation change |         |
| destory()        |          |           remove event           |         |
