import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {themeReducer} from "features/Theme/themeSlice";
import {todoItemReducer} from "features/Todos/todoSlice";
import storage from 'redux-persist/lib/storage';
import * as api from './api';
import {persistReducer, persistStore} from 'redux-persist';
import axios from "axios";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['theme', 'todos'],
};

const rootReducer = combineReducers({
  theme: themeReducer,
  todos: todoItemReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api
        }
      },
      serializableCheck: false
    })
  }
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;