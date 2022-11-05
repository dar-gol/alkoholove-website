import React, {useState} from 'react';
import HeaderView from './Header.view';

const HeaderLogic = () => {
  const [showSearcher, setShowSearcher] = useState<boolean>(false);
  const handleSearcherBtn = (state?: boolean) => {
    setShowSearcher(prev => (typeof state === 'undefined' ? !prev : state));
  };
  return (
    <HeaderView
      showSearcher={showSearcher}
      handleSearcherBtn={handleSearcherBtn}
    />
  );
};

export default HeaderLogic;
