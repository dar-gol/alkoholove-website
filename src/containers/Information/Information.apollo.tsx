import React from 'react';
import InformationLogic from './Information.logic';

interface Props {
  title: string;
  greenContent?: string;
  yellowContent?: string;
  blueContent?: string;
  redContent?: string;
  buttonText?: string;
  href?: string;
}

const InformationApollo = (props: Props) => <InformationLogic {...props} />;

export default InformationApollo;
