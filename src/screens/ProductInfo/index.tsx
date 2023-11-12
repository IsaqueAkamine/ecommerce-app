import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import HeaderBar from "../../components/HeaderBar";

import {
  Container,
  Description,
  ImageListContainer,
  InfoProductContainer,
  ProductImage,
  Title,
  TotalContainer,
  TotalPrice,
  TotalText,
} from "./styles";
import CustomButton from "../../components/CustomButton";

const ProductInfo: React.FC = () => {
  const { product } = useRoute().params;

  return (
    <Container>
      <HeaderBar rightIcon="favorite" />
      {/* <Title>Product info</Title> */}
      <ImageListContainer>
        <ProductImage source={{ uri: product.image }} resizeMode="contain" />
      </ImageListContainer>
      <InfoProductContainer>
        <Title>{product.title}</Title>
        <Description numberOfLines={10}>{product.description}</Description>

        <TotalContainer>
          <TotalText>Total</TotalText>
          <TotalPrice>$ {product.price}</TotalPrice>
        </TotalContainer>

        <CustomButton description="Add to basket" theme="dark" />
      </InfoProductContainer>
    </Container>
  );
};

export default ProductInfo;
