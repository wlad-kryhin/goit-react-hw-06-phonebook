import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./action";
const items = createReducer([], {
  [actions.addItem]: (state, { payload }) => {
    if (
      state.find(
        (contact) => contact.name.toLowerCase() === payload.name.toLowerCase(),
      )
    ) {
      alert(`${payload.name} is already in contacts.`);
    } else if (state.find((contact) => contact.tel === payload.tel)) {
      alert(`${payload.tel} is already in contacts.`);
    } else {
      return [...state, payload];
    }
  },
  [actions.deleteItem]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.ADD:
//       if (
//         state.find(
//           (contact) =>
//             contact.name.toLowerCase() === payload.name.toLowerCase(),
//         )
//       ) {
//         alert(`${payload.name} is already in contacts.`);
//       }
//       if (state.find((contact) => contact.tel === payload.tel)) {
//         alert(`${payload.tel} is already in contacts.`);
//       }
//       return [...state, payload];

//     case actionTypes.DELETE:
//       return state.filter((item) => item.id !== payload);
//     default:
//       return state;
//   }
// };
// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case actionTypes.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };
export default combineReducers({
  items,
  filter,
});
