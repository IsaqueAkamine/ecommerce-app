import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductInfo, SearchProduct } from "../screens";
import HomeTab from "./HomeTab";
import DrawerSceneWrapper from "../components/DrawerSceneWrapper";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <DrawerSceneWrapper>
      <Stack.Navigator
        initialRouteName="HomeTab"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
        <Stack.Screen name="SearchProduct" component={SearchProduct} />
      </Stack.Navigator>
    </DrawerSceneWrapper>
  );
}
