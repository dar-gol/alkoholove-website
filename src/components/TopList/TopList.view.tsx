import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useTheme} from 'styled-components';
import {Alcohols} from '../../@types/alcohol';
import {Col, ImageContainer, Img, Row, Text} from '../../styles/global.styled';
import {API, URL} from '../../utils/constant';
import {createImageName} from '../../utils/utils';
import Stars from '../Stars/Stars.view';
import {
  AlcoholWrapper,
  Content,
  Description,
  DescTitle,
  Name,
  TopListContainer,
  Type,
} from './TopList.styled';

interface IProps {
  alcohols: Alcohols;
  increaseLimit: () => void;
}

const TopListView = ({alcohols, increaseLimit}: IProps) => {
  const theme = useTheme() as {palette: {[k: string]: string}};
  const navigate = useNavigate();
  return (
    <TopListContainer>
      {alcohols.map(alcohol => {
        const tt = 0;
        return (
          <AlcoholWrapper
            key={alcohol.id}
            onClick={() => navigate(`/alcohol/${alcohol.barcode[0]}`)}>
            <ImageContainer zIndex={1}>
              <Img
                width="150px"
                height="175px"
                src={`${URL.GET_IMAGE}/${createImageName(
                  alcohol.id.toLowerCase(),
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
        justifyContent="center"
        onClick={increaseLimit}>
        <Text
          onClick={increaseLimit}
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
