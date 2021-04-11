import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Friend(props) {
  return (
    <View style={styles.container}>
      <Image source={{ height: 50, width: 50, uri: props.picture }} />
      <Text style={{ padding: 5, fontSize: 18 }}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
