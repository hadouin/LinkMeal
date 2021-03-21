import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DetailScreen(props) {
  let item = props.route.params.item;
  console.log(item);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/logoText-Orange.png")}
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
          {/* description ingredients et contact + GPS*/}
          <Text>{item.description}</Text>
          <View>
            <TouchableOpacity>
              <Image />
              <Text>yes</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image />
              <Text>Test</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity>{/*commander*/}</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Montserrat_400Regular",
  },
  image: {
    resizeMode: "contain",
  },
  description: { padding: 5 },
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
});
