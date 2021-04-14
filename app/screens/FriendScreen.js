import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import FriendList from "../components/FriendList";
import SearchBar from "../components/SearchBar";

export default function FriendScreen(props) {
  const [search, setSearch] = useState();
  function handleChange(text) {
    setSearch(text);
  }
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange(text)}
          value={search}
          placeholder="Search"
        />
      </View>
      <FriendList {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    width: "100%",
    padding: 10,
    justifyContent: "center",
    backgroundColor: "#00f2",
  },
  input: {
    margin: 5,
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
});
