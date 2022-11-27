import axios from "axios";
import { API, URL } from "../../utils/constant";

export const resetPassword = (email: string) => axios.post(`${API}${URL.REQUEST_RESET_PASSWORD}`, {email});