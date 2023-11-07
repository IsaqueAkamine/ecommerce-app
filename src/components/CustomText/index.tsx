import React, { ReactNode } from "react";

import { StyledText } from "./styles";

type TCustomText = {
  children: ReactNode;
  type: "title" | "body";
};

const CustomText: React.FC<TCustomText> = ({ children, type }) => {
  return <StyledText type={type}>{children}</StyledText>;
};

export default CustomText;
