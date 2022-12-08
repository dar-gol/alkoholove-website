import {useMutation, useQuery} from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';
import {IAlcohol} from '../../@types/alcohol';
import {AlcoholLists, IdentifyTag} from '../../@types/Lists';
import useToast from '../../utils/hooks/useToast';
import {
  removeFromWishlist,
  removeFromFavourites,
  removeFromTag,
} from '../../utils/requests/delete';
import {getAlcoholLists, getTags} from '../../utils/requests/get';
import {
  addToFavourites,
  addTag,
  addToTag,
  addToWishlist,
} from '../../utils/requests/post';
import AlcoholOverviewLogic from './AlcoholOverview.logic';

const getDefaultListsStatus = (): AlcoholLists => ({
  is_in_favourites: false,
  is_in_wishlist: false,
  alcohol_tags: [],
});

interface IProps {
  alcohol: IAlcohol;
}

const AlcoholOverviewApollo = ({alcohol}: IProps) => {
  const toast = useToast();
  const {
    data: listStatus,
    refetch,
    isFetching,
  } = useQuery(['listStatus', alcohol.id], getAlcoholLists);
  const {data: tags, refetch: refetchTags} = useQuery(['tags'], getTags);
  const manageList = async (listId: string, isAdd: boolean) => {
    if (isAdd)
      toast.pushSuccess('Listy', `Dodałeś ${alcohol.name} do listy lub tagu`);
    else
      toast.pushSuccess('Listy', `Usunąłeś ${alcohol.name} do listy lub tagu`);
    if (listId === 'favourites') {
      if (isAdd) await addToFavourites(alcohol.id);
      else await removeFromFavourites(alcohol.id);
    } else if (listId === 'wishlist') {
      if (isAdd) await addToWishlist(alcohol.id);
      else await removeFromWishlist(alcohol.id);
    } else if (isAdd) await addToTag({alcohol_id: alcohol.id, tag: listId});
    else await removeFromTag({alcohol_id: alcohol.id, tag: listId});
    await refetch();
  };
  const createTag = async (tag_name: string) => {
    await addTag(tag_name);
    await refetchTags();
  };
  return (
    <AlcoholOverviewLogic
      alcohol={alcohol}
      tags={tags?.data.user_tags || []}
      lists={listStatus?.data || getDefaultListsStatus()}
      manageList={manageList}
      createTag={createTag}
    />
  );
};

export default AlcoholOverviewApollo;
