import ticketsData from "./tickets.json";
import userData from "./user.json";

function fetchUserData(token) {}

export default function fetchTickets(author) {
  let filteredData = [];
  if (author === "self") {
    author = userData.name;
  }
  if (author !== "all") {
    filteredData = [];
    ticketsData.map((item) => {
      if (item.author.name === author) {
        filteredData.push(item);
      }
    });
  } else {
    filteredData = ticketsData;
  }
  return filteredData;
}
