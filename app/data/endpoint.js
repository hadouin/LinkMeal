import ticketsData from "./tickets.json";
import userData from "./user.json";

export default function fetchTickets(author) {
  let filteredData = [];
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
