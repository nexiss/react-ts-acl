import { v4 as uuidv4 } from 'uuid';

import { DEFAULT_NUMBER_ATTR, DEFAULT_STRING_ATTR } from '../helpers';
import { _MyModel, _SubElement } from '../types';

export function Consumer({
  myModel,
  onChange,
}: {
  myModel: _MyModel;
  onChange: (myModel: _MyModel) => void;
}) {
  function getNewSubElement(): _SubElement {
    return {
      id: uuidv4(),
      numberAttr: DEFAULT_NUMBER_ATTR,
      stringAttr: DEFAULT_STRING_ATTR,
    };
  }

  function handleOnClick() {
    const _newMyModel: _MyModel = {
      ...myModel,
      subElements: [...myModel.subElements, getNewSubElement()],
    };

    return onChange(_newMyModel);
  }

  return (
    <>
      <div>{JSON.stringify(myModel)}</div>
      <br />
      <button onClick={handleOnClick}>Add subElement</button>
    </>
  );
}
