import {IModTag} from '../../@types/Lists';
import {ErrorVariables} from '../../@types/requests';
import {Tokens} from '../../@types/user';
import {API, URL} from '../constant';
import {request} from '../utils';

export const logout = ({access_token, refresh_token}: Tokens) =>
  request({
    method: 'POST',
    url: `${API}${URL.LOGOUT}`,
    headers: {
      authorization: `Bearer ${access_token}`,
      'authorization-refresh': refresh_token,
    },
  });

export const addTag = (tag_name: string) =>
  request(
    {method: 'POST', url: `${API}${URL.ME_TAGS}`, data: {tag_name}},
    true,
  );

export const addToTag = ({alcohol_id, tag}: IModTag) =>
  request(
    {method: 'POST', url: `${API}${URL.ME_TAGS}/${tag}/alcohols/${alcohol_id}`},
    true,
  );

export const addToFavourites = (alcohol_id: string) =>
  request(
    {method: 'POST', url: `${API}${URL.ME_FAVOURITES}/${alcohol_id}`},
    true,
  );

export const addToWishlist = (alcohol_id: string) =>
  request(
    {method: 'POST', url: `${API}${URL.ME_WISHLIST}/${alcohol_id}`},
    true,
  );

export const postError = ({description}: ErrorVariables) =>
  request(
    {method: 'POST', url: `${API}${URL.ERRORS}`, data: {description}},
    true,
  );
