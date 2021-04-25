import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import FriendList from "../components/FriendList";

export default function FriendScreen(props) {
  const [search, setSearch] = useState();

  function handleChange(text) {
    setSearch(text);
  }
  return (
    <View style={styles.container}>
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
    justifyContent: "center",
  },
  input: {
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
