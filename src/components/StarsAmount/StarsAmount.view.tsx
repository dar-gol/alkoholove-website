import React from 'react';
import {useTheme} from 'styled-components';
import {Col, Row, Text} from '../../styles/global.styled';
import {Progress, ProgressStatus} from './StarsAmount.styled';

interface IProps {
  amount: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
}

const StarsAmountView = ({amount}: IProps) => {
  const theme = useTheme() as {palette: {[k: string]: string}};
  const sum = amount[1] + amount[2] + amount[3] + amount[4] + amount[5];
  const getPercentage = (rate: 1 | 2 | 3 | 4 | 5) => {
    const t = 0;
    return (amount[rate] / sum) * 100;
  };
  return (
    <Col flex="1" gap="5px">
      <Text
        type="body"
        size="medium"
        weight="medium"
        color={theme.palette.Grey30}>
        Ilość gwiazdek:
      </Text>
      <Row justifyContent="space-between" alignItems="center" maxHeight="10px">
        <Text
          type="caption"
          size="small"
          weight="bold"
          color={theme.palette.Grey30}>
          5
        </Text>
        <Progress>
          <ProgressStatus width={`${getPercentage(5)}px`} />
        </Progress>
      </Row>
      <Row justifyContent="space-between" alignItems="center" maxHeight="10px">
        <Text
          type="caption"
          size="small"
          weight="bold"
          color={theme.palette.Grey30}>
          4
        </Text>
        <Progress>
          <ProgressStatus width={`${getPercentage(4)}px`} />
        </Progress>
      </Row>
      <Row justifyContent="space-between" alignItems="center" maxHeight="10px">
        <Text
          type="caption"
          size="small"
          weight="bold"
          color={theme.palette.Grey30}>
          3
        </Text>
        <Progress>
          <ProgressStatus width={`${getPercentage(3)}px`} />
        </Progress>
      </Row>
      <Row justifyContent="space-between" alignItems="center" maxHeight="10px">
        <Text
          type="caption"
          size="small"
          weight="bold"
          color={theme.palette.Grey30}>
          2
        </Text>
        <Progress>
          <ProgressStatus width={`${getPercentage(2)}px`} />
        </Progress>
      </Row>
      <Row justifyContent="space-between" alignItems="center" maxHeight="10px">
        <Text
          type="caption"
          size="small"
          weight="bold"
          color={theme.palette.Grey30}>
          1
        </Text>
        <Progress>
          <ProgressStatus width={`${getPercentage(1)}px`} />
        </Progress>
      </Row>
    </Col>
  );
};

export default StarsAmountView;
