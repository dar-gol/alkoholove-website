import styled, {css} from 'styled-components';
import {Body} from './typography.styled';

export type ButtonType = 'Primary' | 'Secondary' | 'Ghost' | 'Critical';

export type ButtonProps = {
  margin?: string;
  padding?: string;
  height?: string;
  width?: string;
  visible?: boolean;
  isCTA?: boolean;
  buttonType: ButtonType;
};

export const Standard = css<ButtonProps>`
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  width: ${({width}) => width || 'unset'};
  height: ${({height}) => height || '48px'};
  margin: ${({margin}) => margin || ''};
  padding: ${({padding}) => padding || ''};
  white-space: nowrap;
  transition: 0.2s;
  z-index: 0;
  position: relative;
  display: ${({visible = true}) => (visible ? 'block' : 'none')};
  ${Body('medium', 'large')};
  &:disabled {
    pointer-events: none;
  }
  &:focus-visible,
  &:focus {
    outline-color: transparent;
  }
`;

const Primary = css<ButtonProps>`
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

const Secondary = css<ButtonProps>`
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

const Ghost = css`
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
`;

const Critical = css`
  color: ${({theme}) => theme.palette.White};
  background-color: ${({theme}) => theme.palette.Red80};
  &:active {
    background-color: ${({theme}) => theme.palette.Red100};
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
      background-color: ${({theme}) => theme.palette.Red100};
    }
  }
`;

const getSpecificButton = (type: ButtonType) => {
  if (type === 'Primary') return Primary;
  if (type === 'Secondary') return Secondary;
  if (type === 'Ghost') return Ghost;
  return Critical;
};

export const Button = styled.button<ButtonProps>`
  ${Standard};
  ${({buttonType}) => getSpecificButton(buttonType)}
`;
