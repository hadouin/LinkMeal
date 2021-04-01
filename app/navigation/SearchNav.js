import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/HomeScreen";
import { StyleSheet, View } from "react-native";
import DetailScreen from "../screens/DetailScreen";

const Search = createStackNavigator();

export default function SearchNav(props) {
  return (
    <Search.Navigator initialRouteName="Search">
      <Search.Screen name="Search" component={SearchScreen} />
      <Search.Screen name="Details" component={DetailScreen} />
    </Search.Navigator>
  );
}
