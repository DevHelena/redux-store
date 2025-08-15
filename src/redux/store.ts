import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
// import logger from "redux-logger"; 
// ↑ Uncomment this line and the applyMiddleware line below to enable Redux Logger.
// Redux Logger intercepts all dispatched actions and logs to the console:
// - The previous state
// - The dispatched action
// - The next state
// This is very useful for debugging during development, 
// but should not be used in production because it can clutter the console 
// and potentially expose sensitive data.

const enhancer = undefined; 
// To enable Redux Logger, replace this with:
// const enhancer = applyMiddleware(logger);

const store = createStore(rootReducer, undefined, enhancer);

export type AppDispatch = typeof store.dispatch;
export default store;
