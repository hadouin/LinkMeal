import { RefreshControl } from "react-native";
import ticketsData from "./ticket1.json";
import userData from "./user1.json";
import _ from "lodash";

export function publishTicket(data) {}

export function fetchUserData(token) {
  let filteredData = [];
  if (token == "all") {
    filteredData = userData;
  } else {
    userData.map((item) => {
      if (item.id == token) {
        filteredData = item;
      }
    });
  }
  return filteredData;
}

export default function fetchTickets(userToken) {
  let filteredData = [];
  if (userToken === "all") {
    filteredData = ticketsData;
  } else {
    ticketsData.map((item) => {
      if (item.author.id === userToken) {
        filteredData.push(item);
      }
    });
  }
  return filteredData;
}

export function friendUpdate(action, token, userToken) {
  let newData = [];
  if (action == "add") {
    userData.map((item) => {
      if (item.id == userToken) {
        if (!item.friend.includes(token)) {
          item.friend.push(token);
        }
      }
      newData.push(item);
    });
  }
}
