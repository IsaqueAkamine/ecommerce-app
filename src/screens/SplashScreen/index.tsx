import React from "react";
import { useNavigation } from "@react-navigation/native";

import CustomButton from "../../components/CustomButton";
import { ButtonContainer, Container, Image, Title } from "./styles";

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate("Login");
  };

  return (
    <Container>
      <Title type="title">Find your Gadget</Title>
      <Image
        source={require("../../assets/img/Saly-19.png")}
        resizeMode="contain"
      />

      <ButtonContainer>
        <CustomButton description="Get started" onPress={handleGetStarted} />
      </ButtonContainer>
    </Container>
  );
};

export default SplashScreen;
