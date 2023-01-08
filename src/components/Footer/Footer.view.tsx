import React from 'react';
import {useTheme} from 'styled-components';
import {Col, Img, Row, Text} from '../../styles/global.styled';
import {getCookie} from '../../utils/cookies';

const FooterView = () => {
  const theme = useTheme() as {palette: {[k: string]: string}};
  const isLogged = getCookie('auth');
  return (
    <Row margin="50px 0" responsive>
      <Col minWidth="200px" gap="10px" alignItems="center">
        <Img src="/logo192.png" width="60px" height="60px" />
        <Text isNoWrap type="h3" size="small" weight="medium">
          Alkoho
          <Text as="span" color={theme.palette.Primary80}>
            Love
          </Text>
        </Text>
      </Col>
      <Col flex="1" gap="10px">
        <Row flex="1" gap="20px">
          <Col flex="1" gap="10px">
            <Text type="h4" size="small" weight="medium">
              O nas
            </Text>
            <Text type="caption" size="medium" weight="regular">
              Aplikacja AlkohoLove powstała w celu ułatwienia wyboru alkoholu
              oraz zarządzania spożytymi trunkami. Wszystkie alkohole w jednym
              miejscu. Zainstaluj aplikację AlkohoLove już teraz!
            </Text>
          </Col>
          <Col flex="1" gap="10px">
            <Text type="h4" size="small" weight="medium">
              Skontaktuj się z nami
            </Text>
            <Text type="caption" size="medium" weight="regular">
              Z wszelkimi ofertami, problemami, lub sugestiami zmiany naszej
              strony lub dodania kolejnego trunku zachęcamy do pisania na nasz
              mail: alkoholove.official@gmail.com
            </Text>
          </Col>
          <Col flex="1" gap="10px">
            <Text type="h4" size="small" weight="medium">
              Linki
            </Text>
            <Row gap="10px">
              <Col gap="10px">
                <Text
                  as="a"
                  href="/"
                  type="caption"
                  size="large"
                  weight="regular"
                  color={theme.palette.Secondary70}
                  isNoWrap>
                  Strona główna
                </Text>
                <Text
                  as="a"
                  href="/alcohols?filters=[]"
                  type="caption"
                  size="large"
                  weight="regular"
                  color={theme.palette.Secondary70}
                  isNoWrap>
                  Alkohole
                </Text>
              </Col>
              <Col gap="10px">
                <Text
                  visible={!isLogged}
                  as="a"
                  href="/login"
                  type="caption"
                  size="large"
                  weight="regular"
                  color={theme.palette.Secondary70}
                  isNoWrap>
                  Zaloguj się
                </Text>
                <Text
                  visible={!isLogged}
                  as="a"
                  href="/register"
                  type="caption"
                  size="large"
                  weight="regular"
                  color={theme.palette.Secondary70}
                  isNoWrap>
                  Zarejestruj się
                </Text>
                <Text
                  visible={!!isLogged}
                  as="a"
                  href="/logout"
                  type="caption"
                  size="large"
                  weight="regular"
                  color={theme.palette.Secondary70}
                  isNoWrap>
                  Wyloguj się
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
        <Text
          as="p"
          type="caption"
          size="small"
          weight="bold"
          color={theme.palette.Grey70}
          isNoWrap>
          Wersja aplikacji: 1.05 (stabilna).
        </Text>
      </Col>
    </Row>
  );
};

export default FooterView;
