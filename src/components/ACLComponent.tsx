import { createContext, useMemo } from 'react';

import { useNormalizeData } from '../hooks/useNormalizeData';
import { _MyModel, MyModel } from '../types';

export const MyACLContext = createContext<{
  onChange: (myModel: _MyModel) => void;
  myModel: _MyModel | null;
}>({ onChange: () => void 0, myModel: null });

export function ACLComponent({
  myModel,
  onChange,
  children,
}: {
  myModel: MyModel;
  onChange: (myModel: MyModel) => void;
  children?: React.ReactNode;
}) {
  const { normalizeData, clearData } = useNormalizeData();

  const normalizedData = useMemo(
    () => normalizeData(myModel),
    [myModel, normalizeData]
  );

  function handleOnChange(_myModel: _MyModel): void {
    const myModel = clearData(_myModel);
    onChange(myModel);
  }

  return (
    <MyACLContext.Provider
      value={{ onChange: handleOnChange, myModel: normalizedData }}
    >
      {children}
    </MyACLContext.Provider>
  );
}
