import styled from "styled-components";

const WrapTodoList = styled.div`
  & > div:first-child {
    border-radius: var(--radii) var(--radii) 0 0;
  }
`;

export {WrapTodoList};