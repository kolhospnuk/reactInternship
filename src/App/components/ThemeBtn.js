import React from 'react';
import '../scss/themeBtn.css';
import { ThemeConsumer } from '../../components/Context/ThemeContext';

const ThemeBtn = () => {
  return (
    <ThemeConsumer>
      {({ themeNameBtn, themeClass, toggleTheme }) => (
        <button
          type="button"
          onClick={toggleTheme}
          className={`theme-btn-${themeClass}`}
        >
          {themeNameBtn}
        </button>
      )}
    </ThemeConsumer>
  );
};

export default ThemeBtn;
