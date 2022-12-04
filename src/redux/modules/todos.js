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
//dispatch -> todos : state.todos.todos (todo : state.todos.todo)
//reducer -> todos : state.todos (todo : state.todo)
const initialState = {
  todos: [
    {
      title: "제목0",
      content: "내용0",
      isDone: false,
      id: "0",
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
      return { ...state, todos: [stateAfterDelete] };
    case COMPLETE_TODO:
      const stateCopy = { ...state };
      const idx = stateCopy.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      console.log(stateCopy.todos[idx], "stateCopy.todos[idx]");
      stateCopy.todos[idx].isDone = !stateCopy.todos[idx].isDone;
      return { ...state, todos: [...stateCopy.todos] };
    case GET_TODO_BY_ID:
      console.log(state.todos[0].id,"todo.id")
      console.log(typeof(action.payload), "action.payload");
      console.log(state.todos, "state.todos");
      const todo = state.todos.filter((todo) => todo.id === action.payload);
      console.log(todo, "todo");
      return { ...state, todo: todo[0] };
    default:
      return state;
  }
};

export default todos;
