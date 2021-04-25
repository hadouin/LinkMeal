import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

function getTransaction() {}

export default function WalletScreen() {
  return (
    <View>
      <FlatList
        data={getTransaction()}
        renderItem={(item) => {
          return (
            <>
              <TouchableOpacity
                style={styles.ticket}
                onPress={() => console.log("pressed")}
              >
                <View style={style.container}>
                  <Text>transaction</Text>
                </View>
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
    flex: 1,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
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
