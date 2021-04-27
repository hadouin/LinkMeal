import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import users from "../data/user1.json";
import _ from "lodash";
import Tags from "./Tags";
import { ListItem } from "react-native-elements/dist/list/ListItem";
import Status from "./Status";

function Ticket(props) {
  var author = _.filter(users, (user) => {
    return user.id === props.data.issuer;
  })[0];
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: props.data.picture,
        }}
      />
      <View style={styles.wrapper}>
        <View style={styles.details}>
          <View style={styles.info}>
            <View style={{ flex: 1 }}>
              <Text numberOfLines={1} adjustsFontSizeToFit style={styles.title}>
                {props.data.title}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.bar} />
              <Status status={props.data.status} />
            </View>
            <View style={styles.author}>
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
            <View style={styles.tags}>
              <Tags tags={props.data.tags} />
            </View>
          </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flex: 1,
    padding: 5,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "stretch",
  },
  info: { flex: 3 },
  container: {
    aspectRatio: 2,
    alignItems: "stretch",
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    width: "50%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  wrapper: {
    flex: 1,
  },
  title: {
    fontSize: 200,
    fontFamily: "Comfortaa_700Bold",
  },
  bar: {
    height: 10,
    width: 50,
    flexDirection: "row",
    backgroundColor: "#ff8b4b",
  },
  author: {
    flex: 1,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  tags: {
    padding: 5,
    flex: 1,
  },
  price: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
  },
});
export default Ticket;
