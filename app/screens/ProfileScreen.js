import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

function ProfileScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.user}>
          <Image style={styles.pp}></Image>
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
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profile: {
    backgroundColor: "#f00",
    flex: 1,
    height: 100,
  },
  user: {
    flex: 1,
  },
  pp: {
    flex: 1,
  },
  balance: {
    flex: 1,
  },
  bitmeal: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  tickets: {},
});
export default ProfileScreen;
