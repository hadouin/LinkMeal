import React from "react";
import { Text, View, StyleSheet } from "react-native";

function ProfileScreen(props) {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
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
export default ProfileScreen;
