import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

function Ticket(props) {
  console.log(props);
  console.log(props.author);
  const author = props.author;
  console.log(author);
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
        <Text>{props.price}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{ height: 100, width: 100, uri: props.image }} />
      <View style={styles.details}>
        <Text>{props.title}</Text>
        <View style={styles.bar} />
        <AuthorView />
        <Text>{props.description}</Text>
        <PriceButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: 500,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  ticket: {
    height: 100,
    width: 100,
    flexDirection: "row",
  },
  details: {
    height: 100,
    width: 100,
    flexDirection: "column",
    backgroundColor: "blue",
  },
  bar: {
    height: 20,
    width: 100,
    flexDirection: "row",
    backgroundColor: "orange",
  },
});
export default Ticket;
