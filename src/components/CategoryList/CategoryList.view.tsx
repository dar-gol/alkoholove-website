import React from 'react';
import {useTheme} from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {ICategory} from '../../@types/category';
import {Row, Text} from '../../styles/global.styled';
import {categoryImages} from '../../utils/constant';
import {
  CategoryImage,
  CategoryTitle,
  CategoryWrapper,
} from './CategoryList.styled';

interface IProps {
  categories: ICategory[];
}

const CategoryListView = ({categories}: IProps) => {
  const theme = useTheme() as {palette: {[k: string]: string}};
  const navigate = useNavigate();
  return (
    <Row gap="50px" padding="50px" width="100%">
      {categories.map(category => {
        if (category.title === 'core') return null;
        const imageName = categoryImages.includes(category.title)
          ? category.title
          : 'other';
        return (
          <CategoryWrapper
            key={category.id}
            onClick={() => navigate(`/alcohols?kind=${category.title}`)}>
            <CategoryImage
              src={`./img/${imageName}-stock.png`}
              height="230px"
              width="300px"
            />
            <CategoryTitle>{category.title}</CategoryTitle>
          </CategoryWrapper>
        );
      })}
      <Row
        visible={false}
        height="230px"
        minWidth="300px"
        alignItems="center"
        justifyContent="center">
        <Text
          href="#"
          as="a"
          type="h5"
          size="large"
          weight="medium"
          color={theme.palette.Secondary70}>
          Więcej
        </Text>
      </Row>
    </Row>
  );
};

export default CategoryListView;
