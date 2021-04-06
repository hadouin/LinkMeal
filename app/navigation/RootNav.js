import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./TabNav";
import AuthNav from "./AuthNav";
const Stack = createStackNavigator();

export default function RootNav(props) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <Stack.Screen
            name="Auth"
            component={AuthNav}
            initialParams={{ setIsLoggedIn: setIsLoggedIn }}
          />
        ) : (
          <Stack.Screen name="Main" component={TabNav} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
