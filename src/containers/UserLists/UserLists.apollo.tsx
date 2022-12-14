import {useMutation} from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {ListsAlcohols} from '../../@types/alcohol';
import LoadingModal from '../../components/modal/LoadingModal';
import useToast from '../../utils/hooks/useToast';
import {removeTag} from '../../utils/requests/delete';
import {
  getFavourites,
  getHistory,
  getRated,
  getRecommendations,
  getTagAlcohols,
  getWishlist,
} from '../../utils/requests/get';
import {putTagName} from '../../utils/requests/put';
import UserListsLogic from './UserLists.logic';

const UserListsApollo = () => {
  const {listId, userId} = useParams();
  const toast = useToast();
  const navigate = useNavigate();
  const [lists, setLists] = useState<ListsAlcohols | null>(null);
  const getLists = () => {
    if (listId === 'favourites') return getFavourites;
    if (listId === 'wishlists') return getWishlist;
    return getTagAlcohols;
  };

  const standardMutation = useMutation({
    mutationFn: getLists(),
    onSuccess(data, variables) {
      setLists({...data.data, type: 'standard'});
    },
  });

  const ratedMutation = useMutation({
    mutationFn: getRated,
    onSuccess(data) {
      setLists({...data.data, type: 'rated'});
    },
  });

  const historyMutation = useMutation({
    mutationFn: getHistory,
    onSuccess(data) {
      setLists({...data.data, type: 'history'});
    },
  });

  const recommendationsMutation = useMutation({
    mutationFn: getRecommendations,
    onSuccess(data) {
      setLists({...data.data, type: 'recommendations'});
    },
  });

  const modTagMutation = useMutation({
    mutationFn: putTagName,
    onSuccess(data, variables) {
      toast.pushSuccess('Tag', 'Tag został zmieniony pomyślnie.');
      navigate(`/user/${userId}/lists/${listId}/${variables.tagName}`);
    },
  });

  const removeTagMutation = useMutation({
    mutationFn: removeTag,
    onSuccess(data, variables) {
      toast.pushSuccess('Tag', `Tag został usunięty pomyślnie.`);
      navigate('/profile');
    },
  });

  const createTag = (tagName: string) => {
    modTagMutation.mutate({tagName, tagId: listId || ''});
  };

  const handleRemoveTag = () => {
    removeTagMutation.mutate(listId || '');
  };

  const setLimit = () => {
    if (!lists || lists.type === 'recommendations') return;
    setLists(() => ({
      ...lists,
      page_info: {
        ...lists.page_info,
        limit: lists.page_info.limit + 10,
      },
    }));
  };

  useEffect(() => {
    if (!listId || !userId) return;
    if (listId === 'recommendations') {
      if (!userId) return;
      recommendationsMutation.mutate();
    } else if (listId === 'history') {
      historyMutation.mutate({
        queryKey: ['', userId, lists?.page_info?.limit.toString() || '10'],
      });
    } else if (listId === 'rated') {
      if (!userId) return;
      ratedMutation.mutate({
        queryKey: ['', userId, lists?.page_info?.limit.toString() || '10'],
      });
    } else if (listId === 'favourites' || listId === 'wishlists') {
      standardMutation.mutate({
        queryKey: ['', userId, lists?.page_info?.limit.toString() || '10'],
      });
    } else
      standardMutation.mutate({
        queryKey: ['', listId, lists?.page_info?.limit.toString() || '10'],
      });
  }, [lists?.page_info?.limit]);

  if (!lists) return <LoadingModal title="" isOpen />;

  return (
    <UserListsLogic
      lists={lists}
      setLimit={setLimit}
      createTag={createTag}
      removeTag={handleRemoveTag}
    />
  );
};

export default UserListsApollo;
