import styled from 'styled-components';
import {Btn} from '../../styles/global.styled';

export const BtnList = styled.button`
  ${Btn}
  background-color: ${({theme}) => theme.palette.Grey5}
`;
