import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ForgotScreen from "../screens/ForgotScreen";

const Auth = createStackNavigator();

export default function AuthNav(props) {
  return (
    <Auth.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Auth.Screen name="Login" component={LoginScreen} />
      <Auth.Screen name="Register" component={RegisterScreen} />
      <Auth.Screen name="Forgot" component={ForgotScreen} />
    </Auth.Navigator>
  );
}
