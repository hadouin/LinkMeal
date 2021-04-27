import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import TicketFeed from "../components/TicketFeed";
import getTickets from "../data/index";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TicketFeed {...this.props} mode={"home"} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
