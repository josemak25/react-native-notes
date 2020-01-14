import {
  FETCH_TODOS_STARTED,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR
} from "./types";

export default function appReducer(state = {}, action = {}) {
  switch (action.type) {
    case FETCH_TODOS_STARTED: {
      return { ...state, isLoading: true };
    }
    case FETCH_TODOS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        todos: action.payload
      };
    }
    case FETCH_TODOS_ERROR: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}
