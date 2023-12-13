import React from "react";

import { Container, Description, ImageNotFound, Title } from "./styles";

const NotFound: React.FC = () => {
  return (
    <Container>
      <ImageNotFound
        source={require("../../../assets/img/Saly17.png")}
        resizeMode="contain"
      />

      <Title>Item not found</Title>
      <Description>
        Try a more generic search term or try looking for alternative products.
      </Description>
    </Container>
  );
};

export default NotFound;
