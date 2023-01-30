import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import { Mentor } from "../screens/Mentor";
import { Chat } from "../screens/Chat";
import { CallList } from "../screens/CallsList";
import { Profile } from "../screens/Profile";
import { MainDrawer } from "./Drawer";

const AppStack = createStackNavigator();

export function AppRoutes() {
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen
        options={{ headerShown: false }}
        name="MainDrawer"
        component={MainDrawer}
      />
      <AppStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <AppStack.Screen name="Mentor" component={Mentor} />
      <AppStack.Screen
        options={{ headerShown: false }}
        name="Chat"
        component={Chat}
      />
      <AppStack.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Profile}
      />
      <AppStack.Screen
        options={{ headerShown: false }}
        name="CallList"
        component={CallList}
      />
    </AppStack.Navigator>
  );
}
