import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Tab({ color, tab, onPress, icon }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AntDesign name="home" size={50} color={color} />
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
