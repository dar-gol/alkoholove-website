import Cookies from 'universal-cookie';

const cookies = new Cookies();

const getExpires = (days?: number) => {
  if (!days) return {};
  const date = new Date();
  date.setDate(date.getDate() + days);
  return {expires: date};
};

export const getCookie = <T>(cookieName: string) =>
  cookies.get(cookieName) as T;

export const setCookie = (
  cookieName: string,
  cookieValue: string | object,
  days?: number,
) => {
  cookies.set(cookieName, cookieValue, {
    path: '/',
    sameSite: 'strict',
    ...getExpires(days),
  });
};
