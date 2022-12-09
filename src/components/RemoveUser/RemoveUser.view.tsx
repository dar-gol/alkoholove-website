import React from 'react';
import {useTheme} from 'styled-components';
import {Button} from '../../styles/button.styled';
import {Col, CriticalBar, Text} from '../../styles/global.styled';
import Modal from '../modal/Modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  removeUser: () => void;
}

const RemoveUser = ({isOpen, onClose, removeUser}: Props) => {
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
            Usuwanie konta
          </Text>
        </Col>
        <CriticalBar minWidth="350px">
          <span className="icon-Error" />
          <p>Czy na pewno chcesz usunąc konto?</p>
        </CriticalBar>
        <Button buttonType="Critical" onClick={removeUser}>
          Tak chcę
        </Button>
        <Button buttonType="Primary" onClick={onClose}>
          Nie, nie chcę
        </Button>
      </Col>
    </Modal>
  );
};

export default RemoveUser;
