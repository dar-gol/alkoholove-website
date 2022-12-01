import React from 'react';
import InformationView from './Information.view';

interface Props {
  title: string;
  greenContent?: string;
  yellowContent?: string;
  blueContent?: string;
  redContent?: string;
  buttonText?: string;
  href?: string;
}

const InformationLogic = (props: Props) => <InformationView {...props} />;

export default InformationLogic;
