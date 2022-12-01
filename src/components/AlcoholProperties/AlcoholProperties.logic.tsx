import React, {useState} from 'react';
import {IAlcohol} from '../../@types/alcohol';
import AlcoholPropertiesView from './AlcoholProperties.view';

interface IProps {
  alcohol: IAlcohol;
  sendError: (description: string) => void;
}

const AlcoholPropertiesLogic = ({alcohol, sendError}: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSuggestOpen = (open: boolean) => {
    setIsOpen(open);
  };
  return (
    <AlcoholPropertiesView
      alcohol={alcohol}
      isOpen={isOpen}
      setIsOpen={handleSuggestOpen}
      sendError={sendError}
    />
  );
};

export default AlcoholPropertiesLogic;
