import { type } from "@testing-library/user-event/dist/type";
import { act } from "react-dom/test-utils";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};
export const completeTodo = (payload) => {
  return { type: COMPLETE_TODO, payload };
};
export const getTodoById = (payload) => {
  return { type: GET_TODO_BY_ID, payload };
};

const initialState = [
  {
    title: "제목0",
    content: "내용0",
    isDone: false,
    id: 0,
  },
];
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      const stateAfterDelete = state.filter((todo)=>todo.id !==action.payload)
      return stateAfterDelete
    case COMPLETE_TODO:
        //여기부터 차근차근 볼것 
      const idx = state.findIndex((todo)=>todo.id === action.payload)
      const stateCopy = [...state]
      stateCopy[idx] = !stateCopy[idx].isDone
      return stateCopy;
    default:
      return state;
  }
};

export default todos;
