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
import { TextInput } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function LoginScreen(props) {
  const [number, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.circle} />
      <Image
        style={styles.logo}
        source={require("../assets/images/LogoCenterWhiteTight.png")}
      />
      <View style={styles.connexion}>
        <Text
          style={{
            fontFamily: "Comfortaa_700Bold",
            fontSize: 35,
            color: "#444444",
          }}
        >
          Connexion
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={number}
          placeholder="useless placeholder"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="useless placeholder"
        />
        <TouchableOpacity
          style={styles.connect}
          onPress={() => props.route.params.setIsLoggedIn(true)}
        >
          <Text>Connect</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.register}>
        <Text
          style={{
            color: "#ff8b4b",
            fontFamily: "Comfortaa_700Bold",
            fontSize: 25,
            marginBottom: 5,
          }}
        >
          Créer un compte
        </Text>
      </TouchableOpacity>
    </View>
  );
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
    alignItems: "center",
    margin: 20,
    width: windowWidth * (3 / 4),
    height: windowHeight / 2,
    borderRadius: 20,
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  register: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 20,
    borderWidth: 2,
    borderColor: "#ff8b4b",
    borderRadius: 10,
  },
  input: {
    borderBottomWidth: 1,
  },
});
