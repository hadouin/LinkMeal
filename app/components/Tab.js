import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { AntDesign } from "@expo/vector-icons";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";

const Icon = createIconSetFromIcoMoon(
  require("../assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export default function Tab({ color, tab, onPress, icon }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={icon} size={35} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
});
