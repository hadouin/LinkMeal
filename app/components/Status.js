import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

class Status extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    switch (this.props.status) {
      case "run":
        return (
          <Text style={[styles.container, { color: "hsl(0,0%,50%)" }]}>
            En attente
          </Text>
        );
        break;
      case "ask":
        return <Text style={[styles.container]}>ask</Text>;
        break;
      case "closed":
        return (
          <Text style={[styles.container, { color: "hsl(0,50%,50%)" }]}>
            Closed
          </Text>
        );
        break;
      case "completed":
        return (
          <Text style={[styles.container, { color: "hsl(100,50%,50%)" }]}>
            Completed
          </Text>
        );
      default:
        return <></>;
    }
  }
}

export default Status;

const styles = StyleSheet.create({
  container: { paddingLeft: 5 },
});
