import React from "react";
import TicketFeed from "../components/TicketFeed";
import { Text, View, StyleSheet } from "react-native";

function SearchScreen(props) {
  return <TicketFeed {...props} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchScreen;
