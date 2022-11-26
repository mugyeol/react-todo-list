import React, { Fragment } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Todo.module.css";

const Todo = ({ todo, onDelete, onComplete }) => {
  const deleteTodoHandler = () => {
    onDelete(todo.id);
  };
  const completeTodoHandler = () => {
    onComplete(todo.id, todo.isDone);
  };

  return (
    <Card className={classes.todo}>
      <h1>{todo.title}</h1>
      <p className={classes.contents}>{todo.content}</p>
      <div className={classes.buttonWrapper}>
        <Button className={classes.delete} onClick={deleteTodoHandler}>
          삭제하기
        </Button>
        <Button className={classes.complete} onClick={completeTodoHandler}>
          {todo.isDone ? "취소하기" : "완료하기"}
        </Button>
      </div>
    </Card>
  );
};

export default Todo;
