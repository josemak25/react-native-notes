import {
  FETCH_TODOS_STARTED,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  API_BASE_URI
} from "./types";

const addTodosStarted = () => ({ type: FETCH_TODOS_STARTED });

const addTodosSuccess = todos => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos
});

const addTodosFailure = error => ({
  type: FETCH_TODOS_ERROR,
  payload: { error }
});

export default getTodos = () => {
  return async dispatch => {
    dispatch(addTodosStarted());

    try {
      const response = await fetch(API_BASE_URI);
      const todos = await response.json();
      dispatch(addTodosSuccess(todos));
    } catch (error) {
      dispatch(addTodosFailure(error.message));
    }
  };
};
