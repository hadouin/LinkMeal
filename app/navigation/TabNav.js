import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileNav from "../navigation/ProfileNav";
import TabBar from "../components/TabBar";
import HomeNav from "./HomeNav";
import SearchNav from "./SearchNav";
import FriendNav from "./FriendNav";

const Tab = createBottomTabNavigator();

export default function TabNav() {
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
        component={SearchNav}
        initialParams={{ icon: "Search" }}
      />
      <Tab.Screen
        name="Friend"
        component={FriendNav}
        initialParams={{ icon: "User" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNav}
        initialParams={{ icon: "Profile" }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
