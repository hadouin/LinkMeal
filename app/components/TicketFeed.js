import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Ticket from "./Ticket";
import getTickets from "../data/index";
export default class TicketFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      query: "",
      fullData: [],
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    this.setState({ loading: true });

    getTickets(20, this.state.query)
      .then((tickets) => {
        this.setState({
          loading: false,
          data: tickets,
          fullData: tickets,
        });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };
  render() {
    return (
      <View>
        <FlatList
          contentContainerStyle={styles.container}
          data={this.state.data}
          keyExtractor={(item, index) => item._id}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity
                style={styles.ticket}
                onPress={() =>
                  this.props.navigation.navigate("Details", { item: item })
                }
              >
                <Ticket navigation={this.props.navigation} {...item} />
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
