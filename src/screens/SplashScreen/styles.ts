import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import colors from "../../constants/colors";
import CustomText from "../../components/CustomText";
import { SIZES } from "../../constants/sizes";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  align-items: center;
  padding-top: ${getStatusBarHeight() + SIZES.verticalScale(36)}px;
  padding-left: ${SIZES.verticalScale(46)}px;
  padding-right: ${SIZES.verticalScale(46)}px;
`;

export const Title = styled(CustomText)``;

export const Image = styled.Image`
  width: 100%;
  height: 60%;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: ${SIZES.verticalScale(46)}px 0 0 0;
`;
