import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
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
              uri:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            }}
          />
          <Text>Username</Text>
        </View>
        <View style={styles.balance}>
          <Text>#balance</Text>
          <Image
            style={styles.bitmeal}
            source={require("../assets/images/bitmeal.png")}
          />
        </View>
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
          <TicketFeed {...props} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  profile: {
    flexDirection: "row",
    backgroundColor: "#f005",
    marginVertical: 10,
    borderRadius: 20,
    height: "20%",
  },
  user: {
    flex: 1,
  },
  pp: {
    flex: 1,
  },
  balance: {
    flex: 1,
    flexDirection: "row",
  },
  bitmeal: {
    flex: 1,
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
