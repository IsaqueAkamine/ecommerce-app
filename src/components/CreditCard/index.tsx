import React from "react";

import {
  CheckboxButton,
  CheckboxContainer,
  CheckboxSelected,
  Container,
  CreditCardImage,
  ImageContainer,
  PaymentText,
} from "./styles";

type TType = "Visa" | "Mastercard" | "Bank";

type TCreditCard = {
  type: TType;
  selected: TType;
};

const CreditCard: React.FC<TCreditCard> = ({ type, selected }) => {
  const CreditCardLogo = () => {
    switch (type) {
      case "Visa":
        return (
          <CreditCardImage
            source={require("../../assets/img/Visa.png")}
            resizeMode="contain"
          />
        );

      case "Mastercard":
        return (
          <CreditCardImage
            source={require("../../assets/img/Mastercard.png")}
            resizeMode="contain"
          />
        );
      default:
        return (
          <CreditCardImage
            source={require("../../assets/img/bank.png")}
            resizeMode="contain"
          />
        );
    }
  };

  const isSelected = selected === type;

  return (
    <CheckboxButton
      onPress={() => {
        console.log("pressed", type);
      }}
    >
      <Container>
        <CheckboxContainer selected={isSelected}>
          {isSelected && <CheckboxSelected />}
        </CheckboxContainer>
        <ImageContainer>
          <CreditCardLogo />
        </ImageContainer>
        <PaymentText>**** **** **** 1234</PaymentText>
      </Container>
    </CheckboxButton>
  );
};

export default CreditCard;
