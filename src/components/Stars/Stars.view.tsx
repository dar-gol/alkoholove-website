import React from 'react';
import {useTheme} from 'styled-components';
import {Icon, Row} from '../../styles/global.styled';

interface IProps {
  rate: number;
}

const Stars = ({rate}: IProps) => {
  const theme = useTheme() as {palette: {[k: string]: string}};

  return (
    <Row gap="10px">
      <Icon
        className="icon-Star"
        color={rate >= 1 ? theme.palette.Primary80 : undefined}
      />
      <Icon
        className="icon-Star"
        color={rate >= 2 ? theme.palette.Primary80 : undefined}
      />
      <Icon
        className="icon-Star"
        color={rate >= 3 ? theme.palette.Primary80 : undefined}
      />
      <Icon
        className="icon-Star"
        color={rate >= 4 ? theme.palette.Primary80 : undefined}
      />
      <Icon
        className="icon-Star"
        color={rate >= 5 ? theme.palette.Primary80 : undefined}
      />
    </Row>
  );
};

export default Stars;
