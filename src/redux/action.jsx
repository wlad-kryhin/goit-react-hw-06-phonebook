import { v4 as uuidv4 } from "uuid";
import actionTypes from "./actionTypes";
const addItem = ({ name, tel }) => ({
  type: actionTypes.ADD,
  payload: {
    id: uuidv4(),
    name,
    tel,
  },
});
const deleteItem = (id) => ({
  type: actionTypes.DELETE,
  payload: id,
});
const changeFilter = (value) => ({
  type: actionTypes.FILTER,
  payload: value,
});
export default { addItem, deleteItem, changeFilter };
