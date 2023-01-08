import React, {useEffect, useState} from 'react';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';
import {useTheme} from 'styled-components';
import {Button} from '../../styles/button.styled';
import {
  Col,
  Row,
  Text,
} from '../../styles/global.styled';
import ChangePassword from '../ChangePassword/ChangePassword.view';
import Toggle from '../Inputs/Toggle';
import RemoveUser from '../RemoveUser/RemoveUser.view';
import SuggestChanges from '../SuggestChanges/SuggestChanges.view';
import {ISettingsView} from './ProfileComponents.interface';

const SettingsView = ({sendError, deleteAccount}: ISettingsView) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState({
    changes: false,
    remove: false,
    password: false,
  });
  const [cookie, setCookie] = useCookies();
  const [night, setNight] = useState<boolean>(false);
  const [isContrast, setIsContrast] = useState<boolean>(false);

  useEffect(() => {
    setNight(cookie.mode === 'dark');
    setIsContrast(cookie.isHighContrast === 'true');
  }, []);

  const modeHandler = () => {
    setNight(prev => !prev);
    setCookie('mode', night ? 'light' : 'dark', {
      path: '/',
      sameSite: 'strict',
    });
  };

  const contrastModeHandler = () => {
    setIsContrast(prev => !prev);
    setCookie('isHighContrast', !isContrast ? 'true' : 'false', {
      path: '/',
      sameSite: 'strict',
    });
  };

  const openChanges = (changes: boolean) =>
    setOpen(prev => ({...prev, changes}));
  const openRemove = (remove: boolean) => setOpen(prev => ({...prev, remove}));
  const openPassword = (password: boolean) =>
    setOpen(prev => ({...prev, password}));

  return (
    <Col>
      <Text
        as="h5"
        type="h5"
        size="large"
        weight="bold"
        margin="0 0 0 0"
        color={theme.palette.Grey80}>
        Ustawienia
      </Text>
      <Col gap="10px">
        <Row>
          <Toggle
            title="Tryb ciemny"
            leftColor={theme.palette.Grey20}
            rightColor={theme.palette.Green20}
            backgroundColor={theme.palette.Grey5}
            value={night}
            onClick={modeHandler}
          />
        </Row>
        <Row>
          <Toggle
            title="Tryb wysokiego kontrastu"
            leftColor={theme.palette.Grey20}
            rightColor={theme.palette.Green20}
            backgroundColor={theme.palette.Grey5}
            value={isContrast}
            onClick={contrastModeHandler}
          />
        </Row>
        <Row>
          <Button
            width="200px"
            buttonType="Primary"
            onClick={() => openChanges(true)}>
            Zgłoś błąd
          </Button>
        </Row>
        <Row>
          <Button
            visible={false}
            width="200px"
            buttonType="Secondary"
            onClick={() => openPassword(true)}>
            Zmiana hasła
          </Button>
        </Row>
        <Row>
          <Button
            width="200px"
            buttonType="Secondary"
            onClick={() => navigate('/logout')}>
            Wyloguj się
          </Button>
        </Row>
        <Row>
          <Button
            width="200px"
            buttonType="Critical"
            onClick={() => openRemove(true)}>
            Usuń konto
          </Button>
        </Row>
      </Col>
      <SuggestChanges
        isOpen={open.changes}
        onClose={() => openChanges(false)}
        sendError={sendError}
      />
      <ChangePassword
        isOpen={open.password}
        onClose={() => openPassword(false)}
        sendChangePassword={() => {}}
      />
      <RemoveUser
        isOpen={open.remove}
        onClose={() => openRemove(false)}
        removeUser={deleteAccount}
      />
    </Col>
  );
};

export default SettingsView;
