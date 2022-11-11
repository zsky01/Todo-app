import styled from "styled-components";
import {TodoWrapper} from "./TodoWrapper";

const TodoWrapperItem = styled(TodoWrapper)`
  padding: 1.2rem 1rem;
  width: 100%;
  border-bottom: 1px solid var(--colors-1);
  cursor: move;

  @media (min-width: 375px) {
    padding: 1.4rem 1.2rem;
  }
`;

export {TodoWrapperItem};