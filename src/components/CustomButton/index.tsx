import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

type TCustomButton = TouchableOpacityProps & {
  description: string;
  theme?: "light" | "dark";
};

const CustomButton: React.FC<TCustomButton> = ({
  description,
  theme = "light",
  ...rest
}) => {
  return (
    <Container {...rest} theme={theme}>
      <Title theme={theme}>{description}</Title>
    </Container>
  );
};

export default CustomButton;
