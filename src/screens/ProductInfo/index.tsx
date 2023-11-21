import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { setFavorite } from "../../redux/Products/productSlice";
import HeaderBar from "../../components/HeaderBar";
import CustomButton from "../../components/CustomButton";

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

const ProductInfo: React.FC = () => {
  const { product } = useRoute().params;
  const dispatch = useDispatch();

  const handleAddToFavorite = () => {
    dispatch(setFavorite(product));
  };

  return (
    <Container>
      <HeaderBar rightIcon="favorite" handleRightButton={handleAddToFavorite} />
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
