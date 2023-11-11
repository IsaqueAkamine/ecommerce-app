import styled from "styled-components/native";
import { SIZES } from "../../../constants/sizes";
import colors from "../../../constants/colors";

type TCategoryProps = {
  selected: boolean;
};

export const CategoryButton = styled.Pressable``;

export const CategoryButtonSelected = styled.View`
  height: ${SIZES.verticalScale(2.7)}px;
  background-color: ${colors.primary};
  border-radius: 10px;
  margin-top: ${SIZES.verticalScale(9)}px;
`;

export const CategoryText = styled.Text<TCategoryProps>`
  font-family: Raleway-SemiBold-600;
  font-size: ${SIZES.verticalScale(15.5)}px;
  color: ${(props) =>
    props.selected ? colors.primary : colors.text_secondary};
  text-transform: capitalize;
`;
