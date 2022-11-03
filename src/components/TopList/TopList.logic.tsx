import React from 'react';
import {Alcohols} from '../../@types/alcohol';
import {API, URL} from '../../utils/constant';
import {post} from '../../utils/fetch';
import TopListView from './TopList.view';

interface IProps {
  alcohols: Alcohols;
  increaseLimit: () => void;
}

const TopListLogic = ({alcohols, increaseLimit}: IProps) => {
  const t = 0;
  return <TopListView alcohols={alcohols} increaseLimit={increaseLimit} />;
};

export default TopListLogic;
