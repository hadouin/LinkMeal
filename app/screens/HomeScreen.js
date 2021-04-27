import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import TicketFeed from "../components/TicketFeed";
import getTickets from "../data/index";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 5 }}>
          <Text style={styles.text}>Bienvenue sur LinkMeal</Text>
          <Text style={styles.text}>
            Vous pouvez voir ici les dernières annoces dans lequelles vous êtes
            impliqué
          </Text>
        </View>
        <TicketFeed {...this.props} mode={"home"} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: { textAlign: "center", color: "hsl(0,0%,60%)" },
  container: {
    flex: 1,
  },
});
