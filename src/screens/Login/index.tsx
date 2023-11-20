import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { setCredentials } from "../../redux/Auth/authSlice";
import api from "../../services/api";

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
  const dispatch = useDispatch();

  const [username, setUserName] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");
  const [isloading, setIsloading] = useState(false);

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const handleLogin = () => {
    setIsloading(true);
    const body = {
      username,
      password,
    };
    api
      .post("/auth/login", body)
      .then((res) => {
        console.log("LOGIN OK: ", res.data);
        dispatch(
          setCredentials({ user: username, accessToken: res?.data?.token })
        );
      })
      .catch((error) => Alert.alert("Error", error.message))
      .finally(() => {
        setIsloading(false);
      });
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
            value={username}
            onChangeText={setUserName}
          />
          <CustomInput
            title="Password"
            placeholder="password"
            type="password"
            value={password}
            onChangeText={setPassword}
          />
        </InputsContainer>

        <ForgotButton onPress={handleForgotPassword}>
          <ForgotText>Forgot password?</ForgotText>
        </ForgotButton>

        <ButtonLogin
          description="Login"
          theme="dark"
          onPress={handleLogin}
          isLoading={isloading}
        />

        <CreateAccountButton onPress={handleSignUp}>
          <CreateAccountText>Create account</CreateAccountText>
        </CreateAccountButton>
      </FormContainer>
    </Container>
  );
};

export default Login;
