import React from 'react';
import {Icon, Img} from '../../styles/global.styled';
import {UserIcon} from './UserIcon.styled';

interface IProps {
  src?: string;
  size: string;
}

const UserIconView = ({src, size}: IProps) => {
  const getImage = () => {
    if (src) return <Img src={src} width="30px" height="30px" />;
    return <Icon className="icon-Profil" fontSize={size} />;
  };

  return (
    <UserIcon minWidth={size} minHeight={size}>
      {getImage()}
    </UserIcon>
  );
};

export default UserIconView;
