import React, {useState} from 'react';
import {IUserListsLogic} from './UserLists.interface';
import UserListsView from './UserLists.view';

const UserListsLogic = ({
  lists,
  setLimit,
  createTag,
  removeTag,
}: IUserListsLogic) => {
  const [isOpentag, setIsOpenTag] = useState(false);
  const [isOpenRemovetag, setIsOpenRemoveTag] = useState(false);
  const handleOpenTag = (open: boolean) => {
    setIsOpenTag(open);
  };
  const handleOpenRemoveTag = (open: boolean) => {
    setIsOpenRemoveTag(open);
  };
  return (
    <UserListsView
      lists={lists}
      setLimit={setLimit}
      isOpentag={isOpentag}
      handleOpenTag={handleOpenTag}
      createTag={createTag}
      removeTag={removeTag}
      isOpenRemovetag={isOpenRemovetag}
      handleOpenRemoveTag={handleOpenRemoveTag}
    />
  );
};
export default UserListsLogic;
