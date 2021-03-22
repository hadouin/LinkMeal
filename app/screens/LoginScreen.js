import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.circle} />
        <Image
          style={styles.logo}
          source={require("../assets/images/LogoCenterWhiteTight.png")}
        />
        <View style={styles.connexion}>
          <Text></Text>
        </View>
        <TouchableOpacity style={styles.register}>
          <Text>Créer un compte</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 900,
    height: 900,
    borderRadius: 900 / 2,
    backgroundColor: "#ff8b4b",
    position: "absolute",
    top: -900 / 2 - 25,
    left: windowWidth / 2 - 900 / 2,
  },
  logo: {
    resizeMode: "contain",
    height: "20%",
  },
  connexion: {
    margin: 20,
    width: windowWidth * (3 / 4),
    height: windowHeight / 2,
    backgroundColor: "#444444",
  },
  register: {
    margin: 20,
    borderWidth: 5,
    borderColor: "#ff8b4b",
  },
});
