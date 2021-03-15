import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Tab from "./Tab";
import ShareButton from "./ShareButton";

const { width } = Dimensions.get("screen");

export default function TabBar({ state, navigation }) {
  const [selected, setSelected] = useState("Home");
  const { routes } = state;
  const renderColor = (currentTab) =>
    currentTab === selected ? "#ff8b4b" : "black";

  const handlePress = (activeTab, index) => {
    setSelected(activeTab);
    if (state.index !== index) {
      navigation.navigate(activeTab);
    }
  };
  const renderIcon = (currentTab, icon) =>
    currentTab === selected ? icon + "1" : icon;

  return (
    <View style={styles.box}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {routes.map((route, index) => (
            <Tab
              tab={route}
              icon={renderIcon(route.name, route.params.icon)}
              onPress={() => handlePress(route.name, index)}
              color={renderColor(route.name)}
              key={route.key}
            />
          ))}
        </View>
      </View>
      <ShareButton />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {},
  wrapper: {
    position: "absolute",
    bottom: 0,
    height: 70,
    width,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 70,
    alignItems: "center",
    backgroundColor: "white",
  },
});
