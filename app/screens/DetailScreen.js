import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function DetailScreen(props) {
  const Icon = createIconSetFromIcoMoon(
    require("../assets/icomoon/selection.json"),
    "IcoMoon",
    "icomoon.ttf"
  );

  let item = props.route.params.item;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ width: "100%", height: "100%", uri: item.picture }}
      />
      <View style={{ padding: 10 }}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.bar} />
        <View style={styles.author}>
          <Image
            style={{
              borderBottomLeftRadius: 32,
              borderBottomRightRadius: 32,
              borderTopLeftRadius: 32,
              borderTopRightRadius: 32,
            }}
            source={{ height: 32, width: 32, uri: item.author.picture }}
          />
          <Text style={{ alignSelf: "center", marginLeft: 5 }}>
            {item.author.name}
          </Text>
        </View>

        <View style={styles.description}>
          <Text>{item.description}</Text>
          <View style={styles.buttons}>
            <Icon.Button
              style={styles.navButton}
              name="Chat"
              size={30}
              backgroundColor="#22E05C"
              borderRadius={100}
            >
              Contact
            </Icon.Button>
            <Icon.Button
              style={styles.navButton}
              name="Location"
              size={30}
              backgroundColor="#226CE0"
              borderRadius={100}
            >
              Navigate
            </Icon.Button>
          </View>
        </View>
      </View>

      <TouchableOpacity>
        <Text></Text>
        <Image />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Montserrat_400Regular",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "25%",
  },
  description: {
    padding: 5,
  },
  author: {
    padding: 5,
    flexDirection: "row",
  },
  bar: {
    marginRight: 5,
    marginBottom: 5,
    width: 50,
    height: 10,
    backgroundColor: "#ff8b4b",
  },
  title: { fontSize: 40, fontFamily: "Comfortaa_700Bold" },
  navButton: {
    alignItems: "center",
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
  buttons: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    width: "100%",
  },
});
