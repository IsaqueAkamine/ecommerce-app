import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/Auth/authSlice";
import AuthStack from "./AuthStack";
import AppDrawer from "./AppDrawer";

export default function Routes() {
  const user = useSelector(selectCurrentUser);

  return (
    <NavigationContainer>
      {user ? <AppDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
}
