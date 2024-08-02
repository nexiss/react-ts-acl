import { useContext } from 'react';

import { MyACLContext } from './ACLComponent';
import { Consumer } from './Consumer';
import { Spinner } from './Spinner';

export function ChildComponent() {
  const { myModel, onChange } = useContext(MyACLContext);

  return myModel ? (
    <Consumer myModel={myModel} onChange={onChange} />
  ) : (
    <Spinner />
  );
}
