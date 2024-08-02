import './App.css';

import { useState } from 'react';

import { ACLComponent } from './components/ACLComponent';
import { ChildComponent } from './components/ChildComponent';
import { MyModel } from './types';

function App() {
  const [data, setData] = useState<MyModel>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stringAttr: '' as any,
    subElements: [{ numberAttr: -1 }],
  });

  return (
    <ACLComponent myModel={data} onChange={(myModel) => setData(myModel)}>
      <div>{JSON.stringify(data)}</div>
      <br />
      <ChildComponent />
    </ACLComponent>
  );
}

export default App;
