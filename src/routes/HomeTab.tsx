import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorite" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
      <Tab.Screen name="Cart" component={Home} />
    </Tab.Navigator>
  );
}
