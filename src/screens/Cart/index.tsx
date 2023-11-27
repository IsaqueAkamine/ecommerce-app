import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

import { cartList } from "../../redux/Cart/cartSlice";
import HeaderBar from "../../components/HeaderBar";
import QuantityButton from "../../components/QuantityButton";
import colors from "../../constants/colors";
import { SIZES } from "../../constants/sizes";

import {
  CardContainer,
  CartContainer,
  Container,
  InfoContainer,
  InfoSection,
  InfoText,
  InfoTitle,
  NoFavoriteImage,
  OrderButton,
  OrderButtonText,
  Price,
  ProductImage,
  QuantityContainer,
  QuantityText,
  Title,
} from "./styles";

const Cart: React.FC = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const cartProductList = useSelector(cartList);

  const NoFavoriteImg = require("../../assets/img/Saly-No-Cart.png");

  const handleStartOrdering = () => {
    navigation.goBack();
  };

  const RenderNoCartProducts = () => {
    return (
      <>
        <NoFavoriteImage source={NoFavoriteImg} resizeMode="contain" />
        <InfoSection>
          <InfoTitle>Your cart is empty</InfoTitle>
          <InfoText>Hit the button down below to find products</InfoText>

          <OrderButton onPress={handleStartOrdering}>
            <OrderButtonText>Start ordering</OrderButtonText>
          </OrderButton>
        </InfoSection>
      </>
    );
  };

  const RenderCard = ({ item }) => {
    return (
      <CardContainer>
        <ProductImage source={{ uri: item.image }} />
        <InfoContainer>
          <Title numberOfLines={2}>{item.title}</Title>
          <Price>$ {item.price}</Price>

          <QuantityContainer>
            <QuantityText>Quantity</QuantityText>
            <QuantityButton />
          </QuantityContainer>
        </InfoContainer>
      </CardContainer>
    );
  };

  const RenderCartProducts = () => {
    return (
      <CartContainer>
        <FlatList
          data={cartProductList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RenderCard item={item} />}
          style={{ flex: 1 }}
          contentContainerStyle={{
            paddingTop: SIZES.verticalScale(14.5),
            gap: SIZES.verticalScale(14.5),
          }}
        />
      </CartContainer>
    );
  };

  const RenderBasket = () => {
    if (cartProductList.length > 0) {
      return <RenderCartProducts />;
    } else {
      return <RenderNoCartProducts />;
    }
  };

  return (
    <Container>
      <HeaderBar
        title="Basket"
        rightIcon="delete"
        rightIconColor={colors.favorite_primary}
      />
      <RenderBasket />
    </Container>
  );
};

export default Cart;
