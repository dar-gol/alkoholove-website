import React from 'react';
import {useTheme} from 'styled-components';
import {IComment} from '../@types/comment';
import {Icon, Row, Text} from '../styles/global.styled';
import {getDate} from '../utils/utils';
import {Review} from './AlcoholComments/AlcoholComments.styled';
import CommentUsabilityView from './CommentUsability/CommentUsability.view';
import Stars from './Stars/Stars.view';
import UserIconView from './UserIcon/UserIcon.view';

interface Props {
  comment: IComment;
  index: number;
  setCommentModalActive: (index: number) => void;
  manageHelpful: (id: string) => void;
  isYourComment: boolean;
  padding?: string;
}

const CommentView = ({
  comment,
  index,
  setCommentModalActive,
  manageHelpful,
  isYourComment,
  padding,
}: Props) => {
  const theme = useTheme();
  return (
    <Review key={comment.id} padding={padding || '0'}>
      <Row justifyContent="space-between">
        <Row flex="1" alignItems="center" gap="10px">
          <UserIconView size="30px" />
          <Text
            as="a"
            href={`/profile/${comment.user_id}`}
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
          visible={isYourComment}
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
};

export default CommentView;
