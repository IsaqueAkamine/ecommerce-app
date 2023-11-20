import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/Auth/authSlice";

export default function Routes() {
  const user = useSelector(selectCurrentUser);

  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
