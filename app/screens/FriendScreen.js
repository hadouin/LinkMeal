import React from "react";
import { Text, View, StyleSheet } from "react-native";
import FriendList from "../components/FriendList";
import SearchBar from "../components/SearchBar";

export default function FriendScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <SearchBar />
      </View>
      <FriendList {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {},
});
