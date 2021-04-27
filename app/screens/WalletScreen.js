import _ from "lodash";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { getTickets, getUsers, getUser, valueIn } from "../data/index";
import GlobalState from "../contexts/GlobalState";

export default class WalletScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };
  }
  static contextType = GlobalState;
  componentDidMount() {
    this.makeRemoteRequest();
  }

  getTransfer = () => {
    return new Promise((resolve, reject) => {
      resolve(
        _.filter(this.context[0].tickets, (ticket) => {
          const activeId = this.context[0].activeId;
          return (
            (ticket.issuer === activeId || ticket.buyer === activeId) &&
            ticket.closed &&
            ticket.buyer !== null
          );
        })
      );
    });
  };
  getName = (id) => {
    const user = _.filter(this.context[0].users, (user) => {
      return user.id === id;
    })[0];
    return user.name.first + " " + user.name.last;
  };
  makeRemoteRequest = () => {
    this.setState({ loading: true });
    this.getTransfer()
      .then((tickets) => {
        console.log("finished load");
        this.setState({
          loading: false,
          data: tickets,
        });
        console.log(this.state.data);
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => {
            return (
              <>
                <TouchableOpacity
                  style={styles.ticket}
                  onPress={() =>
                    this.props.navigation.navigate("Details", { item: item })
                  }
                >
                  <View style={styles.container}>
                    <View>
                      <Text>{"From : " + this.getName(item.buyer)}</Text>
                      <Text>{"To : " + this.getName(item.issuer)}</Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      {this.context[0].activeId === item.buyer ? (
                        <Text
                          style={{
                            color: "red",
                            fontSize: 30,
                            fontWeight: "bold",
                          }}
                        >
                          {"- " + item.price}
                        </Text>
                      ) : (
                        <Text
                          style={{
                            color: "green",
                            fontSize: 30,
                            fontWeight: "bold",
                          }}
                        >
                          {"+ " + item.price}
                        </Text>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              </>
            );
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ticket: {
    margin: 5,
    marginHorizontal: 10,
  },
  list: { paddingBottom: 80 },
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
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
