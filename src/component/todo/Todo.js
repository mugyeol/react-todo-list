import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { completeTodo, deleteTodo } from "../../redux/modules/todos";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const deleteTodoHandler = () => {
    console.log("todo.id", todo.id);
    dispatch(deleteTodo(todo.id));
  };
  const completeTodoHandler = () => {
    dispatch(completeTodo(todo.id));
  };

  return (
    <Card margin="none">
      <Link to={`/${todo.id}`}>상세보기</Link>
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
    </Card>
  );
};

export default Todo;

const StBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

// .complete{
//    border: 1px solid #2A3990;
// }
// .delete {
//   border: 1px solid red;
// }
// .delete:hover{
//   background: red;
//   border-color: red;
//   color: white;
// }
