import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen(props) {
  let item = props.route.params.item;
  console.log(item);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: item.author.latitude,
          longitude: item.author.longitude,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }}
      >
        <Marker
          coordinate={{
            latitude: item.author.latitude,
            longitude: item.author.longitude,
          }}
          title={item.author.address}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
