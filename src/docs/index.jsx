import React from 'react';
import { render } from 'react-dom';
import OC from './../lib/index';

import './styles.css';

console.log(OC);
OC.init({
	callback: (e) => {
		console.log(e);
	},
});

function Demo() {
	return <></>;
}

render(<Demo />, document.getElementById('app'));
