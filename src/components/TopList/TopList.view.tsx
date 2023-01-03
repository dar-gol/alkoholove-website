import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useTheme} from 'styled-components';
import {Alcohols} from '../../@types/alcohol';
import {Btn, ImageContainer, Img, Row, Text} from '../../styles/global.styled';
import {URL} from '../../utils/constant';
import {createImageName, getRate} from '../../utils/utils';
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
import {Button} from '../../styles/button.styled';

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
                )}`}
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
                <Stars
                  rate={getRate(alcohol.rate_value, alcohol.rate_count)}
                  onlyStars
                  rateCount={alcohol.rate_count}
                />
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
        <Button buttonType="Ghost" onClick={increaseLimit} padding="0 20px">
          Więcej alkoholi
        </Button>
      </Row>
    </TopListContainer>
  );
};

export default TopListView;
