import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import ShareScreen from "../screens/ShareScreen";

const { width } = Dimensions.get("screen");

export default function ShareModal(props) {
  return (
    <View style={styles.centeredView}>
      <ShareScreen
        handleClose={() => props.setModalVisible(!props.modalVisible)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.setModalVisible(!props.modalVisible)}
      >
        <View style={styles.container}>
          <Entypo name="cross" size={40} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  button: {
    position: "absolute",
    left: width / 2 - 25,
    bottom: 30,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  container: {
    backgroundColor: "#ff8b4b",
    borderRadius: 80,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
