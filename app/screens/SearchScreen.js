import React from "react";
import { Text, View, StyleSheet } from "react-native";

function SearchScreen(props) {
  return (
    <View style={styles.container}>
      <Text>SearchScreen</Text>
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

export default SearchScreen;
