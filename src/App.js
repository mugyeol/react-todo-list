import classes from "./App.module.css";
import TodoList from "./component/todo/TodoList";
import AddTodo from "./component/addTodo/AddTodo";
import Header from "./component/header/Header";
import nextId from "react-id-generator";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  getTodoById,
  completeTodo,
} from "./redux/modules/todos";
function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [todoList, setTodoList] = useState([
    {
      title: "제목0",
      content: "내용0",
      isDone: false,
      id: 0,
    },
  ]);
  const [todoId, setTodoId] = useState(7);
  const id = nextId();
  console.log(id)

  const addTodoHandler = (title, content) => {
    dispatch(addTodo({ title: title, content: content, id, isDone: false }));
    // const obj = {
    //   title: title,
    //   content: content,
    //   isDone: false,
    //   id: todoId,
    // };
    // setTodoList((prevList) => {
    //   return [...prevList, obj];
    // });
    // setTodoId((prevId) => {
    //   return (prevId += 1);
    // });
  };
  const deleteTodoHandler = (todoId) => {
    setTodoList((prevList) => {
      return prevList.filter((todo) => todo.id !== todoId);
    });
  };
  const completeTodoHandler = (todoId, isDone) => {
    if (isDone) {
      setTodoList((prevList) => {
        let index = prevList.findIndex((todo) => todo.id === todoId);
        prevList[index].isDone = false;
        return [...prevList];
      });
    } else {
      setTodoList((prevList) => {
        let index = prevList.findIndex((todo) => todo.id === todoId);
        prevList[index].isDone = true;
        return [...prevList];
      });
    }
  };

  return (
    <div className={classes.layout}>
      <div className={classes.container}>
        <Header />
        <AddTodo onAddTodo={addTodoHandler} />
        <div className={classes.todolist}>
          <TodoList
            todoList={todos}
            onDeleteTodo={deleteTodoHandler}
            onCompleteTodo={completeTodoHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
