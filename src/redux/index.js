import { createStore, applyMiddleware, compose } from "redux";
// import reducer from "./reducers";
import thunk from "redux-thunk";
import HomeReducer from "../containers/HomeTemplate/Home/modules/reducers";
import { combineReducers } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
  HomeReducer,
  //literal object
});
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
