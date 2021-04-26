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
import GlobalState from "../contexts/GlobalState";

class TicketFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      query: this.props.initialQuery,
      fullData: [],
    };
  }
  static defaultProps = {
    initialQuery: "",
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    this.setState({ loading: true });

    getTickets(20, this.state.query, this.props.id)
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
    const formatQuery = text;
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
    console.log("rendering", "datalenght", this.state.data.length);
    return this.state.data.lenght === 0 ? (
      <View style={{ flex: 1 }}>
        <Text>C'est bien vide par ici</Text>
      </View>
    ) : (
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
        keyExtractor={(item) => item.id}
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
