import styled from 'styled-components';
import {Heading3Large} from '../../styles/typography.styled';
import {Img, Row} from '../../styles/global.styled';

export const CategoryWrapper = styled.div<{active?: boolean}>`
  position: relative;
  cursor: pointer;
  transition: 0.1s;
  border-radius: 20px;
  &:hover {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
    &:before {
      background-color: #00000066;
    }
  }
  &:before {
    content: '';
    transition: 0.1s;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({theme, active}) =>
      active ? '#47474A33' : '#47474A66'};
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
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;
export const CategoryTitle = styled.h5`
  ${Heading3Large('bold')};
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: capitalize;
  margin: 0;
  z-index: 2;
`;
