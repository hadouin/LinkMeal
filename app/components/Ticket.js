import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import users from "../data/user1.json";
import _ from "lodash";

function Ticket(props) {
  var author = _.filter(users, (user) => {
    return user.id === props.data.issuer;
  })[0];
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          height: 200,
          width: 200,
          uri: props.data.picture,
        }}
      />
      <View style={styles.details}>
        <Text style={{ fontFamily: "Comfortaa_700Bold", fontSize: 30 }}>
          {props.data.title}
        </Text>
        <View style={styles.bar} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{
              borderRadius: 32,
            }}
            source={{ width: 32, height: 32, uri: author.picture }}
          />
          <Text style={{ margin: 5 }}>
            {author.name.first + " " + author.name.last}
          </Text>
        </View>
        <Text>{props.data.tags}</Text>
        <View style={styles.price}>
          <Text
            style={{
              fontSize: 25,
              fontFamily: "Comfortaa_700Bold",
            }}
          >
            {props.data.price}
          </Text>
          <Image
            style={{
              height: 30,
              width: 30,
              resizeMode: "contain",
            }}
            source={require("../assets/images/Logo-Orange.png")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
    borderRadius: 10,
  },
  price: {
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
  },
});
export default Ticket;
