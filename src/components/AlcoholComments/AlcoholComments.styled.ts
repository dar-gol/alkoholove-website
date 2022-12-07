import styled from 'styled-components';
import {Col} from '../../styles/global.styled';

export const Review = styled(Col)`
  background-color: ${({theme}) => theme.palette.Grey5};
  border-radius: 20px;
  gap: 10px;
`;

export const AddCommentContainer = styled.article`
  position: sticky;
  right: 0;
  top: 100px;
  width: 100%;
  max-height: 600px;
`;

export const ColorBlock = styled.div`
  position: absolute;
  transform: translateY(-50%);
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  top: 50%;
  right: 0;
  width: 70%;
  height: 90%;
  background-color: ${({theme}) => theme.palette.Primary10};
`;

export const AddComment = styled(Col)`
  background-color: ${({theme}) => theme.palette.White};
  border-radius: 40px;
  padding: 40px;
  width: 70%;
  min-height: 70%;
  box-shadow: 0 0 24px 0px rgba(0, 0, 0, 0.05);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 10;
  gap: 20px;
  overflow: hidden;
`;

export const Cap = styled(Col)`
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.palette.BackgroundTransparency60};
`;
