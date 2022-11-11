import styled from "styled-components";
import {TodoWrapperItem} from "features/Todos/components/TodoWrapperItem";

const Plug = styled(TodoWrapperItem)`
  text-align: center;
  display: block;
  border-radius: var(--radii) var(--radii) 0 0;
`;

export {Plug};