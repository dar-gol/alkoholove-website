import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useTheme} from 'styled-components';
import {IAlcohol} from '../../@types/alcohol';
import {CommentsData, IComment} from '../../@types/comment';
import {Tokens} from '../../@types/user';
import {
  BtnGhost,
  BtnPrimary,
  Col,
  Container,
  Icon,
  Row,
  Text,
} from '../../styles/global.styled';
import {getCookie} from '../../utils/cookies';
import {getDate, getRate} from '../../utils/utils';
import CommentOptionsView from '../CommentOptions/CommentOptions.view';
import CommentUsabilityView from '../CommentUsability/CommentUsability.view';
import TextInput from '../Inputs/TextInput';
import Stars from '../Stars/Stars.view';
import StarsAmountView from '../StarsAmount/StarsAmount.view';
import UserIconView from '../UserIcon/UserIcon.view';
import {
  AddComment,
  AddCommentContainer,
  Cap,
  ColorBlock,
  Review,
} from './AlcoholComments.styled';

interface IProps {
  comments: CommentsData;
  alcohol: IAlcohol;
  setRate: (rate: number) => void;
  setReview: (review: string) => void;
  setComment: (review: string, rating: number) => void;
  manageHelpful: (review_id: string) => void;
  setLimit: () => void;
  choosenComment: number | null;
  setCommentModalActive: (id: number | null) => void;
  reportComment: (review_id: string) => void;
}

const AlcoholCommentsView = ({
  comments,
  alcohol,
  setRate,
  setReview,
  setComment,
  manageHelpful,
  setLimit,
  setCommentModalActive,
  choosenComment,
  reportComment,
}: IProps) => {
  const theme = useTheme() as {palette: {[k: string]: string}};
  const navigate = useNavigate();
  const tokens = getCookie<Tokens>('auth');
  const isShowMoreComments = () =>
    comments.page_info.limit <= comments.page_info.total;
  const createReview = (comment: IComment, index: number) => (
    <Review key={comment.id}>
      <Row justifyContent="space-between">
        <Row flex="1" alignItems="center" gap="10px">
          <UserIconView size="30px" />
          <Text
            type="body"
            size="large"
            weight="bold"
            color={theme.palette.Grey90}>
            {comment.username}
          </Text>
        </Row>
        <Icon
          className="icon-More"
          color={theme.palette.Secondary80}
          cursor="pointer"
          onClick={() => setCommentModalActive(index)}
          visible={
            (tokens && comments.my_review?.id !== comment.id) || !!tokens
          }
        />
      </Row>
      <Row>
        <Text
          type="body"
          size="large"
          weight="regular"
          color={theme.palette.Grey40}>
          {comment.review}
        </Text>
      </Row>
      <Row justifyContent="space-between" alignItems="center">
        <Stars rate={comment.rating} />
        <CommentUsabilityView
          onClick={() => manageHelpful(comment.id)}
          amount={comment.helpful_count}
          isMark={comment.helpful}
        />
      </Row>
      <Row>
        <Text
          type="caption"
          size="large"
          weight="regular"
          color={theme.palette.Grey30}>
          {getDate(comment.date)}
        </Text>
      </Row>
    </Review>
  );
  return (
    <Row
      position="relative"
      backgroundColor={theme.palette.White}
      minHeight="700px"
      padding="0 0 50px 0">
      <Container>
        <Text
          as="h2"
          type="h3"
          size="large"
          weight="medium"
          margin="50px 0 50px 0">
          Opinię społeczności
        </Text>
        <Row>
          <Col flex="1" gap="20px">
            {comments.reviews.map((comment, index) =>
              createReview(comment, index),
            )}
            <Row justifyContent="center" visible={isShowMoreComments()}>
              <BtnGhost padding="0 20px" onClick={setLimit}>
                Pokaż więcej
              </BtnGhost>
            </Row>
          </Col>
        </Row>
      </Container>
      <AddCommentContainer>
        <ColorBlock />
        <AddComment position="relative">
          <Cap gap="20px" visible={!tokens}>
            <Text
              type="body"
              size="large"
              weight="bold"
              color={theme.palette.White}>
              Zaloguj się w celu dodania komentarza
            </Text>
            <BtnPrimary padding="0 20px" onClick={() => navigate('/login')}>
              Zaloguj się
            </BtnPrimary>
          </Cap>
          <Row visible={!!tokens}>
            <Col flex="1" gap="10px">
              <Row alignItems="end">
                <Text
                  type="h2"
                  size="large"
                  weight="bold"
                  color={theme.palette.Grey90}>
                  {getRate(alcohol.rate_value, alcohol.rate_count)}
                </Text>
                <Text
                  type="body"
                  size="large"
                  weight="regular"
                  color={theme.palette.Grey90}>
                  /5
                </Text>
              </Row>
              <Text
                type="body"
                size="small"
                weight="medium"
                color={theme.palette.Grey30}>
                na podstawie {alcohol.rate_count} recenzji
              </Text>
              <Stars rate={getRate(alcohol.rate_value, alcohol.rate_count)} />
            </Col>
            <Row flex="1">
              <StarsAmountView
                amount={{
                  1: alcohol.rate_1_count,
                  2: alcohol.rate_2_count,
                  3: alcohol.rate_3_count,
                  4: alcohol.rate_4_count,
                  5: alcohol.rate_5_count,
                }}
              />
            </Row>
          </Row>
          <Col gap="10px">
            <Text
              type="body"
              size="large"
              weight="medium"
              color={theme.palette.Grey70}>
              Co sądzisz o {alcohol.name}
              {comments.my_review?.username
                ? `, ${comments.my_review?.username}`
                : ''}
              ?
            </Text>
            <Row>
              <TextInput
                title="Twoja opinia"
                type="textarea"
                state=""
                placeholder="Lorem ipsum..."
                error=""
                value={comments.my_review?.review || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setReview(e.target.value)
                }
              />
            </Row>
          </Col>
          <Col alignItems="center" gap="10px">
            <Text
              type="body"
              size="medium"
              weight="regular"
              color={theme.palette.Grey40}>
              Twoja ogólna ocena tego alkoholu
            </Text>
            <Stars rate={comments.my_review?.rating || 0} setRate={setRate} />
          </Col>
          <Row justifyContent="center">
            <BtnPrimary
              width="200px"
              onClick={() =>
                setComment(
                  comments.my_review?.review || '',
                  comments.my_review?.rating || 0,
                )
              }>
              {comments.my_review?.id ? 'Aktualizuj opinię' : 'Dodaj opinię'}
            </BtnPrimary>
          </Row>
        </AddComment>
      </AddCommentContainer>
      <CommentOptionsView
        isOpen={choosenComment !== null}
        onClose={() => setCommentModalActive(null)}
        comment={comments.reviews[choosenComment || 0]}
        manageHelpful={manageHelpful}
        reportComment={reportComment}
      />
    </Row>
  );
};

export default AlcoholCommentsView;