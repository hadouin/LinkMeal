import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen(props) {
  let user = props.route.params.user;
  return (
    <View style={styles.container}>
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: user.location.latitude,
          longitude: user.location.longitude,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }}
      >
        <Marker
          coordinate={{
            latitude: user.location.latitude,
            longitude: user.location.longitude,
          }}
          title={String(user.location.number) + "," + user.location.street}
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
