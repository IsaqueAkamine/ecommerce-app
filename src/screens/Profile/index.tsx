import React from "react";

import HeaderBar from "../../components/HeaderBar";
import ProfileButton from "../../components/ProfileButton";

import {
  AddressContainer,
  AddressInfoContainer,
  AddressText,
  ButtonContainer,
  CardProfileContainer,
  Container,
  ImageContainer,
  Name,
  PinImage,
  ProfileContainer,
  ProfileImage,
  Title,
} from "./styles";

const Profile: React.FC = () => {
  return (
    <Container>
      <HeaderBar />
      <ProfileContainer>
        <Title>My profile</Title>
        <CardProfileContainer>
          <ImageContainer>
            <ProfileImage
              source={{
                uri: "https://randomuser.me/api/portraits/men/32.jpg",
              }}
            />
          </ImageContainer>
          <Name>John Doe</Name>

          <AddressContainer>
            <PinImage source={require("../../assets/icons/Location.png")} />
            <AddressInfoContainer>
              <AddressText>Address: </AddressText>
              <AddressText>M13 4GR </AddressText>
              <AddressText>Manchester, UK </AddressText>
            </AddressInfoContainer>
          </AddressContainer>
        </CardProfileContainer>

        <ButtonContainer>
          <ProfileButton description="Edit Profile" />
          <ProfileButton description="Shopping address" />
          <ProfileButton description="Order history" />
          <ProfileButton description="Cards" />
          <ProfileButton description="Notifications" />
        </ButtonContainer>
      </ProfileContainer>
    </Container>
  );
};

export default Profile;
