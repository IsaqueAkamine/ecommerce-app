import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../screens";

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeStack"
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
