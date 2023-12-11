import styled from "styled-components/native";
import { SIZES } from "../../constants/sizes";
import colors from "../../constants/colors";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-left: ${SIZES.paddingHorizontal}px;
  padding-right: ${SIZES.paddingHorizontal}px;
  background-color: ${colors.background_gray};
`;

export const ImageNoConnection = styled.Image`
  margin-top: -${SIZES.paddingHorizontal}px;
  width: ${SIZES.width}px;
  aspect-ratio: 1;
  opacity: 0.9;
`;

export const Title = styled.Text`
  font-family: Raleway-Bold-700;
  font-size: ${SIZES.verticalScale(18)}px;
`;

export const Description = styled.Text`
  margin-top: ${SIZES.padding}px;
  font-family: Raleway-Regular;
  font-size: ${SIZES.verticalScale(16)}px;
  color: ${colors.text_secondary};
`;
