import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ForgotScreen(props) {
  const [number, onChangeEmail] = React.useState(null);

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Email sent",
      "Nous avons envoyé un mail de récupération à l'adresse electronique renseignée"
    );

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
            textAlign: "center",
          }}
        >
          Mot de Passe oublié
        </Text>
        <View style={{ width: "100%" }}>
          <Text style={styles.inputNames}>Adresse Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={number}
            placeholder="link@meal.fr"
          />
        </View>
        <TouchableOpacity style={styles.connect} onPress={createTwoButtonAlert}>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Comfortaa_700Bold",
              fontSize: 20,
            }}
          >
            Envoyer
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.register}
        onPress={() => props.navigation.navigate("Login")}
      >
        <Text
          style={{
            color: "#ff8b4b",
            fontFamily: "Comfortaa_700Bold",
            fontSize: 20,
          }}
        >
          Retour
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
