import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  BottomTabBarHeightContext,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import SearchScreen from "../screens/SearchScreen";
import FriendScreen from "../screens/FriendScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import DetailScreen from "../screens/DetailScreen";

const Home = createStackNavigator();

export default function HomeNav(props) {
  return (
    <Home.Navigator initialRouteName="Home">
      <Home.Screen name="Home" component={HomeScreen} />
      <Home.Screen name="Details" component={DetailScreen} />
    </Home.Navigator>
  );
}

const styles = StyleSheet.create({});
