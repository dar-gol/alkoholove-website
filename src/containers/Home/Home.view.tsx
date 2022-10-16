import React from 'react';
import {useTheme} from 'styled-components';
import AdMobile from '../../components/AdMobile/AdMobile.view';
import AlkoholoveCTAView from '../../components/AlkoholoveCTA/AlkoholoveCTA.view';
import CategoryListApollo from '../../components/CategoryList/CategoryList.apollo';
import FooterView from '../../components/Footer/Footer.view';
// eslint-disable-next-line import/no-unresolved
import HeaderApollo from '../../components/Header/Header.apollo';
import TopListApollo from '../../components/TopList/TopList.apollo';
import {
  BtnSecondary,
  Col,
  LargeSubTitle,
  Row,
  SmallTitle,
  SubTitle,
  Text,
  Title,
} from '../../styles/global.styled';
import {Container, ScrollContainer} from './Home.styled';

const HomeView = () => {
  const theme = useTheme() as {palette: {[k: string]: string}};
  return (
    <>
      <HeaderApollo />
      <Container backgroundColor={theme.palette.Grey5}>
        <AdMobile />
      </Container>
      <Col backgroundColor={theme.palette.White} alignItems="center">
        <Container>
          <Text
            as="h2"
            type="h3"
            size="large"
            weight="medium"
            margin="50px 0 10px 0">
            Top lista
          </Text>
          <Text type="body" size="large" weight="medium" margin="0 0 20px 0">
            Lista alkoholi najczęściej komentowanych.
          </Text>
        </Container>
        <ScrollContainer>
          <TopListApollo />
        </ScrollContainer>
        <Container margin="0 auto 50px auto">
          <Text
            as="h4"
            type="h4"
            weight="medium"
            size="large"
            margin="0 0 10px 0">
            Top lista to nadal za mało?
          </Text>
          <BtnSecondary width="220px">Szukaj alkoholu</BtnSecondary>
        </Container>
      </Col>
      <Col backgroundColor={theme.palette.Grey5} alignItems="center">
        <Container backgroundColor={theme.palette.Grey5}>
          <Text
            type="h3"
            size="large"
            weight="medium"
            margin="50px 0 10px 0"
            as="h2">
            Kategorie
          </Text>
          <Text
            type="body"
            weight="medium"
            size="large"
            margin="0 0 20px 0"
            color={theme.palette.Grey60}
            as="h4">
            Lista najpopularniejszych kategorii alkohol.
          </Text>
        </Container>
        <ScrollContainer>
          <CategoryListApollo />
        </ScrollContainer>
        <Container margin="0 0 50px 0" backgroundColor={theme.palette.Grey5}>
          <Text
            as="h3"
            type="h4"
            size="large"
            weight="medium"
            margin="0 0 10px 0">
            Nie znalazłes kategorii której szukałes? Pełną listę kategorii
            znajdziesz{' '}
            <Text href="#" as="a" color={theme.palette.Secondary70}>
              tutaj
            </Text>
            .
          </Text>
          <Text
            type="body"
            weight="regular"
            size="large"
            margin="0 0 50px 0"
            color={theme.palette.Grey60}>
            Jesli nie posiadamy kategorii której potrzebujesz{' '}
            <Text href="#" as="a" color={theme.palette.Secondary70}>
              napisz do nas
            </Text>
            .
          </Text>
        </Container>
        <Row
          width="100%"
          backgroundColor={theme.palette.White}
          padding="50px 0">
          <Container>
            <AlkoholoveCTAView />
          </Container>
        </Row>
        <Row width="100%" padding="50px 0">
          <Container backgroundColor={theme.palette.Grey5}>
            <FooterView />
          </Container>
        </Row>
      </Col>
    </>
  );
};

export default HomeView;
