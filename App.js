import React, { useState, useEffect, useContext } from "react";
import {
  useFonts,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold,
} from "@expo-google-fonts/comfortaa";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import LoadScreen from "./app/screens/LoadScreen";
import RootNav from "./app/navigation/RootNav";
import { SafeAreaView } from "react-navigation";
import { LogBox } from "react-native";
import GlobalState from "./app/contexts/GlobalState";
import tickets from "./app/data/ticket1.json";
import users from "./app/data/user1.json";

export default function App() {
  const [Gstate, setGstate] = useState({
    tickets: tickets,
    users: users,
    activeId: 0,
    isLoggedIn: false,
  });
  LogBox.ignoreLogs([
    "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).",
  ]);

  const [fontsLoaded] = useFonts({
    IcoMoon: require("./app/assets/icomoon/icomoon.ttf"),
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
  });
  if (!fontsLoaded) {
    return <LoadScreen />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GlobalState.Provider value={[Gstate, setGstate]}>
        <RootNav />
      </GlobalState.Provider>
    </SafeAreaView>
  );
}
