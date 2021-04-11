import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import DetailScreen from "../screens/DetailScreen";

const Profile = createStackNavigator();

export default function ProfileNav(props) {
  return (
    <Profile.Navigator initialRouteName="Profile">
      <Profile.Screen name="Profile" component={ProfileScreen} />
      <Profile.Screen name="Details" component={DetailScreen} />
    </Profile.Navigator>
  );
}
