import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { favoriteList, setFavorite } from "../../redux/Products/productSlice";
import { addToCart } from "../../redux/Cart/cartSlice";
import colors from "../../constants/colors";
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
  const favList = useSelector(favoriteList);
  const dispatch = useDispatch();

  const handleAddToFavorite = () => {
    dispatch(setFavorite(product));
  };

  const handleAddtoCart = () => {
    dispatch(addToCart(product));
  };

  const iconColor = () => {
    const selectedProduct = favList.find((item) => item.id === product.id);
    if (selectedProduct) return colors.favorite_primary;
    else {
      return colors.favorite_secondary;
    }
  };

  return (
    <Container>
      <HeaderBar
        rightIcon="favorite"
        rightIconColor={iconColor()}
        handleRightButton={handleAddToFavorite}
      />
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

        <CustomButton
          description="Add to basket"
          theme="dark"
          onPress={handleAddtoCart}
        />
      </InfoProductContainer>
    </Container>
  );
};

export default ProductInfo;
