import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

export default function Friend(props) {
  function handlePress() {
    console.log("pressed");
  }
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.pp}
          source={{ height: 50, width: 50, uri: props.picture }}
        />
        <Text style={{ padding: 5, fontSize: 18 }}>{props.name}</Text>
      </View>
      {props.isFriend ? (
        <TouchableOpacity style={styles.remove} onPress={handlePress}>
          <Text style={{ color: "#ff8b4b", fontWeight: "700" }}>remove</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.follow} onPress={handlePress}>
          <Text style={{ color: "#fff" }}>Follow</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    padding: 5,
    paddingRight: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  pp: {
    borderRadius: 10,
  },
  remove: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#ff8b4b",
    padding: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  follow: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    backgroundColor: "#ff8b4b",
    borderRadius: 5,
    padding: 4,
    borderColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
