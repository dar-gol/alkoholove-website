import React from 'react';
import {useTheme} from 'styled-components';
import {IAlcohol} from '../../@types/alcohol';
import AlcoholCommentsApollo from '../../components/AlcoholComments/AlcoholComments.apollo';
import AlcoholOverviewApollo from '../../components/AlcoholOverview/AlcoholOverview.apollo';
import AlcoholPropertiesApollo from '../../components/AlcoholProperties/AlcoholProperties.apollo';
import FooterView from '../../components/Footer/Footer.view';
import HeaderApollo from '../../components/Header/Header.apollo';
import {Container, Row} from '../../styles/global.styled';

interface IProps {
  alcohol: IAlcohol;
}

const AlcoholDetailsView = ({alcohol}: IProps) => {
  const theme = useTheme() as {palette: {[k: string]: string}};
  return (
    <>
      <HeaderApollo />
      <AlcoholOverviewApollo alcohol={alcohol} />
      <AlcoholPropertiesApollo alcohol={alcohol} />
      <AlcoholCommentsApollo alcohol={alcohol} />
      <Row width="100%" padding="50px 0">
        <Container backgroundColor={theme.palette.Grey5}>
          <FooterView />
        </Container>
      </Row>
    </>
  );
};

export default AlcoholDetailsView;
