import React, {useState} from 'react';
import {IAlcohol} from '../../@types/alcohol';
import {AlcoholLists, IdentifyTag} from '../../@types/Lists';
import AlcoholOverviewView from './AlcoholOverview.view';

interface IProps {
  alcohol: IAlcohol;
  tags: IdentifyTag[];
  lists: AlcoholLists;
  manageList: (listId: string, isAdd: boolean) => void;
  createTag: (tag_name: string) => void;
}

const AlcoholOverviewLogic = ({
  alcohol,
  tags,
  lists,
  manageList,
  createTag,
}: IProps) => {
  const [isOpenLists, setIsOpenLists] = useState(false);
  const [isOpenTag, setIsOpenTag] = useState(false);
  const handleModalLists = (open: boolean) => {
    setIsOpenLists(open);
  };
  const handleModalTag = (open: boolean) => {
    setIsOpenTag(open);
  };
  return (
    <AlcoholOverviewView
      alcohol={alcohol}
      tags={tags}
      lists={lists}
      manageList={manageList}
      isOpenLists={isOpenLists}
      isOpenTag={isOpenTag}
      handleModalLists={handleModalLists}
      handleModalTag={handleModalTag}
      createTag={createTag}
    />
  );
};

export default AlcoholOverviewLogic;
