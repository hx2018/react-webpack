import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import reducer from "./reducer";

const initValue = { firstCounter: 0, secondCounter: 10, thirdCounter: 30 };

const middlewares = [createLogger()];

const store = createStore(reducer, initValue, applyMiddleware(...middlewares));

export default store;
