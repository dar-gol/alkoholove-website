import styled from 'styled-components';
import {BtnPrimary, Row} from '../../styles/global.styled';
import {Body, Heading3Large} from '../../styles/typography.styled';

export const Nav = styled.nav`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  background-color: ${({theme}) => theme.palette.White};
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: unset;
    gap: 20px;
    padding: 20px 0;
    flex-direction: column;
  }
`;

export const RightSide = styled(Row)`
  margin-right: 50px;
  gap: 30px;
  @media (max-width: 768px) {
    margin-right: 0px;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Logo = styled(Row)`
  margin-left: 50px;
  gap: 20px;
  align-items: center;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;
export const Title = styled.h1`
  margin: 0;
  color: ${({theme}) => theme.palette.Grey80};
  ${Heading3Large('bold')}
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: ${({theme}) => theme.palette.Grey5};
  color: ${({theme}) => theme.palette.Grey30};
  ${Body('regular', 'large')}
  border: none;
  border-radius: 20px;
  width: 220px;
  height: 48px;
  cursor: pointer;
  &:hover {
    box-shadow: none;
  }
`;
