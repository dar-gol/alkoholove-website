import React from 'react';
import {useTheme} from 'styled-components';
import {IAlcohol} from '../../@types/alcohol';
import {Col, Container, Icon, Row, Text} from '../../styles/global.styled';
import {CORE, CORE_LIST} from '../../utils/constant';
import {formater, getIcon} from '../../utils/utils';
import {Circle, CircleIcon, Tuple, TupleIcon} from './AlcoholProperties.styled';

interface IProps {
  alcohol: IAlcohol;
}

const AlcoholPropertiesView = ({alcohol}: IProps) => {
  const theme = useTheme() as {palette: {[k: string]: string}};

  const createLeftProp = (key: string, value: string, icon: string) => (
    <Row gap="40px" flex="1">
      <Circle>
        <CircleIcon className={icon} color={theme.palette.White} />
      </Circle>
      <Col justifyContent="center" gap="10px">
        <Text
          as="h3"
          type="h3"
          weight="bold"
          size="large"
          isCapitalize
          isNoWrap
          color={theme.palette.Grey90}>
          {value}
        </Text>
        <Text
          as="h5"
          type="h5"
          weight="medium"
          size="large"
          isCapitalize
          isNoWrap
          color={theme.palette.Grey60}>
          {key}
        </Text>
      </Col>
    </Row>
  );
  const createRightProp = (key: string, value: string, icon: string) => (
    <Row gap="40px" flex="1" justifyContent="end">
      <Col justifyContent="center" gap="10px">
        <Text
          as="h3"
          type="h3"
          weight="bold"
          size="large"
          isCapitalize
          isNoWrap
          textAlign="right"
          color={theme.palette.Grey90}>
          {value}
        </Text>
        <Text
          as="h5"
          type="h5"
          weight="medium"
          size="large"
          isCapitalize
          isNoWrap
          textAlign="right"
          color={theme.palette.Grey60}>
          {key}
        </Text>
      </Col>
      <Circle>
        <CircleIcon className={icon} color={theme.palette.White} />
      </Circle>
    </Row>
  );

  const createProp = () => {
    let site = 'left';
    const coreJSX = CORE.map(({name, display_name}) => {
      if (site === 'left') {
        site = 'right';
        return createLeftProp(
          display_name,
          formater(alcohol[name as keyof typeof alcohol]),
          getIcon(name),
        );
      }
      if (site === 'right') {
        site = 'left';
        return createRightProp(
          display_name,
          formater(alcohol[name as keyof typeof alcohol]),
          getIcon(name),
        );
      }
      return null;
    });
    const additionalJSX = alcohol.additional_properties.map(
      ({display_name, name}) => {
        if (site === 'left') {
          if (!formater(alcohol[name as keyof typeof alcohol])) return null;
          site = 'right';
          return createLeftProp(
            display_name,
            formater(alcohol[name as keyof typeof alcohol]),
            getIcon(name),
          );
        }
        if (site === 'right') {
          if (!formater(alcohol[name as keyof typeof alcohol])) return null;
          site = 'left';
          return createRightProp(
            display_name,
            formater(alcohol[name as keyof typeof alcohol]),
            getIcon(name),
          );
        }
        return null;
      },
    );
    const all = [...coreJSX, ...additionalJSX].filter(el => el !== null);
    return all.map((element, index) => {
      if (index % 2 === 1)
        return (
          <Row padding="50px 0 0 0">
            {all[index - 1]}
            {element}
          </Row>
        );
      return null;
    });
  };

  const createTuple = () =>
    CORE_LIST.map(({display_name, name}) => {
      if (!formater(alcohol[name as keyof typeof alcohol])) return null;
      return (
        <Tuple>
          <Row gap="20px" minWidth="300px">
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
    });

  const isSenses = () =>
    createTuple().reduce((prev, curr) => {
      if (curr !== null) return true;
      return prev;
    }, false);

  return (
    <Col
      position="relative"
      backgroundColor={theme.palette.White}
      padding="0 0 50px 0">
      <Container>
        <Text
          as="h2"
          type="h3"
          size="large"
          weight="medium"
          margin="50px 0 10px 0">
          Cechy alkoholu
        </Text>
        {createProp()}
        <Row visible={isSenses()}>
          <Text
            as="h2"
            type="h3"
            size="large"
            weight="medium"
            margin="50px 0 10px 0">
            Odczucia zmysłów
          </Text>
        </Row>
        {createTuple()}
      </Container>
    </Col>
  );
};

export default AlcoholPropertiesView;
