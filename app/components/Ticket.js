import { Comfortaa_400Regular } from "@expo-google-fonts/comfortaa";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { NavigationHelpersContext } from "@react-navigation/core";
import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

function Ticket(props) {
  //console.log(props);
  //console.log(props.author);
  //const author = props.author;
  //console.log(author);

  const AuthorView = (props) => {
    return (
      <View>
        <Text>ok depart</Text>
      </View>
    );
  };

  const PriceButton = (props) => {
    return (
      <View>
        <Text>prix</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={{
          height: 200,
          width: 200,
          uri: "https://picsum.photos/200",
        }}
      />
      <View style={styles.details}>
        <Text style={{ fontFamily: "Comfortaa_700Bold", fontSize: 30 }}>
          Pizza
        </Text>
        <View style={styles.bar} />
        <AuthorView />
        <Text style={{ fontFamily: "Montserrat_400Regular", fontSize: 10 }}>
          Lorem ipsum dolor sit amet ceci est un texte de test
        </Text>
        <PriceButton />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  details: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingLeft: 10,
  },
  bar: {
    height: 10,
    width: 50,
    flexDirection: "row",
    backgroundColor: "#ff8b4b",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
export default Ticket;
