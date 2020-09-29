import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import hotelsReducer from "./hotelsReducer";
import userReducer from "./userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

let reducers = combineReducers({
  hotels: hotelsReducer,
  user: userReducer,
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
