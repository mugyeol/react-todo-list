import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getTodoById } from "../../redux/modules/todos";
import { StCard } from "../UI/Card";
import Button from "../UI/Button";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  dispatch(getTodoById(id));

  const todo = useSelector((state) => state.todos.todo);
  
  // console.log("id",id)
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(getTodoById(id));
  // }, [dispatch, id]);

  return (
    <StWrapper>
    {/* {console.log("rendering")} */}
      <StContainer>
        <span>id : {todo.id}</span>
        <Button onClick={() => navigate("/")}>이전으로</Button>
      </StContainer>
      <div>
        <h1>{todo.title}</h1>
        <p>{todo.content}</p>
      </div>
    </StWrapper>
  );
};

export default Detail;
const StWrapper = styled(StCard)`
  width: 600px;
  height: 500px;
  margin: 100px auto;
`;
const StContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
