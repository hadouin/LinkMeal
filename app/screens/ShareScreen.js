import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { Comfortaa_600SemiBold } from "@expo-google-fonts/comfortaa";
function ShareScreen(props) {
  const Icon = createIconSetFromIcoMoon(
    require("../assets/icomoon/selection.json"),
    "IcoMoon",
    "icomoon.ttf"
  );

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const shootImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const [title, onChangeTitle] = React.useState(null);
  return (
    <View style={styles.modalView}>
      <View style={styles.container}>
        <Pressable style={styles.photo} onPress={shootImage}>
          {!image && (
            <Icon
              style={{ margin: 40 }}
              name="Camera1"
              size={40}
              color="#444444"
            />
          )}
          {image && (
            <Image
              source={{ width: 150, height: 150, uri: image }}
              style={{ resizeMode: "cover", borderRadius: 20 }}
            />
          )}
        </Pressable>
        <View style={{ margin: 5 }}>
          <Text style={styles.inputName}>Titre</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeTitle}
            value={title}
            placeholder="Nom du plat"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  modalView: {
    flex: 1,
    margin: 20,
    marginBottom: 120,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  photo: {
    resizeMode: "cover",
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  inputName: {
    paddingLeft: 5,
    fontFamily: "Montserrat_400Regular",
  },
});

export default ShareScreen;
