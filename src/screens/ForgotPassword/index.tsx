import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();

  const [modal, setModal] = useState(false);

  const handleLogin = () => {
    navigation.goBack();
  };

  const ModalInfo = () => {
    return (
      <ModalContainer>
        <ModalTitle>You’ve got an email</ModalTitle>
        <ModalInfoText>
          We sent you an email. Tap the link in that email to reset your
          password.
        </ModalInfoText>
        <ModalButtonConfirm
          description="Got it"
          theme="dark"
          onPress={() => setModal(false)}
        />
      </ModalContainer>
    );
  };

  const handleResetPassword = () => {
    setModal(true);
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

        <ButtonResetPassword
          description="Reset password"
          theme="dark"
          onPress={handleResetPassword}
        />

        <LoginButton onPress={handleLogin}>
          <LoginText>Login</LoginText>
        </LoginButton>
      </FormContainer>
      <Modal show={modal} close={() => setModal(false)}>
        <ModalInfo />
      </Modal>
    </Container>
  );
};

export default ForgotPassword;
