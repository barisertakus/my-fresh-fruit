import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "./screens/Home";
import Splash from "./screens/Splash";
import Welcome from "./screens/Welcome";
import Authentication from "./screens/Authentication";
import Password from "./screens/Password";
import ProductDetails from "./screens/ProductDetails";
import Basket from "./screens/Basket";
import DrawerNavigation from "./DrawerNavigation";

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: "slide_from_bottom" }} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Basket" component={Basket} />
        {/* <Stack.Screen name="Home" component={Home} />   */}
        <Stack.Screen name="DrawerNav" component={DrawerNavigation} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
