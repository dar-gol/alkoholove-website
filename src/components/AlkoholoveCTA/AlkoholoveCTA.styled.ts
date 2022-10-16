import styled from 'styled-components';
import {Col, Row} from '../../styles/global.styled';

export const CTABlock = styled(Row)`
  justify-content: center;
  gap: 40px;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Advantage = styled(Col)`
  position: relative;
  &:before {
    content: '';
    width: 80px;
    height: 80px;
    background-color: ${({theme}) => theme.palette.Primary80};
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const AdvantageTextWrapper = styled(Row)`
  background-color: ${({theme}) => theme.palette.White};
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  z-index: 1;
  @media (max-width: 992px) and (min-width: 768px) {
    align-self: center;
    padding: 10px 20px;
  }
`;
