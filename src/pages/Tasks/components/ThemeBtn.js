import React from 'react';
import '../scss/themeBtn.css';
import { ThemeConsumer } from '../../../сontext/ThemeContext';

const ThemeBtn = () => (
  <ThemeConsumer>
    {({ toggleTheme, themeClass, themeNameBtn }) => (
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

export default ThemeBtn;
