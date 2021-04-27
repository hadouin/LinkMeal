import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import TicketFeed from "../components/TicketFeed";

export default function FriendInfoScreen(props) {
  const [isFriend, setIsFriend] = useState(true);
  const handlePress = () => {
    setIsFriend(!isFriend);
  };
  return (
    <View style={{ flex: 1, padding: 5, paddingBottom: 55 }}>
      <View style={styles.profile}>
        <View style={styles.user}>
          <Image
            style={styles.pp}
            source={{
              width: 30,
              height: 30,
              uri: props.route.params.item.picture,
            }}
          />
          <Text>
            {props.route.params.item.name.first +
              " " +
              props.route.params.item.name.last}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <View style={{ padding: 10 }}>
            {isFriend ? (
              <View style={styles.friendButtons}>
                <TouchableOpacity style={styles.follow}>
                  <Text style={{ color: "#fff", fontWeight: "700" }}>
                    contact
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.remove} onPress={handlePress}>
                  <Text style={{ color: "#ff8b4b", fontWeight: "700" }}>
                    remove
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity style={styles.follow} onPress={handlePress}>
                <Text style={{ color: "#fff" }}>Follow</Text>
              </TouchableOpacity>
            )}
          </View>
          <Text>
            <Text style={{ fontSize: 18, fontWeight: "normal" }}>Amis </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>22</Text>
          </Text>
        </View>
      </View>
      <View style={styles.tickets}>
        <View style={{ flex: 1, alignSelf: "stretch" }}>
          <TicketFeed {...props} id={props.route.params.item.id} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tickets: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#ff8b4b",
    padding: 5,
    paddingVertical: 10,
    borderRadius: 20,
  },
  contact: {
    margin: 2,
    padding: 3,
    backgroundColor: "hsl(21, 0%, 87%)",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "hsl(21, 0%, 87%)",
  },
  friendButtons: { flexDirection: "row", alignItems: "center" },
  profile: {
    justifyContent: "space-around",
    alignSelf: "center",
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 20,
    height: "20%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  user: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pp: {
    borderRadius: 20,
    height: "80%",
    aspectRatio: 1,
    resizeMode: "cover",
  },
  remove: {
    margin: 2,
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#ff8b4b",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  follow: {
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    backgroundColor: "#ff8b4b",
    borderRadius: 5,
    borderColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
