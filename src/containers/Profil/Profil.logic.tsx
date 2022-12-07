import React, {useState} from 'react';
import {IProfilLogic, TabType} from './Profil.interface';
import ProfilView from './Profil.view';

const ProfilLogic = ({user, tags, sendError}: IProfilLogic) => {
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

export default ProfilLogic;
