import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      {/* <Stack.Screen name="Drawer" component={() => <></>} /> */}
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
