import React from 'react';
import {BtnPrimary, Col, Img, Primary, Row} from '../../styles/global.styled';
import {Circle, H2, H3, H4, LeftSection} from './AdMobile.styled';

const AdMobile = () => {
  const t = 0;
  return (
    <Row padding="50px 0" width="100%" responsive>
      <LeftSection>
        <H2>Już wkrótce!</H2>
        <H3>
          Aplikacja Alkoho<Primary>Love</Primary> już wkrótce będzie dostępna na
          telefony systemem Android.{' '}
        </H3>
        <H4>Wszystkie Twoje ulubione alkohole w jednym miejscu!</H4>
      </LeftSection>
      <Col
        minWidth="350px"
        justifyContent="center"
        alignItems="center"
        position="relative">
        <Img
          src="./img/mobile-mockup-2.png"
          width="220px"
          height="440px"
          zIndex={1}
        />
        <Circle />
      </Col>
    </Row>
  );
};

export default AdMobile;
