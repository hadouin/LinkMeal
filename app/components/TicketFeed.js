import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Ticket from "./Ticket";
import tickets from "../../tickets.json";

export default function TicketFeed(props) {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={tickets}
      keyExtractor={(item, index) => item._id}
      renderItem={({ item }) => (
        <Ticket
          image={item.image}
          title={item.title}
          author={item.author}
          price={item.price}
        />
      )}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
  },
});
