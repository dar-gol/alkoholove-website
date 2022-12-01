import axios from "axios";
import { ResetPasswordData } from "../../@types/user.d";
import { API, URL } from "../../utils/constant";

export const resetPassword = (data: ResetPasswordData) => axios.post(`${API}${URL.RESET_PASSWORD}`, data);