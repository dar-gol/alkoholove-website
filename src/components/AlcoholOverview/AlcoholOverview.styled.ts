import styled from 'styled-components';
import {BtnPrimary, Row} from '../../styles/global.styled';

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

export const PlusBtn = styled(BtnPrimary)`
  width: 64px;
  height: 64px;
  display: ${({visible = true}) => (visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 30px
    ${({theme}) => theme.palette.BackgroundTransparency20};
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
`;
