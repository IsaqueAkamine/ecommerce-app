import React from "react";

import { CategoryButton, CategoryButtonSelected, CategoryText } from "./styles";

type TCategory = {
  item: string;
  selected: string;
  changeCategory: Function;
};

const Category: React.FC<TCategory> = ({ item, selected, changeCategory }) => {
  const isSelected = item === selected;
  return (
    <CategoryButton onPress={() => changeCategory()}>
      <CategoryText selected={isSelected}>{item}</CategoryText>
      {isSelected && <CategoryButtonSelected />}
    </CategoryButton>
  );
};

export default Category;
