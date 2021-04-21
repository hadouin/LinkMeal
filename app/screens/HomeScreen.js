import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import TicketFeed from "../components/TicketFeed";
import getTickets from "../data/index";

export default function HomeScreen(props) {
  return <TicketFeed {...props} />;
}
