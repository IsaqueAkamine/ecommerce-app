import React from "react";

import { ButtonIcon, ButtonText, Container } from "./styles";

type TProfileButton = {
  description: string;
  handleNavigation?: () => void;
};

const ProfileButton: React.FC<TProfileButton> = ({
  description,
  handleNavigation,
}) => {
  return (
    <Container onPress={handleNavigation}>
      <ButtonText>{description}</ButtonText>
      <ButtonIcon
        source={require("../../assets/icons/ArrowRight2.png")}
        resizeMode="contain"
      />
    </Container>
  );
};

export default ProfileButton;
