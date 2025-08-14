import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const enhancer = applyMiddleware(logger);

const store = createStore(rootReducer, undefined, enhancer);

export type AppDispatch = typeof store.dispatch;
export default store;
