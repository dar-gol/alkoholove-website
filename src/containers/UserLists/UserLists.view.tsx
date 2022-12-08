import React from 'react';
import {useParams} from 'react-router-dom';
import {useTheme} from 'styled-components';
import {Alcohols, IAlcohol, ListsAlcohols} from '../../@types/alcohol';
import {IComment} from '../../@types/comment';
import BtnMore from '../../components/BtnMore';
import CreateTagView from '../../components/CreateTag/CreateTag.view';
import FooterView from '../../components/Footer/Footer.view';
import HeaderApollo from '../../components/Header/Header.apollo';
import RemoveTagView from '../../components/RemoveTag';
import TileView from '../../components/Tile/Tile.view';
import {
  BtnSecondary,
  Col,
  Container,
  Row,
  Text,
} from '../../styles/global.styled';
import {getTagOrLists} from '../../utils/utils';
import {IUserListsView} from './UserLists.interface';

const UserListsView = ({
  lists,
  setLimit,
  isOpentag,
  isOpenRemovetag,
  handleOpenTag,
  handleOpenRemoveTag,
  removeTag,
  createTag,
}: IUserListsView) => {
  const {listName} = useParams();
  const theme = useTheme();
  const createTile = (alcohol: IAlcohol, comment?: IComment) => (
    <TileView alcohol={alcohol} key={alcohol.id} review={comment} />
  );
  const createTiles = (alcohols: ListsAlcohols) => {
    const {type} = alcohols;
    if (type === 'standard') return alcohols.alcohols.map(a => createTile(a));
    if (type === 'history')
      return alcohols.alcohols.map(a =>
        createTile({...a.alcohol, searchDate: a.date}),
      );
    if (type === 'rated')
      return alcohols.reviews.map(a => createTile(a.alcohol, a));
    return null;
  };
  return (
    <>
      <HeaderApollo />
      <Col backgroundColor={theme.palette.White} alignItems="center">
        <Container>
          <Row justifyContent="space-between" alignItems="end">
            <Text
              as="h2"
              type="h3"
              size="large"
              weight="medium"
              margin="50px 0 10px 0">
              {getTagOrLists(decodeURIComponent(listName || ''))}: {listName}
            </Text>
            <Row gap="20px">
              <BtnSecondary
                visible={
                  getTagOrLists(decodeURIComponent(listName || '')) === 'Tag'
                }
                padding="0 20px"
                onClick={() => handleOpenTag(true)}>
                Zmień nazwę tagu
              </BtnSecondary>
              <BtnSecondary
                padding="0 20px"
                visible={
                  getTagOrLists(decodeURIComponent(listName || '')) === 'Tag'
                }
                onClick={() => handleOpenRemoveTag(true)}>
                Usuń tag
              </BtnSecondary>
            </Row>
          </Row>
          <Row
            flexWrap="wrap"
            gap="20px"
            justifyContent="center"
            margin="0 0 20px 0">
            {createTiles(lists)}
          </Row>
          <BtnMore
            visible={
              (lists.page_info?.limit || 0) < (lists.page_info?.total || 0)
            }
            total={lists.page_info?.total || 0}
            amount={lists.page_info?.limit || 0}
            onClick={setLimit}
          />
        </Container>
      </Col>
      <Row width="100%" padding="50px 0">
        <Container backgroundColor={theme.palette.Grey5}>
          <FooterView />
        </Container>
      </Row>
      <CreateTagView
        isOpen={isOpentag}
        onClose={() => handleOpenTag(false)}
        createTag={createTag}
        title="Zmień nazwę"
      />
      <RemoveTagView
        isOpen={isOpenRemovetag}
        onClose={() => handleOpenRemoveTag(false)}
        removeTag={removeTag}
      />
    </>
  );
};

export default UserListsView;
