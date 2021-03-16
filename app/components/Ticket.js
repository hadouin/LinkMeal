import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
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
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          height: 200,
          width: 200,
          uri: "https://randomuser.me/api/portraits/men/75.jpg",
        }}
      />
      <View style={styles.details}>
        <Text>Pizza</Text>
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  ticket: {
    flex: 1,
    flexDirection: "row",
  },
  details: {
    flex: 1,
    flexDirection: "column",
  },
  bar: {
    height: 10,
    width: 50,
    flexDirection: "row",
    backgroundColor: "orange",
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
export default Ticket;
