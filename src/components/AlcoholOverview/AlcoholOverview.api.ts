import {IQueryKey} from '../../@types/global';
import {AlcoholLists, IdentifyTags} from '../../@types/Lists.d';
import {API, URL} from '../../utils/constant';
import {request} from '../../utils/utils';

interface IModTag {
  alcohol_id: string;
  tag: string;
}

export const getTags = () =>
  request<IdentifyTags>({url: `${API}${URL.ME_TAGS}?limit=0`}, true);

export const addTag = (tag_name: string) =>
  request(
    {method: 'POST', url: `${API}${URL.ME_TAGS}`, data: {tag_name}},
    true,
  );

export const getAlcoholLists = ({queryKey}: IQueryKey) =>
  request<AlcoholLists>({url: `${API}${URL.ME_LISTS}/${queryKey[1]}`}, true);

export const addToFavourites = (alcohol_id: string) =>
  request(
    {method: 'POST', url: `${API}${URL.ME_FAVOURITES}/${alcohol_id}`},
    true,
  );

export const removeFromFavourites = (alcohol_id: string) =>
  request(
    {method: 'DELETE', url: `${API}${URL.ME_FAVOURITES}/${alcohol_id}`},
    true,
  );

export const addToWishlist = (alcohol_id: string) =>
  request(
    {method: 'POST', url: `${API}${URL.ME_WISHLIST}/${alcohol_id}`},
    true,
  );

export const removeFromWishlist = (alcohol_id: string) =>
  request(
    {method: 'DELETE', url: `${API}${URL.ME_WISHLIST}/${alcohol_id}`},
    true,
  );

export const addToTag = ({alcohol_id, tag}: IModTag) =>
  request(
    {method: 'POST', url: `${API}${URL.ME_TAGS}/${tag}/alcohols/${alcohol_id}`},
    true,
  );

export const removeFromTag = ({alcohol_id, tag}: IModTag) =>
  request(
    {
      method: 'DELETE',
      url: `${API}${URL.ME_TAGS}/${tag}/alcohols/${alcohol_id}`,
    },
    true,
  );
