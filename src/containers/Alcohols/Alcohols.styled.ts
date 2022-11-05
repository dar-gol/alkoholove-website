import styled from 'styled-components';
import {Col, Row} from '../../styles/global.styled';
import {
  Body,
  Heading5Large,
  Heading6Large,
} from '../../styles/typography.styled';

export const Filter = styled.button`
  display: flex;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  gap: 5px;
  padding: 5px 20px;
  background-color: ${({theme}) => theme.palette.Grey5};
  align-items: center;
`;

export const Content = styled(Col)`
  min-width: 300px;
  height: 100%;
  background-color: ${({theme}) => theme.palette.Grey5};
  border-radius: 20px;
  padding: 120px 20px 20px 20px;
`;

export const Name = styled.h4`
  color: ${({theme}) => theme.palette.Grey90};
  margin: 0;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  ${Heading5Large('medium')}
`;

export const Type = styled.p`
  margin: 0;
  text-align: center;
  color: ${({theme}) => theme.palette.Grey30};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  ${Body('regular', 'medium')}
`;

export const DescTitle = styled.p`
  color: ${({theme}) => theme.palette.Grey80};
  margin: 0;
  margin-top: 10px;
  ${Heading6Large('medium')}
`;

export const Description = styled.p`
  color: ${({theme}) => theme.palette.Grey40};
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  height: 120px;
  ${Body('regular', 'small')}
`;

export const AlcoholWrapper = styled(Row)`
  min-width: 300px;
  height: 400px;
  justify-content: end;
  position: relative;
  align-items: center;
  cursor: pointer;

  ${Content} {
    transition: 0.1s;
  }

  &:hover {
    ${Content} {
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const AlcoholsContainer = styled(Row)`
  padding: 50px;
  width: 100%;
  gap: 50px;
  background-color: ${({theme}) => theme.palette.White};
`;

export const ImageContainer = styled(Row)`
  top: -75px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
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
