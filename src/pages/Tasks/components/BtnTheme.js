import React, { useContext } from 'react';
import styles from '../scss/BtnTheme.module.css';
import MyContext from '../../../сontext/ThemeContext';

const BtnTheme = () => {
  const {
    btnTheme, light, dark
  } = styles;
  const { toggleTheme, themeNameBtn } = useContext(MyContext);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`${btnTheme} ${themeNameBtn === 'Dark theme' ? dark : light}`}
    >
      {themeNameBtn}
    </button>
  );
};

export default BtnTheme;
