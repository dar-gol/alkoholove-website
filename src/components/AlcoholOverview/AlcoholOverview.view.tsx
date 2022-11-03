import React from 'react';
import {useTheme} from 'styled-components';
import {IAlcohol} from '../../@types/alcohol';
import {
  Col,
  Container,
  ImageContainer,
  Img,
  Row,
  Text,
} from '../../styles/global.styled';
import {URL} from '../../utils/constant';
import {createImageName} from '../../utils/utils';
import Stars from '../Stars/Stars.view';
import {ColorBlock, DescContainer, Wrapper} from './AlcoholOverview.styled';

interface IProps {
  alcohol: IAlcohol;
}

const AlcoholOverviewView = ({alcohol}: IProps) => {
  const theme = useTheme() as {palette: {[k: string]: string}};
  return (
    <Col position="relative" backgroundColor={theme.palette.White}>
      <ColorBlock />
      <Container>
        <Wrapper flex="1">
          <Col flex="1" justifyContent="center" gap="50px">
            <Col gap="20px">
              <Text
                as="h2"
                type="h1"
                weight="bold"
                size="large"
                color={theme.palette.Grey80}>
                {alcohol.name}
              </Text>
              <Row gap="10px">
                <Text
                  isCapitalize
                  color={theme.palette.Grey30}
                  as="h3"
                  type="h3"
                  weight="medium"
                  size="large">
                  {alcohol.kind},
                </Text>
                <Text
                  isCapitalize
                  color={theme.palette.Grey30}
                  as="h3"
                  type="h3"
                  weight="medium"
                  size="large">
                  {alcohol.type}
                </Text>
              </Row>
            </Col>
            <DescContainer>
              <Text
                as="h5"
                type="h5"
                weight="medium"
                size="large"
                color={theme.palette.Grey50}>
                {alcohol.description}
              </Text>
            </DescContainer>
            <Row zIndex={0}>
              <Row gap="20px">
                <Text
                  type="h3"
                  weight="medium"
                  size="large"
                  color={theme.palette.Grey80}>
                  {alcohol.rate_value}
                </Text>
                <Stars
                  rate={alcohol.rate_value}
                  onlyStars={false}
                  rateCount={alcohol.rate_count}
                />
              </Row>
            </Row>
          </Col>
          <Col flex="1" justifyContent="center" alignItems="center">
            <Img
              borderRadius="50px"
              width="400px"
              src={`${URL.GET_IMAGE}/${createImageName(
                alcohol.id.toLowerCase(),
                'md',
              )}?t=${new Date().getTime()}`}
            />
          </Col>
        </Wrapper>
      </Container>
    </Col>
  );
};

export default AlcoholOverviewView;
