import { useEffect, useState } from 'react';
import OrientationChange from '../lib';
import { Code } from './components';

const Demo = () => {
	const [message, setMessage] = useState('');

	useEffect(() => {
		OrientationChange.addListener((e) => {
			setMessage(`angle = ${e}, it's ${e === 0 ? 'portrait' : 'landscape'}`);
		});
	}, []);
	return (
		<>
			<Code code={`${message}`} theme='text' />
		</>
	);
};
export default Demo;
