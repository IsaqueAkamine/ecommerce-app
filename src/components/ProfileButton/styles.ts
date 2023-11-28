import styled from "styled-components/native";
import { SIZES } from "../../constants/sizes";

export const Container = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: ${SIZES.verticalScale(15)}px;
  padding: ${SIZES.verticalScale(15)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  font-family: Raleway-Bold-700;
  font-size: ${SIZES.verticalScale(14)}px;
`;

export const ButtonIcon = styled.Image`
  width: ${SIZES.horizontalScale(20)}px;
  aspect-ratio: 1;
`;
