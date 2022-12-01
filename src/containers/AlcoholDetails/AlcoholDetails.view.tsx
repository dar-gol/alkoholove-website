import React from 'react';
import {useTheme} from 'styled-components';
import {IAlcohol} from '../../@types/alcohol';
import AlcoholCommentsApollo from '../../components/AlcoholComments/AlcoholComments.apollo';
import AlcoholOverviewApollo from '../../components/AlcoholOverview/AlcoholOverview.apollo';
import AlcoholPropertiesApollo from '../../components/AlcoholProperties/AlcoholProperties.apollo';
import AlcoholSimilarApollo from '../../components/AlcoholSimilar/AlcoholSimilar.apollo';
import FooterView from '../../components/Footer/Footer.view';
import HeaderApollo from '../../components/Header/Header.apollo';
import {Container, Row} from '../../styles/global.styled';

interface IProps {
  alcohol: IAlcohol;
  refresh: () => void;
}

const AlcoholDetailsView = ({alcohol, refresh}: IProps) => {
  const theme = useTheme() as {palette: {[k: string]: string}};
  return (
    <>
      <HeaderApollo />
      <AlcoholOverviewApollo alcohol={alcohol} />
      <AlcoholPropertiesApollo alcohol={alcohol} />
      <AlcoholCommentsApollo alcohol={alcohol} refresh={refresh} />
      <AlcoholSimilarApollo alcohol={alcohol} />
      <Row width="100%" padding="50px 0">
        <Container backgroundColor={theme.palette.Grey5}>
          <FooterView />
        </Container>
      </Row>
    </>
  );
};

export default AlcoholDetailsView;
