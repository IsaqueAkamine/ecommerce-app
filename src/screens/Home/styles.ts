import styled from "styled-components/native";
import colors from "../../constants/colors";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { SIZES } from "../../constants/sizes";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background_gray};
`;

export const HeaderContainer = styled.View`
  padding: ${getStatusBarHeight() + SIZES.verticalScale(17)}px
    ${SIZES.horizontalScale(35)}px;
`;

export const HeaderMenuSearchContainer = styled.View`
  flex-direction: row;
  gap: ${SIZES.horizontalScale(20)}px;
  align-items: center;
`;

export const HeaderMenuIcon = styled.Image`
  width: ${SIZES.verticalScale(20)}px;
  aspect-ratio: 1;
`;

export const TitleContainer = styled.View`
  margin-top: ${SIZES.verticalScale(45)}px;
`;

export const Title = styled.Text`
  font-family: Raleway-Bold-700;
  font-size: ${SIZES.verticalScale(31)}px;
`;

export const CategoryContainer = styled.View``;

export const ProductContainer = styled.View`
  margin-top: ${SIZES.verticalScale(54)}px;
`;
