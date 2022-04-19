import { Button, ButtonGroup } from '@mui/material';
import { useEffect, useState } from 'react';
import OrientationChange from '../../lib';
import Qrocde from 'lesca-react-qrcode';

const Demo = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    OrientationChange.addListener((e) => {
      setState(e);
      console.log(e);
    });
  }, []);

  return (
    <div className='Demo'>
      <h2>Demo</h2>
      <Qrocde content={window.location.href} size='320' />
      <pre>
        <code>{JSON.stringify(state)}</code>
      </pre>
    </div>
  );
};
export default Demo;
