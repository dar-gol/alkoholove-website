import styled from 'styled-components';
import {Row} from '../../styles/global.styled';
import {Heading3Large} from '../../styles/typography.styled';

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
`;

export const RightSide = styled(Row)`
  margin-right: 50px;
  gap: 30px;
`;

export const Logo = styled(Row)`
  margin-left: 50px;
  gap: 20px;
  align-items: center;
  cursor: pointer;
`;
export const Title = styled.h1`
  margin: 0;
  color: ${({theme}) => theme.palette.Grey80};
  ${Heading3Large('bold')}
`;
