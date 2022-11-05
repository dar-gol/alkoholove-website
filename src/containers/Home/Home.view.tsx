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
  Container,
  LargeSubTitle,
  Row,
  ScrollContainer,
  SmallTitle,
  SubTitle,
  Text,
  Title,
} from '../../styles/global.styled';

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
            Lista Alkoholi
          </Text>
        </Container>
        <ScrollContainer>
          <TopListApollo />
        </ScrollContainer>
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
