import React from "react";

import { ButtonContainer, Container, Image, Title } from "./styles";
import { Button, View } from "react-native";
import CustomButton from "../../components/CustomButton";

const SplashScreen: React.FC = () => {
  return (
    <Container>
      <Title type="title">Find your Gadget</Title>
      <Image source={require("../../assets/img/Saly-19.png")} />

      <ButtonContainer>
        <CustomButton description="Get started" />
      </ButtonContainer>
    </Container>
  );
};

export default SplashScreen;
