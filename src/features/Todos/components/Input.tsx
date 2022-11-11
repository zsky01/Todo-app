import styled from "styled-components";

const Input = styled.input.attrs({type: 'text', placeholder: 'Create a new todo...'})`
  width: 100%;
  outline: none;
  border: none;
  background: var(--colors-item-bg);
  padding: 1.3rem 0;
`;

export {Input};