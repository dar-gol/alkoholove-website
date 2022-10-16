import React from 'react';
import {Alcohols} from '../../@types/alcohol';
import {API, URL} from '../../utils/constant';
import {post} from '../../utils/fetch';
import TopListView from './TopList.view';

interface IProps {
  alcohols: Alcohols;
}

const TopListLogic = ({alcohols}: IProps) => {
  const t = 0;
  return <TopListView alcohols={alcohols} />;
};

export default TopListLogic;
