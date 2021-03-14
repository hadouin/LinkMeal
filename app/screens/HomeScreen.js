import React from "react";
import { Text, View, StyleSheet } from "react-native";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
});
export default HomeScreen;
