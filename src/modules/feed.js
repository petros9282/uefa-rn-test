import { createAction, handleActions } from "redux-actions";
import { apiLoadFeed } from "src/services/feed";

// ------------------------------------
// Constants
// ------------------------------------
export const FEED_LOAD = "FEED_LOAD";
export const FEED_SUCCESS = "FEED_SUCCESS";
export const FEED_ERROR = "FEED_ERROR";

// ------------------------------------
// Actions
// ------------------------------------
const feedLoad = createAction(FEED_LOAD);
const feedSuccess = createAction(FEED_SUCCESS);
const feedError = createAction(FEED_ERROR);


const loadFeed = () => {
  return dispatch => {
    dispatch(feedLoad());

    apiLoadFeed().then(
      response => {
        return dispatch(feedSuccess(response.data));
      },
      error => {
        alert("Some error happened.")
        return dispatch(feedError(error));
      }
    );
  };
};


export const actions = {
  loadFeed
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: null,
  error: null,
  data: []
};

export default handleActions(
  {
    FEED_SUCCESS: (state, { payload }) => {
      return { ...state, data: payload, loading: false, error: null };
    },

    FEED_ERROR: (state, { payload }) => {
      return { ...state, loading: false, error: payload };
    },

    FEED_LOAD: (state) => {
      return { ...state,  loading: true, error: null };
    }
  },
  initialState
);