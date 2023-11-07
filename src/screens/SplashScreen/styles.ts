import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import colors from "../../constants/colors";
import CustomText from "../../components/CustomText";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  align-items: center;
  padding-top: ${getStatusBarHeight() + 40}px;
  padding-bottom: ${getBottomSpace() + 100}px;
  padding-left: 50px;
  padding-right: 50px;
`;

export const Title = styled(CustomText)``;

export const Image = styled.Image`
  width: 100%;
  aspect-ratio: 1;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  width: 100%;
  /* background-color: ${colors.primary}50; */
  padding: 50px 0 0 0;
  margin-top: -10px;
`;
