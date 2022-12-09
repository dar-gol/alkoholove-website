import React from 'react';
import {useTheme} from 'styled-components';
import {IComment} from '../../@types/comment';
import {BtnPrimary, Col, Text, WarnBar} from '../../styles/global.styled';
import Toggle from '../Inputs/Toggle';
import Modal from '../modal/Modal';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  comment: IComment | null;
  manageHelpful: (review_id: string) => void;
  reportComment: (review_id: string) => void;
}

const CommentOptionsView = ({
  isOpen,
  onClose,
  comment,
  manageHelpful,
  reportComment,
}: IProps) => {
  const theme = useTheme();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Col gap="10px">
        <Col>
          <Text
            as="h4"
            type="h5"
            weight="bold"
            size="large"
            color={theme.palette.Grey90}>
            Opcje komentarza
          </Text>
          <Text
            type="caption"
            weight="regular"
            size="large"
            color={theme.palette.Grey40}>
            Komentarz użytkownika {comment?.username}
          </Text>
        </Col>
        <Toggle
          value={comment?.helpful}
          onClick={() => manageHelpful(comment?.id || '')}
          title="Ten komentarz jest przydatny."
          color={theme.palette.Grey5}
          leftColor={theme.palette.Grey30}
          rightColor={theme.palette.Primary60}
          rightIcon={comment?.helpful ? 'icon-Heart' : ''}
        />
        <Text
          type="body"
          weight="medium"
          size="medium"
          color={theme.palette.Grey80}>
          Czy komentarz zawiera niewłasciwa tresc?
        </Text>
        <WarnBar>
          <span className="icon-Error" />
          <p>Nie można cofnąc poniższej opcji.</p>
        </WarnBar>
        <BtnPrimary
          padding="0 20px"
          onClick={() => reportComment(comment?.id || '')}>
          Tak, zawiera.
        </BtnPrimary>
      </Col>
    </Modal>
  );
};

export default CommentOptionsView;
