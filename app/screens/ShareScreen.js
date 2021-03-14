import React from "react";
import { StyleSheet, Text, View } from "react-native";

function ShareScreen(props) {
  return (
    <View style={styles.container}>
      <Text>ShareScreen</Text>
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

export default ShareScreen;
