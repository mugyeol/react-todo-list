import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TimeAgo from "timeago-react";
import { completeTodo, deleteTodo } from "../../redux/modules/todos";
import Button from "../UI/Button";
import { StCard } from "../UI/Card";
import * as timeago from "timeago.js";

// import it first.
import ko from "timeago.js/lib/lang/ko";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const deleteTodoHandler = () => {
    dispatch(deleteTodo(todo.id));
  };
  const completeTodoHandler = () => {
    dispatch(completeTodo(todo.id));
  };
  // register it.
  timeago.register("ko", ko);

  const [time, setTime] = useState("");


  const date = "2022-12-09 00:08:00";
  console.log("rendering?")

  // TODO: 현재시간 - 생성 시간 구해서 1분 이하면 1분으로 처리 1개월부터는 날짜로 표시 
  //       timeago 써야되는거 맞는지 생각해보기 
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(timeago.format(date, "ko")); 
    }, 60*1000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <StContainer margin="none">
      <Link className="link" to={`/${todo.id}`}>
        상세보기
      </Link>
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
      <div>{time}</div>
    </StContainer>
  );
};

export default Todo;
const StContainer = styled(StCard)`
  .link {
    text-decoration: none;
  }
`;
const StBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
