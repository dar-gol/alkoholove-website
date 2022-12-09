import {Tokens, IUser} from '../../@types/user.d';
import {request} from '../../utils/utils';
import {CommentsData, IComment} from '../../@types/comment.d';
import {API, URL} from '../../utils/constant';
import {getCookie} from '../../utils/cookies';

interface CommentVariables {
  id: string;
  limit: number;
}

interface AddReviewVariables {
  rating: number;
  review: string;
  alcohol_id: string;
}

interface UpdateReviewVariables {
  rating: number;
  review: string;
  review_id: string;
  alcohol_id: string;
}

interface HelpfulVariables {
  review_id: string;
}

interface ReportVariables {
  review_id: string;
}

export const getComments = ({id, limit}: CommentVariables) => {
  const tokens = getCookie<Tokens>('auth') || {};
  return request<CommentsData>(
    {
      url: `${API}${URL.REVIEWS}/${id}?limit=${limit}`,
    },
    !!tokens.access_token,
  ).then(data => data.data);
};

export const getUserInformation = () =>
  request<IUser>({url: `${API}${URL.ME}`}, true);

export const addReview = ({rating, review, alcohol_id}: AddReviewVariables) =>
  request(
    {
      method: 'POST',
      url: `${API}${URL.ME_REVIEWS}/${alcohol_id}`,
      data: {rating, review},
    },
    true,
  );

export const updateReview = ({
  rating,
  review,
  review_id,
  alcohol_id,
}: UpdateReviewVariables) =>
  request(
    {
      method: 'PUT',
      url: `${API}${URL.ME_REVIEWS}/${review_id}/alcohol/${alcohol_id}`,
      data: {rating, review},
    },
    true,
  );

export const putHelpful = ({review_id}: HelpfulVariables) =>
  request<IComment>(
    {method: 'PUT', url: `${API}${URL.ME_REVIEWS}/${review_id}`},
    true,
  );

export const reportComment = ({review_id}: ReportVariables) =>
  request(
    {method: 'POST', url: `${API}${URL.ME_REPORT_REVIEW}/${review_id}`},
    true,
  );
