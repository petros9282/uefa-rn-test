import {
  createStore as createReduxStore,
  applyMiddleware,
  compose
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./";

const createStore = (initialState = {}) => {
  // Middleware Configuration
  const middleware = [thunk];

  // Store Enhancers
  const enhancers = [];
  let composeEnhancers = __DEV__ ? composeWithDevTools : compose;

  return createReduxStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
  );
};

export default createStore;