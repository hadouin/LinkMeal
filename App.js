import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TabNavigator from "./app/navigation/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";

export default function App() {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Comfortaa: require("./app/assets/fonts/comfortaa/Comfortaa-Regular.ttf"),
        Montserrat: require("./app/assets/fonts/montserrat/Montserrat-Regular.ttf"),
        IcoMoon: require("./app/assets/icomoon/icomoon.ttf"),
      })
        .then((res) => {
          console.log("FONTS LOADED!");
          setTimeout(() => {}, 1000);
        })
        .catch((Err) => {
          console.log(Err);
        });
    }
    loadFonts();
  }, []);
  const [fontsLoaded] = useFonts({
    IcoMoon: require("./app/assets/icomoon/icomoon.ttf"),
  });
  if (!fontsLoaded) {
    return <LoadScreen />;
  }
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </View>
  );
}
