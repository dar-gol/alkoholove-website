import React from 'react';
import {useTheme} from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {IPageInfo} from '../../@types/pagination';
import FooterView from '../../components/Footer/Footer.view';
import HeaderApollo from '../../components/Header/Header.apollo';
import {
  Col,
  Container,
  Text,
  Row,
  BtnGhost,
  Icon,
} from '../../styles/global.styled';
import Select from '../../components/Inputs/Select';
import {UsersSearchResult} from '../../@types/user';
import {SocialSearchOption} from './Socials.apollo';
import TextInput from '../../components/Inputs/TextInput';
import {TileView} from '../../components/Tile/Tile.view';
import {DescriptionStyled, IconStyled, RowStyled} from './Socials.styled';
import {getIcon} from '../../utils/utils';
import BtnMore from '../../components/BtnMore';

interface Props {
  users: UsersSearchResult;
  phrase?: string;
  selectedOption?: SocialSearchOption;
  options: SocialSearchOption[];
  setLimit: () => void;
  onOptionsChange: (event: SocialSearchOption) => void;
  onPhraseChange: (searchPhrase: string) => void;
  page: IPageInfo | undefined;
}

const SocialsView = ({
  users,
  phrase,
  selectedOption,
  options,
  setLimit,
  page,
  onOptionsChange,
  onPhraseChange,
}: Props) => {
  const theme = useTheme() as {palette: {[k: string]: string}};
  const navigate = useNavigate();
  const dummyBody = () => (
    <DescriptionStyled>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s
    </DescriptionStyled>
  );

  const footer = (favouritesCount: number) => (
    <RowStyled
      flex="0"
      alignItems="center"
      justifyContent="center"
      margin="5px 0 0 0">
      <IconStyled
        fontSize="20px"
        className={getIcon('favourites')}
        color={theme.palette.Primary70}
      />
      Polubiono {favouritesCount} alkohole
    </RowStyled>
  );
  const dateFormatter = Intl.DateTimeFormat('pl-PL', {dateStyle: 'long'});
  const subtitle = (date: string) =>
    `Dołączono ${dateFormatter.format(Date.parse(date))}`;

  return (
    <>
      <HeaderApollo />
      <Col backgroundColor={theme.palette.White} alignItems="center">
        <Container margin="0 0 30px 0">
          <Text
            as="h2"
            type="h3"
            size="large"
            weight="medium"
            margin="50px 0 10px 0">
            Lista użytkowników
          </Text>
          <Row gap="20px" responsive alignItems="center">
            <Row minWidth="350px">
              <TextInput
                title={
                  selectedOption
                    ? `Wyszukaj w kategorii: ${selectedOption?.label}`
                    : 'Wybierz kategorię wyszukiwania'
                }
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onPhraseChange(e.target.value)
                }
                value={phrase || ''}
                placeholder="User123"
                state=""
                error=""
                disabled={!selectedOption}
              />
            </Row>
            <Row
              minWidth="200px"
              justifyContent="end"
              minHeight="56px"
              zIndex={1}>
              <Select
                placeholder="Użytkownicy"
                value={selectedOption}
                options={options}
                onChange={onOptionsChange}
              />
            </Row>
          </Row>
          <Row
            flexWrap="wrap"
            gap="20px"
            justifyContent="center"
            margin="20px 0 20px 0">
            {users.map(user => (
              <TileView
                key={user.id}
                title={user.username}
                subtitle={subtitle(user.created_on)}
                headerBackgroundColor="transparent"
                headerTop="-50px"
                onClick={() => navigate(`/profile/${user.id}`)}
                renderImage={() => (
                  <Icon
                    fontSize="150px"
                    className="icon-Profil"
                    color={theme.palette.Grey50}
                  />
                )}
                renderBody={() => <Col minHeight="100px" />}
                renderFooter={() => footer(user.favourites_count)}
              />
            ))}
          </Row>
          <BtnMore
            total={page?.total || 0}
            amount={page?.limit || 0}
            onClick={setLimit}
            elementsName="użytkowników"
            visible={(page?.limit || 0) < (page?.total || 0)}
          />
        </Container>
      </Col>
      <Row width="100%" padding="50px 0">
        <Container backgroundColor={theme.palette.Grey5}>
          <FooterView />
        </Container>
      </Row>
    </>
  );
};

export default SocialsView;
