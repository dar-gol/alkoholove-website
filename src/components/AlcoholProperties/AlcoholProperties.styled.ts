import styled from 'styled-components';
import {Icon} from '../../styles/global.styled';

export const Circle = styled.div`
  border-radius: 100%;
  background-color: ${({theme}) => theme.palette.Primary70};
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircleIcon = styled(Icon)`
  &:before {
    font-size: 100px;
    line-height: 100px;
  }
`;

export const TupleIcon = styled(Icon)`
  &:before {
    font-size: 32px;
    line-height: 32px;
  }
`;
