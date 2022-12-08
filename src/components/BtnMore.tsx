import React from 'react';
import styled, {useTheme} from 'styled-components';
import {BtnGhost, Col, Text} from '../styles/global.styled';

const Btn = styled(BtnGhost)`
  background-color: ${({theme}) => theme.palette.White};
  color: ${({theme}) => theme.palette.Secondary80};
  height: 38px;
`;

interface IBtnMore {
  elementsName?: string;
  total: number;
  amount: number;
  onClick: () => void;
  visible: boolean;
}

const BtnMore = ({
  visible,
  elementsName = 'produktów',
  total,
  amount,
  onClick,
}: IBtnMore) => {
  const theme = useTheme();
  return (
    <Col alignItems="center" visible={visible} margin="0 0 20px 0">
      <Btn onClick={onClick}>Pokaż więcej</Btn>
      <Text
        type="caption"
        size="large"
        weight="medium"
        color={theme.palette.Grey60}>
        ({amount} z {total} {elementsName})
      </Text>
    </Col>
  );
};

export default BtnMore;
