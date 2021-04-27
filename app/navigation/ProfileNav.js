import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import DetailScreen from "../screens/DetailScreen";
import WalletScreen from "../screens/WalletScreen";
import MapScreen from "../screens/MapScreen";

const Profile = createStackNavigator();

export default function ProfileNav(props) {
  return (
    <Profile.Navigator initialRouteName="Profile">
      <Profile.Screen name="Profile" component={ProfileScreen} />
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
    </Profile.Navigator>
  );
}
