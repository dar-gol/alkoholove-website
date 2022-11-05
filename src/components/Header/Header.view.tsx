import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {
  BtnPrimary,
  BtnSecondary,
  Col,
  Icon,
  Img,
  Primary,
  Row,
} from '../../styles/global.styled';
import TextInput from '../Inputs/TextInput';
import SearcherApollo from '../Searcher/Searcher.apollo';
import {Logo, Nav, RightSide, SearchButton, Title} from './Header.styled';

interface Props {
  showSearcher: boolean;
  handleSearcherBtn: () => void;
}

const HeaderView = ({showSearcher, handleSearcherBtn}: Props) => {
  const t = 0;
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
        <RightSide>
          <Row flex="1" gap="10px" minWidth="250px" justifyContent="center">
            <SearchButton onClick={handleSearcherBtn}>
              <Icon className="icon-search" />
              Wyszukaj alkohol
            </SearchButton>
          </Row>
          <Row gap="20px">
            <BtnPrimary padding="0 20px">Zarejestruj się</BtnPrimary>
            <BtnSecondary padding="0 20px">Zaloguj się</BtnSecondary>
          </Row>
        </RightSide>
      </Nav>
      <SearcherApollo show={showSearcher} handleShow={handleSearcherBtn} />
    </>
  );
};

export default HeaderView;
