import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";
import Todo from "./Todo";
import classes from "./TodoList.module.css";

const TodoList = () => {

  const todos = useSelector(state=>state.todos)
  console.log(todos)
  const workingList = todos.filter((el) => !el.isDone);
  const doneList = todos.filter((el) => el.isDone);

  return (
    <Fragment>
      <h1>working</h1>
      <Card className={classes.todo}>
        {workingList.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            // onDelete={props.onDeleteTodo}
            // onComplete={props.onCompleteTodo}
          />
        ))}
      </Card>
      <h1>done</h1>
      <Card className={classes.todo}>
        {doneList.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            // onDelete={props.onDeleteTodo}
            // onComplete={props.onCompleteTodo}
          />
        ))}
      </Card>
    </Fragment>
  );
};

export default TodoList;
