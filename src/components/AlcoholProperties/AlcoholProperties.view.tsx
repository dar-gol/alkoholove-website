import React from 'react';
import {useTheme} from 'styled-components';
import {IAlcohol} from '../../@types/alcohol';
import {Tokens} from '../../@types/user';
import {
  BtnSecondary,
  Col,
  Container,
  Icon,
  InfoBar,
  Row,
  Text,
  Tuple,
} from '../../styles/global.styled';
import {CORE, CORE_LIST} from '../../utils/constant';
import {getCookie} from '../../utils/cookies';
import {formater, getIcon} from '../../utils/utils';
import SuggestChanges from '../SuggestChanges/SuggestChanges.view';
import {Circle, CircleIcon, TupleIcon} from './AlcoholProperties.styled';

interface IProps {
  alcohol: IAlcohol;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  sendError: (description: string) => void;
}

const AlcoholPropertiesView = ({
  alcohol,
  isOpen,
  setIsOpen,
  sendError,
}: IProps) => {
  const theme = useTheme() as {palette: {[k: string]: string}};
  const tokens = getCookie<Tokens>('auth');
  const createTuple = (name: string, display_name: string) => {
    if (!formater(alcohol[name as keyof typeof alcohol])) return null;
    return (
      <Tuple key={name}>
        <Row gap="20px" minWidth="300px" alignItems="center">
          <TupleIcon className={getIcon(name)} />
          <Text
            as="h5"
            type="h5"
            weight="medium"
            size="large"
            isCapitalize
            isNoWrap
            textAlign="right"
            color={theme.palette.Grey90}>
            {display_name}
          </Text>
        </Row>
        <Text
          as="h5"
          type="h5"
          weight="medium"
          size="large"
          isCapitalize
          isNoWrap
          textAlign="right"
          color={theme.palette.Grey60}>
          {formater(alcohol[name as keyof typeof alcohol])}
        </Text>
      </Tuple>
    );
  };
  const createProps = () => {
    const coreJSX = CORE.map(({name, display_name}) =>
      createTuple(name, display_name),
    );
    const additionalJSX = alcohol.additional_properties.map(
      ({display_name, name}) => createTuple(name, display_name),
    );
    return [...coreJSX, ...additionalJSX].filter(el => el !== null);
  };

  const createSenses = () =>
    CORE_LIST.map(({display_name, name}) => createTuple(name, display_name));

  const isSenses = () =>
    createSenses().reduce((prev, curr) => {
      if (curr !== null) return true;
      return prev;
    }, false);

  return (
    <Col position="relative" backgroundColor={theme.palette.White}>
      <Container>
        <Text
          as="h2"
          type="h3"
          size="large"
          weight="medium"
          margin="50px 0 50px 0">
          Cechy alkoholu
        </Text>
        {createProps()}
        <Row visible={isSenses()}>
          <Text
            as="h2"
            type="h3"
            size="large"
            weight="medium"
            margin="50px 0 50px 0">
            Odczucia zmysłów
          </Text>
        </Row>
        {createSenses()}
        <Row
          margin="20px 0 0 0"
          gap="20px"
          alignItems="center"
          visible={!!tokens}>
          <InfoBar minWidth="350px">
            <span className="icon-Info" />
            <p>Jeśli jakieś dane są niepoprawne naciśnij przycisk obok.</p>
          </InfoBar>
          <BtnSecondary width="200px" onClick={() => setIsOpen(true)}>
            Zaproponuj zmiany
          </BtnSecondary>
        </Row>
      </Container>
      <SuggestChanges
        alcohol={alcohol}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        sendError={sendError}
      />
    </Col>
  );
};

export default AlcoholPropertiesView;
