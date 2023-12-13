import styled from "styled-components/native";
import { SIZES } from "../../../constants/sizes";
import colors from "../../../constants/colors";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: ${SIZES.paddingHorizontal}px;
`;

export const Title = styled.Text`
  font-family: Raleway-SemiBold-600;
  font-size: ${SIZES.verticalScale(26)}px;
`;

export const Description = styled.Text`
  font-family: Raleway-Regular;
  font-size: ${SIZES.verticalScale(15)}px;
  color: ${colors.text_secondary};
  text-align: center;
  line-height: ${SIZES.verticalScale(22)}px;
  margin-top: ${SIZES.verticalScale(17)}px;
`;

export const ImageNotFound = styled.Image`
  width: ${SIZES.width}px;
`;
