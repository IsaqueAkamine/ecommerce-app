import styled from "styled-components/native";
import { SIZES } from "../../constants/sizes";
import colors from "../../constants/colors";

export const Container = styled.View`
  flex: 1;
  padding: ${SIZES.verticalScale(14)}px ${SIZES.verticalScale(18)}px;
  border-width: ${SIZES.verticalScale(2)}px;
  border-color: ${colors.dark_third};
  border-radius: ${SIZES.verticalScale(50)}px;
  flex-direction: row;
  align-items: center;
  gap: ${SIZES.horizontalScale(10)}px;
`;

export const SearchIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-family: Raleway-SemiBold-600;
  font-size: ${SIZES.verticalScale(15.5)}px;
`;
