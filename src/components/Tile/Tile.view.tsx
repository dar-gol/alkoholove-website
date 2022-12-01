import React from 'react';
import {useNavigate} from 'react-router-dom';
import {IAlcohol} from '../../@types/alcohol';
import {Img, Row} from '../../styles/global.styled';
import {URL} from '../../utils/constant';
import {createImageName, getRate} from '../../utils/utils';
import Stars from '../Stars/Stars.view';
import {
  Content,
  Description,
  DescTitle,
  ImageContainer,
  Name,
  Type,
  Wrapper,
} from './Tile.styled';

const TileView = ({alcohol}: {alcohol: IAlcohol}) => {
  const navigate = useNavigate();
  return (
    <Wrapper
      margin="80px 0 0 0"
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
          <Stars rate={getRate(alcohol.rate_value, alcohol.rate_count)} />
        </Row>
      </Content>
    </Wrapper>
  );
};

export default TileView;
