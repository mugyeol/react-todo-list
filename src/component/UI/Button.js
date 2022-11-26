import React from "react";
import styled from "styled-components";

import classes from "./Button.module.css";


const Button = (props) => {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
