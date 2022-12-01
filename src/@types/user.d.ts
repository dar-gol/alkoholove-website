export interface IUser {
  username: string, 
  id: string, 
  email: string, 
  created_on: string, 
  avg_rating: number,
  wishlist_count: number,
  rate_count: number,
  favourites_count: number,
  followers_count: number,
  following_count: number
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
