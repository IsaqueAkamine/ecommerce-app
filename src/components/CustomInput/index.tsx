import React, { ReactNode } from "react";
import { TextInputProps } from "react-native";

import defaultIcon from "../../assets/icons/Message.png";

import {
  Container,
  InfoContainer,
  StyledIcon,
  StyledInput,
  Title,
} from "./styles";

type TCustomInput = TextInputProps & {
  type: "email" | "password";
};

type TInput = {
  title: string;
  icon: defaultIcon;
  password?: boolean;
};

const CustomInput: React.FC<TCustomInput> = ({ type, ...rest }) => {
  let input = {} as TInput;
  switch (type) {
    case "email":
      input = {
        title: "Email",
        icon: require("../../assets/icons/Message.png"),
      };
      break;
    case "password":
      input = {
        title: "Password",
        icon: require("../../assets/icons/Lock.png"),
        password: true,
      };
      break;
    default:
      input = {
        title: "Input",
        icon: require("../../assets/icons/Info Circle.png"),
      };
      break;
  }

  return (
    <Container>
      <InfoContainer>
        <StyledIcon
          source={input.icon}
          resizeMode="contain"
          width={24}
          height={24}
        />
        <Title>{input.title}</Title>
      </InfoContainer>

      <StyledInput
        {...rest}
        secureTextEntry={input.password}
        keyboardType={type === "email" ? "email-address" : "default"}
      />
    </Container>
  );
};

export default CustomInput;
