import React, { useEffect, useRef } from "react";
import { TextInputProps } from "react-native";

import { Container, Input, SearchIcon } from "./styles";

type TSearchBar = TextInputProps & {
  searchFocus?: boolean;
  onSearchChange: (text: string) => void;
  inputText: string;
};

const SearchBar: React.FC<TSearchBar> = ({
  searchFocus,
  onSearchChange,
  inputText,
  ...rest
}) => {
  const inputRef = useRef(null);

  const handleInputChange = (text: string) => {
    onSearchChange(text);
  };

  useEffect(() => {
    if (searchFocus) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Container>
      <SearchIcon source={require("../../assets/icons/Search.png")} />
      <Input
        ref={inputRef}
        {...rest}
        onChangeText={handleInputChange}
        value={inputText}
      />
    </Container>
  );
};

export default SearchBar;
