import { createDrawerNavigator } from "@react-navigation/drawer";
import { Platform } from "react-native";
import colors from "../constants/colors";
import { Home, Profile } from "../screens";
import HomeStack from "./HomeStack";

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colors.transparent,
        drawerInactiveBackgroundColor: colors.transparent,
        drawerActiveTintColor: colors.light_text,
        drawerInactiveTintColor: colors.dark_third,
        drawerHideStatusBarOnOpen: Platform.OS === "ios" ? true : false,
        overlayColor: colors.transparent,
        drawerStyle: {
          backgroundColor: colors.primary,
          width: "60%",
        },
        sceneContainerStyle: {
          backgroundColor: colors.primary,
        },
      }}
    >
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}
