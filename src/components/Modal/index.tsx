import React, { ReactNode } from "react";

import { Container, Indicator, StyledModal } from "./styles";

type TModal = {
  children: ReactNode;
};

const Modal: React.FC<TModal> = ({ children }) => {
  return (
    <Container>
      <StyledModal>
        <Indicator />
        {children}
      </StyledModal>
    </Container>
  );
};

export default Modal;
