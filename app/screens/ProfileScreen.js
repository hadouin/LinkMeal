import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import TicketFeed from "../components/TicketFeed";
import fetchTickets from "../data/endpoint";

function ProfileScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.user}>
          <Image
            style={styles.pp}
            source={{
              width: 30,
              height: 30,
              uri:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            }}
          />
          <Text>Username</Text>
        </View>
        <TouchableOpacity
          style={styles.balance}
          onPress={() => props.navigation.navigate("Wallet")}
        >
          <Text style={{ textAlign: "right" }}>#balance</Text>
          <Image
            style={styles.bitmeal}
            source={require("../assets/images/bitmeal.png")}
          />
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
          <TicketFeed {...props} author="1234" />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingBottom: 55,
  },
  profile: {
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
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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
