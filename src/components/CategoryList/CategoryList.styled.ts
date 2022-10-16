import styled from 'styled-components';
import {Heading3Large} from '../../styles/typography.styled';
import {Img, Row} from '../../styles/global.styled';

export const CategoryWrapper = styled(Row)`
  position: relative;
  cursor: pointer;
  transition: 0.1s;
  border-radius: 20px;
  &:hover {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
    &:before {
      background-color: ${({theme}) => theme.palette.BackgroundTransparency50};
    }
  }
  &:before {
    content: '';
    transition: 0.1s;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({theme}) => theme.palette.BackgroundTransparency40};
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 20px;
  }
`;

export const MoreWrapper = styled(Row)`
  min-width: 300px;
  height: 230px;
`;

export const CategoryImage = styled(Img)`
  border-radius: 20px;
`;
export const CategoryTitle = styled.h5`
  ${Heading3Large('bold')};
  color: ${({theme}) => theme.palette.White};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  z-index: 2;
  text-transform: capitalize;
`;
