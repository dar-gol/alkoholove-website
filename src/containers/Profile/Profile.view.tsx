import React from 'react';
import {useParams} from 'react-router-dom';
import {useTheme} from 'styled-components';
import FooterView from '../../components/Footer/Footer.view';
import HeaderApollo from '../../components/Header/Header.apollo';
import DataView from '../../components/Profile/Data.view';
import ListsView from '../../components/Profile/Lists.view';
import SettingsView from '../../components/Profile/Settings.view';
import {Col, Container, Row, Text} from '../../styles/global.styled';
import {IProfileView} from './Profile.interface';
import {BtnTab, Content, Wrapper} from './Profile.styled';

const ProfileView = ({tab, handleTab, user, tags, sendError}: IProfileView) => {
  const theme = useTheme();
  const {id} = useParams();
  const getTab = () => {
    if (tab === 'data') return <DataView user={user} />;
    if (tab === 'lists') return <ListsView tags={tags} user={user} />;
    if (tab === 'settings') return <SettingsView sendError={sendError} />;
    return null;
  };
  return (
    <>
      <HeaderApollo />
      <Col backgroundColor={theme.palette.Grey5} padding="50px 0">
        <Container backgroundColor={theme.palette.Grey5}>
          <Text
            as="h2"
            type="h3"
            size="large"
            weight="medium"
            margin="0 0 50px 0"
            color={theme.palette.Grey80}>
            {id ? 'Profil użytkownika: ' : 'Twój profil: '} {user.username}
          </Text>
          <Row justifyContent="center">
            <Wrapper>
              <Row>
                <BtnTab
                  active={tab === 'data'}
                  width="150px"
                  onClick={() => handleTab('data')}>
                  Dane
                </BtnTab>
                <BtnTab
                  active={tab === 'lists'}
                  width="150px"
                  onClick={() => handleTab('lists')}>
                  Listy
                </BtnTab>
                <BtnTab
                  visible={!id}
                  active={tab === 'settings'}
                  width="150px"
                  onClick={() => handleTab('settings')}>
                  Ustawienia
                </BtnTab>
              </Row>
              <Content>{getTab()}</Content>
            </Wrapper>
          </Row>
        </Container>
      </Col>
      <Row width="100%" padding="50px 0" backgroundColor={theme.palette.White}>
        <Container>
          <FooterView />
        </Container>
      </Row>
    </>
  );
};

export default ProfileView;
