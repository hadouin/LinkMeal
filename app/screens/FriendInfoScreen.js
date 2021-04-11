import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function FriendInfoScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.profile}>
        <View style={styles.user}>
          <Image
            style={styles.pp}
            source={{
              width: 30,
              height: 30,
              uri: props.route.params.item.picture,
            }}
          />
          <Text>{props.route.params.item.name}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#f005",
    marginVertical: 10,
    borderRadius: 20,
    height: "20%",
  },
  user: {
    backgroundColor: "#0f05",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pp: {
    borderRadius: 500,
    height: "80%",
    aspectRatio: 1,
    resizeMode: "cover",
  },
  balance: {
    backgroundColor: "#ff05",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  bitmeal: {
    margin: 5,
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
