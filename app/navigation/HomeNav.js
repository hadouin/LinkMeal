import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { StyleSheet, View, Image } from "react-native";
import DetailScreen from "../screens/DetailScreen";
import MapScreen from "../screens/MapScreen";
import { BlurView } from "expo-blur";

const Home = createStackNavigator();

export default function HomeNav(props) {
  function LogoTitle() {
    return (
      <Image
        style={{ width: 150, height: 35, resizeMode: "contain" }}
        source={require("../assets/images/logoText-Orange.png")}
      />
    );
  }
  return (
    <Home.Navigator initialRouteName="Home">
      <Home.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerTitleAlign: "center",
        }}
      />
      <Home.Screen
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
      <Home.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Home.Navigator>
  );
}
