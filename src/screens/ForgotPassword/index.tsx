import React from "react";

import {
  ButtonResetPassword,
  Container,
  FormContainer,
  FormTitle,
  InputsContainer,
  LoginButton,
  LoginText,
  Title,
  TitleContainer,
} from "./styles";
import CustomInput from "../../components/CustomInput";

const ForgotPassword: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <Title type="title">Forgot</Title>
        <Title type="title">password</Title>
      </TitleContainer>

      <FormContainer>
        <FormTitle>No worries</FormTitle>
        <Title
          type="body"
          style={{ color: "#000", opacity: 0.5, marginTop: 8 }}
        >
          Let's fix this so you can get in again
        </Title>

        <InputsContainer>
          <CustomInput
            title="Email"
            placeholder="email@email.com"
            type="email"
          />
        </InputsContainer>

        <ButtonResetPassword description="Reset password" theme="dark" />

        <LoginButton>
          <LoginText>Login</LoginText>
        </LoginButton>
      </FormContainer>
    </Container>
  );
};

export default ForgotPassword;
