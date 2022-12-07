import {API, URL} from '../constant';
import {request} from '../utils';

interface ITagName {
  tagId: string;
  tagName: string;
}

export const putTagName = ({tagId, tagName}: ITagName) =>
  request(
    {
      method: 'PUT',
      url: `${API}${URL.ME_TAGS}/${tagId}?tag_name=${encodeURIComponent(
        tagName,
      )}`,
    },
    true,
  );
