import React, {useState} from 'react';
import {IProfileLogic, TabType} from './Profile.interface';
import ProfileView from './Profile.view';

const ProfileLogic = ({user, tags, sendError, createTag}: IProfileLogic) => {
  const [tab, setTab] = useState<TabType>('data');
  const handleTab = (nextTab: TabType) => {
    setTab(nextTab);
  };
  return (
    <ProfileView
      tab={tab}
      createTag={createTag}
      handleTab={handleTab}
      user={user}
      tags={tags}
      sendError={sendError}
    />
  );
};

export default ProfileLogic;
