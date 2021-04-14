import React from "react";
import { Text, View, StyleSheet } from "react-native";
import TicketFeed from "../components/TicketFeed";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

export default function HomeScreen(props) {
  return <TicketFeed {...props} author="all" />;
}
