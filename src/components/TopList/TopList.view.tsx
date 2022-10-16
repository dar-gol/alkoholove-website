import React from 'react';
import {useTheme} from 'styled-components';
import {Alcohols} from '../../@types/alcohol';
import {Col, Img, Row, Text} from '../../styles/global.styled';
import {API, URL} from '../../utils/constant';
import {createImageName} from '../../utils/utils';
import Stars from '../Stars/Stars.view';
import {
  AlcoholWrapper,
  Content,
  Description,
  DescTitle,
  ImageContainer,
  Name,
  TopListContainer,
  Type,
} from './TopList.styled';

interface IProps {
  alcohols: Alcohols;
}

const TopListView = ({alcohols}: IProps) => {
  const theme = useTheme() as {palette: {[k: string]: string}};
  return (
    <TopListContainer>
      {alcohols.map(alcohol => {
        const tt = 0;
        return (
          <AlcoholWrapper key={alcohol.id}>
            <ImageContainer>
              <Img
                width="150px"
                height="175px"
                src={`${URL.GET_IMAGE}/${createImageName(
                  alcohol.name.toLowerCase(),
                  'md',
                )}?t=${new Date().getTime()}`}
              />
            </ImageContainer>
            <Content minWidth="300px" height="300px">
              <Name>{alcohol.name}</Name>
              <Type>
                {alcohol.kind}, {alcohol.type}
              </Type>
              <DescTitle>Opis:</DescTitle>
              <Description>{alcohol.description}</Description>
              <Row flex="1" alignItems="center" justifyContent="center">
                <Stars rate={5} />
              </Row>
            </Content>
          </AlcoholWrapper>
        );
      })}
      <Row
        minWidth="300px"
        height="400px"
        alignItems="center"
        justifyContent="center">
        <Text
          href="#"
          as="a"
          type="h5"
          size="large"
          weight="medium"
          color={theme.palette.Secondary70}>
          Więcej
        </Text>
      </Row>
    </TopListContainer>
  );
};

export default TopListView;
