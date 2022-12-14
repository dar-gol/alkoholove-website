import React from 'react';
import {useTheme} from 'styled-components';
import {Col, Icon, Row, Text} from '../../styles/global.styled';

interface IProps {
  rate: number;
  setRate?: (rate: number) => void;
  onlyStars?: boolean;
  rateCount?: number;
}

const Stars = ({rate, onlyStars = true, rateCount = 0, setRate}: IProps) => {
  const theme = useTheme() as {palette: {[k: string]: string}};
  const cursor = setRate ? 'pointer' : 'default';

  const onRate = (number: number) => {
    if (setRate) setRate(number);
  };

  return (
    <Col gap="0">
      <Row gap="10px">
        <Icon
          cursor={cursor}
          onClick={() => onRate(1)}
          className="icon-Star"
          color={rate >= 1 ? theme.palette.Primary80 : theme.palette.Grey20}
        />
        <Icon
          cursor={cursor}
          onClick={() => onRate(2)}
          className="icon-Star"
          color={rate >= 2 ? theme.palette.Primary80 : theme.palette.Grey20}
        />
        <Icon
          cursor={cursor}
          onClick={() => onRate(3)}
          className="icon-Star"
          color={rate >= 3 ? theme.palette.Primary80 : theme.palette.Grey20}
        />
        <Icon
          cursor={cursor}
          onClick={() => onRate(4)}
          className="icon-Star"
          color={rate >= 4 ? theme.palette.Primary80 : theme.palette.Grey20}
        />
        <Icon
          cursor={cursor}
          onClick={() => onRate(5)}
          className="icon-Star"
          color={rate >= 5 ? theme.palette.Primary80 : theme.palette.Grey20}
        />
      </Row>
      <Row visible={!onlyStars}>
        <Text
          type="body"
          weight="regular"
          size="small"
          isNoWrap
          color={theme.palette.Grey40}>
          na podstawie {rateCount} recenzji.
        </Text>
      </Row>
    </Col>
  );
};

export default Stars;
