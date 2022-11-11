import React from "react";
import {Mark} from "./Mark";
import {Input} from "./Input";
import {TodoWrapper} from "./TodoWrapper";
import {useTodosInput} from "../use-todosInput";
import styled from "styled-components";

const TodoWrapperInput = styled(TodoWrapper)`
  border-radius: var(--radii);
  margin: 1rem 0 1.5rem;

  @media (min-width: 375px) {
    margin: 2.5rem 0 2rem;
  }
`;

const TodoWithInput = () => {
  const {inputTodo, handleEnter} = useTodosInput();

  return <TodoWrapperInput>
    <Mark />
    <Input ref={inputTodo} onKeyDown={handleEnter} />
  </TodoWrapperInput>
}

export {TodoWithInput};