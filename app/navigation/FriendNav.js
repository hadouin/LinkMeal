import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FriendScreen from "../screens/FriendScreen";
import FriendInfoScreen from "../screens/FriendInfoScreen";
const Friend = createStackNavigator();

export default function FriendNav() {
  return (
    <Friend.Navigator initialRouteName="Friends">
      <Friend.Screen name="Friends" component={FriendScreen} />
      <Friend.Screen name="FriendInfo" component={FriendInfoScreen} />
    </Friend.Navigator>
  );
}
