import React from "react";
import styled from "styled-components";



const Button = (props) => {
  return (
    <StButton
      border = {props.border}
      hover={props.hover}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </StButton>
  );
};

export default Button;
const StButton = styled.button`
    border: 1px solid ${({border})=> border || "burlywood"};
    border-radius: 10px;
    background-color: white;
    padding: 0.5rem 1.25rem;
    cursor: pointer;
    margin: 5px;
  
  &:hover,
  &:active {
    background: ${({hover})=> hover || "skyblue"};
    border-color: ${({hover})=> hover || "skyblue"};
    color: white;
  }
  
  &:focus {
    outline: none;
  }
  

`
