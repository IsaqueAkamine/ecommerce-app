import React from "react";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../components/CustomInput";

import {
  ButtonSignUp,
  Container,
  FormContainer,
  FormTitle,
  InputsContainer,
  LoginButton,
  LoginText,
  Title,
  TitleContainer,
} from "./styles";

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <TitleContainer>
        <Title type="title">Sign up</Title>
        <Title type="title">and enjoy</Title>
      </TitleContainer>

      <FormContainer>
        <FormTitle>Sign Up</FormTitle>

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
          <CustomInput
            title="Confirm password"
            placeholder="confirm password"
            type="password"
          />
        </InputsContainer>

        <ButtonSignUp description="Sign Up" theme="dark" />

        <LoginButton onPress={handleLogin}>
          <LoginText>Login</LoginText>
        </LoginButton>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
