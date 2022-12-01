import React from 'react';
import {useTheme} from 'styled-components';
import {Col, Icon, Text} from '../../styles/global.styled';
import {CommentUsability} from './CommentUsability.styled';

interface IProps {
  amount: number;
  isMark: boolean;
  onClick: () => void;
}

const CommentUsabilityView = ({
  amount = 0,
  isMark = false,
  onClick,
}: IProps) => {
  const theme = useTheme() as {palette: {[k: string]: string}};

  const getColor = () => {
    if (isMark) return theme.palette.Primary80;
    return theme.palette.White;
  };

  return (
    <CommentUsability onClick={onClick}>
      <Text
        type="footer"
        size="large"
        weight="medium"
        color={theme.palette.Grey60}>
        {amount}
      </Text>
      <Icon className="icon-Heart" color={getColor()} cursor="pointer" />
    </CommentUsability>
  );
};

export default CommentUsabilityView;
