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
  ModalButtonConfirm,
  ModalTitle,
  ModalContainer,
  ModalInfoText,
} from "./styles";
import CustomInput from "../../components/CustomInput";
import Modal from "../../components/Modal";

const ForgotPassword: React.FC = () => {
  const ModalInfo = () => {
    return (
      <ModalContainer>
        <ModalTitle>You’ve got an email</ModalTitle>
        <ModalInfoText>
          We sent you an email. Tap the link in that email to reset your
          password.
        </ModalInfoText>
        <ModalButtonConfirm description="Got it" theme="dark" />
      </ModalContainer>
    );
  };

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
      <Modal>
        <ModalInfo />
      </Modal>
    </Container>
  );
};

export default ForgotPassword;
