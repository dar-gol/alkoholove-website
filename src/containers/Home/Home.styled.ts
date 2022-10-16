import styled from 'styled-components';
import {Row, WithoutScrollbar} from '../../styles/global.styled';

export const Container = styled.article<{
  backgroundColor?: string;
  overflowX?: string;
  overflowY?: string;
  margin?: string;
}>`
  max-width: 1320px;
  padding: 0 80px;
  overflow-x: ${({overflowX}) => overflowX || 'unset'};
  overflow-y: ${({overflowY}) => overflowY || 'unset'};
  background-color: ${({backgroundColor, theme}) =>
    backgroundColor || theme.palette.White};
  margin: ${({margin}) => margin || '0 auto'};
  width: 100%;
  ${WithoutScrollbar}
  @media (max-width: 1200px) {
    max-width: 1140px;
  }

  @media (max-width: 992px) {
    padding: 0 40px;
    max-width: 960px;
  }

  @media (max-width: 768px) {
    max-width: 720px;
    padding: 0 40px;
  }

  @media (max-width: 576px) {
    padding: 0 20px;
    max-width: 540px;
  }
`;

export const ScrollContainer = styled(Row)`
  overflow-x: scroll;
  width: 100%;
  ${WithoutScrollbar}
`;
