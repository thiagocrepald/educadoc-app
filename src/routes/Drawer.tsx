import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Mentor } from "../screens/Mentor";
import Home from "../screens/Home";
import { CustomDrawer } from "../components/Customs/CustomDrawer";

const Drawer = createDrawerNavigator();

export function MainDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{ drawerPosition: "right", headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Mentor"
        component={Mentor}
      />
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
    </Drawer.Navigator>
  );
}
