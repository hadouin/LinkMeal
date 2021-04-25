import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import TicketFeed from "../components/TicketFeed";

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
              uri: "https://randomuser.me/api/portraits/men/75.jpg",
            }}
          />
          <Text>John Doe</Text>
        </View>
        <TouchableOpacity
          style={styles.balance}
          onPress={() => props.navigation.navigate("Wallet")}
        >
          <Text style={{ textAlign: "right" }}>#balance</Text>
          <Image
            style={styles.bitmeal}
            source={require("../assets/images/Logo-Orange.png")}
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
          <TicketFeed {...props} initialQuery="bio" />
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
    alignItems: "stretch",
  },
  profile: {
    alignSelf: "center",
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 20,
    height: "20%",
    width: "90%",
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
