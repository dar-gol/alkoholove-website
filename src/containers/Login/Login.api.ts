import axios, { AxiosResponse } from "axios"
import QueryString from "qs"
import { LoginData , Tokens } from "../../@types/user.d";
import { API, URL } from "../../utils/constant"

export const login = (data: LoginData) => 
  axios.post<Tokens, AxiosResponse<Tokens, any>, string>(`${API}${URL.LOGIN}`, QueryString.stringify(data))