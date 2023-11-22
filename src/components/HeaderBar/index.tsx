import React from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SearchBar from "../SearchBar";
import { ButtonIcon, Container, Icon, RightSpace, Title } from "./styles";

type THeaderBar = {
  title?: string;
  search?: boolean;
  rightIcon?: string;
  rightIconColor?: string;
  handleRightButton?: () => void;
};

const HeaderBar: React.FC<THeaderBar> = ({
  title,
  search,
  rightIcon,
  rightIconColor,
  handleRightButton,
}) => {
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

  const RenderCenterInfo = () => {
    if (search) {
      return <SearchBar />;
    } else if (title) {
      return <Title>{title}</Title>;
    } else {
      return null;
    }
  };

  const RenderRightIcon = () => {
    return rightIcon ? (
      <ButtonIcon onPress={handleRightButton}>
        <Icon source={imgIcon} tintColor={rightIconColor} />
      </ButtonIcon>
    ) : (
      <RightSpace />
    );
  };

  return (
    <Container>
      <Pressable onPress={() => navigation.goBack()}>
        <Icon source={require("../../assets/icons/ArrowLeft.png")} />
      </Pressable>
      <RenderCenterInfo />
      <RenderRightIcon />
    </Container>
  );
};

export default HeaderBar;
