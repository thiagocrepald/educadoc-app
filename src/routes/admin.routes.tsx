import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MainDrawer } from "./Drawer";
import { Chat } from "../screens/Chat";
import { Profile } from "../screens/Profile";
import { CallList } from "../screens/CallsList";

import { StackParamsList } from "../routes/auth.routes";

const AppStack = createStackNavigator<StackParamsList>();

export function AdminRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        options={{ headerShown: false }}
        name="MainDrawer"
        component={MainDrawer}
      />
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
