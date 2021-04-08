import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { timing } from "react-native-reanimated";

const Icon = createIconSetFromIcoMoon(
  require("../assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export default class CounterComp extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      count: "100",
      timing: 200,
    };
    this.timer = null;
    this.addOne = this.addOne.bind(this);
    this.delOne = this.delOne.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  addOne() {
    this.increment(this.state.count);
    this.setState({
      timing: this.state.timing - 20,
    });
    this.timer = setTimeout(this.addOne, this.state.timing);
  }

  delOne() {
    this.decrement(this.state.count);
    this.setState({
      timing: this.state.timing - 20,
    });
    this.timer = setTimeout(this.delOne, this.state.timing);
  }

  stopTimer() {
    this.state.timing = 200;
    clearTimeout(this.timer);
  }
  handleChange(text) {
    this.setState({
      count: text.replace(/[^0-9]/g, ""),
    });
  }

  increment(compte) {
    var value = parseInt(compte, 10) + 10;
    let string = value.toString(10);
    this.setState({
      count: string,
    });
  }
  decrement(compte) {
    var value = parseInt(compte, 10) - 10;
    let string = value.toString(10);
    this.setState({
      count: string,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPressIn={this.delOne} onPressOut={this.stopTimer}>
          <Icon name={"Arrow---Down-21"} size={40} color={"white"} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.handleChange(text)}
          keyboardType="numeric"
          placeholder="Poids de votre plat"
          value={this.state.count}
        />
        <TouchableOpacity onPressIn={this.addOne} onPressOut={this.stopTimer}>
          <Icon name={"Arrow---Up-21"} size={40} color={"white"} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#ff8b4b",
    borderRadius: 10,
  },
  input: { textAlign: "center" },
});
