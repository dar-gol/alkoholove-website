import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {useTheme} from 'styled-components';
import {AlcoholLists, IdentifyTag} from '../@types/Lists';
import {BtnPrimary, Col, CriticalBar, Row, Text} from '../styles/global.styled';
import TextInput from './Inputs/TextInput';
import Toggle from './Inputs/Toggle';
import Modal from './modal/Modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  removeTag: () => void;
}

const RemoveTagView = ({isOpen, onClose, removeTag}: Props) => {
  const theme = useTheme();
  const {listName} = useParams();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Col gap="20px">
        <Col gap="5px">
          <Text
            as="h4"
            type="h5"
            weight="bold"
            size="large"
            color={theme.palette.Grey90}>
            Usuwanie tagu
          </Text>
          <Col>
            <CriticalBar maxWidth="300px">
              <span className="icon-Error" />
              <p>
                Tag {decodeURIComponent(listName || '')} zostanie usunięty
                nieodwracalnie
              </p>
            </CriticalBar>
          </Col>
        </Col>
        <BtnPrimary margin="10px 0 0 0" onClick={removeTag}>
          Usuń tag
        </BtnPrimary>
      </Col>
    </Modal>
  );
};

export default RemoveTagView;
