import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";
import colors from "../../constants/colors";

type TCustomButton = TouchableOpacityProps & {
  description: string;
  theme?: "light" | "dark";
  isLoading?: boolean;
};

const CustomButton: React.FC<TCustomButton> = ({
  description,
  theme = "light",
  isLoading = false,
  ...rest
}) => {
  return (
    <Container {...rest} theme={theme}>
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={theme === "light" ? colors.primary : "#fff"}
        />
      ) : (
        <Title theme={theme}>{description}</Title>
      )}
    </Container>
  );
};

export default CustomButton;
