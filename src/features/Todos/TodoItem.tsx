import React from "react";
import {TodoItemProps} from "types";

import {TodoWrapperItem} from "./components/TodoWrapperItem";
import {CrossIcon} from "./components/CrossIcon";
import {MarkInteractive} from "./components/MarkInteractive";
import {TodoTitle} from "./components/TodoTitle";
import {useTodosItem} from "./use-TodosItem";

export const TodoItem = ({task, id, completed, onDragStart, onDrop, onDragOver, onDragEnd}: TodoItemProps) => {
  const {handleRemove, handleToggle} = useTodosItem();

  return (
    <TodoWrapperItem
      draggable
      onDragStart={onDragStart}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    >
      <MarkInteractive completed={completed} onClick={() => handleToggle(id)} />
      <TodoTitle completed={completed}>{task}</TodoTitle>
      <CrossIcon onClick={() => handleRemove(id)} />
    </TodoWrapperItem>
  );
}