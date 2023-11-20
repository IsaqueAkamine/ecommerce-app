import React from "react";

import HeaderBar from "../../components/HeaderBar";

import {
  Container,
  InfoSection,
  InfoText,
  InfoTitle,
  NoFavoriteImage,
  OrderButton,
  OrderButtonText,
  Title,
} from "./styles";

const Favorites: React.FC = () => {
  const NoFavoriteImg = require("../../assets/img/Sally-No-Favorite.png");
  return (
    <Container>
      {/* <Title>Favorite screen</Title> */}
      <HeaderBar title="Favorites" />
      <NoFavoriteImage source={NoFavoriteImg} resizeMode="contain" />
      <InfoSection>
        <InfoTitle>No favorites yet</InfoTitle>
        <InfoText>Hit the button down below to Create an order</InfoText>

        <OrderButton>
          <OrderButtonText>Start ordering</OrderButtonText>
        </OrderButton>
      </InfoSection>
    </Container>
  );
};

export default Favorites;
