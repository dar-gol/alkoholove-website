import React, {useEffect, useState} from 'react';
import {useTheme} from 'styled-components';
import {getDate} from '../../utils/utils';
import {Col, Row, Text, Tuple} from '../../styles/global.styled';
import {IDataView} from './ProfileComponents.interface';
import {Button} from '../../styles/button.styled';
import {searchUsers} from '../../utils/requests/get';
import {deleteFollowing} from '../../utils/requests/delete';
import {addFollowing} from '../../utils/requests/post';
import useToast from '../../utils/hooks/useToast';

const DataView = ({user}: IDataView) => {
  const theme = useTheme();
  const [isFollowing, setIsFollowing] = useState<boolean | null>(null);
  const toast = useToast();

  const getIsFollowing = async () => {
    try {
      const following = await searchUsers({
        queryKey: ['0', `&phrase=${user.username}`, 'following'],
      });
      const isUser = following.data.users.find(u => {
        if (u.id === user.id) return true;
        return false;
      });
      setIsFollowing(!!isUser);
      // eslint-disable-next-line no-empty
    } catch {}
  };

  const setFollow = async () => {
    if (isFollowing) await deleteFollowing(user.id);
    else await addFollowing(user.id);
    setIsFollowing(!isFollowing);
    const text = isFollowing
      ? 'Przestałeś obserwować użytkownika'
      : 'Zaobserwowałeś użytkownika';
    toast.pushInfo('Użytkownicy', text);
  };

  useEffect(() => {
    if (!user) return;
    getIsFollowing();
  }, []);
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
      <Row padding="10px 0 0 0" visible={isFollowing !== null}>
        <Button buttonType="Primary" padding="0 20px" onClick={setFollow}>
          {isFollowing ? 'Przestań obserwować' : 'Obserwuj'}
        </Button>
      </Row>
    </Col>
  );
};

export default DataView;
