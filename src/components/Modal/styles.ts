import styled from "styled-components/native";
import { SIZES } from "../../constants/sizes";

export const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledModal = styled.View`
  position: absolute;
  bottom: 0;
  height: 50%;
  background-color: #fff;
  width: 100%;
  border-top-left-radius: ${SIZES.verticalScale(18)}px;
  border-top-right-radius: ${SIZES.verticalScale(18)}px;
  padding-left: ${SIZES.verticalScale(23)}px;
  padding-right: ${SIZES.verticalScale(23)}px;
`;

export const Indicator = styled.View`
  width: ${SIZES.horizontalScale(45)}px;
  height: ${SIZES.verticalScale(4)}px;
  background-color: #ccc;
  border-radius: ${SIZES.verticalScale(45)}px;
  align-self: center;
  margin-top: ${SIZES.verticalScale(5)}px;
`;
