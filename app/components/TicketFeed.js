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
import _ from "lodash";
import Ticket from "./Ticket";
import { getTickets, contains, fullContains, valueIn } from "../data/index";

class TicketFeed extends Component {
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

    getTickets(20, this.state.query)
      .then((tickets) => {
        console.log("finished load");
        this.setState({
          loading: false,
          data: tickets,
          fullData: tickets,
        });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };

  handleSearch = (text) => {
    const formatQuery = text.toLowerCase();
    const data = _.filter(this.state.fullData, (ticket) => {
      return valueIn(ticket, formatQuery);
    });
    this.setState({ query: formatQuery, data }, () => this.makeRemoteRequest());
  };

  renderHeader = () => {
    if (this.props.showSearch) {
      return (
        <SearchBar
          placeholder="Type Here..."
          lightTheme
          round
          onChangeText={this.handleSearch}
          value={this.state.query}
        />
      );
    }
    return <></>;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE",
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    console.log("rendering");
    return (
      <FlatList
        contentContainerStyle={styles.list}
        data={this.state.data}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                style={styles.ticket}
                onPress={() =>
                  this.props.navigation.navigate("Details", { item: item })
                }
              >
                <Ticket data={item} />
              </TouchableOpacity>
            </>
          );
        }}
        keyExtractor={(item) => item._id}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  ticket: {
    margin: 5,
    marginHorizontal: 10,
  },
  list: { paddingBottom: 80 },
});

export default TicketFeed;
