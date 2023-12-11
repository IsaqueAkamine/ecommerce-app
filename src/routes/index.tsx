import React, { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/Auth/authSlice";
import AuthStack from "./AuthStack";
import AppDrawer from "./AppDrawer";
import { Network } from "../screens";

export default function Routes() {
  const user = useSelector(selectCurrentUser);
  const [isConnected, setIsConnected] = useState(true);

  const RenderApp = () => {
    return user ? <AppDrawer /> : <AuthStack />;
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer>
      {isConnected ? <RenderApp /> : <Network />}
    </NavigationContainer>
  );
}
