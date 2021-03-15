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

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "#ff8b4b",
          showLabel: false,
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={60} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={60} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Friends"
          component={FriendScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-group"
                color={color}
                size={60}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={60} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomTab: {
    height: 70,
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomButton: {
    flex: 0,
    width: 60,
  },
});

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/

/*function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}*/

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

/*const MemberStack = createStackNavigator();

function MemberNavigator() {
  return (
    <MemberStack.Navigator>
      <MemberStack.Screen
        name="MemberScreen"
        component={MemberScreen}
        options={{ headerTitle: "Members" }}
      />
    </MemberStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Profile" }}
      />
    </TabTwoStack.Navigator>
  );
}
*/
