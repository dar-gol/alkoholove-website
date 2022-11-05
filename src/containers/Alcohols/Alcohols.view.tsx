import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useTheme} from 'styled-components';
import {Alcohols} from '../../@types/alcohol';
import {IFilter} from '../../@types/filters';
import {IPageInfo} from '../../@types/pagination';
import FooterView from '../../components/Footer/Footer.view';
import HeaderApollo from '../../components/Header/Header.apollo';
import Stars from '../../components/Stars/Stars.view';
import {
  Col,
  Container,
  Text,
  Row,
  Icon,
  BtnSecondary,
  Img,
  BtnGhost,
} from '../../styles/global.styled';
import {URL} from '../../utils/constant';
import {createImageName, getRate} from '../../utils/utils';
import {
  AlcoholWrapper,
  ImageContainer,
  Content,
  Description,
  DescTitle,
  Filter,
  Name,
  Type,
} from './Alcohols.styled';

interface Props {
  alcohols: Alcohols;
  removeFilter: (prop: string, filter?: string) => void;
  setLimit: () => void;
  page: IPageInfo | undefined;
  filters: {
    filters: IFilter[];
    kind: string;
    phrase: string;
  };
}

const AlcoholsView = ({
  alcohols,
  filters,
  removeFilter,
  setLimit,
  page,
}: Props) => {
  const theme = useTheme() as {palette: {[k: string]: string}};
  const navigate = useNavigate();

  const filterBlock = (
    key: string,
    name: string,
    value: string,
    isFilter?: boolean,
  ) => (
    <Filter
      key={value}
      onClick={() => removeFilter(key, isFilter ? value : undefined)}>
      <Col>
        <Text
          as="p"
          type="body"
          size="small"
          weight="regular"
          isCapitalize
          isNoWrap
          color={theme.palette.Grey50}>
          {name}
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
        filterBlock(filter.name, filter.display_name, filterValue.value, true),
      );
      return blocks;
    });
    const jsxPhrase = filters.phrase
      ? filterBlock('phrase', 'Wyszukiwane słowo:', filters.phrase)
      : null;
    const jsxKind = filterBlock(
      'kind',
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
          <Row
            flexWrap="wrap"
            gap="20px"
            justifyContent="center"
            margin="0 0 20px 0">
            {alcohols.map(alcohol => {
              const tt = 0;
              return (
                <AlcoholWrapper
                  margin="80px 0 0 0"
                  key={alcohol.id}
                  onClick={() => navigate(`/alcohol/${alcohol.barcode[0]}`)}>
                  <ImageContainer zIndex={1}>
                    <Img
                      width="150px"
                      height="175px"
                      src={`${URL.GET_IMAGE}/${createImageName(
                        alcohol.id.toLowerCase(),
                        'md',
                      )}?t=${new Date().getTime()}`}
                    />
                  </ImageContainer>
                  <Content minWidth="300px" height="300px">
                    <Name>{alcohol.name}</Name>
                    <Type>
                      {alcohol.kind}, {alcohol.type}
                    </Type>
                    <DescTitle>Opis:</DescTitle>
                    <Description>{alcohol.description}</Description>
                    <Row flex="1" alignItems="center" justifyContent="center">
                      <Stars
                        rate={getRate(alcohol.rate_value, alcohol.rate_count)}
                      />
                    </Row>
                  </Content>
                </AlcoholWrapper>
              );
            })}
          </Row>
          <Row
            justifyContent="center"
            margin="0 0 20px 0"
            visible={(page?.limit || 0) < (page?.total || 0)}>
            <BtnGhost padding="0 20px" onClick={setLimit}>
              Pokaż więcej
            </BtnGhost>
          </Row>
        </Container>
      </Col>
      <Row width="100%" padding="50px 0">
        <Container backgroundColor={theme.palette.Grey5}>
          <FooterView />
        </Container>
      </Row>
    </>
  );
};

export default AlcoholsView;
