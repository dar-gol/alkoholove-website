import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useTheme} from 'styled-components';
import {Col, Icon, Row, Text} from '../../styles/global.styled';
import {getIcon} from '../../utils/utils';
import {IListsView} from './ProfileComponents.interface';
import {BtnList} from './ProfileComponents.styled';

const ListsView = ({tags, user}: IListsView) => {
  const theme = useTheme();
  const {id} = useParams();
  const navigate = useNavigate();
  const createRow = (title: string, icon: string, url: string) => (
    <BtnList onClick={() => navigate(url)}>
      <Row justifyContent="space-between" padding="0 20px">
        <Row alignItems="center" gap="5px">
          <Icon
            className={getIcon(icon)}
            color={theme.palette.Primary70}
            fontSize="20px"
          />
          <Text
            type="body"
            size="medium"
            weight="medium"
            color={theme.palette.Grey70}>
            {title}
          </Text>
        </Row>
        <Row alignItems="center" gap="5px">
          <Icon
            className="icon-chevron-right"
            color={theme.palette.Grey90}
            fontSize="12px"
          />
        </Row>
      </Row>
    </BtnList>
  );
  return (
    <Col>
      <Text
        as="h5"
        type="h5"
        size="large"
        weight="bold"
        margin="0 0 0 0"
        color={theme.palette.Grey80}>
        Listy
      </Text>
      <Col gap="10px">
        {createRow(
          'Ulubione',
          'favourites',
          `/user/${user.id}/lists/favourites/Ulubione`,
        )}
        {createRow(
          'Lista życzeń',
          'wishlists',
          `/user/${user.id}/lists/wishlists/Lista%20życzeń`,
        )}
        {createRow(
          'Ocenione',
          'rated',
          `/user/${user.id}/lists/rated/Ocenione`,
        )}
        {createRow(
          'Historia wyszukiwań',
          'history',
          `/user/${user.id}/lists/history/Historia%20wyszukiwań`,
        )}
      </Col>
      <Col visible={!id}>
        <Text
          as="h5"
          type="h5"
          size="large"
          weight="bold"
          margin="10px 0"
          color={theme.palette.Grey80}>
          Tagi
        </Text>
        <Col gap="10px">
          {tags.user_tags.map(tag =>
            createRow(
              tag.tag_name,
              'tag',
              `/user/${user.id}/lists/${tag.id}/${tag.tag_name}`,
            ),
          )}
        </Col>
      </Col>
    </Col>
  );
};

export default ListsView;