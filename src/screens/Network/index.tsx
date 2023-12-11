import React from "react";

import { Container, Description, ImageNoConnection, Title } from "./styles";

const Network: React.FC = () => {
  return (
    <Container>
      <ImageNoConnection
        source={require("../../assets/img/NoConnection.png")}
      />
      <Title>No internet Connection</Title>
      <Description>
        Your internet connection is currently not available plase check or try
        again
      </Description>
    </Container>
  );
};

export default Network;
