import axios, {AxiosResponse} from 'axios';
import {request} from '../../utils/utils';
import {Tokens} from '../../@types/user.d';
import {API, URL} from '../../utils/constant';

export const getUserInformation = () => request({url: `${API}${URL.ME}`}, true);

export const refreshTokens = (authorization: string) =>
  axios.post<Tokens, AxiosResponse<Tokens, any>, string>(
    `${API}${URL.REFRESH}`,
    '',
    {headers: {authorization: `Bearer ${authorization}`}},
  );
