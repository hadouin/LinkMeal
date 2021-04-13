import ticketsData from "./tickets.json";
import userData from "./user.json";

export function fetchUserData(token) {
  let filteredData = null;
  userData.map((item) => {
    if (item.id == token) {
      filteredData = item;
    }
  });
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
