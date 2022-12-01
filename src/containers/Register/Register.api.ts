import axios from "axios";
import { RegisterData } from "../../@types/user";
import { API, URL } from "../../utils/constant";

export const register = (data: RegisterData) => axios.post(`${API}${URL.REGISTER}`, data);