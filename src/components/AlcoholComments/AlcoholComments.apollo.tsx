import {useMutation} from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';
import {IAlcohol} from '../../@types/alcohol';
import {CommentsData, IComment} from '../../@types/comment';
import {Tokens, IUser} from '../../@types/user';
import {getCookie} from '../../utils/cookies';
import useToast from '../../utils/hooks/useToast';
import LoadingModal from '../modal/LoadingModal';
import Toast from '../Toast/Toast';
import {
  addReview,
  getComments,
  getUserInformation,
  putHelpful,
  reportComment,
  updateReview,
} from './AlcoholComments.api';
import AlcoholCommentsLogic from './AlcoholComments.logic';

interface IProps {
  alcohol: IAlcohol;
  refresh: () => void;
}

const defaultComments = {
  my_review: null,
  reviews: [],
  page_info: {
    limit: 10,
    offset: 0,
    total: 0,
    number: 0,
  },
};

const AlcoholCommentsApollo = ({alcohol, refresh}: IProps) => {
  const [comments, setComments] = useState<CommentsData>(defaultComments);
  const [user, setUser] = useState<IUser | null>(null);
  const toast = useToast();

  const commentsMutation = useMutation({
    mutationFn: getComments,
    onSuccess: (data, variables) => {
      setComments(data);
    },
  });

  const userMutation = useMutation({
    mutationFn: getUserInformation,
    onSuccess: data => {
      setUser(data.data);
    },
  });

  const init = () => {
    commentsMutation.mutate({
      id: alcohol.id,
      limit: comments.page_info.limit,
    });
    userMutation.mutate();
  };

  const manageReview = ({review, rating}: {review: string; rating: number}) => {
    const data = {
      rating,
      review,
      review_id: comments.my_review?.id || '',
      alcohol_id: alcohol.id,
    };
    if (comments.my_review?.id) return updateReview({...data});
    return addReview({...data});
  };

  const addCommentsMutation = useMutation({
    mutationFn: manageReview,
    onSuccess: data => {
      toast.pushSuccess('Komentarz', 'Komentarz dodany/zmieniony pomyślnie.');
      init();
      refresh();
    },
    onError: data => {
      toast.pushError('Komentarz', 'Problem z dodaniem komentarza.');
    },
  });

  const manageHelpfulMutation = useMutation({
    mutationFn: putHelpful,
    onSuccess(data, variables) {
      const {review_id} = variables;
      const {username} = data.data;
      toast.pushSuccess(
        'Komentarz',
        `Oznaczyłeś/Odznaczyłeś komentarz ${username} jako użyteczny.`,
      );
      const newComments = (comments.reviews as any[]).map((comm: IComment) => {
        if (comm.id === review_id) {
          return {...data.data, id: comm.id};
        }
        return comm;
      }, []);
      setComments({...comments, reviews: newComments});
    },
    onError() {
      toast.pushError(
        'Komentarz',
        'Problem z oznaczeniem komentarza jako użyteczny.',
      );
    },
  });

  const reportMutation = useMutation({
    mutationFn: reportComment,
    onSuccess(data, variables) {
      toast.pushSuccess('Komentarz', 'Zgłosiłeś komentarz jako niewłaściwy.');
    },
    onError() {
      toast.pushError('Komentarz', 'Problem ze zgłoszeniem komentarza.');
    },
  });

  useEffect(() => {
    init();
  }, [comments.page_info.limit]);

  const AddComment = async (review: string, rating: number) => {
    addCommentsMutation.mutate({rating, review});
  };

  const handleReportComment = (review_id: string) => {
    reportMutation.mutate({review_id});
  };

  const manageHelpful = async (review_id: string) => {
    manageHelpfulMutation.mutate({
      review_id,
    });
  };

  if (
    commentsMutation.isLoading ||
    userMutation.isLoading ||
    commentsMutation.isIdle ||
    addCommentsMutation.isLoading
  )
    return null;

  return (
    <AlcoholCommentsLogic
      comments={comments}
      alcohol={alcohol}
      user={user as IUser}
      AddComment={AddComment}
      setComment={setComments}
      manageHelpful={manageHelpful}
      reportComment={handleReportComment}
    />
  );
};

export default AlcoholCommentsApollo;
