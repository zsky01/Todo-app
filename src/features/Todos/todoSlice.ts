import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import {TodoItemState} from "types";
import {loadTodos} from "./todoAsyncActions";
import {toast} from "react-toastify";

export type TodosSlice = {
  status: 'idle' | 'loading' | 'finished' | 'error';
  list: TodoItemState[];
}

const initialState: TodosSlice = {
  status: 'idle',
  list: [
    {id: nanoid(), task: 'Learn TypeScript', completed: false},
    {id: nanoid(), task: 'Learn React', completed: false},
    {id: nanoid(), task: 'Learn Redux', completed: false},
    {id: nanoid(), task: 'Todo with Redux Persist', completed: false},
    {id: nanoid(), task: 'Todo with React Routes', completed: false},
  ]
}

const todoSlice = createSlice({
  name: '@@todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItemState['task']>) => {
      state.list.push({id: nanoid(), task: action.payload, completed: false});
    },
    removeTodo: (state, action: PayloadAction<TodoItemState['id']>) => {
      return {...state, list: state.list.filter(todo => todo.id !== action.payload)};
    },
    toggleTodo: (state, action: PayloadAction<TodoItemState['id']>) => {
      state.list.map(todo => {
        if (todo.id === action.payload) {
          return todo.completed = !todo.completed;
        }
      });
    },
    reorderTodos: (state, action: PayloadAction<{ from: TodoItemState, to: TodoItemState }>) => {
      let indexFirst = -1;
      let indexSecond = -1;

      for (let i = 0; i < state.list.length; i++) {
        if (action.payload.from.id === state.list[i].id) {
          indexFirst = i;
        } else if (action.payload.to.id === state.list[i].id) {
          indexSecond = i;
        }
      }

      const first = state.list[indexFirst];
      const second = state.list[indexSecond];

      state.list[indexSecond] = first;
      state.list[indexFirst] = second;
    },
    clearCompleted: (state) => {
      toast('Completed todos are cleared');
      return {...state, list: state.list.filter(todo => !todo.completed)};
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadTodos.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(loadTodos.fulfilled, (state, action) => {
      state.status = 'finished';

      const data = action.payload.data;
      data.forEach(todo => {state.list.push({id: nanoid(), task: todo.title, completed: todo.completed})});

      toast(data.length + ' last todos loaded');
    });
    builder.addCase(loadTodos.rejected, (state, action) => {
      state.status = 'error';
      const error = action.payload || action.error.message || 'Cannot load data';
      toast.error(error);
    })
  }
});

export const {addTodo, removeTodo, toggleTodo, reorderTodos, clearCompleted} = todoSlice.actions;
export const todoItemReducer = todoSlice.reducer;