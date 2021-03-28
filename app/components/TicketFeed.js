import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Ticket from "./Ticket";
import tickets from "../data/tickets.json";
import { useNavigation } from "@react-navigation/native";

export default function TicketFeed({ navigation, route }) {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={tickets}
      keyExtractor={(item, index) => item._id}
      renderItem={({ item }) => (
        <>
          <TouchableOpacity
            style={styles.ticket}
            onPress={() => navigation.navigate("Details", { item: item })}
          >
            <Ticket
              navigation={navigation}
              picture={item.picture}
              title={item.title}
              author={[
                tickets[item.index].author.name,
                tickets[item.index].author.picture,
              ]}
              description={item.description}
              tags={item.tags}
              price={item.price}
            />
          </TouchableOpacity>
        </>
      )}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#e0e0e0",
    padding: 10,
  },
  ticket: {
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "column",
    alignContent: "center",
    padding: 5,
    marginVertical: 5,
  },
  name: {
    flexWrap: "wrap",
    fontSize: 15,
  },
  image: {
    height: 180,
    aspectRatio: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
