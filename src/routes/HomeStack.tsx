import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductInfo } from "../screens";
import HomeTab from "./HomeTab";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeTab"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeTab" component={HomeTab} />
      <Stack.Screen name="ProductInfo" component={ProductInfo} />
    </Stack.Navigator>
  );
}
