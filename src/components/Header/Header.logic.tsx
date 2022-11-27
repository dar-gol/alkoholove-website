import React, {useState} from 'react';
import HeaderView from './Header.view';

interface Props {
  isLogged: boolean;
}

const HeaderLogic = ({isLogged}: Props) => {
  const [showSearcher, setShowSearcher] = useState<boolean>(false);
  const handleSearcherBtn = (state?: boolean) => {
    setShowSearcher(prev => (typeof state === 'undefined' ? !prev : state));
  };
  return (
    <HeaderView
      showSearcher={showSearcher}
      handleSearcherBtn={handleSearcherBtn}
      isLogged={isLogged}
    />
  );
};

export default HeaderLogic;
