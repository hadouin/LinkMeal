import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Comfortaa_600SemiBold } from "@expo-google-fonts/comfortaa";

export default function InputComp(props) {
  const [value, onChangeValue] = useState(null);
  const handleChange = (text) => {
    onChangeValue(text);
    props.changeHandler(text);
  };
  return (
    <View style={styles.inputBox}>
      <Text style={styles.inputName}>{props.titre}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleChange(text)}
        value={value}
        placeholder={props.placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  inputName: {
    paddingLeft: 5,
    fontFamily: "Montserrat_400Regular",
  },
  inputBox: {
    margin: 5,
    flex: 1,
  },
});
