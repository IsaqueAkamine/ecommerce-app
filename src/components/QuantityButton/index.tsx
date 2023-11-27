import React from "react";
import { View } from "react-native";

import { ButtonContainer, ButtonText, Container, Quantity } from "./styles";

const QuantityButton: React.FC = () => {
  return (
    <Container>
      <ButtonContainer>
        <ButtonText>-</ButtonText>
      </ButtonContainer>
      <Quantity>1</Quantity>
      <ButtonContainer>
        <ButtonText>+</ButtonText>
      </ButtonContainer>
    </Container>
  );
};

export default QuantityButton;
