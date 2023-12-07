import React from "react";

import { useSelector } from "react-redux";
import { selectTotal } from "../../redux/Cart/cartSlice";

import HeaderBar from "../../components/HeaderBar";
import CreditCard from "../../components/CreditCard";

import {
  AddressCardContainer,
  AddressInfoText,
  ChangeButton,
  ChangeText,
  CheckoutButton,
  CheckoutText,
  Container,
  IconImage,
  InfoTitle,
  PaymentCardContainer,
  PriceText,
  SectionContainer,
  ShippingInfoContainer,
  TotalConfirmContainer,
  TotalContainer,
  TotalText,
} from "./styles";

const Checkout: React.FC = () => {
  const totalCart = useSelector(selectTotal);

  const handleConfirmPay = () => {
    // navigation.navigate("Checkout");
    console.log("Confirm pay");
  };

  return (
    <>
      <HeaderBar title="Checkout" />
      <Container>
        <ShippingInfoContainer>
          <InfoTitle>Shipping information</InfoTitle>
          <ChangeButton
            onPress={() => {
              console.log("change pressed");
            }}
          >
            <ChangeText>change</ChangeText>
          </ChangeButton>
        </ShippingInfoContainer>
        <AddressCardContainer>
          <SectionContainer>
            <IconImage source={require("../../assets/icons/Profile.png")} />
            <AddressInfoText>Rosina Doe</AddressInfoText>
          </SectionContainer>
          <SectionContainer>
            <IconImage source={require("../../assets/icons/Location.png")} />
            <AddressInfoText>
              43 Oxford Road M13 4GR Manchester, UK
            </AddressInfoText>
          </SectionContainer>
          <SectionContainer>
            <IconImage source={require("../../assets/icons/Call.png")} />
            <AddressInfoText>+234 9011039271</AddressInfoText>
          </SectionContainer>
        </AddressCardContainer>

        <ShippingInfoContainer>
          <InfoTitle>Payment Method</InfoTitle>
        </ShippingInfoContainer>

        <PaymentCardContainer>
          <CreditCard type="Visa" />
          <CreditCard type="Mastercard" />
          <CreditCard type="Bank" />
        </PaymentCardContainer>

        <TotalConfirmContainer>
          <TotalContainer>
            <TotalText>Total</TotalText>
            <PriceText>$ {totalCart}</PriceText>
          </TotalContainer>

          <CheckoutButton onPress={handleConfirmPay}>
            <CheckoutText>Confirm and pay</CheckoutText>
          </CheckoutButton>
        </TotalConfirmContainer>
      </Container>
    </>
  );
};

export default Checkout;
