import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./HomeStack";

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeStack"
    >
      <Drawer.Screen name="HomeStack" component={HomeStack} />
    </Drawer.Navigator>
  );
}
