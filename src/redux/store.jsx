import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "items",
  storage,
  blacklist: ["filter"],
};
const persistedReducer = persistReducer(persistConfig, contactsReducer);
const reducer = combineReducers({
  contacts: persistedReducer,
});
const store = createStore(reducer, composeWithDevTools());
const persistor = persistStore(store);
export default { store, persistor };
