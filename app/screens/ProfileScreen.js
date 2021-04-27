import React, { Component, useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import TicketFeed from "../components/TicketFeed";
import GlobalState from "../contexts/GlobalState";
import _ from "lodash";
import { getUser } from "../data";
import users from "../data/user1.json";

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: { first: "loading", last: "loading" },
        picture: "https://randomuser.me/api/portraits/men/97.jpg",
      },
    };
  }
  static contextType = GlobalState;

  componentDidMount() {
    console.log(this.context);
    getUser(this.context[0].activeId).then((user) => {
      this.setState({ user: user[0] }, this.getBalance);
    });
  }

  getBalance() {
    new Promise((resolve, reject) => {
      resolve(
        _.filter(this.context[0].tickets, (ticket) => {
          const activeId = this.context[0].activeId;
          return (
            (ticket.issuer === activeId || ticket.buyer === activeId) &&
            ticket.closed
          );
        })
      );
    }).then((transfers) => {
      let balance = 5;
      transfers.map((item) => {
        if (item.buyer === this.context[0].activeId) {
          balance = balance - item.price;
        }
        if (item.issuer === this.context[0].activeId) {
          balance = balance + item.price;
        }
        console.log("balance set :", balance);
        this.setState({ balance: balance });
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.user}>
            <Image
              style={styles.pp}
              source={{
                width: 30,
                height: 30,
                uri: this.state.user.picture,
              }}
            />
            <Text>
              {this.state.user.name.first + " " + this.state.user.name.last}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.balance}
            onPress={() => this.props.navigation.navigate("Wallet")}
          >
            <View style={styles.walletButton}>
              <Text
                style={{ textAlign: "right", fontSize: 20, fontWeight: "bold" }}
              >
                {String(this.state.balance)}
              </Text>
              <Image
                style={styles.bitmeal}
                source={require("../assets/images/Logo-Orange.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.tickets}>
          <Text
            style={{
              fontFamily: "Comfortaa_700Bold",
              fontSize: 30,
              color: "#fff",
            }}
          >
            Vos Annonces
          </Text>
          <View style={{ flex: 1, alignSelf: "stretch" }}>
            <TicketFeed {...this.props} id={this.context[0].activeId} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  walletButton: {
    justifyContent: "center",
    backgroundColor: "hsl(21, 0%, 87%)",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    padding: 5,
    paddingBottom: 55,
    alignItems: "stretch",
  },
  profile: {
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 20,
    height: "20%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  user: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pp: {
    borderRadius: 20,
    height: "80%",
    aspectRatio: 1,
    resizeMode: "cover",
  },
  balance: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bitmeal: {
    margin: 5,
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  tickets: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#ff8b4b",
    padding: 5,
    borderRadius: 20,
  },
});
export default ProfileScreen;
