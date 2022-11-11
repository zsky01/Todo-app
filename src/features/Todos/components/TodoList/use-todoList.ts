import {useAppDispatch} from "redux-hook";
import React, {useState} from "react";
import {reorderTodos} from "features/Todos/todoSlice";
import {TodoItemState} from "types";

const useTodoList = () => {
  const dispatch = useAppDispatch();

  const [currentDragItem, setCurrentDragItem] = useState<TodoItemState | null>(null);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>, todo: TodoItemState) => {
    setCurrentDragItem(todo);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>, todo: TodoItemState) => {
    e.preventDefault();
    if (currentDragItem && todo && currentDragItem !== todo) {
      dispatch(reorderTodos({from: currentDragItem, to: todo}))
      setCurrentDragItem(null);
    }
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return {onDragStart, onDrop, onDragOver};
};

export {useTodoList};