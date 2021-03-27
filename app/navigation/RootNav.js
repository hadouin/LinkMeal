import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import TabNav from "./TabNav";
import LoginScreen from "../screens/LoginScreen";
const Stack = createStackNavigator();

export default function RootNav(props) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            initialParams={{ setIsLoggedIn: setIsLoggedIn }}
          />
        ) : (
          <Stack.Screen name="Main" component={TabNav} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
