import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddTodo.module.css";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isValid, setIsValid] = useState(false);
  // console.log("isValid", isValid);

  const addTodoHandler = (e) => {
    e.preventDefault();
    props.onAddTodo(title, content);
    setTitle("");
    setContent("");
  };

  useEffect(() => { 
    const identifier = setTimeout(() => {
      console.log("checking validity");
      setIsValid(title.trim().length > 3);
    }, 500);

    return () => {
      console.log("clean up");
      clearTimeout(identifier);
    };
  }, [title]);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  return (
    <Card className={classes.addtodo}>
      <form className={classes.addform} onSubmit={addTodoHandler}>
        <label>제목 : </label>
        <input onChange={titleChangeHandler} value={title} required />
        <label>내용 : </label>
        <input onChange={contentChangeHandler} value={content} />
        <Button className={classes.addbtn} type="submit">
          추가하기
        </Button>
      </form>
    </Card>
  );
};

export default AddTodo;
