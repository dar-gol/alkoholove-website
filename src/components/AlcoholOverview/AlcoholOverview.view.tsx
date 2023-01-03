import React from 'react';
import {useTheme} from 'styled-components';
import {IAlcohol} from '../../@types/alcohol';
import {AlcoholLists, IdentifyTag} from '../../@types/Lists';
import {Tokens} from '../../@types/user';
import {Col, Container, Icon, Img, Row, Text} from '../../styles/global.styled';
import {URL} from '../../utils/constant';
import {getCookie} from '../../utils/cookies';
import {createImageName, getRate} from '../../utils/utils';
import AlcoholListModalView from '../AlcoholListModal/AlcoholListModal.view';
import CreateTagView from '../CreateTag/CreateTag.view';
import Stars from '../Stars/Stars.view';
import {
  ColorBlock,
  DescContainer,
  PlusBtn,
  Wrapper,
} from './AlcoholOverview.styled';

interface IProps {
  alcohol: IAlcohol;
  tags: IdentifyTag[];
  lists: AlcoholLists;
  isOpenLists: boolean;
  handleModalLists: (open: boolean) => void;
  manageList: (listId: string, isAdd: boolean) => void;
  createTag: (tag_name: string) => void;
  isOpenTag: boolean;
  handleModalTag: (open: boolean) => void;
}

const AlcoholOverviewView = ({
  alcohol,
  tags,
  lists,
  manageList,
  isOpenLists,
  handleModalLists,
  createTag,
  isOpenTag,
  handleModalTag,
}: IProps) => {
  const theme = useTheme();
  const tokens = getCookie<Tokens>('auth');
  return (
    <Col position="relative" backgroundColor={theme.palette.White}>
      <ColorBlock />
      <Container>
        <Wrapper flex="1">
          <Col flex="1" justifyContent="center" gap="50px">
            <Col gap="20px">
              <Text
                as="h2"
                type="h1"
                weight="bold"
                size="large"
                color={theme.palette.Grey80}>
                {alcohol.name}
              </Text>
              <Row gap="10px">
                <Text
                  isCapitalize
                  color={theme.palette.Grey30}
                  as="h3"
                  type="h3"
                  weight="medium"
                  size="large">
                  {alcohol.kind},
                </Text>
                <Text
                  isCapitalize
                  color={theme.palette.Grey30}
                  as="h3"
                  type="h3"
                  weight="medium"
                  size="large">
                  {alcohol.type}
                </Text>
              </Row>
            </Col>
            <DescContainer>
              <Text
                type="body"
                weight="regular"
                size="large"
                color={theme.palette.Grey50}>
                {alcohol.description}
              </Text>
            </DescContainer>
            <Row zIndex={0}>
              <Row gap="20px">
                <Text
                  type="h3"
                  weight="medium"
                  size="large"
                  color={theme.palette.Grey80}>
                  {getRate(alcohol.rate_value, alcohol.rate_count)}
                </Text>
                <Stars
                  rate={getRate(alcohol.rate_value, alcohol.rate_count)}
                  onlyStars={false}
                  rateCount={alcohol.rate_count}
                />
              </Row>
            </Row>
          </Col>
          <Col
            flex="1"
            justifyContent="center"
            alignItems="center"
            position="relative">
            <Img
              borderRadius="50px"
              width="400px"
              src={`${URL.GET_IMAGE}/${createImageName(
                alcohol.id.toLowerCase(),
                'md',
              )}`}
            />
            <PlusBtn onClick={() => handleModalLists(true)} visible={!!tokens}>
              Zarządzaj alkoholem
            </PlusBtn>
          </Col>
        </Wrapper>
      </Container>
      <AlcoholListModalView
        isOpen={isOpenLists}
        onClose={() => handleModalLists(false)}
        tags={tags}
        lists={lists}
        manageList={manageList}
        openTagModal={() => handleModalTag(true)}
      />
      <CreateTagView
        isOpen={isOpenTag}
        onClose={() => handleModalTag(false)}
        createTag={createTag}
      />
    </Col>
  );
};

export default AlcoholOverviewView;
