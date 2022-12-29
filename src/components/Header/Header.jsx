import React, { useContext } from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Navigation from "../Navigation";
import { ThemeContext, getThemeProps} from '../../components/ThemeProvider';
import { changeBgColor } from '../../redux/theme/themeSlice';
import styles from "./Header.module.scss";

export default function Header () {
  const [{theme}] = useContext(ThemeContext);
  const dispatch = useDispatch();

  return (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <NavLink className={styles.logo} to={'/'} style={getThemeProps(theme, "color")} onClick={() => dispatch(changeBgColor('/'))}>Yuliia Pysarenko</NavLink>
      <Navigation />
    </div>
  </header>
  )
}