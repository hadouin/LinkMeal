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
  let userList = fetchUserData("all");
  console.log(user);
  console.log(userList);
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.container}
        data={userList}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => {
          console.log(item.id);
          console.log(user.friend);
          let isFriend = user.friend.includes(item.id);
          return (
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
                  isFriend={isFriend}
                />
              </TouchableOpacity>
            </>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  friend: {},
});
