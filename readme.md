[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/) [![npm](https://img.shields.io/badge/npm-Jameshsu1125-red)](https://www.npmjs.com/~jameshsu1125)

# Installation

```sh
$ npm install lesca-sensor-orientation-change --save
```

# Usage

```javascript
import OrientationChange from 'lesca-sensor-orientation-change';

OrientationChange.addListener((e) => {
	console.log(e); // get angle 0, 90, -90
});
```

# Methods

| method                    |   options    |           description            | default |
| :------------------------ | :----------: | :------------------------------: | ------: |
| addListener(eventHandler) | eventHandler | get angle when orentation change |         |
| destory()                 |              |           remove event           |         |
