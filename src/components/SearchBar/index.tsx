import React from "react";
import { TextInputProps } from "react-native";

import { Container, Input, SearchIcon } from "./styles";

type TSearchBar = TextInputProps;

const SearchBar: React.FC<TSearchBar> = ({ ...rest }) => {
  return (
    <Container>
      <SearchIcon source={require("../../assets/icons/Search.png")} />
      <Input {...rest} />
    </Container>
  );
};

export default SearchBar;
