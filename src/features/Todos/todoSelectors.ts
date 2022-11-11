import {RootState} from "store";

export const selectAllTodos = (state: RootState) => state.todos.list;
export const selectActiveTodos = (state: RootState) => state.todos.list.filter(todo => !todo.completed);
export const selectCompletedTodos = (state: RootState) => state.todos.list.filter(todo => todo.completed);
export const selectStatusTodo = (state: RootState) => state.todos.status;