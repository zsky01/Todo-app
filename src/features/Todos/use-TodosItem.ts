import {useAppDispatch} from "redux-hook";
import {removeTodo, toggleTodo} from "./todoSlice";

const useTodosItem = () => {
  const dispatch = useAppDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeTodo(id));
  };

  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id));
  }

  return {dispatch, handleRemove, handleToggle}
};

export {useTodosItem};