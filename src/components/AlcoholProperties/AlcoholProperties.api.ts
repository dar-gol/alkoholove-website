import axios from 'axios';
import {API, URL} from '../../utils/constant';
import {getAuthHeader, request} from '../../utils/utils';

interface ErrorVariables {
  description: string;
}

export const postError = ({description}: ErrorVariables) =>
  request(
    {method: 'POST', url: `${API}${URL.ERRORS}`, data: {description}},
    true,
  );
