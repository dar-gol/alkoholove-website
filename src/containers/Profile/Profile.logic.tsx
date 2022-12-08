import React, {useState} from 'react';
import {IProfileLogic, TabType} from './Profile.interface';
import ProfilView from './Profile.view';

const ProfileLogic = ({user, tags, sendError}: IProfileLogic) => {
  const [tab, setTab] = useState<TabType>('data');
  const handleTab = (nextTab: TabType) => {
    setTab(nextTab);
  };
  return (
    <ProfilView
      tab={tab}
      handleTab={handleTab}
      user={user}
      tags={tags}
      sendError={sendError}
    />
  );
};

export default ProfileLogic;
