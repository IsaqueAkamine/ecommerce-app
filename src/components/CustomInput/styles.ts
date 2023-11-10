import styled from "styled-components/native";
import { SIZES } from "../../constants/sizes";

export const Container = styled.View`
  gap: ${SIZES.verticalScale(7)}px;
  border-bottom-width: ${SIZES.verticalScale(1)}px;
  border-bottom-color: #c9c9c9;
  padding-bottom: ${SIZES.verticalScale(7)}px;
`;

export const StyledIcon = styled.Image`
  width: ${SIZES.horizontalScale(21)}px;
  height: ${SIZES.verticalScale(21)}px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${SIZES.verticalScale(7)}px;
`;

export const Title = styled.Text`
  font-family: Raleway-SemiBold-600;
  color: #868686;
  font-size: ${SIZES.verticalScale(14)}px;
`;

export const StyledInput = styled.TextInput`
  font-family: Raleway-SemiBold-600;
  font-size: ${SIZES.verticalScale(16)}px;
  padding: ${SIZES.verticalScale(3)}px 0;
`;
