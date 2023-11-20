import styled from "styled-components/native";
import { SIZES } from "../../constants/sizes";

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text``;

export const NoFavoriteImage = styled.Image`
  width: 1rem;
  height: 1rem;
  aspect-ratio: 1;

  /* width: ${SIZES.horizontalScale(190)}px;
  height: ${SIZES.horizontalScale(190)}px;
  aspect-ratio: 1; */
`;

export const InfoSection = styled.View`
  align-items: center;
`;

export const InfoTitle = styled.Text`
  font-family: Raleway-SemiBold-600;
  font-size: ${SIZES.verticalScale(25)}px;
`;

export const InfoText = styled.Text`
  margin-top: ${SIZES.verticalScale(15)}px;
  font-family: Raleway-Regular;
  font-size: ${SIZES.verticalScale(15)}px;
  padding: 0 20%;
  text-align: center;
  opacity: 0.57;
`;

export const OrderButton = styled.TouchableOpacity`
  padding: ${SIZES.verticalScale(13)}px ${SIZES.horizontalScale(48)}px;
  background-color: #58c0ea;
  border-radius: ${SIZES.verticalScale(9)}px;
  margin-top: ${SIZES.verticalScale(26)}px;
`;

export const OrderButtonText = styled.Text`
  font-family: Raleway-Bold-700;
  font-size: ${SIZES.verticalScale(15)}px;
  color: #fff;
`;
