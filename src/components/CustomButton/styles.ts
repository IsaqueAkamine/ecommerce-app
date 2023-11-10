import styled from "styled-components/native";
import colors from "../../constants/colors";
import { SIZES } from "../../constants/sizes";

type TTheme = {
  theme: "light" | "dark";
};

export const Container = styled.TouchableOpacity<TTheme>`
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : colors.primary};
  padding: ${SIZES.verticalScale(22)}px ${SIZES.horizontalScale(11)}px;
  border-radius: ${SIZES.verticalScale(9)}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<TTheme>`
  color: ${(props) => (props.theme === "light" ? colors.primary : "#fff")};
  font-family: Raleway-Bold-700;
  font-size: ${SIZES.verticalScale(18)}px;
`;
