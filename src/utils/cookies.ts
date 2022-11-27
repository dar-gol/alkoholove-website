import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getCookie = <T>(cookieName: string) => cookies.get(cookieName) as T

export const setCookie = (cookieName: string, cookieValue: string | object) => {
  cookies.set(cookieName, cookieValue, { path: "/", sameSite: "strict" });
}