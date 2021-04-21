import React from 'react';
import '../scss/themeBtn.css';
import { ThemeConsumer } from '../../components/Context/ThemeContext';

const ThemeBtn = () => {
  return (
    <ThemeConsumer>
      {({ themeClass, toggleTheme, themeNameBtn }) => (
        <button
          type="button"
          className={`theme-btn-${themeClass}`}
          onClick={toggleTheme}
        >
          {themeNameBtn}
        </button>
      )}
    </ThemeConsumer>
  );
};

export default ThemeBtn;
