import React, {useState} from 'react';
import HeaderView from './Header.view';

const HeaderLogic = () => {
  const [showSearcher, setShowSearcher] = useState<boolean>(false);
  const handleSearcherBtn = () => {
    setShowSearcher(prev => !prev);
  };
  return (
    <HeaderView
      showSearcher={showSearcher}
      handleSearcherBtn={handleSearcherBtn}
    />
  );
};

export default HeaderLogic;
