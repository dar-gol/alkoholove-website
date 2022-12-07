import React from 'react';
import {useTheme} from 'styled-components';
import {BtnPrimary, Col, InfoBar, Text} from '../../styles/global.styled';
import Modal from '../modal/Modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  sendChangePassword: () => void;
}

const ChangePassword = ({isOpen, onClose, sendChangePassword}: Props) => {
  const theme = useTheme();
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
            Zmiana hasła
          </Text>
        </Col>
        <InfoBar minWidth="350px">
          <span className="icon-Info" />
          <p>
            Wyslemy Ci mailowe instrukcje jak zmienic hasło. Wystarczy nacisnac
            ponizszy przycisk.
          </p>
        </InfoBar>
        <BtnPrimary onClick={sendChangePassword}>Zmieniam hasło</BtnPrimary>
      </Col>
    </Modal>
  );
};

export default ChangePassword;
