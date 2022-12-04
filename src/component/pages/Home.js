import React from "react";
import TodoList from "../todo/TodoList";
import AddTodo from "../addTodo/AddTodo";
import Header from "../header/Header";
import Layout from "../UI/Layout";

const Home = () => {
  return (
   <Layout>
        <Header />
        <AddTodo />
        <TodoList />
    </Layout>
  );
};

export default Home;
