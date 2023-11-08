import React from "react";

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

        <ForgotButton>
          <ForgotText>Forgot password?</ForgotText>
        </ForgotButton>

        <ButtonLogin description="Login" theme="dark" />

        <CreateAccountButton>
          <CreateAccountText>Create account</CreateAccountText>
        </CreateAccountButton>
      </FormContainer>
    </Container>
  );
};

export default Login;