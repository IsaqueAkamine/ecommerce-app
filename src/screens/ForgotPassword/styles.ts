import styled from "styled-components/native";
import colors from "../../constants/colors";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { SIZES } from "../../constants/sizes";
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/CustomButton";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  padding-top: ${getStatusBarHeight() + SIZES.verticalScale(65)}px;
`;

export const TitleContainer = styled.View`
  padding: 0 10%;
`;

export const Title = styled(CustomText)``;

export const FormContainer = styled.View`
  flex: 1;
  margin-top: ${SIZES.verticalScale(56)}px;
  background-color: #fff;
  padding: ${SIZES.verticalScale(32)}px ${SIZES.horizontalScale(46)}px;
  border-top-left-radius: ${SIZES.verticalScale(18)}px;
  border-top-right-radius: ${SIZES.verticalScale(18)}px;
`;

export const FormTitle = styled.Text`
  font-family: Raleway-Bold-700;
  font-size: ${SIZES.verticalScale(16)}px;
`;

export const InputsContainer = styled.View`
  margin-top: ${SIZES.verticalScale(36)}px;
  gap: ${SIZES.verticalScale(36)}px;
`;

export const ButtonResetPassword = styled(CustomButton)`
  margin-top: ${SIZES.verticalScale(46)}px;
`;

export const LoginButton = styled.Pressable`
  margin-top: ${SIZES.verticalScale(18)}px;
`;

export const LoginText = styled.Text`
  font-family: Raleway-SemiBold-600;
  font-size: 17px;
  color: ${colors.primary};
  text-align: center;
`;
