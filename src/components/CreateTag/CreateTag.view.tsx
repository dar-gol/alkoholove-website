import React, {useState} from 'react';
import {useTheme} from 'styled-components';
import {AlcoholLists, IdentifyTag} from '../../@types/Lists';
import {BtnPrimary, Col, Row, Text} from '../../styles/global.styled';
import TextInput from '../Inputs/TextInput';
import Toggle from '../Inputs/Toggle';
import Modal from '../modal/Modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  createTag: (tagName: string) => void;
}

const CreateTagView = ({isOpen, onClose, createTag}: Props) => {
  const theme = useTheme();
  const [tagName, setTagName] = useState('');
  const handleClick = () => {
    createTag(tagName);
    setTagName('');
    onClose();
  };
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
            Tworzenie tagu
          </Text>
          <Row>
            <TextInput
              value={tagName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTagName(e.target.value)
              }
              title="Nazwa tagu"
              placeholder="Moje top alkohole"
              state=""
              error=""
            />
          </Row>
        </Col>
        <BtnPrimary margin="10px 0 0 0" onClick={handleClick}>
          Utwórz tag
        </BtnPrimary>
      </Col>
    </Modal>
  );
};

export default CreateTagView;