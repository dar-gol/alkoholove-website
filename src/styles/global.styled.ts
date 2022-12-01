import {Link} from 'react-router-dom';
import styled, {css, createGlobalStyle} from 'styled-components';
import {
  Body,
  Caption,
  Footer,
  Heading1Large,
  Heading1Small,
  Heading2,
  Heading2Large,
  Heading2Small,
  Heading3,
  Heading3Large,
  Heading3Small,
  Heading4,
  Heading4Large,
  Heading4Small,
  Heading5Large,
  Heading5Small,
  Heading6Large,
  Heading6Small,
} from './typography.styled';

interface ITitle {
  margin?: string;
}

export const Main = styled.main`
  height: 100%;
  width: 100%;
  padding-top: 100px;
  background-color: ${({theme}) => theme.palette.Grey5};
  position: relative;
  @media (max-width: 768px) {
    padding-top: 160px;
  }
  @media (max-width: 576px) {
    padding-top: 220px;
  }
`;

export const borderRadiusStandard = '20px';

export type BlockType = {
  flex?: string;
  alignItems?: string;
  justifyContent?: string;
  margin?: string;
  padding?: string;
  position?: string;
  gap?: string;
  flexWrap?: string;
  responsive?: boolean;
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  maxWidth?: string;
  maxHeight?: string;
  visible?: boolean;
  backgroundColor?: string;
  flexBasis?: string;
  overflowX?: string;
  overflowY?: string;
  zIndex?: number;
};

type Button = {
  margin?: string;
  padding?: string;
  height?: string;
  width?: string;
};

type ButtonPrimary = {
  isCTA?: boolean;
};

const Btn = css<Button>`
  border: 0;
  border-radius: ${borderRadiusStandard};
  cursor: pointer;
  width: ${({width}) => width || 'unset'};
  height: ${({height}) => height || '48px'};
  margin: ${({margin}) => margin || ''};
  padding: ${({padding}) => padding || ''};
  white-space: nowrap;
  transition: 0.2s;
  z-index: 0;
  position: relative;
  ${Body('medium', 'large')};
  &:disabled {
    pointer-events: none;
  }
  &:focus-visible,
  &:focus {
    outline-color: transparent;
  }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    background-color: #F8F8F8;
    height: 100vh;
    font-family: Roboto;
  }
  :focus-visible {
    outline-color: #e7b99b;
  }
`;

export const Div = styled.section<BlockType>`
  flex: ${({flex}) => flex || 0};
  align-items: ${({alignItems}) => alignItems || 'stretch'};
  justify-content: ${({justifyContent}) => justifyContent || 'flex-start'};
  margin: ${({margin}) => margin || 0};
  padding: ${({padding}) => padding || 0};
  position: ${({position}) => position || 'static'};
  flex-wrap: ${({flexWrap}) => flexWrap || 'nowrap'};
  gap: ${({gap}) => gap || 0};
  width: ${({width}) => width || 'unset'};
  height: ${({height}) => height || 'unset'};
  min-width: ${({minWidth}) => minWidth || 'unset'};
  min-height: ${({minHeight}) => minHeight || 'unset'};
  max-width: ${({maxWidth}) => maxWidth || 'unset'};
  max-height: ${({maxHeight}) => maxHeight || 'unset'};
  display: ${({visible = true}) => (visible ? 'flex' : 'none')};
  background-color: ${({backgroundColor}) => backgroundColor || 'transparent'};
  ${({flexBasis}) => (flexBasis ? `flex-basis: ${flexBasis}` : '')};
  overflow-x: ${({overflowX}) => overflowX || 'visible'};
  overflow-y: ${({overflowY}) => overflowY || 'visible'};
  z-index: ${({zIndex}) => zIndex || 0};
`;

export const Row = styled(Div)`
  ${({responsive}) =>
    responsive &&
    `
      @media (max-width: 992px) {
        flex-direction: column;
        gap: 40px;
      }
  `}
`;

export const Col = styled(Div)`
  flex-direction: column;
`;

export const WithoutScrollbar = css`
  &::-webkit-scrollbar {
    display: none;
  }
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export const Title = styled.h2<ITitle>`
  ${Heading3Large('medium')}
  margin: ${({margin}) => margin || 0};
`;

export const SmallTitle = styled.h4<ITitle>`
  ${Heading4Large('medium')}
  margin: ${({margin}) => margin || 0};
`;

export const SubTitle = styled.p<ITitle>`
  ${Body('medium')}
  margin: ${({margin}) => margin || 0};
  color: ${({theme}) => theme.palette.Grey60};
`;

export const LargeSubTitle = styled.p<ITitle>`
  ${Body('regular', 'large')}
  margin: ${({margin}) => margin || 0};
  color: ${({theme}) => theme.palette.Grey60};
