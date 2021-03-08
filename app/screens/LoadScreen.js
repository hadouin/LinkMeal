import React from "react";
import { View, StyleSheet, Image } from "react-native";

function LoadScreen(props) {
  return (
    <View style={styles.background}>
      <Image style={styles.logo} source={require("../assets/Logo-White.png")} />
      <Image style={styles.path1} source={require("../assets/path1.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#ff8b4b",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  path1: {
    resizeMode: "contain",
    aspectRatio: 1.804,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "75%",
    height: "auto",
  },
  path2: {
    resizeMode: "contain",
    aspectRatio: 1.804,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "75%",
    height: "auto",
  },
});
export default LoadScreen;
