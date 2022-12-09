import React from 'react';
import {useTheme} from 'styled-components';
import {getDate} from '../../utils/utils';
import {Col, Text, Tuple} from '../../styles/global.styled';
import {IDataView} from './ProfileComponents.interface';

const DataView = ({user}: IDataView) => {
  const theme = useTheme();
  const createTuple = (key: string, value: string | number) => (
    <Tuple padding="10px">
      <Text
        type="body"
        size="medium"
        weight="medium"
        color={theme.palette.Grey80}>
        {key}
      </Text>
      <Text
        type="body"
        size="medium"
        weight="medium"
        color={theme.palette.Grey60}>
        {value}
      </Text>
    </Tuple>
  );
  return (
    <Col>
      <Text
        as="h5"
        type="h5"
        size="large"
        weight="bold"
        margin="0 0 0 0"
        color={theme.palette.Grey80}>
        Dane
      </Text>
      {createTuple('Nazwa użytkownika', user.username)}
      {createTuple('Email', user.email)}
      {createTuple('Data utworzenia konta', getDate(user.created_on) || '')}
      {createTuple('Średnia ocen', user.avg_rating.toFixed(2))}
      {createTuple('Ilość ocen', user.rate_count)}
      {createTuple('Ilość życzeń', user.wishlist_count)}
      {createTuple('Ilość ulubionych', user.favourites_count)}
      {createTuple('Ilość obserwowanych', user.following_count)}
      {createTuple('Ilość obserwujących', user.followers_count)}
    </Col>
  );
};

export default DataView;
