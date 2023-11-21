import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { favoriteList } from "../../redux/Products/productSlice";
import HeaderBar from "../../components/HeaderBar";
import { SIZES } from "../../constants/sizes";

import {
  CardProduct,
  Container,
  FavoriteContainer,
  InfoSection,
  InfoText,
  InfoTitle,
  NoFavoriteImage,
  OrderButton,
  OrderButtonText,
  Price,
  ProductImage,
  ProductInfo,
  ProductTitle,
  Title,
} from "./styles";

const Favorites: React.FC = () => {
  const navigation = useNavigation();
  const productList = useSelector(favoriteList);
  const NoFavoriteImg = require("../../assets/img/Sally-No-Favorite.png");

  const handleStartOrdering = () => {
    navigation.goBack();
  };

  useEffect(() => {
    console.log("productList", productList);
  }, [productList]);

  const RenderNoFavorites = () => {
    return (
      <>
        <NoFavoriteImage source={NoFavoriteImg} resizeMode="contain" />
        <InfoSection>
          <InfoTitle>No favorites yet</InfoTitle>
          <InfoText>Hit the button down below to Create an order</InfoText>

          <OrderButton onPress={handleStartOrdering}>
            <OrderButtonText>Start ordering</OrderButtonText>
          </OrderButton>
        </InfoSection>
      </>
    );
  };

  const RenderProductList = () => {
    return (
      <FavoriteContainer>
        <FlatList
          data={productList}
          renderItem={({ item, index }) => (
            <CardProduct>
              <ProductImage source={{ uri: item.image }} resizeMode="contain" />
              <ProductInfo>
                <ProductTitle numberOfLines={1}>{item.title}</ProductTitle>
                <Price>$ {item.price}</Price>
              </ProductInfo>
            </CardProduct>
          )}
          style={{ flex: 1 }}
          contentContainerStyle={{
            paddingTop: SIZES.verticalScale(14.5),
            gap: SIZES.verticalScale(14.5),
          }}
        />
      </FavoriteContainer>
    );
  };

  const RenderFavorites = () => {
    if (productList.length > 0) {
      return <RenderProductList />;
    } else {
      return <RenderNoFavorites />;
    }
  };

  return (
    <Container>
      <HeaderBar title="Favorites" />
      <RenderFavorites />
    </Container>
  );
};

export default Favorites;
