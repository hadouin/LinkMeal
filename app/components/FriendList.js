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
import Friend from "../components/Friend";
import _ from "lodash";
import { getUsers, valueIn } from "../data/index";

class FriendList extends Component {
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
    const formatQuery = text;
    const data = _.filter(this.state.fullData, (user) => {
      return valueIn(user, formatQuery);
    });
    this.setState({ query: formatQuery, data }, () => this.makeRemoteRequest());
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%",
        }}
      />
    );
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
    return (
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
          let isFriend = true;
          return (
            <>
              <TouchableOpacity
                style={styles.friend}
                onPress={() =>
                  this.props.navigation.navigate("FriendInfo", { item: item })
                }
              >
                <Friend
                  navigation={this.props.navigation}
                  picture={item.picture}
                  name={item.name.first + " " + item.name.last}
                  isFriend={isFriend}
                />
              </TouchableOpacity>
            </>
          );
        }}
        keyExtractor={(item) => item.email}
        ItemSeparatorComponent={this.renderSeparator}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={this.renderFooter}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  friend: {},
  list: { paddingBottom: 80 },
});

export default FriendList;
