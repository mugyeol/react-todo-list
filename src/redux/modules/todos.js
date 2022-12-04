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
const initialState = {
  todos: [
    {
      title: "제목0",
      content: "내용0",
      isDone: false,
      id: "0",
    },
    {
      title: "제목1",
      content: "내용1",
      isDone: true,
      id: "1",
    },
  ],
  todo: {
    title: "",
    content: "",
    isDone: false,
    id: "0",
  },
};
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      const stateAfterDelete = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return { ...state, todos: stateAfterDelete };
    case COMPLETE_TODO:
      const stateCopy = { ...state };
      const idx = stateCopy.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      stateCopy.todos[idx].isDone = !stateCopy.todos[idx].isDone;
      return { ...state, todos: [...stateCopy.todos] }; // 스프레드랑 배열 괄호 빼면 왜 안되는지 알아봐볼것 !
    case GET_TODO_BY_ID:
      const todo = state.todos.filter((todo) => todo.id === action.payload);
      return { ...state, todo: todo[0] };
    default:
      return state;
  }
};

export default todos;
