import React from "react";
import { FlatList } from "react-native";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { useSelector } from "react-redux";

import { favoriteList } from "../../redux/Products/productSlice";
import DrawerSceneWrapper from "../../components/DrawerSceneWrapper";
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
} from "./styles";

const Favorites: React.FC = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const productList = useSelector(favoriteList);
  const NoFavoriteImg = require("../../assets/img/Sally-No-Favorite.png");

  const handleStartOrdering = () => {
    navigation.goBack();
  };

  const handleProductInfo = (item) => {
    navigation.navigate("ProductInfo", { product: item });
  };

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
            <CardProduct onPress={() => handleProductInfo(item)}>
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
    <DrawerSceneWrapper>
      <Container>
        <HeaderBar title="Favorites" />
        <RenderFavorites />
      </Container>
    </DrawerSceneWrapper>
  );
};

export default Favorites;
