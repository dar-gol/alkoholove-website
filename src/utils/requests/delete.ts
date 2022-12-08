import {IModTag} from '../../@types/Lists';
import {API, URL} from '../constant';
import {request} from '../utils';

export const removeFromFavourites = (alcohol_id: string) =>
  request(
    {method: 'DELETE', url: `${API}${URL.ME_FAVOURITES}/${alcohol_id}`},
    true,
  );
export const removeFromWishlist = (alcohol_id: string) =>
  request(
    {method: 'DELETE', url: `${API}${URL.ME_WISHLIST}/${alcohol_id}`},
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

export const removeTag = (tagId: string) =>
  request(
    {
      method: 'DELETE',
      url: `${API}${URL.ME_TAGS}/${tagId}`,
    },
    true,
  );
