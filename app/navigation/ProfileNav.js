import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import DetailScreen from "../screens/DetailScreen";
import WalletScreen from "../screens/WalletScreen";
import MapScreen from "../screens/MapScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const Icon = createIconSetFromIcoMoon(
  require("../assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

const Profile = createStackNavigator();

export default function ProfileNav(props) {
  return (
    <Profile.Navigator initialRouteName="Profile">
      <Profile.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          headerRight: () => {
            return (
              <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate("Settings")}
              >
                <Icon name={"Setting1"} size={35} color={"#222"} />
              </TouchableOpacity>
            );
          },
        })}
      />
      <Profile.Screen
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
      <Profile.Screen name="Wallet" component={WalletScreen} />
      <Profile.Screen name="Map" component={MapScreen} />
      <Profile.Screen name="Settings" component={SettingsScreen} />
    </Profile.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
