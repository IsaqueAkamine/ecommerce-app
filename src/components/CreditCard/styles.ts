import styled from "styled-components/native";
import { SIZES } from "../../constants/sizes";
import colors from "../../constants/colors";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${SIZES.horizontalScale(12)}px;
`;

export const ImageContainer = styled.View`
  border-color: #d6d9e0;
  border-width: 1px;
  border-radius: ${SIZES.radius}px;
  padding: ${SIZES.verticalScale(5)}px ${SIZES.horizontalScale(10)}px;

  width: ${SIZES.horizontalScale(62)}px;
  height: ${SIZES.horizontalScale(40)}px;
  align-items: center;
  justify-content: center;
`;

export const CreditCardImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const PaymentText = styled.Text`
  font-family: Raleway-Regular;
  font-size: ${SIZES.verticalScale(15)}px;
`;

export const CheckboxButton = styled.Pressable``;

type TCheckboxContainer = {
  selected: boolean;
};

export const CheckboxContainer = styled.View<TCheckboxContainer>`
  height: ${SIZES.verticalScale(14)}px;
  width: ${SIZES.verticalScale(14)}px;
  border-width: 1px;
  border-radius: 50%;
  border-color: ${(props) => (props.selected ? colors.primary : "#9f9f9f")};
  padding: ${SIZES.verticalScale(2)}px;
`;

export const CheckboxSelected = styled.View`
  flex: 1;
  border-radius: 50%;
  background-color: ${colors.primary};
`;
