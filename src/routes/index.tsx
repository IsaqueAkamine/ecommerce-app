import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import AppDrawer from "./AppDrawer";

export default function Routes() {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      {/* <HomeStack /> */}
      <AppDrawer />
    </NavigationContainer>
  );
}
