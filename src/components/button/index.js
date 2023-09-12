import styled, { css } from "styled-components";

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.color === "primary" ? "#BF4F74" : "white")};
  color: ${(props) => (props.color === "primary" ? "white" : "#BF4F74")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  cursor: pointer;
`;
