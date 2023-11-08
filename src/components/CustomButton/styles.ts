import styled from "styled-components/native";
import colors from "../../constants/colors";

type TTheme = {
  theme: "light" | "dark";
};

export const Container = styled.TouchableOpacity<TTheme>`
  /* background-color: #fff; */
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : colors.primary};
  padding: 24px 12px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  /* box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.1); */
`;

export const Title = styled.Text<TTheme>`
  color: ${(props) => (props.theme === "light" ? colors.primary : "#fff")};
  font-family: Raleway-Bold-700;
  font-size: 20px;
`;
