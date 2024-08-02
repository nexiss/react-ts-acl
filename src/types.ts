import { v4 as uuidv4 } from 'uuid';

export type MyModel = {
  stringAttr: 'value1' | 'value2';
  numberAttr?: number;
  subElements: SubElement[];
};

export type SubElement = {
  stringAttr?: string;
  numberAttr: number;
};

// Internal model

export type _ID = ReturnType<typeof uuidv4>;

export type _MyModel = MyModel & {
  numberAttr: Required<MyModel['numberAttr']>;
  subElements: _SubElement[];
};

export type _SubElement = SubElement & {
  stringAttr: Required<SubElement['stringAttr']>;
  id: _ID;
};
