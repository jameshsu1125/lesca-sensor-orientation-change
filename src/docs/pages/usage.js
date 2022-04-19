import Code from '../components/code';
import { name } from '../config';

const codes = [
  {
    title: '1. Installation',
    code: `npm install ${name} --save`,
    type: 'text',
  },
  {
    title: '2. Usage',
    code: `import OrientationChange from 'lesca-sensor-orientation-change';

OrientationChange.addListener((e) => {
  console.log(e); // landscape or portrait
});`,
    type: 'js',
  },
];

const Usage = () => (
  <div className='Usage'>
    <h2>Usage</h2>
    {codes.map((e) => (
      <div key={e.title}>
        <h3>{e.title}</h3>
        <Code code={e.code} theme={e.type} />
      </div>
    ))}
  </div>
);
export default Usage;
