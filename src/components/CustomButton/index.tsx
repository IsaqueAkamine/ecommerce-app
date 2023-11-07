import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

type TCustomButton = TouchableOpacityProps & {
  description: string;
};

const CustomButton: React.FC<TCustomButton> = ({ description, ...rest }) => {
  return (
    <Container {...rest}>
      <Title>{description}</Title>
    </Container>
  );
};

export default CustomButton;
