import styled from "styled-components/native";
import colors from "../../constants/colors";
import { body, heading } from "../../constants/typography";
import { SIZES } from "../../constants/sizes";

type TStyledText = {
  type: "title" | "body";
};

export const StyledText = styled.Text<TStyledText>`
  color: ${colors.light_text};
  font-size: ${(props) =>
    props.type === "title"
      ? SIZES.verticalScale(heading.fontSize)
      : SIZES.verticalScale(body.fontSize)}px;
  font-family: ${(props) =>
    props.type === "title" ? "Raleway-Bold-700" : "Raleway-Regular"};
  line-height: ${(props) =>
    props.type === "title"
      ? `${SIZES.verticalScale(63)}px`
      : `${SIZES.verticalScale(18)}px`};
`;
