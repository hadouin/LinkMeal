import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import TicketFeed from "../components/TicketFeed";
import _ from "lodash";
import { getUsers, contains, getTickets } from "../data/index";

export default class FriendScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <TicketFeed {...this.props} showSearch />;
  }
}
