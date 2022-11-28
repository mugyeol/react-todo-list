import classes from "./App.module.css";
import TodoList from "./component/todo/TodoList";
import AddTodo from "./component/addTodo/AddTodo";
import Header from "./component/header/Header";
import { useState } from "react";
function App() {
  const [todoList, setTodoList] = useState([
    {
      title: "제목0",
      content: "내용0",
      isDone: false,
      id: 0,
    },
    {
      title: "제목1",
      content: "내용1",
      isDone: false,
      id: 1,
    },
    {
      title: "제목2",
      content: "내용2",
      isDone: true,
      id: 2,
    },
    {
      title: "제목3",
      content: "내용3",
      isDone: true,
      id: 3,
    },
    {
      title: "제목4",
      content: "내용4",
      isDone: true,
      id: 4,
    },
    {
      title: "제목5",
      content: "내용5",
      isDone: false,
      id: 5,
    },
    {
      title: "제목6",
      content: "내용6",
      isDone: false,
      id: 6,
    },
  ]);
  const [todoId, setTodoId] = useState(7);

  const addTodoHandler = (title, content) => {
    const obj = {
      title: title,
      content: content,
      isDone: false,
      id: todoId,
    };
    setTodoList((prevList) => {
      return [...prevList, obj];
    });
    setTodoId((prevId) => {
      return (prevId += 1);
    });
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
            todoList={todoList}
            onDeleteTodo={deleteTodoHandler}
            onCompleteTodo={completeTodoHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
