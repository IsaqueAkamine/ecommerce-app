import styled from "styled-components/native";
import { SIZES } from "../../constants/sizes";

export const Container = styled.View`
  flex: 1;
`;

export const ProfileContainer = styled.View`
  padding: 0 ${SIZES.paddingHorizontal}px;
  gap: ${SIZES.verticalScale(10)}px;
`;

export const Title = styled.Text`
  font-family: Raleway-Bold-700;
  font-size: ${SIZES.verticalScale(28)}px;
`;

export const CardProfileContainer = styled.View`
  background-color: #fff;
  border-radius: ${SIZES.verticalScale(15)}px;
  margin-top: ${SIZES.verticalScale(50)}px;
  padding: 0 ${SIZES.horizontalScale(15)}px ${SIZES.verticalScale(15)}px
    ${SIZES.horizontalScale(15)}px;
`;

export const ImageContainer = styled.View`
  margin-top: ${-SIZES.verticalScale(25)}px;
  border-radius: 200px;
  align-self: center;
`;

export const ProfileImage = styled.Image`
  width: ${SIZES.verticalScale(75)}px;
  aspect-ratio: 1;
  border-radius: 200px;
`;

export const Name = styled.Text`
  margin-top: ${SIZES.verticalScale(5)}px;
  align-self: center;
  font-family: Raleway-SemiBold-600;
  font-size: ${SIZES.verticalScale(18)}px;
`;

export const AddressContainer = styled.View`
  margin-top: ${SIZES.verticalScale(10)}px;
  flex-direction: row;
  gap: ${SIZES.horizontalScale(12)}px;
`;

export const PinImage = styled.Image``;

export const AddressInfoContainer = styled.View``;

export const AddressText = styled.Text`
  font-family: Raleway-Regular;
  font-size: ${SIZES.verticalScale(12)}px;
`;

export const ButtonContainer = styled.View`
  gap: ${SIZES.verticalScale(10)}px;
`;
