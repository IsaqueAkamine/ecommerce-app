import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart, Checkout } from "../screens";

const Stack = createNativeStackNavigator();

export const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
};
