import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import useApi from "../../hooks/useApi";
import SearchBar from "../../components/SearchBar";

import {
  CategoryContainer,
  Container,
  HeaderContainer,
  HeaderMenuIcon,
  HeaderMenuSearchContainer,
  ProductContainer,
  Title,
  TitleContainer,
} from "./styles";
import Category from "./Category";
import Product from "./Product";

const Home: React.FC = () => {
  const MenuIcon = require("../../assets/icons/Menu.png");
  const { fetchData } = useApi();
  const abortController = new AbortController();

  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const getCategories = async () => {
    try {
      const fetch = await fetchData("/products/categories", {
        signal: abortController.signal,
      });
      setCategories(fetch.data);
      setSelectedCategory(fetch.data[0]);
    } catch (err: any) {
      throw new Error(err);
    }
  };

  const getProducts = async () => {
    try {
      const fetch = await fetchData(`/products/category/${selectedCategory}`, {
        signal: abortController.signal,
      });

      setProducts(fetch.data);
    } catch (err: any) {
      throw new Error(err);
    }
  };

  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    getCategories();
    return () => abortController.abort("Data fetching cancelled");
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      getProducts();
    }
    return () => abortController.abort("Data fetching cancelled");
  }, [selectedCategory]);

  return (
    <Container>
      <HeaderContainer>
        <HeaderMenuSearchContainer>
          <HeaderMenuIcon source={MenuIcon} />
          <SearchBar placeholder="Search" />
        </HeaderMenuSearchContainer>
        <TitleContainer>
          <Title>Order online</Title>
          <Title>collect in store</Title>
        </TitleContainer>
      </HeaderContainer>

      <CategoryContainer>
        <FlatList
          data={categories}
          renderItem={({ item, index }) => (
            <Category
              item={item}
              key={index.toString()}
              selected={selectedCategory}
              changeCategory={() => handleChangeCategory(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: "10%", gap: 24 }}
        />
      </CategoryContainer>

      <ProductContainer>
        <FlatList
          data={products}
          renderItem={({ item, index }) => <Product {...item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: "10%", gap: 34 }}
        />
      </ProductContainer>
    </Container>
  );
};

export default Home;
