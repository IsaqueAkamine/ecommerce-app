import React from "react";

import { Container, Icon, Title } from "./styles";
import SearchBar from "../SearchBar";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

type THeaderBar = {
  title?: string;
  search?: boolean;
  rightIcon?: string;
};

const HeaderBar: React.FC<THeaderBar> = ({ title, search, rightIcon }) => {
  const navigation = useNavigation();
  let imgIcon;
  switch (rightIcon) {
    case "favorite":
      imgIcon = require("../../assets/icons/Heart.png");
      break;

    default:
      imgIcon = require("../../assets/icons/Info Circle.png");
      break;
  }
  return (
    <Container>
      <Pressable onPress={() => navigation.goBack()}>
        <Icon source={require("../../assets/icons/ArrowLeft.png")} />
      </Pressable>
      {title && <Title>{title}</Title>}
      {search && <SearchBar />}
      {rightIcon && <Icon source={imgIcon} />}
    </Container>
  );
};

export default HeaderBar;
