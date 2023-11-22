import styled from "styled-components/native";
import { SIZES } from "../../constants/sizes";
import colors from "../../constants/colors";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Platform } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #f6f6f9;
`;

export const ImageListContainer = styled.View`
  align-items: center;
  margin-top: ${SIZES.verticalScale(8)}px;
`;

export const ProductImage = styled.Image`
  width: 50%;
  aspect-ratio: 1;
`;

export const InfoProductContainer = styled.View`
  flex: 1;
  margin-top: ${SIZES.verticalScale(38)}px;
  margin-bottom: ${Platform.OS === "android" ? SIZES.verticalScale(10) : 0}px;
  background-color: #fff;
  border-top-left-radius: ${SIZES.verticalScale(20)}px;
  border-top-right-radius: ${SIZES.verticalScale(20)}px;

  padding: 5% ${SIZES.horizontalScale(35)}px
    ${getBottomSpace() + SIZES.verticalScale(8)}px
    ${SIZES.horizontalScale(35)}px;
`;

export const Title = styled.Text`
  font-family: Raleway-SemiBold-600;
  font-size: ${SIZES.verticalScale(25)}px;
`;

export const Description = styled.Text`
  flex: 1;
  margin-top: ${SIZES.verticalScale(10)}px;
  font-family: Raleway-Regular;
  font-size: ${SIZES.verticalScale(14)}px;
  opacity: 0.5;
`;

export const TotalContainer = styled.View`
  margin-bottom: ${SIZES.verticalScale(25)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalText = styled.Text`
  font-family: Raleway-Regular;
  font-size: ${SIZES.verticalScale(15)}px;
`;

export const TotalPrice = styled.Text`
  font-family: Raleway-Bold-700;
  font-size: ${SIZES.verticalScale(20)}px;
  color: ${colors.primary};
`;
