import React, { useContext } from 'react';
import '../scss/themeBtn.css';
import MyContext from '../../../сontext/ThemeContext';

const ThemeBtn = () => {
  const { toggleTheme, themeClass, themeNameBtn } = useContext(MyContext);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-btn-${themeClass}`}
    >
      {themeNameBtn}
    </button>
  );
};

export default ThemeBtn;
