//import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LoadScreen from "./app/screens/LoadScreen";
//import BottomTabNavigator from "./app/navigation/BottomNavigator";
import TabNavigator from "./app/navigation/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./app/screens/HomeScreen";
import * as Font from "expo-font";
//import { createIconSetFromIcoMoon } from "@expo/vector-icons";
//import AppLoading from "expo-app-loading";

export default function App() {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Comfortaa: require("../assets/fonts/comfortaa/Comfortaa-Regular.ttf"),
        Montserrat: require("../assets/fonts/montserrat/Montserrat-Regular.ttf"),
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
        <HomeScreen />
      </NavigationContainer>
    </View>
  );
}
