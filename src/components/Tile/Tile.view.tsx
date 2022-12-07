import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useTheme} from 'styled-components';
import {IAlcohol} from '../../@types/alcohol';
import {IComment} from '../../@types/comment';
import {Col, Img, Row, Text} from '../../styles/global.styled';
import {URL} from '../../utils/constant';
import {createImageName, getDate, getRate} from '../../utils/utils';
import CommentView from '../Comment';
import Stars from '../Stars/Stars.view';
import {
  Content,
  Description,
  DescTitle,
  ImageContainer,
  Name,
  Type,
  Wrapper,
} from './Tile.styled';

const TileView = ({
  alcohol,
  review,
}: {
  alcohol: IAlcohol;
  review?: IComment;
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const historyBlock = () => {
    if (alcohol.searchDate)
      return (
        <>
          <DescTitle>Data wyszukiwania:</DescTitle>
          <Text
            type="body"
            size="small"
            weight="regular"
            color={theme.palette.Grey40}>
            {getDate(alcohol.searchDate)}
          </Text>
        </>
      );
    return null;
  };
  return (
    <Wrapper
      margin="80px 0 0 0"
      key={alcohol.id}
      onClick={() => navigate(`/alcohol/${alcohol.barcode[0]}`)}>
      <ImageContainer zIndex={1}>
        <Img
          width="150px"
          height="175px"
          src={`${URL.GET_IMAGE}/${createImageName(alcohol.id, 'md')}`}
        />
      </ImageContainer>
      <Content minWidth="300px" height="300px">
        <Name>{alcohol.name}</Name>
        <Type>
          {alcohol.kind}, {alcohol.type}
        </Type>
        <DescTitle>Opis:</DescTitle>
        <Description>{alcohol.description}</Description>
        {historyBlock()}
        <Row
          flex="0"
          alignItems="center"
          justifyContent="center"
          margin="20px 0 0 0">
          <Stars rate={getRate(alcohol.rate_value, alcohol.rate_count)} />
        </Row>
        {review && (
          <Col>
            <Col
              minHeight="2px"
              maxHeight="2px"
              margin="20px 0"
              backgroundColor={theme.palette.Grey10}
            />
            <CommentView
              index={123123123}
              isYourComment={false}
              comment={review}
              manageHelpful={() => {}}
              setCommentModalActive={() => {}}
            />
          </Col>
        )}
      </Content>
    </Wrapper>
  );
};

export default TileView;
