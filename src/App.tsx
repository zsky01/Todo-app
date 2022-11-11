import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Main} from "components/Main";
import {Header} from "components/Header";
import {HeaderBackground} from "components/HeaderBackground";
import {TodoList} from "features/Todos/components/TodoList";
import {TodoWithInput} from "features/Todos/components/TodoWithInput";
import {DND} from "components/DND";
import {loadTodos} from "./features/Todos/todoAsyncActions";
import {useAppDispatch, useAppSelector} from "./redux-hook";
import {selectStatusTodo} from "./features/Todos/todoSelectors";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {selectTheme, ThemeSlice} from "./features/Theme/themeSlice";

function App() {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatusTodo);
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    if (status !== 'finished') {
      dispatch(loadTodos(3));
    }
  }, []);

  return (
    <>
      <HeaderBackground />
      <Main>
        <Header />
        <TodoWithInput />
        <Routes>
          <Route path="*" element={<TodoList />} />
        </Routes>
        <DND>Drag and drop to reorder list</DND>
      </Main>
      <ToastContainer theme={theme as ThemeSlice} />
    </>
  );
}

export default App;