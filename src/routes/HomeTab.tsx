import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Favorites, Home, Profile } from "../screens";
import { Image } from "react-native";
import colors from "../constants/colors";
import { CartStack } from "./CartStack";

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <Image
                source={require("../assets/icons/Home.png")}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? colors.primary : "gray",
                }}
              />
            );
          } else if (route.name === "Favorites") {
            return (
              <Image
                source={require("../assets/icons/Heart.png")}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? colors.primary : "gray",
                }}
              />
            );
          } else if (route.name === "Profile") {
            return (
              <Image
                source={require("../assets/icons/Profile.png")}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? colors.primary : "gray",
                }}
              />
            );
          } else if (route.name === "CartStack") {
            return (
              <Image
                source={require("../assets/icons/Buy.png")}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? colors.primary : "gray",
                }}
              />
            );
          }
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: colors.background_gray,
          borderTopWidth: 0,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{ tabBarStyle: { display: "none" } }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarStyle: { display: "none" } }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{ tabBarStyle: { display: "none" } }}
      />
    </Tab.Navigator>
  );
}
