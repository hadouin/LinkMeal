import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");

export default function ShareButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.container}>
        <Entypo name="share" size={50} color="white" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff8b4b",
    borderRadius: 80,
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 2,
  },
  button: {
    position: "absolute",
    left: width / 2 - 40,
    bottom: 40,
  },
});
