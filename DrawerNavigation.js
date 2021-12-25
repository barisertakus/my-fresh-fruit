import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/Home";
import Favorites from "./screens/Favorites";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />  
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  );
}
