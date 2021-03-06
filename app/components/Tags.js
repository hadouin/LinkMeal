import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";

function Tags(props) {
  return (
    <View style={{ flexDirection: "row" }}>
      {props.tags.includes("vegan") ? (
        <Image
          style={styles.tagPic}
          source={require("../assets/images/Tags/veganOn.png")}
        />
      ) : (
        <></>
      )}
      {props.tags.includes("bio") ? (
        <Image
          style={styles.tagPic}
          source={require("../assets/images/Tags/bioOn.png")}
        />
      ) : (
        <></>
      )}
      {props.tags.includes("gFree") ? (
        <Image
          style={styles.tagPic}
          source={require("../assets/images/Tags/gFreeOn.png")}
        />
      ) : (
        <></>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  tagPic: {
    height: 30,
    width: 30,
    aspectRatio: 1,
    padding: 5,
    marginRight: 5,
    resizeMode: "contain",
  },
});

export default Tags;
