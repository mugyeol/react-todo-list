import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "../component/pages/Home";
import Detail from "../component/pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;