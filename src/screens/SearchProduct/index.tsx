import React, { useEffect, useState } from "react";

import HeaderBar from "../../components/HeaderBar";
import NotFound from "./NotFound";
import ProductList from "./ProductList";

import useApi from "../../hooks/useApi";

import { Container } from "./styles";

const SearchProduct: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const { fetchData } = useApi();
  const abortController = new AbortController();

  const handleSearchChange = (text: string) => {
    setInputText(text);
  };

  const RenderContainer = () => {
    return items.length > 0 ? <ProductList items={items} /> : <NotFound />;
  };

  const getCategories = async () => {
    try {
      const fetch = await fetchData(
        `/products/category/${inputText.toLowerCase()}`,
        {
          signal: abortController.signal,
        }
      );
      setItems(fetch.data);
    } catch (err: any) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    if (inputText.length > 3) {
      getCategories();
    }
  }, [inputText]);

  return (
    <Container>
      <HeaderBar
        search
        searchFocus={true}
        onSearchChange={handleSearchChange}
        inputText={inputText}
      />
      <RenderContainer />
    </Container>
  );
};

export default SearchProduct;
