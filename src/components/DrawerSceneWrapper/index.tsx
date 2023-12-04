import React from "react";
import { Platform, useWindowDimensions } from "react-native";
import { interpolate, useAnimatedStyle } from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";

import { Container } from "./styles";

const DrawerSceneWrapper = ({ children }) => {
  const progress = useDrawerProgress();
  const { width } = useWindowDimensions();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      {
        scale: interpolate(progress.value, [0, 1], [1, 0.8], "clamp"),
      },
      {
        rotateY: `${interpolate(progress.value, [0, 1], [0, -10], "clamp")}deg`,
      },
      {
        translateX: interpolate(
          progress.value,
          [0, 1],
          [0, Platform.OS === "android" ? width - 130 : -60],
          "clamp"
        ),
      },
    ],
    borderRadius: interpolate(progress.value, [0, 1], [0, 20], "clamp"),
    overflow: "hidden",
  }));

  return <Container style={animatedStyle}>{children}</Container>;
};

export default DrawerSceneWrapper;
