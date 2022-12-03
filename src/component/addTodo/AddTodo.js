import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddTodo.module.css";
import nextId from "react-id-generator";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/modules/todos";

const AddTodo = (props) => {
  const [todo, setTodo] = useState({
    title: "",
    content: "",
    isDone: false,
    id: 0,
  });
  const id = nextId();
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault()
    if(todo.title.trim()==="") return
    dispatch(addTodo({...todo,id}));
    setTodo({
      title: "",
      content: "",
      isDone: false,
      id: 0,
    });
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <Card className={classes.addtodo}>
      <form className={classes.addform} onSubmit={onSubmitHandler}>
        <label>제목 : </label>
        <input onChange={onChangeHandler} name="title"value={todo.title} required />
        <label>내용 : </label>
        <input onChange={onChangeHandler} name="content" value={todo.content} />
        <Button className={classes.addbtn} type="submit">
          추가하기
        </Button>
      </form>
    </Card>
  );
};

export default AddTodo;
