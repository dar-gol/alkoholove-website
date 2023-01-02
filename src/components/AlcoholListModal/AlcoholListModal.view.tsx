import React from 'react';
import {useTheme} from 'styled-components';
import {AlcoholLists, IdentifyTag} from '../../@types/Lists';
import {BtnPrimary, Col, Row, Text} from '../../styles/global.styled';
import Toggle from '../Inputs/Toggle';
import Modal from '../modal/Modal';
import {Wrapper} from './AlcoholListModal.styled';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  tags: IdentifyTag[];
  lists: AlcoholLists;
  manageList: (listId: string, isAdd: boolean) => void;
  openTagModal: (open: boolean) => void;
}

const AlcoholListModalView = ({
  tags,
  lists,
  manageList,
  isOpen,
  onClose,
  openTagModal,
}: Props) => {
  const theme = useTheme();
  const createTags = () =>
    tags.map(tag => {
      const value = lists.alcohol_tags.includes(tag.id);
      return (
        <Toggle
          key={tag.id}
          value={value}
          onClick={() => manageList(tag.id, !value)}
          title={tag.tag_name}
          color={theme.palette.Grey5}
          leftColor={theme.palette.Grey30}
          rightColor={theme.palette.Primary60}
        />
      );
    });
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Wrapper gap="10px">
        <Col gap="5px">
          <Text
            as="h4"
            type="h5"
            weight="bold"
            size="large"
            color={theme.palette.Grey90}>
            Listy
          </Text>
          <Toggle
            value={lists.is_in_favourites}
            onClick={() => manageList('favourites', !lists.is_in_favourites)}
            title="Ulubione"
            color={theme.palette.Grey5}
            leftColor={theme.palette.Grey30}
            rightColor={theme.palette.Primary60}
          />
          <Toggle
            value={lists.is_in_wishlist}
            onClick={() => manageList('wishlist', !lists.is_in_wishlist)}
            title="Lista życzeń"
            color={theme.palette.Grey5}
            leftColor={theme.palette.Grey30}
            rightColor={theme.palette.Primary60}
          />
        </Col>
        <Col gap="5px">
          <Text
            as="h4"
            type="h5"
            weight="bold"
            size="large"
            color={theme.palette.Grey90}>
            Tagi
          </Text>
          {createTags()}
        </Col>
        <Col>
          <BtnPrimary margin="10px 0 0 0" onClick={() => openTagModal(true)}>
            Utwórz tag
          </BtnPrimary>
        </Col>
      </Wrapper>
    </Modal>
  );
};

export default AlcoholListModalView;
