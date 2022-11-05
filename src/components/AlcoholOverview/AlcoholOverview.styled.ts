import styled from 'styled-components';
import {Row} from '../../styles/global.styled';

export const ColorBlock = styled.div`
  position: absolute;
  transform: translateY(-50%);
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  top: 50%;
  left: 0;
  width: 70%;
  height: 90%;
  background-color: ${({theme}) => theme.palette.Primary10};
`;

export const Wrapper = styled(Row)`
  min-height: 700px;
`;

export const DescContainer = styled.div`
  z-index: 0;
  overflow-y: scroll;
  max-height: 300px;
`;
