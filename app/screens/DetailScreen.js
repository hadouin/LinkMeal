import React, { useContext, useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import users from "../data/user1.json";
import _, { size } from "lodash";
import Tags from "../components/Tags";
import GlobalState from "../contexts/GlobalState";
import Status from "../components/Status";
import Author from "../components/Author";
import { ScrollView } from "react-native-gesture-handler";
import { getUser } from "../data/index";

function ContactModal(props) {
  return (
    <View style={{ backgroundColor: "#0004", flex: 1 }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                fontFamily: "Comfortaa_700Bold",
                fontSize: 30,
                marginBottom: 20,
              }}
            >
              Info contact
            </Text>
            <Text>
              <Text style={{ fontFamily: "Montserrat_700Bold" }}>Phone : </Text>
              <Text style={styles.modalText}>{props.author.phone}</Text>
            </Text>
            <Text>
              <Text style={{ fontFamily: "Montserrat_700Bold" }}>Email : </Text>
              <Text style={styles.modalText}>{props.author.email}</Text>
            </Text>
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => props.changeHandler(false)}
          >
            <Text style={styles.textStyle}>Retour</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default function DetailScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [gstate, setgstate] = useContext(GlobalState);
  const Icon = createIconSetFromIcoMoon(
    require("../assets/icomoon/selection.json"),
    "IcoMoon",
    "icomoon.ttf"
  );

  let item = props.route.params.item;
  var author = _.filter(users, (user) => {
    return user.id === item.issuer;
  })[0];
  var buyer = _.filter(users, (user) => user.id === item.buyer)[0];
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ContactModal changeHandler={setModalVisible} author={author} />
      </Modal>
      <Image
        style={styles.image}
        source={{ width: "100%", height: "100%", uri: item.picture }}
      />
      <View style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={[styles.title, { flex: 3 }]}>{item.title}</Text>
          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <Text style={styles.title}>{item.price}</Text>
            <Image
              style={{
                height: 40,
                width: 40,
                margin: 5,
                resizeMode: "contain",
              }}
              source={require("../assets/images/Logo-Orange.png")}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.bar} />
          <Status status={item.status} />
        </View>
        <View style={styles.author}>
          <Author {...props} author={author} />
          <Tags tags={item.tags} />
        </View>

        <ScrollView style={styles.description}>
          <Text style={{ padding: 5, color: "#222" }}>{item.description}</Text>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.contactButton}
              onPress={() => setModalVisible(true)}
            >
              <Icon name={"Chat"} size={30} color={"#402313"} />
              <Text
                style={{ color: "#402313", fontFamily: "Comfortaa_700Bold" }}
              >
                Contact
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => props.navigation.navigate("Map", { user: author })}
            >
              <Icon name={"Location"} size={30} color={"#402313"} />
              <Text
                style={{
                  color: "#402313",
                  fontFamily: "Comfortaa_700Bold",
                }}
              >
                Location
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10 }}>
            {item.buyer === null && item.issuer !== gstate.activeId ? (
              <View>
                <TouchableOpacity
                  style={styles.order}
                  onPress={() => {
                    gstate.tickets.map((ticket) => {
                      if (ticket.id === item.id) {
                        ticket.buyer = gstate.activeId;
                      }
                      return ticket;
                    });
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontFamily: "Comfortaa_700Bold",
                      fontSize: 20,
                    }}
                  >
                    Reserver
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <></>
            )}
            {item.issuer === gstate.activeId &&
            item.buyer !== null &&
            !item.closed ? (
              <View style={styles.confirm}>
                <View>
                  <Text>Demande de :</Text>
                  <Author {...props} author={buyer} />
                </View>
                <TouchableOpacity
                  style={styles.order}
                  onPress={() => {
                    gstate.tickets.map((ticket) => {
                      console.log("confirm attempt", ticket.id, item.id);
                      if (ticket.id === item.id) {
                        ticket.closed = true;
                      }
                      return ticket;
                    });
                    props.navigation.goBack();
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontFamily: "Comfortaa_700Bold",
                      fontSize: 20,
                    }}
                  >
                    Confirmer
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <></>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  confirm: {
    padding: 5,
    alignItems: "stretch",
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  order: {
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
    flex: 1,
    fontFamily: "Montserrat_400Regular",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "30%",
  },
  description: {
    padding: 5,
  },
  author: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bar: {
    marginRight: 5,
    marginBottom: 5,
    width: 50,
    height: 10,
    backgroundColor: "#ff8b4b",
  },
  title: {
    fontSize: 40,
    fontFamily: "Comfortaa_700Bold",
    color: "#222",
  },
  price: {
    flex: 1,
  },
  buttons: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    margin: 20,
  },
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "hsl(21, 0%, 87%)",
    margin: 1,
    padding: 10,
    paddingHorizontal: 25,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "hsl(21, 0%, 87%)",
    margin: 1,
    padding: 10,
    paddingHorizontal: 25,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  button: {
    borderRadius: 20,
    padding: 10,
  },
  buttonClose: {
    backgroundColor: "#ff8b4b",
  },
});
