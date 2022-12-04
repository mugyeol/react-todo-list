import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTodoById } from "../../redux/modules/todos";
import Todo from "../todo/Todo";

const Detail = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);
  const {id} = useParams();

  useEffect(() => {
    dispatch(getTodoById(id));
  },[dispatch,id]);

  return (
    <div>
      <Todo key={todo.id} todo={todo} />
    </div>
  );
};

export default Detail;
