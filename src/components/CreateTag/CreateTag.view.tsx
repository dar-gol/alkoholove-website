import React, {useState} from 'react';
import {useTheme} from 'styled-components';
import {BtnPrimary, Col, Row, Text} from '../../styles/global.styled';
import TextInput from '../Inputs/TextInput';
import Modal from '../modal/Modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  createTag: (tagName: string) => void;
  buttonText?: string;
}

const CreateTagView = ({
  isOpen,
  onClose,
  createTag,
  title = 'Tworzenie tagu',
  buttonText = 'Utwórz tag',
}: Props) => {
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
            {title}
          </Text>
          <Row>
            <TextInput
              value={tagName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTagName(e.target.value)
              }
              icon="icon-Tag"
              title="Nazwa tagu"
              placeholder="Moje top alkohole"
              state=""
              error=""
            />
          </Row>
        </Col>
        <BtnPrimary margin="10px 0 0 0" onClick={handleClick}>
          {buttonText}
        </BtnPrimary>
      </Col>
    </Modal>
  );
};

export default CreateTagView;
