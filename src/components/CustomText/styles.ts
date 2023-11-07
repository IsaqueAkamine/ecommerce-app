import styled from "styled-components/native";
import colors from "../../constants/colors";
import { body, heading } from "../../constants/typography";

type TStyledText = {
  type: "title" | "body";
};

export const StyledText = styled.Text<TStyledText>`
  color: ${colors.light_text};
  font-size: ${(props) =>
    props.type === "title" ? heading.fontSize : body.fontSize}px;
  font-family: ${(props) =>
    props.type === "title" ? "Raleway-Bold-700" : "Raleway-Regular"};
  line-height: ${(props) => (props.type === "title" ? "70px" : "20px")};
`;
