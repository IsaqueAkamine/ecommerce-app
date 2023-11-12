import React from "react";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

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

const Product: React.FC<TProduct> = (item) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleProductInfo = () => {
    navigation.navigate("ProductInfo", { product: item });
  };

  return (
    <Container onPress={handleProductInfo}>
      <ProductImage source={{ uri: item.image }} resizeMode="contain" />
      <ProductContainer
        style={{
          shadowOffset: { width: 5, height: 10 },
          shadowColor: "#393939",
          shadowRadius: 20,
          shadowOpacity: 0.1,
          elevation: 2,
        }}
      >
        <Title numberOfLines={3}>{item.title}</Title>
        <InfoSection>
          <Rating>{item.rating.rate}</Rating>
          <Price>$ {item.price}</Price>
        </InfoSection>
      </ProductContainer>
    </Container>
  );
};

export default Product;