`;

export const BtnPrimary = styled.button<Button & ButtonPrimary>`
  ${Btn}
  color: ${({theme}) => theme.palette.White};
  background-color: ${({theme, isCTA}) =>
    isCTA ? theme.palette.Primary100 : theme.palette.Primary80};
  &:active {
    background-color: ${({theme}) => theme.palette.Primary90};
  }
  &:disabled {
    background-color: ${({theme}) => theme.palette.Primary60};
  }
  &:focus-visible {
    border: 1px solid ${({theme}) => theme.palette.White};
    &:before {
      content: '';
      border-radius: 10px;
      position: absolute;
      z-index: -1;
      top: -2px;
      right: -2px;
      bottom: -2px;
      left: -2px;
      background-color: ${({theme}) => theme.palette.Primary80};
    }
  }
  &:hover {
    box-shadow: 0px 3px 10px
      ${({theme}) => theme.palette.BackgroundTransparency10};
  }
`;

export const BtnSecondary = styled.button<Button>`
  ${Btn}
  color: ${({theme}) => theme.palette.Secondary90};
  background-color: ${({theme}) => theme.palette.Secondary20};
  &:active {
    background-color: ${({theme}) => theme.palette.Secondary30};
    color: ${({theme}) => theme.palette.Secondary100};
  }
  &:disabled {
    background-color: ${({theme}) => theme.palette.Secondary10};
    background-color: ${({theme}) => theme.palette.Secondary60};
  }
  &:focus-visible {
    border: 1px solid ${({theme}) => theme.palette.White};
    &:before {
      content: '';
      border-radius: 10px;
      position: absolute;
      z-index: -1;
      top: -2px;
      right: -2px;
      bottom: -2px;
      left: -2px;
      background-color: ${({theme}) => theme.palette.Secondary60};
    }
  }
  &:hover {
    box-shadow: 0px 1px 5px
      ${({theme}) => theme.palette.BackgroundTransparency10};
  }
`;

export const BtnGhost = styled.button<Button>`
  ${Btn}
  color: ${({theme}) => theme.palette.Grey60};
  background-color: ${({theme}) => theme.palette.Grey5};
  &:active {
    background-color: ${({theme}) => theme.palette.Grey10};
    color: ${({theme}) => theme.palette.Grey80};
  }
  &:disabled {
    color: ${({theme}) => theme.palette.Grey40};
  }
  &:focus-visible {
    border: 1px solid ${({theme}) => theme.palette.White};
    &:before {
      content: '';
      border-radius: 10px;
      position: absolute;
      z-index: -1;
      top: -2px;
      right: -2px;
      bottom: -2px;
      left: -2px;
      background-color: ${({theme}) => theme.palette.White};
    }
  }
  &:hover {
  }
`;

interface IText {
  margin?: string;
  padding?: string;
  width?: string;
  isNoWrap?: boolean;
  isCapitalize?: boolean;
  textTransform?: string;
  type?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body'
    | 'caption'
    | 'footer';
  weight?: 'bold' | 'medium' | 'regular';
  size?: 'large' | 'medium' | 'small';
  color?: string;
  textAlign?: string;
  textDecoration?: string;
  zIndex?: number;
}

const getFontStyle = (
  type: IText['type'],
  weight: IText['weight'],
  size: IText['size'],
) => {
  if (type === 'body') return Body(weight, size);
  if (type === 'caption')
    return Caption(weight, size === 'medium' ? undefined : size);
  if (type === 'footer') return Footer(weight);

  if (type === 'h1' && size === 'large')
    return Heading1Large(weight === 'regular' ? undefined : weight);
  if (type === 'h1' && size === 'small')
    return Heading1Small(weight === 'regular' ? undefined : weight);

  if (type === 'h2' && size === 'large')
    return Heading2Large(weight === 'regular' ? undefined : weight);
  if (type === 'h2' && size === 'small')
    return Heading2Small(weight === 'regular' ? undefined : weight);

  if (type === 'h3' && size === 'large')
    return Heading3Large(weight === 'regular' ? undefined : weight);
  if (type === 'h3' && size === 'small')
    return Heading3Small(weight === 'regular' ? undefined : weight);

  if (type === 'h4' && size === 'large')
    return Heading4Large(weight === 'regular' ? undefined : weight);
  if (type === 'h4' && size === 'small')
    return Heading4Small(weight === 'regular' ? undefined : weight);

  if (type === 'h5' && size === 'large')
    return Heading5Large(weight === 'regular' ? undefined : weight);
  if (type === 'h5' && size === 'small')
    return Heading5Small(weight === 'regular' ? undefined : weight);

  if (type === 'h6' && size === 'large')
    return Heading6Large(weight === 'regular' ? undefined : weight);
  if (type === 'h6' && size === 'small')
    return Heading6Small(weight === 'regular' ? undefined : weight);

  return '';
};

export const Text = styled.p<IText>`
  ${({type, weight, size}) => (type ? getFontStyle(type, weight, size) : '')}
  white-space: ${({isNoWrap = false}) => (isNoWrap ? 'nowrap' : 'wrap')};
  text-transform: ${({textTransform}) => textTransform || 'none'};
  margin: ${({margin}) => margin || '0'};
  padding: ${({padding}) => padding || '0'};
  width: ${({width}) => width || 'unset'};
  color: ${({color, theme}) => color || theme.palette.Grey90};
  text-decoration: ${({textDecoration}) => textDecoration || 'none'};
  text-align: ${({textAlign}) => textAlign || 'left'};
  z-index: ${({zIndex}) => zIndex || 0};
  &::first-letter {
    text-transform: ${({isCapitalize = false}) =>
      isCapitalize ? 'capitalize' : 'none'};
  }
