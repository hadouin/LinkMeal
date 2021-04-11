import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Text>SearchBar Placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    justifyContent: "center",
    backgroundColor: "#00f2",
  },
});
