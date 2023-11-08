import React, { ReactNode } from "react";
import { TextProps } from "react-native";

import { StyledText } from "./styles";

type TCustomText = TextProps & {
  children: ReactNode;
  type: "title" | "body";
};

const CustomText: React.FC<TCustomText> = ({ children, type, ...rest }) => {
  return (
    <StyledText type={type} {...rest}>
      {children}
    </StyledText>
  );
};

export default CustomText;
