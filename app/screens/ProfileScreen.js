import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import TicketFeed from "../components/TicketFeed";
import GlobalState from "../contexts/GlobalState";
import _ from "lodash";
import color from "color";

function ProfileScreen(props) {
  const [gstate, setGstate] = useContext(GlobalState);
  useEffect(() => {}, []);
  function getBalance() {
    new Promise((resolve, reject) => {
      resolve(
        _.filter(gstate.tickets, (ticket) => {
          const activeId = gstate.activeId;
          return ticket.issuer === activeId || ticket.buyer === activeId;
        })
      );
    }).then((transfers) => {
      transfers.map((item) => {
        if (item.buyer === gstate.activeId) {
          balance = balance - item.price;
        }
        if (item.issuer === gstate.activeId) {
          balance = balance + item.price;
        }
        return balance;
      });
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.user}>
          <Image
            style={styles.pp}
            source={{
              width: 30,
              height: 30,
              uri: "https://randomuser.me/api/portraits/men/75.jpg",
            }}
          />
          <Text>John Doe</Text>
        </View>
        <TouchableOpacity
          style={styles.balance}
          onPress={() => props.navigation.navigate("Wallet")}
        >
          <View style={styles.walletButton}>
            <Text
              style={{ textAlign: "right", fontSize: 20, fontWeight: "bold" }}
            >
              {" " + 3}
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
          <TicketFeed {...props} initialQuery="bio" />
        </View>
      </View>
    </View>
  );
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
