import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
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
  static contextType = GlobalState;
  static defaultProps = {
    initialQuery: "",
    id: null,
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = _.debounce(() => {
    this.setState({ loading: true });
    switch (this.props.mode) {
      case "profile":
        getTickets(20, this.state.query, this.props.id)
          .then((tickets) => {
            console.log(tickets);
            let filtered = _.filter(tickets, (ticket) => {
              return !ticket.closed;
            });
            this.setState({
              loading: false,
              data: filtered,
              fullData: tickets,
            });
          })
          .catch((error) => {
            this.setState({ error, loading: false });
          });
        break;
      case "home":
        getTickets(20, this.state.query).then((tickets) => {
          let filtered = _.filter(tickets, (ticket) => {
            return (
              ticket.issuer === this.context[0].activeId ||
              ticket.buyer === this.context[0].activeId
            );
          });
          filtered.map((ticket) => {
            if (ticket.issuer === this.context[0].activeId) {
              ticket.status = "run";
              if (ticket.buyer !== null) {
                ticket.status = "ask";
              }
            }
            if (ticket.buyer === this.context[0].activeId) {
              ticket.status = "run";
            }
            if (ticket.closed) {
              ticket.status = "closed";
              if (ticket.buyer !== null) {
                ticket.status = "completed";
              }
            }

            return ticket;
          });
          this.setState({
            loading: false,
            data: filtered,
            fullData: tickets,
          });
        });
        break;
      default:
        getTickets(20, this.state.query, this.props.id)
          .then((tickets) => {
            this.setState({
              loading: false,
              data: tickets,
              fullData: tickets,
            });
          })
          .catch((error) => {
            this.setState({ error, loading: false });
          });
    }
  }, 250);

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
    return this.state.data.lenght === 0 ? (
      <View style={{ flex: 1 }}>
        <Text>C'est bien vide par ici</Text>
      </View>
    ) : (
      <FlatList
        contentContainerStyle={styles.list}
        data={this.state.data}
        refreshControl={
          <RefreshControl
            enabled={true}
            onRefresh={this.makeRemoteRequest}
            refreshing={this.state.loading}
          />
        }
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                style={styles.ticket}
                onPress={() =>
                  this.props.navigation.navigate("Details", { item: item })
                }
              >
                <Ticket data={item} mode={this.props.mode} />
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
