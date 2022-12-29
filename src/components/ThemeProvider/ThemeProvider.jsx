import {React, createContext } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

const themes = {
  pink: {
    color: '#000',
    fill: '#000',
    backgroundColor: '#f9dac7',
    // backgroundImage: 'linear-gradient(45deg, #FBDA61 0%, #ffbaba 100%)',
    bgIcons: '#dfafafb0',
  },
  blue: {
    color: '#000',
    fill: '#000',
    bgIcons: '#dfafaf4d',
    backgroundColor: '#8BC6EC',
    // backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
  },
  purple: {
    color: '#000',
    fill: '#000',
    bgIcons: '#dfafaf4d',
    backgroundColor: '#D9AFD9',
    // backgroundImage: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
  },
  yellow: {
    color: '#000',
    fill: '#000',
    bgIcons: '#b99b9b4d',
    backgroundColor: '#f5f764',
  },
  peach: {
    color: '#000',
    fill: '#000',
    bgIcons: '#dfafaf4d',
    backgroundColor: '#FBAB7E',
    // backgroundImage: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',

  },
};

export const ThemeProvider = ({ children }) => {

  const mainColor = useSelector(state => state.theme.currentPageTheme);
  
  let theme = mainColor;
  
  switch (theme) {
  case "/about":
    theme = themes.purple;
    break;

  case "/portfolio":
    theme = themes.blue;
    break;

  case "/contacts":
    theme = themes.peach;
    break;

  default:
    theme = themes.yellow;
    break;
}

  return (
    <ThemeContext.Provider value={[{ theme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};