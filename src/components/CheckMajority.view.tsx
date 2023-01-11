import React, {useState} from 'react';
import {useTheme} from 'styled-components';
import {
  BtnPrimary,
  Col,
  CriticalBar,
  InfoBar,
  Row,
  Text,
} from '../styles/global.styled';
import Modal from './modal/Modal';
import {Button} from '../styles/button.styled';
import CheckBox from './Inputs/CheckBox';

interface Props {
  isOpen: boolean;
  onChooseMajority: (isMajority: boolean, isRemember: boolean) => void;
  isMajority: boolean | null;
}

const CheckMajority = ({isOpen, onChooseMajority, isMajority}: Props) => {
  const theme = useTheme();
  const [isRemember, setIsRemember] = useState(true);
  return (
    <Modal isOpen={isOpen} onClose={() => {}} isClosable={false}>
      <Col gap="10px">
        <Col alignItems="center">
          <Text
            textAlign="center"
            type="h5"
            weight="bold"
            size="large"
            color={theme.palette.Grey90}>
            Treści przeznaczone tylko dla osób pełnoletnich.
          </Text>
        </Col>
        <Col alignItems="center">
          <Text
            type="body"
            weight="regular"
            size="medium"
            color={theme.palette.Grey60}>
            Czy masz ukończone 18 lat?
          </Text>
        </Col>
        <Row justifyContent="center">
          <CheckBox
            title="Zapamiętaj mój wybór"
            required={false}
            rightColor={theme.palette.Green80}
            leftColor={theme.palette.Grey20}
            backgroundColor={theme.palette.Grey5}
            value={isRemember}
            onClick={() => setIsRemember(prev => !prev)}
          />
        </Row>
        <Row justifyContent="center" gap="10px">
          <Button
            buttonType="Primary"
            width="80px"
            onClick={() => onChooseMajority(true, isRemember)}>
            Tak
          </Button>
          <Button
            buttonType="Secondary"
            width="80px"
            onClick={() => onChooseMajority(false, isRemember)}>
            Nie
          </Button>
        </Row>
        <Col visible={isMajority !== null}>
          <CriticalBar>
            <span className="icon-Error" />
            <p>Nie możesz przeglądać treści, ponieważ nie jesteś pełnoletni.</p>
          </CriticalBar>
        </Col>
      </Col>
    </Modal>
  );
};

export default CheckMajority;
