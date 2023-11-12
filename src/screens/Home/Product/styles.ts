import styled from "styled-components/native";
import { SIZES } from "../../../constants/sizes";
import colors from "../../../constants/colors";

export const Container = styled.Pressable`
  align-items: center;
`;

export const ProductImage = styled.Image`
  margin: ${SIZES.verticalScale(18)}px;
  width: ${SIZES.width / 2.2}px;
  aspect-ratio: 1;
  border-radius: 500px;
  z-index: 5;
  background-color: #fff;
`;

export const ProductContainer = styled.View`
  position: relative;
  background-color: #fff;
  width: ${SIZES.width / 1.5}px;
  height: ${SIZES.verticalScale(250)}px;
  border-radius: ${SIZES.verticalScale(18)}px;
  top: -${SIZES.verticalScale(110)}px;
  padding: ${SIZES.verticalScale(110)}px ${SIZES.verticalScale(21)}px
    ${SIZES.verticalScale(36)}px ${SIZES.verticalScale(21)}px;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: Raleway-SemiBold-600;
  font-size: ${SIZES.verticalScale(16)}px;
`;

export const InfoSection = styled.View`
  position: absolute;
  bottom: ${SIZES.verticalScale(16)}px;
  align-self: center;
  align-items: center;
`;

export const Rating = styled.Text`
  font-family: Raleway-SemiBold-600;
  font-size: ${SIZES.verticalScale(14)}px;
  opacity: 0.7;
`;

export const Price = styled.Text`
  align-self: center;
  font-family: Raleway-Bold-700;
  font-size: ${SIZES.verticalScale(15.5)}px;
  margin-top: ${SIZES.verticalScale(16)}px;
  color: ${colors.primary};
`;
