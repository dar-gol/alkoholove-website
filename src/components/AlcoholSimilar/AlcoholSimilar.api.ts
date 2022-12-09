import {Alcohols} from '../../@types/alcohol.d';
import {IQueryKey} from '../../@types/global.d';
import {request} from '../../utils/utils';
import {API, URL} from '../../utils/constant';

export const getSimilar = ({queryKey}: IQueryKey) => {
  const [, alcohol_id] = queryKey;
  return request<{alcohols: Alcohols}>({
    url: `${API}${URL.GET_ALCOHOL}/${alcohol_id}/similar`,
  });
};
