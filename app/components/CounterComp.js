import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";

const Icon = createIconSetFromIcoMoon(
  require("../assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export default function CounterComp() {
  const [count, setCount] = useState("100");

  function handleChange(text) {
    setCount(text.replace(/[^0-9]/g, ""));
  }
  function handlePress(count) {
    let value = count;
    setCount();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name={"Arrow---Down-21"} size={40} color={"white"} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleChange(text)}
        keyboardType="numeric"
        placeholder="100"
        value={count}
      />
      <TouchableOpacity onPress={handlePress}>
        <Icon name={"Arrow---Up-21"} size={40} color={"white"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#ff8b4b",
    borderRadius: 10,
  },
  input: {},
});
