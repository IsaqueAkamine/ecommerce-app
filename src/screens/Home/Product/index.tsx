import React from "react";

import {
  Container,
  InfoSection,
  Price,
  ProductContainer,
  ProductImage,
  Rating,
  Title,
} from "./styles";

type TProduct = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { count: number; rate: number };
  title: string;
};

const Product: React.FC<TProduct> = ({ title, image, rating, price }) => {
  return (
    <Container>
      <ProductImage source={{ uri: image }} resizeMode="cover" />
      <ProductContainer
        style={{
          shadowOffset: { width: 5, height: 10 },
          shadowColor: "#393939",
          shadowRadius: 20,
          shadowOpacity: 0.1,
          elevation: 2,
        }}
      >
        <Title numberOfLines={3}>{title}</Title>
        <InfoSection>
          <Rating>{rating.rate}</Rating>
          <Price>$ {price}</Price>
        </InfoSection>
      </ProductContainer>
    </Container>
  );
};

export default Product;
