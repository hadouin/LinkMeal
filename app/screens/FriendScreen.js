import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function FriendScreen(props) {
  return (
    <View style={styles.container}>
      <Text>FriendScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
