import {createAsyncThunk} from "@reduxjs/toolkit";
import {Extra, responseApi} from "types";
import {TodosSlice} from "./todoSlice";

export const loadTodos = createAsyncThunk<{ data: responseApi[] }, number, { state: { todos: TodosSlice }, extra: Extra, rejectValue: string }>(
  '@@todos/load-todos',
  async (limit, {
    rejectWithValue, extra: {client, api}
  }) => {
    try {
      return client.get(api.getTodosUrl(limit));
    } catch (error) {
      if (error instanceof Error)
        return rejectWithValue(error.message);
      return rejectWithValue('Unknown error');
    }
  },
  {
    condition: (_, {getState}) => {
      const {todos: {status}} = getState();

      if (status === 'loading') {
        return false;
      }
    }
  }
);