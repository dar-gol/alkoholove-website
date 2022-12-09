import React from 'react';
import {useTheme} from 'styled-components';
import {useNavigate} from "react-router-dom";
import {Alcohols, IAlcohol} from '../../@types/alcohol';
import {Col, Container, Img, Row, Text} from '../../styles/global.styled';
import {TileView} from '../Tile/Tile.view';
import {URL} from "../../utils/constant";
import {createImageName} from "../../utils/utils";
import {AlcoholTileBody} from "../AlcoholTile/AlcoholTileBody.view";
import {AlcoholTileFooter} from "../AlcoholTile/AlcoholTileFooter.view";

interface Props {
  alcohols: Alcohols;
  alcohol: IAlcohol;
}

const AlcoholSimilarView = ({alcohols, alcohol}: Props) => {
  const theme = useTheme();
  const navigate = useNavigate();
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
              <TileView
                  key={oAlcohol.id}
                  title={oAlcohol.name}
                  subtitle={`${oAlcohol.kind}, ${oAlcohol.type}`}
                  onClick={() => navigate(`/alcohol/${oAlcohol.barcode[0]}`)}
                  renderImage={() => (
                      <Img
                          width="150px"
                          height="175px"
                          src={`${URL.GET_IMAGE}/${createImageName(oAlcohol.id, 'md')}`}
                      />
                  )}
                  renderBody={() => <AlcoholTileBody alcohol={oAlcohol} />}
                  renderFooter={() => <AlcoholTileFooter alcohol={oAlcohol} />}
              />
          ))}
        </Row>
      </Container>
    </Col>
  );
};

export default AlcoholSimilarView;
