import React, { useState, useEffect, Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  RefreshControl,
  FlatList,
} from "react-native";
import Ticket from "./Ticket";
import fetchTickets from "../data/endpoint";

export default function TicketFeed(props) {
  const [isFetching, setFetching] = useState(false);
  const [data, setData] = useState(fetchTickets(props.author));
  function handleRefresh() {
    setData(fetchTickets("1234"));
  }
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.container}
        data={data}
        keyExtractor={(item, index) => item._id}
        refreshControl={
          <RefreshControl
            enabled={true}
            onRefresh={handleRefresh}
            refreshing={isFetching}
          />
        }
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              style={styles.ticket}
              onPress={() =>
                props.navigation.navigate("Details", { item: item })
              }
            >
              <Ticket
                navigation={props.navigation}
                picture={item.picture}
                title={item.title}
                author={item.author}
                description={item.description}
                tags={item.tags}
                price={item.price}
              />
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    flexDirection: "column",
    padding: 10,
    paddingBottom: 100,
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
    borderRadius: 20,
  },
});
