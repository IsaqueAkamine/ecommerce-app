import styled from "styled-components/native";
import { SIZES } from "../../constants/sizes";
import colors from "../../constants/colors";

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text``;

export const NoFavoriteImage = styled.Image`
  width: auto;
  height: auto;
  aspect-ratio: 1;
`;

export const InfoSection = styled.View`
  align-items: center;
`;

export const InfoTitle = styled.Text`
  font-family: Raleway-SemiBold-600;
  font-size: ${SIZES.verticalScale(25)}px;
`;

export const InfoText = styled.Text`
  margin-top: ${SIZES.verticalScale(15)}px;
  font-family: Raleway-Regular;
  font-size: ${SIZES.verticalScale(15)}px;
  padding: 0 20%;
  text-align: center;
  opacity: 0.57;
`;

export const OrderButton = styled.TouchableOpacity`
  padding: ${SIZES.verticalScale(13)}px ${SIZES.horizontalScale(48)}px;
  background-color: #58c0ea;
  border-radius: ${SIZES.verticalScale(9)}px;
  margin-top: ${SIZES.verticalScale(26)}px;
`;

export const OrderButtonText = styled.Text`
  font-family: Raleway-Bold-700;
  font-size: ${SIZES.verticalScale(15)}px;
  color: #fff;
`;

export const FavoriteContainer = styled.View`
  padding: 0 ${SIZES.paddingHorizontal}px;
  flex: 1;
`;

export const CardProduct = styled.TouchableOpacity`
  background-color: #fff;
  padding: ${SIZES.verticalScale(12.5)}px ${SIZES.horizontalScale(13.5)}px;
  border-radius: ${SIZES.verticalScale(9)}px;
  flex-direction: row;
  gap: ${SIZES.horizontalScale(8)}px;
`;

export const ProductImage = styled.Image`
  width: ${SIZES.horizontalScale(50)}px;
  aspect-ratio: 1;
`;

export const ProductInfo = styled.View`
  flex: 1;
`;

export const ProductTitle = styled.Text`
  font-family: Raleway-SemiBold-600;
  font-size: ${SIZES.verticalScale(14.5)}px;
`;

export const Price = styled.Text`
  font-size: ${SIZES.verticalScale(13.5)}px;
  margin-top: ${SIZES.verticalScale(10.8)}px;
  color: ${colors.primary};
`;
