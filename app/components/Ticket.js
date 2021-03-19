import { Comfortaa_400Regular } from "@expo-google-fonts/comfortaa";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { NavigationHelpersContext } from "@react-navigation/core";
import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

function Ticket(props) {
  console.log(props);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          height: 200,
          width: 200,
          uri: props.picture,
        }}
      />
      <View style={styles.details}>
        <Text style={{ fontFamily: "Comfortaa_700Bold", fontSize: 30 }}>
          {props.title}
        </Text>
        <View style={styles.bar} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{
              borderBottomLeftRadius: 32,
              borderBottomRightRadius: 32,
              borderTopLeftRadius: 32,
              borderTopRightRadius: 32,
            }}
            source={{ width: 32, height: 32, uri: props.author[1] }}
          />
          <Text style={{ margin: 5 }}>{props.author[0]}</Text>
        </View>
        <Text style={{ fontFamily: "Montserrat_400Regular", fontSize: 10 }}>
          {props.tags}
        </Text>
        <View style={styles.price}>
          <Text>{props.price}</Text>
          <Image
            style={{ width: 20, aspectRatio: 1 }}
            source={require("../assets/images/bitmeal.png")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
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
    aspectRatio: 1,
    resizeMode: "cover",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  price: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
});
export default Ticket;
