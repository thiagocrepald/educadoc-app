import "react-native-gesture-handler";
import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {
  Mulish_800ExtraBold,
  Mulish_500Medium,
  Mulish_400Regular,
  Mulish_700Bold,
} from "@expo-google-fonts/mulish";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Mulish_800ExtraBold,
    Mulish_700Bold,
    Mulish_500Medium,
    Mulish_400Regular,
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <AuthProvider>
          <ThemeProvider theme={theme}>
            <StatusBar
              barStyle="dark-content"
              backgroundColor="transparent"
              translucent
            />
            <Routes />
          </ThemeProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
