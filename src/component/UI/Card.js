import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <StCard
      borderColor={props.borderColor}
      backgroundColor={props.backgroundColor}
      margin={props.margin}
    >
      {props.children}
    </StCard>
  );
};

export default Card;

export const StCard = styled.div`
  border: 1px solid
    ${({ borderColor }) => (borderColor === undefined ? "none" : borderColor)};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.26);
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius:20px;
  padding: 20px;
  margin-top:  ${({ margin }) => (margin === undefined ? "20px" : margin)};
`;
