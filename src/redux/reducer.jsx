import { combineReducers } from "redux";
import actionTypes from "./actionTypes";
const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      if (
        state.find(
          (contact) =>
            contact.name.toLowerCase() === payload.name.toLowerCase(),
        )
      ) {
        alert(`${payload.name} is already in contacts.`);
      }
      if (state.find((contact) => contact.tel === payload.tel)) {
        alert(`${payload.tel} is already in contacts.`);
      }
      return [...state, payload];

    case actionTypes.DELETE:
      return state.filter((item) => item.id !== payload);
    default:
      return state;
  }
};
const filter = (state = "", { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER:
      return payload;

    default:
      return state;
  }
};
export default combineReducers({
  items,
  filter,
});
