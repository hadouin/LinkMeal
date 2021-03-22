import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import {
  useFonts,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_700Bold,
  Comfortaa_600SemiBold,
} from "@expo-google-fonts/comfortaa";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import LoadScreen from "./app/screens/LoadScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNav from "./app/navigation/RootNav";

export default function App() {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("./app/assets/icomoon/icomoon.ttf"),
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
    Montserrat_400Regular,
  });
  if (!fontsLoaded) {
    return <LoadScreen />;
  }

  return (
    <SafeAreaProvider>
      <RootNav />
    </SafeAreaProvider>
  );
}
