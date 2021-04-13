import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Friend from "./Friend";
import { fetchUserData } from "../data/endpoint";

export default function FriendList(props) {
  let user = fetchUserData("1234");
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
