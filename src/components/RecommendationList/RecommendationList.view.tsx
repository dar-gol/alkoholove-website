import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Alcohols} from '../../@types/alcohol';
import {ImageContainer, Img, Row} from '../../styles/global.styled';
import { URL} from '../../utils/constant';
import {createImageName} from '../../utils/utils';
import Stars from '../Stars/Stars.view';
import {
  AlcoholWrapper,
  Content,
  Description,
  DescTitle,
  Name,
  RecommendationListContainer,
  Type,
} from './RecommendationList.styled';

interface RecommendationListViewProps {
  alcohols: Alcohols;
}

export const RecommendationListView: React.FC<RecommendationListViewProps> = ({alcohols}) => {
  const navigate = useNavigate();
  return (
    <RecommendationListContainer>
      {alcohols.map(alcohol => (
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
                <Stars rate={5} />
              </Row>
            </Content>
          </AlcoholWrapper>
        )
      )}
    </RecommendationListContainer>
  );
};
