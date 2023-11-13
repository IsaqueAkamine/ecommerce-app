import "react-native-gesture-handler";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreenExpo from "expo-splash-screen";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Routes from "./src/routes";

SplashScreenExpo.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Raleway-Thin-100": require("./src/assets/fonts/Raleway-Thin.ttf"),
    "Raleway-ThinItalic-100": require("./src/assets/fonts/Raleway-ThinItalic.ttf"),
    "Raleway-ExtraLight-200": require("./src/assets/fonts/Raleway-ExtraLight.ttf"),
    "Raleway-ExtraLightItalic-200": require("./src/assets/fonts/Raleway-ExtraLightItalic.ttf"),
    "Raleway-Light-300": require("./src/assets/fonts/Raleway-Light.ttf"),
    "Raleway-LightItalic-300": require("./src/assets/fonts/Raleway-LightItalic.ttf"),
    "Raleway-Regular": require("./src/assets/fonts/Raleway-Regular.ttf"),
    "Raleway-Italic": require("./src/assets/fonts/Raleway-Italic.ttf"),
    "Raleway-Medium-500": require("./src/assets/fonts/Raleway-Medium.ttf"),
    "Raleway-MediumItalic-500": require("./src/assets/fonts/Raleway-MediumItalic.ttf"),
    "Raleway-SemiBold-600": require("./src/assets/fonts/Raleway-SemiBold.ttf"),
    "Raleway-SemiBoldItalic-600": require("./src/assets/fonts/Raleway-SemiBoldItalic.ttf"),
    "Raleway-Bold-700": require("./src/assets/fonts/Raleway-Bold.ttf"),
    "Raleway-BoldItalic-700": require("./src/assets/fonts/Raleway-BoldItalic.ttf"),
    "Raleway-ExtraBold-800": require("./src/assets/fonts/Raleway-ExtraBold.ttf"),
    "Raleway-ExtraBoldItalic-800": require("./src/assets/fonts/Raleway-ExtraBoldItalic.ttf"),
    "Raleway-Black-900": require("./src/assets/fonts/Raleway-Black.ttf"),
    "Raleway-BlackItalic-900": require("./src/assets/fonts/Raleway-BlackItalic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreenExpo.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
