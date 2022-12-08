import styled from 'styled-components';
import {BtnGhost, Col} from '../../styles/global.styled';

export const BtnTab = styled(BtnGhost)<{active: boolean}>`
  background-color: ${({theme, active}) =>
    active ? theme.palette.White : theme.palette.Grey5};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  &:hover {
    background-color: ${({theme}) => theme.palette.Grey1};
  }
`;

export const Content = styled(Col)`
  border-radius: 20px;
  padding: 20px;
  border-top-left-radius: 0;
  background-color: ${({theme}) => theme.palette.White};
`;

export const Wrapper = styled(Col)`
  min-width: 600px;
`;
