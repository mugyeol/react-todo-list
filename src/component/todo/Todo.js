import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../../redux/modules/todos";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Todo.module.css";

const Todo = ({ todo, onDelete, onComplete }) => {
  // const deleteTodoHandler = (todoId) => {
    // setTodoList((prevList) => {
    //   return prevList.filter((todo) => todo.id !== todoId);
    // });
  // };
  // const completeTodoHandler = (todoId, isDone) => {
    // if (isDone) {
    //   setTodoList((prevList) => {
    //     let index = prevList.findIndex((todo) => todo.id === todoId);
    //     prevList[index].isDone = false;
    //     return [...prevList];
    //   });
    // } else {
    //   setTodoList((prevList) => {
    //     let index = prevList.findIndex((todo) => todo.id === todoId);
    //     prevList[index].isDone = true;
    //     return [...prevList];
    //   });
    // }
  // };
  const dispatch = useDispatch()
  const deleteTodoHandler = () => {
    console.log("todo.id",todo.id)
    dispatch(deleteTodo(todo.id))
    // onDelete(todo.id);
  };
  const completeTodoHandler = () => {
    dispatch(completeTodo(todo.id))
    // onComplete(todo.id, todo.isDone);
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
