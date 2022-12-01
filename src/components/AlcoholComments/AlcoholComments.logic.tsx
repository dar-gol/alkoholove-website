import React, {useEffect, useState} from 'react';
import {IAlcohol} from '../../@types/alcohol';
import {CommentsData, IComment} from '../../@types/comment';
import {IUser} from '../../@types/user';
import AlcoholCommentsView from './AlcoholComments.view';

interface IProps {
  comments: CommentsData;
  alcohol: IAlcohol;
  user: IUser;
  AddComment: (review: string, rating: number) => void;
  setComment: React.Dispatch<React.SetStateAction<CommentsData>>;
  manageHelpful: (review_id: string) => void;
  reportComment: (review_id: string) => void;
}

const defaultReview = (username: string, alcohol_id: string) => ({
  review: '',
  rating: 0,
  id: '',
  username,
  date: '',
  alcohol_id,
  helpful_count: 0,
  helpful: false,
});

const AlcoholCommentsLogic = ({
  comments,
  alcohol,
  user,
  AddComment,
  manageHelpful,
  setComment,
  reportComment,
}: IProps) => {
  const [choosenComment, setChoosenComment] = useState<number | null>(null);
  const setRate = (rate: number) => {
    const my_review = comments.my_review as IComment;
    setComment(prev => ({...prev, my_review: {...my_review, rating: rate}}));
  };

  const setReview = (review: string) => {
    const my_review = comments.my_review as IComment;
    setComment(prev => ({...prev, my_review: {...my_review, review}}));
  };

  const setLimit = () => {
    const {page_info} = comments;
    setComment(prev => ({
      ...prev,
      page_info: {...page_info, limit: page_info.limit + 10},
    }));
  };

  const setCommentModalActive = (comment: number | null) => {
    setChoosenComment(comment);
  };

  useEffect(() => {
    if (!comments.my_review)
      setComment(prev => ({
        ...prev,
        my_review: defaultReview(user?.username, alcohol?.id),
      }));
  }, []);

  return (
    <AlcoholCommentsView
      comments={comments}
      alcohol={alcohol}
      setRate={setRate}
      setReview={setReview}
      setComment={AddComment}
      manageHelpful={manageHelpful}
      setLimit={setLimit}
      setCommentModalActive={setCommentModalActive}
      choosenComment={choosenComment}
      reportComment={reportComment}
    />
  );
};

export default AlcoholCommentsLogic;
