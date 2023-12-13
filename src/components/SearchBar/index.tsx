import React, { useEffect, useRef } from "react";
import { TextInputProps } from "react-native";

import { Container, Input, SearchIcon } from "./styles";

type TSearchBar = TextInputProps & {
  searchFocus?: boolean;
};

const SearchBar: React.FC<TSearchBar> = ({ searchFocus, ...rest }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchFocus) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Container>
      <SearchIcon source={require("../../assets/icons/Search.png")} />
      <Input ref={inputRef} {...rest} />
    </Container>
  );
};

export default SearchBar;