`;

export const Content = styled(Col)`
  margin: 0 50px 50px 50px;
  width: ${({width}) => width || 'unset'};
  border-radius: 20px;
  background-color: ${({theme}) => theme.palette.White};
  overflow: hidden;
`;

export const ScrollContent = styled(Col)`
  overflow-y: scroll;
  overflow-x: auto;
  margin-bottom: 20px;
  flex: 1;
`;

export const PanelContainer = styled.article`
  display: flex;
  height: 100%;
`;

export const ContentWrapper = styled(Row)`
  overflow: hidden;
  justify-content: center;
`;

export const Icon = styled.span<{visible?: boolean; color?: string, fontSize?:string}>`
  display: ${({visible = true}) => (visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: ${({fontSize}) => fontSize || "16px"};
  height: ${({fontSize}) => fontSize || "16px"};
  &:before {
    color: ${({theme, color}) => color || theme.palette.Grey20};
    font-family: icomoon;
    font-size: ${({fontSize}) => fontSize || '16px'};
  }
`;

export const InfoBar = styled(Row)`
  background-color: ${({theme}) => theme.palette.Secondary20};
  color: ${({theme}) => theme.palette.Secondary100};
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  ${Body('regular', 'medium')}
  border-radius: 20px;
  & span::before {
    font-size: 30px;
  }
`;

export const WarnBar = styled(Row)`
  background-color: ${({theme}) => theme.palette.Yellow20};
  color: ${({theme}) => theme.palette.Yellow100};
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  ${Body('regular', 'medium')}
  border-radius: 20px;
  & span::before {
    font-size: 30px;
  }
`;

export const CriticalBar = styled(Row)`
  background-color: ${({theme}) => theme.palette.Red20};
  color: ${({theme}) => theme.palette.Red100};
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  ${Body('regular', 'medium')}
  border-radius: 20px;
  & span::before {
    font-size: 30px;
  }
`;

export const GreenBar = styled(Row)`
  background-color: ${({theme}) => theme.palette.Green20};
  color: ${({theme}) => theme.palette.Green100};
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  ${Body('regular', 'medium')}
  border-radius: 20px;
  & span::before {
    font-size: 30px;
  }
`;

export const ListContainer = styled(Col)`
  position: relative;
  background-color: ${({theme}) => theme.palette.White};
  border-radius: 20px;
  max-width: 1000px;
  width: 100%;
  flex: 1;
  &.hidden {
    display: none;
  }
`;

export const ListWrapper = styled(Col)`
  width: 100%;
  flex: 1;
  overflow: hidden;
`;

export const ContentContainer = styled(Row)`
  margin: 0 50px 50px 50px;
  gap: 20px;
  flex: 1;
  justify-content: center;
`;

export const Primary = styled.span`
  color: ${({theme}) => theme.palette.Primary100};
`;

export const Img = styled.img<{
  width?: string;
  height?: string;
  zIndex?: number;
  borderRadius?: string;
}>`
  width: ${({width}) => width || 'unset'};
  height: ${({height}) => height || 'unset'};
  z-index: ${({zIndex}) => zIndex || 0};
  border-radius: ${({borderRadius}) => borderRadius || '0px'};
`;

export const ImageContainer = styled(Row)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  border-radius: 20px;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.palette.BackgroundTransparency30};
    z-index: 1;
  }
`;

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

export const Form = styled.form`
  min-width: 500px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.White};
  border: 2px solid
    ${({ theme }) =>
      theme.isHighContrast ? theme.palette.Grey80 : "transparent"};
  padding: 80px 80px;
  gap: 20px;
  border-radius: 20px;
  align-items: center;
`;
