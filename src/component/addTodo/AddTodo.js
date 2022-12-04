import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import nextId from "react-id-generator";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/modules/todos";
import styled from "styled-components";

const AddTodo = () => {
  const [todo, setTodo] = useState({
    title: "",
    content: "",
    isDone: false,
    id: 0,
  });
  const id = nextId();
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (todo.title.trim() === "") return;
    dispatch(addTodo({ ...todo, id }));
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
    <Card backgroundColor="#eee">
      <StFormContainer onSubmit={onSubmitHandler}>
        <label>제목 : </label>
        <input
          onChange={onChangeHandler}
          name="title"
          value={todo.title}
          required
        />
        <label>내용 : </label>
        <input onChange={onChangeHandler} name="content" value={todo.content} />
        <Button  type="submit">
          추가하기
        </Button>
      </StFormContainer>
    </Card>
  );
};

export default AddTodo;
const StFormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;

  input {
    outline: none;
    border: none;
    border-radius: 10px;
    height: 35px;
    width: 240px;
    padding: 3px;
    font-size: 16px;
  }
  label {
    font-weight: bold;
    font-size: 20px;
  }
`;
