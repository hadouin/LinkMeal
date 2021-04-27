import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ListItem, Icon, Button } from "react-native-elements";
import GlobalState from "../contexts/GlobalState";

export default function SettingsScreen(props) {
  const [gstate, setgstate] = useContext(GlobalState);
  const list = [
    {
      title: "Log out",
      icon: "logout",
      changeHandler: () => {
        setgstate({ isLoggedIn: false });
      },
    },
  ];
  return (
    <View>
      {list.map((item, i) => (
        <TouchableOpacity key={i} onPress={item.changeHandler}>
          <ListItem key={i} bottomDivider>
            <Icon name={item.icon} color={"hsl(0,50%,50%)"} />
            <ListItem.Content>
              <ListItem.Title
                style={{
                  color: "hsl(0,50%,50%)",
                  fontFamily: "Montserrat_500Medium",
                }}
              >
                {item.title}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
