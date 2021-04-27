import React, { Component, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import GlobalState from "../contexts/GlobalState";
import tickets from "../data/ticket1.json";
import users from "../data/user1.json";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function LoginScreen(props) {
  const [number, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const [gstate, setgstate] = useContext(GlobalState);

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
        <View style={{ width: "100%" }}>
          <Text style={styles.inputNames}>Adresse Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={number}
            placeholder="link@meal.fr"
          />
          <Text style={styles.inputNames}>Mot de passe</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
          />
        </View>
        <TouchableOpacity
          style={styles.connect}
          onPress={() =>
            setgstate({
              tickets: gstate.tickets,
              users: gstate.users,
              activeId: 0,
              isLoggedIn: true,
            })
          }
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "Comfortaa_700Bold",
              fontSize: 20,
            }}
          >
            Se connecter
          </Text>
        </TouchableOpacity>
        <Text
          style={{ textAlign: "center", fontSize: 10 }}
          onPress={() => props.navigation.navigate("Forgot")}
        >
          <Text>Si vous avez oublié votre mot de passe veuillez</Text>{" "}
          <Text style={{ color: "#ff8b4b", textDecorationLine: "underline" }}>
            {" "}
            cliquer ici
          </Text>
        </Text>
      </View>
      <TouchableOpacity
        style={styles.register}
        onPress={() => props.navigation.navigate("Register")}
      >
        <Text
          style={{
            color: "#ff8b4b",
            fontFamily: "Comfortaa_700Bold",
            fontSize: 20,
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
    width: windowWidth * 2,
    height: windowHeight * 2,
    borderRadius: windowWidth,
    backgroundColor: "#ff8b4b",
    position: "absolute",
    top: -windowHeight - windowHeight / 4,
    left: windowWidth / 2 - windowWidth,
  },
  logo: {
    resizeMode: "contain",
    height: "20%",
  },
  connexion: {
    alignItems: "center",
    justifyContent: "space-around",
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
    width: windowWidth * (3 / 4),
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    paddingTop: 7,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#ff8b4b",
    borderRadius: 20,
  },
  connect: {
    backgroundColor: "#ff8b4b",
    paddingHorizontal: 30,
    paddingBottom: 10,
    paddingTop: 7,
    borderRadius: 20,
    alignSelf: "stretch",
    alignItems: "center",
    marginHorizontal: 10,
  },
  input: {
    margin: 5,
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  inputNames: {
    paddingLeft: 10,
    fontFamily: "Montserrat_400Regular",
  },
});
