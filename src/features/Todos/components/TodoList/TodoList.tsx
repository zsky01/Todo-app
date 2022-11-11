import {TodoItem} from "features/Todos/TodoItem";
import React from "react";
import {useTodoList} from "./use-todoList";
import {useAppSelector} from "redux-hook";
import {selectActiveTodos, selectAllTodos, selectCompletedTodos} from "features/Todos/todoSelectors";
import {useParams} from "react-router-dom";
import {Filters} from "components/Filters";
import {Plug} from "./Plug";
import {WrapTodoList} from "./WrapTodoList";

const TodoList = () => {
  const {onDragStart, onDrop, onDragOver} = useTodoList();
  const params = useParams();

  const selectMethod = (param: string | undefined) => {
    switch (param) {
      case 'active': {
        return selectActiveTodos;
      }
      case 'completed': {
        return selectCompletedTodos;
      }
      default:
        return selectAllTodos;
    }
  };

  const todos = useAppSelector(selectMethod(params['*']));

  return <>
    {todos.length < 1 && <Plug>Nothing found...</Plug>}
    {todos.length > 0 && <WrapTodoList>
      {todos.map(todo => <TodoItem
        onDragStart={e => onDragStart(e, todo)}
        onDrop={e => onDrop(e, todo)}
        onDragOver={onDragOver}
        key={todo.id}
        {...todo}
      />)}
    </WrapTodoList>}
    <Filters path={params['*']} />
  </>
};

export {TodoList};