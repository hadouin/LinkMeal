import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FriendScreen from "../screens/FriendScreen";
import FriendInfoScreen from "../screens/FriendInfoScreen";
import DetailScreen from "../screens/DetailScreen";
const Friend = createStackNavigator();

export default function FriendNav() {
  return (
    <Friend.Navigator initialRouteName="Friends">
      <Friend.Screen name="Friends" component={FriendScreen} />
      <Friend.Screen name="FriendInfo" component={FriendInfoScreen} />
      <Friend.Screen
        name="Details"
        component={DetailScreen}
        options={{
          headerBackTitle: "",
          headerTransparent: true,
          title: "",
          headerStyle: {
            backgroundColor: "#ff8b4b40",
            height: 50,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Friend.Navigator>
  );
}
