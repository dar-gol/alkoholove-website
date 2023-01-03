import React from 'react';
import {useTheme} from 'styled-components';
import {ICategory} from '../../@types/category';
import {ICategoryFilter, IFetchCategoryFilter} from '../../@types/filters';
import {
  BtnPrimary,
  Col,
  Icon,
  Row,
  ScrollContent,
  Text,
} from '../../styles/global.styled';
import {categoryImages} from '../../utils/constant';
import {
  CategoryImage,
  CategoryWrapper,
} from '../CategoryList/CategoryList.styled';
import TextInput from '../Inputs/TextInput';
import {
  CategoryTitle,
  CircleIcon,
  CollapseIcon,
  LightBox,
  SearchContainer,
  SearchView,
  StyledAccordion,
  StyledAccordionItem,
  StyledAccordionItemButton,
  StyledAccordionItemHeading,
  StyledAccordionItemHidden,
  StyledAccordionItemPanel,
  StyledAccordionTextHeading,
  Title,
  Token,
  FilterWrapper,
  LastSearch,
} from './Searcher.styled';
import {getCookie} from '../../utils/cookies';

interface Props {
  show: boolean;
  handleShow: (state?: boolean) => void;
  categories: ICategory[];
  filters: ICategoryFilter | null;
  chooseCategoryFilters: (
    category: string,
    preFilters?: IFetchCategoryFilter[],
    isInit?: boolean,
    isLastSearch?: boolean,
  ) => void;
  setSelectedFilterValue: (filterName: string, filterValue: string) => void;
  total: number;
  search: () => void;
  setPhrase: React.Dispatch<React.SetStateAction<string>>;
  phrase: string;
}

const SearcherView = ({
  show,
  handleShow,
  categories,
  chooseCategoryFilters,
  filters,
  setSelectedFilterValue,
  total,
  search,
  phrase,
  setPhrase,
}: Props) => {
  const theme = useTheme() as {palette: {[k: string]: string}};
  const getCategoryName = () => {
    if (!filters) return 'wszystkie';
    if (filters.value === 'all') return 'wszystkie';
    return filters.value;
  };
  const categoryBlock = () => {
    if (!filters) return null;
    const categoryElements = categories.map(category => {
      if (category.title === 'core') return null;
      const imageName = categoryImages.includes(category.title)
        ? category.title
        : 'other';
      return (
        <CategoryWrapper
          key={category.id}
          active={filters.value === category.title}
          onClick={() => chooseCategoryFilters(category.title)}>
          <CategoryImage
            src={`/img/${imageName}-stock.png`}
            height="120px"
            width="140px"
          />
          <CategoryTitle isCapitalize type="body" size="large" weight="regular">
            {category.title}
          </CategoryTitle>
        </CategoryWrapper>
      );
    });
    categoryElements.unshift(
      <CategoryWrapper
        key="all"
        active={filters.value === 'all'}
        onClick={() => chooseCategoryFilters('all')}>
        <CategoryImage src="/img/other-stock.png" width="140px" />
        <CategoryTitle isCapitalize type="body" size="large" weight="regular">
          Wszystkie
        </CategoryTitle>
      </CategoryWrapper>,
    );
    return categoryElements;
  };
  const getFiltersBlock = () => {
    if (!filters) return null;
    return filters.filters.map(filter => (
      <StyledAccordionItem key={filter.name}>
        <StyledAccordionItemHeading>
          <StyledAccordionItemButton>
            <CircleIcon className="icon-search" />
            <StyledAccordionTextHeading isCapitalize>
              {filter.display_name}
            </StyledAccordionTextHeading>
            <CollapseIcon className="icon-chevron-top" />
          </StyledAccordionItemButton>
        </StyledAccordionItemHeading>
        <StyledAccordionItemPanel>
          {filter.values.map(value => (
            <StyledAccordionItemHidden
              selected={value.selected}
              key={value.value}
              onClick={() => setSelectedFilterValue(filter.name, value.value)}>
              {value.value}
            </StyledAccordionItemHidden>
          ))}
        </StyledAccordionItemPanel>
      </StyledAccordionItem>
    ));
  };
  const getSelectedBlock = () => {
    if (!filters) return null;
    return filters.filters.map(filter =>
      filter.values.map(value => {
        if (!value.selected) return null;
        return (
          <Token
            onClick={() => setSelectedFilterValue(filter.name, value.value)}>
            <Text type="body" weight="regular" size="small">
              {value.value}
            </Text>
            <span className="icon-Exit" />
          </Token>
        );
      }),
    );
  };
  return (
    <>
      <LightBox show={show} />
      <SearchView show={show}>
        <SearchContainer>
          <Row alignItems="center" gap="10px">
            <Title onClick={() => handleShow()}>
              <Icon className="icon-chevron-right" />
            </Title>
            <Title>Wyszukiwarka alkoholi</Title>
          </Row>
          <Row gap="20px" responsive>
            <Col>
              <Row minWidth="350px">
                <TextInput
                  title={`Wyszukaj w kategorii: ${getCategoryName()}`}
                  state=""
                  placeholder="Harnaś"
                  error=""
                  value={phrase}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPhrase(e.target.value)
                  }
                />
              </Row>
              <Row visible={!!getCookie('lastSearch')}>
                <LastSearch
                  onClick={() =>
                    chooseCategoryFilters(
                      filters?.value || '',
                      undefined,
                      true,
                      true,
                    )
                  }>
                  Ostatnio wyszukiwane
                </LastSearch>
              </Row>
            </Col>
            <BtnPrimary width="220px" onClick={search}>
              Ilość wyszukiwań ({total})
            </BtnPrimary>
          </Row>
          <Row gap="5px" flexWrap="wrap">
            {getSelectedBlock()}
          </Row>
          <FilterWrapper flexBasis="100%" overflowY="hidden">
            <Col flex="1" height="100%" gap="10px">
              <Row>
                <Text
                  type="h5"
                  weight="medium"
                  size="large"
                  color={theme.palette.Grey80}>
                  Wybierz kategorię
                </Text>
              </Row>
              <ScrollContent>
                <Row gap="10px" flexWrap="wrap">
                  {categoryBlock()}
                </Row>
              </ScrollContent>
            </Col>
            <Col flex="1" gap="10px">
              <Row>
                <Text
                  type="h5"
                  weight="medium"
                  size="large"
                  color={theme.palette.Grey80}>
                  Wybierz filtry (kategoria: {getCategoryName()})
                </Text>
              </Row>
              <ScrollContent>
                <Row>
                  <StyledAccordion allowMultipleExpanded allowZeroExpanded>
                    {getFiltersBlock()}
                  </StyledAccordion>
                </Row>
              </ScrollContent>
            </Col>
          </FilterWrapper>
        </SearchContainer>
      </SearchView>
    </>
  );
};

export default SearcherView;
