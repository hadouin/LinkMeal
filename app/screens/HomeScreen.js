import React from "react";
import { Text, View, StyleSheet } from "react-native";
import TicketFeed from "../components/TicketFeed";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Root = createStackNavigator();

function HomeScreen(props) {
  return <TicketFeed {...props} />;
}
const styles = StyleSheet.create({});
export default HomeScreen;
