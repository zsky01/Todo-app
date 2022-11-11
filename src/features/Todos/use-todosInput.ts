import {useAppDispatch} from "redux-hook";
import React, {useRef} from "react";
import {addTodo} from "./todoSlice";

const useTodosInput = () => {
  const dispatch = useAppDispatch();
  const inputTodo = useRef<HTMLInputElement>(null);

  const handleEnter = (event: React.KeyboardEvent) => {
    if (event.code === "Enter" || event.code === "NumpadEnter" || event.keyCode === 13) {
      event.preventDefault();
      if (inputTodo.current) {
        const value = inputTodo.current?.value;
        if (value) {
          dispatch(addTodo(value));

          inputTodo.current.value = '';
        }
      }
    }
  };

  return {inputTodo, handleEnter}
};

export {useTodosInput};