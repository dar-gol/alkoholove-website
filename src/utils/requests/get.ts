import {IQueryKey} from '../../@types/global.d';
import {API, URL} from '../constant';
import {AlcoholLists, IdentifyTags} from '../../@types/Lists';
import {request} from '../utils';
import {IUser, UsersSearchResultObject} from '../../@types/user';
import {
  HistoryAlcohols,
  RatedAlcohols,
  StandardAlcohols,
} from '../../@types/alcohol';

export const getTags = () =>
  request<IdentifyTags>({url: `${API}${URL.ME_TAGS}?limit=0`}, true);

export const getTagAlcohols = ({queryKey}: IQueryKey) =>
  request<StandardAlcohols>(
    {url: `${API}${URL.ME_TAGS}/${queryKey[1]}/alcohols`},
    true,
  );

export const getUserInfo = ({queryKey}: IQueryKey<string | undefined>) => {
  const id = queryKey[1];
  if (id) return request<IUser>({url: `${API}${URL.SOCIALS_USER_INFO}/${id}`});
  return request<IUser>({url: `${API}${URL.ME}`}, true);
};

export const getAlcoholLists = ({queryKey}: IQueryKey) =>
  request<AlcoholLists>({url: `${API}${URL.ME_LISTS}/${queryKey[1]}`}, true);

export const getFavourites = ({queryKey}: IQueryKey) =>
  request<StandardAlcohols>(
    {
      url: `${API}${URL.LIST_FAVOURITES}/${queryKey[1]}?limit=${
        queryKey[2] || 10
      }`,
    },
    true,
  );

export const getWishlist = ({queryKey}: IQueryKey) =>
  request<StandardAlcohols>(
    {
      url: `${API}${URL.LIST_WISHLIST}/${queryKey[1]}?limit=${
        queryKey[2] || 10
      }`,
    },
    true,
  );

export const getHistory = ({queryKey}: IQueryKey) =>
  request<HistoryAlcohols>(
    {url: `${API}${URL.ME_HISTORY}?limit=${queryKey[2] || 10}`},
    true,
  );

export const getRated = ({queryKey}: IQueryKey) =>
  request<RatedAlcohols>(
    {
      url: `${API}${URL.REVIEWS_USER}/${queryKey[1]}?limit=${
        queryKey[2] || 10
      }`,
    },
    true,
  );

export const searchUsers = ({queryKey}: IQueryKey) =>
  request<UsersSearchResultObject>(
    {
      method: 'GET',
      url: `${API}${URL.SEARCH_USERS}?offset=0&limit=${queryKey[0]}${queryKey[1]}&search_type=${queryKey[2]}`,
    },
    true,
  );
