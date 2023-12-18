import React from "react";
import { FlatList } from "react-native";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

import { SIZES } from "../../../constants/sizes";
import { TProduct, TProductList } from "../../../types";

import {
  Container,
  InfoSection,
  Price,
  ProductContainer,
  ProductImage,
  ProductListContainer,
  ProductTitle,
  Rating,
  Title,
} from "./styles";

const ProductList: React.FC<TProductList> = ({ items }) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleProductInfo = () => {
    navigation.navigate("ProductInfo", { product: item });
  };

  const renderItem = (item: TProduct) => {
    return (
      <ProductListContainer onPress={handleProductInfo}>
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
          <ProductTitle numberOfLines={3}>{item.title}</ProductTitle>
          <InfoSection>
            <Rating>{item.rating.rate}</Rating>
            <Price>$ {item.price}</Price>
          </InfoSection>
        </ProductContainer>
      </ProductListContainer>
    );
  };

  return (
    <Container>
      <FlatList
        data={items}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <Title>Found {items.length} results</Title>}
        ListHeaderComponentStyle={{ margin: 24 }}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        style={{ flex: 1, width: "100%", marginTop: 12 }}
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: SIZES.paddingBottom + 24,
        }}
      />
    </Container>
  );
};

export default ProductList;
