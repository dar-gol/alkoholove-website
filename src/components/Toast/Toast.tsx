import React from 'react';
import toast, {Toast as TType} from 'react-hot-toast';
import {useTheme} from 'styled-components';
import {ToastType} from '../../@types/global';
import {Col, Icon, Row, Text} from '../../styles/global.styled';
import {ExitWrapper, ToastContainer} from './Toast.styled';

interface IProps {
  type: ToastType;
  title: string;
  text: string;
  t: TType;
}

const Toast = ({type, title, text, t}: IProps) => {
  const theme = useTheme() as {palette: {[k: string]: string}};
  const getColor = () => {
    if (type === 'error') return theme.palette.Red100;
    if (type === 'info') return theme.palette.Secondary100;
    if (type === 'success') return theme.palette.Green100;
    if (type === 'warning') return theme.palette.Yellow100;
    return theme.palette.Grey100;
  };
  const getBackgroundColor = () => {
    if (type === 'error') return theme.palette.Red10;
    if (type === 'info') return theme.palette.Secondary10;
    if (type === 'success') return theme.palette.Green10;
    if (type === 'warning') return theme.palette.Yellow10;
    return theme.palette.Grey10;
  };
  return (
    <ToastContainer backgroundColor={getBackgroundColor()}>
      <Row gap="10px">
        <Row>
          <Icon className="icon-Success" color={getColor()} fontSize="30px" />
        </Row>
        <Col flex="1">
          <Text
            as="h5"
            type="h5"
            weight="bold"
            size="large"
            color={theme.palette.Grey80}>
            {title}
          </Text>
          <Text
            as="p"
            type="body"
            weight="regular"
            size="medium"
            color={getColor()}>
            {text}
          </Text>
        </Col>
        <ExitWrapper onClick={() => toast.remove(t.id)}>
          <Icon
            className="icon-Exit"
            color={theme.palette.Grey100}
            fontSize="8px"
          />
        </ExitWrapper>
      </Row>
    </ToastContainer>
  );
};

export default Toast;
