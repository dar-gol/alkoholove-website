import React from 'react';
import {ICategory} from '../../@types/category';
import CategoryListView from './CategoryList.view';

interface IProps {
  categories: ICategory[];
}

const CategoryListLogic = ({categories}: IProps) => {
  const t = 0;
  return <CategoryListView categories={categories} />;
};

export default CategoryListLogic;
