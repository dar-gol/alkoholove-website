import axios, { AxiosResponse } from "axios";
import { Tokens } from "../../@types/user.d";
import { API, URL } from "../../utils/constant";

export const getUserInformation = (authorization: string) => 
  axios.get(`${API}${URL.ME}`, {headers: {authorization: `Bearer ${authorization}`}});

export const refreshTokens = (authorization: string) => 
  axios.post<Tokens, AxiosResponse<Tokens, any>, string>(`${API}${URL.REFRESH}`, "", {headers: {authorization: `Bearer ${authorization}`}})