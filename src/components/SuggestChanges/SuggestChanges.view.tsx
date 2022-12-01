import React, {useState} from 'react';
import {useTheme} from 'styled-components';
import {IAlcohol} from '../../@types/alcohol';
import {BtnPrimary, Col, Row, Text} from '../../styles/global.styled';
import TextInput from '../Inputs/TextInput';
import Modal from '../modal/Modal';

interface Props {
  alcohol: IAlcohol;
  isOpen: boolean;
  onClose: () => void;
  sendError: (description: string) => void;
}

const SuggestChanges = ({alcohol, isOpen, onClose, sendError}: Props) => {
  const theme = useTheme();
  const [description, setDescription] = useState('');
  const handleClick = () => {
    sendError(description);
    setDescription('');
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Col gap="10px">
        <Col>
          <Text
            as="h4"
            type="h5"
            weight="bold"
            size="large"
            color={theme.palette.Grey90}>
            Zaproponuj zmiany
          </Text>
          <Text
            type="caption"
            weight="regular"
            size="large"
            color={theme.palette.Grey40}>
            {alcohol.name}
          </Text>
        </Col>
        <Row minWidth="300px">
          <TextInput
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDescription(e.target.value)
            }
            type="textarea"
            title="Opisz problem"
            placeholder="Niepoprawny typ"
            state=""
            error=""
          />
        </Row>
        <BtnPrimary onClick={() => handleClick()}>Zaproponuj zmiany</BtnPrimary>
      </Col>
    </Modal>
  );
};

export default SuggestChanges;
