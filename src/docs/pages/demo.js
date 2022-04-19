import Qrocde from 'lesca-react-qrcode';
import { useEffect, useState } from 'react';
import OrientationChange from '../../lib';

const Demo = () => {
  const [state, setState] = useState('');

  useEffect(() => {
    OrientationChange.addListener((e) => {
      setState(e);
    });
  }, []);

  return (
    <div className='Demo'>
      <h2>Demo</h2>
      <pre>
        <code>{JSON.stringify(state)}</code>
      </pre>
      <h4>test on mobile</h4>
      <Qrocde content={window.location.href} size='320' />
    </div>
  );
};
export default Demo;
