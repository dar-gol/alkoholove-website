import React from 'react';
import {useTheme} from 'styled-components';
import {Alcohols} from '../../@types/alcohol';
import {IFilter} from '../../@types/filters';
import HeaderApollo from '../../components/Header/Header.apollo';
import {
  Col,
  Container,
  Text,
  Row,
  Icon,
  BtnSecondary,
} from '../../styles/global.styled';
import {Filter} from './Alcohols.styled';

interface Props {
  alcohols: Alcohols;
  filters: {
    filters: IFilter[];
    kind: string;
    phrase: string;
  };
}

const AlcoholsView = ({alcohols, filters}: Props) => {
  const theme = useTheme() as {palette: {[k: string]: string}};

  const filterBlock = (key: string, value: string) => (
    <Filter>
      <Col>
        <Text
          as="p"
          type="body"
          size="small"
          weight="regular"
          isCapitalize
          isNoWrap
          color={theme.palette.Grey50}>
          {key}
        </Text>
        <Text
          as="p"
          type="body"
          size="medium"
          weight="bold"
          isCapitalize
          isNoWrap
          color={theme.palette.Grey80}>
          {value}
        </Text>
      </Col>
      <Icon className="icon-Exit" />
    </Filter>
  );

  const filtersBlock = () => {
    const jsxFilters = filters.filters.map(filter => {
      const blocks = filter.values.map(filterValue =>
        filterBlock(filter.display_name, filterValue.value),
      );
      return blocks;
    });
    const jsxPhrase = filters.phrase
      ? filterBlock('Wyszukiwane słowo:', filters.phrase)
      : null;
    const jsxKind = filterBlock(
      'Rodzaj',
      filters.kind === 'all' ? 'Wszystkie' : filters.kind,
    );
    return [jsxPhrase, jsxKind, ...jsxFilters];
  };

  return (
    <>
      <HeaderApollo />
      <Col backgroundColor={theme.palette.White} alignItems="center">
        <Container>
          <Text
            as="h2"
            type="h3"
            size="large"
            weight="medium"
            margin="50px 0 10px 0">
            Lista alkoholi
          </Text>
          <Row flexWrap="wrap" gap="20px" margin="20px 0">
            {filtersBlock()}
          </Row>
          <Row margin="0 0 20px 0">
            <BtnSecondary padding="0 20px">Dopasuj filtry</BtnSecondary>
          </Row>
        </Container>
      </Col>
    </>
  );
};

export default AlcoholsView;
