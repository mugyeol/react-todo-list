import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../UI/Card";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  console.log("todos", todos);
  const workingList = todos.filter((el) => !el.isDone);
  console.log("workingList", workingList);
  const doneList = todos.filter((el) => el.isDone);
  console.log("doneList", doneList);

  return (
    <Fragment>
      <h1>working</h1>
      <Card borderColor="green">
        <StContainer>
          {workingList.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </StContainer>
      </Card>
      <h1>done</h1>
      <Card borderColor="green">
        <StContainer>
          {doneList.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </StContainer>
      </Card>
    </Fragment>
  );
};

export default TodoList;
const StContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem 1rem;
`;
