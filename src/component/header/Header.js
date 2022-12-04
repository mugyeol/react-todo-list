import React from "react";
import styled from "styled-components";
import Card, { StCard } from "../UI/Card";

const Header = () => {
  return (
    <Card>
      <StContainer>
        <div>TodoList</div>
        <div>React</div>
      </StContainer>
    </Card>
  );
};

export default Header;
const StContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// const StHeaderCard = styled(StCard)`

// margin:30px
// `
// const StContainer = styled.div`
// border: 1px solid #ddd;
// height: 60px;
// display: flex;
// justify-content: space-between;
// align-items: center;
// padding: 0 20px;
// margin-bottom: 24px;
// `;
