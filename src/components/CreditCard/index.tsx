import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  creditCardSelected,
  selectCreditCard,
} from "../../redux/Cart/cartSlice";

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
};

const CreditCard: React.FC<TCreditCard> = ({ type }) => {
  const dispatch = useDispatch();
  const isSelected = useSelector(creditCardSelected) === type;

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

  const handleSelectCreditCard = () => {
    dispatch(selectCreditCard(type));
  };

  return (
    <CheckboxButton onPress={handleSelectCreditCard}>
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
