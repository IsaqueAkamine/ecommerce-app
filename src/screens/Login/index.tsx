import React from "react";
import { useNavigation } from "@react-navigation/native";

import CustomInput from "../../components/CustomInput";

import {
  ButtonLogin,
  Container,
  CreateAccountButton,
  CreateAccountText,
  ForgotButton,
  ForgotText,
  FormContainer,
  FormTitle,
  InputsContainer,
  Title,
  TitleContainer,
} from "./styles";

const Login: React.FC = () => {
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <Container>
      <TitleContainer>
        <Title type="title">Welcome</Title>
        <Title type="title">back</Title>
      </TitleContainer>

      <FormContainer>
        <FormTitle>Login</FormTitle>

        <InputsContainer>
          <CustomInput
            title="Email"
            placeholder="email@email.com"
            type="email"
          />
          <CustomInput
            title="Password"
            placeholder="password"
            type="password"
          />
        </InputsContainer>

        <ForgotButton onPress={handleForgotPassword}>
          <ForgotText>Forgot password?</ForgotText>
        </ForgotButton>

        <ButtonLogin description="Login" theme="dark" />

        <CreateAccountButton onPress={handleSignUp}>
          <CreateAccountText>Create account</CreateAccountText>
        </CreateAccountButton>
      </FormContainer>
    </Container>
  );
};

export default Login;
