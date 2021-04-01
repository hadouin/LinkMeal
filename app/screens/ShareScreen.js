import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Comfortaa_600SemiBold } from "@expo-google-fonts/comfortaa";
import InputComp from "../components/InputComp";

export default function ShareScreen(props) {
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
  const [description, onChangeDescription] = React.useState(null);

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
        <View style={styles.titreBox}>
          <Text style={styles.inputName}>Titre</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeTitle}
            value={title}
            placeholder="Nom du plat"
          />
        </View>
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.inputName}>Description</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeDescription}
          value={description}
          placeholder="Une description alléchante de votre superbe plat !"
          multiline={true}
        />
      </View>
      <InputComp placeholder={"ok depart"} titre={"Ttest"} />
      <InputComp placeholder={"ok relai"} titre={"tttest"} />
      <TouchableOpacity
        style={styles.connect}
        onPress={() => console.log("yo")}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: "Comfortaa_700Bold",
            fontSize: 20,
          }}
        >
          Poster
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  connect: {
    backgroundColor: "#ff8b4b",
    paddingHorizontal: 30,
    paddingBottom: 10,
    paddingTop: 7,
    borderRadius: 20,
    alignSelf: "stretch",
    alignItems: "center",
    marginHorizontal: 10,
  },
  container: {
    backgroundColor: "#00ff0050",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignSelf: "stretch",
  },
  modalView: {
    flex: 1,
    margin: 20,
    marginBottom: 120,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "stretch",
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
    width: "100%",
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  inputName: {
    backgroundColor: "#ff000050",
    paddingLeft: 5,
    fontFamily: "Montserrat_400Regular",
  },
  titreBox: {
    backgroundColor: "#0000ff50",
    flex: 1,
    margin: 10,
  },
  inputBox: {
    marginVertical: 5,
  },
});
