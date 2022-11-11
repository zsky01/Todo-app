import styled, {css} from "styled-components";
import {Mark} from "./Mark";
import {TodoItemProps} from "types";

const MarkInteractive = styled(Mark)<Pick<TodoItemProps, "completed">>`
  cursor: pointer;

  ${props => !props.completed && css`
      &:hover {
        background: linear-gradient(var(--colors-item-bg), var(--colors-item-bg)) padding-box, var(--bg-gradient) border-box;
        border: 1px solid transparent;
      }
    `}

  ${props => props.completed && css`
      border: none;
      background: var(--bg-gradient);
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      &::after {
        content: url('/images/icon-check.svg');
        margin-bottom: -2px;
      }
    `}
`;

export {MarkInteractive};