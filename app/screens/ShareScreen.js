import React, { useState, useEffect, Component, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import CounterComp from "../components/CounterComp";
import { CheckBox } from "react-native-elements";
import GlobalState from "../contexts/GlobalState";

export default function ShareScreen(props) {
  const Icon = createIconSetFromIcoMoon(
    require("../assets/icomoon/selection.json"),
    "IcoMoon",
    "icomoon.ttf"
  );

  const [Gstate, setGstate] = useContext(GlobalState);
  const [image, setImage] = useState(null);
  const [title, onChangeTitle] = useState(null);
  const [description, onChangeDescription] = useState(null);
  const [weight, setWeight] = useState(100);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [bio, setBio] = useState(false);
  const [gFree, setgFree] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [price, setPrice] = useState(1);

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
  const handlePosting = () => {
    const tags = [];
    if (vegan) {
      tags.push("vegan");
    }
    if (bio) {
      tags.push("bio");
    }
    if (gFree) {
      tags.push("gFree");
    }
    if (image === null) {
      ("http://placehold.it/100x100");
    }
    const dataObj = {
      id: Gstate.tickets.lenght,
      picture: image,
      title: title,
      description: description,
      tags: tags,
      price: price,
      issuer: 4,
      buyer: null,
    };
    Gstate.tickets.unshift(dataObj);
  };
  return (
    <View style={styles.modalView}>
      <ScrollView>
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
            <CounterComp
              title={"Prix"}
              defaultVal={String(price)}
              increment={1}
              changeHandler={setPrice}
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
        <CounterComp
          title={"Poids (grammes)"}
          defaultVal={String(weight)}
          increment={10}
          changeHandler={setWeight}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <CheckBox
            containerStyle={{}}
            title="Vegan"
            checkedIcon={
              <Image
                source={{
                  width: 30,
                  height: 30,
                  uri:
                    "https://image.flaticon.com/icons/png/512/1970/1970959.png",
                }}
              />
            }
            uncheckedIcon={
              <Image
                source={{
                  width: 30,
                  height: 30,
                  uri:
                    "https://image.flaticon.com/icons/png/512/1970/1970951.png",
                }}
              />
            }
            checked={vegan}
            onPress={() => {
              setVegan(!vegan);
            }}
          />
          <CheckBox
            title="Bio"
            checkedIcon={
              <Image
                source={{
                  width: 30,
                  height: 30,
                  uri:
                    "https://image.flaticon.com/icons/png/512/525/525916.png",
                }}
              />
            }
            uncheckedIcon={
              <Image
                source={{
                  width: 30,
                  height: 30,
                  uri:
                    "https://image.flaticon.com/icons/png/512/525/525988.png",
                }}
              />
            }
            checked={bio}
            onPress={() => {
              setBio(!bio);
            }}
          />
          <CheckBox
            title="SansGluten"
            checkedIcon={
              <Image
                style={{ height: 30, width: 30 }}
                source={require("../assets/images/Tags/gFreeOn.png")}
              />
            }
            uncheckedIcon={
              <Image
                style={{ height: 30, width: 30 }}
                source={require("../assets/images/Tags/gFreeOff.png")}
              />
            }
            checked={gFree}
            onPress={() => {
              setgFree(!gFree);
            }}
          />
        </View>
        <TouchableOpacity style={styles.connect} onPress={handlePosting} s>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Comfortaa_700Bold",
              fontSize: 20,
            }}
          >
            Publier
          </Text>
        </TouchableOpacity>
      </ScrollView>
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
    margin: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignSelf: "stretch",
  },
  input: {
    width: "100%",
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  inputName: {
    paddingLeft: 5,
    fontFamily: "Montserrat_400Regular",
  },
  inputBox: {
    marginVertical: 10,
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
  titreBox: {
    flex: 1,
    margin: 10,
  },

  pickStartTime: {
    margin: 10,
  },
});
