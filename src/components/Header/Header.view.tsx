import React from 'react';
import {useNavigate} from 'react-router-dom';
import {
  BtnPrimary,
  BtnSecondary,
  Col,
  Img,
  Primary,
  Row,
} from '../../styles/global.styled';
import TextInput from '../Inputs/TextInput';
import {Logo, Nav, RightSide, Title} from './Header.styled';

const HeaderView = () => {
  const navigate = useNavigate();
  return (
    <Nav>
      <Logo onClick={() => navigate('/')}>
        <Img
          width="50px"
          height="50px"
          src="/logo192.png"
          alt="Logo AlkohoLove"
        />
        <Title>
          Alkoho<Primary>Love</Primary>
        </Title>
      </Logo>
      <RightSide>
        <Row flex="1" gap="10px" minWidth="250px">
          <TextInput
            title="Wyszukaj alkohol"
            state=""
            placeholder="Harnaś"
            error=""
          />
        </Row>
        <BtnPrimary padding="0 20px">Zarejestruj się</BtnPrimary>
        <BtnSecondary padding="0 20px">Zaloguj się</BtnSecondary>
      </RightSide>
    </Nav>
  );
};

export default HeaderView;
