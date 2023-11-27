import React from "react";
import { View } from "react-native";

import { ButtonContainer, ButtonText, Container, Quantity } from "./styles";

type TQuantityButton = {
  quantity: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
};

const QuantityButton: React.FC<TQuantityButton> = ({
  quantity,
  handleDecrease,
  handleIncrease,
}) => {
  return (
    <Container>
      <ButtonContainer onPress={handleDecrease}>
        <ButtonText>-</ButtonText>
      </ButtonContainer>
      <Quantity>{quantity}</Quantity>
      <ButtonContainer onPress={handleIncrease}>
        <ButtonText>+</ButtonText>
      </ButtonContainer>
    </Container>
  );
};

export default QuantityButton;
