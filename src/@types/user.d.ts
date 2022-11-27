export interface IUser {
  username: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}

export type LoginData  = {
  username: string,
  password: string
}

export type RegisterData = {
  username: string,
  email: string,
  password: string,
  passwordAgain: string
}

export type ResetPasswordData = {
  token: string,
  new_password: string,
  passwordAgain: string,
}

export type Tokens = {
  access_token: string;
  refresh_token: string;
};

export type UserContextType = {
  user: Tokens;
  setAdmin: (admin: Tokens) => void;
};
