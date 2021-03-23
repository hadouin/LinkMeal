import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ShareScreen from "../screens/ShareScreen";
import FriendScreen from "../screens/FriendScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TabBar from "../components/TabBar";
import HomeNav from "./HomeNav";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={HomeNav}
        initialParams={{ icon: "Home" }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        initialParams={{ icon: "Search" }}
      />
      <Tab.Screen
        name="Friend"
        component={FriendScreen}
        initialParams={{ icon: "User" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ icon: "Profile" }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
