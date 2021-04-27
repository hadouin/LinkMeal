import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import { StyleSheet, View } from "react-native";
import DetailScreen from "../screens/DetailScreen";

const Search = createStackNavigator();

export default function SearchNav(props) {
  return (
    <Search.Navigator initialRouteName="Search">
      <Search.Screen name="Search" component={SearchScreen} />
      <Search.Screen
        name="Details"
        component={DetailScreen}
        options={{
          headerBackTitle: "",
          headerTransparent: true,
          title: "",
          headerStyle: {
            backgroundColor: "#ff8b4b20",
            height: 50,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Search.Navigator>
  );
}
