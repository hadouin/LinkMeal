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

    this.state = {
      loading: false,
      data: [],
      error: null,
      query: "",
      fullData: [],
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    this.setState({ loading: true });

    getUsers(20, this.state.query)
      .then((users) => {
        this.setState({
          loading: false,
          data: users,
          fullData: users,
        });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };

  handleSearch = (text) => {
    const formatQuery = text.toLowerCase();
    const data = _.filter(this.state.fullData, (user) => {
      return contains(user, formatQuery);
    });
    this.setState({ query: formatQuery, data }, () => this.makeRemoteRequest());
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={this.handleSearch}
        value={this.state.query}
      />
    );
  };

  render() {
    return <TicketFeed {...this.props} data={getTickets()} showSearch />;
  }
}
