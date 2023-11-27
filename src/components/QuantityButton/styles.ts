import styled from "styled-components/native";
import { SIZES } from "../../constants/sizes";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: ${SIZES.horizontalScale(8)}px;
  gap: ${SIZES.horizontalScale(8)}px;
`;

export const Quantity = styled.Text`
  font-family: Raleway-SemiBold-600;
  font-size: ${SIZES.verticalScale(14)}px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: ${SIZES.verticalScale(24)}px;
  height: ${SIZES.verticalScale(24)}px;
  background-color: #7dccec;
  border-radius: ${SIZES.verticalScale(4)}px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: Raleway-SemiBold-600;
  font-size: ${SIZES.verticalScale(19)}px;
  color: #fff;
`;
