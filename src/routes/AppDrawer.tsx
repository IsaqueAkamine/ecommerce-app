import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, Platform } from "react-native";
import colors from "../constants/colors";
import { Favorites, Home, Profile } from "../screens";
import HomeStack from "./HomeStack";

const Drawer = createDrawerNavigator();

const IconProfile = require("../assets/icons/Profile.png");
const IconFavorite = require("../assets/icons/Heart.png");
const IconMyOrders = require("../assets/icons/Buy.png");
const IconDelivery = require("../assets/icons/Bag.png");
const IconSettings = require("../assets/icons/Setting.png");

export default function AppDrawer() {
  const IconImage = ({ focused, icon }) => (
    <Image
      source={icon}
      style={{
        width: 24,
        height: 24,
        tintColor: focused ? colors.light_text : colors.dark_third,
      }}
    />
  );
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
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
        drawerIcon: ({ focused, color, size }) => {
          if (route.name === "Profile") {
            return <IconImage focused={focused} icon={IconProfile} />;
          } else if (route.name === "My orders") {
            return <IconImage focused={focused} icon={IconMyOrders} />;
          } else if (route.name === "Favorites") {
            return <IconImage focused={focused} icon={IconFavorite} />;
          } else if (route.name === "Delivery") {
            return <IconImage focused={focused} icon={IconDelivery} />;
          } else if (route.name === "Settings") {
            return <IconImage focused={focused} icon={IconSettings} />;
          }
        },
      })}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ drawerItemStyle: { display: "none" } }}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="My orders" component={Profile} />
      <Drawer.Screen name="Favorites" component={Favorites} />
      <Drawer.Screen name="Delivery" component={Profile} />
      <Drawer.Screen name="Settings" component={Profile} />
    </Drawer.Navigator>
  );
}
