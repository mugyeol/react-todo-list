import React from "react";
import styled from "styled-components";
import { StCard } from "../UI/Card";

const Header = () => {
  return (
    <StCard>
      <StContainer>
        <div>TodoList</div>
        <div>React</div>
      </StContainer>
    </StCard>
  );
};

export default Header;
const StContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
