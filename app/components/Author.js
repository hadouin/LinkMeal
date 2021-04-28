import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Author(props) {
  return (
    <TouchableOpacity
      style={{
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => props.navigation.navigate("Info", { item: props.author })}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{
            borderRadius: 32,
          }}
          source={{ height: 32, width: 32, uri: props.author.picture }}
        />
        <Text style={{ alignSelf: "center", marginLeft: 5, color: "#222" }}>
          {props.author.name.first + " " + props.author.name.last}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
