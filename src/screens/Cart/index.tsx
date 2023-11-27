import React from "react";
import { Alert, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

import {
  cartList,
  changeQuantity,
  clearBasket,
} from "../../redux/Cart/cartSlice";
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
  const dispatch = useDispatch();
  const cartProductList = useSelector(cartList);
  const hasProducts = cartProductList.length > 0;

  const NoFavoriteImg = require("../../assets/img/Saly-No-Cart.png");

  const handleStartOrdering = () => {
    navigation.goBack();
  };

  const handleClearBasket = () => {
    Alert.alert("Are you sure?", "You want to clear basket?", [
      {
        text: "Cancel",
        style: "default",
      },
      {
        text: "Confirm",
        style: "destructive",
        onPress: () => {
          dispatch(clearBasket());
        },
      },
    ]);
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

  const handleDecreaseQuantity = (id: number) => {
    dispatch(
      changeQuantity({
        productId: id,
        amount: -1,
      })
    );
  };

  const handleIncreaseQuantity = (id: number) => {
    dispatch(
      changeQuantity({
        productId: id,
        amount: 1,
      })
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
            <QuantityButton
              quantity={item.quantity}
              handleDecrease={() => handleDecreaseQuantity(item.id)}
              handleIncrease={() => handleIncreaseQuantity(item.id)}
            />
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
    if (hasProducts) {
      return <RenderCartProducts />;
    } else {
      return <RenderNoCartProducts />;
    }
  };

  return (
    <Container>
      <HeaderBar
        title="Basket"
        rightIcon={hasProducts ? "delete" : ""}
        rightIconColor={colors.favorite_primary}
        handleRightButton={handleClearBasket}
      />
      <RenderBasket />
    </Container>
  );
};

export default Cart;
