import styled from 'styled-components';
import {Col} from '../../styles/global.styled';
import {
  Heading1Large,
  Heading1Small,
  Heading3Large,
  Heading3Small,
  Heading5Large,
  Heading5Small,
} from '../../styles/typography.styled';

export const LeftSection = styled(Col)`
  flex: 1;
  gap: 40px;
  @media (max-width: 992px) {
    align-items: center;
  }
`;

export const H2 = styled.h2`
  color: ${({theme}) => theme.palette.Grey80};
  ${Heading1Large('bold')};
  margin: 0;
  @media (max-width: 992px) {
    text-align: center;
  }
  @media (max-width: 768px) {
    ${Heading1Small('bold')};
  }
`;
export const H3 = styled.h3`
  color: ${({theme}) => theme.palette.Grey80};
  ${Heading3Large('bold')};
  margin: 0;
  @media (max-width: 992px) {
    text-align: center;
  }
  @media (max-width: 768px) {
    ${Heading3Small('bold')};
  }
`;
export const H4 = styled.h4`
  color: ${({theme}) => theme.palette.Grey60};
  ${Heading5Large('medium')};
  margin: 0;
  @media (max-width: 992px) {
    text-align: center;
  }
  @media (max-width: 768px) {
    ${Heading5Small('medium')};
  }
`;

export const Circle = styled.div`
  background-color: ${({theme}) => theme.palette.Primary80};
  border-radius: 100%;
  width: 350px;
  height: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
`;
