
import styled from "styled-components";


export const StCard = styled.div`
  border: 1px solid
    ${({ borderColor }) => borderColor||"none"};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.26);
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 8px;
  padding: 20px;
  margin:  ${({ margin }) => margin||"20px 0 20px"};
`;
