import React from 'react';
import {useTheme} from 'styled-components';
import {Alcohols, IAlcohol} from '../../@types/alcohol';
import {Col, Container, Row, Text} from '../../styles/global.styled';
import TileView from '../Tile/Tile.view';

interface Props {
  alcohols: Alcohols;
  alcohol: IAlcohol;
}

const AlcoholSimilarView = ({alcohols, alcohol}: Props) => {
  const theme = useTheme();
  return (
    <Col
      position="relative"
      backgroundColor={theme.palette.White}
      visible
      padding="0 0 40px 0">
      <Container>
        <Text
          as="h2"
          type="h3"
          size="large"
          weight="medium"
          margin="50px 0 50px 0">
          Może zainteresują Cię także:
        </Text>
        <Row
          flexWrap="wrap"
          gap="20px"
          justifyContent="center"
          margin="0 0 20px 0">
          {alcohols.map(oAlcohol => (
            <TileView alcohol={oAlcohol} />
          ))}
        </Row>
      </Container>
    </Col>
  );
};

export default AlcoholSimilarView;
