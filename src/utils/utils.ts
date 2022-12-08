import axios, {
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from 'axios';
import {toast} from 'react-hot-toast';
import {getCookie} from './cookies';
/* eslint-disable no-unreachable */
import {Type} from '../@types/category';
import {inputType} from '../@types/inputs';
import Toast from '../components/Toast/Toast';
import {icons, INPUT_TYPE} from './constant';
import {Tokens} from '../@types/user';

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
  name ? `${name.replaceAll(' ', '_')}${type ? `_${type}` : ''}` : '';

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
  if (!date) return null;
  return new Date(date).toLocaleDateString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

export const formater = (value: any): string => {
  if (value === null || (typeof value === 'object' && value.length === 0))
    return '';
  if (typeof value === 'object' && value !== null) return value.join(', ');
  if (typeof value === 'boolean') return value ? 'TAK' : 'NIE';
  return value;
};

export const getIcon = (name: string) => {
  const iconName = name as keyof typeof icons;
  const icon = icons[iconName];
  return icon || 'icon-Info';
};

export const getTagOrLists = (name: string) => {
  const listsName = [
    'Ulubione',
    'Ocenione',
    'Lista życzeń',
    'Historia wyszukiwań',
  ];
  if (listsName.includes(name)) return 'Lista';
  return 'Tag';
};

export const getRate = (value: number, count: number) => {
  if (count === 0) return 0;
  return parseFloat((value / count).toFixed(2));
};

export const isValidEmail = (email: string) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );

export const isCorrectPassword = (password: string) =>
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

export const isPasswordEqual = (pass: string, passAgain: string) =>
  pass === passAgain;

export const getAuthHeader = (
  headers?: RawAxiosRequestHeaders,
  auth?: string,
  isAuth?: boolean,
) => {
  const authHeader = {authorization: `Bearer ${auth}`};
  const prepHeader = headers || {};
  if (auth && isAuth) return {headers: {...prepHeader, ...authHeader}};
  return {headers: {...prepHeader}};
};

export const request = <ResponseData = any, Data = unknown>(
  config: AxiosRequestConfig<Data>,
  isAuth?: boolean,
) => {
  const tokens = getCookie<Tokens>('auth') || {};
  if (!tokens.access_token && isAuth) return Promise.reject();
  return axios<ResponseData, AxiosResponse<ResponseData, AxiosError>, Data>({
    ...config,
    ...getAuthHeader(config.headers, tokens.access_token, isAuth),
  });
};
