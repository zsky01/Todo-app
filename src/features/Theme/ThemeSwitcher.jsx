import styled from "styled-components";
import {useEffect} from "react";
import {selectTheme, setTheme} from "./themeSlice";

import {ReactComponent as SunIcon} from './icon-sun.svg';
import {ReactComponent as MoonIcon} from './icon-moon.svg';
import {useAppDispatch, useAppSelector} from "../../redux-hook";

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  width: 1.5rem;
  cursor: pointer;
`;

const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const toggleTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ModeSwitcher onClick={toggleTheme}>
      {theme === 'light' ? (
        <MoonIcon />
      ) : (
        <SunIcon />
      )}
    </ModeSwitcher>
  );
}

export {ThemeSwitcher};