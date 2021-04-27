import React, { Component, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./TabNav";
import AuthNav from "./AuthNav";
import GlobalState from "../contexts/GlobalState";

const Stack = createStackNavigator();

export default function RootNav(props) {
  const [gstate, setgstate] = useContext(GlobalState);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!gstate.isLoggedIn ? (
          <Stack.Screen name="Auth" component={AuthNav} />
        ) : (
          <Stack.Screen name="Main" component={TabNav} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
