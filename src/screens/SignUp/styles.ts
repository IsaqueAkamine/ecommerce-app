import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import CustomText from "../../components/CustomText";
import colors from "../../constants/colors";
import CustomButton from "../../components/CustomButton";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  padding-top: ${getStatusBarHeight() + 70}px;
`;

export const TitleContainer = styled.View`
  padding: 0 10%;
`;

export const Title = styled(CustomText)``;

export const FormContainer = styled.View`
  flex: 1;
  margin-top: 62px;
  background-color: #fff;
  padding: 36px 50px;
  border-radius: 20px;
`;

export const FormTitle = styled.Text`
  font-family: Raleway-Bold-700;
  font-size: 18px;
`;

export const InputsContainer = styled.View`
  margin-top: 40px;
  gap: 40px;
`;

export const ButtonSignUp = styled(CustomButton)`
  margin-top: 52px;
`;

export const LoginButton = styled.Pressable`
  margin-top: 20px;
`;

export const LoginText = styled.Text`
  font-family: Raleway-SemiBold-600;
  font-size: 17px;
  color: ${colors.primary};
  text-align: center;
`;
