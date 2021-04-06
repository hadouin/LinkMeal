import React, { useState, useEffect, Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Ticket from "./Ticket";
import tickets from "../data/tickets.json";
import getTickets from "../data/endpoint";

export default class TicketFeed extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <View style={{ flex: 2 }}>
        <FlatList
          contentContainerStyle={styles.container}
          data={tickets}
          keyExtractor={(item, index) => item._id}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity
                style={styles.ticket}
                onPress={() =>
                  this.props.navigation.navigate("Details", { item: item })
                }
              >
                <Ticket
                  navigation={this.props.navigation}
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
      </View>
    );
  }
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
