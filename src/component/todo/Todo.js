import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { completeTodo, deleteTodo } from "../../redux/modules/todos";
import Button from "../UI/Button";
import  { StCard } from "../UI/Card";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const deleteTodoHandler = () => {
    dispatch(deleteTodo(todo.id));
  };
  const completeTodoHandler = () => {
    dispatch(completeTodo(todo.id));
  };

  return (
    <StContainer margin="none">
      <Link className="link" to={`/${todo.id}`}>상세보기</Link>
      <h1>{todo.title}</h1>
      <p>{todo.content}</p>
      <StBtnWrapper>
        <Button hover="red" border="red" onClick={deleteTodoHandler}>
          삭제하기
        </Button>
        <Button border="blue" onClick={completeTodoHandler}>
          {todo.isDone ? "취소하기" : "완료하기"}
        </Button>
      </StBtnWrapper>
    </StContainer>
  );
};

export default Todo;
const StContainer = styled(StCard)`
  .link{
    text-decoration: none;
  }

`
const StBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

