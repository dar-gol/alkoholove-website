import React from 'react';
import {useTheme} from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {
  BtnPrimary,
  Col,
  Primary,
  Row,
  Text,
  Img,
  Container,
  Form,
  WarnBar,
  GreenBar,
  InfoBar,
  CriticalBar,
} from '../../styles/global.styled';
import HeaderApollo from '../../components/Header/Header.apollo';
import FooterView from '../../components/Footer/Footer.view';

interface Props {
  title: string;
  greenContent?: string;
  yellowContent?: string;
  blueContent?: string;
  redContent?: string;
  buttonText?: string;
  href?: string;
}

const InformationView = ({
  title,
  greenContent,
  yellowContent,
  blueContent,
  redContent,
  buttonText,
  href,
}: Props) => {
  const theme = useTheme() as {palette: {[k: string]: string}};
  const navigate = useNavigate();
  return (
    <>
      <HeaderApollo />
      <Col alignItems="center">
        <Container backgroundColor={theme.palette.Grey5}>
          <Col
            justifyContent="center"
            alignItems="center"
            gap="20px"
            padding="50px 0">
            <Form>
              <Row alignItems="center" gap="20px">
                <Img
                  width="50px"
                  height="50px"
                  src="/logo192.png"
                  alt="Logo AlkohoLove"
                />
                <Text
                  as="h1"
                  type="h3"
                  weight="bold"
                  size="large"
                  color={theme.palette.Grey80}>
                  Alkoho<Primary>Love</Primary>
                </Text>
              </Row>
              <Row>
                <Text
                  as="h2"
                  type="h4"
                  weight="bold"
                  size="large"
                  color={theme.palette.Grey80}>
                  {title}
                </Text>
              </Row>
              <CriticalBar maxWidth="300px" visible={!!redContent}>
                <span className="icon-Error" />
                <p>{redContent}</p>
              </CriticalBar>
              <GreenBar maxWidth="300px" visible={!!greenContent}>
                <span className="icon-Success" />
                <p>{greenContent}</p>
              </GreenBar>
              <WarnBar maxWidth="300px" visible={!!yellowContent}>
                <span className="icon-Error" />
                <p>{yellowContent}</p>
              </WarnBar>
              <InfoBar maxWidth="300px" visible={!!blueContent}>
                <span className="icon-Info" />
                <p>{blueContent}</p>
              </InfoBar>
              <Row justifyContent="center" visible={!!buttonText}>
                <BtnPrimary
                  type="submit"
                  padding="0 20px"
                  onClick={() => navigate(href || '')}>
                  {buttonText}
                </BtnPrimary>
              </Row>
            </Form>
          </Col>
        </Container>
      </Col>
      <Row width="100%" padding="50px 0" backgroundColor={theme.palette.White}>
        <Container>
          <FooterView />
        </Container>
      </Row>
    </>
  );
};

export default InformationView;
