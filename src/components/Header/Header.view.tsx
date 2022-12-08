import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useTheme} from 'styled-components';
import {
  BtnPrimary,
  BtnSecondary,
  Col,
  Icon,
  Img,
  Primary,
  Row,
} from '../../styles/global.styled';
import {LOCATION} from '../../utils/constant';
import TextInput from '../Inputs/TextInput';
import SearcherApollo from '../Searcher/Searcher.apollo';
import {Logo, Nav, RightSide, SearchButton, Title} from './Header.styled';

interface Props {
  showSearcher: boolean;
  handleSearcherBtn: () => void;
  isLogged: boolean;
}

const HeaderView = ({showSearcher, handleSearcherBtn, isLogged}: Props) => {
  const navigate = useNavigate();
  const theme = useTheme() as {palette: {[k: string]: string}};
  return (
    <>
      <Nav>
        <Link to="/" style={{all: 'unset', cursor: 'pointer'}}>
          <Logo>
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
        </Link>
        <RightSide visible={isLogged}>
          <Row flex="1" gap="10px" minWidth="250px" justifyContent="center">
            <SearchButton onClick={handleSearcherBtn}>
              <Icon className="icon-search" />
              Wyszukaj alkohol
            </SearchButton>
          </Row>
          <Row gap="20px">
            <BtnSecondary padding="0 20px" onClick={() => navigate('/social')}>
              <Icon
                fontSize="20px"
                className="icon-Social"
                color={theme.palette.Grey80}
              />
            </BtnSecondary>
            <BtnPrimary
              padding="0 20px"
              onClick={() => navigate(LOCATION.PROFILE)}>
              <Icon
                fontSize="20px"
                className="icon-Profil"
                color={theme.palette.White}
              />
            </BtnPrimary>
          </Row>
        </RightSide>
        <RightSide visible={!isLogged}>
          <Row flex="1" gap="10px" minWidth="250px" justifyContent="center">
            <SearchButton onClick={handleSearcherBtn}>
              <Icon className="icon-search" />
              Wyszukaj alkohol
            </SearchButton>
          </Row>
          <Row gap="20px">
            <BtnPrimary padding="0 20px" onClick={() => navigate('/register')}>
              Zarejestruj się
            </BtnPrimary>
            <BtnSecondary padding="0 20px" onClick={() => navigate('/login')}>
              Zaloguj się
            </BtnSecondary>
          </Row>
        </RightSide>
      </Nav>
      <SearcherApollo show={showSearcher} handleShow={handleSearcherBtn} />
    </>
  );
};

export default HeaderView;
