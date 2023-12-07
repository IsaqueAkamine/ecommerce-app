import styled from "styled-components/native";
import colors from "../../constants/colors";
import { SIZES } from "../../constants/sizes";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background_gray};
  padding: 0 ${SIZES.paddingHorizontal}px;
`;

export const ShippingInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${SIZES.verticalScale(22)}px;
`;

export const InfoTitle = styled.Text`
  font-family: Raleway-SemiBold-600;
  font-size: ${SIZES.verticalScale(15)}px;
`;

export const ChangeButton = styled.Pressable``;

export const ChangeText = styled.Text`
  font-family: Raleway-SemiBold-600;
  font-size: ${SIZES.verticalScale(13.5)}px;
  color: ${colors.primary};
`;

export const AddressCardContainer = styled.View`
  margin-top: ${SIZES.verticalScale(18)}px;
  background-color: #fff;
  padding: ${SIZES.verticalScale(20)}px ${SIZES.horizontalScale(27)}px;
  border-radius: ${SIZES.radius}px;
  gap: ${SIZES.horizontalScale(12)}px;
`;

export const SectionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${SIZES.horizontalScale(10)}px;
`;

export const IconImage = styled.Image`
  width: ${SIZES.horizontalScale(20)}px;
  aspect-ratio: 1;
`;

export const AddressInfoText = styled.Text`
  font-family: Raleway-Regular;
  font-size: ${SIZES.verticalScale(15)}px;
`;

export const PaymentCardContainer = styled.View`
  margin-top: ${SIZES.verticalScale(18)}px;
  background-color: #fff;
  padding: ${SIZES.verticalScale(20)}px;
  border-radius: ${SIZES.radius}px;
  gap: ${SIZES.horizontalScale(12)}px;
`;

export const TotalConfirmContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-bottom: ${SIZES.paddingBottom + SIZES.verticalScale(14)}px;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalText = styled.Text`
  font-family: Raleway-Regular;
  font-size: ${SIZES.verticalScale(16)}px;
`;

export const PriceText = styled.Text`
  font-family: Raleway-Bold-700;
  font-size: ${SIZES.verticalScale(20)}px;
  color: ${colors.primary};
`;

export const CheckoutButton = styled.TouchableOpacity`
  background-color: ${colors.primary};
  padding: ${SIZES.verticalScale(20)}px;
  align-items: center;
  border-radius: ${SIZES.verticalScale(9)}px;
  margin-top: ${SIZES.verticalScale(25)}px;
`;

export const CheckoutText = styled.Text`
  font-family: Raleway-Bold-700;
  font-size: ${SIZES.verticalScale(17)}px;
  color: #fff;
`;
