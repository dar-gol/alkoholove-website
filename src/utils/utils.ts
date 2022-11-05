/* eslint-disable no-unreachable */
import {Type} from '../@types/category';
import {inputType} from '../@types/inputs';
import {INPUT_TYPE} from './constant';

export const unloadType = (type: Type): [string, boolean] => {
  if (typeof type === 'string') return [type, true];
  return [type[0], type[1] === 'null' ? false : type[1]];
};

export const getType = (type: Type) => {
  const [kind, required] = unloadType(type);
  return {
    type: (INPUT_TYPE.includes(kind) ? kind : 'string') as inputType,
    required,
  };
};

export const createImageName = (name: string, type?: string): string =>
  `${name.toLowerCase().replaceAll(' ', '_')}${type ? `_${type}` : ''}`;

type FormDataType = Array<[string, string | Blob]>;

export const createFormData = (tuples: FormDataType) => {
  const formData = new FormData();

  tuples.forEach((tuple: [string, string | Blob]) => {
    formData.append(tuple[0], tuple[1]);
  });

  return formData;
};

export const autoCompleteHandler = (fn: () => void) => {
  document.addEventListener('onautocomplete', (e: any) => {
    if (e.target.hasAttribute('autocompleted')) fn();
  });
};

export const getDate = (date: Date | string) => {
  const prepDate = typeof date === 'string' ? new Date(date) : date;
  const year = prepDate.getFullYear();
  const month = prepDate.getMonth() + 1;
  const day = prepDate.getDate();
  return `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;
};

export const formater = (value: any): string => {
  if (value === null || (typeof value === 'object' && value.length === 0))
    return '';
  if (typeof value === 'object' && value !== null) return value.join(', ');
  if (typeof value === 'boolean') return value ? 'TAK' : 'NIE';
  return value;
};

export const getIcon = (name: string) => {
  if (name === 'kind') return 'icon-Category';
  if (name === 'type') return 'icon-Info';
  if (name === 'alcohol_by_volume') return 'icon-Bottle';
  if (name === 'color') return 'icon-Info';
  if (name === 'manufacturer') return 'icon-Manufacturer';
  if (name === 'country') return 'icon-Globe';
  if (name === 'region') return 'icon-Globe';
  if (name === 'food') return 'icon-Bottle';
  if (name === 'finish') return 'icon-Food';
  if (name === 'aroma') return 'icon-Bottle';
  if (name === 'taste') return 'icon-Food';
  return 'icon-Info';
};

export const getRate = (value: number, count: number) => {
  if (count === 0) return 0;
  return parseFloat((value / count).toFixed(2));
};
