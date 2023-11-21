import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { SIZES } from "../../constants/sizes";

export const Container = styled.View`
  margin-top: ${getStatusBarHeight() + SIZES.verticalScale(14)}px;
  flex-direction: row;
  padding: 0 ${SIZES.horizontalScale(35)}px;
  height: ${SIZES.verticalScale(54)}px;
  align-items: center;
  gap: ${SIZES.horizontalScale(15)}px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: Raleway-Bold-700;
  font-size: ${SIZES.verticalScale(15.5)}px;
`;

export const ButtonIcon = styled.Pressable``;

export const Icon = styled.Image`
  width: ${SIZES.verticalScale(22)}px;
  aspect-ratio: 1;
`;

export const RightSpace = styled.View`
  width: ${SIZES.verticalScale(22)}px;
`;
