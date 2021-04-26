import _, { get, result } from "lodash";
import users from "./user1.json";
import tickets from "./ticket1.json";

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
      const formattedQuery = query;
      const results = _.filter(users, (user) => {
        return valueIn(user, formattedQuery);
      });
      resolve(_.take(results, limit));
    }
  });
};

export const getUser = (id) => {
  console.log("apiCalled", id);
  return new Promise((resolve, reject) => {
    resolve(
      _.filter(users, (user) => {
        return user.id === id;
      })
    );
  });
};

export const getTickets = (limit = 20, query = "", issuer = null) => {
  console.log("apiCalled", query, issuer);
  return new Promise((resolve, reject) => {
    if (query.length === 0 && issuer == null) {
      resolve(_.take(tickets, limit));
    } else {
      if (issuer === null) {
        const results = _.filter(tickets, (ticket) => {
          return valueIn(ticket, query);
        });
        resolve(_.take(results, limit));
      }
      if (query.length === 0) {
        const results = _.filter(tickets, (ticket) => {
          return ticket.issuer === issuer;
        });
        resolve(_.take(results, limit));
      }
    }
    const results = _.filter(tickets, (ticket) => {
      return valueIn(ticket, query) && ticket.issuer === issuer;
    });
    resolve(_.take(results, limit));
  });
};

export function valueIn(obj, query) {
  for (const prop in obj) {
    const value = obj[prop];
    if (typeof value === "object") {
      if (valueIn(value, query)) {
        return true;
      }
    }
    value = String(value);
    if (value.includes(query)) {
      return true;
    }
  }
}

export default getUsers;
