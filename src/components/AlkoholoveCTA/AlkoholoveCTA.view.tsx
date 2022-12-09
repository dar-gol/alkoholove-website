import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useTheme} from 'styled-components';
import {BtnPrimary, Col, Img, Text} from '../../styles/global.styled';
import {
  Advantage,
  AdvantageTextWrapper,
  CTABlock,
} from './AlkoholoveCTA.styled';

const AlkoholoveCTAView = () => {
  const theme = useTheme() as {palette: {[k: string]: string}};
  const navigate = useNavigate();
  return (
    <Col gap="50px">
      <Text
        type="h1"
        weight="bold"
        size="large"
        textAlign="center"
        margin="0 0 50px 0">
        Skorzystaj z pełni możliwości
      </Text>
      <CTABlock justifyContent="center" gap="40px">
        <Col flex="1" gap="100px">
          <Advantage>
            <AdvantageTextWrapper>
              <Text
                type="body"
                size="medium"
                weight="regular"
                color={theme.palette.Grey60}
                textAlign="center"
                zIndex={2}
                width="100%">
                Skanuj w telefonie a przeglądaj na desktopie!
              </Text>
            </AdvantageTextWrapper>
          </Advantage>
          <Advantage>
            <AdvantageTextWrapper>
              <Text
                type="body"
                size="medium"
                weight="regular"
                color={theme.palette.Grey60}
                textAlign="center"
                zIndex={2}
                width="100%">
                Skorzystaj z możliwosci rekomendacji.
              </Text>
            </AdvantageTextWrapper>
          </Advantage>
          <Advantage>
            <AdvantageTextWrapper>
              <Text
                type="body"
                size="medium"
                weight="regular"
                color={theme.palette.Grey60}
                textAlign="center"
                zIndex={2}
                width="100%">
                Pokaż znajomym co lubisz.
              </Text>
            </AdvantageTextWrapper>
          </Advantage>
        </Col>
        <Col gap="40px" justifyContent="center" alignItems="center">
          <Img
            src="./logo192.png"
            alt="Logo AlkohoLove"
            width="120px"
            height="120px"
          />
          <BtnPrimary width="220px" isCTA onClick={() => navigate('/register')}>
            Zarejestruj się
          </BtnPrimary>
        </Col>
        <Col flex="1" gap="100px">
          <Advantage>
            <AdvantageTextWrapper>
              <Text
                type="body"
                size="medium"
                weight="regular"
                color={theme.palette.Grey60}
                textAlign="center"
                zIndex={2}
                width="100%">
                Dane dostepne na każdym urzadzeniu.
              </Text>
            </AdvantageTextWrapper>
          </Advantage>
          <Advantage>
            <AdvantageTextWrapper>
              <Text
                type="body"
                size="medium"
                weight="regular"
                color={theme.palette.Grey60}
                textAlign="center"
                zIndex={2}
                width="100%">
                Możliwosc obserwowania znajomych.
              </Text>
            </AdvantageTextWrapper>
          </Advantage>
          <Advantage>
            <AdvantageTextWrapper>
              <Text
                type="body"
                size="medium"
                weight="regular"
                color={theme.palette.Grey60}
                textAlign="center"
                zIndex={2}
                width="100%">
                Zapomnij o zle wybranym alkoholu.
              </Text>
            </AdvantageTextWrapper>
          </Advantage>
        </Col>
      </CTABlock>
    </Col>
  );
};

export default AlkoholoveCTAView;
