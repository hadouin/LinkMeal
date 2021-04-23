import _ from "lodash";
import users from "./users";
import tickets from "./tickets copy.js";

export const contains = (item, query) => {
  if (
    item.name.first.includes(query) ||
    item.name.last.includes(query) ||
    item.email.includes(query)
  ) {
    return true;
  }
  return false;
};

export const getUsers = (limit = 20, query = "") => {
  console.log("apiCalled", query);
  return new Promise((resolve, reject) => {
    if (query.length === 0) {
      resolve(_.take(users, limit));
    } else {
      const formattedQuery = query.toLowerCase();
      const results = _.filter(users, (user) => {
        return contains(user, formattedQuery);
      });
      resolve(_.take(results, limit));
    }
  });
};

export const fullContains = (item, query) => {
  const helper = toArray(item);
  console.log(helper);
  return query in helper;
};

export const getTickets = (limit = 20, query = "") => {
  console.log("apiCalled", query);
  return new Promise((resolve, reject) => {
    if (query.length === 0) {
      resolve(_.take(tickets, limit));
    } else {
      const formattedQuery = query.toLowerCase();
      const results = _.filter(tickets, (ticket) => {
        return valueIn(ticket, formattedQuery);
      });
      resolve(_.take(results, limit));
    }
  });
};

function toArray(obj) {
  const result = [];
  for (const prop in obj) {
    const value = obj[prop];
    if (typeof value === "object") {
      result.push(toArray(value));
    } else {
      result.push(value);
    }
  }
  return result;
}

export function valueIn(obj, query) {
  for (const prop in obj) {
    const value = obj[prop];
    console.log(value);
    if (typeof value === "object") {
      valueIn(value);
    } else if (typeof value === "string" && value.includes(query)) {
      return true;
    }
  }
}

export default getUsers;
