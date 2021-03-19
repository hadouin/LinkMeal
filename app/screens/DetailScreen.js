import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DetailScreen(route, navigation) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/logoText-Orange.png")}
      />
      <Text style={styles.description}></Text>
      <View style={styles.author}>
        <View />
        <Image />
        <Text>Test</Text>
      </View>

      <View>
        {/* description ingredients et contact + GPS*/}
        <Text>Test</Text>
        <View>
          <TouchableOpacity>
            <Image />
            <Text></Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image />
            <Text>Test</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity>{/*commander*/}</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { flex: 1 },
  description: { flex: 1 },
  author: { flex: 1 },
});
