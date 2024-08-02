import { omit } from 'lodash-es';
import { v4 as uuidv4 } from 'uuid';

import { DEFAULT_NUMBER_ATTR, DEFAULT_STRING_ATTR } from '../helpers';
import { _MyModel, _SubElement, MyModel, SubElement } from '../types';

function validateRequiredStringAttr<T extends string = string>(
  stringAttr: T | undefined
) {
  return stringAttr && stringAttr.length > 0 ? stringAttr : DEFAULT_STRING_ATTR;
}

function validateRequiredNumberAttr(numberAttr: number | undefined) {
  return numberAttr && numberAttr >= 0 ? numberAttr : DEFAULT_NUMBER_ATTR;
}

function normalizeSubElements(subElements: SubElement[]): _SubElement[] {
  return subElements.map((subElement) => ({
    numberAttr: validateRequiredNumberAttr(subElement.numberAttr),
    stringAttr: validateRequiredStringAttr(subElement.stringAttr),
    id: uuidv4(),
  }));
}

function clearSubElements(_subElements: _SubElement[]) {
  return _subElements.map((_subElement) => omit(_subElement, 'id'));
}

/**
 * This is a simple and very manual implementation of the normalization process.
 * It does not really matter for the purpose of this exercise which kind of validations and checks will be under control
 * @returns
 */
export function useNormalizeData() {
  function normalizeData(myModel: MyModel): _MyModel {
    return {
      stringAttr: validateRequiredStringAttr(myModel.stringAttr),
      numberAttr: validateRequiredNumberAttr(myModel.numberAttr),
      subElements: normalizeSubElements(myModel.subElements),
    };
  }

  function clearData(_myModel: _MyModel): MyModel {
    return {
      ..._myModel,
      subElements: clearSubElements(_myModel.subElements),
    };
  }

  return { normalizeData, clearData };
}
