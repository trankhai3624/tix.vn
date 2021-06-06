import { createStore, applyMiddleware, compose } from "redux";
// import reducer from "./reducers";
import thunk from "redux-thunk";
import HomeReducer from "../containers/HomeTemplate/Home/modules/reducers";
import DetailReducer from "../containers/HomeTemplate/Detail/modules/reducers";
import AuthReducer from "../containers/HomeTemplate/Sign/modules/reducers";
import PhongVeReducer from "../containers/HomeTemplate/CinemaRoom/modules/reducers";
import MemberReducer from "../containers/HomeTemplate/MemberShip/modules/reducers";
import AdminReducer from "../containers/AdminTemplate/modules/reducers";
import { combineReducers } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
  HomeReducer,
  DetailReducer,

  AuthReducer,
  PhongVeReducer,
  MemberReducer,
  AdminReducer,
});
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
