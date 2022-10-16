import React, {useEffect, useState} from 'react';
import {CategoriesObject, ICategory} from '../../@types/category';
import {API, URL} from '../../utils/constant';
import {get} from '../../utils/fetch';
import CategoryListLogic from './CategoryList.logic';

const CategoryListApollo = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    get({
      url: `${API}${URL.GET_CATEGORIES}?limit=0`,
    })
      .then(value => value.json())
      .then((value: CategoriesObject) => setCategories(value.categories || []));
  }, []);
  return <CategoryListLogic categories={categories} />;
};

export default CategoryListApollo;
