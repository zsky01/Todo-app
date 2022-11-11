import styled, {css} from "styled-components";
import {TodoItemProps} from "types";

const TodoTitle = styled.p<Pick<TodoItemProps, "completed">>`
  margin: 0;
  font-size: 1.2rem;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;

  ${props => props.completed && css`
    text-decoration: line-through;
    color: var(--colors-2);
  `}
`;

export {TodoTitle};