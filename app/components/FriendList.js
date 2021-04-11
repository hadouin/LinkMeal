import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import user from "../data/user.json";
import Friend from "./Friend";

export default function FriendList(props) {
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.container}
        data={user.friends}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              style={styles.friend}
              onPress={() =>
                props.navigation.navigate("FriendInfo", { item: item })
              }
            >
              <Friend
                navigation={props.navigation}
                picture={item.picture}
                name={item.name}
              />
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f002",
  },
  friend: {},
});
