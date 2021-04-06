import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Comfortaa_600SemiBold } from "@expo-google-fonts/comfortaa";

export default function InputComp(props) {
  const [value, onChangeValue] = useState(null);

  return (
    <View style={styles.inputBox}>
      <Text style={styles.inputName}>{props.titre}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeValue}
        value={value}
        placeholder={props.placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  inputName: {
    backgroundColor: "#ff000050",
    paddingLeft: 5,
    fontFamily: "Montserrat_400Regular",
  },
  inputBox: {
    marginVertical: 5,
  },
});
